import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        
          <Route index element={<Home />} />

          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
 
   
}

export default App;