$(document).ready(function(){

  var typed = new Typed(".typed", {
    strings: ["Software Engineer", "Web Developer", "Mobile/App Developer", "Information Technology Professional", "Security Specialist", "Networking Professional", "Private Cloud Architect"], typeSpeed: 70, loop: true, startDelay: 1000, showCursor: false 
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  $('.chart').easyPieChart({
    //your options goes here
  });

});