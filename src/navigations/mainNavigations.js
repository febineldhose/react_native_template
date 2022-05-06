import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../@config';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {useDispatch} from 'react-redux';
import {logout} from '../containers/LoginContainer/actions';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const optionConfig = {headerTitleAlign: 'center', headerBackTitle: ''};
  const dispatch = useDispatch();
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.home}
          component={Home}
          options={{
            ...optionConfig,
            headerRight: () => (
              <Text
                onPress={() => {
                  alert('logout successfully');
                  dispatch(logout());
                }}>
                Logout
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name={SCREENS.details}
          component={Details}
          options={optionConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNav;
