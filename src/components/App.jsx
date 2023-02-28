import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

const API_KEY = '32970758-8ba6ee6d9fec7577e22e4216e';
export class App extends Component {
  state = {
    searchImage: '',
    image: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(image => this.setState({ image }))
      .finally(() => this.setState({ isLoading: false }));
  }

  getSearchSubmit = searchImage => {
    this.setState({ searchImage });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.image && <div>image</div>}
        {/* <ImageGallery /> */}
        {/* <Button/> */}
      </div>
    );
  }
}
