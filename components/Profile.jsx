import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style.css';

export default class Profile extends React.Component {
  componentDidMount() {
    document.getElementById('banner').style.backgroundImage = '';
    document.getElementById('nav').style.backgroundImage = 'url("../assets/bridge.jpg")';
  }

  render() {
    return (
      <div className="body">
        <h1>
          A little bit about me!
        </h1>
        <hr/>
        <p>
          I'm an software engineer specializing in web development, interested in building quick, efficient, and modular client-<br/>
          side environments to provide the best possible UX. I approach feature implementation as an iterative process, and<br/>
          my attention to detail and discipline for critiquing visuals require me to maintain my work to a high standard.<br/>
          <br/>
          Experienced with front-end frameworks - Angular, React/Redux, with strong fundamentals in HTML and CSS, and<br/>
          server-side technologies including Node/Express, MySQL, PostgreSQL, and MongoDB databases with accompanying<br/>
          ODM/ORMs.
        </p>
      </div>
    );
  }
}