import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

export default function Details({}) {
  const state = useSelector(state => state);
  const data = state.HomeReducer.item_details;
  return (
    <View style={styles._main}>
      <View style={styles._top_view_wrapper}>
        <Image source={{uri: data?.strDrinkThumb}} style={styles._image} />
        <View style={styles._top_view_subwrapper}>
          <Text style={styles._drinkname}>{data?.strDrink}</Text>
          <Text style={styles._categoryname}>({data?.strCategory})</Text>
        </View>
      </View>
      <Text style={styles._ingredients_head}>Ingredients Need</Text>
      <View style={styles._ingredients_wrapper}>
        <View>
          {Object.keys(data)
            .filter(e => e.includes('strIngredient'))
            .map(key =>
              data[key] ? (
                <Text key={String(key)} style={styles._ingredients_txt}>
                  {data[key]}
                </Text>
              ) : null,
            )}
        </View>
        <View style={styles._ingredients_subwrapper}>
          {Object.keys(data)
            .filter(e => e.includes('strMeasure'))
            .map(key =>
              data[key] ? (
                <Text key={String(key)} style={styles._ingredients_txt}>
                  {data[key]}
                </Text>
              ) : null,
            )}
        </View>
      </View>
      <Text style={styles._ingredients_head}>Instructions</Text>
      <Text style={styles._instructions}>{data?.strInstructions}</Text>
    </View>
  );
}
