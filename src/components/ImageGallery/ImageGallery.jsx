import React, { Component } from 'react';
import { StyledImageGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    return <StyledImageGallery>{this.props.children}</StyledImageGallery>;
  }
}
