import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '@/utils/api';
import { loadRecommend, calcRecommend } from '@/redux/actions';
import ListItem from './ListItem';

class Recommend extends Component {

  render() {
    return (
      <section className="recommend">
        <h2 className="recommend__hd">推荐</h2>
        <div className="recommend__bd">
          <ul className="recommend__list">
            {
              this.props.list.map(item => {
                return <ListItem item={item} key={item.id.attributes['im:id']} />
              })
            }
          </ul>
        </div>
      </section>
    );
  }

  componentDidMount() {
    api.getRecommend().then(({data}) => {
      const arr = data.feed.entry;
      this.props.getRecommend(arr);
      this.props.calcRecommend(arr);
    });
  }
}

const mapStateToProps = state => {
  return {
    list: state.calcRecommend
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRecommend: (arr) => {
      dispatch(loadRecommend(arr));
    },
    calcRecommend: (arr) => {
      dispatch(calcRecommend(arr));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);