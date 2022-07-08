
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
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});