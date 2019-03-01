(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _example = require("./modules/example");

var _activeMenu = require("./modules/active-menu");

// saludo()
// despedida()
(0, _activeMenu.activeMenu)();
(0, _activeMenu.toggleInfo)();
(0, _activeMenu.addShowBtn)();
(0, _activeMenu.saveBtn)();
(0, _activeMenu.clicFiesta)();
(0, _activeMenu.addShowBtn_2)();

},{"./modules/active-menu":2,"./modules/example":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var activeMenu = exports.activeMenu = function activeMenu() {
  var menu = document.getElementById('main-menu');
  if (menu) {
    var links = Array.from(menu.querySelectorAll('a'));
    links.map(function (link) {
      if (link.href === location.href || link.href === location.href.slice(0, -1)) link.classList.add('active');
    });
  }
};
var toggleInfo = exports.toggleInfo = function toggleInfo() {
  var ipt = document.querySelector("#search_ipt");
  if (ipt) {
    var showDiv = document.querySelector(".info-product");
    var showDiv2 = document.querySelector(".info-product-2");
    var showDivDetail = document.querySelector(".info-product-detail");
    ipt.addEventListener("input", function (ev) {
      if (this.value == "00006") {
        showDiv.style.display = "block";
      } else {
        showDiv.style.display = "none";
        // showDivDetail.style.display = "none";
      }
      if (this.value == "29315") {
        showDiv2.style.display = "block";
      } else {
        showDiv2.style.display = "none";
        // showDivDetail.style.display = "none";
      }
    });
  }
};

var addShowBtn = exports.addShowBtn = function addShowBtn() {
  var btn = document.querySelector("#add_btn");
  if (btn) {
    var showDiv = document.querySelector(".info-product");
    var showDivDetail = document.querySelector(".info-product-detail");
    var update = document.querySelector("#update");

    btn.addEventListener("click", function () {
      showDiv.style.display = "none";
      showDivDetail.style.display = "block";
      update.innerHTML = "Total : S/ 47.00";
    });
  }
};

var addShowBtn_2 = exports.addShowBtn_2 = function addShowBtn_2() {
  var btn = document.querySelector("#add_btn-2");
  if (btn) {
    var showDiv = document.querySelector(".info-product-2");
    var showDivDetail = document.querySelector(".info-product-detail-2");
    var update = document.querySelector("#update");

    btn.addEventListener("click", function () {
      showDiv.style.display = "none";
      showDivDetail.style.display = "block";
      update.innerHTML = "Total : S/ 51.90";
    });
  }
};

var saveBtn = exports.saveBtn = function saveBtn() {
  var save = document.querySelector(".btn-guardar");
  if (save) {
    var fiesta = document.querySelector(".fiesta");
    var showDivDetail = document.querySelector(".info-product-detail");

    save.addEventListener("click", function () {
      showDivDetail.style.display = "none";
      fiesta.style.display = "block";
    });
  }
};

var clicFiesta = exports.clicFiesta = function clicFiesta() {
  var fiesta = document.querySelector(".fiesta");
  if (fiesta) {
    var recomendacion = document.querySelector(".recomendacion");

    fiesta.addEventListener('click', function () {
      fiesta.style.display = "none";
      recomendacion.style.display = "block";
    });
  }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

var saludo = exports.saludo = function saludo() {
  console.log('Hola mundo');
};

var despedida = exports.despedida = function despedida() {
  console.log('Adiós mundo');
};

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
