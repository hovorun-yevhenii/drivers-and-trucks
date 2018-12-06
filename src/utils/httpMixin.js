import axios from './axiosInstance';

// drivers --- https://api.myjson.com/bins/mmcba
// trucks --- https://api.myjson.com/bins/bwrwu

export default {
  methods: {
    apiRequest (opts) {
      return axios[opts.method || 'get'](opts.url)
        .then(resp => resp)
        .catch(error => error)
    }
  }
}
