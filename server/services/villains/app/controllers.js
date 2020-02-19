import villainsData from './data';

const villainsController = {
  getAll: (req, res) => {
    // realistically, this would be paginated when queried from a database.
    return villainsData;
  },
  get: (req, res) => {
    const result = villainsData.find((villain) => villain.id === parseInt(req.params.id, 10));

    return result;
  },
};

export default villainsController;
