import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const axios = require('axios');

class Main extends React.Component {
    
    constructor(){

        super();
        this.state = {
            fact: "",
            categories: [],
            selectedOption: "random"
        };
        this.getFact = this.getFact.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)

        // add random to the categories list
        this.state.categories.push(<option value="random">random</option>);

        this.getCategories();
        this.getFact();
    }

    getFact(){
        if(this.state.selectedOption === "random"){
            axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({fact: response.data.value})
            });
        }
        else{
            axios.get('https://api.chucknorris.io/jokes/random?category=' + this.state.selectedOption)
            .then((response) => {
                this.setState({fact: response.data.value})
            });
        }
    }

    getCategories(){
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then((response) => {
                for(var i = 0;i < response.data.length;i++) {
                    this.state.categories.push(<option value={response.data[i]}>{response.data[i]}</option>);
                };
                this.forceUpdate()
            });
    }

    setSelectedOption(e){
        this.setState({selectedOption: e.target.value});
    }

    render(){
        return(
            <div className="main">
                <h1>Chuck Norris Facts</h1>
                <h3>{this.state.fact}</h3>
                <div>
                    <select onChange={this.setSelectedOption.bind(this)}>
                        {this.state.categories}
                    </select>
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