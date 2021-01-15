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

    let visibleSlideTransition = 1;
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

//gallery slider

    const nextGallery = document.querySelector(".gallery_next")
    const prevGallery = document.querySelector(".gallery_prev")

    const activeGalleryElement = document.querySelector(".gallery_core_active")

    const elementsGallery = Array.from(document.querySelectorAll(".gallery_core_thumbnails_el"))

    let visibleSlideGallery = 0

    elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")


    let activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');

    console.log(activeBackground)

    activeGalleryElement.style.backgroundImage = activeBackground

    // activeGalleryElement.style.backgroundImage = "url('images/cars/jj-jordan-jtZsFCvXS_g-unsplash.jpg')"

    const showNextGallery = () => {
        elementsGallery[visibleSlideGallery].classList.remove("gallery_core_thumbnails_el_active")
        visibleSlideGallery += 1
        

        if (visibleSlideGallery >= elementsGallery.length) {
            visibleSlideGallery = 0
            activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');
            activeGalleryElement.style.backgroundImage = activeBackground
            document.querySelector(".gallery_core_thumbnails").classList.toggle("gallery_core_thumbnails_right")
            elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")
        }

        if (visibleSlideGallery < elementsGallery.length) {
            activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');
            activeGalleryElement.style.backgroundImage = activeBackground
            if (visibleSlideGallery === 2) {
                document.querySelector(".gallery_core_thumbnails").classList.toggle("gallery_core_thumbnails_right")
            }

            elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")
        }        
    }

    nextGallery.addEventListener("click", showNextGallery)


    const showPrevGallery = () => {
        elementsGallery[visibleSlideGallery].classList.remove("gallery_core_thumbnails_el_active")
        visibleSlideGallery -= 1
        
        if (visibleSlideGallery < 0) {
            visibleSlideGallery = elementsGallery.length-1
            activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');
            activeGalleryElement.style.backgroundImage = activeBackground
            document.querySelector(".gallery_core_thumbnails").classList.toggle("gallery_core_thumbnails_right")

            elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")
        }

        if (visibleSlideGallery >= 0 ) {
            activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');

            activeGalleryElement.style.backgroundImage = activeBackground

            if (visibleSlideGallery === 2) {
                document.querySelector(".gallery_core_thumbnails").classList.toggle("gallery_core_thumbnails_right")
            }} elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")
    }        

    prevGallery.addEventListener("click", showPrevGallery)



    for (let i = 0; i < elementsGallery.length; i++ ) {
        elementsGallery[i].addEventListener("click", () => {
            elementsGallery[visibleSlideGallery].classList.remove("gallery_core_thumbnails_el_active")
            visibleSlideGallery = i;
            activeBackground = window.getComputedStyle(elementsGallery[visibleSlideGallery]).getPropertyValue('background-image');

            activeGalleryElement.style.backgroundImage = activeBackground
            if (visibleSlideGallery === 2) {
                document.querySelector(".gallery_core_thumbnails").classList.toggle("gallery_core_thumbnails_right")
            }
            if (visibleSlideGallery === 1) {
                document.querySelector(".gallery_core_thumbnails").classList.remove("gallery_core_thumbnails_right")
            }
            if (visibleSlideGallery === 3) {
                document.querySelector(".gallery_core_thumbnails").classList.add("gallery_core_thumbnails_right")
            }
            elementsGallery[visibleSlideGallery].classList.add("gallery_core_thumbnails_el_active")
        })
    }

})