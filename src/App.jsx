import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Allshows from "./components/Allshows/Allshows";
import { createContext, useState } from "react";
import SingleSummary from "./components/SingleSummary/SingleSummary";

export const AppContext = createContext();
function App() {
  const [s, setS] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Allshows />,
    },
    {
      path: "/summary",
      element: <SingleSummary />,
    },
  ]);
  return (
    <>
      <AppContext.Provider value={[s, setS]}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
}

export default App;
