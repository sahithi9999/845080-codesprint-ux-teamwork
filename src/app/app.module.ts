import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { TrainerComponent } from './trainer/trainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrainerComponent,
    TrainerlistComponent,
    HomeComponent,
    ContactusComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {
   
       path: '',
   
       component: HomeComponent
   
      },
   
     {
   
      path: 'home',
   
      component: HomeComponent
   
     },
   
     {
   
     path: 'navbar',
   
     component: NavbarComponent
   
    },
   
    {
   
    path: 'contactus',
   
    component: ContactusComponent
   
   }
   
    ])

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
