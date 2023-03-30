var express = require("express");
var app = express();
// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017";//"mongodb+srv://shubhambasotiya:shubham%40123S@cluster0.iuz93vw.mongodb.net/?retryWrites=true&w=majority";//"mongodb://127.0.0.1:27017";
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });  
const PORT = process.env.PORT || 5000;
// var cookieParser = require('cookie-parser');
// const { response } = require("express");
// const { addAbortSignal } = require("stream");
// const { rmSync } = require("fs");
// var { response } = require("express");


app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shubhambasotiya:shubham%40123S@cluster0.iuz93vw.mongodb.net/?retryWrites=true&w=majority";//"mongodb://127.0.0.1:27017";//"mongodb+srv://shubhambasotiya:shubham%40123S@cluster0.iuz93vw.mongodb.net/?retryWrites=true&w=majority";//"mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);




app.get('/index.js', urlencodedParser, (req, res) => {
    console.log("chck block");
    normalData = {
        check:req.query.check,
    };
    console.log(normalData.check);
    // console.log(new Date());
    if(normalData.check !== undefined){
    $cratedDate = new Date();
    console.log($cratedDate);
        /*
        try{
            MongoClient.connect(url, function(err, db){
                console.log("mongodb");
                if (err) throw err;
                var dbo = db.db("task_tracker");
                dbo.collection("taskData").findOne({taskcreation: {$lte: $createdDate}}, function(err, result){
                    if (err) throw err;
                        res.json(result);
                        // db.close();     
                });
            });
        } catch(e){
            console.error(e);
        }
        */
       /*
        client.connect(err => {
            if(err) {
                return console.log("Error", err);
            }
            console.log("connect block");
            const collection = client.db("another_task").collection("another_tracker");
            // perform actions on the collection object
            collection.findOne({taskcreation: {$lte: $createdDate}}, function(err, result){
                if (err) throw err;
                    res.json(result);
            // client.close();
            });
          });
        */
        async function run() {
        try {
            const getdatabase = client.db('task_tracker');
            const gettaskDatas = getdatabase.collection('taskData');
            // Query for a movie that has the title 'Back to the Future'
            const getquery = {taskcreation: {$gte: $cratedDate}};//{ title: 'Back to the Future' };
            const gettaskData = await gettaskDatas.findOne(getquery);
            res.json(gettaskData);
            console.log(gettaskData);
        } finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
        }
        run().catch(console.dir);
    } 
    
    // next();
});


app.post('/index.js', urlencodedParser,function(req, res){
    console.log("submit data block 2");
    if(req.body.taskname !== null || req.body.taskname !== undefined || req.body.taskdescription !== null || req.body.taskdescription !== undefined)
    {
        $createdDate = new Date();
        console.log($createdDate);
        $createdDate = new Date($createdDate.setHours(1));
        $createdDate = new Date($createdDate.setMinutes(0));
        $createdDate = new Date($createdDate.setSeconds(0));

    responsed = {
        taskname:req.body.taskname,
        taskdescription:req.body.taskdescription,
        taskcreation: $createdDate,
        taskduration:req.body.taskduration
    };
    console.log(responsed);
    // let data = [];
    /*
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
        var dbo = db.db("task_tracker");
        dbo.collection("taskData").insertOne(responsed,function(err, result){
            if (err) throw err;
                res.json(responsed.taskduration);
                console.log({_id: result.insertedId, timeduration: responsed.taskduration});
                // db.close();     
        });
    });
    */
   /*
    client.connect(err => {
        if(err) throw err;
        const collection = client.db("another_task").collection("another_tracker");
        // perform actions on the collection object
        collection.insertOne(responsed,function(err, result){
            if (err) throw err;
                res.json(responsed.taskduration);
                console.log({_id: result.insertedId, timeduration: responsed.taskduration});
        // client.close();
        });
      });
      */

      async function run() {
        try {
            const postdatabase = client.db('task_tracker');
            const posttaskDatas = postdatabase.collection('taskData');
            // Query for a movie that has the title 'Back to the Future'
            const postquery = responsed;//{ title: 'Back to the Future' };
            const posttaskData = await posttaskDatas.insertOne(postquery);
            res.json(responsed.taskduration);
            console.log(posttaskData);
        } finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
        }
        run().catch(console.dir);

    } else{
       
        cosole.log("data not inserted into database");
    }
});

app.put('/index.js', urlencodedParser, function(req, res){
    console.log("update block");
    if(req.body.incre !== null || req.body.incre !== undefined){
        updateData = {
            taskduration: req.body.updateDuration
        }
        console.log(updateData);
        /*
        MongoClient.connect(url, function(err, db){
            if (err) throw err;
            var dbo = db.db("task_tracker");
            dbo.collection("taskData").update({}, {$set:updateData},function(err, result){
                if (err) throw err;
                    res.json(updateData.taskduration);
                    // db.close();
            });
        });
        */
        /*
        client.connect(err => {
            if(err) throw err;
            const collection = client.db("another_task").collection("another_tracker");
            // perform actions on the collection object
            collection.update({}, {$set:updateData},function(err, result){
                if (err) throw err;
                    res.json(updateData.taskduration);
                    // db.close();
            // client.close();
            });
        });
        */

        async function run() {
            try {
                const putdatabase = client.db('task_tracker');
                const puttaskDatas = putdatabase.collection('taskData');

                // create a filter for a movie to update
                const putfilter = {};

                const putupdateDoc = {
                    $set: {
                        updateData
                    },
                  };

                const puttaskData = await puttaskDatas.updateMany(putfilter, putupdateDoc);
                res.json(updateData.taskduration);
                console.log(puttaskData);
            } finally {
                // Ensures that the client will close when you finish/error
                // await client.close();
            }
            }
            run().catch(console.dir);

    }
});

app.delete('/index.js', urlencodedParser, function(req, res){
    console.log("update block");
    if(req.body.remove !== null || req.body.remove !== undefined){
        /*
        MongoClient.connect(url, function(err, db){
            if(err) throw err;
            var dbo = db.db("task_tracker");
            dbo.collection("taskData").deleteMany({}, function(err, result){
                if(err) throw err;
                res.json(result["deletedCount"]);
                // db.close();
            });
        });
        */
       /*
        client.connect(err => {
            if(err) throw err;
            const collection = client.db("another_task").collection("another_tracker");
            // perform actions on the collection object
            collection.deleteMany({}, function(err, result){
                if(err) throw err;
                res.json(result["deletedCount"]);
            // client.close();
          });
        });
        */

        async function run() {
            try {
                const deletedatabase = client.db('task_tracker');
                const deletetaskDatas = deletedatabase.collection('taskData');
                // Query for a movie that has the title 'Back to the Future'
                const deletequery = {};//{ title: 'Back to the Future' };
                const deletetaskData = await deletetaskDatas.deleteMany(deletequery);
                res.json(deletetaskData["deletedCount"]);
                console.log(deletetaskData);
            } finally {
                // Ensures that the client will close when you finish/error
                // await client.close();
            }
            }
            run().catch(console.dir);
    }
});

app.use(express.static(path.join(__dirname, "public")));

var server = app.listen(PORT,function(){
    console.log("conncet");
    // console.log(req.app);
    
});
