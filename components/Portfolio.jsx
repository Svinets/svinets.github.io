import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style.css';

export default class Portfolio extends React.Component {
  componentDidMount() {
    document.getElementById('banner').style.backgroundImage = 'url("../assets/night.jpg")';
    document.getElementById('nav').style.backgroundImage = '';
  }

  render() {
    return (
      <div className="body">
        <h1>Portfolio!</h1>
      </div>
    );
  }
}