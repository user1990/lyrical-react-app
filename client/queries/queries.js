import gql from 'graphql-tag';

export const fetchSong = gql`
  query Song($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const fetchSongsList = gql`
  {
    songs {
      id
      title
    }
  }
`;
