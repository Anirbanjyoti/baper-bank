// 1. add addEventListener
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    // 2. set username by id
    const getUserName = document.getElementById('userName');
    const userNameText = getUserName.value;
    // console.log(userNameText);
    // 2. set password by id
    const getPassword = document.getElementById('userPass');
    const userPassword = getPassword.value;
    // console.log(userPassword);
    if(userNameText == 'anirbanjyoti708@gmail.com' && userPassword == 12345){
        window.location.href = 'banking.html';
    }
    else{
        document.write('You have input wrong User Password!');
    }
    
})