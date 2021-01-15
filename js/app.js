document.addEventListener("DOMContentLoaded", function () {
    

// basic slider

    const prevBasic = document.querySelector(".basic_prev")
    const nextBasic = document.querySelector(".basic_next")
    
    const elementsBasic = Array.from(document.querySelectorAll(".basic_core_el"))

    let visibleSlideBasic = 0;

    elementsBasic[visibleSlideBasic].classList.add("basic_core_visible");

    const disableNextBasic = () => {
        nextBasic.classList.add("disabled")
    }

    const disablePrevBasic = () => {
        prevBasic.classList.add("disabled")
    }

    const enableNextBasic = () => {
        nextBasic.classList.remove("disabled")
    }

    const enablePrevBasic = () => {
        prevBasic.classList.remove("disabled")
    }


    const showNextBasic = () => {

        elementsBasic[visibleSlideBasic].classList.remove("basic_core_visible");
        visibleSlideBasic += 1;
        
        if (visibleSlideBasic >= elementsBasic.length) {
            console.log("no more slides to display")
            visibleSlideBasic -=1
            elementsBasic[visibleSlideBasic].classList.add("basic_core_visible");
        };

        if (visibleSlideBasic === elementsBasic.length-1) {
            disableNextBasic();
        }


        if (visibleSlideBasic === 1) {
            enablePrevBasic();
        }


        if (visibleSlideBasic < elementsBasic.length) {
            elementsBasic[visibleSlideBasic].classList.add("basic_core_visible");
            console.log (
                visibleSlideBasic + 1 + " slide is visible"
            )
        }    
    }    

    const showPrevBasic = () => {

        elementsBasic[visibleSlideBasic].classList.remove("basic_core_visible");
        visibleSlideBasic -= 1;
        
        if (visibleSlideBasic < 0) {
            console.log("no more slides to display")
            visibleSlideBasic +=1
            elementsBasic[visibleSlideBasic].classList.add("basic_core_visible");
        };

        if (visibleSlideBasic === 0) {
            disablePrevBasic();
        }

        if (visibleSlideBasic === elementsBasic.length-2) {
            enableNextBasic();
        }

        if (visibleSlideBasic >= 0) {
            elementsBasic[visibleSlideBasic].classList.add("basic_core_visible");
            console.log (
                visibleSlideBasic + 1 + " slide is visible"
            )
        }    
    }   
   

    nextBasic.addEventListener("click", showNextBasic)
    prevBasic.addEventListener("click", showPrevBasic)


// transition slider
        
    const prevTransition = document.querySelector(".transition_prev")
    const nextTransition = document.querySelector(".transition_next")
    
    const elementsTransition = Array.from(document.querySelectorAll(".transition_core_el"))

    let visibleSlideTransition = 0;
    console.log(visibleSlideTransition)

    elementsTransition[visibleSlideTransition].classList.add("transition_core_visible");


    const showNextTransition = () => {

        elementsTransition[visibleSlideTransition].classList.remove("transition_core_visible");
        visibleSlideTransition += 1;
        console.log(visibleSlideTransition);
        console.log(elementsTransition[visibleSlideTransition]);

        if (visibleSlideTransition >= elementsTransition.length) {
            visibleSlideTransition = 0;
            elementsTransition[visibleSlideTransition].classList.add("transition_core_visible");
            console.log("od początku")

        };

        if (visibleSlideTransition < elementsTransition.length) {
            elementsTransition[visibleSlideTransition].classList.add("transition_core_visible");
            console.log (
                visibleSlideTransition + 1 + " slide is visible"
            )

        }    
    }    

    const showPrevTransition = () => {

        elementsTransition[visibleSlideTransition].classList.remove("transition_core_visible");
        visibleSlideTransition -= 1;
        
        if (visibleSlideTransition < 0) {
            visibleSlideTransition = elementsTransition.length -1
            elementsTransition[visibleSlideTransition].classList.add("transition_core_visible");
        };

        if (visibleSlideTransition >= 0) {
            elementsTransition[visibleSlideTransition].classList.add("transition_core_visible");
            console.log (
                visibleSlideTransition + 1 + " slide is visible"
            )
        }    
    }   
   

    nextTransition.addEventListener("click", showNextTransition)
    prevTransition.addEventListener("click", showPrevTransition)


})