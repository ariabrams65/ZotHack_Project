import React, { Component } from "react";
import './WeatherSearch.css';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <form className="form" >
                    <label>
                        Search:
                        <input type="text"></input>
                    </label>
                </form>
            </div>
        );
    }

}