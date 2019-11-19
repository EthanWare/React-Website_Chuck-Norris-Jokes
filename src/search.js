import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './search.css';

const axios = require('axios');

class Search extends React.Component {
    
    constructor(){

        super();
        this.state = {
            facts: [],
            searchText: ""
        };
        this.searchFacts = this.searchFacts.bind(this);
    }

    searchFacts(e){
        this.setState({searchText: e.target.value});

        axios.get('https://api.chucknorris.io/jokes/search?query=' + this.state.searchText)
        .then((response) => {
            console.log(response.data);

            //clear array
            this.setState({facts: []});

            if(response.data.total === 0){
                this.state.facts.push(<tr><td>No facts found</td></tr>);
            }
            else{
                for(var i = 0;i < response.data.total;i++) {
                    this.state.facts.push(<tr><td>{response.data.result[i].value}</td></tr>);
                };
            }
            this.forceUpdate()
        })
        .catch(error => {
            //clear array
            this.setState({facts: []});
            
            if(this.state.searchText !== "")
                this.state.facts.push(<tr><td>No facts found</td></tr>);
            
            this.forceUpdate()
        });
    }

    render(){
        return(
            <div className="search">
                <h1>Search Chuck Norris Facts</h1>
                <div>
                    <input onChange={event => this.searchFacts(event)}></input>
                </div>

                <div className="link"><Link to="/">Home Page</Link></div>

                {this.state.facts.length > 0 ? <table border="1"><tbody>{this.state.facts}</tbody></table> : ""}
            </div>
        )
    }
}

export default Search;