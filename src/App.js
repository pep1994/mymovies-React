import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list';

const apiKey = '93d16147';
const apiUrl = 'http://www.omdbapi.com';

function fetchMovies(search = 'futuro') {

  const fetchApi = fetch(`${apiUrl}?apikey=${apiKey}&s=${search}`)
  .then(res => res.json())
  return fetchApi;
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      totalCount: 0
    }
  }

  
  componentDidMount() {
    
    fetchMovies().then(resApi => {
      console.log(resApi);
      
      this.setState({
        movies: resApi.Search,
        totalCount: resApi.totalResults
        
      })
    })
  }

  render(){
    return (
      <div className="container">
        <VideoList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
