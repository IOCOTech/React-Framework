import { render, screen, waitFor } from "@testing-library/react";

import LoginPage from "pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "contexts/AuthContext/AuthProvider";

test("Should render login buttom", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>,
  );

  const btnElement = screen.findByTestId("buttom-test1");
  waitFor(() => expect(btnElement).toBeInTheDocument());
});
