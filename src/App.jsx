import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage';


function App() {
 

  return (
    <Router>
      <Routes>
            <Route path='/' element={<LoginPage/>}/>

        <Route path='/' element={<Layout/>} >
            
            <Route path='/home' element={<HomePage/>}/>

        </Route>
        
      </Routes>
     
    </Router>
  )
}

export default App
