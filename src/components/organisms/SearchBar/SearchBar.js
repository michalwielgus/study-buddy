import React, { useState } from 'react';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchBarInput,
  SearchResults,
  SearchResultsItem,
} from './SearchBar.styles';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { useStudents } from 'hooks/useStudents';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    console.log(students);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    itemToString: (item) => (item ? item.name : ''),
  });

  return (
    <SearchBarWrapper {...getComboboxProps()}>
      <StatusInfo>
        <ItemMeta>Logged as</ItemMeta>
        <SectionTitle>Teacher</SectionTitle>
      </StatusInfo>
      <SearchBarInput
        {...getInputProps()}
        name="Search"
        id="search"
        placeholder="Search"
      />
      <SearchResults
        {...getMenuProps()}
        isOpen={isOpen && matchingStudents.length > 0}
      >
        {isOpen &&
          matchingStudents.map((student, index) => (
            <SearchResultsItem
              key={student.id}
              {...getItemProps({ item: student, index })}
              isHighlighted={highlightedIndex === index}
            >
              {student.name}
            </SearchResultsItem>
          ))}
      </SearchResults>
    </SearchBarWrapper>
  );
};

export default SearchBar;
