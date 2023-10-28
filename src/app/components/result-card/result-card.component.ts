import { Component, Input } from '@angular/core';

import { Artwork } from 'src/app/models/Artwork';
import { ArtworkConfig } from 'src/app/models/ArtworkConfig';

import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent {
  @Input() item: Artwork | null = null;
  @Input() config: ArtworkConfig | null = null;

  public image: any;

  constructor(private service: ImagesService) {}

  ngOnInit(): void {
    this.image = this.service.getImage(this.config, this.item)
    console.log(this.image);
  }
}
