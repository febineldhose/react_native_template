import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../../@config';
import {apis} from '../../@config/apiconfig';
import {Loader} from '../../components';
import {
  getlist_data,
  getlist_item_details,
  GET_LIST_DATA_FAILED,
  GET_LIST_DATA_SUCCESS,
} from '../../containers/HomeContainer/actions';
import callAPI from '../../services/api';
import RenderItem from './RenderItem';
import styles from './styles';

export default function Home({navigation}) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const data = state.HomeReducer.list;
  const isloading = state.HomeReducer.isloading;
  useEffect(() => {
    handleListCall();
  }, []);
  const handleListCall = () => {
    dispatch(getlist_data());
    callAPI({url: apis.get_list})
      .then(res => {
        dispatch({type: GET_LIST_DATA_SUCCESS, data: res.drinks ?? []});
      })
      .catch(e => dispatch({type: GET_LIST_DATA_FAILED, data: []}));
  };
  const handleItemClick = item => {
    dispatch(getlist_item_details(item));
    navigation.navigate(SCREENS.details);
  };
  return (
    <View style={styles._main}>
      {isloading ? (
        <Loader type="circular" />
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={
            data?.length > 0
              ? styles._list_container
              : styles._empty_list_container
          }
          keyExtractor={(_, index) => String(index)}
          initialNumToRender={10}
          ListEmptyComponent={() => <Text>No Data Available</Text>}
          ItemSeparatorComponent={() => <View style={styles._seperator} />}
          renderItem={({item}) => (
            <RenderItem item={item} onPress={() => handleItemClick(item)} />
          )}
        />
      )}
    </View>
  );
}
