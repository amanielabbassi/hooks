import "./App.css";
import { useState } from "react";
import Movie from "./components/Movie";
import { Form, FormControl } from "react-bootstrap";
import AddModal from "./components/AddModal";
import ReactStars from "react-rating-stars-component";

function App() {
  const [movie, setmovie] = useState([
    {
      "Title": "PETERPAN",
      "Poster":
        "https://i.insider.com/5dc98ccd7eece5190946c5dc?width=1000&format=jpeg&auto=webp",
        "Year": 2019,
        rating: 4,
      
    },
    {
      "Title": "Interstellar",
      "Poster":
        "https://pyxis.nymag.com/v1/imgs/06f/934/0452d6a16ef47200730233308db4fcdd32-the-mitchells-vs-the-machines.rsquare.w1200.jpg",
        "Year": 2014,
        rating: 4,
      
    },
    {
      "Title": "CLOUDY MEAT BALLS",
      "Poster":
        "https://i.pinimg.com/236x/5a/ff/03/5aff039b6e342b4cfd16f67b9a99a42e--kid-movies-family-movies.jpg",
        "Year": 2019,
      rating: 3
    },
  {
      "Title": "STORKS",
      "Year": "2020",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "http://visitcooma.com.au/wp-content/uploads/2016/12/storks-movie-poster.jpg",
      rating: 4,
    },
  {
      "Title": "  CROODS",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8mCaxQMZd-ydbm7BcRjQEL5D7w_hbcV_XzA-MtSgIssW0UN6ltcJJ-gAthKMs_n8wUc&usqp=CAU",
      rating: 4,
  },
 
  {
      "Title": "HOTEL TRANSYLIYANA",
      "Year": "2019",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-jLLPVvu_4vtQHIiTtg2QMFo884TvHfZCBVuMLlQx620hy6fUp73flLjBggCH2p1_Sc&usqp=CAU",
      rating: 5,},
  {
      "Title": " DRAGON",
      "Year": "2021",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Tntoq_D3uLeSzFtrSBCFNQd1wcUP_KwhQ&usqp=CAU",
      rating: 3,},
  {
      "Title": "THE MITCHELLS VS THE MACHINES ",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEl_CGL4dc3uSdJIcTmRj3jHqCH38oqMoHg&usqp=CAU",
      rating: 4,},
 
  {
      "Title": "PIKACHU",
      "Year": "2018",
      "imdbID": "tt3778644",
      "Type": "movie",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVFjqzAscYAy4n1tfS-6rm4aGXzgixXndbA&usqp=CAU",
      rating: 4,}
 
  ]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [textFilter, setTextFilter] = useState("");
  
  const addMovie = (newMovie) => {
    setmovie([...movie, newMovie]);
  };

  const ratingChanged = (newRating) => {
    setRatingFilter(newRating);
    console.log(ratingFilter)
  };

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };


  
  


  return (
    <div className="App">
     
      <div className="search">
        <div className='top'>
        
        <div className="btn">
          <AddModal addMovie={addMovie} movie={movie} />
        </div>
        <p>AB.KIDS</p>
        </div>
     
      <div>
      <div className='my-search'>
      <Form className="search-in">
          <FormControl
            type="search"
            placeholder="search movies"
            className=""
            aria-label="Search"
            onChange={handleChange}
          />

          <ReactStars
            count={5}
            onChange={ratingChanged}
           
            size={24}
            activeColor="#ffd700"
          />
        </Form>
      </div>

      </div>
       
        
      </div>
      <div>
        <Movie
          ratingChanged={ratingChanged}
          movie={movie.filter(
            (el) =>(el.Title.toLowerCase().includes(textFilter.toLowerCase().trim()) &&
              el.rating >=ratingFilter)
          )}
        />
      </div>
    </div>
  );
}

export default App;