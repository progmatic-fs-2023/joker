import searchServices from '../services/searchServices';

const search = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Kérlek, adj meg egy keresési kifejezést.' });
    }

    const results = await searchServices.searchPostsAndFeedbacks(query);

    return res.json(results);
  } catch (error) {
    console.error('Hiba történt a keresés során:', error);
    return res.status(500).json({ error: 'Hiba történt a szerveren.' });
  }
};

const getSuggestions = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Kérlek, adj meg egy keresési kifejezést.' });
    }

    const suggestions = await searchServices.getSuggestions(query);

    return res.json(suggestions);
  } catch (error) {
    console.error('Hiba történt az ajánlások lekérése közben:', error);
    return res.status(500).json({ error: 'Hiba történt a szerveren.' });
  }
};

export default { search, getSuggestions };
