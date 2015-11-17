/*global define */

define("carServiceVariant", ['knockout', 'jsnlog', 'serviceHelper'],
    function (ko, log, helper) {
        'use strict';

        log().trace('Car ServiceVariant');

        var instance = null;

        function CarServiceVariant() {
            if (instance !== null) {
                throw new Error("Cannot instantiate more than one CarServiceVariant, use CarServiceVariant.getInstance()");
            }

            this.initialize();
        }

        CarServiceVariant.prototype = {
            initialize: function () {
                var self = this;
                log().trace('Car ServiceVariant initialize');

                self.inProgressVariant = ko.observable(false);

                self.bloodHound = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    // `states` is an array of state names defined in "The Basics"
                    remote: {
                        url: '/Service/CarService.svc/GetCars?search=%QUERY', //'%QUERY' Will be the user input value instead of
                        filter: function (data) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                            self.inProgressVariant(false);
                            return helper.mapData(data);
                        },
                        prepare: function prepare(query, settings) {
                            self.inProgressVariant(true);
                            settings.type = 'GET';
                            settings.url = settings.url.replace(new RegExp('%QUERY', 'g'), query);
                            return settings;
                        }
                    },
                    wildcard: '%QUERY',
                    cache: false
                });

                self.bloodHound.initialize();
            }
        };

        CarServiceVariant.getInstance = function () {
            // summary:
            //      Gets an instance of the singleton. It is better to use 
            if (instance === null) {
                instance = new CarServiceVariant();
            }
            log().info('Car Service Variant instance');
            return instance;
        };

        return CarServiceVariant.getInstance();
    });
