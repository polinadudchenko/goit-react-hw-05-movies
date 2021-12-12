import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchBtnLabel,
  StyledSearchInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.info('Please type a query');
      return;
    }

    onSubmit(input);
    setInput('');
  };

  return (
    <>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchBtn type="submit">
          <StyledSearchBtnLabel>Search</StyledSearchBtnLabel>
        </StyledSearchBtn>

        <StyledSearchInput
          type="text"
          onChange={handleChange}
          value={input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
      ;
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
