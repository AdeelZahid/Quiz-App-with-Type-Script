import React, {useState} from 'react';
import {FetchQuizQuestions} from './API';
import {Difficulty} from './API';
// import QuestinCard from './components/QuestionCard';


const TOTAL_QUESTION = 10;

function App() {
  // const [loading, setLoading] = useState(false);
  // const [questions, setQuestions] = useState([]);
  // const [number, setNumber] = useState(0);
  // const [userAnswer, setUserAnswer] = useState([]);
  // const [score, setScore] = useState(0);
  // const [gameOver, setGameOver] = useState(true);

  console.log(FetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASYY))
  
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}> Start</button>
      <p className="score">Score</p>
      <p>Loading Question ... </p>
      {/* <QuestinCard 
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number]  : undefined}
          callback={checkAnswer}
        /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;