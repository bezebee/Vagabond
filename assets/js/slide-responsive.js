//Mobile media query for fading on scroll

function myFunction(y) {
  if (y.matches) {
    // If media query matches
    // $(document).ready(function(){
    //     $(window).scroll(function(){
    //         $("#slide").css("opacity", 1.4 - $(window).scrollTop() / ($('#slide').height() / 2));
    //     });
    // });

    $(document).ready(function () {
      $(window).scroll(function () {
        $("#slide4").css(
          "opacity",
          2.5 - $(window).scrollTop() / ($("#slide4").height() / 2)
        );
      });
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        $("#slide5").css(
          "opacity",
          6.5 - $(window).scrollTop() / ($("#slide5").height() / 2)
        );
      });
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        $("#slide6").css(
          "opacity",
          8 - $(window).scrollTop() / ($("#slide6").height() / 2)
        );
      });
    });
  }
}

let y = window.matchMedia("(max-width: 500px)");
myFunction(y);
y.addListener(myFunction);