function inputValue(value){
    const inputFIeld = document.getElementById(value);
    const getAmount = inputFIeld.value;
    const newAmount = parseFloat(getAmount);
     // clear input box
    inputFIeld.value = '';
    return newAmount;
}
function updateTotalField(updateTotal, newDepositAmount){
    const addAmount = document.getElementById(updateTotal);
    const currentAmount = addAmount.innerText;
    const currentTotalAmount = parseFloat(currentAmount);
    const totalDepositAmount = currentTotalAmount + newDepositAmount;
    addAmount.innerText = totalDepositAmount;
    return totalDepositAmount;
}
function getCurrentBalance(){
    const updateBalance  = document.getElementById('balance');
    const currentBalance = updateBalance.innerText;
    const curentDepositBaalance = parseFloat(currentBalance);
    return  curentDepositBaalance;
}
// Total Balance
function totalUpdatedBalance(newDepositAmount, isAdded){
    const updateBalance  = document.getElementById('balance');
    const curentDepositBaalance = getCurrentBalance();
    if(isAdded == true){
        updateBalance.innerText = curentDepositBaalance + newDepositAmount;
    }
    else{
        updateBalance.innerText = curentDepositBaalance - newDepositAmount;
    }
}
// FOr Deposit Button
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener('click', function(){
    const newDepositAmount = inputValue('depositAmount');
// get and Updated Deposit total
    if(newDepositAmount >0){
    updateTotalField('depositAdded', newDepositAmount);
    totalUpdatedBalance(newDepositAmount, true);
    }
})
    // Withdraw Balance function
    const withdrawBtn = document.getElementById('withdrawButton');
    withdrawButton.addEventListener('click', function(){
        const currentWithdrawBalnce = inputValue('inputWithdraw');
        const CurrentBalance = getCurrentBalance();
        if(currentWithdrawBalnce >0 && currentWithdrawBalnce <= CurrentBalance){
        updateTotalField('sanction', currentWithdrawBalnce);
          // updated withdraw total balance
        totalUpdatedBalance(currentWithdrawBalnce, false);
        }
        if(currentWithdrawBalnce > CurrentBalance){
            console.log('You have no sufficiant Balance!');
        }
    })