import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App/App";
import {Suspense} from "react";
import About from "@/pages/About/About";
import HomePage from "@/pages/Home/HomePage";
import {storeRoutes} from "@packages/shared/src/routes/store"
// import {Shop} from "@/pages/Shop";
// import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: storeRoutes.main,
        element: <App />,
        children: [
            {
                path: storeRoutes.about,
                element: <Suspense fallback={'Loading...'}><About /></Suspense>
            },
            {
                path: storeRoutes.home,
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <HomePage/>
                    </div>
                </Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes; // для подключения в host