//GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
    min-height: 100vh;
    width: 100%; // לא 100vw, נמנע סקרול מיותר
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 16px;

    @media (max-width: 600px) {
      font-size: 14px;
      padding: 0 !important;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.sectionTitle || theme.text};
    margin-bottom: 0.5em;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.1s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    &:hover {
      background-color: ${({ theme }) => theme.buttonHoverBackground};
      transform: translateY(-1px);
    }
    @media (max-width: 600px) {
      padding: 12px 0;
      font-size: 0.97rem;
      width: 100%;
      border-radius: 6px;
    }
  }

  input:not([type="checkbox"]):not([type="radio"]),
textarea,
select {
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.inputText};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.inputFocusBorder};
      box-shadow: 0 0 0 3px rgba(15, 98, 254, 0.17);
    }
    @media (max-width: 600px) {
      padding: 8px 11px;
      font-size: 0.93rem;
    }
}


  .container {
    max-width: 1000px;
    margin: 32px auto;
    padding: 48px 32px;
    background-color: ${({ theme }) => theme.containerBackground};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.containerBorder};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 600px) {
      padding: 12vw 2vw 6vw 2vw;  // היה 14vw, עכשיו 6vw למטה
      margin: 14px auto;
      border-radius: 7px;
      max-width: 98vw;
    }
  }

  select {
    appearance: none;
  }
`;

export default GlobalStyle;
