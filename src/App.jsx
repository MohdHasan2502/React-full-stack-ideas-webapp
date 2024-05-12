import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home/Home";
import AddNewIdea from "./Screens/NewIdea/AddNewIdea";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element:<AddNewIdea/>
  },
]);
function App() {
  const [theme, setTheme] = useState("winter");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10"
        data-theme={theme}
      >
        <div className="max-w-2xl w-full items">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
