

  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_qlux1yu";   

    const templateID = "template_2a6ory8k"; 

    emailjs
     .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value="";
        document.getElementById("message").value = "";
        console.log(res);
        alert("✅ Your message was sent successfully!");
      })
      .catch((err) => console.error("❌ Error:", err));
  }

  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
  });
  // function sendMail(e) {
//   e.preventDefault(); // ✅ Stop form reload
//   ...
// }
