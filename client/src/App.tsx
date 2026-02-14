
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Lyout from './components/Lyout'
import Blog from './pages/Blog'

function App() {


  return (
    <>
      <Lyout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Lyout>
    </>
  )
}

export default App
