import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './Components/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyle>
            <App/>
    </GlobalStyle>
);

