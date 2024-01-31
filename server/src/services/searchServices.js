import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const searchPostsAndFeedbacks = async query => {
  try {
    const herbs = await prisma.herb.findMany({
      where: {
        OR: [
          { herbName: { contains: query, mode: 'insensitive' } },
          { details: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        feedbacks: true,
      },
    });
    const feedbacks = await prisma.feedback.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { body: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        targetHerb: true,
      },
    });
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { body: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    return { posts, feedbacks, herbs };
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const getSuggestions = async query => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { body: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    const feedbacks = await prisma.feedback.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { body: { contains: query, mode: 'insensitive' } },
        ],
        NOT: {
          targetHerb: {
            details: {
              contains: query,
              mode: 'insensitive',
            },
          },
        },
      },
      include: {
        targetHerb: true,
      },
    });

    const herbs = await prisma.herb.findMany({
      where: {
        OR: [
          { herbName: { contains: query, mode: 'insensitive' } },
          { details: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    const suggestions = [
      ...(posts.length > 0 ? [{ text: 'Posztok', type: 'category' }] : []),
      ...posts.map(post => ({ text: post.title, type: 'post', id: post.id })),
      ...(feedbacks.length > 0 ? [{ text: 'Visszajelzések', type: 'category' }] : []),
      ...feedbacks.map(feedback => ({
        text: feedback.targetHerb.herbName,
        type: 'feedback',
        id: feedback.targetHerb.id,
      })),
      ...(herbs.length > 0 ? [{ text: 'Gyógynövények', type: 'category' }] : []),
      ...herbs.map(herb => ({ text: herb.herbName, type: 'herb', id: herb.id })),
    ];

    return suggestions;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

export default { searchPostsAndFeedbacks, getSuggestions };
