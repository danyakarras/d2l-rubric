/* global suite, test, fixture, expect, suiteSetup, suiteTeardown, sinon, stubWhitelist */

'use strict';

suite('<d2l-rubric-criteria-group>', function() {

	var element, sandbox;

	suiteSetup(function() {
		sandbox = sinon.sandbox.create();
		element = fixture('basic-criteria');
		stubWhitelist();
	});

	suiteTeardown(function() {
		sandbox.restore();
	});

	suite('smoke test', function() {

		test('can be instantiated', function() {
			expect(element.is).to.equal('d2l-rubric-criteria-group');
		});
	});

	suite ('Ally Test',function(){
        suiteSetup(function() {
            element = fixture('basic-criteria');
        });

        test('d2l-rubric checks',test_data);
    });
});
