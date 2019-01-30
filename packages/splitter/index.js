import Splitter from './src/main';

/* istanbul ignore next */
Splitter.install = function(Vue) {
  Vue.component(Splitter.name, Splitter);
};

export default Splitter;