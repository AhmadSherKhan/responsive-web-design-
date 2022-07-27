 let menu= document.querySelector('#menubar');
let navbar= document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});


window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header2').classList.remove('active');
    }
}



let loginForm=document.querySelector('.loginform');

document.querySelector('#loginbtn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#closeloginbtn').onclick = () =>{
    loginForm.classList.remove('active');
}


let countDate = new Date('august 10, 2022 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}
setInterval(function(){
    CountDown();
}, 1000)