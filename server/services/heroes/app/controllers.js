import heroesData from './data';
import villainsApi from '@apis/villains-api';
import { villainIdsMap } from '@utils/villains';

const heroesController = {
  getMultiple: (req, res) => {
    const encounteredVillainIdsMap = villainIdsMap(heroesData);

    villainsApi.getMultiple(Object.keys(encounteredVillainIdsMap)).then(({ data }) => {
      const heroes = heroesData.map((hero) => {
        const { encounteredVillainIds } = hero;

        const heroObj = hero
        heroObj['encounteredVillains'] = encounteredVillainIds.map(vId => data.villains.find(villain => villain.id === vId));

        return heroObj;
      });

      res.json({ heroes });
    }).catch(e => { console.log('API Error: ', e) });
  },
  get: (req, res) => {
    const result = heroesData.find((hero) => hero.id === parseInt(req.params.id, 10));

    return result;
  },
};

export default heroesController;
