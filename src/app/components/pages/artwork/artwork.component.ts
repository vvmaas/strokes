import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ArtworksService } from 'src/app/service/artworks.service';
import { ImagesService } from 'src/app/service/images.service';
import { ArtworkConfig } from 'src/app/models/ArtworkConfig';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent {

  private id: string | null = '';
  public item: any;
  public config: ArtworkConfig | null = null;
  public image: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService, private imageService: ImagesService, private _location: Location) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.getById(Number(this.id)).subscribe(res => {
        this.item = res.data; 
        this.config = res.config; 
        this.image = this.imageService.getImage(this.config, this.item);
        console.log(res.data);
        
      });
    });
  }

  goBack() {
    this._location.back();
  }
}
