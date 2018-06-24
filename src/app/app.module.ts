import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxSimpleMdeModule } from '../../projects/ngx-simple-mde/src/lib/ngx-simple-mde.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSimpleMdeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  exports: [ ]
})
export class AppModule { }
