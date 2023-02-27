import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput
} from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

export default function Searchbar() {
  return (
    <StyledSearchbar>
      <StyledSearchForm>
        <StyledSearchFormButton type="submit">
            <BiSearch />
          <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
        </StyledSearchFormButton>

        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
}
