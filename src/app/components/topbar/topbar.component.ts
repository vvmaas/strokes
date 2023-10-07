import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Output() newSearch = new EventEmitter<string>();
  @Input() environment: string = ''; 
  
  constructor(private router: Router) {  }

  goHome() {
    this.router.navigate(['/'])
  }
}
