var Express = require('express');
var app = Express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('index.ejs');
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});