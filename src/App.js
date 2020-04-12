import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import ErrorBoundary from "react-error-boundary";
function App() {
  return (
    <>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </>
  );
}

export default App;
