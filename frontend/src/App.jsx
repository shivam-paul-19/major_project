import NavBar from './components/NavBar';
import FormPage from './FormPage';
import ImageForm from './imageform';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>root path</div>
    },
    {
      path: "/health-insights",
      element: <FormPage />,
    },
    {
      path: "/skin-scan",
      element: <ImageForm />,
    }
  ]);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App;