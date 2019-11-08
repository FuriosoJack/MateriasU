import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BacktrakingComponent } from './backtraking/backtraking.component';

@NgModule({
  declarations: [
    AppComponent,
    BacktrakingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
