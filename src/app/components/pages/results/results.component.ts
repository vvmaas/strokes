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

  public search: string | null = '';
  public list: any = [];
  public environment: string = 'results';

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.search = this.route.snapshot.paramMap.get('search');
      this.service.getSearchResults(this.search).subscribe(res => this.list = res);
      
    });
  }

  refetch(search: string) {
    this.list = [];
    this.search = search;
    this.service.getSearchResults(this.search).subscribe(res => this.list = res);
  }

  goHome() {
    this.router.navigate(['/'])
  }
}
