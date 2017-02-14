/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = t.d3 || {});
}(undefined, function (t) {
  "use strict";
  function n(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;return e === Er && n.documentElement.namespaceURI === Er ? n.createElement(t) : n.createElementNS(e, t);
    };
  }function e(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }function r(t, n, e) {
    return t = i(t, n, e), function (n) {
      var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }function i(n, e, r) {
    return function (i) {
      var o = t.event;t.event = i;try {
        n.call(this, this.__data__, e, r);
      } finally {
        t.event = o;
      }
    };
  }function o(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
    });
  }function u(t) {
    return function () {
      var n = this.__on;if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? n.length = i : delete this.__on;
      }
    };
  }function a(t, n, e) {
    var o = Ir.hasOwnProperty(t.type) ? r : i;return function (r, i, u) {
      var a,
          s = this.__on,
          l = o(n, i, u);if (s) for (var c = 0, h = s.length; c < h; ++c) {
        if ((a = s[c]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = l, a.capture = e), void (a.value = n);
      }this.addEventListener(t.type, l, e), a = { type: t.type, name: t.name, value: n, listener: l, capture: e }, s ? s.push(a) : this.__on = [a];
    };
  }function s() {}function l() {
    return [];
  }function c(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function h(t, n, e, r, i, o) {
    for (var u, a = 0, s = n.length, l = o.length; a < l; ++a) {
      (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new c(t, o[a]);
    }for (; a < s; ++a) {
      (u = n[a]) && (i[a] = u);
    }
  }function f(t, n, e, r, i, o, u) {
    var a,
        s,
        l,
        h = {},
        f = n.length,
        p = o.length,
        d = new Array(f);for (a = 0; a < f; ++a) {
      (s = n[a]) && (d[a] = l = Fr + u.call(s, s.__data__, a, n), l in h ? i[a] = s : h[l] = s);
    }for (a = 0; a < p; ++a) {
      l = Fr + u.call(t, o[a], a, o), (s = h[l]) ? (r[a] = s, s.__data__ = o[a], h[l] = null) : e[a] = new c(t, o[a]);
    }for (a = 0; a < f; ++a) {
      (s = n[a]) && h[d[a]] === s && (i[a] = s);
    }
  }function p(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function d(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function v(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function y(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }function g(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }function w(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }function m(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }function _(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function b(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }function x(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }function M(t) {
    return function () {
      delete this[t];
    };
  }function k(t, n) {
    return function () {
      this[t] = n;
    };
  }function N(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
    };
  }function A(t) {
    return t.trim().split(/^|\s+/);
  }function E(t) {
    return t.classList || new S(t);
  }function S(t) {
    this._node = t, this._names = A(t.getAttribute("class") || "");
  }function P(t, n) {
    for (var e = E(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function q(t, n) {
    for (var e = E(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function C(t) {
    return function () {
      P(this, t);
    };
  }function T(t) {
    return function () {
      q(this, t);
    };
  }function X(t, n) {
    return function () {
      (n.apply(this, arguments) ? P : q)(this, t);
    };
  }function O() {
    this.textContent = "";
  }function I(t) {
    return function () {
      this.textContent = t;
    };
  }function R(t) {
    return function () {
      var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
    };
  }function j() {
    this.innerHTML = "";
  }function V(t) {
    return function () {
      this.innerHTML = t;
    };
  }function $(t) {
    return function () {
      var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
    };
  }function Y() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function L() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function z() {
    return null;
  }function D() {
    var t = this.parentNode;t && t.removeChild(this);
  }function H(t, n, e) {
    var r = oi(t),
        i = r.CustomEvent;i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function B(t, n) {
    return function () {
      return H(this, t, n);
    };
  }function F(t, n) {
    return function () {
      return H(this, t, n.apply(this, arguments));
    };
  }function U(t, n) {
    this._groups = t, this._parents = n;
  }function J() {
    return new U([[document.documentElement]], wi);
  }function G() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new K(r);
  }function K(t) {
    this._ = t;
  }function Q(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function W(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function Z(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = bi, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function tt() {
    return Pi || (Ti(nt), Pi = Ci.now() + qi);
  }function nt() {
    Pi = 0;
  }function et() {
    this._call = this._time = this._next = null;
  }function rt(t, n, e) {
    var r = new et();return r.restart(t, n, e), r;
  }function it() {
    tt(), ++ki;for (var t, n = xi; n;) {
      (t = Pi - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--ki;
  }function ot() {
    Pi = (Si = Ci.now()) + qi, ki = Ni = 0;try {
      it();
    } finally {
      ki = 0, at(), Pi = 0;
    }
  }function ut() {
    var t = Ci.now(),
        n = t - Si;n > Ei && (qi -= n, Si = t);
  }function at() {
    for (var t, n, e = xi, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : xi = n);
    }Mi = t, st(r);
  }function st(t) {
    if (!ki) {
      Ni && (Ni = clearTimeout(Ni));var n = t - Pi;n > 24 ? (t < 1 / 0 && (Ni = setTimeout(ot, n)), Ai && (Ai = clearInterval(Ai))) : (Ai || (Si = Pi, Ai = setInterval(ut, Ei)), ki = 1, Ti(ot));
    }
  }function lt(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > Ri) throw new Error("too late");return e;
  }function ct(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > Vi) throw new Error("too late");return e;
  }function ht(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function ft(t, n, e) {
    function r(t) {
      e.state = ji, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
    }function i(r) {
      var l, c, h, f;if (e.state !== ji) return u();for (l in s) {
        if (f = s[l], f.name === e.name) {
          if (f.state === $i) return Xi(i);f.state === Yi ? (f.state = zi, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete s[l]) : +l < n && (f.state = zi, f.timer.stop(), delete s[l]);
        }
      }if (Xi(function () {
        e.state === $i && (e.state = Yi, e.timer.restart(o, e.delay, e.time), o(r));
      }), e.state = Vi, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Vi) {
        for (e.state = $i, a = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l) {
          (f = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (a[++c] = f);
        }a.length = c + 1;
      }
    }function o(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Li, 1), i = -1, o = a.length; ++i < o;) {
        a[i].call(null, r);
      }e.state === Li && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = zi, e.timer.stop(), delete s[n];for (var r in s) {
        return;
      }delete t.__transition;
    }var a,
        s = t.__transition;s[n] = e, e.timer = rt(r, 0, e.time);
  }function pt(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function dt() {}function vt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Wi.exec(t)) ? (n = parseInt(n[1], 16), new _t(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Zi.exec(t)) ? yt(parseInt(n[1], 16)) : (n = to.exec(t)) ? new _t(n[1], n[2], n[3], 1) : (n = no.exec(t)) ? new _t(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = eo.exec(t)) ? gt(n[1], n[2], n[3], n[4]) : (n = ro.exec(t)) ? gt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = io.exec(t)) ? bt(n[1], n[2] / 100, n[3] / 100, 1) : (n = oo.exec(t)) ? bt(n[1], n[2] / 100, n[3] / 100, n[4]) : uo.hasOwnProperty(t) ? yt(uo[t]) : "transparent" === t ? new _t(NaN, NaN, NaN, 0) : null;
  }function yt(t) {
    return new _t(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function gt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new _t(t, n, e, r);
  }function wt(t) {
    return t instanceof dt || (t = vt(t)), t ? (t = t.rgb(), new _t(t.r, t.g, t.b, t.opacity)) : new _t();
  }function mt(t, n, e, r) {
    return 1 === arguments.length ? wt(t) : new _t(t, n, e, null == r ? 1 : r);
  }function _t(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function bt(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new kt(t, n, e, r);
  }function xt(t) {
    if (t instanceof kt) return new kt(t.h, t.s, t.l, t.opacity);if (t instanceof dt || (t = vt(t)), !t) return new kt();if (t instanceof kt) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new kt(u, a, s, t.opacity);
  }function Mt(t, n, e, r) {
    return 1 === arguments.length ? xt(t) : new kt(t, n, e, null == r ? 1 : r);
  }function kt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Nt(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function At(t) {
    if (t instanceof St) return new St(t.l, t.a, t.b, t.opacity);if (t instanceof It) {
      var n = t.h * ao;return new St(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof _t || (t = wt(t));var e = Tt(t.r),
        r = Tt(t.g),
        i = Tt(t.b),
        o = Pt((.4124564 * e + .3575761 * r + .1804375 * i) / co),
        u = Pt((.2126729 * e + .7151522 * r + .072175 * i) / ho),
        a = Pt((.0193339 * e + .119192 * r + .9503041 * i) / fo);return new St(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }function Et(t, n, e, r) {
    return 1 === arguments.length ? At(t) : new St(t, n, e, null == r ? 1 : r);
  }function St(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function Pt(t) {
    return t > go ? Math.pow(t, 1 / 3) : t / yo + po;
  }function qt(t) {
    return t > vo ? t * t * t : yo * (t - po);
  }function Ct(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function Tt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Xt(t) {
    if (t instanceof It) return new It(t.h, t.c, t.l, t.opacity);t instanceof St || (t = At(t));var n = Math.atan2(t.b, t.a) * so;return new It(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Ot(t, n, e, r) {
    return 1 === arguments.length ? Xt(t) : new It(t, n, e, null == r ? 1 : r);
  }function It(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Rt(t) {
    if (t instanceof Vt) return new Vt(t.h, t.s, t.l, t.opacity);t instanceof _t || (t = wt(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (No * r + Mo * n - ko * e) / (No + Mo - ko),
        o = r - i,
        u = (xo * (e - i) - _o * o) / bo,
        a = Math.sqrt(u * u + o * o) / (xo * i * (1 - i)),
        s = a ? Math.atan2(u, o) * so - 120 : NaN;return new Vt(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function jt(t, n, e, r) {
    return 1 === arguments.length ? Rt(t) : new Vt(t, n, e, null == r ? 1 : r);
  }function Vt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function $t(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Yt(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function Lt(t, n) {
    var e = n - t;return e ? $t(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : qo(isNaN(t) ? n : t);
  }function zt(t) {
    return 1 === (t = +t) ? Dt : function (n, e) {
      return e - n ? Yt(n, e, t) : qo(isNaN(n) ? e : n);
    };
  }function Dt(t, n) {
    var e = n - t;return e ? $t(t, e) : qo(isNaN(t) ? n : t);
  }function Ht(t) {
    return function () {
      return t;
    };
  }function Bt(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Ft(t) {
    return "none" === t ? jo : (Ao || (Ao = document.createElement("DIV"), Eo = document.documentElement, So = document.defaultView), Ao.style.transform = t, t = So.getComputedStyle(Eo.appendChild(Ao), null).getPropertyValue("transform"), Eo.removeChild(Ao), t = t.slice(7, -1).split(","), Vo(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }function Ut(t) {
    return null == t ? jo : (Po || (Po = document.createElementNS("http://www.w3.org/2000/svg", "g")), Po.setAttribute("transform", t), (t = Po.transform.baseVal.consolidate()) ? (t = t.matrix, Vo(t.a, t.b, t.c, t.d, t.e, t.f)) : jo);
  }function Jt(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: To(t, i) }, { i: s - 2, x: To(r, o) });
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }function u(t, n, e, o) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: To(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, o) {
      t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: To(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function s(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: To(t, e) }, { i: a - 2, x: To(n, r) });
      } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, o = i.length; ++e < o;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function Gt(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = jt(n)).h, (r = jt(r)).h),
            o = Dt(n.s, r.s),
            u = Dt(n.l, r.l),
            a = Dt(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function Kt(t, n) {
    var e, r;return function () {
      var i = ct(this, t),
          o = i.tween;if (o !== e) {
        r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
          if (r[u].name === n) {
            r = r.slice(), r.splice(u, 1);break;
          }
        }
      }i.tween = r;
    };
  }function Qt(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var o = ct(this, t),
          u = o.tween;if (u !== r) {
        i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, l = i.length; s < l; ++s) {
          if (i[s].name === n) {
            i[s] = a;break;
          }
        }s === l && i.push(a);
      }o.tween = i;
    };
  }function Wt(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = ct(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return ht(t, r).value[n];
    };
  }function Zt(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function tn(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function nn(t, n, e) {
    var r, i;return function () {
      var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function en(t, n, e) {
    var r, i;return function () {
      var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function rn(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function on(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function un(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function an(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function sn(t, n) {
    return function () {
      lt(this, t).delay = +n.apply(this, arguments);
    };
  }function ln(t, n) {
    return n = +n, function () {
      lt(this, t).delay = n;
    };
  }function cn(t, n) {
    return function () {
      ct(this, t).duration = +n.apply(this, arguments);
    };
  }function hn(t, n) {
    return n = +n, function () {
      ct(this, t).duration = n;
    };
  }function fn(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      ct(this, t).ease = n;
    };
  }function pn(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function dn(t, n, e) {
    var r,
        i,
        o = pn(n) ? lt : ct;return function () {
      var u = o(this, t),
          a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
    };
  }function vn(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function yn(t, n) {
    var e, r, i;return function () {
      var o = oi(this).getComputedStyle(this, null),
          u = o.getPropertyValue(t),
          a = (this.style.removeProperty(t), o.getPropertyValue(t));return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a);
    };
  }function gn(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function wn(t, n, e) {
    var r, i;return function () {
      var o = oi(this).getComputedStyle(this, null).getPropertyValue(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function mn(t, n, e) {
    var r, i, o;return function () {
      var u = oi(this).getComputedStyle(this, null),
          a = u.getPropertyValue(t),
          s = e(this);return null == s && (this.style.removeProperty(t), s = u.getPropertyValue(t)), a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
    };
  }function _n(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function bn(t) {
    return function () {
      this.textContent = t;
    };
  }function xn(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function Mn(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function kn(t) {
    return J().transition(t);
  }function Nn() {
    return ++uu;
  }function An(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function En(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return pu.time = tt(), pu;
    }return e;
  }function Sn(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = mi(this);for (var r in t) {
        e.attr(r, t[r]);
      }
    });
  }function Pn(t, n) {
    for (var e in n) {
      t.attr(e, n[e]);
    }return t;
  }function qn(t, n, e) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          r = mi(this);for (var i in t) {
        r.style(i, t[i], e);
      }
    });
  }function Cn(t, n, e) {
    for (var r in n) {
      t.style(r, n[r], e);
    }return t;
  }function Tn(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = mi(this);for (var r in t) {
        e.property(r, t[r]);
      }
    });
  }function Xn(t, n) {
    for (var e in n) {
      t.property(e, n[e]);
    }return t;
  }function On() {}function In(t, n) {
    var e = new On();if (t instanceof On) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var u in t) {
      e.set(u, t[u]);
    }return e;
  }function Rn() {}function jn(t, n) {
    var e = new Rn();if (t instanceof Rn) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }function Vn() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new $n(r);
  }function $n(t) {
    this._ = t;
  }function Yn(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function Ln(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function zn(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = bu, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function Dn() {
    return Pu || (Tu(Hn), Pu = Cu.now() + qu);
  }function Hn() {
    Pu = 0;
  }function Bn() {
    this._call = this._time = this._next = null;
  }function Fn(t, n, e) {
    var r = new Bn();return r.restart(t, n, e), r;
  }function Un() {
    Dn(), ++ku;for (var t, n = xu; n;) {
      (t = Pu - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--ku;
  }function Jn() {
    Pu = (Su = Cu.now()) + qu, ku = Nu = 0;try {
      Un();
    } finally {
      ku = 0, Kn(), Pu = 0;
    }
  }function Gn() {
    var t = Cu.now(),
        n = t - Su;n > Eu && (qu -= n, Su = t);
  }function Kn() {
    for (var t, n, e = xu, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : xu = n);
    }Mu = t, Qn(r);
  }function Qn(t) {
    if (!ku) {
      Nu && (Nu = clearTimeout(Nu));var n = t - Pu;n > 24 ? (t < 1 / 0 && (Nu = setTimeout(Jn, n)), Au && (Au = clearInterval(Au))) : (Au || (Su = Pu, Au = setInterval(Gn, Eu)), ku = 1, Tu(Jn));
    }
  }function Wn(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > Ru) throw new Error("too late");return e;
  }function Zn(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > Vu) throw new Error("too late");return e;
  }function te(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function ne(t, n, e) {
    function r(t) {
      e.state = ju, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
    }function i(r) {
      var l, c, h, f;if (e.state !== ju) return u();for (l in s) {
        if (f = s[l], f.name === e.name) {
          if (f.state === $u) return Xu(i);f.state === Yu ? (f.state = zu, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete s[l]) : +l < n && (f.state = zu, f.timer.stop(), delete s[l]);
        }
      }if (Xu(function () {
        e.state === $u && (e.state = Yu, e.timer.restart(o, e.delay, e.time), o(r));
      }), e.state = Vu, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Vu) {
        for (e.state = $u, a = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l) {
          (f = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (a[++c] = f);
        }a.length = c + 1;
      }
    }function o(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Lu, 1), i = -1, o = a.length; ++i < o;) {
        a[i].call(null, r);
      }e.state === Lu && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = zu, e.timer.stop(), delete s[n];for (var r in s) {
        return;
      }delete t.__transition;
    }var a,
        s = t.__transition;s[n] = e, e.timer = Fn(r, 0, e.time);
  }function ee(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function re() {}function ie(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Wu.exec(t)) ? (n = parseInt(n[1], 16), new le(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Zu.exec(t)) ? oe(parseInt(n[1], 16)) : (n = ta.exec(t)) ? new le(n[1], n[2], n[3], 1) : (n = na.exec(t)) ? new le(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ea.exec(t)) ? ue(n[1], n[2], n[3], n[4]) : (n = ra.exec(t)) ? ue(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = ia.exec(t)) ? ce(n[1], n[2] / 100, n[3] / 100, 1) : (n = oa.exec(t)) ? ce(n[1], n[2] / 100, n[3] / 100, n[4]) : ua.hasOwnProperty(t) ? oe(ua[t]) : "transparent" === t ? new le(NaN, NaN, NaN, 0) : null;
  }function oe(t) {
    return new le(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function ue(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new le(t, n, e, r);
  }function ae(t) {
    return t instanceof re || (t = ie(t)), t ? (t = t.rgb(), new le(t.r, t.g, t.b, t.opacity)) : new le();
  }function se(t, n, e, r) {
    return 1 === arguments.length ? ae(t) : new le(t, n, e, null == r ? 1 : r);
  }function le(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function ce(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new pe(t, n, e, r);
  }function he(t) {
    if (t instanceof pe) return new pe(t.h, t.s, t.l, t.opacity);if (t instanceof re || (t = ie(t)), !t) return new pe();if (t instanceof pe) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new pe(u, a, s, t.opacity);
  }function fe(t, n, e, r) {
    return 1 === arguments.length ? he(t) : new pe(t, n, e, null == r ? 1 : r);
  }function pe(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function de(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function ve(t) {
    if (t instanceof ge) return new ge(t.l, t.a, t.b, t.opacity);if (t instanceof ke) {
      var n = t.h * aa;return new ge(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof le || (t = ae(t));var e = be(t.r),
        r = be(t.g),
        i = be(t.b),
        o = we((.4124564 * e + .3575761 * r + .1804375 * i) / ca),
        u = we((.2126729 * e + .7151522 * r + .072175 * i) / ha),
        a = we((.0193339 * e + .119192 * r + .9503041 * i) / fa);return new ge(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }function ye(t, n, e, r) {
    return 1 === arguments.length ? ve(t) : new ge(t, n, e, null == r ? 1 : r);
  }function ge(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function we(t) {
    return t > ya ? Math.pow(t, 1 / 3) : t / va + pa;
  }function me(t) {
    return t > da ? t * t * t : va * (t - pa);
  }function _e(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function be(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function xe(t) {
    if (t instanceof ke) return new ke(t.h, t.c, t.l, t.opacity);t instanceof ge || (t = ve(t));var n = Math.atan2(t.b, t.a) * sa;return new ke(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Me(t, n, e, r) {
    return 1 === arguments.length ? xe(t) : new ke(t, n, e, null == r ? 1 : r);
  }function ke(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Ne(t) {
    if (t instanceof Ee) return new Ee(t.h, t.s, t.l, t.opacity);t instanceof le || (t = ae(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (ka * r + xa * n - Ma * e) / (ka + xa - Ma),
        o = r - i,
        u = (ba * (e - i) - ma * o) / _a,
        a = Math.sqrt(u * u + o * o) / (ba * i * (1 - i)),
        s = a ? Math.atan2(u, o) * sa - 120 : NaN;return new Ee(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function Ae(t, n, e, r) {
    return 1 === arguments.length ? Ne(t) : new Ee(t, n, e, null == r ? 1 : r);
  }function Ee(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Se(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Pe(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function qe(t, n) {
    var e = n - t;return e ? Se(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Pa(isNaN(t) ? n : t);
  }function Ce(t) {
    return 1 === (t = +t) ? Te : function (n, e) {
      return e - n ? Pe(n, e, t) : Pa(isNaN(n) ? e : n);
    };
  }function Te(t, n) {
    var e = n - t;return e ? Se(t, e) : Pa(isNaN(t) ? n : t);
  }function Xe(t) {
    return function () {
      return t;
    };
  }function Oe(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Ie(t) {
    return "none" === t ? Ra : (Na || (Na = document.createElement("DIV"), Aa = document.documentElement, Ea = document.defaultView), Na.style.transform = t, t = Ea.getComputedStyle(Aa.appendChild(Na), null).getPropertyValue("transform"), Aa.removeChild(Na), t = t.slice(7, -1).split(","), ja(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }function Re(t) {
    return null == t ? Ra : (Sa || (Sa = document.createElementNS("http://www.w3.org/2000/svg", "g")), Sa.setAttribute("transform", t), (t = Sa.transform.baseVal.consolidate()) ? (t = t.matrix, ja(t.a, t.b, t.c, t.d, t.e, t.f)) : Ra);
  }function je(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: Ca(t, i) }, { i: s - 2, x: Ca(r, o) });
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }function u(t, n, e, o) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: Ca(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, o) {
      t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: Ca(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function s(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: Ca(t, e) }, { i: a - 2, x: Ca(n, r) });
      } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, o = i.length; ++e < o;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function Ve(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Ae(n)).h, (r = Ae(r)).h),
            o = Te(n.s, r.s),
            u = Te(n.l, r.l),
            a = Te(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function $e(t, n) {
    var e, r;return function () {
      var i = Zn(this, t),
          o = i.tween;if (o !== e) {
        r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
          if (r[u].name === n) {
            r = r.slice(), r.splice(u, 1);break;
          }
        }
      }i.tween = r;
    };
  }function Ye(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var o = Zn(this, t),
          u = o.tween;if (u !== r) {
        i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, l = i.length; s < l; ++s) {
          if (i[s].name === n) {
            i[s] = a;break;
          }
        }s === l && i.push(a);
      }o.tween = i;
    };
  }function Le(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = Zn(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return te(t, r).value[n];
    };
  }function ze(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function De(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function He(t, n, e) {
    var r, i;return function () {
      var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function Be(t, n, e) {
    var r, i;return function () {
      var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function Fe(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function Ue(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function Je(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function Ge(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function Ke(t, n) {
    return function () {
      Wn(this, t).delay = +n.apply(this, arguments);
    };
  }function Qe(t, n) {
    return n = +n, function () {
      Wn(this, t).delay = n;
    };
  }function We(t, n) {
    return function () {
      Zn(this, t).duration = +n.apply(this, arguments);
    };
  }function Ze(t, n) {
    return n = +n, function () {
      Zn(this, t).duration = n;
    };
  }function tr(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      Zn(this, t).ease = n;
    };
  }function nr(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function er(t, n, e) {
    var r,
        i,
        o = nr(n) ? Wn : Zn;return function () {
      var u = o(this, t),
          a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
    };
  }function rr(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function ir(t, n) {
    var e, r, i;return function () {
      var o = oi(this).getComputedStyle(this, null),
          u = o.getPropertyValue(t),
          a = (this.style.removeProperty(t), o.getPropertyValue(t));return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a);
    };
  }function or(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function ur(t, n, e) {
    var r, i;return function () {
      var o = oi(this).getComputedStyle(this, null).getPropertyValue(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function ar(t, n, e) {
    var r, i, o;return function () {
      var u = oi(this).getComputedStyle(this, null),
          a = u.getPropertyValue(t),
          s = e(this);return null == s && (this.style.removeProperty(t), s = u.getPropertyValue(t)), a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
    };
  }function sr(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function lr(t) {
    return function () {
      this.textContent = t;
    };
  }function cr(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function hr(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function fr(t) {
    return J().transition(t);
  }function pr() {
    return ++os;
  }function dr(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function vr(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return fs.time = Dn(), fs;
    }return e;
  }function yr() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new gr(r);
  }function gr(t) {
    this._ = t;
  }function wr(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function mr(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function _r(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = ds, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function br(t) {
    return function (n, e) {
      t(null == n ? e : null);
    };
  }function xr(t) {
    var n = t.responseType;return n && "text" !== n ? t.response : t.responseText;
  }function Mr(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function kr(t, n) {
    var e = Mr(t);return function (r, i) {
      return n(e(r), i, t);
    };
  }function Nr(t) {
    var n = Object.create(null),
        e = [];return t.forEach(function (t) {
      for (var r in t) {
        r in n || e.push(n[r] = r);
      }
    }), e;
  }function Ar(t, n) {
    return function (e) {
      return t(e.responseText, n);
    };
  }var Er = "http://www.w3.org/1999/xhtml",
      Sr = { svg: "http://www.w3.org/2000/svg", xhtml: Er, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      Pr = function Pr(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Sr.hasOwnProperty(n) ? { space: Sr[n], local: t } : t;
  },
      qr = function qr(t) {
    var r = Pr(t);return (r.local ? e : n)(r);
  },
      Cr = function Cr(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var Tr = document.documentElement;if (!Tr.matches) {
      var Xr = Tr.webkitMatchesSelector || Tr.msMatchesSelector || Tr.mozMatchesSelector || Tr.oMatchesSelector;Cr = function Cr(t) {
        return function () {
          return Xr.call(this, t);
        };
      };
    }
  }var Or = Cr,
      Ir = {};if (t.event = null, "undefined" != typeof document) {
    var Rr = document.documentElement;"onmouseenter" in Rr || (Ir = { mouseenter: "mouseover", mouseleave: "mouseout" });
  }var jr = function jr(t, n, e) {
    var r,
        i,
        s = o(t + ""),
        l = s.length;{
      if (!(arguments.length < 2)) {
        for (c = n ? a : u, null == e && (e = !1), r = 0; r < l; ++r) {
          this.each(c(s[r], n, e));
        }return this;
      }var c = this.node().__on;if (c) for (var h, f = 0, p = c.length; f < p; ++f) {
        for (r = 0, h = c[f]; r < l; ++r) {
          if ((i = s[r]).type === h.type && i.name === h.name) return h.value;
        }
      }
    }
  },
      Vr = function Vr(t) {
    return null == t ? s : function () {
      return this.querySelector(t);
    };
  },
      $r = function $r(t) {
    "function" != typeof t && (t = Vr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u, a = n[i], s = a.length, l = r[i] = new Array(s), c = 0; c < s; ++c) {
        (o = a[c]) && (u = t.call(o, o.__data__, c, a)) && ("__data__" in o && (u.__data__ = o.__data__), l[c] = u);
      }
    }return new U(r, this._parents);
  },
      Yr = function Yr(t) {
    return null == t ? l : function () {
      return this.querySelectorAll(t);
    };
  },
      Lr = function Lr(t) {
    "function" != typeof t && (t = Yr(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
      for (var u, a = n[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
      }
    }return new U(r, i);
  },
      zr = function zr(t) {
    "function" != typeof t && (t = Or(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new U(r, this._parents);
  },
      Dr = function Dr(t) {
    return new Array(t.length);
  },
      Hr = function Hr() {
    return new U(this._enter || this._groups.map(Dr), this._parents);
  };c.prototype = { constructor: c, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var Br = function Br(t) {
    return function () {
      return t;
    };
  },
      Fr = "$",
      Ur = function Ur(t, n) {
    if (!t) return v = new Array(this.size()), l = -1, this.each(function (t) {
      v[++l] = t;
    }), v;var e = n ? f : h,
        r = this._parents,
        i = this._groups;"function" != typeof t && (t = Br(t));for (var o = i.length, u = new Array(o), a = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
      var c = r[l],
          p = i[l],
          d = p.length,
          v = t.call(c, c && c.__data__, l, r),
          y = v.length,
          g = a[l] = new Array(y),
          w = u[l] = new Array(y),
          m = s[l] = new Array(d);e(c, p, g, w, m, v, n);for (var _, b, x = 0, M = 0; x < y; ++x) {
        if (_ = g[x]) {
          for (x >= M && (M = x + 1); !(b = w[M]) && ++M < y;) {}_._next = b || null;
        }
      }
    }return u = new U(u, r), u._enter = a, u._exit = s, u;
  },
      Jr = function Jr() {
    return new U(this._exit || this._groups.map(Dr), this._parents);
  },
      Gr = function Gr(t) {
    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p) {
        (s = l[p] || c[p]) && (f[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new U(u, this._parents);
  },
      Kr = function Kr() {
    for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
      for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
        (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
      }
    }return this;
  },
      Qr = function Qr(t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }t || (t = p);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var u, a = e[o], s = a.length, l = i[o] = new Array(s), c = 0; c < s; ++c) {
        (u = a[c]) && (l[c] = u);
      }l.sort(n);
    }return new U(i, this._parents).order();
  },
      Wr = function Wr() {
    var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
  },
      Zr = function Zr() {
    var t = new Array(this.size()),
        n = -1;return this.each(function () {
      t[++n] = this;
    }), t;
  },
      ti = function ti() {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];if (u) return u;
      }
    }return null;
  },
      ni = function ni() {
    var t = 0;return this.each(function () {
      ++t;
    }), t;
  },
      ei = function ei() {
    return !this.node();
  },
      ri = function ri(t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
      for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) {
        (i = o[u]) && t.call(i, i.__data__, u, o);
      }
    }return this;
  },
      ii = function ii(t, n) {
    var e = Pr(t);if (arguments.length < 2) {
      var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }return this.each((null == n ? e.local ? v : d : "function" == typeof n ? e.local ? m : w : e.local ? g : y)(e, n));
  },
      oi = function oi(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  },
      ui = function ui(t, n, e) {
    var r;return arguments.length > 1 ? this.each((null == n ? _ : "function" == typeof n ? x : b)(t, n, null == e ? "" : e)) : oi(r = this.node()).getComputedStyle(r, null).getPropertyValue(t);
  },
      ai = function ai(t, n) {
    return arguments.length > 1 ? this.each((null == n ? M : "function" == typeof n ? N : k)(t, n)) : this.node()[t];
  };S.prototype = { add: function add(t) {
      var n = this._names.indexOf(t);n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var si = function si(t, n) {
    var e = A(t + "");if (arguments.length < 2) {
      for (var r = E(this.node()), i = -1, o = e.length; ++i < o;) {
        if (!r.contains(e[i])) return !1;
      }return !0;
    }return this.each(("function" == typeof n ? X : n ? C : T)(e, n));
  },
      li = function li(t) {
    return arguments.length ? this.each(null == t ? O : ("function" == typeof t ? R : I)(t)) : this.node().textContent;
  },
      ci = function ci(t) {
    return arguments.length ? this.each(null == t ? j : ("function" == typeof t ? $ : V)(t)) : this.node().innerHTML;
  },
      hi = function hi() {
    return this.each(Y);
  },
      fi = function fi() {
    return this.each(L);
  },
      pi = function pi(t) {
    var n = "function" == typeof t ? t : qr(t);return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
      di = function di(t, n) {
    var e = "function" == typeof t ? t : qr(t),
        r = null == n ? z : "function" == typeof n ? n : Vr(n);return this.select(function () {
      return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
    });
  },
      vi = function vi() {
    return this.each(D);
  },
      yi = function yi(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
  },
      gi = function gi(t, n) {
    return this.each(("function" == typeof n ? F : B)(t, n));
  },
      wi = [null];U.prototype = J.prototype = { constructor: U, select: $r, selectAll: Lr, filter: zr, data: Ur, enter: Hr, exit: Jr, merge: Gr, order: Kr, sort: Qr, call: Wr, nodes: Zr, node: ti, size: ni, empty: ei, each: ri, attr: ii, style: ui, property: ai, classed: si, text: li, html: ci, raise: hi, lower: fi, append: pi, insert: di, remove: vi, datum: yi, on: jr, dispatch: gi };var mi = function mi(t) {
    return "string" == typeof t ? new U([[document.querySelector(t)]], [document.documentElement]) : new U([[t]], wi);
  },
      _i = function _i(t) {
    return "string" == typeof t ? new U([document.querySelectorAll(t)], [document.documentElement]) : new U([null == t ? [] : t], wi);
  },
      bi = { value: function value() {} };K.prototype = G.prototype = { constructor: K, on: function on(t, n) {
      var e,
          r = this._,
          i = Q(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = Z(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = Z(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = W(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new K(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (r = this._[t], o = 0, e = r.length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var xi,
      Mi,
      ki = 0,
      Ni = 0,
      Ai = 0,
      Ei = 1e3,
      Si = 0,
      Pi = 0,
      qi = 0,
      Ci = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Ti = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };et.prototype = rt.prototype = { constructor: et, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? tt() : +e) + (null == n ? 0 : +n), this._next || Mi === this || (Mi ? Mi._next = this : xi = this, Mi = this), this._call = t, this._time = e, st();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, st());
    } };var Xi = function Xi(t, n, e) {
    var r = new et();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      Oi = G("start", "end", "interrupt"),
      Ii = [],
      Ri = 0,
      ji = 1,
      Vi = 2,
      $i = 3,
      Yi = 4,
      Li = 5,
      zi = 6,
      Di = function Di(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};ft(t, e, { name: n, index: r, group: i, on: Oi, tween: Ii, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Ri });
  },
      Hi = function Hi(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > Vi && e.state < Li, e.state = zi, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      Bi = function Bi(t) {
    return this.each(function () {
      Hi(this, t);
    });
  },
      Fi = function Fi(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      Ui = .7,
      Ji = 1 / Ui,
      Gi = "\\s*([+-]?\\d+)\\s*",
      Ki = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Qi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Wi = /^#([0-9a-f]{3})$/,
      Zi = /^#([0-9a-f]{6})$/,
      to = new RegExp("^rgb\\(" + [Gi, Gi, Gi] + "\\)$"),
      no = new RegExp("^rgb\\(" + [Qi, Qi, Qi] + "\\)$"),
      eo = new RegExp("^rgba\\(" + [Gi, Gi, Gi, Ki] + "\\)$"),
      ro = new RegExp("^rgba\\(" + [Qi, Qi, Qi, Ki] + "\\)$"),
      io = new RegExp("^hsl\\(" + [Ki, Qi, Qi] + "\\)$"),
      oo = new RegExp("^hsla\\(" + [Ki, Qi, Qi, Ki] + "\\)$"),
      uo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Fi(dt, vt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Fi(_t, mt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ji : Math.pow(Ji, t), new _t(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ui : Math.pow(Ui, t), new _t(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Fi(kt, Mt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ji : Math.pow(Ji, t), new kt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ui : Math.pow(Ui, t), new kt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new _t(Nt(t >= 240 ? t - 240 : t + 120, i, r), Nt(t, i, r), Nt(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var ao = Math.PI / 180,
      so = 180 / Math.PI,
      lo = 18,
      co = .95047,
      ho = 1,
      fo = 1.08883,
      po = 4 / 29,
      vo = 6 / 29,
      yo = 3 * vo * vo,
      go = vo * vo * vo;Fi(St, Et, pt(dt, { brighter: function brighter(t) {
      return new St(this.l + lo * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new St(this.l - lo * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = ho * qt(t), n = co * qt(n), e = fo * qt(e), new _t(Ct(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ct(-.969266 * n + 1.8760108 * t + .041556 * e), Ct(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Fi(It, Ot, pt(dt, { brighter: function brighter(t) {
      return new It(this.h, this.c, this.l + lo * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new It(this.h, this.c, this.l - lo * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return At(this).rgb();
    } }));var wo = -.14861,
      mo = 1.78277,
      _o = -.29227,
      bo = -.90649,
      xo = 1.97294,
      Mo = xo * bo,
      ko = xo * mo,
      No = mo * _o - bo * wo;Fi(Vt, jt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ji : Math.pow(Ji, t), new Vt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ui : Math.pow(Ui, t), new Vt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * ao,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new _t(255 * (n + e * (wo * r + mo * i)), 255 * (n + e * (_o * r + bo * i)), 255 * (n + e * (xo * r)), this.opacity);
    } }));var Ao,
      Eo,
      So,
      Po,
      qo = function qo(t) {
    return function () {
      return t;
    };
  },
      Co = function t(n) {
    function e(t, n) {
      var e = r((t = mt(t)).r, (n = mt(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Dt(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = zt(n);return e.gamma = t, e;
  }(1),
      To = function To(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      Xo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Oo = new RegExp(Xo.source, "g"),
      Io = function Io(t, n) {
    var e,
        r,
        i,
        o = Xo.lastIndex = Oo.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = Xo.exec(t)) && (r = Oo.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: To(e, r) })), o = Oo.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? Bt(s[0].x) : Ht(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      Ro = 180 / Math.PI,
      jo = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      Vo = function Vo(t, n, e, r, i, o) {
    var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Ro, skewX: Math.atan(s) * Ro, scaleX: u, scaleY: a };
  },
      $o = Jt(Ft, "px, ", "px)", "deg)"),
      Yo = Jt(Ut, ", ", ")", ")");Gt(Lt);var Lo = (Gt(Dt), function (t, n) {
    var e = this._id;if (t += "", arguments.length < 2) {
      for (var r, i = ht(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
        if ((r = i[o]).name === t) return r.value;
      }return null;
    }return this.each((null == n ? Kt : Qt)(e, t, n));
  }),
      zo = function zo(t, n) {
    var e;return ("number" == typeof n ? To : n instanceof vt ? Co : (e = vt(n)) ? (n = e, Co) : Io)(t, n);
  },
      Do = function Do(t, n) {
    var e = Pr(t),
        r = "transform" === e ? Yo : zo;return this.attrTween(t, "function" == typeof n ? (e.local ? on : rn)(e, r, Wt(this, "attr." + t, n)) : null == n ? (e.local ? tn : Zt)(e) : (e.local ? en : nn)(e, r, n));
  },
      Ho = function Ho(t, n) {
    var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = Pr(t);return this.tween(e, (r.local ? un : an)(r, n));
  },
      Bo = function Bo(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? sn : ln)(n, t)) : ht(this.node(), n).delay;
  },
      Fo = function Fo(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? cn : hn)(n, t)) : ht(this.node(), n).duration;
  },
      Uo = function Uo(t) {
    var n = this._id;return arguments.length ? this.each(fn(n, t)) : ht(this.node(), n).ease;
  },
      Jo = function Jo(t) {
    "function" != typeof t && (t = Or(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new Mn(r, this._parents, this._name, this._id);
  },
      Go = function Go(t) {
    if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p) {
        (s = l[p] || c[p]) && (f[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new Mn(u, this._parents, this._name, this._id);
  },
      Ko = function Ko(t, n) {
    var e = this._id;return arguments.length < 2 ? ht(this.node(), e).on.on(t) : this.each(dn(e, t, n));
  },
      Qo = function Qo() {
    return this.on("end.remove", vn(this._id));
  },
      Wo = function Wo(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = Vr(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
      for (var a, s, l = r[u], c = l.length, h = o[u] = new Array(c), f = 0; f < c; ++f) {
        (a = l[f]) && (s = t.call(a, a.__data__, f, l)) && ("__data__" in a && (s.__data__ = a.__data__), h[f] = s, Di(h[f], n, e, f, h, ht(a, e)));
      }
    }return new Mn(o, this._parents, n, e);
  },
      Zo = function Zo(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = Yr(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
      for (var s, l = r[a], c = l.length, h = 0; h < c; ++h) {
        if (s = l[h]) {
          for (var f, p = t.call(s, s.__data__, h, l), d = ht(s, e), v = 0, y = p.length; v < y; ++v) {
            (f = p[v]) && Di(f, n, e, v, p, d);
          }o.push(p), u.push(s);
        }
      }
    }return new Mn(o, u, n, e);
  },
      tu = J.prototype.constructor,
      nu = function nu() {
    return new tu(this._groups, this._parents);
  },
      eu = function eu(t, n, e) {
    var r = "transform" == (t += "") ? $o : zo;return null == n ? this.styleTween(t, yn(t, r)).on("end.style." + t, gn(t)) : this.styleTween(t, "function" == typeof n ? mn(t, r, Wt(this, "style." + t, n)) : wn(t, r, n), e);
  },
      ru = function ru(t, n, e) {
    var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, _n(t, n, null == e ? "" : e));
  },
      iu = function iu(t) {
    return this.tween("text", "function" == typeof t ? xn(Wt(this, "text", t)) : bn(null == t ? "" : t + ""));
  },
      ou = function ou() {
    for (var t = this._name, n = this._id, e = Nn(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        if (u = a[l]) {
          var c = ht(u, n);Di(u, t, e, l, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
      }
    }return new Mn(r, this._parents, t, e);
  },
      uu = 0,
      au = J.prototype;Mn.prototype = kn.prototype = { constructor: Mn, select: Wo, selectAll: Zo, filter: Jo, merge: Go, selection: nu, transition: ou, call: au.call, nodes: au.nodes, node: au.node, size: au.size, empty: au.empty, each: au.each, on: Ko, attr: Do, attrTween: Ho, style: eu, styleTween: ru, text: iu, remove: Qo, tween: Lo, delay: Bo, duration: Fo, ease: Uo };var su = 3,
      lu = (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(su), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(su), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(su), 1.70158),
      cu = (function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(lu), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(lu), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(lu), 2 * Math.PI),
      hu = 1,
      fu = .3,
      pu = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= cu);return r.amplitude = function (n) {
      return t(n, e * cu);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(hu, fu), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= cu);return r.amplitude = function (n) {
      return t(n, e * cu);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(hu, fu), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= cu);return r.amplitude = function (n) {
      return t(n, e * cu);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(hu, fu), { time: null, delay: 0, duration: 250, ease: An }),
      du = function du(t) {
    var n, e;t instanceof Mn ? (n = t._id, t = t._name) : (n = Nn(), (e = pu).time = tt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && Di(u, t, n, l, a, e || En(u, n));
      }
    }return new Mn(r, this._parents, t, n);
  };J.prototype.interrupt = Bi, J.prototype.transition = du;var vu = function vu(t) {
    return ("function" == typeof t ? Sn : Pn)(this, t);
  },
      yu = function yu(t, n) {
    return ("function" == typeof t ? qn : Cn)(this, t, null == n ? "" : n);
  },
      gu = function gu(t) {
    return ("function" == typeof t ? Tn : Xn)(this, t);
  };J.prototype.attrs = vu, J.prototype.styles = yu, J.prototype.properties = gu;var wu = "$";On.prototype = In.prototype = { constructor: On, has: function has(t) {
      return wu + t in this;
    }, get: function get(t) {
      return this[wu + t];
    }, set: function set(t, n) {
      return this[wu + t] = n, this;
    }, remove: function remove(t) {
      var n = wu + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        t[0] === wu && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        n[0] === wu && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        n[0] === wu && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        n[0] === wu && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        n[0] === wu && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if (t[0] === wu) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        n[0] === wu && t(this[n], n.slice(1), this);
      }
    } };var mu = In.prototype;Rn.prototype = jn.prototype = { constructor: Rn, has: mu.has, add: function add(t) {
      return t += "", this[wu + t] = t, this;
    }, remove: mu.remove, clear: mu.clear, values: mu.keys, size: mu.size, empty: mu.empty, each: mu.each };var _u = function _u(t) {
    var n = [];for (var e in t) {
      n.push({ key: e, value: t[e] });
    }return n;
  },
      bu = { value: function value() {} };$n.prototype = Vn.prototype = { constructor: $n, on: function on(t, n) {
      var e,
          r = this._,
          i = Yn(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = zn(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = zn(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = Ln(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new $n(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (r = this._[t], o = 0, e = r.length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var xu,
      Mu,
      ku = 0,
      Nu = 0,
      Au = 0,
      Eu = 1e3,
      Su = 0,
      Pu = 0,
      qu = 0,
      Cu = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Tu = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };Bn.prototype = Fn.prototype = { constructor: Bn, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? Dn() : +e) + (null == n ? 0 : +n), this._next || Mu === this || (Mu ? Mu._next = this : xu = this, Mu = this), this._call = t, this._time = e, Qn();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Qn());
    } };var Xu = function Xu(t, n, e) {
    var r = new Bn();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      Ou = Vn("start", "end", "interrupt"),
      Iu = [],
      Ru = 0,
      ju = 1,
      Vu = 2,
      $u = 3,
      Yu = 4,
      Lu = 5,
      zu = 6,
      Du = function Du(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};ne(t, e, { name: n, index: r, group: i, on: Ou, tween: Iu, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Ru });
  },
      Hu = function Hu(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > Vu && e.state < Lu, e.state = zu, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      Bu = function Bu(t) {
    return this.each(function () {
      Hu(this, t);
    });
  },
      Fu = function Fu(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      Uu = .7,
      Ju = 1 / Uu,
      Gu = "\\s*([+-]?\\d+)\\s*",
      Ku = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Qu = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Wu = /^#([0-9a-f]{3})$/,
      Zu = /^#([0-9a-f]{6})$/,
      ta = new RegExp("^rgb\\(" + [Gu, Gu, Gu] + "\\)$"),
      na = new RegExp("^rgb\\(" + [Qu, Qu, Qu] + "\\)$"),
      ea = new RegExp("^rgba\\(" + [Gu, Gu, Gu, Ku] + "\\)$"),
      ra = new RegExp("^rgba\\(" + [Qu, Qu, Qu, Ku] + "\\)$"),
      ia = new RegExp("^hsl\\(" + [Ku, Qu, Qu] + "\\)$"),
      oa = new RegExp("^hsla\\(" + [Ku, Qu, Qu, Ku] + "\\)$"),
      ua = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Fu(re, ie, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Fu(le, se, ee(re, { brighter: function brighter(t) {
      return t = null == t ? Ju : Math.pow(Ju, t), new le(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Uu : Math.pow(Uu, t), new le(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Fu(pe, fe, ee(re, { brighter: function brighter(t) {
      return t = null == t ? Ju : Math.pow(Ju, t), new pe(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Uu : Math.pow(Uu, t), new pe(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new le(de(t >= 240 ? t - 240 : t + 120, i, r), de(t, i, r), de(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var aa = Math.PI / 180,
      sa = 180 / Math.PI,
      la = 18,
      ca = .95047,
      ha = 1,
      fa = 1.08883,
      pa = 4 / 29,
      da = 6 / 29,
      va = 3 * da * da,
      ya = da * da * da;Fu(ge, ye, ee(re, { brighter: function brighter(t) {
      return new ge(this.l + la * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new ge(this.l - la * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = ha * me(t), n = ca * me(n), e = fa * me(e), new le(_e(3.2404542 * n - 1.5371385 * t - .4985314 * e), _e(-.969266 * n + 1.8760108 * t + .041556 * e), _e(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Fu(ke, Me, ee(re, { brighter: function brighter(t) {
      return new ke(this.h, this.c, this.l + la * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new ke(this.h, this.c, this.l - la * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return ve(this).rgb();
    } }));var ga = -.14861,
      wa = 1.78277,
      ma = -.29227,
      _a = -.90649,
      ba = 1.97294,
      xa = ba * _a,
      Ma = ba * wa,
      ka = wa * ma - _a * ga;Fu(Ee, Ae, ee(re, { brighter: function brighter(t) {
      return t = null == t ? Ju : Math.pow(Ju, t), new Ee(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Uu : Math.pow(Uu, t), new Ee(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * aa,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new le(255 * (n + e * (ga * r + wa * i)), 255 * (n + e * (ma * r + _a * i)), 255 * (n + e * (ba * r)), this.opacity);
    } }));var Na,
      Aa,
      Ea,
      Sa,
      Pa = function Pa(t) {
    return function () {
      return t;
    };
  },
      qa = function t(n) {
    function e(t, n) {
      var e = r((t = se(t)).r, (n = se(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Te(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = Ce(n);return e.gamma = t, e;
  }(1),
      Ca = function Ca(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      Ta = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Xa = new RegExp(Ta.source, "g"),
      Oa = function Oa(t, n) {
    var e,
        r,
        i,
        o = Ta.lastIndex = Xa.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = Ta.exec(t)) && (r = Xa.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: Ca(e, r) })), o = Xa.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? Oe(s[0].x) : Xe(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      Ia = 180 / Math.PI,
      Ra = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      ja = function ja(t, n, e, r, i, o) {
    var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Ia, skewX: Math.atan(s) * Ia, scaleX: u, scaleY: a };
  },
      Va = je(Ie, "px, ", "px)", "deg)"),
      $a = je(Re, ", ", ")", ")");Ve(qe);var Ya = (Ve(Te), function (t, n) {
    var e = this._id;if (t += "", arguments.length < 2) {
      for (var r, i = te(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
        if ((r = i[o]).name === t) return r.value;
      }return null;
    }return this.each((null == n ? $e : Ye)(e, t, n));
  }),
      La = function La(t, n) {
    var e;return ("number" == typeof n ? Ca : n instanceof ie ? qa : (e = ie(n)) ? (n = e, qa) : Oa)(t, n);
  },
      za = function za(t, n) {
    var e = Pr(t),
        r = "transform" === e ? $a : La;return this.attrTween(t, "function" == typeof n ? (e.local ? Ue : Fe)(e, r, Le(this, "attr." + t, n)) : null == n ? (e.local ? De : ze)(e) : (e.local ? Be : He)(e, r, n));
  },
      Da = function Da(t, n) {
    var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = Pr(t);return this.tween(e, (r.local ? Je : Ge)(r, n));
  },
      Ha = function Ha(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? Ke : Qe)(n, t)) : te(this.node(), n).delay;
  },
      Ba = function Ba(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? We : Ze)(n, t)) : te(this.node(), n).duration;
  },
      Fa = function Fa(t) {
    var n = this._id;return arguments.length ? this.each(tr(n, t)) : te(this.node(), n).ease;
  },
      Ua = function Ua(t) {
    "function" != typeof t && (t = Or(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new hr(r, this._parents, this._name, this._id);
  },
      Ja = function Ja(t) {
    if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p) {
        (s = l[p] || c[p]) && (f[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new hr(u, this._parents, this._name, this._id);
  },
      Ga = function Ga(t, n) {
    var e = this._id;return arguments.length < 2 ? te(this.node(), e).on.on(t) : this.each(er(e, t, n));
  },
      Ka = function Ka() {
    return this.on("end.remove", rr(this._id));
  },
      Qa = function Qa(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = Vr(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
      for (var a, s, l = r[u], c = l.length, h = o[u] = new Array(c), f = 0; f < c; ++f) {
        (a = l[f]) && (s = t.call(a, a.__data__, f, l)) && ("__data__" in a && (s.__data__ = a.__data__), h[f] = s, Du(h[f], n, e, f, h, te(a, e)));
      }
    }return new hr(o, this._parents, n, e);
  },
      Wa = function Wa(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = Yr(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
      for (var s, l = r[a], c = l.length, h = 0; h < c; ++h) {
        if (s = l[h]) {
          for (var f, p = t.call(s, s.__data__, h, l), d = te(s, e), v = 0, y = p.length; v < y; ++v) {
            (f = p[v]) && Du(f, n, e, v, p, d);
          }o.push(p), u.push(s);
        }
      }
    }return new hr(o, u, n, e);
  },
      Za = J.prototype.constructor,
      ts = function ts() {
    return new Za(this._groups, this._parents);
  },
      ns = function ns(t, n, e) {
    var r = "transform" == (t += "") ? Va : La;return null == n ? this.styleTween(t, ir(t, r)).on("end.style." + t, or(t)) : this.styleTween(t, "function" == typeof n ? ar(t, r, Le(this, "style." + t, n)) : ur(t, r, n), e);
  },
      es = function es(t, n, e) {
    var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, sr(t, n, null == e ? "" : e));
  },
      rs = function rs(t) {
    return this.tween("text", "function" == typeof t ? cr(Le(this, "text", t)) : lr(null == t ? "" : t + ""));
  },
      is = function is() {
    for (var t = this._name, n = this._id, e = pr(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        if (u = a[l]) {
          var c = te(u, n);Du(u, t, e, l, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
      }
    }return new hr(r, this._parents, t, e);
  },
      os = 0,
      us = J.prototype;hr.prototype = fr.prototype = { constructor: hr, select: Qa, selectAll: Wa, filter: Ua, merge: Ja, selection: ts, transition: is, call: us.call, nodes: us.nodes, node: us.node, size: us.size, empty: us.empty, each: us.each, on: Ga, attr: za, attrTween: Da, style: ns, styleTween: es, text: rs, remove: Ka, tween: Ya, delay: Ha, duration: Ba, ease: Fa };var as = 3,
      ss = (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(as), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(as), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(as), 1.70158),
      ls = (function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(ss), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(ss), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(ss), 2 * Math.PI),
      cs = 1,
      hs = .3,
      fs = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ls);return r.amplitude = function (n) {
      return t(n, e * ls);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(cs, hs), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ls);return r.amplitude = function (n) {
      return t(n, e * ls);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(cs, hs), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ls);return r.amplitude = function (n) {
      return t(n, e * ls);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(cs, hs), { time: null, delay: 0, duration: 250, ease: dr }),
      ps = function ps(t) {
    var n, e;t instanceof hr ? (n = t._id, t = t._name) : (n = pr(), (e = fs).time = Dn(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && Du(u, t, n, l, a, e || vr(u, n));
      }
    }return new hr(r, this._parents, t, n);
  };J.prototype.interrupt = Bu, J.prototype.transition = ps;var ds = { value: function value() {} };gr.prototype = yr.prototype = { constructor: gr, on: function on(t, n) {
      var e,
          r = this._,
          i = wr(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = _r(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = _r(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = mr(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new gr(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (r = this._[t], o = 0, e = r.length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var vs = function vs(t, n) {
    function e(t) {
      var n,
          e = l.status;if (!e && xr(l) || e >= 200 && e < 300 || 304 === e) {
        if (o) try {
          n = o.call(r, l);
        } catch (t) {
          return void a.call("error", r, t);
        } else n = l;a.call("load", r, n);
      } else a.call("error", r, t);
    }var r,
        i,
        o,
        u,
        a = yr("beforesend", "progress", "load", "error"),
        s = In(),
        l = new XMLHttpRequest(),
        c = null,
        h = null,
        f = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest()), "onload" in l ? l.onload = l.onerror = l.ontimeout = e : l.onreadystatechange = function (t) {
      l.readyState > 3 && e(t);
    }, l.onprogress = function (t) {
      a.call("progress", r, t);
    }, r = { header: function header(t, n) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""), r);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (i = null == t ? null : t + "", r) : i;
      }, responseType: function responseType(t) {
        return arguments.length ? (u = t, r) : u;
      }, timeout: function timeout(t) {
        return arguments.length ? (f = +t, r) : f;
      }, user: function user(t) {
        return arguments.length < 1 ? c : (c = null == t ? null : t + "", r);
      }, password: function password(t) {
        return arguments.length < 1 ? h : (h = null == t ? null : t + "", r);
      }, response: function response(t) {
        return o = t, r;
      }, get: function get(t, n) {
        return r.send("GET", t, n);
      }, post: function post(t, n) {
        return r.send("POST", t, n);
      }, send: function send(n, e, o) {
        return l.open(n, t, !0, c, h), null == i || s.has("accept") || s.set("accept", i + ",*/*"), l.setRequestHeader && s.each(function (t, n) {
          l.setRequestHeader(n, t);
        }), null != i && l.overrideMimeType && l.overrideMimeType(i), null != u && (l.responseType = u), f > 0 && (l.timeout = f), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = br(o)), null != o && r.on("error", o).on("load", function (t) {
          o(null, t);
        }), a.call("beforesend", r, l), l.send(null == e ? null : e), r;
      }, abort: function abort() {
        return l.abort(), r;
      }, on: function on() {
        var t = a.on.apply(a, arguments);return t === a ? r : t;
      } }, null != n) {
      if ("function" != typeof n) throw new Error("invalid callback: " + n);return r.get(n);
    }return r;
  },
      ys = function ys(t, n) {
    return function (e, r) {
      var i = vs(e).mimeType(t).response(n);if (null != r) {
        if ("function" != typeof r) throw new Error("invalid callback: " + r);return i.get(r);
      }return i;
    };
  };ys("text/html", function (t) {
    return document.createRange().createContextualFragment(t.responseText);
  }), ys("application/json", function (t) {
    return JSON.parse(t.responseText);
  }), ys("text/plain", function (t) {
    return t.responseText;
  }), ys("application/xml", function (t) {
    var n = t.responseXML;if (!n) throw new Error("parse error");return n;
  });var gs = function gs(t) {
    function n(t, n) {
      var r,
          i,
          o = e(t, function (t, e) {
        return r ? r(t, e - 1) : (i = t, void (r = n ? kr(t, n) : Mr(t)));
      });return o.columns = i, o;
    }function e(t, n) {
      function e() {
        if (c >= l) return u;if (i) return i = !1, o;var n,
            e = c;if (34 === t.charCodeAt(e)) {
          for (var r = e; r++ < l;) {
            if (34 === t.charCodeAt(r)) {
              if (34 !== t.charCodeAt(r + 1)) break;++r;
            }
          }return c = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++c) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"');
        }for (; c < l;) {
          var a = 1;if (n = t.charCodeAt(c++), 10 === n) i = !0;else if (13 === n) i = !0, 10 === t.charCodeAt(c) && (++c, ++a);else if (n !== s) continue;return t.slice(e, c - a);
        }return t.slice(e);
      }for (var r, i, o = {}, u = {}, a = [], l = t.length, c = 0, h = 0; (r = e()) !== u;) {
        for (var f = []; r !== o && r !== u;) {
          f.push(r), r = e();
        }n && null == (f = n(f, h++)) || a.push(f);
      }return a;
    }function r(n, e) {
      return null == e && (e = Nr(n)), [e.map(u).join(t)].concat(n.map(function (n) {
        return e.map(function (t) {
          return u(n[t]);
        }).join(t);
      })).join("\n");
    }function i(t) {
      return t.map(o).join("\n");
    }function o(n) {
      return n.map(u).join(t);
    }function u(t) {
      return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t;
    }var a = new RegExp('["' + t + "\n]"),
        s = t.charCodeAt(0);return { parse: n, parseRows: e, format: r, formatRows: i };
  },
      ws = gs(","),
      ms = ws.parse,
      _s = gs("\t"),
      bs = _s.parse,
      xs = function xs(t, n) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var o = vs(e).mimeType(t);return o.row = function (t) {
        return arguments.length ? o.response(Ar(n, r = t)) : r;
      }, o.row(r), i ? o.get(i) : o;
    };
  },
      Ms = xs("text/csv", ms);xs("text/tab-separated-values", bs), t.selection = J, t.select = mi, t.selectAll = _i, t.entries = _u, t.transition = fr, t.csv = Ms, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (containerElement) {
  var d3el = d3.select(containerElement);

  // Attach properties to make the li or ol DOM element behave more like a
  // select element
  Object.defineProperty(containerElement, 'value', { get: function get() {
      var selectedElement = d3el.select('.selected');
      return selectedElement.attr('value') || selectedElement.text();
    } });
  Object.defineProperty(containerElement, 'selectedIndex', { get: function get() {
      var entries = this.children;
      for (var i = 0; i < entries.length; i += 1) {
        if (entries[i].classList.contains('selected')) {
          return i;
        }
      }
      return -1;
    } });

  // Make the entries respond to clicks
  d3el.selectAll('li').on('click', function () {
    handleClick.call(this, d3el);
  });
};

var _d3Min = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d3Min);

__webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function openMenu(d3el) {
  var _this = this;

  // this is the same as the this from the click event callback
  var originalBounds = this.getBoundingClientRect();
  d3el.classed('expanded', true);
  var selectedBounds = this.getBoundingClientRect();
  d3el.style('position', 'relative').style('top', originalBounds.top - selectedBounds.top + 'px');

  // Stick a temporary top layer on everything outside the menu
  // that will close the menu if clicked
  var menuBBox = d3el.node().getBoundingClientRect();
  var masks = d3.select('body').selectAll('.selectMenuMask').data(['left', 'right', 'top', 'bottom']);
  masks = masks.enter().append('div').classed('selectMenuMask', true).merge(masks);
  masks.style('position', 'absolute').style('z-index', 10000000).style('pointer-events', 'all').style('left', function (d) {
    return d === 'right' ? menuBBox.right + 'px' : '0px';
  }).style('top', function (d) {
    return d === 'bottom' ? menuBBox.bottom + 'px' : '0px';
  }).style('right', function (d) {
    return d === 'left' ? window.innerWidth - menuBBox.left + 'px' : '0px';
  }).style('bottom', function (d) {
    return d === 'top' ? window.innerHeight - menuBBox.top + 'px' : '0px';
  }).on('click', function () {
    // this is the same as the this from the original click event callback
    closeMenu.call(_this, d3el);
  });
}

function closeMenu(d3el) {
  // this is the same as the this from the original click event callback
  // (in the event that one of the masks was clicked, this refers to the
  // originally selected item, not the mask)
  var containerElement = d3el.node();
  var clickedItem = d3.select(this);
  var oldValue = containerElement.value;
  // clear all the inline styles, with the old selected and expanded class names
  d3el.classed('expanded', false).style('position', null).style('top', null);
  d3el.selectAll('li').classed('selected', false).style('position', null).style('top', null);
  clickedItem.classed('selected', true);
  var newValue = containerElement.value;
  d3.select('body').selectAll('.selectMenuMask').remove();
  if (oldValue !== newValue) {
    // TODO: does the event listener expect an object with the new / old values?
    containerElement.dispatchEvent(new window.Event('change'));
  }
}

function handleClick(d3el) {
  var containerExpanded = d3el.classed('expanded');
  if (containerExpanded) {
    // Just closed the menu; implement the change
    closeMenu.call(this, d3el);
  } else {
    // Just opened the menu; base everything on the bounding box
    // of the list item that was originally visible
    openMenu.call(this, d3el);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba74caf6dd4af269346706828afb3724.csv";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\na.button {\n  border-radius: 1em; }\n\na.button,\nul.selectMenu li,\nol.selectMenu li {\n  padding: 1em;\n  background-color: #D95F02;\n  color: #F7F7F7;\n  cursor: pointer;\n  text-align: center;\n  white-space: nowrap; }\n\na.button:hover,\nul.selectMenu li:hover,\nol.selectMenu li:hover {\n  background-color: #F7F7F7;\n  color: #525252; }\n\na.button.disabled,\na.button.disabled:hover,\nul.selectMenu.disabled li,\nul.selectMenu.disabled li:hover,\nol.selectMenu.disabled li,\nol.selectMenu.disabled li:hover {\n  background-color: #525252;\n  color: #969696;\n  cursor: default; }\n\nul.selectMenu,\nol.selectMenu {\n  list-style: none;\n  padding: 0px; }\n  ul.selectMenu li,\n  ol.selectMenu li {\n    display: none; }\n  ul.selectMenu.expanded li,\n  ol.selectMenu.expanded li {\n    display: block; }\n  ul.selectMenu li.selected,\n  ol.selectMenu li.selected {\n    display: block; }\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n::-webkit-scrollbar {\n  width: 1em; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background-color: transparent;\n  border: 1px solid #252525; }\n\n/* Corner */\n::-webkit-scrollbar-corner {\n  background-color: transparent;\n  border: 1px solid #252525; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 1em;\n  border-radius: 1em;\n  background: #D95F02; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #F7F7F7; }\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D95F02; }\n\nbody {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 300;\n  color: #D9D9D9;\n  background-color: black; }\n\ninput {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2em;\n  background-color: #F7F7F7;\n  color: #525252;\n  border: 1px solid #252525;\n  outline: none; }\n\ninput:focus {\n  border-color: #D95F02; }\n\nh1, h2, h3, h4, h5, h6, b {\n  font-weight: 700; }\n\nb {\n  color: #D95F02; }\n\na {\n  text-decoration: none;\n  color: #D95F02; }\n\n#backgroundImage {\n  position: fixed;\n  bottom: -256px;\n  right: -256px; }\n\n#backgroundOverlay {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background: radial-gradient(ellipse 1024px 512px at 100% 100%, rgba(0, 0, 0, 0.3) 0px, black 1536px); }\n\n#mainPage {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px; }\n  #mainPage #leaderBoard {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    bottom: 0px;\n    width: calc(33.33333333% - 2em);\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    overflow-y: scroll; }\n    #mainPage #leaderBoard table {\n      margin-top: 1em;\n      margin-left: auto;\n      margin-right: auto;\n      border-collapse: collapse; }\n      #mainPage #leaderBoard table thead td {\n        border: 1px solid #F7F7F7;\n        background-color: #525252;\n        color: #F7F7F7; }\n      #mainPage #leaderBoard table td {\n        white-space: nowrap;\n        padding: 0.25em; }\n  #mainPage #currentMatch {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: calc(66.66666666% - 2em);\n    height: calc(50% - 2em);\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    text-align: center;\n    justify-content: center; }\n    #mainPage #currentMatch table {\n      margin-bottom: 1em;\n      margin-left: auto;\n      margin-right: auto; }\n      #mainPage #currentMatch table td {\n        padding: 0.25em; }\n        #mainPage #currentMatch table td input {\n          font-size: 3em;\n          text-align: center;\n          width: 2em; }\n  #mainPage hr {\n    position: absolute;\n    top: calc(50% - 0.5em);\n    height: 1em;\n    left: 33.33333333%;\n    right: 0px;\n    background-color: transparent;\n    border: 1px solid #252525; }\n  #mainPage #calendar {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    width: calc(66.66666666% - 2em);\n    height: calc(50% - 2em);\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n    #mainPage #calendar #scheduler {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 1em;\n      align-items: center; }\n\n#registrationScreen {\n  position: absolute;\n  top: 10em;\n  height: 22em;\n  width: 40em;\n  left: calc(50% - 20em);\n  border: 1px solid #F7F7F7;\n  border-radius: 3em;\n  background-color: rgba(82, 82, 82, 0.95);\n  padding: 4em 3em 3em 3em; }\n  #registrationScreen form {\n    width: 100%; }\n    #registrationScreen form > span {\n      position: relative;\n      width: 100%;\n      display: block;\n      height: 3em; }\n      #registrationScreen form > span label {\n        position: absolute;\n        text-align: right;\n        right: 22em;\n        bottom: 1.35em; }\n      #registrationScreen form > span input {\n        position: absolute;\n        right: 0em;\n        width: 10.5em; }\n        #registrationScreen form > span input[type=radio] {\n          bottom: 0.6em; }\n      #registrationScreen form > span ul.selectMenu {\n        position: relative;\n        display: inline-block;\n        left: calc(19em - 4px);\n        top: -1.4em;\n        /* cant position the select menu absolutely; instead I manually set this location */ }\n  #registrationScreen #footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row-reverse; }\n  #registrationScreen .close {\n    position: absolute;\n    top: 2em;\n    right: 2em;\n    border-radius: 2em;\n    padding: .5em;\n    width: 1em;\n    height: 1em;\n    text-align: center; }\n\n.selectMenu li span.name {\n  display: block;\n  width: auto;\n  height: auto; }\n\n.selectMenu li span.charity {\n  display: block;\n  width: auto;\n  height: auto;\n  font-size: 0.5em; }\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./makeSelectMenu.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./makeSelectMenu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Min = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d3Min);

__webpack_require__(5);

var _makeSelectMenu = __webpack_require__(3);

var _makeSelectMenu2 = _interopRequireDefault(_makeSelectMenu);

var _utahCharities = __webpack_require__(4);

var _utahCharities2 = _interopRequireDefault(_utahCharities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ANIMATION_SPEED = 1000;

function hideRegistration(animate) {
  var registrationScreen = d3.select('#registrationScreen');
  if (animate) {
    registrationScreen = registrationScreen.transition(ANIMATION_SPEED);
  }
  registrationScreen.style('opacity', 0);
  registrationScreen.transition().style('display', 'none');
}

function showRegistration(animate) {
  var registrationScreen = d3.select('#registrationScreen').style('display', null);
  if (animate) {
    registrationScreen = registrationScreen.transition(ANIMATION_SPEED);
  }
  registrationScreen.style('opacity', 1);
}

function updatePlayOrBet() {
  if (d3.select('#willPlay').property('checked')) {
    d3.selectAll('.charityElement').style('display', null);
    d3.select('#betSelector').style('display', 'none');
  } else {
    d3.selectAll('.charityElement').style('display', 'none');
    d3.select('#betSelector').style('display', null);
  }
}

function populateCharityList() {
  d3.csv(_utahCharities2.default, function (results) {
    var options = d3.select('#charityList').selectAll('option').data(results);
    options = options.enter().append('option').merge(options);
    options.text(function (d) {
      return d['CHARITY NAME'];
    });
  });
}

function populatePlayerLists() {
  var dummyData = [{
    'name': 'Choose a Player',
    'charity': ''
  }, {
    'name': 'Chris Johnson',
    'charity': 'UNITED STATES FUND FOR UNICEF',
    'bets': 57,
    'wins': 7,
    'losses': 0
  }, {
    'name': 'Greg Jones',
    'charity': 'DOCTORS WITHOUT BORDERS USA INC/MEDECINS SANS FRONTIERES USA INC',
    'bets': 4,
    'wins': 4,
    'losses': 3
  }];

  ['#playerA', '#playerB', '#bet'].forEach(function (containerSelector) {
    var container = d3.select(containerSelector);
    var options = container.selectAll('li').data(dummyData);
    var optionsEnter = options.enter().append('li');
    optionsEnter.append('span').attr('class', 'name');
    optionsEnter.append('span').attr('class', 'charity');
    options = options.merge(optionsEnter);

    options.attr('id', function (d) {
      return d.name;
    }).attr('class', function (d) {
      return d.name === 'Choose a Player' ? 'selected' : null;
    });
    options.select('.name').text(function (d) {
      return d.name;
    });
    options.select('.charity').text(function (d) {
      return d.charity;
    });

    (0, _makeSelectMenu2.default)(container.node());
  });
}

function setup() {
  d3.select('#signupButton').on('click', function () {
    showRegistration(true);
  });
  d3.select('#registrationScreen .close.button').on('click', function () {
    hideRegistration(true);
  });
  d3.selectAll('#willPlay, #willBet').on('change', function () {
    updatePlayOrBet();
  });
  updatePlayOrBet();
  hideRegistration(false);
}

function delayedSetup() {
  populateCharityList();
  populatePlayerLists();
}

setup();
window.onload = delayedSetup;

/***/ })
/******/ ]);
//# sourceMappingURL=webpack-bundle.js.map