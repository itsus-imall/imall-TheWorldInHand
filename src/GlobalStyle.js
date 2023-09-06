import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --background-color : #4e01b3;
        --point-color:#40c89a;
        --text-color:#fff;
        --text-color-gray : #b174ff;
        --font-size-root:16px;
        --font-size-md : 1rem;
        --font-size-big : 1.75rem;
        --font-size-sm:0.75rem;
        --wrapper-padding:1.25rem;
    }
`;

export default GlobalStyle;
