/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb+srv://Samhitha1193:Vijayaraja28*@samhithacluster1-x1aje.mongodb.net/test?retryWrites=true&w=majorityt"; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected correctly to server");
    db.close();
});