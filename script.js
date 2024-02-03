// <!-- initializing aos  -->
// for animation
AOS.init({
    delay:400,
    duration:1000
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}   

$('#menu-bar').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('load scroll',function(){
    $('#menu-bar').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
    $('section').each(function(){
        let top = $(window).scrollTop();
        let height = $(this).height();
        let id = $(this).attr('id');
        let offset = $(this).offset().top - 200;
        if(top > offset && top < offset + height){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    });
});

$('.list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let src = $(this).attr('data-src');
    $('.menu .row .image img').attr('src',src);
});

$('#b1').click(function(){
    $('.c1').addClass('display-on');
    $('.c1').removeClass('display-off');
    $('.c2').addClass('display-off');
    $('.c2').removeClass('display-on');
    $('.c3').addClass('display-off');
    $('.c3').removeClass('display-on');
    $('.c4').addClass('display-off');
    $('.c4').removeClass('display-on');
});
$('#b2').click(function(){
    $('.c1').addClass('display-off');
    $('.c1').removeClass('display-on');
    $('.c2').addClass('display-on');
    $('.c2').removeClass('display-off');
    $('.c3').addClass('display-off');
    $('.c3').removeClass('display-on');
    $('.c4').addClass('display-off');
    $('.c4').removeClass('display-on');
});
$('#b3').click(function(){
    $('.c1').addClass('display-off');
    $('.c1').removeClass('display-on');
    $('.c2').addClass('display-off');
    $('.c2').removeClass('display-on');
    $('.c3').addClass('display-on');
    $('.c3').removeClass('display-off');
    $('.c4').addClass('display-off');
    $('.c4').removeClass('display-on');
});
$('#b4').click(function(){
    $('.c1').addClass('display-off');
    $('.c1').removeClass('display-on');
    $('.c2').addClass('display-off');
    $('.c2').removeClass('display-on');
    $('.c3').addClass('display-off');
    $('.c3').removeClass('display-on');
    $('.c4').addClass('display-on');
    $('.c4').removeClass('display-off');
});




// chef hover plugin
$(".chef-project").hover3d({
  selector: ".chef-project__card",
  shine: true,
});

$(".chef-project").hover3d({

  // selector for element
  selector      : null,

  // Perspective value for 3d space
  perspective   : 1000,

  // Mouse movement sensitivity
  sensitivity   : 20,

  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,

  // Add shining layer
  shine       : false,

  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",

  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",

  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"
  
});


// gallery
setGalleryTransition("opacity");
enableExtraButtons();
json = '{ "Entry": { "Title": "", '+
   '"Image": ["images/img1.jpg",'+
   '"images/img2.jpg",'+
   '"images/img3.jpg",'+
   '"images/img4.jpg",'+
   '"images/img5.jpg",'+
   '"images/img6.jpg" ] } }';
addGallery(json);


// order page

//  $( "#order-now" ).click(function() {
//         $("span").text("");   
//         var isValid = true;   
        
//         var email = $("#email").val();
//         var phone = $("#phone").val();
//         var zip = $("#zip").val();
//         var dob = $("#dob").val();
        
//         if ( email === "" || 
//                 !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) 
//         {
//             isValid = false;
//             $( "#email" ).next().text("Please enter a valid email.");
//         }
//         if ( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/) ) {
//             isValid = false;
//             $( "#phone" ).next().text(
//                 "Please enter a phone number in NNN-NNN-NNNN format.");
//         }
//         if ( zip === "" || !zip.match(/^\d{5}(-\d{4})?$/) ) {
//             isValid = false;
//             $( "#zip" ).next().text("Please enter a valid zip code.");
//         }
//         if ( dob === "" || !isDate(dob) ) {
//             isValid = false;
//             $( "#dob" ).next().text(
//                 "Please enter a valid date in MM/DD/YYYY format.");
//         }
        
//         if ( isValid ) { 
//             var str = '';
//             array['email'] = email;
//             array['phone'] = phone;
//             array['zip'] = zip;
//             array['dob'] = dob;
//             sessionStorage.setItem("profile", "");
//             for (var i in array) {
//                 var val = array[i];
//                 var string = i + "=" + val + "|";
//                 str = str + string;
//             }
//             sessionStorage.setItem("profile", str);
            
//             // go to profile page
//             location.href = "profile.html";
//         }
        
//         $("#email").focus(); 
//     });
    
//     // set focus on initial load
//     $("#email").focus();

