import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        color: ${({ theme }) => theme.colors.darkGrey};
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }

    img {
        max-width: 100%;
    }
`;
