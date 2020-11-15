import { Question } from './question';
export class Quiz {

    response_code: number;
    results: Question[];
    category: string;

    constructor(data: any) {
        if (data){ 
            this.response_code = data.response_code;
            this.category = data.category;
            this.results = [];
            data.results.forEach(q => {
                this.results.push(new Question(q));
            });
        }
    }

}
