import React, {useState} from "react";
import './home.css';
import {Card, Button} from "react-bootstrap";

const Home = (props) => {
    const {movies, handleMovieEdit, handleDelete} = props;
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
                movies.length === 0 ? <h3>Please Add movie to list</h3> :

                        movies.map(movie => {
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
