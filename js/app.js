document.addEventListener("DOMContentLoaded", function () {
    
    const prev = document.querySelector(".slider_prev")
    const next = document.querySelector(".slider_next")
    
    const elements = Array.from(document.querySelectorAll(".slider_core_el"))

    let visibleSlide = 0;

    elements[visibleSlide].classList.add("slider_core_visible");

    const disableNext = () => {
        next.classList.add("disabled")
    }

    const disablePrev = () => {
        prev.classList.add("disabled")
    }

    const enableNext = () => {
        next.classList.remove("disabled")
    }

    const enablePrev = () => {
        prev.classList.remove("disabled")
    }


    const showNext = () => {

        elements[visibleSlide].classList.remove("slider_core_visible");
        visibleSlide += 1;
        
        if (visibleSlide >= elements.length) {
            console.log("no more slides to display")
            visibleSlide -=1
            elements[visibleSlide].classList.add("slider_core_visible");
        };

        if (visibleSlide === elements.length-1) {
            disableNext();
        }


        if (visibleSlide === 1) {
            enablePrev();
        }


        if (visibleSlide < elements.length) {
            elements[visibleSlide].classList.add("slider_core_visible");
            console.log (
                visibleSlide + 1 + " slide is visible"
            )
        }    
    }    

    const showPrev = () => {

        elements[visibleSlide].classList.remove("slider_core_visible");
        visibleSlide -= 1;
        
        if (visibleSlide < 0) {
            console.log("no more slides to display")
            visibleSlide +=1
            elements[visibleSlide].classList.add("slider_core_visible");
        };

        if (visibleSlide === 0) {
            disablePrev();
        }

        if (visibleSlide === elements.length-2) {
            enableNext();
        }

        if (visibleSlide >= 0) {
            elements[visibleSlide].classList.add("slider_core_visible");
            console.log (
                visibleSlide + 1 + " slide is visible"
            )
        }    
    }   
   

    next.addEventListener("click", showNext)
    prev.addEventListener("click", showPrev)


})