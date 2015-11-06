/*global define */

define("models/todo", ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';

        log().info('model/Todo instance');

        debugger;

        // represent a single todo item
        var Todo = function (title, completed) {
            this.title = ko.observable(title);
            this.completed = ko.observable(completed);
            this.editing = ko.observable(false);
        };

        return Todo;
    });
