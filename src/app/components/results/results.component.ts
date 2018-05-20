import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  numbers: any[] = [];
  euroNumbers: any[] = [];
  date: string;

  @Input() set data(data: any) {
    if (!data) {
      return;
    }
    const {numbers, euroNumbers, date} = data;

    this.numbers = numbers;

    this.euroNumbers = euroNumbers;
    this.date = date.year + '-' + date.month + '-' + date.day;


  }

  constructor() {

  }

  ngOnInit() {
  }

}
