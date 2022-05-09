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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.projects-list{\r\n  display:flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.project {\r\n  font-weight: 600;\r\n  font-size: 1.5vh;\r\n  text-align: center;\r\n  background-color: var(--color-2);\r\n  padding:0.5rem;\r\n  width: 15vw;\r\n  border-radius: 15px;\r\n  color: white;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.active-project{\r\n   font-weight: 600;\r\n  font-size: 1.5vh;\r\n  text-align: center;\r\n  background-color: var(--color-4);\r\n  padding:0.5rem;\r\n  width: 15vw;\r\n  border-radius: 15px;\r\n  color: white;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  width: 100%;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  margin: 0.2rem;\r\n  font-weight: 500;\r\n  width: 100%;\r\n}\r\n\r\n.todo-item-buttons{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  width: 10%;\r\n}\r\n\r\n#taskTitle{\r\n  user-select: none;\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.priority{\r\n  text-align: right;\r\n  color: var(--color-4);\r\n}\r\n\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.btn {\r\n  background-color: rgba(51, 51, 51, 0.05);\r\n  border-radius: 8px;\r\n  border-width: 0;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 10px 12px;\r\n  text-align: center;\r\n  transition: all 200ms;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.check {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  background-color: var(--color-2);\r\n  border: 1px solid rgb(255, 255, 255);\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.check:checked {\r\n  background-color: #1dd2af;\r\n}\r\n\r\n.completed {\r\n  color: rgba(192, 192, 192, 0.8);\r\n  text-decoration: line-through;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n  --color-1: #009688;\r\n  --color-2: #b2dfdb;\r\n  --color-3: #64ffda;\r\n  --color-4: #00bfa5;\r\n  --background-color:#fafafa;\r\n  --dark-background-color:#eeeeee;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  font-family: 'Raleway', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-size:1.5vh;\r\n  font-weight: 400;\r\n  overflow: hidden;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.content, .header, .projects{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100vw;\r\n  height: 5vh;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  position: sticky;\r\n  z-index: 999;\r\n  top: -10px;\r\n box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;\r\n}\r\n\r\n.content {\r\n  padding: 3%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-areas: \"projects-container tasks-container\";\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-container{\r\n  grid-area: projects-container;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n \r\n}\r\n\r\n#project-name {\r\n  width: 70%;\r\n}\r\n\r\n.projects-container, .tasks-container{\r\n  height: 85vh;\r\n  padding: 1rem;\r\n  /* gap: 1rem; */\r\n  background: white; \r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.projects-list{\r\n  display:flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.project {\r\n  font-weight: 600;\r\n  font-size: 1.5vh;\r\n  text-align: center;\r\n  background-color: var(--color-2);\r\n  padding:0.5rem;\r\n  width: 15vw;\r\n  border-radius: 15px;\r\n  color: white;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.active-project{\r\n   font-weight: 600;\r\n  font-size: 1.5vh;\r\n  text-align: center;\r\n  background-color: var(--color-4);\r\n  padding:0.5rem;\r\n  width: 15vw;\r\n  border-radius: 15px;\r\n  color: white;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n.projects-container>h1, .tasks-container>h1 {\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.tasks-container{\r\n  grid-area: tasks-container;\r\n}\r\n\r\n.tasks-input, .project-input {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:1rem;\r\n}\r\n\r\n\r\n.tasks-filters, li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tasks-filters{\r\n  padding: 1rem;\r\n  border-bottom: 3px solid var(--dark-background-color);\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.tasks-filters span{\r\n  /* margin: 0 1rem; */\r\n  font-size: 1.5vh;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #757575;\r\n}\r\n\r\n.tasks-filters span:first-child{\r\n  margin-left: 0;\r\n}\r\n\r\n.tasks-filters span.active{\r\n  color: var(--color-4);\r\n}\r\n\r\n.tasks-box{\r\n  width: 100%;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  margin: 0.2rem;\r\n  font-weight: 500;\r\n  width: 100%;\r\n}\r\n\r\n.todo-item-buttons{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  width: 10%;\r\n}\r\n\r\n#taskTitle{\r\n  user-select: none;\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.priority{\r\n  text-align: right;\r\n  color: var(--color-4);\r\n}\r\n\r\n\r\n\r\ninput, label, option {\r\n  display: inline-block;\r\n  margin: 1.2rem;\r\n}\r\n\r\nlabel {\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='text']{\r\n  font-family: inherit;\r\n  width: 40%;\r\n  border: 0;\r\n  border-bottom: 2px solid var(--color-3);\r\n  outline: 0;\r\n  font-size: 1.5vh;\r\n  padding: 7px 0;\r\n  transition: var(--color-3) 0.2s;\r\n}\r\n\r\ninput[type='text']:focus{\r\n  padding-bottom: 6px;  \r\n  font-weight: 300;\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, var(--color-2),var(--color-4));\r\n  border-image-slice: 1;\r\n}\r\n\r\ninput[type='submit']{\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 500;\r\n  padding: 0.4rem;\r\n  border-radius: 12px;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.btn {\r\n  background-color: rgba(51, 51, 51, 0.05);\r\n  border-radius: 8px;\r\n  border-width: 0;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 10px 12px;\r\n  text-align: center;\r\n  transition: all 200ms;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.check {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  background-color: var(--color-2);\r\n  border: 1px solid rgb(255, 255, 255);\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.check:checked {\r\n  background-color: #1dd2af;\r\n}\r\n\r\n.completed {\r\n  color: rgba(192, 192, 192, 0.8);\r\n  text-decoration: line-through;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _saveAndRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveAndRender */ "./src/saveAndRender.js");
/* eslint-disable max-len */




const domController = () => {
  const deleteProjectButton = document.querySelector('#btn-delete-project');
  const tasksContainer = document.querySelector('#tasks-container');
  const projectsContainer = document.querySelector('[data-projects]');
  let projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const projectForm = document.querySelector('#project-form');
  const taskForm = document.querySelector('#task-form');
  const projectInput = document.querySelector('#project-name');
  let selectedProjectId = localStorage.getItem('task.selectedProjectId');

  const handleProject = () => {
    projectsContainer.addEventLister('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.dataset.selectedProjectId;
        _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].saveAndRender();
      }
    });
  };

  const handleTask = () => {
    tasksContainer.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') {
        const selectedProject = projects.find((project) => project.id === selectedProjectId);
        const selectedTask = selectedProject.tasks.find((task) => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].saveToLocalStorage();
        _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].renderTaskCount(selectedProject);
      }
    });
  };

  function handleDeleteProject() {
    deleteProjectButton.addEventListener('click', () => {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].saveAndRender();
    });
  }

  //
  function handleTaskInput() {
    taskForm.addEventListener('click', (e) => {
      e.preventDefault();
      const taskName = document.querySelector('#task-name').value;
      const dueDate = document.querySelector('#task-due-date').value;
      const priority = document.querySelector('#task-priority').value;
      if (taskName == null || taskName === '') return;
      const task = _task__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(taskName, dueDate, priority, false, Date.now().toString());
      console.log('handleTaskInput');
      const selectedProject = projects.find((project) => project.id === selectedProjectId);
      selectedProject.tasks.push(task);
      _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].saveAndRender();
    });
  }

  function handleProjectInput() {
    projectForm.addEventListener('click', (e) => {
      e.preventDefault();
      const projectName = projectInput.value;
      if (projectName == null || projectName === '') return;
      const project = _project__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectName);
      projectInput.value = null;
      project.push(project);
      _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"].saveAndRender();
      console.log('projectForm');
    });
  }

  return {
    handleProject,
    handleTask,
    handleDeleteProject,
    handleTaskInput,
    handleProjectInput,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ domController });


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* eslint-disable max-len */
class Project {
  constructor(name, id) {
    this.name = name;
    this.projects = [];
    this.id = id;
  }

