import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Input, Button, Container } from 'reactstrap'

export default function AddMovie () {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  const [imdbID, setId] = useState('')

  const history = useHistory();

  function onClickInsert () {
    axios
      .post(`http://localhost:5000/addMovie`, {
        title,
        year,
        poster,
        imdbID,
      })
      .then(res => {
      })
    alert(`${title} Movie is Inserted`)
  }

  return (
    <Container>
    <section>
      <h1 align = "center" > Enter The Movie Details </h1><br/>
      <p>Enter the Movie Name</p>
      <Input
        placeholder='Movie Name'
        onChange={e => {
          setTitle(e.target.value)
        }}
      />
      <br />
      <p>Enter the Year</p>
      <Input 
        placeholder='Enter The Year'
        onChange={e => {
          setYear(e.target.value)
        }}
      />
      <br />
      <p>Enter the imdbId</p>
      <Input
        placeholder='Enter The ID'
        onChange={e => {
          setId(e.target.value)
        }}
      />
      <br />
      <p>Enter the Poster Link</p>
      <Input
        placeholder='Enter The Poster link'
        onChange={e => {
          setPoster(e.target.value)
        }}
      />
      <br />
      <Button color='warning m-5' onClick={onClickInsert}>
        Insert Data
      </Button>
      <Button
        className='btn btn-warning'
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </section>
    </Container>
  )
}