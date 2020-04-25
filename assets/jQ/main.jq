$('form').submit(function(e) {

   e.preventDefault();

var email = $('input[type="email"]').val();

var queryString = "email="+email;

$.ajax({

    url : "php/sendmail.php",
    type : "POST",
    data : queryString,
    dataType : "html",
    success : function(output) {

        $('body').append("<p>"+output+"</p>");

    }

});