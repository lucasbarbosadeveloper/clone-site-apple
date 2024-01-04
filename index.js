const headerMobile = document.querySelector('.header__mobile')
const buttonMenu = document.querySelector('.button__menu')
const buttonClose = document.querySelector('.button__close')

// menu hamburger
buttonMenu.addEventListener('click', (ev) => {
    headerMobile.setAttribute('style', 'display: block')
})

buttonClose.addEventListener('click', (ev) => {
    headerMobile.setAttribute('style', 'display: none')
})

// hover nav
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseover', (ev) => {
        document.querySelector(`.drop${dropdown.id}`).classList.remove('show')
    })
})

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseout', (ev) => {
        document.querySelector(`.drop${dropdown.id}`).classList.add('show')
    })
})
