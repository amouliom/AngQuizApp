import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: "./assets/history.json", name: 'History'},
      { id: "./assets/mixed.json", name: 'Mixed'},
      { id: "./assets/politics.json", name: 'Politics'},
      { id: "./assets/sports.json", name: 'Sports'},
      { id: "./assets/vehicles.json", name: 'Vehicles'},
    ];
  }
}
