import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchVal: ""
        }

        console.log(props.onSearchMovie);
    }

    
    

    changeHandler = (e) => {
        
        this.setState({
            searchVal: e.target.value
        })  
         
    }

    clickHandler = () => {
        this.props.onSearchMovie(this.state.searchVal)
    }

    render () {
        
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" value={ this.state.searchVal } placeholder="Search" aria-label="Search" onChange={this.changeHandler}/>
                <button onClick={ this.clickHandler } className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        )
    }
}


