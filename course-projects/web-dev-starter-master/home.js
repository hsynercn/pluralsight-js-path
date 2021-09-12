
//we can use single quotes or double quotes for strings
let welcome = 'welcome'; 
let price = 0;
let discounted = false;

let a = 1, 
    b = "test", 
    c = false;

price = 19.99;

constPrice = 0;

let amount = 123;
//amount = amount.toString();

showMessage("HELLO");
changePercentOff(30);

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = "CLOSE REVIEW";
    } else {
        review.classList.add('d-none');
        button.textContent = "SEE REVIEW";
    }
    
});