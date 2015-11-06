/*globals require */

// Require.js allows us to configure shortcut alias

    require.config({
    urlArgs: "bust=" + new Date().getTime(),
    paths: {
        knockout: 'knockout',
        jsnlog: '../../../knockoutjs_require/scripts/jsnlog',
        'models/todo': '../../../knockoutjs_require/js/models/todo',
        'viewmodels/todo': '../../../knockoutjs_require/js/viewmodels/todo',
        'config/global': '../../../knockoutjs_require/js/config/global'
    }
});

// Logging
window.__jsnlog_configure = function (JL) {

    // unhandle errors
    window.onerror = function myErrorHandler(errorMsg, url, lineNumber, errorObj) {
        JL().fatalException({
            "msg": "Exception!",
            "errorMsg": errorMsg,
            "url": url,
            "line number": lineNumber,
            "column": column
        }, errorObj);
        return false;
    };

    // logs to just the console
    var consoleAppender = JL.createConsoleAppender('consoleAppender');
    var ajaxAppender = JL.createAjaxAppender('ajaxAppender');
    // Set options on an appender
    ajaxAppender.setOptions({
        "bufferSize": 1,
        "storeInBufferLevel": JL.getTraceLevel(),
        "level": JL.getTraceLevel(),
        "sendWithBufferLevel": JL.getTraceLevel()
    });

    JL().setOptions({
        "requestId": "35F7416D-86F1-47FA-A9EC-547FFF510086",
        "level": JL.getTraceLevel(),
        "appenders": [consoleAppender, ajaxAppender]
    });
};