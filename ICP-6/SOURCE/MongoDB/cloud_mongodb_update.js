/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Samhitha1193:Vijayaraja28*@samhithacluster1-x1aje.mongodb.net/test?retryWrites=false&w=majority";
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
