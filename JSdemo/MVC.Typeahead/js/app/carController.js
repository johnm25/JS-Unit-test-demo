/*global define */

define("carController", ['knockout', 'carModel', 'carService', 'jsnlog'],
    function (ko, Model, Service, log) {
        'use strict';

        log().info('car Controller');
        var carService = new Service();

        var ctrl = function () {
            var self = this;
            debugger;
            self.current = ko.observable();
            self.name = ko.observable('hello;');
            self.isLoading = carService.inServiceCall;
        };

        return ctrl;
    });
