import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Outlet />
    </div>
  );
};

export default App;
