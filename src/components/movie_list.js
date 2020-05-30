import React from 'react'
import MovieItem from './movie_item'


export default function movieList(props) {
    return (
        <div className="row">
        {
          props.movies.map( movie => <MovieItem key={movie.imdbID} movie={movie}/>)
        }
        </div>
    )
}


