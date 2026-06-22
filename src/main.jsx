import React, { StrictMode } from 'react';
import App from './App.jsx'
//import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
//import theme from './theme.js'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { LanguageProvider } from './i18n/LanguageContext.jsx'; 

/*ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)*/

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
       <LanguageProvider>
        <App />
       </LanguageProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
