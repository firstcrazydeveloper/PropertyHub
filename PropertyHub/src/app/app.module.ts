import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeTabComponent } from './shared/components/home-tab/home-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
