import React, {Component} from 'react';
import selectItem from './actions';
import {connect} from 'react-redux';

import styles from './styles';

@connect((store)=>{
  return{
    store
  };
})

class SearchItem extends React.Component{

  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.dispatch(selectItem(this.props.item));
  }
  render(){
    const item = this.props.item;
    const bg = {backgroundImage: `url(${item.small_poster})`};
    return(
      <li className={styles.item} onClick={this.clickHandler}>
        <div className={styles.itemImg}>
          <img src={item.small_poster} alt={item.title}/>
          <div className={styles.itemInner} style={bg}></div>
        </div>
        <div>
          <p>{item.title}</p>
          <p>ارسال کننده: {item.sender_name}</p>
          <time>{item.sdate}</time>
        </div>
      </li>
    );
  }
}

export default SearchItem;