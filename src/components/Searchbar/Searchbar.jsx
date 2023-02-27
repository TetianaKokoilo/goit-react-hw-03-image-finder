import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
} from './Searchbar.styled';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ searchImage: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    const { searchImage } = this.state;
    return (
      <StyledSearchbar onSubmit={this.handleSubmit}>
        <StyledSearchForm>
          <StyledSearchFormButton type="submit">
            <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchImage}
            onChange={this.handleChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
