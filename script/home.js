// Valid credentials
const validAccountNumber = "12345678910";
const validPIN = "1234";

// Transactions array
const transactionsData = [];

// Add money section
const addMoneyBtn = document.getElementById('add-money-btn');
// Add money functionality
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

  if (amount < 1) {
    alert("Please enter a valid amount");
    return;
  }

  if (bankAccountNumber === validAccountNumber && bankAccountPIN === validPIN) {
    alert("Add money successful")
  } else {
    alert("Valid account and PIN number!")
    return;
  }

  const newAbailableBlance = amount + availableBalance;
  document.getElementById('available-balance').innerText = newAbailableBlance;

  // Add transaction to array
  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString()
  }
  transactionsData.push(data);
  console.log(transactionsData);
})


// Cash out section
const cashOutBtn = document.getElementById('cash-out-btn');
// Cash out functionality
cashOutBtn.addEventListener('click', function () {
  const bankAccountNumber = document.getElementById('agent-number').value.trim();
  const bankAccountPIN = document.getElementById('cash-out-pin').value.trim();
  const amount = parseInt(document.getElementById('cash-out-amount').value);
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);

  // Validation
  if (bankAccountNumber === "" || bankAccountPIN === "" || amount === "" || isNaN(amount) || amount === null) {
    alert("Please enter Agent Number, Amount, and PIN")
    return;
  }

  if (bankAccountNumber.length !== 11 || isNaN(Number(bankAccountNumber))) {
    alert("Please enter a valid 11-digit agent number")
    return;
  }

  if (bankAccountPIN.length !== 4 || isNaN(Number(bankAccountPIN))) {
    alert("Please enter a valid 4-digit PIN !")
  }

  if (bankAccountNumber === validAccountNumber && bankAccountPIN === validPIN) {
    alert("Cash out succcessful !")
  } else {
    alert("Wrong credential")
    return;
  }
  const newAbailableBlance = availableBalance - amount;
  document.getElementById('available-balance').innerText = newAbailableBlance;

  // Add transaction to array
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString()
  }
  transactionsData.push(data);
  console.log(transactionsData);
})

//  Transfer money section
const transferMoneyBtn = document.getElementById('transfer-money-btn');
// Transfer money functionality
transferMoneyBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const bankAccountNumber = document.getElementById('user-account-number').value.trim();
  const bankAccountPIN = document.getElementById('transfer-pin').value.trim();
  const amount = parseInt(document.getElementById('transfer-amount').value);
  const availableBalance = document.getElementById('available-balance').innerText;
})

// Get bonus section
const getBonusBtn = document.getElementById('get-bonus-btn');
// Get bonus functionality
getBonusBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const couponCode = document.getElementById('coupon-code').value.trim();
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);
  const myCoupon = "MYCOUPON";
  const bonus = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  if (couponCode === "") {
    alert("Please enter your coupon code")
    return;
  }

  if (couponCode === myCoupon) {
    alert(`🎉 Congratulations! You won ${bonus} taka`)
  } else {
    alert("❌ Invalid Coupon Code. Try again!")
    return;
  }

  const newAbailableBlance = availableBalance + bonus;
  document.getElementById('available-balance').innerText = newAbailableBlance;

  // Add transaction to array
  const data = {
    name: "Get Bonus",
    date: new Date().toLocaleTimeString()
  }
  transactionsData.push(data);
  console.log(transactionsData);
})

// Pay bill section
const payNowBtn = document.getElementById('pay-now-btn')
// Pay bill functionality
payNowBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const bankAccount = document.getElementById('pay-bill-bank-account').value;
  const billerAccountNumber = document.getElementById('biller-account-number').value.trim();
  const pin = document.getElementById('pay-bill-pin').value.trim();
  const amount = parseInt(document.getElementById('pay-amount').value);
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);

  if (bankAccount === "" || billerAccountNumber === "" || pin === "" || isNaN(amount) || amount === null) {
    alert("Please select Bank Name, Account Number, Amount, and PIN")
    return;
  }

  if (billerAccountNumber.length !== 11 || isNaN(Number(billerAccountNumber))) {
    alert("Please enter a valid 11-digit account number");
    return;
  }

  if (amount < 1 || amount > availableBalance) {
    alert("Please enter a valid amount");
    return;
  }

  if (pin.length !== 4 || isNaN(Number(pin))) {
    alert("Plrase enter a valid 4-digit PIN")
    return;
  }

  if (billerAccountNumber === validAccountNumber && pin === validPIN) {
    alert("Pay bill successful !");
  } else {
    alert("Wrong credential");
    return;
  }

  const newAbailableBlance = availableBalance - amount;
  document.getElementById('available-balance').innerText = newAbailableBlance;

  // Add transaction to array
  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString()
  }
  transactionsData.push(data);
  console.log(transactionsData);

})

