const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Please enter your name"],
        minlength: [3, "Please enter a name of 3 characters or more."]
    },
    review: { 
        type: String, 
        required: [true, "Please enter a review"],
        minlength: [10, "Your review must be at least 10 characters"],
        maxlength: [500, "your review must be a maximum of 500 characters"]
    },
    rating: {
        type: Number, 
        required: [true, "Reviewer must enter a rating"], 
        min:1,
        max:5
    },
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);

module.exports = ReviewSchema;