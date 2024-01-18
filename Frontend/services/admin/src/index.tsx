import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import { LazyAbout } from "./components/About/About.lazy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // errorElement: <ErrorPage/>,
    // children: [
    //   {
    //     path: '/about',
    //     element: <LazyAbout/>
    //   }
    // ]
  }
]);

function neF() {
  console.log('fddfdf');
  
}

const divRoot = document.getElementById("root")

if (!divRoot) {
  throw new Error('Not found root')
}


const root = ReactDOM.createRoot(divRoot);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import('./bootstrap');
export {};