import React, { Component } from 'react';

import PropTypes from 'prop-types';

class LyricList extends Component {
  handleOnLike = id => {
    console.log(id);
  };

  renderLyrics() {
    const { lyrics } = this.props;

    return lyrics.map(({ id, content }) => (
      <li key={id} className="collection-name">
        {content}
        <button onClick={() => this.handleOnLike(id)}>
          <i className="material-icons">thumb_up</i>
        </button>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

LyricList.propTypes = {
  lyrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LyricList;
