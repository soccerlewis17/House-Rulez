import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import GamePage from "./pages/GamePage/GamePage";

import userService from "./utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {

    console.log('being called')
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<HomePage handleLogout={handleLogout}/>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/:gameId" loggedUser={user} element={<GamePage handleLogout={handleLogout}/>} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
