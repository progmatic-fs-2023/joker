import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllHerbs = async () => {
  try {
    const result = await prisma.herb.findMany();

    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
};

const getHerbByID = async id => {
  try {
    const result = await prisma.herb.findFirst({
      where: {
        id,
      },
    });

    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
};

const createNewHerb = async newHerb => {
  try {
    const result = await prisma.herb.create({
      data: { ...newHerb },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
};

const updateHerbByID = async (id, updateObject) => {
  try {
    const result = await prisma.herb.update({
      where: { id },
      data: { ...updateObject },
    });
    console.log('updated herb', result);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
};

const removeHerbByID = async id => {
  try {
    await prisma.feedback.deleteMany({
      where: { herbID: id },
    });

    const result = await prisma.herb.delete({
      where: { id },
    });
    console.log('deleted herb', result);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
};

const updateHerbRating = async herbID => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      where: { herbID },
      select: { rating: true },
    });

    let averageRating = 1;

    if (feedbacks.length > 0) {
      const totalRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
      averageRating = totalRating / feedbacks.length;
    }

    await prisma.herb.update({
      where: { id: herbID },
      data: { rating: averageRating },
    });

    return averageRating;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const createFeedback = async (title, body, authorID, herbID, rating) => {
  try {
    const feedback = await prisma.feedback.create({
      data: {
        title,
        body,
        authorID,
        herbID,
        rating,
      },
    });
    await updateHerbRating(herbID);
    return feedback;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const getFeedbackByHerbID = async herbID => {
  try {
    const feedback = await prisma.feedback.findMany({
      where: {
        herbID,
      },
      include: {
        authorUser: {
          select: {
            email: true,
          },
        },
      },
    });
    return feedback;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteFeedback = async (feedbackId, userId) => {
  try {
    const feedback = await prisma.feedback.findUnique({ where: { id: feedbackId } });

    if (!feedback) {
      throw new Error('Értékelés nem található.');
    }

    if (feedback.authorID !== userId) {
      throw new Error('Nincs jogosultsága');
    }

    const deletedFeedback = await prisma.feedback.delete({ where: { id: feedbackId } });

    await updateHerbRating(feedback.herbID);

    return deletedFeedback;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const editFeedback = async (feedbackId, userId, updatedData) => {
  try {
    const feedback = await prisma.feedback.findUnique({ where: { id: feedbackId } });

    if (!feedback) {
      throw new Error('Értékelés nem található.');
    }

    if (feedback.authorID !== userId) {
      throw new Error('Nincs jogosultsága ');
    }

    const updatedFeedback = await prisma.feedback.update({
      where: { id: feedbackId },
      data: updatedData,
    });

    await updateHerbRating(feedback.herbID);

    return updatedFeedback;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  getAllHerbs,
  getHerbByID,
  removeHerbByID,
  updateHerbByID,
  createNewHerb,
  createFeedback,
  updateHerbRating,
  getFeedbackByHerbID,
  deleteFeedback,
  editFeedback,
};
