const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment:{
        type: String},
    upvotes: [{type:Boolean}],
    downvotes: [{type:Boolean}],
    author: {type: Schema.Types.ObjectId, 
            ref: "user",
            required:true,
            autopopulate:true
    },
});

commentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('comment',commentSchema);