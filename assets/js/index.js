
$(".login-form-container").hide();

$( document ).ready(function() {
  
 
    $("#search-btn").click(function(){
     
      $(".search-form").toggleClass("active");
      
    });
   
      $("#login-btn").click(function(){
     
         $(".login-form-container").show();
         
      });
        
      
      
       $("#close-login-btn").click(function(){
           console.log("close clicked")
            $(".login-form-container").hide();
            
       });


            $("#sub-btn").click(function(){

 
              var username = $("#email-1").val();  
           
              var pw = $("#pass-1").val();  
              //check empty password field  
              if(username == "" && pw=="") {  
                 alert ("**Fill the required fields please!");  
                 return false;  
              }  
               
             //minimum password length validation  
             else if(username == "admin@gmail.com" && pw =="admin123" ) {  
              window.location = "http://localhost:3000/add-newBook";
                
              }  
              
            
            
             });
$(window).scroll(function(){
   $(".search-form").removeClass("active");
  var aTop=$(".header .header-2").height();
 
   if($(this).scrollTop() >=aTop){
   
      $(".header .header-2").addClass("active");
   }else{
      $(".header .header-2").removeClass("active");
   }
})


var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".featured-slider", {
   spaceBetween: 10,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     450: {
       slidesPerView: 2,
     },
     768: {
       slidesPerView: 3,
     },
     1024: {
       slidesPerView: 4,
     },
   },
 });
 
 var swiper = new Swiper(".arrivals-slider", {
   spaceBetween: 10,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".blogs-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 
 
  });


// adding new Book the stock
$("#add_book").submit(function(event){
    alert("Data submitted succesfully");
}) 

//updating existing user
$("#update_user").submit(function(event){
   event.preventDefault();
   var unindexed_array =$(this).serializeArray();
   var data={}
   
   //let "n" represent all data of the unindex_array & "i" represents the indexs of the unindex_array
   $.map(unindexed_array,function(n,i){
      data[n["name"]]=n["value"]
   })
   console.log(data)
   var request ={
       "url":`http://localhost:3000/api/users/${data.id}`,
       "method":"PUT",
       "data":data
   }
   $.ajax(request).done(function(response){
      alert("Data successfully updated!");
      
   })
})

// deleting user with specified Id
if(window.location.pathname == "/"){
   // $ondelete = $('.btn.border-shadow.delete');
   
    $(document).on('click','.btn.border-shadow.delete',(function(){
       var id = $(this).attr("data-id")  
       console.log(id)  
       var request ={
                          url:`http://localhost:3000/api/users/${id}`,
                           method:"DELETE"
                     }
         if(confirm("do you really want to delete this record?"))
           {
            
                $.ajax(request).done(function(response){
                alert("User successfully deleted!");
                location.reload();
              })  
          }
   
        } ))
   
  
}





});
