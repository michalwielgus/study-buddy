import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsList from 'components/organisms/NewsList/NewsList';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation>Navigation</Navigation>
      <SearchBar />
      {children}
      <NewsList>Newsy</NewsList>
    </Wrapper>
  );
};

export default MainTemplate;
