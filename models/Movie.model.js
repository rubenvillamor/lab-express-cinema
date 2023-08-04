
const mongoose = require("mongoose")

const movielSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [ String ],
    image: String,
    description: String,
    showtimes: [ String]
})

const Movie = mongoose.model("Movie", movielSchema)
module.exports = Movie