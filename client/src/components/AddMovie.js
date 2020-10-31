import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddMovie() {

    useEffect(() => {
        addMovie();
    }, []);

    async function addMovie() {
        console.log("adding movie")
        const body = { title: "Avengers", year: "2010", imdbId: 1 };
        const result = await axios.post("http://localhost:5000/addMovie", body)
            .then((response) => {
                console.log(response);

            }).catch((error) => {
                console.log("Error", error);
            });

        }
    return (<h1>Adding a movie</h1>);
}