import React, { useState, useEffect } from "react";
import "./location.css";

// variables
let i = 1;
let destination = localStorage.getItem('destination');

// functions
function CovidInfo(props) {
    destination = props.details.city;
    localStorage.setItem('destination',destination);
    window.open("./covid_info","_self")
}

function Location(props) {
    i++;
    return (
        <article className="location">
                <img src={"https://picsum.photos/300/200?random=" + i}></img>
                <h4>Country: {props.details.country}</h4>
                <h4>City: {props.details.city}</h4>
                <h4>Score: {props.details.overall}</h4>
                <button button onClick={e => CovidInfo(props)} className="l_button">Covid Information</button>  
        </article>
    );
}

export default Location;