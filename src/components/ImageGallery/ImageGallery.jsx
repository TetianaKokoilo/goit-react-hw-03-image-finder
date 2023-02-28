// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
// export default function ImageGallery({ images }) {
//   return (
//     <ul class="gallery">
//       {images.map(image => {
//         return <ImageGalleryItem image={image} />;
//       })}
//     </ul>
//   );
// }

import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}
