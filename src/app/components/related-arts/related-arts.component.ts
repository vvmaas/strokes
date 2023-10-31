import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artwork } from 'src/app/models/Artwork';
import { ArtworkList } from 'src/app/models/ArtworkList';
import { ArtworksService } from 'src/app/service/artworks.service';

@Component({
  selector: 'app-related-arts',
  templateUrl: './related-arts.component.html',
  styleUrls: ['./related-arts.component.css']
})
export class RelatedArtsComponent {
  @Input() item: any;

  public related_artist: ArtworkList = {
    config: {}
  };

  private subscription : Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit(): void {
    console.log(this.item.artist_title);
    this.fetch()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetch(){
    this.subscription = this.service.getRelatedResults(this.item.artist_title, 1)
      .subscribe({
            next: (v) => {this.related_artist = v; console.log(v);
            }
          });
  }

  goToArtwork(id: number) {
    this.item = null;
    this.subscription.unsubscribe();
    this.router.navigate([`/artwork/${id}`])
  }
}
