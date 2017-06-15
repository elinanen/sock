import React, { Component } from 'react';

class Video extends Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        listType: search,
        list: query
      }
    };

    // _onReady(event) {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}



export default Video;
