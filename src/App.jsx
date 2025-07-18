import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={Layout} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
