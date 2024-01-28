import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllPosts = async () => {
  try {
    const result = await prisma.post.findMany();
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
  return null;
};

const createNewPost = async newPost => {
  try {
    const result = await prisma.post.create({
      data: {
        title: newPost.title,
        body: newPost.body,
        pictures: newPost.pictures,
        authorID: newPost.authorId,
      },
    });
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
  return null;
};

const getAllPostsOfUser = async authorID => {
  // TODO remove this below
  try {
    const posts = await prisma.post.findMany({
      where: { authorID },
      include: {
        authorUser: true,
        likedByUser: true,
      },
    });
    return posts;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getAllPostsOfUser finished');
  }
  return null;
};

const findPost = async id => {
  // TODO remove this below
  try {
    const post = await prisma.post.findMany({
      where: { id },
      include: {
        authorUser: true,
        likedByUser: true,
      },
    });
    return post;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma findPost finished');
  }
  return null;
};

const readPost = async id => {
  // TODO remove this below
  try {
    const post = await prisma.post.findMany({
      where: { id },
      include: {
        likedByUser: true,
      },
    });
    return post;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma readPost finished');
  }
  return null;
};

const deletePostById = async id => {
  // TODO remove this below
  try {
    const post = await prisma.post.delete({
      where: { id },
    });
    return post;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma deletePost finished');
  }
  return null;
};

export default {
  getAllPosts,
  getAllPostsOfUser,
  createNewPost,
  findPost,
  readPost,
  deletePostById,
};
