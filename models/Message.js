const {model, Schema} = require('mongoose')

const messageScehma = new Schema({
    chatId: {
        type: Schema.Types.ObjectId
    },
    user: { type: Schema.Types.ObjectId, ref:'User' },
    content: String,
    images: [
        {
            downloadUrl: String,
        },
    ],
    sentAt: String
});

module.exports = model('Message', messageScehma)