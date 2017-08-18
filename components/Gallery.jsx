import React from 'react';

const urls = ['1', '2', '3', '4', '5'];

const Gallery = (props) => (
  <div>
    <h1>Gallery!</h1>
    {
      urls.map((url, index) => <span key={index}>{url}</span>)
    }
  </div>
);

export default Gallery;