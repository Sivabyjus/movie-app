import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { useParams} from "react-router-dom";
import { Input,Button,Container} from 'reactstrap'

export default function DeleteMovies() {
  const {movieTitle} = useParams();
  const history = useHistory();
  useEffect(() => {
    deleteMovieDetail();
  }, []);

  function deleteMovieDetail() {
    console.log(movieTitle)
    axios
      .delete(`http://localhost:5000/deleteMovies/${movieTitle}`, {
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
    alert(`${movieTitle} Movie is Deleted`)
  }
 return(
    <Container className="bg-secondary">
    <section>
    <Button
    type='button'
    className='btn btn-danger '
    onClick={() => history.goBack()}
  >
    Go Back
  </Button>
</section>
</Container>
 )
}