import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ArtworksService } from 'src/app/service/artworks.service';
import { ImagesService } from 'src/app/service/images.service';
import { ArtworkConfig } from 'src/app/models/ArtworkConfig';
import { Subscription } from 'rxjs';

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
  private routerSubscription: Subscription = new Subscription;
  private artworkSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService, private imageService: ImagesService, private _location: Location) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(() => {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.artworkSubscription = this.service.getById(Number(this.id)).subscribe(res => {
        this.item = res.data; 
        console.log(res.data);
        
        this.config = res.config; 
        this.image = this.imageService.getImage(this.config, this.item);
      });
    });
  }

  ngOnDestroy(): void {
    this.artworkSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  goBack() {
    this._location.back();
  }
}
