const {model, Schema} = require('mongoose')

const orderSchema = new Schema({
    items: [ { type: Schema.Types.ObjectId, ref: 'Item' } ],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    state: {
        stateType: String,
        createdAt: String,
        deadline: String
    },
    awbNumber: String,
    shippingCost: Number
});

module.exports = model('Order', orderSchema)