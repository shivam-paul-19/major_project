import FormPage from './FormPage';
import ImageForm from './imageform';
import Layout from './components/Layout';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SymptomCheck from './SymptomCheck';
import DrugFinder from './drugFinder';
import ChatPage from './chatPage';
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
          path: "/",
          element: <Home />
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
          path: "drug-finder",
          element: <DrugFinder />,
        },
        {
          path: "/medibot",
          element: <ChatPage />,
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