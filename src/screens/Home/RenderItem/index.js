import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
export default function RenderItem({item, index, onPress = () => {}}) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.main}>
      <Image source={{uri: item?.strDrinkThumb}} style={styles._image} />
      <View style={styles._second_sec_wrapper}>
        <Text style={styles._drinkname}>{item?.strDrink}</Text>
        <Text style={styles._categoryname}>({item?.strCategory})</Text>
        <Text
          numberOfLines={2}
          lineBreakMode="tail"
          style={styles._instructions}>
          {item?.strInstructions}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
