

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
        <div class="card">
                <img src="${meal.strMealThumb}">
    
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                </div >
            </div > `;

        searchResult.appendChild(div);
    })

}