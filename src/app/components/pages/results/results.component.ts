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
  public list: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit(): void {
    this.loading = true;
    this.router.events.subscribe(() => {
      this.search = this.route.snapshot.paramMap.get('search');
      this.service.getSearchResults(this.search).subscribe(res => {this.list = res; this.loading = false;});
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

  goToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }
}
