const baseURL = 'https://api.edamam.com/search'
const id = '0b5b3c73';
const key = '46eec2704715c05eef98e34ab033595d';
let url;
// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
fetch('https://api.edamam.com/search?q=chicken&app_id=0b5b3c73&app_key=46eec2704715c05eef98e34ab033595d')
.then(function(result) {
    // console.log(result);
    return result.json();
})
.then(function(json) {
    console.log(json)
    displayData(json)
})

function displayData(json) {
    console.log('displayResults', json);
}

fetch('http://api.edamam.com/search?q=mealType&app_id=0b5b3c73&app_key=46eec2704715c05eef98e34ab033595d')
.then(function(result) {
    return result.json();
})
.then(function(json) {
    console.log(json)
    displayData(json)
})

function displayData(json) {
    console.log('displayResults', json);
}



// // SEARCH FORM
// const seacrhTerm = document.querySelector('.search');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// // RESULTS NAV
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// // RESULTS SECTION
// const section = document.querySelector('section');

// nav.style.display = 'none';

// let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
// let displayNav = false;

// searchForm.addEventListener('submit', fetchResults);