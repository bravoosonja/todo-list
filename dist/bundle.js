/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  /* margin-top: 20px;\r\n  margin-right: 5px;\r\n  padding: 0 20px 10px 25px; */\r\n  width: 100%;\r\n  /* border-radius: 15px; */\r\n}\r\n.tasks-box.overflow{\r\n  overflow-y: auto;\r\n}\r\n.tasks-box::-webkit-scrollbar{\r\n  width: 5px;\r\n}\r\n.tasks-box::-webkit-scrollbar-track{\r\n  background: #f1f1f1;\r\n  border-radius: 25px;\r\n}\r\n.tasks-box::-webkit-scrollbar-thumb{\r\n  background: #e6e6e6;\r\n  border-radius: 25px;\r\n}\r\n\r\n.tasks-box .task{\r\n  list-style: none;\r\n  font-size: 17px;\r\n  margin-bottom: 18px;\r\n  padding-bottom: 16px;\r\n  align-items: flex-start;\r\n}\r\n.task-box .task:last-child{\r\n  margin-bottom: 0;\r\n  border-bottom: 0;\r\n  padding-bottom: 0;\r\n}\r\n.task-box .task label{\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.task label input{\r\n  margin-top: 7px;\r\n}\r\n.task label p{\r\n  user-select: none;\r\n  margin-left: 12px;\r\n  word-wrap: break-word;\r\n}\r\n.task label p.checked{\r\n  text-decoration: line-through;\r\n}\r\n.task-box .settings{\r\n  position: relative;\r\n}\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,0BAA0B;EAC1B,+BAA+B;EAC/B,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,kCAAkC;EAClC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gCAAgC;EAChC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,UAAU;CACX,iDAAiD;AAClD;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,yDAAyD;EACzD,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,2BAA2B;;AAE7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;AAC7B;;;AAGA;EACE,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,qDAAqD;EACrD,WAAW;EACX,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;;8BAE4B;EAC5B,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,kBAAkB;AACpB;;;AAGA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,UAAU;EACV,SAAS;EACT,uCAAuC;EACvC,UAAU;EACV,gBAAgB;EAChB,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,sEAAsE;EACtE,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iDAAiD;AACnD","sourcesContent":["\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  /* margin-top: 20px;\r\n  margin-right: 5px;\r\n  padding: 0 20px 10px 25px; */\r\n  width: 100%;\r\n  /* border-radius: 15px; */\r\n}\r\n.tasks-box.overflow{\r\n  overflow-y: auto;\r\n}\r\n.tasks-box::-webkit-scrollbar{\r\n  width: 5px;\r\n}\r\n.tasks-box::-webkit-scrollbar-track{\r\n  background: #f1f1f1;\r\n  border-radius: 25px;\r\n}\r\n.tasks-box::-webkit-scrollbar-thumb{\r\n  background: #e6e6e6;\r\n  border-radius: 25px;\r\n}\r\n\r\n.tasks-box .task{\r\n  list-style: none;\r\n  font-size: 17px;\r\n  margin-bottom: 18px;\r\n  padding-bottom: 16px;\r\n  align-items: flex-start;\r\n}\r\n.task-box .task:last-child{\r\n  margin-bottom: 0;\r\n  border-bottom: 0;\r\n  padding-bottom: 0;\r\n}\r\n.task-box .task label{\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.task label input{\r\n  margin-top: 7px;\r\n}\r\n.task label p{\r\n  user-select: none;\r\n  margin-left: 12px;\r\n  word-wrap: break-word;\r\n}\r\n.task label p.checked{\r\n  text-decoration: line-through;\r\n}\r\n.task-box .settings{\r\n  position: relative;\r\n}\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
class UI {
  static loadHomepage() {
    UI.createHtmlElement();
    UI.render();
  }

  static createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.setAttribute('id', id);
    if (arrayClasses) {
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
    }

    if (content) element.innerText = content;

    return element;
  }

  static render(filters) {

  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



document.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);

const filters = document.querySelectorAll('.tasks-filters span');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    document.querySelector('span.active').classList.remove('active');
    filter.classList.add('active');
    showTodo(filter.id);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNDO0FBQ3RCO0FBQ0EsOENBQThDLHdEQUFlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogIzAwOTY4ODtcXHJcXG4gIC0tY29sb3ItMjogI2IyZGZkYjtcXHJcXG4gIC0tY29sb3ItMzogIzY0ZmZkYTtcXHJcXG4gIC0tY29sb3ItNDogIzAwYmZhNTtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcXHJcXG4gIC0tYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOjEuNXZoO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQsIC5oZWFkZXIsIC5wcm9qZWN0c3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDN2aDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgLTRweCA5cHggMjVweCAtNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicHJvamVjdHMtY29udGFpbmVyIHRhc2tzLWNvbnRhaW5lclxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHByb2plY3RzLWNvbnRhaW5lcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1uYW1lIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsIC50YXNrcy1jb250YWluZXJ7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgLyogZ2FwOiAxcmVtOyAqL1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7IFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcj5oMSwgLnRhc2tzLWNvbnRhaW5lcj5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAydmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVye1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcy1jb250YWluZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1pbnB1dCwgLnByb2plY3QtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycywgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJze1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW57XFxyXFxuICAvKiBtYXJnaW46IDAgMXJlbTsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW46Zmlyc3QtY2hpbGR7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3Bhbi5hY3RpdmV7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1ib3h7XFxyXFxuICAvKiBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHggMTBweCAyNXB4OyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xcclxcbn1cXHJcXG4udGFza3MtYm94Lm92ZXJmbG93e1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLnRhc2tzLWJveDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG4udGFza3MtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG4udGFza3MtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtYm94IC50YXNre1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4udGFzay1ib3ggLnRhc2s6bGFzdC1jaGlsZHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxufVxcclxcbi50YXNrLWJveCAudGFzayBsYWJlbHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLnRhc2sgbGFiZWwgaW5wdXR7XFxyXFxuICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxufVxcclxcbi50YXNrIGxhYmVsIHB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4udGFzayBsYWJlbCBwLmNoZWNrZWR7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2stYm94IC5zZXR0aW5nc3tcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXQsIGxhYmVsLCBvcHRpb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXXtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgcGFkZGluZzogN3B4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jb2xvci0zKSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXN7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyAgXFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItMiksdmFyKC0tY29sb3ItNCkpO1xcclxcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7Q0FDWCxpREFBaUQ7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5REFBeUQ7RUFDekQsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QiwyQkFBMkI7O0FBRTdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTs7OEJBRTRCO0VBQzVCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsU0FBUztFQUNULHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzRUFBc0U7RUFDdEUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci0xOiAjMDA5Njg4O1xcclxcbiAgLS1jb2xvci0yOiAjYjJkZmRiO1xcclxcbiAgLS1jb2xvci0zOiAjNjRmZmRhO1xcclxcbiAgLS1jb2xvci00OiAjMDBiZmE1O1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7XFxyXFxuICAtLWRhcmstYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xcclxcbiAgLS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6MS41dmg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCwgLmhlYWRlciwgLnByb2plY3Rze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAtNHB4IDlweCAyNXB4IC02cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJwcm9qZWN0cy1jb250YWluZXIgdGFza3MtY29udGFpbmVyXFxcIjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXHJcXG4gIGdyaWQtYXJlYTogcHJvamVjdHMtY29udGFpbmVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LW5hbWUge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciwgLnRhc2tzLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogODV2aDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICAvKiBnYXA6IDFyZW07ICovXFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyPmgxLCAudGFza3MtY29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzLWNvbnRhaW5lcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWlucHV0LCAucHJvamVjdC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOjFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzLCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnN7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbntcXHJcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbjpmaXJzdC1jaGlsZHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycyBzcGFuLmFjdGl2ZXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWJveHtcXHJcXG4gIC8qIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDI1cHg7ICovXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDE1cHg7ICovXFxyXFxufVxcclxcbi50YXNrcy1ib3gub3ZlcmZsb3d7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4udGFza3MtYm94Ojotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcbi50YXNrcy1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcbi50YXNrcy1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1ib3ggLnRhc2t7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi50YXNrLWJveCAudGFzazpsYXN0LWNoaWxke1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuLnRhc2stYm94IC50YXNrIGxhYmVse1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4udGFzayBsYWJlbCBpbnB1dHtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuLnRhc2sgbGFiZWwgcHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi50YXNrIGxhYmVsIHAuY2hlY2tlZHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4udGFzay1ib3ggLnNldHRpbmdze1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dCwgbGFiZWwsIG9wdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCdde1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTMpO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBwYWRkaW5nOiA3cHggMDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNvbG9yLTMpIDAuMnM7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1c3tcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7ICBcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jb2xvci0yKSx2YXIoLS1jb2xvci00KSk7XFxyXFxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCdde1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKSB7XHJcbiAgICBVSS5jcmVhdGVIdG1sRWxlbWVudCgpO1xyXG4gICAgVUkucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBpZiAoaWQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGlmIChhcnJheUNsYXNzZXMpIHtcclxuICAgICAgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXIoZmlsdGVycykge1xyXG5cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKTtcclxuXHJcbmNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3MtZmlsdGVycyBzcGFuJyk7XHJcblxyXG5maWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gIGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBzaG93VG9kbyhmaWx0ZXIuaWQpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9