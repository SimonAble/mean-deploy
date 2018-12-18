// <<-------------------------------Routes------------------------------->>
const mongoose = require('mongoose'),
    Review = mongoose.model('Review'),
    Movie = mongoose.model('Movie');

//Talk to Controller
const reviews = require("../controllers/reviews");
const movies = require("../controllers/movies");

// Root Request

module.exports = function(app) {

// <<-------------Movies Routing------------->>
    app.get("/movies", movies.showMovies);
    app.post("/movies", movies.create);
    app.get("/movie/:movie_id", movies.show);
    app.post("/reviews/:movie_id", reviews.create);
    app.delete("/movies/:movie_id", movies.delete);

// <<-------------Reviews Routing------------->>
    // Show all reviews

}
