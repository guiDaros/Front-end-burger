
import React from "react";
import { createRoot } from "react-dom/client";

import { ToastContainer } from 'react-toastify'; // Importe diretamente da biblioteca, não do arquivo CSS


import Routes from './routes/routes'
import GlobalStyles from "./styles/globalStyles";
import AppProvider from './hooks' 

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <>
    <AppProvider>
     <Routes />
    </AppProvider>
    
    <ToastContainer autoClose={3000} theme="colored"/>
    <GlobalStyles />
  </>
);
