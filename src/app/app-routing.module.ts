import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student-page' ,component:StudentPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
