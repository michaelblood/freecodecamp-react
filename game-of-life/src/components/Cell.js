import React, { Component, PropTypes } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.alive && nextProps.alive) {
      this.newborn = 1;
    } else if (nextProps.alive && this.newborn === 1) {
      this.newborn = 2;
    } else if (this.newborn === 2 && nextProps.alive) {
      this.newborn = 3;
    } else {
      this.newborn = 0;
    }
  }

  render() {
    let className = '';
    switch (this.newborn) {
      case 1:
        className = ' newborn';
        break;
      case 2:
        className = ' teen';
        break;
    }
    return (
      <div
        className={(this.props.alive ? 'alive' : 'dead') + className}
        onClick={(e) => {
          this.props.onClick();
        }}
      />
    );
  }
}

Cell.propTypes = {
  onClick: PropTypes.func,
  alive: PropTypes.bool,
};

export default Cell;
