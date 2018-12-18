const mongoose = require('mongoose');
const ReviewSchema = require("./review");

const MovieSchema = new mongoose.Schema({
   
   title: { 
      type: String, 
      required : [true, "Please enter a movie title"],
      minlength: [1, "Please enter a title of 1 character or more."],
      maxlength: [255, "The movie title must be a max 255 characters"],
   },

   description: { 
      type: String, 
      required : [true, "Please enter a movie description"],
      minlength: [3, "Please enter a name of 3 characters or more."],
      maxlength: [500, "The movie title must be a max 255 characters"],
   },
   
   reviews: [ReviewSchema],
   
   avgrating: {
      type: Number
   },
   
   }, {timestamps: true});

   
   mongoose.model('Movie', MovieSchema); // We are setting this Schema in our Models as 'Movie'