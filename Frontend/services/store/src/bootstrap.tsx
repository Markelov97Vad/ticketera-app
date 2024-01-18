import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/assets/styles/_index.scss';
import routes from './router/Router';
import { Provider } from 'react-redux';
import { store } from './store';

export const router = createBrowserRouter(routes);
export default routes; // для подключения в host
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
