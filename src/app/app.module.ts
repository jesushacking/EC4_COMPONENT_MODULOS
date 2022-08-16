import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulsModule } from './moduls/moduls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
