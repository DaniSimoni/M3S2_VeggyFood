
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HeaderProvider } from './context/HeaderContext/Header.context.jsx'
import { GlobalStyle} from './Global.style.jsx'
import { AuthProvider } from './context/Auth/Auth.context.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GlobalStyle/>
    <AuthProvider>
      <HeaderProvider>
        <App/>
        <ToastContainer />
      </HeaderProvider>
    </AuthProvider>
  </React.StrictMode>
)
