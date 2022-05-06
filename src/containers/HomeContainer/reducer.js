import {defaultLoginCredntials} from '../../@config/preconfigs';
import {
  GET_LIST_DATA,
  GET_LIST_DATA_FAILED,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_ITEM_DETAILS,
} from './actions';

const initialState = {isloading: false, list: [], item_details: {}};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DATA:
      return {...state, isloading: true};
    case GET_LIST_DATA_SUCCESS:
      return {...state, isloading: false, list: action.data};
    case GET_LIST_DATA_FAILED:
      return {...state, isloading: false, list: []};
    case GET_LIST_ITEM_DETAILS:
      return {...state, item_details: action.data};
    default:
      return {...state};
  }
}
