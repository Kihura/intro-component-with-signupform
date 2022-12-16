window.onload = function() {
    // your JavaScript code goes here
    const texterror = document.querySelector(".error");
    const emailInput = document.querySelector("#email");
    const button = document.querySelector(".button")
    const erroricon = document.querySelector(".icon-error");
    const icon1= document.querySelector(".icon-error1");
    const icon2 = document.querySelector(".icon-error2");
    const icon3 = document.querySelector(".icon-error3");
    button.addEventListener("click", function() {
      // check if email is in the correct format using a regex
        if (!emailInput.value.match(/^\S+@\S+\.\S+$/) && emailInput.value.trim() !== "") {
        // if email is not in correct format and input is not empty, show error message
        texterror.style.display="block";
        icon2.style.display="block";
        } else {
        // if email is in correct format or input is empty, hide error message
        texterror.style.display="none";
        icon2.style.display="none";
        emailInput.style.border="";

        }
    });

    const fname = document.querySelector("#fname");
    const texterrorbis = document.querySelector(".error-bis");
    button.addEventListener("click", function() {
        // check if email is in the correct format using a regex
        if ( fname.value.trim() !== "") {
          // if email is not in correct format and input is not empty, show error message
          texterrorbis.style.display="none";
          erroricon.style.display="none";
          fname.style.border="";
            } else {
          // if email is in correct format or input is empty, hide error message
            
            texterrorbis.style.display="block";
            erroricon.style.display="block";
            fname.style.border="red 1px solid";
            }
        });
        const lname = document.querySelector("#lname");
    const errorlname = document.querySelector(".error-lname");
    button.addEventListener("click", function() {
        // check if email is in the correct format using a regex
        if ( lname.value.trim() !== "") {
          // if email is not in correct format and input is not empty, show error message
          errorlname.style.display="none";
          icon1.style.display="none";
          lname.style.border=""
            } else {
          // if email is in correct format or input is empty, hide error message
            errorlname.style.display="block";
            icon1.style.display="block";
            lname.style.border="red 1px solid";
            
            }
        });

          const pass = document.querySelector("#Password");
          const errorpass = document.querySelector(".error-password");
          button.addEventListener("click", function() {
        // check if email is in the correct format using a regex
        if ( pass.value.trim() !== "") {
          // if email is not in correct format and input is not empty, show error message
          errorpass.style.display="none";
          icon3.style.display="none"
          pass.style.border=""
            } else {
          // if email is in correct format or input is empty, hide error message
            
            errorpass.style.display="block";
            icon3.style.display="block";
            pass.style.border="red 1px solid"
            }
        });
        

    }