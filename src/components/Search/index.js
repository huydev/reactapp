import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcList, calcRecommend, changeLoadType } from '@/redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchKey: e.target.value
    });
  }

  blurHandler = (e) => {
    this.setState({
      searchKey: ''
    });
  }

  searchHandler = () => {
    const key = this.state.searchKey;
    if (key) {
      this.props.changeLoadType(0);
      const searchRecommend = this.props.recommend.filter((item) => {
        return item['title']['label'].indexOf(key) !== -1 ||
          item['summary']['label'].indexOf(key) !== -1;
      });
      const searchList = this.props.list.filter((item) => {
        return item['title']['label'].indexOf(key) !== -1 ||
          item['summary']['label'].indexOf(key) !== -1;
      });
      this.props.calcRecommend(searchRecommend);
      this.props.calcList(searchList, false);
    } else {
      this.props.changeLoadType(1);
      const searchList = this.props.list;
      const searchRecommend = this.props.recommend;
      this.props.calcRecommend(searchRecommend);
      this.props.calcList(searchList, false);
    }
  }

  keyupHandler = (e) => {
    if (e.keyCode === 13) {
      this.searchHandler();
    }
  }

  render() {
    return (
      <section className="search">
        <div className="search__box">
          <div className="search__placeholder">
            <i className="iconfont icon-search"></i>搜索
          </div>
          <input
            className="search__input"
            type="search"
            value={this.state.searchKey}
            onChange={this.changeHandler}
            onBlur={this.blurHandler}
            onSearch={this.searchHandler}
            onKeyUp={this.keyupHandler} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list.items,
    cList: state.calcList,
    recommend: state.recommend,
    cRecommend: state.calcRecommend
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLoadType: (type) => {
      dispatch(changeLoadType(type));
    },
    calcList: (arr, isAdd) => {
      dispatch(calcList(arr, isAdd));
    },
    calcRecommend: (arr) => {
      dispatch(calcRecommend(arr));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);