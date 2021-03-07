import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation>Navigation</Navigation>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
