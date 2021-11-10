import React, {useEffect, useState} from "react";
import './home.css';
import {Card, Button} from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = (props) => {
    const {movies} = useSelector((state) => state.movieApp);
    console.log("redux, state", movies);
    const {handleMovieEdit, handleDelete} = props;
    const [languages, setLanguages] = useState([
        {
            lang: "Malayalam",
            checked: false
        },
        {
            lang: "English",
            checked: false
        },
        {
            lang: "Tamil",
            checked: false
        },
        {
            lang: "Hindi",
            checked: false
        }
    ])

    useEffect(() => {

        // const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
        // console.log('')

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch(error => {
        //         console.log("error", error)
        //     });
        // console.log('abc');
        invokeApi();
    },[]);


    const invokeApi = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // console.log("response", response);

        // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => {
        //         console.log(response);
        //         const {data} =  response;
        //     })
        //     .catch(error => {
        //         console.log('error', error);
        //     })
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));

        // try {
        //     const response = await axios.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     }));
        //     if(response.status === 201) {
        //         console.log(response.data);
        //         alert("Post saved success");
        //     } else {
        //         console.log("error")
        //     }  //200, 201, 202, 203, 204
        // } catch(error) {
        //     console.log("error", error.message);
        // }


    }

    const handleEditMovie = (movie) => {
        console.log("movie ro edit", movie);
        const editLanguage = [...languages];
        editLanguage.map(lang => {

            // editLanguage[movie.languages.findIndex(mlang =>  { return mlang === lang.lang})].checked = true;
            movie.languages.map(mlang => {
                if(lang.lang === mlang) {
                    lang.checked = true;
                }
            })
        });
        movie.languages = editLanguage;
        handleMovieEdit(movie)

    }

    const handleDeleteMovie = (movie) => {
        handleDelete(movie.id)
    }



    return (
        <div className="container" style={{display: "flex"}}>
            {
                movies && movies.length === 0 ? <h3>Please Add movie to list</h3> :

                        movies && movies.map(movie => {
                            return (
                                <Card style={{ width: '18rem' }} key={movie.id}>
                                    <Card.Img variant="top" src={"images/" +movie.id + ".jpeg"} style={{ height: 250, objectFit: "cover"}} />
                                    <Card.Body>
                                        <Card.Title>{movie.name}</Card.Title>
                                        <Card.Text>
                                            {movie.actor}
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.rating}
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.description}
                                        </Card.Text>

                                        <Button variant="primary" onClick={() => handleEditMovie(movie)}>Edit</Button>
                                        <Button variant="primary" onClick={() => handleDeleteMovie(movie)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
            }
        </div>

    )
}
export default Home;
