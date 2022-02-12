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
function totalDepositBalance(newDepositAmount){
    const updateBalance  = document.getElementById('balance');
    const currentBalance = updateBalance.innerText;
    const curentDepositBaalance = parseFloat(currentBalance);
    const curentTotalDepositBaalance = curentDepositBaalance + newDepositAmount;
    updateBalance.innerText = curentTotalDepositBaalance;
}
// FOr Deposit Button
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener('click', function(){
    const newDepositAmount = inputValue('depositAmount');
// get and Updated Deposit total
    const currentTotalUpdateAmount = updateTotalField('depositAdded', newDepositAmount);
    console.log(currentTotalUpdateAmount);
    // Update Main Account Balance
    // const updateBalance  = document.getElementById('balance');
    // const currentBalance = updateBalance.innerText;
    // const curentDepositBaalance = parseFloat(currentBalance);
    // const curentTotalDepositBaalance = curentDepositBaalance + newDepositAmount;
    // updateBalance.innerText = curentTotalDepositBaalance;
    totalDepositBalance(newDepositAmount);
})
    // Withdraw Balance function
    const withdrawBtn = document.getElementById('withdrawButton');
    withdrawButton.addEventListener('click', function(){
        const currentWithdrawBalnce = inputValue('inputWithdraw');
    //   pass to the withdraw balance
        const sanctionValue = document.getElementById('sanction');
        const currentSanctionValue = sanctionValue.innerText;
        const totalSanctionValue = parseFloat(currentSanctionValue);
        const currentTotalWithdrawBalnce = currentWithdrawBalnce + totalSanctionValue;
        sanctionValue.innerText = currentTotalWithdrawBalnce;
        // Ultimate Total Blance
        const updateBalance  = document.getElementById('balance');
        const currentBalance = updateBalance.innerText;
        const curentDepositBaalance = parseFloat(currentBalance);
        const curentTotalDepositBaalance = curentDepositBaalance - currentWithdrawBalnce;
        updateBalance.innerText = curentTotalDepositBaalance;
        // if(curentTotalDepositBaalance <= 0){
        //     const updateBalance  = document.getElementById('balance');
        //     updateBalance.innerText ='You have 0 balance!';
        // }

    })