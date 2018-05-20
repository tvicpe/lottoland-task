import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.api.getUrlInfo('https://www.lottoland.com/api/drawings/euroJackpot')
      .subscribe((response: any) => {
        this.data = null;
        if (response && response.last) {
          this.data = response.last;
        }
      });
  }
}
