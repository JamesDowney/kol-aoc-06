"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// src/main.ts
var import_kolmafia = require("kolmafia");
function helper(arrayInput, uniques) {
  if (arrayInput.length < uniques)
    return !1;
  for (var retval = !0, i = 0; i < arrayInput.length - 1; i++)
    if (arrayInput.indexOf(arrayInput[i], i + 1) !== -1) {
      retval = !1;
      break;
    }
  return retval;
}
function main() {
  for (var input = (0, import_kolmafia.fileToBuffer)("input.txt").trim().split(""), substack = [], solution = 0, solution2 = 0, i = 0; i < input.length && solution === 0; )
    helper(substack, 4) && (solution = i), substack.push(input[i]) > 4 && substack.shift(), i++;
  for (var j = 0, substack2 = []; j < input.length && solution2 === 0; )
    helper(substack2, 14) && (solution2 = j), substack2.push(input[j]) > 14 && substack2.shift(), j++;
  (0, import_kolmafia.print)(solution + ""), (0, import_kolmafia.print)(solution2 + "");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
