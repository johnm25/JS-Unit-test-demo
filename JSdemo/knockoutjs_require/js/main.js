/*global require, window */

require( ['knockout', 'config/global', 'viewmodels/todo', 'jsnlog', 'extends/handlers'],
    function (ko, g, TodoViewModel, log) {
        'use strict';

        log().trace('Application started');

        // var app_view = new AppView();
        // check local storage for todos
        var todos = ko.utils.parseJson(window.localStorage.getItem(g.localStorageItem));

        // bind a new instance of our view model to the page
        ko.applyBindings(new TodoViewModel(todos || []));
    });
