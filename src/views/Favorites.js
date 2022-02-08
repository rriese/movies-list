import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites)
    return (
        <div className="container">
            <section>
                <h4>Meus filmes favoritos</h4>
                <ul>
                    {
                        favorites.movies.map(movie => 
                            <Link to={`/movie/${movie.id}`}><li>{movie.title}</li></Link>
                        )
                    }
                </ul>
                
            </section>
        </div>
    )
}