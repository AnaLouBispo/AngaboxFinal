const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true  
    },
    movieTitle: {
        type: String,
        required: true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    },
    author:{
        type:String,
        required:true
    }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

module.exports = Post;
