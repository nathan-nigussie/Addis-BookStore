$(".login-form-container").hide();

$(document).ready(function() {

    $("#search-btn").click(function() {
        $(".search-form").toggleClass("active");
    });

    $("#login-btn").click(function() {
        $(".login-form-container").show();
    });

    $("#close-login-btn").click(function() {
        $(".login-form-container").hide();
    });

    $("#sub-btn").click(function() {
        var username = $("#email-1").val();
        var pw = $("#pass-1").val();
        //check empty password field
        if (username == "" && pw == "") {
            alert("**Fill the required fields please!");
            return false;
        }
        //minimum password length validation
        else if (username == "admin@gmail.com" && pw == "admin123") {
            window.location = "http://localhost:3000/add-newBook";
        }
    });
    if (window.location.pathname == "/sells-page") {
        $(document).on('click', '#update-btn', (function() {
            var id = $(this).attr("value")
            var request = {
                url: `http://localhost:3000/order/api/books`,
                method: "POST"
            }
            if (confirm("do you really want to confirm this purchase order?")) {
                $.ajax(request).done(function(response) {
                    alert("your order successfully sent!");
                    location.reload();
                })
            }
        }))
    }

    // adding new Book the stock
    $("#add_stock_form").submit(function(event) {
        alert("Data submitted succesfully");
    });

    //updating existing book stock

    if (window.location.pathname == "/update-stock") {
        $(document).on('click', '.btn.text-dark.update', (function() {
            var id = $(this).attr("value")
            var request = {
                url: `http://localhost:3000/api/books/${id}`,
                method: "POST"
            }
            if (confirm("do you really want to update this record?")) {
                $.ajax(request).done(function(response) {
                    alert("User successfully updated!");
                    console.log("updated")
                    location.reload();
                })
            }
        }))
    }

    // deleting Boks detail with specified Id

    if (window.location.pathname == "/view-stock") {
        $(document).on('click', '.btn.border-shadow.delete2', (function() {
            var id = $(this).attr("data-id")
            var request = {
                url: `http://localhost:3000/api/books/${id}`,
                method: "DELETE"
            }
            if (confirm("do you really want to delete this record?")) {
                $.ajax(request).done(function(response) {
                    alert("User successfully deleted!");
                    location.reload();
                })
            }
        }))
    }

    $(window).scroll(function() {
        $(".search-form").removeClass("active");
        var aTop = $(".header .header-2").height();
        if ($(this).scrollTop() >= aTop) {
            $(".header .header-2").addClass("active");
        } else {
            $(".header .header-2").removeClass("active");
        }
    })
    var swiper = new Swiper(".books-slider", {
        loop: true,
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
        loop: true,
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
        loop: true,
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
        grabCursor: true,
        loop: true,
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
        grabCursor: true,
        loop: true,
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
})