import { Link } from "react-router-dom";
import Detail from "../routes/Detail";

function Movie({id, coverImg, title, summary, genres}) {

  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link> 
      </h2>
      <img src={coverImg} alt={title} />
    <p>{summary}</p>
    <ul>
      {genres.map((genre) => (<li key={genre}>{genre}</li>))}
    </ul>
  </div>
  );
}

export default Movie;