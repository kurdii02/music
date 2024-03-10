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
$('#number1').jQuerySimpleCounter({end: 1240,duration: 3200});
$('#number2').jQuerySimpleCounter({end: 2000,duration: 3500});
$('#number3').jQuerySimpleCounter({end: 1000,duration: 3000});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }






