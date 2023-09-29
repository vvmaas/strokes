import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ResultsComponent } from './components/pages/results/results.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"search/:search", component: ResultsComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
