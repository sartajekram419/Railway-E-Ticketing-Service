const express = require("express")
const bobyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "railway_management_database",
});

app.use(cors());
app.use(express.json())
app.use(bobyParser.urlencoded({extended: true}))

app.post("/api/insertPassenger", (req, res) => {

    const name = req.body.name
    const nid = req.body.nid
    const email = req.body.email
    const mobile = req.body.mobile
    const password = req.body.password

    const sqlInsertPassenger = "INSERT INTO passenger (name, nid, email, mobile, password) VALUES (?,?,?,?,?)"
    db.query(sqlInsertPassenger, [name, nid, email, mobile, password], (err, result) => {
        console.log(err);
    });

});

app.listen(3001, ()=>{
    console.log("running");
})