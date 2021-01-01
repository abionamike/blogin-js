import Blog from "../models/blogModel.js"

export const get_blogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
}

export const get_A_blogs = async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id);
        res.json(blogs);
    } catch (error) {
        res.status(404).json({ message: 'Blog not found' });
    }
}

export const post_blogs = async (req, res) => {
    try {
        const blogs = await Blog.create(req.body);
        res.json(blogs);
    } catch (error) {
        res.status(403).json({ message: 'title and body field is required' });
    }
}

export const update_blogs = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.title = req.body.title || blog.title;
        blog.body = req.body.body || blog.body;
        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } catch (error) {
        res.status(404).json({ message: 'Blog not found' });
    }
}

export const delete_blogs = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: 'Blog not found' });
    }
}
