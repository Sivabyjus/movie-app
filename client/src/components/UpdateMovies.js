import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { Input, Button, Container } from 'reactstrap'

export default function UpdateMovies(props) {
    const [poster, setPoster] = useState('movie.poster')
    const [title, setTitle] = useState('movie.title')
    const [type, setType] = useState('movie.type')
    const [year, setYear] = useState('movie.year')
    const { movieTitle } = useParams();

    const history = useHistory();

    function onClickUpdateMovies() {
        console.log(movieTitle)
        axios
            .put(`http://localhost:5000/UpdateMovies/${movieTitle}`, {
                poster,
                movieTitle,
                type,
                year
            })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        alert(`${movieTitle} Movie is Updated`)
    }

    return (
        <Container className="bg-secondary">
            <section>
                <h4 className="text-center text-white p-4">Add Movie Details</h4>
                <p className="text-white"> Movie Name</p>
                <Input
                    placeholder='Movie Name'
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
                <br />
                <Button className="btn mr-4 " color='success' onClick={onClickUpdateMovies}>
                    Update Movie Details
      </Button>
                <Button
                    type='button'
                    className='btn btn-success '
                    onClick={() => history.goBack()}
                >
                    Go Back
      </Button>
            </section>
        </Container>
    )
}