import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SavedPage() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    let savedGifs = [];
    let inStorage = localStorage.getItem("savedGifs");
    console.log("Data type: " + typeof (inStorage));
    if (inStorage) {
      savedGifs = inStorage.split(",");
      console.log(savedGifs);
      setGifs(savedGifs);
      }
  }, [])

  const handleClear = (imageUrl) => {
    localStorage.removeItem("savedGifs");
    setGifs([]);
  }

  const handleRemove = (imageIndex) => {
    let tmpGifs = [...gifs];
    tmpGifs.splice(imageIndex,1);
    // console.log(gifs);
    // console.log(tmpGifs);
    setGifs(tmpGifs);
    localStorage.setItem("savedGifs", tmpGifs);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>It is the Saved page</h1>
      <br></br><br></br>
      <div style={{textAlign:"center"}}>
        <div><button type="button" onClick={() => { handleClear() }}> Clear</button></div>
        <br></br>
        {
          gifs.map((gifUrl, index) => {
            return (
              <div className="my-5">
                <img key={index} alt="Trending Gif" src={gifUrl} />
                <button className="btn btn-outline-secondary mx-5" type="button" onClick={() => { handleRemove(index) }}> Remove</button>
              </div>
            )
          })}
      </div>

    </div>
  );
}

export default SavedPage;

