const {model, Schema} = require('mongoose')

const itemSchema= new Schema({
    name : String,
    price: Number,
    stock: Number,
    category: String,
    condition: String,
    weight: Number,
    description: String,
    dimension: {
        length: String,
        width: String,
        height: String
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },    
    images: [
        {
            downloadUrl: String,
        },
    ],
    bookmarkedBy:[
        {
            userId: {type: Schema.Types.ObjectId},
            createdAt: String,
        }
    ],
    createdAt: String
})

module.exports = model('Item', itemSchema)