import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  en = 'hi';
  vi = 'xin chao';

  constructor() {
  }

  ngOnInit(): void {
  }

}
