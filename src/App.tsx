import React, {useState} from 'react';
import {FetchQuizQuestions} from './API';
import {Difficulty} from './API';
import QuestinCard from './components/QuestionCard';
//types
import {QuestionState} from './API';


type AnswerObject = {
  question:string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTION = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
   const [gameOver, setGameOver] = useState(true);

  console.log(questions)
  
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestion = await FetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.HARDD
    );

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      
      {gameOver || userAnswers.length ===  TOTAL_QUESTION ? (
        <button className="start" onClick={startTrivia}> Start</button>
      ): null}

      {!gameOver ? <p className="score">Score</p> : null}
      {loading && <p>Loading Question ... </p>}
      
      {!gameOver && !loading && (
        <QuestinCard
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;