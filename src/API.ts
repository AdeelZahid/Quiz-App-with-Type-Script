
export {};

export enum Difficulty {
    EASYY = 'easy',
    MEDIUMM = "medium",
    HARDD = "hard"
}




export const FetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    console.log(difficulty, amount)
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=22&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endPoint)).json();
    console.log(data);
}