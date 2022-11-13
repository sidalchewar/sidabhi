var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

//Http Handlers
var onDefault=function(req, res){
    res.send("<h1>SidbhI</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Mentoring for skill building</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};

var onAboutUs=function(req, res){
    res.send("<h1>BOD : Siddhant G. Alchewar</h1>");
    res.send("<h1>Chief Mentor :Abhishek G. Sonone</h1>");
    
};

app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);
var server=app.listen(100);
console.log("Server is running on port 100");