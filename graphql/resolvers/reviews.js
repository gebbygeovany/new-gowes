const { UserInputError, AuthenticationError } = require('apollo-server')

const Review = require('../../models/Review')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Mutation: {
        
    },
    Query: {
        async getItemReviews(_, { itemId }) {
            try {
                const reviews = await Review.find({ item: itemId }).sort({ createdAt: -1 }).populate('user').populate('item');
                return reviews
            } catch (err) {
                throw new Error(err)
            }
        },

        async getUserReviews(_, { userId }) {
            try {
                const reviews = await Review.find({ user: userId }).sort({ createdAt: -1 }).populate('user').populate('item');
                return reviews
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}