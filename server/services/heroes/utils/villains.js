export const villainIdsMap = heroesData => heroesData.reduce((acc, { encounteredVillainIds }) => {
  const currentObject = acc;

  encounteredVillainIds.forEach((villainId) => {
    if (!currentObject[villainId]) {
      currentObject[villainId] = 1;
    } else {
      currentObject[villainId] += 1;
    }
  })

  return currentObject
}, {});
