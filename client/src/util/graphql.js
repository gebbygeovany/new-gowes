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
        weight
        createdAt
        description
        condition
        category
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
            id
            seller{
            username
            }
        }
    }

    getItemReviews(itemId:$itemId){
      id
      score
      body
      user{
        id
        email
        buyer {
          avatar
        }
      }
      item {
        id
        name
      }
      images{
        downloadUrl
      }
      createdAt
    }

  #   getUserCartItem(itemId: $itemId) {
  #   id
  #   createdAt
  #   amountItem
  #   item{
  #     user{
  #       seller {
  #         username
  #       }
  #     }
  #   }
  # }
  
  }
`;

export const FETCH_CART_QUERY = gql`
  query($itemId: ID!){
    getUserCartItem(itemId: $itemId) {
    id
    createdAt
    amountItem
    item{
      user{
        seller {
          username
        }
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

export const FETCH_USER_CART_QUERY = gql`
  {
    getUserCartItems {
    id
    item {
      id
      name
      price
      stock
      user{
        id
        seller{
          username
        }
      }
    }
    user {
      id
      buyer {
        name
      }
      seller{
        username
      }
    }
    note
    amountItem
    createdAt
  }
}
`;