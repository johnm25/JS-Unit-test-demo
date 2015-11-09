/*global define */

define("carModel", ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';

        log().info('Car Model instance');

        var vm = function (title, completed) {
            this.title = ko.observable(title);
            this.completed = ko.observable(completed);
            this.editing = ko.observable(false);
        };

        return vm;
    });
