import { Component } from '@angular/core';

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
  public noResults: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'];
      }
    );
    this.loading = true;
    this.fetch();
  }

  fetch(){
    this.router.events.subscribe(() => {
      this.search = this.route.snapshot.paramMap.get('search');
      this.service.getSearchResults(this.search, this.currentPage)
        .subscribe({
              next: (v) => {this.list = v; if(!v.data[0]) { this.noResults = true } else { this.noResults = false }; this.loading = false;},
              error: (e) => {this.noResults = true; this.loading = false;}
            }
          );
    }); 
  }

  refetch(search: string) {
    this.service.getSearchResults(search).subscribe(res => {
      if(!res.data[0]) { this.noResults = true } else { this.noResults = false }
      this.loading = true;
      this.list = res;
      this.search = search;
      this.loading = false;
    });
  }

  goToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }
}
