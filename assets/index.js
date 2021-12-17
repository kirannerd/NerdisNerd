//for toggle navbar
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

//show navbar
function show()
{
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.background="linear-gradient(217deg,rgb(249, 213, 2110.8),rgb(205, 156, 118, 0.8),rgb(232, 176, 175) 70.71%)";
    openMenu.style.display = 'none';
}
//hide navbar
function close()
{
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'flex';
    location.reload();
}
