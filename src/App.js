import React, { Component, Fragment } from 'react';
import './App.css';
import VideoList from './components/movie_list';
import NavBar from './components/navbar';


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

    console.log(props);
    
  }

  searchMovies = (val) => {
    if (val.length < 3) {
      return
    } else {
      fetchMovies(val).then(resApi => {
        console.log(resApi);
        this.setState({
          movies: resApi.Search,
          totalCount: resApi.totalResults
          
        })
      })
    }
  }

  
  componentDidMount() {
    
    this.searchMovies('back to the future');
  }

  render(){
    return (
      <React.Fragment>
        <NavBar onSearch = {this.searchMovies}/>
        <div className="container">
          <VideoList movies={this.state.movies} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
