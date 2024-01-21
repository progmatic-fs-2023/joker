import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllPosts = async () => {
  try {
    const result = await prisma.post.findMany();
    console.log(result);
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

export default { getAllPosts, getAllPostsOfUser, createNewPost, findPost };
