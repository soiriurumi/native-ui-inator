// ==UserScript==
// @name         NativeUI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use native UI elements in web pages
// @author       None
// @match        https://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAh1JREFUaEPtWdFRwzAMVTehkwCTUCahTEKZhHYSugncy+GeKmRLTqwmAfuu14/Ylp6eZMnyhlY+NivXnzqAuRm0GNgR0RMRPcyk6JGI3okI/2dNhxKAFyLaz6S4FPtMRIdaAJ9EdLcQAGDgsRbAF1tguVoUTlOHkmLm4iit2b6mDh1AMAudgWRgzdWQG+4zDJx+zm7+uXY+1oYyUMoTyB+vAlzt/A7Aoq/WorXzOwOdgaUHce2xWDs/PAaCk/CwveXGxSulufgGCEwdll7MmTb61wByQanVQaYlx06YwoCWWbNXv7EKWutaAkDXYKsIxL0anQ38gzV+z/YUfdgXv9ShuOpOtAKATdE5gBA+0JZ5K1jRA0AuT3IGIK0AaIp8OPpJYwBAb7RYUK6fWwDQXEfGh9mgKrAEl8MPe/IG2wC+BQBpRQhDTykNWAu0txjSMNspANIxWrp5RZxKvOF2mAIgZ1Hu++imycCGFWuGNBAMBxkYxwgAVv3Cv3uAaDpe9ogAwClGXpBd5akAeIxNOoX+rAshcSGBDT6a6yp7fCczh8fYvuRC3va6dBNQDCGpZNCS1Vj9uXGwR/EYtcqApIT2+KAlsiFz5l5aDETaS5GZyLAnFkKZ0kNHzk08pQRkSC/wBPlFZvTDBcDDCCUD1AK4YjwaACycMnYqpSUYDwCUI3C/X5elWwAYG7CudR2Ay0yBkzoDgcZ1bb16Br4BrKCx6wDvWpUAAAAASUVORK5CYII=
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    "use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/css/windows10.css
  var require_windows10 = __commonJS({
    "src/css/windows10.css"(exports, module) {
      module.exports = `:root{\r
    --windows-blue: #0078D7;\r
}\r
\r
body {\r
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r
    font-size: 14px;\r
    color: rgb(0, 0, 0);\r
    background-color: rgb(238, 238, 239);\r
}\r
\r
section{\r
    background-color: white;\r
    padding: 10px;\r
}\r
\r
/* width */\r
::-webkit-scrollbar {\r
    width: 16px;\r
    height: 16px;\r
    border: solid 2px #f1f1f1;\r
}\r
\r
::-webkit-scrollbar-corner,\r
::-webkit-scrollbar-track {\r
    background-color: #f1f1f1;\r
    /*background-color: rgb(64, 64, 64);*/\r
}\r
\r
::-webkit-scrollbar-thumb {\r
    background-color: rgb(96, 96, 96);\r
    background-clip: padding-box;\r
    border: 2px solid transparent;\r
}\r
\r
::-webkit-scrollbar-thumb:hover {\r
    background-color: rgb(112, 112, 112);\r
}\r
\r
::-webkit-scrollbar-thumb:active {\r
    background-color: rgb(128, 128, 128);\r
}\r
\r
/* Buttons */\r
::-webkit-scrollbar-button:single-button {\r
    background-color: rgb(239, 239, 240);\r
    width: 16px;\r
    height: 16px;\r
    display: block;\r
    background-size: 10px;\r
    background-repeat: no-repeat;\r
}\r
\r
::-webkit-scrollbar-button:single-button:hover {\r
    background-color: #d2d2d2;\r
}\r
\r
::-webkit-scrollbar-button:single-button:active {\r
    background-color: #777778;\r
    color: #ffffff;\r
}\r
\r
/* Up */\r
::-webkit-scrollbar-button:single-button:vertical:decrement {\r
    height: 12px;\r
    width: 16px;\r
    background-position: center 4px;\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='50,00 0,50 100,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:vertical:decrement:hover {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='50,00 0,50 100,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:vertical:decrement:active {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(255, 255, 255)'><polygon points='50,00 0,50 100,50'/></svg>");\r
}\r
\r
/* Down */\r
::-webkit-scrollbar-button:single-button:vertical:increment {\r
    height: 12px;\r
    width: 16px;\r
    background-position: center 2px;\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 100,0 50,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:vertical:increment:hover {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,0 100,0 50,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:vertical:increment:active {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(255, 255, 255)'><polygon points='0,0 100,0 50,50'/></svg>");\r
}\r
\r
/* Left */\r
::-webkit-scrollbar-button:single-button:horizontal:decrement {\r
    height: 12px;\r
    width: 12px;\r
    background-position: 3px 3px;\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,50 50,100 50,0'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,50 50,100 50,0'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:horizontal:decrement:active {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(255, 255, 255)'><polygon points='0,50 50,100 50,0'/></svg>");\r
}\r
\r
/* Right */\r
::-webkit-scrollbar-button:single-button:horizontal:increment {\r
    height: 12px;\r
    width: 12px;\r
    background-position: 3px 3px;\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 0,100 50,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:horizontal:increment:hover {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,0 0,100 50,50'/></svg>");\r
}\r
\r
::-webkit-scrollbar-button:single-button:horizontal:increment:active {\r
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(255, 255, 255)'><polygon points='0,0 0,100 50,50'/></svg>");\r
}\r
\r
/* Handle */\r
::-webkit-scrollbar-thumb {\r
    background: #bfbfc0;\r
    width: 12px;\r
    /*border-radius: 0;*/\r
    border: 1px solid #f1f1f1;\r
}\r
\r
/* Handle on hover */\r
::-webkit-scrollbar-thumb:hover {\r
    background: #a7a7a8;\r
}\r
\r
::-webkit-scrollbar-thumb:active {\r
    background: #777778;\r
}\r
\r
\r
::-webkit-scrollbar-corner {\r
    background-color: rgb(218, 218, 219);\r
}\r
\r
/*Button*/\r
button:disabled, button:disabled:hover, button:disabled:active,\r
input[type=file]:disabled::-webkit-file-upload-button,\r
input[type=file]:disabled::-webkit-file-upload-button:hover, select {\r
    background-color: rgb(204, 204, 204);\r
    /*197,197,197*/\r
    -webkit-box-shadow: 0px 0px 0px 1px rgb(204, 204, 204),\r
    0px 0px 0px 2px rgb(173, 173, 173);\r
    box-shadow: 0px 0px 0px 1px rgb(204, 204, 204),\r
    0px 0px 0px 2px rgb(173, 173, 173);\r
    color: rgb(135, 135, 135);\r
}\r
\r
button, input[type=file]::-webkit-file-upload-button, select {\r
    outline: none;\r
    -webkit-transition: background-color .5s, -webkit-box-shadow .5s;\r
    /*transition: background-color .5s, -webkit-box-shadow .5s;*/\r
    -o-transition: box-shadow .5s, background-color .5s;\r
    /*transition: box-shadow .5s, background-color .5s;*/\r
    /*transition: box-shadow .5s, background-color .5s, -webkit-box-shadow .5s;*/\r
    font-family: sans-serif;\r
    font-size: 13px;\r
    background-color: rgb(225, 225, 225);\r
    /*padding: 3px 10px;*/\r
    /*margin: 2px;*/\r
    /*border: 0;*/\r
    -webkit-box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(173, 173, 173);\r
    box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(173, 173, 173);\r
    border: 1px dotted transparent;\r
    color: black;\r
}\r
\r
button:focus, input[type=file]::-webkit-file-upload-button:focus {\r
    background-color: rgb(225, 225, 225);\r
    -webkit-box-shadow: 0px 0px 0px 0px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
    box-shadow: 0px 0px 0px 0px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
    border: 1px dotted rgb(17, 17, 17);\r
}\r
\r
button:hover, input[type=file]::-webkit-file-upload-button:hover {\r
    -webkit-box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
    box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
    background-color: rgb(229, 241, 251);\r
}\r
\r
button:active {\r
    -webkit-transition: background-color 0s;\r
    -o-transition: background-color 0s;\r
    transition: background-color 0s;\r
    background-color: rgb(204, 228, 247);\r
    -webkit-box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
    box-shadow: 0px 0px 0px 1px rgb(225, 225, 225),\r
    0px 0px 0px 2px rgb(0, 120, 215);\r
}\r
\r
input[type=submit] {\r
    margin-right: 10px;\r
    border-radius: 3px;\r
    border: 1px solid #ddd;\r
    padding: 3px 15px 3px 15px;\r
    background: #f2f2f2;\r
    background: -moz-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%);\r
    background: -webkit-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%);\r
    background: linear-gradient(to bottom, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%);\r
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f2f2f2', endColorstr='#cfcfcf', GradientType=0);\r
    transition: all 0.1s ease-in;\r
    border: 1px solid #707070;\r
}\r
\r
input[type=submit]:hover,\r
input[type=submit]:focus {\r
    outline: 0;\r
    background: #eaf6fd;\r
    background: -moz-linear-gradient(top, #eaf6fd 0%, #d9f0fc 42%, #bee6fd 47%, #bce5fc 58%, #a7d9f5 100%);\r
    background: -webkit-linear-gradient(top, #eaf6fd 0%, #d9f0fc 42%, #bee6fd 47%, #bce5fc 58%, #a7d9f5 100%);\r
    background: linear-gradient(to bottom, #eaf6fd 0%, #d9f0fc 42%, #bee6fd 47%, #bce5fc 58%, #a7d9f5 100%);\r
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eaf6fd', endColorstr='#a7d9f5', GradientType=0);\r
    border: 1px solid #3C7FB1;\r
    box-shadow: 0 0 3px #A7D9F5;\r
    -o-box-shadow: 0 0 3px #A7D9F5;\r
    -webkit-box-shadow: 0 0 3px #A7D9F5;\r
    -moz-box-shadow: 0 0 3px #A7D9F5;\r
}\r
\r
input[type=submit]:active {\r
    background: #eaf6fd;\r
    box-shadow: inset 0 -1px 6px rgba(0, 0, 0, 0.2), inset 0 -0.7em #BEE6FD, 0 0 3px #A7D9F5;\r
    -o-box-shadow: inset 0 -1px 6px rgba(0, 0, 0, 0.2), inset 0 -0.7em #BEE6FD, 0 0 3px #A7D9F5;\r
    -webkit-box-shadow: inset 0 -1px 6px rgba(0, 0, 0, 0.2), inset 0 -0.7em #BEE6FD, 0 0 3px #A7D9F5;\r
    -moz-box-shadow: inset 0 -1px 6px rgba(0, 0, 0, 0.2), inset 0 -0.7em #BEE6FD, 0 0 3px #A7D9F5;\r
}\r
\r
input[type=submit]:disabled {\r
    color: #999;\r
    box-shadow: none;\r
    -o-box-shadow: none;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    filter: none;\r
    background: #f2f2f2;\r
    background: -moz-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%);\r
    border: 1px solid #ddd;\r
}\r
\r
input[type=button], input[type=reset], button[type=reset] {\r
    -o-box-shadow: none;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    margin: 0;\r
    padding: 0;\r
    border: none;\r
    outline: none;\r
    box-shadow: none;\r
    color: #0000fe;\r
    background-color: transparent;\r
    text-align: center;\r
    text-decoration: underline;\r
}\r
\r
input[type=button]:hover, input[type=reset]:hover, button[type=reset]:hover {\r
    border: none;\r
    color: #0000fe;\r
    background-color: transparent;\r
    text-align: center;\r
    text-decoration: underline;\r
    cursor: pointer;\r
}\r
\r
input[type=button]:active, input[type=reset]:active, button[type=reset]:active {\r
    border: none;\r
    color: #000000;\r
    background-color: transparent;\r
    text-align: center;\r
    text-decoration: underline;\r
}\r
\r
input[type=button]:focus, input[type=reset]:focus, button[type=reset]:focus {\r
    border: dotted 1px #000000;\r
}\r
\r
input[type=button]:disabled, input[type=reset]:disabled, button[type=reset]:disabled {\r
    -o-box-shadow: none;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    margin: 0;\r
    padding: 0;\r
    border: none;\r
    outline: none;\r
    color: #999;\r
    background-color: transparent;\r
    text-align: center;\r
    text-decoration: underline;\r
    cursor: not-allowed;\r
}\r
\r
select:focus {\r
    background-color: rgb(225, 225, 225);\r
    border: 1px dotted rgb(17, 17, 17);\r
}\r
\r
option {\r
    background-color: rgb(255, 255, 255);\r
    color: rgb(0, 0, 0);\r
}\r
\r
\r
/* input */\r
input {\r
    outline: none;\r
    background-color: rgb(255, 255, 255);\r
    padding: 4px 5px;\r
    border: 1px solid rgb(202, 204, 218);\r
    color: rgb(0, 0, 0);\r
}\r
\r
input:focus {\r
    border: solid 1px var(--windows-blue);\r
}\r
\r
input:disabled {\r
    cursor: not-allowed;\r
    background-color: rgb(235, 235, 228);\r
    color: rgb(116, 116, 117);\r
}\r
\r
input[type=checkbox] {\r
    width: 16px;\r
    height: 16px;\r
    appearance: none;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    border: 1px solid rgba(0, 0, 0, 0.54);\r
    border-radius: 0;\r
    outline: none;\r
    cursor: pointer;\r
    background-color: transparent;\r
}\r
\r
input[type=checkbox]:hover {\r
    background-color: rgba(0, 0, 0, 0.04);\r
}\r
\r
input[type=checkbox]:checked {\r
    /*background-color: transparent;*/\r
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' d='M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z'/%3E%3C/svg%3E");\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    background-size: 110%;\r
}\r
\r
input[type=checkbox]:disabled {\r
    cursor: not-allowed;\r
    background-color: rgb(235, 235, 228);\r
    color: rgb(116, 116, 117);\r
}\r
\r
input[type=range] {\r
    -webkit-appearance: none;\r
    padding: 0;\r
    /*min-width: 1px;*/\r
    box-shadow: none;\r
    height: 0.4em;\r
    border: 1px solid rgb(202, 204, 218);\r
    border-radius: 0;\r
    background: #e3e3e3;\r
    outline: none;\r
    opacity: 1;\r
    -webkit-transition: .2s;\r
    transition: opacity .2s;\r
}\r
\r
input[type=range]::-webkit-slider-thumb {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    width: 10px;\r
    height: 18px;\r
    background: var(--windows-blue);\r
    cursor: pointer;\r
    border-radius: 0;\r
    clip-path: polygon(0% 0%, 0% 75%, 50% 100%, 100% 75%, 100% 0%);\r
}\r
\r
input[type=range]:active::-webkit-slider-thumb {\r
    background: #000000;\r
}\r
\r
input[type=range]:disabled::-webkit-slider-thumb {\r
    background: #cacacb;\r
    cursor: not-allowed;\r
}\r
\r
input[type="color"] {\r
    -webkit-appearance: none;\r
    /*border: 1px solid #ccc;*/\r
    border: none;\r
    width: 32px;\r
    height: 31px;\r
}\r
\r
input[type="color"]::-webkit-color-swatch-wrapper {\r
    padding: 0;\r
    margin: 0;\r
}\r
\r
input[type="color"]::-webkit-color-swatch {\r
    border: 1px solid #ccc;\r
    outline: 1px solid #7f7f80;\r
}\r
\r
input[type="radio"] {\r
    box-shadow: none;\r
    /* Add if not using autoprefixer */\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
    min-width: 0;\r
    min-height: 0;\r
    padding: 0;\r
    border: none;\r
    outline: none;\r
    width: 8px;\r
    height: 8px;\r
}\r
\r
input[type='radio']:after {\r
    width: 8px;\r
    height: 8px;\r
    border-radius: 15px;\r
    position: relative;\r
    background-color: #ffffff;\r
    content: '';\r
    display: inline-block;\r
    border: 2px solid #ffffff;\r
    outline: 1px solid #000000;\r
    /*transition: background-color .2s, border-color .2s;*/\r
}\r
\r
input[type='radio']:checked:after {\r
    background-color: #000000;\r
    content: '';\r
    border: 2px solid #ffffff;\r
    outline: 1px solid #000000;\r
}\r
\r
input[type='radio']:disabled {\r
    background: transparent;\r
}\r
\r
input[type='radio']:disabled:checked:after {\r
    cursor: not-allowed;\r
    background-color: rgb(116, 116, 117);\r
    outline-color: rgb(116, 116, 117);\r
}\r
\r
input[type='radio']:disabled:after {\r
    width: 8px;\r
    height: 8px;\r
    border-radius: 15px;\r
    position: relative;\r
    background-color: transparent;\r
    content: '';\r
    display: inline-block;\r
    border: 2px solid transparent;\r
    outline: 1px solid rgb(116, 116, 117);\r
}\r
\r
input[type=radio]:hover::after {\r
    /*background-color: #000000;*/\r
    content: '';\r
    border: 2px solid #ffffff;\r
    outline: 1px solid var(--windows-blue);\r
    transition: outline .2s;\r
}\r
\r
input[type='radio']:checked:hover:after {\r
    background-color: var(--windows-blue);\r
    content: '';\r
    border: 2px solid #ffffff;\r
    outline: 1px solid var(--windows-blue);\r
}\r
textarea {\r
    outline: none;\r
    background-color: rgb(255, 255, 255);\r
    padding: 4px 5px;\r
    border: 1px solid rgb(202, 204, 218);\r
    /*color: rgb(0, 0, 0);*/\r
}\r
\r
textarea:disabled {\r
    cursor: not-allowed;\r
    background-color: rgb(235, 235, 228);\r
}\r
\r
fieldset {\r
    background-color: rgb(255, 255, 255);\r
    border: 1px solid rgb(202, 204, 218);\r
    padding: 0.35em 0.625em 0.75em;\r
    margin: 0 2px;\r
}\r
`;
    }
  });

  // src/css/macos.css
  var require_macos = __commonJS({
    "src/css/macos.css"(exports, module) {
      module.exports = `body {\r
    font-family: 'SF Pro', sans-serif;\r
    font-size: 14px;\r
    color: rgb(0, 0, 0);\r
    background-color: rgb(236, 236, 237);\r
}\r
\r
section {\r
    background-color: white;\r
    padding: 10px;\r
}\r
\r
::-webkit-scrollbar {\r
    width: 16px;\r
    height: 16px;\r
}\r
\r
::-webkit-scrollbar-thumb {\r
    border: 3px solid rgba(0, 0, 0, 0);\r
    background-clip: padding-box;\r
    border-radius: 9999px;\r
    background-color: #AAAAAA;\r
}\r
\r
::-webkit-scrollbar-thumb:hover {\r
    background-color: #999999;\r
}\r
\r
::-webkit-scrollbar-thumb:active {\r
    background-color: #999999;\r
}\r
\r
/* input */\r
input {\r
    padding: 4px 12px;\r
    border: 1px solid #d0d0d2;\r
    font: inherit;\r
    color: #373030;\r
    border-radius: 4px;\r
    /*outline: none;*/\r
    text-decoration: none;\r
    font-weight: 400;\r
    background: #f3f3f4;\r
    box-shadow: 0px 0px 1px rgb(208, 208, 210), 0px 1px 1px rgb(212, 212, 213);\r
    outline: solid 8px rgba(79, 174, 252, 0);\r
    transition: outline-width 0.4s, outline-color 0.4s;\r
}\r
\r
input:focus {\r
    outline: solid 2px #4faefc;\r
}\r
\r
/*Button*/\r
button, input[type=button], input[type=reset] {\r
    padding: 4px 12px;\r
    min-width: 88px;\r
    border: none;\r
    font: inherit;\r
    color: #373030;\r
    border-radius: 4px;\r
    outline: none;\r
    text-decoration: none;\r
    cursor: default;\r
    font-weight: 400;\r
    background: #fff;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
}\r
\r
button:active, input[type=button]:active, input[type=button]:active, input[type=reset]:active {\r
    background: linear-gradient(#f3f3f6, #f3f3f6);\r
    color: #000000;\r
    position: relative;\r
}\r
\r
button:disabled, input[type=button]:disabled, input[type=reset]:disabled {\r
    background: #d1d1d2;\r
    position: relative;\r
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.18);\r
    color: #555555;\r
}\r
\r
button:focus, input[type=button]:focus, input[type=reset]:focus {\r
    border: none;\r
    outline: none;\r
}\r
\r
button[type=submit], input[type=submit] {\r
    border: none;\r
    color: #fff;\r
    background: linear-gradient(#2990fe, #0079fe);\r
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.10), 0 1px 1px rgba(0, 120, 253, .2);\r
}\r
\r
button[type=submit]:active, input[type=submit]:active {\r
    color: #fff;\r
    background: linear-gradient(#2275d2, #0056b0);\r
}\r
\r
button[type=submit]:disabled, input[type=submit]:disabled {\r
    background: #f3f3f6;\r
    position: relative;\r
    color: #a4a4a5;\r
    box-shadow: none;\r
}\r
\r
\r
input[type=checkbox] {\r
    appearance: none;\r
    min-width: 0;\r
    margin: 0;\r
    padding: 0;\r
    border: none;\r
    width: 18px;\r
    height: 18px;\r
    border-radius: 4px;\r
    background-color: #ffffff;\r
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 2px 2px rgba(0, 0, 0, 0.15);\r
    transition: box-shadow, background-color 0.15s ease;\r
}\r
\r
input[type=checkbox]:checked {\r
    /*background: linear-gradient(#2990fe, #0079fe);*/\r
    background-color: #0079fe;\r
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z'/%3E%3C/svg%3E");\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    background-size: 16px;\r
    box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2);\r
}\r
input[type=checkbox]:focus {\r
    outline: none;\r
}\r
\r
input[type=range] {\r
    -webkit-appearance: none;\r
    padding: 0;\r
    /*min-width: 1px;*/\r
    box-shadow: none;\r
    height: 0.3em;\r
    border: none;\r
    border-radius: 0px;\r
    background: #e3e3e3;\r
    outline: none;\r
    opacity: 1;\r
    -webkit-transition: .2s;\r
    transition: opacity .2s;\r
}\r
\r
input[type=range]::-webkit-slider-thumb {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    width: 8px;\r
    height: 20px;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
    background: #ffffff;\r
    cursor: pointer;\r
    border-radius: 4px;\r
}\r
\r
input[type=range] ::-moz-range-thumb {\r
    appearance: none;\r
    width: 8px;\r
    height: 25px;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
    background: #ffffff;\r
    cursor: pointer;\r
    border-radius: 4px;\r
}\r
\r
input[type=range]:focus {\r
    outline: none;\r
}\r
\r
input[type=range]:active::-webkit-slider-thumb {\r
    background: linear-gradient(#f3f3f6, #f3f3f6);\r
}\r
\r
input[type=range]:disabled::-webkit-slider-thumb {\r
    /*background: #f3f3f6;*/\r
    cursor: default;\r
    background: none;\r
    box-shadow: none;\r
}\r
\r
input[type=file]::-webkit-file-upload-button {\r
    padding: 4px 12px;\r
    border: none;\r
    font: inherit;\r
    color: #373030;\r
    border-radius: 4px;\r
    outline: none;\r
    text-decoration: none;\r
    cursor: default;\r
    font-weight: 400;\r
    background: #fff;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
}\r
\r
input[type=file]::-webkit-file-upload-button:active {\r
    background: linear-gradient(#f3f3f6, #f3f3f6);\r
    color: #000000;\r
    position: relative;\r
}\r
\r
input[type=file]:disabled {\r
    position: relative;\r
    /*box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.10), 0px 1px 1px rgba(0, 0, 0, 0.2);*/\r
    color: #a4a4a5;\r
}\r
\r
input[type=file]:disabled::-webkit-file-upload-button {\r
    background: #f3f3f6;\r
    color: #000000;\r
    color: #a4a4a5;\r
}\r
\r
input[type=file] {\r
    min-width: 0;\r
    padding: 3px;\r
    border: none;\r
    outline: none;\r
    background: none;\r
    box-shadow: none;\r
}\r
\r
input[type=radio] {\r
    appearance: none;\r
    padding: 0;\r
    border-radius: 50%;\r
    width: 16px;\r
    height: 16px;\r
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.18);\r
    outline:none;\r
    transition: border-bottom-width 0.1s, border-left-width 0.1s, border-right-width 0.1s, border-top-width 0.1s;\r
}\r
\r
input[type=radio]:focus {\r
    outline: none;\r
}\r
\r
input[type=radio]:checked {\r
    background: #fdfdfe;\r
    color: white;\r
    border: 0.4em solid #3a98fb;\r
}\r
\r
input[type=radio]:disabled {\r
    background: #f2f2f3;\r
    color: #a4a4a5;\r
    box-shadow: none;\r
    text-shadow: none;\r
}\r
\r
\r
select {\r
    padding: 4px 12px;\r
    min-width: 88px;\r
    border: none;\r
    font: inherit;\r
    color: #373030;\r
    border-radius: 4px;\r
    outline: none;\r
    text-decoration: none;\r
    cursor: default;\r
    font-weight: 400;\r
    background: #fff;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
}\r
\r
select:disabled {\r
    background: #f3f3f6;\r
    color: #a4a4a5;\r
}\r
\r
textarea {\r
    border: none;\r
    font: inherit;\r
    color: #373030;\r
    border-radius: 4px;\r
    outline: none;\r
    text-decoration: none;\r
    /*cursor: default;*/\r
    font-weight: 400;\r
    background: #fff;\r
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 0, 0, .4);\r
}\r
\r
textarea:disabled, input:disabled {\r
    background: #f3f3f6;\r
    color: #a4a4a5;\r
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);\r
}\r
\r
textarea:focus {\r
    outline: 2px solid #3a98fb;\r
}\r
\r
legend {\r
    font-size: 8pt;\r
    font-weight: 600;\r
    position: relative;\r
}\r
\r
fieldset {\r
    margin-top: 20pt;\r
    position: relative;\r
    background-color: #f6f6f6;\r
    border-radius: 4px;\r
    border: 1px solid #d2d2d4;\r
}\r
\r
fieldset legend {\r
    position: absolute;\r
    top: -20px;\r
    left: 10px;\r
    font-size: 12pt;\r
}\r
`;
    }
  });

  // src/css/android.css
  var require_android = __commonJS({
    "src/css/android.css"(exports, module) {
      module.exports = `:root {\r
    --pure-material-primary-rgb: 33, 150, 243;\r
    --pure-material-onprimary-rgb: 255, 255, 255;\r
    --pure-material-surface-rgb: 255, 255, 255;\r
    --pure-material-onsurface-rgb: 0, 0, 0;\r
}\r
\r
body {\r
    font-family: 'Roboto', sans-serif;\r
    background: #fdfdfe;\r
}\r
\r
section {\r
    background: #fff;\r
    padding: 10px;\r
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);\r
}\r
\r
::-webkit-scrollbar {\r
    width: 4px;\r
}\r
\r
::-webkit-scrollbar-track {\r
    background: transparent;\r
}\r
\r
::-webkit-scrollbar-thumb {\r
    background: rgba(0, 0, 0, 0.5);\r
    border-radius: 0;\r
}\r
\r
::-webkit-scrollbar-thumb:hover {\r
    background: rgba(0, 0, 0, 0.6);\r
    width: 10px;\r
}\r
\r
/* input */\r
input, select {\r
    border: none;\r
    border-bottom: 2px solid #717172;\r
    border-radius: 3px 3px 0px 0px;\r
    outline: none;\r
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\r
    -moz-box-sizing: border-box; /* Firefox, other Gecko */\r
    padding: 8px 8px 8px 8px;\r
    font-size: 16px;\r
    font-weight: 500;\r
    background: #e8e8e8;\r
    transition: border-bottom-color .5s;\r
}\r
\r
input:focus {\r
    -webkit-transition: background-color 0.1s;\r
    -o-transition: background-color 0.1s;\r
    transition: background-color 0.1s;\r
    border-bottom-color: #167dfa;\r
}\r
\r
input:disabled {\r
    background: #dfdfe0;\r
    border-bottom: 2px solid #bcbcbd;\r
    color: #bcbcbd;\r
}\r
\r
\r
button[type=submit] {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    --matter-helper-ontheme: var(--matter-ontheme-rgb, var(--matter-onprimary-rgb, 255, 255, 255));\r
    position: relative;\r
    display: inline-block;\r
    box-sizing: border-box;\r
    border: none;\r
    border-radius: 4px;\r
    padding: 0 16px;\r
    min-width: 64px;\r
    height: 36px;\r
    vertical-align: middle;\r
    text-align: center;\r
    text-overflow: ellipsis;\r
    color: rgb(var(--matter-helper-ontheme));\r
    background-color: rgb(var(--matter-helper-theme));\r
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r
    font-family: var(--matter-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r
    font-size: 14px;\r
    font-weight: 500;\r
    line-height: 36px;\r
    outline: none;\r
    cursor: pointer;\r
    transition: box-shadow 0.2s;\r
}\r
\r
button[type=submit]::-moz-focus-inner {\r
    border: none;\r
}\r
\r
/* Highlight, Ripple */\r
button[type=submit]::before,\r
button[type=submit]::after {\r
    content: "";\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    border-radius: inherit;\r
    opacity: 0;\r
}\r
\r
button[type=submit]::before {\r
    background-color: rgb(var(--matter-helper-ontheme));\r
    transition: opacity 0.2s;\r
}\r
\r
button[type=submit]::after {\r
    background: radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;\r
    transition: opacity 1s, background-size 0.5s;\r
}\r
\r
/* Hover, Focus */\r
button[type=submit]:hover,\r
button[type=submit]:focus {\r
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\r
}\r
\r
button[type=submit]:hover::before {\r
    opacity: 0.08;\r
}\r
\r
button[type=submit]:focus::before {\r
    opacity: 0.24;\r
}\r
\r
button[type=submit]:hover:focus::before {\r
    opacity: 0.32;\r
}\r
\r
/* Active */\r
button[type=submit]:active {\r
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r
}\r
\r
button[type=submit]:active::after {\r
    opacity: 0.32;\r
    background-size: 100% 100%;\r
    transition: background-size 0s;\r
}\r
\r
/* Disabled */\r
button[type=submit]:disabled {\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    background-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.12);\r
    box-shadow: none;\r
    cursor: initial;\r
}\r
\r
button[type=submit]:disabled::before,\r
button[type=submit]:disabled::after {\r
    opacity: 0;\r
}\r
\r
\r
/* Button Text */\r
button[type=reset] {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    position: relative;\r
    display: inline-block;\r
    box-sizing: border-box;\r
    margin: 0;\r
    border: none;\r
    border-radius: 4px;\r
    padding: 0 8px;\r
    min-width: 64px;\r
    height: 36px;\r
    vertical-align: middle;\r
    text-align: center;\r
    text-overflow: ellipsis;\r
    color: rgb(var(--matter-helper-theme));\r
    background-color: transparent;\r
    font-family: var(--matter-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r
    font-size: 14px;\r
    font-weight: 500;\r
    line-height: 36px;\r
    outline: none;\r
    cursor: pointer;\r
}\r
\r
button[type=reset]::-moz-focus-inner {\r
    border: none;\r
}\r
\r
/* Highlight, Ripple */\r
button[type=reset]::before,\r
button[type=reset]::after {\r
    content: "";\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    border-radius: inherit;\r
    opacity: 0;\r
}\r
\r
button[type=reset]::before {\r
    background-color: rgb(var(--matter-helper-theme));\r
    transition: opacity 0.2s;\r
}\r
\r
button[type=reset]::after {\r
    background: radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;\r
    transition: opacity 1s, background-size 0.5s;\r
}\r
\r
/* Hover, Focus */\r
button[type=reset]:hover::before {\r
    opacity: 0.04;\r
}\r
\r
button[type=reset]:focus::before {\r
    opacity: 0.12;\r
}\r
\r
button[type=reset]:hover:focus::before {\r
    opacity: 0.16;\r
}\r
\r
/* Active */\r
button[type=reset]:active::after {\r
    opacity: 0.16;\r
    background-size: 100% 100%;\r
    transition: background-size 0s;\r
}\r
\r
/* Disabled */\r
button[type=reset]:disabled {\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    background-color: transparent;\r
    cursor: initial;\r
}\r
\r
button[type=reset]:disabled::before,\r
button[type=reset]:disabled::after {\r
    opacity: 0;\r
}\r
\r
/* Button Outlined */\r
button {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    position: relative;\r
    display: inline-block;\r
    box-sizing: border-box;\r
    margin: 0;\r
    border: solid 1px; /* Safari */\r
    border-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.24);\r
    border-radius: 4px;\r
    padding: 0 16px;\r
    min-width: 64px;\r
    height: 36px;\r
    vertical-align: middle;\r
    text-align: center;\r
    text-overflow: ellipsis;\r
    color: rgb(var(--matter-helper-theme));\r
    background-color: transparent;\r
    font-family: var(--matter-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r
    font-size: 14px;\r
    font-weight: 500;\r
    line-height: 34px;\r
    outline: none;\r
    cursor: pointer;\r
}\r
\r
button::-moz-focus-inner {\r
    border: none;\r
}\r
\r
/* Highlight, Ripple */\r
button::before,\r
button::after {\r
    content: "";\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    border-radius: 3px;\r
    opacity: 0;\r
}\r
\r
button::before {\r
    background-color: rgb(var(--matter-helper-theme));\r
    transition: opacity 0.2s;\r
}\r
\r
button::after {\r
    background: radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;\r
    transition: opacity 1s, background-size 0.5s;\r
}\r
\r
/* Hover, Focus */\r
button:hover::before {\r
    opacity: 0.04;\r
}\r
\r
button:focus::before {\r
    opacity: 0.12;\r
}\r
\r
button:hover:focus::before {\r
    opacity: 0.16;\r
}\r
\r
/* Active */\r
button:active::after {\r
    opacity: 0.16;\r
    background-size: 100% 100%;\r
    transition: background-size 0s;\r
}\r
\r
/* Disabled */\r
button:disabled {\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    background-color: transparent;\r
    cursor: initial;\r
}\r
\r
button:disabled::before,\r
button:disabled::after {\r
    opacity: 0;\r
}\r
\r
\r
/* Button text */\r
input[type=button], input[type=reset], input[type=submit] {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    position: relative;\r
    display: inline-block;\r
    box-sizing: border-box;\r
    margin: 0;\r
    border: none;\r
    border-radius: 4px;\r
    padding: 0 8px;\r
    vertical-align: middle;\r
    text-align: center;\r
    color: rgb(var(--matter-helper-theme));\r
    /*color: #7f7f80;*/\r
    background-color: transparent;\r
    font-family: var(--matter-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r
    font-size: 14px;\r
    font-weight: 500;\r
    outline: none;\r
    cursor: pointer;\r
    transition: background-color 0.2s;\r
}\r
\r
input[type=button]::-moz-focus-inner, input[type=reset]::-moz-focus-inner, input[type=submit]::-moz-focus-inner {\r
    border: none;\r
}\r
\r
input[type=button]:hover, input[type=reset]:hover, input[type=submit]:hover {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    border-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    /*background-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.04);*/\r
}\r
\r
input[type=button]:active, input[type=reset]:active, input[type=submit]:active {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    border-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    /*background-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.12);*/\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
}\r
\r
input[type=button]:disabled, input[type=reset]:disabled, input[type=submit]:disabled {\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    background-color: transparent;\r
    cursor: initial;\r
}\r
\r
\r
/* Button Outlined */\r
input[type=button] {\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
    --matter-helper-theme: var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243));\r
    position: relative;\r
    display: inline-block;\r
    box-sizing: border-box;\r
    margin: 0;\r
    border: solid 1px; /* Safari */\r
    border-color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.24);\r
    border-radius: 4px;\r
    padding: 0 16px;\r
    min-width: 64px;\r
    height: 36px;\r
    vertical-align: middle;\r
    text-align: center;\r
    text-overflow: ellipsis;\r
    color: rgb(var(--matter-helper-theme));\r
    background-color: transparent;\r
    font-family: var(--matter-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r
    font-size: 14px;\r
    font-weight: 500;\r
    line-height: 34px;\r
    outline: none;\r
    cursor: pointer;\r
}\r
\r
input[type=button]::-moz-focus-inner {\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
    border: none;\r
}\r
\r
/* Highlight, Ripple */\r
input[type=button]::before {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    content: "";\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    border-radius: 3px;\r
    opacity: 0;\r
}\r
\r
input[type=button]::before {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    background-color: rgb(var(--matter-helper-theme));\r
    transition: opacity 0.2s;\r
}\r
\r
input[type=button]::after {\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
    background: radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;\r
    transition: opacity 1s, background-size 0.5s;\r
}\r
\r
/* Hover, Focus */\r
input[type=button]:hover::before {\r
    appearance: none;\r
    opacity: 0.04;\r
}\r
\r
input[type=button]:focus::before {\r
    appearance: none;\r
    opacity: 0.12;\r
}\r
\r
input[type=button]:hover:focus::before {\r
    appearance: none;\r
    opacity: 0.16;\r
}\r
\r
/* Active */\r
input[type=button]:active::after {\r
    appearance: none;\r
    opacity: 0.16;\r
    background-size: 100% 100%;\r
    transition: background-size 0s;\r
}\r
\r
/* Disabled */\r
input[type=button]:disabled {\r
    appearance: none;\r
    color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);\r
    background-color: transparent;\r
    cursor: initial;\r
}\r
\r
input[type=button]::before,\r
input[type=button]::after {\r
    appearance: none;\r
    opacity: 0;\r
}\r
\r
\r
input[type=color] {\r
    width: 32px;\r
    height: 32px;\r
    appearance: none;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    border: none;\r
    padding: 0;\r
    margin: 0;\r
    border-radius: 50%;\r
    clip-path: circle(40%);\r
    outline: none;\r
    align-content: center;\r
    align-items: center;\r
    justify-content: center;\r
    overflow: hidden;\r
}\r
\r
input[type=color]::-webkit-color-swatch-wrapper {\r
    padding: 0;\r
    margin: 0;\r
    width: 32px;\r
    height: 32px;\r
    border: none;\r
    left: 10px;\r
    top: 10px;\r
}\r
\r
input[type=checkbox] {\r
    width: 16px;\r
    height: 16px;\r
    appearance: none;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    border: 2px solid rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.54);\r
    border-radius: 2px;\r
    outline: none;\r
    cursor: pointer;\r
    transition: background-color 0.2s;\r
    background-color: transparent;\r
}\r
\r
input[type=checkbox]:hover {\r
    background-color: rgba(0, 0, 0, 0.04);\r
}\r
\r
input[type=checkbox]:checked {\r
    background-color: rgb(33, 150, 243);\r
    border-color: rgb(33, 150, 243);\r
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z'/%3E%3C/svg%3E");\r
}\r
\r
input[type="radio"] {\r
    box-shadow: none;\r
    /* Add if not using autoprefixer */\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
\r
    min-width: 0;\r
    min-height: 0;\r
    padding: 0px;\r
    /*margin: 1px;*/\r
    border: none;\r
    outline: none;\r
    background: transparent;\r
}\r
\r
input[type='radio']:after {\r
    width: 12px;\r
    height: 12px;\r
    border-radius: 15px;\r
    position: relative;\r
    background-color: transparent;\r
    content: '';\r
    display: inline-block;\r
    border: 3px solid #ffffff;\r
    outline: 3px solid #6f6f70;\r
    box-shadow: white 0 0 0 8px inset, white 0 0 0 8px;\r
    transition: background-color 0s, border-color 0s, box-shadow .2s;\r
}\r
\r
input[type='radio']:checked:after {\r
    background-color: rgb(33, 150, 243);\r
    content: '';\r
    border: 3px solid #ffffff;\r
    outline: 3px solid rgb(33, 150, 243);\r
    box-shadow: none;\r
}\r
\r
input[type='radio']:disabled:after {\r
    background-color: transparent;\r
    content: '';\r
    /*border: 3px solid rgb(255, 255, 255);*/\r
    outline: 3px solid rgba(0, 0, 0, 0.12);\r
    box-shadow: none;\r
}\r
\r
input[typr=radio]:checked:disabled {\r
    background-color: transparent;\r
    content: '';\r
    border: 3px solid rgb(255, 255, 255);\r
    outline: 3px solid rgba(0, 0, 0, 0.12);\r
    box-shadow: none;\r
}\r
\r
\r
input[type=range] {\r
    -webkit-appearance: none;\r
    padding: 0;\r
    box-shadow: none;\r
    height: 0.3em;\r
    border: none;\r
    border-radius: 0.3em;\r
    background: #a7d9f5;\r
    outline: none;\r
    opacity: 1;\r
    -webkit-transition: .2s;\r
    transition: opacity .2s;\r
}\r
\r
input[type=range]::-webkit-slider-thumb {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    width: 16px;\r
    height: 16px;\r
    border-radius: 50%;\r
    background: rgb(33, 150, 243);\r
    cursor: pointer;\r
    transform: scale(1);\r
    transition: transform 0.2s;\r
}\r
\r
input[type=range]:focus {\r
    outline: none;\r
}\r
\r
input[type=range]:hover::-webkit-slider-thumb {\r
    background: #0056b0;\r
}\r
input[type=range]:active::-webkit-slider-thumb {\r
    background: #0056b0;\r
    outline: 10px solid rgba(113, 192, 255, 0.2);\r
    transition: outline 0.2s;\r
    /*transform: scale(1.2);*/\r
}\r
\r
input[type=range]:disabled::-webkit-slider-thumb {\r
    /*background: #f3f3f6;*/\r
    cursor: default;\r
    background: none;\r
    box-shadow: none;\r
}\r
\r
input[type=file]::-webkit-file-upload-button {\r
    appearance: none;\r
    border: none;\r
    color: rgba(0, 0, 0, 0.87);\r
    background-color: transparent;\r
    font-weight: bold;\r
    cursor: initial;\r
}\r
\r
input[type=file]:disabled::-webkit-file-upload-button {\r
    color: rgba(0, 0, 0, 0.38);\r
}\r
\r
textarea {\r
    resize: none;\r
    border: 2px solid rgba(0, 0, 0, 0.1);\r
    border-radius: 4px;\r
    padding: 10px;\r
    font-family: "Roboto", sans-serif;\r
    color: #000000;\r
    outline: none;\r
    transition: border-color 0.2s;\r
}\r
\r
textarea:focus {\r
    border-color: rgb(33, 150, 243);\r
}\r
\r
textarea:disabled {\r
    background-color: rgba(0, 0, 0, 0.04);\r
    border-color: rgba(0, 0, 0, 0.04);\r
    color: rgba(0, 0, 0, 0.38);\r
}\r
\r
fieldset {\r
    margin-top: 10px;\r
    padding-top: 20px;\r
    position: relative;\r
    border: 2px solid rgba(0, 0, 0, 0.1);\r
    border-radius: 8px;\r
}\r
\r
fieldset legend {\r
    position: absolute;\r
    top: 8px;\r
    left: 9px;\r
    font-size: 16pt;\r
    /*font-weight: 600;*/\r
    color: #000000;\r
}\r
`;
    }
  });

  // src/css/ios.css
  var require_ios = __commonJS({
    "src/css/ios.css"(exports, module) {
      module.exports = `body {\r
    background: #f0eff5;\r
    caret-color: #167dfa;\r
\r
}\r
\r
\r
::-webkit-scrollbar {\r
    width: 8px;\r
    height: 8px;\r
}\r
\r
::-webkit-scrollbar-thumb {\r
    border: 2px solid rgba(0, 0, 0, 0);\r
    background-clip: padding-box;\r
    border-radius: 9999px;\r
    background-color: #AAAAAA;\r
}\r
\r
::-webkit-scrollbar-thumb:hover {\r
    background-color: #999999;\r
}\r
\r
::-webkit-scrollbar-thumb:active {\r
    background-color: #999999;\r
}\r
\r
/* Button Outlined */\r
button {\r
    color: #465d75;\r
    background: #e9ecef;\r
    border: none;\r
    border-radius: 8px;\r
    padding: 0 16px;\r
    /*min-width: 64px;*/\r
    min-width: 36px;\r
    min-height: 32px;\r
    vertical-align: middle;\r
    text-align: center;\r
    text-overflow: ellipsis;\r
    font-family: var(-apple-system, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,);\r
    font-weight: 600;\r
    -webkit-transition: background-color .5s, -webkit-box-shadow .5s;\r
    transition: background-color .5s, -webkit-box-shadow .5s;\r
    -o-transition: box-shadow .5s, background-color .5s;\r
    transition: box-shadow .5s, background-color .5s;\r
    transition: box-shadow .5s, background-color .5s, -webkit-box-shadow .5s;\r
}\r
\r
button::-moz-focus-inner {\r
    border: none;\r
}\r
\r
button:active {\r
    -webkit-transition: background-color 0s;\r
    -o-transition: background-color 0s;\r
    transition: background-color 0s;\r
    color: #8e8e94;\r
    background: #d6d6db;\r
}\r
\r
button:disabled {\r
    color: #a4a4a5;\r
    background: #f3f3f6;\r
}\r
\r
button[type=submit] {\r
    color: #fff;\r
    background: #167dfa;\r
}\r
\r
button[type=submit]:active {\r
    color: #fff;\r
    background: #3f9afd;\r
}\r
\r
button[type=submit]:disabled {\r
    color: #fff;\r
    background: #a4a4a5;\r
}\r
\r
button[type=reset] {\r
    color: #167dfa;\r
    background: transparent;\r
}\r
\r
button[type=reset]:active {\r
    color: #3f9afd;\r
    background: rgba(33, 150, 243, 0.12);\r
}\r
\r
button[type=reset]:disabled {\r
    color: #a4a4a5;\r
    background: transparent;\r
}\r
\r
input[type=button] {\r
    color: #167dfa;\r
    background: #e7eaee;\r
    font-weight: bold;\r
    border: none;\r
    outline: none;\r
}\r
\r
input[type=button]:active {\r
    color: #3f9afd;\r
    background: #d6d6db;\r
    outline: none;\r
}\r
\r
input[type=button]:focus {\r
    outline: none;\r
}\r
\r
input[type=button]:disabled {\r
    color: #a4a4a5;\r
    background: #f3f3f6;\r
    outline: none;\r
}\r
\r
input[type=submit] {\r
    color: #167dfa;\r
    background: #d3e4fc;\r
    font-weight: bold;\r
    border: none;\r
    outline: none;\r
}\r
\r
input[type=submit]:active {\r
    color: #2d90fe;\r
    background: rgb(178, 213, 254);\r
    outline: none;\r
}\r
\r
input[type=submit]:focus {\r
    outline: none;\r
}\r
\r
input[type=submit]:disabled {\r
    color: #a4a4a5;\r
    background: #f3f3f6;\r
    outline: none;\r
}\r
\r
input[type=reset] {\r
    font-weight: normal;\r
    color: #167dfa;\r
    background: transparent;\r
    border: #e3e3e3 solid 2px;\r
    min-height: 32px;\r
    border-radius: 16px;\r
    outline: none;\r
}\r
\r
input[type=reset]:active {\r
    color: #2d90fe;\r
    background: rgba(33, 150, 243, 0.12);\r
    outline: none;\r
}\r
\r
input[type=reset]:focus {\r
    outline: none;\r
}\r
\r
input[type=reset]:disabled {\r
    color: #b2d5fe;\r
    border: #eeeeee solid 2px;\r
    background: transparent;\r
    outline: none;\r
}\r
\r
\r
/* input */\r
input {\r
    /*outline: #aab6c3 solid 1px;*/\r
    border: none;\r
    /*outline: #aab6c3 solid 1px;*/\r
    border-radius: 8px;\r
    padding: 0 16px;\r
    min-width: 64px;\r
    min-height: 36px;\r
    background: #e2e1e8;\r
    transition: background-color .5s;\r
    font-weight: 500;\r
}\r
\r
input:disabled {\r
    color: #a4a4a5;\r
}\r
\r
input:focus {\r
    /*transition: outline-color 0.2s;*/\r
    background: #eeeeee;\r
    outline: none;\r
\r
    /*outline: #167dfa solid 2px;*/\r
}\r
\r
input[type=checkbox] {\r
    appearance: none;\r
    outline: none;\r
    border: 1px solid #e3e3e3;\r
    padding: 0;\r
    margin: 0;\r
    min-width: 0;\r
    min-height: 0;\r
    width: 24px;\r
    height: 24px;\r
    border-radius: 12px;\r
\r
    transition: background-color .2s, border-color .2s;\r
}\r
\r
input[type=checkbox]:checked {\r
    background-color: #167dfa;\r
    border: 1px solid #167dfa;\r
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M9.172 16.242l-4.95-4.95-1.414 1.414 6.364 6.364 12-12-1.414-1.414z'/%3E%3C/svg%3E");\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    background-size: 15px;\r
}\r
\r
input[type=checkbox]:disabled {\r
    background-color: #f3f3f6;\r
    border: 1px solid #e3e3e3;\r
}\r
\r
\r
input[type=color] {\r
    appearance: none;\r
    width: 32px;\r
    height: 32px;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    border: none;\r
    min-width: 0;\r
    min-height: 0;\r
    padding: 0;\r
    margin: 0;\r
    border-radius: 50%;\r
    clip-path: circle(40%);\r
    outline: none;\r
    align-content: center;\r
    align-items: center;\r
    justify-content: center;\r
    overflow: hidden;\r
}\r
\r
input[type=color]::-webkit-color-swatch-wrapper {\r
    padding: 0;\r
    margin: 0;\r
    width: 32px;\r
    height: 32px;\r
    border: none;\r
    left: 10px;\r
    top: 10px;\r
}\r
\r
input[type=color]:disabled::-webkit-color-swatch-wrapper {\r
    background-color: #f3f3f6;\r
}\r
\r
input[type=file] {\r
    appearance: none;\r
    outline: none;\r
    border: none;\r
    transition: background-color .2s;\r
}\r
\r
input[type=file]::-webkit-file-upload-button {\r
    appearance: none;\r
    font-weight: normal;\r
    padding: 0 16px;\r
    color: #167dfa;\r
    background: transparent;\r
    border: #e3e3e3 solid 2px;\r
    min-height: 32px;\r
    border-radius: 16px;\r
    outline: none;\r
}\r
\r
input[type=file]::-webkit-file-upload-button:active {\r
    color: #2d90fe;\r
    background: rgba(33, 150, 243, 0.12);\r
    outline: none;\r
}\r
\r
input[type=file]:disabled::-webkit-file-upload-button {\r
    background-color: #f3f3f6;\r
    color: #a4a4a5;\r
}\r
\r
input[type=range] {\r
    -webkit-appearance: none;\r
    padding: 0;\r
    min-height: 0;\r
    /*min-width: 1px;*/\r
    box-shadow: none;\r
    height: 0.3em;\r
    border: none;\r
    border-radius: 0px;\r
    background: #e3e3e3;\r
    outline: none;\r
    opacity: 1;\r
    -webkit-transition: .2s;\r
    transition: opacity .2s;\r
}\r
\r
input[type=range]::-webkit-slider-thumb {\r
    -webkit-appearance: none;\r
    appearance: none;\r
    width: 20px;\r
    height: 20px;\r
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.30), 0px 1px 2px rgba(0, 0, 0, .4);\r
    background: #ffffff;\r
    cursor: pointer;\r
    border-radius: 10px;\r
}\r
\r
input[type=range]:focus {\r
    outline: none;\r
}\r
\r
input[type=range]:active::-webkit-slider-thumb {\r
    background: linear-gradient(#f3f3f6, #f3f3f6);\r
}\r
\r
input[type=range]:disabled::-webkit-slider-thumb {\r
    /*background: #f3f3f6;*/\r
    cursor: default;\r
    background: none;\r
    box-shadow: none;\r
}\r
\r
\r
input[type="radio"] {\r
    box-shadow: none;\r
    /* Add if not using autoprefixer */\r
    -webkit-appearance: none;\r
    /* Remove most all native input styles */\r
    appearance: none;\r
\r
    min-width: 0;\r
    min-height: 0;\r
    padding: 0px;\r
    /*margin: 1px;*/\r
    border: none;\r
    outline: none;\r
}\r
\r
input[type='radio']:after {\r
    width: 12px;\r
    height: 12px;\r
    border-radius: 15px;\r
    position: relative;\r
    background-color: #ffffff;\r
    content: '';\r
    display: inline-block;\r
    border: 2px solid #ffffff;\r
    outline: 2px solid #e1e1e2;\r
    transition: background-color .2s, border-color .2s;\r
}\r
\r
input[type='radio']:checked:after {\r
    background-color: #1879fe;\r
    content: '';\r
    border: 2px solid #ffffff;\r
    outline: 2px solid #1879fe;\r
}\r
\r
input[type='radio']:disabled:after {\r
    background-color: #f3f3f6;\r
    content: '';\r
    border: 2px solid #e3e3e3;\r
    outline: 2px solid #e3e3e3;\r
}\r
\r
textarea{\r
    /*resize: none;*/\r
    border: none;\r
    outline: none;\r
    background-color: transparent;\r
    border-radius: 0;\r
    padding: 10px 10px;\r
    font-size: 14px;\r
    border-top: 1px solid #e3e3e3;\r
    border-bottom: 1px solid #e3e3e3;\r
}\r
\r
textarea:disabled{\r
    background-color: #f3f3f6;\r
}\r
\r
select{\r
    border: none;\r
    outline: none;\r
    background-color: transparent;\r
    border-radius: 0;\r
    padding: 10px 10px;\r
    font-size: 14px;\r
}\r
\r
fieldset {\r
    margin-top: 20pt;\r
    position: relative;\r
    background-color: #f6f6f6;\r
    border-radius: 16px;\r
    border: none;\r
}\r
\r
fieldset legend {\r
    position: absolute;\r
    top: -20px;\r
    left: 10px;\r
    font-size: 10pt;\r
    font-weight: 600;\r
    color: #84838b;\r
    text-transform: uppercase;\r
}\r
`;
    }
  });

  // src/SetNativeUI.ts
  var PLATFORMS = {
    WINDOWS10: "WINDOWS10",
    MACOS: "MACOS",
    LINUX: "LINUX",
    ANDROID: "ANDROID",
    IOS: "IOS",
    UNKNOWN: "unknown"
  };
  var windows10CSS = Promise.resolve().then(() => __toESM(require_windows10()));
  var macosCSS = Promise.resolve().then(() => __toESM(require_macos()));
  var linuxCSS = Promise.resolve().then(() => __toESM(require_android()));
  var androidCSS = Promise.resolve().then(() => __toESM(require_android()));
  var iosCSS = Promise.resolve().then(() => __toESM(require_ios()));
  var NATIVE_UI_CSS_ID = "native-ui-css";
  function isIOS() {
    return [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
  }
  function isAndroid() {
    return navigator.userAgent.includes("Android");
  }
  function getPlatform() {
    try {
      const platform = navigator.platform;
      if (platform.startsWith("Win")) {
        return PLATFORMS.WINDOWS10;
      } else if (isAndroid()) {
        return PLATFORMS.ANDROID;
      } else if (isIOS()) {
        return PLATFORMS.IOS;
      } else if (platform.startsWith("Linux")) {
        return PLATFORMS.LINUX;
      } else if (platform.startsWith("Mac")) {
        return PLATFORMS.MACOS;
      }
      return PLATFORMS.UNKNOWN;
    } catch (e) {
      return PLATFORMS.UNKNOWN;
    }
  }
  function getPlatformCSSStr(platform) {
    return __async(this, null, function* () {
      switch (platform) {
        case PLATFORMS.WINDOWS10:
          return (yield windows10CSS).default;
        case PLATFORMS.MACOS:
          return (yield macosCSS).default;
        case PLATFORMS.LINUX:
          return (yield linuxCSS).default;
        case PLATFORMS.ANDROID:
          return (yield androidCSS).default;
        case PLATFORMS.IOS:
          return (yield iosCSS).default;
        default:
          return "";
      }
    });
  }
  function addCSS(platform) {
    return __async(this, null, function* () {
      const cssStr = yield getPlatformCSSStr(platform);
      const style = document.createElement("style");
      style.textContent = cssStr;
      style.id = NATIVE_UI_CSS_ID;
      document.head.appendChild(style);
    });
  }
  function removeOldCSS() {
    const oldNativeUICSS = document.getElementById(NATIVE_UI_CSS_ID);
    if (oldNativeUICSS) {
      oldNativeUICSS.remove();
    }
  }
  function setNativeUI(config) {
    return __async(this, null, function* () {
      removeOldCSS();
      if (!config) {
        config = {};
      }
      if (!config.platform) {
        config.platform = getPlatform();
      }
      yield addCSS(config.platform);
    });
  }

  // src/TampermonkeyScript.ts
  function main() {
    return __async(this, null, function* () {
      yield setNativeUI({});
    });
  }
  window.onload = () => {
    main().then(
      () => {
      }
    );
  };
})();

})();