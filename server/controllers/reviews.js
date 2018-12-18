const mongoose = require('mongoose'),
    Review = mongoose.model('Review'),
    Movie = mongoose.model('Movie');

let options = {
    new:true,
    runValidators:true
    }

module.exports = {
    create: function(req, res) {
        let review = new Review({
            name: req.body.name,
            review: req.body.review,
            rating: req.body.rating
        });
        
        var movie_id = req.params.movie_id;

        review.save(function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
              }
            else { 
                Movie.findOneAndUpdate({_id: movie_id},{$push: {reviews: review}}, options, function(err, data) {
                    if(err){
                        res.json({"status": "not ok", "errors": err});
                    }
                    else {
                        res.json({"status": "ok", "data": data});
                    }
                });
            }
        });
    },

    showReviews: function(req, res) {
        var this_id = req.params.id;
        console.log("Displaying name in request parameters: " + this_id);
        Review.findOne({_id:this_id}, function(err,data){
            console.log(review);
            res.json({message: "Success", data:data})
        }) 
    },

    delete: function(req,res) {
        var this_id = req.params.id;
    
        Review.findByIdAndRemove({_id:this_id}, function(err,data){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "data": data});
            }
        })
    }
}