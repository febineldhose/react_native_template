import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import MainNav from './mainNavigations';
import RootNav from './rootNavigations';

export default function NavigationProvider(params) {
  const state = useSelector(state => state);
  const isLoggedIn = state.LoginReducer.isLoggedIn;
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? <MainNav /> : <RootNav />}
    </SafeAreaView>
  );
}
