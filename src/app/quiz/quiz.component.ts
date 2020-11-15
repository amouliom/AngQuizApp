import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz, Options, Question } from '../models/exports';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  view: string;
  quizFile: string;
  quizName: string;
  quizzes: any[];
  quiz: Quiz = new Quiz(null);

  page = {
    index: 0,
    size: 1,
    count: 1
  }


  constructor(private api: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.api.getAll();
    this.quizFile = this.quizzes[0].id;
    this.getQuiz(this.quizFile);
  }

  getQuiz(quizFile: string) {
    this.api.get(quizFile).subscribe(data => {
      this.quiz = new Quiz(data);
      this.page.count = this.quiz.results.length;
    });
    this.view = 'main';
  }

  get questions() {
    return (this.quiz.results) ? this.quiz.results.slice(this.page.index, this.page.index + this.page.size) : [];
  }

  prevQuestion() {
    if(this.page.index ! >= 1) {
      this.page.index--;
    }
  }

  nextQuestion() {
    if(this.page.index != 9) {
      this.page.index++;
    }
  }

  select(question: Question, option: Options) {
    if (question.questionTypeId === 1) {
      question.choices.forEach((i) => { if (i.id !== option.id) i.selected = false;});
    }

  }
  
  correct(question: Question) {
    return question.choices.every(i => i.selected == i.answer) ? 'Correct': 'Wrong'; 
  }

  submit() {

    this.view = 'results';
  }

}


