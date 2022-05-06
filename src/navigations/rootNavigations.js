import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../@config';
import Login from '../screens/Login';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const RootNav = () => {
  const optionConfig = {headerTitleAlign: 'center'};
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.login}
          component={Login}
          options={optionConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNav;
