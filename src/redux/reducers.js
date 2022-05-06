import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
/* reducers from corresponding components */
import loginReducer from '../containers/LoginContainer/reducer';
import HomeReducer from '../containers/HomeContainer/reducer';
/* ............................ */
/* options for data persistance */
const loginConfig = {
  key: 'login',
  storage: AsyncStorage,
  whitelist: 'isLoggedIn',
};
const LoginReducer = persistReducer(loginConfig, loginReducer);
/* root reducer config */
const appReducer = combineReducers({LoginReducer, HomeReducer});
/*  */
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
