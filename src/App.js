import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
const [loggedin,setLoggedIn]=useState({auth:false,userType:""});

  return (
    <div className="App">
      <Router>
       { loggedin.auth ?
        <Dashboard accType={loggedin.userType} acc={setLoggedIn}/> 
        : <Login acc={setLoggedIn} /> }
    


      </Router>

    </div>
  );
}

export default App;
