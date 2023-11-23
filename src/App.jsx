import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profiles from "./components/Profiles/Profiles";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const userEmail = localStorage.getItem("userEmail");
  const userPassword = localStorage.getItem("userPassword");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={userEmail && userPassword ? <Profiles /> : <Login />}
          />
          {/* <Route path="/profiles" element={<ProtectedRoute />} /> */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// function ProtectedRoute() {
//   return (
//     userEmail && userPassword ? (
//       <Navigate to="/profiles" />
//     ) : (
//       <Navigate to="/login" />
//     ));
// }
