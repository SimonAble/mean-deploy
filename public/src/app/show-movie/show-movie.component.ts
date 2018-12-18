import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  movie:any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getMovie(params['movie_id']);
    })
  }

  getMovie(movie_id) {
    let observable = this._httpService.getMovie(movie_id);
    observable.subscribe( data => {
      this.movie = data['data'];
    })
  }

  deleteReview(review_id) {

    console.log(review_id);

    let index = this.movie.reviews.findIndex( i => i._id === review_id);
    console.log("Showing index of specific item", index);

    console.log(this.movie.reviews);
    this.movie.reviews.splice(index,1);
    console.log(this.movie.reviews);


    let observable = this._httpService.deleteReview(review_id);
    observable.subscribe( data => {
      console.log("Deleting Review!!");
    })
  }
}
