import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import SearchSection from "./components/SearchSection";
import DeleteMovies from "./components/DeleteMovies";

export default function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function onChangeSearchValue(event) {
    const searchValue = event.target.value;

    setSearchValue(searchValue);
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      fetchMovies();
    }
  }

  function onClickSearch() {
    fetchMovies();
  }

  function fetchMovies() {
    console.log("fetch the item");
    fetch(`http://localhost:5000/getMovies/${searchValue}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error))
  }

  function onClick4Booking(imdbId) { }
  return (
    <Container style={{ marginTop: "60px" }}>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data && data.length &&
            data.map((movie) => {
              return (
                <Col md={3} key={movie.imdbId}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={movie.poster}
                      alt="Card image cap"
                    />
                    <Card className="card border-primary mb-4">
                      <div class="card">
                        <h5 class="card-header text-center bg-warning text-danger">
                          Movie Details
                        </h5>
                      </div>
                      <CardBody className=" text-dark bg-light">
                        <CardTitle>Movie Name: {movie.title}</CardTitle>
                        <CardText>Released Year: {movie.year}</CardText>
                        <Link
                          to={`/booking-page/${movie.imdbId}`}
                          className="btn btn-primary"
                        >
                          Book Now!!!!
                        </Link>
                        <Link
                          to={`/update-movie/${movie.title}`}
                          className="btn btn-success"
                        >
                          Update Movie
                        </Link>
                        <Link
                          to={`/delete-movie/${movie.title}`}
                          className="btn btn-danger"
                        >
                          Delete Movie
                        </Link>
                      </CardBody>
                    </Card>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
    </Container>
  );
}