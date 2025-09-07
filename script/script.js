// Login Section
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function(){
  const mobileNumberStr = document.getElementById('mobile-number').value.trim();
  const pinNumberStr = document.getElementById('pin-number').value.trim();

  // Validation
  if(mobileNumberStr === "" || pinNumberStr === ""){
    alert("Please enter both mobile number and PIN");
    return;
  }

  if(mobileNumberStr.length !== 11 || isNaN(Number(mobileNumberStr))){
    alert("Please enter a valid 11-digit mobile number");
    return;
  }

  if(pinNumberStr.length !== 4 || isNaN(Number(pinNumberStr))){
    alert("Please enter a valid 4-digit PIN");
    return;
  }

  // Valid credentials
  const validMobileNumber = "12345678910";
  const validPinNumber = "1234";

  // Check credentials
  if(mobileNumberStr === validMobileNumber && pinNumberStr === validPinNumber){
    alert("Login successful!");
    window.location.href = "./home.html";
  }
  else{
    alert("Wrong credentials");
  }
});