import React, { Component } from 'react';
import { render } from 'react-dom';

import { OriginalText, Markdowned } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '# test',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <OriginalText value={this.state.value} onChange={this.handleChange} />
        <Markdowned toBe={this.state.value} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
