let express=require('express');
let mongoose=require('mongoose');
var bodyparser = require("body-parser");
let app=express();
app.use(express.json());
let route=require('./routes/route')
app.use(bodyparser.json());
mongoose.connect("mongodb://0.0.0.0:27017/HR-PORTAL"
, { useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    if (err) 
    return console.log(err)
    else console.log("you are connected")
});
app.use('/',route);
app.listen(3100,()=>{console.log("you are connected 3000")});
