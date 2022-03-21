
var Booksdb = require("../model/model.js");
var fs = require('fs');


exports.create =(req,res ) => {

//validate request
  if(!req.body){
           res.status(400).send({message:"Content can not be empty"});
           return;
      } 

    filePath = String.raw`${__dirname}`; //initial directory name
    //removing `server\controller string
    transformedPath=filePath.replace(String.raw`server\controller`,String.raw`myuploads`) 
    finalImagePath=transformedPath+"\\"+ req.file.originalname
         
    let books = new Booksdb
           ({
               Title:req.body.Title,
               Geners:req.body.Geners,
               PurchasePrice:req.body.PurchasePrice,
               SellingPrice:req.body.SellingPrice,
               Description:req.body.Description,
               ArrivalDate:req.body.ArrivalDate,
               avatar:
                {
                 //  data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.originalname)),
                 data: fs.readFileSync(finalImagePath),
                 contentType: 'image/png'
                }
          })
        books.save(books)
        .then(response =>{
        res.status(201).json({
            message:"created successfully"
        })
      // here the pages redirects back to new user page  
      //res.redirect("/add-newBook"); 
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Error occurred while Creating a create Operation"
        });
    })
}
    
// // //retrieve and return all users/retrive and return single user
exports.find = (req,res)=>{
  if(req.query.id){
      const id=req.query.id;
      Booksdb.findById(id)
      .then(data => {
          if(!data){
              res.status(404).send({message:"not found user with id" + id})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({message:"Error in retriving user with id" + id})
      })
     }else
     
     Booksdb.find()
      .then(books =>{
       res.send(books)
    })
    .catch(err =>{
      res.status(500).send({message:err.message || "Error occurred while Creating a create Operation"});
     })

}

 //finding a user with its Id 
exports.find_By_Id = (req,res)=>{
   
        const id2=req.params.id;
        Booksdb.findById(id2)
        .then(data => {
            if(!data){
                res.status(404).send({message:"not found user with id" + id2})
         }else{                 res.send(data)
             }
         })
         .catch(err =>{
             res.status(500).send({message:"Error in retriving user with id" + id2})
         })
      
  }

//Deleting a user with its specified id given as a request
 exports.delete =(req, res) =>{
  const id=req.params.id;
  Booksdb.findByIdAndDelete(id)
  .then(data =>{
     if(!data){
      res.status(404).send({message:`Cannot delete a user with ${id}. May be user with this Id is not found`})
   } else{
     res.send(`${data} + successfully deleted!`)
  }
 })
 .catch(err =>{
   res.status(500).send({message:"Error delete user information"})
 })
} 

//  Update a new identified user by user id
// exports.update = (req, res)=>{
//     if(!req.body){

//         res.status(400).send({message:"Data to update can not be empty"});
//         return;
//      }
//     const id = req.params.id;
//      Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
//     .then(data => {
//         if(!data){
//             res.status(404).send({message:`Cannot Update user with ${id}. May be user with this Id is not found`})
//         } else{
//           res.send(data)
//        }
//    })
//        .catch(err =>{
//          res.status(500).send({message:"Error Update user information"})
//        })
    
//  }
