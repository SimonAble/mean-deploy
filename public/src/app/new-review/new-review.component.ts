import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  movie:any;
  title:any;

  movie_id;

  review = {
    name: "",
    rating: Number,
    review: ""
  }

  errors = {};

  check = "Why the fuck isn't this working!?";
  @Input() taskToShow: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    console.log("Id that made it to review app: " + this.taskToShow)
    this.movie_id = this.taskToShow;
    this.getMovie(this.taskToShow);
  }

  getMovie(movie_id) {

    let observable = this._httpService.getMovie(movie_id);
    observable.subscribe( data => {
      console.log("Accessing data: " + data);
      this.movie = data['data'];
      console.log("The title of the retrieved movie is: " + this.movie.title);
      console.log("Showing entire movie?? " + this.movie);
    })
  }

  create() {
    console.log("Creating movie");
    console.log(this.movie_id);
    console.log(this.review);
    let observable = this._httpService.createReview(this.movie_id, this.review );
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        console.log("Info submited succesfully")
        this._router.navigate(['/showMovie/', this.movie_id]);
      }
    })
  }

}
