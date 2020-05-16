//Media query for fade on scroll - FHD and up (adapted from Stack Overflow and Media Queries on W3School - links in Readme)

function myFunction(a) {
  if (a.matches) {
    // If media query matches
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#row1").css(
          "opacity",
          5 - $(window).scrollTop() / ($("#slide").height() / 2)
        );
      });
    });

     $(document).ready(function () {
      $(window).scroll(function () {
        $("#row2").css(
          "opacity",
          10 - $(window).scrollTop() / ($("#slide").height() / 2)
        );
      });
    });

     $(document).ready(function () {
      $(window).scroll(function () {
        $("#row3").css(
          "opacity",
          13 - $(window).scrollTop() / ($("#slide").height() / 2)
        );
      });
    });



  }
}

let a = window.matchMedia("(min-width: 1200px)");
myFunction(a); // Call listener function at run time
a.addListener(myFunction); // Attach listener function on state changes
