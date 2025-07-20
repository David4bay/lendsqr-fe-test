import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom"
import "./App.scss"

function App() {
  
  return (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<Dashboard />} />
          </Routes>
  )
}


export default App