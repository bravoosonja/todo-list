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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  width: 100%;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  margin: 0.2rem;\r\n  font-weight: 500;\r\n  width: 100%;\r\n}\r\n\r\n.todo-item-buttons{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  width: 10%;\r\n}\r\n\r\n#taskTitle{\r\n  user-select: none;\r\n  word-wrap: break-word;\r\n}\r\n#taskTitle.checked{\r\n  text-decoration: line-through;\r\n}\r\n\r\n.priority{\r\n  text-align: right;\r\n  color: var(--color-4);\r\n}\r\n\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.btn {\r\n  background-color: rgba(51, 51, 51, 0.05);\r\n  border-radius: 8px;\r\n  border-width: 0;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 10px 12px;\r\n  text-align: center;\r\n  transition: all 200ms;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.check {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 3px solid #333;\r\n  border-radius: 50%;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.check::before {\r\n  content: '✓';\r\n  font-size: 20px;\r\n  display: none;\r\n}\r\n\r\n.done .check::before {\r\n  display: inline;\r\n  text-decoration: line-through 2px solid var(--color-1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  width: 100%;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  margin: 0.2rem;\r\n  font-weight: 500;\r\n  width: 100%;\r\n}\r\n\r\n.todo-item-buttons{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  width: 10%;\r\n}\r\n\r\n#taskTitle{\r\n  user-select: none;\r\n  word-wrap: break-word;\r\n}\r\n#taskTitle.checked{\r\n  text-decoration: line-through;\r\n}\r\n\r\n.priority{\r\n  text-align: right;\r\n  color: var(--color-4);\r\n}\r\n\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.btn {\r\n  background-color: rgba(51, 51, 51, 0.05);\r\n  border-radius: 8px;\r\n  border-width: 0;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 10px 12px;\r\n  text-align: center;\r\n  transition: all 200ms;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.check {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 3px solid #333;\r\n  border-radius: 50%;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.check::before {\r\n  content: '✓';\r\n  font-size: 20px;\r\n  display: none;\r\n}\r\n\r\n.done .check::before {\r\n  display: inline;\r\n  text-decoration: line-through 2px solid var(--color-1);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set isChecked(value) {
    if (!value || value == null) this.isChecked = 'false';
    else this.isChecked = value;
  }

  get isChecked() {
    return this.itemIsChecked;
  }

  set id(newId) {
    if (!newId) this.id = Date.now();
    else this.id = newId;
  }

  static dateFormatted() {
    const day = this.dueDate.split('/')[0];
    const month = this.dueDate.split('/')[1];
    const year = this.dueDate.split('/')[2];
    return `${day}/${month}/${year}`;
  }
}


/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskController)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");

// import Project from './projects';

class TaskController {
  constructor(todoArr) {
    this.todoArr = todoArr;
  }

  static toggleDone(key) {
    const index = this.todoArr.findIndex((item) => item.id === Number(key));
    this.todoArr[index].checked = !this.todoArr[index].checked;
    TaskController.renderTask(this.todoArr[index]);
  }

  static markDone() {
    const todoList = document.querySelector('#todo-list');
    todoList.addEventListener('click', (event) => {
      if (event.target.classList.contains('check')) {
        const itemKey = event.target.parentElement.dataset.key;
        TaskController.toggleDone(itemKey);
      }
    });
  }

