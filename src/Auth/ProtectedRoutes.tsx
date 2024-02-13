import { Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../Components/LoadingComponent";

const ProtectedRoute = ({ children, isAuth, isLoading }: any) => {
    const location = useLocation();
  
    // if (isLoading) {
    //   return <LoadingComponent />;
    // }
  
    // if (isAuth) {
    //   return children;
    // }
  
    return <Navigate to="/login" state={{ from: location }} replace />;
  };
  export default ProtectedRoute;