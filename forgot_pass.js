const authForm = document.getElementById("auth_form");
const authButton = document.getElementById("auth_form_submit");
const authErrorMsgCred = document.getElementById("auth_error_msg_credentials");
const authErrorMsgMiss = document.getElementById("auth_error_msg_missing");
const email_addressField = document.getElementById("email_address");
const phoneNumberField = document.getElementById("phoneNumber");

authButton.addEventListener("click", (e) => {
    
    authErrorMsgMiss.style.opacity = 0;
    authErrorMsgCred.style.opacity = 0;

    authErrorMsgMiss.style.display = "none";
    authErrorMsgCred.style.display = "none";

    e.preventDefault();
    const email_address = authForm.email_address.value;
    const phoneNumber = authForm.phoneNumber.value;

    if (email_address === "" || phoneNumber === ""  ) {
        email_addressField.style.border = "thin solid #cc3333";
        phoneNumberField.style.border = "thin solid #cc3333";

        authErrorMsgMiss.style.display = "block";
        authErrorMsgMiss.style.opacity = 1;        

  }

   else if (email_address != "pacific" && phoneNumber != "1234"  ) {
    authErrorMsgCred.style.display = "block";
    authErrorMsgCred.style.opacity = 1;

    email_addressField.style.border = "thin solid #cc3333";
    phoneNumberField.style.border = "thin solid #cc3333";

   }
    
     else {
        alert("A one time password has been sent to your email account!");
        window.location.replace("index.html");
    }
})