import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {

  getSearchSubmit = data => {
    this.setState({ data });
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {/* <ImageGallery /> */}
        {/* <Button/> */}
      </div>
    );
  }
}
