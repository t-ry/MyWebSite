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

// ハンバーガータブをクリックしたとき
const hum_btn = document.querySelector(".btn_open");
const body = document.querySelector("body");
hum_btn.addEventListener("click", function(){
    body.classList.toggle("open")
});

//　
const nodelist = document.querySelectorAll("li");
for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].addEventListener("click", function(){
        body.classList.toggle("open")
    })
}
