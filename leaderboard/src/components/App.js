import React, { Component } from 'react';

import PageHeading  from './PageHeading';
import Table        from './Table';
import PageFooter   from './PageFooter';
import Loading from './Loading';

const API_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'recent',
      other: 'alltime',
      campers: {
        'recent': [],
        'alltime': [],
      },
      fetching: false,
    }
  }

  componentDidMount() {
    this.getCampers('recent');
  }

  changeFilter() {
    let { filter, other } = this.state;
    [filter, other] = [other, filter];
    if (this.state.campers[filter].length === 0) {
      this.getCampers(filter);
    }
    this.setState({ filter, other });
  }

  getCampers(filter) {
    this.setState({ fetching: true });
    const self = this;
    fetch(`${API_URL}/${filter}`)
      .then(response => response.json())
      .then(json => {
        if (json[0] && json[0].username) {
          self.setState({
            campers: {
              ...self.state.campers,
              [filter]: json,
            },
            fetching: false,
          });
        }
      }).catch(console.log);
  }

  render() {
    const { filter, other, campers, fetching, } = this.state;

    return (
      <div>
        <PageHeading
          changeFilter={() => this.changeFilter()}
          currentFilter={filter}
          otherFilter={other}
        />
        {fetching ?
          <Loading /> :
          <Table
            campers={campers[filter]}
            currentFilter={filter}
            onClick={() => this.changeFilter()}
          /> }
        <PageFooter />
      </div>
    );
  }
}

export default App;
