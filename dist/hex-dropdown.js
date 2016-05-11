(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hexDropdown = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var HexDropdown = _dereq_('./components/HexDropdown.vue');
module.exports  = HexDropdown;

},{"./components/HexDropdown.vue":2}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: Boolean,
    autoActive: Boolean,
    autoActiveWidth: {
      type: Number,
      default: 960
    },
    effect: String,

    label: {
      type: String,
      required: true
    }
  },

  created: function created() {
    if (this.autoActive && window.innerWidth >= this.autoActiveWidth) {
      this.active = true;
    }
  },


  methods: {
    toggleDropdown: function toggleDropdown() {
      this.active = !this.active;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"dropdown\">\n  <button @click=\"toggleDropdown\" class=\"dropdown-toggle\">{{ label }}</button>\n  <div v-show=\"active\" :transition=\"effect\" class=\"dropdown-panel\">\n    <slot></slot>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-dropdown/src/components/HexDropdown.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}]},{},[1])(1)
});