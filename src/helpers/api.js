import Axios from 'axios'

const URL = 'https://rocky-cove-36729.herokuapp.com';

const axios = Axios.create({
    baseURL: URL
  });

export default axios