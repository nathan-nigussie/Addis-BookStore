const mongoose = require("mongoose");
//creating mongoDB schema
var schema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        unique:true,
       
    },
    Geners:{
        type:String,
        required:true,
        enum: ['Romance', 'True Story', 'Suspense', 'Drama','Poem'],
        
        
    },
    PurchasePrice:{
        type:String,
        required:true
    },
    SellingPrice:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    ArrivalDate:{ 
        type:Date,
        min: '1850-09-28',
        max: '2050-05-23'
    },
    avatar:{
           data: Buffer,
           contentType: String 
    },
    
    status:String

    
})






const Booksdb = mongoose.model("booksdb", schema);
module.exports = Booksdb;