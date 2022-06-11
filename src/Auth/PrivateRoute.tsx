import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export type ProtectedRouteProps = {

    outlet: JSX.Element;
  };
  
  const PrivateRoute =({outlet}: ProtectedRouteProps) => {
    const navigation = useNavigate();
    const token = localStorage.getItem('auth');
    if(token) {
      return outlet;
    } else {
        setTimeout(() => {
        navigation('/login');
    }, 1000)
    }
  };
  export default PrivateRoute;