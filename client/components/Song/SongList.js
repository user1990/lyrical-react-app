import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
// Mutations
import { deleteSong } from '../../mutations/mutations';
// Queries
import { fetchSongsList } from '../../queries/queries';

class SongList extends Component {
  handleDeleteSong = id => {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  };

  renderSongs() {
    const { songs } = this.props.data;

    return songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`/songs/${id}`}>{title}</Link>
        <button
          className="collection-item-remove"
          onClick={() => this.handleDeleteSong(id)}
        >
          <i className="material-icons">delete</i>
        </button>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

SongList.propTypes = {
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};

export default graphql(deleteSong)(graphql(fetchSongsList)(SongList));
