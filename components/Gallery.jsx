import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style.css';

const urls = ['1', '2', '3', '4', '5'];

export default class Gallery extends React.Component {
  componentDidMount() {
    document.getElementById('banner').style.backgroundImage = 'url("../assets/wish.jpg")';
    document.getElementById('nav').style.backgroundImage = '';
  }

  render() {
    return (
      <div className="body">
        <h1>Gallery!</h1>
        {
          urls.map((url, index) => <span key={index}>{url}</span>)
        }
      </div>
    );
  }
}