import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadList, calcList, changePage, changeLoadType } from '@/redux/actions';
import Search from '@/components/Search';
import Recommend from '@/components/Recommend';
import List from '@/components/List';
import * as api from '@/utils/api';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  
  scrollHandler = (e) => {
    const target = e.target;
    const scrollTop = target.scrollTop;
    const height = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    if (scrollTop + height === scrollHeight) {
      if (!this.state.loading && this.props.loadType === 1) {
        this.setState({
          loading: true
        });
        api.getList(
          this.props.page + 1,
          this.props.pageSize
        ).then((data) => {
          this.setState({
            loading: false
          });
          this.props.changePage(this.props.page + 1);
          if (data.length === 0) {
            this.props.changeLoadType(2);
          }
          this.props.getList(data);
          this.props.calcList(data);
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        <div className="scroll-wrap" onScroll={this.scrollHandler}>
          <Recommend />
          <List />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.list.page,
    pageSize: state.list.pageSize,
    loadType: state.list.loadType
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changePage: (page) => {
      dispatch(changePage(page));
    },
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
)(Index);