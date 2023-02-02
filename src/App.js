import React, { useRef, useState } from "react";
import Login from './components/Login';
import './App.css';
import MyRoute from './components/MyRoute';
import Page from "./components/Page";
import UserContext from "./components/UserContext";



function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div >

      <UserContext>
        {
          !isLogin ?
            <Login setIsLogin={setIsLogin} /> :
            <MyRoute />
        }
      </UserContext>




    </div>
  );
}

export default App;
