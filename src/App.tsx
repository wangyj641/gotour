import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
} from "./pages";
import { Navigate } from "react-router-dom";
import { useSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingCart/slice";

const PrivateRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signIn" replace />;
  }

  return children;
};

function App() {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [jwt]);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="/search/:keywords?" element={<SearchPage />} />

          // protect route, only signed user can link this url
          <Route path="/shoppingCart"
            element={
              <PrivateRoute user={jwt}>
                <ShoppingCartPage />
              </PrivateRoute>
            }
          />

          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
