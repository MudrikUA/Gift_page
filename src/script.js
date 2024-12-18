let btn = document.querySelector('.js-submit');
btn.addEventListener("click", (event) => {
    
    if (document.querySelector('.js-exercise-1').value !== '7') {
        return;
    }
    if (document.querySelector('.js-exercise-2').value !== '8') {
        return;
    }
    if (document.querySelector('.js-exercise-3').value !== '9') {
        return;
    }
    if (document.querySelector('.js-exercise-4').value !== '16') {
        return;
    }
    if (document.querySelector('.js-exercise-5').value !== '4') {
        return;
    }
    if (document.querySelector('.js-exercise-6').value !== '5') {
        return;
    }
    if (document.querySelector('.js-exercise-7').value !== '8') {
        return;
    } 
    if (document.querySelector('.js-exercise-8').value !== '3') {
        return;
    }

    document.querySelector('.photo-container').classList.toggle("hidden")
    document.querySelector('.exercise-container').classList.toggle("hidden")
    
})