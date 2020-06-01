import React from 'react'
import MovieItem from './movie_item'


export default function movieList(props) {

  if (!props.movies) {
    return (
      
        <h2>Nessun risultato trovato</h2>
      
    )
  } else {

    return (
        <div className="row">
        {
          props.movies.map( movie => <MovieItem key={movie.imdbID} movie={movie}/>)
        }
        </div>
    )
  }
}


