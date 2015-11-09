[assembly: WebActivatorEx.PostApplicationStartMethod(
    typeof(knockoutjs_require.App_Start.JSNLogConfig), "PostStart")]

namespace knockoutjs_require.App_Start
{
    using System;
    using System.Web.Routing;
    using System.Web.Mvc;
    using NLog;

    public static class JSNLogConfig
    {
        public static void PostStart()
        {
            // Insert a route that ignores the jsnlog.logger route. That way, 
            // requests for jsnlog.logger will get through to the handler defined
            // in web.config.
            //
            // The route must take this particular form, including the constraint, 
            // otherwise ActionLink will be confused by this route and generate the wrong URLs.

            var jsnlogRoute = new Route("{*jsnloglogger}", new StopRoutingHandler());
            jsnlogRoute.Constraints = new RouteValueDictionary { { "jsnloglogger", @"jsnlog\.logger(/.*)?" } };
            RouteTable.Routes.Insert(0, jsnlogRoute);

            //var log= LogManager.GetLogger("gg");
            //log.Info("sldfjs sdldld");

        }
    }
}

