import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path="/signin" exact element={<Login />}/>
        <Route path="/signup" exact element={<Signup />}/>
      </Routes>
    </Router>
  )

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
