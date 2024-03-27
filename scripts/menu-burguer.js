// declara as referencias aos botões
const menuBurguerBtn = document.querySelector('.burguer-button')
const closeBtn = document.querySelector('.close-button')

// declara os elementos manipulados
const navbar = document.querySelector('.header__navbar')

menuBurguerBtn.addEventListener('click', () => {
    navbar.setAttribute('style', 'transform:translateX(0%);')
    menuBurguerBtn.setAttribute('style','display:none')
})

closeBtn.addEventListener('click', () => {
    navbar.setAttribute('style', 'transform:translateX(-100%);')
    menuBurguerBtn.setAttribute('style','display:block')
})