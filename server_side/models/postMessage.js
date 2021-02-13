import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    MemeUrl: String
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;