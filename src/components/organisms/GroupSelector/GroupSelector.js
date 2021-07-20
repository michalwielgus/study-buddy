import React, { useState } from 'react';
import { useStudents } from 'hooks/useStudents';
import Button from 'components/atoms/Button/Button';
import { StyledGroupList, StyledLink } from './GroupSelector.styles';

const GroupSelector = () => {
  const { groups } = useStudents();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button isAbsolute onClick={() => setIsVisible(!isVisible)}>
        Change group &gt;
      </Button>
      <StyledGroupList
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
      >
        <StyledLink to="/group">All students</StyledLink>
        {groups.map((group) => (
          <StyledLink
            key={group}
            to={`/group/${group}`}
            onClick={() => setIsVisible(!isVisible)}
          >
            Group {group}
          </StyledLink>
        ))}
      </StyledGroupList>
    </>
  );
};

export default GroupSelector;
