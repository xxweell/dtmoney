import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-ligth: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) { // quanto atingir o tamanho máximo de 1080px
            font-size: 93.75%; // corresponde a 15px
        }

        @media (max-widh: 720px) { // quanto atingir o tamanho máximo de 720px
            font-size: 87,5%; //14px  (a conta é 16 x 0,875 pra achar o valor em px)
        }
    }

    //REM - 1rem = 16px

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // fontes ficam mais nitidas em navegadores que usam o motor do chome
    }

    body, input, textarea, button { // p input, textarea e button não herdam automaticamente a fonte do boy, por isso temos que setar a fonte expicitamente
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`