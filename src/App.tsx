import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/signIn" Component={SignInPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/detail/:touristRouteId" Component={DetailPage} />
          <Route path='*' Component={() => { return <h1>404 not found</h1> }} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
