function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email_address.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

var modal = document.getElementById("myAlertModal");
var btn = document.getElementById("myBtn");

btn.onclick = function(){
    modal.style.display="block";
}



