javaScript(validationlogic-script.js)
function validatename(name){
    const regex=/^[A-Za-z/s]+$/;
    if(name.trim()===""){
        return "name cannot be empty";
    }
    if(!regex.test(test)){
        return "name can only contain letters and spaces";
    }
    return "name is vaild";
}
function validatemail(email){
    const regex=/^[a-zA-ZO-9.-%+-]+@[a-zA-ZO-9.-]+\.[a-zA-Z]{2}$/;
    if(email.trim()===""){
        return "email cannot be empty";
    }
    if(!regex.test(email)){
        return "invalid email format";
    }
    return "email is vaild";
}
function validatepassword(passowrd){
    const regex=/^(?=.*[A-Z])(?=.*\d){8}$/;
    if(passowrd.trim()===""){
        return "password cannot be empty";
    }
    if(!regex.test(passowrd)){
        return "password must be at least 8 characters long, cointain an uppercase letter and a number";
    }
    return "password is vaild";
}
function validatephone(phone){
    const regex=/^[0-9]{10}$/;
    if(phone.trim()===""){
        return "phone numbercannot be empty";
    }
    if(!regex.test(phone)){
        return "phone number must be 10 digits long";
    }
    return "phone number is valid";
}
function validateform(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const passowrd=document.getElementById("password").value;
    const phone=document.getElementById("phone").value;

    const nameerror=validatename(name);
    const emailerror=validatename(email);
    const passworderror=validatename(passowrd);
    const phoneerror=validatename(phone);

    if(nameerror==="name is valid"&&emailerror==="email is valid"&&passworderror==="password is valid"&&phoneerror==="phone number is valid"){
        return true;
    }
    document.getElementById("nameerror").innerText=nameerror==="name is valid"?" ":nameerror;
    document.getElementById("emailerror").innerText=emailerror==="email is valid"?" ":emailerror;
    document.getElementById("passworderror").innerText=passworderror==="password is valid"?" ":passworderror;
    document.getElementById("phoneerror").innerText=phoneerror==="phone number is valid"?" ":phoneerror;
    return false;
}