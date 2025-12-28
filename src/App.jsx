import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer' 

import HomeScreen from './screens/HomeScreen'
import DesignLabScreen from './screens/DesignLabScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductScreen from './screens/ProductScreen'

import MainLayout from './components/MainLayout'
import AuthLayout from './components/AuthLayout'


function App(){
  return(
    <Router>
        <Routes>

          <Route element={<MainLayout />}>
            <Route index element={<HomeScreen/>}/>
            <Route path='design-lab' element={<DesignLabScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen />} />
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path='login' element={<LoginScreen/>}/>
            <Route path='register' element={<RegisterScreen/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App