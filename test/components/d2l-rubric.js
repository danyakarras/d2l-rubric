/* global suite, test, fixture, expect, suiteSetup, suiteTeardown, sinon, stubWhitelist */

'use strict';
	
suite('<d2l-rubric>', function() {

	var element, sandbox;
	suiteSetup(function(done) {
		sandbox = sinon.sandbox.create();
		element = fixture('basic');

		function waitForLoad(e) {
			element.removeEventListener('d2l-rubric-entity-changed', waitForLoad);
			if (e.detail.entity.getLinkByRel('self').href === 'data/rubrics/organizations/text-only/199.json') {
				done();
			}
		}
		stubWhitelist();
		element.addEventListener('d2l-rubric-entity-changed', waitForLoad);
		element.href = 'data/rubrics/organizations/text-only/199.json';
		element.token = 'foozleberries';
	});

	suiteTeardown(function() {
		sandbox.restore();
	});

	suite('smoke test', function() {

		test('can be instantiated', function() {
			expect(element.is).to.equal('d2l-rubric');
		});

		test('can show content', function() {
			expect(element._showContent).to.be.true;
		});

		test('has no assessment', function() {
			expect(element.assessmentHref).to.be.undefined;
			expect(element._assessmentEntity).to.be.null;
			expect(element._score).to.be.null;
		});
	});

	suite('do not show content until entity loaded', function() {
		suiteSetup(function() {
			element = fixture('basic');
		});

		test('do not show content without href', function() {
			expect(element._showContent).to.be.false;
		});

		test('show content after loading', function(done) {
			element = fixture('basic');
			function waitForLoad(e) {
				if (e.detail.entity.getLinkByRel('self').href === 'data/rubrics/organizations/text-only/199.json') {
					expect(element._showContent).to.be.true;
					element.removeEventListener('d2l-rubric-entity-changed', waitForLoad);
					done();
				}
			}
			element.addEventListener('d2l-rubric-entity-changed', waitForLoad);
			element.href = 'data/rubrics/organizations/text-only/199.json';
			element.token = 'foozleberries';	
			expect(element._showContent).to.be.false;	
		});

		test('check for spinner on page', function() {
			var loaderElement = element.$$('d2l-rubric-loading');
			expect(loaderElement).to.exist;
		});
	});

	suite ('Ally Test',function(){
        suiteSetup(function() {
            element = fixture('basic');
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
