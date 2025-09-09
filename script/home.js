// Add money section
const addMoneyBtn = document.getElementById('add-money-btn');

// Valid credentials
const validAccountNumber = "12345678910";
const validPIN = "1234";

// Add money button functionality
addMoneyBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const bankName = document.getElementById('bank-account').value;
  const bankAccountNumber = document.getElementById('account-number').value.trim();
  const bankAccountPIN = document.getElementById('add-money-pin').value.trim();
  const amount = parseInt(document.getElementById('add-amount').value);
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);

  // Validation
  if (
    bankName === "" ||
    bankAccountNumber === "" ||
    bankAccountPIN === "" ||
    isNaN(amount) ||
    amount === null
  ) {
    alert("Please enter Bank Name, Account Number, Amount, and PIN");
    return;
  }

  if (bankAccountNumber.length !== 11 || isNaN(Number(bankAccountNumber))) {
    alert("Please enter a valid 11-digit account number");
    return;
  }

  if (bankAccountPIN.length !== 4 || isNaN(Number(bankAccountPIN))) {
    alert("Please enter a valid 4-digit PIN");
    return;
  }

  if (amount < 1 ) {
    alert("Please enter a valid amount");
    return;
  }

  if (bankAccountNumber === validAccountNumber && bankAccountPIN === validPIN){
    alert("Add money successful")
  }else{
    alert("Valid account and PIN number!")
    return;
  }

  const newAbailableBlance = amount + availableBalance;
  document.getElementById('available-balance').innerText = newAbailableBlance;
})

// Cash out section
const cashOutBtn = document.getElementById('cash-out-btn');

// Cash out button functionality
cashOutBtn.addEventListener('click',function(){
  const bankAccountNumber = document.getElementById('agent-number').value.trim();
  const bankAccountPIN = document.getElementById('cash-out-pin').value.trim();
  const amount = parseInt(document.getElementById('cash-out-amount').value);
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);

  const newAbailableBlance = availableBalance - amount;
  document.getElementById('available-balance').innerText = newAbailableBlance;
  
  
  
  
  
})

// Toggling functionality
const addMoney = document.getElementById('add-money');
const addMoneySection = document.getElementById('add-money-section');
const cashOut =document.getElementById('cash-out');
const cashOutSection = document.getElementById('cash-out-section');

addMoney.addEventListener('click', function(){
  addMoneySection.style.display = "block"
  cashOutSection.style.display = "none"
})
cashOut.addEventListener('click', function(){
  cashOutSection.style.display = "block"
  addMoneySection.style.display = "none"
})


