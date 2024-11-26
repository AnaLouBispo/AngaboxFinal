const Post = require("../models/Post");
const Movie = require("../models/Movie");

const PostController = {
  create: async (req, res) => {
    try {
      const { id } = req.params;
      const idMovie = await Movie.findById(id);
      console.log(idMovie)
      const { title, content, rating, movieTitle, author } = req.body;
      const post = await Post.create({
        title,
        content,
        rating,
        movieTitle,
        movie: idMovie._id,
        author
      });
      return res.status(200).json({
        msg: "Post Created ;D",
        post,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  getMoviePosts: async(req,res) =>{
    const {id} = req.params;
    const moviePosts = await Post.find({movie: id});
    if(!moviePosts){
      return res.status(404).json({
        msg:"Posts not found"
      });
    }
    return res.status(200).json({
      msg:"Here, All posts about:",
      moviePosts
    })
  },

  getAll: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.status(200).json({
        msg: "All Posts",
        posts,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error ://",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const postfound = await Post.findById(id);
      if (!postfound) {
        return res.status(404).json({
          msg: "Post not found :(",
        });
      }

      return res.status(200).json({
        msg: "Post found",
        postfound,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({
          msg: "Post not found :(",
        });
      }

      const deletePost = await Post.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Post deleted !!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
};
module.exports = PostController;
