import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import LyricCreate from '../Lyric/LyricCreate';
import LyricList from '../Lyric/LyricList';
// Queries
import { fetchSong } from '../../queries/queries';

// eslint-disable-next-line
class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

SongDetail.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default graphql(fetchSong, {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
})(SongDetail);
