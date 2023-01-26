import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './layout/Auth';
import Layout from './layout/Layout';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
        },
        {
            path: '/auth',
            element: <Auth />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
