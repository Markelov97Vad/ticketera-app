import ReactDOM from "react-dom/client";
import { StrictMode, Suspense } from "react";
import App from "./components/App/App";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { LazyAbout } from "./pages/About/About.lazy";
import { storeRoutes } from "@packages/shared/src/routes/store";
import About from "./pages/About/About";


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

const routes = [
  {
    path: storeRoutes.main,
    element: <App />,
  },
  {
    path: storeRoutes.event,
      element: <Suspense fallback={'Loading...'}>
        <div>EVENT PAGE</div>
      </Suspense>,
  },
  {
    path: storeRoutes.order,
      element:  <Suspense fallback={'Loading...'}>
        <div>ORDER</div>
      </Suspense>,
  },
  {
    path: storeRoutes.personalAccount.main,
    element: <Suspense fallback={'Loading...'}>
      <div>PERSONAL ACCOUNT PAGE <Outlet/></div>
    </Suspense>,
    children: [
      {
        path: storeRoutes.personalAccount.myTickets,
        element: <Suspense fallback={'Loading...'}>
          <div>My TICKETS</div>
        </Suspense>
      },
      {
        path: storeRoutes.personalAccount.myFavorites,
        element: <Suspense fallback={'Loading...'}>
          <div>
            FAVORITES
          </div>
        </Suspense>
      },
      {
        path: storeRoutes.personalAccount.myData,
        element: <Suspense fallback={'Loading...'}>
          <div>
            DATA
          </div>
        </Suspense>
      },
      {
        path: storeRoutes.personalAccount.myReviews,
        element: <Suspense fallback={'Loading...'}>
          <div>
            REVIEWS
          </div>
        </Suspense>
      },
    ]
  }
]

export const router = createBrowserRouter(routes);
export default routes; // для подключения в host
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
