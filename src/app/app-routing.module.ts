import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"trainer", component:TrainerComponent},
  {path:"trainerlist", component:TrainerlistComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"home", component:HomeComponent},
  {path:"navbar", component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
