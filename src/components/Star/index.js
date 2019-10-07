import React from 'react';

function Star(props) {
  const value = props.value;
  const star = new Array(value).fill(1);
  const star_border = new Array(5 - value).fill(1);
  const starList = [];
  let count = 0;
  star.forEach(() => {
    count++;
    starList.push(<i className="iconfont icon-jingdiananli_wujiaoxing_shoucanghou" key={count}></i>)
  });
  star_border.forEach(() => {
    count++;
    starList.push(<i className="iconfont icon-jingdiananli_kongwujiaoxing_shoucang" key={count}></i>)
  });
  return (
    <React.Fragment>
      {starList}
    </React.Fragment>
  );
}

export default Star;