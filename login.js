const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");
const loginErrorMsgCred = document.getElementById("login_error_msg_credentials");
const loginErrorMsgMiss = document.getElementById("login_error_msg_missing");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");


loginButton.addEventListener("click", (e) => {
  loginErrorMsgMiss.style.opacity = 0;
  loginErrorMsgCred.style.opacity = 0;

  loginErrorMsgMiss.style.display = "none";
  loginErrorMsgCred.style.display = "none";

    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    if (username === "" || password === "") {
      loginErrorMsgMiss.style.display = "block";
      loginErrorMsgMiss.style.opacity = 1;
      usernameField.style.border = "thin solid #cc3333";
      passwordField.style.border = "thin solid #cc3333";
  }
    
    else if (username === "pacific" && password === "waves") {
        alert("You have successfully logged in.");
        window.location.replace("index.html");

    } else {
        loginErrorMsgCred.style.display = "block";
        loginErrorMsgCred.style.opacity = 1;
        usernameField.style.border = "thin solid #cc3333";
        passwordField.style.border = "thin solid #cc3333";

    }
})