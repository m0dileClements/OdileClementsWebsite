// Image Gallery for Specific Projects Page

const slide = document.querySelectorAll(".slides img");
let slideIndex = 0;

let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    slide[slideIndex].classList.add("shownSlide");
    if(slide.length>0){
        intervalId = setInterval(rightSlide, 7000);
        console.log(intervalId)
    }
}

function showSlide(index){

    if(slide.length <= index){
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slide.length - 1;
    }

    slide.forEach(individualSlide => {
        individualSlide.classList.remove("shownSlide");


    });
    slide[slideIndex].classList.add("shownSlide");
    
}

function leftSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    

}

function rightSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}