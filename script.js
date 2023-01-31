const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apikey = "glHcvkOI1fSR6OfqK/jg9Q==USr00a67aIqWrrX1";

const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";



async function getJoke() {
    try {
         jokeEL.innerText = "Updating...";
         btnEL.disabled = true;
         btnEL.innerText = "Loading...";
         const response = await fetch(apiURL, option);
         const data = await response.json();
         btnEL.disabled = false;
         btnEL.innerText = "Tell me a Joke";
         jokeEL.innerText = data[0].joke;
        
    } catch (error) {
        jokeEL.innerText = "an error happends, Try again later";
        btnEL.disabled = false;
         btnEL.innerText = "Tell me a Joke";
        
    }


    
}


btnEL.addEventListener("click", getJoke);