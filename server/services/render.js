const axios = require("axios");

// this file allow us to render different files using routers
exports.homeRoutes =(req,res) => {
    //make a get request to /api/users
    axios.get("http://localhost:3000/api/books")
    .then(function(response){
     
        res.render("add_newBook.ejs",{users:response.data});
        
    })
    .catch(err =>{
        res.send(err);
    })
   
}
exports.add_newBook =(req,res) => {
   
    res.render("index.ejs");
}

exports.update_user =(req,res) => {
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(function(userdata){
     
        res.render("update_user.ejs",{user:userdata.data});
       
    })
    .catch(err =>{
        res.send(err);
    })
   
}