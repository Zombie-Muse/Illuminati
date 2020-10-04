const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      const submit = document.querySelector("#submit");
      const rememberMe = document.querySelector("#rememberMe");

      submit.addEventListener("click", validate);
      console.log("waiting...");

      function setCookie(cname, cvalue, exdays){    //sets cookie...obviously
        console.log("entering set cookie routine");
        console.log("cname: " + cname);
        console.log("cvalue: " + cvalue);
        console.log("exdays: " + exdays);
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
        console.log(`hello, ${document.cookie}`);
        console.log("Now authenticated");
        alert(`Welcome, ${cvalue}`);
        window.location = "welcome.html";
        window.location.replace("welcome.html");
        console.log("now redirected");
      }

      function getCookie(cname){ //read existing cookies if they are there
        console.log("loading get cookie...");

        var name = cname + "=";
        console.log(`document cookie list is ${document.cookie}`);
        var ca = document.cookie.split(";"); //split based on ;
        console.log("displaying ca: " + ca);

        for(var i = 0; i < ca.length; i++){
          var c = ca[i];
          console.log(`c at i: ${ca[i]}`);
          while(c.charAt(0) == " ") c = c.substring(1);
          if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      function validate(){
        
        if (user != "" && user != null){
            console.log("validated");
            location.assign("index.html");
        }
        else{
            checkCookie();
        }
      }

      function checkCookie(){      //checks for cookie and validates the data in the form
        console.log("submitting...");
        var user = getCookie("username");

        if(user != "" && user != null){  
          var pass = password.value;
          console.log("Authenticated");
          alert("Welcome back, " + user + "!");
          console.log("redirect");
          location.assign("welcome.html");
          alert("something happened...");
          // window.location.assign();
          // window.location.assign("http://google.com");
        }
          else { 
            user = email.value;
            if (user != "" && user != null){
              console.log("validating...");
              setCookie("username", user, 30);
            }
        }
      }