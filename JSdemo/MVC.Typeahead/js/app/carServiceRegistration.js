/*global define */

define("carServiceRegistration", ['knockout', 'jsnlog', 'serviceHelper'],
    function(ko, log, helper) {
        'use strict';

        log().trace('Car Service Registration');

        var instance = null;

        function CarServiceRegistration() {
            if (instance !== null) {
                throw new Error("Cannot instantiate more than one CarService Registration, use CarServiceRegistration.getInstance()");
            }

            this.initialize();
        }

        CarServiceRegistration.prototype = {
            initialize: function () {
                var self = this;
                log().trace('Car Service Registration initialize');

                self.remote = null;

                self.inProgressReg = ko.observable(false);

                self.bloodHound = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    // `states` is an array of state names defined in "The Basics"
                    remote: {
                        url: '/Service/CarService.svc/GetCarRegistration?search=%QUERY',  //'%QUERY' Will be the user input value instead of
                        filter: function (data) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                            self.inProgressReg(false);
                            return helper.mapData(data);
                        },
                        prepare: function prepare(query, settings) {
                            self.inProgressReg(true);
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

        CarServiceRegistration.getInstance = function () {
            // summary:
            //      Gets an instance of the singleton. It is better to use 
            if (instance === null) {
                instance = new CarServiceRegistration();
            }
            log().info('Car Service Registration instance');
            return instance;
        };

        return CarServiceRegistration.getInstance();
    });