  static createUnassigned() {
    const unassigned = new Project('Unassigned Tasks', Date.now().toString());
    this.projects.push(unassigned);
  }

  static createProject(projectName) {
    const newProject = new Project(projectName, Date.now().toString());
    this.projects.push(newProject);
    return newProject;
  }
}


/***/ }),

/***/ "./src/saveAndRender.js":
/*!******************************!*\
  !*** ./src/saveAndRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable max-len */

const modSaveAndRender = () => {
  const projects = JSON.parse(localStorage.getItem('task.projects')) || [];
  const selectedProjectId = localStorage.getItem('task.selectedProjectId');
  const tasksContainer = document.querySelector('[data-tasks]');
  const projectsContainer = document.querySelector('[data-projects]');

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const saveToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('task.projects', JSON.stringify(projects));
      localStorage.setItem('task.selectedProjectId', selectedProjectId);
    }
  };

  const renderTasks = (selectedProject) => {
    const taskTemplate = document.getElementById('task-template');

    selectedProject.tasks.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('input');
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const label = taskElement.querySelector('label');
      label.htmlFor = task.id;
      label.append(task.name);
      tasksContainer.appendChild(taskElement);
    });
  };

  const renderTaskCount = (selectedProject) => {
    const projectCountElement = document.querySelector('[data-project-count]');
    const incompleteTaskCount = selectedProject.tasks.filter((task) => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
    projectCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  };

  const renderProjects = () => {
    projects.forEach((project) => {
      const projectElement = document.createElement('li');
      projectElement.dataset.projectId = project.id;
      projectElement.classList.add('list-name');
      projectElement.innerText = project.name;
      if (project.id === selectedProjectId) {
        projectElement.classList.add('active-list');
      }
      projectsContainer.appendChild(projectElement);
    });
  };

  const render = () => {
    const projectDisplayContainer = document.querySelector('[data-project-display-container]');
    const projectTitleElement = document.querySelector('[data-project-title]');

    clearElement(projectsContainer);
    renderProjects();

    const selectedProject = projects.find((project) => undefined.project.id === undefined.selectedProjectId);
    if (undefined.selectedProjectId == null) {
      projectDisplayContainer.style.display = 'none';
    } else {
      projectDisplayContainer.style.display = '';
      projectTitleElement.innerText = selectedProject.name;
      renderTaskCount(selectedProject);
      clearElement(tasksContainer);
      renderTasks(selectedProject);
    }
  };

  const saveAndRender = () => {
    saveToLocalStorage();
    render();
  };

  return {
    saveAndRender,
    saveToLocalStorage,
    renderTaskCount,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ modSaveAndRender });


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
  constructor(name, dueDate, priority, complete, id) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.id = id;
  }

  static createTask(taskItem) {
    return new Task(taskItem);
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
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _saveAndRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveAndRender */ "./src/saveAndRender.js");




