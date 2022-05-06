import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
export default function ({
  show = true,
  label = '',
  onPress = () => {},
  containerStyle = {},
  textStyle = {},
}) {
  if (show) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={containerStyle}
        onPress={onPress}>
        <Text style={textStyle}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
