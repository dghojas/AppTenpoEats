import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Information } from '../../screens';

const ScreenStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const SettingStackScreen = () => {
  return (
    <ScreenStack.Navigator initialRouteName="Setting">
      <ScreenStack.Screen
        name="Information"
        component={Information}
        options={navOptionHandler}
      />
    </ScreenStack.Navigator>
  );
};

export default SettingStackScreen;
