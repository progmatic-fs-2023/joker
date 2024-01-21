import { useContext } from 'react';
import BlogContext from '../contexts/BlogProvider';

const useBlog = () => useContext(BlogContext);

export default useBlog;
