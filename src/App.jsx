import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen' 
import { applyMiddleware } from '@reduxjs/toolkit'

function App(){
  return(
    <Router>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App