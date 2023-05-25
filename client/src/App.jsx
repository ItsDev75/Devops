import "./App.css";
import { useEffect, useState } from "react";
import Homepage from "./components/Hero/Homepage";
import Navbar from "./components/Navbar";
import background from "./assets/images/background.svg";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import { Provider } from "react-redux";
import store from "./utils/store";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import Features from "./pages/Features";
// import { baseUrl } from "./config/serverConfig";

const App = () => {
  // var location = useLocation();

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

//to hide the blue background in all other pages
const AppBackgroundImage = () => {
  const location = useLocation();

  return (
    <>
      {(location.pathname === "/signup" ||
        location.pathname === "/signin" ||
        location.pathname === "/") && (
        <img
          className="absolute top-[-3rem] right-0 w-[75%] -z-10 mt-[-1.25rem] "
          src={background}
          alt=""
        />
      )}
    </>
  );
};
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="relative font-[Nunito]">
          <AppBackgroundImage />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <ErrorPage />,
      },
      {
        path: "/features",
        element: <Features />,
      },
    ],
  },
]);

export default App;