document.addEventListener('DOMContentLoaded', _domController__WEBPACK_IMPORTED_MODULE_1__["default"], _saveAndRender__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsRUFBRSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkZyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3VCO0FBQ0c7QUFDL0M7QUFDQSw4Q0FBOEMsc0RBQWEsRUFBRSxzREFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NhdmVBbmRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogIzAwOTY4ODtcXHJcXG4gIC0tY29sb3ItMjogI2IyZGZkYjtcXHJcXG4gIC0tY29sb3ItMzogIzY0ZmZkYTtcXHJcXG4gIC0tY29sb3ItNDogIzAwYmZhNTtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcXHJcXG4gIC0tYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOjEuNXZoO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQsIC5oZWFkZXIsIC5wcm9qZWN0c3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDN2aDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgLTRweCA5cHggMjVweCAtNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicHJvamVjdHMtY29udGFpbmVyIHRhc2tzLWNvbnRhaW5lclxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHByb2plY3RzLWNvbnRhaW5lcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1uYW1lIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsIC50YXNrcy1jb250YWluZXJ7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgLyogZ2FwOiAxcmVtOyAqL1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7IFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWxpc3R7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcclxcbiAgcGFkZGluZzowLjVyZW07XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1wcm9qZWN0e1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBwYWRkaW5nOjAuNXJlbTtcXHJcXG4gIHdpZHRoOiAxNXZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyPmgxLCAudGFza3MtY29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1jb250YWluZXJ7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzLWNvbnRhaW5lcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWlucHV0LCAucHJvamVjdC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOjFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzLCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnN7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbntcXHJcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3BhbjpmaXJzdC1jaGlsZHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycyBzcGFuLmFjdGl2ZXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWJveHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1idXR0b25ze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza1RpdGxle1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eXtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dCwgbGFiZWwsIG9wdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCdde1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTMpO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBwYWRkaW5nOiA3cHggMDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNvbG9yLTMpIDAuMnM7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1c3tcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7ICBcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jb2xvci0yKSx2YXIoLS1jb2xvci00KSk7XFxyXFxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCdde1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjA1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjazpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGQyYWY7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgY29sb3I6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC44KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7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RDtBQUNuRDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaURBQWlELENBQUMsMkNBQTJDO0FBQy9GOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG46cm9vdCB7XFxyXFxuICAtLWNvbG9yLTE6ICMwMDk2ODg7XFxyXFxuICAtLWNvbG9yLTI6ICNiMmRmZGI7XFxyXFxuICAtLWNvbG9yLTM6ICM2NGZmZGE7XFxyXFxuICAtLWNvbG9yLTQ6ICMwMGJmYTU7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtcXHJcXG4gIC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XFxyXFxuICAtLWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZToxLjV2aDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LCAuaGVhZGVyLCAucHJvamVjdHN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogNXZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAzdmg7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIC00cHggOXB4IDI1cHggLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMyU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInByb2plY3RzLWNvbnRhaW5lciB0YXNrcy1jb250YWluZXJcXFwiO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVye1xcclxcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cy1jb250YWluZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtbmFtZSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyLCAudGFza3MtY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIC8qIGdhcDogMXJlbTsgKi9cXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1saXN0e1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnByb2plY3Qge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXHJcXG4gIHBhZGRpbmc6MC41cmVtO1xcclxcbiAgd2lkdGg6IDE1dnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtcHJvamVjdHtcXHJcXG4gICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgcGFkZGluZzowLjVyZW07XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcj5oMSwgLnRhc2tzLWNvbnRhaW5lcj5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAydmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVye1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcy1jb250YWluZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1pbnB1dCwgLnByb2plY3QtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFza3MtZmlsdGVycywgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJze1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW57XFxyXFxuICAvKiBtYXJnaW46IDAgMXJlbTsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1maWx0ZXJzIHNwYW46Zmlyc3QtY2hpbGR7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWZpbHRlcnMgc3Bhbi5hY3RpdmV7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1ib3h7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0tYnV0dG9uc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tUaXRsZXtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHl7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW5wdXQsIGxhYmVsLCBvcHRpb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXXtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgcGFkZGluZzogN3B4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jb2xvci0zKSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXN7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyAgXFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItMiksdmFyKC0tY29sb3ItNCkpO1xcclxcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC4wNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2s6Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRkMmFmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuOCk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBtb2RTYXZlQW5kUmVuZGVyIGZyb20gJy4vc2F2ZUFuZFJlbmRlcic7XHJcblxyXG5jb25zdCBkb21Db250cm9sbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWRlbGV0ZS1wcm9qZWN0Jyk7XHJcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0c10nKTtcclxuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrLnByb2plY3RzJykpIHx8IFtdO1xyXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xyXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcclxuICBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzay5zZWxlY3RlZFByb2plY3RJZCcpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xyXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5zZWxlY3RlZFByb2plY3RJZDtcclxuICAgICAgICBtb2RTYXZlQW5kUmVuZGVyLnNhdmVBbmRSZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFzayA9ICgpID0+IHtcclxuICAgIHRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWQpO1xyXG4gICAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgbW9kU2F2ZUFuZFJlbmRlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBtb2RTYXZlQW5kUmVuZGVyLnJlbmRlclRhc2tDb3VudChzZWxlY3RlZFByb2plY3QpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0KCkge1xyXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xyXG4gICAgICBtb2RTYXZlQW5kUmVuZGVyLnNhdmVBbmRSZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICBmdW5jdGlvbiBoYW5kbGVUYXNrSW5wdXQoKSB7XHJcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5JykudmFsdWU7XHJcbiAgICAgIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSAnJykgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YXNrID0gVGFzay5jcmVhdGVUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZmFsc2UsIERhdGUubm93KCkudG9TdHJpbmcoKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVUYXNrSW5wdXQnKTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gICAgICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgbW9kU2F2ZUFuZFJlbmRlci5zYXZlQW5kUmVuZGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVByb2plY3RJbnB1dCgpIHtcclxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcclxuICAgICAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsO1xyXG4gICAgICBwcm9qZWN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgIG1vZFNhdmVBbmRSZW5kZXIuc2F2ZUFuZFJlbmRlcigpO1xyXG4gICAgICBjb25zb2xlLmxvZygncHJvamVjdEZvcm0nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhhbmRsZVByb2plY3QsXHJcbiAgICBoYW5kbGVUYXNrLFxyXG4gICAgaGFuZGxlRGVsZXRlUHJvamVjdCxcclxuICAgIGhhbmRsZVRhc2tJbnB1dCxcclxuICAgIGhhbmRsZVByb2plY3RJbnB1dCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBkb21Db250cm9sbGVyIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlVW5hc3NpZ25lZCgpIHtcclxuICAgIGNvbnN0IHVuYXNzaWduZWQgPSBuZXcgUHJvamVjdCgnVW5hc3NpZ25lZCBUYXNrcycsIERhdGUubm93KCkudG9TdHJpbmcoKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2godW5hc3NpZ25lZCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBEYXRlLm5vdygpLnRvU3RyaW5nKCkpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuXHJcbmNvbnN0IG1vZFNhdmVBbmRSZW5kZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrLnByb2plY3RzJykpIHx8IFtdO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2suc2VsZWN0ZWRQcm9qZWN0SWQnKTtcclxuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzXScpO1xyXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJyk7XHJcblxyXG4gIGNvbnN0IGNsZWFyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2sucHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzay5zZWxlY3RlZFByb2plY3RJZCcsIHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYXNrcyA9IChzZWxlY3RlZFByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRlbXBsYXRlJyk7XHJcblxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICBjaGVja2JveC5pZCA9IHRhc2suaWQ7XHJcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XHJcbiAgICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xyXG4gICAgICBsYWJlbC5hcHBlbmQodGFzay5uYW1lKTtcclxuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGFza0NvdW50ID0gKHNlbGVjdGVkUHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdENvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3QtY291bnRdJyk7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRhc2tTdHJpbmcgPSBpbmNvbXBsZXRlVGFza0NvdW50ID09PSAxID8gJ3Rhc2snIDogJ3Rhc2tzJztcclxuICAgIHByb2plY3RDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZVRhc2tDb3VudH0gJHt0YXNrU3RyaW5nfSByZW1haW5pbmdgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJyk7XHJcbiAgICAgIHByb2plY3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcclxuICAgICAgfVxyXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3QtZGlzcGxheS1jb250YWluZXJdJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC10aXRsZV0nKTtcclxuXHJcbiAgICBjbGVhckVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xyXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiB0aGlzLnByb2plY3QuaWQgPT09IHRoaXMuc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9qZWN0SWQgPT0gbnVsbCkge1xyXG4gICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xyXG4gICAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcclxuICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlQW5kUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZUFuZFJlbmRlcixcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSxcclxuICAgIHJlbmRlclRhc2tDb3VudCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBtb2RTYXZlQW5kUmVuZGVyIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFza0l0ZW0pIHtcbiAgICByZXR1cm4gbmV3IFRhc2sodGFza0l0ZW0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkb21Db250cm9sbGVyIGZyb20gJy4vZG9tQ29udHJvbGxlcic7XHJcbmltcG9ydCBtb2RTYXZlQW5kUmVuZGVyIGZyb20gJy4vc2F2ZUFuZFJlbmRlcic7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tQ29udHJvbGxlciwgbW9kU2F2ZUFuZFJlbmRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==