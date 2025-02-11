import React from 'react'
//types
import {AnswerObject} from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({
    
    question, answers, callback, userAnswer, questionNo, totalQuestions
    }) => {
    return (
        <Wrapper>
            <div>
           <p className="number"> Question: {questionNo }/ {totalQuestions} </p>
           <p dangerouslySetInnerHTML= {{__html: question}} />
           <div>
               {answers.map(answer => (
                   <ButtonWrapper key={answer}
                   correct={userAnswer?.correctAnswer === answer}
                   userClicked={userAnswer?.answer === answer}
                    >
                   <button disabled={userAnswer ? true : false} value={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{__html: answer}} /> 
                   </button> 
               </ButtonWrapper>
               ))}
           </div>
        </div>
        </Wrapper>
    )
}

export default QuestionCard
