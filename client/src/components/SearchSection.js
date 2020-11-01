import React from 'react'
import {Link} from 'react-router-dom';
import { InputGroup, Input, Button } from 'reactstrap'

export default function SearchSection (props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props

  return (
    <section className='search-section'>
      <h1 align = "center"> Welcome....!</h1>
      <h1 align = "center"> Enter The Movie Name To Search </h1>
      <InputGroup>
        <Input
          placeholder=' Search movie name...'
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button color='dark' onClick={onClickSearch}>
          Search
        </Button>
        <Link to={`/add-movie`} className='btn btn-primary'>
          Add Movie
        </Link>
      </InputGroup>
    </section>
  )
}