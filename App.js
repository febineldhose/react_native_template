/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';
 import NavigationProvider from './src/navigations';
 import StoreConfig from './src/redux/store';
 const {store, persistor} = StoreConfig();
 
 export default function App({}) {
   return (
     <Provider store={store}>
       <PersistGate persistor={persistor}>
         <NavigationProvider />
       </PersistGate>
     </Provider>
   );
 }
 