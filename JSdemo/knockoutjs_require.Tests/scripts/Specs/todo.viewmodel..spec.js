/// <reference path="../../../knockoutjs_require/scripts/knockout-3.3.0.js" />
/// <reference path="../../../knockoutjs_require/scripts/require.js" />
/// <reference path="requireconfig.js" />
/// <reference path="../../../knockoutjs_require/scripts/jsnlog.js" />
/// <reference path="../jasmine.js" />
/// <reference path="../sinon-1.9.1.js" />
/// <reference path="knockout.js" />
/// <reference path="../../../knockoutjs_require/js/viewmodels/todo.js" />
/// <reference path="../../../knockoutjs_require/js/config/global.js" />
/// <reference path="../../../knockoutjs_require/js/models/todo.js" />

/*globals define, describe, expect, it, fixture */

ReSharperReporter.prototype.jasmineDone = function () { };

describe("viewmodel.todo Spec", function () {
    "use strict";

    console.log('todo.viewmodel.spec.js');
    debugger;

    var testModule,
        getJsonStub = ''; //sinon.stub($, 'getJSON').returns(new $.Deferred().resolve(fixture.applicationViewModelData));;

    beforeEach(function (done) {
        if (testModule) {
            done();
            return;
        }

        requirejs(['viewmodels/todo'], function (parser) {
            testModule = parser;
            done();
        });
    });

    afterEach(function () {
        //getJsonStub.restore();
    });


    it("should create knockout todo object", function () {
        var bb = new testModule();
        bb.current = ko.observable('pwre');

        bb.add();
        expect(bb.add()).toBe('test');
        expect(bb.completed()).toBeFalsy();
    });

    xit("applicationService properties are defined", function () {
        expect(testModule.getApplicationData).toBeDefined();
    });

    xit("applicationService properties are defined", function () {
        expect(testModule.getApplicationData).toBeDefined();
    });

   xit('should retrieve the applicationModel Data from Backend', function () {
        testModule.getApplicationData().done(function (data) {
            expect(data).toBeDefined();
            expect(typeof data).toBe(typeof {});
            expect(data.DownPaymentMax).toBe(10);
        });
    });

    xit("getApplicationData return object", function () {
        spyOn($, "ajax").and.callFake(function (options) {
            options.data = { peter: 'test' };
            options.done = true;
        });
        var callback = jasmine.createSpy();
        testModule.getApplicationData();
        expect(callback).toHaveBeenCalled();
        expect(typeof testModule.getApplicationData()).toBe(typeof {});
    });

    xit("getApplicationData object have properties", function () {
        var data = testModule.getApplicationData();
        expect(data.DownPaymentMax).toBe(10);
    });

});

