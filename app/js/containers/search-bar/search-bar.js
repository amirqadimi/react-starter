import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from './actions';

import image from 'assets/images/react-logo.svg';
import Icon from '@/components/icon';

import styles from './styles';

@connect((store) => {
  return {
    data: store.fetchData
  };
})

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.props.dispatch(fetchData(e.target.value));
  }

  render() {
    return (
      <div className={styles.search}>
      <Icon name="react-logo"/>
      <img className={styles.logo} src={image} alt="" />
      <input type="text" onChange={this.changeHandler} />
      <div className={styles.text}>جستجو برای "{this.props.data.term}"</div>
      </div >
    );
  }
}

export default SearchBar;