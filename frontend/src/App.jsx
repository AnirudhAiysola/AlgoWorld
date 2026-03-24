import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/problems"
          element={
            <>
              <Show when="signed-in">
                <ProblemsPage />
              </Show>
              <Show when="not-signed-in">
                <Navigate to="/" />
              </Show>
            </>
          }
        />
      </Routes>
      <Toaster duration={3000} />
    </>
  );
}

export default App;
