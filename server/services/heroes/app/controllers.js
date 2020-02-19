import heroesData from './data';
import { getEncounteredVillain } from '@utils/villains';

const heroesController = {
  getAll: (req, res) => {
    // realistically, this would be paginated when queried from a database.
    // const encounteredVillainIds = heroesData.reduce((acc, hero, idx) => {
    //
    // }, {});

    return heroesData;
  },
  get: (req, res) => {
    const result = heroesData.find((hero) => hero.id === parseInt(req.params.id, 10));

    return result;
  },
};

export default heroesController;
