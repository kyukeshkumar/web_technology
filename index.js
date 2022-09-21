const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var mysql = require('mysql2')
const port = 3000
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yukeshkumar#0101",
    database:"webtech",
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.get('/',function(req,res){
    res.send("Welcome to my server!.....")
})

app.post('/home',function(req,res){
    console.log(`Mains mark: ${req.body.mains}`)
    console.log(`Advance mark: ${req.body.adv}`)
    console.log(`BITSAT mark: ${req.body.bits}`)

    con.connect(function(err){
        if(err) throw err;
        console.log("connected!")
        var query = `INSERT INTO marks VALUES('${req.body.mains}','${req.body.adv}','${req.body.bits}')`;
        con.query(query,function(err){
            if(err) throw err
            console.log("Insertion succesfull!")
        })
    })
})
app.listen(port,()=>{
    console.log(`server is running in port ${port}.`)
})

