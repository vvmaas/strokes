import { Injectable } from '@angular/core';

import { Artwork } from '../models/Artwork';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  private baseApiUrl = environment.baseApiUrl;
  private searchFilters = "fields=id,title,artist_display,description,date_display,main_reference_number,thumbnail"

  constructor(private http: HttpClient) { }

  getHomepage(): Observable<any> {
    const url = `${this.baseApiUrl}?${this.searchFilters}`
    return this.http.get<Artwork[]>(url);
  }

  getById(id: number): Observable<Artwork> {
    const url = `${this.baseApiUrl}/${id}?${this.searchFilters}`
    return this.http.get<Artwork>(url);
  }

  getSearchResults(keyword: string): Observable<any> {
    const url = `${this.baseApiUrl}/search?q=${keyword}&${this.searchFilters}`
    return this.http.get<Artwork[]>(url);
  }

}
