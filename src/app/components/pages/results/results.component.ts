import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtworksService } from 'src/app/service/artworks.service';
import { Artwork } from 'src/app/models/Artwork';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  public loading: boolean = true;
  public search: string | null = '';
  public currentPage: number = 0;
  public list: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'];
      }
    );
    this.loading = true;
    this.router.events.subscribe(() => {
      this.search = this.route.snapshot.paramMap.get('search');
      this.service.getSearchResults(this.search, this.currentPage).subscribe(res => {this.list = res; this.loading = false; console.log(res);
       });
    });    
  }

  refetch(search: string) {
    this.service.getSearchResults(search).subscribe(res => {
      this.loading = true;
      this.list = res;
      this.search = search;
      this.loading = false 
    });
  }

  goToPage(page: number) {
    const queryParams = {
      page
    }
    this.router.navigate([`/search/${this.search}`], { queryParams })
  }

  goToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }
}
