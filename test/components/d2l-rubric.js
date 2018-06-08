/* global suite, test, fixture, expect, suiteSetup, suiteTeardown, sinon */

'use strict';
	
suite('<d2l-rubric>', function() {

	var element, sandbox;
	function myAsyncFunction(callback) {
		// 500ms delay before callback
		setTimeout(function() {
		  callback(element);
		}, 500);
	  }

	suiteSetup(function() {
		sandbox = sinon.sandbox.create();
		element = fixture('basic');
	});

	suiteTeardown(function() {
		sandbox.restore();
	});

	suite('smoke test', function() {

		test('can be instantiated', function() {
			expect(element.is).to.equal('d2l-rubric');
		});

		test('should do something that creates some UI', function (done) {
			// var fixtureScope = document.querySelector('some selector');
	
			// do stuff with the fixture
			myAsyncFunction(function(element){
				attest.init('wcag2aa', function () {
					// done();
				})
				var my_context;
				my_context = Polymer.dom(element.root)
				
				attest.run(my_context,function (err, results) {
					console.log(results.violations[0].tags);
					expect(results.violations).to.equal('hi');
					
				});
				done();
			});
		});

	});
});
