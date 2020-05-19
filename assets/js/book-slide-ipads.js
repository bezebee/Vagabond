//Mobile media query for fading on scroll

function myFunction(ipad) {
  if (ipad.matches) {

      $(document).ready(function () {
      $(window).scroll(function () {
        $("#slide").css(
          "opacity",
          1.5 - $(window).scrollTop() / ($("#slide").height() / 2)
        );
      });
    });

    //row 1
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book1").css(
          "opacity",
          2.5 - $(window).scrollTop() / ($("#book1").height() / 2)
        );
      });
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book2").css(
          "opacity",
          2.5 - $(window).scrollTop() / ($("#book2").height() / 2)
        );
      });
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book3").css(
          "opacity",
          4.5 - $(window).scrollTop() / ($("#book3").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book4").css(
          "opacity",
          4.5 - $(window).scrollTop() / ($("#book4").height() / 2)
        );
      });
    });

    //row2
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book5").css(
          "opacity",
          6.5 - $(window).scrollTop() / ($("#book5").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book6").css(
          "opacity",
          6.5 - $(window).scrollTop() / ($("#book6").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book7").css(
          "opacity",
          8.5 - $(window).scrollTop() / ($("#book7").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book8").css(
          "opacity",
          8.5 - $(window).scrollTop() / ($("#book8").height() / 2)
        );
      });
    });

    //row3
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book9").css(
          "opacity",
          10.5 - $(window).scrollTop() / ($("#book9").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book10").css(
          "opacity",
         10.5 - $(window).scrollTop() / ($("#book10").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book11").css(
          "opacity",
          13 - $(window).scrollTop() / ($("#book11").height() / 2)
        );
      });
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        $("#book12").css(
          "opacity",
          13 - $(window).scrollTop() / ($("#book12").height() / 2)
        );
      });
    });
  }
}

let ipad = window.matchMedia("(min-width:700px)");
myFunction(ipad);
ipad.addListener(myFunction);


