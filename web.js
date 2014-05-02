var path = require('path');
var express = require('express');
var GoogleSpreadsheet = require("google-spreadsheet");

var app = express();
app.use(express.logger());

// provide an API endpoint for the web client to get locations
app.get('/api/location', function (req, res) {
    // create a new GoogleSpreadsheet object with the key of our Lemonade Stand Locations spreadsheet
    var spreadsheet = new GoogleSpreadsheet('1MxOkAmSITKl6dKSQjkUkU72UcXPykTfn2Eae5BsL5pA');
    // query the Google Spreadsheets API to get worksheet info
    spreadsheet.getInfo(function (err, info) {
      // get the rows of the first worksheet
      info.worksheets[0].getRows(function (err, rows) {
        // find row that has an 'x' for today
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          if (row.today.toLowerCase() === 'x') {
            // build response data structure
            var location = {
              lat: row.lat,
              long: row.long,
              description: row.description
            };
            // sent it!
            res.json(location);
            // return so we don't attempt to send the empty response as well
            return;
          }
        }

        // nothing was found, so return an empty object
        res.json({});
      });
    });
});

// serve up files in the 'public' folder as static content
// these files are basically the client-side 'app'
app.use(express.static(path.join(__dirname, 'public')));

// start listening for web requests, by default on port 5001
var port = process.env.PORT || 5001;
app.listen(port, function() {
    console.log("Listening on " + port);
});
