import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSimpleMdeComponent } from './app.component';

@NgModule({
  declarations: [
    NgxSimpleMdeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ NgxSimpleMdeComponent ],
  exports: [ NgxSimpleMdeComponent ]
})
export class NgxSimpleMdeModule { }
