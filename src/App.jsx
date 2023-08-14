import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { DicasPage } from './pages/DicasPage/DicasPage';


function App() {
 

  return (
    <Router>
      <Routes>
            <Route path='/' element={<LoginPage/>}/>

        <Route path='/' element={<Layout/>} >
            
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/dicas' element={<DicasPage/>}/>

        </Route>
        
      </Routes>
     
    </Router>
  )
}

export default App
