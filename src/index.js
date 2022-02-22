import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
}
`
const theme = {
    colors: {
        primary: "white",
        secondary: "red",
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768px) and (min-width: 425px)",
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

