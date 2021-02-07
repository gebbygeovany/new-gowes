const { AuthenticationError, UserInputError } = require('apollo-server')

const Cart = require('../../models/Cart')
const checkAuth = require('../../util/check-auth')
const { validateAddCartItemInput } = require('../../util/validators')

module.exports = {
    Query: {
        async getUserCartItems(_, __, context) {
            try {
                const user = checkAuth(context)
                const cart = await Cart.find({ user: user.id}).populate('user').populate('item');
                if (cart) {
                    return cart
                } else {
                    throw new Error('User cart items not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async addCartItem(_, { itemId, note, amountItem }, context) {
            const user = checkAuth(context)
            const { valid, errors } = validateAddCartItemInput(amountItem)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const isCartItemExists = await Cart.findOne({ item: itemId, user: user.id})

            if (isCartItemExists) {
                isCartItemExists.amountItem += amountItem
                const updatedCartItem = await isCartItemExists.save()
                return updatedCartItem
            } else {
                const newCartItem = new Cart({
                    item: itemId,
                    user: user.id,
                    note: note,
                    amountItem: amountItem,
                    createdAt: new Date().toISOString()
                })
    
                const cartItem = await newCartItem.save()
                return cartItem
            }
        },
        
        async deleteCartItem(_, { cartId }, context) {
            try {
                const user = checkAuth(context)
                console.log(`itemId: ${cartId}, user: ${user.id}`)
                const cartItem = await Cart.findById(cartId)
                if (cartItem) {
                    await cartItem.delete()
                    return 'Cart item deleted'
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
}