import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import { LazyAbout } from "./components/About/About.lazy";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     // errorElement: <ErrorPage/>,
//     // children: [
//     //   {
//     //     path: '/about',
//     //     element: <LazyAbout/>
//     //   }
//     // ]
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
