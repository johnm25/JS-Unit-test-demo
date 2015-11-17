/*global define */

define("carServiceVIN", ['knockout', 'jsnlog', 'serviceHelper'],
    function (ko, log, helper) {
        'use strict';

        log().trace('Car ServiceVIN');
        debugger;
        var instance = null;

        function CarServiceVIN() {
            if (instance !== null) {
                throw new Error("Cannot instantiate more than one CarServiceVIN, use CarServiceVIN.getInstance()");
            }

            this.initialize();
        }

        CarServiceVIN.prototype = {
            initialize: function () {
                var self = this;
                log().trace('Car ServiceVIN initialize');

                self.inProgressVin = ko.observable(false);

                self.bloodHound = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    // `states` is an array of state names defined in "The Basics"
                    remote: {
                        url: '/Service/CarService.svc/GetCarRegistration?search=%QUERY',  //'%QUERY' Will be the user input value instead of
                        filter: function (data) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                            self.inProgressVin(false);
                            return helper.mapData(data);
                        },
                        prepare: function prepare(query, settings) {
                            self.inProgressVin(true);
                            settings.type = 'GET';
                            settings.url = settings.url.replace(new RegExp('%QUERY', 'g'), query);
                            return settings;
                        }
                    },
                    wildcard: '%QUERY',
                    cache: false
                });
            }
        };

        CarServiceVIN.getInstance = function () {
            // summary:
            //      Gets an instance of the singleton. It is better to use 
            if (instance === null) {
                instance = new CarServiceVIN();
            }
            log().info('Car Service VIN instance');
            return instance;
        };

        return CarServiceVIN.getInstance();
    });
