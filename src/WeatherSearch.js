import React, { Component } from "react";
import './WeatherSearch.css';
import DisplayWeather from "./components/climate.js";

export default class Weather extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            isSearched: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }  

    
    handleSubmit = (event) => {
        this.setState({isSearched: true});
        event.preventDefault();
    };

    render() {
        const isSearched = this.state.isSearched;
        let searchLabel;
        if (isSearched) {
            searchLabel= <DisplayWeather/>
        } else {
            searchLabel = <h1>Enter a location</h1>
        }
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input id = 'search' type="text"></input>
                    </label>
                    <input type="submit" value="Go"></input>
                </form>
                {searchLabel}
            </div>
        );
    }

}