$(document).ready(function () {


  $('#loginlink').click();

  // When the form is submitted, we validate there's an email and password entered
  $("#loginSubmit").click(function () {
    $("#formErrorMsg").hide();
    event.preventDefault();
    var userData = {
      email: $("#loginEmail").val(),
      password: $("#loginPassword").val()
    };
    loginvalidation(userData);

  });

  // Login Form Validation for Email and Password
  function loginvalidation(userData) {
    if (!userData.email) {
      showErrorMsg("#loginEmailError", "Please fill in Email id");
      return false;
    }
    else if (!userData.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      showErrorMsg("#loginEmailError", "Please fill Email id in correct format");
      return false;
    }
    else if (!userData.password) {
      showErrorMsg("#loginPwdError", "Please fill Password");
      return false;
    }
    else {
      // If the all the validations are passed, then do Ajax call to check the information
      loginUser(userData.email.trim(), userData.password.trim());
      $("#loginEmail").val("");
      $("#loginPassword").val("");
    }
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the Main page
  function loginUser(email, password) {

    $.post("/api/login", {
      email: email,
      password: password
    }).done(function (user) {
      // console.log("userInfo",user);
      if (user.success == "Yes") {
      // Store the user info in the Session for further use. Since Password is encrypted, this should not be an issue    
        sessionStorage.removeItem('userInfo');
        sessionStorage.clear();
        sessionStorage.setItem('userInfo', JSON.stringify(user));
        window.location.reload("landingPage.html");
      }
    }).fail(function () {
      showErrorMsg("#formErrorMsg", 'Invalid Email Id or Password');
    });
  }


  // Once the sign up form is filled, get all the values
  $("#signupSubmit").click(function () {
    event.preventDefault();
    var signUpData = {
      name: $("#signupName").val(),
      email: $("#signupEmail").val(),
      password: $("#signupPassword").val(),
      state: $("#state").val(),
      city: $("#city").val()
    };
    signupvalidation(signUpData);
  });

  // Form Validation for all the sign up fields 
  function signupvalidation(signUpData) {
    if (!signUpData.name) {
      showErrorMsg("#signupNameError", "Please fill in Name");
      return false;
    }
    else if (!signUpData.city) {
      showErrorMsg("#signupCityError", "Please fill in the City");
      return false;
    }
    else if (!signUpData.state) {
      showErrorMsg("#signupStateError", "Please select a State");
      return false;
    }
    else if (!signUpData.email) {
      showErrorMsg("#signupEmailError", "Please fill in Email");
      return false;
    }
    else if (!signUpData.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      showErrorMsg("#signupEmailError", "Invalid Email Id");
      return false;
    }
    else if (!signUpData.password) {
      showErrorMsg("#signupPasswordError", "Please fill Password");
      return false;
    }
    // Call in a seperate method for Password Validation
    else if (passwordValidation(signUpData.password)) {
      // Once all the validations are passed, do Ajax call
      signupUser(signUpData.email.trim(), signUpData.password.trim(), signUpData.name.trim(), signUpData.city.trim(), signUpData.state.trim());
    }

  }


  // Do a Ajax call to create a new user in the Database using the Signup information
  function signupUser(email, password, name, city, state) {
    // console.log("email" , email);
    console.log(email, password, name, city, state);
    $.post("/api/signup", {
      name: name,
      email: email,
      password: password,
      state: state,
      city: city

    }).done(function (data) {
      // console.log("data", data);
      window.location.reload(data);
      // If there's an error, log the error

    });
  }

  // Check for some basic Passowrd Validations 
  function passwordValidation(password) {
    $("#signupPasswordError").hide();
    // check if password has at least : an upper case, lower case & a number
    // also password should have a minimum of 8 characters
    if (password.length < 8) {
      console.log("passwrod is: ", password);
      showErrorMsg("#signupPasswordError", "Password should be at least 8 characters long");
      return false;
    }
    else if (!password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      console.log("passwrod is: ", password);
      showErrorMsg("#signupPasswordError", "Password should have both lower/upper case");
      return false;
    }

    else if (!password.match(/([0-9])/)) {
      console.log("passwrod is: ", password);
      showErrorMsg("#signupPasswordError", "Password should have a number");
      return false;
    }
    return true;
  }

// Method to show error message for 3 seconds and hide it later
  function showErrorMsg(htmlId, errorMsg) {
    $(htmlId).html(errorMsg);
    $(htmlId).show();
    setTimeout(function () { $(htmlId).hide(); }, 3000);
  }
});
