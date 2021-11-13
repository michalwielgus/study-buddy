import React, { useRef, useEffect } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ViewHead } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, NotesWrapper } from './Notes.styles';
import Button from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';

import { useForm } from 'react-hook-form';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { useGetNotesQuery } from 'store';
import { useAddNoteMutation } from 'store';

const Notes = () => {
  const ref = useRef(null);
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
    reset();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <>
      <ViewHead isWide>
        <Title>Notes</Title>
      </ViewHead>
      <Wrapper>
        <ViewWrapper>
          <form onSubmit={handleSubmit(handleAddNote)}>
            <FormField
              ref={ref}
              label="Title"
              id="name"
              name="title"
              {...register('title', { required: true })}
            />
            {errors.title && <ItemMeta isError>Title is required</ItemMeta>}
            <FormField
              as="textarea"
              ref={ref}
              label="Content"
              id="name"
              name="content"
              {...register('content', { required: true })}
              isTextarea
            />
            {errors.content && <ItemMeta isError>Content is required</ItemMeta>}
            <Button type="submit" isBig isCentered>
              Add
            </Button>
          </form>
        </ViewWrapper>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <NotesWrapper>
            {data.notes.length ? (
              data.notes.map(({ title, content, id }) => (
                <Note id={id} key={id} title={title} content={content} />
              ))
            ) : (
              <p>Create your first note</p>
            )}
          </NotesWrapper>
        )}
      </Wrapper>
    </>
  );
};

Notes.propTypes = {};

export default Notes;
