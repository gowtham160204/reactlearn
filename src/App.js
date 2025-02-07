import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mount from './Mount'
import Doc from './Doc'
import Username from './Username'
import Login from './Login'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/mount' element={<Mount/>}></Route>
          <Route path='/doc' element={<Doc/>}></Route>
          <Route path='/user' element={<Username/>}></Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App