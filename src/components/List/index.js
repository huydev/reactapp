import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadList, calcList, changeLoadType } from '@/redux/actions';
import * as api from '@/utils/api';
import ListItem from './ListItem';
import Loading from '@/components/Loading';

class List extends Component {

  render() {
    const loadType = this.props.loadType;
    let tip;
    switch (loadType) {
      case 0: //未加载
        tip = null;
        break;
      case 1: //加载中
        tip = <Loading />;
        break;
      case 2: //加载完成没数据了
        tip = <p className="nodata">没数据了</p>;
        break;
      default:
        tip = null;
    }
    return (
      <section className="list">
        <ol>
          {
            this.props.list.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  index={index}
                  key={item['id']['attributes']['im:id']} />
              )
            })
          }
          {/*
          <li className="list__item">
            <div className="list__itemnum">1</div>
            <div className="list__itemicon">
              <img src="http://iph.href.lu/68x68" alt=""/>
            </div>
            <div className="list__iteminfo">
              <h3>新闻标题新闻标题新闻标题新闻标题</h3>
              <p>新闻描述新闻描述新闻描述新闻描述新闻描述新闻描述</p>
              <div><span>★★★★★</span><span>(17)</span></div>
            </div>
          </li>
          */}
        </ol>
        {tip}
      </section>
    );
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      api.getList(
        this.props.page,
        this.props.pageSize
      ).then((data) => {
        this.props.changeLoadType(1);
        this.props.getList(data);
        this.props.calcList(data);
      });
    }
  }
}
const mapStateToProps = state => {
  return {
    list: state.calcList,
    page: state.list.page,
    pageSize: state.list.pageSize,
    loadType: state.list.loadType
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLoadType: (type) => {
      dispatch(changeLoadType(type));
    },
    getList: (arr) => {
      dispatch(loadList(arr));
    },
    calcList: (arr) => {
      dispatch(calcList(arr));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);