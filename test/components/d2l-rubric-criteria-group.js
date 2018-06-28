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
			flush(function(){
				done();
			});
			console.log(element.querySelector('d2l-tr').class)
			// 	function waitForLoad(e) {
					
			// 		// if ( Polymer.dom(element.root).querySelectorAll('.criteria').length !== 0) {
			// 		// 	console.log(Polymer.dom(element.root).querySelectorAll('.criteria'))
			// 		if (e.detail.entity.getLinkByRel('self').href === 'data/rubrics/organizations/text-only/199/groups.json') {
			// 			element.removeEventListener('d2l-rubric-entity-changed', waitForLoad);
						
			// 		}
			// 	}
			// 	stubWhitelist();
			// 	element.addEventListener('d2l-rubric-entity-changed', waitForLoad);
			// 	// element.href = 'data/rubrics/organizations/text-only/199/groups.json';
			// 	element.token = 'foozleberries';
				

			// 	var my_rows = Polymer.dom(element.root).querySelectorAll('.criteria');
			// 	for (var i =0; i < my_rows.length; i++){
			// 		console.log(my_rows[i])
			// 	}
			// 	done();
			// });
			
        });

        test('d2l-rubric checks',test_data);
    });
});
