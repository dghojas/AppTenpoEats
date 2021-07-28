import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, SearchLocation, SearchRestaurant } from '../../screens';

const ScreenStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const HomeStackScreen = () => {
  return (
    <ScreenStack.Navigator initialRouteName="Home">
      <ScreenStack.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}
      />
      <ScreenStack.Screen
        name="SearchLocation"
        component={SearchLocation}
        options={navOptionHandler}
      />
      <ScreenStack.Screen
        name="SearchRestaurant"
        component={SearchRestaurant}
        options={navOptionHandler}
      />
    </ScreenStack.Navigator>
  );
};

export default HomeStackScreen;
