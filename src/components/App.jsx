import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PickAPI from './images-api';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    isLoading: false,
    error: null,
    images: [],
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.name !== this.state.name) {
      this.setState({ isLoading: true, images: [] });

      PickAPI.fetchImages(this.state.name, this.state.page)
        .then(images => this.setState({ images: images.hits }))

        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  getSearchSubmit = name => {
    this.setState({ name });
  };

  render() {
    const { error, images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {error && <div>{error.message}</div>}
        <ImageGallery>
          {images.map((image, index) => {
            return (
              <ImageGalleryItem
                onClick={this.toggleModal}
                getIndex={this.getIndex}
                key={image.id}
                index={index}
                image={image.webformatURL}
                tags={image.tags}
              />
            );
          })}
        </ImageGallery>
      </div>
    );
  }
}
