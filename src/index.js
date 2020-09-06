import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }

    // initializing state without constructor
    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request"/>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);