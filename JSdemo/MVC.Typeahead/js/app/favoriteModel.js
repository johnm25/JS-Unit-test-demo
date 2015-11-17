/*global define */

define("favoriteModel", ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';
        //debugger;
        log().info('favorites Model instance');

        var vm = function (title, favorite) {
            this.title = ko.observable(title);
            this.favorite = ko.observable(favorite);
        };

        return vm;
    });
