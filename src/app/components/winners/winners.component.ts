import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../util/result';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  odds: any[] = [];
  labels = Result.labels;

  @Input() set data(data: any) {
    if (!data) {
      return;
    }
    const {odds} = data;
    if (!odds) {
      return;
    }
    for (const index in odds) {
      if (odds.hasOwnProperty(index) && index !== 'rank0') {
        odds[index].matchLabel = this.labels[index].matchLabel;
        odds[index].rank = this.labels[index].rank;
        this.odds.push(odds[index]);
      }
    }

  }

  constructor() {

  }

  ngOnInit() {
  }


}
