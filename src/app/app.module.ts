import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringBoardGeneratorComponent } from './string-board-generator/string-board-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    StringBoardGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
