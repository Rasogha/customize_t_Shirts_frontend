import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen' 

//Always visible components
const Layout = ()=>{
  return(
    <div className='flex flex-col min-h-screen bg-brandBlack text-white'>
      <Header/>

      {/* <Outlet/> a placeholder */}
      <main className='flex-grow'>
        <Outlet/>
      </main>
    </div>
  )
}
function App(){
  return(
    <Router>
        <Routes>
        {/* Parent route uses Layout */}
          <Route path="/" element={<Layout />} >

            {/* Children paths inject into <Outlet/> */}
            <Route index element={<HomeScreen/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App