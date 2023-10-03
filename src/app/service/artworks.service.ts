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
  private searchFilters = "fields=id,title,artist_title,description,date_display,main_reference_number,thumbnail,config,image_id&limit=24"

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.get<any>(url);
  }

  getSearchResults(keyword: string | null): Observable<any> {
    const url = `${this.baseApiUrl}/search?q=${keyword}&${this.searchFilters}`
    return this.http.get<Artwork[]>(url);
  }

}
