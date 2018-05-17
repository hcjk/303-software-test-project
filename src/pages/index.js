import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Box from 'react-box-size';
import UserCard from '../components/UserCard';

const StyledApp = styled.div`
  font-family: sans-serif;
  * {
    margin: 0;
    padding: 0;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loaded: false,
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
          data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          loaded: false,
          err,
        });
      });
  }

  render() {
    const {
      loading,
      loaded,
      data,
      err,
    } = this.state;
    /* eslint-disable */
    return (
      <StyledApp>
        {loading && <Box mv={4} mh={4}>App is currently loading.</Box>}
        {loaded && data && data.results.map(d => <UserCard key={d.name} person={d} />)}
        {!loaded && err && <Box mv={4} mh={4}>There was an error processing the request: {err}</Box>}
      </StyledApp>
    );
    /* eslint-enable */
  }
}
