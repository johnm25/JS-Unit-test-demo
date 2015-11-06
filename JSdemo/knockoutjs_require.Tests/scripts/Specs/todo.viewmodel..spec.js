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

describe("Viewmodel Todo Spec", function () {
    "use strict";

    console.log('todo.viewmodel.spec.js');

    var testModule;

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
    });


    it("should create knockout todo object", function () {
        var bb = new testModule();
        bb.current = ko.observable('First todo item');
        bb.add();

        expect(bb.todos()[0].title()).toBe('First todo item');
        expect(bb.todos()[0].editing()).toBeFalsy();
        expect(bb.todos()[0].completed()).toBeUndefined();
    });

    it("when adding new item the count of stored items should increase", function () {
        var bb = new testModule();
        bb.current = ko.observable('First todo item');
        bb.add();
        bb.current = ko.observable('2nd todo item');
        bb.add();

        expect(bb.todos().length).toBe(2);
    });

  
   //xit('should retrieve the applicationModel Data from Backend', function () {
   //     testModule.getApplicationData().done(function (data) {
   //         expect(data).toBeDefined();
   //         expect(typeof data).toBe(typeof {});
   //         expect(data.DownPaymentMax).toBe(10);
   //     });
   // });

   // xit("getApplicationData return object", function () {
   //     spyOn($, "ajax").and.callFake(function (options) {
   //         options.data = { peter: 'test' };
   //         options.done = true;
   //     });
   //     var callback = jasmine.createSpy();
   //     testModule.getApplicationData();
   //     expect(callback).toHaveBeenCalled();
   //     expect(typeof testModule.getApplicationData()).toBe(typeof {});
   // });

  
});

