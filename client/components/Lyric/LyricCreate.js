import React, { Component } from 'react';

import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  state = {
    content: '',
  };

  handleOnChange = e => {
    this.setState({ content: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId,
        },
      })
      .then(() => this.setState({ content: '' }));
  };

  render() {
    const { content } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          value={content}
          onChange={this.handleOnChange}
          placeholder="Add a lyric"
        />
      </form>
    );
  }
}

LyricCreate.propTypes = {
  mutate: PropTypes.func.isRequired,
  songId: PropTypes.string.isRequired,
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
