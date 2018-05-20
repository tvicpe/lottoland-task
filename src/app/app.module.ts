import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { ResultsComponent } from './components/results/results.component';
import { WinnersComponent } from './components/winners/winners.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    WinnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
