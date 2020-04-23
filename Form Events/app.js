const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('input', e => {
        formData[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
    })
}



// form.addEventListener('submit', (e) => {
//     console.log('cc', creditCardInput.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggieSelect', veggieSelect.value);
//     e.preventDefault();
// });





// const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//     console.log('cc changed', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('veggieChanged', e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('Checkbox!', e);
//     formData['agreeToTerms'] = e.target.checked;
// });