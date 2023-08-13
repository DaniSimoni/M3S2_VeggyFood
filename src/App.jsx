import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CarrinhoPage } from './pages/CarrinhoPage/CarrinhotPage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { ConfirmaCompraPage } from './pages/ConfirmaCompraPage/ConfirmaCompraPage';
import { ShoppingCartProvider } from './context/Cart/ShoppingCart.context';


function App() {
 

  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
              <Route path='/' element={<LoginPage/>}/>

        <Route path='/' element={<Layout/>} >
            
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/carrinho' element={<CarrinhoPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/efetuada' element={<ConfirmaCompraPage/>}/>

        </Route>
            <Route path='/error' element={<ErrorPage/>}/>
      </Routes>
     
    </Router>
    </ShoppingCartProvider>
  )
}

export default App
