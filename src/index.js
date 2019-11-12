import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const axios = require('axios');

class Main extends React.Component {
    
    constructor(){
        super();
        this.state = {
            fact: "",
            categories: []
            // selectedOption: ""
        };
        this.getFact = this.getFact.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    getFact(){
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({fact: response.data.value})
            });
    }

    //get categories at page load
    // componentDidMount(){
    //     axios.get('https://api.chucknorris.io/jokes/categories')
    //         .then((response) => {
    //             // console.log(response.data[1])
    //             for(var i = 0;i < response.data.length;i++) {
    //                 this.state.categories.push(<option value={response.data[i]}>{response.data[i]}</option>);
    //             };
    //         });
    // }

    render(){
        return(
            <div className="main">
                <h1>Chuck Noris Facts</h1>
                <h3>{this.state.fact}</h3>
                <div>
                    {/* <select>
                        {this.state.categories}
                    </select> */}
                    <button onClick={this.getFact}>Next Fact</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(  
    <Main />,
    document.getElementById("root")
);