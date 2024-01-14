import crypto from 'node:crypto';
import blogs from '../db/blogs.json';

const data = {
  blogs,
  setBlogs(input) {
    this.blogs = input;
  },
};

const getAllBlogs = (req, res) => {
  console.log('successful get');
  res.status(200).json(data.blogs);
};

const createNewBlog = (req, res) => {
  console.log('successful post');
  const newBlog = {
    // id: data.blogs[data.blogs.length -1].id + 1 || 1,
    id: crypto.randomUUID(),
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
    authorId: req.body.authorId,
  };
  console.log('newBlog:', newBlog);
  if (!newBlog.title || !newBlog.snippet || !newBlog.body) {
    return res.status(400).json({ 'Error message': 'More lines are required to fill out!' });
  }
  data.setBlogs([...data.blogs, newBlog]);
  res.status(201).json(newBlog);
  return null;
};

const updateBlog = (req, res) => {
  console.log('successful put');
  const blog = data.blogs.find(item => item.id === Number(req.body.id));
  if (!blog) {
    return res.status(400).json({ message: `Blog ID ${req.body.id} not found` });
  }
  if (req.body.title) blog.title = req.body.title;
  if (req.body.snippet) blog.snippet = req.body.snippet;
  if (req.body.body) blog.body = req.body.body;
  const filteredArray = data.blogs.filter(item => item.id !== Number(req.body.id));
  const unsortedArray = [...filteredArray, blog];
  // data.setBlogs(unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)));
  // TODO fix linter error
  data.setBlogs(
    unsortedArray.sort((a, b) => {
      let result;
      if (a.id > b.id) {
        result = 1;
      } else if (a.id < b.id) {
        result = -1;
      } else {
        result = 0;
      }
      return result;
    }),
  );
  res.status(201).json(data.blogs);
  return null;
};

const deleteBlog = (req, res) => {
  console.log('successful delete', req.body.id);
  const blog = data.blogs.find(item => item.id === Number(req.body.id));
  if (!blog) {
    return res.status(400).json({ message: `Blog ID ${req.body.id} not found` });
  }
  const filteredArray = data.blogs.filter(item => item.id !== Number(req.body.id));
  data.setBlogs([...filteredArray]);
  res.status(204).json(blog);
  return null;
};

const getBlog = (req, res) => {
  console.log('successful get/:id', req.params.id);
  const blog = data.blogs.find(item => item.id === Number(req.params.id));
  if (!blog) {
    return res.status(400).json({ message: `Blog ID ${req.body.id} not found` });
  }
  res.status(200).json({ blog });
  return null;
};

export default { getAllBlogs, createNewBlog, updateBlog, deleteBlog, getBlog };
