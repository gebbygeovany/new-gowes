const { model, Schema } = require('mongoose')

const reviewSchema = new Schema({
    score: Number,
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    images: [{
        downloadUrl: String
    }],
    createdAt: String
});

module.exports = model('Review', reviewSchema);