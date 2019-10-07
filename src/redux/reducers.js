import { combineReducers } from 'redux';
import {
  LOAD_LIST,
  LOAD_RECOMMEND,
  CHANGE_PAGE,
  LOAD_TYPE,
  CALC_LIST,
  CALC_RECOMMEND,
} from './actionTypes';

function getList(state = {
  page: 1,
  pageSize: 10,
  loadType: 0,
  items: []
}, action) {
  switch (action.type) {
    case LOAD_LIST:
      return Object.assign({}, state, {
        items: state.items.concat(action.data)
      });
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.data
      });
    case LOAD_TYPE:
      return Object.assign({}, state, {
        loadType: action.data
      });
    default:
      return state;
  }
}
function getRecommend(state = [], action) {
  switch (action.type) {
    case LOAD_RECOMMEND:
      return action.data;
    default:
      return state;
  }
}

function calcList(state = [], action) {
  switch (action.type) {
    case CALC_LIST:
      if (action.isAdd) {
        return state.concat(action.data);
      } else {
        return action.data;
      }
    default:
      return state;
  }
}
function calcRecommend(state = [], action) {
  switch (action.type) {
    case CALC_RECOMMEND:
      return action.data;
    default:
      return state;
  }
}

/**
 * {
 *   list: {
 *     page: 1,
 *     pageSize: 10,
 *     items: []
 *   },
 *   recommend: [],
 *   calcList: [],
 *   calcRecommend: []
 * }
 */

const rootStore = combineReducers({
  list: getList,
  recommend: getRecommend,
  calcList: calcList,
  calcRecommend: calcRecommend
});

export default rootStore;