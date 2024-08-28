import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Cartpage from "./pages/Cartpage";
import Checkoutpage from "./pages/Checkoutpage";
import Productdetailspage from "./pages/Productdetailspage";
import PrivateRoute from "./features/auth/components/PrivateRoute";
import Pagenotfound from "./pages/Pagenotfound";
import Ordersuccesspage from "./pages/Ordersuccesspage";
import Userprofilepage from "./pages/Userprofilepage";
import Myorderpage from "./pages/Myorderpage";
import Aboupage from "./pages/Aboupage";
import Logout from "./features/auth/components/Logout";
import Adminuserpage from "./pages/Adminuserpage";
import Adminprofilepage from "./pages/Adminprofilepage";
import { Adminorderpage } from "./pages/Adminorderpage";
import Admin from "./pages/Admin";
import { Addproductpage } from "./pages/Addproductpage";
import { Editproductpage } from "./pages/Editproductpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authUserAsync } from "./features/auth/authSlice";
import { useEffect } from "react";
import Resetpassword from "./features/auth/components/Resetpassword";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.pathname !== "/login") {
      dispatch(authUserAsync());
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cartpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkoutpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/productdetails/:id"
          element={
            <PrivateRoute>
              <Productdetailspage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-success/:id"
          element={
            <PrivateRoute>
              <Ordersuccesspage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Userprofilepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-orders"
          element={
            <PrivateRoute>
              <Myorderpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <Aboupage />
            </PrivateRoute>
          }
        />
        <Route path="/log-out" element={<Logout />} />
        {/* Now the Route for Only Admin user */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <PrivateRoute>
              <Addproductpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-product/:id"
          element={
            <PrivateRoute>
              <Editproductpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateRoute>
              <Adminorderpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute>
              <Adminuserpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users/:id"
          element={
            <PrivateRoute>
              <Adminprofilepage />
            </PrivateRoute>
          }
        />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="*" element={<Pagenotfound />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
