$(function () {
    "use strict";

    var spinner = new Spinner();

    var houndStates = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        remote: {
            url: 'Service/CarService.svc/GetCars?search=%QUERY',  //'%QUERY' Will be the user input value instead of
            filter: function (resp) { //The server may not be directly to the JSON array method returns the search results. If not specified, the search results in a path in JSON. 
                spinner.stop();
                return resp;
            },
            prepare: function prepare(query, settings) {
                settings.type = 'GET';
                settings.url = settings.url.replace(new RegExp('%QUERY', 'g'), query);

                spinner.spin(document.getElementById('x'));
                
                return settings;
            },
            wildcard: '%QUERY',
            cache: false //NEW!
    }
    });

    houndStates.initialize();

    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        display: function (car) {
            return car.Brand + ' ' + car.Model + ' ' + car.Variant;
        },
        identify: function (car) { return car.Id; },
        source: houndStates,
        templates: {
            empty: [
                '<div class="empty-message">',
                'unable to find any match the current query',
                '</div>'
            ].join('\n'),
            header: '<h3 class="league-name">Header</h3>',
            footer: '<h3 class="league-name">Footer</h3>',
            suggestion: Handlebars.compile('<div><strong>{{this.Brand}} {{this.Model}} {{this.Variant}}</strong> – id={{this.Id}}</div>')
        }
    });

    Handlebars.registerHelper("debug", function (optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);

        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });
    var xx = function CallService() {
        $.ajax({
            type: "GET", //GET or POST or PUT or DELETE verb
            url: "Service/CarService.svc/GetCars", // Location of the service
            data: "", //Data sent to server
            contentType: "application/json; charset=utf-8", // content type sent to server
            dataType: "json", //Expected data format from server
            processdata: true, //True or False
        })
        .done(function (result) {

            debugger;
        })
        .error(function ServiceFailed(result) {
            alert('Service call failed: ' + result.status + '' + result.statusText);
        });
    }

    //xx();
});
