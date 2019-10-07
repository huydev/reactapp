import http from './http';

const getList = (page, pageSize = 10) => {
  return new Promise((resolve, reject) => {
    http.get('/data/appListData.json').then(({data}) => {
      const allArr = data.feed.entry;
      const pageArr = allArr.slice((page-1)*pageSize, page*pageSize);
      resolve(pageArr);
    });
  });
}

const getRecommend = () => {
  return http.get('/data/recomendData.json');
}

const getDetail = (id) => {
  console.log(id);
  return http.get('/data/lookUp.json');
}

export {
  getList,
  getRecommend,
  getDetail
}