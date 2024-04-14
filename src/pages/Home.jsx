import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

// importando variáveis de ambiente

const moviesURL = import.meta.env.VITE_API;
const apiKey    = import.meta.env.VITE_API_KEY;

const Home = () => {
// método 'async fetch API' feito com criptografia de key
// e parâmetros de UseEffect (explicação tardia)
// e em especifíco para exibir somente os top filmes
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data     = await response.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, [])
// favor documentar o código acima...

  return (
    <div className="contaneir">
      <h2 className="title">Melhores Filmes: </h2>
      <div className="movies-contaneir">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>)
        )}
      
      </div>
    </div>
  );
};

export default Home;