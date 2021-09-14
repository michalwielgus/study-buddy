import styled from 'styled-components';

export const NewsItemWrapper = styled.div`
  margin: 16px 0;
  padding: 30px 25px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 17px;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    margin-left: 35px;
    max-width: 300px;
    height: auto;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: -0.02em;
    line-height: 1.6;
  }

  @media screen and (max-width: 1450px) {
    flex-wrap: wrap;

    img {
      margin-left: 0;
      max-width: 100%;
    }
  }
`;
