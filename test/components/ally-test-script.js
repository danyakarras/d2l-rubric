test_data = function(){
    
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
        )};