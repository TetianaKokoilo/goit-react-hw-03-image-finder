import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import PixabeyAPI from './images-api';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    isLoading: false,
    error: null,
    images: [],
    showModal: false,
    index: null,
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.name !== this.state.name) {
      this.setState({ isLoading: true, images: [] });

      PixabeyAPI.fetchImages(this.state.name, this.state.page)
        .then(images => this.setState({ images: images.hits }))

        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };
  getIndex = index => {
    this.setState({ index });
  };

  getSearchSubmit = name => {
    this.setState({ name });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { error, images, showModal, index } = this.state;

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
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={images[index].largeImageURL} alt={images[index].tags} />
          </Modal>
        )}
      </div>
    );
  }
}
