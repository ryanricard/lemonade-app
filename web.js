var path = require('path');
var express = require('express');

var app = express();
app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5001;
app.listen(port, function() {
    console.log("Listening on " + port);
});
