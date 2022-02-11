function inputValue(value){
    const inputFIeld = document.getElementById(value);
    const getAmount = inputFIeld.value;
    const newAmount = parseFloat(getAmount);
     // clear input box
    inputFIeld.value = '';
    return newAmount;
}

// FOr Deposit Button
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener('click', function(){
    // const inputDeposit = document.getElementById('depositAmount');
    // const putDepositAmount = inputDeposit.value;
    // const newDepositAmount = parseFloat(putDepositAmount);
    // console.log(putDepositAmount);
    const newDepositAmount = inputValue('depositAmount');


    const addDeposit = document.getElementById('depositAdded');
    const currentAmount = addDeposit.innerText;
    const currentDepositAmount = parseFloat(currentAmount);
    const totalDepositAmount = currentDepositAmount + newDepositAmount;

    addDeposit.innerText = totalDepositAmount;
    // clear input box
    // inputDeposit.value = '';

    // Update Account Balance
    const updateBalance  = document.getElementById('balance');
    const currentBalance = updateBalance.innerText;
    const curentDepositBaalance = parseFloat(currentBalance);
    const curentTotalDepositBaalance = curentDepositBaalance + newDepositAmount;
    updateBalance.innerText = curentTotalDepositBaalance;
    // console.log(curentTotalDepositBaalance);
    
})
    // Withdraw Balance
    const withdrawBtn = document.getElementById('withdrawButton');
    withdrawButton.addEventListener('click', function(){
        // ad eventlistener
        const withdrawBalance = document.getElementById('inputWithdraw');
        // input field data trigger
        const inputWithdrawBalance = withdrawBalance.value;
        const currentWithdrawBalnce = parseFloat(inputWithdrawBalance);
    //   pass to the withdraw balance
        const sanctionValue = document.getElementById('sanction');
        const currentSanctionValue = sanctionValue.innerText;
        const totalSanctionValue = parseFloat(currentSanctionValue);

        const currentTotalWithdrawBalnce = currentWithdrawBalnce + totalSanctionValue;
        sanctionValue.innerText = currentTotalWithdrawBalnce;
        withdrawBalance.value = '';
        // if(currentTotalWithdrawBalnce >100 ){
        //     const sanctionValue = document.getElementById('sanction');
        //     sanctionValue.innerText = 'You can not Withdraw because you have no sufficiant Balance!';
        // }

        // Ultimate Total Blance
        const updateBalance  = document.getElementById('balance');
        const currentBalance = updateBalance.innerText;
        const curentDepositBaalance = parseFloat(currentBalance);
        const curentTotalDepositBaalance = curentDepositBaalance - currentWithdrawBalnce;
        updateBalance.innerText = curentTotalDepositBaalance;
        if(curentTotalDepositBaalance <= 0){
            const updateBalance  = document.getElementById('balance');
            updateBalance.innerText ='You have 0 balance!';
        }

    })