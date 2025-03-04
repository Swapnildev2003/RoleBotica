import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Auth0Provider
    domain="dev-pfqb6su773yfhbxl.us.auth0.com"
    clientId="7PrpSYQHy5WjXDyYXXP0FEKC9j37VYHJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </StrictMode>,
)
