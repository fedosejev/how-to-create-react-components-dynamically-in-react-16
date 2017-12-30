import React, { Component } from 'react';
import Photo from '../Photo';
import photos from '../../photos.json';

class App extends Component {
  createPhoto = photo => <Photo source={photo} key={photo} />;
  createPhotos = photos => photos.map(this.createPhoto);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            
            {this.createPhotos(photos)}
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;