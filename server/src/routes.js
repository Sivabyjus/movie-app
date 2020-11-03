const express = require("express");
const Movie = require("./models/Movie");

const router = express.Router();

module.exports = function () {
    router.get('/getMovies/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({ title: searchValue });
        return res.send(moviesData);
    });

    router.post('/addMovie', async (req, res) => {
        const { movietitle, year, poster, imdbId } = req.body;
        const movie = new Movie({
            movietitle,
            year,
            poster,
            imdbId
        });
        await movie.save();
        res.json({ message: "Movie added successfully" });
    });
    router.put('/updateMovie', async (req, res) => {
        console.log(req.body)
        const { movietitle, type, year, poster, imdbId } = req.body;
        const movie = new Movie({
            movietitle,
            type,
            year,
            poster,
            imdbId
        });
        await movie.save();
        res.json({ message: "Movie updated successfully" });
    });
    router.delete('/deleteMovies/:movieTitle', async (req, res) => {
        console.log("hello");
        const { movieTitle } = req.params;
        await Movie.deleteOne({title:movieTitle},function(err){
        if(err) return handleError(err);
        });
        return res.json({ message: "Movie deleted successfully" });
        });

    return router;
}