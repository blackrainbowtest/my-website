import { useEffect } from "react";
import SignUp from "./pages/SignUp";
// import { setSuccess } from "./logic/registration/RegistrationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "./logic/auth/authSignUpAPI";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { user, users, success } = useSelector((state) => state.account);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col bg-gray-700">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
