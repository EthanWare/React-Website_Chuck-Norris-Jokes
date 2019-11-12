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
        };
        this.getFact = this.getFact.bind(this);
    }

    getFact(){
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({fact: response.data.value})
            });
    }

    // getCategories(){
    //     axios.get('https://api.chucknorris.io/jokes/categories')
    //         .then((response) => {
    //             console.log(response)
    //             //this.setState({categories: response.data.value})
    //         });
    // }

    // componentWillMount(){
    //     axios.get('https://api.chucknorris.io/jokes/categories')
    //         .then((response) => {
    //             console.log(response)
    //             //this.setState({categories: response.data.value})
    //         });
    // }

    render(){
        return(
            <div>
                <h1>Chuck Noris Fact</h1>
                <h3>{this.state.fact}</h3>
                <button onClick={this.getFact}>Next Fact</button>
            </div>
        )
    }
}

// class Hello extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             message: "my friend (from state)!"
//         }
//         this.updateMessage = this.updateMessage.bind(this);
//     }

//     updateMessage() {
//         this.setState({
//             message: "my friend (from changed state)!"
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.state.message}!</h1>
//                 <button onClick={this.updateMessage}>Click me!</button>
//             </div>
//         )
//     }  
// }

ReactDOM.render(  
    <Main />,
    document.getElementById("root")
);