 function sendMail(Newsletter) {
  emailjs.send("gmail", "subscription_success", {
      "email": Newsletter.email.value
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert("subscribed")
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
