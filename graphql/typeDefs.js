const { gql } = require('apollo-server')


module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments:[Comment]!
        likes:[Like]!
        likeCount: Int!
        commentCount: Int!
    }

    type Item {
        id: ID!
        name:String!
        price: Int!
        createdAt: String!
        username: String!
        description: String!
        reviews: [Reviews]!
        images: [Images]!
        reviewCount: Int
        bookmarkedBy:[BookmarkedBy]
        user:User!
    }

    type Reviews {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        rating: Int!
    }

    type Images {
        id: ID!
        src: String!
    }

    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }

    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }

    type BookmarkedBy {
        id: ID!
        userId: ID!
        createdAt: String!
    }

    type User {
        id: ID!
        email: String!
        phone: String!
        address: String!
        balance: Int!
        token: String!
        buyer: Buyer!
        seller: Seller!
    }

    type Buyer {
        id: ID!
        name: String
        birthDate: String
        avatar: String
        createdAt: String
    }

    type Seller {
        id: ID!
        username: String!
        avatar: String!
        description: String!
        createdAt: String!
    }

    input RegisterInput {
        name: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    input UserProfileInput {
        avatar: String!
        name: String!
        email: String!
        phone: String!
        birthDate: String!
    }

    input ActivateSellerInput {
        username: String!
        avatar: String!
        description: String!
    }
   
    input AddItemInput {
        name: String!
        price: Int!
        description: String!
    }

    type Query {
        getUser(userId: ID!): User!
        getSeller(sellerId: ID!): User
        getSellers: [User]
        getPosts: [Post]
        getPost(postId: ID!): Post!
        getItems: [Item]
        getItem(itemId: ID!): Item!
        getBookmarks: [Item]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        updateUserProfile(userProfileInput: UserProfileInput): User!
        activateSeller(activateSellerInput: ActivateSellerInput): User!
        login(email: String!, password: String!): User!
        createPost(body: String!): Post!
        addItem(addItemInput: AddItemInput): Item!
        updateItem(itemId: ID!, addItemInput: AddItemInput): Item!
        deletePost(postId: ID!):String!
        deleteItem(itemId: ID!):String!
        createComment(postId: ID!, body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post! 
        bookmarkItem(itemId: ID!): Item!
    }
    type Subscription {
        newPost: Post!
    }
`