import { Injectable } from '@angular/core';

import { Artwork } from '../models/Artwork';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  private baseApiUrl = environment.baseApiUrl;
  private searchLimit = 40;
  private relatedLimit = 15;
  private defaultFilter = `fields=id,title,artist_title,description,date_display,main_reference_number,thumbnail,config,image_id&limit=`
  filter(type: string) {
    if(type == 'search'){
      return this.defaultFilter + this.searchLimit
    } else {
      return this.defaultFilter + this.relatedLimit
    }
  }

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.get<any>(url);
  }

  getSearchResults(keyword: string | null, page: number = 1): Observable<any> {
    const headers = new HttpHeaders()
      .set('Cache-Control', 'max-age=0');

    const url = `${this.baseApiUrl}/search?q=${keyword}&${this.filter('search')}&page=${page}`
    return this.http.get<Artwork[]>(url, { headers });
  }

  getRelatedResults(keyword: string | null, page: number = 1): Observable<any> {
    const headers = new HttpHeaders()
      .set('Cache-Control', 'max-age=0');

    const url = `${this.baseApiUrl}/search?q=${keyword}&${this.filter('related')}&page=${page}`
    return this.http.get<Artwork[]>(url, { headers });
  }
}


