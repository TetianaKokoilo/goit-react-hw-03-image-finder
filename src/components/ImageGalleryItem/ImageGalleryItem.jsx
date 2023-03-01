import { Component } from 'react';
export class ImageGalleryItem extends Component {
  render() {
    const { image, tags, onClick, index } = this.props;
    return (
      <li onClick={onClick}>
        <img
          onClick={() => {
            this.props.getIndex(index);
          }}
          src={image}
          alt={tags}
        />
      </li>
    );
  }
}
