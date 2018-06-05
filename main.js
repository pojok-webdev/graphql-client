var express = require('express'),
    queries = require('./queries'),
    { request } = require('graphql-request'),
    bodyParser = require('body-parser'),
    app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.engine("html",require("ejs").renderFile)
app.use('/assets',express.static(__dirname+'/assets'));
app.get("/getdivision",function(req,res){
    request('http://localhost:4000/graphql',queries.getDivisions())
    .then(data=>{
        console.log("Data",data);
        res.render("divisions/index.html",{
            page:{title:"PadiApp | Divisi", title1:"Divisi",title2:"Daftar Divisi"},
            data:data.getDivisions
        })    
    })
})
app.get("/adddivision",function(req,res){
    res.render("divisions/add.html",{
        page:{title:'PadiApp | Kunjungan',title1:'Kunjungan',title2:'histori'},
    })
})
app.post("/savedivision",function(req,res){
    request('http://localhost:4000/graphql',queries.saveDivision(
        {id:req.body.id,name:req.body.name,description:req.body.description}
    ))
    .then(data=>{
        console.log(data)
        res.send(data)
    })
})
app.get("/addemployee",function(req,res){})
app.get("/saveemployee",function(req,res){
    request("http://localhost:4000/graphql",queries.saveEmployee(
        {id:3,level:1,division:{name:"Billing"},username:'Koko'}
    ))
    .then(data=>{
        console.log("Data",data)
        res.send(data)
    })
})
app.listen(4001)