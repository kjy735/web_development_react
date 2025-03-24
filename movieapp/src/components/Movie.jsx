
function Movie({key, coverImg, title, summary, genres}) {

  return (
    <div key={key}>
    <h2>{title}</h2>
    <img src={coverImg} alt={title} />
    <p>{summary}</p>
    <ul>
      {genres.map((genre) => (<li key={genre}>{genre}</li>))}
    </ul>
  </div>
  );
}

export default Movie;