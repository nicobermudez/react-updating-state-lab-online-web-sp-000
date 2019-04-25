import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked += 1;
    })
  }

  render() {
    return(
      <button onClick={this.handleClick} label={this.timesClicked}></button>
    )
  }
}
