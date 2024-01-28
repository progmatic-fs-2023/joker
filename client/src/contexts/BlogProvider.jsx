import { createContext, useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';
import { API_URL, AUTH_URL } from '../constants';
import AlertInfo from '../components/micro/AlertInfo';

const BlogContext = createContext({});

export function BlogProvider({ children }) {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { data: allPost } = useFetch(`${API_URL}/blog`, { method: 'GET' }, location);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postPictureLink, setPostPictureLink] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(allPost);
    if (posts) {
      const filteredResults = posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase()),
      );
      setSearchResults(filteredResults.reverse());
    }
  }, [allPost, search]);

  const fetchPost = async () => {
    const response = await fetch(`${API_URL}/blog`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch update data, status: ${response.status}`);
    }
    const responseData = await response.json();
    setPosts([...responseData]);
  };

  const fileRef = useRef();

  const sendFiles = async () => {
    const formData = new FormData();
    Object.keys(fileRef.current.files).forEach((key) => {
      formData.append(fileRef.current.files.item(key).name, fileRef.current.files.item(key));
    });

    const response = await fetch(`${AUTH_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      title: postTitle,
      datetime, // not used yet :)
      body: postBody,
      pictures: postPictureLink[0] ? postPictureLink.split(', ') : [],
      authorId: auth.userId,
    };
    try {
      if (fileRef.current.files?.length > 0) {
        const fileUploadResult = await sendFiles();
        fileUploadResult.pictures.forEach((pic) => newPost.pictures.push(pic));
      }
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newPost }),
        credentials: 'include',
      };
      await fetch(`${API_URL}/blog`, fetchOptions);
      // clear all state and controlled inputs
      setPostTitle('');
      setPostBody('');
      setPostPictureLink('');
      fetchPost();
      navigate('/feed');
    } catch (err) {
      if (!err?.response) return <AlertInfo message={err} variant="danger" />;
    }
    return null;
  };

  const handleDelete = async (id) => {
    const fetchOptions = {
      method: 'DELETE',
      // TODO verify the user trough middleware
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    const response = await fetch(`${API_URL}/blog/${id}`, fetchOptions);
    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    fetchPost();
    navigate('/feed');
  };

  const blogMemo = useMemo(
    () => ({
      posts,
      setPosts,
      search,
      setSearch,
      searchResults,
      setSearchResults,
      postTitle,
      setPostTitle,
      postBody,
      setPostBody,
      postPictureLink,
      setPostPictureLink,
      handleSubmit,
      handleDelete,
      location,
      sendFiles,
      fileRef,
    }),
    [
      posts,
      setPosts,
      search,
      setSearch,
      searchResults,
      setSearchResults,
      postTitle,
      setPostTitle,
      postBody,
      setPostBody,
      postPictureLink,
      setPostPictureLink,
      handleSubmit,
      handleDelete,
      location,
      sendFiles,
      fileRef,
    ],
  );

  return <BlogContext.Provider value={blogMemo}>{children}</BlogContext.Provider>;
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BlogContext;
