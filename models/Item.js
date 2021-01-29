const {model, Schema} = require('mongoose')

const itemSchema= new Schema({
    name : String,
    price: Number,
    username: String,
    description: String,
    createdAt: String,
    reviews: [
        {
            body : String,
            username: String,
            createdAt: String,
            rating: Number
        },
    ],
    images: [
        {
            src: String,
        },
    ],
    bookmarkedBy:[
        {
            username: String,
            createdAt: String,
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Item', itemSchema)