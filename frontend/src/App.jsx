import { Show, UserButton, useUser } from "@clerk/react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

function App() {
  const { isLoaded } = useUser();
  if (!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Show when="signed-out">
                <HomePage />
              </Show>
              <Show when="signed-in">
                <Navigate to="/dashboard" />
              </Show>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Show when="signed-in">
                <DashboardPage />
              </Show>
              <Show when="signed-out">
                <Navigate to="/" />
              </Show>
            </>
          }
        />
        <Route
          path="/problems"
          element={
            <>
              <Show when="signed-in">
                <ProblemsPage />
              </Show>
              <Show when="signed-out">
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
