import React, {forwardRef} from 'react';
import {View} from 'react-native';
import BaseInput from '../BaseInput';
import styles from './styles';

function PasswordInput(
  {
    show = true,
    placeholder = '',
    defaultValue,
    returnKeyType = 'done',
    keyboardType = 'default',
    onBlur = nativeEvent => {},
    onFocus = nativeEvent => {},
    onChangeText = text => {},
    ...props
  },
  ref,
) {
  if (show) {
    return (
      <View style={styles._main}>
        <BaseInput
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChangeText}
          style={styles.input}
          {...props}
        />
      </View>
    );
  }
}

export default forwardRef(PasswordInput);
