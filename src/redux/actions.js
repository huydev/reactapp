import {
  LOAD_LIST,
  LOAD_RECOMMEND,
  CHANGE_PAGE,
  LOAD_TYPE,
  CALC_LIST,
  CALC_RECOMMEND,
} from './actionTypes';

export const loadList = arr => ({
  type: LOAD_LIST,
  data: arr
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  data: page
});
export const changeLoadType = (type) => ({
  type: LOAD_TYPE,
  data: type
});

export const loadRecommend = arr => ({
  type: LOAD_RECOMMEND,
  data: arr
});

export const calcList = (arr, isAdd=true) => ({
  type: CALC_LIST,
  data: arr,
  isAdd: isAdd
});

export const calcRecommend = arr => ({
  type: CALC_RECOMMEND,
  data: arr
});
