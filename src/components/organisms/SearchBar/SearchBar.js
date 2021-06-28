import React from 'react';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchBarInput,
} from './SearchBar.styles';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <ItemMeta>Logged as</ItemMeta>
        <SectionTitle>Teacher</SectionTitle>
      </StatusInfo>
      <SearchBarInput placeholder="find student" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
