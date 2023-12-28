import { BrowserRouter as Switch,Routes,Route } from "react-router-dom"
import './App.css'
import Home from './components/home/Home';

function App() {

  return (
    <Switch>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Switch>
  )
}

export default App
