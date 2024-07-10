const login=document.querySelector("#login");
const signup=document.querySelector("#signup");
const loginContainer = document.querySelector("#login-container");
const signupContainer = document.querySelector(".signup-container");
const nav=document.querySelector("nav");
const main=document.querySelector("main");

login.addEventListener("click",()=>{
    console.log("login select");
    loginContainer.style.display = "block";
    nav.style.display = "none";
    main.style.display = "none";


});
signup.addEventListener("click",()=>{
    console.log("signup select");
    nav.style.display = "none";
    main.style.display = "none";
    signupContainer.style.display = "block";
});
const closeButton1 = loginContainer.querySelector('.close-btn1');
closeButton1.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    nav.style.display = "block";
    main.style.display = "block";
  });
  const closeButton2 = signupContainer.querySelector('.close-btn2');
closeButton2.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    nav.style.display = "block";
    main.style.display = "block";
  });
