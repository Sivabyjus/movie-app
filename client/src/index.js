import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import AddMovies from "./components/AddMovies";
import UpdateMovies from "./components/UpdateMovies";
import DeleteMovies from "./components/DeleteMovies";
import BookingPage from "./components/BookingPage";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const history = createBrowserHistory();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Header />
      <main>
        <Switch>
          <Route path="/add-movie">
            <AddMovies />
          </Route>
          <Route path="/update-movie/:movieTitle">
            <UpdateMovies />
          </Route>
          <Route path="/delete-movie/:movieTitle">
            <DeleteMovies />
          </Route>
          <Route path="/booking-page/:movieId">
            <BookingPage />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </main>
      <footer className="footer">Copyright @ 2020 Book My Show</footer>
    </Router>
  </React.StrictMode>,
  rootElement
);