import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { LazyAbout } from "./pages/About/About.lazy";
import { router } from "./router/Router";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path: '/about',
//         element: <LazyAbout/>
//       }
//     ]
//   }
// ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
