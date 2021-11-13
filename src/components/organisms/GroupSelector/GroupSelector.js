import React, { useState } from 'react';
import Button from 'components/atoms/Button/Button';
import { StyledGroupList, StyledLink } from './GroupSelector.styles';
import { useGetGroupsQuery } from 'store';

const GroupSelector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data, isLoading } = useGetGroupsQuery();

  if (isLoading) {
    return <h3>Loading..</h3>;
  }
  return (
    <>
      {data.groups ? (
        <>
          <Button isAbsolute onClick={() => setIsVisible(!isVisible)}>
            Change group &gt;
          </Button>
          <StyledGroupList
            isVisible={isVisible}
            onClick={() => setIsVisible(!isVisible)}
          >
            <StyledLink to="/group">All students</StyledLink>
            {data.groups.map((group) => (
              <StyledLink
                key={group.id}
                to={`/group/${group.id}`}
                onClick={() => setIsVisible(!isVisible)}
              >
                Group {group.id}
              </StyledLink>
            ))}
          </StyledGroupList>
        </>
      ) : (
        'No groups found'
      )}
    </>
  );
};

export default GroupSelector;
