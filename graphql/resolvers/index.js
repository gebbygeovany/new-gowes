const postsResolvers = require('./posts')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')
const itemsResolvers = require('./items')
const reviewsResolvers = require('./reviews')


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
        ...reviewsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...itemsResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription:{
        ...postsResolvers.Subscription
    }
}