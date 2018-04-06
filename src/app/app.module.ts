import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustompipeComponent } from './custompipe/custompipe.component';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
