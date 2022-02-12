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
// Total Balance
function totalUpdatedBalance(newDepositAmount, isAdded){
    const updateBalance  = document.getElementById('balance');
    const currentBalance = updateBalance.innerText;
    const curentDepositBaalance = parseFloat(currentBalance);
    updateBalance.innerText = curentDepositBaalance + newDepositAmount;
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
    const currentTotalUpdateAmount = updateTotalField('depositAdded', newDepositAmount);
    console.log(currentTotalUpdateAmount);
    totalUpdatedBalance(newDepositAmount, true);
})
    // Withdraw Balance function
    const withdrawBtn = document.getElementById('withdrawButton');
    withdrawButton.addEventListener('click', function(){
        const currentWithdrawBalnce = inputValue('inputWithdraw');
        const currentTotalUpdateAmount = updateTotalField('sanction', currentWithdrawBalnce);
        console.log(currentTotalUpdateAmount);
        // updated withdraw total balance
        totalUpdatedBalance(currentWithdrawBalnce, false);
    })