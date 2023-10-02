const defaultURL = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public';
const options = {
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

async function reqInfo() {
    try {
        const resultsBox = document.getElementById("recipes")

        let calsMIN = document.getElementById("calories-min").value
        let calsMAX = document.getElementById("calories-max").value
        let calRange = `calories=${calsMIN}-${calsMAX}`
        let newURL = `${defaultURL}&${calRange}`

        const response = await fetch(newURL, options)
        const result = await response.json()

        let hits = result.hits

        for (let i=0; i<hits.length; i++) {
            let newResult = document.createElement("p")
            newResult.innerHTML = hits[i].recipe.label
            resultsBox.appendChild(newResult)
        }
    } catch (error) {
        console.error(error);
    }
}
