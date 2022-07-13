

var mySlider = [
    'allimages.jpg/shop.az.png',
    "allimages.jpg/shop.az1.jpeg",
    'allimages.jpg/shop-az2.jpg'

]


let currentSlide = 0;
let img = document.querySelector('.slider img');
img.src = mySlider[currentSlide]
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')




next.addEventListener('click',function(){
currentSlide++;
if(currentSlide > mySlider.length-1){
     currentSlide = 0
}
img.src = mySlider[currentSlide];


})



prev.addEventListener('click',function(){
    currentSlide--;
    if(currentSlide === -1){
        currentSlide = mySlider.length-1
    }
    img.src = mySlider[currentSlide]
    
})


// function AutoPlay(){
//     currentSlide++;
//     if(currentSlide > mySlider.length-1){
//          currentSlide = 0
//     }
//     img.src = mySlider[currentSlide]


// }


// setInterval(() => {
//     AutoPlay()
// }, 1500);









