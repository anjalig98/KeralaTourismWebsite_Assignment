var email = document.getElementById("floatingInput");
var pass = document.getElementById("floatingPassword");

var sub = document.getElementById("submit");




var pattern=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
// Login-Validation

function validateLogin(){

    if(email==""){
        document.getElementById("emailaddr").innerHTML="Email Cannot be empty";
        return false;
    }
    // else if(pattern.test(email))
    // {
    //     document.getElementById("emailaddr").innerHTML="valid Email";
    //     return true;
    // }
    else if(pass.value==""){
            document.getElementById('password1').innerHTML="** Password cannot be empty"
            pass.style.border="2px solid red";
            return false;
        }
    else if(pass.length<8){
            document.getElementById('password1').innerHTML="** Not valid password";
            pass.style.border="2px solid red";
            return false;
        }
    
    else{
        return true;
    }
    

}