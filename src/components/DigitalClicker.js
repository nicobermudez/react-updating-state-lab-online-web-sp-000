import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return(
      <button label={this.timesClicked}></button>
    )
  }
}
