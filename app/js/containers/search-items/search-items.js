import React, {Component} from 'react';
import SearchItem from '../search-item/search-item';
import {connect} from 'react-redux';

import styles from './styles';

@connect((store)=>{
  return{
    data: store.fetchData
  };
})


class SearchItems extends React.Component{

  render(){
    if(this.props.data.term.length < 2  && this.props.data.fetched){
      return <div>کلمه کوتاه است!</div>
    }
    if(this.props.data.fetching){
      return <div>در حال بارگذاری ...</div>
    }
    if(this.props.data.fetchedData.length <=0){
      return <div>لطفا کلمه مورد نظر خود را جستجو کنید</div>;
    }
    if(!this.props.data.fetchedData.videobysearch){
      return <div>نتیجه ای یافت نشد</div>;
    }

    return(
      <ul className={styles.list}>
        {this.props.data.fetchedData.videobysearch.map(item=><SearchItem key={item.id} item={item}/>)}
      </ul>
    );
  }
}

export default SearchItems;