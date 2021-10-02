import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }

  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(500%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  min-width: 200px;
  right: 20px;
  bottom: 20px;
  background-color: white;
  padding: 46px 25px 25px 25px;
  color: ${({ theme }) => theme.colors.error};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;

  ${Title}, p {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.error};
    width: 85px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
    z-index: 1;
  }

  &::after {
    opacity: 1;
    z-index: 2;
    transform: translate(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
`;
