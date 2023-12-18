import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App/App";
import { Suspense } from "react";
import { LazyAdmin } from "@/pages/AdminPage.lazy";


const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/one',
                element:  <Suspense fallback={'Loading...'}><LazyAdmin /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;