/// <reference path="../jasmine.js" />
/// <reference path="../../../knockoutjs_require/scripts/require.js" />
/// <reference path="requireconfig.js" />



/*globals define, describe, expect, it, fixture */

ReSharperReporter.prototype.jasmineDone = function () { };

describe("Dummy Spec", function () {
    "use strict";

    console.log('dummy.spec.js');

    it("applicationService properties are defined", function () {
        expect(window.alert).toBeDefined();
    });   
});

