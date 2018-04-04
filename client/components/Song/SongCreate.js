import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
    };
  }

  handleOnChange = e => {
    this.setState({ title: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query }],
      })
      .then(() => this.props.history.push('/'));
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            value={title}
            placeholder="Song Title:"
          />
        </form>
      </div>
    );
  }
}

SongCreate.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(withRouter(SongCreate));
