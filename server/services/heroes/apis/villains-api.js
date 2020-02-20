import axios from 'axios';

// ideally, this baseUrl variable would either be localhost/staging/production host names.
// const baseUrl = `localhost:${process.env.NODE_ENV === 'development' ? '3011' : '3012'}`;
const baseUrl = 'http://localhost:3011';
const villainsApiUrl = `${baseUrl}/villains`;

const villainsApi = {
  getMultiple: villainIds => {
    const requestUrl = villainIds
      ? `${villainsApiUrl}?ids=${villainIds.join('&ids=')}`
      : `${villainsApiUrl}`;

    console.log('request url: ', requestUrl);

    return axios({
      method: 'get',
      url: requestUrl,
      // headers: CORS/bearer tokens, etc...
    })
  },
  get: villainId => (
    axios({
      method: 'get',
      url: `${villainsApiUrl}/${villainId}`,
      // headers: CORS/bearer tokens, etc...
    })
  ),
};

export default villainsApi;
