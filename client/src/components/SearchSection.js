import React from "react";
import {Link} from 'react-router-dom';
import { InputGroup, Input, Button } from "reactstrap";

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section bg-dark ">
      <div class="toast-header bg-dark text-light">
        <div class="toast-body">Welcome..</div>
      </div>
      <InputGroup>
        <Input
          placeholder=" Search movie name..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button color="dark" onClick={onClickSearch}>
          Search
        </Button>
        <Link to={`/add-movie`} className="btn btn-dark">
          Add Movie
        </Link>
      </InputGroup>
    </section>
  );
}