/*global define */

define("carController", ['knockout', 'jsnlog', 'carModel', 'carServiceManager', 'favoriteModel'],
    function (ko, log, CarModel, mgr, FavoriteModel) {
        'use strict';

        debugger;

        log().info('car Controller');

        var setSelected = function (selected, obj) {
            selected.id(obj.id());
            selected.model(obj.model());
            selected.brand(obj.brand());
            selected.variant(obj.variant());
            selected.regDate(obj.regDate());
            selected.regNo(obj.regNo());
            selected.stelNo(obj.stelNo());
        };

        var ctrl = function (favList) {
            var self = this;
            debugger;
            self.vm = new CarModel();
            self.selected = self.vm;

            self.isLoadingVariant = mgr.inProgressVariant;
            self.isLoadingRegNo = mgr.inProgressReg;
            self.isLoadingStelNo = mgr.inProgressVin;

            self.clearRegNo = function (xx, yy, zz) {
                self.vm.regNo = ko.observable();
            };

            self.changeReg = function (xx, yy) {
                //debugger;
                var bb = mgr.current;
                setSelected(self.selected, bb);
            };
            self.changeVin = function (xx, yy) {
                //debugger;
                var bb = mgr.current;
                setSelected(self.selected, bb);
            };
            self.changeVariant = function (xx, yy) {
                //debugger;
                var bb = mgr.current;
                setSelected(self.selected, bb);
            };

            self.displayVariant = function (xx) {
                return xx.brand + ' ' + xx.model + ' ' + xx.variant;
            };
            self.displayVIN = function (xx) {
                return xx.stelNo;
            };
            self.displayRegNo = function (xx) {
                return xx.regNo;
            };

            // map array of passed in favList to an observableArray of favList objects
            self.favorites = ko.observableArray(ko.utils.arrayMap(favList, function (fav) {
                return new FavoriteModel(fav.title, fav.favorite);
            }));
        };

        return ctrl;
    });
