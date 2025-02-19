import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mount from './Mount'
import Doc from './Doc'
import Username from './Username'
import Login from './Login'
import Incdec from'./Incdec'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/mount' element={<Mount/>}></Route>
          <Route path='/doc' element={<Doc/>}></Route>
          <Route path='/user' element={<Username/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Incdec/>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App