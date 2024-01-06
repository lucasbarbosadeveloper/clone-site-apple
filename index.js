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

// navegação do carroussel 1
const main__carroussel = document.querySelector('.main__carroussel')
const btn__back = document.querySelector('.btn__back')
const btn__after = document.querySelector('.btn__after')


btn__back.addEventListener('click', (ev) => {
    main__carroussel.scrollBy(-250,0)
})

btn__after.addEventListener('click', (ev) => {
    main__carroussel.scrollBy(250, 0)
    
})

// navegação do carroussel 2
const sec2__carroussel2 = document.querySelector('.sec2__carroussel2')
const btn__back2 = document.querySelector('.btn__back2')
const btn__after2 = document.querySelector('.btn__after2')


btn__back2.addEventListener('click', (ev) => {
    sec2__carroussel2.scrollBy(-280,0)
})

btn__after2.addEventListener('click', (ev) => {
    sec2__carroussel2.scrollBy(280, 0)  
})

// navegação do carroussel 3
const sec3__carroussel3 = document.querySelector('.sec3__carroussel3')
const btn__back3 = document.querySelector('.btn__back3')
const btn__after3 = document.querySelector('.btn__after3')


btn__back3.addEventListener('click', (ev) => {
    sec3__carroussel3.scrollBy(-280,0)
})

btn__after3.addEventListener('click', (ev) => {
    sec3__carroussel3.scrollBy(280, 0)  
})
