import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Output() newSearch = new EventEmitter<string>();
  @Input() environment: string = '';
  @HostListener("document:scroll")
  scrollFunction() {
    if(document.documentElement.scrollTop > 50) {
      this.hide_header = true
    } else {
      this.hide_header = false
    }
  } 

  public hide_header: boolean = false; 
  
  constructor(private router: Router) {  }

  goHome() {
    this.router.navigate(['/'])
  }
}