// Transactions section
const showTransactions = document.getElementById('transactions');
showTransactions.addEventListener('click', function () {

  const transactionsCards = document.getElementById('transactions-cards');
  transactionsCards.innerText = "";

  for (const data of transactionsData) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="flex flex-col-reverse gap-y-3">
        <div class="px-4 py-3 border border-[#0808081a] bg-white rounded-xl flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <picture class="w-11 h-11 bg-[#0808080d] flex items-center justify-center rounded-full"><img
                src="./images/wallet1.png" alt=""></picture>
            <div>
              <h4 class="text-base/normal text-[#080808b3] font-semibold">${data.name}</h4>
              <span class="text-xs/normal text-[#080808b3] font-normal">${data.date}</span>
            </div>
          </div>
          <div><i class="fa-solid fa-ellipsis-vertical text-[#080808b3] text-2xl"></i></div>
        </div>
      </div>
    `
    transactionsCards.appendChild(div);
  }

})

// Toggling functionality
const addMoney = document.getElementById('add-money');
const addMoneySection = document.getElementById('add-money-section');

const cashOut = document.getElementById('cash-out');
const cashOutSection = document.getElementById('cash-out-section');

const transferMoney = document.getElementById('transfer-money');
const transferMoneySection = document.getElementById('transfer-money-section');

const getBonus = document.getElementById('get-bonus');
const getBonusSection = document.getElementById('get-bonus-section');

const payBill = document.getElementById('pay-bill');
const payBillSection = document.getElementById('pay-bill-section');

const transactions = document.getElementById('transactions');
const transactionsSection = document.getElementById('transactions-section');

addMoney.addEventListener('click', function () {
  addMoneySection.style.display = "block"
  cashOutSection.style.display = "none"
  transferMoneySection.style.display = "none"
  getBonusSection.style.display = "none"
  payBillSection.style.display = "none"
  transactionsSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('add-money').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('add-money').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
});
cashOut.addEventListener('click', function () {
  cashOutSection.style.display = "block"
  addMoneySection.style.display = "none"
  transferMoneySection.style.display = "none"
  getBonusSection.style.display = "none"
  payBillSection.style.display = "none"
  transactionsSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('cash-out').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('cash-out').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
})
transferMoney.addEventListener('click', function () {
  transferMoneySection.style.display = "block"
  addMoneySection.style.display = "none"
  cashOutSection.style.display = "none"
  getBonusSection.style.display = "none"
  payBillSection.style.display = "none"
  transactionsSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('transfer-money').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('transfer-money').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
})
getBonus.addEventListener('click', function () {
  getBonusSection.style.display = "block"
  addMoneySection.style.display = "none"
  cashOutSection.style.display = "none"
  transferMoneySection.style.display = "none"
  payBillSection.style.display = "none"
  transactionsSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('get-bonus').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('get-bonus').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
})
payBill.addEventListener('click', function () {
  payBillSection.style.display = "block"
  addMoneySection.style.display = "none"
  cashOutSection.style.display = "none"
  transferMoneySection.style.display = "none"
  getBonusSection.style.display = "none"
  transactionsSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('pay-bill').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('pay-bill').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
})
transactions.addEventListener('click', function () {
  transactionsSection.style.display = "block"
  addMoneySection.style.display = "none"
  cashOutSection.style.display = "none"
  transferMoneySection.style.display = "none"
  getBonusSection.style.display = "none"
  payBillSection.style.display = "none"

  const formBtns = document.getElementsByClassName('form-btn');
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "text-[#080808b3]");

    document.getElementById('transactions').classList.remove("border-[#0808081a]", "text-[#080808b3]");
    document.getElementById('transactions').classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
  }
})

