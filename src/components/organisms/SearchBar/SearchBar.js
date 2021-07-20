import React, { useState, useEffect } from 'react';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchBarInput,
  SearchResults,
} from './SearchBar.styles';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <ItemMeta>Logged as</ItemMeta>
        <SectionTitle>Teacher</SectionTitle>
      </StatusInfo>
      <SearchBarInput
        placeholder="find student"
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
        name="Search"
        id="search"
      />
      {searchPhrase && matchingStudents.length ? (
        <SearchResults>
          {matchingStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </SearchResults>
      ) : null}
    </SearchBarWrapper>
  );
};

export default SearchBar;
