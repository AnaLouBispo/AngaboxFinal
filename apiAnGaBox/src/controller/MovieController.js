const Movie = require("../models/Movie");
const movieController = {
  create: async (req, res) => {
    const { title, description, gender, awards, img,director } = req.body;
    const movie = await Movie.create({
      title,
      description,
      gender,
      awards,
      img,
      director,
    });
    return res.status(200).json({
      msg: "Movie Posted",
      movie,
    });
  },
  getAll: async (req, res) => {
    try {
      const movies = await Movie.find();
      return res.status(200).json({
        msg: "Movies XD",
        movies,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :/",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const movieFound = await Movie.findById(id);
      if (!movieFound) {
        return res.status(404).json({
          msg: "Movie Not Found :(",
        });
      }

      return res.status(200).json({
        msg: "Movie Found XD",
        movieFound,
      });
    } catch (error) {
      console.log(error);
        return res.status(500).json({
          msg: "Error :(",
        });
      }
    },

    update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, gender, awards, img, director } = req.body;
      const movieFound = await Movie.findById(id);
      if (!movieFound) {
        return res.status(404).json({
          msg: "Movie Not Found :(",
        });
      }
      const movieUpdated = await Movie.findByIdAndUpdate(id, {
        title,
        description,
        gender,
        awards,
        img,
        director
      });
      return res.status(200).json({
        msg: "Movie Uptadated :D",
        movieUpdated,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const movieFound = await Movie.findById(id);
      if (!movieFound) {
        return res.status(404).json({
          msg: "Movie Not Found :(",
        });
      }
      await Movie.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Movie deleted",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :/",
      });
    }
  },
};
module.exports = movieController;
