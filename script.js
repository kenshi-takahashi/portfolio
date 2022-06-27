//Бургер меню
let down = false;
let shadow = document.querySelector('.shadow')
let burger = document.querySelector('.burger')

function isDown() {
    if (down) {
        burger.style.left = '-25%';
        shadow.style.left = '-100%';
        shadow.style.opacity = '0';
        down = false;
    } else {
        burger.style.left = '0';
        shadow.style.left = '0';
        shadow.style.opacity = '40%';
        down = true;
    }
}
//=====================

//Скролл на стрелочке
function ScrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 103,
        behavior: 'smooth'
    })
}

let cursor = document.querySelector('.intro_cursor');
let target = document.querySelector('.features');

cursor.addEventListener('click', () => {
    ScrollTo(target);
})


//Скролл на кнопках 2
function ScrollTo2(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

function ScrollTo3(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 35,
        behavior: 'smooth'
    })
}

function ScrollTo4(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 170,
        behavior: 'smooth'
    })
}

function ScrollTo5(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop + 40,
        behavior: 'smooth'
    })
}

let introConnect = document.querySelector('.intro_connect_button');

let burgerConnect = document.querySelector('.burger_friends');
let burgerProfile = document.querySelector('.burger_home')
let burgerSkills = document.querySelector('.burger_news')
let burgerMyProjects = document.querySelector('.burger_settings')

let connect = document.querySelector('.keep_and_touch');
let profile = document.querySelector('.head');
let skills = document.querySelector('.features');
let myProjects = document.querySelector('.our_works');

introConnect.addEventListener('click', () => {
    ScrollTo5(connect);
})

burgerConnect.addEventListener('click', () => {
    ScrollTo5(connect);
})
burgerProfile.addEventListener('click', () => {
    ScrollTo2(profile);
})
burgerSkills.addEventListener('click', () => {
    ScrollTo(skills);
})
burgerMyProjects.addEventListener('click', () => {
    ScrollTo4(myProjects);
})


//=====================