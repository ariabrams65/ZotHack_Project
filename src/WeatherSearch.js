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

    changed = (event) =>{
        this.setState({isSearched: false});
        event.preventDefault();
    }

    render() {
        const isSearched = this.state.isSearched;
        let searchLabel;
        if (isSearched) {
            searchLabel= <DisplayWeather location = {document.getElementById('search').value}/>
            console.log(document.getElementById('search').value)
        } else {
            searchLabel = <h1 className="info">Enter a location</h1>
        }
        return (
            <div>
                <input className ="searchbar" type = 'text' id = 'search' onChange = {this.changed}></input>
                <button onClick = {this.handleSubmit}>Go</button>
                {searchLabel}
            </div>
        );
    }

}