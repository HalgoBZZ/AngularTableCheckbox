import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReleveurService } from '../../releveurs/releveur.service';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [ReleveurService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
