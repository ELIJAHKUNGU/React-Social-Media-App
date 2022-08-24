import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Profile/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/profile/:username" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
