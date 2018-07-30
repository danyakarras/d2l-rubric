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

        suiteSetup(function(done) {
			element = fixture('basic-criteria');
			function waitForLoad(e) {
				if (e.detail.entity.getLinkByRel('self').href === 'static-data/rubrics/organizations/text-only/199/groups/176.json') {
					element.removeEventListener('d2l-rubric-entity-changed', waitForLoad);
					done()	
		  }
			}
			element.addEventListener('d2l-rubric-entity-changed', waitForLoad);
			element.href = 'static-data/rubrics/organizations/text-only/199/groups/176.json';
			element.token = 'foozleberries';			
		});

		test('d2l-rubric-criteria-groups ally checks',function(){
			return ally_tests(200);
		});
	});
});
