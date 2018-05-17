import React, { Component } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loaded: false
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://swapi.co/api/people/')
      .then(({ data }) => {
        this.setState({
          loading: false,
          loaded: true,
          data
        });
      })
      .then((err) => {
        this.setState({
          err
        });
      });
  }

  render() {
    const { loading, loaded, data } = this.state;
    /* eslint-disable */
    return (
      <div>
        {loading && <p>App is currently loading.</p>}
        {loaded && data && data.results.map(d => <UserCard person={d} />)}
      </div>
    );
    /* eslint-enable */
  }
}
