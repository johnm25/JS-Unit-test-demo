/*global define */

define('extends/handlers', ['knockout', 'jsnlog'],
    function (ko, log) {
        'use strict';

        log().trace('knockout handlers');

        ko.bindingHandlers.Loading = {
            update: function (element, valueAccessor, allBindingsAccessor) {
                var value = valueAccessor(),
                    allBindings = allBindingsAccessor();

                var valueUnwrapped = ko.utils.unwrapObservable(value);

                //if (valueUnwrapped === true)
                //    $(element).showLoading(); // Make the element visible
                //else
                //    $(element).hideLoading();   // Make the element invisible
            }
        };

    });
