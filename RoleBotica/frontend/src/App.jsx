import React from "react"
import Navbar from "./components/Home/NavigationMenu"
import WelcomeScreen from "./components/OnBoarding/WelcomeScreen";
import ChatInterface from "./components/Chat/ChatInterface";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};
function App() {
  

  return (
    <>
      <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/ai-chat" element={<ProtectedRoute component={ChatInterface} />} />
        
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
