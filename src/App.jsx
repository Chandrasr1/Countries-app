import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ]);

  return (
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
