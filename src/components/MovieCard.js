import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {


    return (
        <div >
            {

                <Card style={{ width: '18rem', margin: '30px', height: '26rem' }} >
                    <Card.Img variant="top" src={movie.posterURL} alt="blabla" style={{ height: '20rem' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title style={{ height: '25px', width: 'auto', overflowY: 'auto' }}>{movie.title}</Card.Title>
                        <div style = {{display:'flex', justifyContent:'space-between'}}>
                            <ReactStars
                                count={5}
                                size={20}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                value={movie.rating}
                                edit={false}
                            />
                            {/* <Card.Text style ={{width:'255px', height:'100px', overflow :'auto'}}>
                     {movie.description}
                    </Card.Text> */}

                            <Link to={`${movie.title}/description/${movie.id}`}>
                                <Button variant="outline-secondary" style={{ alignSelf: 'center' }}>
                                    See trailer
                                </Button>
                            </Link>
                        </div>

                    </Card.Body>

                </Card>
            }

        </div>
    )
}
export default MovieCard