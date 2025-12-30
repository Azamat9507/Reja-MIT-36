console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");



let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1: Kirish code
// pulic folderni klientga ochib beryapmiz
app.use(express.static("public"));
//json formatni obejectga o'grib beradi
app.use(express.json());
//tradional form expressdan html formdan kelayotgan narsalarni bu yozmasak qabul qilmaydi
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
//bu BSSR tradional usul backend da frontendni qurib olamiz ejs orqali
app.set("views", "views");
// view engine EJS ni ko'rsatib beryapti
app.set("view engine", "ejs");

// 4: Routing code

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({test: "success"});
});

app.get("/author", (req, res) => {
  res.render("author", {user: user});
})

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
