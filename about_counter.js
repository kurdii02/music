$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount+"+");
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 400,duration: 3200});
$('#number2').jQuerySimpleCounter({end: 70,duration: 3500});
$('#number3').jQuerySimpleCounter({end: 25,duration: 3000});






$('#partnersSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  speed:200,
    arrows: false,
    autoplay:true,         
  
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


function myFunction() {
  var x = document.getElementById("myLinks");
  var icon = document.getElementById("icon");

  if (x.style.display === "block") {
    x.style.display = "none";
    icon.classList.remove("clicked"); 


  } else {
    x.style.display = "block";
    icon.classList.add("clicked"); 


  }
}


document.getElementById("icon").addEventListener("click", myFunction);