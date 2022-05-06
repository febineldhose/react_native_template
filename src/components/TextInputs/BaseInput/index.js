import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

function BaseInput(
  {
    show = true,
    placeholder = '',
    defaultValue,
    returnKeyType = 'done',
    keyboardType = 'default',
    onBlur = nativeEvent => {},
    onFocus = nativeEvent => {},
    onChangeText = text => {},
    style = {},
    ...props
  },
  ref,
) {
  if (show) {
    return (
      <TextInput
        ref={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChangeText}
        style={[styles._main, style]}
        {...props}
      />
    );
  }
}
export default forwardRef(BaseInput);
