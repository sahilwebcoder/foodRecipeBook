const image = document.querySelectorAll('.dishImage');
const dishName = document.querySelectorAll('.dish_heading');
const dishText = document.querySelectorAll('.dish_recipe');
const button = document.querySelectorAll('.btn');
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

fetch(apiUrl).then((res) => {
    if(!res.ok) {
        console.log("some error occurred in first call", res.status);
    } 
    return res.json();
}).then((firstDish) => {
    let dishObject = firstDish.meals[0];
    const { strMealThumb, strMeal, strInstructions, strSource } = dishObject;
    image[0].src = strMealThumb;
    dishName[0].innerText = strMeal;
    dishText[0].innerText = strInstructions;
    button[0].href = strSource;
    return fetch(apiUrl)
}).then((res) => {
    if(!res.ok) {
        console.log("some error occurred in Seocnd call", res.status);
    }
    return res.json();
}).then((secondDish) => {
    let dishObject = secondDish.meals[0];
    const { strMealThumb, strMeal, strInstructions, strSource } = dishObject;
    image[1].src = strMealThumb;
    dishName[1].innerText = strMeal;
    dishText[1].innerText = strInstructions;
    button[1].href = strSource;
    return fetch(apiUrl);
}).then((res) => {
    if(!res.ok) {
        console.log("some error occurred in third call", res.status);
    }
    return res.json();
}).then((thirdDish) => {
    let dishObject = thirdDish.meals[0];
    const { strMealThumb, strMeal, strInstructions, strSource } = dishObject;
    image[2].src = strMealThumb;
    dishName[2].innerText = strMeal;
    dishText[2].innerText = strInstructions;
    button[2].href = strSource;
  return fetch(apiUrl);
}).then((res) => {
    if(!res.ok) {
        console.log("some error occurred in fourth call", res.status);
    }
    return res.json();
}).then((fourthDish) => {
    let dishObject = fourthDish.meals[0];
    const { strMealThumb, strMeal, strInstructions, strSource } = dishObject;
    image[3].src = strMealThumb;
    dishName[3].innerText = strMeal;
    dishText[3].innerText = strInstructions;
    button[3].href = strSource;
return fetch(apiUrl);
}).then((res) => {
    if(!res.ok) {
        console.log("some error occurred in fifth call", res.status);
    }
    return res.json();
}).then((fifthDish) => {
    let dishObject = fifthDish.meals[0];
    const { strMealThumb, strMeal, strInstructions, strSource } = dishObject;
    image[4].src = strMealThumb;
    dishName[4].innerText = strMeal;
    dishText[4].innerText = strInstructions;
    button[4].href = strSource;
}).catch((err) => {
    console('Last error ocurred');
})






