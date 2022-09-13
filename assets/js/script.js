$(document).ready(function(){

  var typed = new Typed(".typed", {
    strings: ["Software Engineer", "Web Developer", "Mobile/App Developer", "Information Technology Professional", "Security Specialist", "Networking Professional", "Private Cloud Architect"], typeSpeed: 70, loop: true, startDelay: 1000, showCursor: false 
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
          items:4
      }
    }
  });


  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 900) {

      $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: '#FF0000',
        trackColor: '#fff',
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onstep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });

    }
  });

});