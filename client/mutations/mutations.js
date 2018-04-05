import gql from 'graphql-tag';

// Songs
export const addSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

// Lyrics
export const addLyricToSong = gql`
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

export const likeLyric = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export const deleteLyric = gql`
  mutation DeleteLyric($id: ID!) {
    deleteLyric(id: $id) {
      id
    }
  }
`;
