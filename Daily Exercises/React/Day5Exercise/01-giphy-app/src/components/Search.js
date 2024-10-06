import { useState } from "react";
import GifList from "./GifList";
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchPage() {
  let [searchKey, setSearchKey] = useState("");
  const [gifs, setGifs] = useState([]);


  const handleInput = (e) => {
    setSearchKey(e.target.value);
  }

  const performSearch = () => {
    // fetch tending gifs
    fetch(`https://api.giphy.com/v1/gifs/search?rating=g&api_key=8OSzgThUclH7ZZYI5fJiW8ZhQF1Qwdlu&q=${searchKey}`)
    //on success of the fetch request, turn the response that came back into JSON
    .then((response) => response.json())
    //on success set the trending gifs to state
    .then((apiResponse) => {
      //put the data in the console just so we can see it
      console.log("data from the api", apiResponse.data);
      //update state with the data from the API causing the page to re-render
      setGifs(apiResponse.data);
    })
    //handle any errors/failures with getting data from the API
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>It is the search page</h1>
      <br></br><br></br>
      <div style={{textAlign:"center"}}>
        <input type="text" name="searchKey" placeholder="Type your search here" value={searchKey} onChange={handleInput}></input>
        <div>
          <br></br>
          <button type="button" style={{textAlign:"center"}} onClick={() => { performSearch() }}>Search Gif</button>
        </div>
        <br></br>
        <GifList gifArray={gifs}></GifList>
      </div>
    </div>
  );
}

export default SearchPage;