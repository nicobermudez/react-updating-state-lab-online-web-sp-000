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

  updateBitrate = () => {
    this.setState = {
      this.state.settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }
  }

  updateResolution = () => {
    this.setState = {
      
    }
  }

  render() {
    return(
        <button class="bitrate" onClick={this.updateBitrate}></button>
        <button class="resolution" onClick={this.updateResolution}
    )
  }
}
