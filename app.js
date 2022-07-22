let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.checkBox'); 

const enableDarkMode = () =>{
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () =>{
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', 'null');
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener( 'click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-1000px';
}
function toggler() {
    let element = document.body;
    element.classList.toggle('dark-mode');
}
