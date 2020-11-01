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
        const { title, year, poster, imdbID, type } = req.body;
        const movie = new Movie({
            title,
            year,
            poster,
            imdbID,
        });
        await movie.save();
        res.json({ message: "Movie added successfully" });
    });

    return router;
}