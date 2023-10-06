import React from "react";
import ClientSign from "../Pages/ClientSign";
import Login from "../Pages/Login";
import ServerSign from "../Pages/ServerSign";
import Sign from "../Pages/Sign";
import Home from "../Pages/Home";
import Discovery from "../Pages/Discovery";
import Order from "../Pages/Order";
import Configs from "../Pages/Configs";

interface Route {
  title: string;
  component: React.ComponentType<any>;
  headerShown: boolean;
  isDefault: boolean;
}

const routesConfig: Route[] = [
  {
    title: "Login",
    component: Login,
    headerShown: false,
    isDefault: true
  },
  {
    title: "Sign",
    component: Sign,
    headerShown: false,
    isDefault: true
  },
  {
    title: "ClientSign",
    component: ClientSign,
    headerShown: false,
    isDefault: true
  },
  {
    title: "ServerSign",
    component: ServerSign,
    headerShown: false,
    isDefault: true
  },
  {
    title: "Home",
    component: Home,
    headerShown: false,
    isDefault: true
  },
  {
    title: "Discovery",
    component: Discovery,
    headerShown: false,
    isDefault: true
  },
  {
    title: "Order",
    component: Order,
    headerShown: false,
    isDefault: true
  },
  {
    title: "UserConfigs",
    component: Configs,
    headerShown: false,
    isDefault: true
  },
];

export { routesConfig };
