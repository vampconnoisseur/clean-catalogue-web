import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "@clerk/clerk-react";

function App() {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isSignedIn ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
