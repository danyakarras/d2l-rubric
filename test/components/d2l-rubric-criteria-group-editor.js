/* global suite, test, fixture, expect, suiteSetup, suiteTeardown, sinon, stubWhitelist */

'use strict';

suite('<d2l-rubric-criteria-group-editor>', function() {

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
			expect(element.is).to.equal('d2l-rubric-criteria-group-editor');
		});
	});

	suite ('Ally Test',function(){
        suiteSetup(function() {
            element = fixture('basic-criteria');
        });

        test('d2l-rubric checks',function(){
            //disable a few rules that don't apply to our component
            var rules_options = {
                "rules":{
                    'html-has-lang':{enabled:false},
                    'landmark-one-main':{enabled:false},
                    'page-has-heading-one':{enabled:false},
                    'region':{enabled:false}
                }
            }
            let my_res = '_UNSET';
            return attest.run(rules_options).then(
                function(results){
                    my_res = results;
                    expect(results.violations.length).to.equal(0);
                })
                .catch(
                    function (err){
                        var i;
                        for (i=0; i < my_res.violations.length; i++) {
                            console.log(JSON.stringify(my_res.violations[i]));
                        }
                        throw err
                    }
                )
        });
    });
});
