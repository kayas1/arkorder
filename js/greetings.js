const loginForm=document.querySelector(".login-form");
const loginInput= document.querySelector(".login-form input");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    window.open("loading-screen.html", "_self");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}

loginForm.addEventListener("submit", onLoginSubmit);
