/*global define */

define("carService", ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';

        log().info('Car Service instance');

        var service = function () {
            var self = this;

            self.bloodHound = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                // `states` is an array of state names defined in "The Basics"
                remote: {
                    url: 'Service/CarService.svc/GetCars?search=%QUERY',  //'%QUERY' Will be the user input value instead of
                    filter: function (resp) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                        self.inServiceCall = ko.observable(false);
                        return resp;
                    },
                    prepare: function prepare(query, settings) {
                        self.inServiceCall = ko.observable(true);

                        settings.type = 'GET';
                        settings.url = settings.url.replace(new RegExp('%QUERY', 'g'), query);

                        return settings;
                    },
                    wildcard: '%QUERY',
                    cache: false 
                }
            });

            self.bloodHound.initialize();
            self.inServiceCall = ko.observable(false);
        };

        return service;
    });
