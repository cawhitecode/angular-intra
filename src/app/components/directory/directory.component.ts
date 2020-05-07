import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // added multiselect or query

  // *ngFor='let in of counter(5) ;let i = index
  counter(i: number) {
    return new Array(i);
}

}