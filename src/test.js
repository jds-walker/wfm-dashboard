var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/Data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result.Response.Times[0].Time[0]);
        console.log('Done');
    });
});