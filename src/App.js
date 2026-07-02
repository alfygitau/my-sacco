import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Homelayer from "./layouts/Homelayer";
import AdminLogin from "./pages/auth/Login";
import VerifyLogin from "./pages/auth/VerifyLogin";
import Organizations from "./pages/organizations/Organizations";
import AddOrganization from "./pages/organizations/AddOrganization";
import PortfolioAccounts from "./pages/portfolio-accounts/PortfolioAccounts";
import LoanProducts from "./pages/loan-products/LoanProducts";
import AdminUsers from "./pages/admin-users/AdminUsers";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Homelayer />}>
        <Route index path="dashboard" element={<Homepage />} />
        <Route path="organizations" element={<Organizations />} />
        <Route path="add-organization" element={<AddOrganization />} />
        <Route path="portfolio-accounts" element={<PortfolioAccounts />} />
        <Route path="loan-products" element={<LoanProducts />} />
        <Route path="admin-users" element={<AdminUsers />} />
      </Route>

      <Route path="/" element={<AdminLogin />} />
      <Route path="auth/verify-login" element={<VerifyLogin />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
