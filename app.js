// const express = require('express');
// const app = express();


// app.set('views', 'views');
// app.set('view engine', 'ejs');

// app.get('/',function(req, res){

//     let today = new Date();
//     let currentDay = today.getDay();
//      var day= "";


//     if(currentDay=== 6 || currentDay === 0){
//         day= "Weekend";

//      } else{
//         day = "Weekday";
//      }
//      res.render("list", {myDay: today});
// });

// app.listen(8000, function(){
//     console.log("Server started on port 8000");
// })

const express = require('express');
const app = express();

let items = [];

app.use(express.static("public"));
app.set("views, views");
app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: true}));
    
    app.get("/", function(req,res){

        let today = new Date();
        let myDate= {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
        
        let day =today.toLocaleDateString("en-US", myDate);
        res.render("list", {myDay: day, AddedItem: items});
        
    });

    app.post("/", function(req,res){
        // item = req.body.addItem;
        var item =req.body.addItem;
        items.push(item);

        res.redirect("/");
        console.log(item);
    });
    
        app.listen(3000, function(){
            console.log("Server Started on port 3000");
        });