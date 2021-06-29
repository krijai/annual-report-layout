var Mustache = require('mustache');

$(document).ready(function(){ 
    var template = $('#test').html();
    var output = $('#root-data');
  
    var data = {
        "reports": [
            { "year": "2019" },
            { "year": "2018" },
            { "year": "2017" },
            { "year": "2016" },
            { "year": "2015" },
            { "year": "2014" },
            { "year": "2013" }
        ]
    };
  
    var result = Mustache.render(template, data);
    
    output.append(result);
  
});