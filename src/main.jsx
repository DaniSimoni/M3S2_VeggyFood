
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HeaderProvider } from './context/HeaderContext/Header.context.jsx'
import { GlobalStyle} from './Global.style.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GlobalStyle/>
    <HeaderProvider>
    <App/>
    </HeaderProvider>
  </React.StrictMode>
)
