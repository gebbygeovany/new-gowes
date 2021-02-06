const { UserInputError, AuthenticationError } = require('apollo-server')

const Chat = require('../../models/Chat')
const Message = require('../../models/Message')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        async getChats(_, {}, context) {
            const { id: userId } = checkAuth(context)
            try {
                const chats = await Chat.find({ users: userId }).sort({ createdAt: -1 }).populate('users');
                return chats
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}