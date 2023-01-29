import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector((state: any) => state.user.isAuthenticated);

    if (!auth) {
        return <Navigate to="/auth" replace />;
    }

    return children;
}

export default RequireAuth;
