const Blog = require("../Model/BlogModel");

exports.create = async (req, res) => {
  try {
    const { title, description, createdBy, createdAt, author } = req.body;
    const blog = new Blog({
      title,
      description,
      author,
      createdAt,
      createdBy,
    });
    const save = await blog.save();
    return res.status(200).json({ message: "Your Blog has been added" });
  } catch (e) {
    res
      .status(400)
      .json({ message: "Cannot be created. Something went wrong" });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    if (blog) {
      return res.status(200).json({ message: "The blog has been deleted." });
    }
  } catch (e) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    if (!blogs) {
      return res.status(400).json({ message: "There is no blog" });
    }
    return res.status(200).json(blogs);
  } catch (e) {}
};

exports.findById = async (req, res) => {
  try {
    const createdBy = req.params.id;
    const blogs = await Blog.find({ createdBy }).sort({ createdAt: -1 });
    if (!blogs) {
      return res.status(400).json({ message: "Blogs not found." });
    }
    return res.status(200).json(blogs);
  } catch (e) {
    return res.status(400).json({ message: "Something went wront" });
  }
};
