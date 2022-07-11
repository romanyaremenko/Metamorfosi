
let partnersBlock = document.querySelector('.partners')

if(partnersBlock) {
    let logoTab = document.querySelectorAll(".logo-item")
    let reviewTab = document.querySelectorAll('.review-item')

    logoTab.forEach((itemLogo,idxLogo)=> {
        itemLogo.addEventListener('click',function (){
            logoTab.forEach((item)=> {
                item.classList.remove('active')
            })

            reviewTab.forEach((itemReview,idxReview)=> {

                if(idxLogo === idxReview) {
                    itemReview.classList.add('active')
                    itemLogo.classList.add('active')
                } else {
                    itemReview.classList.remove('active')
                }
            })
        })
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView:1.2,
    // loop:true,
    spaceBetween:10,
    centeredSlides:true,
    scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 230,
        // hide: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2.4,
            spaceBetween: 20,
            centeredSlides:false,
        },
        992: {
            slidesPerView: 3.4,
            spaceBetween: 20,
            centeredSlides:false,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let tabs = document.querySelector('.tabs')
if(tabs) {
   let tabsList =  document.querySelectorAll('.radio')

    tabsList.forEach((item)=> {
        item.addEventListener('click',function (){
            tabsList.forEach((item)=> {
                item.parentNode.classList.remove('active')
            })
            item.parentNode.classList.add('active')
        })
    })
}


let customSelect = document.querySelector(".select");
if (customSelect) {
    document.querySelectorAll('.select').forEach(select => {
        //Выбриаем все выпадающие списки на странице
        let selectCurrent = select.querySelector('.select__current');
        if (selectCurrent) {
            let selectList = select.querySelector('.select__list');
            let selectInput = select.querySelector('.select__input');
            let selectItem = select.querySelectorAll('.select__item');
            //по клику добавляем/удалям класс
            selectCurrent.addEventListener('click', () => {
                selectList.classList.toggle('show')
            })
            //обходим элементы списка
            selectItem.forEach(item => {
                //обрабатываем событие клик по элементу
                item.addEventListener('click', () => {
                    //получаем значение из data-атрибута
                    let itemValue = item.getAttribute('data-value')
                    //получаем содержание элемента (текст)
                    let itemText = item.textContent
                    //присваиваем инпуту ранее полученное значение из data-атрибута
                    selectInput.value = itemValue
                    //присваиваем текущее значение (текст)
                    selectCurrent.textContent = itemText
                    //скрываем выпадающий список
                    selectListHide()
                })
            })
            // функция закрытия выпадающего списка
            let selectListHide = () => {
                selectList.classList.remove('show');
            }
            //Закрываем выпадающий сисок, если клик был вне области
            document.addEventListener('mouseup', (e) => {
                if (!select.contains(e.target)) selectListHide()
            })
        }
    })
}



document.addEventListener('DOMContentLoaded', () => {
    const $bigBall = document.querySelector('.cursor__ball--big')
    const $smallBall = document.querySelector('.cursor__ball--small')
    const $hoverables = document.querySelectorAll('.cursor_activ')

    document.body.addEventListener('mousemove', onMouseMove)
    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover)
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
    }

    // Move the cursor
    function onMouseMove(e) {
        TweenMax.to($bigBall, 0.4, {
            x: e.clientX - 15,
            y: e.clientY - 15
        })
        TweenMax.to($smallBall, 0.1, {
            x: e.clientX - 2,
            y: e.clientY - 2
        })
    }

    function onMouseHover() {
        TweenMax.to($bigBall, 0.3, {
            scale: 0.5
        })
    }

    function onMouseHoverOut() {
        TweenMax.to($bigBall, 0.3, {
            scale: 1
        })
    }
})


let teamBlock = document.querySelector('.team')

if(teamBlock) {
    let popupTeam = document.querySelector(".team-popup")
    let teamSlide = document.querySelectorAll(".team-item")
    let teamPopup = document.querySelectorAll('.team-popup-item')


    teamSlide.forEach((itemSlide,idxSlide)=> {
        itemSlide.querySelector('.team-item-btn').addEventListener('click',function (){
            teamPopup.forEach((itemPopup,idxPopup)=> {
                if(idxSlide === idxPopup) {
                    itemPopup.classList.add("active")
                    popupTeam.classList.add("active")
                }
            })
        })


        teamPopup.forEach((itemPopup,idxPopup)=> {
            itemPopup.querySelector('.close').addEventListener('click',function (){
                itemPopup.classList.remove("active")
                popupTeam.classList.remove("active")
            })
        })

    })
}



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


let hamburegBtn = document.querySelector(".hamburger")
let hamburegOpen = document.querySelector(".hamburger-open")
let hamburegClose = document.querySelector(".hamburger-close")
let hamburegMenu = document.querySelector(".hamburger-menu")

hamburegBtn.addEventListener('click',function (){
    hamburegOpen.classList.toggle('active')
    hamburegMenu.classList.toggle('active')
    hamburegClose.classList.toggle('active')
    document.querySelector('body').classList.toggle('hidden')
})


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


if(window.innerWidth <= 992) {
    let header = document.querySelector('.header'),
    scrollPrev = 0;
    window.addEventListener('scroll',function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if ( scrolled > 200 && scrolled > scrollPrev ) {
                header.classList.add('out');
            } else {
                header.classList.remove('out');
            }
            scrollPrev = scrolled;
    })
}
