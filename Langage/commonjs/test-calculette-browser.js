(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var tempALaCreation = 'truc';

function addition(nb1, nb2) {
    if (typeof nb1 === 'undefined') {
        throw new Error('nb1 is required');
    }
    nb2 = nb2 || 0; // valeur par défaut 0
    return Number(nb1) + Number(nb2);
}

module.exports = addition;
},{}],2:[function(require,module,exports){

var addition = require('./addition');

console.log(addition(1, 2));
},{"./addition":1}]},{},[2]);
