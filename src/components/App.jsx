import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

const API_KEY = '32970758-8ba6ee6d9fec7577e22e4216e';
export class App extends Component {
  state = {
    searchImage: '',
    name: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchImage !== this.state.searchImage) {
      console.log('Изменилось имя картинки');
      this.setState({ isLoading: true });
      fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  getSearchSubmit = searchImage => {
    this.setState({ searchImage });
  };
  render() {
    const { images, isLoading, searchImage } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {!searchImage && <div>Write the name of the image</div>}
        {isLoading && <div>Loading...</div>}
        {/* {images && <div>{}</div>} */}
        {/* <ImageGallery /> */}
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
        {/* <Button/> */}
      </div>
    );
  }
}
