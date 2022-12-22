const registrationForm = document.getElementById("registration_form");
const editForm = document.getElementById("edit_form");
const loyaltyForm = document.getElementById("loyalty_form");
const editEnable = document.getElementById("edit");

const registrationErrorMsgCred = document.getElementById("registration_error_msg_credentials");
const registrationErrorMsgMiss = document.getElementById("registration_error_msg_missing");


const passwordErrorMsgCred = document.getElementById("password_error_msg_credentials");
const passwordErrorMsgMiss = document.getElementById("password_error_msg_missing");
const passwordErrorMsgDup = document.getElementById("password_error_msg_old_password");


const email_addressField = document.getElementById("email_address");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");
const newPasswordField = document.getElementById("new_password");
const firstNameField = document.getElementById("first_name");
const lastNameField = document.getElementById("last_name");
const phoneNumberField = document.getElementById("phoneNumber");
const genderValue = document.getElementById("username");
const DOBField = document.getElementById("DOB");

const passwordUpdateBtn = document.getElementById("passwordUpdate");
const confirmChangeBtn = document.getElementById("confirm_submit");

const radioBtnMale = document.getElementById("male");
const radioBtnFemale = document.getElementById("female");


const temp = document.getElementById("output");
let selectedSize;


editEnable.addEventListener("click", (e) => {
    email_addressField.disabled = false;
    firstNameField.disabled = false;
    lastNameField.disabled = false;
    DOBField.disabled = false;
    radioBtnMale.disabled = false;
    radioBtnFemale.disabled = false;

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

    loyaltyForm.style.display = "none";
    editForm.style.display = "block";

    confirmChangeBtn.style.display = "block";
    passwordUpdateBtn.style.display = "block";

})

confirmChangeBtn.addEventListener("click", (e) => {

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
    const firstName = registrationForm.first_name.value;
    const lastName = registrationForm.last_name.value;
    const DOB = registrationForm.DOB.value;
    const gender = selectedSize.value;


    if (email_address === "" || DOB === "" || firstName === "" || lastName === "" || password === "" || gender === "") {

        
      registrationErrorMsgMiss.style.display = "block";
      registrationErrorMsgMiss.style.opacity = 1;

      email_addressField.style.border = "thin solid #cc3333";
      DOBField.style.border = "thin solid #cc3333";
      firstNameField.style.border = "thin solid #cc3333";
      lastNameField.style.border = "thin solid #cc3333";
      email_addressField.style.border = "thin solid #cc3333";
  }
    
     else if (email_address === "pacific") {
        alert("You have successfully updated your account details.");
        window.location.replace("login.html");

    } else {
        alert("There was an issue in updating your credentials, please try again.");
        location.reload()
    }


})


passwordUpdateBtn.addEventListener("click", (e) => {

    passwordErrorMsgCred.style.opacity = 0;
    passwordErrorMsgDup.style.opacity = 0;
    passwordErrorMsgMiss.style.opacity = 0;

    passwordErrorMsgCred.style.display = "none";
    passwordErrorMsgDup.style.display = "none";
    passwordErrorMsgMiss.style.display = "none";

    
    e.preventDefault();

    const password = editForm.password.value;
    const confirm_password = editForm.confirm_password.value;
    const newPassword = editForm.new_password.value;

    if (password === "" || confirm_password === "" || newPassword === "") {

        passwordErrorMsgMiss.style.display = "block";
        passwordErrorMsgMiss.style.opacity = 1;

        passwordField.style.border = "thin solid #cc3333";
        confirmPasswordField.style.border = "thin solid #cc3333";
        newPasswordField.style.border = "thin solid #cc3333";
    }
  
     else if (newPassword != confirm_password) {
        passwordErrorMsgCred.style.display = "block";
        passwordErrorMsgCred.style.opacity = 1;
  
      confirmPasswordField.style.border = "thin solid #cc3333";
      newPasswordField.style.border = "thin solid #cc3333";
     }

     else if (newPassword === password) {
        passwordErrorMsgDup.style.display = "block";
        passwordErrorMsgDup.style.opacity = 1;
    
        passwordField.style.border = "thin solid #cc3333";
        newPasswordField.style.border = "thin solid #cc3333";
        confirmPasswordField.style.border = "thin solid #cc3333";
       }
      
       else {
          alert("You have successfully changed your password.");
          window.location.replace("login.html");
      }



})

