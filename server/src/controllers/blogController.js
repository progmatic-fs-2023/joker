import blogServices from '../services/blogServices';
import blogs from '../db/blogs.json';

const data = {
  blogs,
  setBlogs(input) {
    this.blogs = input;
  },
};

const getAllBlog = async (req, res) => {
  const posts = await blogServices.getAllPosts();
  // console.log('successful get');
  res.status(200).json(posts);
};

const blogsList = async (req, res) => {
  // TODO Bearer -> userId
  try {
    const userId = req.body?.id;
    const author = req.headers?.user;
    // console.log('Blogs userId', userId);
    // console.log('Blogs author', author);
    const reduced = {};
    if (!userId && !author) {
      const posts = await blogServices.getAllPosts();

      console.log('all posts', posts);
      res.status(200).json(posts);
    } else if (!author && userId) {
      const posts = await blogServices.getAllPostsOfUser(userId);
      reduced.id = posts[0].id;
      reduced.title = posts[0].title;
      reduced.body = posts[0].body;
      reduced.datetime = posts[0].createdAt;
      reduced.rating = posts[0].rating;
      reduced.authorFirstName = posts[0].authorUser?.firstName;
      reduced.authorLastName = posts[0].authorUser?.lastName;
      // console.log('post 2', reduced)
      res.status(200).json(reduced);
    } else if (!userId && author) {
      const posts = await blogServices.getAllPostsOfUser(author);
      reduced.id = posts[0].id;
      reduced.title = posts[0].title;
      reduced.body = posts[0].body;
      reduced.datetime = posts[0].createdAt;
      reduced.rating = posts[0].rating;
      reduced.authorFirstName = posts[0].authorUser?.firstName;
      reduced.authorLastName = posts[0].authorUser?.lastName;
      res.status(200).json(reduced);
      // console.log('post 3', reduced)
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Hiba történt a user összes rendelése lekérdezése közben.',
      details: error.message,
    });
  }
};

const newPost = async (req, res) => {
  console.log('successful post');
  const newBlog = {
    // id: crypto.randomUUID(),
    title: req.body?.title || null,
    body: req.body?.body || null,
    authorId: req.body?.authorId || null,
    // pictures: req.body?.pictures
  };
  console.log('newBlog:', newBlog);
  if (!newBlog.title || !newBlog.body || !newBlog.authorId) {
    return res.status(400).json({ 'Error message': 'More lines are required to fill out!' });
  }
  // data.setBlogs([...data.blogs, newBlog]);
  const result = await blogServices.createNewPost(newBlog);
  // console.log('newPost:', result)
  res.status(201).json(result);
  return null;
};

const updatePost = (req, res) => {
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

const deletePost = (req, res) => {
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

const getPost = async (req, res) => {
  console.log('successful get/:id', req.params.id);
  // const post = data.blogs.find(item => item.id === Number(req.params.id));
  const post = await blogServices.findPost(req.params.id);
  if (!post) {
    return res.status(400).json({ message: `Post ID ${req.body.id} not found` });
  }
  res.status(200).json({ post });
  return null;
};

export default { getAllBlog, newPost, updatePost, deletePost, getPost, blogsList };
