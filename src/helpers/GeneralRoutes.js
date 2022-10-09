import { Navigate, Outlet } from 'react-router-dom';
import Navigation from '../components/Navigations/Navigation';

const useAuth = () => {
  const loggedIn = true;
  // if (localStorage.getItem('token')) {
  //   loggedIn = true;
  // } else {
  //   loggedIn = false;
  // }

  const user = { loggedIn };
  return user.loggedIn;
};

function LoginRoutes() {
  const isAuth = useAuth();
  return !isAuth ? (
    <>
      <Navigation />
      <Outlet />
    </>
  ) : (
    <Navigate to="/app/todo" />
  );
}

export default LoginRoutes;
