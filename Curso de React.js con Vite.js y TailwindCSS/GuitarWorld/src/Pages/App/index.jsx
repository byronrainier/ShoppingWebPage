import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppinCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../Components/NavBar/";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/My-Account", element: <MyAccount /> },
    { path: "/My-Order", element: <MyOrder /> },
    { path: "/My-Orders", element: <MyOrders /> },
    { path: "/Sign-In", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppinCartProvider>
  );
}

export default App;
