const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
    console.log("hola")
    Movie.find({})
    .select({ title: 1, image: 1 })
    .then((response) => {
      console.log(response);
      res.render("movies", {
        movies: response
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/movie/:id", (req, res, next) => {
    let movieId = req.params.id.slice(1)
    console.log(movieId)
    Movie.findById(movieId)
    .then((response) => {
        console.log(response)
        res.render("movie-details.hbs", {
            movie : response
        })
    })
    .catch((error) => {
        next(error)
    })
})

module.exports = router;
