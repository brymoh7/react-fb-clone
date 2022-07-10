import React, { useState } from "react";
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import "./style.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? <LoginPage setUser={setUser} /> : 
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      }
      </div>
    );
  }
