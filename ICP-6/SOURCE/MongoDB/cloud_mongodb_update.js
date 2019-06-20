/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://samhithadb:vijayaraja2@ds241537.mlab.com:41537/student';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "Apple"} };
    var myoptions = { multi: true };
    dbase.collection("newCollection").updateMany(myquery, newvalues, myoptions, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
