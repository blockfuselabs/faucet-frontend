import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { Web3Provider } from './Web3Provider'; 

createRoot(document.getElementById('root')!).render(

  <StrictMode>
      <Web3Provider>
    <App />
    </Web3Provider>
  </StrictMode>,
)
