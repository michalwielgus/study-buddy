import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 5px;
  left: -40px;
`;
