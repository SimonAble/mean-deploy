import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

// <<-------------Movies Routing------------->>
getMovies() {
  return this._http.get('movies');
}

createMovie(movie) {
  return this._http.post('movies', movie);
}

getMovie(movie_id) {
  return this._http.get('movie/' + movie_id);
}

createReview(movie_id, review) {
  return this._http.post('reviews/' + movie_id, review);
}

deleteAMovie(movie_id) {
  return this._http.delete('movies/' + movie_id);
}

deleteReview(review_id) {
  return this._http.delete('/review/' + review_id);
}
// <<-------------Reviews Routing------------->>

}

