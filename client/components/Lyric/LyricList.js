import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
// Mutation
import { likeLyric } from '../../mutations/mutations';

class LyricList extends Component {
  handleOnLike = (id, likes) => {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });
  };

  renderLyrics() {
    const { lyrics } = this.props;

    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i
            role="button"
            tabIndex="0"
            className="material-icons"
            onClick={() => this.handleOnLike(id, likes)}
            onKeyPress={() => this.handleOnLike(id, likes)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

LyricList.propTypes = {
  mutate: PropTypes.func.isRequired,
  lyrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default graphql(likeLyric)(LyricList);
