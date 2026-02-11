import FormPage from './FormPage';
import ImageForm from './imageform';
import Layout from './components/Layout';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SymptomCheck from './SymptomCheck';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
          path: "/",
          element: <div>root path</div>
        },
        {
          path: "health-insights",
          element: <FormPage />,
        },
        {
          path: "symptom-check",
          element: <SymptomCheck />,
        },
        {
          path: "skin-scan",
          element: <ImageForm />,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;