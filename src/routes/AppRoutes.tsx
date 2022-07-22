/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router";
import HomePage from "pages/HomePage/HomePage";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import LoginPage from "pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "contexts/AuthContext/AuthProvider";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="auth/login" />} />
          <Route path="auth/login" element={<LoginPage />} />

          <Route path="/home" element={<PrivateRoute outlet={<HomePage />} />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
