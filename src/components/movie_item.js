import React from 'react'

export default function movie_item(props) {
    return (
        <div className="card col-md-3" >
            <img src={props.movie.Poster} className="card-img-top" alt={props.movie.title} />
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    )
}


