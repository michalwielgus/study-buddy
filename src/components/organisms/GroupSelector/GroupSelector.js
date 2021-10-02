import React, { useState, useEffect } from 'react';
import { useStudents } from 'hooks/useStudents';
import Button from 'components/atoms/Button/Button';
import { StyledGroupList, StyledLink } from './GroupSelector.styles';

const GroupSelector = () => {
  const [groups, setGroups] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);
  return (
    <>
      {groups ? (
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
