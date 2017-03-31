var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join('.','pub')));
app.get('*', (req,res) => {
    var p = path.resolve(path.join('.','pub','index.html'));
    return res.sendFile(p);
});

app.listen(3000, _ => {
    console.log('listening on 3000');
}); 