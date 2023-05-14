import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AdminHome from "./pages/AdminHome";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import AddAdmin from "./pages/AddAdmin";
import UserQuery from "./pages/UserQuery";
import AdminClients from "./pages/AdminClients";
import HotelBooking from "./pages/HotelBooking";
import LoginForm from "./pages/LoginForm";
import Transport from "./pages/Transport";
import Resturants from "./pages/Resturants";
function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/AdminClient"
            element={
              <ProtectedRoute>
                <AdminClients />
              </ProtectedRoute>
            }
          />

          <Route
            path="/AddAdmin"
            element={
              <ProtectedRoute>
                {" "}
                <AddAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userQuery"
            element={
              <ProtectedRoute>
                <UserQuery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotelBooking"
            element={
              <ProtectedRoute>
                <HotelBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transport"
            element={
              <ProtectedRoute>
                <Transport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resturants"
            element={
              <ProtectedRoute>
                <Resturants />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
