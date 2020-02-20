import villainsData from './data';

const villainsController = {
  getAll: (req, res) => {
    // realistically, this would be paginated when queried from a database.
    return villainsData;
  },
  getMultiple: (req, res) => {
    if (!req.query.ids) {
      return [];
    }

    const villains = req.query.ids.map(id => {
      return villainsData.find(villain => villain.id === parseInt(id, 10))
    });

    return villains;
  },
  get: (req, res) => {
    const result = villainsData.find((villain) => villain.id === parseInt(req.params.id, 10));

    return result;
  },
};

export default villainsController;
