import React, { Component } from 'react';

import PageHeading  from './PageHeading';
import Table        from './Table';
import PageFooter   from './PageFooter';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeading />
        <Table />
        <PageFooter />
      </div>
    );
  }
}

export default App;
