import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import DestinationPage from "./components/DestinationPage";
import CrewPage from "./components/CrewPage";
import TechnologyPage from "./components/TechnologyPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationBar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/destination",
    element: (
      <>
        <NavigationBar />
        <DestinationPage />
      </>
    ),
  },
  {
    path: "/crew",
    element: (
      <>
        <NavigationBar />
        <CrewPage />
      </>
    ),
  },
  {
    path: "/technology",
    element: (
      <>
        <NavigationBar />
        <TechnologyPage />
      </>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
