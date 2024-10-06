import { useEffect, useState } from "react";
import GameDisplay from "./GameDisplay";

function Jeopardy(props) {

  let [score, setScore] = useState(0);
  let [answer, setAnswer] = useState("");
  let [jeopardyData, setJeopardyData] = useState({});
  let [gameCateggories, setGameCateggories] = useState([]);


  let getCategories = () => {
    let categoryId1 = Math.floor(Math.random() * (45374 - 1 + 1)) + 1;
    let categoryId2 = Math.floor(Math.random() * (45374 - 1 + 1)) + 1;
    let categoryId3 = Math.floor(Math.random() * (45374 - 1 + 1)) + 1;
    fetch(`https://jservice.xyz/api/categories/${categoryId1}`)
    //on success of the fetch request, turn the response that came back into JSON
    .then((response) => response.json())
    .then((cat1Data) => {
      fetch(`https://jservice.xyz/api/categories/${categoryId2}`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      .then((cat2Data) => {
        fetch(`https://jservice.xyz/api/categories/${categoryId3}`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        .then((cat3Data) => {
          setGameCateggories([cat1Data, cat2Data, cat3Data]);
        })
        .catch((error) => {
          console.log(error)
        });      })
      .catch((error) => {
        console.log(error)
      });

    })
    .catch((error) => {
      console.log(error)
    });
  }

  //get a new random question from the API and add it to the data object in state
  let getNewQuestion = () => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turning the response into JSON (data we can work with), lets add that data to state
      .then((data) => {

        //put the data in the console just so we can see it
        console.log("data from the api", data);

        //update state with the data from the API causing the page to re-render
        setJeopardyData(data);
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }

  //when the component mounts, get a the first question
  useEffect(() => {
    // getNewQuestion();
    getCategories();
  }, [])

  const fetchCategory = (categoryId) => {
    let cateogry = fetch(`https://jservice.xyz/api/categories/${categoryId}`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
      });
    return cateogry;
  }

  

  //get a new random question from the API and add it to the data object in state
  let getNewQuestionForCategory = (categoryId) => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/clues?category=${categoryId}`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turning the response into JSON (data we can work with), lets add that data to state
      .then((data) => {

        //put the data in the console just so we can see it
        console.log("First Question", data);
        console.log("First Question", data.clues[0]);

        //update state with the data from the API causing the page to re-render
        setJeopardyData(data.clues[0]);
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Actual answer: ${jeopardyData.answer}, Entered answer: ${answer}`);
    if (answer.trim().toLowerCase() == jeopardyData.answer.trim().toLowerCase()) { // If answered correctly
      // Update user score
      setScore(score + jeopardyData.value);
    } else {
      setScore(score - jeopardyData.value);
    }
    getCategories();
    setJeopardyData({});
    // getNewQuestion(); // get new question
    setAnswer("");
  }

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  //present the results to the user
  return (
    <div>
      <div>
        <div>
          {gameCateggories.map((cat) => {
            return (
              
              <button key={cat.id} onClick={() => { getNewQuestionForCategory(cat.id) }}> {cat.title}</button>
              
            );
          })}
        </div>
        <GameDisplay gameData={jeopardyData} userAnswer={answer} onAnswerFunc={handleSubmit} onAnswerType={handleChange} />

      </div>
      <div>
        <p>Your score: <span style={{ color: "green" }}>{score}</span> </p>
      </div>
    </div>
  );
}

export default Jeopardy;