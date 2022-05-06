export const GET_LIST_DATA = 'GET_LIST_DATA';
export const GET_LIST_DATA_SUCCESS = 'GET_LIST_DATA_SUCCESS';
export const GET_LIST_DATA_FAILED = 'GET_LIST_DATA_FAILED';
export const GET_LIST_ITEM_DETAILS = 'GET_LIST_ITEM_DETAILS';
export const getlist_data = data => ({type: GET_LIST_DATA, data});
export const getlist_item_details = data => ({
  type: GET_LIST_ITEM_DETAILS,
  data,
});
