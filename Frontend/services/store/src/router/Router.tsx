import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App/App";
import {Suspense} from "react";
import About from "@/pages/About/About";
import HomePage from "@/pages/Home/HomePage";
// import {Shop} from "@/pages/Shop";
// import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/store",
        element: <App />,
        children: [
            {
                path: '/store/about',
                element: <Suspense fallback={'Loading...'}><About /></Suspense>
            },
            {
                path: '/store/home',
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