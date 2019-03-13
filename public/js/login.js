$(document).ready(function() {
 
  var userInfo;
  // $(".tab")
  $('#loginlink').click();
    // When the form is submitted, we validate there's an email and password entered
    $("#loginSubmit").click(function() {
      event.preventDefault();
      var userData = {
        email: $("#loginEmail").val().trim(),
        password: $("#loginPassword").val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }else{
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      $("#loginEmail").val("");
      $("#loginPassword").val("");
      }
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(user) {
        // console.log("userInfo",user);
        if(user.success == "Yes")
        {
          // console.log()
          sessionStorage.removeItem('userInfo');
          sessionStorage.clear();
          sessionStorage.setItem('userInfo', JSON.stringify(user));
          window.location.reload("landingPage.html");
      }

      });

  }
    $("#signupSubmit").click(function() {
      event.preventDefault();
      var signUpData = {
        name: $("#signupName").val().trim(),
        email: $("#signupEmail").val().trim(),
        password: $("#signupPassword").val().trim(),
        state:$("#state").val().trim(),
        city:$("#city").val().trim()
      };
  
      if (!signUpData.email && !signUpData.password && !signUpData.name) {
        alert ("Please fill in all the details for signing up");
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      signupUser(signUpData.email, signUpData.password, signUpData.name, signUpData.city, signUpData.state);
        $("#signupName").val("");
        $("#signupEmail").val("");
        $("#signupPassword").val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function signupUser(email, password, name, city, state) {
      console.log("email" , email);
      $.post("/api/signup", {
        name: name,
        email: email,
        password: password,
        state : state,
        city :city
      }).done(function(data) {
        console.log("data", data);
        window.location.reload(data);
        // If there's an error, log the error
      })
      // .catch(function(err) {
      //   console.log(err);
      // });
    }
  });
  