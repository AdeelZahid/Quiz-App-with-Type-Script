import {shuffleArray} from './utils';


export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
    EASYY = 'easy',
    MEDIUMM = "medium",
    HARDD = "hard"
}




export const FetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    console.log(difficulty, amount)
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=22&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endPoint)).json();
    
    return data.results.map((question: Question) => ({
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        )
    )
}