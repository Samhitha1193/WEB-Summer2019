/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://samhithadb:vijayaraja2@ds241537.mlab.com:41537/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
