/// <reference path="../../../knockoutjs_require/scripts/knockout-3.3.0.js" />
/// <reference path="../../../knockoutjs_require/scripts/require.js" />
/// <reference path="requireconfig.js" />
/// <reference path="../../../knockoutjs_require/scripts/jsnlog.js" />
/// <reference path="../jasmine.js" />
/// <reference path="../sinon-1.9.1.js" />
/// <reference path="knockout.js" />
/// <reference path="../../../knockoutjs_require/js/models/todo.js" />

/*globals define, describe, expect, it, fixture */

//ReSharperReporter.prototype.jasmineDone = function () { };

describe("Model todo Spec", function () {
    "use strict";

    console.log('model.todo.spec.js');

    var testModule;

    beforeEach(function (done) {
        if (testModule) {
            done();
            return;
        }

        requirejs(['models/todo'], function (parser) {
            testModule = parser;
            done();
        });
    });

    afterEach(function () {
    });


    it("should create knockout todo object", function () {
        var bb = new testModule('test', false);
        expect(bb.title()).toBe('test');
        expect(bb.completed()).toBeFalsy();
    });

});

