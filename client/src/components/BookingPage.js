import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=1c28ccf8`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert("Ticket Booked");
  }

  return (
    <Container>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <>
            <h2>{data.Title}</h2>
            <h4>Year: {data.Year}</h4>
            <p>
              <img src={data.Poster} alt="img" className="img-thumbnail" />
            </p>
            <div className="card border-info mb-4">
              <div class="text-center text-dark bg- card-header">
                Book the Show
            </div>
              <p>PLOT</p>
              <p>{data.Plot}</p>

              <h5>Rating: {data.imdbRating}</h5>
              <h6>Language: {data.Language}</h6>
              <h6>Country: {data.Country}</h6>
              <h6>Awards: {data.Awards}</h6>
              <h6>Year: {data.Year}</h6>

              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClickBook}
              >
                Book Ticket
            </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => history.goBack()}
              >
                Go Back
            </button>
            </div>
          </>
        )}
    </Container>
  );
}