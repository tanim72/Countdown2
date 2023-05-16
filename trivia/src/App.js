import React, { useState, useEffect } from 'react';
import Question from './Question.js';

function App() {
  
  const [triviaData, setTriviaData] = useState([]);

  const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
  .then((response) => response.json())
  .then((data) => setTriviaData(data.results))
  .catch((error) => console.log("Error: ", error))
}, [refresh])


  
  return (

    <div>
      <header>
          <h1>Trivia Game</h1>
      </header>

      <button onClick={() => setRefresh((prevState) => !prevState)}>New Questions </button>

      {triviaData.length === 0? (<p>N/A</p>) : 
      (
        <div>
          {triviaData.map((item, index) => <Question 
          key={index}
          question={item.question}
          correct={item.correct_answer}
          incorrect={item.incorrect_answers}
          />
          )}
        </div>
      )}
      </div>

  )}

export default App;