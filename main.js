//スクロールに合わせて出てくるやつ
const targetElement = document.querySelectorAll(".js-scroll-fade");
document.addEventListener("scroll",function(){
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight *.3
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("isActive");
        }
    }
})