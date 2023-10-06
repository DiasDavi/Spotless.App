import React, { useEffect, useState } from "react";
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerProps,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { routesConfig } from "./RoutesConfig";
import TabBar from "../Components/TabBar";
import { Provider } from "react-redux";
import store from "../Store";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Routes: React.FC<NavigationContainerProps> = () => {
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState<string>("Login");

  useEffect(() => {
    const handleStateChange = () => {
      const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
      setCurrentRoute(currentRouteName);
    };

    const unsubscribe = navigationRef.current?.addListener(
      "state",
      handleStateChange
    );

    return () => {
      unsubscribe?.remove();
    };
  }, [navigationRef]);

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme} ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          {routesConfig.map((route, index) => {
            const { title, component, headerShown } = route;
            const screenOptions: StackNavigationOptions = {
              headerShown,
            };
            return (
              <Stack.Screen
                key={index}
                name={title}
                component={component}
                options={screenOptions}
              />
            );
          })}
        </Stack.Navigator>
        {currentRoute !== "Login" &&
          currentRoute !== "Sign" &&
          currentRoute !== "ClientSign" &&
          currentRoute !== "ServerSign" && (
            <TabBar currentRoute={currentRoute} />
          )}
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
