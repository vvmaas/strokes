import { Component, Input, EventEmitter } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() environment = '';
  @Input() newSearch = new EventEmitter<string>();

  public search: string = '';

  applyForm = new FormGroup({
    search: new FormControl('')
  })

  constructor(private router: Router) {}
  
  submitSearch() {
    this.search = this.applyForm.value.search ?? '';

    if(this.search == '') {
      return alert("Please insert text.")
    }
    if(this.environment !== 'results') {
      const queryParams = {
        page: 1
      }
      this.router.navigate([`/search/${this.search}`], { queryParams })
    }
    this.newSearch.emit(this.search)
    this.applyForm.reset();
  }
}
