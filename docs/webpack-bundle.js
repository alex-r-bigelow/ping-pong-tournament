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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
          e = this.namespaceURI;return e === uu && n.documentElement.namespaceURI === uu ? n.createElement(t) : n.createElementNS(e, t);
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
    var o = gu.hasOwnProperty(t.type) ? r : i;return function (r, i, u) {
      var a,
          s = this.__on,
          l = o(n, i, u);if (s) for (var c = 0, f = s.length; c < f; ++c) {
        if ((a = s[c]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = l, a.capture = e), void (a.value = n);
      }this.addEventListener(t.type, l, e), a = { type: t.type, name: t.name, value: n, listener: l, capture: e }, s ? s.push(a) : this.__on = [a];
    };
  }function s(n, e, r, i) {
    var o = t.event;n.sourceEvent = t.event, t.event = n;try {
      return e.apply(r, i);
    } finally {
      t.event = o;
    }
  }function l() {}function c() {
    return [];
  }function f(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function h(t, n, e, r, i, o) {
    for (var u, a = 0, s = n.length, l = o.length; a < l; ++a) {
      (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new f(t, o[a]);
    }for (; a < s; ++a) {
      (u = n[a]) && (i[a] = u);
    }
  }function p(t, n, e, r, i, o, u) {
    var a,
        s,
        l,
        c = {},
        h = n.length,
        p = o.length,
        g = new Array(h);for (a = 0; a < h; ++a) {
      (s = n[a]) && (g[a] = l = Cu + u.call(s, s.__data__, a, n), l in c ? i[a] = s : c[l] = s);
    }for (a = 0; a < p; ++a) {
      l = Cu + u.call(t, o[a], a, o), (s = c[l]) ? (r[a] = s, s.__data__ = o[a], c[l] = null) : e[a] = new f(t, o[a]);
    }for (a = 0; a < h; ++a) {
      (s = n[a]) && c[g[a]] === s && (i[a] = s);
    }
  }function g(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function d(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function y(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function v(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }function w(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }function m(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }function _(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }function b(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function x(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }function M(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }function N(t) {
    return function () {
      delete this[t];
    };
  }function k(t, n) {
    return function () {
      this[t] = n;
    };
  }function A(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
    };
  }function T(t) {
    return t.trim().split(/^|\s+/);
  }function C(t) {
    return t.classList || new E(t);
  }function E(t) {
    this._node = t, this._names = T(t.getAttribute("class") || "");
  }function S(t, n) {
    for (var e = C(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function U(t, n) {
    for (var e = C(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function q(t) {
    return function () {
      S(this, t);
    };
  }function D(t) {
    return function () {
      U(this, t);
    };
  }function P(t, n) {
    return function () {
      (n.apply(this, arguments) ? S : U)(this, t);
    };
  }function Y() {
    this.textContent = "";
  }function F(t) {
    return function () {
      this.textContent = t;
    };
  }function O(t) {
    return function () {
      var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
    };
  }function I() {
    this.innerHTML = "";
  }function j(t) {
    return function () {
      this.innerHTML = t;
    };
  }function X(t) {
    return function () {
      var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
    };
  }function H() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function z() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function L() {
    return null;
  }function R() {
    var t = this.parentNode;t && t.removeChild(this);
  }function $(t, n, e) {
    var r = Hu(t),
        i = r.CustomEvent;i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function V(t, n) {
    return function () {
      return $(this, t, n);
    };
  }function Z(t, n) {
    return function () {
      return $(this, t, n.apply(this, arguments));
    };
  }function B(t, n) {
    this._groups = t, this._parents = n;
  }function W() {
    return new B([[document.documentElement]], ta);
  }function J() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new G(r);
  }function G(t) {
    this._ = t;
  }function K(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function Q(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function tt(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = ia, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function nt() {
    return ha || (da(et), ha = ga.now() + pa);
  }function et() {
    ha = 0;
  }function rt() {
    this._call = this._time = this._next = null;
  }function it(t, n, e) {
    var r = new rt();return r.restart(t, n, e), r;
  }function ot() {
    nt(), ++aa;for (var t, n = oa; n;) {
      (t = ha - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--aa;
  }function ut() {
    ha = (fa = ga.now()) + pa, aa = sa = 0;try {
      ot();
    } finally {
      aa = 0, st(), ha = 0;
    }
  }function at() {
    var t = ga.now(),
        n = t - fa;n > ca && (pa -= n, fa = t);
  }function st() {
    for (var t, n, e = oa, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : oa = n);
    }ua = t, lt(r);
  }function lt(t) {
    if (!aa) {
      sa && (sa = clearTimeout(sa));var n = t - ha;n > 24 ? (t < 1 / 0 && (sa = setTimeout(ut, n)), la && (la = clearInterval(la))) : (la || (fa = ha, la = setInterval(at, ca)), aa = 1, da(ut));
    }
  }function ct(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > ma) throw new Error("too late");return e;
  }function ft(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > ba) throw new Error("too late");return e;
  }function ht(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function pt(t, n, e) {
    function r(t) {
      e.state = _a, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
    }function i(r) {
      var l, c, f, h;if (e.state !== _a) return u();for (l in s) {
        if (h = s[l], h.name === e.name) {
          if (h.state === xa) return ya(i);h.state === Ma ? (h.state = ka, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete s[l]) : +l < n && (h.state = ka, h.timer.stop(), delete s[l]);
        }
      }if (ya(function () {
        e.state === xa && (e.state = Ma, e.timer.restart(o, e.delay, e.time), o(r));
      }), e.state = ba, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ba) {
        for (e.state = xa, a = new Array(f = e.tween.length), l = 0, c = -1; l < f; ++l) {
          (h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (a[++c] = h);
        }a.length = c + 1;
      }
    }function o(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Na, 1), i = -1, o = a.length; ++i < o;) {
        a[i].call(null, r);
      }e.state === Na && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = ka, e.timer.stop(), delete s[n];for (var r in s) {
        return;
      }delete t.__transition;
    }var a,
        s = t.__transition;s[n] = e, e.timer = it(r, 0, e.time);
  }function gt(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function dt() {}function yt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Ya.exec(t)) ? (n = parseInt(n[1], 16), new bt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Fa.exec(t)) ? vt(parseInt(n[1], 16)) : (n = Oa.exec(t)) ? new bt(n[1], n[2], n[3], 1) : (n = Ia.exec(t)) ? new bt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ja.exec(t)) ? wt(n[1], n[2], n[3], n[4]) : (n = Xa.exec(t)) ? wt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ha.exec(t)) ? xt(n[1], n[2] / 100, n[3] / 100, 1) : (n = za.exec(t)) ? xt(n[1], n[2] / 100, n[3] / 100, n[4]) : La.hasOwnProperty(t) ? vt(La[t]) : "transparent" === t ? new bt(NaN, NaN, NaN, 0) : null;
  }function vt(t) {
    return new bt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function wt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new bt(t, n, e, r);
  }function mt(t) {
    return t instanceof dt || (t = yt(t)), t ? (t = t.rgb(), new bt(t.r, t.g, t.b, t.opacity)) : new bt();
  }function _t(t, n, e, r) {
    return 1 === arguments.length ? mt(t) : new bt(t, n, e, null == r ? 1 : r);
  }function bt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function xt(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new kt(t, n, e, r);
  }function Mt(t) {
    if (t instanceof kt) return new kt(t.h, t.s, t.l, t.opacity);if (t instanceof dt || (t = yt(t)), !t) return new kt();if (t instanceof kt) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new kt(u, a, s, t.opacity);
  }function Nt(t, n, e, r) {
    return 1 === arguments.length ? Mt(t) : new kt(t, n, e, null == r ? 1 : r);
  }function kt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function At(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function Tt(t) {
    if (t instanceof Et) return new Et(t.l, t.a, t.b, t.opacity);if (t instanceof Ft) {
      var n = t.h * Ra;return new Et(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof bt || (t = mt(t));var e = Dt(t.r),
        r = Dt(t.g),
        i = Dt(t.b),
        o = St((.4124564 * e + .3575761 * r + .1804375 * i) / Za),
        u = St((.2126729 * e + .7151522 * r + .072175 * i) / Ba),
        a = St((.0193339 * e + .119192 * r + .9503041 * i) / Wa);return new Et(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }function Ct(t, n, e, r) {
    return 1 === arguments.length ? Tt(t) : new Et(t, n, e, null == r ? 1 : r);
  }function Et(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function St(t) {
    return t > Qa ? Math.pow(t, 1 / 3) : t / Ka + Ja;
  }function Ut(t) {
    return t > Ga ? t * t * t : Ka * (t - Ja);
  }function qt(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function Dt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Pt(t) {
    if (t instanceof Ft) return new Ft(t.h, t.c, t.l, t.opacity);t instanceof Et || (t = Tt(t));var n = Math.atan2(t.b, t.a) * $a;return new Ft(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Yt(t, n, e, r) {
    return 1 === arguments.length ? Pt(t) : new Ft(t, n, e, null == r ? 1 : r);
  }function Ft(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Ot(t) {
    if (t instanceof jt) return new jt(t.h, t.s, t.l, t.opacity);t instanceof bt || (t = mt(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (as * r + os * n - us * e) / (as + os - us),
        o = r - i,
        u = (is * (e - i) - es * o) / rs,
        a = Math.sqrt(u * u + o * o) / (is * i * (1 - i)),
        s = a ? Math.atan2(u, o) * $a - 120 : NaN;return new jt(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function It(t, n, e, r) {
    return 1 === arguments.length ? Ot(t) : new jt(t, n, e, null == r ? 1 : r);
  }function jt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Xt(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Ht(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function zt(t, n) {
    var e = n - t;return e ? Xt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : hs(isNaN(t) ? n : t);
  }function Lt(t) {
    return 1 === (t = +t) ? Rt : function (n, e) {
      return e - n ? Ht(n, e, t) : hs(isNaN(n) ? e : n);
    };
  }function Rt(t, n) {
    var e = n - t;return e ? Xt(t, e) : hs(isNaN(t) ? n : t);
  }function $t(t) {
    return function () {
      return t;
    };
  }function Vt(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Zt(t) {
    return "none" === t ? ms : (ss || (ss = document.createElement("DIV"), ls = document.documentElement, cs = document.defaultView), ss.style.transform = t, t = cs.getComputedStyle(ls.appendChild(ss), null).getPropertyValue("transform"), ls.removeChild(ss), t = t.slice(7, -1).split(","), _s(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }function Bt(t) {
    return null == t ? ms : (fs || (fs = document.createElementNS("http://www.w3.org/2000/svg", "g")), fs.setAttribute("transform", t), (t = fs.transform.baseVal.consolidate()) ? (t = t.matrix, _s(t.a, t.b, t.c, t.d, t.e, t.f)) : ms);
  }function Wt(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: gs(t, i) }, { i: s - 2, x: gs(r, o) });
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }function u(t, n, e, o) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: gs(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, o) {
      t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: gs(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function s(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: gs(t, e) }, { i: a - 2, x: gs(n, r) });
      } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, o = i.length; ++e < o;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function Jt(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = It(n)).h, (r = It(r)).h),
            o = Rt(n.s, r.s),
            u = Rt(n.l, r.l),
            a = Rt(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function Gt(t, n) {
    var e, r;return function () {
      var i = ft(this, t),
          o = i.tween;if (o !== e) {
        r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
          if (r[u].name === n) {
            r = r.slice(), r.splice(u, 1);break;
          }
        }
      }i.tween = r;
    };
  }function Kt(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var o = ft(this, t),
          u = o.tween;if (u !== r) {
        i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, l = i.length; s < l; ++s) {
          if (i[s].name === n) {
            i[s] = a;break;
          }
        }s === l && i.push(a);
      }o.tween = i;
    };
  }function Qt(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = ft(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return ht(t, r).value[n];
    };
  }function tn(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function nn(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function en(t, n, e) {
    var r, i;return function () {
      var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function rn(t, n, e) {
    var r, i;return function () {
      var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function on(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function un(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function an(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function sn(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function ln(t, n) {
    return function () {
      ct(this, t).delay = +n.apply(this, arguments);
    };
  }function cn(t, n) {
    return n = +n, function () {
      ct(this, t).delay = n;
    };
  }function fn(t, n) {
    return function () {
      ft(this, t).duration = +n.apply(this, arguments);
    };
  }function hn(t, n) {
    return n = +n, function () {
      ft(this, t).duration = n;
    };
  }function pn(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      ft(this, t).ease = n;
    };
  }function gn(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function dn(t, n, e) {
    var r,
        i,
        o = gn(n) ? ct : ft;return function () {
      var u = o(this, t),
          a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
    };
  }function yn(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function vn(t, n) {
    var e, r, i;return function () {
      var o = Hu(this).getComputedStyle(this, null),
          u = o.getPropertyValue(t),
          a = (this.style.removeProperty(t), o.getPropertyValue(t));return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a);
    };
  }function wn(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function mn(t, n, e) {
    var r, i;return function () {
      var o = Hu(this).getComputedStyle(this, null).getPropertyValue(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function _n(t, n, e) {
    var r, i, o;return function () {
      var u = Hu(this).getComputedStyle(this, null),
          a = u.getPropertyValue(t),
          s = e(this);return null == s && (this.style.removeProperty(t), s = u.getPropertyValue(t)), a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
    };
  }function bn(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function xn(t) {
    return function () {
      this.textContent = t;
    };
  }function Mn(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function Nn(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function kn(t) {
    return W().transition(t);
  }function An() {
    return ++zs;
  }function Tn(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function Cn(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return Ws.time = nt(), Ws;
    }return e;
  }function En(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = na(this);for (var r in t) {
        e.attr(r, t[r]);
      }
    });
  }function Sn(t, n) {
    for (var e in n) {
      t.attr(e, n[e]);
    }return t;
  }function Un(t, n, e) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          r = na(this);for (var i in t) {
        r.style(i, t[i], e);
      }
    });
  }function qn(t, n, e) {
    for (var r in n) {
      t.style(r, n[r], e);
    }return t;
  }function Dn(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = na(this);for (var r in t) {
        e.property(r, t[r]);
      }
    });
  }function Pn(t, n) {
    for (var e in n) {
      t.property(e, n[e]);
    }return t;
  }function Yn() {}function Fn(t, n) {
    var e = new Yn();if (t instanceof Yn) t.each(function (t, n) {
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
  }function On() {}function In(t, n) {
    var e = new On();if (t instanceof On) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }function jn() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new Xn(r);
  }function Xn(t) {
    this._ = t;
  }function Hn(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function zn(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function Ln(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = ol, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function Rn() {
    return pl || (yl($n), pl = dl.now() + gl);
  }function $n() {
    pl = 0;
  }function Vn() {
    this._call = this._time = this._next = null;
  }function Zn(t, n, e) {
    var r = new Vn();return r.restart(t, n, e), r;
  }function Bn() {
    Rn(), ++sl;for (var t, n = ul; n;) {
      (t = pl - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--sl;
  }function Wn() {
    pl = (hl = dl.now()) + gl, sl = ll = 0;try {
      Bn();
    } finally {
      sl = 0, Gn(), pl = 0;
    }
  }function Jn() {
    var t = dl.now(),
        n = t - hl;n > fl && (gl -= n, hl = t);
  }function Gn() {
    for (var t, n, e = ul, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ul = n);
    }al = t, Kn(r);
  }function Kn(t) {
    if (!sl) {
      ll && (ll = clearTimeout(ll));var n = t - pl;n > 24 ? (t < 1 / 0 && (ll = setTimeout(Wn, n)), cl && (cl = clearInterval(cl))) : (cl || (hl = pl, cl = setInterval(Jn, fl)), sl = 1, yl(Wn));
    }
  }function Qn(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > _l) throw new Error("too late");return e;
  }function te(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > xl) throw new Error("too late");return e;
  }function ne(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function ee(t, n, e) {
    function r(t) {
      e.state = bl, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
    }function i(r) {
      var l, c, f, h;if (e.state !== bl) return u();for (l in s) {
        if (h = s[l], h.name === e.name) {
          if (h.state === Ml) return vl(i);h.state === Nl ? (h.state = Al, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete s[l]) : +l < n && (h.state = Al, h.timer.stop(), delete s[l]);
        }
      }if (vl(function () {
        e.state === Ml && (e.state = Nl, e.timer.restart(o, e.delay, e.time), o(r));
      }), e.state = xl, e.on.call("start", t, t.__data__, e.index, e.group), e.state === xl) {
        for (e.state = Ml, a = new Array(f = e.tween.length), l = 0, c = -1; l < f; ++l) {
          (h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (a[++c] = h);
        }a.length = c + 1;
      }
    }function o(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = kl, 1), i = -1, o = a.length; ++i < o;) {
        a[i].call(null, r);
      }e.state === kl && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = Al, e.timer.stop(), delete s[n];for (var r in s) {
        return;
      }delete t.__transition;
    }var a,
        s = t.__transition;s[n] = e, e.timer = Zn(r, 0, e.time);
  }function re(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function ie() {}function oe(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Fl.exec(t)) ? (n = parseInt(n[1], 16), new ce(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Ol.exec(t)) ? ue(parseInt(n[1], 16)) : (n = Il.exec(t)) ? new ce(n[1], n[2], n[3], 1) : (n = jl.exec(t)) ? new ce(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Xl.exec(t)) ? ae(n[1], n[2], n[3], n[4]) : (n = Hl.exec(t)) ? ae(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = zl.exec(t)) ? fe(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ll.exec(t)) ? fe(n[1], n[2] / 100, n[3] / 100, n[4]) : Rl.hasOwnProperty(t) ? ue(Rl[t]) : "transparent" === t ? new ce(NaN, NaN, NaN, 0) : null;
  }function ue(t) {
    return new ce(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function ae(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new ce(t, n, e, r);
  }function se(t) {
    return t instanceof ie || (t = oe(t)), t ? (t = t.rgb(), new ce(t.r, t.g, t.b, t.opacity)) : new ce();
  }function le(t, n, e, r) {
    return 1 === arguments.length ? se(t) : new ce(t, n, e, null == r ? 1 : r);
  }function ce(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function fe(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ge(t, n, e, r);
  }function he(t) {
    if (t instanceof ge) return new ge(t.h, t.s, t.l, t.opacity);if (t instanceof ie || (t = oe(t)), !t) return new ge();if (t instanceof ge) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new ge(u, a, s, t.opacity);
  }function pe(t, n, e, r) {
    return 1 === arguments.length ? he(t) : new ge(t, n, e, null == r ? 1 : r);
  }function ge(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function de(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function ye(t) {
    if (t instanceof we) return new we(t.l, t.a, t.b, t.opacity);if (t instanceof ke) {
      var n = t.h * $l;return new we(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof ce || (t = se(t));var e = xe(t.r),
        r = xe(t.g),
        i = xe(t.b),
        o = me((.4124564 * e + .3575761 * r + .1804375 * i) / Bl),
        u = me((.2126729 * e + .7151522 * r + .072175 * i) / Wl),
        a = me((.0193339 * e + .119192 * r + .9503041 * i) / Jl);return new we(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }function ve(t, n, e, r) {
    return 1 === arguments.length ? ye(t) : new we(t, n, e, null == r ? 1 : r);
  }function we(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function me(t) {
    return t > tc ? Math.pow(t, 1 / 3) : t / Ql + Gl;
  }function _e(t) {
    return t > Kl ? t * t * t : Ql * (t - Gl);
  }function be(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function xe(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Me(t) {
    if (t instanceof ke) return new ke(t.h, t.c, t.l, t.opacity);t instanceof we || (t = ye(t));var n = Math.atan2(t.b, t.a) * Vl;return new ke(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Ne(t, n, e, r) {
    return 1 === arguments.length ? Me(t) : new ke(t, n, e, null == r ? 1 : r);
  }function ke(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Ae(t) {
    if (t instanceof Ce) return new Ce(t.h, t.s, t.l, t.opacity);t instanceof ce || (t = se(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (sc * r + uc * n - ac * e) / (sc + uc - ac),
        o = r - i,
        u = (oc * (e - i) - rc * o) / ic,
        a = Math.sqrt(u * u + o * o) / (oc * i * (1 - i)),
        s = a ? Math.atan2(u, o) * Vl - 120 : NaN;return new Ce(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function Te(t, n, e, r) {
    return 1 === arguments.length ? Ae(t) : new Ce(t, n, e, null == r ? 1 : r);
  }function Ce(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Ee(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Se(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function Ue(t, n) {
    var e = n - t;return e ? Ee(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : pc(isNaN(t) ? n : t);
  }function qe(t) {
    return 1 === (t = +t) ? De : function (n, e) {
      return e - n ? Se(n, e, t) : pc(isNaN(n) ? e : n);
    };
  }function De(t, n) {
    var e = n - t;return e ? Ee(t, e) : pc(isNaN(t) ? n : t);
  }function Pe(t) {
    return function () {
      return t;
    };
  }function Ye(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Fe(t) {
    return "none" === t ? _c : (lc || (lc = document.createElement("DIV"), cc = document.documentElement, fc = document.defaultView), lc.style.transform = t, t = fc.getComputedStyle(cc.appendChild(lc), null).getPropertyValue("transform"), cc.removeChild(lc), t = t.slice(7, -1).split(","), bc(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }function Oe(t) {
    return null == t ? _c : (hc || (hc = document.createElementNS("http://www.w3.org/2000/svg", "g")), hc.setAttribute("transform", t), (t = hc.transform.baseVal.consolidate()) ? (t = t.matrix, bc(t.a, t.b, t.c, t.d, t.e, t.f)) : _c);
  }function Ie(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: dc(t, i) }, { i: s - 2, x: dc(r, o) });
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }function u(t, n, e, o) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: dc(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, o) {
      t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: dc(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function s(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: dc(t, e) }, { i: a - 2, x: dc(n, r) });
      } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, o = i.length; ++e < o;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function je(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Te(n)).h, (r = Te(r)).h),
            o = De(n.s, r.s),
            u = De(n.l, r.l),
            a = De(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function Xe(t, n) {
    var e, r;return function () {
      var i = te(this, t),
          o = i.tween;if (o !== e) {
        r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
          if (r[u].name === n) {
            r = r.slice(), r.splice(u, 1);break;
          }
        }
      }i.tween = r;
    };
  }function He(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var o = te(this, t),
          u = o.tween;if (u !== r) {
        i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, l = i.length; s < l; ++s) {
          if (i[s].name === n) {
            i[s] = a;break;
          }
        }s === l && i.push(a);
      }o.tween = i;
    };
  }function ze(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = te(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return ne(t, r).value[n];
    };
  }function Le(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function Re(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function $e(t, n, e) {
    var r, i;return function () {
      var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function Ve(t, n, e) {
    var r, i;return function () {
      var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function Ze(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function Be(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function We(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function Je(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function Ge(t, n) {
    return function () {
      Qn(this, t).delay = +n.apply(this, arguments);
    };
  }function Ke(t, n) {
    return n = +n, function () {
      Qn(this, t).delay = n;
    };
  }function Qe(t, n) {
    return function () {
      te(this, t).duration = +n.apply(this, arguments);
    };
  }function tr(t, n) {
    return n = +n, function () {
      te(this, t).duration = n;
    };
  }function nr(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      te(this, t).ease = n;
    };
  }function er(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function rr(t, n, e) {
    var r,
        i,
        o = er(n) ? Qn : te;return function () {
      var u = o(this, t),
          a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
    };
  }function ir(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function or(t, n) {
    var e, r, i;return function () {
      var o = Hu(this).getComputedStyle(this, null),
          u = o.getPropertyValue(t),
          a = (this.style.removeProperty(t), o.getPropertyValue(t));return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a);
    };
  }function ur(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function ar(t, n, e) {
    var r, i;return function () {
      var o = Hu(this).getComputedStyle(this, null).getPropertyValue(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function sr(t, n, e) {
    var r, i, o;return function () {
      var u = Hu(this).getComputedStyle(this, null),
          a = u.getPropertyValue(t),
          s = e(this);return null == s && (this.style.removeProperty(t), s = u.getPropertyValue(t)), a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
    };
  }function lr(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function cr(t) {
    return function () {
      this.textContent = t;
    };
  }function fr(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function hr(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function pr(t) {
    return W().transition(t);
  }function gr() {
    return ++Lc;
  }function dr(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function yr(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return Jc.time = Rn(), Jc;
    }return e;
  }function vr() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new wr(r);
  }function wr(t) {
    this._ = t;
  }function mr(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function _r(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function br(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = Kc, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function xr(t) {
    return function (n, e) {
      t(null == n ? e : null);
    };
  }function Mr(t) {
    var n = t.responseType;return n && "text" !== n ? t.response : t.responseText;
  }function Nr(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function kr(t, n) {
    var e = Nr(t);return function (r, i) {
      return n(e(r), i, t);
    };
  }function Ar(t) {
    var n = Object.create(null),
        e = [];return t.forEach(function (t) {
      for (var r in t) {
        r in n || e.push(n[r] = r);
      }
    }), e;
  }function Tr(t, n) {
    return function (e) {
      return t(e.responseText, n);
    };
  }function Cr(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;var i,
        o,
        u,
        a,
        s,
        l,
        c,
        f,
        h,
        p = t._root,
        g = { data: r },
        d = t._x0,
        y = t._y0,
        v = t._x1,
        w = t._y1;if (!p) return t._root = g, t;for (; p.length;) {
      if ((l = n >= (o = (d + v) / 2)) ? d = o : v = o, (c = e >= (u = (y + w) / 2)) ? y = u : w = u, i = p, !(p = p[f = c << 1 | l])) return i[f] = g, t;
    }if (a = +t._x.call(null, p.data), s = +t._y.call(null, p.data), n === a && e === s) return g.next = p, i ? i[f] = g : t._root = g, t;do {
      i = i ? i[f] = new Array(4) : t._root = new Array(4), (l = n >= (o = (d + v) / 2)) ? d = o : v = o, (c = e >= (u = (y + w) / 2)) ? y = u : w = u;
    } while ((f = c << 1 | l) === (h = (s >= u) << 1 | a >= o));return i[h] = p, i[f] = g, t;
  }function Er(t) {
    var n,
        e,
        r,
        i,
        o = t.length,
        u = new Array(o),
        a = new Array(o),
        s = 1 / 0,
        l = 1 / 0,
        c = -(1 / 0),
        f = -(1 / 0);for (e = 0; e < o; ++e) {
      isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < s && (s = r), r > c && (c = r), i < l && (l = i), i > f && (f = i));
    }for (c < s && (s = this._x0, c = this._x1), f < l && (l = this._y0, f = this._y1), this.cover(s, l).cover(c, f), e = 0; e < o; ++e) {
      Cr(this, u[e], a[e], t[e]);
    }return this;
  }function Sr(t) {
    for (var n = 0, e = t.length; n < e; ++n) {
      this.remove(t[n]);
    }return this;
  }function Ur(t) {
    return t[0];
  }function qr(t) {
    return t[1];
  }function Dr(t, n, e) {
    var r = new Pr(null == n ? Ur : n, null == e ? qr : e, NaN, NaN, NaN, NaN);return null == t ? r : r.addAll(t);
  }function Pr(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }function Yr(t) {
    for (var n = { data: t.data }, e = n; t = t.next;) {
      e = e.next = { data: t.data };
    }return n;
  }function Fr(t) {
    return t.x + t.vx;
  }function Or(t) {
    return t.y + t.vy;
  }function Ir(t) {
    return t.index;
  }function jr(t, n) {
    var e = t.get(n);if (!e) throw new Error("missing: " + n);return e;
  }function Xr() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new Hr(r);
  }function Hr(t) {
    this._ = t;
  }function zr(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function Lr(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function Rr(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = Cf, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function $r() {
    return Ff || (jf(Vr), Ff = If.now() + Of);
  }function Vr() {
    Ff = 0;
  }function Zr() {
    this._call = this._time = this._next = null;
  }function Br(t, n, e) {
    var r = new Zr();return r.restart(t, n, e), r;
  }function Wr() {
    $r(), ++Uf;for (var t, n = Ef; n;) {
      (t = Ff - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--Uf;
  }function Jr() {
    Ff = (Yf = If.now()) + Of, Uf = qf = 0;try {
      Wr();
    } finally {
      Uf = 0, Kr(), Ff = 0;
    }
  }function Gr() {
    var t = If.now(),
        n = t - Yf;n > Pf && (Of -= n, Yf = t);
  }function Kr() {
    for (var t, n, e = Ef, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ef = n);
    }Sf = t, Qr(r);
  }function Qr(t) {
    if (!Uf) {
      qf && (qf = clearTimeout(qf));var n = t - Ff;n > 24 ? (t < 1 / 0 && (qf = setTimeout(Jr, n)), Df && (Df = clearInterval(Df))) : (Df || (Yf = Ff, Df = setInterval(Gr, Pf)), Uf = 1, jf(Jr));
    }
  }function ti(t) {
    return t.x;
  }function ni(t) {
    return t.y;
  }function ei() {
    t.event.stopImmediatePropagation();
  }function ri(t, n) {
    var e = t.document.documentElement,
        r = na(t).on("dragstart.drag", null);n && (r.on("click.drag", Vf, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }function ii(t, n, e, r, i, o, u, a, s, l) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = s, this._ = l;
  }function oi() {
    return !t.event.button;
  }function ui() {
    return this.parentNode;
  }function ai(n) {
    return null == n ? { x: t.event.x, y: t.event.y } : n;
  }function si(t) {
    return function (n, e) {
      return Jf(t(n), e);
    };
  }function li(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;return o >= nh ? i *= 10 : o >= eh ? i *= 5 : o >= rh && (i *= 2), n < t ? -i : i;
  }function ci(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function fi() {}function hi(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = gh.exec(t)) ? (n = parseInt(n[1], 16), new vi(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = dh.exec(t)) ? pi(parseInt(n[1], 16)) : (n = yh.exec(t)) ? new vi(n[1], n[2], n[3], 1) : (n = vh.exec(t)) ? new vi(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = wh.exec(t)) ? gi(n[1], n[2], n[3], n[4]) : (n = mh.exec(t)) ? gi(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = _h.exec(t)) ? wi(n[1], n[2] / 100, n[3] / 100, 1) : (n = bh.exec(t)) ? wi(n[1], n[2] / 100, n[3] / 100, n[4]) : xh.hasOwnProperty(t) ? pi(xh[t]) : "transparent" === t ? new vi(NaN, NaN, NaN, 0) : null;
  }function pi(t) {
    return new vi(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function gi(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new vi(t, n, e, r);
  }function di(t) {
    return t instanceof fi || (t = hi(t)), t ? (t = t.rgb(), new vi(t.r, t.g, t.b, t.opacity)) : new vi();
  }function yi(t, n, e, r) {
    return 1 === arguments.length ? di(t) : new vi(t, n, e, null == r ? 1 : r);
  }function vi(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function wi(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new bi(t, n, e, r);
  }function mi(t) {
    if (t instanceof bi) return new bi(t.h, t.s, t.l, t.opacity);if (t instanceof fi || (t = hi(t)), !t) return new bi();if (t instanceof bi) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new bi(u, a, s, t.opacity);
  }function _i(t, n, e, r) {
    return 1 === arguments.length ? mi(t) : new bi(t, n, e, null == r ? 1 : r);
  }function bi(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function xi(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function Mi(t) {
    if (t instanceof ki) return new ki(t.l, t.a, t.b, t.opacity);if (t instanceof qi) {
      var n = t.h * Mh;return new ki(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof vi || (t = di(t));var e = Ei(t.r),
        r = Ei(t.g),
        i = Ei(t.b),
        o = Ai((.4124564 * e + .3575761 * r + .1804375 * i) / Ah),
        u = Ai((.2126729 * e + .7151522 * r + .072175 * i) / Th),
        a = Ai((.0193339 * e + .119192 * r + .9503041 * i) / Ch);return new ki(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }function Ni(t, n, e, r) {
    return 1 === arguments.length ? Mi(t) : new ki(t, n, e, null == r ? 1 : r);
  }function ki(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function Ai(t) {
    return t > qh ? Math.pow(t, 1 / 3) : t / Uh + Eh;
  }function Ti(t) {
    return t > Sh ? t * t * t : Uh * (t - Eh);
  }function Ci(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function Ei(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Si(t) {
    if (t instanceof qi) return new qi(t.h, t.c, t.l, t.opacity);t instanceof ki || (t = Mi(t));var n = Math.atan2(t.b, t.a) * Nh;return new qi(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Ui(t, n, e, r) {
    return 1 === arguments.length ? Si(t) : new qi(t, n, e, null == r ? 1 : r);
  }function qi(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Di(t) {
    if (t instanceof Yi) return new Yi(t.h, t.s, t.l, t.opacity);t instanceof vi || (t = di(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (Xh * r + Ih * n - jh * e) / (Xh + Ih - jh),
        o = r - i,
        u = (Oh * (e - i) - Yh * o) / Fh,
        a = Math.sqrt(u * u + o * o) / (Oh * i * (1 - i)),
        s = a ? Math.atan2(u, o) * Nh - 120 : NaN;return new Yi(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function Pi(t, n, e, r) {
    return 1 === arguments.length ? Di(t) : new Yi(t, n, e, null == r ? 1 : r);
  }function Yi(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Fi(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Oi(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function Ii(t, n) {
    var e = n - t;return e ? Fi(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Hh(isNaN(t) ? n : t);
  }function ji(t) {
    return 1 === (t = +t) ? Xi : function (n, e) {
      return e - n ? Oi(n, e, t) : Hh(isNaN(n) ? e : n);
    };
  }function Xi(t, n) {
    var e = n - t;return e ? Fi(t, e) : Hh(isNaN(t) ? n : t);
  }function Hi(t) {
    return function () {
      return t;
    };
  }function zi(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Li(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Pi(n)).h, (r = Pi(r)).h),
            o = Xi(n.s, r.s),
            u = Xi(n.l, r.l),
            a = Xi(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function Ri(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : tp(n);
  }function $i(t) {
    return function (n, e) {
      var r = t(n = +n, e = +e);return function (t) {
        return t <= n ? 0 : t >= e ? 1 : r(t);
      };
    };
  }function Vi(t) {
    return function (n, e) {
      var r = t(n = +n, e = +e);return function (t) {
        return t <= 0 ? n : t >= 1 ? e : r(t);
      };
    };
  }function Zi(t, n, e, r) {
    var i = t[0],
        o = t[1],
        u = n[0],
        a = n[1];return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)), function (t) {
      return u(i(t));
    };
  }function Bi(t, n, e, r) {
    var i = Math.min(t.length, n.length) - 1,
        o = new Array(i),
        u = new Array(i),
        a = -1;for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) {
      o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
    }return function (n) {
      var e = Qf(t, n, 1, i) - 1;return u[e](o[e](n));
    };
  }function Wi(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function Ji(t, n) {
    function e() {
      return i = Math.min(a.length, s.length) > 2 ? Bi : Zi, o = u = null, r;
    }function r(n) {
      return (o || (o = i(a, s, c ? $i(t) : t, l)))(+n);
    }var i,
        o,
        u,
        a = ep,
        s = ep,
        l = Jh,
        c = !1;return r.invert = function (t) {
      return (u || (u = i(s, a, Ri, c ? Vi(n) : n)))(+t);
    }, r.domain = function (t) {
      return arguments.length ? (a = uh.call(t, np), e()) : a.slice();
    }, r.range = function (t) {
      return arguments.length ? (s = ah.call(t), e()) : s.slice();
    }, r.rangeRound = function (t) {
      return s = ah.call(t), l = Gh, e();
    }, r.clamp = function (t) {
      return arguments.length ? (c = !!t, e()) : c;
    }, r.interpolate = function (t) {
      return arguments.length ? (l = t, e()) : l;
    }, e();
  }function Gi(t) {
    return new Ki(t);
  }function Ki(t) {
    if (!(n = fp.exec(t))) throw new Error("invalid format: " + t);var n,
        e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        o = n[4] || "",
        u = !!n[5],
        a = n[6] && +n[6],
        s = !!n[7],
        l = n[8] && +n[8].slice(1),
        c = n[9] || "";"n" === c ? (s = !0, c = "g") : cp[c] || (c = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = s, this.precision = l, this.type = c;
  }function Qi(t) {
    return hp = vp(t), pp = hp.format, gp = hp.formatPrefix, hp;
  }function to(t) {
    var n = t.domain;return t.ticks = function (t) {
      var e = n();return ih(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      return bp(n(), t, e);
    }, t.nice = function (e) {
      var r = n(),
          i = r.length - 1,
          o = null == e ? 10 : e,
          u = r[0],
          a = r[i],
          s = li(u, a, o);return s && (s = li(Math.floor(u / s) * s, Math.ceil(a / s) * s, o), r[0] = Math.floor(u / s) * s, r[i] = Math.ceil(a / s) * s, n(r)), t;
    }, t;
  }function no() {
    var t = Ji(Ri, $h);return t.copy = function () {
      return Wi(t, no());
    }, to(t);
  }function eo(t, n, e, r) {
    function i(n) {
      return t(n = new Date(+n)), n;
    }return i.floor = i, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, o) {
      var u = [];if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;do {
        u.push(new Date(+e));
      } while ((n(e, o), t(e), e < r));return u;
    }, i.filter = function (e) {
      return eo(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, r) {
        if (t >= t) for (; --r >= 0;) {
          for (; n(t, 1), !e(t);) {}
        }
      });
    }, e && (i.count = function (n, r) {
      return xp.setTime(+n), Mp.setTime(+r), t(xp), t(Mp), Math.floor(e(xp, Mp));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t === 0;
      } : function (n) {
        return i.count(0, n) % t === 0;
      }) : i : null;
    }), i;
  }function ro(t) {
    return eo(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ap) / Ep;
    });
  }function io(t) {
    return eo(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Ep;
    });
  }function oo(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function uo(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function ao(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function so(t) {
    function n(t, n) {
      return function (e) {
        var r,
            i,
            o,
            u = [],
            a = -1,
            s = 0,
            l = t.length;for (e instanceof Date || (e = new Date(+e)); ++a < l;) {
          37 === t.charCodeAt(a) && (u.push(t.slice(s, a)), null != (i = Lp[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), s = a + 1);
        }return u.push(t.slice(s, a)), u.join("");
      };
    }function e(t, n) {
      return function (e) {
        var i = ao(1900),
            o = r(i, t, e += "", 0);if (o != e.length) return null;if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
          "w" in i || (i.w = "W" in i ? 1 : 0);var u = "Z" in i ? uo(ao(i.y)).getUTCDay() : n(ao(i.y)).getDay();i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7;
        }return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, uo(i)) : n(i);
      };
    }function r(t, n, e, r) {
      for (var i, o, u = 0, a = n.length, s = e.length; u < a;) {
        if (r >= s) return -1;if (i = n.charCodeAt(u++), 37 === i) {
          if (i = n.charAt(u++), o = z[i in Lp ? n.charAt(u++) : i], !o || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }function i(t, n, e) {
      var r = S.exec(n.slice(e));return r ? (t.p = U[r[0].toLowerCase()], e + r[0].length) : -1;
    }function o(t, n, e) {
      var r = P.exec(n.slice(e));return r ? (t.w = Y[r[0].toLowerCase()], e + r[0].length) : -1;
    }function u(t, n, e) {
      var r = q.exec(n.slice(e));return r ? (t.w = D[r[0].toLowerCase()], e + r[0].length) : -1;
    }function a(t, n, e) {
      var r = I.exec(n.slice(e));return r ? (t.m = j[r[0].toLowerCase()], e + r[0].length) : -1;
    }function s(t, n, e) {
      var r = F.exec(n.slice(e));return r ? (t.m = O[r[0].toLowerCase()], e + r[0].length) : -1;
    }function l(t, n, e) {
      return r(t, x, n, e);
    }function c(t, n, e) {
      return r(t, M, n, e);
    }function f(t, n, e) {
      return r(t, N, n, e);
    }function h(t) {
      return T[t.getDay()];
    }function p(t) {
      return A[t.getDay()];
    }function g(t) {
      return E[t.getMonth()];
    }function d(t) {
      return C[t.getMonth()];
    }function y(t) {
      return k[+(t.getHours() >= 12)];
    }function v(t) {
      return T[t.getUTCDay()];
    }function w(t) {
      return A[t.getUTCDay()];
    }function m(t) {
      return E[t.getUTCMonth()];
    }function _(t) {
      return C[t.getUTCMonth()];
    }function b(t) {
      return k[+(t.getUTCHours() >= 12)];
    }var x = t.dateTime,
        M = t.date,
        N = t.time,
        k = t.periods,
        A = t.days,
        T = t.shortDays,
        C = t.months,
        E = t.shortMonths,
        S = fo(k),
        U = ho(k),
        q = fo(A),
        D = ho(A),
        P = fo(T),
        Y = ho(T),
        F = fo(C),
        O = ho(C),
        I = fo(E),
        j = ho(E),
        X = { a: h, A: p, b: g, B: d, c: null, d: Co, e: Co, H: Eo, I: So, j: Uo, L: qo, m: Do, M: Po, p: y, S: Yo, U: Fo, w: Oo, W: Io, x: null, X: null, y: jo, Y: Xo, Z: Ho, "%": eu },
        H = { a: v, A: w, b: m, B: _, c: null, d: zo, e: zo, H: Lo, I: Ro, j: $o, L: Vo, m: Zo, M: Bo, p: b, S: Wo, U: Jo, w: Go, W: Ko, x: null, X: null, y: Qo, Y: tu, Z: nu, "%": eu },
        z = { a: o, A: u, b: a, B: s, c: l, d: bo, e: bo, H: Mo, I: Mo, j: xo, L: Ao, m: _o, M: No, p: i, S: ko, U: go, w: po, W: yo, x: c, X: f, y: wo, Y: vo, Z: mo, "%": To };return X.x = n(M, X), X.X = n(N, X), X.c = n(x, X), H.x = n(M, H), H.X = n(N, H), H.c = n(x, H), { format: function format(t) {
        var e = n(t += "", X);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var n = e(t += "", oo);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var e = n(t += "", H);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var n = e(t, uo);return n.toString = function () {
          return t;
        }, n;
      } };
  }function lo(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }function co(t) {
    return t.replace(Vp, "\\$&");
  }function fo(t) {
    return new RegExp("^(?:" + t.map(co).join("|") + ")", "i");
  }function ho(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function po(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 1));return r ? (t.w = +r[0], e + r[0].length) : -1;
  }function go(t, n, e) {
    var r = Rp.exec(n.slice(e));return r ? (t.U = +r[0], e + r[0].length) : -1;
  }function yo(t, n, e) {
    var r = Rp.exec(n.slice(e));return r ? (t.W = +r[0], e + r[0].length) : -1;
  }function vo(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 4));return r ? (t.y = +r[0], e + r[0].length) : -1;
  }function wo(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }function mo(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }function _o(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }function bo(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.d = +r[0], e + r[0].length) : -1;
  }function xo(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 3));return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }function Mo(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.H = +r[0], e + r[0].length) : -1;
  }function No(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.M = +r[0], e + r[0].length) : -1;
  }function ko(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 2));return r ? (t.S = +r[0], e + r[0].length) : -1;
  }function Ao(t, n, e) {
    var r = Rp.exec(n.slice(e, e + 3));return r ? (t.L = +r[0], e + r[0].length) : -1;
  }function To(t, n, e) {
    var r = $p.exec(n.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function Co(t, n) {
    return lo(t.getDate(), n, 2);
  }function Eo(t, n) {
    return lo(t.getHours(), n, 2);
  }function So(t, n) {
    return lo(t.getHours() % 12 || 12, n, 2);
  }function Uo(t, n) {
    return lo(1 + Sp.count(Dp(t), t), n, 3);
  }function qo(t, n) {
    return lo(t.getMilliseconds(), n, 3);
  }function Do(t, n) {
    return lo(t.getMonth() + 1, n, 2);
  }function Po(t, n) {
    return lo(t.getMinutes(), n, 2);
  }function Yo(t, n) {
    return lo(t.getSeconds(), n, 2);
  }function Fo(t, n) {
    return lo(Up.count(Dp(t), t), n, 2);
  }function Oo(t) {
    return t.getDay();
  }function Io(t, n) {
    return lo(qp.count(Dp(t), t), n, 2);
  }function jo(t, n) {
    return lo(t.getFullYear() % 100, n, 2);
  }function Xo(t, n) {
    return lo(t.getFullYear() % 1e4, n, 4);
  }function Ho(t) {
    var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + lo(n / 60 | 0, "0", 2) + lo(n % 60, "0", 2);
  }function zo(t, n) {
    return lo(t.getUTCDate(), n, 2);
  }function Lo(t, n) {
    return lo(t.getUTCHours(), n, 2);
  }function Ro(t, n) {
    return lo(t.getUTCHours() % 12 || 12, n, 2);
  }function $o(t, n) {
    return lo(1 + Pp.count(Op(t), t), n, 3);
  }function Vo(t, n) {
    return lo(t.getUTCMilliseconds(), n, 3);
  }function Zo(t, n) {
    return lo(t.getUTCMonth() + 1, n, 2);
  }function Bo(t, n) {
    return lo(t.getUTCMinutes(), n, 2);
  }function Wo(t, n) {
    return lo(t.getUTCSeconds(), n, 2);
  }function Jo(t, n) {
    return lo(Yp.count(Op(t), t), n, 2);
  }function Go(t) {
    return t.getUTCDay();
  }function Ko(t, n) {
    return lo(Fp.count(Op(t), t), n, 2);
  }function Qo(t, n) {
    return lo(t.getUTCFullYear() % 100, n, 2);
  }function tu(t, n) {
    return lo(t.getUTCFullYear() % 1e4, n, 4);
  }function nu() {
    return "+0000";
  }function eu() {
    return "%";
  }function ru(t) {
    return Ip = so(t), jp = Ip.format, Xp = Ip.parse, Hp = Ip.utcFormat, zp = Ip.utcParse, Ip;
  }function iu(t) {
    return t.toISOString();
  }function ou(t) {
    var n = new Date(t);return isNaN(n) ? null : n;
  }var uu = "http://www.w3.org/1999/xhtml",
      au = { svg: "http://www.w3.org/2000/svg", xhtml: uu, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      su = function su(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), au.hasOwnProperty(n) ? { space: au[n], local: t } : t;
  },
      lu = function lu(t) {
    var r = su(t);return (r.local ? e : n)(r);
  },
      cu = function cu(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var fu = document.documentElement;if (!fu.matches) {
      var hu = fu.webkitMatchesSelector || fu.msMatchesSelector || fu.mozMatchesSelector || fu.oMatchesSelector;cu = function cu(t) {
        return function () {
          return hu.call(this, t);
        };
      };
    }
  }var pu = cu,
      gu = {};if (t.event = null, "undefined" != typeof document) {
    var du = document.documentElement;"onmouseenter" in du || (gu = { mouseenter: "mouseover", mouseleave: "mouseout" });
  }var yu = function yu(t, n, e) {
    var r,
        i,
        s = o(t + ""),
        l = s.length;{
      if (!(arguments.length < 2)) {
        for (c = n ? a : u, null == e && (e = !1), r = 0; r < l; ++r) {
          this.each(c(s[r], n, e));
        }return this;
      }var c = this.node().__on;if (c) for (var f, h = 0, p = c.length; h < p; ++h) {
        for (r = 0, f = c[h]; r < l; ++r) {
          if ((i = s[r]).type === f.type && i.name === f.name) return f.value;
        }
      }
    }
  },
      vu = function vu() {
    for (var n, e = t.event; n = e.sourceEvent;) {
      e = n;
    }return e;
  },
      wu = function wu(t, n) {
    var e = t.ownerSVGElement || t;if (e.createSVGPoint) {
      var r = e.createSVGPoint();return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }var i = t.getBoundingClientRect();return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
  },
      mu = function mu(t) {
    var n = vu();return n.changedTouches && (n = n.changedTouches[0]), wu(t, n);
  },
      _u = function _u(t) {
    return null == t ? l : function () {
      return this.querySelector(t);
    };
  },
      bu = function bu(t) {
    "function" != typeof t && (t = _u(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u, a = n[i], s = a.length, l = r[i] = new Array(s), c = 0; c < s; ++c) {
        (o = a[c]) && (u = t.call(o, o.__data__, c, a)) && ("__data__" in o && (u.__data__ = o.__data__), l[c] = u);
      }
    }return new B(r, this._parents);
  },
      xu = function xu(t) {
    return null == t ? c : function () {
      return this.querySelectorAll(t);
    };
  },
      Mu = function Mu(t) {
    "function" != typeof t && (t = xu(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
      for (var u, a = n[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
      }
    }return new B(r, i);
  },
      Nu = function Nu(t) {
    "function" != typeof t && (t = pu(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new B(r, this._parents);
  },
      ku = function ku(t) {
    return new Array(t.length);
  },
      Au = function Au() {
    return new B(this._enter || this._groups.map(ku), this._parents);
  };f.prototype = { constructor: f, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var Tu = function Tu(t) {
    return function () {
      return t;
    };
  },
      Cu = "$",
      Eu = function Eu(t, n) {
    if (!t) return d = new Array(this.size()), l = -1, this.each(function (t) {
      d[++l] = t;
    }), d;var e = n ? p : h,
        r = this._parents,
        i = this._groups;"function" != typeof t && (t = Tu(t));for (var o = i.length, u = new Array(o), a = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
      var c = r[l],
          f = i[l],
          g = f.length,
          d = t.call(c, c && c.__data__, l, r),
          y = d.length,
          v = a[l] = new Array(y),
          w = u[l] = new Array(y),
          m = s[l] = new Array(g);e(c, f, v, w, m, d, n);for (var _, b, x = 0, M = 0; x < y; ++x) {
        if (_ = v[x]) {
          for (x >= M && (M = x + 1); !(b = w[M]) && ++M < y;) {}_._next = b || null;
        }
      }
    }return u = new B(u, r), u._enter = a, u._exit = s, u;
  },
      Su = function Su() {
    return new B(this._exit || this._groups.map(ku), this._parents);
  },
      Uu = function Uu(t) {
    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], f = l.length, h = u[a] = new Array(f), p = 0; p < f; ++p) {
        (s = l[p] || c[p]) && (h[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new B(u, this._parents);
  },
      qu = function qu() {
    for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
      for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
        (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
      }
    }return this;
  },
      Du = function Du(t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }t || (t = g);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var u, a = e[o], s = a.length, l = i[o] = new Array(s), c = 0; c < s; ++c) {
        (u = a[c]) && (l[c] = u);
      }l.sort(n);
    }return new B(i, this._parents).order();
  },
      Pu = function Pu() {
    var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
  },
      Yu = function Yu() {
    var t = new Array(this.size()),
        n = -1;return this.each(function () {
      t[++n] = this;
    }), t;
  },
      Fu = function Fu() {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];if (u) return u;
      }
    }return null;
  },
      Ou = function Ou() {
    var t = 0;return this.each(function () {
      ++t;
    }), t;
  },
      Iu = function Iu() {
    return !this.node();
  },
      ju = function ju(t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
      for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) {
        (i = o[u]) && t.call(i, i.__data__, u, o);
      }
    }return this;
  },
      Xu = function Xu(t, n) {
    var e = su(t);if (arguments.length < 2) {
      var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }return this.each((null == n ? e.local ? y : d : "function" == typeof n ? e.local ? _ : m : e.local ? w : v)(e, n));
  },
      Hu = function Hu(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  },
      zu = function zu(t, n, e) {
    var r;return arguments.length > 1 ? this.each((null == n ? b : "function" == typeof n ? M : x)(t, n, null == e ? "" : e)) : Hu(r = this.node()).getComputedStyle(r, null).getPropertyValue(t);
  },
      Lu = function Lu(t, n) {
    return arguments.length > 1 ? this.each((null == n ? N : "function" == typeof n ? A : k)(t, n)) : this.node()[t];
  };E.prototype = { add: function add(t) {
      var n = this._names.indexOf(t);n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var Ru = function Ru(t, n) {
    var e = T(t + "");if (arguments.length < 2) {
      for (var r = C(this.node()), i = -1, o = e.length; ++i < o;) {
        if (!r.contains(e[i])) return !1;
      }return !0;
    }return this.each(("function" == typeof n ? P : n ? q : D)(e, n));
  },
      $u = function $u(t) {
    return arguments.length ? this.each(null == t ? Y : ("function" == typeof t ? O : F)(t)) : this.node().textContent;
  },
      Vu = function Vu(t) {
    return arguments.length ? this.each(null == t ? I : ("function" == typeof t ? X : j)(t)) : this.node().innerHTML;
  },
      Zu = function Zu() {
    return this.each(H);
  },
      Bu = function Bu() {
    return this.each(z);
  },
      Wu = function Wu(t) {
    var n = "function" == typeof t ? t : lu(t);return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
      Ju = function Ju(t, n) {
    var e = "function" == typeof t ? t : lu(t),
        r = null == n ? L : "function" == typeof n ? n : _u(n);return this.select(function () {
      return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
    });
  },
      Gu = function Gu() {
    return this.each(R);
  },
      Ku = function Ku(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
  },
      Qu = function Qu(t, n) {
    return this.each(("function" == typeof n ? Z : V)(t, n));
  },
      ta = [null];B.prototype = W.prototype = { constructor: B, select: bu, selectAll: Mu, filter: Nu, data: Eu, enter: Au, exit: Su, merge: Uu, order: qu, sort: Du, call: Pu, nodes: Yu, node: Fu, size: Ou, empty: Iu, each: ju, attr: Xu, style: zu, property: Lu, classed: Ru, text: $u, html: Vu, raise: Zu, lower: Bu, append: Wu, insert: Ju, remove: Gu, datum: Ku, on: yu, dispatch: Qu };var na = function na(t) {
    return "string" == typeof t ? new B([[document.querySelector(t)]], [document.documentElement]) : new B([[t]], ta);
  },
      ea = function ea(t) {
    return "string" == typeof t ? new B([document.querySelectorAll(t)], [document.documentElement]) : new B([null == t ? [] : t], ta);
  },
      ra = function ra(t, n, e) {
    arguments.length < 3 && (e = n, n = vu().changedTouches);for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
      if ((r = n[i]).identifier === e) return wu(t, r);
    }return null;
  },
      ia = { value: function value() {} };G.prototype = J.prototype = { constructor: G, on: function on(t, n) {
      var e,
          r = this._,
          i = K(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = tt(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = tt(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = Q(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new G(t);
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
    } };var oa,
      ua,
      aa = 0,
      sa = 0,
      la = 0,
      ca = 1e3,
      fa = 0,
      ha = 0,
      pa = 0,
      ga = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      da = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };rt.prototype = it.prototype = { constructor: rt, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? nt() : +e) + (null == n ? 0 : +n), this._next || ua === this || (ua ? ua._next = this : oa = this, ua = this), this._call = t, this._time = e, lt();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, lt());
    } };var ya = function ya(t, n, e) {
    var r = new rt();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      va = J("start", "end", "interrupt"),
      wa = [],
      ma = 0,
      _a = 1,
      ba = 2,
      xa = 3,
      Ma = 4,
      Na = 5,
      ka = 6,
      Aa = function Aa(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};pt(t, e, { name: n, index: r, group: i, on: va, tween: wa, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: ma });
  },
      Ta = function Ta(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > ba && e.state < Na, e.state = ka, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      Ca = function Ca(t) {
    return this.each(function () {
      Ta(this, t);
    });
  },
      Ea = function Ea(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      Sa = .7,
      Ua = 1 / Sa,
      qa = "\\s*([+-]?\\d+)\\s*",
      Da = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Pa = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Ya = /^#([0-9a-f]{3})$/,
      Fa = /^#([0-9a-f]{6})$/,
      Oa = new RegExp("^rgb\\(" + [qa, qa, qa] + "\\)$"),
      Ia = new RegExp("^rgb\\(" + [Pa, Pa, Pa] + "\\)$"),
      ja = new RegExp("^rgba\\(" + [qa, qa, qa, Da] + "\\)$"),
      Xa = new RegExp("^rgba\\(" + [Pa, Pa, Pa, Da] + "\\)$"),
      Ha = new RegExp("^hsl\\(" + [Da, Pa, Pa] + "\\)$"),
      za = new RegExp("^hsla\\(" + [Da, Pa, Pa, Da] + "\\)$"),
      La = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Ea(dt, yt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Ea(bt, _t, gt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ua : Math.pow(Ua, t), new bt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Sa : Math.pow(Sa, t), new bt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Ea(kt, Nt, gt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ua : Math.pow(Ua, t), new kt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Sa : Math.pow(Sa, t), new kt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new bt(At(t >= 240 ? t - 240 : t + 120, i, r), At(t, i, r), At(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Ra = Math.PI / 180,
      $a = 180 / Math.PI,
      Va = 18,
      Za = .95047,
      Ba = 1,
      Wa = 1.08883,
      Ja = 4 / 29,
      Ga = 6 / 29,
      Ka = 3 * Ga * Ga,
      Qa = Ga * Ga * Ga;Ea(Et, Ct, gt(dt, { brighter: function brighter(t) {
      return new Et(this.l + Va * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new Et(this.l - Va * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Ba * Ut(t), n = Za * Ut(n), e = Wa * Ut(e), new bt(qt(3.2404542 * n - 1.5371385 * t - .4985314 * e), qt(-.969266 * n + 1.8760108 * t + .041556 * e), qt(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Ea(Ft, Yt, gt(dt, { brighter: function brighter(t) {
      return new Ft(this.h, this.c, this.l + Va * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Ft(this.h, this.c, this.l - Va * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return Tt(this).rgb();
    } }));var ts = -.14861,
      ns = 1.78277,
      es = -.29227,
      rs = -.90649,
      is = 1.97294,
      os = is * rs,
      us = is * ns,
      as = ns * es - rs * ts;Ea(jt, It, gt(dt, { brighter: function brighter(t) {
      return t = null == t ? Ua : Math.pow(Ua, t), new jt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Sa : Math.pow(Sa, t), new jt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Ra,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new bt(255 * (n + e * (ts * r + ns * i)), 255 * (n + e * (es * r + rs * i)), 255 * (n + e * (is * r)), this.opacity);
    } }));var ss,
      ls,
      cs,
      fs,
      hs = function hs(t) {
    return function () {
      return t;
    };
  },
      ps = function t(n) {
    function e(t, n) {
      var e = r((t = _t(t)).r, (n = _t(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Rt(t.opacity, n.opacity);
      return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = Lt(n);return e.gamma = t, e;
  }(1),
      gs = function gs(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      ds = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      ys = new RegExp(ds.source, "g"),
      vs = function vs(t, n) {
    var e,
        r,
        i,
        o = ds.lastIndex = ys.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = ds.exec(t)) && (r = ys.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: gs(e, r) })), o = ys.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? Vt(s[0].x) : $t(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      ws = 180 / Math.PI,
      ms = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      _s = function _s(t, n, e, r, i, o) {
    var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * ws, skewX: Math.atan(s) * ws, scaleX: u, scaleY: a };
  },
      bs = Wt(Zt, "px, ", "px)", "deg)"),
      xs = Wt(Bt, ", ", ")", ")");Jt(zt);var Ms = (Jt(Rt), function (t, n) {
    var e = this._id;if (t += "", arguments.length < 2) {
      for (var r, i = ht(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
        if ((r = i[o]).name === t) return r.value;
      }return null;
    }return this.each((null == n ? Gt : Kt)(e, t, n));
  }),
      Ns = function Ns(t, n) {
    var e;return ("number" == typeof n ? gs : n instanceof yt ? ps : (e = yt(n)) ? (n = e, ps) : vs)(t, n);
  },
      ks = function ks(t, n) {
    var e = su(t),
        r = "transform" === e ? xs : Ns;return this.attrTween(t, "function" == typeof n ? (e.local ? un : on)(e, r, Qt(this, "attr." + t, n)) : null == n ? (e.local ? nn : tn)(e) : (e.local ? rn : en)(e, r, n));
  },
      As = function As(t, n) {
    var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = su(t);return this.tween(e, (r.local ? an : sn)(r, n));
  },
      Ts = function Ts(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? ln : cn)(n, t)) : ht(this.node(), n).delay;
  },
      Cs = function Cs(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? fn : hn)(n, t)) : ht(this.node(), n).duration;
  },
      Es = function Es(t) {
    var n = this._id;return arguments.length ? this.each(pn(n, t)) : ht(this.node(), n).ease;
  },
      Ss = function Ss(t) {
    "function" != typeof t && (t = pu(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new Nn(r, this._parents, this._name, this._id);
  },
      Us = function Us(t) {
    if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], f = l.length, h = u[a] = new Array(f), p = 0; p < f; ++p) {
        (s = l[p] || c[p]) && (h[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new Nn(u, this._parents, this._name, this._id);
  },
      qs = function qs(t, n) {
    var e = this._id;return arguments.length < 2 ? ht(this.node(), e).on.on(t) : this.each(dn(e, t, n));
  },
      Ds = function Ds() {
    return this.on("end.remove", yn(this._id));
  },
      Ps = function Ps(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = _u(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
      for (var a, s, l = r[u], c = l.length, f = o[u] = new Array(c), h = 0; h < c; ++h) {
        (a = l[h]) && (s = t.call(a, a.__data__, h, l)) && ("__data__" in a && (s.__data__ = a.__data__), f[h] = s, Aa(f[h], n, e, h, f, ht(a, e)));
      }
    }return new Nn(o, this._parents, n, e);
  },
      Ys = function Ys(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = xu(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
      for (var s, l = r[a], c = l.length, f = 0; f < c; ++f) {
        if (s = l[f]) {
          for (var h, p = t.call(s, s.__data__, f, l), g = ht(s, e), d = 0, y = p.length; d < y; ++d) {
            (h = p[d]) && Aa(h, n, e, d, p, g);
          }o.push(p), u.push(s);
        }
      }
    }return new Nn(o, u, n, e);
  },
      Fs = W.prototype.constructor,
      Os = function Os() {
    return new Fs(this._groups, this._parents);
  },
      Is = function Is(t, n, e) {
    var r = "transform" == (t += "") ? bs : Ns;return null == n ? this.styleTween(t, vn(t, r)).on("end.style." + t, wn(t)) : this.styleTween(t, "function" == typeof n ? _n(t, r, Qt(this, "style." + t, n)) : mn(t, r, n), e);
  },
      js = function js(t, n, e) {
    var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, bn(t, n, null == e ? "" : e));
  },
      Xs = function Xs(t) {
    return this.tween("text", "function" == typeof t ? Mn(Qt(this, "text", t)) : xn(null == t ? "" : t + ""));
  },
      Hs = function Hs() {
    for (var t = this._name, n = this._id, e = An(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        if (u = a[l]) {
          var c = ht(u, n);Aa(u, t, e, l, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
      }
    }return new Nn(r, this._parents, t, e);
  },
      zs = 0,
      Ls = W.prototype;Nn.prototype = kn.prototype = { constructor: Nn, select: Ps, selectAll: Ys, filter: Ss, merge: Us, selection: Os, transition: Hs, call: Ls.call, nodes: Ls.nodes, node: Ls.node, size: Ls.size, empty: Ls.empty, each: Ls.each, on: qs, attr: ks, attrTween: As, style: Is, styleTween: js, text: Xs, remove: Ds, tween: Ms, delay: Ts, duration: Cs, ease: Es };var Rs = 3,
      $s = (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(Rs), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(Rs), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(Rs), 1.70158),
      Vs = (function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }($s), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }($s), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }($s), 2 * Math.PI),
      Zs = 1,
      Bs = .3,
      Ws = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vs);return r.amplitude = function (n) {
      return t(n, e * Vs);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Zs, Bs), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vs);return r.amplitude = function (n) {
      return t(n, e * Vs);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Zs, Bs), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vs);return r.amplitude = function (n) {
      return t(n, e * Vs);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Zs, Bs), { time: null, delay: 0, duration: 250, ease: Tn }),
      Js = function Js(t) {
    var n, e;t instanceof Nn ? (n = t._id, t = t._name) : (n = An(), (e = Ws).time = nt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && Aa(u, t, n, l, a, e || Cn(u, n));
      }
    }return new Nn(r, this._parents, t, n);
  };W.prototype.interrupt = Ca, W.prototype.transition = Js;var Gs = function Gs(t) {
    return ("function" == typeof t ? En : Sn)(this, t);
  },
      Ks = function Ks(t, n) {
    return ("function" == typeof t ? Un : qn)(this, t, null == n ? "" : n);
  },
      Qs = function Qs(t) {
    return ("function" == typeof t ? Dn : Pn)(this, t);
  };W.prototype.attrs = Gs, W.prototype.styles = Ks, W.prototype.properties = Qs;var tl = "$";Yn.prototype = Fn.prototype = { constructor: Yn, has: function has(t) {
      return tl + t in this;
    }, get: function get(t) {
      return this[tl + t];
    }, set: function set(t, n) {
      return this[tl + t] = n, this;
    }, remove: function remove(t) {
      var n = tl + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        t[0] === tl && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        n[0] === tl && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        n[0] === tl && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        n[0] === tl && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        n[0] === tl && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if (t[0] === tl) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        n[0] === tl && t(this[n], n.slice(1), this);
      }
    } };var nl = Fn.prototype;On.prototype = In.prototype = { constructor: On, has: nl.has, add: function add(t) {
      return t += "", this[tl + t] = t, this;
    }, remove: nl.remove, clear: nl.clear, values: nl.keys, size: nl.size, empty: nl.empty, each: nl.each };var el = function el(t) {
    var n = [];for (var e in t) {
      n.push(e);
    }return n;
  },
      rl = function rl(t) {
    var n = [];for (var e in t) {
      n.push(t[e]);
    }return n;
  },
      il = function il(t) {
    var n = [];for (var e in t) {
      n.push({ key: e, value: t[e] });
    }return n;
  },
      ol = { value: function value() {} };Xn.prototype = jn.prototype = { constructor: Xn, on: function on(t, n) {
      var e,
          r = this._,
          i = Hn(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = Ln(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = Ln(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = zn(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new Xn(t);
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
    } };var ul,
      al,
      sl = 0,
      ll = 0,
      cl = 0,
      fl = 1e3,
      hl = 0,
      pl = 0,
      gl = 0,
      dl = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      yl = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };Vn.prototype = Zn.prototype = { constructor: Vn, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? Rn() : +e) + (null == n ? 0 : +n), this._next || al === this || (al ? al._next = this : ul = this, al = this), this._call = t, this._time = e, Kn();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Kn());
    } };var vl = function vl(t, n, e) {
    var r = new Vn();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      wl = jn("start", "end", "interrupt"),
      ml = [],
      _l = 0,
      bl = 1,
      xl = 2,
      Ml = 3,
      Nl = 4,
      kl = 5,
      Al = 6,
      Tl = function Tl(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};ee(t, e, { name: n, index: r, group: i, on: wl, tween: ml, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: _l });
  },
      Cl = function Cl(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > xl && e.state < kl, e.state = Al, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      El = function El(t) {
    return this.each(function () {
      Cl(this, t);
    });
  },
      Sl = function Sl(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      Ul = .7,
      ql = 1 / Ul,
      Dl = "\\s*([+-]?\\d+)\\s*",
      Pl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Yl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Fl = /^#([0-9a-f]{3})$/,
      Ol = /^#([0-9a-f]{6})$/,
      Il = new RegExp("^rgb\\(" + [Dl, Dl, Dl] + "\\)$"),
      jl = new RegExp("^rgb\\(" + [Yl, Yl, Yl] + "\\)$"),
      Xl = new RegExp("^rgba\\(" + [Dl, Dl, Dl, Pl] + "\\)$"),
      Hl = new RegExp("^rgba\\(" + [Yl, Yl, Yl, Pl] + "\\)$"),
      zl = new RegExp("^hsl\\(" + [Pl, Yl, Yl] + "\\)$"),
      Ll = new RegExp("^hsla\\(" + [Pl, Yl, Yl, Pl] + "\\)$"),
      Rl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Sl(ie, oe, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Sl(ce, le, re(ie, { brighter: function brighter(t) {
      return t = null == t ? ql : Math.pow(ql, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ul : Math.pow(Ul, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Sl(ge, pe, re(ie, { brighter: function brighter(t) {
      return t = null == t ? ql : Math.pow(ql, t), new ge(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ul : Math.pow(Ul, t), new ge(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new ce(de(t >= 240 ? t - 240 : t + 120, i, r), de(t, i, r), de(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var $l = Math.PI / 180,
      Vl = 180 / Math.PI,
      Zl = 18,
      Bl = .95047,
      Wl = 1,
      Jl = 1.08883,
      Gl = 4 / 29,
      Kl = 6 / 29,
      Ql = 3 * Kl * Kl,
      tc = Kl * Kl * Kl;Sl(we, ve, re(ie, { brighter: function brighter(t) {
      return new we(this.l + Zl * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new we(this.l - Zl * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Wl * _e(t), n = Bl * _e(n), e = Jl * _e(e), new ce(be(3.2404542 * n - 1.5371385 * t - .4985314 * e), be(-.969266 * n + 1.8760108 * t + .041556 * e), be(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Sl(ke, Ne, re(ie, { brighter: function brighter(t) {
      return new ke(this.h, this.c, this.l + Zl * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new ke(this.h, this.c, this.l - Zl * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return ye(this).rgb();
    } }));var nc = -.14861,
      ec = 1.78277,
      rc = -.29227,
      ic = -.90649,
      oc = 1.97294,
      uc = oc * ic,
      ac = oc * ec,
      sc = ec * rc - ic * nc;Sl(Ce, Te, re(ie, { brighter: function brighter(t) {
      return t = null == t ? ql : Math.pow(ql, t), new Ce(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? Ul : Math.pow(Ul, t), new Ce(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * $l,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new ce(255 * (n + e * (nc * r + ec * i)), 255 * (n + e * (rc * r + ic * i)), 255 * (n + e * (oc * r)), this.opacity);
    } }));var lc,
      cc,
      fc,
      hc,
      pc = function pc(t) {
    return function () {
      return t;
    };
  },
      gc = function t(n) {
    function e(t, n) {
      var e = r((t = le(t)).r, (n = le(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = De(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = qe(n);return e.gamma = t, e;
  }(1),
      dc = function dc(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      yc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      vc = new RegExp(yc.source, "g"),
      wc = function wc(t, n) {
    var e,
        r,
        i,
        o = yc.lastIndex = vc.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = yc.exec(t)) && (r = vc.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: dc(e, r) })), o = vc.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? Ye(s[0].x) : Pe(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      mc = 180 / Math.PI,
      _c = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      bc = function bc(t, n, e, r, i, o) {
    var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * mc, skewX: Math.atan(s) * mc, scaleX: u, scaleY: a };
  },
      xc = Ie(Fe, "px, ", "px)", "deg)"),
      Mc = Ie(Oe, ", ", ")", ")");je(Ue);var Nc = (je(De), function (t, n) {
    var e = this._id;if (t += "", arguments.length < 2) {
      for (var r, i = ne(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
        if ((r = i[o]).name === t) return r.value;
      }return null;
    }return this.each((null == n ? Xe : He)(e, t, n));
  }),
      kc = function kc(t, n) {
    var e;return ("number" == typeof n ? dc : n instanceof oe ? gc : (e = oe(n)) ? (n = e, gc) : wc)(t, n);
  },
      Ac = function Ac(t, n) {
    var e = su(t),
        r = "transform" === e ? Mc : kc;return this.attrTween(t, "function" == typeof n ? (e.local ? Be : Ze)(e, r, ze(this, "attr." + t, n)) : null == n ? (e.local ? Re : Le)(e) : (e.local ? Ve : $e)(e, r, n));
  },
      Tc = function Tc(t, n) {
    var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = su(t);return this.tween(e, (r.local ? We : Je)(r, n));
  },
      Cc = function Cc(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? Ge : Ke)(n, t)) : ne(this.node(), n).delay;
  },
      Ec = function Ec(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? Qe : tr)(n, t)) : ne(this.node(), n).duration;
  },
      Sc = function Sc(t) {
    var n = this._id;return arguments.length ? this.each(nr(n, t)) : ne(this.node(), n).ease;
  },
      Uc = function Uc(t) {
    "function" != typeof t && (t = pu(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new hr(r, this._parents, this._name, this._id);
  },
      qc = function qc(t) {
    if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], f = l.length, h = u[a] = new Array(f), p = 0; p < f; ++p) {
        (s = l[p] || c[p]) && (h[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new hr(u, this._parents, this._name, this._id);
  },
      Dc = function Dc(t, n) {
    var e = this._id;return arguments.length < 2 ? ne(this.node(), e).on.on(t) : this.each(rr(e, t, n));
  },
      Pc = function Pc() {
    return this.on("end.remove", ir(this._id));
  },
      Yc = function Yc(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = _u(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
      for (var a, s, l = r[u], c = l.length, f = o[u] = new Array(c), h = 0; h < c; ++h) {
        (a = l[h]) && (s = t.call(a, a.__data__, h, l)) && ("__data__" in a && (s.__data__ = a.__data__), f[h] = s, Tl(f[h], n, e, h, f, ne(a, e)));
      }
    }return new hr(o, this._parents, n, e);
  },
      Fc = function Fc(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = xu(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
      for (var s, l = r[a], c = l.length, f = 0; f < c; ++f) {
        if (s = l[f]) {
          for (var h, p = t.call(s, s.__data__, f, l), g = ne(s, e), d = 0, y = p.length; d < y; ++d) {
            (h = p[d]) && Tl(h, n, e, d, p, g);
          }o.push(p), u.push(s);
        }
      }
    }return new hr(o, u, n, e);
  },
      Oc = W.prototype.constructor,
      Ic = function Ic() {
    return new Oc(this._groups, this._parents);
  },
      jc = function jc(t, n, e) {
    var r = "transform" == (t += "") ? xc : kc;return null == n ? this.styleTween(t, or(t, r)).on("end.style." + t, ur(t)) : this.styleTween(t, "function" == typeof n ? sr(t, r, ze(this, "style." + t, n)) : ar(t, r, n), e);
  },
      Xc = function Xc(t, n, e) {
    var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, lr(t, n, null == e ? "" : e));
  },
      Hc = function Hc(t) {
    return this.tween("text", "function" == typeof t ? fr(ze(this, "text", t)) : cr(null == t ? "" : t + ""));
  },
      zc = function zc() {
    for (var t = this._name, n = this._id, e = gr(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        if (u = a[l]) {
          var c = ne(u, n);Tl(u, t, e, l, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
      }
    }return new hr(r, this._parents, t, e);
  },
      Lc = 0,
      Rc = W.prototype;hr.prototype = pr.prototype = { constructor: hr, select: Yc, selectAll: Fc, filter: Uc, merge: qc, selection: Ic, transition: zc, call: Rc.call, nodes: Rc.nodes, node: Rc.node, size: Rc.size, empty: Rc.empty, each: Rc.each, on: Dc, attr: Ac, attrTween: Tc, style: jc, styleTween: Xc, text: Hc, remove: Pc, tween: Nc, delay: Cc, duration: Ec, ease: Sc };var $c = 3,
      Vc = (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }($c), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }($c), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }($c), 1.70158),
      Zc = (function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(Vc), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(Vc), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(Vc), 2 * Math.PI),
      Bc = 1,
      Wc = .3,
      Jc = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zc);return r.amplitude = function (n) {
      return t(n, e * Zc);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Bc, Wc), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zc);return r.amplitude = function (n) {
      return t(n, e * Zc);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Bc, Wc), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zc);return r.amplitude = function (n) {
      return t(n, e * Zc);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(Bc, Wc), { time: null, delay: 0, duration: 250, ease: dr }),
      Gc = function Gc(t) {
    var n, e;t instanceof hr ? (n = t._id, t = t._name) : (n = gr(), (e = Jc).time = Rn(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && Tl(u, t, n, l, a, e || yr(u, n));
      }
    }return new hr(r, this._parents, t, n);
  };W.prototype.interrupt = El, W.prototype.transition = Gc;var Kc = { value: function value() {} };wr.prototype = vr.prototype = { constructor: wr, on: function on(t, n) {
      var e,
          r = this._,
          i = mr(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = br(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = br(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = _r(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new wr(t);
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
    } };var Qc = function Qc(t, n) {
    function e(t) {
      var n,
          e = l.status;if (!e && Mr(l) || e >= 200 && e < 300 || 304 === e) {
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
        a = vr("beforesend", "progress", "load", "error"),
        s = Fn(),
        l = new XMLHttpRequest(),
        c = null,
        f = null,
        h = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest()), "onload" in l ? l.onload = l.onerror = l.ontimeout = e : l.onreadystatechange = function (t) {
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
        return arguments.length ? (h = +t, r) : h;
      }, user: function user(t) {
        return arguments.length < 1 ? c : (c = null == t ? null : t + "", r);
      }, password: function password(t) {
        return arguments.length < 1 ? f : (f = null == t ? null : t + "", r);
      }, response: function response(t) {
        return o = t, r;
      }, get: function get(t, n) {
        return r.send("GET", t, n);
      }, post: function post(t, n) {
        return r.send("POST", t, n);
      }, send: function send(n, e, o) {
        return l.open(n, t, !0, c, f), null == i || s.has("accept") || s.set("accept", i + ",*/*"), l.setRequestHeader && s.each(function (t, n) {
          l.setRequestHeader(n, t);
        }), null != i && l.overrideMimeType && l.overrideMimeType(i), null != u && (l.responseType = u), h > 0 && (l.timeout = h), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = xr(o)), null != o && r.on("error", o).on("load", function (t) {
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
      tf = function tf(t, n) {
    return function (e, r) {
      var i = Qc(e).mimeType(t).response(n);if (null != r) {
        if ("function" != typeof r) throw new Error("invalid callback: " + r);return i.get(r);
      }return i;
    };
  };tf("text/html", function (t) {
    return document.createRange().createContextualFragment(t.responseText);
  }), tf("application/json", function (t) {
    return JSON.parse(t.responseText);
  }), tf("text/plain", function (t) {
    return t.responseText;
  }), tf("application/xml", function (t) {
    var n = t.responseXML;if (!n) throw new Error("parse error");return n;
  });var nf = function nf(t) {
    function n(t, n) {
      var r,
          i,
          o = e(t, function (t, e) {
        return r ? r(t, e - 1) : (i = t, void (r = n ? kr(t, n) : Nr(t)));
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
      }for (var r, i, o = {}, u = {}, a = [], l = t.length, c = 0, f = 0; (r = e()) !== u;) {
        for (var h = []; r !== o && r !== u;) {
          h.push(r), r = e();
        }n && null == (h = n(h, f++)) || a.push(h);
      }return a;
    }function r(n, e) {
      return null == e && (e = Ar(n)), [e.map(u).join(t)].concat(n.map(function (n) {
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
      ef = nf(","),
      rf = ef.parse,
      of = nf("\t"),
      uf = of.parse,
      af = function af(t, n) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var o = Qc(e).mimeType(t);return o.row = function (t) {
        return arguments.length ? o.response(Tr(n, r = t)) : r;
      }, o.row(r), i ? o.get(i) : o;
    };
  },
      sf = af("text/csv", rf);af("text/tab-separated-values", uf);var lf = function lf(t, n) {
    function e() {
      var e,
          i,
          o = r.length,
          u = 0,
          a = 0;for (e = 0; e < o; ++e) {
        i = r[e], u += i.x, a += i.y;
      }for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e) {
        i = r[e], i.x -= u, i.y -= a;
      }
    }var r;return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
      r = t;
    }, e.x = function (n) {
      return arguments.length ? (t = +n, e) : t;
    }, e.y = function (t) {
      return arguments.length ? (n = +t, e) : n;
    }, e;
  },
      cf = function cf(t) {
    return function () {
      return t;
    };
  },
      ff = function ff() {
    return 1e-6 * (Math.random() - .5);
  },
      hf = function hf(t) {
    var n = +this._x.call(null, t),
        e = +this._y.call(null, t);return Cr(this.cover(n, e), n, e, t);
  },
      pf = function pf(t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      if (!(e > t || t > i || r > n || n > o)) return this;var u,
          a,
          s = i - e,
          l = this._root;switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {case 0:
          do {
            u = new Array(4), u[a] = l, l = u;
          } while ((s *= 2, i = e + s, o = r + s, t > i || n > o));break;case 1:
          do {
            u = new Array(4), u[a] = l, l = u;
          } while ((s *= 2, e = i - s, o = r + s, e > t || n > o));break;case 2:
          do {
            u = new Array(4), u[a] = l, l = u;
          } while ((s *= 2, i = e + s, r = o - s, t > i || r > n));break;case 3:
          do {
            u = new Array(4), u[a] = l, l = u;
          } while ((s *= 2, e = i - s, r = o - s, e > t || r > n));}this._root && this._root.length && (this._root = l);
    }return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  },
      gf = function gf() {
    var t = [];return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data);
      } while (n = n.next);
    }), t;
  },
      df = function df(t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  },
      yf = function yf(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  },
      vf = function vf(t, n, e) {
    var r,
        i,
        o,
        u,
        a,
        s,
        l,
        c = this._x0,
        f = this._y0,
        h = this._x1,
        p = this._y1,
        g = [],
        d = this._root;for (d && g.push(new yf(d, c, f, h, p)), null == e ? e = 1 / 0 : (c = t - e, f = n - e, h = t + e, p = n + e, e *= e); s = g.pop();) {
      if (!(!(d = s.node) || (i = s.x0) > h || (o = s.y0) > p || (u = s.x1) < c || (a = s.y1) < f)) if (d.length) {
        var y = (i + u) / 2,
            v = (o + a) / 2;g.push(new yf(d[3], y, v, u, a), new yf(d[2], i, v, y, a), new yf(d[1], y, o, u, v), new yf(d[0], i, o, y, v)), (l = (n >= v) << 1 | t >= y) && (s = g[g.length - 1], g[g.length - 1] = g[g.length - 1 - l], g[g.length - 1 - l] = s);
      } else {
        var w = t - +this._x.call(null, d.data),
            m = n - +this._y.call(null, d.data),
            _ = w * w + m * m;if (_ < e) {
          var b = Math.sqrt(e = _);c = t - b, f = n - b, h = t + b, p = n + b, r = d.data;
        }
      }
    }return r;
  },
      wf = function wf(t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;var n,
        e,
        r,
        i,
        o,
        u,
        a,
        s,
        l,
        c,
        f,
        h,
        p = this._root,
        g = this._x0,
        d = this._y0,
        y = this._x1,
        v = this._y1;if (!p) return this;if (p.length) for (;;) {
      if ((l = o >= (a = (g + y) / 2)) ? g = a : y = a, (c = u >= (s = (d + v) / 2)) ? d = s : v = s, n = p, !(p = p[f = c << 1 | l])) return this;if (!p.length) break;(n[f + 1 & 3] || n[f + 2 & 3] || n[f + 3 & 3]) && (e = n, h = f);
    }for (; p.data !== t;) {
      if (r = p, !(p = p.next)) return this;
    }return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[f] = i : delete n[f], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this);
  },
      mf = function mf() {
    return this._root;
  },
      _f = function _f() {
    var t = 0;return this.visit(function (n) {
      if (!n.length) do {
        ++t;
      } while (n = n.next);
    }), t;
  },
      bf = function bf(t) {
    var n,
        e,
        r,
        i,
        o,
        u,
        a = [],
        s = this._root;for (s && a.push(new yf(s, this._x0, this._y0, this._x1, this._y1)); n = a.pop();) {
      if (!t(s = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && s.length) {
        var l = (r + o) / 2,
            c = (i + u) / 2;(e = s[3]) && a.push(new yf(e, l, c, o, u)), (e = s[2]) && a.push(new yf(e, r, c, l, u)), (e = s[1]) && a.push(new yf(e, l, i, o, c)), (e = s[0]) && a.push(new yf(e, r, i, l, c));
      }
    }return this;
  },
      xf = function xf(t) {
    var n,
        e = [],
        r = [];for (this._root && e.push(new yf(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;if (i.length) {
        var o,
            u = n.x0,
            a = n.y0,
            s = n.x1,
            l = n.y1,
            c = (u + s) / 2,
            f = (a + l) / 2;(o = i[0]) && e.push(new yf(o, u, a, c, f)), (o = i[1]) && e.push(new yf(o, c, a, s, f)), (o = i[2]) && e.push(new yf(o, u, f, c, l)), (o = i[3]) && e.push(new yf(o, c, f, s, l));
      }r.push(n);
    }for (; n = r.pop();) {
      t(n.node, n.x0, n.y0, n.x1, n.y1);
    }return this;
  },
      Mf = function Mf(t) {
    return arguments.length ? (this._x = t, this) : this._x;
  },
      Nf = function Nf(t) {
    return arguments.length ? (this._y = t, this) : this._y;
  },
      kf = Dr.prototype = Pr.prototype;kf.copy = function () {
    var t,
        n,
        e = new Pr(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;if (!r) return e;if (!r.length) return e._root = Yr(r), e;for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = Yr(n));
      }
    }return e;
  }, kf.add = hf, kf.addAll = Er, kf.cover = pf, kf.data = gf, kf.extent = df, kf.find = vf, kf.remove = wf, kf.removeAll = Sr, kf.root = mf, kf.size = _f, kf.visit = bf, kf.visitAfter = xf, kf.x = Mf, kf.y = Nf;var Af = function Af(t) {
    function n() {
      function t(t, n, e, r, i) {
        var o = t.data,
            a = t.r,
            p = f + a;{
          if (!o) return n > l + p || r < l - p || e > c + p || i < c - p;if (o.index > s.index) {
            var g = l - o.x - o.vx,
                d = c - o.y - o.vy,
                y = g * g + d * d;y < p * p && (0 === g && (g = ff(), y += g * g), 0 === d && (d = ff(), y += d * d), y = (p - (y = Math.sqrt(y))) / y * u, s.vx += (g *= y) * (p = (a *= a) / (h + a)), s.vy += (d *= y) * p, o.vx -= g * (p = 1 - p), o.vy -= d * p);
          }
        }
      }for (var n, r, s, l, c, f, h, p = i.length, g = 0; g < a; ++g) {
        for (r = Dr(i, Fr, Or).visitAfter(e), n = 0; n < p; ++n) {
          s = i[n], f = o[s.index], h = f * f, l = s.x + s.vx, c = s.y + s.vy, r.visit(t);
        }
      }
    }function e(t) {
      if (t.data) return t.r = o[t.data.index];for (var n = t.r = 0; n < 4; ++n) {
        t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
    }function r() {
      if (i) {
        var n,
            e,
            r = i.length;for (o = new Array(r), n = 0; n < r; ++n) {
          e = i[n], o[e.index] = +t(e, n, i);
        }
      }
    }var i,
        o,
        u = 1,
        a = 1;return "function" != typeof t && (t = cf(null == t ? 1 : +t)), n.initialize = function (t) {
      i = t, r();
    }, n.iterations = function (t) {
      return arguments.length ? (a = +t, n) : a;
    }, n.strength = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.radius = function (e) {
      return arguments.length ? (t = "function" == typeof e ? e : cf(+e), r(), n) : t;
    }, n;
  },
      Tf = function Tf(t) {
    function n(t) {
      return 1 / Math.min(l[t.source.index], l[t.target.index]);
    }function e(n) {
      for (var e = 0, r = t.length; e < g; ++e) {
        for (var i, o, s, l, f, h, p, d = 0; d < r; ++d) {
          i = t[d], o = i.source, s = i.target, l = s.x + s.vx - o.x - o.vx || ff(), f = s.y + s.vy - o.y - o.vy || ff(), h = Math.sqrt(l * l + f * f), h = (h - a[d]) / h * n * u[d], l *= h, f *= h, s.vx -= l * (p = c[d]), s.vy -= f * p, o.vx += l * (p = 1 - p), o.vy += f * p;
        }
      }
    }function r() {
      if (s) {
        var n,
            e,
            r = s.length,
            h = t.length,
            p = Fn(s, f);for (n = 0, l = new Array(r); n < h; ++n) {
          e = t[n], e.index = n, "object" != _typeof(e.source) && (e.source = jr(p, e.source)), "object" != _typeof(e.target) && (e.target = jr(p, e.target)), l[e.source.index] = (l[e.source.index] || 0) + 1, l[e.target.index] = (l[e.target.index] || 0) + 1;
        }for (n = 0, c = new Array(h); n < h; ++n) {
          e = t[n], c[n] = l[e.source.index] / (l[e.source.index] + l[e.target.index]);
        }u = new Array(h), i(), a = new Array(h), o();
      }
    }function i() {
      if (s) for (var n = 0, e = t.length; n < e; ++n) {
        u[n] = +h(t[n], n, t);
      }
    }function o() {
      if (s) for (var n = 0, e = t.length; n < e; ++n) {
        a[n] = +p(t[n], n, t);
      }
    }var u,
        a,
        s,
        l,
        c,
        f = Ir,
        h = n,
        p = cf(30),
        g = 1;return null == t && (t = []), e.initialize = function (t) {
      s = t, r();
    }, e.links = function (n) {
      return arguments.length ? (t = n, r(), e) : t;
    }, e.id = function (t) {
      return arguments.length ? (f = t, e) : f;
    }, e.iterations = function (t) {
      return arguments.length ? (g = +t, e) : g;
    }, e.strength = function (t) {
      return arguments.length ? (h = "function" == typeof t ? t : cf(+t), i(), e) : h;
    }, e.distance = function (t) {
      return arguments.length ? (p = "function" == typeof t ? t : cf(+t), o(), e) : p;
    }, e;
  },
      Cf = { value: function value() {} };Hr.prototype = Xr.prototype = { constructor: Hr, on: function on(t, n) {
      var e,
          r = this._,
          i = zr(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = Rr(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = Rr(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = Lr(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new Hr(t);
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
    } };var Ef,
      Sf,
      Uf = 0,
      qf = 0,
      Df = 0,
      Pf = 1e3,
      Yf = 0,
      Ff = 0,
      Of = 0,
      If = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      jf = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };Zr.prototype = Br.prototype = { constructor: Zr, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? $r() : +e) + (null == n ? 0 : +n), this._next || Sf === this || (Sf ? Sf._next = this : Ef = this, Sf = this), this._call = t, this._time = e, Qr();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Qr());
    } };var Xf = 10,
      Hf = Math.PI * (3 - Math.sqrt(5)),
      zf = function zf(t) {
    function n() {
      e(), p.call("tick", o), u < a && (h.stop(), p.call("end", o));
    }function e() {
      var n,
          e,
          r = t.length;for (u += (l - u) * s, f.each(function (t) {
        t(u);
      }), n = 0; n < r; ++n) {
        e = t[n], null == e.fx ? e.x += e.vx *= c : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= c : (e.y = e.fy, e.vy = 0);
      }
    }function r() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
          var i = Xf * Math.sqrt(e),
              o = e * Hf;n.x = i * Math.cos(o), n.y = i * Math.sin(o);
        }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }function i(n) {
      return n.initialize && n.initialize(t), n;
    }var o,
        u = 1,
        a = .001,
        s = 1 - Math.pow(a, 1 / 300),
        l = 0,
        c = .6,
        f = Fn(),
        h = Br(n),
        p = Xr("tick", "end");return null == t && (t = []), r(), o = { tick: e, restart: function restart() {
        return h.restart(n), o;
      }, stop: function stop() {
        return h.stop(), o;
      }, nodes: function nodes(n) {
        return arguments.length ? (t = n, r(), f.each(i), o) : t;
      }, alpha: function alpha(t) {
        return arguments.length ? (u = +t, o) : u;
      }, alphaMin: function alphaMin(t) {
        return arguments.length ? (a = +t, o) : a;
      }, alphaDecay: function alphaDecay(t) {
        return arguments.length ? (s = +t, o) : +s;
      }, alphaTarget: function alphaTarget(t) {
        return arguments.length ? (l = +t, o) : l;
      }, velocityDecay: function velocityDecay(t) {
        return arguments.length ? (c = 1 - t, o) : 1 - c;
      }, force: function force(t, n) {
        return arguments.length > 1 ? (null == n ? f.remove(t) : f.set(t, i(n)), o) : f.get(t);
      }, find: function find(n, e, r) {
        var i,
            o,
            u,
            a,
            s,
            l = 0,
            c = t.length;for (null == r ? r = 1 / 0 : r *= r, l = 0; l < c; ++l) {
          a = t[l], i = n - a.x, o = e - a.y, u = i * i + o * o, u < r && (s = a, r = u);
        }return s;
      }, on: function on(t, n) {
        return arguments.length > 1 ? (p.on(t, n), o) : p.on(t);
      } };
  },
      Lf = function Lf() {
    function t(t) {
      var n,
          a = i.length,
          s = Dr(i, ti, ni).visitAfter(e);for (u = t, n = 0; n < a; ++n) {
        o = i[n], s.visit(r);
      }
    }function n() {
      if (i) {
        var t,
            n,
            e = i.length;for (a = new Array(e), t = 0; t < e; ++t) {
          n = i[t], a[n.index] = +s(n, t, i);
        }
      }
    }function e(t) {
      var n,
          e,
          r,
          i,
          o,
          u = 0;if (t.length) {
        for (r = i = o = 0; o < 4; ++o) {
          (n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
        }t.x = r / u, t.y = i / u;
      } else {
        n = t, n.x = n.data.x, n.y = n.data.y;do {
          u += a[n.data.index];
        } while (n = n.next);
      }t.value = u;
    }function r(t, n, e, r) {
      if (!t.value) return !0;var i = t.x - o.x,
          s = t.y - o.y,
          h = r - n,
          p = i * i + s * s;if (h * h / f < p) return p < c && (0 === i && (i = ff(), p += i * i), 0 === s && (s = ff(), p += s * s), p < l && (p = Math.sqrt(l * p)), o.vx += i * t.value * u / p, o.vy += s * t.value * u / p), !0;if (!(t.length || p >= c)) {
        (t.data !== o || t.next) && (0 === i && (i = ff(), p += i * i), 0 === s && (s = ff(), p += s * s), p < l && (p = Math.sqrt(l * p)));do {
          t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += s * h);
        } while (t = t.next);
      }
    }var i,
        o,
        u,
        a,
        s = cf(-30),
        l = 1,
        c = 1 / 0,
        f = .81;return t.initialize = function (t) {
      i = t, n();
    }, t.strength = function (e) {
      return arguments.length ? (s = "function" == typeof e ? e : cf(+e), n(), t) : s;
    }, t.distanceMin = function (n) {
      return arguments.length ? (l = n * n, t) : Math.sqrt(l);
    }, t.distanceMax = function (n) {
      return arguments.length ? (c = n * n, t) : Math.sqrt(c);
    }, t.theta = function (n) {
      return arguments.length ? (f = n * n, t) : Math.sqrt(f);
    }, t;
  },
      Rf = function Rf(t) {
    function n(t) {
      for (var n, e = 0, u = r.length; e < u; ++e) {
        n = r[e], n.vx += (o[e] - n.x) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        u = cf(.1);return "function" != typeof t && (t = cf(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : cf(+t), e(), n) : u;
    }, n.x = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : cf(+r), e(), n) : t;
    }, n;
  },
      $f = function $f(t) {
    function n(t) {
      for (var n, e = 0, u = r.length; e < u; ++e) {
        n = r[e], n.vy += (o[e] - n.y) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        u = cf(.1);return "function" != typeof t && (t = cf(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : cf(+t), e(), n) : u;
    }, n.y = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : cf(+r), e(), n) : t;
    }, n;
  },
      Vf = function Vf() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  },
      Zf = function Zf(t) {
    var n = t.document.documentElement,
        e = na(t).on("dragstart.drag", Vf, !0);"onselectstart" in n ? e.on("selectstart.drag", Vf, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  },
      Bf = function Bf(t) {
    return function () {
      return t;
    };
  };ii.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
  };var Wf = function Wf() {
    function n(t) {
      t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function e() {
      if (!f && h.apply(this, arguments)) {
        var n = l("mouse", p.apply(this, arguments), mu, this, arguments);n && (na(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), Zf(t.event.view), ei(), c = !1, n("start"));
      }
    }function r() {
      Vf(), c = !0, d.mouse("drag");
    }function i() {
      na(t.event.view).on("mousemove.drag mouseup.drag", null), ri(t.event.view, c), Vf(), d.mouse("end");
    }function o() {
      if (h.apply(this, arguments)) {
        var n,
            e,
            r = t.event.changedTouches,
            i = p.apply(this, arguments),
            o = r.length;for (n = 0; n < o; ++n) {
          (e = l(r[n].identifier, i, ra, this, arguments)) && (ei(), e("start"));
        }
      }
    }function u() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (n = 0; n < i; ++n) {
        (e = d[r[n].identifier]) && (Vf(), e("drag"));
      }
    }function a() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (f && clearTimeout(f), f = setTimeout(function () {
        f = null;
      }, 500), n = 0; n < i; ++n) {
        (e = d[r[n].identifier]) && (ei(), e("end"));
      }
    }function l(e, r, i, o, u) {
      var a,
          l,
          c,
          f = i(r, e),
          h = y.copy();if (s(new ii(n, "beforestart", a, e, v, f[0], f[1], 0, 0, h), function () {
        return null != (t.event.subject = a = g.apply(o, u)) && (l = a.x - f[0] || 0, c = a.y - f[1] || 0, !0);
      })) return function t(p) {
        var g,
            y = f;switch (p) {case "start":
            d[e] = t, g = v++;break;case "end":
            delete d[e], --v;case "drag":
            f = i(r, e), g = v;}s(new ii(n, p, a, e, g, f[0] + l, f[1] + c, f[0] - y[0], f[1] - y[1], h), h.apply, h, [p, o, u]);
      };
    }var c,
        f,
        h = oi,
        p = ui,
        g = ai,
        d = {},
        y = Xr("start", "drag", "end"),
        v = 0;return n.filter = function (t) {
      return arguments.length ? (h = "function" == typeof t ? t : Bf(!!t), n) : h;
    }, n.container = function (t) {
      return arguments.length ? (p = "function" == typeof t ? t : Bf(t), n) : p;
    }, n.subject = function (t) {
      return arguments.length ? (g = "function" == typeof t ? t : Bf(t), n) : g;
    }, n.on = function () {
      var t = y.on.apply(y, arguments);return t === y ? n : t;
    }, n;
  },
      Jf = function Jf(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  },
      Gf = function Gf(t) {
    return 1 === t.length && (t = si(t)), { left: function left(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) < 0 ? r = o + 1 : i = o;
        }return r;
      }, right: function right(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) > 0 ? i = o : r = o + 1;
        }return r;
      } };
  },
      Kf = Gf(Jf),
      Qf = Kf.right,
      th = function th(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) {
      o[r] = t + r * e;
    }return o;
  },
      nh = Math.sqrt(50),
      eh = Math.sqrt(10),
      rh = Math.sqrt(2),
      ih = function ih(t, n, e) {
    var r = li(t, n, e);return th(Math.ceil(t / r) * r, Math.floor(n / r) * r + r / 2, r);
  },
      oh = Array.prototype,
      uh = oh.map,
      ah = oh.slice,
      sh = function sh(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      lh = .7,
      ch = 1 / lh,
      fh = "\\s*([+-]?\\d+)\\s*",
      hh = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      ph = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      gh = /^#([0-9a-f]{3})$/,
      dh = /^#([0-9a-f]{6})$/,
      yh = new RegExp("^rgb\\(" + [fh, fh, fh] + "\\)$"),
      vh = new RegExp("^rgb\\(" + [ph, ph, ph] + "\\)$"),
      wh = new RegExp("^rgba\\(" + [fh, fh, fh, hh] + "\\)$"),
      mh = new RegExp("^rgba\\(" + [ph, ph, ph, hh] + "\\)$"),
      _h = new RegExp("^hsl\\(" + [hh, ph, ph] + "\\)$"),
      bh = new RegExp("^hsla\\(" + [hh, ph, ph, hh] + "\\)$"),
      xh = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };sh(fi, hi, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), sh(vi, yi, ci(fi, { brighter: function brighter(t) {
      return t = null == t ? ch : Math.pow(ch, t), new vi(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? lh : Math.pow(lh, t), new vi(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), sh(bi, _i, ci(fi, { brighter: function brighter(t) {
      return t = null == t ? ch : Math.pow(ch, t), new bi(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? lh : Math.pow(lh, t), new bi(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new vi(xi(t >= 240 ? t - 240 : t + 120, i, r), xi(t, i, r), xi(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Mh = Math.PI / 180,
      Nh = 180 / Math.PI,
      kh = 18,
      Ah = .95047,
      Th = 1,
      Ch = 1.08883,
      Eh = 4 / 29,
      Sh = 6 / 29,
      Uh = 3 * Sh * Sh,
      qh = Sh * Sh * Sh;sh(ki, Ni, ci(fi, { brighter: function brighter(t) {
      return new ki(this.l + kh * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new ki(this.l - kh * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Th * Ti(t), n = Ah * Ti(n), e = Ch * Ti(e), new vi(Ci(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ci(-.969266 * n + 1.8760108 * t + .041556 * e), Ci(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), sh(qi, Ui, ci(fi, { brighter: function brighter(t) {
      return new qi(this.h, this.c, this.l + kh * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new qi(this.h, this.c, this.l - kh * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return Mi(this).rgb();
    } }));var Dh = -.14861,
      Ph = 1.78277,
      Yh = -.29227,
      Fh = -.90649,
      Oh = 1.97294,
      Ih = Oh * Fh,
      jh = Oh * Ph,
      Xh = Ph * Yh - Fh * Dh;sh(Yi, Pi, ci(fi, { brighter: function brighter(t) {
      return t = null == t ? ch : Math.pow(ch, t), new Yi(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? lh : Math.pow(lh, t), new Yi(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Mh,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new vi(255 * (n + e * (Dh * r + Ph * i)), 255 * (n + e * (Yh * r + Fh * i)), 255 * (n + e * (Oh * r)), this.opacity);
    } }));var Hh = function Hh(t) {
    return function () {
      return t;
    };
  },
      zh = function t(n) {
    function e(t, n) {
      var e = r((t = yi(t)).r, (n = yi(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Xi(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = ji(n);return e.gamma = t, e;
  }(1),
      Lh = function Lh(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(r),
        u = new Array(r);for (e = 0; e < i; ++e) {
      o[e] = Jh(t[e], n[e]);
    }for (; e < r; ++e) {
      u[e] = n[e];
    }return function (t) {
      for (e = 0; e < i; ++e) {
        u[e] = o[e](t);
      }return u;
    };
  },
      Rh = function Rh(t, n) {
    var e = new Date();return t = +t, n -= t, function (r) {
      return e.setTime(t + n * r), e;
    };
  },
      $h = function $h(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      Vh = function Vh(t, n) {
    var e,
        r = {},
        i = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {});for (e in n) {
      e in t ? r[e] = Jh(t[e], n[e]) : i[e] = n[e];
    }return function (t) {
      for (e in r) {
        i[e] = r[e](t);
      }return i;
    };
  },
      Zh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Bh = new RegExp(Zh.source, "g"),
      Wh = function Wh(t, n) {
    var e,
        r,
        i,
        o = Zh.lastIndex = Bh.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = Zh.exec(t)) && (r = Bh.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: $h(e, r) })), o = Bh.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? zi(s[0].x) : Hi(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      Jh = function Jh(t, n) {
    var e,
        r = typeof n === "undefined" ? "undefined" : _typeof(n);return null == n || "boolean" === r ? Hh(n) : ("number" === r ? $h : "string" === r ? (e = hi(n)) ? (n = e, zh) : Wh : n instanceof hi ? zh : n instanceof Date ? Rh : Array.isArray(n) ? Lh : isNaN(n) ? Vh : $h)(t, n);
  },
      Gh = function Gh(t, n) {
    return t = +t, n -= t, function (e) {
      return Math.round(t + n * e);
    };
  };Li(Ii);var Kh,
      Qh = Li(Xi),
      tp = function tp(t) {
    return function () {
      return t;
    };
  },
      np = function np(t) {
    return +t;
  },
      ep = [0, 1],
      rp = function rp(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
        r = t.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  },
      ip = function ip(t) {
    return t = rp(Math.abs(t)), t ? t[1] : NaN;
  },
      op = function op(t, n) {
    return function (e, r) {
      for (var i = e.length, o = [], u = 0, a = t[0], s = 0; i > 0 && a > 0 && (s + a + 1 > r && (a = Math.max(1, r - s)), o.push(e.substring(i -= a, i + a)), !((s += a + 1) > r));) {
        a = t[u = (u + 1) % t.length];
      }return o.reverse().join(n);
    };
  },
      up = function up(t) {
    return function (n) {
      return n.replace(/[0-9]/g, function (n) {
        return t[+n];
      });
    };
  },
      ap = function ap(t, n) {
    t = t.toPrecision(n);t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i) {
      switch (t[i]) {case ".":
          o = e = i;break;case "0":
          0 === o && (o = i), e = i;break;case "e":
          break t;default:
          o > 0 && (o = 0);}
    }return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
  },
      sp = function sp(t, n) {
    var e = rp(t, n);if (!e) return t + "";var r = e[0],
        i = e[1],
        o = i - (Kh = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        u = r.length;return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + rp(t, Math.max(0, n + o - 1))[0];
  },
      lp = function lp(t, n) {
    var e = rp(t, n);if (!e) return t + "";var r = e[0],
        i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  },
      cp = { "": ap, "%": function _(t, n) {
      return (100 * t).toFixed(n);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, n) {
      return t.toExponential(n);
    }, f: function f(t, n) {
      return t.toFixed(n);
    }, g: function g(t, n) {
      return t.toPrecision(n);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, n) {
      return lp(100 * t, n);
    }, r: lp, s: sp, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      fp = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Gi.prototype = Ki.prototype, Ki.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var hp,
      pp,
      gp,
      dp = function dp(t) {
    return t;
  },
      yp = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
      vp = function vp(t) {
    function n(t) {
      function n(t) {
        var n,
            i,
            a,
            c = y,
            _ = v;if ("c" === d) _ = w(t) + _, t = "";else {
          t = +t;var b = t < 0;if (t = w(Math.abs(t), g), b && 0 === +t && (b = !1), c = (b ? "(" === l ? l : "-" : "-" === l || "(" === l ? "" : l) + c, _ = _ + ("s" === d ? yp[8 + Kh / 3] : "") + (b && "(" === l ? ")" : ""), m) for (n = -1, i = t.length; ++n < i;) {
            if (a = t.charCodeAt(n), 48 > a || a > 57) {
              _ = (46 === a ? o + t.slice(n + 1) : t.slice(n)) + _, t = t.slice(0, n);break;
            }
          }
        }p && !f && (t = r(t, 1 / 0));var x = c.length + t.length + _.length,
            M = x < h ? new Array(h - x + 1).join(e) : "";switch (p && f && (t = r(M + t, M.length ? h - _.length : 1 / 0), M = ""), s) {case "<":
            t = c + t + _ + M;break;case "=":
            t = c + M + t + _;break;case "^":
            t = M.slice(0, x = M.length >> 1) + c + t + _ + M.slice(x);break;default:
            t = M + c + t + _;}return u(t);
      }t = Gi(t);var e = t.fill,
          s = t.align,
          l = t.sign,
          c = t.symbol,
          f = t.zero,
          h = t.width,
          p = t.comma,
          g = t.precision,
          d = t.type,
          y = "$" === c ? i[0] : "#" === c && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "",
          v = "$" === c ? i[1] : /[%p]/.test(d) ? a : "",
          w = cp[d],
          m = !d || /[defgprs%]/.test(d);return g = null == g ? d ? 6 : 12 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), n.toString = function () {
        return t + "";
      }, n;
    }function e(t, e) {
      var r = n((t = Gi(t), t.type = "f", t)),
          i = 3 * Math.max(-8, Math.min(8, Math.floor(ip(e) / 3))),
          o = Math.pow(10, -i),
          u = yp[8 + i / 3];return function (t) {
        return r(o * t) + u;
      };
    }var r = t.grouping && t.thousands ? op(t.grouping, t.thousands) : dp,
        i = t.currency,
        o = t.decimal,
        u = t.numerals ? up(t.numerals) : dp,
        a = t.percent || "%";return { format: n, formatPrefix: e };
  };Qi({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var wp = function wp(t) {
    return Math.max(0, -ip(Math.abs(t)));
  },
      mp = function mp(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(ip(n) / 3))) - ip(Math.abs(t)));
  },
      _p = function _p(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, ip(n) - ip(t)) + 1;
  },
      bp = function bp(t, n, e) {
    var r,
        i = t[0],
        o = t[t.length - 1],
        u = li(i, o, null == n ? 10 : n);switch (e = Gi(null == e ? ",f" : e), e.type) {case "s":
        var a = Math.max(Math.abs(i), Math.abs(o));return null != e.precision || isNaN(r = mp(u, a)) || (e.precision = r), gp(e, a);case "":case "e":case "g":case "p":case "r":
        null != e.precision || isNaN(r = _p(u, Math.max(Math.abs(i), Math.abs(o)))) || (e.precision = r - ("e" === e.type));break;case "f":case "%":
        null != e.precision || isNaN(r = wp(u)) || (e.precision = r - 2 * ("%" === e.type));}return pp(e);
  },
      xp = new Date(),
      Mp = new Date(),
      Np = eo(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });Np.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? eo(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : Np : null;
  };var kp = 1e3,
      Ap = 6e4,
      Tp = 36e5,
      Cp = 864e5,
      Ep = 6048e5,
      Sp = (eo(function (t) {
    t.setTime(Math.floor(t / kp) * kp);
  }, function (t, n) {
    t.setTime(+t + n * kp);
  }, function (t, n) {
    return (n - t) / kp;
  }, function (t) {
    return t.getUTCSeconds();
  }), eo(function (t) {
    t.setTime(Math.floor(t / Ap) * Ap);
  }, function (t, n) {
    t.setTime(+t + n * Ap);
  }, function (t, n) {
    return (n - t) / Ap;
  }, function (t) {
    return t.getMinutes();
  }), eo(function (t) {
    var n = t.getTimezoneOffset() * Ap % Tp;n < 0 && (n += Tp), t.setTime(Math.floor((+t - n) / Tp) * Tp + n);
  }, function (t, n) {
    t.setTime(+t + n * Tp);
  }, function (t, n) {
    return (n - t) / Tp;
  }, function (t) {
    return t.getHours();
  }), eo(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ap) / Cp;
  }, function (t) {
    return t.getDate() - 1;
  })),
      Up = ro(0),
      qp = ro(1),
      Dp = (ro(2), ro(3), ro(4), ro(5), ro(6), eo(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), eo(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  }));Dp.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? eo(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };var Pp = (eo(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Ap);
  }, function (t, n) {
    return (n - t) / Ap;
  }, function (t) {
    return t.getUTCMinutes();
  }), eo(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Tp);
  }, function (t, n) {
    return (n - t) / Tp;
  }, function (t) {
    return t.getUTCHours();
  }), eo(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / Cp;
  }, function (t) {
    return t.getUTCDate() - 1;
  })),
      Yp = io(0),
      Fp = io(1),
      Op = (io(2), io(3), io(4), io(5), io(6), eo(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), eo(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));Op.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? eo(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };var Ip,
      jp,
      Xp,
      Hp,
      zp,
      Lp = { "-": "", _: " ", 0: "0" },
      Rp = /^\s*\d+/,
      $p = /^%/,
      Vp = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;ru({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });var Zp = "%Y-%m-%dT%H:%M:%S.%LZ",
      Bp = (Date.prototype.toISOString ? iu : Hp(Zp), +new Date("2000-01-01T00:00:00.000Z") ? ou : zp(Zp), function (t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  });Bp("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Bp("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Bp("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Bp("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Qh(Pi(300, .5, 0), Pi(-240, .5, 1));Qh(Pi(-100, .75, .35), Pi(80, 1.5, .8)), Qh(Pi(260, .75, .35), Pi(80, 1.5, .8)), Pi();t.selection = W, t.select = na, t.selectAll = ea, t.entries = il, t.values = rl, t.keys = el, t.transition = pr, t.csv = sf, t.drag = Wf, t.scaleLinear = no, t.forceCenter = lf, t.forceCollide = Af, t.forceLink = Tf, t.forceManyBody = Lf, t.forceSimulation = zf, t.forceX = Rf, t.forceY = $f, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _makeSelectMenu = __webpack_require__(12);

var _makeSelectMenu2 = _interopRequireDefault(_makeSelectMenu);

var _googleSheetsFakeDb = __webpack_require__(5);

var _googleSheetsFakeDb2 = _interopRequireDefault(_googleSheetsFakeDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INPUT_NAMES = ['Player 1 Set 1', 'Player 2 Set 1', 'Player 1 Set 2', 'Player 2 Set 2', 'Player 1 Set 3', 'Player 2 Set 3'];

function populatePlayerLists(containerSelector) {
  var container = d3.select(containerSelector);
  var data = [{
    'text': 'Choose a Player'
  }].concat(window.GLOBALS.DATA.Players.contents);
  var options = container.selectAll('li').data(data);
  options.exit().remove();
  var optionsEnter = options.enter().append('li');
  optionsEnter.append('span').attr('class', 'name');
  optionsEnter.append('span').attr('class', 'charity');
  options = options.merge(optionsEnter);

  options.attr('value', function (d) {
    return d['Player Name'];
  }).classed('selected', function (d) {
    return !d['Player Name'];
  }); // Start w/ "Choose a Player" selected
  options.select('.name').text(function (d) {
    return d['Player Name'] || d.text;
  });
  options.select('.charity').text(function (d) {
    return d['Charity'];
  });

  (0, _makeSelectMenu2.default)(container.node());
}

function populateLeaderBoard() {
  // Calculate the total bets per player
  var totalBets = {};
  window.GLOBALS.DATA.Bets.contents.forEach(function (bet) {
    if (!totalBets[bet.Player]) {
      totalBets[bet.Player] = 0;
    }
    totalBets[bet.Player] += 1;
  });

  // Calculate the total wins / losses per player
  var totalWins = {};
  var totalLosses = {};

  window.GLOBALS.DATA.Matches.contents.forEach(function (match) {
    var winner = computeWinner(match);
    var player1 = match['Player 1'];
    var player2 = match['Player 2'];
    if (totalWins[player1] === undefined) {
      totalWins[player1] = 0;
      totalLosses[player1] = 0;
    }
    if (totalWins[player2] === undefined) {
      totalWins[player2] = 0;
      totalLosses[player2] = 0;
    }
    if (winner === player1) {
      totalWins[player1] += 1;
      totalLosses[player2] += 1;
    } else {
      totalWins[player2] += 1;
      totalLosses[player1] += 1;
    }
  });

  // Get the seeds for each player
  var seeds = {};
  window.GLOBALS.DATA.Bracket.contents.forEach(function (seed) {
    seeds[seed.Player] = parseInt(seed.Seed);
  });

  // Assemble the summary stats for each player
  var leaderBoardData = window.GLOBALS.DATA.Players.contents.map(function (player) {
    return [player['Player Name'], player['Charity'], totalBets[player['Player Name']] || 0, seeds[player['Player Name']] || '', totalWins[player['Player Name']] || 0, totalLosses[player['Player Name']] || 0];
  });

  // Fill in the table
  var rows = d3.select('#leaderBoard').select('tbody').selectAll('tr').data(leaderBoardData);
  rows.exit().remove();
  var rowsEnter = rows.enter().append('tr');
  rows = rowsEnter.merge(rows);

  var cells = rows.selectAll('td').data(function (d) {
    return d;
  });
  cells.exit().remove();
  var cellsEnter = cells.enter().append('td');
  cells = cellsEnter.merge(cells);

  cells.text(function (d) {
    return d;
  });
  cells.classed('small', function (d, i) {
    return i === 1;
  }); // shrink the charity text
}

function showSpinner(show) {
  if (show) {
    (0, _jquery2.default)('#spinner').show();
  } else {
    (0, _jquery2.default)('#spinner').hide();
  }
}

function displayNotification(message) {
  var notification = (0, _jquery2.default)('#notification');
  notification.text(message);
  notification.show();
  window.setTimeout(function () {
    notification.hide(1000);
  }, 5000);
}

function handleSubmission(validationFunction, tableName, formElement) {
  showSpinner(true);
  validationFunction().then(function () {
    _googleSheetsFakeDb2.default.submitForm(tableName, formElement).then(function () {
      // Wait a few seconds to refresh the page so Google has time
      // to populate the spreadsheet
      window.setTimeout(function () {
        window.location.reload();
      }, 5000);
    });
  }).catch(function () {});
}

function constructMatchLookup() {
  var lookup = {};
  window.GLOBALS.DATA.Matches.contents.forEach(function (match, index) {
    var player1 = match['Player 1'];
    var player2 = match['Player 2'];
    if (!lookup[player1]) {
      lookup[player1] = [];
    }
    if (!lookup[player2]) {
      lookup[player2] = [];
    }
    lookup[player1].push(index);
    lookup[player2].push(index);
  });
  window.GLOBALS.MATCH_LOOKUP = lookup;
}

function getAllMatches(player1, player2) {
  if (!window.GLOBALS.MATCH_LOOKUP) {
    constructMatchLookup();
  }
  return (window.GLOBALS.MATCH_LOOKUP[player1] || []).map(function (index) {
    return window.GLOBALS.DATA.Matches.contents[index];
  }).filter(function (match) {
    return match['Player 1'] === player2 || match['Player 2'] === player2;
  });
}

function splitName(playerName) {
  // Split the name into two roughly equal-length lines
  var firstName = playerName.slice(0, playerName.length / 2);
  var lastName = playerName.slice(playerName.length / 2);
  if (firstName[firstName.length - 1] === ' ') {
    firstName = firstName.trim();
  } else if (lastName[0] === ' ') {
    lastName = lastName.trim();
  } else {
    firstName = firstName.split(' ');
    lastName = lastName.split(' ');
    var middleName = firstName.pop() + lastName.splice(0, 1);
    firstName = firstName.join(' ');
    lastName = lastName.join(' ');

    if ((firstName + middleName).length < (lastName + middleName).length) {
      firstName = firstName + ' ' + middleName;
    } else {
      lastName = middleName + ' ' + lastName;
    }
  }
  return {
    firstName: firstName,
    lastName: lastName
  };
}

function computeWinner(match) {
  var player1 = 0;
  var player2 = 0;
  INPUT_NAMES.forEach(function (n) {
    match[n] = parseInt(match[n]);
  });
  if (match['Player 1 Set 1'] > match['Player 2 Set 1']) {
    player1 += 1;
  } else if (match['Player 1 Set 1'] < match['Player 2 Set 1']) {
    player2 += 1;
  } else {
    return null;
  }
  if (match['Player 1 Set 2'] > match['Player 2 Set 2']) {
    player1 += 1;
  } else if (match['Player 1 Set 2'] < match['Player 2 Set 2']) {
    player2 += 1;
  }
  if (match['Player 1 Set 3'] > match['Player 2 Set 3']) {
    player1 += 1;
  } else if (match['Player 1 Set 3'] < match['Player 2 Set 3']) {
    player2 += 1;
  }

  if (player1 === player2) {
    return null;
  }

  return player1 > player2 ? match['Player 1'] : match['Player 2'];
}

function enterScore(player1, player2, round) {
  var modal = (0, _jquery2.default)('#scoreEntryModal');
  modal.show();
  modal.find('input').removeClass('error');

  modal.find('#player1').text(player1);
  modal.find('#player2').text(player2);
  modal.find('#roundField').text(round);

  modal.find('#cancelButton').on('click', function () {
    return modal.hide();
  });
  modal.find('#submitScoresButton').on('click', function () {
    handleSubmission(function () {
      var fakeMatch = {};
      var badData = false;
      INPUT_NAMES.forEach(function (n, i) {
        var element = modal.find('[name="' + n + '"]')[0];
        fakeMatch[n] = parseInt(element.value);
        if (i < 2 && isNaN(fakeMatch[n])) {
          (0, _jquery2.default)(element).addClass('error');
          displayNotification('You need to play at least one set! ' + 'Usually people play two out of three, but that\'s up to you.');
          badData = true;
        }
      });
      if (badData) {
        return Promise.reject();
      }
      if (computeWinner(fakeMatch) === null) {
        modal.find('input').addClass('error');
        displayNotification('Sorry, no ties allowed... keep playing!');
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    }, 'Matches', modal[0]);
  });
}

exports.default = {
  populatePlayerLists: populatePlayerLists,
  populateLeaderBoard: populateLeaderBoard,
  showSpinner: showSpinner,
  handleSubmission: handleSubmission,
  displayNotification: displayNotification,
  getAllMatches: getAllMatches,
  computeWinner: computeWinner,
  enterScore: enterScore,
  splitName: splitName
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _players = __webpack_require__(27);

var _players2 = _interopRequireDefault(_players);

var _matches = __webpack_require__(26);

var _matches2 = _interopRequireDefault(_matches);

var _bets = __webpack_require__(25);

var _bets2 = _interopRequireDefault(_bets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_INFO = {
  Players: _players2.default,
  Matches: _matches2.default,
  Bets: _bets2.default
};

var GOOGLE_API_KEY = 'AIzaSyB4PhN3YiK4yubSYqNwOY9uIWs4TY0ktAs';
var BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
var SPREADSHEET_IDS = {
  Players: '1UejuxSpU6KpdM6CNOYZbCXibQjoPRZYoe5mi90PVEkQ',
  Matches: '1jr2TPZZuel4a_GXESjXV2BQ3BJF6gddeqdZhWWuk2gQ',
  Bets: '1lQGqlgqd8qjTJ0aWDbnsNMQBFfw0r2MkG9Hm42vRKwY',
  Pools: '19CbQRuJjktp1fcM3vXf0KcnEXi4oEP3vm7aV8u49aWI',
  Bracket: '1wEeq9AHyBOza-FsHXuV7GYqXt_c5vakA6r1RGJaJ9dE'
};

function getTable(tableName) {
  return new Promise(function (resolve, reject) {
    _jquery2.default.ajax({
      // Google nicely crops our query to the size of the actual data... so we can
      // request a huge number, but we'll only get back what exists
      url: BASE_URL + SPREADSHEET_IDS[tableName] + '/values/A1:ZZ1000000',
      data: {
        key: GOOGLE_API_KEY
      },
      success: function success(result) {
        // first row is the header; convert the rest to dicts
        var cleanedResult = [];
        var headers = result.values[0];
        result.values.forEach(function (row, index) {
          if (index > 0) {
            (function () {
              var rowObj = {};
              row.forEach(function (value, colIndex) {
                var header = headers[colIndex] || colIndex;
                rowObj[header] = value;
              });
              cleanedResult.push(rowObj);
            })();
          }
        });
        resolve({
          contents: cleanedResult,
          headerOrder: headers
        });
      },
      error: reject
    });
  });
}

function submitForm(tableName, formElement) {
  formElement = (0, _jquery2.default)(formElement);

  var data = {};

  Object.keys(FORM_INFO[tableName].fields).forEach(function (originalName) {
    var googleName = FORM_INFO[tableName].fields[originalName];
    var domElement = formElement.find('[name="' + originalName + '"]')[0];
    data[googleName] = domElement.value === undefined ? domElement.textContent : domElement.value;
  });

  return new Promise(function (resolve, reject) {
    // This code actually always triggers an Access-Control-Allow-Origin
    // error, but we don't care: the data winds up in the spreadsheet, and
    // it doesn't really matter whether we get the google form html page back
    // (so error should resolve, not reject)
    try {
      _jquery2.default.ajax({
        url: FORM_INFO[tableName].actionUrl,
        data: data,
        type: 'POST',
        dataType: 'xml',
        success: resolve,
        error: resolve
      }).done(function () {
        resolve();
      }).fail(function () {
        resolve();
      }).always(function () {
        resolve();
      });
    } catch (e) {
      resolve();
    }
  }).catch(function () {});
}

exports.default = {
  getTable: getTable,
  submitForm: submitForm
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function drawPointyArc(d) {
  var dx = d.source.x - d.target.x;
  var dy = d.source.y - d.target.y;
  var arcRadius = window.NODE_SIZE * dx / Math.abs(dx);
  var theta = void 0;
  var edgePoint = void 0;
  var front = void 0;
  var back = void 0;
  var arc = void 0;

  if (dx === 0) {
    if (dy >= 0) {
      theta = Math.PI;
    } else {
      theta = -Math.PI;
    }
    edgePoint = {
      x: 0,
      y: window.NODE_SIZE / 2
    };
  } else {
    theta = Math.atan((d.source.y - d.target.y) / (d.source.x - d.target.x)) + Math.PI / 2;
    edgePoint = {
      x: window.NODE_SIZE / 2 * Math.cos(theta),
      y: window.NODE_SIZE / 2 * Math.sin(theta)
    };
  }
  front = {
    x: d.target.x + edgePoint.x,
    y: d.target.y + edgePoint.y
  };
  back = {
    x: d.target.x - edgePoint.x,
    y: d.target.y - edgePoint.y
  };
  arc = {
    x: (d.target.x + d.source.x) / 2 + arcRadius * Math.cos(theta),
    y: (d.target.y + d.source.y) / 2 + arcRadius * Math.sin(theta)
  };
  return 'M' + front.x + ',' + front.y + 'Q' + arc.x + ',' + arc.y + ',' + d.source.x + ',' + d.source.y + 'Q' + arc.x + ',' + arc.y + ',' + back.x + ',' + back.y + 'Z';
}

exports.default = {
  drawPointyArc: drawPointyArc
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _generalUtils = __webpack_require__(4);

var _generalUtils2 = _interopRequireDefault(_generalUtils);

var _edgeTechniques = __webpack_require__(6);

var _edgeTechniques2 = _interopRequireDefault(_edgeTechniques);

var _template = __webpack_require__(21);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CELL_PADDING = 10;

function setup() {
  (0, _jquery2.default)('#bracketTab').html(_template2.default);
}

function constructBracket() {
  var bracket = window.GLOBALS.BRACKET = {
    lookup: {},
    nodes: [],
    seedLookup: {},
    numPlayers: window.GLOBALS.DATA.Bracket.contents.length,
    links: []
  };
  bracket.treeDepth = Math.ceil(Math.log2(bracket.numPlayers));

  var lastLayer = [];

  // Populate the bottom layer with each player, sorted by
  // the player's seed
  window.GLOBALS.DATA.Bracket.contents.sort(function (a, b) {
    return parseInt(a.Seed) - parseInt(b.Seed);
  }).forEach(function (seed) {
    bracket.lookup[seed.Player] = bracket.nodes.length;
    var newNode = {
      id: seed.Player,
      type: 'LEAF',
      favorite: null,
      underdog: null,
      round: bracket.treeDepth,
      winner: seed.Player,
      cantPlayYet: false
    };
    lastLayer.push(newNode);
    bracket.nodes.push(newNode);
    bracket.seedLookup[seed.Player] = parseInt(seed.Seed);
  });
  // Add additional BYE nodes until the layer is full
  while (bracket.nodes.length < Math.pow(2, bracket.treeDepth)) {
    var id = 'BYE' + bracket.nodes.length;
    bracket.lookup[id] = bracket.nodes.length;
    var newNode = {
      id: id,
      type: 'BYE',
      favorite: null,
      underdog: null,
      round: bracket.treeDepth,
      winner: id,
      cantPlayYet: false
    };
    lastLayer.push(newNode);
    bracket.nodes.push(newNode);
  }

  // Fill in all the match nodes

  var _loop = function _loop(round) {
    var newLayer = [];
    for (var _i = 0; _i < lastLayer.length / 2; _i += 1) {
      var favoriteNode = lastLayer[_i];
      var underdogNode = lastLayer[lastLayer.length - _i - 1];

      var _id = '(' + (favoriteNode.winner || favoriteNode.id) + ' vs ' + (underdogNode.winner || underdogNode.id) + ')';
      bracket.lookup[_id] = bracket.nodes.length;
      favoriteNode.parent = underdogNode.parent = _id;

      var _newNode = {
        id: _id,
        type: 'MATCH',
        favorite: favoriteNode.id,
        underdog: underdogNode.id,
        round: round,
        winner: null,
        cantPlayYet: favoriteNode.winner === null || underdogNode.winner === null
      };

      if (underdogNode.type === 'BYE') {
        _newNode.winner = favoriteNode.winner;
      } else if (favoriteNode.winner !== null && underdogNode.winner !== null) {
        var match = _generalUtils2.default.getAllMatches(favoriteNode.winner, underdogNode.winner).filter(function (m) {
          return parseInt(m.Round) === round;
        })[0];
        if (match) {
          _newNode.winner = _generalUtils2.default.computeWinner(match);
        }
      }

      bracket.links.push({
        source: favoriteNode,
        target: _newNode
      });
      bracket.links.push({
        source: underdogNode,
        target: _newNode
      });

      newLayer.push(_newNode);
      bracket.nodes.push(_newNode);
    }

    lastLayer = newLayer;
  };

  for (var round = bracket.treeDepth - 1; round >= 0; round -= 1) {
    _loop(round);
  }

  // Finally, determine where each node goes (use normalized [-1, 1] scales
  // to map to arbitrary window height/width later in renderBracket).
  // Because we built the tree from leaves to root, reversing guarantees
  // that every parent's position will be defined by the time we get to the
  // children
  for (var i = bracket.nodes.length - 1; i >= 0; i -= 1) {
    var node = bracket.nodes[i];
    var parent = bracket.nodes[bracket.lookup[node.parent]];

    if (node.round === 0) {
      // The root node goes in the center
      node.normX = 0;
      node.normY = 0;
      node.ySpan = 2.0;
    } else {
      // Figure out x position based on round number and whether
      // the node is feeding into the favorite or underdog side of
      // the tree

      // Figure out the y coordinate and space for children based on its
      // parent's y coordinate and space for children

      var xOffset = node.round / bracket.treeDepth;
      if (node.round === 1) {
        // The final two go to the left and right, based on favorite and
        // underdog, respectively
        if (parent.favorite === node.id) {
          node.normX = -xOffset;
          node.normY = 0;
          node.ySpan = 2.0;
        } else {
          node.normX = xOffset;
          node.normY = 0;
          node.ySpan = 2.0;
        }
      } else {
        // A deeper node can simply check if its parent is to the left
        // or right of the middle to determine which side it's on
        if (parent.normX < 0) {
          node.normX = -xOffset;
        } else {
          node.normX = xOffset;
        }

        // It can also simply divide the vertical space
        if (parent.favorite === node.id) {
          node.normY = parent.normY - parent.ySpan / 4;
          node.ySpan = parent.ySpan / 2;
        } else {
          node.normY = parent.normY + parent.ySpan / 4;
          node.ySpan = parent.ySpan / 2;
        }
      }
    }
  }
}

function renderBracket() {
  if (!window.GLOBALS.BRACKET) {
    constructBracket();
  }
  var bracket = window.GLOBALS.BRACKET;

  var bracketTab = d3.select('#bracketTab');
  var bracketTabElement = bracketTab.node();
  var svg = bracketTab.select('svg').attrs({ width: null, height: null });
  var containerBounds = bracketTabElement.getBoundingClientRect();
  var bounds = {
    width: Math.max(containerBounds.width, (window.NODE_SIZE + CELL_PADDING) * (bracket.treeDepth * 2)),
    height: Math.max(containerBounds.height, (window.NODE_SIZE + CELL_PADDING) * Math.pow(2, bracket.treeDepth - 1))
  };
  svg.attrs(bounds);

  var xPosition = d3.scaleLinear().domain([-1, 1]).range([(window.NODE_SIZE + CELL_PADDING) / 2, bounds.width - (window.NODE_SIZE + CELL_PADDING) / 2]);
  var yPosition = d3.scaleLinear().domain([-1, 1]).range([0, bounds.height]);

  // Render the nodes
  var nodes = svg.select('#nodes').selectAll('g').data(bracket.nodes);
  nodes.exit().remove();
  var nodesEnter = nodes.enter().append('g');
  nodesEnter.append('circle');
  var nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan').classed('firstName', true).attr('y', '-0.25em');
  nodesEnterText.append('tspan').classed('lastName', true).attr('y', '0.75em').attr('x', '0em');
  nodesEnterText.append('tspan').classed('seed', true).attr('y', '2em').attr('x', '0em');
  nodes = nodesEnter.merge(nodes);

  nodes.each(function (d) {
    d.x = xPosition(d.normX);
    d.y = yPosition(d.normY);
  });
  nodes.attr('transform', function (d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  }).attr('class', function (d) {
    if (d.cantPlayYet) {
      return 'cantPlayYet';
    } else if (d.type === 'BYE') {
      return 'bye';
    } else if (d.winner === null) {
      return 'noScores';
    } else {
      return 'withScores';
    }
  });
  nodes.select('circle').attr('r', window.NODE_SIZE / 2);
  nodes.select('.firstName').text(function (d) {
    if (d.type === 'BYE') {
      return 'BYE /';
    } else if (d.winner) {
      return _generalUtils2.default.splitName(d.winner).firstName;
    } else if (d.cantPlayYet) {
      return 'Players';
    } else {
      return 'Enter';
    }
  });
  nodes.select('.lastName').text(function (d) {
    if (d.type === 'BYE') {
      return 'PASS';
    } else if (d.winner) {
      return _generalUtils2.default.splitName(d.winner).lastName;
    } else if (d.cantPlayYet) {
      return 'TBD';
    } else {
      return 'Scores';
    }
  });
  nodes.select('.seed').text(function (d) {
    if (d.type !== 'BYE' && d.winner) {
      return bracket.seedLookup[d.winner];
    } else {
      return '';
    }
  });
  nodes.on('click', function (d) {
    if (!d.cantPlayYet && d.winner === null) {
      var favoriteNode = bracket.nodes[bracket.lookup[d.favorite]];
      var underdogNode = bracket.nodes[bracket.lookup[d.underdog]];
      _generalUtils2.default.enterScore(favoriteNode.winner, underdogNode.winner, d.round);
    }
  });

  // Render the links
  var links = svg.select('#links').selectAll('path').data(bracket.links);
  links.exit().remove();
  var linksEnter = links.enter().append('path').classed('link', true);
  links = linksEnter.merge(links);

  links.attr('d', _edgeTechniques2.default.drawPointyArc);
}

function render() {
  window.NODE_SIZE = 65;
  if (window.GLOBALS.NOW < window.GLOBALS.POOL_PLAY_DEADLINE) {
    (0, _jquery2.default)('#bracketTab svg').hide();
    (0, _jquery2.default)('#bracketTab .waitMessage').show();
    (0, _jquery2.default)('#bracketTab .deadline').text(window.GLOBALS.POOL_PLAY_DEADLINE.toLocaleString());
  } else {
    (0, _jquery2.default)('#bracketTab svg').show();
    (0, _jquery2.default)('#bracketTab .waitMessage').hide();
    renderBracket();
  }
}

exports.default = {
  setup: setup,
  render: render
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _generalUtils = __webpack_require__(4);

var _generalUtils2 = _interopRequireDefault(_generalUtils);

var _template = __webpack_require__(22);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setup() {
  d3.select('#poolPlayTab').html(_template2.default);
}

function getCloseBounds(element) {
  var bounds = {};
  Array.from(element.children).forEach(function (childElement) {
    var childBounds = childElement.getBoundingClientRect();
    bounds.left = Math.min(bounds.left || childBounds.left, childBounds.left);
    bounds.top = Math.min(bounds.top || childBounds.top, childBounds.top);
    bounds.right = Math.max(bounds.right || childBounds.right, childBounds.right);
    bounds.bottom = Math.max(bounds.bottom || childBounds.bottom, childBounds.bottom);
  });
  bounds.width = bounds.right - bounds.left;
  bounds.height = bounds.bottom - bounds.top;
  return bounds;
}

function renderPools() {
  var pools = {};
  window.GLOBALS.DATA.Pools.contents.forEach(function (poolAssignment) {
    if (!pools[poolAssignment.Pool]) {
      pools[poolAssignment.Pool] = [];
    }
    pools[poolAssignment.Pool].push(poolAssignment.Player);
  });

  var poolPlayTab = d3.select('#poolPlayTab');
  var poolPlayTabElement = poolPlayTab.node();
  var containerBounds = poolPlayTabElement.getBoundingClientRect();
  var svg = poolPlayTab.select('svg');

  // Create groups for each pool
  var poolGroups = svg.selectAll('.poolGroup').data(d3.values(pools));
  poolGroups.exit().remove();
  var poolGroupsEnter = poolGroups.enter().append('g').classed('poolGroup', true);
  poolGroups = poolGroupsEnter.merge(poolGroups);

  poolGroups.attr('transform', 'rotate(-45)');

  // Draw labels for each row / column
  var xLabels = poolGroups.selectAll('.xLabel').data(function (players) {
    return players.slice(1).reverse();
  });
  xLabels.exit().remove();
  var xLabelsEnter = xLabels.enter().append('text').classed('xLabel', true);
  xLabels = xLabelsEnter.merge(xLabels);

  xLabels.text(function (d) {
    return d;
  }).attr('text-anchor', 'end').attr('x', -3 * window.NODE_SIZE / 4).attr('transform', 'rotate(90)').each(function (d, i) {
    var players = d3.select(this.parentElement).datum();
    d3.select(this).attr('y', (i - (players.length - 2)) * window.NODE_SIZE);
  });

  var yLabels = poolGroups.selectAll('.yLabel').data(function (players) {
    return players.slice(0, players.length - 1);
  });
  yLabels.exit().remove();
  var yLabelsEnter = yLabels.enter().append('text').classed('yLabel', true);
  yLabels = yLabelsEnter.merge(yLabels);

  yLabels.text(function (d) {
    return d;
  }).attr('x', function () {
    var players = d3.select(this.parentElement).datum();
    return (players.length - 1.25) * window.NODE_SIZE;
  }).attr('y', function (d, i) {
    return i * window.NODE_SIZE;
  });

  // Draw a cell for each pairing in the pool
  var matchCells = poolGroups.selectAll('.matchCell').data(function (players) {
    var pairings = [];
    players.forEach(function (player1, y) {
      players.slice(y + 1).forEach(function (player2, x) {
        var match = _generalUtils2.default.getAllMatches(player1, player2)[0];
        var winner = match ? _generalUtils2.default.computeWinner(match) : null;
        pairings.push({
          player1: player1,
          player2: player2,
          x: x + y,
          y: y,
          winner: winner
        });
      });
    });
    return pairings;
  });
  matchCells.exit().remove();
  var matchCellsEnter = matchCells.enter().append('g').classed('matchCell', true);
  matchCellsEnter.append('circle');
  var matchCellsEnterText = matchCellsEnter.append('text');
  matchCellsEnterText.append('tspan').classed('firstName', true).attr('y', '-0.25em');
  matchCellsEnterText.append('tspan').classed('lastName', true).attr('y', '0.75em').attr('x', '0em');
  matchCells = matchCellsEnter.merge(matchCells);

  matchCells.attr('transform', function (d) {
    return 'translate(' + window.NODE_SIZE * d.x + ',' + window.NODE_SIZE * d.y + ') rotate(45)';
  }).classed('noScores', function (d) {
    return d.winner === null;
  }).classed('withScores', function (d) {
    return d.winner !== null;
  });
  matchCells.select('circle').attr('r', window.NODE_SIZE / 2);
  matchCells.select('.firstName').text(function (d) {
    return d.winner ? _generalUtils2.default.splitName(d.winner).firstName : 'Enter';
  });
  matchCells.select('.lastName').text(function (d) {
    return d.winner ? _generalUtils2.default.splitName(d.winner).lastName : 'Scores';
  });
  matchCells.on('click', function (d) {
    if (d.winner === null) {
      _generalUtils2.default.enterScore(d.player1, d.player2, 'Pool Play');
    }
  });

  // Lay out each pool like text
  var currentX = 0;
  var currentY = 0;
  var maxBottom = 0;
  var maxRight = 0;
  poolGroups.each(function () {
    var rawBounds = getCloseBounds(this);
    // Push to the next line if we've run out of space (newline-esque)
    if (currentX + rawBounds.width > containerBounds.width) {
      currentX = 0;
      currentY = maxBottom;
    }
    var xOffset = currentX - (rawBounds.left - containerBounds.left) - poolPlayTabElement.scrollLeft;
    var yOffset = currentY - (rawBounds.top - containerBounds.top) - poolPlayTabElement.scrollTop;
    d3.select(this).attr('transform', 'translate(' + xOffset + ',' + yOffset + ') rotate(-45)');
    currentX += rawBounds.width;
    maxRight = Math.max(maxRight, currentX);
    maxBottom = Math.max(maxBottom, currentY + rawBounds.height);
  });

  svg.attr('width', maxRight).attr('height', maxBottom);
}

function render() {
  window.NODE_SIZE = 80;
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    (0, _jquery2.default)('#poolPlayTab svg').show();
    (0, _jquery2.default)('#poolPlayTab .waitMessage').hide();
    renderPools();
  } else {
    (0, _jquery2.default)('#poolPlayTab svg').hide();
    (0, _jquery2.default)('#poolPlayTab .waitMessage').show();
    (0, _jquery2.default)('#poolPlayTab .deadline').text(window.GLOBALS.SIGNUP_DEADLINE.toLocaleString());
  }
}

exports.default = {
  setup: setup,
  render: render
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _generalUtils = __webpack_require__(4);

var _generalUtils2 = _interopRequireDefault(_generalUtils);

var _utahCharities = __webpack_require__(20);

var _utahCharities2 = _interopRequireDefault(_utahCharities);

var _template = __webpack_require__(23);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function updatePlayOrBet() {
  if (d3.select('#willPlay').property('checked')) {
    d3.select('#signupForm').style('display', null);
    d3.select('#betForm').style('display', 'none');
  } else {
    d3.selectAll('#signupForm').style('display', 'none');
    d3.select('#betForm').style('display', null);
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

function validateSignupForm() {
  var name = d3.select('#name').property('value');
  var charity = d3.select('#charity').property('value');
  if (window.GLOBALS.DATA.Players.contents.filter(function (d) {
    return d['Player Name'] === name;
  }).length > 0) {
    d3.select('#name').classed('error', true);
    _generalUtils2.default.displayNotification('Sorry, someone already signed up with that name');
    return Promise.reject();
  }
  if (name && charity) {
    return Promise.resolve();
  } else {
    if (!name) {
      d3.select('#name').classed('error', true);
    }
    if (!charity) {
      d3.select('#charity').classed('error', true);
    }
    return Promise.reject();
  }
}

function validateBetForm() {
  if (d3.select('#bet').property('value') !== 'Choose a Player') {
    return Promise.resolve();
  } else {
    d3.select('#bet').classed('error', true);
    return Promise.reject();
  }
}

function setup() {
  (0, _jquery2.default)('#signupTab').html(_template2.default);

  // Charity list
  populateCharityList();

  // Radio buttons
  d3.selectAll('#willPlay, #willBet').on('change', function () {
    updatePlayOrBet();
  });
  updatePlayOrBet();

  // Submission buttons
  d3.select('#signupButton').on('click', function () {
    _generalUtils2.default.handleSubmission(validateSignupForm, 'Players', this.parentElement.parentElement);
  });
  d3.select('#betButton').on('click', function () {
    _generalUtils2.default.handleSubmission(validateBetForm, 'Bets', this.parentElement.parentElement);
  });
}

function render() {
  // People select menu
  _generalUtils2.default.populatePlayerLists('#bet');

  // Update sign up status
  if (window.GLOBALS.NOW < window.GLOBALS.SIGNUP_DEADLINE) {
    (0, _jquery2.default)('.cantSignup').hide();
    (0, _jquery2.default)('#signupDeadline').text(window.GLOBALS.SIGNUP_DEADLINE.toLocaleString());
  } else {
    (0, _jquery2.default)('.canSignup').hide();
    d3.select('#willPlay').property('disabled', true);
    d3.select('#willBet').property('checked', true);
    updatePlayOrBet();
  }
}

exports.default = {
  setup: setup,
  render: render
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _generalUtils = __webpack_require__(4);

var _generalUtils2 = _interopRequireDefault(_generalUtils);

var _edgeTechniques = __webpack_require__(6);

var _edgeTechniques2 = _interopRequireDefault(_edgeTechniques);

var _template = __webpack_require__(24);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var graph = {
  nodes: [],
  links: [],
  nodeLookup: {}
};
var simulation = void 0;

function setup() {
  (0, _jquery2.default)('#statsTab').html(_template2.default);
}

function updateGraph(date) {
  var newNodes = [];
  var newNodeLookup = {};

  // Create a node for each player that has signed up
  // on or before date

  window.GLOBALS.DATA.Players.contents.forEach(function (player) {
    if (new Date(player['Timestamp']) <= date) {
      var playerName = player['Player Name'];
      newNodeLookup[playerName] = newNodes.length;
      if (graph.nodeLookup[playerName]) {
        // keep the old node, as it will have x, y, and
        // velocity parameters from before, and we want the
        // switch to be smooth
        newNodes.push(graph.nodes[graph.nodeLookup[playerName]]);
      } else {
        var newNode = _generalUtils2.default.splitName(playerName);
        newNode.id = playerName;
        newNodes.push(newNode);
      }
    }
  });

  graph.nodes = newNodes;
  graph.nodeLookup = newNodeLookup;

  graph.links = [];

  // Create a link for each game that has been entered
  // on or before date (don't have to keep the old links,
  // as d3 stores all the graph drawing stuff on the nodes)

  window.GLOBALS.DATA.Matches.contents.forEach(function (match) {
    if (new Date(match['Timestamp']) <= date) {
      var player1 = match['Player 1'];
      var player2 = match['Player 2'];
      var winner = _generalUtils2.default.computeWinner(match);
      graph.links.push({
        source: winner === player1 ? player2 : player1,
        target: winner
      });
    }
  });
  return graph;
}

function startDraggingNode(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
  d3.select(this).classed('dragging', true);
}

function dragNode(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function finishDraggingNode(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
  d3.select(this).classed('dragging', false);
}

function renderNodes(svg, graph) {
  var nodes = svg.select('#nodeLayer').selectAll('g').data(graph.nodes, function (d) {
    return d.id;
  });
  nodes.exit().remove();
  var nodesEnter = nodes.enter().append('g').call(d3.drag().on('start', startDraggingNode).on('drag', dragNode).on('end', finishDraggingNode));
  nodesEnter.append('circle');
  var nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan').classed('firstName', true);
  nodesEnterText.append('tspan').classed('lastName', true);
  nodes = nodesEnter.merge(nodes);

  nodes.select('.firstName').text(function (d) {
    return d.firstName;
  }).attr('y', '-0.25em');
  nodes.select('.lastName').text(function (d) {
    return d.lastName;
  }).attr('y', '0.75em').attr('x', '0em');
  nodes.select('circle').attr('r', window.NODE_SIZE / 2);

  return nodes;
}

function renderLinks(svg, graph) {
  var links = svg.select('#linkLayer').selectAll('path').data(graph.links);
  links.exit().remove();
  var linksEnter = links.enter().append('path').classed('link', true);
  links = linksEnter.merge(links);

  return links;
}

function boundingBoxForce(bounds) {
  var nodes = [];

  function force() {
    nodes.forEach(function (node) {
      if (node.x - window.NODE_SIZE / 2 <= 0) {
        node.x = window.NODE_SIZE / 2;
        node.vx = Math.abs(node.vx);
      }
      if (node.y - window.NODE_SIZE / 2 <= 0) {
        node.y = window.NODE_SIZE / 2;
        node.vy = Math.abs(node.vy);
      }
      if (node.x + window.NODE_SIZE / 2 >= bounds.width) {
        node.x = bounds.width - window.NODE_SIZE / 2;
        node.vx = -Math.abs(node.vx);
      }
      if (node.y + window.NODE_SIZE / 2 >= bounds.height) {
        node.y = bounds.height - window.NODE_SIZE / 2;
        node.vy = -Math.abs(node.vy);
      }
    });
  }
  force.initialize = function (newNodes) {
    nodes = newNodes;
  };
  return force;
}

function render() {
  window.NODE_SIZE = 50;

  var statsTab = d3.select('#statsTab');
  var bounds = statsTab.node().getBoundingClientRect();
  var svg = statsTab.select('svg');
  svg.attr('width', bounds.width).attr('height', bounds.height);

  var graph = updateGraph(new Date()); // todo: pass in a date from a slider

  var nodes = renderNodes(svg, graph);
  var links = renderLinks(svg, graph);

  if (!simulation) {
    // First time rendering; set up the simulation
    simulation = d3.forceSimulation().velocityDecay(0.05).force('link', d3.forceLink().id(function (d) {
      return d.id;
    }).distance(function (d) {
      return window.NODE_SIZE + 60;
    }).strength(0.05)).force('repulsion', d3.forceManyBody().strength(-7))
    // .force('center', d3.forceCenter(bounds.width / 2, bounds.height / 2))
    .force('collision', d3.forceCollide().radius(window.NODE_SIZE / 2)).force('boundingBox', boundingBoxForce(bounds)).on('tick', function () {
      nodes.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
      links.attr('d', _edgeTechniques2.default.drawPointyArc);
    });
  } else {
    // Perturb it just a little
    simulation.alpha(0.3).restart();
  }

  simulation.nodes(graph.nodes);
  simulation.force('link').links(graph.links);
}

exports.default = {
  setup: setup,
  render: render
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (containerElement) {
  var d3el = d3.select(containerElement);

  // Attach properties to make the li or ol DOM element behave more like a
  // select element
  if (d3el.property('value') === undefined) {
    Object.defineProperty(containerElement, 'value', { get: function get() {
        var selectedElement = d3el.select('.selected');
        return selectedElement.attr('value') || selectedElement.text();
      } });
  }
  if (d3el.property('selectedIndex') === undefined) {
    Object.defineProperty(containerElement, 'selectedIndex', { get: function get() {
        var entries = this.children;
        for (var i = 0; i < entries.length; i += 1) {
          if (entries[i].classList.contains('selected')) {
            return i;
          }
        }
        return -1;
      } });
  }

  // Make the entries respond to clicks
  d3el.selectAll('li').on('click', function () {
    handleClick.call(this, d3el);
  });
};

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

__webpack_require__(32);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n#bracketTab {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  overflow: auto; }\n  #bracketTab #nodes g text tspan {\n    text-anchor: middle;\n    font-size: 0.6em; }\n  #bracketTab #nodes g.noScores circle {\n    fill: #D95F02; }\n  #bracketTab #nodes g.noScores text tspan {\n    fill: #F7F7F7; }\n  #bracketTab #nodes g.noScores:hover {\n    cursor: pointer; }\n    #bracketTab #nodes g.noScores:hover circle {\n      fill: #F7F7F7; }\n    #bracketTab #nodes g.noScores:hover text tspan {\n      fill: #525252; }\n  #bracketTab #nodes g.withScores circle {\n    fill: #F7F7F7; }\n  #bracketTab #nodes g.withScores text tspan {\n    fill: #D95F02; }\n  #bracketTab #nodes g.cantPlayYet circle {\n    fill: #252525;\n    stroke: #D95F02; }\n  #bracketTab #nodes g.cantPlayYet text tspan {\n    fill: #D95F02; }\n  #bracketTab #nodes g.bye circle {\n    fill: #252525;\n    stroke: #BDBDBD;\n    stroke-dasharray: 5, 5; }\n  #bracketTab #nodes g.bye text tspan {\n    fill: #F7F7F7; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n#poolPlayTab {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  overflow: auto; }\n  #poolPlayTab .yLabel,\n  #poolPlayTab .xLabel {\n    fill: #F7F7F7; }\n  #poolPlayTab .matchCell text tspan {\n    text-anchor: middle;\n    font-size: 0.75em; }\n  #poolPlayTab .matchCell.noScores circle {\n    fill: #D95F02; }\n  #poolPlayTab .matchCell.noScores text tspan {\n    fill: #F7F7F7; }\n  #poolPlayTab .matchCell:hover {\n    cursor: pointer; }\n    #poolPlayTab .matchCell:hover circle {\n      fill: #F7F7F7; }\n    #poolPlayTab .matchCell:hover text tspan {\n      fill: #525252; }\n  #poolPlayTab .matchCell.withScores circle {\n    fill: #F7F7F7; }\n  #poolPlayTab .matchCell.withScores text tspan {\n    fill: #D95F02; }\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n#signupTab {\n  max-width: 45em;\n  margin: 0em auto; }\n  #signupTab #signupDeadline {\n    color: #E7298A; }\n  #signupTab .cantSignup {\n    color: #E7298A; }\n  #signupTab form {\n    display: flex;\n    flex-direction: column; }\n    #signupTab form > span {\n      position: relative;\n      height: 4em;\n      pointer-events: none; }\n      #signupTab form > span > * {\n        pointer-events: all; }\n      #signupTab form > span label {\n        position: absolute;\n        text-align: right;\n        right: 22em;\n        bottom: 1.5em; }\n      #signupTab form > span input {\n        position: absolute;\n        right: 0em;\n        width: 10em;\n        bottom: 0.5em; }\n      #signupTab form > span .button {\n        position: absolute;\n        right: 0em;\n        bottom: 0.5em; }\n        #signupTab form > span .button#betButton {\n          bottom: 3.75em; }\n      #signupTab form > span ul.selectMenu {\n        position: relative;\n        display: inline-block;\n        left: 25em;\n        /* cant position the select menu absolutely; instead I manually set this location */ }\n        #signupTab form > span ul.selectMenu li {\n          max-width: 13em;\n          overflow-x: hidden; }\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n#statsTab {\n  position: absolute;\n  left: 1em;\n  top: 1em;\n  right: 1em;\n  bottom: 1em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  #statsTab #nodeLayer g {\n    cursor: -webkit-grab;\n    cursor: grab; }\n    #statsTab #nodeLayer g.dragging {\n      cursor: -webkit-grabbing;\n      cursor: grabbing; }\n    #statsTab #nodeLayer g circle {\n      fill: #D95F02; }\n    #statsTab #nodeLayer g text tspan {\n      fill: #F7F7F7;\n      text-anchor: middle;\n      font-size: 0.5em; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\na.button {\n  border-radius: 1em; }\n\na.button,\nul.selectMenu li,\nol.selectMenu li {\n  padding: 1em;\n  background-color: #D95F02;\n  color: #F7F7F7;\n  cursor: pointer;\n  text-align: center;\n  white-space: nowrap; }\n\na.button:hover,\nul.selectMenu li:hover,\nol.selectMenu li:hover {\n  background-color: #F7F7F7;\n  color: #525252; }\n\na.button.disabled,\na.button.disabled:hover,\nul.selectMenu.disabled li,\nul.selectMenu.disabled li:hover,\nol.selectMenu.disabled li,\nol.selectMenu.disabled li:hover {\n  background-color: #525252;\n  color: #969696;\n  cursor: default; }\n\nul.selectMenu,\nol.selectMenu {\n  list-style: none;\n  padding: 0px; }\n  ul.selectMenu li,\n  ol.selectMenu li {\n    display: none; }\n  ul.selectMenu.expanded li,\n  ol.selectMenu.expanded li {\n    display: block; }\n  ul.selectMenu li.selected,\n  ol.selectMenu li.selected {\n    display: block; }\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\n::-webkit-scrollbar {\n  width: 1em; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background-color: transparent;\n  border: none; }\n\n/* Corner */\n::-webkit-scrollbar-corner {\n  background-color: transparent;\n  border: none; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 1em;\n  border-radius: 1em;\n  background: #D95F02; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #F7F7F7; }\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D95F02; }\n\n@font-face {\n  font-family: 'Wolf-Sans-Regular';\n  src: url(" + __webpack_require__(19) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nbody {\n  font-family: \"Wolf-Sans-Regular\", sans-serif;\n  font-weight: 300;\n  color: #D9D9D9;\n  background-color: black; }\n\ninput {\n  font-family: \"Wolf-Sans-Regular\", sans-serif;\n  font-size: 2em;\n  background-color: #F7F7F7;\n  color: #525252;\n  border: 1px solid #252525;\n  outline: none; }\n\ninput.error {\n  border: 4px solid #E7298A; }\n\ninput:focus {\n  border: 4px solid #D95F02; }\n\ninput:disabled + label {\n  /* note: this only works for labels that come immediately AFTER the input */\n  color: #525252; }\n\nh1, h2, h3, h4, h5, h6, b {\n  font-weight: 700; }\n\nb {\n  color: #D95F02; }\n\na {\n  text-decoration: none;\n  color: #D95F02; }\n\ntable {\n  border-collapse: collapse; }\n  table thead td {\n    border: 1px solid #F7F7F7;\n    background-color: #525252;\n    color: #F7F7F7; }\n  table td {\n    padding: 0.25em;\n    text-align: center;\n    white-space: nowrap; }\n    table td.small {\n      white-space: normal;\n      font-size: 0.5em;\n      max-width: 25em; }\n\n#backgroundImage {\n  position: fixed;\n  bottom: -256px;\n  right: -256px; }\n\nh1 {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  color: #D95F02; }\n\n#backgroundOverlay {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background: radial-gradient(ellipse 1024px 512px at 100% 100%, rgba(0, 0, 0, 0.3) 0px, black 1536px); }\n\n#mainPage {\n  position: absolute;\n  top: 5em;\n  right: 0px;\n  bottom: 0px;\n  left: 0px; }\n  #mainPage #leaderBoard {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    bottom: 0px;\n    width: calc(33.33333333% - 2em);\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    overflow-y: scroll; }\n    #mainPage #leaderBoard table {\n      margin-top: 1em;\n      margin-left: auto;\n      margin-right: auto; }\n  #mainPage nav {\n    position: absolute;\n    top: 2em;\n    right: 0px;\n    width: calc(66.66666666% - 2em);\n    height: 3.25em;\n    display: flex;\n    justify-content: center; }\n    #mainPage nav .button {\n      margin: 0em 0.5em; }\n      #mainPage nav .button.selected {\n        background-color: #F7F7F7;\n        color: #D95F02; }\n  #mainPage #mainPanel {\n    position: absolute;\n    top: 7.25em;\n    right: 0px;\n    width: calc(66.66666666% - 2em);\n    bottom: 5em;\n    padding: 1em; }\n\n#spinner {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  background-color: rgba(247, 247, 247, 0.5); }\n  #spinner img {\n    position: absolute;\n    width: 10em;\n    height: 10em;\n    top: calc(50% - 5em);\n    left: calc(50% - 5em); }\n\n.selectMenu li span.name {\n  display: block;\n  width: auto;\n  height: auto; }\n\n.selectMenu li span.charity {\n  display: block;\n  width: auto;\n  height: auto;\n  font-size: 0.5em; }\n\n.selectMenu.error {\n  border: 4px solid #E7298A; }\n\n.waitMessage {\n  position: absolute;\n  top: calc(50% - 0.5em);\n  width: calc(100% - 2em);\n  text-align: center; }\n  .waitMessage .deadline {\n    color: #E7298A; }\n\n.messageBlurb {\n  background-color: rgba(247, 247, 247, 0.75);\n  color: #252525; }\n\n#debug {\n  position: absolute;\n  left: 1em;\n  bottom: 6em;\n  padding: 2em 1em; }\n\n#contact {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n  padding: 1em; }\n\n#notification {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  padding: 1em; }\n\n#touchTableHint {\n  position: absolute;\n  left: 0em;\n  top: 19em;\n  padding: 0.5em; }\n\n#scoreEntryModal {\n  position: absolute;\n  top: 10em;\n  width: 26em;\n  height: 21em;\n  left: calc(50% - 13em);\n  padding: 1em; }\n  #scoreEntryModal h1 {\n    position: absolute;\n    width: 100%;\n    top: 0.25em;\n    text-align: center; }\n  #scoreEntryModal table {\n    margin-top: 4em;\n    margin-left: auto;\n    margin-right: auto; }\n    #scoreEntryModal table input {\n      width: 4em; }\n  #scoreEntryModal #closeButtons {\n    position: absolute;\n    top: 19em;\n    right: 2em; }\n\npath.link {\n  fill: rgba(247, 247, 247, 0.5); }\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Wolf-Sans-Regular.woff";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "utahCharities.csv";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<svg>\n  <g id=\"links\"></g>\n  <g id=\"nodes\"></g>\n</svg>\n<div class=\"waitMessage\">\n  Bracket seeds have not yet been assigned; check here again after <span class=\"deadline\"></span>\n</div>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg></svg>\n<div class=\"waitMessage\">\n  Pools have not yet been assigned; check here again after <span class=\"deadline\"></span>\n</div>\n";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<p class=\"canSignup\">You have until <span id=\"signupDeadline\"></span> to sign up to play.</p>\n<p class=\"cantSignup\">Unfortunately, you've missed the sign up deadline. However, you are still free to place bets.</p>\n<p>We're doing a donation-based ping pong tournament. It works like this:</p>\n<ul>\n  <li>\n    <b>Sign up to play</b>\n    <p>Pick a charity that you'll represent. If you win, your charity gets everyone's donations!</p>\n  </li>\n  <li>\n    <b>Bet on a player / charity combo</b>\n    <p>Pick a player you think will win, or a charity that someone else is representing that you want to support.\n      Show your support by betting on them! There's no deadline / limit on the number of times you can bet.</p>\n  </li>\n</ul>\n<p>\n  All donations are on the honor system; leave your donation(s) in the box by the ping pong table.\n  We encourage a <b>small</b> donation (the recommended amount is $1), but feel free to donate\n  however much you like.\n  If we've locked it away for the night, or you don't happen to have $1 on you, you can\n  still sign up—just try to remember to donate later. &#128521;\n</p>\n<span>\n  <input name=\"playOrBet\" id=\"willPlay\" value=\"willPlay\" type=\"radio\" checked/>\n  <label for=\"willPlay\">I want to play</label>\n</span>\n<span>\n  <input name=\"playOrBet\" id=\"willBet\" value=\"willBet\" type=\"radio\"/>\n  <label for=\"willBet\">I want to bet</label>\n</span>\n<form id=\"signupForm\">\n  <span>\n    <label for=\"name\">Your name:</label>\n    <input name=\"Player Name\", id=\"name\"/>\n  </span>\n  <span>\n    <label for=\"charity\">The 501(c)(3) non-profit you'll be playing for:</label>\n    <input name=\"Charity\", id=\"charity\" list=\"charityList\"/>\n    <datalist id=\"charityList\">\n    </dataList>\n  </span>\n  <span>\n    <a id=\"signupButton\" class=\"button\">Sign Up</a>\n  </span>\n</form>\n<form id=\"betForm\">\n  <span class=\"betElement\">\n    <label>Pick the player that you want to bet on:</label>\n    <ul id=\"bet\" class=\"selectMenu\" name=\"Player\"></ul>\n  </span>\n  <span class=\"betElement\">\n    <a id=\"betButton\" class=\"button\">Bet</a>\n  </span>\n</form>\n";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<svg>\n  <g id=\"linkLayer\"></g>\n  <g id=\"nodeLayer\"></g>\n</svg>\n";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"actionUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc7y55LztpGqvKk37Q4JvJRs0GyDxvCtq_JUqTp9-edau_b4g/formResponse",
	"fields": {
		"Player": "entry.1071415515"
	}
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"actionUrl": "https://docs.google.com/forms/d/e/1FAIpQLScxat2bN8XxQyp72H0ibmkm-5FtzFCNUeBw1DA8xdpA5N5-6Q/formResponse",
	"fields": {
		"Round": "entry.1689460968",
		"Player 1": "entry.1586728669",
		"Player 2": "entry.1665835053",
		"Player 1 Set 1": "entry.151139836",
		"Player 2 Set 1": "entry.1657562388",
		"Player 1 Set 2": "entry.803176882",
		"Player 2 Set 2": "entry.1338830378",
		"Player 1 Set 3": "entry.1673548937",
		"Player 2 Set 3": "entry.553799335"
	}
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"actionUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeXb2XTHu5lOjD12pOEnpltXzNbli4K7MF2KGJw5b3o02vh7w/formResponse",
	"fields": {
		"Player Name": "entry.1653896971",
		"Charity": "entry.1079188333"
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

var _generalUtils = __webpack_require__(4);

var _generalUtils2 = _interopRequireDefault(_generalUtils);

var _googleSheetsFakeDb = __webpack_require__(5);

var _googleSheetsFakeDb2 = _interopRequireDefault(_googleSheetsFakeDb);

var _signupTab = __webpack_require__(9);

var _signupTab2 = _interopRequireDefault(_signupTab);

var _poolPlayTab = __webpack_require__(8);

var _poolPlayTab2 = _interopRequireDefault(_poolPlayTab);

var _bracketTab = __webpack_require__(7);

var _bracketTab2 = _interopRequireDefault(_bracketTab);

var _statsTab = __webpack_require__(10);

var _statsTab2 = _interopRequireDefault(_statsTab);

__webpack_require__(11);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make jQuery / d3 accessible from the console
window.jQuery = _jquery2.default;
window.d3 = d3;

window.GLOBALS = {
  SIGNUP_DEADLINE: new Date('Mar 24, 2017, 23:59'),
  POOL_PLAY_DEADLINE: new Date('Apr 14, 2017, 23:59'),
  NOW: new Date(),
  DATA: {}, // this will be populated in getAllTables()
  DEBUG_MODE: false // set to true to try out different states from the UI
};

function setupDebugging() {
  if (window.GLOBALS.DEBUG_MODE) {
    // Debugging: testing other states
    (0, _jquery2.default)('#debug').show();
    if (window.localStorage.getItem('debuggingDate')) {
      window.GLOBALS.NOW = new Date(window.localStorage.getItem('debuggingDate'));
      (0, _jquery2.default)('#currentTest').text('Simulating ' + window.GLOBALS.NOW);
    }
    (0, _jquery2.default)('#clearTests').on('click', function () {
      window.localStorage.removeItem('debuggingDate');
      window.location.reload();
    });
    (0, _jquery2.default)('#testSignupExpiration').on('click', function () {
      window.localStorage.setItem('debuggingDate', window.GLOBALS.SIGNUP_DEADLINE);
      window.location.reload();
    });
    (0, _jquery2.default)('#testPoolPlayExpiration').on('click', function () {
      window.localStorage.setItem('debuggingDate', window.GLOBALS.POOL_PLAY_DEADLINE);
      window.location.reload();
    });
  }
}

function setupTouchTableSpecifics() {
  // Show / hide the icon to help bring up the touch table keyboard
  if (window.localStorage.getItem('isTouchTable')) {
    (0, _jquery2.default)('#touchTableHint').show();
    (0, _jquery2.default)('#leaderBoard').css('padding-left', '4em');
  }
}

function updateTabs() {
  var startingTab = '#signupTab';
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    startingTab = '#poolPlayTab';
  }
  if (window.GLOBALS.NOW >= window.GLOBALS.POOL_PLAY_DEADLINE) {
    startingTab = '#bracketTab';
  }

  var currentHash = window.location.hash || startingTab;

  (0, _jquery2.default)('.tab').hide();
  (0, _jquery2.default)(currentHash).show();

  (0, _jquery2.default)('nav').find('.button').each(function (index, element) {
    if (element.getAttribute('href') === currentHash) {
      element.setAttribute('class', 'selected button');
    } else {
      element.setAttribute('class', 'button');
    }
  });

  _generalUtils2.default.populateLeaderBoard();
  if (currentHash === '#signupTab') {
    _signupTab2.default.render();
  } else if (currentHash === '#poolPlayTab') {
    _poolPlayTab2.default.render();
  } else if (currentHash === '#bracketTab') {
    _bracketTab2.default.render();
  } else if (currentHash === '#statsTab') {
    _statsTab2.default.render();
  }
  _generalUtils2.default.showSpinner(false);
}

function immediateSetup() {
  setupDebugging();
  setupTouchTableSpecifics();
  getAllTables();
  _signupTab2.default.setup();
  _poolPlayTab2.default.setup();
  _bracketTab2.default.setup();
  _statsTab2.default.setup();
}

function getAllTables() {
  var tableNames = ['Players', 'Matches', 'Bets', 'Pools', 'Bracket'];
  Promise.all(tableNames.map(_googleSheetsFakeDb2.default.getTable)).then(function (tables) {
    tableNames.forEach(function (tableName, index) {
      window.GLOBALS.DATA[tableName] = tables[index];
    });
    if (!window.localStorage.getItem('debuggingDate')) {
      window.GLOBALS.NOW = new Date();
    }
    delete window.GLOBALS.MATCH_LOOKUP;
    delete window.GLOBALS.BRACKET;
    // Update the tables every 30 seconds
    window.setTimeout(function () {
      getAllTables();
    }, 30000);
  }).then(updateTabs);
}

window.onhashchange = window.onresize = updateTabs;
window.onload = immediateSetup;

/***/ })
/******/ ]);
//# sourceMappingURL=webpack-bundle.js.map