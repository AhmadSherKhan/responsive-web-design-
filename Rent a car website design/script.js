let signupForm=document.querySelector('.signupform');

document.querySelector('#signupbtn').onclick = () =>{
    signupForm.classList.toggle('active');
}
document.querySelector('#closeloginbtn').onclick = () =>{
    signupForm.classList.remove('active');
}

let loginForm=document.querySelector('.loginform');

document.querySelector('#loginbtn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#closeloginform').onclick = () =>{
    loginForm.classList.remove('active');
}

let nav_bar=document.querySelector('.navbar');

document.querySelector('#menubtn').onclick = () =>{
    nav_bar.classList.toggle('active');
}
// document.querySelector('#closeloginform').onclick = () =>{
//     nav_bar.classList.remove('active');
// }