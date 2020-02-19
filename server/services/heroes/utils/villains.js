import villainsApi from '@apis/villains-api';

export const getEncounteredVillain = (villainId) => {
  if (!villainId) {
    return;
  }
j
  villainsApi.get(villainId).then(({ data }) => {
    console.log('response data: ', data);
  })
};
