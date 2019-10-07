import React, { Component } from 'react';
import * as api from '@/utils/api';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }

  render() {
    return (
      <div>
        <h1>详情页</h1>
        <ul>
          {
            Object.keys(this.state.info).map((key, index) => {
            return <li key={index}>{key}——{this.state.info[key]}</li>;
            })
          }
        </ul>
      </div>
    );
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    api.getDetail(id).then(({data}) => {
      this.setState({
        info: data.results[0]
      });
    })
  }
}

export default Detail;