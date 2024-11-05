import React from "react";
import { Routes, Route } from "react-router-dom";
import Entry from "./components/EntryPage-layout/Layout.jsx";
import EntryLaout from "./components/EntryPage-layout/EntryLaout.jsx";
import SignUpPage from "./pages/SignIn-SignUp/SignUpPage.jsx";
import SignInUp from "./pages/SignIn-SignUp/page.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryLaout />}>
        <Route path="" element={<Entry />} />
        <Route path="/signIn" element={<SignInUp />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
