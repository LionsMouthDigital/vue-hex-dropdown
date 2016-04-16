var Vue = require('vue');

new Vue({
  el: 'body',

  components: {
    HexDropdown: require('./src/component.js'),
  },
});
