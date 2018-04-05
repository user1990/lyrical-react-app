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
export const likeLyricMutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export const deleteLyricMutation = gql`
  mutation DeleteLyric($id: ID!) {
    deleteLyric(id: $id) {
      id
    }
  }
`;
