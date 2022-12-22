import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Guest = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  return !auth.isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default Guest;
