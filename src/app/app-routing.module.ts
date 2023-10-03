import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ResultsComponent } from './components/pages/results/results.component';
import { ArtworkComponent } from './components/pages/artwork/artwork.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"search/:search", component: ResultsComponent},
  {path: "artwork/:id", component: ArtworkComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
