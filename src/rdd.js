const rdd = {};

rdd.install = function(Vue, options) {
  Vue.prototype.$isDev = options.isDev;
};

export default rdd;
