import React, { Component } from 'react';
import withCounter from './withCounter';

class Hover extends Component {

  render() {
      const {count, incrementCount} = this.props
    return (
        <h2 onMouseOver={incrementCount}> 
        Hovered {count} times
        </h2>
    )
  }
}

export default withCounter(Hover, 10);
