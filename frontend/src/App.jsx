import { BrowserRouter as Switch,Routes,Route } from "react-router-dom"
import './App.css'
import Home from './components/home/Home';
import Register from './components/register/Register'
import Login from "./components/login/Login";

function App() {
  const users = []

  return (
    <Switch>
      <Routes>
        <Route exact path='/' element={<Home user={users} />}/>
        <Route path="/home" element={<Home user={users}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Switch>
  )
}

export default App
