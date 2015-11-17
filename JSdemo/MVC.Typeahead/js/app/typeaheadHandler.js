/*global define */

define('typeaheadHandler', ['knockout', 'jsnlog', 'carModel', 'carServiceManager'],
    function (ko, log, model, mgr) {
        'use strict';

        log().trace('knockout handlers');

        ko.bindingHandlers.typeahead = {
            init: function (element, valueAccessor) {
                log().trace('typeahead init');
                //debugger;
                var options = ko.unwrap(valueAccessor()) || {},
                    $el = $(element),
                    triggerChange = function (ev, obj) {
                        log().trace('typeahead triggerChange');
                        mgr.current = new model(obj);
                        $el.change();
                    }
                //options.source = options.taOptions.ttAdapter();
                //log().trace('options local set - ', options.taOptions.ttAdapter);

                //var houndStates = new Bloodhound({
                //    datumTokenizer: Bloodhound.tokenizers.whitespace,
                //    queryTokenizer: Bloodhound.tokenizers.whitespace,
                //    // `states` is an array of state names defined in "The Basics"
                //    remote: {
                //        url: '/Service/CarService.svc/GetCars?search=%QUERY',  //'%QUERY' Will be the user input value instead of
                //        filter: function (resp) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                //            return resp;
                //        },
                //        prepare: function prepare(query, settings) {
                //            settings.type = 'GET';
                //            settings.url = settings.url.replace(new RegExp('%QUERY', 'g'), query);
                //            return settings;
                //        },
                //        wildcard: '%QUERY',
                //        cache: false //NEW!
                //    }
                //});

                //houndStates.initialize();
                //debugger;
               

                var ajaxSource = getAjaxSource(options.type);

                function getAjaxSource(type) {
                    if (type === "variant") {
                        return mgr.bloodHoundVariant;
                    } else if (type === "vin") {
                        return mgr.bloodHoundVin;
                    } else if (type === "registration") {
                        return mgr.bloodHoundReg;
                    } else {
                        log().error('AjasxSource Unknown type=' + type);
                    }

                }

                var xx = {
                    hint: true,
                    highlight: true,
                    minLength: 1
                };

                var pp = {
                    name: options.name,
                    display: function (x) {
                        return options.display(x);
                    },
                    //display: function (car) {
                    //    return car.Brand + ' ' + car.Model + ' ' + car.Variant;
                    //},
                    limit: 20,
                    identify: function (car) { return car.Id; },
                    source: ajaxSource,
                    templates: {
                        empty: [
                            '<div class="empty-message">',
                            'Ingen fundet',
                            '</div>'
                        ].join('\n'),
                        //header: '<h3 class="league-name">Header</h3>',
                        //footer: '<h3 class="league-name">Footer</h3>',
                        suggestion: Handlebars.compile('<div><strong>{{this.brand}} {{this.model}} {{this.variant}}</strong><br/>Reg.Date {{this.regDate}} – id={{this.id}}</div>')
                    }
                };

                $el.typeahead(xx, pp)
                    .on("typeahead:selected", triggerChange)
                    .on("typeahead:autocompleted", triggerChange);

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    log().trace('typeahead destroy');
                    $el.typeahead("destroy");
                    $el = null;
                });
            }
        };          
    });
