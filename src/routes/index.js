import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home } from '../Pages'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
