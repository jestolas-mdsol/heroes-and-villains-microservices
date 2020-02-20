import axios from 'axios';

const env = process.env.NODE_ENV || app.get('env');

const baseUrl = env === 'production' ? 'http://villains-service:3011' : 'http://localhost:3011';
const villainsApiUrl = `${baseUrl}/villains`;

const villainsApi = {
  getMultiple: villainIds => {
    const requestUrl = villainIds
      ? `${villainsApiUrl}?ids=${villainIds.join('&ids=')}`
      : `${villainsApiUrl}`;

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
