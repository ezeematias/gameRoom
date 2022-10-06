import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  question: string = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';
  restartGameBtnShown = false;
  pointUser: number = 0;
  constructor(
    private hangmanService: HangmanService,
    private location: Location,
    private ranking: RankingService
  ) { }

  ngOnInit(): void {
    let jsonPath;
    const url = this.location.path();
    if (url.includes('jsonPath')) {
      jsonPath = url.split('jsonPath=')[1];
    }
    this.hangmanService.getQuestions(jsonPath).subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.pointUser = this.question.length * Math.floor(Math.random() * (10 - 0) + 1);
    this.guesses = [...this.guesses, letter];
  }

  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }

  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.restartGameBtnShown = false;
  }

  pickNewQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomIndex];
    console.log(this.question);
  }

  onGameFinished() {
    this.ranking.addPoint(this.pointUser, "Ahorcado");
    this.restartGameBtnShown = true;
  }
}
