const { AuthenticationError, UserInputError } = require('apollo-server')
const { argsToArgsConfig } = require('graphql/type/definition')

const Item = require('../../models/Item')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        async getItems() {
            try {
                const items = await Item.find().sort({ createdAt: -1 })
                return items
            } catch (err) {
                throw new Error(err)
            }
        },

        async getItem(_, { itemId }) {
            try {
                const item = await Item.findById(itemId)
                if (item) {
                    return item
                } else {
                    throw new Error('Item not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        async getBookmarks(_,context) {
            try {
                const user = checkAuth(context)
                const items = await Item.find().sort({ createdAt: -1 })
                if (items.bookmarkedBy.find(bookmark => bookmark.username === user.username)) {
                    await item.delete()
                    return items
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async addItem(_, { name, price, description }, context) {
            const user = checkAuth(context)
            console.log(user)

            if (description.trim() === '') {
                throw new UserInputError('description must not be empty', {
                    errors: {
                        description: 'description must not be empty'
                    }
                })
            }

            if (name.trim() === '') {
                throw new UserInputError('name must not be empty', {
                    errors: {
                        name: 'name must not be empty'
                    }
                })
            }

            const newItem = new Item({
                name,
                price,
                description,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            })

            const item = await newItem.save()

            // context.pubsub.publish('NEW_POST', {
            //     newPost: post
            // })

            return item
        },
        async deleteItem(_, { itemId }, context) {
            const user = checkAuth(context)

            try {
                const item = await Post.findById(itemId)
                if (user.username === item.username) {
                    await item.delete()
                    return 'Item deleted'
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } catch (err) {
                throw new Error(err)
            }


        },

        async bookmarkItem(_, { itemId }, context) {
            const { username } = checkAuth(context)

            const item = await Item.findById(itemId)

            if (item) {
                if (item.bookmarkedBy.find(bookmark => bookmark.username === username)) {
                    //Post already liked, unliked it
                    item.bookmarkedBy = item.bookmarkedBy.filter(bookmark => bookmark.username !== username)
                } else {
                    //Post not liked
                    item.bookmarkedBy.push({
                        username,
                        createdAt: new Date().toDateString(),
                    })
                }
                await item.save()
                return item
            } else {
                throw new UserInputError('Post not found')
            }
        }
    },

    // Subscription: {
    //     newPost: {
    //         subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    //     }
    // }
}