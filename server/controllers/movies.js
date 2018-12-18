const mongoose = require('mongoose');
    Movie = mongoose.model('Movie');

let options = {
    new:true,
    runValidators:true
}

    module.exports = {
        showMovies: function(req, res) {
            Movie.find({}, function(err, data) {
                if(err) {
                    res.json({"status": "not ok", "errors": err});
                  }
                else { 
                    res.json({"status": "ok", "data": data});
                }
            })
        },
    
        create: function(req, res) {
            let movie = new Movie({
                title: req.body.title,
                description: req.body.description,
            });
            
            movie.save(function(err,data) {
                if(err) {
                    res.json({"status": "not ok", "errors": err});
                  }
                else { 
                    res.json({"status": "ok", "data": data});
                }
            })
        },
    
        show: function(req, res) {
            var this_id = req.params.movie_id;
            console.log("Displaying name in request parameters: " + this_id);
            Movie.findOne({_id:this_id}, function(err,data){
                console.log(data);
                if(err) {
                    res.json({message: "Error", "errors": err})
                  }
                else { 
                    res.json({message: "Success", data:data})
                }
            }) 
        },
    
        delete: function(req,res) {
            var this_id = req.params.movie_id;
        
           Movie.findByIdAndRemove({_id:this_id}, function(err){
                if(err) {
                    res.json({message: "Error", "errors": err})
                }
                else { 
                    res.json({message: "Success"})
                }
            })
        }
    }