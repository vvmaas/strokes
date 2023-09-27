import { Component } from '@angular/core';
import { Artwork } from 'src/app/models/Artwork';

import { ArtworksService } from 'src/app/service/artworks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public list: Artwork[] = []

  constructor(public service: ArtworksService) { }

  ngOnInit(): void {
    this.service.getHomepage().subscribe((res) => this.list = res.data);
  }
}
