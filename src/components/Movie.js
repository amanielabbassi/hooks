import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const Movie = ({ movie, ratingChanged }) => {
  return (
    <div className="movie">
      {movie.map((el) => (
        <Link to={`/description/${el.id}`}>
        <Card className="row" style={{ width: "18rem" }}>
          <div>
            <Rating name="read-only" value={el.rating} readOnly />
            <Card.Img className="img" variant="top" src={el.Poster} />
          </div>
          <Card.Body>
            <p>
              {movie.Title}({el.Year}){" "}
            </p>
            
          </Card.Body>
        </Card></Link>
      ))}
    </div>
  );
};

export default Movie;
