import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//--------------------------------------------------------------------------

export default function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  //-------------------------------------------------

  if (!user) {
    //user yoksa // if there is no user
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{ return_url: location.pathname }}
      />
    ); //Buraya yönlendir //redirect here
  }
  return children; // children geriye döndür// return children
}
