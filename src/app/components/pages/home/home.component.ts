import { Component } from '@angular/core';
import { Artwork } from 'src/app/models/Artwork';

import { ArtworksService } from 'src/app/service/artworks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public environment: string = 'home';

}
