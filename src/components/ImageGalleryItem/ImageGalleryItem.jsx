import { Component } from 'react';
import { StyledImageGalleryItem, StyledGalleryImage } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  render() {
    const { image, tags, onClick, index } = this.props;
    return (
      <StyledImageGalleryItem lionClick={onClick}>
        <StyledGalleryImage
          onClick={() => {
            this.props.getIndex(index);
          }}
          src={image}
          alt={tags}
        />
      </StyledImageGalleryItem>
    );
  }
}
