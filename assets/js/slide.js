//Media query for fade on scroll - FHD and up (adapted from Stack Overflow and Media Queries on W3School - links in Readme)

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#slide").css(
          "opacity",
          2 - $(window).scrollTop() / ($("#slide").height() / 2)
        );
      });
    });
  }
}

let x = window.matchMedia("(min-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
