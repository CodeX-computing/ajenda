import { Navigate, Outlet } from 'react-router-dom';
import AppNavigation from '../components/Navigations/AppNavigation';

const useAuth = () => {
  const loggedIn = false;
  // if (localStorage.getItem('token')) {
  //   loggedIn = true;
  // } else {
  //   loggedIn = false;
  // }

  const user = { loggedIn };
  return user && user.loggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? (
    <div className="flex w-screen h-screen bg-gray-200 bg-heroBg bg-cover">
      <AppNavigation />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedRoutes;
