import { Outlet, createBrowserRouter } from 'react-router-dom';
// import App from "@/components/App/App";
import { Suspense } from 'react';
// import About from "@/pages/About/About";
// import HomePage from "@/pages/Home/HomePage";
// import {storeRoutes} from "@packages/shared/src/routes/store"
// // import {Shop} from "@/pages/Shop";
// // import {UserCard} from "@packages/shared/src/components/UserCard";

import App from '@/components/App/App';
import { storeRoutes } from '@packages/shared/src/routes/store';
import MainPage from '@/components/page/MainPage/mainPage';
import EventPage from '@/components/EventPage/EventPage';
import PersonalAccount from '@/components/PersonalAccount/PersonalAccount';
import About from '@/pages/About/About';

const routes = [
	// {
	//     path: storeRoutes.main,
	//     element: <App />,
	//     children: [
	//         {
	//             path: storeRoutes.about,
	//             element: <Suspense fallback={'Loading...'}><About /></Suspense>
	//         },
	//         {
	//             path: storeRoutes.home,
	//             element: <Suspense fallback={'Loading...'}>
	//                 <div style={{color: 'red'}}>
	//                     <HomePage/>
	//                 </div>
	//             </Suspense>
	//         },
	//     ]
	// },
	{
		path: '/store/about',
		element: (
			<Suspense fallback={'Loading...'}>
				<About />
			</Suspense>
		),
	},
	{
		path: storeRoutes.main,
		element: <MainPage />,
	},
	{
		path: storeRoutes.event,
		element: (
			<Suspense fallback={'Loading...'}>
				<EventPage />
			</Suspense>
		),
	},
	{
		path: storeRoutes.order,
		element: (
			<Suspense fallback={'Loading...'}>
				<div>ORDER</div>
			</Suspense>
		),
	},
	{
		path: storeRoutes.personalAccount.main,
		element: (
			<Suspense fallback={'Loading...'}>
				{/* <div>
          PERSONAL ACCOUNT PAGE <Outlet />
        </div> */}
				<PersonalAccount />
			</Suspense>
		),
		children: [
			{
				path: storeRoutes.personalAccount.myTickets,
				element: (
					<Suspense fallback={'Loading...'}>
						<div>My TICKETS</div>
					</Suspense>
				),
			},
			{
				path: storeRoutes.personalAccount.myFavorites,
				element: (
					<Suspense fallback={'Loading...'}>
						<div>FAVORITES</div>
					</Suspense>
				),
			},
			{
				path: storeRoutes.personalAccount.myData,
				element: (
					<Suspense fallback={'Loading...'}>
						<div>DATA</div>
					</Suspense>
				),
			},
			{
				path: storeRoutes.personalAccount.myReviews,
				element: (
					<Suspense fallback={'Loading...'}>
						<div>REVIEWS</div>
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes; // для подключения в host
