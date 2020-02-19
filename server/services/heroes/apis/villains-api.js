import axios from 'axios';

// ideally, this baseUrl variable would either be localhost/staging/production host names.
const baseUrl = `localhost:${process.env.NODE_ENV === 'development' ? '3011' : '3012'}`;
const villainsApiUrl = `${baseUrl}/villains`;

const villainsApi = {
  getAll: () => (
    axios({
      method: 'get',
      url: `${villainsApiUrl}`,
      // headers: CORS/bearer tokens, etc...
    })
  ),
  get: villainId => (
    axios({
      method: 'get',
      url: `${villainsApiUrl}/${villainId}`,
      // headers: CORS/bearer tokens, etc...
    })
  ),
};

export default villainsApi;
