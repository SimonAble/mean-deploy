import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})

export class NewMovieComponent implements OnInit {

  newMovie = {
    title:"",
    description:""
  }

  newReview = {
    name:"",
    review:"",
    rating:Number
  }

  movie_data: any;
  movie_id;

  errors = {};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  create() {
    console.log(this.newMovie);
    let movie_observable = this._httpService.createMovie(this.newMovie);
    movie_observable.subscribe( data => {
      if(data['status'] == 'not ok') {
        this.errors = data['errors']['errors'];
      }
      else{
        console.log("Creating new movie!!");
        this.movie_data = data['data'];

        console.log("Checking id match: " + this.movie_data['_id']);

        // this._router.navigate(['/']);
        let review_observable = this._httpService.createReview(this.movie_data['_id'], this.newReview);
        review_observable.subscribe(data => {
          console.log("Creating new Review now!!");
          console.log(this.newReview);

          if(data['status'] == 'not ok') {
            this.errors = data['errors']['errors'];
          }
          else{
            console.log("Creating Movie and Review!!")
            this._router.navigate(['/']);
          }
        })
      }
    })


  }
}
