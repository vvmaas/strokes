import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/pages/results/results.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ArtworkComponent } from './components/pages/artwork/artwork.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoadingArtworkComponent } from './components/loading-artwork/loading-artwork.component';
import { LoadingResultsComponent } from './components/loading-results/loading-results.component';
import { PageSelectorComponent } from './components/page-selector/page-selector.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { ArtworkInfoComponent } from './components/artwork-info/artwork-info.component';
import { RelatedArtsComponent } from './components/related-arts/related-arts.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    ResultsComponent,
    ResultCardComponent,
    ArtworkComponent,
    TopbarComponent,
    LoadingArtworkComponent,
    LoadingResultsComponent,
    PageSelectorComponent,
    NoResultsComponent,
    FooterComponent,
    ArtworkInfoComponent,
    RelatedArtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
