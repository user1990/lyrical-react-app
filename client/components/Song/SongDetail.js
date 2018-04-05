import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import LyricCreate from '../Lyric/LyricCreate';
import LyricList from '../Lyric/LyricList';
import { fetchSong } from '../../queries/queries';

class SongDetail extends Component {
  componentDidMount() {}

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
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

SongDetail.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default graphql(fetchSong, {
  options: props => ({
    variables: {
      id: props.params.id,
    },
  }),
})(SongDetail);
