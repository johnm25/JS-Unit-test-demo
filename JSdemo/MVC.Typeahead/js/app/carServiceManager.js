/*global define */

define("carServiceManager", ['knockout', 'jsnlog', 'carServiceVariant', 'carServiceRegistration', 'carServiceVIN'],
    function (ko, log, variantService, regService, vinService) {
        'use strict';

        log().trace('Car ServiceManager');

        var instance = null;

        function CarServiceManager() {
            if (instance !== null) {
                throw new Error("Cannot instantiate more than one ServiceManager, use ServiceManager.getInstance()");
            }

            this.initialize();
        }

        CarServiceManager.prototype = {
            initialize: function () {
                debugger;
                var self = this;
                log().trace('Car ServiceManager initialize');

                self.inProgressVariant = variantService.inProgressVariant;
                self.inProgressReg = regService.inProgressReg;
                self.inProgressVin = vinService.inProgressVin;

                self.bloodHoundVariant = variantService.bloodHound;
                self.bloodHoundReg = regService.bloodHound;
                self.bloodHoundVin = vinService.bloodHound;
            },

            current: {}
        }

        CarServiceManager.getInstance = function () {
            // summary:
            //      Gets an instance of the singleton. It is better to use 
            if (instance === null) {
                instance = new CarServiceManager();
            }
            log().info('Car ServiceManager instance');
            return instance;
        };

        return CarServiceManager.getInstance();
    });
