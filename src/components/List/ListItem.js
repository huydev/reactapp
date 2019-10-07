import React, { Component } from 'react';
import Star from '@/components/Star';
import { withRouter } from 'react-router';

class ListItem extends Component {
  clickHandler = () => {
    const id = this.props.item['id']['attributes']['im:id'];
    this.props.history.push('/detail/' + id);
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    return (
      <li className="list__item" onClick={this.clickHandler}>
        <div className="list__itemnum">{ index+1 }</div>
        <div className="list__itemicon">
          <img src={ item['im:image'][1]['label'] } alt=""/>
        </div>
        <div className="list__iteminfo">
          <h3>{ item['title']['label'] }</h3>
          <p>{ item['summary']['label'] }</p>
          <div>
            <Star value={4} />
            <span>(17)</span>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ListItem);