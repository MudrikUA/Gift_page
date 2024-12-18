let error = false;
let btn = document.querySelector('.js-submit');
btn.addEventListener("click", (event) => {
    if (document.querySelector('.js-exercise-1').value !== '7' &&
        document.querySelector('.js-exercise-1-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-1-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-1').value === '7' &&
        !document.querySelector('.js-exercise-1-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-1-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-2').value !== '8' &&
        document.querySelector('.js-exercise-2-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-2-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-2').value === '8' &&
        !document.querySelector('.js-exercise-2-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-2-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-3').value !== '9' &&
        document.querySelector('.js-exercise-3-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-3-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-3').value === '9' &&
        !document.querySelector('.js-exercise-3-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-3-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-4').value !== '16' &&
        document.querySelector('.js-exercise-4-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-4-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-4').value === '16' &&
        !document.querySelector('.js-exercise-4-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-4-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-5').value !== '4' &&
        document.querySelector('.js-exercise-5-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-5-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-5').value === '4' &&
        !document.querySelector('.js-exercise-5-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-5-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-6').value !== '5' &&
        document.querySelector('.js-exercise-6-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-6-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-6').value === '5' &&
        !document.querySelector('.js-exercise-6-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-6-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-7').value !== '8' &&
        document.querySelector('.js-exercise-7-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-7-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-7').value === '8' &&
        !document.querySelector('.js-exercise-7-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-7-err').classList.toggle("hidden")
    }

    if (document.querySelector('.js-exercise-8').value !== '3' &&
        document.querySelector('.js-exercise-8-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-8-err').classList.toggle("hidden")
        error = true;
    } else if (document.querySelector('.js-exercise-8').value === '3' &&
        !document.querySelector('.js-exercise-8-err').classList.contains('hidden')) {
        document.querySelector('.js-exercise-8-err').classList.toggle("hidden")
    }

    if (error) {
        error = false;
        return;
    }

    document.querySelector('.photo-container').classList.toggle("hidden")
    document.querySelector('.exercise-container').classList.toggle("hidden")
})

// document.querySelectorAll('.exercise-input').forEach((field) => {
//     field.onclick = () => {
//         // console.log('wer');
//     }
// });