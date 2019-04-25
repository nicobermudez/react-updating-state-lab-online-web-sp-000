import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }



  render() {
    return(
        <button class="bitrate" onClick={}
    )
  }
}
