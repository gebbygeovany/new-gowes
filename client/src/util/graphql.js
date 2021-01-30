import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export const FETCH_ITEMS_QUERY = gql`
  {
    getItems{
    id
    name
    price
    createdAt
    username
    description
    reviews{
      id
      body
      username
      rating
      createdAt
    }
    images{
      id
      src
    }
    reviewCount
    bookmarkedBy{
      id
      username
      createdAt
    }
  }
}
`;