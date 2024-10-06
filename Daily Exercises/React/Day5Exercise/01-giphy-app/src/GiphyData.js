const GIPHY_API_KEY = "8OSzgThUclH7ZZYI5fJiW8ZhQF1Qwdlu";
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/trending?rating=g&api_key=";

function getGiphyData(paramsString, callbackFunction) {
    let url = GIPHY_BASE_URL+GIPHY_API_KEY+paramsString?`&${paramsString}`:"";
    fetch(url)
    //on success of the fetch request, turn the response that came back into JSON
    .then((response) => response.json())
    //on success set the trending gifs to state
    .then((apiResponse) => {
      //put the data in the console just so we can see it
      console.log("data from the api", apiResponse.data);
      //update state with the data from the API causing the page to re-render
      callbackFunction(apiResponse.data);
    })
    //handle any errors/failures with getting data from the API
    .catch((error) => {
      console.log(error)
    });

}