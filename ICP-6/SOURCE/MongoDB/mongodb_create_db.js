/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Samhitha1193:Vijayaraja28*@samhithacluster1-x1aje.mongodb.net/test?retryWrites=true&w=majorityt";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});