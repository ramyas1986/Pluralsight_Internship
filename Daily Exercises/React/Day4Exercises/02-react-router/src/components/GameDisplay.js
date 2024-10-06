export default function GameDisplay(props) {
const jeopardyData = props.gameData;
const handleSubmit = props.onAnswerFunc;
const handleChange = props.onAnswerType;
const answer = props.userAnswer;
return (
  <>
    <div>
        <p> <span style={{ fontWeight: "bold" }}>Question: </span> {jeopardyData.question} </p>
      </div>

      <div>
        {/* {console.log(jeopardyData.category)} */}
      <p> <span style={{ fontWeight: "bold" }}>Category title: </span> {jeopardyData.category?jeopardyData.category.title:""} </p>
      
      </div>
      <div>
      <p> <span style={{ fontWeight: "bold" }}>Points: </span> {jeopardyData.value} </p>
      </div>
      <form onSubmit={handleSubmit}> 
        <p style={{ fontWeight: "bold" }}> Answer: <input type="text" name="userAnswer" placeholder='Enter your answer!!' value={answer} onChange={handleChange} /></p>
      
      <button> Submit</button>
      </form> 
  </>  
);
}

