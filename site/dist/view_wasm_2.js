(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_index", function() { return add_index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_index", function() { return get_index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
*/
function add_index() {
    _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["add_index"]();
}

/**
* @returns {number}
*/
function get_index() {
    const ret = _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["get_index"]();
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm(arg0, arg1));
};



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(1);


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })
]]);