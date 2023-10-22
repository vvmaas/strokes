import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtworksService } from 'src/app/service/artworks.service';
import { ArtworkList } from 'src/app/models/ArtworkList';
import { Location } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {

  public loading: boolean = true;
  public search: string | null = '';
  public currentPage: number = 0;
  public list: ArtworkList = {
    config: {}
  };
  public noResults: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService, private location: Location) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'];
      }
    );
    this.loading = true;
    if(!this.checkPage()) return;
    this.fetch();
  }

  fetch(){
    console.log('fetch');
    this.router.events.subscribe(() => {
      this.search = this.route.snapshot.paramMap.get('search');
      this.service.getSearchResults(this.search, this.currentPage)
        .subscribe({
              next: (v) => {this.list = v; if(!v.data[0]) { this.noResults = true } else { this.noResults = false }; this.loading = false;},
              error: (e) => {this.noResults = true; this.loading = false;}
            });
    }); 
  }

  refetch(search: string | null, page: number = 1) {
    this.scrollToTop();
    this.loading = true;
    this.noResults = false;
    this.search = search;
    this.currentPage = page;
    this.location.go(`/search/${search}?page=${page}`);
    this.service.getSearchResults(search, page)
      .subscribe({
        next: (v) => {this.list = v; if(!v.data[0]) { this.noResults = true } else { this.noResults = false }; this.loading = false;},
        error: (e) => {this.noResults = true; this.loading = false;}
      })
  }

  scrollToTop(){
    window.scrollTo({ top: 0 });
  }

  checkPage() {
    if(this.currentPage<1) {
      this.loading = false;
      this.noResults = true;
      return false;
    }
    return true;
  }

  goToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }
}
