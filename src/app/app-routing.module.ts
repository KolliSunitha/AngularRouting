import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes : Routes = [
 {path : '' , redirectTo :'/about', pathMatch :'full'},
 {path : 'about' , component : AboutComponent },
 {path : 'contact' , component : ContactComponent }

]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot (appRoutes)
  ],
  exports : [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
