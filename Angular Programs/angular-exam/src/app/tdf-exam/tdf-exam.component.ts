import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-exam',
  templateUrl: './tdf-exam.component.html',
  styleUrls: ['./tdf-exam.component.css']
})
export class TdfExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions = [
    {question:"5+6",
    ans1:"11",
    ans2:"12",
    ans3:"13",
    ans4:"14",
    correctAns:"11",
    },
    {question:"7-6",
    ans1:"1",
    ans2:"2",
    ans3:"3",
    ans4:"4",
    correctAns:"1",
    },
  ]
}
