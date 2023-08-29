
import throttle from 'lodash.throttle';
const inputForm = document.querySelector(".feedback-form");
const getUserInfo = JSON.parse(localStorage.getItem("feedback-form-state"));
//const { email, message } = getUserInfo;
    
function saveUserDate(event) {
  
       const email = inputForm.elements.email.value;
    const message = inputForm.elements.message.value;
   
localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }));
};

function onloadPage() {

    //const getUserInfo = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (getUserInfo) {
        const { email, message } = getUserInfo;
        inputForm.email.value = email;
        inputForm.message.value = message;
    } 
};


function btnSubmit(event) {
    event.preventDefault();
     const { email, message } = event.currentTarget.elements;
       let userInfo = {
            email: email.value,
            message: message.value,
        };
    if (inputForm.email.value === '' || inputForm.message.value === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
    
       console.log(userInfo);
    
    localStorage.removeItem("feedback-form-state");
        inputForm.reset();
        userInfo = {};
        
    };
};

window.addEventListener('load', onloadPage);
inputForm.addEventListener('input', throttle(saveUserDate), 500);
inputForm.addEventListener('submit', btnSubmit);