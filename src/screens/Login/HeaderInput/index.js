import React, {useCallback, useState, forwardRef} from 'react';
import {View, Animated, Text} from 'react-native';
import {Input} from '../../../components';
import styles from './styles';

function HeaderInput(
  {
    show = true,
    type,
    placeholder = '',
    error_text,
    onChangeText = () => {},
    ...props
  },
  ref,
) {
  const [moveAnim] = useState(new Animated.Value(0));
  const [isFocused, setFocused] = useState(false);
  const [text, setText] = useState('');
  const handleAnimationChange = useCallback(
    ({toValue = 0}) => {
      /* handle animation for both focus and blur effects */
      Animated.timing(moveAnim, {
        toValue,
        useNativeDriver: true,
        duration: 100,
      }).start(() => setFocused(toValue == 0 ? false : true));
    },
    [moveAnim, isFocused],
  );
  const handleTextChange = useCallback(
    text => {
      setText(text);
      onChangeText(text);
    },
    [text],
  );
  /* translate animation for header text */
  const translateY = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [35, 5],
  });
  const opacity = text.length !== 0 ? moveAnim : 1;
  if (show)
    return (
      <View style={[styles._main]}>
        <Animated.Text
          style={[
            styles._headertxt,
            {
              transform: [
                {
                  translateY,
                },
              ],
              opacity,
            },
          ]}>
          {placeholder}
        </Animated.Text>
        <Input
          ref={ref}
          type={type}
          onChangeText={handleTextChange}
          onFocus={() => handleAnimationChange({toValue: 1})}
          onBlur={() => handleAnimationChange({toValue: 0})}
          style={[styles.inputStyle, isFocused && styles._focused_inputStyle]}
          {...props}
        />
        {error_text ? (
          <Text style={styles._error_text}>{error_text}</Text>
        ) : null}
      </View>
    );
  else return null;
}
export default forwardRef(HeaderInput);
