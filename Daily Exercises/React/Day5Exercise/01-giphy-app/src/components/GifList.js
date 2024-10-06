import 'bootstrap/dist/css/bootstrap.min.css';

function GifList(props) {
    const gifs = props.gifArray;

    const handleSave = (imageUrl) => {
        let savedImages = [];
        let gifString = localStorage.getItem("savedGifs");
        console.log(gifString);
        if (gifString) {
            savedImages = gifString.split(",");
        }
        savedImages = [...savedImages, imageUrl]
        console.log(savedImages);
        localStorage.setItem("savedGifs", savedImages);
    }

    return (
        <div name="ImageHolder">
            {gifs.map((gifElement, index) => {
                return (
                    <div key={index}>
                        <img className="my-5" src={gifElement.images.original.url} key={index} alt="Trending Gif" />
                        <button className="btn btn-outline-secondary mx-5" type="button" onClick={() => { handleSave(gifElement.images.original.url) }}> Save</button>
                    </div>
                )
            })}
        </div>
    );
}
export default GifList;