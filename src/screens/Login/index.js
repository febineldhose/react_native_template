import React, {useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from '../../components';
import HeaderInput from './HeaderInput';
import styles from './styles';
import {useForm, formMaker} from '../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../containers/LoginContainer/actions';

export default function Login({}) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const username = state.LoginReducer.username;
  const password = state.LoginReducer.password;
  /* refs */
  const passwordRef = useRef({});
  /* hooks */
  const {errors, handleChange, handleSubmit} = useForm({
    validationSchema: {
      email: ({value}) =>
        formMaker(value).email('enter a valid email') ||
        formMaker(value).isEqual(username, 'email is not valid'),
      password: ({value}) =>
        formMaker(value)._null('enter a your password') ||
        formMaker(value).isEqual(password, 'password is not valid'),
    },
    initialValues: {email: null, password: null},
    onSubmit: () => {
      alert('login successfull');
      dispatch(login());
    },
  });
  return (
    <View style={styles._main}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles._welcome_back_txt}>Welcome back!</Text>
        <HeaderInput
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          error_text={errors?.email}
          onSubmitEditing={() => passwordRef.current?.focus()}
          onChangeText={value => handleChange({key: 'email', value})}
        />
        <HeaderInput
          ref={passwordRef}
          placeholder="Password"
          type="password"
          error_text={errors?.password}
          onChangeText={value => handleChange({key: 'password', value})}
          onSubmitEditing={handleSubmit}
        />
        <Text style={styles._forgot_txt}>Forgot password?</Text>
        <Button
          type="textButton"
          label="Log In"
          containerStyle={styles._btn_main}
          textStyle={styles._btn_text}
          onPress={handleSubmit}
        />
        <Text style={styles._dontHave_txt}>
          Don't have an account?{' '}
          <Text style={styles._register_txt}>Register</Text>
        </Text>
      </ScrollView>
    </View>
  );
}
