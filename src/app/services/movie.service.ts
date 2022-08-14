import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(page=1): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`)
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }


}
