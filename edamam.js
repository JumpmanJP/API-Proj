const baseURL = 'https://api.edamam.com/search'
const id = '0b5b3c73';
const key = '46eec2704715c05eef98e34ab033595d';
let url;

// EXAMPLE URL:
// REQUIRED
// BASE: https://api.edamam.com/search
// QUEARY: ?q=example
// ID: &app_id=${YOUR_APP_ID}
// KEY: &app_key=${YOUR_APP_KEY}

// OPTIONAL
// FROM: &from=0
// TO: &to=3
// CALORIES: &calories=591-722
// HEALTH: &health=alcohol-free"

const mealType = document.querySelector('#menu');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const section = document.querySelector('section');

const breakfast = document.querySelector('breakfast');
const lunch = document.querySelector('lunch');
const dinner = document.querySelector('dinner');


// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
// fetch('https://api.edamam.com/search?q=breakfast&app_id=0b5b3c73&app_key=46eec2704715c05eef98e34ab033595d')
// .then(function(result) {
//     // console.log(result);
//     return result.json();
// })
// .then(function(json) {
//     console.log(json);
//     // displayData(json);
// })

// function displayData(json) {
//     console.log('displayResults', json);
    // let recipeOne = json.hits.recipe;
    // console.log(recipeOne);
//}
// document.addEventListener('breakfast', fetchResults);
document.addEventListener('submit', fetchResults);

function fetchResults(event) {
    event.preventDefault()
    //e.preventDefault();
    url = `${baseURL}?q=${mealType.value}&app_id=${id}&app_key=${key}`;
    console.log("URL:", url);

    fetch(url)
        .then(function(result) {
        return result.json();
    })  
        .then(function(json) {
       displayResults(json);
        console.log(json);
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
// let para = document.createElement('p');
// section.appendChild(para)
// para.textContent = json.hits[0].recipe.calories
let recipes = json.hits
console.log(recipes);

if(recipes.length === 0) {
    console.log("No results");
} else {
    for(let i = 0; i < recipes.length; i++) {
        let heading = document.createElement('a');
        let article = document.createElement('article');
        let img = document.createElement('img');
        let clearfix = document.createElement('div'); 

        // let current = json.recipe;
        // console.log("current:", current);

        // link.href = current.web_url;
        // link.textContent = current.recipes.mealType;

        // for(let j = 0; j < current.recipes.length; j++) {
        //     let span = document.createElement('span');
        //     span.textContent += current.recipes[i].value + ' ';
            
        // }
        // if(current.multimedia.length > 0) {
            // img.src = 'https://api.edamam.com/search' + current.image[0].url;
            img.src = recipes[i].recipe.image
            img.alt = 'picture'

            heading.textContent = recipes[i].recipe.label
            heading.href = recipes[i].recipe.url
            article.textContent = recipes[i].recipe.ingredients[0].text
        // }
        section.appendChild(heading);
        section.appendChild(img);
        section.appendChild(article);

      
}}}