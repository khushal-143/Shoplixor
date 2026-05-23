import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from './components/context/MyContext';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './index.css'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <StrictMode>
      <PrimeReactProvider value={{ ripple: true }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </StrictMode>
  </MyProvider>,
)
