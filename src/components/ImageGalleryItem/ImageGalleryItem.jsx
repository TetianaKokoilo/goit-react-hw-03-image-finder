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

// export default function ImageGalleryItem({
//   image: { image, tags, onClick, index },
// }) {
//   <li class="gallery-item">
//     <img src={image} alt={tags} />
//   </li>;
// }
