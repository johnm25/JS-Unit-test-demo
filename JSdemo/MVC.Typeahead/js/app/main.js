/*global require, window */

require(['knockout', 'carController', 'jsnlog', 'typeaheadHandler'],
    function (ko, CarController, log) {
        'use strict';

        log().trace('Application started');

        //// var app_view = new AppView();
        //// check local storage for todos
        //var todos = ko.utils.parseJson(window.localStorage.getItem(g.localStorageItem));


        var fav = [
            { title: "C4", favorite: true },
            { title: "115", favorite: true },
            { title: "A4", favorite: true }
        ];

        // bind a new instance of our view model to the page
        ko.applyBindings(new CarController(fav));
    });

(function() {
    'use strict';

    // Logging
    window.__jsnlog_configure = function(JL) {

        // unhandle errors
        window.onerror = function myErrorHandler(errorMsg, url, lineNumber, column,  errorObj) {
            JL().fatalException({
                "msg": "Exception!",
                "errorMsg": errorMsg,
                "url": url,
                "line number": lineNumber,
                "column": column
            }, errorObj);
            return false;
        }

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
})();