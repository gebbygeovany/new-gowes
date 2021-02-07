const postsResolvers = require('./posts')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')
const itemsResolvers = require('./items')
const reviewsResolvers = require('./reviews')
const chatsResolvers = require('./chats')
const messagesResolvers = require('./messages')
const cartsResolvers = require('./carts')


module.exports={
    Post:{
        likeCount: (parent)=>parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Item:{
        // reviewCount: (parent)=>parent.revies.length,
    },
    Query:{
        ...usersResolvers.Query,
        ...postsResolvers.Query,
        ...itemsResolvers.Query,
        ...reviewsResolvers.Query,
        ...chatsResolvers.Query,
        ...messagesResolvers.Query,
        ...cartsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...itemsResolvers.Mutation,
        ...commentsResolvers.Mutation,
        ...messagesResolvers.Mutation,
        ...cartsResolvers.Mutation
    },
    Subscription:{
        ...postsResolvers.Subscription,
        ...messagesResolvers.Subscription
    }
}