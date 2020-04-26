$(function () {
  $("#subscriberName_error_message").hide();
  $("#email_error_message").hide();

  var error_subscriberName = false;
  var error_email = false;

  $("#subscriberName").focusout(function () {
    check_subscriberName();
  });

  $("#emailAddress").focusout(function () {
    check_emailAddress();
  });

  function check_subscriberName() {
    //should contain only characters 'a' to 'z' and 'A' to 'Z'
    var pattern = /^[a-zA-Z]*$/;
    //variable for name on the text-box
    var name = $("#subscriberName").val();
    //testing the value of name with the pattern
    if (pattern.test(name) && name == "") {
      //testing if there is a content in the text-box
      $("#subscriberName_error_message").hide(); //if it's a match, the error message is hidden
      $("#subscriberName").css("border-bottom", "1px solid #34F458"); //if success, a green bordered message pops up
    } //if the pattern does not match
    else {
      $("#subscriberName_error_message").html("Should contain only characters"); //error message content in html action
      $("#subscriberName_error_message").show(); //shown on the screen with the show method, initialised to hide at the beginning
      $("#subscriberName").css("border-bottom", "1px solid #F90A0A"); //the error is underlined with red border
      error_subscriberName = true; // initialised to 'false' in the beginning, the error for name is now revealed
    }
  }
  function check_emailAddress() {
    //for email pattern variable is checking if the email address contains characters permitted and following correct format
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#emailAddress").val();
    if (pattern.text(email) && email == '') {
        $("#email_error_message").hide();//if success, error message hides
        $("#emailAddress").css("border-bottom","1px solid #34F458");//box is underlined with a green line
    }else{
        $("#email_error_message").html("Invalid Email");//html message content
        $("#email_error_message").show();//.show action displays the messagge
        $("#emailAddress").css("border-bottom","1px solid #F90A0A"); //.css method underlines the box in question
        error_email= true; //the error for email is now revealed
    }

  }

  $("#subscribeForm").submit(function(){
error_subscriberName = false;
error_email = false;

check_subscriberName();
check_emailAddress();

if (error_subscriberName === false && error_email === false) {

    alert (" You have subscribed! ");
    return true;
}else{
    alert("Some information incomplete, have a look again, please");
    return false;
}


  });
});
