import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {stores} from './store.js'
import { Provider } from 'react-redux' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  </StrictMode>,
)
