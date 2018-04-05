import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { addLyricToSong } from '../../mutations/mutations';

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

export default graphql(addLyricToSong)(LyricCreate);
