import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() environment = '';
  @Output() newSearch = new EventEmitter<string>();

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

    this.router.navigate([`/search/${this.search}`])
    this.newSearch.emit(this.search)
    this.applyForm.reset();
  }

}