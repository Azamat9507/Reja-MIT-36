console.log("Web Serverni boshlash");
const express = require("express");
const app = express();



// MongoDB chaqirish
const db = require("./server").db();
const mongoDb = require("mongodb");

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3 Views code

app.set('views', 'views');
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });   
});
//Delete qilish mantiqi
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne({_id: new mongoDb.ObjectId(id)}, function(err, data) {
        res.json({state: "success"});
    });
});


app.get("/", function (req, res) {
   console.log("user entered 2/");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else{
            
            res.render("reja", {items: data});
        }
    });
});

app.get("/author", function(req, res) {
    res.render("author", {user: user} );
})



module.exports = app;