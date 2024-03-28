const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

const inputs=["Buy Food"," Cook Food "," Eat Food"];
const workInputs=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){

    const day=date.getDate();

res.render("list",{listTitle:day,newListItems :inputs});
})

app.post("/",function(req,res){
    const input=req.body.newItem;
    if(req.body.list==="Work"){
 
       workInputs.push(input)
       res.redirect("/work")
    }else{
      inputs.push(input)
      res.redirect("/")
     }
})
  
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", newListItems:workInputs });
})

app.get("/about",function(req,res){
res.render("about");
})

app.listen(3000,function(){
    console.log("server running on port 3000")
})