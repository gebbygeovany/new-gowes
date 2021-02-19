const { AuthenticationError, UserInputError } = require('apollo-server')

const Order = require('../../models/Order')
const checkAuth = require('../../util/check-auth')
const { validateAddCartItemInput } = require('../../util/validators')

module.exports = {
    Query: {
        async getUserOrders(_, __, context) {
            try {
                const user = checkAuth(context)
                const orders = await Order.find({ user: user.id}).populate('user').populate('items');
                if (orders) {
                    return orders
                } else {
                    throw new Error('User orders not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        async getUserOrderById(_, { oderId }, context) {
            try {
                checkAuth(context)
                const order = await Order.findById(oderId).populate('user').populate('items');
                if (order) {
                    return order
                } else {
                    throw new Error('User order not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async addOrder(_, { addOrderInput: { itemIds, state, awbNumber, shippingCost} }, context) {
            const user = checkAuth(context)
            const newOrder = new Order({
                items: itemIds,
                user: user.id,
                state: {
                    stateType: "init",
                    createdAt: new Date().toISOString(),
                    deadline: new Date().toISOString()
                },
                awbNumber: awbNumber,
                shippingCost: shippingCost
            })

            const order = await newOrder.save()

            return order
        },
        async updateOrder(_, { oderId, addOrderInput: { itemIds, state, awbNumber, shippingCost} }, context) {
            checkAuth(context)
            const updatedOrder = await Order.findOneAndUpdate(
                { _id: oderId },
                {
                    items: itemIds,
                    state: {
                        stateType: state.type,
                        createdAt: new Date().toISOString(),
                        deadline: new Date().toISOString()
                    },
                    awbNumber: awbNumber,
                    shippingCost: shippingCost
                },
                { new: true }
            ).populate('user').populate('items');

            return {
                ...updatedOrder._doc,
                id: updatedOrder._id
            }
        }
    }
}