import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { Input,Button,Container} from 'reactstrap'

export default function AddMovie() {
    const [poster, setPoster] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [year, setYear] = useState('')
    const [imdbId, setImdbId] = useState('')

    const history = useHistory();
    
    function onClickAddMovies() {
        console.log(title)
        axios
          .post(`http://localhost:5000/addMovie`, {
            poster,  
            title,
            type,
            year,
            imdbId
          })
          .then(res => {
            console.log(res)
            console.log(res.data)
          })
        alert(`${title} Movie is Inserted`)
      }
    
      return (
        <Container className="bg-secondary">
        <section>
        <h4 className="text-center text-white p-4">Add Movie Details</h4>
          <p className="text-white">Movie Name</p>
          <Input
            placeholder='Movie Name'
            onChange={e => {
              setTitle(e.target.value)
            }}
          />
          <br />
          <p className="text-white">Type Of Movie</p>
          <Input
            placeholder='Enter The type'
            onChange={e => {
              setType(e.target.value)
            }}
          />
          <br />
          <p className="text-white">Released Year</p>
          <Input
            placeholder='Year'
            onChange={e => {
              setYear(e.target.value)
            }}
          />
          <br />
          <p className="text-white">Poster Link</p>
            <Input
            placeholder='Poster link'
            onChange={e => {
              setPoster(e.target.value)

            }}
          />
          <p className="text-white">imdbId link</p>
            <Input
            placeholder='Poster link'
            onChange={e => {
              setImdbId(e.target.value)
              
            }}
          />
          <br />
          <Button className="btn mr-4 " color='success' onClick={onClickAddMovies}>
            Insert Movie Details
          </Button>
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