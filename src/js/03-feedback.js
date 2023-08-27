
import throttle from 'lodash.throttle';
const inputForm = document.querySelector(".feedback-form");
    
function saveUserDate(event) {
  
       const email = inputForm.elements.email.value;
    const message = inputForm.elements.message.value;
   
localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }));
};

function onloadPage() {

    const getUserInfo = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (getUserInfo) {
        const { email, message } = getUserInfo;
        inputForm.email.value = email;
        inputForm.message.value = message;
    } 
};


function btnSubmit(event) {
console.log({ email: inputForm.email.value, message: inputForm.message.value });
    event.preventDefault();
    localStorage.clear();
    inputForm.reset();
    
};

window.addEventListener('load', onloadPage);
inputForm.addEventListener('input', throttle(saveUserDate), 500);
inputForm.addEventListener('submit', btnSubmit);