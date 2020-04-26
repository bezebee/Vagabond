


$(function() {
//hiding error messages
         $("#first_name_error_message").hide();
         $("#surname_error_message").hide();
         $("#email_error_message").hide();
         $("#password_error_message").hide();
         $("#retype_password_error_message").hide();

         let error_first_name = false;
         let error_surname = false;
         let error_email = false;
         let error_password = false;
         let error_retype_password = false;

         $("#form_first_name").focusout(function(){
            check_first_name();
         });
         $("#form_surname").focusout(function() {
            check_surname();
         });
         $("#form_email").focusout(function() {
            check_email();
         });
         $("#form_password").focusout(function() {
            check_password();
         });
         $("#form_retype_password").focusout(function() {
            check_retype_password();
         });

         function check_first_name() {
            let pattern = /^[a-zA-Z]*$/;
            let first_name = $("#form_first_name").val();
            if (pattern.test(first_name) && first_name !== '') {
               $("#first_name_error_message").hide();
               $("#form_first_name").css("border-bottom","2px solid #34F458");
            } else {
               $("#first_name_error_message").html("Should only contain letters");
               $("#first_name_error_message").show();
               $("#form_first_name").css("border-bottom","2px solid #F90A0A");
               error_first_name = true;
            }
         }

         function check_surname() {
            let pattern = /^[a-zA-Z]*$/;
            let surname = $("#form_surname").val()
            if (pattern.test(surname) && surname !== '') {
               $("#surname_error_message").hide();
               $("#form_surname").css("border-bottom","2px solid #34F458");
            } else {
               $("#surname_error_message").html("Should only contain letters");
               $("#surname_error_message").show();
               $("#form_surname").css("border-bottom","2px solid #F90A0A");
               error_first_name = true;
            }
         }

         function check_password() {
            let password_length = $("#form_password").val().length;
            if (password_length < 8) {
               $("#password_error_message").html("Minimum 8 characters");
               $("#password_error_message").show();
               $("#form_password").css("border-bottom","2px solid #F90A0A");
               error_password = true;
            } else {
               $("#password_error_message").hide();
               $("#form_password").css("border-bottom","2px solid #34F458");
            }
         }

         function check_retype_password() {
            let password = $("#form_password").val();
            let retype_password = $("#form_retype_password").val();
            if (password !== retype_password) {
               $("#retype_password_error_message").html("Mismatched passwords detected!");
               $("#retype_password_error_message").show();
               $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
               error_retype_password = true;
            } else {
               $("#retype_password_error_message").hide();
               $("#form_retype_password").css("border-bottom","2px solid #34F458");
            }
         }

         function check_email() {
            let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            let email = $("#form_email").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error_message").hide();
               $("#form_email").css("border-bottom","2px solid #34F458");
            } else {
               $("#email_error_message").html("Invalid Email");
               $("#email_error_message").show();
               $("#form_email").css("border-bottom","2px solid #F90A0A");
               error_email = true;
            }
         }

         $("#sign-up-form").submit(function() {
            error_first_name = false;
            error_surname = false;
            error_email = false;
            error_password = false;
            error_retype_password = false;

            check_first_name();
            check_surname();
            check_email();
            check_password();
            check_retype_password();

            if (error_first_name === false && error_surname === false && error_email === false && error_password === false && error_retype_password === false) {
               alert("You're officially a Vagabond!");
               return true;
            } else {
               alert("You've wandered off the beaten track, try again!");
               return false;
            }


         });
      });


      




        
      


      

