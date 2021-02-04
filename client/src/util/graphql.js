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
      description
      
      images{
        id
        downloadUrl
      }
      bookmarkedBy{
        id
        userId
        createdAt
      }
      user{
        seller{
          username
        }
      }
  }
}
`;

export const FETCH_ITEM_QUERY = gql`
  query($itemId: ID!) {
    getItem(itemId: $itemId) {
        id
        name
        price
        stock
        createdAt
        description
        
        images{
            id
            downloadUrl
        }
        bookmarkedBy{
            id
            userId
            createdAt
        }
        user{
            seller{
            username
            }
        }
    }
  }
`;

export const FETCH_BOOKMARKS_QUERY = gql`
  {
  getBookmarks{
    id 
    name 
    price 
    username 
    bookmarkedBy{
      id
      userId
    }
  }
}
`;