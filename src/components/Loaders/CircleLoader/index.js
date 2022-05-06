import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../../Utils';
import styles from './styles';
export default function ({
  show = true,
  size = 'large',
  color = colors.Coffe_Color,
  containerStyle = styles.container,
}) {
  if (show) {
    return (
      <View style={containerStyle}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
}
