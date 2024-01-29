import herbsServices from '../services/herbsServices';

const herbsList = async (req, res) => {
  try {
    const response = await herbsServices.getAllHerbs();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a gyógynövények listázásakor.' });
  }
};

const newHerb = async (req, res) => {
  console.log('request newHerb', req.body);
  try {
    const newHerbObject = { ...req.body };
    if (
      !newHerbObject.herbName ||
      !newHerbObject.price ||
      !newHerbObject.stockQuantity ||
      !newHerbObject.details
    ) {
      return res.status(400).json({ 'Error message': 'Invalid form data, try again!' });
    }
    const result = await herbsServices.createNewHerb(newHerbObject);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a gyógynövény létrehozása közben.' });
  }
  return null;
};

const herbUpdate = async (req, res) => {
  try {
    const updateObject = { ...req.body };
    console.log('herb body ok!', updateObject);
    const herbID = req.params.id;
    const response = await herbsServices.updateHerbByID(herbID, updateObject);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a gyógynövény adatai frissítése közben.' });
  }
};

const deleteHerb = async (req, res) => {
  try {
    const herbID = req.params.id;
    const response = await herbsServices.removeHerbByID(herbID);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a gyógynövény törlése közben.' });
  }
};

const herb = async (req, res) => {
  try {
    const herbID = req.params.id;
    const response = await herbsServices.getHerbByID(herbID);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a gyógynövény lekérdezésekor.' });
  }
};

const feedback = async (req, res) => {
  const { title, body, rating } = req.body;
  const authorID = req.headers.user;
  const herbID = req.params.id;
  try {
    const newFeedback = await herbsServices.createFeedback(title, body, authorID, herbID, rating);
    if (newFeedback) {
      const updatedHerb = await herbsServices.updateHerbRating(herbID, rating);
      res.status(201).json({ feedback: newFeedback, updatedHerb });
    }
  } catch (error) {
    res.status(500).json({ error: 'Hiba az értékelés mentésekor.' });
  }
};

const feedbackByHerb = async (req, res) => {
  try {
    const { id } = req.params;
    const feedbackById = await herbsServices.getFeedbackByHerbID(id);
    res.status(200).json(feedbackById);
  } catch (error) {
    res.status(500).json({ error: 'Hiba a visszajelzések lekérdezésekor.' });
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;
    const userId = req.headers.user;

    await herbsServices.deleteFeedback(feedbackId, userId);
    res.status(200).json({ message: 'Értékelés sikeresen törölve.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;
    const userId = req.headers.user;
    const { title, body, rating } = req.body;

    const updatedFeedback = await herbsServices.editFeedback(feedbackId, userId, {
      title,
      body,
      rating,
    });
    res.status(200).json(updatedFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  herbsList,
  herb,
  newHerb,
  feedback,
  feedbackByHerb,
  deleteFeedback,
  editFeedback,
  herbUpdate,
  deleteHerb,
};
