import { Options } from './options';
export class Question {

    category: string;
    type: string;
    difficulty: string;
    question: string;
    questionTypeId: number;
    questionId: number;
    correct_answer: string;
    choices: Options[];
    answered: boolean;
  
    constructor(data: any) {
        data = data || {};
        this.category = data.category;
        this.type = data.type;
        this.difficulty = data.difficulty;
        this.question = data.question;
        this.questionTypeId = data.questionTypeId;
        this.questionId = data.questionId;
        this.correct_answer = data.correct_answer;
        this. choices =[];
        data.choices.forEach(a => {
            this.choices.push((a));
        });
    }
  }