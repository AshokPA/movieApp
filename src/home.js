import React from "react";
import './home.css';
import {Card, Button} from "react-bootstrap";

const Home = (props) => {
    const {movies} = props;

    return (
        <div className="container" style={{display: "flex"}}>
            {
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
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>

    )
}
export default Home;
