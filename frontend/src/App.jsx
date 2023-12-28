import { BrowserRouter as Switch,Routes,Route } from "react-router-dom"
import './App.css'
import Home from './components/home/Home';
import Register from './components/register/Register'

function App() {

  return (
    <Switch>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Register/>} />
      </Routes>
    </Switch>
  )
}

export default App
