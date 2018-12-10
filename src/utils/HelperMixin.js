import axios from './axiosInstance';

// drivers --- https://api.myjson.com/bins/mmcba
// trucks --- https://api.myjson.com/bins/bwrwu

export default {
  methods: {
    apiRequest (opts) {
      return axios[opts.payload ? 'put' : 'get'](opts.url, { body: opts.payload })
        .then(resp => resp)
        .catch(error => error);
    },
    hideSideBar () {
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
      document.body.style.overflow = 'hidden';
    },
    restoreSideBar () {
      document.body.style.paddingRight = 'initial';
      document.body.style.overflow = 'visible';
    },
    findMinUniqueId (list) {
      for (let i = 1; ; i++) {
        const index = list.findIndex(item => item.id === i);

        if (index < 0) return i;
      }
    }
  }
}
