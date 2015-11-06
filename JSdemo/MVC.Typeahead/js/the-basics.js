$(function () {
    "use strict";

    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];


    var houndStates = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        local: states
    });


    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        //display: 'item',
        source: houndStates,
        //source: substringMatcher(states)
        templates: {
            empty: [
                '<div class="empty-message">',
                'unable to find any match the current query',
                '</div>'
            ].join('\n'),
            header: '<h3 class="league-name">Header</h3>',
            footer: '<h3 class="league-name">Footer</h3>',
            suggestion: Handlebars.compile('<div><strong>{{this}}</strong> – hello</div>')
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
            success: function (result) {

                debugger;
            },
            error: function ServiceFailed(result) {
                alert('Service call failed: ' + result.status + '' + result.statusText);
            }
        });
    }

    xx();
});
