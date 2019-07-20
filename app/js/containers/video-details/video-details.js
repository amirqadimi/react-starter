import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles';
import loading from 'scss/loading';


@connect((store) => {
  return {
    video: store.selectItem
  };
})

class VideoDetails extends React.Component {

  render() {
    if (!this.props.video.selected) {
      return (
        <div className={styles.video + ' ' + styles.videoInit}>
         
        </div>
      );
    }
    return (
      <div className={styles.video}>
        <div className={[loading.red, styles.loading].join(" ")}></div>
        <iframe src={this.props.video.item.frame}></iframe>
      </div>
    );
  }
}

export default VideoDetails;