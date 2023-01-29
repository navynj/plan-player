import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './layout/Auth';
import Layout from './layout/Layout';
import RequireAuth from './layout/RequireAuth';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <RequireAuth>
                    <Layout />
                </RequireAuth>
            ),
        },
        {
            path: '/auth',
            element: <Auth />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
