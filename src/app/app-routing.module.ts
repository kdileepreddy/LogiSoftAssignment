import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCreationPageComponent} from './user-creation-page/user-creation-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'userDetails/:indexOfelement', component: UserDetailsComponent },
  { path: '**', component: UserCreationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
