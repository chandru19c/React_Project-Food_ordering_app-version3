import react, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
//import Contact from "./src/components/Contact";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import UserContext from "./src/utils/UserContext";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = { name: "Neil Armstrong" };
    setUserName(data.name);
  }, []);
  return (
    <div className="p-0.5">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: { name: "Hari Krishnan" } }}>
          <Header />
        </UserContext.Provider>
        <UserContext.Provider
          value={{ loggedInUser: { name: userName }, setUserName }}
        >
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
