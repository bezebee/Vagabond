//Media query for fade on scroll - FHD and up

function myFunction(x) {
  if (x.matches) { // If media query matches
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#slide").css("opacity", 2 - $(window).scrollTop() / ($('#slide').height() / 2));
        });
    });

$(document).ready(function(){
        $(window).scroll(function(){
            $("#slide2").css("opacity", 3- $(window).scrollTop() / ($('#slide2').height() / 2));
        });
    });
  } 
}

let x = window.matchMedia("(min-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



//Mobile media query for fading on scroll

function myFunction(y) {
  if (y.matches) { // If media query matches
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#slide").css("opacity", 1.4 - $(window).scrollTop() / ($('#slide').height() / 2));
        });
    });


    $(document).ready(function(){
        $(window).scroll(function(){
            $("#slide3").css("opacity", 2.2 - $(window).scrollTop() / ($('#slide3').height() / 2));
        });
    });

$(document).ready(function(){
        $(window).scroll(function(){
            $("#slide4").css("opacity", 4.5 - $(window).scrollTop() / ($('#slide4').height() / 2));
        });
    });

$(document).ready(function(){
        $(window).scroll(function(){
            $("#slide5").css("opacity", 6.5 - $(window).scrollTop() / ($('#slide5').height() / 2));
        });
    });

$(document).ready(function(){
        $(window).scroll(function(){
            $("#slide6").css("opacity", 8 - $(window).scrollTop() / ($('#slide6').height()/ 2));
        });
    });
}
}

let y = window.matchMedia("(max-width: 500px)")
myFunction(y) 
y.addListener(myFunction)