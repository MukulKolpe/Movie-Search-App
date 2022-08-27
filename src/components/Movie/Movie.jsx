import "./Movie.css";

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <div className="movie">
      <img src={Poster} alt="avengers-banner" className="movie-poster"></img>
      <span className="movie-name">{Title}</span>
      <div className="movie-info">
        <span className="info-span">Year: {Year}</span>

        <button className="nominateBtn">Nominate</button>
      </div>
    </div>
  );
};

export default Movie;
