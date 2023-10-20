

const searchFood = () => {
    const searchField = document.getElementById('Search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}">
    
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                </div >
            </div > `;

        searchResult.appendChild(div);
    });
}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${meal.strInstructions}</p>
            </div>;`

    mealDetails.appendChild(div);


}



