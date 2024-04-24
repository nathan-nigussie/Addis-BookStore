const mongoose=require("mongoose");

const booksdb=new mongoose.Schema({
    Title: {
        type: String,
    },
    Geners: {
        type: String,
        required: false,
        enum: ['Romance','True Story','Suspense','Drama','Poem','Education'],
    },
    PurchasePrice: {
        type: String,
        required: false
    },
    SellingPrice: {
        type: String,
        required: false
    },
    Description: {
        type: String,
        required: false
    },
    ArrivalDate: {
        type: Date,
        min: '1850-09-28',
        max: '2050-05-23'
    },
    avatar: {
        required: false,
        type: String
    },
    status: String
})

module.exports=mongoose.model("booksdb",booksdb);
