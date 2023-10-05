import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.css']
})
export class PageSelectorComponent implements OnChanges {
  @Input() search: string | null = '';
  @Input() page: number = 0;
  @Input() pageTotal: number = 0;

  public pages: any[] = [];
  private range: number = 3

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(this.pageTotal > 25) this.pageTotal = 25;
    this.buildArr();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pageTotal > 25) this.pageTotal = 25;
    this.buildArr()
  }

  goToPage(page: number) {
    const queryParams = {
      page
    }
    this.router.navigate([`/search/${this.search}`], { queryParams })
  }

  buildArr() {
    this.pages=[]
    for (let i = 1; i <= this.pageTotal; i++) {
      if(i==this.page) {
        this.pages.push({ page: i, class: 'selected' })
        continue
      }
      if(i==1 || i==2 || i==this.pageTotal || i==(this.pageTotal-1)){
        this.pages.push({ page: i, class: 'page' })
        continue
      }
      if(i <= Number(this.page) + this.range && i >= this.page-this.range) {
        this.pages.push({ page: i, class: 'page' })
        continue
      }
      if(this.lastItem(this.pages).page == '...'){
        continue
      }
      if(i+this.range < this.page || i-this.range > this.page) {
        this.pages.push({ page: '...', class: 'fill' })
      }
    }
  }

  lastItem(arr: any[]) {
    return arr[arr.length - 1]
  }
}
