const { AuthenticationError, UserInputError } = require('apollo-server')
const { argsToArgsConfig } = require('graphql/type/definition')

const Item = require('../../models/Item')
const checkAuth = require('../../util/check-auth')
const { validateAddItemInput } = require('../../util/validators')

module.exports = {
    Query: {
        async getItem(_, { itemId }) {
            try {
                const item = await Item.findById(itemId).populate('user');
                if (item) {
                    return item
                } else {
                    throw new Error('Item not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        async getItems() {
            try {
                const items = await Item.find().sort({ createdAt: -1 }).populate('user');
                return items
            } catch (err) {
                throw new Error(err)
            }
        },
        async getSellerItems(_, { userId }) {
            try {
                const items = await Item.find({ user: userId }).sort({ createdAt: -1 }).populate('user');
                return items
            } catch (err) {
                throw new Error(err)
            }
        },

        async getBookmarks(_,{},context) {
            try {
                const user = checkAuth(context)
                console.log(user.username)
                const items = await Item.find({ 
                    "bookmarkedBy": {
                        $elemMatch: {
                            userId: user.id
                        }
                }}).sort({ createdAt: -1 }).populate('user')
                return items
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async addItem(_, { addItemInput: { name, price, stock, category, condition, weight, description, dimension, images } }, context) {
            const user = checkAuth(context)
            console.log(user)

            const { valid, errors } = validateAddItemInput(name, price, stock, category, condition, weight, description, dimension, images, description)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const newItem = new Item({
                name: name,
                price: price,
                stock: stock,
                category: category,
                condition: condition,
                weight: weight,
                description: description,
                dimension: dimension,
                user: user.id,
                images: images,
                createdAt: new Date().toISOString()
            })

            const item = await newItem.save()

            return item
        },
        
        async updateItem(_, { itemId, addItemInput: { name, price, description } }, context) {
            const { valid, errors } = validateAddItemInput(name, description)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const updatedItem = await Item.findOneAndUpdate(
                { _id: itemId },
                {
                    name: name,
                    price: price,
                    description: description
                },
                { new: true }
            );

            return {
                ...updatedItem._doc,
                id: updatedItem._id
            }
        },

        async deleteItem(_, { itemId }, context) {
            const user = checkAuth(context)
            try {
                const item = await Item.findById(itemId)
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
            const { id } = checkAuth(context)
            
            const item = await Item.findById(itemId)

            if (item) {
                if (item.bookmarkedBy.find(bookmark => bookmark.userId.toString() === id)) {
                    //Post already liked, unliked it
                    item.bookmarkedBy = item.bookmarkedBy.filter(bookmark => bookmark.userId.toString() !== id)
                } else {
                    //Post not liked
                    item.bookmarkedBy.push({
                        userId: id,
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