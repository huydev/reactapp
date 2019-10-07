import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ListItem extends Component {
  clickHandler = () => {
    const id = this.props.item['id']['attributes']['im:id'];
    this.props.history.push('/detail/' + id);
  }

  render() {
    const item = this.props.item;
    return (
      <li className="recommend__item" onClick={this.clickHandler}>
        <img src={ item['im:image'][2]['label'] } alt=""/>
        <h3>{ item['title']['label'] }</h3>
        <p>{ item['summary']['label'] }</p>
      </li>
    );
  }
}

export default withRouter(ListItem);