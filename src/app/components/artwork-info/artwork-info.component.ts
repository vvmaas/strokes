import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-artwork-info',
  templateUrl: './artwork-info.component.html',
  styleUrls: ['./artwork-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtworkInfoComponent {
    @Input() item: any;
    @Input() image: any;
}
