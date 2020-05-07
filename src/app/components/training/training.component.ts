import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // *ngFor='let in of counter(5) ;let i = index
  counter(i: number) {
    return new Array(i);
}

}