var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }
var name1=document.getElementById("name");

var contact=document.getElementById("contact");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var confirmpass=document.getElementById("confirmpass");
let error=document.getElementById("error");

var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

// Password Strength Meter

pass.addEventListener('input', function() {
  var val = pass.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } 
  else {
    text.innerHTML = "";
  }
});


//  Signup-Validation

function validateSignup()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno1 = /^\d{10}$/;
   
    if(name1.value=="")
    {
        name1.value.border="2px solid red";
        document.getElementById("firstnam").innerHTML=" Pls enter your  first name ";
        return false;

    }
    else if(name1.length<2 )
    {
        name1.value.border="2px solid red";
        document.getElementById("firstnam").innerHTML="  enter valid   name ";
        return false;

    }
    else if(name1.length>15 )
    {
        name1.value.border="2px solid red";
        document.getElementById("firstnam").innerHTML="  enter valid   name ";
        return false;

    }
    
    else if(email.value=="")
    {
        document.getElementById("emailid").innerHTML="Email field cannot be empty";
        email.value.border="2px solid red";
        return false;
    }
    // else if(regexp.test(email.value))
    // {
    //     document.getElementById("emailid").innerHTML="valid";
    //     return true;
    // }
    else if(contact.value=="")
    {
        contact.value.border="2px solid red";
        document.getElementById("contactno").innerHTML=" Pls Enter Contact number";
        return false;

    }
    else if (!isNaN(contact)){  
        document.getElementById("contactno").innerHTML="Enter Numeric value only";  
        return false;  
      }
    
    else if(contact.length>10)
      {
                document.getElementById("contactno").innerHTML="  not a valid Contact number";
                return false;
              
              }
            // else if()
            //   {
            //     contact.value.border="2px solid red";
            //     document.getElementById("contactno").innerHTML=" Pls Enter valid Contact number";
                
            //   return false;
            //   }
        
 

      
      else if(phoneno.test(contact.value))
      {
          contact.value.border="2px solid red";
          document.getElementById("contactno").innerHTML=" valid Contact number";
          
  
      }
      
    else if(pass.value=="")
    {
        pass.style.border="2px solid red";
        document.getElementById("passwo").innerHTML="Password cannot be empty";
        return false;
    }

    else if(pass.value.length<8)
    {
        pass.style.border="2px solid red";
        document.getElementById("passwo").innerHTML="password should be have a length of 8";
        return false;
       
    }
    else if(pass.value.length>20)
    {
        pass.style.border="2px solid red";
        document.getElementById("passwo").innerHTML="password length exceeded";
        return false;
       
    }

    else if(confirmpass.value=""){
        confirmpass.style.border="2px solid red";
        document.getElementById("conpassword").innerHTML="Retype the Password again";
        
        return false;
    }

   
    else if(pass.value.length!=confirmpass.value.length)
    {
        
        confirmpass.style.border="2px solid red";
        document.getElementById("conpassword").innerHTML="Password does not match";
        return false;
    }
    

    
    else
    {
        return true;
    }
   

}
    