  static renderTask(taskItem) {
    const todoList = document.querySelector('#todo-list');
    const isChecked = taskItem.isChecked ? 'done' : '';
    const taskNode = document.createElement('li');
    taskNode.setAttribute('class', 'todo-item');
    taskNode.setAttribute('class', `todo-item${isChecked}`);
    taskNode.setAttribute('data-key', taskItem.id);
    taskNode.innerHTML = `
        <input id="${taskItem.id} type="checkbox" class="check"/>
        <span>${taskItem.name}</span>
        <span class="priority">${taskItem.priority}</span>
        <div class="todo-item-buttons">
        <button class="btn" id="btn-edit">
         <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn" id="btn-delete">
         <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
    todoList.append(taskNode);
    TaskController.markDone();
  }

  static addTask() {
    const name = document.querySelector('#task-name').value;
    const dueDate = document.querySelector('#task-due-date').value;
    const priority = document.querySelector('#task-priority').value;
    const isChecked = false;

    const newItem = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name, dueDate, priority, isChecked);

    let todoArr = [];
    const todo = localStorage.getItem('todo');
    if (todo === null) {
      todoArr = [];
    } else { todoArr = JSON.parse(todo); }

    todoArr.push(newItem);
    TaskController.renderTask(newItem);
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
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");



function initAddTask() {
  const taskSubmitButton = document.querySelector('#task-submit');
  taskSubmitButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    _taskController__WEBPACK_IMPORTED_MODULE_1__["default"].addTask();
  });
}

document.addEventListener('DOMContentLoaded', initAddTask);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBc0I7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogIzAwOTY4ODtcXHJcXG4gIC0tY29sb3ItMjogI2IyZGZkYjtcXHJcXG4gIC0tY29sb3ItMzogIzY0ZmZkYTtcXHJcXG4gIC0tY29sb3ItNDogIzAwYmZhNTtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcXHJcXG4gIC0tYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOjEuNXZoO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQsIC5oZWFkZXIsIC5wcm9qZWN0c3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDN2aDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgLTRweCA5cHggMjVweCAtNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicHJvamVjdHMtY29udGFpbmVyIHRhc2tzLWNvbnRhaW5lclxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHByb2plY3RzLWNvbnRhaW5lcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1uYW1lIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsIC50YXNrcy1jb250YWluZXJ7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgLyogZ2FwOiAxcmVtOyAqL1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7IFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcj5oMSwgLnRhc2tzLWNvbnRhaW5lcj5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAydmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVye1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcy1jb250YWluZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1pbnB1dCwgLnByb2plY3QtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycywgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJze1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW57XFxyXFxuICAvKiBtYXJnaW46IDAgMXJlbTsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW46Zmlyc3QtY2hpbGR7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3Bhbi5hY3RpdmV7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1ib3h7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0tYnV0dG9uc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tUaXRsZXtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4jdGFza1RpdGxlLmNoZWNrZWR7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5e1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmlucHV0LCBsYWJlbCwgb3B0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItMyk7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIHBhZGRpbmc6IDdweCAwO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY29sb3ItMykgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3Vze1xcclxcbiAgcGFkZGluZy1ib3R0b206IDZweDsgIFxcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNvbG9yLTIpLHZhcigtLWNvbG9yLTQpKTtcXHJcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J117XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuMDUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ+Kckyc7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuY2hlY2s6OmJlZm9yZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAycHggc29saWQgdmFyKC0tY29sb3ItMSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtDQUNYLGlEQUFpRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDJCQUEyQjs7QUFFN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOzs7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsU0FBUztFQUNULHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzRUFBc0U7RUFDdEUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzREFBc0Q7QUFDeERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci0xOiAjMDA5Njg4O1xcclxcbiAgLS1jb2xvci0yOiAjYjJkZmRiO1xcclxcbiAgLS1jb2xvci0zOiAjNjRmZmRhO1xcclxcbiAgLS1jb2xvci00OiAjMDBiZmE1O1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7XFxyXFxuICAtLWRhcmstYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xcclxcbiAgLS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6MS41dmg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCwgLmhlYWRlciwgLnByb2plY3Rze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAtNHB4IDlweCAyNXB4IC02cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJwcm9qZWN0cy1jb250YWluZXIgdGFza3MtY29udGFpbmVyXFxcIjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXHJcXG4gIGdyaWQtYXJlYTogcHJvamVjdHMtY29udGFpbmVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LW5hbWUge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciwgLnRhc2tzLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogODV2aDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICAvKiBnYXA6IDFyZW07ICovXFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyPmgxLCAudGFza3MtY29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzLWNvbnRhaW5lcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWlucHV0LCAucHJvamVjdC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOjFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzLCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnN7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbntcXHJcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbjpmaXJzdC1jaGlsZHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycyBzcGFuLmFjdGl2ZXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWJveHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1idXR0b25ze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza1RpdGxle1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbiN0YXNrVGl0bGUuY2hlY2tlZHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHl7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW5wdXQsIGxhYmVsLCBvcHRpb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXXtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgcGFkZGluZzogN3B4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jb2xvci0zKSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXN7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyAgXFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItMiksdmFyKC0tY29sb3ItNCkpO1xcclxcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC4wNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2s6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAn4pyTJztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kb25lIC5jaGVjazo6YmVmb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIDJweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0IGlzQ2hlY2tlZCh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT0gbnVsbCkgdGhpcy5pc0NoZWNrZWQgPSAnZmFsc2UnO1xuICAgIGVsc2UgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBpc0NoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUlzQ2hlY2tlZDtcbiAgfVxuXG4gIHNldCBpZChuZXdJZCkge1xuICAgIGlmICghbmV3SWQpIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIGVsc2UgdGhpcy5pZCA9IG5ld0lkO1xuICB9XG5cbiAgc3RhdGljIGRhdGVGb3JtYXR0ZWQoKSB7XG4gICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMF07XG4gICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVsxXTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMl07XG4gICAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbi8vIGltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHRvZG9BcnIpIHtcclxuICAgIHRoaXMudG9kb0FyciA9IHRvZG9BcnI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9nZ2xlRG9uZShrZXkpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2RvQXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGtleSkpO1xyXG4gICAgdGhpcy50b2RvQXJyW2luZGV4XS5jaGVja2VkID0gIXRoaXMudG9kb0FycltpbmRleF0uY2hlY2tlZDtcclxuICAgIFRhc2tDb250cm9sbGVyLnJlbmRlclRhc2sodGhpcy50b2RvQXJyW2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWFya0RvbmUoKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcclxuICAgIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUtleSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQua2V5O1xyXG4gICAgICAgIFRhc2tDb250cm9sbGVyLnRvZ2dsZURvbmUoaXRlbUtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclRhc2sodGFza0l0ZW0pIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xyXG4gICAgY29uc3QgaXNDaGVja2VkID0gdGFza0l0ZW0uaXNDaGVja2VkID8gJ2RvbmUnIDogJyc7XHJcbiAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0YXNrTm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8taXRlbScpO1xyXG4gICAgdGFza05vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvLWl0ZW0ke2lzQ2hlY2tlZH1gKTtcclxuICAgIHRhc2tOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCB0YXNrSXRlbS5pZCk7XHJcbiAgICB0YXNrTm9kZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IGlkPVwiJHt0YXNrSXRlbS5pZH0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiLz5cclxuICAgICAgICA8c3Bhbj4ke3Rhc2tJdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJpb3JpdHlcIj4ke3Rhc2tJdGVtLnByaW9yaXR5fTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1pdGVtLWJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJidG4tZWRpdFwiPlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwiYnRuLWRlbGV0ZVwiPlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB0b2RvTGlzdC5hcHBlbmQodGFza05vZGUpO1xyXG4gICAgVGFza0NvbnRyb2xsZXIubWFya0RvbmUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrKCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZScpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpLnZhbHVlO1xyXG4gICAgY29uc3QgaXNDaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgbmV3SXRlbSA9IG5ldyBUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NoZWNrZWQpO1xyXG5cclxuICAgIGxldCB0b2RvQXJyID0gW107XHJcbiAgICBjb25zdCB0b2RvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKTtcclxuICAgIGlmICh0b2RvID09PSBudWxsKSB7XHJcbiAgICAgIHRvZG9BcnIgPSBbXTtcclxuICAgIH0gZWxzZSB7IHRvZG9BcnIgPSBKU09OLnBhcnNlKHRvZG8pOyB9XHJcblxyXG4gICAgdG9kb0Fyci5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgVGFza0NvbnRyb2xsZXIucmVuZGVyVGFzayhuZXdJdGVtKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVGFza0NvbnRyb2xsZXIgZnJvbSAnLi90YXNrQ29udHJvbGxlcic7XHJcblxyXG5mdW5jdGlvbiBpbml0QWRkVGFzaygpIHtcclxuICBjb25zdCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stc3VibWl0Jyk7XHJcbiAgdGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVGFza0NvbnRyb2xsZXIuYWRkVGFzaygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdEFkZFRhc2spO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=