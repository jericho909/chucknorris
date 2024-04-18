const apiUrl = "https://api.chucknorris.io/jokes/random";
const newJokeBtn = document.getElementById("newJokeBtn");
const jokeContainer = document.getElementById("joke-container");
let apiCall = null;

newJokeBtn.addEventListener("click", function(){
    fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    jokeContainer.innerText = data.value;
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
})
