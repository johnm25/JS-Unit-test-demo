/*global define */

define("carModel", ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';

        log().info('Car Model class');

        var vm = function (item) {
            var self = this;

            self.id = ko.observable();
            self.model = ko.observable();
            self.brand = ko.observable();
            self.variant = ko.observable();
            self.regNo = ko.observable();
            self.stelNo = ko.observable();
            self.regDate = ko.observable();

            item = item || {};

            if (item.id) {
                self.id = ko.observable(item.id);
            }
            if (item.model) {
                self.model = ko.observable(item.model);
            }
            if (item.brand) {
                self.brand = ko.observable(item.brand);
            }
            if (item.variant) {
                self.variant = ko.observable(item.variant);
            }
            if (item.regNo) {
                self.regNo = ko.observable(item.regNo);
            }
            if (item.stelNo) {
                self.stelNo = ko.observable(item.stelNo);
            }
            if (item.regDate) {
                self.regDate = ko.observable(item.regDate);
            }
        };

        return vm;
    });
