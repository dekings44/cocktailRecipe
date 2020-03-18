const cocktailList = document.querySelector('#cocktailList');

const updateCocktail = async fn => {
	console.log(fn);
	let data = await fn();
	data.forEach(item => {
		cocktailList.innerHTML += `
        <div class="col-md-3 col-sm-6">
            <div class="container card card-block">
                <h5 class="mt-2 card-title text-left">
                    Cocktail name: ${item.strCategory}
                </h5>
                <img
                    src="${item.strDrinkThumb}"
                    alt="Photo of sunset"
                />
                <h5 class=" mt-2 type">Type: ${item.strAlcoholic}</h5>
                <small class="card-text">
                    Recipe: ${item.strIngredient1} ${item.strMeasure1}, ${item.strIngredient2} ${item.strMeasure2}, ${item.strIngredient3} ${item.strMeasure3}, ${item.strIngredient4} ${item.strMeasure4},
                </small>
                <small class="card-text">
                    Instructions: ${item.strInstructions}
                </small>
            </div>
        </div>
        `;
	});
};

async function getFinData() {
	const base = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
	const response = await fetch(base);
	const data = await response.json();
	console.log(cocktailList);
	console.log(data.drinks);
	return data.drinks;
}

cocktailList.addEventListener('load', updateCocktail(getFinData));
