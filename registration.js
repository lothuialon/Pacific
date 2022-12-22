const registrationForm = document.getElementById("registration_form");
const registrationButton = document.getElementById("registration_form_submit");
const registrationErrorMsgCred = document.getElementById("registration_error_msg_credentials");
const registrationErrorMsgMiss = document.getElementById("registration_error_msg_missing");
const email_addressField = document.getElementById("email_address");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");
const firstNameField = document.getElementById("first_name");
const lastNameField = document.getElementById("last_name");
const phoneNumberField = document.getElementById("phoneNumber");
const genderValue = document.getElementById("username");

const temp = document.getElementById("output");
let selectedSize;

registrationButton.addEventListener("click", (e) => {

    const radioButtons = document.querySelectorAll('input[name="gender"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            console.log("picked up here" + selectedSize);
            
        } else {
            selectedSize = "";
                }

    }
    
  registrationErrorMsgMiss.style.opacity = 0;
  registrationErrorMsgCred.style.opacity = 0;

  registrationErrorMsgMiss.style.display = "none";
  registrationErrorMsgCred.style.display = "none";

    e.preventDefault();
    const email_address = registrationForm.email_address.value;
    const password = registrationForm.password.value;
    const firstName = registrationForm.first_name.value;
    const lastName = registrationForm.last_name.value;
    const confirm_password = registrationForm.confirm_password.value;
    const phoneNumber = registrationForm.phoneNumber.value;
    const gender = selectedSize.value;


    if (email_address === "" || password === "" || firstName === "" || lastName === "" || password === "" || confirm_password === "" || phoneNumber === "" || gender === "") {

        
      registrationErrorMsgMiss.style.display = "block";
      registrationErrorMsgMiss.style.opacity = 1;
      email_addressField.style.border = "thin solid #cc3333";
      passwordField.style.border = "thin solid #cc3333";
      firstNameField.style.border = "thin solid #cc3333";
      lastNameField.style.border = "thin solid #cc3333";
      email_addressField.style.border = "thin solid #cc3333";
      confirmPasswordField.style.border = "thin solid #cc3333";
      phoneNumberField.style.border = "thin solid #cc3333";
  }

   else if (password != confirm_password) {
    registrationErrorMsgCred.style.display = "block";
    registrationErrorMsgCred.style.opacity = 1;

    confirmPasswordField.style.border = "thin solid #cc3333";
    passwordField.style.border = "thin solid #cc3333";
   }
    
     else if (email_address === "pacific" && password === "waves") {
        alert("You have successfully logged in.");
        window.location.replace("index.html");

    } else {
        alert("You have successfully logged in.");
        window.location.replace("index.html");
    }
})