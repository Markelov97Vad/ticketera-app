import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App/App";
import { Suspense } from "react";
import { LazyAdmin } from "@/pages/AdminPage.lazy";
import { adminRoutes } from "@packages/shared/src/routes/admin"


const routes = [
    {
        path: adminRoutes.main,
        element: <App />,
        children: [
            {
                path: adminRoutes.about,
                element:  <Suspense fallback={'Loading...'}><LazyAdmin /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;