import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/login";
import UsersCatalog from "./pages/UsersCatalog/UsersCatalog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Profile from "./pages/Profile/Profile";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/EditBlog/EditBlog";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute></PrivateRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/:blogid" element={<BlogDetails />} />
          <Route path="/blog/edit/:blogid" element={<EditBlog />} />
          <Route path="/users" element={<UsersCatalog />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
