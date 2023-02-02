import Main from "./shared/layout/main";
import React, { useState } from 'react';
import LoginForm from "./services/Login/login";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return(
      <div style={{ textAlign: "center", paddingTop: "20%", fontSize: "50px" }}>
        <div className="lds-ellipsis">
          <div>•</div>
          <div>•</div>
          <div>•</div>
          <div>•</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
