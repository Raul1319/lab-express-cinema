const express = require ("express");
const router = express.Router();


const Movie = requeire("../models/Movie.model");


router.get("/movies", (res, res, nect) =>{

    Movie.find()
    .then((allMoviesFromDB) =>{
        console.log("Retrieved all movies:", allMoviesFromDB);
        res.render("movies/movies.hbs", {movies: allMoviesFromDB});

    })

.catch((error) =>{
    console.log("Error while gretting the movies from the DB", error);
    next(error);
});

});


router.get("/movies/:id", (req, res, next) =>{

    const movieId = req.params.id;
    console.log("ID from URL is:", movieId);

    Movie.findById(movieId)
    .then((theMovie) =>{
        res.render("movies/movie-details.hbs", {movie: theMovie})
  
    })

    .catch((error) =>{
        console.log ("Error while retrieving teh movie details", error);
        next(error)
    });


});


module.exports = router
