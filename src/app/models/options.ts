
export class Options {

    id: number;
    choice: string;
    selected: boolean;
    answer: boolean;
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.choice = data.choice;
        this.answer = data.answer;
    }
}