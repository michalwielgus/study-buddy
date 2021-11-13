import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import {
  NoteWrapper,
  StyledDeleteButton,
} from 'components/molecules/Note/Note.styles';
import { useRemoveNoteMutation } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleDeleteNote = (id) => {
    removeNote({ id });
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
