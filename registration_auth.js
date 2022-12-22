const authForm = document.getElementById("auth_form");
const authButton = document.getElementById("auth_form_submit");
const authErrorMsgCred = document.getElementById("auth_error_msg_credentials");
const authErrorMsgMiss = document.getElementById("auth_error_msg_missing");
const otp_Field = document.getElementById("otp");
const retryBtn = document.getElementById("auth_form_retry");
const general_text = document.getElementById("information");
const continueBtn = document.getElementById("continue_shopping");

authButton.addEventListener("click", (e) => {
    
    authErrorMsgMiss.style.opacity = 0;
    authErrorMsgCred.style.opacity = 0;

    authErrorMsgMiss.style.display = "none";
    authErrorMsgCred.style.display = "none";

    e.preventDefault();
    const otp = authForm.otp.value;


    const name = document.getElementById('information').innerHTML;
    console.log(name);
    if (otp === "" ) {
        otp_Field.style.border = "thin solid #cc3333";
        retryBtn.style.display = "block";

        authErrorMsgMiss.style.display = "block";
        authErrorMsgMiss.style.opacity = 1;

        document.getElementById('information').innerHTML = "There was a problem with your code! <br> Please enter the code again or try to resend the email.";
        

        retryBtn.addEventListener("click", (e) => {
            authErrorMsgMiss.style.opacity = 0;
            authErrorMsgCred.style.opacity = 0;

            authErrorMsgMiss.style.display = "none";
            authErrorMsgCred.style.display = "none";

            otp_Field.style.border = "none";

            document.getElementById('information').innerHTML = name;
        })
  }

   else if (otp != "12345") {
    authErrorMsgCred.style.display = "block";
    authErrorMsgCred.style.opacity = 1;

    otp_Field.style.border = "thin solid #cc3333";
    otp_Field.style.border = "thin solid #cc3333";

    retryBtn.style.display = "block";

    document.getElementById('information').innerHTML = "Your code is incorrect! <br> Please enter the code again or try to resend the email";

    retryBtn.addEventListener("click", (e) => {
        authErrorMsgMiss.style.opacity = 0;
        authErrorMsgCred.style.opacity = 0;

        authErrorMsgMiss.style.display = "none";
        authErrorMsgCred.style.display = "none";

        otp_Field.style.border = "none";
        document.getElementById('information').innerHTML = name;
    })
   }
    
     else {
        alert("You have registered your account.");
        window.location.replace("index.html");
    }
})