import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './global.css'

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)