import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from 'components/atoms/Title/Title';
import {
  NoteWrapper,
  StyledDeleteButton,
} from 'components/molecules/Note/Note.styles';
import { removeNote } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = (id) => {
    dispatch(removeNote({ id }));
  };

  return (
    <NoteWrapper id={id}>
      <Title as="h3">{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton
        aria-label="Delete"
        onClick={() => handleDeleteNote(id)}
      />
    </NoteWrapper>
  );
};

export default Note;
