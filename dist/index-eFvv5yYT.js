var zy = Object.defineProperty;
var Gy = (r, t, e) => t in r ? zy(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var lt = (r, t, e) => (Gy(r, typeof t != "symbol" ? t + "" : t, e), e), If = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var o = (r, t, e) => (If(r, t, "read from private field"), e ? e.call(r) : t.get(r)), m = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, w = (r, t, e, i) => (If(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e);
var $e = (r, t, e, i) => ({
  set _(n) {
    w(r, t, n, e);
  },
  get _() {
    return o(r, t, i);
  }
}), A = (r, t, e) => (If(r, t, "access private method"), e);
import { jsx as O, jsxs as Ke, Fragment as A0 } from "react/jsx-runtime";
import { createContext as of, forwardRef as Dg, useReducer as Og, useEffect as bt, useImperativeHandle as _0, useContext as Be, useCallback as _o, useState as Eo, useRef as zi, useMemo as yi, useLayoutEffect as Vy, memo as Wy } from "react";
import gt, { css as E0, keyframes as qy, ThemeProvider as Xy } from "styled-components";
var Io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function x0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function UL(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(e, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), e;
}
var Po = function(r) {
  return r && r.Math === Math && r;
}, Wi = (
  // eslint-disable-next-line es/no-global-this -- safe
  Po(typeof globalThis == "object" && globalThis) || Po(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Po(typeof self == "object" && self) || Po(typeof Io == "object" && Io) || Po(typeof Io == "object" && Io) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ng = {}, gs = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, Yy = gs, Br = !Yy(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ky = gs, S0 = !Ky(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), Zy = S0, Rh = Function.prototype.call, Bg = Zy ? Rh.bind(Rh) : function() {
  return Rh.apply(Rh, arguments);
}, C0 = {}, T0 = {}.propertyIsEnumerable, P0 = Object.getOwnPropertyDescriptor, Jy = P0 && !T0.call({ 1: 2 }, 1);
C0.f = Jy ? function(t) {
  var e = P0(this, t);
  return !!e && e.enumerable;
} : T0;
var R0 = function(r, t) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: t
  };
}, L0 = S0, k0 = Function.prototype, rp = k0.call, Qy = L0 && k0.bind.bind(rp, rp), Mn = L0 ? Qy : function(r) {
  return function() {
    return rp.apply(r, arguments);
  };
}, I0 = Mn, tw = I0({}.toString), ew = I0("".slice), iw = function(r) {
  return ew(tw(r), 8, -1);
}, nw = Mn, sw = gs, rw = iw, Ff = Object, aw = nw("".split), ow = sw(function() {
  return !Ff("z").propertyIsEnumerable(0);
}) ? function(r) {
  return rw(r) === "String" ? aw(r, "") : Ff(r);
} : Ff, F0 = function(r) {
  return r == null;
}, lw = F0, cw = TypeError, M0 = function(r) {
  if (lw(r))
    throw new cw("Can't call method on " + r);
  return r;
}, hw = ow, dw = M0, $g = function(r) {
  return hw(dw(r));
}, Mf = typeof document == "object" && document.all, qi = typeof Mf > "u" && Mf !== void 0 ? function(r) {
  return typeof r == "function" || r === Mf;
} : function(r) {
  return typeof r == "function";
}, uw = qi, Ah = function(r) {
  return typeof r == "object" ? r !== null : uw(r);
}, Df = Wi, fw = qi, pw = function(r) {
  return fw(r) ? r : void 0;
}, D0 = function(r, t) {
  return arguments.length < 2 ? pw(Df[r]) : Df[r] && Df[r][t];
}, gw = Mn, mw = gw({}.isPrototypeOf), vw = typeof navigator < "u" && String(navigator.userAgent) || "", O0 = Wi, Of = vw, mm = O0.process, vm = O0.Deno, bm = mm && mm.versions || vm && vm.version, ym = bm && bm.v8, bi, ud;
ym && (bi = ym.split("."), ud = bi[0] > 0 && bi[0] < 4 ? 1 : +(bi[0] + bi[1]));
!ud && Of && (bi = Of.match(/Edge\/(\d+)/), (!bi || bi[1] >= 74) && (bi = Of.match(/Chrome\/(\d+)/), bi && (ud = +bi[1])));
var bw = ud, wm = bw, yw = gs, ww = Wi, Aw = ww.String, N0 = !!Object.getOwnPropertySymbols && !yw(function() {
  var r = Symbol("symbol detection");
  return !Aw(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && wm && wm < 41;
}), _w = N0, B0 = _w && !Symbol.sham && typeof Symbol.iterator == "symbol", Ew = D0, xw = qi, Sw = mw, Cw = B0, Tw = Object, $0 = Cw ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var t = Ew("Symbol");
  return xw(t) && Sw(t.prototype, Tw(r));
}, Pw = String, Rw = function(r) {
  try {
    return Pw(r);
  } catch {
    return "Object";
  }
}, Lw = qi, kw = Rw, Iw = TypeError, U0 = function(r) {
  if (Lw(r))
    return r;
  throw new Iw(kw(r) + " is not a function");
}, Fw = U0, Mw = F0, Dw = function(r, t) {
  var e = r[t];
  return Mw(e) ? void 0 : Fw(e);
}, Nf = Bg, Bf = qi, $f = Ah, Ow = TypeError, Nw = function(r, t) {
  var e, i;
  if (t === "string" && Bf(e = r.toString) && !$f(i = Nf(e, r)) || Bf(e = r.valueOf) && !$f(i = Nf(e, r)) || t !== "string" && Bf(e = r.toString) && !$f(i = Nf(e, r)))
    return i;
  throw new Ow("Can't convert object to primitive value");
}, H0 = { exports: {} }, Am = Wi, Bw = Object.defineProperty, Ug = function(r, t) {
  try {
    Bw(Am, r, { value: t, configurable: !0, writable: !0 });
  } catch {
    Am[r] = t;
  }
  return t;
}, $w = Wi, Uw = Ug, _m = "__core-js_shared__", Em = H0.exports = $w[_m] || Uw(_m, {});
(Em.versions || (Em.versions = [])).push({
  version: "3.37.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Hg = H0.exports, xm = Hg, j0 = function(r, t) {
  return xm[r] || (xm[r] = t || {});
}, Hw = M0, jw = Object, zw = function(r) {
  return jw(Hw(r));
}, Gw = Mn, Vw = zw, Ww = Gw({}.hasOwnProperty), $r = Object.hasOwn || function(t, e) {
  return Ww(Vw(t), e);
}, qw = Mn, Xw = 0, Yw = Math.random(), Kw = qw(1 .toString), z0 = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Kw(++Xw + Yw, 36);
}, Zw = Wi, Jw = j0, Sm = $r, Qw = z0, tA = N0, eA = B0, Jr = Zw.Symbol, Uf = Jw("wks"), iA = eA ? Jr.for || Jr : Jr && Jr.withoutSetter || Qw, nA = function(r) {
  return Sm(Uf, r) || (Uf[r] = tA && Sm(Jr, r) ? Jr[r] : iA("Symbol." + r)), Uf[r];
}, sA = Bg, Cm = Ah, Tm = $0, rA = Dw, aA = Nw, oA = nA, lA = TypeError, cA = oA("toPrimitive"), hA = function(r, t) {
  if (!Cm(r) || Tm(r))
    return r;
  var e = rA(r, cA), i;
  if (e) {
    if (t === void 0 && (t = "default"), i = sA(e, r, t), !Cm(i) || Tm(i))
      return i;
    throw new lA("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), aA(r, t);
}, dA = hA, uA = $0, G0 = function(r) {
  var t = dA(r, "string");
  return uA(t) ? t : t + "";
}, fA = Wi, Pm = Ah, ap = fA.document, pA = Pm(ap) && Pm(ap.createElement), gA = function(r) {
  return pA ? ap.createElement(r) : {};
}, mA = Br, vA = gs, bA = gA, V0 = !mA && !vA(function() {
  return Object.defineProperty(bA("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), yA = Br, wA = Bg, AA = C0, _A = R0, EA = $g, xA = G0, SA = $r, CA = V0, Rm = Object.getOwnPropertyDescriptor;
Ng.f = yA ? Rm : function(t, e) {
  if (t = EA(t), e = xA(e), CA)
    try {
      return Rm(t, e);
    } catch {
    }
  if (SA(t, e))
    return _A(!wA(AA.f, t, e), t[e]);
};
var lf = {}, TA = Br, PA = gs, RA = TA && PA(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), LA = Ah, kA = String, IA = TypeError, W0 = function(r) {
  if (LA(r))
    return r;
  throw new IA(kA(r) + " is not an object");
}, FA = Br, MA = V0, DA = RA, Lh = W0, Lm = G0, OA = TypeError, Hf = Object.defineProperty, NA = Object.getOwnPropertyDescriptor, jf = "enumerable", zf = "configurable", Gf = "writable";
lf.f = FA ? DA ? function(t, e, i) {
  if (Lh(t), e = Lm(e), Lh(i), typeof t == "function" && e === "prototype" && "value" in i && Gf in i && !i[Gf]) {
    var n = NA(t, e);
    n && n[Gf] && (t[e] = i.value, i = {
      configurable: zf in i ? i[zf] : n[zf],
      enumerable: jf in i ? i[jf] : n[jf],
      writable: !1
    });
  }
  return Hf(t, e, i);
} : Hf : function(t, e, i) {
  if (Lh(t), e = Lm(e), Lh(i), MA)
    try {
      return Hf(t, e, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw new OA("Accessors not supported");
  return "value" in i && (t[e] = i.value), t;
};
var BA = Br, $A = lf, UA = R0, q0 = BA ? function(r, t, e) {
  return $A.f(r, t, UA(1, e));
} : function(r, t, e) {
  return r[t] = e, r;
}, X0 = { exports: {} }, op = Br, HA = $r, Y0 = Function.prototype, jA = op && Object.getOwnPropertyDescriptor, jg = HA(Y0, "name"), zA = jg && (function() {
}).name === "something", GA = jg && (!op || op && jA(Y0, "name").configurable), VA = {
  EXISTS: jg,
  PROPER: zA,
  CONFIGURABLE: GA
}, WA = Mn, qA = qi, lp = Hg, XA = WA(Function.toString);
qA(lp.inspectSource) || (lp.inspectSource = function(r) {
  return XA(r);
});
var YA = lp.inspectSource, KA = Wi, ZA = qi, km = KA.WeakMap, JA = ZA(km) && /native code/.test(String(km)), QA = j0, t1 = z0, Im = QA("keys"), e1 = function(r) {
  return Im[r] || (Im[r] = t1(r));
}, K0 = {}, i1 = JA, Z0 = Wi, n1 = Ah, s1 = q0, Vf = $r, Wf = Hg, r1 = e1, a1 = K0, Fm = "Object already initialized", cp = Z0.TypeError, o1 = Z0.WeakMap, fd, Zo, pd, l1 = function(r) {
  return pd(r) ? Zo(r) : fd(r, {});
}, c1 = function(r) {
  return function(t) {
    var e;
    if (!n1(t) || (e = Zo(t)).type !== r)
      throw new cp("Incompatible receiver, " + r + " required");
    return e;
  };
};
if (i1 || Wf.state) {
  var wi = Wf.state || (Wf.state = new o1());
  wi.get = wi.get, wi.has = wi.has, wi.set = wi.set, fd = function(r, t) {
    if (wi.has(r))
      throw new cp(Fm);
    return t.facade = r, wi.set(r, t), t;
  }, Zo = function(r) {
    return wi.get(r) || {};
  }, pd = function(r) {
    return wi.has(r);
  };
} else {
  var Gr = r1("state");
  a1[Gr] = !0, fd = function(r, t) {
    if (Vf(r, Gr))
      throw new cp(Fm);
    return t.facade = r, s1(r, Gr, t), t;
  }, Zo = function(r) {
    return Vf(r, Gr) ? r[Gr] : {};
  }, pd = function(r) {
    return Vf(r, Gr);
  };
}
var h1 = {
  set: fd,
  get: Zo,
  has: pd,
  enforce: l1,
  getterFor: c1
}, zg = Mn, d1 = gs, u1 = qi, kh = $r, hp = Br, f1 = VA.CONFIGURABLE, p1 = YA, J0 = h1, g1 = J0.enforce, m1 = J0.get, Mm = String, $h = Object.defineProperty, v1 = zg("".slice), b1 = zg("".replace), y1 = zg([].join), w1 = hp && !d1(function() {
  return $h(function() {
  }, "length", { value: 8 }).length !== 8;
}), A1 = String(String).split("String"), _1 = X0.exports = function(r, t, e) {
  v1(Mm(t), 0, 7) === "Symbol(" && (t = "[" + b1(Mm(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!kh(r, "name") || f1 && r.name !== t) && (hp ? $h(r, "name", { value: t, configurable: !0 }) : r.name = t), w1 && e && kh(e, "arity") && r.length !== e.arity && $h(r, "length", { value: e.arity });
  try {
    e && kh(e, "constructor") && e.constructor ? hp && $h(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var i = g1(r);
  return kh(i, "source") || (i.source = y1(A1, typeof t == "string" ? t : "")), r;
};
Function.prototype.toString = _1(function() {
  return u1(this) && m1(this).source || p1(this);
}, "toString");
var E1 = X0.exports, x1 = qi, S1 = lf, C1 = E1, T1 = Ug, P1 = function(r, t, e, i) {
  i || (i = {});
  var n = i.enumerable, s = i.name !== void 0 ? i.name : t;
  if (x1(e) && C1(e, s, i), i.global)
    n ? r[t] = e : T1(t, e);
  else {
    try {
      i.unsafe ? r[t] && (n = !0) : delete r[t];
    } catch {
    }
    n ? r[t] = e : S1.f(r, t, {
      value: e,
      enumerable: !1,
      configurable: !i.nonConfigurable,
      writable: !i.nonWritable
    });
  }
  return r;
}, Q0 = {}, R1 = Math.ceil, L1 = Math.floor, k1 = Math.trunc || function(t) {
  var e = +t;
  return (e > 0 ? L1 : R1)(e);
}, I1 = k1, tv = function(r) {
  var t = +r;
  return t !== t || t === 0 ? 0 : I1(t);
}, F1 = tv, M1 = Math.max, D1 = Math.min, O1 = function(r, t) {
  var e = F1(r);
  return e < 0 ? M1(e + t, 0) : D1(e, t);
}, N1 = tv, B1 = Math.min, $1 = function(r) {
  var t = N1(r);
  return t > 0 ? B1(t, 9007199254740991) : 0;
}, U1 = $1, H1 = function(r) {
  return U1(r.length);
}, j1 = $g, z1 = O1, G1 = H1, Dm = function(r) {
  return function(t, e, i) {
    var n = j1(t), s = G1(n);
    if (s === 0)
      return !r && -1;
    var a = z1(i, s), l;
    if (r && e !== e) {
      for (; s > a; )
        if (l = n[a++], l !== l)
          return !0;
    } else
      for (; s > a; a++)
        if ((r || a in n) && n[a] === e)
          return r || a || 0;
    return !r && -1;
  };
}, V1 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Dm(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Dm(!1)
}, W1 = Mn, qf = $r, q1 = $g, X1 = V1.indexOf, Y1 = K0, Om = W1([].push), K1 = function(r, t) {
  var e = q1(r), i = 0, n = [], s;
  for (s in e)
    !qf(Y1, s) && qf(e, s) && Om(n, s);
  for (; t.length > i; )
    qf(e, s = t[i++]) && (~X1(n, s) || Om(n, s));
  return n;
}, Z1 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], J1 = K1, Q1 = Z1, t_ = Q1.concat("length", "prototype");
Q0.f = Object.getOwnPropertyNames || function(t) {
  return J1(t, t_);
};
var ev = {};
ev.f = Object.getOwnPropertySymbols;
var e_ = D0, i_ = Mn, n_ = Q0, s_ = ev, r_ = W0, a_ = i_([].concat), o_ = e_("Reflect", "ownKeys") || function(t) {
  var e = n_.f(r_(t)), i = s_.f;
  return i ? a_(e, i(t)) : e;
}, Nm = $r, l_ = o_, c_ = Ng, h_ = lf, d_ = function(r, t, e) {
  for (var i = l_(t), n = h_.f, s = c_.f, a = 0; a < i.length; a++) {
    var l = i[a];
    !Nm(r, l) && !(e && Nm(e, l)) && n(r, l, s(t, l));
  }
}, u_ = gs, f_ = qi, p_ = /#|\.prototype\./, _h = function(r, t) {
  var e = m_[g_(r)];
  return e === b_ ? !0 : e === v_ ? !1 : f_(t) ? u_(t) : !!t;
}, g_ = _h.normalize = function(r) {
  return String(r).replace(p_, ".").toLowerCase();
}, m_ = _h.data = {}, v_ = _h.NATIVE = "N", b_ = _h.POLYFILL = "P", y_ = _h, Ih = Wi, w_ = Ng.f, A_ = q0, __ = P1, E_ = Ug, x_ = d_, S_ = y_, C_ = function(r, t) {
  var e = r.target, i = r.global, n = r.stat, s, a, l, c, d, h;
  if (i ? a = Ih : n ? a = Ih[e] || E_(e, {}) : a = Ih[e] && Ih[e].prototype, a)
    for (l in t) {
      if (d = t[l], r.dontCallGetSet ? (h = w_(a, l), c = h && h.value) : c = a[l], s = S_(i ? l : e + (n ? "." : "#") + l, r.forced), !s && c !== void 0) {
        if (typeof d == typeof c)
          continue;
        x_(d, c);
      }
      (r.sham || c && c.sham) && A_(d, "sham", !0), __(a, l, d, r);
    }
}, iv = {}, Bm = U0, T_ = TypeError, P_ = function(r) {
  var t, e;
  this.promise = new r(function(i, n) {
    if (t !== void 0 || e !== void 0)
      throw new T_("Bad Promise constructor");
    t = i, e = n;
  }), this.resolve = Bm(t), this.reject = Bm(e);
};
iv.f = function(r) {
  return new P_(r);
};
var R_ = C_, L_ = iv;
R_({ target: "Promise", stat: !0 }, {
  withResolvers: function() {
    var t = L_.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
const k_ = "Document {{ currentFileNo }} of {{ allFilesCount }}", I_ = "No renderer for file type: {{{ fileType }}}", F_ = "Download file", M_ = "Your file is broken. Please check it on your machine.", D_ = "Recipients", O_ = "Sender", N_ = "Loading...", B_ = "Page {{ currentPage }}/{{ allPagesCount }}", $_ = {
  documentNavInfo: k_,
  noRendererMessage: I_,
  downloadButtonLabel: F_,
  brokenFile: M_,
  msgPluginRecipients: D_,
  msgPluginSender: O_,
  pdfPluginLoading: N_,
  pdfPluginPageNumber: B_
}, U_ = "Dokument {{ currentFileNo }} z {{ allFilesCount }}", H_ = "Brak funckji renderującej dla: {{{ fileType }}}", j_ = "Pobierz plik", z_ = "Twój plik jest uszkodzony. Sprawdź go na swoim komputerze.", G_ = "Odbiorcy", V_ = "Nadawca", W_ = "Wczytywanie...", q_ = "Strona {{ currentPage }}/{{ allPagesCount }}", X_ = {
  documentNavInfo: U_,
  noRendererMessage: H_,
  downloadButtonLabel: j_,
  brokenFile: z_,
  msgPluginRecipients: G_,
  msgPluginSender: V_,
  pdfPluginLoading: W_,
  pdfPluginPageNumber: q_
}, Y_ = "Documento {{ currentFileNo }} de {{ allFilesCount }}", K_ = "No hay procesador para el tipo de archivo: {{{ fileType }}}", Z_ = "Descargar archivo", J_ = "Tu archivo está roto. Compruébalo en tu máquina.", Q_ = "Destinatarios", tE = "Remitente", eE = "Cargando...", iE = "Página {{ currentPage }}/{{ allPagesCount }}", nE = {
  documentNavInfo: Y_,
  noRendererMessage: K_,
  downloadButtonLabel: Z_,
  brokenFile: J_,
  msgPluginRecipients: Q_,
  msgPluginSender: tE,
  pdfPluginLoading: eE,
  pdfPluginPageNumber: iE
}, sE = "Dokument {{ currentFileNo }} von {{ allFilesCount }}", rE = "Kein Renderer für Dateityp: {{{ fileType }}}", aE = "Datei herunterladen", oE = "Ihre Datei ist defekt. Bitte überprüfen Sie sie auf Ihrem Rechner.", lE = "Empfänger", cE = "Absender", hE = "Wird geladen...", dE = "Seite {{ currentPage }}/{{ allPagesCount }}", uE = {
  documentNavInfo: sE,
  noRendererMessage: rE,
  downloadButtonLabel: aE,
  brokenFile: oE,
  msgPluginRecipients: lE,
  msgPluginSender: cE,
  pdfPluginLoading: hE,
  pdfPluginPageNumber: dE
}, fE = "Documento {{ currentFileNo }} di {{ allFilesCount }}", pE = "Nessun renderer per il tipo di file: {{{ fileType }}}", gE = "Scarica file", mE = "Il tuo file è danneggiato. Controllalo sul tuo computer.", vE = "Destinatari", bE = "Mittente", yE = "Caricamento in corso...", wE = "Pagina {{ currentPage }}/{{ allPagesCount }}", AE = {
  documentNavInfo: fE,
  noRendererMessage: pE,
  downloadButtonLabel: gE,
  brokenFile: mE,
  msgPluginRecipients: vE,
  msgPluginSender: bE,
  pdfPluginLoading: yE,
  pdfPluginPageNumber: wE
}, _E = "Documento {{ currentFileNo }} de {{ allFilesCount }}", EE = "Nenhum renderizador para o tipo de arquivo: {{{ fileType }}}", xE = "Baixar arquivo", SE = "Seu arquivo está quebrado. Por favor, verifique-o em sua máquina.", CE = "Destinatários", TE = "Remetente", PE = "Carregando...", RE = "Página {{ currentPage }}/{{ allPagesCount }}", LE = {
  documentNavInfo: _E,
  noRendererMessage: EE,
  downloadButtonLabel: xE,
  brokenFile: SE,
  msgPluginRecipients: CE,
  msgPluginSender: TE,
  pdfPluginLoading: PE,
  pdfPluginPageNumber: RE
}, kE = "Document {{ currentFileNo }} de {{ allFilesCount }}", IE = "Aucun moteur de rendu pour le type de fichier : {{{ fileType }}}", FE = "Télécharger le fichier", ME = "Votre fichier est cassé. Veuillez le vérifier sur votre machine.", DE = "Destinataires", OE = "Expéditeur", NE = "Chargement...", BE = "Page {{ currentPage }}/{{ allPagesCount }}", $E = {
  documentNavInfo: kE,
  noRendererMessage: IE,
  downloadButtonLabel: FE,
  brokenFile: ME,
  msgPluginRecipients: DE,
  msgPluginSender: OE,
  pdfPluginLoading: NE,
  pdfPluginPageNumber: BE
}, UE = "مستند {{ currentFileNo }} من {{ allFilesCount }}", HE = "{{{ fileType }}} : لا يمكننا عرض هذا النوع من الملفات", jE = "تحميل الملف", zE = "الملف تالف، يرجى التحقق منه على جهازك الخاص.", GE = "المستلمين", VE = "المرسل", WE = "تحميل ...", qE = " {{ allPagesCount }} \\ {{ currentPage }} صفحة ", XE = {
  documentNavInfo: UE,
  noRendererMessage: HE,
  downloadButtonLabel: jE,
  brokenFile: zE,
  msgPluginRecipients: GE,
  msgPluginSender: VE,
  pdfPluginLoading: WE,
  pdfPluginPageNumber: qE
}, YE = "Dokument {{ currentFileNo }} od {{ allFilesCount }}", KE = "Ne postoji pregledač za tip fajla: {{ fileType }}", ZE = "Preuzimanje fajla", JE = "Vaš fajl nije dobar. Molimo Vas da probate da ga otvorite na vašem računaru.", QE = "Primaoci", tx = "Pošiljalac", ex = "Učitavanje...", ix = "Strana {{ currentPage }}/{{ allPagesCount }}", nx = {
  documentNavInfo: YE,
  noRendererMessage: KE,
  downloadButtonLabel: ZE,
  brokenFile: JE,
  msgPluginRecipients: QE,
  msgPluginSender: tx,
  pdfPluginLoading: ex,
  pdfPluginPageNumber: ix
}, sx = "Документ {{ currentFileNo }} od {{ allFilesCount }}", rx = "Не постоји прегледач за тип фајла: {{ fileType }}", ax = "Преузимање фајла", ox = "Ваш фајл није добар. Молимо Вас да пробате да га отворите на вашем рачунару.", lx = "Примаоци", cx = "Пошиљалац", hx = "Учитавање...", dx = "Страна {{ currentPage }}/{{ allPagesCount }}", ux = {
  documentNavInfo: sx,
  noRendererMessage: rx,
  downloadButtonLabel: ax,
  brokenFile: ox,
  msgPluginRecipients: lx,
  msgPluginSender: cx,
  pdfPluginLoading: hx,
  pdfPluginPageNumber: dx
}, fx = "ファイル {{ currentFileNo }} / {{ allFilesCount }}", px = "ファイルタイプに対応したレンダラーはありません: {{ fileType }}", gx = "ダウンロード", mx = "ファイルが壊れています。あなたのマシンでファイルを確認してください。", vx = "受信者", bx = "送信者", yx = "ローティング中...", wx = "ページ {{ currentPage }}/{{ allPagesCount }}", Ax = {
  documentNavInfo: fx,
  noRendererMessage: px,
  downloadButtonLabel: gx,
  brokenFile: mx,
  msgPluginRecipients: vx,
  msgPluginSender: bx,
  pdfPluginLoading: yx,
  pdfPluginPageNumber: wx
}, _x = "Документ {{ currentFileNo }} из {{ allFilesCount }}", Ex = "Данный тип файла не поддерживается рендером: {{{ fileType }}}", xx = "Скачать файл", Sx = "Ваш файл сломан. Пожалуйста, проверьте его на своём комьютере.", Cx = "Получатели", Tx = "Отправитель", Px = "Загрузка...", Rx = "Страница {{ currentPage }}/{{ allPagesCount }}", Lx = {
  documentNavInfo: _x,
  noRendererMessage: Ex,
  downloadButtonLabel: xx,
  brokenFile: Sx,
  msgPluginRecipients: Cx,
  msgPluginSender: Tx,
  pdfPluginLoading: Px,
  pdfPluginPageNumber: Rx
}, kx = "Dokument {{ currentFileNo }} av {{ allFilesCount }}", Ix = "Ingen renderare för filtypen: {{{ fileType }}}", Fx = "Ladda ner", Mx = "Filen är trasig. Var vänlig kontrollera den på din maskin.", Dx = "Mottagare", Ox = "Avsändare", Nx = "Laddar...", Bx = "Sida {{ currentPage }}/{{ allPagesCount }}", $x = {
  documentNavInfo: kx,
  noRendererMessage: Ix,
  downloadButtonLabel: Fx,
  brokenFile: Mx,
  msgPluginRecipients: Dx,
  msgPluginSender: Ox,
  pdfPluginLoading: Nx,
  pdfPluginPageNumber: Bx
}, gd = {
  en: $_,
  pl: X_,
  es: nE,
  de: uE,
  it: AE,
  pt: LE,
  fr: $E,
  ar: XE,
  sr: nx,
  sr_cyr: ux,
  ja: Ax,
  ru: Lx,
  se: $x
}, HL = Object.keys(gd), Gg = "en", nv = "SET_ALL_DOCUMENTS", sv = "SET_DOCUMENT_LOADING", rv = "NEXT_DOCUMENT", av = "PREVIOUS_DOCUMENT", ov = "UPDATE_CURRENT_DOCUMENT", lv = "SET_RENDERER_RECT", cv = "SET_MAIN_CONFIG", Ux = (r, t) => ({
  type: nv,
  documents: r,
  initialActiveDocument: t
}), Xf = (r) => ({
  type: sv,
  value: r
}), Vg = () => ({ type: rv }), Wg = () => ({
  type: av
}), dp = (r) => ({ type: ov, document: r }), Hx = (r) => ({
  type: lv,
  rect: r
}), jx = (r) => ({
  type: cv,
  config: r
}), md = {
  currentFileNo: 0,
  documents: [],
  documentLoading: !0,
  currentDocument: void 0,
  rendererRect: void 0,
  config: {},
  pluginRenderers: [],
  language: Gg
}, zx = (r = md, t) => {
  switch (t.type) {
    case nv: {
      const { documents: e, initialActiveDocument: i } = t;
      return {
        ...r,
        documents: e,
        currentDocument: i || e[0] || null,
        currentFileNo: i && e.includes(i) ? e.indexOf(i) : md.currentFileNo
      };
    }
    case sv: {
      const { value: e } = t;
      return { ...r, documentLoading: e };
    }
    case rv: {
      if (r.currentFileNo >= r.documents.length - 1)
        return r;
      const e = r.currentFileNo + 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: e,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case av: {
      if (r.currentFileNo <= 0)
        return r;
      const e = r.currentFileNo - 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: r.currentFileNo - 1,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case ov: {
      const { document: e } = t;
      return {
        ...r,
        currentDocument: e,
        currentFileNo: r.documents.findIndex(
          (i) => i.uri === e.uri
        )
      };
    }
    case lv: {
      const { rect: e } = t;
      return {
        ...r,
        rendererRect: e
      };
    }
    case cv: {
      const { config: e } = t;
      return {
        ...r,
        config: e
      };
    }
    default:
      return r;
  }
}, ms = of({ state: md, dispatch: () => null }), Gx = Dg((r, t) => {
  const {
    children: e,
    documents: i,
    config: n,
    pluginRenderers: s,
    prefetchMethod: a,
    requestHeaders: l,
    initialActiveDocument: c,
    language: d,
    activeDocument: h,
    onDocumentChange: p
  } = r, [g, v] = Og(zx, {
    ...md,
    documents: i || [],
    currentDocument: i && i.length ? c || i[0] : void 0,
    config: n,
    pluginRenderers: s,
    prefetchMethod: a,
    requestHeaders: l,
    currentFileNo: c ? i.findIndex((b) => b === c) ?? 0 : 0,
    language: d && gd[d] ? d : Gg,
    activeDocument: h,
    onDocumentChange: p
  });
  return bt(() => {
    v(Ux(i, c)), n && v(jx(n));
  }, [i, n, c]), bt(() => {
    h && v(dp(h));
  }, [h]), _0(
    t,
    () => ({
      prev() {
        v(Wg());
      },
      next() {
        v(Vg());
      }
    }),
    [v]
  ), /* @__PURE__ */ O(ms.Provider, { value: { state: g, dispatch: v }, children: e });
}), Vx = E0`
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
`, Wx = E0`
  background-color: ${(r) => r.theme.secondary};
  color: ${(r) => r.theme.textSecondary};
`, cf = gt.button`
  ${Vx}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(r) => r.disabled ? 0.4 : 1};
  pointer-events: ${(r) => r.disabled ? "none" : "all"};
  box-shadow: 2px 2px 3px #00000033;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`, hv = gt.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
  box-shadow: 2px 2px 3px #00000033;

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
gt(cf)``;
const qx = gt(cf)`
  ${Wx}
`, Xx = (r) => /* @__PURE__ */ O(dv, { ...r }), Yx = (r) => /* @__PURE__ */ O(dv, { ...r, reverse: !0 }), dv = ({ color: r, size: t, reverse: e }) => /* @__PURE__ */ O(
  "svg",
  {
    width: t || "100%",
    height: t || "100%",
    style: { transform: `${e ? "rotate(180deg)" : ""}` },
    id: "arrow_left",
    version: "1.1",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ O(
      "path",
      {
        clipRule: "evenodd",
        d: "M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z",
        fill: r || "#aaa",
        fillRule: "evenodd",
        id: "Arrow_Back"
      }
    )
  }
), Kx = (r) => {
  const { color: t, size: e } = r;
  return /* @__PURE__ */ O(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      version: "1.1",
      id: "Icons",
      viewBox: "0 0 32 32",
      xmlSpace: "preserve",
      style: { alignSelf: "center", justifySelf: "center" },
      children: /* @__PURE__ */ Ke("g", { children: [
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,2c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1V3C17,2.4,16.6,2,16,2z"
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: `M7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1
		z`
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: "M9,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h5C8.6,17,9,16.6,9,16z"
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: `M9.6,20.9l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4
		S10,20.6,9.6,20.9z`
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,23c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5C17,23.4,16.6,23,16,23z"
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: `M22.4,20.9c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4
		L22.4,20.9z`
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: "M29,15h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5c0.6,0,1-0.4,1-1S29.6,15,29,15z"
          }
        ),
        /* @__PURE__ */ O(
          "path",
          {
            fill: t || "#aaa",
            d: `M21.7,11.3c0.3,0,0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4
		C21.1,11.2,21.4,11.3,21.7,11.3z`
          }
        )
      ] })
    }
  );
};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Zx = Object.prototype.toString, Co = Array.isArray || function(t) {
  return Zx.call(t) === "[object Array]";
};
function qg(r) {
  return typeof r == "function";
}
function Jx(r) {
  return Co(r) ? "array" : typeof r;
}
function Yf(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function $m(r, t) {
  return r != null && typeof r == "object" && t in r;
}
function Qx(r, t) {
  return r != null && typeof r != "object" && r.hasOwnProperty && r.hasOwnProperty(t);
}
var tS = RegExp.prototype.test;
function eS(r, t) {
  return tS.call(r, t);
}
var iS = /\S/;
function nS(r) {
  return !eS(iS, r);
}
var sS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function rS(r) {
  return String(r).replace(/[&<>"'`=\/]/g, function(e) {
    return sS[e];
  });
}
var aS = /\s*/, oS = /\s+/, Um = /\s*=/, lS = /\s*\}/, cS = /#|\^|\/|>|\{|&|=|!/;
function hS(r, t) {
  if (!r)
    return [];
  var e = !1, i = [], n = [], s = [], a = !1, l = !1, c = "", d = 0;
  function h() {
    if (a && !l)
      for (; s.length; )
        delete n[s.pop()];
    else
      s = [];
    a = !1, l = !1;
  }
  var p, g, v;
  function b(S) {
    if (typeof S == "string" && (S = S.split(oS, 2)), !Co(S) || S.length !== 2)
      throw new Error("Invalid tags: " + S);
    p = new RegExp(Yf(S[0]) + "\\s*"), g = new RegExp("\\s*" + Yf(S[1])), v = new RegExp("\\s*" + Yf("}" + S[1]));
  }
  b(t || Ye.tags);
  for (var _ = new Eh(r), C, E, R, L, M, D; !_.eos(); ) {
    if (C = _.pos, R = _.scanUntil(p), R)
      for (var N = 0, U = R.length; N < U; ++N)
        L = R.charAt(N), nS(L) ? (s.push(n.length), c += L) : (l = !0, e = !0, c += " "), n.push(["text", L, C, C + 1]), C += 1, L === `
` && (h(), c = "", d = 0, e = !1);
    if (!_.scan(p))
      break;
    if (a = !0, E = _.scan(cS) || "name", _.scan(aS), E === "=" ? (R = _.scanUntil(Um), _.scan(Um), _.scanUntil(g)) : E === "{" ? (R = _.scanUntil(v), _.scan(lS), _.scanUntil(g), E = "&") : R = _.scanUntil(g), !_.scan(g))
      throw new Error("Unclosed tag at " + _.pos);
    if (E == ">" ? M = [E, R, C, _.pos, c, d, e] : M = [E, R, C, _.pos], d++, n.push(M), E === "#" || E === "^")
      i.push(M);
    else if (E === "/") {
      if (D = i.pop(), !D)
        throw new Error('Unopened section "' + R + '" at ' + C);
      if (D[1] !== R)
        throw new Error('Unclosed section "' + D[1] + '" at ' + C);
    } else
      E === "name" || E === "{" || E === "&" ? l = !0 : E === "=" && b(R);
  }
  if (h(), D = i.pop(), D)
    throw new Error('Unclosed section "' + D[1] + '" at ' + _.pos);
  return uS(dS(n));
}
function dS(r) {
  for (var t = [], e, i, n = 0, s = r.length; n < s; ++n)
    e = r[n], e && (e[0] === "text" && i && i[0] === "text" ? (i[1] += e[1], i[3] = e[3]) : (t.push(e), i = e));
  return t;
}
function uS(r) {
  for (var t = [], e = t, i = [], n, s, a = 0, l = r.length; a < l; ++a)
    switch (n = r[a], n[0]) {
      case "#":
      case "^":
        e.push(n), i.push(n), e = n[4] = [];
        break;
      case "/":
        s = i.pop(), s[5] = n[2], e = i.length > 0 ? i[i.length - 1][4] : t;
        break;
      default:
        e.push(n);
    }
  return t;
}
function Eh(r) {
  this.string = r, this.tail = r, this.pos = 0;
}
Eh.prototype.eos = function() {
  return this.tail === "";
};
Eh.prototype.scan = function(t) {
  var e = this.tail.match(t);
  if (!e || e.index !== 0)
    return "";
  var i = e[0];
  return this.tail = this.tail.substring(i.length), this.pos += i.length, i;
};
Eh.prototype.scanUntil = function(t) {
  var e = this.tail.search(t), i;
  switch (e) {
    case -1:
      i = this.tail, this.tail = "";
      break;
    case 0:
      i = "";
      break;
    default:
      i = this.tail.substring(0, e), this.tail = this.tail.substring(e);
  }
  return this.pos += i.length, i;
};
function xo(r, t) {
  this.view = r, this.cache = { ".": this.view }, this.parent = t;
}
xo.prototype.push = function(t) {
  return new xo(t, this);
};
xo.prototype.lookup = function(t) {
  var e = this.cache, i;
  if (e.hasOwnProperty(t))
    i = e[t];
  else {
    for (var n = this, s, a, l, c = !1; n; ) {
      if (t.indexOf(".") > 0)
        for (s = n.view, a = t.split("."), l = 0; s != null && l < a.length; )
          l === a.length - 1 && (c = $m(s, a[l]) || Qx(s, a[l])), s = s[a[l++]];
      else
        s = n.view[t], c = $m(n.view, t);
      if (c) {
        i = s;
        break;
      }
      n = n.parent;
    }
    e[t] = i;
  }
  return qg(i) && (i = i.call(this.view)), i;
};
function Re() {
  this.templateCache = {
    _cache: {},
    set: function(t, e) {
      this._cache[t] = e;
    },
    get: function(t) {
      return this._cache[t];
    },
    clear: function() {
      this._cache = {};
    }
  };
}
Re.prototype.clearCache = function() {
  typeof this.templateCache < "u" && this.templateCache.clear();
};
Re.prototype.parse = function(t, e) {
  var i = this.templateCache, n = t + ":" + (e || Ye.tags).join(":"), s = typeof i < "u", a = s ? i.get(n) : void 0;
  return a == null && (a = hS(t, e), s && i.set(n, a)), a;
};
Re.prototype.render = function(t, e, i, n) {
  var s = this.getConfigTags(n), a = this.parse(t, s), l = e instanceof xo ? e : new xo(e, void 0);
  return this.renderTokens(a, l, i, t, n);
};
Re.prototype.renderTokens = function(t, e, i, n, s) {
  for (var a = "", l, c, d, h = 0, p = t.length; h < p; ++h)
    d = void 0, l = t[h], c = l[0], c === "#" ? d = this.renderSection(l, e, i, n, s) : c === "^" ? d = this.renderInverted(l, e, i, n, s) : c === ">" ? d = this.renderPartial(l, e, i, s) : c === "&" ? d = this.unescapedValue(l, e) : c === "name" ? d = this.escapedValue(l, e, s) : c === "text" && (d = this.rawValue(l)), d !== void 0 && (a += d);
  return a;
};
Re.prototype.renderSection = function(t, e, i, n, s) {
  var a = this, l = "", c = e.lookup(t[1]);
  function d(g) {
    return a.render(g, e, i, s);
  }
  if (c) {
    if (Co(c))
      for (var h = 0, p = c.length; h < p; ++h)
        l += this.renderTokens(t[4], e.push(c[h]), i, n, s);
    else if (typeof c == "object" || typeof c == "string" || typeof c == "number")
      l += this.renderTokens(t[4], e.push(c), i, n, s);
    else if (qg(c)) {
      if (typeof n != "string")
        throw new Error("Cannot use higher-order sections without the original template");
      c = c.call(e.view, n.slice(t[3], t[5]), d), c != null && (l += c);
    } else
      l += this.renderTokens(t[4], e, i, n, s);
    return l;
  }
};
Re.prototype.renderInverted = function(t, e, i, n, s) {
  var a = e.lookup(t[1]);
  if (!a || Co(a) && a.length === 0)
    return this.renderTokens(t[4], e, i, n, s);
};
Re.prototype.indentPartial = function(t, e, i) {
  for (var n = e.replace(/[^ \t]/g, ""), s = t.split(`
`), a = 0; a < s.length; a++)
    s[a].length && (a > 0 || !i) && (s[a] = n + s[a]);
  return s.join(`
`);
};
Re.prototype.renderPartial = function(t, e, i, n) {
  if (i) {
    var s = this.getConfigTags(n), a = qg(i) ? i(t[1]) : i[t[1]];
    if (a != null) {
      var l = t[6], c = t[5], d = t[4], h = a;
      c == 0 && d && (h = this.indentPartial(a, d, l));
      var p = this.parse(h, s);
      return this.renderTokens(p, e, i, h, n);
    }
  }
};
Re.prototype.unescapedValue = function(t, e) {
  var i = e.lookup(t[1]);
  if (i != null)
    return i;
};
Re.prototype.escapedValue = function(t, e, i) {
  var n = this.getConfigEscape(i) || Ye.escape, s = e.lookup(t[1]);
  if (s != null)
    return typeof s == "number" && n === Ye.escape ? String(s) : n(s);
};
Re.prototype.rawValue = function(t) {
  return t[1];
};
Re.prototype.getConfigTags = function(t) {
  return Co(t) ? t : t && typeof t == "object" ? t.tags : void 0;
};
Re.prototype.getConfigEscape = function(t) {
  if (t && typeof t == "object" && !Co(t))
    return t.escape;
};
var Ye = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(r) {
    Jo.templateCache = r;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return Jo.templateCache;
  }
}, Jo = new Re();
Ye.clearCache = function() {
  return Jo.clearCache();
};
Ye.parse = function(t, e) {
  return Jo.parse(t, e);
};
Ye.render = function(t, e, i, n) {
  if (typeof t != "string")
    throw new TypeError('Invalid template! Template should be a "string" but "' + Jx(t) + '" was given as the first argument for mustache#render(template, view, partials)');
  return Jo.render(t, e, i, n);
};
Ye.escape = rS;
Ye.Scanner = Eh;
Ye.Context = xo;
Ye.Writer = Re;
const Ur = () => {
  const {
    state: { language: r }
  } = Be(ms), t = gd[Gg];
  return {
    t: _o(
      (i, n) => {
        const s = gd[r];
        return s[i] ? Ye.render(s[i], n) : t[i] ? Ye.render(t[i], n) : i;
      },
      [r, t]
    )
  };
}, fS = () => {
  const {
    state: { currentDocument: r, currentFileNo: t, documents: e },
    dispatch: i
  } = Be(ms), { t: n } = Ur();
  if (e.length <= 1 || !r)
    return null;
  let s = r.uri || "";
  const a = s == null ? void 0 : s.split("/");
  return a.length && (s = a[a.length - 1]), /* @__PURE__ */ Ke(pS, { id: "doc-nav", children: [
    /* @__PURE__ */ O("p", { id: "doc-nav-info", children: n("documentNavInfo", {
      currentFileNo: t + 1,
      allFilesCount: e.length
    }) }),
    /* @__PURE__ */ O(
      uv,
      {
        id: "doc-nav-prev",
        onClick: () => i(Wg()),
        disabled: t === 0,
        children: /* @__PURE__ */ O(Xx, { color: "#fff", size: "60%" })
      }
    ),
    /* @__PURE__ */ O(
      gS,
      {
        id: "doc-nav-next",
        onClick: () => i(Vg()),
        disabled: t >= e.length - 1,
        children: /* @__PURE__ */ O(Yx, { color: "#fff", size: "60%" })
      }
    )
  ] });
}, pS = gt.div`
  min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  color: ${(r) => r.theme.textPrimary};
`, uv = gt(qx)`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, gS = gt(uv)`
  margin: 0 5px;
`, fv = (r, t) => {
  var i;
  if (!r)
    return "";
  let e = "";
  if (r.fileName)
    e = r.fileName;
  else {
    e = r.uri || "", e = decodeURI(e), t || (e = (i = e == null ? void 0 : e.split("?")) == null ? void 0 : i[0]);
    const n = e == null ? void 0 : e.split("/");
    n.length && (e = n[n.length - 1]);
  }
  return e;
}, mS = () => {
  var i, n;
  const {
    state: { config: r, currentDocument: t }
  } = Be(ms);
  if (!t || (i = r == null ? void 0 : r.header) != null && i.disableFileName)
    return null;
  const e = fv(
    t,
    ((n = r == null ? void 0 : r.header) == null ? void 0 : n.retainURLParams) || !1
  );
  return /* @__PURE__ */ O(vS, { id: "file-name", "data-testid": "file-name", children: e });
}, vS = gt.div`
  flex: 1;
  text-align: left;
  color: ${(r) => r.theme.textPrimary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`, bS = () => {
  var n, s, a;
  const { state: r, dispatch: t } = Be(ms), { config: e } = r;
  if ((n = e == null ? void 0 : e.header) != null && n.disableHeader)
    return null;
  const i = (a = (s = e == null ? void 0 : e.header) == null ? void 0 : s.overrideComponent) == null ? void 0 : a.call(
    s,
    r,
    () => t(Wg()),
    () => t(Vg())
  );
  return i || /* @__PURE__ */ Ke(yS, { id: "header-bar", "data-testid": "header-bar", children: [
    /* @__PURE__ */ O(mS, {}),
    /* @__PURE__ */ O(fS, {})
  ] });
}, yS = gt.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(r) => r.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`, hf = ({
  documentURI: r,
  signal: t,
  fileLoaderComplete: e,
  readerTypeFunction: i,
  headers: n
}) => fetch(r, { signal: t, headers: n }).then(async (s) => {
  const a = await s.blob(), l = new FileReader();
  switch (l.addEventListener(
    "loadend",
    () => e(l)
  ), i) {
    case "arrayBuffer":
      l.readAsArrayBuffer(a);
      break;
    case "binaryString":
      l.readAsBinaryString(a);
      break;
    case "dataURL":
      l.readAsDataURL(a);
      break;
    case "text":
      l.readAsText(a);
      break;
  }
}).catch((s) => s), wS = (r) => hf({ ...r, readerTypeFunction: "arrayBuffer" }), pv = (r) => hf({ ...r, readerTypeFunction: "dataURL" }), gv = (r) => hf({ ...r, readerTypeFunction: "text" }), jL = (r) => hf({ ...r, readerTypeFunction: "binaryString" }), AS = pv, _S = () => {
  const {
    state: { currentDocument: r, pluginRenderers: t }
  } = Be(ms), [e, i] = Eo();
  return bt(() => {
    if (!r)
      return;
    if (!r.fileType) {
      i(void 0);
      return;
    }
    const n = [];
    t == null || t.forEach((a) => {
      r.fileType !== void 0 && a.fileTypes.indexOf(r.fileType) >= 0 && n.push(a);
    });
    const [s] = n.sort(
      (a, l) => l.weight - a.weight
    );
    i(s && s !== void 0 ? () => s : null);
  }, [r, t]), { CurrentRenderer: e };
}, ES = () => {
  const { state: r, dispatch: t } = Be(ms), { currentFileNo: e, currentDocument: i, prefetchMethod: n } = r, { CurrentRenderer: s } = _S(), a = (i == null ? void 0 : i.uri) || "";
  return bt(
    () => {
      if (!i || i.fileType !== void 0)
        return;
      const l = new AbortController(), { signal: c } = l;
      return fetch(a, {
        method: n || a.startsWith("blob:") ? "GET" : "HEAD",
        signal: c,
        headers: r == null ? void 0 : r.requestHeaders
      }).then((d) => {
        const h = d.headers.get("content-type"), p = (h == null ? void 0 : h.split(";")) || [], g = p.length ? p[0] : void 0;
        t(
          dp({
            ...i,
            fileType: g || void 0
          })
        );
      }).catch((d) => {
        if ((d == null ? void 0 : d.name) !== "AbortError")
          throw d;
      }), () => {
        l.abort();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, a, i]
  ), bt(() => {
    var p;
    if (!i || s === void 0)
      return;
    const l = new AbortController(), { signal: c } = l, h = {
      documentURI: a,
      signal: c,
      fileLoaderComplete: (g) => {
        if (!i || !g) {
          t(Xf(!1));
          return;
        }
        const v = { ...i };
        g.result !== null && (v.fileData = g.result), t(dp(v)), t(Xf(!1));
      },
      headers: r == null ? void 0 : r.requestHeaders
    };
    return s === null ? t(Xf(!1)) : s.fileLoader !== void 0 ? (p = s.fileLoader) == null || p.call(s, h) : AS(h), () => {
      l.abort();
    };
  }, [s, e]), { state: r, dispatch: t, CurrentRenderer: s };
}, xS = () => {
  const [r, t] = Eo({
    width: void 0,
    height: void 0
  });
  return bt(() => {
    function e() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
  }, []), r;
}, Hm = ({ children: r }) => {
  var s, a;
  const { state: t } = Be(ms), { config: e } = t, [i, n] = Eo(
    ((s = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : s.showLoadingTimeout) === !1
  );
  return bt(() => {
    var l;
    setTimeout(
      () => {
        n(!0);
      },
      typeof ((l = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : l.showLoadingTimeout) == "number" ? e.loadingRenderer.showLoadingTimeout : 500
    );
  }, [(a = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : a.showLoadingTimeout]), i ? /* @__PURE__ */ O(A0, { children: r }) : null;
}, SS = ({
  documents: r,
  documentLoading: t,
  config: e,
  currentDocument: i,
  fileName: n,
  CurrentRenderer: s,
  state: a,
  t: l
}) => {
  var c, d;
  if (r.length)
    if (t) {
      if (e && ((c = e == null ? void 0 : e.loadingRenderer) != null && c.overrideComponent)) {
        const h = e.loadingRenderer.overrideComponent;
        return /* @__PURE__ */ O(Hm, { children: /* @__PURE__ */ O(h, { document: i, fileName: n }) });
      }
      return /* @__PURE__ */ O(Hm, { children: /* @__PURE__ */ O(TS, { id: "loading-renderer", "data-testid": "loading-renderer", children: /* @__PURE__ */ O(RS, { children: /* @__PURE__ */ O(Kx, { color: "#444", size: 40 }) }) }) });
    } else {
      if (s)
        return /* @__PURE__ */ O(s, { mainState: a });
      if (s === void 0)
        return null;
      if (e && ((d = e == null ? void 0 : e.noRenderer) != null && d.overrideComponent)) {
        const h = e.noRenderer.overrideComponent;
        return /* @__PURE__ */ O(h, { document: i, fileName: n });
      }
      return /* @__PURE__ */ Ke("div", { id: "no-renderer", "data-testid": "no-renderer", children: [
        l("noRendererMessage", {
          fileType: (i == null ? void 0 : i.fileType) ?? ""
        }),
        /* @__PURE__ */ O(
          LS,
          {
            id: "no-renderer-download",
            href: i == null ? void 0 : i.uri,
            download: i == null ? void 0 : i.uri,
            children: l("downloadButtonLabel")
          }
        )
      ] });
    }
  else
    return /* @__PURE__ */ O("div", { id: "no-documents" });
}, CS = () => {
  var p;
  const { state: r, dispatch: t, CurrentRenderer: e } = ES(), { documents: i, documentLoading: n, currentDocument: s, config: a } = r, l = xS(), { t: c } = Ur(), d = _o(
    (g) => {
      g && t(Hx(g == null ? void 0 : g.getBoundingClientRect()));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, t]
  ), h = fv(
    s,
    ((p = a == null ? void 0 : a.header) == null ? void 0 : p.retainURLParams) || !1
  );
  return /* @__PURE__ */ O("div", { id: "proxy-renderer", "data-testid": "proxy-renderer", ref: d, children: /* @__PURE__ */ O(
    SS,
    {
      state: r,
      documents: i,
      documentLoading: n,
      config: a,
      currentDocument: s,
      fileName: h,
      CurrentRenderer: e,
      t: c
    }
  ) });
}, TS = gt.div`
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  justify-content: center;
`, PS = qy`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, RS = gt.div`
  animation-name: ${PS};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`, LS = gt(hv)`
  width: 130px;
  height: 30px;
  background-color: ${(r) => r.theme.primary};
  @media (max-width: 768px) {
    width: 125px;
    height: 25px;
  }
`, jm = {
  primary: "#fff",
  secondary: "#000",
  tertiary: "#ffffff99",
  textPrimary: "#000",
  textSecondary: "#fff",
  textTertiary: "#00000044",
  disableThemeScrollbar: !1
}, Fn = ({
  mainState: { currentDocument: r },
  children: t,
  ...e
}) => r ? /* @__PURE__ */ O(kS, { id: "image-renderer", ...e, children: t || /* @__PURE__ */ O(IS, { id: "image-img", src: r.fileData }) }) : null;
Fn.fileTypes = [];
Fn.weight = 0;
const kS = gt.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`, IS = gt.img`
  max-width: 95%;
  max-height: 95%;
`, Xg = (r) => /* @__PURE__ */ O(Fn, { ...r });
Xg.fileTypes = ["bmp", "image/bmp"];
Xg.weight = 0;
const df = ({ mainState: { currentDocument: r } }) => (bt(() => {
  const t = r == null ? void 0 : r.fileData;
  let e = "";
  const i = (t == null ? void 0 : t.replace(
    /^data:text\/html;(?:charset=([^;]*);)?base64,/,
    (c, d) => (e = d, "")
  )) || "";
  let n = window.atob(i);
  if (e) {
    const c = new Uint8Array(n.length);
    for (let d = 0; d < n.length; d++)
      c[d] = n.charCodeAt(d);
    n = new TextDecoder(e).decode(c);
  }
  const s = document.getElementById(
    "html-body"
  ), a = (s == null ? void 0 : s.contentWindow) && s.contentWindow;
  if (!a)
    return;
  const l = a.document;
  l.open(), l.write(`${n}`), l.close();
}, [r]), /* @__PURE__ */ O(FS, { id: "html-renderer", children: /* @__PURE__ */ O(MS, { id: "html-body", sandbox: "allow-same-origin" }) }));
df.fileTypes = ["htm", "html", "text/htm", "text/html"];
df.weight = 0;
df.fileLoader = pv;
const FS = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`, MS = gt.iframe`
  height: 100%;
  padding: 15px;
  margin: 20px 0 20px 0;
  border: 1px solid ${(r) => r.theme.secondary};
`, Yg = (r) => /* @__PURE__ */ O(Fn, { ...r });
Yg.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
Yg.weight = 0;
const uf = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ O(DS, { id: "msdoc-renderer", children: /* @__PURE__ */ O(
  OS,
  {
    id: "msdoc-iframe",
    title: "msdoc-iframe",
    src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      r.uri
    )}`,
    sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
    frameBorder: "0"
  }
) }) : null, bs = {
  odt: ["odt", "application/vnd.oasis.opendocument.text"],
  doc: ["doc", "application/msword"],
  docx: [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream"
  ],
  xls: ["xls", "application/vnd.ms-excel"],
  xlsx: [
    "xlsx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ],
  ppt: ["ppt", "application/vnd.ms-powerpoint"],
  pptx: [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ]
};
uf.fileTypes = [
  ...bs.odt,
  ...bs.doc,
  ...bs.docx,
  ...bs.xls,
  ...bs.xlsx,
  ...bs.ppt,
  ...bs.pptx
];
uf.weight = 0;
uf.fileLoader = ({ fileLoaderComplete: r }) => r();
const DS = gt.div`
  width: 100%;
`, OS = gt.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
function NS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var mv = { exports: {} }, Yt = mv.exports = {}, _i, Ei;
function up() {
  throw new Error("setTimeout has not been defined");
}
function fp() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _i = setTimeout : _i = up;
  } catch {
    _i = up;
  }
  try {
    typeof clearTimeout == "function" ? Ei = clearTimeout : Ei = fp;
  } catch {
    Ei = fp;
  }
})();
function vv(r) {
  if (_i === setTimeout)
    return setTimeout(r, 0);
  if ((_i === up || !_i) && setTimeout)
    return _i = setTimeout, setTimeout(r, 0);
  try {
    return _i(r, 0);
  } catch {
    try {
      return _i.call(null, r, 0);
    } catch {
      return _i.call(this, r, 0);
    }
  }
}
function BS(r) {
  if (Ei === clearTimeout)
    return clearTimeout(r);
  if ((Ei === fp || !Ei) && clearTimeout)
    return Ei = clearTimeout, clearTimeout(r);
  try {
    return Ei(r);
  } catch {
    try {
      return Ei.call(null, r);
    } catch {
      return Ei.call(this, r);
    }
  }
}
var Rn = [], ta = !1, Cs, Uh = -1;
function $S() {
  !ta || !Cs || (ta = !1, Cs.length ? Rn = Cs.concat(Rn) : Uh = -1, Rn.length && bv());
}
function bv() {
  if (!ta) {
    var r = vv($S);
    ta = !0;
    for (var t = Rn.length; t; ) {
      for (Cs = Rn, Rn = []; ++Uh < t; )
        Cs && Cs[Uh].run();
      Uh = -1, t = Rn.length;
    }
    Cs = null, ta = !1, BS(r);
  }
}
Yt.nextTick = function(r) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
  Rn.push(new yv(r, t)), Rn.length === 1 && !ta && vv(bv);
};
function yv(r, t) {
  this.fun = r, this.array = t;
}
yv.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Yt.title = "browser";
Yt.browser = !0;
Yt.env = {};
Yt.argv = [];
Yt.version = "";
Yt.versions = {};
function Dn() {
}
Yt.on = Dn;
Yt.addListener = Dn;
Yt.once = Dn;
Yt.off = Dn;
Yt.removeListener = Dn;
Yt.removeAllListeners = Dn;
Yt.emit = Dn;
Yt.prependListener = Dn;
Yt.prependOnceListener = Dn;
Yt.listeners = function(r) {
  return [];
};
Yt.binding = function(r) {
  throw new Error("process.binding is not supported");
};
Yt.cwd = function() {
  return "/";
};
Yt.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
Yt.umask = function() {
  return 0;
};
var US = mv.exports;
const $n = /* @__PURE__ */ NS(US);
var ne = {}, ff = {};
ff.byteLength = zS;
ff.toByteArray = VS;
ff.fromByteArray = XS;
var Gi = [], Qe = [], HS = typeof Uint8Array < "u" ? Uint8Array : Array, Kf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Vr = 0, jS = Kf.length; Vr < jS; ++Vr)
  Gi[Vr] = Kf[Vr], Qe[Kf.charCodeAt(Vr)] = Vr;
Qe[45] = 62;
Qe[95] = 63;
function wv(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var i = e === t ? 0 : 4 - e % 4;
  return [e, i];
}
function zS(r) {
  var t = wv(r), e = t[0], i = t[1];
  return (e + i) * 3 / 4 - i;
}
function GS(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function VS(r) {
  var t, e = wv(r), i = e[0], n = e[1], s = new HS(GS(r, i, n)), a = 0, l = n > 0 ? i - 4 : i, c;
  for (c = 0; c < l; c += 4)
    t = Qe[r.charCodeAt(c)] << 18 | Qe[r.charCodeAt(c + 1)] << 12 | Qe[r.charCodeAt(c + 2)] << 6 | Qe[r.charCodeAt(c + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = t & 255;
  return n === 2 && (t = Qe[r.charCodeAt(c)] << 2 | Qe[r.charCodeAt(c + 1)] >> 4, s[a++] = t & 255), n === 1 && (t = Qe[r.charCodeAt(c)] << 10 | Qe[r.charCodeAt(c + 1)] << 4 | Qe[r.charCodeAt(c + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = t & 255), s;
}
function WS(r) {
  return Gi[r >> 18 & 63] + Gi[r >> 12 & 63] + Gi[r >> 6 & 63] + Gi[r & 63];
}
function qS(r, t, e) {
  for (var i, n = [], s = t; s < e; s += 3)
    i = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), n.push(WS(i));
  return n.join("");
}
function XS(r) {
  for (var t, e = r.length, i = e % 3, n = [], s = 16383, a = 0, l = e - i; a < l; a += s)
    n.push(qS(r, a, a + s > l ? l : a + s));
  return i === 1 ? (t = r[e - 1], n.push(
    Gi[t >> 2] + Gi[t << 4 & 63] + "=="
  )) : i === 2 && (t = (r[e - 2] << 8) + r[e - 1], n.push(
    Gi[t >> 10] + Gi[t >> 4 & 63] + Gi[t << 2 & 63] + "="
  )), n.join("");
}
var Kg = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Kg.read = function(r, t, e, i, n) {
  var s, a, l = n * 8 - i - 1, c = (1 << l) - 1, d = c >> 1, h = -7, p = e ? n - 1 : 0, g = e ? -1 : 1, v = r[t + p];
  for (p += g, s = v & (1 << -h) - 1, v >>= -h, h += l; h > 0; s = s * 256 + r[t + p], p += g, h -= 8)
    ;
  for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + r[t + p], p += g, h -= 8)
    ;
  if (s === 0)
    s = 1 - d;
  else {
    if (s === c)
      return a ? NaN : (v ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, i), s = s - d;
  }
  return (v ? -1 : 1) * a * Math.pow(2, s - i);
};
Kg.write = function(r, t, e, i, n, s) {
  var a, l, c, d = s * 8 - n - 1, h = (1 << d) - 1, p = h >> 1, g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = i ? 0 : s - 1, b = i ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + p >= 1 ? t += g / c : t += g * Math.pow(2, 1 - p), t * c >= 2 && (a++, c /= 2), a + p >= h ? (l = 0, a = h) : a + p >= 1 ? (l = (t * c - 1) * Math.pow(2, n), a = a + p) : (l = t * Math.pow(2, p - 1) * Math.pow(2, n), a = 0)); n >= 8; r[e + v] = l & 255, v += b, l /= 256, n -= 8)
    ;
  for (a = a << n | l, d += n; d > 0; r[e + v] = a & 255, v += b, a /= 256, d -= 8)
    ;
  r[e + v - b] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = ff, e = Kg, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = h, r.SlowBuffer = D, r.INSPECT_MAX_BYTES = 50;
  const n = 2147483647;
  r.kMaxLength = n;
  const { Uint8Array: s, ArrayBuffer: a, SharedArrayBuffer: l } = globalThis;
  h.TYPED_ARRAY_SUPPORT = c(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const y = new s(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, s.prototype), Object.setPrototypeOf(y, u), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(h.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(y) {
    if (y > n)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    const u = new s(y);
    return Object.setPrototypeOf(u, h.prototype), u;
  }
  function h(y, u, f) {
    if (typeof y == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(y);
    }
    return p(y, u, f);
  }
  h.poolSize = 8192;
  function p(y, u, f) {
    if (typeof y == "string")
      return _(y, u);
    if (a.isView(y))
      return E(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (at(y, a) || y && at(y.buffer, a) || typeof l < "u" && (at(y, l) || y && at(y.buffer, l)))
      return R(y, u, f);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const x = y.valueOf && y.valueOf();
    if (x != null && x !== y)
      return h.from(x, u, f);
    const P = L(y);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return h.from(y[Symbol.toPrimitive]("string"), u, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  h.from = function(y, u, f) {
    return p(y, u, f);
  }, Object.setPrototypeOf(h.prototype, s.prototype), Object.setPrototypeOf(h, s);
  function g(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function v(y, u, f) {
    return g(y), y <= 0 ? d(y) : u !== void 0 ? typeof f == "string" ? d(y).fill(u, f) : d(y).fill(u) : d(y);
  }
  h.alloc = function(y, u, f) {
    return v(y, u, f);
  };
  function b(y) {
    return g(y), d(y < 0 ? 0 : M(y) | 0);
  }
  h.allocUnsafe = function(y) {
    return b(y);
  }, h.allocUnsafeSlow = function(y) {
    return b(y);
  };
  function _(y, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !h.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const f = N(y, u) | 0;
    let x = d(f);
    const P = x.write(y, u);
    return P !== f && (x = x.slice(0, P)), x;
  }
  function C(y) {
    const u = y.length < 0 ? 0 : M(y.length) | 0, f = d(u);
    for (let x = 0; x < u; x += 1)
      f[x] = y[x] & 255;
    return f;
  }
  function E(y) {
    if (at(y, s)) {
      const u = new s(y);
      return R(u.buffer, u.byteOffset, u.byteLength);
    }
    return C(y);
  }
  function R(y, u, f) {
    if (u < 0 || y.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let x;
    return u === void 0 && f === void 0 ? x = new s(y) : f === void 0 ? x = new s(y, u) : x = new s(y, u, f), Object.setPrototypeOf(x, h.prototype), x;
  }
  function L(y) {
    if (h.isBuffer(y)) {
      const u = M(y.length) | 0, f = d(u);
      return f.length === 0 || y.copy(f, 0, 0, u), f;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || _e(y.length) ? d(0) : C(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return C(y.data);
  }
  function M(y) {
    if (y >= n)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
    return y | 0;
  }
  function D(y) {
    return +y != y && (y = 0), h.alloc(+y);
  }
  h.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== h.prototype;
  }, h.compare = function(u, f) {
    if (at(u, s) && (u = h.from(u, u.offset, u.byteLength)), at(f, s) && (f = h.from(f, f.offset, f.byteLength)), !h.isBuffer(u) || !h.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    let x = u.length, P = f.length;
    for (let F = 0, $ = Math.min(x, P); F < $; ++F)
      if (u[F] !== f[F]) {
        x = u[F], P = f[F];
        break;
      }
    return x < P ? -1 : P < x ? 1 : 0;
  }, h.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, h.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return h.alloc(0);
    let x;
    if (f === void 0)
      for (f = 0, x = 0; x < u.length; ++x)
        f += u[x].length;
    const P = h.allocUnsafe(f);
    let F = 0;
    for (x = 0; x < u.length; ++x) {
      let $ = u[x];
      if (at($, s))
        F + $.length > P.length ? (h.isBuffer($) || ($ = h.from($)), $.copy(P, F)) : s.prototype.set.call(
          P,
          $,
          F
        );
      else if (h.isBuffer($))
        $.copy(P, F);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      F += $.length;
    }
    return P;
  };
  function N(y, u) {
    if (h.isBuffer(y))
      return y.length;
    if (a.isView(y) || at(y, a))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    const f = y.length, x = arguments.length > 2 && arguments[2] === !0;
    if (!x && f === 0)
      return 0;
    let P = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return Wt(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return Pt(y).length;
        default:
          if (P)
            return x ? -1 : Wt(y).length;
          u = ("" + u).toLowerCase(), P = !0;
      }
  }
  h.byteLength = N;
  function U(y, u, f) {
    let x = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return G(this, u, f);
        case "utf8":
        case "utf-8":
          return B(this, u, f);
        case "ascii":
          return xt(this, u, f);
        case "latin1":
        case "binary":
          return mt(this, u, f);
        case "base64":
          return K(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return et(this, u, f);
        default:
          if (x)
            throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), x = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function S(y, u, f) {
    const x = y[u];
    y[u] = y[f], y[f] = x;
  }
  h.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < u; f += 2)
      S(this, f, f + 1);
    return this;
  }, h.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let f = 0; f < u; f += 4)
      S(this, f, f + 3), S(this, f + 1, f + 2);
    return this;
  }, h.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let f = 0; f < u; f += 8)
      S(this, f, f + 7), S(this, f + 1, f + 6), S(this, f + 2, f + 5), S(this, f + 3, f + 4);
    return this;
  }, h.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? B(this, 0, u) : U.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(u) {
    if (!h.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : h.compare(this, u) === 0;
  }, h.prototype.inspect = function() {
    let u = "";
    const f = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, i && (h.prototype[i] = h.prototype.inspect), h.prototype.compare = function(u, f, x, P, F) {
    if (at(u, s) && (u = h.from(u, u.offset, u.byteLength)), !h.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), x === void 0 && (x = u ? u.length : 0), P === void 0 && (P = 0), F === void 0 && (F = this.length), f < 0 || x > u.length || P < 0 || F > this.length)
      throw new RangeError("out of range index");
    if (P >= F && f >= x)
      return 0;
    if (P >= F)
      return -1;
    if (f >= x)
      return 1;
    if (f >>>= 0, x >>>= 0, P >>>= 0, F >>>= 0, this === u)
      return 0;
    let $ = F - P, pt = x - f;
    const zt = Math.min($, pt), $t = this.slice(P, F), Gt = u.slice(f, x);
    for (let Ft = 0; Ft < zt; ++Ft)
      if ($t[Ft] !== Gt[Ft]) {
        $ = $t[Ft], pt = Gt[Ft];
        break;
      }
    return $ < pt ? -1 : pt < $ ? 1 : 0;
  };
  function T(y, u, f, x, P) {
    if (y.length === 0)
      return -1;
    if (typeof f == "string" ? (x = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, _e(f) && (f = P ? 0 : y.length - 1), f < 0 && (f = y.length + f), f >= y.length) {
      if (P)
        return -1;
      f = y.length - 1;
    } else if (f < 0)
      if (P)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = h.from(u, x)), h.isBuffer(u))
      return u.length === 0 ? -1 : I(y, u, f, x, P);
    if (typeof u == "number")
      return u = u & 255, typeof s.prototype.indexOf == "function" ? P ? s.prototype.indexOf.call(y, u, f) : s.prototype.lastIndexOf.call(y, u, f) : I(y, [u], f, x, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function I(y, u, f, x, P) {
    let F = 1, $ = y.length, pt = u.length;
    if (x !== void 0 && (x = String(x).toLowerCase(), x === "ucs2" || x === "ucs-2" || x === "utf16le" || x === "utf-16le")) {
      if (y.length < 2 || u.length < 2)
        return -1;
      F = 2, $ /= 2, pt /= 2, f /= 2;
    }
    function zt(Gt, Ft) {
      return F === 1 ? Gt[Ft] : Gt.readUInt16BE(Ft * F);
    }
    let $t;
    if (P) {
      let Gt = -1;
      for ($t = f; $t < $; $t++)
        if (zt(y, $t) === zt(u, Gt === -1 ? 0 : $t - Gt)) {
          if (Gt === -1 && (Gt = $t), $t - Gt + 1 === pt)
            return Gt * F;
        } else
          Gt !== -1 && ($t -= $t - Gt), Gt = -1;
    } else
      for (f + pt > $ && (f = $ - pt), $t = f; $t >= 0; $t--) {
        let Gt = !0;
        for (let Ft = 0; Ft < pt; Ft++)
          if (zt(y, $t + Ft) !== zt(u, Ft)) {
            Gt = !1;
            break;
          }
        if (Gt)
          return $t;
      }
    return -1;
  }
  h.prototype.includes = function(u, f, x) {
    return this.indexOf(u, f, x) !== -1;
  }, h.prototype.indexOf = function(u, f, x) {
    return T(this, u, f, x, !0);
  }, h.prototype.lastIndexOf = function(u, f, x) {
    return T(this, u, f, x, !1);
  };
  function k(y, u, f, x) {
    f = Number(f) || 0;
    const P = y.length - f;
    x ? (x = Number(x), x > P && (x = P)) : x = P;
    const F = u.length;
    x > F / 2 && (x = F / 2);
    let $;
    for ($ = 0; $ < x; ++$) {
      const pt = parseInt(u.substr($ * 2, 2), 16);
      if (_e(pt))
        return $;
      y[f + $] = pt;
    }
    return $;
  }
  function H(y, u, f, x) {
    return jt(Wt(u, y.length - f), y, f, x);
  }
  function j(y, u, f, x) {
    return jt(Ht(u), y, f, x);
  }
  function z(y, u, f, x) {
    return jt(Pt(u), y, f, x);
  }
  function Y(y, u, f, x) {
    return jt(Tt(u, y.length - f), y, f, x);
  }
  h.prototype.write = function(u, f, x, P) {
    if (f === void 0)
      P = "utf8", x = this.length, f = 0;
    else if (x === void 0 && typeof f == "string")
      P = f, x = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(x) ? (x = x >>> 0, P === void 0 && (P = "utf8")) : (P = x, x = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const F = this.length - f;
    if ((x === void 0 || x > F) && (x = F), u.length > 0 && (x < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let $ = !1;
    for (; ; )
      switch (P) {
        case "hex":
          return k(this, u, f, x);
        case "utf8":
        case "utf-8":
          return H(this, u, f, x);
        case "ascii":
        case "latin1":
        case "binary":
          return j(this, u, f, x);
        case "base64":
          return z(this, u, f, x);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, u, f, x);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), $ = !0;
      }
  }, h.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function K(y, u, f) {
    return u === 0 && f === y.length ? t.fromByteArray(y) : t.fromByteArray(y.slice(u, f));
  }
  function B(y, u, f) {
    f = Math.min(y.length, f);
    const x = [];
    let P = u;
    for (; P < f; ) {
      const F = y[P];
      let $ = null, pt = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
      if (P + pt <= f) {
        let zt, $t, Gt, Ft;
        switch (pt) {
          case 1:
            F < 128 && ($ = F);
            break;
          case 2:
            zt = y[P + 1], (zt & 192) === 128 && (Ft = (F & 31) << 6 | zt & 63, Ft > 127 && ($ = Ft));
            break;
          case 3:
            zt = y[P + 1], $t = y[P + 2], (zt & 192) === 128 && ($t & 192) === 128 && (Ft = (F & 15) << 12 | (zt & 63) << 6 | $t & 63, Ft > 2047 && (Ft < 55296 || Ft > 57343) && ($ = Ft));
            break;
          case 4:
            zt = y[P + 1], $t = y[P + 2], Gt = y[P + 3], (zt & 192) === 128 && ($t & 192) === 128 && (Gt & 192) === 128 && (Ft = (F & 15) << 18 | (zt & 63) << 12 | ($t & 63) << 6 | Gt & 63, Ft > 65535 && Ft < 1114112 && ($ = Ft));
        }
      }
      $ === null ? ($ = 65533, pt = 1) : $ > 65535 && ($ -= 65536, x.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), x.push($), P += pt;
    }
    return W(x);
  }
  const V = 4096;
  function W(y) {
    const u = y.length;
    if (u <= V)
      return String.fromCharCode.apply(String, y);
    let f = "", x = 0;
    for (; x < u; )
      f += String.fromCharCode.apply(
        String,
        y.slice(x, x += V)
      );
    return f;
  }
  function xt(y, u, f) {
    let x = "";
    f = Math.min(y.length, f);
    for (let P = u; P < f; ++P)
      x += String.fromCharCode(y[P] & 127);
    return x;
  }
  function mt(y, u, f) {
    let x = "";
    f = Math.min(y.length, f);
    for (let P = u; P < f; ++P)
      x += String.fromCharCode(y[P]);
    return x;
  }
  function G(y, u, f) {
    const x = y.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > x) && (f = x);
    let P = "";
    for (let F = u; F < f; ++F)
      P += Ee[y[F]];
    return P;
  }
  function et(y, u, f) {
    const x = y.slice(u, f);
    let P = "";
    for (let F = 0; F < x.length - 1; F += 2)
      P += String.fromCharCode(x[F] + x[F + 1] * 256);
    return P;
  }
  h.prototype.slice = function(u, f) {
    const x = this.length;
    u = ~~u, f = f === void 0 ? x : ~~f, u < 0 ? (u += x, u < 0 && (u = 0)) : u > x && (u = x), f < 0 ? (f += x, f < 0 && (f = 0)) : f > x && (f = x), f < u && (f = u);
    const P = this.subarray(u, f);
    return Object.setPrototypeOf(P, h.prototype), P;
  };
  function tt(y, u, f) {
    if (y % 1 !== 0 || y < 0)
      throw new RangeError("offset is not uint");
    if (y + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(u, f, x) {
    u = u >>> 0, f = f >>> 0, x || tt(u, f, this.length);
    let P = this[u], F = 1, $ = 0;
    for (; ++$ < f && (F *= 256); )
      P += this[u + $] * F;
    return P;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(u, f, x) {
    u = u >>> 0, f = f >>> 0, x || tt(u, f, this.length);
    let P = this[u + --f], F = 1;
    for (; f > 0 && (F *= 256); )
      P += this[u + --f] * F;
    return P;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || tt(u, 1, this.length), this[u];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || tt(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || tt(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, h.prototype.readBigUInt64LE = se(function(u) {
    u = u >>> 0, q(u, "offset");
    const f = this[u], x = this[u + 7];
    (f === void 0 || x === void 0) && dt(u, this.length - 8);
    const P = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, F = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + x * 2 ** 24;
    return BigInt(P) + (BigInt(F) << BigInt(32));
  }), h.prototype.readBigUInt64BE = se(function(u) {
    u = u >>> 0, q(u, "offset");
    const f = this[u], x = this[u + 7];
    (f === void 0 || x === void 0) && dt(u, this.length - 8);
    const P = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], F = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + x;
    return (BigInt(P) << BigInt(32)) + BigInt(F);
  }), h.prototype.readIntLE = function(u, f, x) {
    u = u >>> 0, f = f >>> 0, x || tt(u, f, this.length);
    let P = this[u], F = 1, $ = 0;
    for (; ++$ < f && (F *= 256); )
      P += this[u + $] * F;
    return F *= 128, P >= F && (P -= Math.pow(2, 8 * f)), P;
  }, h.prototype.readIntBE = function(u, f, x) {
    u = u >>> 0, f = f >>> 0, x || tt(u, f, this.length);
    let P = f, F = 1, $ = this[u + --P];
    for (; P > 0 && (F *= 256); )
      $ += this[u + --P] * F;
    return F *= 128, $ >= F && ($ -= Math.pow(2, 8 * f)), $;
  }, h.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || tt(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, h.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || tt(u, 2, this.length);
    const x = this[u] | this[u + 1] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, h.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || tt(u, 2, this.length);
    const x = this[u + 1] | this[u] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, h.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, h.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, h.prototype.readBigInt64LE = se(function(u) {
    u = u >>> 0, q(u, "offset");
    const f = this[u], x = this[u + 7];
    (f === void 0 || x === void 0) && dt(u, this.length - 8);
    const P = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (x << 24);
    return (BigInt(P) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), h.prototype.readBigInt64BE = se(function(u) {
    u = u >>> 0, q(u, "offset");
    const f = this[u], x = this[u + 7];
    (f === void 0 || x === void 0) && dt(u, this.length - 8);
    const P = (f << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(P) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + x);
  }), h.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), e.read(this, u, !0, 23, 4);
  }, h.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || tt(u, 4, this.length), e.read(this, u, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || tt(u, 8, this.length), e.read(this, u, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || tt(u, 8, this.length), e.read(this, u, !1, 52, 8);
  };
  function it(y, u, f, x, P, F) {
    if (!h.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > P || u < F)
      throw new RangeError('"value" argument is out of bounds');
    if (f + x > y.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(u, f, x, P) {
    if (u = +u, f = f >>> 0, x = x >>> 0, !P) {
      const pt = Math.pow(2, 8 * x) - 1;
      it(this, u, f, x, pt, 0);
    }
    let F = 1, $ = 0;
    for (this[f] = u & 255; ++$ < x && (F *= 256); )
      this[f + $] = u / F & 255;
    return f + x;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(u, f, x, P) {
    if (u = +u, f = f >>> 0, x = x >>> 0, !P) {
      const pt = Math.pow(2, 8 * x) - 1;
      it(this, u, f, x, pt, 0);
    }
    let F = x - 1, $ = 1;
    for (this[f + F] = u & 255; --F >= 0 && ($ *= 256); )
      this[f + F] = u / $ & 255;
    return f + x;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function ct(y, u, f, x, P) {
    ft(u, x, P, y, f, 7);
    let F = Number(u & BigInt(4294967295));
    y[f++] = F, F = F >> 8, y[f++] = F, F = F >> 8, y[f++] = F, F = F >> 8, y[f++] = F;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return y[f++] = $, $ = $ >> 8, y[f++] = $, $ = $ >> 8, y[f++] = $, $ = $ >> 8, y[f++] = $, f;
  }
  function J(y, u, f, x, P) {
    ft(u, x, P, y, f, 7);
    let F = Number(u & BigInt(4294967295));
    y[f + 7] = F, F = F >> 8, y[f + 6] = F, F = F >> 8, y[f + 5] = F, F = F >> 8, y[f + 4] = F;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return y[f + 3] = $, $ = $ >> 8, y[f + 2] = $, $ = $ >> 8, y[f + 1] = $, $ = $ >> 8, y[f] = $, f + 8;
  }
  h.prototype.writeBigUInt64LE = se(function(u, f = 0) {
    return ct(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeBigUInt64BE = se(function(u, f = 0) {
    return J(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeIntLE = function(u, f, x, P) {
    if (u = +u, f = f >>> 0, !P) {
      const zt = Math.pow(2, 8 * x - 1);
      it(this, u, f, x, zt - 1, -zt);
    }
    let F = 0, $ = 1, pt = 0;
    for (this[f] = u & 255; ++F < x && ($ *= 256); )
      u < 0 && pt === 0 && this[f + F - 1] !== 0 && (pt = 1), this[f + F] = (u / $ >> 0) - pt & 255;
    return f + x;
  }, h.prototype.writeIntBE = function(u, f, x, P) {
    if (u = +u, f = f >>> 0, !P) {
      const zt = Math.pow(2, 8 * x - 1);
      it(this, u, f, x, zt - 1, -zt);
    }
    let F = x - 1, $ = 1, pt = 0;
    for (this[f + F] = u & 255; --F >= 0 && ($ *= 256); )
      u < 0 && pt === 0 && this[f + F + 1] !== 0 && (pt = 1), this[f + F] = (u / $ >> 0) - pt & 255;
    return f + x;
  }, h.prototype.writeInt8 = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, h.prototype.writeInt16LE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, h.prototype.writeInt16BE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, h.prototype.writeInt32LE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, h.prototype.writeInt32BE = function(u, f, x) {
    return u = +u, f = f >>> 0, x || it(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, h.prototype.writeBigInt64LE = se(function(u, f = 0) {
    return ct(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), h.prototype.writeBigInt64BE = se(function(u, f = 0) {
    return J(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Et(y, u, f, x, P, F) {
    if (f + x > y.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function X(y, u, f, x, P) {
    return u = +u, f = f >>> 0, P || Et(y, u, f, 4), e.write(y, u, f, x, 23, 4), f + 4;
  }
  h.prototype.writeFloatLE = function(u, f, x) {
    return X(this, u, f, !0, x);
  }, h.prototype.writeFloatBE = function(u, f, x) {
    return X(this, u, f, !1, x);
  };
  function Q(y, u, f, x, P) {
    return u = +u, f = f >>> 0, P || Et(y, u, f, 8), e.write(y, u, f, x, 52, 8), f + 8;
  }
  h.prototype.writeDoubleLE = function(u, f, x) {
    return Q(this, u, f, !0, x);
  }, h.prototype.writeDoubleBE = function(u, f, x) {
    return Q(this, u, f, !1, x);
  }, h.prototype.copy = function(u, f, x, P) {
    if (!h.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (x || (x = 0), !P && P !== 0 && (P = this.length), f >= u.length && (f = u.length), f || (f = 0), P > 0 && P < x && (P = x), P === x || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (x < 0 || x >= this.length)
      throw new RangeError("Index out of range");
    if (P < 0)
      throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), u.length - f < P - x && (P = u.length - f + x);
    const F = P - x;
    return this === u && typeof s.prototype.copyWithin == "function" ? this.copyWithin(f, x, P) : s.prototype.set.call(
      u,
      this.subarray(x, P),
      f
    ), F;
  }, h.prototype.fill = function(u, f, x, P) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (P = f, f = 0, x = this.length) : typeof x == "string" && (P = x, x = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !h.isEncoding(P))
        throw new TypeError("Unknown encoding: " + P);
      if (u.length === 1) {
        const $ = u.charCodeAt(0);
        (P === "utf8" && $ < 128 || P === "latin1") && (u = $);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < x)
      throw new RangeError("Out of range index");
    if (x <= f)
      return this;
    f = f >>> 0, x = x === void 0 ? this.length : x >>> 0, u || (u = 0);
    let F;
    if (typeof u == "number")
      for (F = f; F < x; ++F)
        this[F] = u;
    else {
      const $ = h.isBuffer(u) ? u : h.from(u, P), pt = $.length;
      if (pt === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (F = 0; F < x - f; ++F)
        this[F + f] = $[F % pt];
    }
    return this;
  };
  const ht = {};
  function St(y, u, f) {
    ht[y] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
      }
      get code() {
        return y;
      }
      set code(P) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: P,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  St(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), St(
    "ERR_INVALID_ARG_TYPE",
    function(y, u) {
      return `The "${y}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), St(
    "ERR_OUT_OF_RANGE",
    function(y, u, f) {
      let x = `The value of "${y}" is out of range.`, P = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? P = rt(String(f)) : typeof f == "bigint" && (P = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (P = rt(P)), P += "n"), x += ` It must be ${u}. Received ${P}`, x;
    },
    RangeError
  );
  function rt(y) {
    let u = "", f = y.length;
    const x = y[0] === "-" ? 1 : 0;
    for (; f >= x + 4; f -= 3)
      u = `_${y.slice(f - 3, f)}${u}`;
    return `${y.slice(0, f)}${u}`;
  }
  function wt(y, u, f) {
    q(u, "offset"), (y[u] === void 0 || y[u + f] === void 0) && dt(u, y.length - (f + 1));
  }
  function ft(y, u, f, x, P, F) {
    if (y > f || y < u) {
      const $ = typeof u == "bigint" ? "n" : "";
      let pt;
      throw u === 0 || u === BigInt(0) ? pt = `>= 0${$} and < 2${$} ** ${(F + 1) * 8}${$}` : pt = `>= -(2${$} ** ${(F + 1) * 8 - 1}${$}) and < 2 ** ${(F + 1) * 8 - 1}${$}`, new ht.ERR_OUT_OF_RANGE("value", pt, y);
    }
    wt(x, P, F);
  }
  function q(y, u) {
    if (typeof y != "number")
      throw new ht.ERR_INVALID_ARG_TYPE(u, "number", y);
  }
  function dt(y, u, f) {
    throw Math.floor(y) !== y ? (q(y, f), new ht.ERR_OUT_OF_RANGE("offset", "an integer", y)) : u < 0 ? new ht.ERR_BUFFER_OUT_OF_BOUNDS() : new ht.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      y
    );
  }
  const Ct = /[^+/0-9A-Za-z-_]/g;
  function Nt(y) {
    if (y = y.split("=")[0], y = y.trim().replace(Ct, ""), y.length < 2)
      return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function Wt(y, u) {
    u = u || 1 / 0;
    let f;
    const x = y.length;
    let P = null;
    const F = [];
    for (let $ = 0; $ < x; ++$) {
      if (f = y.charCodeAt($), f > 55295 && f < 57344) {
        if (!P) {
          if (f > 56319) {
            (u -= 3) > -1 && F.push(239, 191, 189);
            continue;
          } else if ($ + 1 === x) {
            (u -= 3) > -1 && F.push(239, 191, 189);
            continue;
          }
          P = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && F.push(239, 191, 189), P = f;
          continue;
        }
        f = (P - 55296 << 10 | f - 56320) + 65536;
      } else
        P && (u -= 3) > -1 && F.push(239, 191, 189);
      if (P = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        F.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        F.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        F.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        F.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return F;
  }
  function Ht(y) {
    const u = [];
    for (let f = 0; f < y.length; ++f)
      u.push(y.charCodeAt(f) & 255);
    return u;
  }
  function Tt(y, u) {
    let f, x, P;
    const F = [];
    for (let $ = 0; $ < y.length && !((u -= 2) < 0); ++$)
      f = y.charCodeAt($), x = f >> 8, P = f % 256, F.push(P), F.push(x);
    return F;
  }
  function Pt(y) {
    return t.toByteArray(Nt(y));
  }
  function jt(y, u, f, x) {
    let P;
    for (P = 0; P < x && !(P + f >= u.length || P >= y.length); ++P)
      u[P + f] = y[P];
    return P;
  }
  function at(y, u) {
    return y instanceof u || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === u.name;
  }
  function _e(y) {
    return y !== y;
  }
  const Ee = function() {
    const y = "0123456789abcdef", u = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const x = f * 16;
      for (let P = 0; P < 16; ++P)
        u[x + P] = y[f] + y[P];
    }
    return u;
  }();
  function se(y) {
    return typeof BigInt > "u" ? Ze : y;
  }
  function Ze() {
    throw new Error("BigInt not supported");
  }
})(ne);
const pp = ne.Buffer, YS = ne.Blob, KS = ne.BlobOptions, ZS = ne.Buffer, JS = ne.File, QS = ne.FileOptions, tC = ne.INSPECT_MAX_BYTES, eC = ne.SlowBuffer, iC = ne.TranscodeEncoding, nC = ne.atob, sC = ne.btoa, rC = ne.constants, aC = ne.isAscii, oC = ne.isUtf8, lC = ne.kMaxLength, cC = ne.kStringMaxLength, hC = ne.resolveObjectURL, dC = ne.transcode, GL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: YS,
  BlobOptions: KS,
  Buffer: ZS,
  File: JS,
  FileOptions: QS,
  INSPECT_MAX_BYTES: tC,
  SlowBuffer: eC,
  TranscodeEncoding: iC,
  atob: nC,
  btoa: sC,
  constants: rC,
  default: pp,
  isAscii: aC,
  isUtf8: oC,
  kMaxLength: lC,
  kStringMaxLength: cC,
  resolveObjectURL: hC,
  transcode: dC
}, Symbol.toStringTag, { value: "Module" }));
var Xo = {};
Xo.d = (r, t) => {
  for (var e in t)
    Xo.o(t, e) && !Xo.o(r, e) && Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
};
Xo.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t);
var st = globalThis.pdfjsLib = {};
Xo.d(st, {
  AbortException: () => (
    /* reexport */
    jr
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Cg
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    ot
  ),
  AnnotationEditorType: () => (
    /* reexport */
    yt
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    Dr
  ),
  AnnotationLayer: () => (
    /* reexport */
    cP
  ),
  AnnotationMode: () => (
    /* reexport */
    Un
  ),
  CMapCompressionType: () => (
    /* reexport */
    mp
  ),
  ColorPicker: () => (
    /* reexport */
    _d
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Qg
  ),
  DrawLayer: () => (
    /* reexport */
    Lg
  ),
  FeatureTest: () => (
    /* reexport */
    Oe
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    kn
  ),
  ImageKind: () => (
    /* reexport */
    Hh
  ),
  InvalidPDFException: () => (
    /* reexport */
    _v
  ),
  MissingPDFException: () => (
    /* reexport */
    Hr
  ),
  OPS: () => (
    /* reexport */
    ai
  ),
  Outliner: () => (
    /* reexport */
    og
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    pb
  ),
  PDFDateString: () => (
    /* reexport */
    Rv
  ),
  PDFWorker: () => (
    /* reexport */
    ia
  ),
  PasswordResponses: () => (
    /* reexport */
    gC
  ),
  PermissionFlag: () => (
    /* reexport */
    pC
  ),
  PixelsPerInch: () => (
    /* reexport */
    ps
  ),
  RenderingCancelledException: () => (
    /* reexport */
    tm
  ),
  TextLayer: () => (
    /* reexport */
    wd
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    vf
  ),
  Util: () => (
    /* reexport */
    Z
  ),
  VerbosityLevel: () => (
    /* reexport */
    pf
  ),
  XfaLayer: () => (
    /* reexport */
    mb
  ),
  build: () => (
    /* reexport */
    zT
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    yC
  ),
  fetchData: () => (
    /* reexport */
    Ef
  ),
  getDocument: () => (
    /* reexport */
    MT
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    RC
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    LC
  ),
  getXfaPageViewport: () => (
    /* reexport */
    kC
  ),
  isDataScheme: () => (
    /* reexport */
    em
  ),
  isPdfFile: () => (
    /* reexport */
    im
  ),
  noContextMenu: () => (
    /* reexport */
    Ne
  ),
  normalizeUnicode: () => (
    /* reexport */
    SC
  ),
  renderTextLayer: () => (
    /* reexport */
    ST
  ),
  setLayerDimensions: () => (
    /* reexport */
    Mr
  ),
  shadow: () => (
    /* reexport */
    _t
  ),
  updateTextLayer: () => (
    /* reexport */
    CT
  ),
  version: () => (
    /* reexport */
    jT
  )
});
const Ae = typeof $n == "object" && $n + "" == "[object process]" && !$n.versions.nw && !($n.versions.electron && $n.type && $n.type !== "browser"), Av = [1, 0, 0, 1, 0, 0], gp = [1e-3, 0, 0, 1e-3, 0, 0], uC = 1e7, Zf = 1.35, si = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, Un = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, fC = "pdfjs_internal_editor_", yt = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, ot = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, pC = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, ve = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Hh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Zt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, Ro = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, pf = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, mp = {
  NONE: 0,
  BINARY: 1
}, ai = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, gC = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let gf = pf.WARNINGS;
function mC(r) {
  Number.isInteger(r) && (gf = r);
}
function vC() {
  return gf;
}
function mf(r) {
  gf >= pf.INFOS && console.log(`Info: ${r}`);
}
function ut(r) {
  gf >= pf.WARNINGS && console.log(`Warning: ${r}`);
}
function It(r) {
  throw new Error(r);
}
function ie(r, t) {
  r || It(t);
}
function bC(r) {
  switch (r == null ? void 0 : r.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function yC(r, t = null, e = null) {
  if (!r)
    return null;
  try {
    if (e && typeof r == "string") {
      if (e.addDefaultProtocol && r.startsWith("www.")) {
        const n = r.match(/\./g);
        (n == null ? void 0 : n.length) >= 2 && (r = `http://${r}`);
      }
      if (e.tryConvertEncoding)
        try {
          r = xC(r);
        } catch {
        }
    }
    const i = t ? new URL(r, t) : new URL(r);
    if (bC(i))
      return i;
  } catch {
  }
  return null;
}
function _t(r, t, e, i = !1) {
  return Object.defineProperty(r, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1
  }), e;
}
const vs = function() {
  function t(e, i) {
    this.constructor === t && It("Cannot initialize BaseException."), this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class vp extends vs {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class bp extends vs {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class _v extends vs {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Hr extends vs {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class vf extends vs {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class wC extends vs {
  constructor(t) {
    super(t, "FormatError");
  }
}
class jr extends vs {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Ev(r) {
  (typeof r != "object" || (r == null ? void 0 : r.length) === void 0) && It("Invalid argument for bytesToString");
  const t = r.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, r);
  const i = [];
  for (let n = 0; n < t; n += e) {
    const s = Math.min(n + e, t), a = r.subarray(n, s);
    i.push(String.fromCharCode.apply(null, a));
  }
  return i.join("");
}
function bf(r) {
  typeof r != "string" && It("Invalid argument for stringToBytes");
  const t = r.length, e = new Uint8Array(t);
  for (let i = 0; i < t; ++i)
    e[i] = r.charCodeAt(i) & 255;
  return e;
}
function AC(r) {
  return String.fromCharCode(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255);
}
function Zg(r) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, i] of r)
    t[e] = i;
  return t;
}
function _C() {
  const r = new Uint8Array(4);
  return r[0] = 1, new Uint32Array(r.buffer, 0, 1)[0] === 1;
}
function EC() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class Oe {
  static get isLittleEndian() {
    return _t(this, "isLittleEndian", _C());
  }
  static get isEvalSupported() {
    return _t(this, "isEvalSupported", EC());
  }
  static get isOffscreenCanvasSupported() {
    return _t(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? _t(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : _t(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return _t(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Jf = Array.from(Array(256).keys(), (r) => r.toString(16).padStart(2, "0"));
var ra, jh, tl, yp;
class Z {
  static makeHexColor(t, e, i) {
    return `#${Jf[t]}${Jf[e]}${Jf[i]}`;
  }
  static scaleMinMax(t, e) {
    let i;
    t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const i = t[0] * e[0] + t[1] * e[2] + e[4], n = t[0] * e[1] + t[1] * e[3] + e[5];
    return [i, n];
  }
  static applyInverseTransform(t, e) {
    const i = e[0] * e[3] - e[1] * e[2], n = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i, s = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i;
    return [n, s];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const i = this.applyTransform(t, e), n = this.applyTransform(t.slice(2, 4), e), s = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(i[0], n[0], s[0], a[0]), Math.min(i[1], n[1], s[1], a[1]), Math.max(i[0], n[0], s[0], a[0]), Math.max(i[1], n[1], s[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], i = t[0] * e[0] + t[1] * e[2], n = t[0] * e[1] + t[1] * e[3], s = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], l = (i + a) / 2, c = Math.sqrt((i + a) ** 2 - 4 * (i * a - s * n)) / 2, d = l + c || 1, h = l - c || 1;
    return [Math.sqrt(d), Math.sqrt(h)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), n = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > n)
      return null;
    const s = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return s > a ? null : [i, s, n, a];
  }
  static bezierBoundingBox(t, e, i, n, s, a, l, c, d) {
    return d ? (d[0] = Math.min(d[0], t, l), d[1] = Math.min(d[1], e, c), d[2] = Math.max(d[2], t, l), d[3] = Math.max(d[3], e, c)) : d = [Math.min(t, l), Math.min(e, c), Math.max(t, l), Math.max(e, c)], A(this, tl, yp).call(this, t, i, s, l, e, n, a, c, 3 * (-t + 3 * (i - s) + l), 6 * (t - 2 * i + s), 3 * (i - t), d), A(this, tl, yp).call(this, t, i, s, l, e, n, a, c, 3 * (-e + 3 * (n - a) + c), 6 * (e - 2 * n + a), 3 * (n - e), d), d;
  }
}
ra = new WeakSet(), jh = function(t, e, i, n, s, a, l, c, d, h) {
  if (d <= 0 || d >= 1)
    return;
  const p = 1 - d, g = d * d, v = g * d, b = p * (p * (p * t + 3 * d * e) + 3 * g * i) + v * n, _ = p * (p * (p * s + 3 * d * a) + 3 * g * l) + v * c;
  h[0] = Math.min(h[0], b), h[1] = Math.min(h[1], _), h[2] = Math.max(h[2], b), h[3] = Math.max(h[3], _);
}, tl = new WeakSet(), yp = function(t, e, i, n, s, a, l, c, d, h, p, g) {
  if (Math.abs(d) < 1e-12) {
    Math.abs(h) >= 1e-12 && A(this, ra, jh).call(this, t, e, i, n, s, a, l, c, -p / h, g);
    return;
  }
  const v = h ** 2 - 4 * p * d;
  if (v < 0)
    return;
  const b = Math.sqrt(v), _ = 2 * d;
  A(this, ra, jh).call(this, t, e, i, n, s, a, l, c, (-h + b) / _, g), A(this, ra, jh).call(this, t, e, i, n, s, a, l, c, (-h - b) / _, g);
}, m(Z, ra), m(Z, tl);
function xC(r) {
  return decodeURIComponent(escape(r));
}
let Qf = null, zm = null;
function SC(r) {
  return Qf || (Qf = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, zm = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), r.replaceAll(Qf, (t, e, i) => e ? e.normalize("NFKC") : zm.get(i));
}
function CC() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const r = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(r);
  else
    for (let t = 0; t < 32; t++)
      r[t] = Math.floor(Math.random() * 255);
  return Ev(r);
}
const xv = "pdfjs_internal_id_", Xi = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class yf {
  constructor() {
    this.constructor === yf && It("Cannot initialize BaseFilterFactory.");
  }
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, i, n, s) {
    return "none";
  }
  destroy(t = !1) {
  }
}
class wf {
  constructor() {
    this.constructor === wf && It("Cannot initialize BaseCanvasFactory.");
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext("2d")
    };
  }
  reset(t, e, i) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || i <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = i;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    It("Abstract method `_createCanvas` called.");
  }
}
class Af {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.constructor === Af && It("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), i = this.isCompressed ? mp.BINARY : mp.NONE;
    return this._fetchData(e, i).catch((n) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(t, e) {
    It("Abstract method `_fetchData` called.");
  }
}
class _f {
  constructor({
    baseUrl: t = null
  }) {
    this.constructor === _f && It("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetchData(e).catch((i) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(t) {
    It("Abstract method `_fetchData` called.");
  }
}
class Jg {
  constructor() {
    this.constructor === Jg && It("Cannot initialize BaseSVGFactory.");
  }
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const n = this._createSVG("svg:svg");
    return n.setAttribute("version", "1.1"), i || (n.setAttribute("width", `${t}px`), n.setAttribute("height", `${e}px`)), n.setAttribute("preserveAspectRatio", "none"), n.setAttribute("viewBox", `0 0 ${t} ${e}`), n;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    It("Abstract method `_createSVG` called.");
  }
}
const Ki = "http://www.w3.org/2000/svg", xs = class xs {
};
lt(xs, "CSS", 96), lt(xs, "PDF", 72), lt(xs, "PDF_TO_CSS_UNITS", xs.CSS / xs.PDF);
let ps = xs;
var Ts, xi, en, ke, Sd, Ps, ae, be, jn, Wr, zn, qr, aa, zh, Cd, Sv, el, wp, Gn, Xr, Rs, Fo, Ls, Mo, il, Ap, ks, Do;
class TC extends yf {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document
  } = {}) {
    super();
    m(this, ae);
    m(this, jn);
    m(this, zn);
    m(this, aa);
    m(this, Cd);
    m(this, el);
    m(this, Gn);
    m(this, Rs);
    m(this, Ls);
    m(this, il);
    m(this, ks);
    m(this, Ts, void 0);
    m(this, xi, void 0);
    m(this, en, void 0);
    m(this, ke, void 0);
    m(this, Sd, void 0);
    m(this, Ps, 0);
    w(this, en, e), w(this, ke, i);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let i = o(this, ae, be).get(e);
    if (i)
      return i;
    const [n, s, a] = A(this, aa, zh).call(this, e), l = e.length === 1 ? n : `${n}${s}${a}`;
    if (i = o(this, ae, be).get(l), i)
      return o(this, ae, be).set(e, i), i;
    const c = `g_${o(this, en)}_transfer_map_${$e(this, Ps)._++}`, d = `url(#${c})`;
    o(this, ae, be).set(e, d), o(this, ae, be).set(l, d);
    const h = A(this, Gn, Xr).call(this, c);
    return A(this, Ls, Mo).call(this, n, s, a, h), d;
  }
  addHCMFilter(e, i) {
    var b;
    const n = `${e}-${i}`, s = "base";
    let a = o(this, jn, Wr).get(s);
    if ((a == null ? void 0 : a.key) === n || (a ? ((b = a.filter) == null || b.remove(), a.key = n, a.url = "none", a.filter = null) : (a = {
      key: n,
      url: "none",
      filter: null
    }, o(this, jn, Wr).set(s, a)), !e || !i))
      return a.url;
    const l = A(this, ks, Do).call(this, e);
    e = Z.makeHexColor(...l);
    const c = A(this, ks, Do).call(this, i);
    if (i = Z.makeHexColor(...c), o(this, zn, qr).style.color = "", e === "#000000" && i === "#ffffff" || e === i)
      return a.url;
    const d = new Array(256);
    for (let _ = 0; _ <= 255; _++) {
      const C = _ / 255;
      d[_] = C <= 0.03928 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
    }
    const h = d.join(","), p = `g_${o(this, en)}_hcm_filter`, g = a.filter = A(this, Gn, Xr).call(this, p);
    A(this, Ls, Mo).call(this, h, h, h, g), A(this, el, wp).call(this, g);
    const v = (_, C) => {
      const E = l[_] / 255, R = c[_] / 255, L = new Array(C + 1);
      for (let M = 0; M <= C; M++)
        L[M] = E + M / C * (R - E);
      return L.join(",");
    };
    return A(this, Ls, Mo).call(this, v(0, 5), v(1, 5), v(2, 5), g), a.url = `url(#${p})`, a.url;
  }
  addAlphaFilter(e) {
    let i = o(this, ae, be).get(e);
    if (i)
      return i;
    const [n] = A(this, aa, zh).call(this, [e]), s = `alpha_${n}`;
    if (i = o(this, ae, be).get(s), i)
      return o(this, ae, be).set(e, i), i;
    const a = `g_${o(this, en)}_alpha_map_${$e(this, Ps)._++}`, l = `url(#${a})`;
    o(this, ae, be).set(e, l), o(this, ae, be).set(s, l);
    const c = A(this, Gn, Xr).call(this, a);
    return A(this, il, Ap).call(this, n, c), l;
  }
  addLuminosityFilter(e) {
    let i = o(this, ae, be).get(e || "luminosity");
    if (i)
      return i;
    let n, s;
    if (e ? ([n] = A(this, aa, zh).call(this, [e]), s = `luminosity_${n}`) : s = "luminosity", i = o(this, ae, be).get(s), i)
      return o(this, ae, be).set(e, i), i;
    const a = `g_${o(this, en)}_luminosity_map_${$e(this, Ps)._++}`, l = `url(#${a})`;
    o(this, ae, be).set(e, l), o(this, ae, be).set(s, l);
    const c = A(this, Gn, Xr).call(this, a);
    return A(this, Cd, Sv).call(this, c), e && A(this, il, Ap).call(this, n, c), l;
  }
  addHighlightHCMFilter(e, i, n, s, a) {
    var R;
    const l = `${i}-${n}-${s}-${a}`;
    let c = o(this, jn, Wr).get(e);
    if ((c == null ? void 0 : c.key) === l || (c ? ((R = c.filter) == null || R.remove(), c.key = l, c.url = "none", c.filter = null) : (c = {
      key: l,
      url: "none",
      filter: null
    }, o(this, jn, Wr).set(e, c)), !i || !n))
      return c.url;
    const [d, h] = [i, n].map(A(this, ks, Do).bind(this));
    let p = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), g = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), [v, b] = [s, a].map(A(this, ks, Do).bind(this));
    g < p && ([p, g, v, b] = [g, p, b, v]), o(this, zn, qr).style.color = "";
    const _ = (L, M, D) => {
      const N = new Array(256), U = (g - p) / D, S = L / 255, T = (M - L) / (255 * D);
      let I = 0;
      for (let k = 0; k <= D; k++) {
        const H = Math.round(p + k * U), j = S + k * T;
        for (let z = I; z <= H; z++)
          N[z] = j;
        I = H + 1;
      }
      for (let k = I; k < 256; k++)
        N[k] = N[I - 1];
      return N.join(",");
    }, C = `g_${o(this, en)}_hcm_${e}_filter`, E = c.filter = A(this, Gn, Xr).call(this, C);
    return A(this, el, wp).call(this, E), A(this, Ls, Mo).call(this, _(v[0], b[0], 5), _(v[1], b[1], 5), _(v[2], b[2], 5), E), c.url = `url(#${C})`, c.url;
  }
  destroy(e = !1) {
    e && o(this, jn, Wr).size !== 0 || (o(this, xi) && (o(this, xi).parentNode.parentNode.remove(), w(this, xi, null)), o(this, Ts) && (o(this, Ts).clear(), w(this, Ts, null)), w(this, Ps, 0));
  }
}
Ts = new WeakMap(), xi = new WeakMap(), en = new WeakMap(), ke = new WeakMap(), Sd = new WeakMap(), Ps = new WeakMap(), ae = new WeakSet(), be = function() {
  return o(this, Ts) || w(this, Ts, /* @__PURE__ */ new Map());
}, jn = new WeakSet(), Wr = function() {
  return o(this, Sd) || w(this, Sd, /* @__PURE__ */ new Map());
}, zn = new WeakSet(), qr = function() {
  if (!o(this, xi)) {
    const e = o(this, ke).createElement("div"), {
      style: i
    } = e;
    i.visibility = "hidden", i.contain = "strict", i.width = i.height = 0, i.position = "absolute", i.top = i.left = 0, i.zIndex = -1;
    const n = o(this, ke).createElementNS(Ki, "svg");
    n.setAttribute("width", 0), n.setAttribute("height", 0), w(this, xi, o(this, ke).createElementNS(Ki, "defs")), e.append(n), n.append(o(this, xi)), o(this, ke).body.append(e);
  }
  return o(this, xi);
}, aa = new WeakSet(), zh = function(e) {
  if (e.length === 1) {
    const d = e[0], h = new Array(256);
    for (let g = 0; g < 256; g++)
      h[g] = d[g] / 255;
    const p = h.join(",");
    return [p, p, p];
  }
  const [i, n, s] = e, a = new Array(256), l = new Array(256), c = new Array(256);
  for (let d = 0; d < 256; d++)
    a[d] = i[d] / 255, l[d] = n[d] / 255, c[d] = s[d] / 255;
  return [a.join(","), l.join(","), c.join(",")];
}, Cd = new WeakSet(), Sv = function(e) {
  const i = o(this, ke).createElementNS(Ki, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(i);
}, el = new WeakSet(), wp = function(e) {
  const i = o(this, ke).createElementNS(Ki, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(i);
}, Gn = new WeakSet(), Xr = function(e) {
  const i = o(this, ke).createElementNS(Ki, "filter");
  return i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("id", e), o(this, zn, qr).append(i), i;
}, Rs = new WeakSet(), Fo = function(e, i, n) {
  const s = o(this, ke).createElementNS(Ki, i);
  s.setAttribute("type", "discrete"), s.setAttribute("tableValues", n), e.append(s);
}, Ls = new WeakSet(), Mo = function(e, i, n, s) {
  const a = o(this, ke).createElementNS(Ki, "feComponentTransfer");
  s.append(a), A(this, Rs, Fo).call(this, a, "feFuncR", e), A(this, Rs, Fo).call(this, a, "feFuncG", i), A(this, Rs, Fo).call(this, a, "feFuncB", n);
}, il = new WeakSet(), Ap = function(e, i) {
  const n = o(this, ke).createElementNS(Ki, "feComponentTransfer");
  i.append(n), A(this, Rs, Fo).call(this, n, "feFuncA", e);
}, ks = new WeakSet(), Do = function(e) {
  return o(this, zn, qr).style.color = e, nm(getComputedStyle(o(this, zn, qr)).getPropertyValue("color"));
};
class PC extends wf {
  constructor({
    ownerDocument: t = globalThis.document
  } = {}) {
    super(), this._document = t;
  }
  _createCanvas(t, e) {
    const i = this._document.createElement("canvas");
    return i.width = t, i.height = e, i;
  }
}
async function Ef(r, t = "text") {
  if (Oo(r, document.baseURI)) {
    const e = await fetch(r);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, i) => {
    const n = new XMLHttpRequest();
    n.open("GET", r, !0), n.responseType = t, n.onreadystatechange = () => {
      if (n.readyState === XMLHttpRequest.DONE) {
        if (n.status === 200 || n.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(n.response);
              return;
          }
          e(n.responseText);
          return;
        }
        i(new Error(n.statusText));
      }
    }, n.send(null);
  });
}
class Cv extends Af {
  _fetchData(t, e) {
    return Ef(t, this.isCompressed ? "arraybuffer" : "text").then((i) => ({
      cMapData: i instanceof ArrayBuffer ? new Uint8Array(i) : bf(i),
      compressionType: e
    }));
  }
}
class Tv extends _f {
  _fetchData(t) {
    return Ef(t, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class Qg extends Jg {
  _createSVG(t) {
    return document.createElementNS(Ki, t);
  }
}
class xh {
  constructor({
    viewBox: t,
    scale: e,
    rotation: i,
    offsetX: n = 0,
    offsetY: s = 0,
    dontFlip: a = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = i, this.offsetX = n, this.offsetY = s;
    const l = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
    let d, h, p, g;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        d = -1, h = 0, p = 0, g = 1;
        break;
      case 90:
        d = 0, h = 1, p = 1, g = 0;
        break;
      case 270:
        d = 0, h = -1, p = -1, g = 0;
        break;
      case 0:
        d = 1, h = 0, p = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    a && (p = -p, g = -g);
    let v, b, _, C;
    d === 0 ? (v = Math.abs(c - t[1]) * e + n, b = Math.abs(l - t[0]) * e + s, _ = (t[3] - t[1]) * e, C = (t[2] - t[0]) * e) : (v = Math.abs(l - t[0]) * e + n, b = Math.abs(c - t[1]) * e + s, _ = (t[2] - t[0]) * e, C = (t[3] - t[1]) * e), this.transform = [d * e, h * e, p * e, g * e, v - d * e * l - p * e * c, b - h * e * l - g * e * c], this.width = _, this.height = C;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return _t(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: n = this.offsetY,
    dontFlip: s = !1
  } = {}) {
    return new xh({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: n,
      dontFlip: s
    });
  }
  convertToViewportPoint(t, e) {
    return Z.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = Z.applyTransform([t[0], t[1]], this.transform), i = Z.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], i[0], i[1]];
  }
  convertToPdfPoint(t, e) {
    return Z.applyInverseTransform([t, e], this.transform);
  }
}
class tm extends vs {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function em(r) {
  const t = r.length;
  let e = 0;
  for (; e < t && r[e].trim() === ""; )
    e++;
  return r.substring(e, e + 5).toLowerCase() === "data:";
}
function im(r) {
  return typeof r == "string" && /\.pdf$/i.test(r);
}
function RC(r) {
  return [r] = r.split(/[#?]/, 1), r.substring(r.lastIndexOf("/") + 1);
}
function LC(r, t = "document.pdf") {
  if (typeof r != "string")
    return t;
  if (em(r))
    return ut('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, n = e.exec(r);
  let s = i.exec(n[1]) || i.exec(n[2]) || i.exec(n[3]);
  if (s && (s = s[0], s.includes("%")))
    try {
      s = i.exec(decodeURIComponent(s))[0];
    } catch {
    }
  return s || t;
}
class Gm {
  constructor() {
    lt(this, "started", /* @__PURE__ */ Object.create(null));
    lt(this, "times", []);
  }
  time(t) {
    t in this.started && ut(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || ut(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: i
    } of this.times)
      e = Math.max(i.length, e);
    for (const {
      name: i,
      start: n,
      end: s
    } of this.times)
      t.push(`${i.padEnd(e)} ${s - n}ms
`);
    return t.join("");
  }
}
function Oo(r, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(r, t) : new URL(r);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Ne(r) {
  r.preventDefault();
}
function Pv(r) {
  console.log("Deprecated API usage: " + r);
}
let Vm;
class Rv {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    Vm || (Vm = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = Vm.exec(t);
    if (!e)
      return null;
    const i = parseInt(e[1], 10);
    let n = parseInt(e[2], 10);
    n = n >= 1 && n <= 12 ? n - 1 : 0;
    let s = parseInt(e[3], 10);
    s = s >= 1 && s <= 31 ? s : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let l = parseInt(e[5], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    let c = parseInt(e[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const d = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let p = parseInt(e[9], 10) || 0;
    return p = p >= 0 && p <= 59 ? p : 0, d === "-" ? (a += h, l += p) : d === "+" && (a -= h, l -= p), new Date(Date.UTC(i, n, s, a, l, c));
  }
}
function kC(r, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: i,
    height: n
  } = r.attributes.style, s = [0, 0, parseInt(i), parseInt(n)];
  return new xh({
    viewBox: s,
    scale: t,
    rotation: e
  });
}
function nm(r) {
  if (r.startsWith("#")) {
    const t = parseInt(r.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return r.startsWith("rgb(") ? r.slice(4, -1).split(",").map((t) => parseInt(t)) : r.startsWith("rgba(") ? r.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (ut(`Not a valid color format: "${r}"`), [0, 0, 0]);
}
function IC(r) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of r.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    r.set(e, nm(i));
  }
  t.remove();
}
function Ut(r) {
  const {
    a: t,
    b: e,
    c: i,
    d: n,
    e: s,
    f: a
  } = r.getTransform();
  return [t, e, i, n, s, a];
}
function Yi(r) {
  const {
    a: t,
    b: e,
    c: i,
    d: n,
    e: s,
    f: a
  } = r.getTransform().invertSelf();
  return [t, e, i, n, s, a];
}
function Mr(r, t, e = !1, i = !0) {
  if (t instanceof xh) {
    const {
      pageWidth: n,
      pageHeight: s
    } = t.rawDims, {
      style: a
    } = r, l = Oe.isCSSRoundSupported, c = `var(--scale-factor) * ${n}px`, d = `var(--scale-factor) * ${s}px`, h = l ? `round(${c}, 1px)` : `calc(${c})`, p = l ? `round(${d}, 1px)` : `calc(${d})`;
    !e || t.rotation % 180 === 0 ? (a.width = h, a.height = p) : (a.width = p, a.height = h);
  }
  i && r.setAttribute("data-main-rotation", t.rotation);
}
var Is, Fs, Si, Ms, Td, Lv, Pd, kv, Rd, Iv, oa, Gh, Ld, Fv, nl, Ep;
const kd = class kd {
  constructor(t) {
    m(this, Pd);
    m(this, Rd);
    m(this, oa);
    m(this, Ld);
    m(this, nl);
    m(this, Is, null);
    m(this, Fs, null);
    m(this, Si, void 0);
    m(this, Ms, null);
    w(this, Si, t);
  }
  render() {
    const t = w(this, Is, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ne), t.addEventListener("pointerdown", A(kd, Td, Lv));
    const e = w(this, Ms, document.createElement("div"));
    e.className = "buttons", t.append(e);
    const i = o(this, Si).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, s = o(this, Si)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * s}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return A(this, Ld, Fv).call(this), t;
  }
  hide() {
    var t;
    o(this, Is).classList.add("hidden"), (t = o(this, Fs)) == null || t.hideDropdown();
  }
  show() {
    o(this, Is).classList.remove("hidden");
  }
  addAltTextButton(t) {
    A(this, oa, Gh).call(this, t), o(this, Ms).prepend(t, o(this, nl, Ep));
  }
  addColorPicker(t) {
    w(this, Fs, t);
    const e = t.renderButton();
    A(this, oa, Gh).call(this, e), o(this, Ms).prepend(e, o(this, nl, Ep));
  }
  remove() {
    var t;
    o(this, Is).remove(), (t = o(this, Fs)) == null || t.destroy(), w(this, Fs, null);
  }
};
Is = new WeakMap(), Fs = new WeakMap(), Si = new WeakMap(), Ms = new WeakMap(), Td = new WeakSet(), Lv = function(t) {
  t.stopPropagation();
}, Pd = new WeakSet(), kv = function(t) {
  o(this, Si)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, Rd = new WeakSet(), Iv = function(t) {
  o(this, Si)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, oa = new WeakSet(), Gh = function(t) {
  t.addEventListener("focusin", A(this, Pd, kv).bind(this), {
    capture: !0
  }), t.addEventListener("focusout", A(this, Rd, Iv).bind(this), {
    capture: !0
  }), t.addEventListener("contextmenu", Ne);
}, Ld = new WeakSet(), Fv = function() {
  const t = document.createElement("button");
  t.className = "delete", t.tabIndex = 0, t.setAttribute("data-l10n-id", `pdfjs-editor-remove-${o(this, Si).editorType}-button`), A(this, oa, Gh).call(this, t), t.addEventListener("click", (e) => {
    o(this, Si)._uiManager.delete();
  }), o(this, Ms).append(t);
}, nl = new WeakSet(), Ep = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(kd, Td);
let _p = kd;
var sl, Ds, rl, Id, Mv, Fd, Dv, Md, Ov;
class FC {
  constructor(t) {
    m(this, Id);
    m(this, Fd);
    m(this, Md);
    m(this, sl, null);
    m(this, Ds, null);
    m(this, rl, void 0);
    w(this, rl, t);
  }
  show(t, e, i) {
    const [n, s] = A(this, Fd, Dv).call(this, e, i), {
      style: a
    } = o(this, Ds) || w(this, Ds, A(this, Id, Mv).call(this));
    t.append(o(this, Ds)), a.insetInlineEnd = `${100 * n}%`, a.top = `calc(${100 * s}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    o(this, Ds).remove();
  }
}
sl = new WeakMap(), Ds = new WeakMap(), rl = new WeakMap(), Id = new WeakSet(), Mv = function() {
  const t = w(this, Ds, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ne);
  const e = w(this, sl, document.createElement("div"));
  return e.className = "buttons", t.append(e), A(this, Md, Ov).call(this), t;
}, Fd = new WeakSet(), Dv = function(t, e) {
  let i = 0, n = 0;
  for (const s of t) {
    const a = s.y + s.height;
    if (a < i)
      continue;
    const l = s.x + (e ? s.width : 0);
    if (a > i) {
      n = l, i = a;
      continue;
    }
    e ? l > n && (n = l) : l < n && (n = l);
  }
  return [e ? 1 - n : n, i];
}, Md = new WeakSet(), Ov = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"), t.addEventListener("contextmenu", Ne), t.addEventListener("click", () => {
    o(this, rl).highlightSelection("floating_button");
  }), o(this, sl).append(t);
};
function vd(r, t, e) {
  for (const i of e)
    t.addEventListener(i, r[i].bind(r));
}
function MC(r) {
  return Math.round(Math.min(255, Math.max(1, 255 * r))).toString(16).padStart(2, "0");
}
var Dd;
class DC {
  constructor() {
    m(this, Dd, 0);
  }
  get id() {
    return `${fC}${$e(this, Dd)._++}`;
  }
}
Dd = new WeakMap();
var al, Od, ti, ol, Sp;
const fm = class fm {
  constructor() {
    m(this, ol);
    m(this, al, CC());
    m(this, Od, 0);
    m(this, ti, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', i = new OffscreenCanvas(1, 3).getContext("2d"), n = new Image();
    n.src = t;
    const s = n.decode().then(() => (i.drawImage(n, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return _t(this, "_isSVGFittingCanvas", s);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: n,
      type: s
    } = t;
    return A(this, ol, Sp).call(this, `${e}_${i}_${n}_${s}`, t);
  }
  async getFromUrl(t) {
    return A(this, ol, Sp).call(this, t, t);
  }
  async getFromId(t) {
    o(this, ti) || w(this, ti, /* @__PURE__ */ new Map());
    const e = o(this, ti).get(t);
    return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null;
  }
  getSvgUrl(t) {
    const e = o(this, ti).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    o(this, ti) || w(this, ti, /* @__PURE__ */ new Map());
    const e = o(this, ti).get(t);
    e && (e.refCounter -= 1, e.refCounter === 0 && (e.bitmap = null));
  }
  isValidId(t) {
    return t.startsWith(`image_${o(this, al)}_`);
  }
};
al = new WeakMap(), Od = new WeakMap(), ti = new WeakMap(), ol = new WeakSet(), Sp = async function(t, e) {
  o(this, ti) || w(this, ti, /* @__PURE__ */ new Map());
  let i = o(this, ti).get(t);
  if (i === null)
    return null;
  if (i != null && i.bitmap)
    return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${o(this, al)}_${$e(this, Od)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let n;
    if (typeof e == "string" ? (i.url = e, n = await Ef(e, "blob")) : n = i.file = e, n.type === "image/svg+xml") {
      const s = fm._isSVGFittingCanvas, a = new FileReader(), l = new Image(), c = new Promise((d, h) => {
        l.onload = () => {
          i.bitmap = l, i.isSvg = !0, d();
        }, a.onload = async () => {
          const p = i.svgUrl = a.result;
          l.src = await s ? `${p}#svgView(preserveAspectRatio(none))` : p;
        }, l.onerror = a.onerror = h;
      });
      a.readAsDataURL(n), await c;
    } else
      i.bitmap = await createImageBitmap(n);
    i.refCounter = 1;
  } catch (n) {
    console.error(n), i = null;
  }
  return o(this, ti).set(t, i), i && o(this, ti).set(i.id, i), i;
};
let xp = fm;
var oe, Vn, ll, le;
class OC {
  constructor(t = 128) {
    m(this, oe, []);
    m(this, Vn, !1);
    m(this, ll, void 0);
    m(this, le, -1);
    w(this, ll, t);
  }
  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: n,
    type: s = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: l = !1
  }) {
    if (n && t(), o(this, Vn))
      return;
    const c = {
      cmd: t,
      undo: e,
      post: i,
      type: s
    };
    if (o(this, le) === -1) {
      o(this, oe).length > 0 && (o(this, oe).length = 0), w(this, le, 0), o(this, oe).push(c);
      return;
    }
    if (a && o(this, oe)[o(this, le)].type === s) {
      l && (c.undo = o(this, oe)[o(this, le)].undo), o(this, oe)[o(this, le)] = c;
      return;
    }
    const d = o(this, le) + 1;
    d === o(this, ll) ? o(this, oe).splice(0, 1) : (w(this, le, d), d < o(this, oe).length && o(this, oe).splice(d)), o(this, oe).push(c);
  }
  undo() {
    if (o(this, le) === -1)
      return;
    w(this, Vn, !0);
    const {
      undo: t,
      post: e
    } = o(this, oe)[o(this, le)];
    t(), e == null || e(), w(this, Vn, !1), w(this, le, o(this, le) - 1);
  }
  redo() {
    if (o(this, le) < o(this, oe).length - 1) {
      w(this, le, o(this, le) + 1), w(this, Vn, !0);
      const {
        cmd: t,
        post: e
      } = o(this, oe)[o(this, le)];
      t(), e == null || e(), w(this, Vn, !1);
    }
  }
  hasSomethingToUndo() {
    return o(this, le) !== -1;
  }
  hasSomethingToRedo() {
    return o(this, le) < o(this, oe).length - 1;
  }
  destroy() {
    w(this, oe, null);
  }
}
oe = new WeakMap(), Vn = new WeakMap(), ll = new WeakMap(), le = new WeakMap();
var Nd, Nv;
class Sh {
  constructor(t) {
    m(this, Nd);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Oe.platform;
    for (const [i, n, s = {}] of t)
      for (const a of i) {
        const l = a.startsWith("mac+");
        e && l ? (this.callbacks.set(a.slice(4), {
          callback: n,
          options: s
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !l && (this.callbacks.set(a, {
          callback: n,
          options: s
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const i = this.callbacks.get(A(this, Nd, Nv).call(this, e));
    if (!i)
      return;
    const {
      callback: n,
      options: {
        bubbles: s = !1,
        args: a = [],
        checker: l = null
      }
    } = i;
    l && !l(t, e) || (n.bind(t, ...a, e)(), s || (e.stopPropagation(), e.preventDefault()));
  }
}
Nd = new WeakSet(), Nv = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Bd = class Bd {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return IC(t), _t(this, "_colors", t);
  }
  convert(t) {
    const e = nm(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [i, n] of this._colors)
      if (n.every((s, a) => s === e[a]))
        return Bd._colorsMapping.get(i);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? Z.makeHexColor(...e) : t;
  }
};
lt(Bd, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Cp = Bd;
var je, Jt, he, la, nn, ca, oi, ha, Os, Ci, sn, Ns, cl, hl, Ti, da, Wn, Pi, $d, qn, dl, Bs, ul, ua, de, Rt, rn, $s, fl, pl, gl, ml, vl, bl, yl, wl, Al, _l, El, xl, Sl, Cl, Xn, Ri, an, Tl, fa, Vh, Ud, Bv, Hd, $v, pa, Wh, jd, Uv, zd, Hv, Gd, jv, Pl, Tp, Rl, Pp, Ll, Rp, kl, Lp, Il, kp, ue, xe, Li, On, Vd, zv, Wd, Gv, Fl, Ip, qd, Vv, Us, No, Ml, Fp;
const Qr = class Qr {
  constructor(t, e, i, n, s, a, l, c, d) {
    m(this, fa);
    m(this, Ud);
    m(this, Hd);
    m(this, pa);
    m(this, jd);
    m(this, zd);
    m(this, Gd);
    m(this, Pl);
    m(this, Rl);
    m(this, Ll);
    m(this, kl);
    m(this, Il);
    m(this, ue);
    m(this, Li);
    m(this, Vd);
    m(this, Wd);
    m(this, Fl);
    m(this, qd);
    m(this, Us);
    m(this, Ml);
    m(this, je, null);
    m(this, Jt, /* @__PURE__ */ new Map());
    m(this, he, /* @__PURE__ */ new Map());
    m(this, la, null);
    m(this, nn, null);
    m(this, ca, null);
    m(this, oi, new OC());
    m(this, ha, 0);
    m(this, Os, /* @__PURE__ */ new Set());
    m(this, Ci, null);
    m(this, sn, null);
    m(this, Ns, /* @__PURE__ */ new Set());
    m(this, cl, !1);
    m(this, hl, null);
    m(this, Ti, null);
    m(this, da, null);
    m(this, Wn, !1);
    m(this, Pi, null);
    m(this, $d, new DC());
    m(this, qn, !1);
    m(this, dl, !1);
    m(this, Bs, null);
    m(this, ul, null);
    m(this, ua, null);
    m(this, de, yt.NONE);
    m(this, Rt, /* @__PURE__ */ new Set());
    m(this, rn, null);
    m(this, $s, null);
    m(this, fl, null);
    m(this, pl, this.blur.bind(this));
    m(this, gl, this.focus.bind(this));
    m(this, ml, this.copy.bind(this));
    m(this, vl, this.cut.bind(this));
    m(this, bl, this.paste.bind(this));
    m(this, yl, this.keydown.bind(this));
    m(this, wl, this.keyup.bind(this));
    m(this, Al, this.onEditingAction.bind(this));
    m(this, _l, this.onPageChanging.bind(this));
    m(this, El, this.onScaleChanging.bind(this));
    m(this, xl, A(this, Hd, $v).bind(this));
    m(this, Sl, this.onRotationChanging.bind(this));
    m(this, Cl, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, Xn, [0, 0]);
    m(this, Ri, null);
    m(this, an, null);
    m(this, Tl, null);
    w(this, an, t), w(this, Tl, e), w(this, la, i), this._eventBus = n, this._eventBus._on("editingaction", o(this, Al)), this._eventBus._on("pagechanging", o(this, _l)), this._eventBus._on("scalechanging", o(this, El)), this._eventBus._on("rotationchanging", o(this, Sl)), A(this, jd, Uv).call(this), A(this, Rl, Pp).call(this), w(this, nn, s.annotationStorage), w(this, hl, s.filterFactory), w(this, $s, a), w(this, da, l || null), w(this, cl, c), w(this, ua, d || null), this.viewParameters = {
      realScale: ps.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = Qr.prototype, e = (a) => o(a, an).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), i = (a, {
      target: l
    }) => {
      if (l instanceof HTMLInputElement) {
        const {
          type: c
        } = l;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, n = this.TRANSLATE_SMALL, s = this.TRANSLATE_BIG;
    return _t(this, "_keyboardManager", new Sh([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: i
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: i
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: i
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: i
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && o(a, an).contains(l) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && o(a, an).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, s],
      checker: e
    }]]));
  }
  destroy() {
    var t, e;
    A(this, Ll, Rp).call(this), A(this, Pl, Tp).call(this), this._eventBus._off("editingaction", o(this, Al)), this._eventBus._off("pagechanging", o(this, _l)), this._eventBus._off("scalechanging", o(this, El)), this._eventBus._off("rotationchanging", o(this, Sl));
    for (const i of o(this, he).values())
      i.destroy();
    o(this, he).clear(), o(this, Jt).clear(), o(this, Ns).clear(), w(this, je, null), o(this, Rt).clear(), o(this, oi).destroy(), (t = o(this, la)) == null || t.destroy(), (e = o(this, Pi)) == null || e.hide(), w(this, Pi, null), o(this, Ti) && (clearTimeout(o(this, Ti)), w(this, Ti, null)), o(this, Ri) && (clearTimeout(o(this, Ri)), w(this, Ri, null)), A(this, zd, Hv).call(this);
  }
  async mlGuess(t) {
    var e;
    return ((e = o(this, ua)) == null ? void 0 : e.guess(t)) || null;
  }
  get hasMLManager() {
    return !!o(this, ua);
  }
  get hcmFilter() {
    return _t(this, "hcmFilter", o(this, $s) ? o(this, hl).addHCMFilter(o(this, $s).foreground, o(this, $s).background) : "none");
  }
  get direction() {
    return _t(this, "direction", getComputedStyle(o(this, an)).direction);
  }
  get highlightColors() {
    return _t(this, "highlightColors", o(this, da) ? new Map(o(this, da).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return _t(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    w(this, ul, t);
  }
  editAltText(t) {
    var e;
    (e = o(this, la)) == null || e.editAltText(this, t);
  }
  onPageChanging({
    pageNumber: t
  }) {
    w(this, ha, t - 1);
  }
  focusMainContainer() {
    o(this, an).focus();
  }
  findParent(t, e) {
    for (const i of o(this, he).values()) {
      const {
        x: n,
        y: s,
        width: a,
        height: l
      } = i.div.getBoundingClientRect();
      if (t >= n && t <= n + a && e >= s && e <= s + l)
        return i;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    o(this, Tl).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    o(this, Ns).add(t);
  }
  removeShouldRescale(t) {
    o(this, Ns).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * ps.PDF_TO_CSS_UNITS;
    for (const e of o(this, Ns))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: i,
      anchorOffset: n,
      focusNode: s,
      focusOffset: a
    } = e, l = e.toString(), d = A(this, fa, Vh).call(this, e).closest(".textLayer"), h = this.getSelectionBoxes(d);
    if (h) {
      e.empty(), o(this, de) === yt.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: yt.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const p of o(this, he).values())
        if (p.hasTextLayer(d)) {
          p.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: t,
            boxes: h,
            anchorNode: i,
            anchorOffset: n,
            focusNode: s,
            focusOffset: a,
            text: l
          });
          break;
        }
    }
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && o(this, nn) && !o(this, nn).has(t.id) && o(this, nn).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, o(this, Wn) && (w(this, Wn, !1), A(this, pa, Wh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of o(this, Rt))
      if (e.div.contains(t)) {
        w(this, Bs, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!o(this, Bs))
      return;
    const [t, e] = o(this, Bs);
    w(this, Bs, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0
    }), e.focus();
  }
  addEditListeners() {
    A(this, Rl, Pp).call(this), A(this, kl, Lp).call(this);
  }
  removeEditListeners() {
    A(this, Ll, Rp).call(this), A(this, Il, kp).call(this);
  }
  copy(t) {
    var i;
    if (t.preventDefault(), (i = o(this, je)) == null || i.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const n of o(this, Rt)) {
      const s = n.serialize(!0);
      s && e.push(s);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const s of e.items)
      for (const a of o(this, sn))
        if (a.isHandlingMimeForPasting(s.type)) {
          a.paste(s, this.currentLayer);
          return;
        }
    let i = e.getData("application/pdfjs");
    if (!i)
      return;
    try {
      i = JSON.parse(i);
    } catch (s) {
      ut(`paste: "${s.message}".`);
      return;
    }
    if (!Array.isArray(i))
      return;
    this.unselectAll();
    const n = this.currentLayer;
    try {
      const s = [];
      for (const c of i) {
        const d = n.deserialize(c);
        if (!d)
          return;
        s.push(d);
      }
      const a = () => {
        for (const c of s)
          A(this, Fl, Ip).call(this, c);
        A(this, Ml, Fp).call(this, s);
      }, l = () => {
        for (const c of s)
          c.remove();
      };
      this.addCommands({
        cmd: a,
        undo: l,
        mustExec: !0
      });
    } catch (s) {
      ut(`paste: "${s.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), o(this, de) !== yt.NONE && !this.isEditorHandlingKeyboard && Qr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, o(this, Wn) && (w(this, Wn, !1), A(this, pa, Wh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (A(this, Gd, jv).call(this), A(this, kl, Lp).call(this), A(this, ue, xe).call(this, {
      isEditing: o(this, de) !== yt.NONE,
      isEmpty: A(this, Us, No).call(this),
      hasSomethingToUndo: o(this, oi).hasSomethingToUndo(),
      hasSomethingToRedo: o(this, oi).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (A(this, Pl, Tp).call(this), A(this, Il, kp).call(this), A(this, ue, xe).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!o(this, sn)) {
      w(this, sn, t);
      for (const e of o(this, sn))
        A(this, Li, On).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return o(this, $d).id;
  }
  get currentLayer() {
    return o(this, he).get(o(this, ha));
  }
  getLayer(t) {
    return o(this, he).get(t);
  }
  get currentPageIndex() {
    return o(this, ha);
  }
  addLayer(t) {
    o(this, he).set(t.pageIndex, t), o(this, qn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    o(this, he).delete(t.pageIndex);
  }
  updateMode(t, e = null, i = !1) {
    if (o(this, de) !== t) {
      if (w(this, de, t), t === yt.NONE) {
        this.setEditingState(!1), A(this, Wd, Gv).call(this);
        return;
      }
      this.setEditingState(!0), A(this, Vd, zv).call(this), this.unselectAll();
      for (const n of o(this, he).values())
        n.updateMode(t);
      if (!e && i) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (e) {
        for (const n of o(this, Jt).values())
          if (n.annotationElementId === e) {
            this.setSelected(n), n.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== o(this, de) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var i;
    if (o(this, sn)) {
      switch (t) {
        case ot.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case ot.HIGHLIGHT_DEFAULT_COLOR:
          (i = o(this, ul)) == null || i.updateColor(e);
          break;
        case ot.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (o(this, fl) || w(this, fl, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const n of o(this, Rt))
        n.updateParams(t, e);
      for (const n of o(this, sn))
        n.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, i = !1) {
    var s;
    for (const a of o(this, Jt).values())
      a.editorType === t && a.show(e);
    (((s = o(this, fl)) == null ? void 0 : s.get(ot.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, Li, On).call(this, [[ot.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (o(this, dl) !== t) {
      w(this, dl, t);
      for (const e of o(this, he).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const i of o(this, Jt).values())
      i.pageIndex === t && e.push(i);
    return e;
  }
  getEditor(t) {
    return o(this, Jt).get(t);
  }
  addEditor(t) {
    o(this, Jt).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (o(this, Ti) && clearTimeout(o(this, Ti)), w(this, Ti, setTimeout(() => {
      this.focusMainContainer(), w(this, Ti, null);
    }, 0))), o(this, Jt).delete(t.id), this.unselect(t), (!t.annotationElementId || !o(this, Os).has(t.annotationElementId)) && ((e = o(this, nn)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    o(this, Os).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return o(this, Os).has(t);
  }
  removeDeletedAnnotationElement(t) {
    o(this, Os).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    o(this, je) !== t && (w(this, je, t), t && A(this, Li, On).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    o(this, qd, Vv) === t && A(this, Li, On).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (o(this, Rt).has(t)) {
      o(this, Rt).delete(t), t.unselect(), A(this, ue, xe).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    o(this, Rt).add(t), t.select(), A(this, Li, On).call(this, t.propertiesToUpdate), A(this, ue, xe).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of o(this, Rt))
      e !== t && e.unselect();
    o(this, Rt).clear(), o(this, Rt).add(t), t.select(), A(this, Li, On).call(this, t.propertiesToUpdate), A(this, ue, xe).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return o(this, Rt).has(t);
  }
  get firstSelectedEditor() {
    return o(this, Rt).values().next().value;
  }
  unselect(t) {
    t.unselect(), o(this, Rt).delete(t), A(this, ue, xe).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return o(this, Rt).size !== 0;
  }
  get isEnterHandled() {
    return o(this, Rt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    o(this, oi).undo(), A(this, ue, xe).call(this, {
      hasSomethingToUndo: o(this, oi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, Us, No).call(this)
    });
  }
  redo() {
    o(this, oi).redo(), A(this, ue, xe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: o(this, oi).hasSomethingToRedo(),
      isEmpty: A(this, Us, No).call(this)
    });
  }
  addCommands(t) {
    o(this, oi).add(t), A(this, ue, xe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, Us, No).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...o(this, Rt)], e = () => {
      for (const n of t)
        n.remove();
    }, i = () => {
      for (const n of t)
        A(this, Fl, Ip).call(this, n);
    };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = o(this, je)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return o(this, je) || this.hasSelection;
  }
  selectAll() {
    for (const t of o(this, Rt))
      t.commit();
    A(this, Ml, Fp).call(this, o(this, Jt).values());
  }
  unselectAll() {
    if (!(o(this, je) && (o(this, je).commitOrRemove(), o(this, de) !== yt.NONE)) && this.hasSelection) {
      for (const t of o(this, Rt))
        t.unselect();
      o(this, Rt).clear(), A(this, ue, xe).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection)
      return;
    o(this, Xn)[0] += t, o(this, Xn)[1] += e;
    const [n, s] = o(this, Xn), a = [...o(this, Rt)], l = 1e3;
    o(this, Ri) && clearTimeout(o(this, Ri)), w(this, Ri, setTimeout(() => {
      w(this, Ri, null), o(this, Xn)[0] = o(this, Xn)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of a)
            o(this, Jt).has(c.id) && c.translateInPage(n, s);
        },
        undo: () => {
          for (const c of a)
            o(this, Jt).has(c.id) && c.translateInPage(-n, -s);
        },
        mustExec: !1
      });
    }, l));
    for (const c of a)
      c.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), w(this, Ci, /* @__PURE__ */ new Map());
      for (const t of o(this, Rt))
        o(this, Ci).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!o(this, Ci))
      return !1;
    this.disableUserSelect(!1);
    const t = o(this, Ci);
    w(this, Ci, null);
    let e = !1;
    for (const [{
      x: n,
      y: s,
      pageIndex: a
    }, l] of t)
      l.newX = n, l.newY = s, l.newPageIndex = a, e || (e = n !== l.savedX || s !== l.savedY || a !== l.savedPageIndex);
    if (!e)
      return !1;
    const i = (n, s, a, l) => {
      if (o(this, Jt).has(n.id)) {
        const c = o(this, he).get(l);
        c ? n._setParentAndPosition(c, s, a) : (n.pageIndex = l, n.x = s, n.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [n, {
          newX: s,
          newY: a,
          newPageIndex: l
        }] of t)
          i(n, s, a, l);
      },
      undo: () => {
        for (const [n, {
          savedX: s,
          savedY: a,
          savedPageIndex: l
        }] of t)
          i(n, s, a, l);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (o(this, Ci))
      for (const i of o(this, Ci).keys())
        i.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || o(this, Rt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return o(this, je) === t;
  }
  getActive() {
    return o(this, je);
  }
  getMode() {
    return o(this, de);
  }
  get imageManager() {
    return _t(this, "imageManager", new xp());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let d = 0, h = e.rangeCount; d < h; d++)
      if (!t.contains(e.getRangeAt(d).commonAncestorContainer))
        return null;
    const {
      x: i,
      y: n,
      width: s,
      height: a
    } = t.getBoundingClientRect();
    let l;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        l = (d, h, p, g) => ({
          x: (h - n) / a,
          y: 1 - (d + p - i) / s,
          width: g / a,
          height: p / s
        });
        break;
      case "180":
        l = (d, h, p, g) => ({
          x: 1 - (d + p - i) / s,
          y: 1 - (h + g - n) / a,
          width: p / s,
          height: g / a
        });
        break;
      case "270":
        l = (d, h, p, g) => ({
          x: 1 - (h + g - n) / a,
          y: (d - i) / s,
          width: g / a,
          height: p / s
        });
        break;
      default:
        l = (d, h, p, g) => ({
          x: (d - i) / s,
          y: (h - n) / a,
          width: p / s,
          height: g / a
        });
        break;
    }
    const c = [];
    for (let d = 0, h = e.rangeCount; d < h; d++) {
      const p = e.getRangeAt(d);
      if (!p.collapsed)
        for (const {
          x: g,
          y: v,
          width: b,
          height: _
        } of p.getClientRects())
          b === 0 || _ === 0 || c.push(l(g, v, b, _));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (o(this, ca) || w(this, ca, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = o(this, ca)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var n;
    const e = (n = o(this, ca)) == null ? void 0 : n.get(t.data.id);
    if (!e)
      return;
    const i = o(this, nn).getRawValue(e);
    i && (o(this, de) === yt.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }
};
je = new WeakMap(), Jt = new WeakMap(), he = new WeakMap(), la = new WeakMap(), nn = new WeakMap(), ca = new WeakMap(), oi = new WeakMap(), ha = new WeakMap(), Os = new WeakMap(), Ci = new WeakMap(), sn = new WeakMap(), Ns = new WeakMap(), cl = new WeakMap(), hl = new WeakMap(), Ti = new WeakMap(), da = new WeakMap(), Wn = new WeakMap(), Pi = new WeakMap(), $d = new WeakMap(), qn = new WeakMap(), dl = new WeakMap(), Bs = new WeakMap(), ul = new WeakMap(), ua = new WeakMap(), de = new WeakMap(), Rt = new WeakMap(), rn = new WeakMap(), $s = new WeakMap(), fl = new WeakMap(), pl = new WeakMap(), gl = new WeakMap(), ml = new WeakMap(), vl = new WeakMap(), bl = new WeakMap(), yl = new WeakMap(), wl = new WeakMap(), Al = new WeakMap(), _l = new WeakMap(), El = new WeakMap(), xl = new WeakMap(), Sl = new WeakMap(), Cl = new WeakMap(), Xn = new WeakMap(), Ri = new WeakMap(), an = new WeakMap(), Tl = new WeakMap(), fa = new WeakSet(), Vh = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Ud = new WeakSet(), Bv = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const i = A(this, fa, Vh).call(this, t).closest(".textLayer"), n = this.getSelectionBoxes(i);
  n && (o(this, Pi) || w(this, Pi, new FC(this)), o(this, Pi).show(i, n, this.direction === "ltr"));
}, Hd = new WeakSet(), $v = function() {
  var s, a, l;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    o(this, rn) && ((s = o(this, Pi)) == null || s.hide(), w(this, rn, null), A(this, ue, xe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === o(this, rn))
    return;
  if (!A(this, fa, Vh).call(this, t).closest(".textLayer")) {
    o(this, rn) && ((a = o(this, Pi)) == null || a.hide(), w(this, rn, null), A(this, ue, xe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((l = o(this, Pi)) == null || l.hide(), w(this, rn, e), A(this, ue, xe).call(this, {
    hasSelectedText: !0
  }), !(o(this, de) !== yt.HIGHLIGHT && o(this, de) !== yt.NONE) && (o(this, de) === yt.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), w(this, Wn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = (d) => {
      d.type === "pointerup" && d.button !== 0 || (window.removeEventListener("pointerup", c), window.removeEventListener("blur", c), d.type === "pointerup" && A(this, pa, Wh).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", c), window.addEventListener("blur", c);
  }
}, pa = new WeakSet(), Wh = function(t = "") {
  o(this, de) === yt.HIGHLIGHT ? this.highlightSelection(t) : o(this, cl) && A(this, Ud, Bv).call(this);
}, jd = new WeakSet(), Uv = function() {
  document.addEventListener("selectionchange", o(this, xl));
}, zd = new WeakSet(), Hv = function() {
  document.removeEventListener("selectionchange", o(this, xl));
}, Gd = new WeakSet(), jv = function() {
  window.addEventListener("focus", o(this, gl)), window.addEventListener("blur", o(this, pl));
}, Pl = new WeakSet(), Tp = function() {
  window.removeEventListener("focus", o(this, gl)), window.removeEventListener("blur", o(this, pl));
}, Rl = new WeakSet(), Pp = function() {
  window.addEventListener("keydown", o(this, yl)), window.addEventListener("keyup", o(this, wl));
}, Ll = new WeakSet(), Rp = function() {
  window.removeEventListener("keydown", o(this, yl)), window.removeEventListener("keyup", o(this, wl));
}, kl = new WeakSet(), Lp = function() {
  document.addEventListener("copy", o(this, ml)), document.addEventListener("cut", o(this, vl)), document.addEventListener("paste", o(this, bl));
}, Il = new WeakSet(), kp = function() {
  document.removeEventListener("copy", o(this, ml)), document.removeEventListener("cut", o(this, vl)), document.removeEventListener("paste", o(this, bl));
}, ue = new WeakSet(), xe = function(t) {
  Object.entries(t).some(([i, n]) => o(this, Cl)[i] !== n) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(o(this, Cl), t)
  }), o(this, de) === yt.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, Li, On).call(this, [[ot.HIGHLIGHT_FREE, !0]]));
}, Li = new WeakSet(), On = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Vd = new WeakSet(), zv = function() {
  if (!o(this, qn)) {
    w(this, qn, !0);
    for (const t of o(this, he).values())
      t.enable();
    for (const t of o(this, Jt).values())
      t.enable();
  }
}, Wd = new WeakSet(), Gv = function() {
  if (this.unselectAll(), o(this, qn)) {
    w(this, qn, !1);
    for (const t of o(this, he).values())
      t.disable();
    for (const t of o(this, Jt).values())
      t.disable();
  }
}, Fl = new WeakSet(), Ip = function(t) {
  const e = o(this, he).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, qd = new WeakSet(), Vv = function() {
  let t = null;
  for (t of o(this, Rt))
    ;
  return t;
}, Us = new WeakSet(), No = function() {
  if (o(this, Jt).size === 0)
    return !0;
  if (o(this, Jt).size === 1)
    for (const t of o(this, Jt).values())
      return t.isEmpty();
  return !1;
}, Ml = new WeakSet(), Fp = function(t) {
  for (const e of o(this, Rt))
    e.unselect();
  o(this, Rt).clear();
  for (const e of t)
    e.isEmpty() || (o(this, Rt).add(e), e.select());
  A(this, ue, xe).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, lt(Qr, "TRANSLATE_SMALL", 1), lt(Qr, "TRANSLATE_BIG", 10);
let Dr = Qr;
var on, ln, li, cn, ci, ga, hn, Dl, Mp;
const Zi = class Zi {
  constructor(t) {
    m(this, Dl);
    m(this, on, "");
    m(this, ln, !1);
    m(this, li, null);
    m(this, cn, null);
    m(this, ci, null);
    m(this, ga, !1);
    m(this, hn, null);
    w(this, hn, t);
  }
  static initialize(t) {
    Zi._l10nPromise || (Zi._l10nPromise = t);
  }
  async render() {
    const t = w(this, li, document.createElement("button"));
    t.className = "altText";
    const e = await Zi._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0", t.addEventListener("contextmenu", Ne), t.addEventListener("pointerdown", (n) => n.stopPropagation());
    const i = (n) => {
      n.preventDefault(), o(this, hn)._uiManager.editAltText(o(this, hn));
    };
    return t.addEventListener("click", i, {
      capture: !0
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (w(this, ga, !0), i(n));
    }), await A(this, Dl, Mp).call(this), t;
  }
  finish() {
    o(this, li) && (o(this, li).focus({
      focusVisible: o(this, ga)
    }), w(this, ga, !1));
  }
  isEmpty() {
    return !o(this, on) && !o(this, ln);
  }
  get data() {
    return {
      altText: o(this, on),
      decorative: o(this, ln)
    };
  }
  set data({
    altText: t,
    decorative: e
  }) {
    o(this, on) === t && o(this, ln) === e || (w(this, on, t), w(this, ln, e), A(this, Dl, Mp).call(this));
  }
  toggle(t = !1) {
    o(this, li) && (!t && o(this, ci) && (clearTimeout(o(this, ci)), w(this, ci, null)), o(this, li).disabled = !t);
  }
  destroy() {
    var t;
    (t = o(this, li)) == null || t.remove(), w(this, li, null), w(this, cn, null);
  }
};
on = new WeakMap(), ln = new WeakMap(), li = new WeakMap(), cn = new WeakMap(), ci = new WeakMap(), ga = new WeakMap(), hn = new WeakMap(), Dl = new WeakSet(), Mp = async function() {
  var n;
  const t = o(this, li);
  if (!t)
    return;
  if (!o(this, on) && !o(this, ln)) {
    t.classList.remove("done"), (n = o(this, cn)) == null || n.remove();
    return;
  }
  t.classList.add("done"), Zi._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((s) => {
    t.setAttribute("aria-label", s);
  });
  let e = o(this, cn);
  if (!e) {
    w(this, cn, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip");
    const s = e.id = `alt-text-tooltip-${o(this, hn).id}`;
    t.setAttribute("aria-describedby", s);
    const a = 100;
    t.addEventListener("mouseenter", () => {
      w(this, ci, setTimeout(() => {
        w(this, ci, null), o(this, cn).classList.add("show"), o(this, hn)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, a));
    }), t.addEventListener("mouseleave", () => {
      var l;
      o(this, ci) && (clearTimeout(o(this, ci)), w(this, ci, null)), (l = o(this, cn)) == null || l.classList.remove("show");
    });
  }
  e.innerText = o(this, ln) ? await Zi._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : o(this, on), e.parentNode || t.append(e);
  const i = o(this, hn).getImageForAltText();
  i == null || i.setAttribute("aria-describedby", e.id);
}, lt(Zi, "_l10nPromise", null);
let bd = Zi;
var hi, Se, ma, Hs, fe, js, va, ba, ye, Ol, zs, Yn, Nl, Gs, dn, ki, ya, wa, ei, Bl, Xd, $l, Dp, Ul, Op, Hl, Np, Yd, Wv, Kd, qv, jl, Bp, zl, $p, Gl, Up, Zd, Xv, Jd, Yv, Qd, Kv, tu, Zv, Vl, Hp, Vs, Bo;
const Mt = class Mt {
  constructor(t) {
    m(this, $l);
    m(this, Hl);
    m(this, Yd);
    m(this, Kd);
    m(this, jl);
    m(this, zl);
    m(this, Gl);
    m(this, Zd);
    m(this, Jd);
    m(this, Qd);
    m(this, tu);
    m(this, Vl);
    m(this, Vs);
    m(this, hi, null);
    m(this, Se, null);
    m(this, ma, !1);
    m(this, Hs, !1);
    m(this, fe, null);
    m(this, js, null);
    m(this, va, this.focusin.bind(this));
    m(this, ba, this.focusout.bind(this));
    m(this, ye, null);
    m(this, Ol, "");
    m(this, zs, !1);
    m(this, Yn, null);
    m(this, Nl, !1);
    m(this, Gs, !1);
    m(this, dn, !1);
    m(this, ki, null);
    m(this, ya, 0);
    m(this, wa, 0);
    m(this, ei, null);
    lt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    lt(this, "_isVisible", !0);
    lt(this, "_uiManager", null);
    lt(this, "_focusEventsAllowed", !0);
    lt(this, "_l10nPromise", null);
    m(this, Bl, !1);
    m(this, Xd, Mt._zIndex++);
    this.constructor === Mt && It("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: i,
        pageHeight: n,
        pageX: s,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, n], this.pageTranslation = [s, a];
    const [l, c] = this.parentDimensions;
    this.x = t.x / l, this.y = t.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Mt.prototype._resizeWithKeyboard, e = Dr.TRANSLATE_SMALL, i = Dr.TRANSLATE_BIG;
    return _t(this, "_resizerKeyboardManager", new Sh([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-i, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [i, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -i]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, i]
    }], [["Escape", "mac+Escape"], Mt.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return _t(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new NC({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e, i) {
    if (Mt._l10nPromise || (Mt._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((s) => [s, t.get(s.replaceAll(/([A-Z])/g, (a) => `-${a.toLowerCase()}`))]))), i != null && i.strings)
      for (const s of i.strings)
        Mt._l10nPromise.set(s, t.get(s));
    if (Mt._borderLineWidth !== -1)
      return;
    const n = getComputedStyle(document.documentElement);
    Mt._borderLineWidth = parseFloat(n.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    It("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return o(this, Bl);
  }
  set _isDraggable(t) {
    var e;
    w(this, Bl, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = o(this, Xd);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : A(this, Vs, Bo).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (o(this, zs) ? w(this, zs, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var i;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (i = this.parent) != null && i.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, i, n) {
    const [s, a] = this.parentDimensions;
    [i, n] = this.screenToPageTranslation(i, n), this.x = (t + i) / s, this.y = (e + n) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    A(this, $l, Dp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    o(this, Yn) || w(this, Yn, [this.x, this.y]), A(this, $l, Dp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    o(this, Yn) || w(this, Yn, [this.x, this.y]);
    const [i, n] = this.parentDimensions;
    if (this.x += t / i, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: d,
        y: h
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, d, h) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: s,
      y: a
    } = this;
    const [l, c] = this.getBaseTranslation();
    s += l, a += c, this.div.style.left = `${(100 * s).toFixed(2)}%`, this.div.style.top = `${(100 * a).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!o(this, Yn) && (o(this, Yn)[0] !== this.x || o(this, Yn)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: i
    } = Mt, n = i / t, s = i / e;
    switch (this.rotation) {
      case 90:
        return [-n, s];
      case 180:
        return [n, s];
      case 270:
        return [n, -s];
      default:
        return [-n, -s];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, i] = this.pageDimensions;
    let {
      x: n,
      y: s,
      width: a,
      height: l
    } = this;
    if (a *= e, l *= i, n *= e, s *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          n = Math.max(0, Math.min(e - a, n)), s = Math.max(0, Math.min(i - l, s));
          break;
        case 90:
          n = Math.max(0, Math.min(e - l, n)), s = Math.min(i, Math.max(a, s));
          break;
        case 180:
          n = Math.min(e, Math.max(a, n)), s = Math.min(i, Math.max(l, s));
          break;
        case 270:
          n = Math.min(e, Math.max(l, n)), s = Math.max(0, Math.min(i - a, s));
          break;
      }
    this.x = n /= e, this.y = s /= i;
    const [c, d] = this.getBaseTranslation();
    n += c, s += d;
    const {
      style: h
    } = this.div;
    h.left = `${(100 * n).toFixed(2)}%`, h.top = `${(100 * s).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var i;
    return A(i = Mt, Ul, Op).call(i, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var i;
    return A(i = Mt, Ul, Op).call(i, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, i]
    } = this, n = e * t, s = i * t;
    return Oe.isCSSRoundSupported ? [Math.round(n), Math.round(s)] : [n, s];
  }
  setDims(t, e) {
    const [i, n] = this.parentDimensions;
    this.div.style.width = `${(100 * t / i).toFixed(2)}%`, o(this, Hs) || (this.div.style.height = `${(100 * e / n).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: i
    } = t, n = i.endsWith("%"), s = !o(this, Hs) && e.endsWith("%");
    if (n && s)
      return;
    const [a, l] = this.parentDimensions;
    n || (t.width = `${(100 * parseFloat(i) / a).toFixed(2)}%`), !o(this, Hs) && !s && (t.height = `${(100 * parseFloat(e) / l).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = o(this, Se)) == null || t.finish();
  }
  async addEditToolbar() {
    return o(this, ye) || o(this, Gs) ? o(this, ye) : (w(this, ye, new _p(this)), this.div.append(o(this, ye).render()), o(this, Se) && o(this, ye).addAltTextButton(await o(this, Se).render()), o(this, ye));
  }
  removeEditToolbar() {
    var t;
    o(this, ye) && (o(this, ye).remove(), w(this, ye, null), (t = o(this, Se)) == null || t.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    o(this, Se) || (bd.initialize(Mt._l10nPromise), w(this, Se, new bd(this)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = o(this, Se)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    o(this, Se) && (o(this, Se).data = t);
  }
  hasAltText() {
    var t;
    return !((t = o(this, Se)) != null && t.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = o(this, ma) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), this.div.addEventListener("focusin", o(this, va)), this.div.addEventListener("focusout", o(this, ba));
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [i, n] = this.getInitialTranslation();
    return this.translate(i, n), vd(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Oe.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (w(this, zs, !0), this._isDraggable) {
      A(this, Zd, Xv).call(this, t);
      return;
    }
    A(this, Gl, Up).call(this, t);
  }
  moveInDOM() {
    o(this, ki) && clearTimeout(o(this, ki)), w(this, ki, setTimeout(() => {
      var t;
      w(this, ki, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition();
  }
  getRect(t, e, i = this.rotation) {
    const n = this.parentScale, [s, a] = this.pageDimensions, [l, c] = this.pageTranslation, d = t / n, h = e / n, p = this.x * s, g = this.y * a, v = this.width * s, b = this.height * a;
    switch (i) {
      case 0:
        return [p + d + l, a - g - h - b + c, p + d + v + l, a - g - h + c];
      case 90:
        return [p + h + l, a - g + d + c, p + h + b + l, a - g + d + v + c];
      case 180:
        return [p - d - v + l, a - g + h + c, p - d + l, a - g + h + b + c];
      case 270:
        return [p - h - b + l, a - g - d - v + c, p - h + l, a - g - d + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [i, n, s, a] = t, l = s - i, c = a - n;
    switch (this.rotation) {
      case 0:
        return [i, e - a, l, c];
      case 90:
        return [i, e - n, c, l];
      case 180:
        return [s, e - n, l, c];
      case 270:
        return [s, e - a, c, l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    w(this, Gs, !0);
  }
  disableEditMode() {
    w(this, Gs, !1);
  }
  isInEditMode() {
    return o(this, Gs);
  }
  shouldGetKeyboardEvents() {
    return o(this, dn);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var t, e;
    (t = this.div) == null || t.addEventListener("focusin", o(this, va)), (e = this.div) == null || e.addEventListener("focusout", o(this, ba));
  }
  rotate(t) {
  }
  serialize(t = !1, e = null) {
    It("An editor must be serializable");
  }
  static deserialize(t, e, i) {
    const n = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i
    });
    n.rotation = t.rotation;
    const [s, a] = n.pageDimensions, [l, c, d, h] = n.getRectInCurrentCoords(t.rect, a);
    return n.x = l / s, n.y = c / a, n.width = d / s, n.height = h / a, n;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", o(this, va)), this.div.removeEventListener("focusout", o(this, ba)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), o(this, ki) && (clearTimeout(o(this, ki)), w(this, ki, null)), A(this, Vs, Bo).call(this), this.removeEditToolbar(), o(this, ei)) {
      for (const t of o(this, ei).values())
        clearTimeout(t);
      w(this, ei, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (A(this, Yd, Wv).call(this), o(this, fe).classList.remove("hidden"), vd(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), w(this, js, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = o(this, fe).children;
    if (!o(this, hi)) {
      w(this, hi, Array.from(e));
      const a = A(this, Jd, Yv).bind(this), l = A(this, Qd, Kv).bind(this);
      for (const c of o(this, hi)) {
        const d = c.getAttribute("data-resizer-name");
        c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", a), c.addEventListener("blur", l), c.addEventListener("focus", A(this, tu, Zv).bind(this, d)), Mt._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => c.setAttribute("aria-label", h));
      }
    }
    const i = o(this, hi)[0];
    let n = 0;
    for (const a of e) {
      if (a === i)
        break;
      n++;
    }
    const s = (360 - this.rotation + this.parentRotation) % 360 / 90 * (o(this, hi).length / 4);
    if (s !== n) {
      if (s < n)
        for (let l = 0; l < n - s; l++)
          o(this, fe).append(o(this, fe).firstChild);
      else if (s > n)
        for (let l = 0; l < s - n; l++)
          o(this, fe).firstChild.before(o(this, fe).lastChild);
      let a = 0;
      for (const l of e) {
        const d = o(this, hi)[a++].getAttribute("data-resizer-name");
        Mt._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => l.setAttribute("aria-label", h));
      }
    }
    A(this, Vl, Hp).call(this, 0), w(this, dn, !0), o(this, fe).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    o(this, dn) && A(this, zl, $p).call(this, o(this, Ol), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    A(this, Vs, Bo).call(this), this.div.focus();
  }
  select() {
    var t, e;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !o(this, ye)) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = o(this, ye)) == null || n.show());
      });
      return;
    }
    (e = o(this, ye)) == null || e.show();
  }
  unselect() {
    var t, e, i, n;
    (t = o(this, fe)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (n = o(this, ye)) == null || n.hide();
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return o(this, Nl);
  }
  set isEditing(t) {
    w(this, Nl, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    w(this, Hs, !0);
    const i = t / e, {
      style: n
    } = this.div;
    n.aspectRatio = i, n.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      o(this, ei) || w(this, ei, /* @__PURE__ */ new Map());
      const {
        action: i
      } = t;
      let n = o(this, ei).get(i);
      n && clearTimeout(n), n = setTimeout(() => {
        this._reportTelemetry(t), o(this, ei).delete(i), o(this, ei).size === 0 && w(this, ei, null);
      }, Mt._telemetryTimeout), o(this, ei).set(i, n);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), w(this, ma, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), w(this, ma, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const i = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), i.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    e.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
hi = new WeakMap(), Se = new WeakMap(), ma = new WeakMap(), Hs = new WeakMap(), fe = new WeakMap(), js = new WeakMap(), va = new WeakMap(), ba = new WeakMap(), ye = new WeakMap(), Ol = new WeakMap(), zs = new WeakMap(), Yn = new WeakMap(), Nl = new WeakMap(), Gs = new WeakMap(), dn = new WeakMap(), ki = new WeakMap(), ya = new WeakMap(), wa = new WeakMap(), ei = new WeakMap(), Bl = new WeakMap(), Xd = new WeakMap(), $l = new WeakSet(), Dp = function([t, e], i, n) {
  [i, n] = this.screenToPageTranslation(i, n), this.x += i / t, this.y += n / e, this.fixAndSetPosition();
}, Ul = new WeakSet(), Op = function(t, e, i) {
  switch (i) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Hl = new WeakSet(), Np = function(t) {
  switch (t) {
    case 90: {
      const [e, i] = this.pageDimensions;
      return [0, -e / i, i / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, i] = this.pageDimensions;
      return [0, e / i, -i / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Yd = new WeakSet(), Wv = function() {
  if (o(this, fe))
    return;
  w(this, fe, document.createElement("div")), o(this, fe).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
  for (const e of t) {
    const i = document.createElement("div");
    o(this, fe).append(i), i.classList.add("resizer", e), i.setAttribute("data-resizer-name", e), i.addEventListener("pointerdown", A(this, Kd, qv).bind(this, e)), i.addEventListener("contextmenu", Ne), i.tabIndex = -1;
  }
  this.div.prepend(o(this, fe));
}, Kd = new WeakSet(), qv = function(t, e) {
  var b;
  e.preventDefault();
  const {
    isMac: i
  } = Oe.platform;
  if (e.button !== 0 || e.ctrlKey && i)
    return;
  (b = o(this, Se)) == null || b.toggle(!1);
  const n = A(this, zl, $p).bind(this, t), s = this._isDraggable;
  this._isDraggable = !1;
  const a = {
    passive: !0,
    capture: !0
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", n, a), window.addEventListener("contextmenu", Ne);
  const l = this.x, c = this.y, d = this.width, h = this.height, p = this.parent.div.style.cursor, g = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const v = () => {
    var _;
    this.parent.togglePointerEvents(!0), (_ = o(this, Se)) == null || _.toggle(!0), this._isDraggable = s, window.removeEventListener("pointerup", v), window.removeEventListener("blur", v), window.removeEventListener("pointermove", n, a), window.removeEventListener("contextmenu", Ne), this.parent.div.style.cursor = p, this.div.style.cursor = g, A(this, jl, Bp).call(this, l, c, d, h);
  };
  window.addEventListener("pointerup", v), window.addEventListener("blur", v);
}, jl = new WeakSet(), Bp = function(t, e, i, n) {
  const s = this.x, a = this.y, l = this.width, c = this.height;
  s === t && a === e && l === i && c === n || this.addCommands({
    cmd: () => {
      this.width = l, this.height = c, this.x = s, this.y = a;
      const [d, h] = this.parentDimensions;
      this.setDims(d * l, h * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = i, this.height = n, this.x = t, this.y = e;
      const [d, h] = this.parentDimensions;
      this.setDims(d * i, h * n), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, zl = new WeakSet(), $p = function(t, e) {
  const [i, n] = this.parentDimensions, s = this.x, a = this.y, l = this.width, c = this.height, d = Mt.MIN_SIZE / i, h = Mt.MIN_SIZE / n, p = (B) => Math.round(B * 1e4) / 1e4, g = A(this, Hl, Np).call(this, this.rotation), v = (B, V) => [g[0] * B + g[2] * V, g[1] * B + g[3] * V], b = A(this, Hl, Np).call(this, 360 - this.rotation), _ = (B, V) => [b[0] * B + b[2] * V, b[1] * B + b[3] * V];
  let C, E, R = !1, L = !1;
  switch (t) {
    case "topLeft":
      R = !0, C = (B, V) => [0, 0], E = (B, V) => [B, V];
      break;
    case "topMiddle":
      C = (B, V) => [B / 2, 0], E = (B, V) => [B / 2, V];
      break;
    case "topRight":
      R = !0, C = (B, V) => [B, 0], E = (B, V) => [0, V];
      break;
    case "middleRight":
      L = !0, C = (B, V) => [B, V / 2], E = (B, V) => [0, V / 2];
      break;
    case "bottomRight":
      R = !0, C = (B, V) => [B, V], E = (B, V) => [0, 0];
      break;
    case "bottomMiddle":
      C = (B, V) => [B / 2, V], E = (B, V) => [B / 2, 0];
      break;
    case "bottomLeft":
      R = !0, C = (B, V) => [0, V], E = (B, V) => [B, 0];
      break;
    case "middleLeft":
      L = !0, C = (B, V) => [0, V / 2], E = (B, V) => [B, V / 2];
      break;
  }
  const M = C(l, c), D = E(l, c);
  let N = v(...D);
  const U = p(s + N[0]), S = p(a + N[1]);
  let T = 1, I = 1, [k, H] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([k, H] = _(k / i, H / n), R) {
    const B = Math.hypot(l, c);
    T = I = Math.max(Math.min(Math.hypot(D[0] - M[0] - k, D[1] - M[1] - H) / B, 1 / l, 1 / c), d / l, h / c);
  } else
    L ? T = Math.max(d, Math.min(1, Math.abs(D[0] - M[0] - k))) / l : I = Math.max(h, Math.min(1, Math.abs(D[1] - M[1] - H))) / c;
  const j = p(l * T), z = p(c * I);
  N = v(...E(j, z));
  const Y = U - N[0], K = S - N[1];
  this.width = j, this.height = z, this.x = Y, this.y = K, this.setDims(i * j, n * z), this.fixAndSetPosition();
}, Gl = new WeakSet(), Up = function(t) {
  const {
    isMac: e
  } = Oe.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Zd = new WeakSet(), Xv = function(t) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let i, n;
  e && (this.div.classList.add("moving"), i = {
    passive: !0,
    capture: !0
  }, w(this, ya, t.clientX), w(this, wa, t.clientY), n = (a) => {
    const {
      clientX: l,
      clientY: c
    } = a, [d, h] = this.screenToPageTranslation(l - o(this, ya), c - o(this, wa));
    w(this, ya, l), w(this, wa, c), this._uiManager.dragSelectedEditors(d, h);
  }, window.addEventListener("pointermove", n, i));
  const s = () => {
    window.removeEventListener("pointerup", s), window.removeEventListener("blur", s), e && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", n, i)), w(this, zs, !1), this._uiManager.endDragSession() || A(this, Gl, Up).call(this, t);
  };
  window.addEventListener("pointerup", s), window.addEventListener("blur", s);
}, Jd = new WeakSet(), Yv = function(t) {
  Mt._resizerKeyboardManager.exec(this, t);
}, Qd = new WeakSet(), Kv = function(t) {
  var e;
  o(this, dn) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== o(this, fe) && A(this, Vs, Bo).call(this);
}, tu = new WeakSet(), Zv = function(t) {
  w(this, Ol, o(this, dn) ? t : "");
}, Vl = new WeakSet(), Hp = function(t) {
  if (o(this, hi))
    for (const e of o(this, hi))
      e.tabIndex = t;
}, Vs = new WeakSet(), Bo = function() {
  if (w(this, dn, !1), A(this, Vl, Hp).call(this, -1), o(this, js)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: i,
      savedHeight: n
    } = o(this, js);
    A(this, jl, Bp).call(this, t, e, i, n), w(this, js, null);
  }
}, m(Mt, Ul), lt(Mt, "_borderLineWidth", -1), lt(Mt, "_colorManager", new Cp()), lt(Mt, "_zIndex", 1), lt(Mt, "_telemetryTimeout", 1e3);
let Lt = Mt;
class NC extends Lt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const Wm = 3285377520, Je = 4294901760, Ai = 65535;
class Jv {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Wm, this.h2 = t ? t & 4294967295 : Wm;
  }
  update(t) {
    let e, i;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let _ = 0, C = t.length; _ < C; _++) {
        const E = t.charCodeAt(_);
        E <= 255 ? e[i++] = E : (e[i++] = E >>> 8, e[i++] = E & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), i = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const n = i >> 2, s = i - n * 4, a = new Uint32Array(e.buffer, 0, n);
    let l = 0, c = 0, d = this.h1, h = this.h2;
    const p = 3432918353, g = 461845907, v = p & Ai, b = g & Ai;
    for (let _ = 0; _ < n; _++)
      _ & 1 ? (l = a[_], l = l * p & Je | l * v & Ai, l = l << 15 | l >>> 17, l = l * g & Je | l * b & Ai, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196) : (c = a[_], c = c * p & Je | c * v & Ai, c = c << 15 | c >>> 17, c = c * g & Je | c * b & Ai, h ^= c, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
    switch (l = 0, s) {
      case 3:
        l ^= e[n * 4 + 2] << 16;
      case 2:
        l ^= e[n * 4 + 1] << 8;
      case 1:
        l ^= e[n * 4], l = l * p & Je | l * v & Ai, l = l << 15 | l >>> 17, l = l * g & Je | l * b & Ai, n & 1 ? d ^= l : h ^= l;
    }
    this.h1 = d, this.h2 = h;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Je | t * 36045 & Ai, e = e * 4283543511 & Je | ((e << 16 | t >>> 16) * 2950163797 & Je) >>> 16, t ^= e >>> 1, t = t * 444984403 & Je | t * 60499 & Ai, e = e * 3301882366 & Je | ((e << 16 | t >>> 16) * 3120437893 & Je) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const jp = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Ws, pe, eu, Qv;
class sm {
  constructor() {
    m(this, eu);
    m(this, Ws, !1);
    m(this, pe, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const i = o(this, pe).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }
  getRawValue(t) {
    return o(this, pe).get(t);
  }
  remove(t) {
    if (o(this, pe).delete(t), o(this, pe).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of o(this, pe).values())
        if (e instanceof Lt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const i = o(this, pe).get(t);
    let n = !1;
    if (i !== void 0)
      for (const [s, a] of Object.entries(e))
        i[s] !== a && (n = !0, i[s] = a);
    else
      n = !0, o(this, pe).set(t, e);
    n && A(this, eu, Qv).call(this), e instanceof Lt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return o(this, pe).has(t);
  }
  getAll() {
    return o(this, pe).size > 0 ? Zg(o(this, pe)) : null;
  }
  setAll(t) {
    for (const [e, i] of Object.entries(t))
      this.setValue(e, i);
  }
  get size() {
    return o(this, pe).size;
  }
  resetModified() {
    o(this, Ws) && (w(this, Ws, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new tb(this);
  }
  get serializable() {
    if (o(this, pe).size === 0)
      return jp;
    const t = /* @__PURE__ */ new Map(), e = new Jv(), i = [], n = /* @__PURE__ */ Object.create(null);
    let s = !1;
    for (const [a, l] of o(this, pe)) {
      const c = l instanceof Lt ? l.serialize(!1, n) : l;
      c && (t.set(a, c), e.update(`${a}:${JSON.stringify(c)}`), s || (s = !!c.bitmap));
    }
    if (s)
      for (const a of t.values())
        a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i
    } : jp;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const i of o(this, pe).values()) {
      if (!(i instanceof Lt))
        continue;
      const n = i.telemetryFinalData;
      if (!n)
        continue;
      const {
        type: s
      } = n;
      e.has(s) || e.set(s, Object.getPrototypeOf(i).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[s] || (t[s] = /* @__PURE__ */ new Map());
      for (const [l, c] of Object.entries(n)) {
        if (l === "type")
          continue;
        let d = a.get(l);
        d || (d = /* @__PURE__ */ new Map(), a.set(l, d));
        const h = d.get(c) ?? 0;
        d.set(c, h + 1);
      }
    }
    for (const [i, n] of e)
      t[i] = n.computeTelemetryFinalData(t[i]);
    return t;
  }
}
Ws = new WeakMap(), pe = new WeakMap(), eu = new WeakSet(), Qv = function() {
  o(this, Ws) || (w(this, Ws, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Wl;
class tb extends sm {
  constructor(e) {
    super();
    m(this, Wl, void 0);
    const {
      map: i,
      hash: n,
      transfer: s
    } = e.serializable, a = structuredClone(i, s ? {
      transfer: s
    } : null);
    w(this, Wl, {
      map: a,
      hash: n,
      transfer: s
    });
  }
  get print() {
    It("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return o(this, Wl);
  }
}
Wl = new WeakMap();
var Aa;
class BC {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Aa, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), o(this, Aa).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || o(this, Aa).has(t.loadedName))) {
      if (ie(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: n,
          style: s
        } = t, a = new FontFace(i, n, s);
        this.addNativeFontFace(a);
        try {
          await a.load(), o(this, Aa).add(i), e == null || e(t);
        } catch {
          ut(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      It("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const i = t.createNativeFontFace();
      if (i) {
        this.addNativeFontFace(i);
        try {
          await i.loaded;
        } catch (n) {
          throw ut(`Failed to load font '${i.family}': '${n}'.`), t.disableFontFace = !0, n;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((i) => {
        const n = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, n);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return _t(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (Ae || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), _t(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (ie(!n.done, "completeRequest() cannot be called twice."), n.done = !0; i.length > 0 && i[0].done; ) {
        const s = i.shift();
        setTimeout(s.callback, 0);
      }
    }
    const {
      loadingRequests: i
    } = this, n = {
      done: !1,
      complete: e,
      callback: t
    };
    return i.push(n), n;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return _t(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function i(M, D) {
      return M.charCodeAt(D) << 24 | M.charCodeAt(D + 1) << 16 | M.charCodeAt(D + 2) << 8 | M.charCodeAt(D + 3) & 255;
    }
    function n(M, D, N, U) {
      const S = M.substring(0, D), T = M.substring(D + N);
      return S + U + T;
    }
    let s, a;
    const l = this._document.createElement("canvas");
    l.width = 1, l.height = 1;
    const c = l.getContext("2d");
    let d = 0;
    function h(M, D) {
      if (++d > 30) {
        ut("Load test font never loaded."), D();
        return;
      }
      if (c.font = "30px " + M, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        D();
        return;
      }
      setTimeout(h.bind(null, M, D));
    }
    const p = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = n(g, 976, p.length, p);
    const b = 16, _ = 1482184792;
    let C = i(g, b);
    for (s = 0, a = p.length - 3; s < a; s += 4)
      C = C - _ + i(p, s) | 0;
    s < p.length && (C = C - _ + i(p + "XXX", s) | 0), g = n(g, b, 4, AC(C));
    const E = `url(data:font/opentype;base64,${btoa(g)});`, R = `@font-face {font-family:"${p}";src:${E}}`;
    this.insertRule(R);
    const L = this._document.createElement("div");
    L.style.visibility = "hidden", L.style.width = L.style.height = "10px", L.style.position = "absolute", L.style.top = L.style.left = "0px";
    for (const M of [t.loadedName, p]) {
      const D = this._document.createElement("span");
      D.textContent = "Hi", D.style.fontFamily = M, L.append(D);
    }
    this._document.body.append(L), h(p, () => {
      L.remove(), e.complete();
    });
  }
}
Aa = new WeakMap();
class $C {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: i = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const n in t)
      this[n] = t[n];
    this.disableFontFace = e === !0, this._inspectFont = i;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, i);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var n;
    if (!this.data || this.disableFontFace)
      return null;
    const t = Ev(this.data), e = `url(data:${this.mimetype};base64,${btoa(t)});`;
    let i;
    if (!this.cssFontInfo)
      i = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), i = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${e}}`;
    }
    return (n = this._inspectFont) == null || n.call(this, this, e), i;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let i;
    try {
      i = t.get(this.loadedName + "_path_" + e);
    } catch (s) {
      ut(`getPathGenerator - ignoring character: "${s}".`);
    }
    if (!Array.isArray(i) || i.length === 0)
      return this.compiledGlyphs[e] = function(s, a) {
      };
    const n = [];
    for (let s = 0, a = i.length; s < a; )
      switch (i[s++]) {
        case Xi.BEZIER_CURVE_TO:
          {
            const [l, c, d, h, p, g] = i.slice(s, s + 6);
            n.push((v) => v.bezierCurveTo(l, c, d, h, p, g)), s += 6;
          }
          break;
        case Xi.MOVE_TO:
          {
            const [l, c] = i.slice(s, s + 2);
            n.push((d) => d.moveTo(l, c)), s += 2;
          }
          break;
        case Xi.LINE_TO:
          {
            const [l, c] = i.slice(s, s + 2);
            n.push((d) => d.lineTo(l, c)), s += 2;
          }
          break;
        case Xi.QUADRATIC_CURVE_TO:
          {
            const [l, c, d, h] = i.slice(s, s + 4);
            n.push((p) => p.quadraticCurveTo(l, c, d, h)), s += 4;
          }
          break;
        case Xi.RESTORE:
          n.push((l) => l.restore());
          break;
        case Xi.SAVE:
          n.push((l) => l.save());
          break;
        case Xi.SCALE:
          ie(n.length === 2, "Scale command is only valid at the third position.");
          break;
        case Xi.TRANSFORM:
          {
            const [l, c, d, h, p, g] = i.slice(s, s + 6);
            n.push((v) => v.transform(l, c, d, h, p, g)), s += 6;
          }
          break;
        case Xi.TRANSLATE:
          {
            const [l, c] = i.slice(s, s + 2);
            n.push((d) => d.translate(l, c)), s += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(a, l) {
      n[0](a), n[1](a), a.scale(l, -l);
      for (let c = 2, d = n.length; c < d; c++)
        n[c](a);
    };
  }
}
if (Ae) {
  var zp = Promise.withResolvers(), Yo = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./empty-GlqisfcO.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./index-BmQ_Q4Jh.js"
    ).then((l) => l.i), i = await import(
      /*webpackIgnore: true*/
      "./index-DByDBLAa.js"
    ).then((l) => l.i), n = await import(
      /*webpackIgnore: true*/
      "./url-D4texwpR.js"
    ).then((l) => l.u);
    let s, a;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: i,
      url: n,
      canvas: s,
      path2d: a
    }));
  })().then((t) => {
    Yo = t, zp.resolve();
  }, (t) => {
    ut(`loadPackages: ${t}`), Yo = /* @__PURE__ */ new Map(), zp.resolve();
  });
}
class Vi {
  static get promise() {
    return zp.promise;
  }
  static get(t) {
    return Yo == null ? void 0 : Yo.get(t);
  }
}
const eb = function(r) {
  return Vi.get("fs").promises.readFile(r).then((e) => new Uint8Array(e));
};
class UC extends yf {
}
class HC extends wf {
  _createCanvas(t, e) {
    return Vi.get("canvas").createCanvas(t, e);
  }
}
class jC extends Af {
  _fetchData(t, e) {
    return eb(t).then((i) => ({
      cMapData: i,
      compressionType: e
    }));
  }
}
class zC extends _f {
  _fetchData(t) {
    return eb(t);
  }
}
const Pe = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Gp(r, t) {
  if (!t)
    return;
  const e = t[2] - t[0], i = t[3] - t[1], n = new Path2D();
  n.rect(t[0], t[1], e, i), r.clip(n);
}
class Ch {
  constructor() {
    this.constructor === Ch && It("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    It("Abstract method `getPattern` called.");
  }
}
class GC extends Ch {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops)
      e.addColorStop(i[0], i[1]);
    return e;
  }
  getPattern(t, e, i, n) {
    let s;
    if (n === Pe.STROKE || n === Pe.FILL) {
      const a = e.current.getClippedPathBoundingBox(n, Ut(t)) || [0, 0, 0, 0], l = Math.ceil(a[2] - a[0]) || 1, c = Math.ceil(a[3] - a[1]) || 1, d = e.cachedCanvases.getCanvas("pattern", l, c, !0), h = d.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-a[0], -a[1]), i = Z.transform(i, [1, 0, 0, 1, a[0], a[1]]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Gp(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), s = t.createPattern(d.canvas, "no-repeat");
      const p = new DOMMatrix(i);
      s.setTransform(p);
    } else
      Gp(t, this._bbox), s = this._createGradient(t);
    return s;
  }
}
function tp(r, t, e, i, n, s, a, l) {
  const c = t.coords, d = t.colors, h = r.data, p = r.width * 4;
  let g;
  c[e + 1] > c[i + 1] && (g = e, e = i, i = g, g = s, s = a, a = g), c[i + 1] > c[n + 1] && (g = i, i = n, n = g, g = a, a = l, l = g), c[e + 1] > c[i + 1] && (g = e, e = i, i = g, g = s, s = a, a = g);
  const v = (c[e] + t.offsetX) * t.scaleX, b = (c[e + 1] + t.offsetY) * t.scaleY, _ = (c[i] + t.offsetX) * t.scaleX, C = (c[i + 1] + t.offsetY) * t.scaleY, E = (c[n] + t.offsetX) * t.scaleX, R = (c[n + 1] + t.offsetY) * t.scaleY;
  if (b >= R)
    return;
  const L = d[s], M = d[s + 1], D = d[s + 2], N = d[a], U = d[a + 1], S = d[a + 2], T = d[l], I = d[l + 1], k = d[l + 2], H = Math.round(b), j = Math.round(R);
  let z, Y, K, B, V, W, xt, mt;
  for (let G = H; G <= j; G++) {
    if (G < C) {
      const J = G < b ? 0 : (b - G) / (b - C);
      z = v - (v - _) * J, Y = L - (L - N) * J, K = M - (M - U) * J, B = D - (D - S) * J;
    } else {
      let J;
      G > R ? J = 1 : C === R ? J = 0 : J = (C - G) / (C - R), z = _ - (_ - E) * J, Y = N - (N - T) * J, K = U - (U - I) * J, B = S - (S - k) * J;
    }
    let et;
    G < b ? et = 0 : G > R ? et = 1 : et = (b - G) / (b - R), V = v - (v - E) * et, W = L - (L - T) * et, xt = M - (M - I) * et, mt = D - (D - k) * et;
    const tt = Math.round(Math.min(z, V)), it = Math.round(Math.max(z, V));
    let ct = p * G + tt * 4;
    for (let J = tt; J <= it; J++)
      et = (z - J) / (z - V), et < 0 ? et = 0 : et > 1 && (et = 1), h[ct++] = Y - (Y - W) * et | 0, h[ct++] = K - (K - xt) * et | 0, h[ct++] = B - (B - mt) * et | 0, h[ct++] = 255;
  }
}
function VC(r, t, e) {
  const i = t.coords, n = t.colors;
  let s, a;
  switch (t.type) {
    case "lattice":
      const l = t.verticesPerRow, c = Math.floor(i.length / l) - 1, d = l - 1;
      for (s = 0; s < c; s++) {
        let h = s * l;
        for (let p = 0; p < d; p++, h++)
          tp(r, e, i[h], i[h + 1], i[h + l], n[h], n[h + 1], n[h + l]), tp(r, e, i[h + l + 1], i[h + 1], i[h + l], n[h + l + 1], n[h + 1], n[h + l]);
      }
      break;
    case "triangles":
      for (s = 0, a = i.length; s < a; s += 3)
        tp(r, e, i[s], i[s + 1], i[s + 2], n[s], n[s + 1], n[s + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class WC extends Ch {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, i) {
    const l = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), d = Math.ceil(this._bounds[2]) - l, h = Math.ceil(this._bounds[3]) - c, p = Math.min(Math.ceil(Math.abs(d * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), v = d / p, b = h / g, _ = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -l,
      offsetY: -c,
      scaleX: 1 / v,
      scaleY: 1 / b
    }, C = p + 2 * 2, E = g + 2 * 2, R = i.getCanvas("mesh", C, E, !1), L = R.context, M = L.createImageData(p, g);
    if (e) {
      const N = M.data;
      for (let U = 0, S = N.length; U < S; U += 4)
        N[U] = e[0], N[U + 1] = e[1], N[U + 2] = e[2], N[U + 3] = 255;
    }
    for (const N of this._figures)
      VC(M, N, _);
    return L.putImageData(M, 2, 2), {
      canvas: R.canvas,
      offsetX: l - 2 * v,
      offsetY: c - 2 * b,
      scaleX: v,
      scaleY: b
    };
  }
  getPattern(t, e, i, n) {
    Gp(t, this._bbox);
    let s;
    if (n === Pe.SHADING)
      s = Z.singularValueDecompose2dScale(Ut(t));
    else if (s = Z.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const l = Z.singularValueDecompose2dScale(this.matrix);
      s = [s[0] * l[0], s[1] * l[1]];
    }
    const a = this._createMeshCanvas(s, n === Pe.SHADING ? null : this._background, e.cachedCanvases);
    return n !== Pe.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class qC extends Ch {
  getPattern() {
    return "hotpink";
  }
}
function XC(r) {
  switch (r[0]) {
    case "RadialAxial":
      return new GC(r);
    case "Mesh":
      return new WC(r);
    case "Dummy":
      return new qC();
  }
  throw new Error(`Unknown IR type: ${r[0]}`);
}
const qm = {
  COLORED: 1,
  UNCOLORED: 2
}, iu = class iu {
  constructor(t, e, i, n, s) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = i, this.canvasGraphicsFactory = n, this.baseTransform = s;
  }
  createPatternCanvas(t) {
    const e = this.operatorList, i = this.bbox, n = this.xstep, s = this.ystep, a = this.paintType, l = this.tilingType, c = this.color, d = this.canvasGraphicsFactory;
    mf("TilingType: " + l);
    const h = i[0], p = i[1], g = i[2], v = i[3], b = Z.singularValueDecompose2dScale(this.matrix), _ = Z.singularValueDecompose2dScale(this.baseTransform), C = [b[0] * _[0], b[1] * _[1]], E = this.getSizeAndScale(n, this.ctx.canvas.width, C[0]), R = this.getSizeAndScale(s, this.ctx.canvas.height, C[1]), L = t.cachedCanvases.getCanvas("pattern", E.size, R.size, !0), M = L.context, D = d.createCanvasGraphics(M);
    D.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(D, a, c);
    let N = h, U = p, S = g, T = v;
    return h < 0 && (N = 0, S += Math.abs(h)), p < 0 && (U = 0, T += Math.abs(p)), M.translate(-(E.scale * N), -(R.scale * U)), D.transform(E.scale, 0, 0, R.scale, 0, 0), M.save(), this.clipBbox(D, N, U, S, T), D.baseTransform = Ut(D.ctx), D.executeOperatorList(e), D.endDrawing(), {
      canvas: L.canvas,
      scaleX: E.scale,
      scaleY: R.scale,
      offsetX: N,
      offsetY: U
    };
  }
  getSizeAndScale(t, e, i) {
    t = Math.abs(t);
    const n = Math.max(iu.MAX_PATTERN_SIZE, e);
    let s = Math.ceil(t * i);
    return s >= n ? s = n : i = s / t, {
      scale: i,
      size: s
    };
  }
  clipBbox(t, e, i, n, s) {
    const a = n - e, l = s - i;
    t.ctx.rect(e, i, a, l), t.current.updateRectMinMax(Ut(t.ctx), [e, i, n, s]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, i) {
    const n = t.ctx, s = t.current;
    switch (e) {
      case qm.COLORED:
        const a = this.ctx;
        n.fillStyle = a.fillStyle, n.strokeStyle = a.strokeStyle, s.fillColor = a.fillStyle, s.strokeColor = a.strokeStyle;
        break;
      case qm.UNCOLORED:
        const l = Z.makeHexColor(i[0], i[1], i[2]);
        n.fillStyle = l, n.strokeStyle = l, s.fillColor = l, s.strokeColor = l;
        break;
      default:
        throw new wC(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, i, n) {
    let s = i;
    n !== Pe.SHADING && (s = Z.transform(s, e.baseTransform), this.matrix && (s = Z.transform(s, this.matrix)));
    const a = this.createPatternCanvas(e);
    let l = new DOMMatrix(s);
    l = l.translate(a.offsetX, a.offsetY), l = l.scale(1 / a.scaleX, 1 / a.scaleY);
    const c = t.createPattern(a.canvas, "repeat");
    return c.setTransform(l), c;
  }
};
lt(iu, "MAX_PATTERN_SIZE", 3e3);
let Vp = iu;
function YC({
  src: r,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: n,
  nonBlackColor: s = 4294967295,
  inverseDecode: a = !1
}) {
  const l = Oe.isLittleEndian ? 4278190080 : 255, [c, d] = a ? [s, l] : [l, s], h = i >> 3, p = i & 7, g = r.length;
  e = new Uint32Array(e.buffer);
  let v = 0;
  for (let b = 0; b < n; b++) {
    for (const C = t + h; t < C; t++) {
      const E = t < g ? r[t] : 255;
      e[v++] = E & 128 ? d : c, e[v++] = E & 64 ? d : c, e[v++] = E & 32 ? d : c, e[v++] = E & 16 ? d : c, e[v++] = E & 8 ? d : c, e[v++] = E & 4 ? d : c, e[v++] = E & 2 ? d : c, e[v++] = E & 1 ? d : c;
    }
    if (p === 0)
      continue;
    const _ = t < g ? r[t++] : 255;
    for (let C = 0; C < p; C++)
      e[v++] = _ & 1 << 7 - C ? d : c;
  }
  return {
    srcPos: t,
    destPos: v
  };
}
const Xm = 16, Ym = 100, KC = 15, Km = 10, Zm = 1e3, Fe = 16;
function ZC(r, t) {
  if (r._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  r.__originalSave = r.save, r.__originalRestore = r.restore, r.__originalRotate = r.rotate, r.__originalScale = r.scale, r.__originalTranslate = r.translate, r.__originalTransform = r.transform, r.__originalSetTransform = r.setTransform, r.__originalResetTransform = r.resetTransform, r.__originalClip = r.clip, r.__originalMoveTo = r.moveTo, r.__originalLineTo = r.lineTo, r.__originalBezierCurveTo = r.bezierCurveTo, r.__originalRect = r.rect, r.__originalClosePath = r.closePath, r.__originalBeginPath = r.beginPath, r._removeMirroring = () => {
    r.save = r.__originalSave, r.restore = r.__originalRestore, r.rotate = r.__originalRotate, r.scale = r.__originalScale, r.translate = r.__originalTranslate, r.transform = r.__originalTransform, r.setTransform = r.__originalSetTransform, r.resetTransform = r.__originalResetTransform, r.clip = r.__originalClip, r.moveTo = r.__originalMoveTo, r.lineTo = r.__originalLineTo, r.bezierCurveTo = r.__originalBezierCurveTo, r.rect = r.__originalRect, r.closePath = r.__originalClosePath, r.beginPath = r.__originalBeginPath, delete r._removeMirroring;
  }, r.save = function() {
    t.save(), this.__originalSave();
  }, r.restore = function() {
    t.restore(), this.__originalRestore();
  }, r.translate = function(i, n) {
    t.translate(i, n), this.__originalTranslate(i, n);
  }, r.scale = function(i, n) {
    t.scale(i, n), this.__originalScale(i, n);
  }, r.transform = function(i, n, s, a, l, c) {
    t.transform(i, n, s, a, l, c), this.__originalTransform(i, n, s, a, l, c);
  }, r.setTransform = function(i, n, s, a, l, c) {
    t.setTransform(i, n, s, a, l, c), this.__originalSetTransform(i, n, s, a, l, c);
  }, r.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, r.rotate = function(i) {
    t.rotate(i), this.__originalRotate(i);
  }, r.clip = function(i) {
    t.clip(i), this.__originalClip(i);
  }, r.moveTo = function(e, i) {
    t.moveTo(e, i), this.__originalMoveTo(e, i);
  }, r.lineTo = function(e, i) {
    t.lineTo(e, i), this.__originalLineTo(e, i);
  }, r.bezierCurveTo = function(e, i, n, s, a, l) {
    t.bezierCurveTo(e, i, n, s, a, l), this.__originalBezierCurveTo(e, i, n, s, a, l);
  }, r.rect = function(e, i, n, s) {
    t.rect(e, i, n, s), this.__originalRect(e, i, n, s);
  }, r.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, r.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class JC {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, i) {
    let n;
    return this.cache[t] !== void 0 ? (n = this.cache[t], this.canvasFactory.reset(n, e, i)) : (n = this.canvasFactory.create(e, i), this.cache[t] = n), n;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Fh(r, t, e, i, n, s, a, l, c, d) {
  const [h, p, g, v, b, _] = Ut(r);
  if (p === 0 && g === 0) {
    const R = a * h + b, L = Math.round(R), M = l * v + _, D = Math.round(M), N = (a + c) * h + b, U = Math.abs(Math.round(N) - L) || 1, S = (l + d) * v + _, T = Math.abs(Math.round(S) - D) || 1;
    return r.setTransform(Math.sign(h), 0, 0, Math.sign(v), L, D), r.drawImage(t, e, i, n, s, 0, 0, U, T), r.setTransform(h, p, g, v, b, _), [U, T];
  }
  if (h === 0 && v === 0) {
    const R = l * g + b, L = Math.round(R), M = a * p + _, D = Math.round(M), N = (l + d) * g + b, U = Math.abs(Math.round(N) - L) || 1, S = (a + c) * p + _, T = Math.abs(Math.round(S) - D) || 1;
    return r.setTransform(0, Math.sign(p), Math.sign(g), 0, L, D), r.drawImage(t, e, i, n, s, 0, 0, T, U), r.setTransform(h, p, g, v, b, _), [T, U];
  }
  r.drawImage(t, e, i, n, s, a, l, c, d);
  const C = Math.hypot(h, p), E = Math.hypot(g, v);
  return [C * c, E * d];
}
function QC(r) {
  const {
    width: t,
    height: e
  } = r;
  if (t > Zm || e > Zm)
    return null;
  const i = 1e3, n = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), s = t + 1;
  let a = new Uint8Array(s * (e + 1)), l, c, d;
  const h = t + 7 & -8;
  let p = new Uint8Array(h * e), g = 0;
  for (const E of r.data) {
    let R = 128;
    for (; R > 0; )
      p[g++] = E & R ? 0 : 255, R >>= 1;
  }
  let v = 0;
  for (g = 0, p[g] !== 0 && (a[0] = 1, ++v), c = 1; c < t; c++)
    p[g] !== p[g + 1] && (a[c] = p[g] ? 2 : 1, ++v), g++;
  for (p[g] !== 0 && (a[c] = 2, ++v), l = 1; l < e; l++) {
    g = l * h, d = l * s, p[g - h] !== p[g] && (a[d] = p[g] ? 1 : 8, ++v);
    let E = (p[g] ? 4 : 0) + (p[g - h] ? 8 : 0);
    for (c = 1; c < t; c++)
      E = (E >> 2) + (p[g + 1] ? 4 : 0) + (p[g - h + 1] ? 8 : 0), n[E] && (a[d + c] = n[E], ++v), g++;
    if (p[g - h] !== p[g] && (a[d + c] = p[g] ? 2 : 4, ++v), v > i)
      return null;
  }
  for (g = h * (e - 1), d = l * s, p[g] !== 0 && (a[d] = 8, ++v), c = 1; c < t; c++)
    p[g] !== p[g + 1] && (a[d + c] = p[g] ? 4 : 8, ++v), g++;
  if (p[g] !== 0 && (a[d + c] = 4, ++v), v > i)
    return null;
  const b = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]), _ = new Path2D();
  for (l = 0; v && l <= e; l++) {
    let E = l * s;
    const R = E + t;
    for (; E < R && !a[E]; )
      E++;
    if (E === R)
      continue;
    _.moveTo(E % s, l);
    const L = E;
    let M = a[E];
    do {
      const D = b[M];
      do
        E += D;
      while (!a[E]);
      const N = a[E];
      N !== 5 && N !== 10 ? (M = N, a[E] = 0) : (M = N & 51 * M >> 4, a[E] &= M >> 2 | M << 2), _.lineTo(E % s, E / s | 0), a[E] || --v;
    } while (L !== E);
    --l;
  }
  return p = null, a = null, function(E) {
    E.save(), E.scale(1 / t, -1 / e), E.translate(0, -e), E.fill(_), E.beginPath(), E.restore();
  };
}
class Jm {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Av, this.textMatrixScale = 1, this.fontMatrix = gp, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = ve.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, i) {
    [e, i] = Z.applyTransform([e, i], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, i), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, i);
  }
  updateRectMinMax(t, e) {
    const i = Z.applyTransform(e, t), n = Z.applyTransform(e.slice(2), t), s = Z.applyTransform([e[0], e[3]], t), a = Z.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, i[0], n[0], s[0], a[0]), this.minY = Math.min(this.minY, i[1], n[1], s[1], a[1]), this.maxX = Math.max(this.maxX, i[0], n[0], s[0], a[0]), this.maxY = Math.max(this.maxY, i[1], n[1], s[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    Z.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, i, n, s, a, l, c, d, h) {
    const p = Z.bezierBoundingBox(e, i, n, s, a, l, c, d, h);
    h || this.updateRectMinMax(t, p);
  }
  getPathBoundingBox(t = Pe.FILL, e = null) {
    const i = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Pe.STROKE) {
      e || It("Stroke bounding box must include transform.");
      const n = Z.singularValueDecompose2dScale(e), s = n[0] * this.lineWidth / 2, a = n[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= a, i[2] += s, i[3] += a;
    }
    return i;
  }
  updateClipFromPath() {
    const t = Z.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Pe.FILL, e = null) {
    return Z.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Qm(r, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    r.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, i = t.width, n = e % Fe, s = (e - n) / Fe, a = n === 0 ? s : s + 1, l = r.createImageData(i, Fe);
  let c = 0, d;
  const h = t.data, p = l.data;
  let g, v, b, _;
  if (t.kind === Hh.GRAYSCALE_1BPP) {
    const C = h.byteLength, E = new Uint32Array(p.buffer, 0, p.byteLength >> 2), R = E.length, L = i + 7 >> 3, M = 4294967295, D = Oe.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (b = g < s ? Fe : n, d = 0, v = 0; v < b; v++) {
        const N = C - c;
        let U = 0;
        const S = N > L ? i : N * 8 - 7, T = S & -8;
        let I = 0, k = 0;
        for (; U < T; U += 8)
          k = h[c++], E[d++] = k & 128 ? M : D, E[d++] = k & 64 ? M : D, E[d++] = k & 32 ? M : D, E[d++] = k & 16 ? M : D, E[d++] = k & 8 ? M : D, E[d++] = k & 4 ? M : D, E[d++] = k & 2 ? M : D, E[d++] = k & 1 ? M : D;
        for (; U < S; U++)
          I === 0 && (k = h[c++], I = 128), E[d++] = k & I ? M : D, I >>= 1;
      }
      for (; d < R; )
        E[d++] = 0;
      r.putImageData(l, 0, g * Fe);
    }
  } else if (t.kind === Hh.RGBA_32BPP) {
    for (v = 0, _ = i * Fe * 4, g = 0; g < s; g++)
      p.set(h.subarray(c, c + _)), c += _, r.putImageData(l, 0, v), v += Fe;
    g < a && (_ = i * n * 4, p.set(h.subarray(c, c + _)), r.putImageData(l, 0, v));
  } else if (t.kind === Hh.RGB_24BPP)
    for (b = Fe, _ = i * b, g = 0; g < a; g++) {
      for (g >= s && (b = n, _ = i * b), d = 0, v = _; v--; )
        p[d++] = h[c++], p[d++] = h[c++], p[d++] = h[c++], p[d++] = 255;
      r.putImageData(l, 0, g * Fe);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function t0(r, t) {
  if (t.bitmap) {
    r.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, i = t.width, n = e % Fe, s = (e - n) / Fe, a = n === 0 ? s : s + 1, l = r.createImageData(i, Fe);
  let c = 0;
  const d = t.data, h = l.data;
  for (let p = 0; p < a; p++) {
    const g = p < s ? Fe : n;
    ({
      srcPos: c
    } = YC({
      src: d,
      srcPos: c,
      dest: h,
      width: i,
      height: g,
      nonBlackColor: 0
    })), r.putImageData(l, 0, p * Fe);
  }
}
function Lo(r, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const i of e)
    r[i] !== void 0 && (t[i] = r[i]);
  r.setLineDash !== void 0 && (t.setLineDash(r.getLineDash()), t.lineDashOffset = r.lineDashOffset);
}
function Mh(r) {
  if (r.strokeStyle = r.fillStyle = "#000000", r.fillRule = "nonzero", r.globalAlpha = 1, r.lineWidth = 1, r.lineCap = "butt", r.lineJoin = "miter", r.miterLimit = 10, r.globalCompositeOperation = "source-over", r.font = "10px sans-serif", r.setLineDash !== void 0 && (r.setLineDash([]), r.lineDashOffset = 0), !Ae) {
    const {
      filter: t
    } = r;
    t !== "none" && t !== "" && (r.filter = "none");
  }
}
function e0(r, t) {
  if (t)
    return !0;
  const e = Z.singularValueDecompose2dScale(r);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const i = Math.fround((globalThis.devicePixelRatio || 1) * ps.PDF_TO_CSS_UNITS);
  return e[0] <= i && e[1] <= i;
}
const tT = ["butt", "round", "square"], eT = ["miter", "round", "bevel"], iT = {}, i0 = {};
var ql, Wp, Xl, qp;
const pm = class pm {
  constructor(t, e, i, n, s, {
    optionalContentConfig: a,
    markedContentStack: l = null
  }, c, d) {
    m(this, ql);
    m(this, Xl);
    this.ctx = t, this.current = new Jm(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = n, this.filterFactory = s, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = l || [], this.optionalContentConfig = a, this.cachedCanvases = new JC(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = d, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: n = null
  }) {
    const s = this.ctx.canvas.width, a = this.ctx.canvas.height, l = this.ctx.fillStyle;
    if (this.ctx.fillStyle = n || "#ffffff", this.ctx.fillRect(0, 0, s, a), this.ctx.fillStyle = l, i) {
      const c = this.cachedCanvases.getCanvas("transparent", s, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...Ut(this.compositeCtx));
    }
    this.ctx.save(), Mh(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ut(this.ctx);
  }
  executeOperatorList(t, e, i, n) {
    const s = t.argsArray, a = t.fnArray;
    let l = e || 0;
    const c = s.length;
    if (c === l)
      return l;
    const d = c - l > Km && typeof i == "function", h = d ? Date.now() + KC : 0;
    let p = 0;
    const g = this.commonObjs, v = this.objs;
    let b;
    for (; ; ) {
      if (n !== void 0 && l === n.nextBreakPoint)
        return n.breakIt(l, i), l;
      if (b = a[l], b !== ai.dependency)
        this[b].apply(this, s[l]);
      else
        for (const _ of s[l]) {
          const C = _.startsWith("g_") ? g : v;
          if (!C.has(_))
            return C.get(_, i), l;
        }
      if (l++, l === c)
        return l;
      if (d && ++p > Km) {
        if (Date.now() > h)
          return i(), l;
        p = 0;
      }
    }
  }
  endDrawing() {
    A(this, ql, Wp).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, Xl, qp).call(this);
  }
  _scaleImage(t, e) {
    const i = t.width, n = t.height;
    let s = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), l = i, c = n, d = "prescale1", h, p;
    for (; s > 2 && l > 1 || a > 2 && c > 1; ) {
      let g = l, v = c;
      s > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), s /= l / g), a > 2 && c > 1 && (v = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, a /= c / v), h = this.cachedCanvases.getCanvas(d, g, v), p = h.context, p.clearRect(0, 0, g, v), p.drawImage(t, 0, 0, l, c, 0, 0, g, v), t = h.canvas, l = g, c = v, d = d === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: l,
      paintHeight: c
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: i,
      height: n
    } = t, s = this.current.fillColor, a = this.current.patternFill, l = Ut(e);
    let c, d, h, p;
    if ((t.bitmap || t.data) && t.count > 1) {
      const S = t.bitmap || t.data.buffer;
      d = JSON.stringify(a ? l : [l.slice(0, 4), s]), c = this._cachedBitmapsMap.get(S), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(S, c));
      const T = c.get(d);
      if (T && !a) {
        const I = Math.round(Math.min(l[0], l[2]) + l[4]), k = Math.round(Math.min(l[1], l[3]) + l[5]);
        return {
          canvas: T,
          offsetX: I,
          offsetY: k
        };
      }
      h = T;
    }
    h || (p = this.cachedCanvases.getCanvas("maskCanvas", i, n), t0(p.context, t));
    let g = Z.transform(l, [1 / i, 0, 0, -1 / n, 0, 0]);
    g = Z.transform(g, [1, 0, 0, 1, 0, -n]);
    const [v, b, _, C] = Z.getAxialAlignedBoundingBox([0, 0, i, n], g), E = Math.round(_ - v) || 1, R = Math.round(C - b) || 1, L = this.cachedCanvases.getCanvas("fillCanvas", E, R), M = L.context, D = v, N = b;
    M.translate(-D, -N), M.transform(...g), h || (h = this._scaleImage(p.canvas, Yi(M)), h = h.img, c && a && c.set(d, h)), M.imageSmoothingEnabled = e0(Ut(M), t.interpolate), Fh(M, h, 0, 0, h.width, h.height, 0, 0, i, n), M.globalCompositeOperation = "source-in";
    const U = Z.transform(Yi(M), [1, 0, 0, 1, -D, -N]);
    return M.fillStyle = a ? s.getPattern(e, this, U, Pe.FILL) : s, M.fillRect(0, 0, i, n), c && !a && (this.cachedCanvases.delete("fillCanvas"), c.set(d, L.canvas)), {
      canvas: L.canvas,
      offsetX: Math.round(D),
      offsetY: Math.round(N)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = tT[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = eT[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const i = this.ctx;
    i.setLineDash !== void 0 && (i.setLineDash(t), i.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, i] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(i);
          break;
        case "LC":
          this.setLineCap(i);
          break;
        case "LJ":
          this.setLineJoin(i);
          break;
        case "ML":
          this.setMiterLimit(i);
          break;
        case "D":
          this.setDash(i[0], i[1]);
          break;
        case "RI":
          this.setRenderingIntent(i);
          break;
        case "FL":
          this.setFlatness(i);
          break;
        case "Font":
          this.setFont(i[0], i[1]);
          break;
        case "CA":
          this.current.strokeAlpha = i;
          break;
        case "ca":
          this.current.fillAlpha = i, this.ctx.globalAlpha = i;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = i;
          break;
        case "SMask":
          this.current.activeSMask = i ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel, n = this.cachedCanvases.getCanvas(i, t, e);
    this.suspendedCtx = this.ctx, this.ctx = n.context;
    const s = this.ctx;
    s.setTransform(...Ut(this.suspendedCtx)), Lo(this.suspendedCtx, s), ZC(s, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Lo(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, i = this.suspendedCtx;
    this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, i, n) {
    const s = n[0], a = n[1], l = n[2] - s, c = n[3] - a;
    l === 0 || c === 0 || (this.genericComposeSMask(e.context, i, l, c, e.subtype, e.backdrop, e.transferMap, s, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, i, n, s, a, l, c, d, h, p) {
    let g = t.canvas, v = c - h, b = d - p;
    if (a) {
      if (v < 0 || b < 0 || v + i > g.width || b + n > g.height) {
        const C = this.cachedCanvases.getCanvas("maskExtension", i, n), E = C.context;
        E.drawImage(g, -v, -b), a.some((R) => R !== 0) && (E.globalCompositeOperation = "destination-atop", E.fillStyle = Z.makeHexColor(...a), E.fillRect(0, 0, i, n), E.globalCompositeOperation = "source-over"), g = C.canvas, v = b = 0;
      } else if (a.some((C) => C !== 0)) {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const C = new Path2D();
        C.rect(v, b, i, n), t.clip(C), t.globalCompositeOperation = "destination-atop", t.fillStyle = Z.makeHexColor(...a), t.fillRect(v, b, i, n), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), s === "Alpha" && l ? e.filter = this.filterFactory.addAlphaFilter(l) : s === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(l));
    const _ = new Path2D();
    _.rect(c, d, i, n), e.clip(_), e.globalCompositeOperation = "destination-in", e.drawImage(g, v, b, i, n, c, d, i, n), e.restore();
  }
  save() {
    this.inSMaskMode ? (Lo(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Lo(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, i, n, s, a) {
    this.ctx.transform(t, e, i, n, s, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, i) {
    const n = this.ctx, s = this.current;
    let a = s.x, l = s.y, c, d;
    const h = Ut(n), p = h[0] === 0 && h[3] === 0 || h[1] === 0 && h[2] === 0, g = p ? i.slice(0) : null;
    for (let v = 0, b = 0, _ = t.length; v < _; v++)
      switch (t[v] | 0) {
        case ai.rectangle:
          a = e[b++], l = e[b++];
          const C = e[b++], E = e[b++], R = a + C, L = l + E;
          n.moveTo(a, l), C === 0 || E === 0 ? n.lineTo(R, L) : (n.lineTo(R, l), n.lineTo(R, L), n.lineTo(a, L)), p || s.updateRectMinMax(h, [a, l, R, L]), n.closePath();
          break;
        case ai.moveTo:
          a = e[b++], l = e[b++], n.moveTo(a, l), p || s.updatePathMinMax(h, a, l);
          break;
        case ai.lineTo:
          a = e[b++], l = e[b++], n.lineTo(a, l), p || s.updatePathMinMax(h, a, l);
          break;
        case ai.curveTo:
          c = a, d = l, a = e[b + 4], l = e[b + 5], n.bezierCurveTo(e[b], e[b + 1], e[b + 2], e[b + 3], a, l), s.updateCurvePathMinMax(h, c, d, e[b], e[b + 1], e[b + 2], e[b + 3], a, l, g), b += 6;
          break;
        case ai.curveTo2:
          c = a, d = l, n.bezierCurveTo(a, l, e[b], e[b + 1], e[b + 2], e[b + 3]), s.updateCurvePathMinMax(h, c, d, a, l, e[b], e[b + 1], e[b + 2], e[b + 3], g), a = e[b + 2], l = e[b + 3], b += 4;
          break;
        case ai.curveTo3:
          c = a, d = l, a = e[b + 2], l = e[b + 3], n.bezierCurveTo(e[b], e[b + 1], a, l, a, l), s.updateCurvePathMinMax(h, c, d, e[b], e[b + 1], a, l, a, l, g), b += 4;
          break;
        case ai.closePath:
          n.closePath();
          break;
      }
    p && s.updateScalingPathMinMax(h, g), s.setCurrentPoint(a, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, i = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof i == "object" && (i != null && i.getPattern) ? (e.save(), e.strokeStyle = i.getPattern(e, this, Yi(e), Pe.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, i = this.current.fillColor, n = this.current.patternFill;
    let s = !1;
    n && (e.save(), e.fillStyle = i.getPattern(e, this, Yi(e), Pe.FILL), s = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), s && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = iT;
  }
  eoClip() {
    this.pendingClip = i0;
  }
  beginText() {
    this.current.textMatrix = Av, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const i of t)
      e.setTransform(...i.transform), e.translate(i.x, i.y), i.addToPath(e, i.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var h;
    const i = this.commonObjs.get(t), n = this.current;
    if (!i)
      throw new Error(`Can't find font for ${t}`);
    if (n.fontMatrix = i.fontMatrix || gp, (n.fontMatrix[0] === 0 || n.fontMatrix[3] === 0) && ut("Invalid font matrix for font " + t), e < 0 ? (e = -e, n.fontDirection = -1) : n.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font)
      return;
    const s = i.loadedName || "sans-serif", a = ((h = i.systemFontInfo) == null ? void 0 : h.css) || `"${s}", ${i.fallbackName}`;
    let l = "normal";
    i.black ? l = "900" : i.bold && (l = "bold");
    const c = i.italic ? "italic" : "normal";
    let d = e;
    e < Xm ? d = Xm : e > Ym && (d = Ym), this.current.fontSizeScale = e / d, this.ctx.font = `${c} ${l} ${d}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, i, n, s, a) {
    this.current.textMatrix = [t, e, i, n, s, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, i, n) {
    const s = this.ctx, a = this.current, l = a.font, c = a.textRenderingMode, d = a.fontSize / a.fontSizeScale, h = c & ve.FILL_STROKE_MASK, p = !!(c & ve.ADD_TO_PATH_FLAG), g = a.patternFill && !l.missingFile;
    let v;
    (l.disableFontFace || p || g) && (v = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g ? (s.save(), s.translate(e, i), s.beginPath(), v(s, d), n && s.setTransform(...n), (h === ve.FILL || h === ve.FILL_STROKE) && s.fill(), (h === ve.STROKE || h === ve.FILL_STROKE) && s.stroke(), s.restore()) : ((h === ve.FILL || h === ve.FILL_STROKE) && s.fillText(t, e, i), (h === ve.STROKE || h === ve.FILL_STROKE) && s.strokeText(t, e, i)), p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Ut(s),
      x: e,
      y: i,
      fontSize: d,
      addToPath: v
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let n = 3; n < e.length; n += 4)
      if (e[n] > 0 && e[n] < 255) {
        i = !0;
        break;
      }
    return _t(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t) {
    const e = this.current, i = e.font;
    if (i.isType3Font)
      return this.showType3Text(t);
    const n = e.fontSize;
    if (n === 0)
      return;
    const s = this.ctx, a = e.fontSizeScale, l = e.charSpacing, c = e.wordSpacing, d = e.fontDirection, h = e.textHScale * d, p = t.length, g = i.vertical, v = g ? 1 : -1, b = i.defaultVMetrics, _ = n * e.fontMatrix[0], C = e.textRenderingMode === ve.FILL && !i.disableFontFace && !e.patternFill;
    s.save(), s.transform(...e.textMatrix), s.translate(e.x, e.y + e.textRise), d > 0 ? s.scale(h, -1) : s.scale(h, 1);
    let E;
    if (e.patternFill) {
      s.save();
      const N = e.fillColor.getPattern(s, this, Yi(s), Pe.FILL);
      E = Ut(s), s.restore(), s.fillStyle = N;
    }
    let R = e.lineWidth;
    const L = e.textMatrixScale;
    if (L === 0 || R === 0) {
      const N = e.textRenderingMode & ve.FILL_STROKE_MASK;
      (N === ve.STROKE || N === ve.FILL_STROKE) && (R = this.getSinglePixelWidth());
    } else
      R /= L;
    if (a !== 1 && (s.scale(a, a), R /= a), s.lineWidth = R, i.isInvalidPDFjsFont) {
      const N = [];
      let U = 0;
      for (const S of t)
        N.push(S.unicode), U += S.width;
      s.fillText(N.join(""), 0, 0), e.x += U * _ * h, s.restore(), this.compose();
      return;
    }
    let M = 0, D;
    for (D = 0; D < p; ++D) {
      const N = t[D];
      if (typeof N == "number") {
        M += v * N * n / 1e3;
        continue;
      }
      let U = !1;
      const S = (N.isSpace ? c : 0) + l, T = N.fontChar, I = N.accent;
      let k, H, j = N.width;
      if (g) {
        const Y = N.vmetric || b, K = -(N.vmetric ? Y[1] : j * 0.5) * _, B = Y[2] * _;
        j = Y ? -Y[0] : j, k = K / a, H = (M + B) / a;
      } else
        k = M / a, H = 0;
      if (i.remeasure && j > 0) {
        const Y = s.measureText(T).width * 1e3 / n * a;
        if (j < Y && this.isFontSubpixelAAEnabled) {
          const K = j / Y;
          U = !0, s.save(), s.scale(K, 1), k /= K;
        } else
          j !== Y && (k += (j - Y) / 2e3 * n / a);
      }
      if (this.contentVisible && (N.isInFont || i.missingFile)) {
        if (C && !I)
          s.fillText(T, k, H);
        else if (this.paintChar(T, k, H, E), I) {
          const Y = k + n * I.offset.x / a, K = H - n * I.offset.y / a;
          this.paintChar(I.fontChar, Y, K, E);
        }
      }
      const z = g ? j * _ - S * d : j * _ + S * d;
      M += z, U && s.restore();
    }
    g ? e.y -= M : e.x += M * h, s.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, i = this.current, n = i.font, s = i.fontSize, a = i.fontDirection, l = n.vertical ? 1 : -1, c = i.charSpacing, d = i.wordSpacing, h = i.textHScale * a, p = i.fontMatrix || gp, g = t.length, v = i.textRenderingMode === ve.INVISIBLE;
    let b, _, C, E;
    if (!(v || s === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...i.textMatrix), e.translate(i.x, i.y), e.scale(h, a), b = 0; b < g; ++b) {
        if (_ = t[b], typeof _ == "number") {
          E = l * _ * s / 1e3, this.ctx.translate(E, 0), i.x += E * h;
          continue;
        }
        const R = (_.isSpace ? d : 0) + c, L = n.charProcOperatorList[_.operatorListId];
        if (!L) {
          ut(`Type3 character "${_.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = _, this.save(), e.scale(s, s), e.transform(...p), this.executeOperatorList(L), this.restore()), C = Z.applyTransform([_.width, 0], p)[0] * s + R, e.translate(C, 0), i.x += C * h;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, i, n, s, a) {
    this.ctx.rect(i, n, s - i, a - n), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const i = t[1], n = this.baseTransform || Ut(this.ctx), s = {
        createCanvasGraphics: (a) => new pm(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Vp(t, i, this.ctx, s, n);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, i) {
    const n = Z.makeHexColor(t, e, i);
    this.ctx.strokeStyle = n, this.current.strokeColor = n;
  }
  setFillRGBColor(t, e, i) {
    const n = Z.makeHexColor(t, e, i);
    this.ctx.fillStyle = n, this.current.fillColor = n, this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let i;
    return this.cachedPatterns.has(t) ? i = this.cachedPatterns.get(t) : (i = XC(this.getObject(t)), this.cachedPatterns.set(t, i)), e && (i.matrix = e), i;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const i = this._getPattern(t);
    e.fillStyle = i.getPattern(e, this, Yi(e), Pe.SHADING);
    const n = Yi(e);
    if (n) {
      const {
        width: s,
        height: a
      } = e.canvas, [l, c, d, h] = Z.getAxialAlignedBoundingBox([0, 0, s, a], n);
      this.ctx.fillRect(l, c, d - l, h - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    It("Should not call beginInlineImage");
  }
  beginImageData() {
    It("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = Ut(this.ctx), e)) {
      const i = e[2] - e[0], n = e[3] - e[1];
      this.ctx.rect(e[0], e[1], i, n), this.current.updateRectMinMax(Ut(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || mf("TODO: Support non-isolated groups."), t.knockout && ut("Knockout groups not supported.");
    const i = Ut(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let n = Z.getAxialAlignedBoundingBox(t.bbox, Ut(e));
    const s = [0, 0, e.canvas.width, e.canvas.height];
    n = Z.intersect(n, s) || [0, 0, 0, 0];
    const a = Math.floor(n[0]), l = Math.floor(n[1]), c = Math.max(Math.ceil(n[2]) - a, 1), d = Math.max(Math.ceil(n[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    let h = "groupAt" + this.groupLevel;
    t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(h, c, d), g = p.context;
    g.translate(-a, -l), g.transform(...i), t.smask ? this.smaskStack.push({
      canvas: p.canvas,
      context: g,
      offsetX: a,
      offsetY: l,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, l), e.save()), Lo(e, g), this.ctx = g, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, i = this.groupStack.pop();
    if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const n = Ut(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...n);
      const s = Z.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], n);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(s);
    }
  }
  beginAnnotation(t, e, i, n, s) {
    if (A(this, ql, Wp).call(this), Mh(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], l = e[3] - e[1];
      if (s && this.annotationCanvasMap) {
        i = i.slice(), i[4] -= e[0], i[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = l;
        const [c, d] = Z.singularValueDecompose2dScale(Ut(this.ctx)), {
          viewportScale: h
        } = this, p = Math.ceil(a * this.outputScaleX * h), g = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(p, g);
        const {
          canvas: v,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, v), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -d, 0, l * d), Mh(this.ctx);
      } else
        Mh(this.ctx), this.ctx.rect(e[0], e[1], a, l), this.ctx.clip(), this.endPath();
    }
    this.current = new Jm(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...i), this.transform(...n);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), A(this, Xl, qp).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const i = this.ctx, n = this.processingType3;
    if (n && (n.compiled === void 0 && (n.compiled = QC(t)), n.compiled)) {
      n.compiled(i);
      return;
    }
    const s = this._createMaskCanvas(t), a = s.canvas;
    i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(a, s.offsetX, s.offsetY), i.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, i = 0, n = 0, s, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const l = this.ctx;
    l.save();
    const c = Ut(l);
    l.transform(e, i, n, s, 0, 0);
    const d = this._createMaskCanvas(t);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]);
    for (let h = 0, p = a.length; h < p; h += 2) {
      const g = Z.transform(c, [e, i, n, s, a[h], a[h + 1]]), [v, b] = Z.applyTransform([0, 0], g);
      l.drawImage(d.canvas, v, b);
    }
    l.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, i = this.current.fillColor, n = this.current.patternFill;
    for (const s of t) {
      const {
        data: a,
        width: l,
        height: c,
        transform: d
      } = s, h = this.cachedCanvases.getCanvas("maskCanvas", l, c), p = h.context;
      p.save();
      const g = this.getObject(a, s);
      t0(p, g), p.globalCompositeOperation = "source-in", p.fillStyle = n ? i.getPattern(p, this, Yi(e), Pe.FILL) : i, p.fillRect(0, 0, l, c), p.restore(), e.save(), e.transform(...d), e.scale(1, -1), Fh(e, h.canvas, 0, 0, l, c, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      ut("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, i, n) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t);
    if (!s) {
      ut("Dependent image isn't ready yet");
      return;
    }
    const a = s.width, l = s.height, c = [];
    for (let d = 0, h = n.length; d < h; d += 2)
      c.push({
        transform: [e, 0, 0, i, n[d], n[d + 1]],
        x: 0,
        y: 0,
        w: a,
        h: l
      });
    this.paintInlineImageXObjectGroup(s, c);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: i,
      height: n
    } = t, s = this.cachedCanvases.getCanvas("inlineImage", i, n), a = s.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", s.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, i = t.height, n = this.ctx;
    if (this.save(), !Ae) {
      const {
        filter: l
      } = n;
      l !== "none" && l !== "" && (n.filter = "none");
    }
    n.scale(1 / e, -1 / i);
    let s;
    if (t.bitmap)
      s = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      s = t;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
      Qm(c, t), s = this.applyTransferMapsToCanvas(c);
    }
    const a = this._scaleImage(s, Yi(n));
    n.imageSmoothingEnabled = e0(Ut(n), t.interpolate), Fh(n, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -i, e, i), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const i = this.ctx;
    let n;
    if (t.bitmap)
      n = t.bitmap;
    else {
      const s = t.width, a = t.height, c = this.cachedCanvases.getCanvas("inlineImage", s, a).context;
      Qm(c, t), n = this.applyTransferMapsToCanvas(c);
    }
    for (const s of e)
      i.save(), i.transform(...s.transform), i.scale(1, -1), Fh(i, n, s.x, s.y, s.w, s.h, 0, -1, 1, 1), i.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const i = this.ctx;
    this.pendingClip && (e || (this.pendingClip === i0 ? i.clip("evenodd") : i.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), i.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Ut(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), n = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, n) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: i,
        c: n,
        d: s
      } = this.ctx.getTransform();
      let a, l;
      if (i === 0 && n === 0) {
        const c = Math.abs(e), d = Math.abs(s);
        if (c === d)
          if (t === 0)
            a = l = 1 / c;
          else {
            const h = c * t;
            a = l = h < 1 ? 1 / h : 1;
          }
        else if (t === 0)
          a = 1 / c, l = 1 / d;
        else {
          const h = c * t, p = d * t;
          a = h < 1 ? 1 / h : 1, l = p < 1 ? 1 / p : 1;
        }
      } else {
        const c = Math.abs(e * s - i * n), d = Math.hypot(e, i), h = Math.hypot(n, s);
        if (t === 0)
          a = h / c, l = d / c;
        else {
          const p = t * c;
          a = h > p ? h / p : 1, l = d > p ? d / p : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = l;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: i
    } = this.current, [n, s] = this.getScaleForStroking();
    if (e.lineWidth = i || 1, n === 1 && s === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(n, s), a.length > 0) {
      const l = Math.max(n, s);
      e.setLineDash(a.map((c) => c / l)), e.lineDashOffset /= l;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ql = new WeakSet(), Wp = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Xl = new WeakSet(), qp = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let ea = pm;
for (const r in ai)
  ea.prototype[r] !== void 0 && (ea.prototype[ai[r]] = ea.prototype[r]);
var Yl, Kl;
class kn {
  static get workerPort() {
    return o(this, Yl);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    w(this, Yl, t);
  }
  static get workerSrc() {
    return o(this, Kl);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    w(this, Kl, t);
  }
}
Yl = new WeakMap(), Kl = new WeakMap(), m(kn, Yl, null), m(kn, Kl, "");
const Dh = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, Kt = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Ue(r) {
  switch (r instanceof Error || typeof r == "object" && r !== null || It('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), r.name) {
    case "AbortException":
      return new jr(r.message);
    case "MissingPDFException":
      return new Hr(r.message);
    case "PasswordException":
      return new vp(r.message, r.code);
    case "UnexpectedResponseException":
      return new vf(r.message, r.status);
    case "UnknownErrorException":
      return new bp(r.message, r.details);
    default:
      return new bp(r.message, r.toString());
  }
}
var nu, ib, su, nb, _a, qh;
class $o {
  constructor(t, e, i) {
    m(this, nu);
    m(this, su);
    m(this, _a);
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (n) => {
      const s = n.data;
      if (s.targetName !== this.sourceName)
        return;
      if (s.stream) {
        A(this, su, nb).call(this, s);
        return;
      }
      if (s.callback) {
        const l = s.callbackId, c = this.callbackCapabilities[l];
        if (!c)
          throw new Error(`Cannot resolve callback ${l}`);
        if (delete this.callbackCapabilities[l], s.callback === Dh.DATA)
          c.resolve(s.data);
        else if (s.callback === Dh.ERROR)
          c.reject(Ue(s.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const a = this.actionHandler[s.action];
      if (!a)
        throw new Error(`Unknown action from worker: ${s.action}`);
      if (s.callbackId) {
        const l = this.sourceName, c = s.sourceName;
        new Promise(function(d) {
          d(a(s.data));
        }).then(function(d) {
          i.postMessage({
            sourceName: l,
            targetName: c,
            callback: Dh.DATA,
            callbackId: s.callbackId,
            data: d
          });
        }, function(d) {
          i.postMessage({
            sourceName: l,
            targetName: c,
            callback: Dh.ERROR,
            callbackId: s.callbackId,
            reason: Ue(d)
          });
        });
        return;
      }
      if (s.streamId) {
        A(this, nu, ib).call(this, s);
        return;
      }
      a(s.data);
    }, i.addEventListener("message", this._onComObjOnMessage);
  }
  on(t, e) {
    const i = this.actionHandler;
    if (i[t])
      throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }
  send(t, e, i) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, i);
  }
  sendWithPromise(t, e, i) {
    const n = this.callbackId++, s = Promise.withResolvers();
    this.callbackCapabilities[n] = s;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: n,
        data: e
      }, i);
    } catch (a) {
      s.reject(a);
    }
    return s.promise;
  }
  sendWithStream(t, e, i, n) {
    const s = this.streamId++, a = this.sourceName, l = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s] = {
          controller: d,
          startCall: h,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: a,
          targetName: l,
          action: t,
          streamId: s,
          data: e,
          desiredSize: d.desiredSize
        }, n), h.promise;
      },
      pull: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s].pullCall = h, c.postMessage({
          sourceName: a,
          targetName: l,
          stream: Kt.PULL,
          streamId: s,
          desiredSize: d.desiredSize
        }), h.promise;
      },
      cancel: (d) => {
        ie(d instanceof Error, "cancel must have a valid reason");
        const h = Promise.withResolvers();
        return this.streamControllers[s].cancelCall = h, this.streamControllers[s].isClosed = !0, c.postMessage({
          sourceName: a,
          targetName: l,
          stream: Kt.CANCEL,
          streamId: s,
          reason: Ue(d)
        }), h.promise;
      }
    }, i);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
nu = new WeakSet(), ib = function(t) {
  const e = t.streamId, i = this.sourceName, n = t.sourceName, s = this.comObj, a = this, l = this.actionHandler[t.action], c = {
    enqueue(d, h = 1, p) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= h, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), s.postMessage({
        sourceName: i,
        targetName: n,
        stream: Kt.ENQUEUE,
        streamId: e,
        chunk: d
      }, p);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, s.postMessage({
        sourceName: i,
        targetName: n,
        stream: Kt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(d) {
      ie(d instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, s.postMessage({
        sourceName: i,
        targetName: n,
        stream: Kt.ERROR,
        streamId: e,
        reason: Ue(d)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[e] = c, new Promise(function(d) {
    d(l(t.data, c));
  }).then(function() {
    s.postMessage({
      sourceName: i,
      targetName: n,
      stream: Kt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(d) {
    s.postMessage({
      sourceName: i,
      targetName: n,
      stream: Kt.START_COMPLETE,
      streamId: e,
      reason: Ue(d)
    });
  });
}, su = new WeakSet(), nb = function(t) {
  const e = t.streamId, i = this.sourceName, n = t.sourceName, s = this.comObj, a = this.streamControllers[e], l = this.streamSinks[e];
  switch (t.stream) {
    case Kt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Ue(t.reason));
      break;
    case Kt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Ue(t.reason));
      break;
    case Kt.PULL:
      if (!l) {
        s.postMessage({
          sourceName: i,
          targetName: n,
          stream: Kt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      l.desiredSize <= 0 && t.desiredSize > 0 && l.sinkCapability.resolve(), l.desiredSize = t.desiredSize, new Promise(function(c) {
        var d;
        c((d = l.onPull) == null ? void 0 : d.call(l));
      }).then(function() {
        s.postMessage({
          sourceName: i,
          targetName: n,
          stream: Kt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: i,
          targetName: n,
          stream: Kt.PULL_COMPLETE,
          streamId: e,
          reason: Ue(c)
        });
      });
      break;
    case Kt.ENQUEUE:
      if (ie(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Kt.CLOSE:
      if (ie(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), A(this, _a, qh).call(this, a, e);
      break;
    case Kt.ERROR:
      ie(a, "error should have stream controller"), a.controller.error(Ue(t.reason)), A(this, _a, qh).call(this, a, e);
      break;
    case Kt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ue(t.reason)), A(this, _a, qh).call(this, a, e);
      break;
    case Kt.CANCEL:
      if (!l)
        break;
      new Promise(function(c) {
        var d;
        c((d = l.onCancel) == null ? void 0 : d.call(l, Ue(t.reason)));
      }).then(function() {
        s.postMessage({
          sourceName: i,
          targetName: n,
          stream: Kt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: i,
          targetName: n,
          stream: Kt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ue(c)
        });
      }), l.sinkCapability.reject(Ue(t.reason)), l.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, _a = new WeakSet(), qh = async function(t, e) {
  var i, n, s;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (n = t.pullCall) == null ? void 0 : n.promise, (s = t.cancelCall) == null ? void 0 : s.promise]), delete this.streamControllers[e];
};
var qs, Zl;
class nT {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, qs, void 0);
    m(this, Zl, void 0);
    w(this, qs, t), w(this, Zl, e);
  }
  getRaw() {
    return o(this, Zl);
  }
  get(t) {
    return o(this, qs).get(t) ?? null;
  }
  getAll() {
    return Zg(o(this, qs));
  }
  has(t) {
    return o(this, qs).has(t);
  }
}
qs = new WeakMap(), Zl = new WeakMap();
const Nn = Symbol("INTERNAL");
var Jl, Ql, tc, Ea;
class sT {
  constructor(t, {
    name: e,
    intent: i,
    usage: n
  }) {
    m(this, Jl, !1);
    m(this, Ql, !1);
    m(this, tc, !1);
    m(this, Ea, !0);
    w(this, Jl, !!(t & si.DISPLAY)), w(this, Ql, !!(t & si.PRINT)), this.name = e, this.intent = i, this.usage = n;
  }
  get visible() {
    if (o(this, tc))
      return o(this, Ea);
    if (!o(this, Ea))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return o(this, Jl) ? (e == null ? void 0 : e.viewState) !== "OFF" : o(this, Ql) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, i = !1) {
    t !== Nn && It("Internal method `_setVisible` called."), w(this, tc, i), w(this, Ea, e);
  }
}
Jl = new WeakMap(), Ql = new WeakMap(), tc = new WeakMap(), Ea = new WeakMap();
var Kn, kt, xa, Sa, ec, Xp;
class rT {
  constructor(t, e = si.DISPLAY) {
    m(this, ec);
    m(this, Kn, null);
    m(this, kt, /* @__PURE__ */ new Map());
    m(this, xa, null);
    m(this, Sa, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, w(this, Sa, t.order);
      for (const i of t.groups)
        o(this, kt).set(i.id, new sT(e, i));
      if (t.baseState === "OFF")
        for (const i of o(this, kt).values())
          i._setVisible(Nn, !1);
      for (const i of t.on)
        o(this, kt).get(i)._setVisible(Nn, !0);
      for (const i of t.off)
        o(this, kt).get(i)._setVisible(Nn, !1);
      w(this, xa, this.getHash());
    }
  }
  isVisible(t) {
    if (o(this, kt).size === 0)
      return !0;
    if (!t)
      return mf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return o(this, kt).has(t.id) ? o(this, kt).get(t.id).visible : (ut(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return A(this, ec, Xp).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!o(this, kt).has(e))
            return ut(`Optional content group not found: ${e}`), !0;
          if (o(this, kt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!o(this, kt).has(e))
            return ut(`Optional content group not found: ${e}`), !0;
          if (!o(this, kt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!o(this, kt).has(e))
            return ut(`Optional content group not found: ${e}`), !0;
          if (!o(this, kt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!o(this, kt).has(e))
            return ut(`Optional content group not found: ${e}`), !0;
          if (o(this, kt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return ut(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return ut(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0) {
    const i = o(this, kt).get(t);
    if (!i) {
      ut(`Optional content group not found: ${t}`);
      return;
    }
    i._setVisible(Nn, !!e, !0), w(this, Kn, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let i;
    for (const n of t) {
      switch (n) {
        case "ON":
        case "OFF":
        case "Toggle":
          i = n;
          continue;
      }
      const s = o(this, kt).get(n);
      if (s)
        switch (i) {
          case "ON":
            s._setVisible(Nn, !0);
            break;
          case "OFF":
            s._setVisible(Nn, !1);
            break;
          case "Toggle":
            s._setVisible(Nn, !s.visible);
            break;
        }
    }
    w(this, Kn, null);
  }
  get hasInitialVisibility() {
    return o(this, xa) === null || this.getHash() === o(this, xa);
  }
  getOrder() {
    return o(this, kt).size ? o(this, Sa) ? o(this, Sa).slice() : [...o(this, kt).keys()] : null;
  }
  getGroups() {
    return o(this, kt).size > 0 ? Zg(o(this, kt)) : null;
  }
  getGroup(t) {
    return o(this, kt).get(t) || null;
  }
  getHash() {
    if (o(this, Kn) !== null)
      return o(this, Kn);
    const t = new Jv();
    for (const [e, i] of o(this, kt))
      t.update(`${e}:${i.visible}`);
    return w(this, Kn, t.hexdigest());
  }
}
Kn = new WeakMap(), kt = new WeakMap(), xa = new WeakMap(), Sa = new WeakMap(), ec = new WeakSet(), Xp = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const i = t[0];
  for (let n = 1; n < e; n++) {
    const s = t[n];
    let a;
    if (Array.isArray(s))
      a = A(this, ec, Xp).call(this, s);
    else if (o(this, kt).has(s))
      a = o(this, kt).get(s).visible;
    else
      return ut(`Optional content group not found: ${s}`), !0;
    switch (i) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return i === "And";
};
class aT {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1
  }) {
    ie(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: n,
      initialData: s,
      progressiveDone: a,
      contentDispositionFilename: l
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = l, (s == null ? void 0 : s.length) > 0) {
      const c = s instanceof Uint8Array && s.byteLength === s.buffer.byteLength ? s.buffer : new Uint8Array(s).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = n, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((c, d) => {
      this._onReceiveData({
        begin: c,
        chunk: d
      });
    }), t.addProgressListener((c, d) => {
      this._onProgress({
        loaded: c,
        total: d
      });
    }), t.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const n = this._rangeReaders.some(function(s) {
        return s._begin !== t ? !1 : (s._enqueue(i), !0);
      });
      ie(n, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, i, n, s;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded
    }) : (s = (n = this._fullRequestReader) == null ? void 0 : n.onProgress) == null || s.call(n, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    ie(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new oT(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new lT(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0))
      i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class oT {
  constructor(t, e, i = !1, n = null) {
    this._stream = t, this._done = i || !1, this._filename = im(n) ? n : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const s of this._queuedChunks)
      this._loaded += s.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class lT {
  constructor(t, e, i) {
    this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const i of this._requests)
          i.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function cT(r) {
  let t = !0, e = i("filename\\*", "i").exec(r);
  if (e) {
    e = e[1];
    let h = l(e);
    return h = unescape(h), h = c(h), h = d(h), s(h);
  }
  if (e = a(r), e) {
    const h = d(e);
    return s(h);
  }
  if (e = i("filename", "i").exec(r), e) {
    e = e[1];
    let h = l(e);
    return h = d(h), s(h);
  }
  function i(h, p) {
    return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', p);
  }
  function n(h, p) {
    if (h) {
      if (!/^[\x00-\xFF]+$/.test(p))
        return p;
      try {
        const g = new TextDecoder(h, {
          fatal: !0
        }), v = bf(p);
        p = g.decode(v), t = !1;
      } catch {
      }
    }
    return p;
  }
  function s(h) {
    return t && /[\x80-\xff]/.test(h) && (h = n("utf-8", h), t && (h = n("iso-8859-1", h))), h;
  }
  function a(h) {
    const p = [];
    let g;
    const v = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = v.exec(h)) !== null; ) {
      let [, _, C, E] = g;
      if (_ = parseInt(_, 10), _ in p) {
        if (_ === 0)
          break;
        continue;
      }
      p[_] = [C, E];
    }
    const b = [];
    for (let _ = 0; _ < p.length && _ in p; ++_) {
      let [C, E] = p[_];
      E = l(E), C && (E = unescape(E), _ === 0 && (E = c(E))), b.push(E);
    }
    return b.join("");
  }
  function l(h) {
    if (h.startsWith('"')) {
      const p = h.slice(1).split('\\"');
      for (let g = 0; g < p.length; ++g) {
        const v = p[g].indexOf('"');
        v !== -1 && (p[g] = p[g].slice(0, v), p.length = g + 1), p[g] = p[g].replaceAll(/\\(.)/g, "$1");
      }
      h = p.join('"');
    }
    return h;
  }
  function c(h) {
    const p = h.indexOf("'");
    if (p === -1)
      return h;
    const g = h.slice(0, p), b = h.slice(p + 1).replace(/^[^']*'/, "");
    return n(g, b);
  }
  function d(h) {
    return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(p, g, v, b) {
      if (v === "q" || v === "Q")
        return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(_, C) {
          return String.fromCharCode(parseInt(C, 16));
        }), n(g, b);
      try {
        b = atob(b);
      } catch {
      }
      return n(g, b);
    });
  }
  return "";
}
function rm({
  getResponseHeader: r,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i
}) {
  const n = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, s = parseInt(r("Content-Length"), 10);
  return !Number.isInteger(s) || (n.suggestedLength = s, s <= 2 * e) || i || !t || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (n.allowRangeRequests = !0), n;
}
function am(r) {
  const t = r("Content-Disposition");
  if (t) {
    let e = cT(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (im(e))
      return e;
  }
  return null;
}
function xf(r, t) {
  return r === 404 || r === 0 && t.startsWith("file:") ? new Hr('Missing PDF "' + t + '".') : new vf(`Unexpected server response (${r}) while retrieving PDF "${t}".`, r);
}
function sb(r) {
  return r === 200 || r === 206;
}
function rb(r, t, e) {
  return {
    method: "GET",
    headers: r,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function ab(r) {
  const t = new Headers();
  for (const e in r) {
    const i = r[e];
    i !== void 0 && t.append(e, i);
  }
  return t;
}
function ob(r) {
  return r instanceof Uint8Array ? r.buffer : r instanceof ArrayBuffer ? r : (ut(`getArrayBuffer - unexpected data format: ${r}`), new Uint8Array(r).buffer);
}
class n0 {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ie(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new hT(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new dT(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class hT {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = ab(this._stream.httpHeaders);
    const i = e.url;
    fetch(i, rb(this._headers, this._withCredentials, this._abortController)).then((n) => {
      if (!sb(n.status))
        throw xf(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const s = (c) => n.headers.get(c), {
        allowRangeRequests: a,
        suggestedLength: l
      } = rm({
        getResponseHeader: s,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = a, this._contentLength = l || this._contentLength, this._filename = am(s), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new jr("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: ob(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class dT {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const n = t.source;
    this._withCredentials = n.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !n.disableStream, this._abortController = new AbortController(), this._headers = ab(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${i - 1}`);
    const s = n.url;
    fetch(s, rb(this._headers, this._withCredentials, this._abortController)).then((a) => {
      if (!sb(a.status))
        throw xf(a.status, s);
      this._readCapability.resolve(), this._reader = a.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: ob(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const ep = 200, ip = 206;
function uT(r) {
  const t = r.response;
  return typeof t != "string" ? t : bf(t).buffer;
}
class fT {
  constructor(t, e = {}) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, i) {
    const n = {
      begin: t,
      end: e
    };
    for (const s in i)
      n[s] = i[s];
    return this.request(n);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), i = this.currXhrId++, n = this.pendingRequests[i] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const s in this.httpHeaders) {
      const a = this.httpHeaders[s];
      a !== void 0 && e.setRequestHeader(s, a);
    }
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), n.expectedStatus = ip) : n.expectedStatus = ep, e.responseType = "arraybuffer", t.onError && (e.onerror = function(s) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), n.onHeadersReceived = t.onHeadersReceived, n.onDone = t.onDone, n.onError = t.onError, n.onProgress = t.onProgress, e.send(null), i;
  }
  onProgress(t, e) {
    var n;
    const i = this.pendingRequests[t];
    i && ((n = i.onProgress) == null || n.call(i, e));
  }
  onStateChange(t, e) {
    var c, d, h;
    const i = this.pendingRequests[t];
    if (!i)
      return;
    const n = i.xhr;
    if (n.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), n.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], n.status === 0 && this.isHttp) {
      (c = i.onError) == null || c.call(i, n.status);
      return;
    }
    const s = n.status || ep;
    if (!(s === ep && i.expectedStatus === ip) && s !== i.expectedStatus) {
      (d = i.onError) == null || d.call(i, n.status);
      return;
    }
    const l = uT(n);
    if (s === ip) {
      const p = n.getResponseHeader("Content-Range"), g = /bytes (\d+)-(\d+)\/(\d+)/.exec(p);
      i.onDone({
        begin: parseInt(g[1], 10),
        chunk: l
      });
    } else
      l ? i.onDone({
        begin: 0,
        chunk: l
      }) : (h = i.onError) == null || h.call(i, n.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class pT {
  constructor(t) {
    this._source = t, this._manager = new fT(t.url, {
      httpHeaders: t.httpHeaders,
      withCredentials: t.withCredentials
    }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return ie(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new gT(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const i = new mT(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class gT {
  constructor(t, e) {
    this._manager = t;
    const i = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(i), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), i = (a) => e.getResponseHeader(a), {
      allowRangeRequests: n,
      suggestedLength: s
    } = rm({
      getResponseHeader: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = s || this._contentLength, this._filename = am(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = xf(t, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersReceivedCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class mT {
  constructor(t, e, i) {
    this._manager = t;
    const n = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, i, n), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const i of this._requests)
      i.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = xf(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const lb = /^file:\/\/\/[a-zA-Z]:\//;
function vT(r) {
  const t = Vi.get("url"), e = t.parse(r);
  return e.protocol === "file:" || e.host ? e : /^[a-z]:[/\\]/i.test(r) ? t.parse(`file:///${r}`) : (e.host || (e.protocol = "file:"), e);
}
class bT {
  constructor(t) {
    this.source = t, this.url = vT(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ie(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new AT(this) : new yT(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = this.isFsUrl ? new _T(this, t, e) : new wT(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class cb {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new jr("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class hb {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function yd(r, t) {
  return {
    protocol: r.protocol,
    auth: r.auth,
    host: r.hostname,
    port: r.port,
    path: r.path,
    method: "GET",
    headers: t
  };
}
class yT extends cb {
  constructor(t) {
    super(t);
    const e = (i) => {
      if (i.statusCode === 404) {
        const l = new Hr(`Missing PDF "${this._url}".`);
        this._storedError = l, this._headersCapability.reject(l);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(i);
      const n = (l) => this._readableStream.headers[l.toLowerCase()], {
        allowRangeRequests: s,
        suggestedLength: a
      } = rm({
        getResponseHeader: n,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = s, this._contentLength = a || this._contentLength, this._filename = am(n);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const i = Vi.get("http");
      this._request = i.request(yd(this._url, t.httpHeaders), e);
    } else {
      const i = Vi.get("https");
      this._request = i.request(yd(this._url, t.httpHeaders), e);
    }
    this._request.on("error", (i) => {
      this._storedError = i, this._headersCapability.reject(i);
    }), this._request.end();
  }
}
class wT extends hb {
  constructor(t, e, i) {
    super(t), this._httpHeaders = {};
    for (const s in t.httpHeaders) {
      const a = t.httpHeaders[s];
      a !== void 0 && (this._httpHeaders[s] = a);
    }
    this._httpHeaders.Range = `bytes=${e}-${i - 1}`;
    const n = (s) => {
      if (s.statusCode === 404) {
        const a = new Hr(`Missing PDF "${this._url}".`);
        this._storedError = a;
        return;
      }
      this._setReadableStream(s);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const s = Vi.get("http");
      this._request = s.request(yd(this._url, this._httpHeaders), n);
    } else {
      const s = Vi.get("https");
      this._request = s.request(yd(this._url, this._httpHeaders), n);
    }
    this._request.on("error", (s) => {
      this._storedError = s;
    }), this._request.end();
  }
}
class AT extends cb {
  constructor(t) {
    super(t);
    let e = decodeURIComponent(this._url.path);
    lb.test(this._url.href) && (e = e.replace(/^\//, ""));
    const i = Vi.get("fs");
    i.promises.lstat(e).then((n) => {
      this._contentLength = n.size, this._setReadableStream(i.createReadStream(e)), this._headersCapability.resolve();
    }, (n) => {
      n.code === "ENOENT" && (n = new Hr(`Missing PDF "${e}".`)), this._storedError = n, this._headersCapability.reject(n);
    });
  }
}
class _T extends hb {
  constructor(t, e, i) {
    super(t);
    let n = decodeURIComponent(this._url.path);
    lb.test(this._url.href) && (n = n.replace(/^\//, ""));
    const s = Vi.get("fs");
    this._setReadableStream(s.createReadStream(n, {
      start: e,
      end: i - 1
    }));
  }
}
const ET = 1e5, Le = 30, xT = 0.8;
var y0, Zn, Ie, ic, nc, Xs, un, sc, rc, Ys, Ca, Ta, Jn, Pa, ac, Ra, Ks, oc, lc, Me, Zs, Js, La, ru, db, au, ub, cc, Yp, ka, Xh, ou, fb;
let wd = (Me = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i
  }) {
    m(this, ru);
    m(this, au);
    m(this, cc);
    m(this, Zn, Promise.withResolvers());
    m(this, Ie, null);
    m(this, ic, !1);
    m(this, nc, !!((y0 = globalThis.FontInspector) != null && y0.enabled));
    m(this, Xs, null);
    m(this, un, null);
    m(this, sc, 0);
    m(this, rc, 0);
    m(this, Ys, null);
    m(this, Ca, null);
    m(this, Ta, 0);
    m(this, Jn, 0);
    m(this, Pa, /* @__PURE__ */ Object.create(null));
    m(this, ac, []);
    m(this, Ra, null);
    m(this, Ks, []);
    m(this, oc, /* @__PURE__ */ new WeakMap());
    m(this, lc, null);
    if (t instanceof ReadableStream)
      w(this, Ra, t);
    else if (typeof t == "object")
      w(this, Ra, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    w(this, Ie, w(this, Ca, e)), w(this, Jn, i.scale * (globalThis.devicePixelRatio || 1)), w(this, Ta, i.rotation), w(this, un, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: n,
      pageHeight: s,
      pageX: a,
      pageY: l
    } = i.rawDims;
    w(this, lc, [1, 0, 0, -1, -a, l + s]), w(this, rc, n), w(this, sc, s), Mr(e, i), o(this, Zn).promise.catch(() => {
    }).then(() => {
      o(Me, La).delete(this), w(this, un, null), w(this, Pa, null);
    });
  }
  render() {
    const t = () => {
      o(this, Ys).read().then(({
        value: e,
        done: i
      }) => {
        if (i) {
          o(this, Zn).resolve();
          return;
        }
        o(this, Xs) ?? w(this, Xs, e.lang), Object.assign(o(this, Pa), e.styles), A(this, ru, db).call(this, e.items), t();
      }, o(this, Zn).reject);
    };
    return w(this, Ys, o(this, Ra).getReader()), o(Me, La).add(this), t(), o(this, Zn).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var s;
    const i = t.scale * (globalThis.devicePixelRatio || 1), n = t.rotation;
    if (n !== o(this, Ta) && (e == null || e(), w(this, Ta, n), Mr(o(this, Ca), {
      rotation: n
    })), i !== o(this, Jn)) {
      e == null || e(), w(this, Jn, i);
      const a = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: A(s = Me, ka, Xh).call(s, o(this, Xs))
      };
      for (const l of o(this, Ks))
        a.properties = o(this, oc).get(l), a.div = l, A(this, cc, Yp).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new jr("TextLayer task cancelled.");
    (e = o(this, Ys)) == null || e.cancel(t).catch(() => {
    }), w(this, Ys, null), o(this, Zn).reject(t);
  }
  get textDivs() {
    return o(this, Ks);
  }
  get textContentItemsStr() {
    return o(this, ac);
  }
  static cleanup() {
    if (!(o(this, La).size > 0)) {
      o(this, Zs).clear();
      for (const {
        canvas: t
      } of o(this, Js).values())
        t.remove();
      o(this, Js).clear();
    }
  }
}, Zn = new WeakMap(), Ie = new WeakMap(), ic = new WeakMap(), nc = new WeakMap(), Xs = new WeakMap(), un = new WeakMap(), sc = new WeakMap(), rc = new WeakMap(), Ys = new WeakMap(), Ca = new WeakMap(), Ta = new WeakMap(), Jn = new WeakMap(), Pa = new WeakMap(), ac = new WeakMap(), Ra = new WeakMap(), Ks = new WeakMap(), oc = new WeakMap(), lc = new WeakMap(), Zs = new WeakMap(), Js = new WeakMap(), La = new WeakMap(), ru = new WeakSet(), db = function(t) {
  var n, s;
  if (o(this, ic))
    return;
  (s = o(this, un)).ctx || (s.ctx = A(n = Me, ka, Xh).call(n, o(this, Xs)));
  const e = o(this, Ks), i = o(this, ac);
  for (const a of t) {
    if (e.length > ET) {
      ut("Ignoring additional textDivs for performance reasons."), w(this, ic, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const l = o(this, Ie);
        w(this, Ie, document.createElement("span")), o(this, Ie).classList.add("markedContent"), a.id !== null && o(this, Ie).setAttribute("id", `${a.id}`), l.append(o(this, Ie));
      } else
        a.type === "endMarkedContent" && w(this, Ie, o(this, Ie).parentNode);
      continue;
    }
    i.push(a.str), A(this, au, ub).call(this, a);
  }
}, au = new WeakSet(), ub = function(t) {
  var _;
  const e = document.createElement("span"), i = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  o(this, Ks).push(e);
  const n = Z.transform(o(this, lc), t.transform);
  let s = Math.atan2(n[1], n[0]);
  const a = o(this, Pa)[t.fontName];
  a.vertical && (s += Math.PI / 2);
  const l = o(this, nc) && a.fontSubstitution || a.fontFamily, c = Math.hypot(n[2], n[3]), d = c * A(_ = Me, ou, fb).call(_, l, o(this, Xs));
  let h, p;
  s === 0 ? (h = n[4], p = n[5] - d) : (h = n[4] + d * Math.sin(s), p = n[5] - d * Math.cos(s));
  const g = "calc(var(--scale-factor)*", v = e.style;
  o(this, Ie) === o(this, Ca) ? (v.left = `${(100 * h / o(this, rc)).toFixed(2)}%`, v.top = `${(100 * p / o(this, sc)).toFixed(2)}%`) : (v.left = `${g}${h.toFixed(2)}px)`, v.top = `${g}${p.toFixed(2)}px)`), v.fontSize = `${g}${c.toFixed(2)}px)`, v.fontFamily = l, i.fontSize = c, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, o(this, nc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), s !== 0 && (i.angle = s * (180 / Math.PI));
  let b = !1;
  if (t.str.length > 1)
    b = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const C = Math.abs(t.transform[0]), E = Math.abs(t.transform[3]);
    C !== E && Math.max(C, E) / Math.min(C, E) > 1.5 && (b = !0);
  }
  if (b && (i.canvasWidth = a.vertical ? t.height : t.width), o(this, oc).set(e, i), o(this, un).div = e, o(this, un).properties = i, A(this, cc, Yp).call(this, o(this, un)), i.hasText && o(this, Ie).append(e), i.hasEOL) {
    const C = document.createElement("br");
    C.setAttribute("role", "presentation"), o(this, Ie).append(C);
  }
}, cc = new WeakSet(), Yp = function(t) {
  const {
    div: e,
    properties: i,
    ctx: n,
    prevFontSize: s,
    prevFontFamily: a
  } = t, {
    style: l
  } = e;
  let c = "";
  if (i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: d
    } = l, {
      canvasWidth: h,
      fontSize: p
    } = i;
    (s !== p || a !== d) && (n.font = `${p * o(this, Jn)}px ${d}`, t.prevFontSize = p, t.prevFontFamily = d);
    const {
      width: g
    } = n.measureText(e.textContent);
    g > 0 && (c = `scaleX(${h * o(this, Jn) / g})`);
  }
  i.angle !== 0 && (c = `rotate(${i.angle}deg) ${c}`), c.length > 0 && (l.transform = c);
}, ka = new WeakSet(), Xh = function(t = null) {
  let e = o(this, Js).get(t || (t = ""));
  if (!e) {
    const i = document.createElement("canvas");
    i.className = "hiddenCanvasElement", i.lang = t, document.body.append(i), e = i.getContext("2d", {
      alpha: !1
    }), o(this, Js).set(t, e);
  }
  return e;
}, ou = new WeakSet(), fb = function(t, e) {
  const i = o(this, Zs).get(t);
  if (i)
    return i;
  const n = A(this, ka, Xh).call(this, e), s = n.font;
  n.canvas.width = n.canvas.height = Le, n.font = `${Le}px ${t}`;
  const a = n.measureText("");
  let l = a.fontBoundingBoxAscent, c = Math.abs(a.fontBoundingBoxDescent);
  if (l) {
    const p = l / (l + c);
    return o(this, Zs).set(t, p), n.canvas.width = n.canvas.height = 0, n.font = s, p;
  }
  n.strokeStyle = "red", n.clearRect(0, 0, Le, Le), n.strokeText("g", 0, 0);
  let d = n.getImageData(0, 0, Le, Le).data;
  c = 0;
  for (let p = d.length - 1 - 3; p >= 0; p -= 4)
    if (d[p] > 0) {
      c = Math.ceil(p / 4 / Le);
      break;
    }
  n.clearRect(0, 0, Le, Le), n.strokeText("A", 0, Le), d = n.getImageData(0, 0, Le, Le).data, l = 0;
  for (let p = 0, g = d.length; p < g; p += 4)
    if (d[p] > 0) {
      l = Le - Math.floor(p / 4 / Le);
      break;
    }
  n.canvas.width = n.canvas.height = 0, n.font = s;
  const h = l ? l / (l + c) : xT;
  return o(this, Zs).set(t, h), h;
}, m(Me, ka), m(Me, ou), m(Me, Zs, /* @__PURE__ */ new Map()), m(Me, Js, /* @__PURE__ */ new Map()), m(Me, La, /* @__PURE__ */ new Set()), Me);
function ST() {
  Pv("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: r,
    container: t,
    viewport: e,
    ...i
  } = arguments[0], n = Object.keys(i);
  n.length > 0 && ut("Ignoring `renderTextLayer` parameters: " + n.join(", "));
  const s = new wd({
    textContentSource: r,
    container: t,
    viewport: e
  }), {
    textDivs: a,
    textContentItemsStr: l
  } = s;
  return {
    promise: s.render(),
    textDivs: a,
    textContentItemsStr: l
  };
}
function CT() {
  Pv("`updateTextLayer`, please use `TextLayer` instead.");
}
class Qo {
  static textContent(t) {
    const e = [], i = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function n(s) {
      var c;
      if (!s)
        return;
      let a = null;
      const l = s.name;
      if (l === "#text")
        a = s.value;
      else if (Qo.shouldBuildText(l))
        (c = s == null ? void 0 : s.attributes) != null && c.textContent ? a = s.attributes.textContent : s.value && (a = s.value);
      else
        return;
      if (a !== null && e.push({
        str: a
      }), !!s.children)
        for (const d of s.children)
          n(d);
    }
    return n(t), i;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const TT = 65536, PT = 100, RT = 5e3, LT = Ae ? HC : PC, kT = Ae ? jC : Cv, IT = Ae ? UC : TC, FT = Ae ? zC : Tv;
function MT(r) {
  if (typeof r == "string" || r instanceof URL ? r = {
    url: r
  } : (r instanceof ArrayBuffer || ArrayBuffer.isView(r)) && (r = {
    data: r
  }), typeof r != "object")
    throw new Error("Invalid parameter in getDocument, need parameter object.");
  if (!r.url && !r.data && !r.range)
    throw new Error("Invalid parameter object: need either .data, .range or .url");
  const t = new Kp(), {
    docId: e
  } = t, i = r.url ? DT(r.url) : null, n = r.data ? OT(r.data) : null, s = r.httpHeaders || null, a = r.withCredentials === !0, l = r.password ?? null, c = r.range instanceof pb ? r.range : null, d = Number.isInteger(r.rangeChunkSize) && r.rangeChunkSize > 0 ? r.rangeChunkSize : TT;
  let h = r.worker instanceof ia ? r.worker : null;
  const p = r.verbosity, g = typeof r.docBaseUrl == "string" && !em(r.docBaseUrl) ? r.docBaseUrl : null, v = typeof r.cMapUrl == "string" ? r.cMapUrl : null, b = r.cMapPacked !== !1, _ = r.CMapReaderFactory || kT, C = typeof r.standardFontDataUrl == "string" ? r.standardFontDataUrl : null, E = r.StandardFontDataFactory || FT, R = r.stopAtErrors !== !0, L = Number.isInteger(r.maxImageSize) && r.maxImageSize > -1 ? r.maxImageSize : -1, M = r.isEvalSupported !== !1, D = typeof r.isOffscreenCanvasSupported == "boolean" ? r.isOffscreenCanvasSupported : !Ae, N = Number.isInteger(r.canvasMaxAreaInBytes) ? r.canvasMaxAreaInBytes : -1, U = typeof r.disableFontFace == "boolean" ? r.disableFontFace : Ae, S = r.fontExtraProperties === !0, T = r.enableXfa === !0, I = r.ownerDocument || globalThis.document, k = r.disableRange === !0, H = r.disableStream === !0, j = r.disableAutoFetch === !0, z = r.pdfBug === !0, Y = c ? c.length : r.length ?? NaN, K = typeof r.useSystemFonts == "boolean" ? r.useSystemFonts : !Ae && !U, B = typeof r.useWorkerFetch == "boolean" ? r.useWorkerFetch : _ === Cv && E === Tv && v && C && Oo(v, document.baseURI) && Oo(C, document.baseURI), V = r.canvasFactory || new LT({
    ownerDocument: I
  }), W = r.filterFactory || new IT({
    docId: e,
    ownerDocument: I
  }), xt = null;
  mC(p);
  const mt = {
    canvasFactory: V,
    filterFactory: W
  };
  if (B || (mt.cMapReaderFactory = new _({
    baseUrl: v,
    isCompressed: b
  }), mt.standardFontDataFactory = new E({
    baseUrl: C
  })), !h) {
    const tt = {
      verbosity: p,
      port: kn.workerPort
    };
    h = tt.port ? ia.fromPort(tt) : new ia(tt), t._worker = h;
  }
  const G = {
    docId: e,
    apiVersion: "4.3.136",
    data: n,
    password: l,
    disableAutoFetch: j,
    rangeChunkSize: d,
    length: Y,
    docBaseUrl: g,
    enableXfa: T,
    evaluatorOptions: {
      maxImageSize: L,
      disableFontFace: U,
      ignoreErrors: R,
      isEvalSupported: M,
      isOffscreenCanvasSupported: D,
      canvasMaxAreaInBytes: N,
      fontExtraProperties: S,
      useSystemFonts: K,
      cMapUrl: B ? v : null,
      standardFontDataUrl: B ? C : null
    }
  }, et = {
    disableFontFace: U,
    fontExtraProperties: S,
    ownerDocument: I,
    pdfBug: z,
    styleElement: xt,
    loadingParams: {
      disableAutoFetch: j,
      enableXfa: T
    }
  };
  return h.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (h.destroyed)
      throw new Error("Worker was destroyed");
    const tt = h.messageHandler.sendWithPromise("GetDocRequest", G, n ? [n.buffer] : null);
    let it;
    return c ? it = new aT(c, {
      disableRange: k,
      disableStream: H
    }) : n || (it = ((J) => Ae ? function() {
      return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
    }() && Oo(J.url) ? new n0(J) : new bT(J) : Oo(J.url) ? new n0(J) : new pT(J))({
      url: i,
      length: Y,
      httpHeaders: s,
      withCredentials: a,
      rangeChunkSize: d,
      disableRange: k,
      disableStream: H
    })), tt.then((ct) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (h.destroyed)
        throw new Error("Worker was destroyed");
      const J = new $o(e, ct, h.port), Et = new UT(J, t, it, et, mt);
      t._transport = Et, J.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function DT(r) {
  if (r instanceof URL)
    return r.href;
  try {
    return new URL(r, window.location).href;
  } catch {
    if (Ae && typeof r == "string")
      return r;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function OT(r) {
  if (Ae && typeof pp < "u" && r instanceof pp)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (r instanceof Uint8Array && r.byteLength === r.buffer.byteLength)
    return r;
  if (typeof r == "string")
    return bf(r);
  if (r instanceof ArrayBuffer || ArrayBuffer.isView(r) || typeof r == "object" && !isNaN(r == null ? void 0 : r.length))
    return new Uint8Array(r);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function s0(r) {
  return typeof r == "object" && Number.isInteger(r == null ? void 0 : r.num) && r.num >= 0 && Number.isInteger(r == null ? void 0 : r.gen) && r.gen >= 0;
}
var lu;
const cu = class cu {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${$e(cu, lu)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (n) {
      throw (i = this._worker) != null && i.port && delete this._worker._pendingDestroy, n;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
lu = new WeakMap(), m(cu, lu, 0);
let Kp = cu, pb = class {
  constructor(t, e, i = !1, n = null) {
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = n, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const i of this._rangeListeners)
      i(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const i of this._progressListeners)
        i(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    It("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
class NT {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return _t(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var Qn, fn, ts, Yr, Ia, Yh;
class BT {
  constructor(t, e, i, n = !1) {
    m(this, ts);
    m(this, Ia);
    m(this, Qn, null);
    m(this, fn, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = n ? new Gm() : null, this._pdfBug = n, this.commonObjs = i.commonObjs, this.objs = new gb(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: i = 0,
    offsetY: n = 0,
    dontFlip: s = !1
  } = {}) {
    return new xh({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: n,
      dontFlip: s
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return _t(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: i = "display",
    annotationMode: n = Un.ENABLE,
    transform: s = null,
    background: a = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: h = null
  }) {
    var L, M;
    (L = this._stats) == null || L.time("Overall");
    const p = this._transport.getRenderingIntent(i, n, h), {
      renderingIntent: g,
      cacheKey: v
    } = p;
    w(this, fn, !1), A(this, Ia, Yh).call(this), l || (l = this._transport.getOptionalContentConfig(g));
    let b = this._intentStates.get(v);
    b || (b = /* @__PURE__ */ Object.create(null), this._intentStates.set(v, b)), b.streamReaderCancelTimeout && (clearTimeout(b.streamReaderCancelTimeout), b.streamReaderCancelTimeout = null);
    const _ = !!(g & si.PRINT);
    b.displayReadyCapability || (b.displayReadyCapability = Promise.withResolvers(), b.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (M = this._stats) == null || M.time("Page Request"), this._pumpOperatorList(p));
    const C = (D) => {
      var N;
      b.renderTasks.delete(E), (this._maybeCleanupAfterRender || _) && w(this, fn, !0), A(this, ts, Yr).call(this, !_), D ? (E.capability.reject(D), this._abortOperatorList({
        intentState: b,
        reason: D instanceof Error ? D : new Error(D)
      })) : E.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (N = globalThis.Stats) != null && N.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, E = new Jp({
      callback: C,
      params: {
        canvasContext: t,
        viewport: e,
        transform: s,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: b.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: d
    });
    (b.renderTasks || (b.renderTasks = /* @__PURE__ */ new Set())).add(E);
    const R = E.task;
    return Promise.all([b.displayReadyCapability.promise, l]).then(([D, N]) => {
      var U;
      if (this.destroyed) {
        C();
        return;
      }
      if ((U = this._stats) == null || U.time("Rendering"), !(N.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      E.initializeGraphics({
        transparency: D,
        optionalContentConfig: N
      }), E.operatorListChanged();
    }).catch(C), R;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Un.ENABLE,
    printAnnotationStorage: i = null
  } = {}) {
    var c;
    function n() {
      a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(l));
    }
    const s = this._transport.getRenderingIntent(t, e, i, !0);
    let a = this._intentStates.get(s.cacheKey);
    a || (a = /* @__PURE__ */ Object.create(null), this._intentStates.set(s.cacheKey, a));
    let l;
    return a.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = n, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(l), a.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(s)), a.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(n) {
        return n.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((i) => Qo.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise(function(i, n) {
      function s() {
        a.read().then(function({
          value: c,
          done: d
        }) {
          if (d) {
            i(l);
            return;
          }
          l.lang ?? (l.lang = c.lang), Object.assign(l.styles, c.styles), l.items.push(...c.items), s();
        }, n);
      }
      const a = e.getReader(), l = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      s();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const i of e.renderTasks)
          t.push(i.completed), i.cancel();
    return this.objs.clear(), w(this, fn, !1), A(this, Ia, Yh).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    w(this, fn, !0);
    const e = A(this, ts, Yr).call(this, !1);
    return t && e && this._stats && (this._stats = new Gm()), e;
  }
  _startRenderPage(t, e) {
    var n, s;
    const i = this._intentStates.get(e);
    i && ((n = this._stats) == null || n.timeEnd("Page Request"), (s = i.displayReadyCapability) == null || s.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let i = 0, n = t.length; i < n; i++)
      e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks)
      i.operatorListChanged();
    t.lastChunk && A(this, ts, Yr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i
  }) {
    const {
      map: n,
      transfer: s
    } = i, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: n
    }, s).getReader(), c = this._intentStates.get(e);
    c.streamReader = l;
    const d = () => {
      l.read().then(({
        value: h,
        done: p
      }) => {
        if (p) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(h, c), d());
      }, (h) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const p of c.renderTasks)
              p.operatorListChanged();
            A(this, ts, Yr).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(h);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(h);
          else
            throw h;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: i = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof tm) {
          let n = PT;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (n += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, n);
          return;
        }
      }
      if (t.streamReader.cancel(new jr(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [n, s] of this._intentStates)
          if (s === t) {
            this._intentStates.delete(n);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
Qn = new WeakMap(), fn = new WeakMap(), ts = new WeakSet(), Yr = function(t = !1) {
  if (A(this, Ia, Yh).call(this), !o(this, fn) || this.destroyed)
    return !1;
  if (t)
    return w(this, Qn, setTimeout(() => {
      w(this, Qn, null), A(this, ts, Yr).call(this, !1);
    }, RT)), !1;
  for (const {
    renderTasks: e,
    operatorList: i
  } of this._intentStates.values())
    if (e.size > 0 || !i.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), w(this, fn, !1), !0;
}, Ia = new WeakSet(), Yh = function() {
  o(this, Qn) && (clearTimeout(o(this, Qn)), w(this, Qn, null));
};
var Qs, hu;
class $T {
  constructor() {
    m(this, Qs, /* @__PURE__ */ new Set());
    m(this, hu, Promise.resolve());
  }
  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    o(this, hu).then(() => {
      for (const n of o(this, Qs))
        n.call(this, i);
    });
  }
  addEventListener(t, e) {
    o(this, Qs).add(e);
  }
  removeEventListener(t, e) {
    o(this, Qs).delete(e);
  }
  terminate() {
    o(this, Qs).clear();
  }
}
Qs = new WeakMap(), hu = new WeakMap();
const tn = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
Ae && (tn.isWorkerDisabled = !0, kn.workerSrc || (kn.workerSrc = "./pdf.worker.mjs")), tn.isSameOrigin = function(r, t) {
  let e;
  try {
    if (e = new URL(r), !e.origin || e.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(t, e);
  return e.origin === i.origin;
}, tn.createCDNWrapper = function(r) {
  const t = `await import("${r}");`;
  return URL.createObjectURL(new Blob([t], {
    type: "text/javascript"
  }));
};
var tr, Fa, Kh;
const He = class He {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = vC()
  } = {}) {
    var n;
    if (this.name = t, this.destroyed = !1, this.verbosity = i, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((n = o(He, tr)) != null && n.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (o(He, tr) || w(He, tr, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return Ae ? Promise.all([Vi.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new $o("main", "worker", t), this._messageHandler.on("ready", function() {
    }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  _initialize() {
    if (!tn.isWorkerDisabled && !o(He, Fa, Kh)) {
      let {
        workerSrc: t
      } = He;
      try {
        tn.isSameOrigin(window.location.href, t) || (t = tn.createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), i = new $o("main", "worker", e), n = () => {
          e.removeEventListener("error", s), i.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, s = () => {
          this._webWorker || n();
        };
        e.addEventListener("error", s), i.on("test", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            n();
            return;
          }
          l ? (this._messageHandler = i, this._port = e, this._webWorker = e, this._readyCapability.resolve(), i.send("configure", {
            verbosity: this.verbosity
          })) : (this._setupFakeWorker(), i.destroy(), e.terminate());
        }), i.on("ready", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            n();
            return;
          }
          try {
            a();
          } catch {
            this._setupFakeWorker();
          }
        });
        const a = () => {
          const l = new Uint8Array();
          i.send("test", l, [l.buffer]);
        };
        a();
        return;
      } catch {
        mf("The worker has been disabled.");
      }
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    tn.isWorkerDisabled || (ut("Setting up fake worker."), tn.isWorkerDisabled = !0), He._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new $T();
      this._port = e;
      const i = `fake${tn.fakeWorkerId++}`, n = new $o(i + "_worker", i, e);
      t.setup(n, e);
      const s = new $o(i, i + "_worker", e);
      this._messageHandler = s, this._readyCapability.resolve(), s.send("configure", {
        verbosity: this.verbosity
      });
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = o(He, tr)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var i;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (i = o(this, tr)) == null ? void 0 : i.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new He(t);
  }
  static get workerSrc() {
    if (kn.workerSrc)
      return kn.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return _t(this, "_setupFakeWorkerGlobal", (async () => o(this, Fa, Kh) ? o(this, Fa, Kh) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
tr = new WeakMap(), Fa = new WeakSet(), Kh = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(He, Fa), m(He, tr, void 0);
let ia = He;
var pn, Ii, Ma, Da, Fi, er, Uo;
class UT {
  constructor(t, e, i, n, s) {
    m(this, er);
    m(this, pn, /* @__PURE__ */ new Map());
    m(this, Ii, /* @__PURE__ */ new Map());
    m(this, Ma, /* @__PURE__ */ new Map());
    m(this, Da, /* @__PURE__ */ new Map());
    m(this, Fi, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new gb(), this.fontLoader = new BC({
      ownerDocument: n.ownerDocument,
      styleElement: n.styleElement
    }), this.loadingParams = n.loadingParams, this._params = n, this.canvasFactory = s.canvasFactory, this.filterFactory = s.filterFactory, this.cMapReaderFactory = s.cMapReaderFactory, this.standardFontDataFactory = s.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return _t(this, "annotationStorage", new sm());
  }
  getRenderingIntent(t, e = Un.ENABLE, i = null, n = !1) {
    let s = si.DISPLAY, a = jp;
    switch (t) {
      case "any":
        s = si.ANY;
        break;
      case "display":
        break;
      case "print":
        s = si.PRINT;
        break;
      default:
        ut(`getRenderingIntent - invalid intent: ${t}`);
    }
    switch (e) {
      case Un.DISABLE:
        s += si.ANNOTATIONS_DISABLE;
        break;
      case Un.ENABLE:
        break;
      case Un.ENABLE_FORMS:
        s += si.ANNOTATIONS_FORMS;
        break;
      case Un.ENABLE_STORAGE:
        s += si.ANNOTATIONS_STORAGE, a = (s & si.PRINT && i instanceof tb ? i : this.annotationStorage).serializable;
        break;
      default:
        ut(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    return n && (s += si.OPLIST), {
      renderingIntent: s,
      cacheKey: `${s}_${a.hash}`,
      annotationStorageSerializable: a
    };
  }
  destroy() {
    var i;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = o(this, Fi)) == null || i.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const n of o(this, Ii).values())
      t.push(n._destroy());
    o(this, Ii).clear(), o(this, Ma).clear(), o(this, Da).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var n;
      this.commonObjs.clear(), this.fontLoader.clear(), o(this, pn).clear(), this.filterFactory.destroy(), wd.cleanup(), (n = this._networkStream) == null || n.cancelAllRequests(new jr("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (i, n) => {
      ie(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (s) => {
        this._lastProgress = {
          loaded: s.loaded,
          total: s.total
        };
      }, n.onPull = () => {
        this._fullReader.read().then(function({
          value: s,
          done: a
        }) {
          if (a) {
            n.close();
            return;
          }
          ie(s instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(s), 1, [s]);
        }).catch((s) => {
          n.error(s);
        });
      }, n.onCancel = (s) => {
        this._fullReader.cancel(s), n.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", (i) => {
      const n = Promise.withResolvers(), s = this._fullReader;
      return s.headersReady.then(() => {
        var a;
        (!s.isStreamingSupported || !s.isRangeSupported) && (this._lastProgress && ((a = e.onProgress) == null || a.call(e, this._lastProgress)), s.onProgress = (l) => {
          var c;
          (c = e.onProgress) == null || c.call(e, {
            loaded: l.loaded,
            total: l.total
          });
        }), n.resolve({
          isStreamingSupported: s.isStreamingSupported,
          isRangeSupported: s.isRangeSupported,
          contentLength: s.contentLength
        });
      }, n.reject), n.promise;
    }), t.on("GetRangeReader", (i, n) => {
      ie(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const s = this._networkStream.getRangeReader(i.begin, i.end);
      if (!s) {
        n.close();
        return;
      }
      n.onPull = () => {
        s.read().then(function({
          value: a,
          done: l
        }) {
          if (l) {
            n.close();
            return;
          }
          ie(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          n.error(a);
        });
      }, n.onCancel = (a) => {
        s.cancel(a), n.ready.catch((l) => {
          if (!this.destroyed)
            throw l;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: i
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new NT(i, this));
    }), t.on("DocException", function(i) {
      let n;
      switch (i.name) {
        case "PasswordException":
          n = new vp(i.message, i.code);
          break;
        case "InvalidPDFException":
          n = new _v(i.message);
          break;
        case "MissingPDFException":
          n = new Hr(i.message);
          break;
        case "UnexpectedResponseException":
          n = new vf(i.message, i.status);
          break;
        case "UnknownErrorException":
          n = new bp(i.message, i.details);
          break;
        default:
          It("DocException - expected a valid Error.");
      }
      e._capability.reject(n);
    }), t.on("PasswordRequest", (i) => {
      if (w(this, Fi, Promise.withResolvers()), e.onPassword) {
        const n = (s) => {
          s instanceof Error ? o(this, Fi).reject(s) : o(this, Fi).resolve({
            password: s
          });
        };
        try {
          e.onPassword(n, i.code);
        } catch (s) {
          o(this, Fi).reject(s);
        }
      } else
        o(this, Fi).reject(new vp(i.message, i.code));
      return o(this, Fi).promise;
    }), t.on("DataLoaded", (i) => {
      var n;
      (n = e.onProgress) == null || n.call(e, {
        loaded: i.length,
        total: i.length
      }), this.downloadInfoCapability.resolve(i);
    }), t.on("StartRenderPage", (i) => {
      if (this.destroyed)
        return;
      o(this, Ii).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on("commonobj", ([i, n, s]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(i))
        return null;
      switch (n) {
        case "Font":
          const {
            disableFontFace: l,
            fontExtraProperties: c,
            pdfBug: d
          } = this._params;
          if ("error" in s) {
            const v = s.error;
            ut(`Error during font loading: ${v}`), this.commonObjs.resolve(i, v);
            break;
          }
          const h = d && ((a = globalThis.FontInspector) != null && a.enabled) ? (v, b) => globalThis.FontInspector.fontAdded(v, b) : null, p = new $C(s, {
            disableFontFace: l,
            inspectFont: h
          });
          this.fontLoader.bind(p).catch(() => t.sendWithPromise("FontFallback", {
            id: i
          })).finally(() => {
            !c && p.data && (p.data = null), this.commonObjs.resolve(i, p);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: g
          } = s;
          ie(g, "The imageRef must be defined.");
          for (const v of o(this, Ii).values())
            for (const [, b] of v.objs)
              if ((b == null ? void 0 : b.ref) === g)
                return b.dataLen ? (this.commonObjs.resolve(i, structuredClone(b)), b.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(i, s);
          break;
        default:
          throw new Error(`Got unknown common object type ${n}`);
      }
      return null;
    }), t.on("obj", ([i, n, s, a]) => {
      var c;
      if (this.destroyed)
        return;
      const l = o(this, Ii).get(n);
      if (!l.objs.has(i)) {
        if (l._intentStates.size === 0) {
          (c = a == null ? void 0 : a.bitmap) == null || c.close();
          return;
        }
        switch (s) {
          case "Image":
            l.objs.resolve(i, a), (a == null ? void 0 : a.dataLen) > uC && (l._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            l.objs.resolve(i, a);
            break;
          default:
            throw new Error(`Got unknown object type ${s}`);
        }
      }
    }), t.on("DocProgress", (i) => {
      var n;
      this.destroyed || (n = e.onProgress) == null || n.call(e, {
        loaded: i.loaded,
        total: i.total
      });
    }), t.on("FetchBuiltInCMap", (i) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(i) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", (i) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(i) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var i;
    this.annotationStorage.size <= 0 && ut("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, i = o(this, Ma).get(e);
    if (i)
      return i;
    const n = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((s) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      s.refStr && o(this, Da).set(s.refStr, t);
      const a = new BT(e, s, this, this._params.pdfBug);
      return o(this, Ii).set(e, a), a;
    });
    return o(this, Ma).set(e, n), n;
  }
  getPageIndex(t) {
    return s0(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return A(this, er, Uo).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return A(this, er, Uo).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return A(this, er, Uo).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return A(this, er, Uo).call(this, "GetOptionalContentConfig").then((e) => new rT(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = o(this, pn).get(t);
    if (e)
      return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((n) => {
      var s, a;
      return {
        info: n[0],
        metadata: n[1] ? new nT(n[1]) : null,
        contentDispositionFilename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return o(this, pn).set(t, i), i;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of o(this, Ii).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), o(this, pn).clear(), this.filterFactory.destroy(!0), wd.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!s0(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return o(this, Da).get(e) ?? null;
  }
}
pn = new WeakMap(), Ii = new WeakMap(), Ma = new WeakMap(), Da = new WeakMap(), Fi = new WeakMap(), er = new WeakSet(), Uo = function(t, e = null) {
  const i = o(this, pn).get(t);
  if (i)
    return i;
  const n = this.messageHandler.sendWithPromise(t, e);
  return o(this, pn).set(t, n), n;
};
const Oh = Symbol("INITIAL_DATA");
var di, hc, Zp;
class gb {
  constructor() {
    m(this, hc);
    m(this, di, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const n = A(this, hc, Zp).call(this, t);
      return n.promise.then(() => e(n.data)), null;
    }
    const i = o(this, di)[t];
    if (!i || i.data === Oh)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }
  has(t) {
    const e = o(this, di)[t];
    return !!e && e.data !== Oh;
  }
  resolve(t, e = null) {
    const i = A(this, hc, Zp).call(this, t);
    i.data = e, i.resolve();
  }
  clear() {
    var t;
    for (const e in o(this, di)) {
      const {
        data: i
      } = o(this, di)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    w(this, di, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in o(this, di)) {
      const {
        data: e
      } = o(this, di)[t];
      e !== Oh && (yield [t, e]);
    }
  }
}
di = new WeakMap(), hc = new WeakSet(), Zp = function(t) {
  var e;
  return (e = o(this, di))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Oh
  });
};
var es;
class HT {
  constructor(t) {
    m(this, es, null);
    w(this, es, t), this.onContinue = null;
  }
  get promise() {
    return o(this, es).capability.promise;
  }
  cancel(t = 0) {
    o(this, es).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = o(this, es).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = o(this, es);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
es = new WeakMap();
var ir;
const Ss = class Ss {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: n,
    annotationCanvasMap: s,
    operatorList: a,
    pageIndex: l,
    canvasFactory: c,
    filterFactory: d,
    useRequestAnimationFrame: h = !1,
    pdfBug: p = !1,
    pageColors: g = null
  }) {
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = n, this.annotationCanvasMap = s, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = l, this.canvasFactory = c, this.filterFactory = d, this._pdfBug = p, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = h === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new HT(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (o(Ss, ir).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      o(Ss, ir).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: i,
      viewport: n,
      transform: s,
      background: a
    } = this.params;
    this.gfx = new ea(i, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: s,
      viewport: n,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var i;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), o(Ss, ir).delete(this._canvas), this.callback(t || new tm(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
      this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), o(Ss, ir).delete(this._canvas), this.callback())));
  }
};
ir = new WeakMap(), m(Ss, ir, /* @__PURE__ */ new WeakSet());
let Jp = Ss;
const jT = "4.3.136", zT = "0cec64437";
function r0(r) {
  return Math.floor(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
}
function ko(r) {
  return Math.max(0, Math.min(255, 255 * r));
}
class a0 {
  static CMYK_G([t, e, i, n]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + n)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = ko(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = r0(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, i]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
  }
  static RGB_rgb(t) {
    return t.map(ko);
  }
  static RGB_HTML(t) {
    return `#${t.map(r0).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, i, n]) {
    return ["RGB", 1 - Math.min(1, t + n), 1 - Math.min(1, i + n), 1 - Math.min(1, e + n)];
  }
  static CMYK_rgb([t, e, i, n]) {
    return [ko(1 - Math.min(1, t + n)), ko(1 - Math.min(1, i + n)), ko(1 - Math.min(1, e + n))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, i]) {
    const n = 1 - t, s = 1 - e, a = 1 - i, l = Math.min(n, s, a);
    return ["CMYK", n, s, a, l];
  }
}
class mb {
  static setupStorage(t, e, i, n, s) {
    const a = n.getValue(e, {
      value: null
    });
    switch (i.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), s === "print")
          break;
        t.addEventListener("input", (l) => {
          n.setValue(e, {
            value: l.target.value
          });
        });
        break;
      case "input":
        if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
          if (a.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === i.attributes.xfaOff && t.removeAttribute("checked"), s === "print")
            break;
          t.addEventListener("change", (l) => {
            n.setValue(e, {
              value: l.target.checked ? l.target.getAttribute("xfaOn") : l.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), s === "print")
            break;
          t.addEventListener("input", (l) => {
            n.setValue(e, {
              value: l.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const l of i.children)
            l.attributes.value === a.value ? l.attributes.selected = !0 : l.attributes.hasOwnProperty("selected") && delete l.attributes.selected;
        }
        t.addEventListener("input", (l) => {
          const c = l.target.options, d = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          n.setValue(e, {
            value: d
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: i = null,
    intent: n,
    linkService: s
  }) {
    const {
      attributes: a
    } = e, l = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${n}`);
    for (const [c, d] of Object.entries(a))
      if (d != null)
        switch (c) {
          case "class":
            d.length && t.setAttribute(c, d.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", d);
            break;
          case "style":
            Object.assign(t.style, d);
            break;
          case "textContent":
            t.textContent = d;
            break;
          default:
            (!l || c !== "href" && c !== "newWindow") && t.setAttribute(c, d);
        }
    l && s.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
  }
  static render(t) {
    var p, g;
    const e = t.annotationStorage, i = t.linkService, n = t.xfaHtml, s = t.intent || "display", a = document.createElement(n.name);
    n.attributes && this.setAttributes({
      html: a,
      element: n,
      intent: s,
      linkService: i
    });
    const l = s !== "richText", c = t.div;
    if (c.append(a), t.viewport) {
      const v = `matrix(${t.viewport.transform.join(",")})`;
      c.style.transform = v;
    }
    l && c.setAttribute("class", "xfaLayer xfaFont");
    const d = [];
    if (n.children.length === 0) {
      if (n.value) {
        const v = document.createTextNode(n.value);
        a.append(v), l && Qo.shouldBuildText(n.name) && d.push(v);
      }
      return {
        textDivs: d
      };
    }
    const h = [[n, -1, a]];
    for (; h.length > 0; ) {
      const [v, b, _] = h.at(-1);
      if (b + 1 === v.children.length) {
        h.pop();
        continue;
      }
      const C = v.children[++h.at(-1)[1]];
      if (C === null)
        continue;
      const {
        name: E
      } = C;
      if (E === "#text") {
        const L = document.createTextNode(C.value);
        d.push(L), _.append(L);
        continue;
      }
      const R = (p = C == null ? void 0 : C.attributes) != null && p.xmlns ? document.createElementNS(C.attributes.xmlns, E) : document.createElement(E);
      if (_.append(R), C.attributes && this.setAttributes({
        html: R,
        element: C,
        storage: e,
        intent: s,
        linkService: i
      }), ((g = C.children) == null ? void 0 : g.length) > 0)
        h.push([C, -1, R]);
      else if (C.value) {
        const L = document.createTextNode(C.value);
        l && Qo.shouldBuildText(E) && d.push(L), R.append(L);
      }
    }
    for (const v of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      v.setAttribute("readOnly", !0);
    return {
      textDivs: d
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Th = 1e3, GT = 9, Or = /* @__PURE__ */ new WeakSet();
function In(r) {
  return {
    width: r[2] - r[0],
    height: r[3] - r[1]
  };
}
class VT {
  static create(t) {
    switch (t.data.annotationType) {
      case Zt.LINK:
        return new vb(t);
      case Zt.TEXT:
        return new WT(t);
      case Zt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new qT(t);
          case "Btn":
            return t.data.radioButton ? new wb(t) : t.data.checkBox ? new YT(t) : new KT(t);
          case "Ch":
            return new ZT(t);
          case "Sig":
            return new XT(t);
        }
        return new zr(t);
      case Zt.POPUP:
        return new tg(t);
      case Zt.FREETEXT:
        return new Sb(t);
      case Zt.LINE:
        return new QT(t);
      case Zt.SQUARE:
        return new tP(t);
      case Zt.CIRCLE:
        return new eP(t);
      case Zt.POLYLINE:
        return new Cb(t);
      case Zt.CARET:
        return new nP(t);
      case Zt.INK:
        return new Tb(t);
      case Zt.POLYGON:
        return new iP(t);
      case Zt.HIGHLIGHT:
        return new sP(t);
      case Zt.UNDERLINE:
        return new rP(t);
      case Zt.SQUIGGLY:
        return new aP(t);
      case Zt.STRIKEOUT:
        return new oP(t);
      case Zt.STAMP:
        return new Pb(t);
      case Zt.FILEATTACHMENT:
        return new lP(t);
      default:
        return new Xt(t);
    }
  }
}
var nr, Oa, Na, dc, Qp;
const gm = class gm {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: n = !1
  } = {}) {
    m(this, dc);
    m(this, nr, null);
    m(this, Oa, !1);
    m(this, Na, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), n && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: i
  }) {
    return !!(t != null && t.str || e != null && e.str || i != null && i.str);
  }
  get hasPopupData() {
    return gm._hasPopupData(this.data);
  }
  updateEdited(t) {
    var i;
    if (!this.container)
      return;
    o(this, nr) || w(this, nr, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && A(this, dc, Qp).call(this, e), (i = o(this, Na)) == null || i.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    o(this, nr) && (A(this, dc, Qp).call(this, o(this, nr).rect), (t = o(this, Na)) == null || t.popup.resetEdited(), w(this, nr, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: n
      }
    } = this, s = document.createElement("section");
    s.setAttribute("data-annotation-id", e.id), this instanceof zr || (s.tabIndex = Th);
    const {
      style: a
    } = s;
    if (a.zIndex = this.parent.zIndex++, e.popupRef && s.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (s.title = e.alternativeText), e.noRotate && s.classList.add("norotate"), !e.rect || this instanceof tg) {
      const {
        rotation: _
      } = e;
      return !e.hasOwnCanvas && _ !== 0 && this.setRotation(_, s), s;
    }
    const {
      width: l,
      height: c
    } = In(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const _ = e.borderStyle.horizontalCornerRadius, C = e.borderStyle.verticalCornerRadius;
      if (_ > 0 || C > 0) {
        const R = `calc(${_}px * var(--scale-factor)) / calc(${C}px * var(--scale-factor))`;
        a.borderRadius = R;
      } else if (this instanceof wb) {
        const R = `calc(${l}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        a.borderRadius = R;
      }
      switch (e.borderStyle.style) {
        case Ro.SOLID:
          a.borderStyle = "solid";
          break;
        case Ro.DASHED:
          a.borderStyle = "dashed";
          break;
        case Ro.BEVELED:
          ut("Unimplemented border style: beveled");
          break;
        case Ro.INSET:
          ut("Unimplemented border style: inset");
          break;
        case Ro.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const E = e.borderColor || null;
      E ? (w(this, Oa, !0), a.borderColor = Z.makeHexColor(E[0] | 0, E[1] | 0, E[2] | 0)) : a.borderWidth = 0;
    }
    const d = Z.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]), {
      pageWidth: h,
      pageHeight: p,
      pageX: g,
      pageY: v
    } = n.rawDims;
    a.left = `${100 * (d[0] - g) / h}%`, a.top = `${100 * (d[1] - v) / p}%`;
    const {
      rotation: b
    } = e;
    return e.hasOwnCanvas || b === 0 ? (a.width = `${100 * l / h}%`, a.height = `${100 * c / p}%`) : this.setRotation(b, s), s;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: i,
      pageHeight: n
    } = this.parent.viewport.rawDims, {
      width: s,
      height: a
    } = In(this.data.rect);
    let l, c;
    t % 180 === 0 ? (l = 100 * s / i, c = 100 * a / n) : (l = 100 * a / i, c = 100 * s / n), e.style.width = `${l}%`, e.style.height = `${c}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, i, n) => {
      const s = n.detail[e], a = s[0], l = s.slice(1);
      n.target.style[i] = a0[`${a}_HTML`](l), this.annotationStorage.setValue(this.data.id, {
        [i]: a0[`${a}_rgb`](l)
      });
    };
    return _t(this, "_commonActions", {
      display: (e) => {
        const {
          display: i
        } = e.detail, n = i % 2 === 1;
        this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: n,
          noPrint: i === 1 || i === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: i
        } = e.detail;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: i,
          noView: i
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const i = e.detail.rotation;
        this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
          rotation: i
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const i = this._commonActions;
    for (const n of Object.keys(e.detail)) {
      const s = t[n] || i[n];
      s == null || s(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const i = this._commonActions;
    for (const [n, s] of Object.entries(e)) {
      const a = i[n];
      if (a) {
        const l = {
          detail: {
            [n]: s
          },
          target: t
        };
        a(l), delete e[n];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, i, n, s] = this.data.rect;
    if (t.length === 1) {
      const [, {
        x: _,
        y: C
      }, {
        x: E,
        y: R
      }] = t[0];
      if (n === _ && s === C && e === E && i === R)
        return;
    }
    const {
      style: a
    } = this.container;
    let l;
    if (o(this, Oa)) {
      const {
        borderColor: _,
        borderWidth: C
      } = a;
      a.borderWidth = 0, l = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${_}" stroke-width="${C}">`], this.container.classList.add("hasBorder");
    }
    const c = n - e, d = s - i, {
      svgFactory: h
    } = this, p = h.createElement("svg");
    p.classList.add("quadrilateralsContainer"), p.setAttribute("width", 0), p.setAttribute("height", 0);
    const g = h.createElement("defs");
    p.append(g);
    const v = h.createElement("clipPath"), b = `clippath_${this.data.id}`;
    v.setAttribute("id", b), v.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(v);
    for (const [, {
      x: _,
      y: C
    }, {
      x: E,
      y: R
    }] of t) {
      const L = h.createElement("rect"), M = (E - e) / c, D = (s - C) / d, N = (_ - E) / c, U = (C - R) / d;
      L.setAttribute("x", M), L.setAttribute("y", D), L.setAttribute("width", N), L.setAttribute("height", U), v.append(L), l == null || l.push(`<rect vector-effect="non-scaling-stroke" x="${M}" y="${D}" width="${N}" height="${U}"/>`);
    }
    o(this, Oa) && (l.push("</g></svg>')"), a.backgroundImage = l.join("")), this.container.append(p), this.container.style.clipPath = `url(#${b})`;
  }
  _createPopup() {
    const {
      container: t,
      data: e
    } = this;
    t.setAttribute("aria-haspopup", "dialog");
    const i = w(this, Na, new tg({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(i.render());
  }
  render() {
    It("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const n = this._fieldObjects[t];
      if (n)
        for (const {
          page: s,
          id: a,
          exportValues: l
        } of n) {
          if (s === -1 || a === e)
            continue;
          const c = typeof l == "string" ? l : null, d = document.querySelector(`[data-element-id="${a}"]`);
          if (d && !Or.has(d)) {
            ut(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: c,
            domElement: d
          });
        }
      return i;
    }
    for (const n of document.getElementsByName(t)) {
      const {
        exportValue: s
      } = n, a = n.getAttribute("data-element-id");
      a !== e && Or.has(n) && i.push({
        id: a,
        exportValue: s,
        domElement: n
      });
    }
    return i;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var i;
      (i = this.linkService.eventBus) == null || i.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
nr = new WeakMap(), Oa = new WeakMap(), Na = new WeakMap(), dc = new WeakSet(), Qp = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: i,
      rotation: n
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: a,
          pageX: l,
          pageY: c
        }
      }
    }
  } = this;
  i == null || i.splice(0, 4, ...t);
  const {
    width: d,
    height: h
  } = In(t);
  e.left = `${100 * (t[0] - l) / s}%`, e.top = `${100 * (a - t[3] + c) / a}%`, n === 0 ? (e.width = `${100 * d / s}%`, e.height = `${100 * h / a}%`) : this.setRotation(n);
};
let Xt = gm;
var gn, As, du, bb, uu, yb;
class vb extends Xt {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, gn);
    m(this, du);
    m(this, uu);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: i
    } = this, n = document.createElement("a");
    n.setAttribute("data-element-id", e.id);
    let s = !1;
    return e.url ? (i.addLinkAttributes(n, e.url, e.newWindow), s = !0) : e.action ? (this._bindNamedAction(n, e.action), s = !0) : e.attachment ? (A(this, du, bb).call(this, n, e.attachment, e.attachmentDest), s = !0) : e.setOCGState ? (A(this, uu, yb).call(this, n, e.setOCGState), s = !0) : e.dest ? (this._bindLink(n, e.dest), s = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, e), s = !0), e.resetForm ? (this._bindResetFormAction(n, e.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(n, ""), s = !0)), this.container.classList.add("linkAnnotation"), s && this.container.append(n), this.container;
  }
  _bindLink(e, i) {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === "") && A(this, gn, As).call(this);
  }
  _bindNamedAction(e, i) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(i), !1), A(this, gn, As).call(this);
  }
  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl("");
    const n = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const s of Object.keys(i.actions)) {
      const a = n.get(s);
      a && (e[a] = () => {
        var l;
        return (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: i.id,
            name: s
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), A(this, gn, As).call(this);
  }
  _bindResetFormAction(e, i) {
    const n = e.onclick;
    if (n || (e.href = this.linkService.getAnchorUrl("")), A(this, gn, As).call(this), !this._fieldObjects) {
      ut('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var p;
      n == null || n();
      const {
        fields: s,
        refs: a,
        include: l
      } = i, c = [];
      if (s.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const v of s) {
          const b = this._fieldObjects[v] || [];
          for (const {
            id: _
          } of b)
            g.add(_);
        }
        for (const v of Object.values(this._fieldObjects))
          for (const b of v)
            g.has(b.id) === l && c.push(b);
      } else
        for (const g of Object.values(this._fieldObjects))
          c.push(...g);
      const d = this.annotationStorage, h = [];
      for (const g of c) {
        const {
          id: v
        } = g;
        switch (h.push(v), g.type) {
          case "text": {
            const _ = g.defaultValue || "";
            d.setValue(v, {
              value: _
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const _ = g.defaultValue === g.exportValues;
            d.setValue(v, {
              value: _
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const _ = g.defaultValue || "";
            d.setValue(v, {
              value: _
            });
            break;
          }
          default:
            continue;
        }
        const b = document.querySelector(`[data-element-id="${v}"]`);
        if (b) {
          if (!Or.has(b)) {
            ut(`_bindResetFormAction - element not allowed: ${v}`);
            continue;
          }
        } else
          continue;
        b.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: h,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
gn = new WeakSet(), As = function() {
  this.container.setAttribute("data-internal-link", "");
}, du = new WeakSet(), bb = function(e, i, n = null) {
  e.href = this.linkService.getAnchorUrl(""), i.description && (e.title = i.description), e.onclick = () => {
    var s;
    return (s = this.downloadManager) == null || s.openOrDownloadData(i.content, i.filename, n), !1;
  }, A(this, gn, As).call(this);
}, uu = new WeakSet(), yb = function(e, i) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), A(this, gn, As).call(this);
};
class WT extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class zr extends Xt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Oe.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, i, n, s) {
    i.includes("mouse") ? t.addEventListener(i, (a) => {
      var l;
      (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: n,
          value: s(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(i, (a) => {
      var l;
      if (i === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (i === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      s && ((l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: n,
          value: s(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, i, n) {
    var s, a, l;
    for (const [c, d] of i)
      (d === "Action" || (s = this.data.actions) != null && s[d]) && ((d === "Focus" || d === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, c, d, n), d === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : d === "Blur" && !((l = this.data.actions) != null && l.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : Z.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: i
    } = this.data.defaultAppearanceData, n = this.data.defaultAppearanceData.fontSize || GT, s = t.style;
    let a;
    const l = 2, c = (d) => Math.round(10 * d) / 10;
    if (this.data.multiLine) {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l), h = Math.round(d / (Zf * n)) || 1, p = d / h;
      a = Math.min(n, c(p / Zf));
    } else {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l);
      a = Math.min(n, c(d / Zf));
    }
    s.fontSize = `calc(${a}px * var(--scale-factor))`, s.color = Z.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (s.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class qT extends zr {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, i, n) {
    const s = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = i), s.setValue(a.id, {
        [n]: i
      });
  }
  render() {
    var n, s;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let l = a.value || "";
      const c = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && l.length > c && (l = l.slice(0, c));
      let d = a.formattedValue || ((n = this.data.textContent) == null ? void 0 : n.join(`
`)) || null;
      d && this.data.comb && (d = d.replaceAll(/\s+/g, ""));
      const h = {
        userValue: l,
        formattedValue: d,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = d ?? l, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = "text", i.setAttribute("value", d ?? l), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), Or.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = Th, this._setRequired(i, this.data.required), c && (i.maxLength = c), i.addEventListener("input", (g) => {
        t.setValue(e, {
          value: g.target.value
        }), this.setPropertyOnSiblings(i, "value", g.target.value, "value"), h.formattedValue = null;
      }), i.addEventListener("resetform", (g) => {
        const v = this.data.defaultFieldValue ?? "";
        i.value = h.userValue = v, h.formattedValue = null;
      });
      let p = (g) => {
        const {
          formattedValue: v
        } = h;
        v != null && (g.target.value = v), g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener("focus", (v) => {
          var _;
          if (h.focused)
            return;
          const {
            target: b
          } = v;
          h.userValue && (b.value = h.userValue), h.lastCommittedValue = b.value, h.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (h.focused = !0);
        }), i.addEventListener("updatefromsandbox", (v) => {
          this.showElementAndHideCanvas(v.target);
          const b = {
            value(_) {
              h.userValue = _.detail.value ?? "", t.setValue(e, {
                value: h.userValue.toString()
              }), _.target.value = h.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: C
              } = _.detail;
              h.formattedValue = C, C != null && _.target !== document.activeElement && (_.target.value = C), t.setValue(e, {
                formattedValue: C
              });
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var L;
              const {
                charLimit: C
              } = _.detail, {
                target: E
              } = _;
              if (C === 0) {
                E.removeAttribute("maxLength");
                return;
              }
              E.setAttribute("maxLength", C);
              let R = h.userValue;
              !R || R.length <= C || (R = R.slice(0, C), E.value = h.userValue = R, t.setValue(e, {
                value: R
              }), (L = this.linkService.eventBus) == null || L.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: R,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: E.selectionStart,
                  selEnd: E.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(b, v);
        }), i.addEventListener("keydown", (v) => {
          var C;
          h.commitKey = 1;
          let b = -1;
          if (v.key === "Escape" ? b = 0 : v.key === "Enter" && !this.data.multiLine ? b = 2 : v.key === "Tab" && (h.commitKey = 3), b === -1)
            return;
          const {
            value: _
          } = v.target;
          h.lastCommittedValue !== _ && (h.lastCommittedValue = _, h.userValue = _, (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: b,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          }));
        });
        const g = p;
        p = null, i.addEventListener("blur", (v) => {
          var _, C;
          if (!h.focused || !v.relatedTarget)
            return;
          (_ = this.data.actions) != null && _.Blur || (h.focused = !1);
          const {
            value: b
          } = v.target;
          h.userValue = b, h.lastCommittedValue !== b && ((C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: b,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          })), g(v);
        }), (s = this.data.actions) != null && s.Keystroke && i.addEventListener("beforeinput", (v) => {
          var D;
          h.lastCommittedValue = null;
          const {
            data: b,
            target: _
          } = v, {
            value: C,
            selectionStart: E,
            selectionEnd: R
          } = _;
          let L = E, M = R;
          switch (v.inputType) {
            case "deleteWordBackward": {
              const N = C.substring(0, E).match(/\w*[^\w]*$/);
              N && (L -= N[0].length);
              break;
            }
            case "deleteWordForward": {
              const N = C.substring(E).match(/^[^\w]*\w*/);
              N && (M += N[0].length);
              break;
            }
            case "deleteContentBackward":
              E === R && (L -= 1);
              break;
            case "deleteContentForward":
              E === R && (M += 1);
              break;
          }
          v.preventDefault(), (D = this.linkService.eventBus) == null || D.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: C,
              change: b || "",
              willCommit: !1,
              selStart: L,
              selEnd: M
            }
          });
        }), this._setEventListeners(i, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (v) => v.target.value);
      }
      if (p && i.addEventListener("blur", p), this.data.comb) {
        const v = (this.data.rect[2] - this.data.rect[0]) / c;
        i.classList.add("comb"), i.style.letterSpacing = `calc(${v}px * var(--scale-factor) - 1ch)`;
      }
    } else
      i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class XT extends zr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class YT extends zr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, i = e.id;
    let n = t.getValue(i, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof n == "string" && (n = n !== "Off", t.setValue(i, {
      value: n
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const s = document.createElement("input");
    return Or.add(s), s.setAttribute("data-element-id", i), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "checkbox", s.name = e.fieldName, n && s.setAttribute("checked", !0), s.setAttribute("exportValue", e.exportValue), s.tabIndex = Th, s.addEventListener("change", (a) => {
      const {
        name: l,
        checked: c
      } = a.target;
      for (const d of this._getElementsByName(l, i)) {
        const h = c && d.exportValue === e.exportValue;
        d.domElement && (d.domElement.checked = h), t.setValue(d.id, {
          value: h
        });
      }
      t.setValue(i, {
        value: c
      });
    }), s.addEventListener("resetform", (a) => {
      const l = e.defaultFieldValue || "Off";
      a.target.checked = l === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (s.addEventListener("updatefromsandbox", (a) => {
      const l = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", t.setValue(i, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(l, a);
    }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class wb extends zr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, i = e.id;
    let n = t.getValue(i, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof n == "string" && (n = n !== e.buttonValue, t.setValue(i, {
      value: n
    })), n)
      for (const a of this._getElementsByName(e.fieldName, i))
        t.setValue(a.id, {
          value: !1
        });
    const s = document.createElement("input");
    if (Or.add(s), s.setAttribute("data-element-id", i), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "radio", s.name = e.fieldName, n && s.setAttribute("checked", !0), s.tabIndex = Th, s.addEventListener("change", (a) => {
      const {
        name: l,
        checked: c
      } = a.target;
      for (const d of this._getElementsByName(l, i))
        t.setValue(d.id, {
          value: !1
        });
      t.setValue(i, {
        value: c
      });
    }), s.addEventListener("resetform", (a) => {
      const l = e.defaultFieldValue;
      a.target.checked = l != null && l === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      s.addEventListener("updatefromsandbox", (l) => {
        const c = {
          value: (d) => {
            const h = a === d.detail.value;
            for (const p of this._getElementsByName(d.target.name)) {
              const g = h && p.id === i;
              p.domElement && (p.domElement.checked = g), t.setValue(p.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, l);
      }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (l) => l.target.checked);
    }
    return this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class KT extends vb {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (i) => {
      this._dispatchEventFromSandbox({}, i);
    })), t;
  }
}
class ZT extends zr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {
      value: this.data.fieldValue
    }), n = document.createElement("select");
    Or.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, this._setRequired(n, this.data.required), n.name = this.data.fieldName, n.tabIndex = Th;
    let s = this.data.combo && this.data.options.length > 0;
    this.data.combo || (n.size = this.data.options.length, this.data.multiSelect && (n.multiple = !0)), n.addEventListener("resetform", (h) => {
      const p = this.data.defaultFieldValue;
      for (const g of n.options)
        g.selected = g.value === p;
    });
    for (const h of this.data.options) {
      const p = document.createElement("option");
      p.textContent = h.displayValue, p.value = h.exportValue, i.value.includes(h.exportValue) && (p.setAttribute("selected", !0), s = !1), n.append(p);
    }
    let a = null;
    if (s) {
      const h = document.createElement("option");
      h.value = " ", h.setAttribute("hidden", !0), h.setAttribute("selected", !0), n.prepend(h), a = () => {
        h.remove(), n.removeEventListener("input", a), a = null;
      }, n.addEventListener("input", a);
    }
    const l = (h) => {
      const p = h ? "value" : "textContent", {
        options: g,
        multiple: v
      } = n;
      return v ? Array.prototype.filter.call(g, (b) => b.selected).map((b) => b[p]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][p];
    };
    let c = l(!1);
    const d = (h) => {
      const p = h.target.options;
      return Array.prototype.map.call(p, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (n.addEventListener("updatefromsandbox", (h) => {
      const p = {
        value(g) {
          a == null || a();
          const v = g.detail.value, b = new Set(Array.isArray(v) ? v : [v]);
          for (const _ of n.options)
            _.selected = b.has(_.value);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        multipleSelection(g) {
          n.multiple = !0;
        },
        remove(g) {
          const v = n.options, b = g.detail.remove;
          v[b].selected = !1, n.remove(b), v.length > 0 && Array.prototype.findIndex.call(v, (C) => C.selected) === -1 && (v[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        clear(g) {
          for (; n.length !== 0; )
            n.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), c = l(!1);
        },
        insert(g) {
          const {
            index: v,
            displayValue: b,
            exportValue: _
          } = g.detail.insert, C = n.children[v], E = document.createElement("option");
          E.textContent = b, E.value = _, C ? C.before(E) : n.append(E), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        items(g) {
          const {
            items: v
          } = g.detail;
          for (; n.length !== 0; )
            n.remove(0);
          for (const b of v) {
            const {
              displayValue: _,
              exportValue: C
            } = b, E = document.createElement("option");
            E.textContent = _, E.value = C, n.append(E);
          }
          n.options.length > 0 && (n.options[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        indices(g) {
          const v = new Set(g.detail.indices);
          for (const b of g.target.options)
            b.selected = v.has(b.index);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(p, h);
    }), n.addEventListener("input", (h) => {
      var v;
      const p = l(!0), g = l(!1);
      t.setValue(e, {
        value: p
      }), h.preventDefault(), (v = this.linkService.eventBus) == null || v.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: c,
          change: g,
          changeEx: p,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(n, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (h) => h.target.value)) : n.addEventListener("input", function(h) {
      t.setValue(e, {
        value: l(!0)
      });
    }), this.data.combo && this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class tg extends Xt {
  constructor(t) {
    const {
      data: e,
      elements: i
    } = t;
    super(t, {
      isRenderable: Xt._hasPopupData(e)
    }), this.elements = i, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new JT({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const i of this.elements)
      i.popup = t, e.push(i.data.id), i.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((i) => `${xv}${i}`).join(",")), this.container;
  }
}
var Ba, fu, pu, $a, sr, Vt, mn, rr, uc, fc, Ua, vn, ui, bn, pc, yn, gc, ar, or, Ha, Zh, mc, eg, gu, Ab, mu, _b, vu, Eb, bu, xb, ja, Jh, za, Qh, vc, ig;
class JT {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: n,
    modificationDate: s,
    contentsObj: a,
    richText: l,
    parent: c,
    rect: d,
    parentRect: h,
    open: p
  }) {
    m(this, Ha);
    m(this, mc);
    m(this, gu);
    m(this, mu);
    m(this, vu);
    m(this, bu);
    m(this, ja);
    m(this, za);
    m(this, vc);
    m(this, Ba, A(this, vu, Eb).bind(this));
    m(this, fu, A(this, vc, ig).bind(this));
    m(this, pu, A(this, za, Qh).bind(this));
    m(this, $a, A(this, ja, Jh).bind(this));
    m(this, sr, null);
    m(this, Vt, null);
    m(this, mn, null);
    m(this, rr, null);
    m(this, uc, null);
    m(this, fc, null);
    m(this, Ua, null);
    m(this, vn, !1);
    m(this, ui, null);
    m(this, bn, null);
    m(this, pc, null);
    m(this, yn, null);
    m(this, gc, null);
    m(this, ar, null);
    m(this, or, !1);
    var g;
    w(this, Vt, t), w(this, gc, n), w(this, mn, a), w(this, yn, l), w(this, fc, c), w(this, sr, e), w(this, pc, d), w(this, Ua, h), w(this, uc, i), w(this, rr, Rv.toDateObject(s)), this.trigger = i.flatMap((v) => v.getElementsToTriggerPopup());
    for (const v of this.trigger)
      v.addEventListener("click", o(this, $a)), v.addEventListener("mouseenter", o(this, pu)), v.addEventListener("mouseleave", o(this, fu)), v.classList.add("popupTriggerArea");
    for (const v of i)
      (g = v.container) == null || g.addEventListener("keydown", o(this, Ba));
    o(this, Vt).hidden = !0, p && A(this, ja, Jh).call(this);
  }
  render() {
    if (o(this, ui))
      return;
    const t = w(this, ui, document.createElement("div"));
    if (t.className = "popup", o(this, sr)) {
      const s = t.style.outlineColor = Z.makeHexColor(...o(this, sr));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)` : t.style.backgroundColor = Z.makeHexColor(...o(this, sr).map((l) => Math.floor(0.7 * (255 - l) + l)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const i = document.createElement("h1");
    if (e.append(i), {
      dir: i.dir,
      str: i.textContent
    } = o(this, gc), t.append(e), o(this, rr)) {
      const s = document.createElement("span");
      s.classList.add("popupDate"), s.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        date: o(this, rr).toLocaleDateString(),
        time: o(this, rr).toLocaleTimeString()
      })), e.append(s);
    }
    const n = o(this, Ha, Zh);
    if (n)
      mb.render({
        xfaHtml: n,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const s = this._formatContents(o(this, mn));
      t.append(s);
    }
    o(this, Vt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const i = document.createElement("p");
    i.classList.add("popupContent"), i.dir = e;
    const n = t.split(/(?:\r\n?|\n)/);
    for (let s = 0, a = n.length; s < a; ++s) {
      const l = n[s];
      i.append(document.createTextNode(l)), s < a - 1 && i.append(document.createElement("br"));
    }
    return i;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var i;
    o(this, ar) || w(this, ar, {
      contentsObj: o(this, mn),
      richText: o(this, yn)
    }), t && w(this, bn, null), e && (w(this, yn, A(this, mu, _b).call(this, e)), w(this, mn, null)), (i = o(this, ui)) == null || i.remove(), w(this, ui, null);
  }
  resetEdited() {
    var t;
    o(this, ar) && ({
      contentsObj: $e(this, mn)._,
      richText: $e(this, yn)._
    } = o(this, ar), w(this, ar, null), (t = o(this, ui)) == null || t.remove(), w(this, ui, null), w(this, bn, null));
  }
  forceHide() {
    w(this, or, this.isVisible), o(this, or) && (o(this, Vt).hidden = !0);
  }
  maybeShow() {
    o(this, or) && (o(this, ui) || A(this, za, Qh).call(this), w(this, or, !1), o(this, Vt).hidden = !1);
  }
  get isVisible() {
    return o(this, Vt).hidden === !1;
  }
}
Ba = new WeakMap(), fu = new WeakMap(), pu = new WeakMap(), $a = new WeakMap(), sr = new WeakMap(), Vt = new WeakMap(), mn = new WeakMap(), rr = new WeakMap(), uc = new WeakMap(), fc = new WeakMap(), Ua = new WeakMap(), vn = new WeakMap(), ui = new WeakMap(), bn = new WeakMap(), pc = new WeakMap(), yn = new WeakMap(), gc = new WeakMap(), ar = new WeakMap(), or = new WeakMap(), Ha = new WeakSet(), Zh = function() {
  const t = o(this, yn), e = o(this, mn);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && o(this, yn).html || null;
}, mc = new WeakSet(), eg = function() {
  var t, e, i;
  return ((i = (e = (t = o(this, Ha, Zh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, gu = new WeakSet(), Ab = function() {
  var t, e, i;
  return ((i = (e = (t = o(this, Ha, Zh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, mu = new WeakSet(), _b = function(t) {
  const e = [], i = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, n = {
    style: {
      color: o(this, gu, Ab),
      fontSize: o(this, mc, eg) ? `calc(${o(this, mc, eg)}px * var(--scale-factor))` : ""
    }
  };
  for (const s of t.split(`
`))
    e.push({
      name: "span",
      value: s,
      attributes: n
    });
  return i;
}, vu = new WeakSet(), Eb = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && o(this, vn)) && A(this, ja, Jh).call(this);
}, bu = new WeakSet(), xb = function() {
  if (o(this, bn) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: n,
        pageY: s
      }
    }
  } = o(this, fc);
  let a = !!o(this, Ua), l = a ? o(this, Ua) : o(this, pc);
  for (const b of o(this, uc))
    if (!l || Z.intersect(b.data.rect, l) !== null) {
      l = b.data.rect, a = !0;
      break;
    }
  const c = Z.normalizeRect([l[0], t[3] - l[1] + t[1], l[2], t[3] - l[3] + t[1]]), h = a ? l[2] - l[0] + 5 : 0, p = c[0] + h, g = c[1];
  w(this, bn, [100 * (p - n) / e, 100 * (g - s) / i]);
  const {
    style: v
  } = o(this, Vt);
  v.left = `${o(this, bn)[0]}%`, v.top = `${o(this, bn)[1]}%`;
}, ja = new WeakSet(), Jh = function() {
  w(this, vn, !o(this, vn)), o(this, vn) ? (A(this, za, Qh).call(this), o(this, Vt).addEventListener("click", o(this, $a)), o(this, Vt).addEventListener("keydown", o(this, Ba))) : (A(this, vc, ig).call(this), o(this, Vt).removeEventListener("click", o(this, $a)), o(this, Vt).removeEventListener("keydown", o(this, Ba)));
}, za = new WeakSet(), Qh = function() {
  o(this, ui) || this.render(), this.isVisible ? o(this, vn) && o(this, Vt).classList.add("focused") : (A(this, bu, xb).call(this), o(this, Vt).hidden = !1, o(this, Vt).style.zIndex = parseInt(o(this, Vt).style.zIndex) + 1e3);
}, vc = new WeakSet(), ig = function() {
  o(this, Vt).classList.remove("focused"), !(o(this, vn) || !this.isVisible) && (o(this, Vt).hidden = !0, o(this, Vt).style.zIndex = parseInt(o(this, Vt).style.zIndex) - 1e3);
};
class Sb extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = yt.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const i = document.createElement("span");
        i.textContent = e, t.append(i);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var bc;
class QT extends Xt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, bc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: i,
      height: n
    } = In(e.rect), s = this.svgFactory.create(i, n, !0), a = w(this, bc, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), s.append(a), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, bc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
bc = new WeakMap();
var yc;
class tP extends Xt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, yc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: i,
      height: n
    } = In(e.rect), s = this.svgFactory.create(i, n, !0), a = e.borderStyle.width, l = w(this, yc, this.svgFactory.createElement("svg:rect"));
    return l.setAttribute("x", a / 2), l.setAttribute("y", a / 2), l.setAttribute("width", i - a), l.setAttribute("height", n - a), l.setAttribute("stroke-width", a || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, yc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
yc = new WeakMap();
var wc;
class eP extends Xt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, wc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: i,
      height: n
    } = In(e.rect), s = this.svgFactory.create(i, n, !0), a = e.borderStyle.width, l = w(this, wc, this.svgFactory.createElement("svg:ellipse"));
    return l.setAttribute("cx", i / 2), l.setAttribute("cy", n / 2), l.setAttribute("rx", i / 2 - a / 2), l.setAttribute("ry", n / 2 - a / 2), l.setAttribute("stroke-width", a || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, wc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
wc = new WeakMap();
var Ac;
class Cb extends Xt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Ac, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: i,
      height: n
    } = In(e.rect), s = this.svgFactory.create(i, n, !0);
    let a = [];
    for (const c of e.vertices) {
      const d = c.x - e.rect[0], h = e.rect[3] - c.y;
      a.push(d + "," + h);
    }
    a = a.join(" ");
    const l = w(this, Ac, this.svgFactory.createElement(this.svgElementName));
    return l.setAttribute("points", a), l.setAttribute("stroke-width", e.borderStyle.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Ac);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ac = new WeakMap();
class iP extends Cb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class nP extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var _c;
class Tb extends Xt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, _c, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = yt.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: i,
      height: n
    } = In(e.rect), s = this.svgFactory.create(i, n, !0);
    for (const a of e.inkLists) {
      let l = [];
      for (const d of a) {
        const h = d.x - e.rect[0], p = e.rect[3] - d.y;
        l.push(`${h},${p}`);
      }
      l = l.join(" ");
      const c = this.svgFactory.createElement(this.svgElementName);
      o(this, _c).push(c), c.setAttribute("points", l), c.setAttribute("stroke-width", e.borderStyle.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), !e.popupRef && this.hasPopupData && this._createPopup(), s.append(c);
    }
    return this.container.append(s), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, _c);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
_c = new WeakMap();
class sP extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class rP extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class aP extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class oP extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Pb extends Xt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Ec, xc, ng;
class lP extends Xt {
  constructor(e) {
    var n;
    super(e, {
      isRenderable: !0
    });
    m(this, xc);
    m(this, Ec, null);
    const {
      file: i
    } = this.data;
    this.filename = i.filename, this.content = i.content, (n = this.linkService.eventBus) == null || n.dispatch("fileattachmentannotation", {
      source: this,
      ...i
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: i
    } = this;
    let n;
    i.hasAppearance || i.fillAlpha === 0 ? n = document.createElement("div") : (n = document.createElement("img"), n.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? "paperclip" : "pushpin"}.svg`, i.fillAlpha && i.fillAlpha < 1 && (n.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), n.addEventListener("dblclick", A(this, xc, ng).bind(this)), w(this, Ec, n);
    const {
      isMac: s
    } = Oe.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (s ? a.metaKey : a.ctrlKey) && A(this, xc, ng).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : n.classList.add("popupTriggerArea"), e.append(n), e;
  }
  getElementsToTriggerPopup() {
    return o(this, Ec);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ec = new WeakMap(), xc = new WeakSet(), ng = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Sc, lr, Ga, yu, Rb, Cc, sg, w0;
let cP = (w0 = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: n,
    page: s,
    viewport: a
  }) {
    m(this, yu);
    m(this, Cc);
    m(this, Sc, null);
    m(this, lr, null);
    m(this, Ga, /* @__PURE__ */ new Map());
    this.div = t, w(this, Sc, e), w(this, lr, i), this.page = s, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = n;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, i = this.div;
    Mr(i, this.viewport);
    const n = /* @__PURE__ */ new Map(), s = {
      data: null,
      layer: i,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Qg(),
      annotationStorage: t.annotationStorage || new sm(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const l of e) {
      if (l.noHTML)
        continue;
      const c = l.annotationType === Zt.POPUP;
      if (c) {
        const p = n.get(l.id);
        if (!p)
          continue;
        s.elements = p;
      } else {
        const {
          width: p,
          height: g
        } = In(l.rect);
        if (p <= 0 || g <= 0)
          continue;
      }
      s.data = l;
      const d = VT.create(s);
      if (!d.isRenderable)
        continue;
      if (!c && l.popupRef) {
        const p = n.get(l.popupRef);
        p ? p.push(d) : n.set(l.popupRef, [d]);
      }
      const h = d.render();
      l.hidden && (h.style.visibility = "hidden"), A(this, yu, Rb).call(this, h, l.id), d.annotationEditorType > 0 && (o(this, Ga).set(d.data.id, d), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(d));
    }
    A(this, Cc, sg).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Mr(e, {
      rotation: t.rotation
    }), A(this, Cc, sg).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(o(this, Ga).values());
  }
  getEditableAnnotation(t) {
    return o(this, Ga).get(t);
  }
}, Sc = new WeakMap(), lr = new WeakMap(), Ga = new WeakMap(), yu = new WeakSet(), Rb = function(t, e) {
  var n;
  const i = t.firstChild || t;
  i.id = `${xv}${e}`, this.div.append(t), (n = o(this, Sc)) == null || n.moveElementInDOM(this.div, t, i, !1);
}, Cc = new WeakSet(), sg = function() {
  if (!o(this, lr))
    return;
  const t = this.div;
  for (const [e, i] of o(this, lr)) {
    const n = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!n)
      continue;
    i.className = "annotationContent";
    const {
      firstChild: s
    } = n;
    s ? s.nodeName === "CANVAS" ? s.replaceWith(i) : s.classList.contains("annotationContent") ? s.after(i) : s.before(i) : n.append(i);
  }
  o(this, lr).clear();
}, w0);
const Nh = /\r\n?|\n/g;
var Tc, Pc, Rc, Lc, kc, fi, ze, Ic, Ge, Va, wu, Lb, Au, kb, _u, Ib, Wa, td, qa, ed, Xa, id, Eu, Fb, Fc, ag, xu, Mb;
const Dt = class Dt extends Lt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, wu);
    m(this, Au);
    m(this, _u);
    m(this, Wa);
    m(this, Xa);
    m(this, Eu);
    m(this, xu);
    m(this, Tc, this.editorDivBlur.bind(this));
    m(this, Pc, this.editorDivFocus.bind(this));
    m(this, Rc, this.editorDivInput.bind(this));
    m(this, Lc, this.editorDivKeydown.bind(this));
    m(this, kc, this.editorDivPaste.bind(this));
    m(this, fi, void 0);
    m(this, ze, "");
    m(this, Ic, `${this.id}-editor`);
    m(this, Ge, void 0);
    m(this, Va, null);
    w(this, fi, e.color || Dt._defaultColor || Lt._defaultLineColor), w(this, Ge, e.fontSize || Dt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = Dt.prototype, i = (a) => a.isEmpty(), n = Dr.TRANSLATE_SMALL, s = Dr.TRANSLATE_BIG;
    return _t(this, "_keyboardManager", new Sh([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: i
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-s, 0],
      checker: i
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: i
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [s, 0],
      checker: i
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: i
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -s],
      checker: i
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: i
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, s],
      checker: i
    }]]));
  }
  static initialize(e, i) {
    Lt.initialize(e, i, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const n = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(n.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case ot.FREETEXT_SIZE:
        Dt._defaultFontSize = i;
        break;
      case ot.FREETEXT_COLOR:
        Dt._defaultColor = i;
        break;
    }
  }
  updateParams(e, i) {
    switch (e) {
      case ot.FREETEXT_SIZE:
        A(this, wu, Lb).call(this, i);
        break;
      case ot.FREETEXT_COLOR:
        A(this, Au, kb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ot.FREETEXT_SIZE, Dt._defaultFontSize], [ot.FREETEXT_COLOR, Dt._defaultColor || Lt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[ot.FREETEXT_SIZE, o(this, Ge)], [ot.FREETEXT_COLOR, o(this, fi)]];
  }
  _translateEmpty(e, i) {
    this._uiManager.translateSelectedEditors(e, i, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Dt._internalPadding * e, -(Dt._internalPadding + o(this, Ge)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(yt.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", o(this, Lc)), this.editorDiv.addEventListener("focus", o(this, Pc)), this.editorDiv.addEventListener("blur", o(this, Tc)), this.editorDiv.addEventListener("input", o(this, Rc)), this.editorDiv.addEventListener("paste", o(this, kc)));
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", o(this, Ic)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", o(this, Lc)), this.editorDiv.removeEventListener("focus", o(this, Pc)), this.editorDiv.removeEventListener("blur", o(this, Tc)), this.editorDiv.removeEventListener("input", o(this, Rc)), this.editorDiv.removeEventListener("paste", o(this, kc)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = o(this, ze), i = w(this, ze, A(this, _u, Ib).call(this).trimEnd());
    if (e === i)
      return;
    const n = (s) => {
      if (w(this, ze, s), !s) {
        this.remove();
        return;
      }
      A(this, Xa, id).call(this), this._uiManager.rebuild(this), A(this, Wa, td).call(this);
    };
    this.addCommands({
      cmd: () => {
        n(i);
      },
      undo: () => {
        n(e);
      },
      mustExec: !1
    }), A(this, Wa, td).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Dt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    this.width && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", o(this, Ic)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), Lt._l10nPromise.get("pdfjs-free-text-default-content").then((s) => {
      var a;
      return (a = this.editorDiv) == null ? void 0 : a.setAttribute("default-content", s);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: n
    } = this.editorDiv;
    if (n.fontSize = `calc(${o(this, Ge)}px * var(--scale-factor))`, n.color = o(this, fi), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), vd(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [s, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: l
        } = o(this, Va);
        let [c, d] = this.getInitialTranslation();
        [c, d] = this.pageTranslationToScreen(c, d);
        const [h, p] = this.pageDimensions, [g, v] = this.pageTranslation;
        let b, _;
        switch (this.rotation) {
          case 0:
            b = e + (l[0] - g) / h, _ = i + this.height - (l[1] - v) / p;
            break;
          case 90:
            b = e + (l[0] - g) / h, _ = i - (l[1] - v) / p, [c, d] = [d, -c];
            break;
          case 180:
            b = e - this.width + (l[0] - g) / h, _ = i - (l[1] - v) / p, [c, d] = [-c, -d];
            break;
          case 270:
            b = e + (l[0] - g - this.height * p) / h, _ = i + (l[1] - v - this.width * h) / p, [c, d] = [-d, c];
            break;
        }
        this.setAt(b * s, _ * a, c, d);
      } else
        this.setAt(e * s, i * a, this.width * s, this.height * a);
      A(this, Xa, id).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var b, _, C;
    const i = e.clipboardData || window.clipboardData, {
      types: n
    } = i;
    if (n.length === 1 && n[0] === "text/plain")
      return;
    e.preventDefault();
    const s = A(b = Dt, Fc, ag).call(b, i.getData("text") || "").replaceAll(Nh, `
`);
    if (!s)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const l = a.getRangeAt(0);
    if (!s.includes(`
`)) {
      l.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: d
    } = l, h = [], p = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const E = c.parentElement;
      if (p.push(c.nodeValue.slice(d).replaceAll(Nh, "")), E !== this.editorDiv) {
        let R = h;
        for (const L of this.editorDiv.childNodes) {
          if (L === E) {
            R = p;
            continue;
          }
          R.push(A(_ = Dt, qa, ed).call(_, L));
        }
      }
      h.push(c.nodeValue.slice(0, d).replaceAll(Nh, ""));
    } else if (c === this.editorDiv) {
      let E = h, R = 0;
      for (const L of this.editorDiv.childNodes)
        R++ === d && (E = p), E.push(A(C = Dt, qa, ed).call(C, L));
    }
    w(this, ze, `${h.join(`
`)}${s}${p.join(`
`)}`), A(this, Xa, id).call(this);
    const g = new Range();
    let v = h.reduce((E, R) => E + R.length, 0);
    for (const {
      firstChild: E
    } of this.editorDiv.childNodes)
      if (E.nodeType === Node.TEXT_NODE) {
        const R = E.nodeValue.length;
        if (v <= R) {
          g.setStart(E, v), g.setEnd(E, v);
          break;
        }
        v -= R;
      }
    a.removeAllRanges(), a.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(e, i, n) {
    var l;
    let s = null;
    if (e instanceof Sb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: d
          },
          rect: h,
          rotation: p,
          id: g
        },
        textContent: v,
        textPosition: b,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!v || v.length === 0)
        return null;
      s = e = {
        annotationType: yt.FREETEXT,
        color: Array.from(d),
        fontSize: c,
        value: v.join(`
`),
        position: b,
        pageIndex: _ - 1,
        rect: h.slice(0),
        rotation: p,
        id: g,
        deleted: !1
      };
    }
    const a = super.deserialize(e, i, n);
    return w(a, Ge, e.fontSize), w(a, fi, Z.makeHexColor(...e.color)), w(a, ze, A(l = Dt, Fc, ag).call(l, e.value)), a.annotationElementId = e.id || null, w(a, Va, s), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const i = Dt._internalPadding * this.parentScale, n = this.getRect(i, i), s = Lt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : o(this, fi)), a = {
      annotationType: yt.FREETEXT,
      color: s,
      fontSize: o(this, Ge),
      value: A(this, Eu, Fb).call(this),
      pageIndex: this.pageIndex,
      rect: n,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !A(this, xu, Mb).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (this.deleted)
      return i;
    const {
      style: n
    } = i;
    n.fontSize = `calc(${o(this, Ge)}px * var(--scale-factor))`, n.color = o(this, fi), i.replaceChildren();
    for (const a of o(this, ze).split(`
`)) {
      const l = document.createElement("div");
      l.append(a ? document.createTextNode(a) : document.createElement("br")), i.append(l);
    }
    const s = Dt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(s, s),
      popupContent: o(this, ze)
    }), i;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Tc = new WeakMap(), Pc = new WeakMap(), Rc = new WeakMap(), Lc = new WeakMap(), kc = new WeakMap(), fi = new WeakMap(), ze = new WeakMap(), Ic = new WeakMap(), Ge = new WeakMap(), Va = new WeakMap(), wu = new WeakSet(), Lb = function(e) {
  const i = (s) => {
    this.editorDiv.style.fontSize = `calc(${s}px * var(--scale-factor))`, this.translate(0, -(s - o(this, Ge)) * this.parentScale), w(this, Ge, s), A(this, Wa, td).call(this);
  }, n = o(this, Ge);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Au = new WeakSet(), kb = function(e) {
  const i = (s) => {
    w(this, fi, this.editorDiv.style.color = s);
  }, n = o(this, fi);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, _u = new WeakSet(), Ib = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  for (const n of this.editorDiv.childNodes)
    e.push(A(i = Dt, qa, ed).call(i, n));
  return e.join(`
`);
}, Wa = new WeakSet(), td = function() {
  const [e, i] = this.parentDimensions;
  let n;
  if (this.isAttachedToDOM)
    n = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: s,
      div: a
    } = this, l = a.style.display, c = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", s.div.append(this.div), n = a.getBoundingClientRect(), a.remove(), a.style.display = l, a.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = n.width / e, this.height = n.height / i) : (this.width = n.height / e, this.height = n.width / i), this.fixAndSetPosition();
}, qa = new WeakSet(), ed = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Nh, "");
}, Xa = new WeakSet(), id = function() {
  if (this.editorDiv.replaceChildren(), !!o(this, ze))
    for (const e of o(this, ze).split(`
`)) {
      const i = document.createElement("div");
      i.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(i);
    }
}, Eu = new WeakSet(), Fb = function() {
  return o(this, ze).replaceAll(" ", " ");
}, Fc = new WeakSet(), ag = function(e) {
  return e.replaceAll(" ", " ");
}, xu = new WeakSet(), Mb = function(e) {
  const {
    value: i,
    fontSize: n,
    color: s,
    pageIndex: a
  } = o(this, Va);
  return this._hasBeenMoved || e.value !== i || e.fontSize !== n || e.color.some((l, c) => l !== s[c]) || e.pageIndex !== a;
}, m(Dt, qa), m(Dt, Fc), lt(Dt, "_freeTextDefaultContent", ""), lt(Dt, "_internalPadding", 0), lt(Dt, "_defaultColor", null), lt(Dt, "_defaultFontSize", 10), lt(Dt, "_type", "freetext"), lt(Dt, "_editorType", yt.FREETEXT);
let rg = Dt;
var Mc, is, pi, Su, Db, Ya, nd, Cu, Ob, Tu, Nb, Dc, lg;
class og {
  constructor(t, e = 0, i = 0, n = !0) {
    m(this, Su);
    m(this, Ya);
    m(this, Cu);
    m(this, Tu);
    m(this, Dc);
    m(this, Mc, void 0);
    m(this, is, []);
    m(this, pi, []);
    let s = 1 / 0, a = -1 / 0, l = 1 / 0, c = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: E,
      y: R,
      width: L,
      height: M
    } of t) {
      const D = Math.floor((E - e) / h) * h, N = Math.ceil((E + L + e) / h) * h, U = Math.floor((R - e) / h) * h, S = Math.ceil((R + M + e) / h) * h, T = [D, U, S, !0], I = [N, U, S, !1];
      o(this, is).push(T, I), s = Math.min(s, D), a = Math.max(a, N), l = Math.min(l, U), c = Math.max(c, S);
    }
    const p = a - s + 2 * i, g = c - l + 2 * i, v = s - i, b = l - i, _ = o(this, is).at(n ? -1 : -2), C = [_[0], _[2]];
    for (const E of o(this, is)) {
      const [R, L, M] = E;
      E[0] = (R - v) / p, E[1] = (L - b) / g, E[2] = (M - b) / g;
    }
    w(this, Mc, {
      x: v,
      y: b,
      width: p,
      height: g,
      lastPoint: C
    });
  }
  getOutlines() {
    o(this, is).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of o(this, is))
      e[3] ? (t.push(...A(this, Dc, lg).call(this, e)), A(this, Cu, Ob).call(this, e)) : (A(this, Tu, Nb).call(this, e), t.push(...A(this, Dc, lg).call(this, e)));
    return A(this, Su, Db).call(this, t);
  }
}
Mc = new WeakMap(), is = new WeakMap(), pi = new WeakMap(), Su = new WeakSet(), Db = function(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [l, c, d] = a;
    e.push([l, c, a], [l, d, a]);
  }
  e.sort((a, l) => a[1] - l[1] || a[0] - l[0]);
  for (let a = 0, l = e.length; a < l; a += 2) {
    const c = e[a][2], d = e[a + 1][2];
    c.push(d), d.push(c), i.add(c), i.add(d);
  }
  const n = [];
  let s;
  for (; i.size > 0; ) {
    const a = i.values().next().value;
    let [l, c, d, h, p] = a;
    i.delete(a);
    let g = l, v = c;
    for (s = [l, d], n.push(s); ; ) {
      let b;
      if (i.has(h))
        b = h;
      else if (i.has(p))
        b = p;
      else
        break;
      i.delete(b), [l, c, d, h, p] = b, g !== l && (s.push(g, v, l, v === c ? c : d), g = l), v = v === c ? d : c;
    }
    s.push(g, v);
  }
  return new hP(n, o(this, Mc));
}, Ya = new WeakSet(), nd = function(t) {
  const e = o(this, pi);
  let i = 0, n = e.length - 1;
  for (; i <= n; ) {
    const s = i + n >> 1, a = e[s][0];
    if (a === t)
      return s;
    a < t ? i = s + 1 : n = s - 1;
  }
  return n + 1;
}, Cu = new WeakSet(), Ob = function([, t, e]) {
  const i = A(this, Ya, nd).call(this, t);
  o(this, pi).splice(i, 0, [t, e]);
}, Tu = new WeakSet(), Nb = function([, t, e]) {
  const i = A(this, Ya, nd).call(this, t);
  for (let n = i; n < o(this, pi).length; n++) {
    const [s, a] = o(this, pi)[n];
    if (s !== t)
      break;
    if (s === t && a === e) {
      o(this, pi).splice(n, 1);
      return;
    }
  }
  for (let n = i - 1; n >= 0; n--) {
    const [s, a] = o(this, pi)[n];
    if (s !== t)
      break;
    if (s === t && a === e) {
      o(this, pi).splice(n, 1);
      return;
    }
  }
}, Dc = new WeakSet(), lg = function(t) {
  const [e, i, n] = t, s = [[e, i, n]], a = A(this, Ya, nd).call(this, n);
  for (let l = 0; l < a; l++) {
    const [c, d] = o(this, pi)[l];
    for (let h = 0, p = s.length; h < p; h++) {
      const [, g, v] = s[h];
      if (!(d <= g || v <= c)) {
        if (g >= c) {
          if (v > d)
            s[h][1] = d;
          else {
            if (p === 1)
              return [];
            s.splice(h, 1), h--, p--;
          }
          continue;
        }
        s[h][2] = c, v > d && s.push([e, d, v]);
      }
    }
  }
  return s;
};
class Bb {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof hg;
  }
}
var Oc, Ka;
class hP extends Bb {
  constructor(e, i) {
    super();
    m(this, Oc, void 0);
    m(this, Ka, void 0);
    w(this, Ka, e), w(this, Oc, i);
  }
  toSVGPath() {
    const e = [];
    for (const i of o(this, Ka)) {
      let [n, s] = i;
      e.push(`M${n} ${s}`);
      for (let a = 2; a < i.length; a += 2) {
        const l = i[a], c = i[a + 1];
        l === n ? (e.push(`V${c}`), s = c) : c === s && (e.push(`H${l}`), n = l);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, i, n, s], a) {
    const l = [], c = n - e, d = s - i;
    for (const h of o(this, Ka)) {
      const p = new Array(h.length);
      for (let g = 0; g < h.length; g += 2)
        p[g] = e + h[g] * c, p[g + 1] = s - h[g + 1] * d;
      l.push(p);
    }
    return l;
  }
  get box() {
    return o(this, Oc);
  }
}
Oc = new WeakMap(), Ka = new WeakMap();
var Mi, wn, Za, Ja, Di, vt, cr, hr, Nc, Bc, Qa, to, ns, $c, Pu, Ru, Uc, cg;
const Ji = class Ji {
  constructor({
    x: t,
    y: e
  }, i, n, s, a, l = 0) {
    m(this, Uc);
    m(this, Mi, void 0);
    m(this, wn, []);
    m(this, Za, void 0);
    m(this, Ja, void 0);
    m(this, Di, []);
    m(this, vt, new Float64Array(18));
    m(this, cr, void 0);
    m(this, hr, void 0);
    m(this, Nc, void 0);
    m(this, Bc, void 0);
    m(this, Qa, void 0);
    m(this, to, void 0);
    m(this, ns, []);
    w(this, Mi, i), w(this, to, s * n), w(this, Ja, a), o(this, vt).set([NaN, NaN, NaN, NaN, t, e], 6), w(this, Za, l), w(this, Bc, o(Ji, $c) * n), w(this, Nc, o(Ji, Ru) * n), w(this, Qa, n), o(this, ns).push(t, e);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(o(this, vt)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var T;
    w(this, cr, t), w(this, hr, e);
    const [i, n, s, a] = o(this, Mi);
    let [l, c, d, h] = o(this, vt).subarray(8, 12);
    const p = t - d, g = e - h, v = Math.hypot(p, g);
    if (v < o(this, Nc))
      return !1;
    const b = v - o(this, Bc), _ = b / v, C = _ * p, E = _ * g;
    let R = l, L = c;
    l = d, c = h, d += C, h += E, (T = o(this, ns)) == null || T.push(t, e);
    const M = -E / b, D = C / b, N = M * o(this, to), U = D * o(this, to);
    return o(this, vt).set(o(this, vt).subarray(2, 8), 0), o(this, vt).set([d + N, h + U], 4), o(this, vt).set(o(this, vt).subarray(14, 18), 12), o(this, vt).set([d - N, h - U], 16), isNaN(o(this, vt)[6]) ? (o(this, Di).length === 0 && (o(this, vt).set([l + N, c + U], 2), o(this, Di).push(NaN, NaN, NaN, NaN, (l + N - i) / s, (c + U - n) / a), o(this, vt).set([l - N, c - U], 14), o(this, wn).push(NaN, NaN, NaN, NaN, (l - N - i) / s, (c - U - n) / a)), o(this, vt).set([R, L, l, c, d, h], 6), !this.isEmpty()) : (o(this, vt).set([R, L, l, c, d, h], 6), Math.abs(Math.atan2(L - c, R - l) - Math.atan2(E, C)) < Math.PI / 2 ? ([l, c, d, h] = o(this, vt).subarray(2, 6), o(this, Di).push(NaN, NaN, NaN, NaN, ((l + d) / 2 - i) / s, ((c + h) / 2 - n) / a), [l, c, R, L] = o(this, vt).subarray(14, 18), o(this, wn).push(NaN, NaN, NaN, NaN, ((R + l) / 2 - i) / s, ((L + c) / 2 - n) / a), !0) : ([R, L, l, c, d, h] = o(this, vt).subarray(0, 6), o(this, Di).push(((R + 5 * l) / 6 - i) / s, ((L + 5 * c) / 6 - n) / a, ((5 * l + d) / 6 - i) / s, ((5 * c + h) / 6 - n) / a, ((l + d) / 2 - i) / s, ((c + h) / 2 - n) / a), [d, h, l, c, R, L] = o(this, vt).subarray(12, 18), o(this, wn).push(((R + 5 * l) / 6 - i) / s, ((L + 5 * c) / 6 - n) / a, ((5 * l + d) / 6 - i) / s, ((5 * c + h) / 6 - n) / a, ((l + d) / 2 - i) / s, ((c + h) / 2 - n) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = o(this, Di), e = o(this, wn), i = o(this, vt).subarray(4, 6), n = o(this, vt).subarray(16, 18), [s, a, l, c] = o(this, Mi), [d, h, p, g] = A(this, Uc, cg).call(this);
    if (isNaN(o(this, vt)[6]) && !this.isEmpty())
      return `M${(o(this, vt)[2] - s) / l} ${(o(this, vt)[3] - a) / c} L${(o(this, vt)[4] - s) / l} ${(o(this, vt)[5] - a) / c} L${d} ${h} L${p} ${g} L${(o(this, vt)[16] - s) / l} ${(o(this, vt)[17] - a) / c} L${(o(this, vt)[14] - s) / l} ${(o(this, vt)[15] - a) / c} Z`;
    const v = [];
    v.push(`M${t[4]} ${t[5]}`);
    for (let b = 6; b < t.length; b += 6)
      isNaN(t[b]) ? v.push(`L${t[b + 4]} ${t[b + 5]}`) : v.push(`C${t[b]} ${t[b + 1]} ${t[b + 2]} ${t[b + 3]} ${t[b + 4]} ${t[b + 5]}`);
    v.push(`L${(i[0] - s) / l} ${(i[1] - a) / c} L${d} ${h} L${p} ${g} L${(n[0] - s) / l} ${(n[1] - a) / c}`);
    for (let b = e.length - 6; b >= 6; b -= 6)
      isNaN(e[b]) ? v.push(`L${e[b + 4]} ${e[b + 5]}`) : v.push(`C${e[b]} ${e[b + 1]} ${e[b + 2]} ${e[b + 3]} ${e[b + 4]} ${e[b + 5]}`);
    return v.push(`L${e[4]} ${e[5]} Z`), v.join(" ");
  }
  getOutlines() {
    var E;
    const t = o(this, Di), e = o(this, wn), i = o(this, vt), n = i.subarray(4, 6), s = i.subarray(16, 18), [a, l, c, d] = o(this, Mi), h = new Float64Array((((E = o(this, ns)) == null ? void 0 : E.length) ?? 0) + 2);
    for (let R = 0, L = h.length - 2; R < L; R += 2)
      h[R] = (o(this, ns)[R] - a) / c, h[R + 1] = (o(this, ns)[R + 1] - l) / d;
    h[h.length - 2] = (o(this, cr) - a) / c, h[h.length - 1] = (o(this, hr) - l) / d;
    const [p, g, v, b] = A(this, Uc, cg).call(this);
    if (isNaN(i[6]) && !this.isEmpty()) {
      const R = new Float64Array(36);
      return R.set([NaN, NaN, NaN, NaN, (i[2] - a) / c, (i[3] - l) / d, NaN, NaN, NaN, NaN, (i[4] - a) / c, (i[5] - l) / d, NaN, NaN, NaN, NaN, p, g, NaN, NaN, NaN, NaN, v, b, NaN, NaN, NaN, NaN, (i[16] - a) / c, (i[17] - l) / d, NaN, NaN, NaN, NaN, (i[14] - a) / c, (i[15] - l) / d], 0), new hg(R, h, o(this, Mi), o(this, Qa), o(this, Za), o(this, Ja));
    }
    const _ = new Float64Array(o(this, Di).length + 24 + o(this, wn).length);
    let C = t.length;
    for (let R = 0; R < C; R += 2) {
      if (isNaN(t[R])) {
        _[R] = _[R + 1] = NaN;
        continue;
      }
      _[R] = t[R], _[R + 1] = t[R + 1];
    }
    _.set([NaN, NaN, NaN, NaN, (n[0] - a) / c, (n[1] - l) / d, NaN, NaN, NaN, NaN, p, g, NaN, NaN, NaN, NaN, v, b, NaN, NaN, NaN, NaN, (s[0] - a) / c, (s[1] - l) / d], C), C += 24;
    for (let R = e.length - 6; R >= 6; R -= 6)
      for (let L = 0; L < 6; L += 2) {
        if (isNaN(e[R + L])) {
          _[C] = _[C + 1] = NaN, C += 2;
          continue;
        }
        _[C] = e[R + L], _[C + 1] = e[R + L + 1], C += 2;
      }
    return _.set([NaN, NaN, NaN, NaN, e[4], e[5]], C), new hg(_, h, o(this, Mi), o(this, Qa), o(this, Za), o(this, Ja));
  }
};
Mi = new WeakMap(), wn = new WeakMap(), Za = new WeakMap(), Ja = new WeakMap(), Di = new WeakMap(), vt = new WeakMap(), cr = new WeakMap(), hr = new WeakMap(), Nc = new WeakMap(), Bc = new WeakMap(), Qa = new WeakMap(), to = new WeakMap(), ns = new WeakMap(), $c = new WeakMap(), Pu = new WeakMap(), Ru = new WeakMap(), Uc = new WeakSet(), cg = function() {
  const t = o(this, vt).subarray(4, 6), e = o(this, vt).subarray(16, 18), [i, n, s, a] = o(this, Mi);
  return [(o(this, cr) + (t[0] - e[0]) / 2 - i) / s, (o(this, hr) + (t[1] - e[1]) / 2 - n) / a, (o(this, cr) + (e[0] - t[0]) / 2 - i) / s, (o(this, hr) + (e[1] - t[1]) / 2 - n) / a];
}, m(Ji, $c, 8), m(Ji, Pu, 2), m(Ji, Ru, o(Ji, $c) + o(Ji, Pu));
let Ad = Ji;
var eo, dr, An, Hc, Ve, jc, qt, ur, Ho, fr, jo, Lu, $b;
class hg extends Bb {
  constructor(e, i, n, s, a, l) {
    super();
    m(this, ur);
    m(this, fr);
    m(this, Lu);
    m(this, eo, void 0);
    m(this, dr, null);
    m(this, An, void 0);
    m(this, Hc, void 0);
    m(this, Ve, void 0);
    m(this, jc, void 0);
    m(this, qt, void 0);
    w(this, qt, e), w(this, Ve, i), w(this, eo, n), w(this, jc, s), w(this, An, a), w(this, Hc, l), A(this, Lu, $b).call(this, l);
    const {
      x: c,
      y: d,
      width: h,
      height: p
    } = o(this, dr);
    for (let g = 0, v = e.length; g < v; g += 2)
      e[g] = (e[g] - c) / h, e[g + 1] = (e[g + 1] - d) / p;
    for (let g = 0, v = i.length; g < v; g += 2)
      i[g] = (i[g] - c) / h, i[g + 1] = (i[g + 1] - d) / p;
  }
  toSVGPath() {
    const e = [`M${o(this, qt)[4]} ${o(this, qt)[5]}`];
    for (let i = 6, n = o(this, qt).length; i < n; i += 6) {
      if (isNaN(o(this, qt)[i])) {
        e.push(`L${o(this, qt)[i + 4]} ${o(this, qt)[i + 5]}`);
        continue;
      }
      e.push(`C${o(this, qt)[i]} ${o(this, qt)[i + 1]} ${o(this, qt)[i + 2]} ${o(this, qt)[i + 3]} ${o(this, qt)[i + 4]} ${o(this, qt)[i + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, i, n, s], a) {
    const l = n - e, c = s - i;
    let d, h;
    switch (a) {
      case 0:
        d = A(this, ur, Ho).call(this, o(this, qt), e, s, l, -c), h = A(this, ur, Ho).call(this, o(this, Ve), e, s, l, -c);
        break;
      case 90:
        d = A(this, fr, jo).call(this, o(this, qt), e, i, l, c), h = A(this, fr, jo).call(this, o(this, Ve), e, i, l, c);
        break;
      case 180:
        d = A(this, ur, Ho).call(this, o(this, qt), n, i, -l, c), h = A(this, ur, Ho).call(this, o(this, Ve), n, i, -l, c);
        break;
      case 270:
        d = A(this, fr, jo).call(this, o(this, qt), n, s, -l, -c), h = A(this, fr, jo).call(this, o(this, Ve), n, s, -l, -c);
        break;
    }
    return {
      outline: Array.from(d),
      points: [Array.from(h)]
    };
  }
  get box() {
    return o(this, dr);
  }
  getNewOutline(e, i) {
    const {
      x: n,
      y: s,
      width: a,
      height: l
    } = o(this, dr), [c, d, h, p] = o(this, eo), g = a * h, v = l * p, b = n * h + c, _ = s * p + d, C = new Ad({
      x: o(this, Ve)[0] * g + b,
      y: o(this, Ve)[1] * v + _
    }, o(this, eo), o(this, jc), e, o(this, Hc), i ?? o(this, An));
    for (let E = 2; E < o(this, Ve).length; E += 2)
      C.add({
        x: o(this, Ve)[E] * g + b,
        y: o(this, Ve)[E + 1] * v + _
      });
    return C.getOutlines();
  }
}
eo = new WeakMap(), dr = new WeakMap(), An = new WeakMap(), Hc = new WeakMap(), Ve = new WeakMap(), jc = new WeakMap(), qt = new WeakMap(), ur = new WeakSet(), Ho = function(e, i, n, s, a) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = i + e[c] * s, l[c + 1] = n + e[c + 1] * a;
  return l;
}, fr = new WeakSet(), jo = function(e, i, n, s, a) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = i + e[c + 1] * s, l[c + 1] = n + e[c] * a;
  return l;
}, Lu = new WeakSet(), $b = function(e) {
  const i = o(this, qt);
  let n = i[4], s = i[5], a = n, l = s, c = n, d = s, h = n, p = s;
  const g = e ? Math.max : Math.min;
  for (let E = 6, R = i.length; E < R; E += 6) {
    if (isNaN(i[E]))
      a = Math.min(a, i[E + 4]), l = Math.min(l, i[E + 5]), c = Math.max(c, i[E + 4]), d = Math.max(d, i[E + 5]), p < i[E + 5] ? (h = i[E + 4], p = i[E + 5]) : p === i[E + 5] && (h = g(h, i[E + 4]));
    else {
      const L = Z.bezierBoundingBox(n, s, ...i.slice(E, E + 6));
      a = Math.min(a, L[0]), l = Math.min(l, L[1]), c = Math.max(c, L[2]), d = Math.max(d, L[3]), p < L[3] ? (h = L[2], p = L[3]) : p === L[3] && (h = g(h, L[2]));
    }
    n = i[E + 4], s = i[E + 5];
  }
  const v = a - o(this, An), b = l - o(this, An), _ = c - a + 2 * o(this, An), C = d - l + 2 * o(this, An);
  w(this, dr, {
    x: v,
    y: b,
    width: _,
    height: C,
    lastPoint: [h, p]
  });
};
var zc, Gc, gi, pr, io, Qt, Vc, no, Wc, qc, ss, so, Xc, dg, Yc, ug, ku, Ub, _n, _s, Iu, Hb, Oi, Bn;
const Qi = class Qi {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, Xc);
    m(this, Yc);
    m(this, ku);
    m(this, _n);
    m(this, Iu);
    m(this, Oi);
    m(this, zc, A(this, ku, Ub).bind(this));
    m(this, Gc, A(this, Iu, Hb).bind(this));
    m(this, gi, null);
    m(this, pr, null);
    m(this, io, void 0);
    m(this, Qt, null);
    m(this, Vc, !1);
    m(this, no, !1);
    m(this, Wc, null);
    m(this, qc, void 0);
    m(this, ss, null);
    m(this, so, void 0);
    var i;
    t ? (w(this, no, !1), w(this, so, ot.HIGHLIGHT_COLOR), w(this, Wc, t)) : (w(this, no, !0), w(this, so, ot.HIGHLIGHT_DEFAULT_COLOR)), w(this, ss, (t == null ? void 0 : t._uiManager) || e), w(this, qc, o(this, ss)._eventBus), w(this, io, (t == null ? void 0 : t.color) || ((i = o(this, ss)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return _t(this, "_keyboardManager", new Sh([[["Escape", "mac+Escape"], Qi.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Qi.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Qi.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Qi.prototype._moveToPrevious], [["Home", "mac+Home"], Qi.prototype._moveToBeginning], [["End", "mac+End"], Qi.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = w(this, gi, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0), t.addEventListener("click", A(this, _n, _s).bind(this)), t.addEventListener("keydown", o(this, zc));
    const e = w(this, pr, document.createElement("span"));
    return e.className = "swatch", e.setAttribute("aria-hidden", !0), e.style.backgroundColor = o(this, io), t.append(e), t;
  }
  renderMainDropdown() {
    const t = w(this, Qt, A(this, Xc, dg).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === o(this, gi)) {
      A(this, _n, _s).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && A(this, Yc, ug).call(this, e, t);
  }
  _moveToNext(t) {
    var e, i;
    if (!o(this, Oi, Bn)) {
      A(this, _n, _s).call(this, t);
      return;
    }
    if (t.target === o(this, gi)) {
      (e = o(this, Qt).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }
  _moveToPrevious(t) {
    var e, i;
    if (t.target === ((e = o(this, Qt)) == null ? void 0 : e.firstChild) || t.target === o(this, gi)) {
      o(this, Oi, Bn) && this._hideDropdownFromKeyboard();
      return;
    }
    o(this, Oi, Bn) || A(this, _n, _s).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!o(this, Oi, Bn)) {
      A(this, _n, _s).call(this, t);
      return;
    }
    (e = o(this, Qt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!o(this, Oi, Bn)) {
      A(this, _n, _s).call(this, t);
      return;
    }
    (e = o(this, Qt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t;
    (t = o(this, Qt)) == null || t.classList.add("hidden"), window.removeEventListener("pointerdown", o(this, Gc));
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!o(this, no)) {
      if (!o(this, Oi, Bn)) {
        (t = o(this, Wc)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), o(this, gi).focus({
        preventScroll: !0,
        focusVisible: o(this, Vc)
      });
    }
  }
  updateColor(t) {
    if (o(this, pr) && (o(this, pr).style.backgroundColor = t), !o(this, Qt))
      return;
    const e = o(this, ss).highlightColors.values();
    for (const i of o(this, Qt).children)
      i.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = o(this, gi)) == null || t.remove(), w(this, gi, null), w(this, pr, null), (e = o(this, Qt)) == null || e.remove(), w(this, Qt, null);
  }
};
zc = new WeakMap(), Gc = new WeakMap(), gi = new WeakMap(), pr = new WeakMap(), io = new WeakMap(), Qt = new WeakMap(), Vc = new WeakMap(), no = new WeakMap(), Wc = new WeakMap(), qc = new WeakMap(), ss = new WeakMap(), so = new WeakMap(), Xc = new WeakSet(), dg = function() {
  const t = document.createElement("div");
  t.addEventListener("contextmenu", Ne), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [e, i] of o(this, ss).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = e, n.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${e}`);
    const s = document.createElement("span");
    n.append(s), s.className = "swatch", s.style.backgroundColor = i, n.setAttribute("aria-selected", i === o(this, io)), n.addEventListener("click", A(this, Yc, ug).bind(this, i)), t.append(n);
  }
  return t.addEventListener("keydown", o(this, zc)), t;
}, Yc = new WeakSet(), ug = function(t, e) {
  e.stopPropagation(), o(this, qc).dispatch("switchannotationeditorparams", {
    source: this,
    type: o(this, so),
    value: t
  });
}, ku = new WeakSet(), Ub = function(t) {
  Qi._keyboardManager.exec(this, t);
}, _n = new WeakSet(), _s = function(t) {
  if (o(this, Oi, Bn)) {
    this.hideDropdown();
    return;
  }
  if (w(this, Vc, t.detail === 0), window.addEventListener("pointerdown", o(this, Gc)), o(this, Qt)) {
    o(this, Qt).classList.remove("hidden");
    return;
  }
  const e = w(this, Qt, A(this, Xc, dg).call(this));
  o(this, gi).append(e);
}, Iu = new WeakSet(), Hb = function(t) {
  var e;
  (e = o(this, Qt)) != null && e.contains(t.target) || this.hideDropdown();
}, Oi = new WeakSet(), Bn = function() {
  return o(this, Qt) && !o(this, Qt).classList.contains("hidden");
};
let _d = Qi;
var ro, Kc, rs, gr, ao, ii, Zc, Jc, mr, mi, Ce, We, Fu, oo, vr, te, lo, Ni, Qc, th, fg, eh, pg, Mu, jb, Du, zb, Ou, Gb, ih, gg, br, zo, as, Kr, Nu, Vb, co, sd, yr, Go, Bu, Wb, $u, qb, Uu, Xb, Hu, Yb;
const At = class At extends Lt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, th);
    m(this, eh);
    m(this, Mu);
    m(this, Du);
    m(this, Ou);
    m(this, ih);
    m(this, br);
    m(this, Nu);
    m(this, co);
    m(this, yr);
    m(this, Bu);
    m(this, $u);
    m(this, ro, null);
    m(this, Kc, 0);
    m(this, rs, void 0);
    m(this, gr, null);
    m(this, ao, null);
    m(this, ii, null);
    m(this, Zc, null);
    m(this, Jc, 0);
    m(this, mr, null);
    m(this, mi, null);
    m(this, Ce, null);
    m(this, We, !1);
    m(this, Fu, A(this, Nu, Vb).bind(this));
    m(this, oo, null);
    m(this, vr, void 0);
    m(this, te, null);
    m(this, lo, "");
    m(this, Ni, void 0);
    m(this, Qc, "");
    this.color = e.color || At._defaultColor, w(this, Ni, e.thickness || At._defaultThickness), w(this, vr, e.opacity || At._defaultOpacity), w(this, rs, e.boxes || null), w(this, Qc, e.methodOfCreation || ""), w(this, lo, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (w(this, We, !0), A(this, eh, pg).call(this, e), A(this, br, zo).call(this)) : (w(this, ro, e.anchorNode), w(this, Kc, e.anchorOffset), w(this, Zc, e.focusNode), w(this, Jc, e.focusOffset), A(this, th, fg).call(this), A(this, br, zo).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = At.prototype;
    return _t(this, "_keyboardManager", new Sh([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: o(this, We) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: o(this, Ni),
      methodOfCreation: o(this, Qc)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, i) {
    var n;
    Lt.initialize(e, i), At._defaultColor || (At._defaultColor = ((n = i.highlightColors) == null ? void 0 : n.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case ot.HIGHLIGHT_DEFAULT_COLOR:
        At._defaultColor = i;
        break;
      case ot.HIGHLIGHT_THICKNESS:
        At._defaultThickness = i;
        break;
    }
  }
  translateInPage(e, i) {
  }
  get toolbarPosition() {
    return o(this, oo);
  }
  updateParams(e, i) {
    switch (e) {
      case ot.HIGHLIGHT_COLOR:
        A(this, Mu, jb).call(this, i);
        break;
      case ot.HIGHLIGHT_THICKNESS:
        A(this, Du, zb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ot.HIGHLIGHT_DEFAULT_COLOR, At._defaultColor], [ot.HIGHLIGHT_THICKNESS, At._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[ot.HIGHLIGHT_COLOR, this.color || At._defaultColor], [ot.HIGHLIGHT_THICKNESS, o(this, Ni) || At._defaultThickness], [ot.HIGHLIGHT_FREE, o(this, We)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (w(this, ao, new _d({
      editor: this
    })), e.addColorPicker(o(this, ao))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, yr, Go).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, i) {
    return super.getRect(e, i, A(this, yr, Go).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    A(this, ih, gg).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, br, zo).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var n;
    let i = !1;
    this.parent && !e ? A(this, ih, gg).call(this) : e && (A(this, br, zo).call(this, e), i = !this.parent && ((n = this.div) == null ? void 0 : n.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }
  rotate(e) {
    var s, a, l;
    const {
      drawLayer: i
    } = this.parent;
    let n;
    o(this, We) ? (e = (e - this.rotation + 360) % 360, n = A(s = At, as, Kr).call(s, o(this, mi).box, e)) : n = A(a = At, as, Kr).call(a, this, e), i.rotate(o(this, Ce), e), i.rotate(o(this, te), e), i.updateBox(o(this, Ce), n), i.updateBox(o(this, te), A(l = At, as, Kr).call(l, o(this, ii).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    o(this, lo) && (e.setAttribute("aria-label", o(this, lo)), e.setAttribute("role", "mark")), o(this, We) ? e.classList.add("free") : this.div.addEventListener("keydown", o(this, Fu));
    const i = w(this, mr, document.createElement("div"));
    e.append(i), i.setAttribute("aria-hidden", "true"), i.className = "internal", i.style.clipPath = o(this, gr);
    const [n, s] = this.parentDimensions;
    return this.setDims(this.width * n, this.height * s), vd(this, o(this, mr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.parent.drawLayer.addClass(o(this, te), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(o(this, te), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, co, sd).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, co, sd).call(this, !1);
        break;
    }
  }
  select() {
    var e, i;
    super.select(), o(this, te) && ((e = this.parent) == null || e.drawLayer.removeClass(o(this, te), "hovered"), (i = this.parent) == null || i.drawLayer.addClass(o(this, te), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), o(this, te) && ((e = this.parent) == null || e.drawLayer.removeClass(o(this, te), "selected"), o(this, We) || A(this, co, sd).call(this, !1));
  }
  get _mustFixPosition() {
    return !o(this, We);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(o(this, Ce), e), this.parent.drawLayer.show(o(this, te), e));
  }
  static startHighlighting(e, i, {
    target: n,
    x: s,
    y: a
  }) {
    const {
      x: l,
      y: c,
      width: d,
      height: h
    } = n.getBoundingClientRect(), p = (_) => {
      A(this, Uu, Xb).call(this, e, _);
    }, g = {
      capture: !0,
      passive: !1
    }, v = (_) => {
      _.preventDefault(), _.stopPropagation();
    }, b = (_) => {
      n.removeEventListener("pointermove", p), window.removeEventListener("blur", b), window.removeEventListener("pointerup", b), window.removeEventListener("pointerdown", v, g), window.removeEventListener("contextmenu", Ne), A(this, Hu, Yb).call(this, e, _);
    };
    window.addEventListener("blur", b), window.addEventListener("pointerup", b), window.addEventListener("pointerdown", v, g), window.addEventListener("contextmenu", Ne), n.addEventListener("pointermove", p), this._freeHighlight = new Ad({
      x: s,
      y: a
    }, [l, c, d, h], e.scale, this._defaultThickness / 2, i, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(e, i, n) {
    var _;
    const s = super.deserialize(e, i, n), {
      rect: [a, l, c, d],
      color: h,
      quadPoints: p
    } = e;
    s.color = Z.makeHexColor(...h), w(s, vr, e.opacity);
    const [g, v] = s.pageDimensions;
    s.width = (c - a) / g, s.height = (d - l) / v;
    const b = w(s, rs, []);
    for (let C = 0; C < p.length; C += 8)
      b.push({
        x: (p[4] - c) / g,
        y: (d - (1 - p[C + 5])) / v,
        width: (p[C + 2] - p[C]) / g,
        height: (p[C + 5] - p[C + 1]) / v
      });
    return A(_ = s, th, fg).call(_), s;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    const i = this.getRect(0, 0), n = Lt._colorManager.convert(this.color);
    return {
      annotationType: yt.HIGHLIGHT,
      color: n,
      opacity: o(this, vr),
      thickness: o(this, Ni),
      quadPoints: A(this, Bu, Wb).call(this),
      outlines: A(this, $u, qb).call(this, i),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: A(this, yr, Go).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
ro = new WeakMap(), Kc = new WeakMap(), rs = new WeakMap(), gr = new WeakMap(), ao = new WeakMap(), ii = new WeakMap(), Zc = new WeakMap(), Jc = new WeakMap(), mr = new WeakMap(), mi = new WeakMap(), Ce = new WeakMap(), We = new WeakMap(), Fu = new WeakMap(), oo = new WeakMap(), vr = new WeakMap(), te = new WeakMap(), lo = new WeakMap(), Ni = new WeakMap(), Qc = new WeakMap(), th = new WeakSet(), fg = function() {
  const e = new og(o(this, rs), 1e-3);
  w(this, mi, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = o(this, mi).box;
  const i = new og(o(this, rs), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  w(this, ii, i.getOutlines());
  const {
    lastPoint: n
  } = o(this, ii).box;
  w(this, oo, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height]);
}, eh = new WeakSet(), pg = function({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: n
}) {
  var p, g;
  if (w(this, mi, e), w(this, ii, e.getNewOutline(o(this, Ni) / 2 + 1.5, 25e-4)), i >= 0)
    w(this, Ce, i), w(this, gr, n), this.parent.drawLayer.finalizeLine(i, e), w(this, te, this.parent.drawLayer.highlightOutline(o(this, ii)));
  else if (this.parent) {
    const v = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(o(this, Ce), e), this.parent.drawLayer.updateBox(o(this, Ce), A(p = At, as, Kr).call(p, o(this, mi).box, (v - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(o(this, te), o(this, ii)), this.parent.drawLayer.updateBox(o(this, te), A(g = At, as, Kr).call(g, o(this, ii).box, v));
  }
  const {
    x: a,
    y: l,
    width: c,
    height: d
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = l, this.width = c, this.height = d;
      break;
    case 90: {
      const [v, b] = this.parentDimensions;
      this.x = l, this.y = 1 - a, this.width = c * b / v, this.height = d * v / b;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - l, this.width = c, this.height = d;
      break;
    case 270: {
      const [v, b] = this.parentDimensions;
      this.x = 1 - l, this.y = a, this.width = c * b / v, this.height = d * v / b;
      break;
    }
  }
  const {
    lastPoint: h
  } = o(this, ii).box;
  w(this, oo, [(h[0] - a) / c, (h[1] - l) / d]);
}, Mu = new WeakSet(), jb = function(e) {
  const i = (s) => {
    var a, l;
    this.color = s, (a = this.parent) == null || a.drawLayer.changeColor(o(this, Ce), s), (l = o(this, ao)) == null || l.updateColor(s);
  }, n = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Du = new WeakSet(), zb = function(e) {
  const i = o(this, Ni), n = (s) => {
    w(this, Ni, s), A(this, Ou, Gb).call(this, s);
  };
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Ou = new WeakSet(), Gb = function(e) {
  if (!o(this, We))
    return;
  A(this, eh, pg).call(this, {
    highlightOutlines: o(this, mi).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [i, n] = this.parentDimensions;
  this.setDims(this.width * i, this.height * n);
}, ih = new WeakSet(), gg = function() {
  o(this, Ce) === null || !this.parent || (this.parent.drawLayer.remove(o(this, Ce)), w(this, Ce, null), this.parent.drawLayer.remove(o(this, te)), w(this, te, null));
}, br = new WeakSet(), zo = function(e = this.parent) {
  o(this, Ce) === null && ({
    id: $e(this, Ce)._,
    clipPathId: $e(this, gr)._
  } = e.drawLayer.highlight(o(this, mi), this.color, o(this, vr)), w(this, te, e.drawLayer.highlightOutline(o(this, ii))), o(this, mr) && (o(this, mr).style.clipPath = o(this, gr)));
}, as = new WeakSet(), Kr = function({
  x: e,
  y: i,
  width: n,
  height: s
}, a) {
  switch (a) {
    case 90:
      return {
        x: 1 - i - s,
        y: e,
        width: s,
        height: n
      };
    case 180:
      return {
        x: 1 - e - n,
        y: 1 - i - s,
        width: n,
        height: s
      };
    case 270:
      return {
        x: i,
        y: 1 - e - n,
        width: s,
        height: n
      };
  }
  return {
    x: e,
    y: i,
    width: n,
    height: s
  };
}, Nu = new WeakSet(), Vb = function(e) {
  At._keyboardManager.exec(this, e);
}, co = new WeakSet(), sd = function(e) {
  if (!o(this, ro))
    return;
  const i = window.getSelection();
  e ? i.setPosition(o(this, ro), o(this, Kc)) : i.setPosition(o(this, Zc), o(this, Jc));
}, yr = new WeakSet(), Go = function() {
  return o(this, We) ? this.rotation : 0;
}, Bu = new WeakSet(), Wb = function() {
  if (o(this, We))
    return null;
  const [e, i] = this.pageDimensions, n = o(this, rs), s = new Array(n.length * 8);
  let a = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: h
  } of n) {
    const p = l * e, g = (1 - c - h) * i;
    s[a] = s[a + 4] = p, s[a + 1] = s[a + 3] = g, s[a + 2] = s[a + 6] = p + d * e, s[a + 5] = s[a + 7] = g + h * i, a += 8;
  }
  return s;
}, $u = new WeakSet(), qb = function(e) {
  return o(this, mi).serialize(e, A(this, yr, Go).call(this));
}, Uu = new WeakSet(), Xb = function(e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Hu = new WeakSet(), Yb = function(e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.removeFreeHighlight(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, m(At, as), m(At, Uu), m(At, Hu), lt(At, "_defaultColor", null), lt(At, "_defaultOpacity", 1), lt(At, "_defaultThickness", 12), lt(At, "_l10nPromise"), lt(At, "_type", "highlight"), lt(At, "_editorType", yt.HIGHLIGHT), lt(At, "_freeHighlightId", -1), lt(At, "_freeHighlight", null), lt(At, "_freeHighlightClipId", "");
let Ed = At;
var wr, Ar, nh, sh, rh, _r, Bi, En, ni, Er, xr, Sr, Cr, Tr, os, ju, Kb, zu, Zb, Gu, Jb, Vu, Qb, ah, vg, Wu, ty, oh, bg, qu, ey, Xu, iy, Yu, ny, Ku, sy, Zu, ry, xn, Es, lh, yg, ho, rd, uo, ad, ls, Zr, ch, wg, fo, od, Ju, ay, hh, Ag, Qu, oy, tf, ly, dh, _g, po, ld, Pr, Vo;
const Bt = class Bt extends Lt {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, ju);
    m(this, zu);
    m(this, Gu);
    m(this, Vu);
    m(this, ah);
    m(this, Wu);
    m(this, oh);
    m(this, qu);
    m(this, Xu);
    m(this, Yu);
    m(this, Ku);
    m(this, Zu);
    m(this, xn);
    m(this, lh);
    m(this, ho);
    m(this, uo);
    m(this, ls);
    m(this, ch);
    m(this, fo);
    m(this, tf);
    m(this, dh);
    m(this, po);
    m(this, Pr);
    m(this, wr, 0);
    m(this, Ar, 0);
    m(this, nh, this.canvasPointermove.bind(this));
    m(this, sh, this.canvasPointerleave.bind(this));
    m(this, rh, this.canvasPointerup.bind(this));
    m(this, _r, this.canvasPointerdown.bind(this));
    m(this, Bi, null);
    m(this, En, new Path2D());
    m(this, ni, !1);
    m(this, Er, !1);
    m(this, xr, !1);
    m(this, Sr, null);
    m(this, Cr, 0);
    m(this, Tr, 0);
    m(this, os, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, i) {
    Lt.initialize(e, i);
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case ot.INK_THICKNESS:
        Bt._defaultThickness = i;
        break;
      case ot.INK_COLOR:
        Bt._defaultColor = i;
        break;
      case ot.INK_OPACITY:
        Bt._defaultOpacity = i / 100;
        break;
    }
  }
  updateParams(e, i) {
    switch (e) {
      case ot.INK_THICKNESS:
        A(this, ju, Kb).call(this, i);
        break;
      case ot.INK_COLOR:
        A(this, zu, Zb).call(this, i);
        break;
      case ot.INK_OPACITY:
        A(this, Gu, Jb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ot.INK_THICKNESS, Bt._defaultThickness], [ot.INK_COLOR, Bt._defaultColor || Lt._defaultLineColor], [ot.INK_OPACITY, Math.round(Bt._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[ot.INK_THICKNESS, this.thickness || Bt._defaultThickness], [ot.INK_COLOR, this.color || Bt._defaultColor || Lt._defaultLineColor], [ot.INK_OPACITY, Math.round(100 * (this.opacity ?? Bt._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (A(this, ho, rd).call(this), A(this, uo, ad).call(this)), this.isAttachedToDOM || (this.parent.add(this), A(this, ls, Zr).call(this)), A(this, Pr, Vo).call(this)));
  }
  remove() {
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, o(this, Bi) && (clearTimeout(o(this, Bi)), w(this, Bi, null)), o(this, Sr).disconnect(), w(this, Sr, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, i] = this.parentDimensions, n = this.width * e, s = this.height * i;
    this.setDimensions(n, s);
  }
  enableEditMode() {
    o(this, ni) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", o(this, _r)));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", o(this, _r)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    o(this, ni) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), w(this, ni, !0), this.div.classList.add("disabled"), A(this, Pr, Vo).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || o(this, ni) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), A(this, Wu, ty).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), A(this, oh, bg).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), A(this, lh, yg).call(this, e);
  }
  canvasPointerleave(e) {
    A(this, lh, yg).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && o(this, ni);
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    this.width && (e = this.x, i = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [n, s, a, l] = A(this, Vu, Qb).call(this);
    if (this.setAt(n, s, 0, 0), this.setDims(a, l), A(this, ho, rd).call(this), this.width) {
      const [c, d] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * d), this.setAt(e * c, i * d, this.width * c, this.height * d), w(this, xr, !0), A(this, ls, Zr).call(this), this.setDims(this.width * c, this.height * d), A(this, xn, Es).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return A(this, uo, ad).call(this), this.div;
  }
  setDimensions(e, i) {
    const n = Math.round(e), s = Math.round(i);
    if (o(this, Cr) === n && o(this, Tr) === s)
      return;
    w(this, Cr, n), w(this, Tr, s), this.canvas.style.visibility = "hidden";
    const [a, l] = this.parentDimensions;
    this.width = e / a, this.height = i / l, this.fixAndSetPosition(), o(this, ni) && A(this, ch, wg).call(this, e, i), A(this, ls, Zr).call(this), A(this, xn, Es).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(e, i, n) {
    var C, E, R;
    if (e instanceof Tb)
      return null;
    const s = super.deserialize(e, i, n);
    s.thickness = e.thickness, s.color = Z.makeHexColor(...e.color), s.opacity = e.opacity;
    const [a, l] = s.pageDimensions, c = s.width * a, d = s.height * l, h = s.parentScale, p = e.thickness / 2;
    w(s, ni, !0), w(s, Cr, Math.round(c)), w(s, Tr, Math.round(d));
    const {
      paths: g,
      rect: v,
      rotation: b
    } = e;
    for (let {
      bezier: L
    } of g) {
      L = A(C = Bt, Qu, oy).call(C, L, v, b);
      const M = [];
      s.paths.push(M);
      let D = h * (L[0] - p), N = h * (L[1] - p);
      for (let S = 2, T = L.length; S < T; S += 6) {
        const I = h * (L[S] - p), k = h * (L[S + 1] - p), H = h * (L[S + 2] - p), j = h * (L[S + 3] - p), z = h * (L[S + 4] - p), Y = h * (L[S + 5] - p);
        M.push([[D, N], [I, k], [H, j], [z, Y]]), D = z, N = Y;
      }
      const U = A(this, Ju, ay).call(this, M);
      s.bezierPath2D.push(U);
    }
    const _ = A(E = s, dh, _g).call(E);
    return w(s, Ar, Math.max(Lt.MIN_SIZE, _[2] - _[0])), w(s, wr, Math.max(Lt.MIN_SIZE, _[3] - _[1])), A(R = s, ch, wg).call(R, c, d), s;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), i = Lt._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: yt.INK,
      color: i,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: A(this, tf, ly).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
wr = new WeakMap(), Ar = new WeakMap(), nh = new WeakMap(), sh = new WeakMap(), rh = new WeakMap(), _r = new WeakMap(), Bi = new WeakMap(), En = new WeakMap(), ni = new WeakMap(), Er = new WeakMap(), xr = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Tr = new WeakMap(), os = new WeakMap(), ju = new WeakSet(), Kb = function(e) {
  const i = (s) => {
    this.thickness = s, A(this, Pr, Vo).call(this);
  }, n = this.thickness;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, zu = new WeakSet(), Zb = function(e) {
  const i = (s) => {
    this.color = s, A(this, xn, Es).call(this);
  }, n = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Gu = new WeakSet(), Jb = function(e) {
  const i = (s) => {
    this.opacity = s, A(this, xn, Es).call(this);
  };
  e /= 100;
  const n = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ot.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Vu = new WeakSet(), Qb = function() {
  const {
    parentRotation: e,
    parentDimensions: [i, n]
  } = this;
  switch (e) {
    case 90:
      return [0, n, n, i];
    case 180:
      return [i, n, i, n];
    case 270:
      return [i, 0, n, i];
    default:
      return [0, 0, i, n];
  }
}, ah = new WeakSet(), vg = function() {
  const {
    ctx: e,
    color: i,
    opacity: n,
    thickness: s,
    parentScale: a,
    scaleFactor: l
  } = this;
  e.lineWidth = s * a / l, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${i}${MC(n)}`;
}, Wu = new WeakSet(), ty = function(e, i) {
  this.canvas.addEventListener("contextmenu", Ne), this.canvas.addEventListener("pointerleave", o(this, sh)), this.canvas.addEventListener("pointermove", o(this, nh)), this.canvas.addEventListener("pointerup", o(this, rh)), this.canvas.removeEventListener("pointerdown", o(this, _r)), this.isEditing = !0, o(this, xr) || (w(this, xr, !0), A(this, ls, Zr).call(this), this.thickness || (this.thickness = Bt._defaultThickness), this.color || (this.color = Bt._defaultColor || Lt._defaultLineColor), this.opacity ?? (this.opacity = Bt._defaultOpacity)), this.currentPath.push([e, i]), w(this, Er, !1), A(this, ah, vg).call(this), w(this, os, () => {
    A(this, Yu, ny).call(this), o(this, os) && window.requestAnimationFrame(o(this, os));
  }), window.requestAnimationFrame(o(this, os));
}, oh = new WeakSet(), bg = function(e, i) {
  const [n, s] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === n && i === s)
    return;
  const a = this.currentPath;
  let l = o(this, En);
  if (a.push([e, i]), w(this, Er, !0), a.length <= 2) {
    l.moveTo(...a[0]), l.lineTo(e, i);
    return;
  }
  a.length === 3 && (w(this, En, l = new Path2D()), l.moveTo(...a[0])), A(this, Ku, sy).call(this, l, ...a.at(-3), ...a.at(-2), e, i);
}, qu = new WeakSet(), ey = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  o(this, En).lineTo(...e);
}, Xu = new WeakSet(), iy = function(e, i) {
  w(this, os, null), e = Math.min(Math.max(e, 0), this.canvas.width), i = Math.min(Math.max(i, 0), this.canvas.height), A(this, oh, bg).call(this, e, i), A(this, qu, ey).call(this);
  let n;
  if (this.currentPath.length !== 1)
    n = A(this, Zu, ry).call(this);
  else {
    const d = [e, i];
    n = [[d, d.slice(), d.slice(), d]];
  }
  const s = o(this, En), a = this.currentPath;
  this.currentPath = [], w(this, En, new Path2D());
  const l = () => {
    this.allRawPaths.push(a), this.paths.push(n), this.bezierPath2D.push(s), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (A(this, ho, rd).call(this), A(this, uo, ad).call(this)), A(this, Pr, Vo).call(this));
  };
  this.addCommands({
    cmd: l,
    undo: c,
    mustExec: !0
  });
}, Yu = new WeakSet(), ny = function() {
  if (!o(this, Er))
    return;
  w(this, Er, !1);
  const e = Math.ceil(this.thickness * this.parentScale), i = this.currentPath.slice(-3), n = i.map((l) => l[0]), s = i.map((l) => l[1]);
  Math.min(...n) - e, Math.max(...n) + e, Math.min(...s) - e, Math.max(...s) + e;
  const {
    ctx: a
  } = this;
  a.save(), a.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const l of this.bezierPath2D)
    a.stroke(l);
  a.stroke(o(this, En)), a.restore();
}, Ku = new WeakSet(), sy = function(e, i, n, s, a, l, c) {
  const d = (i + s) / 2, h = (n + a) / 2, p = (s + l) / 2, g = (a + c) / 2;
  e.bezierCurveTo(d + 2 * (s - d) / 3, h + 2 * (a - h) / 3, p + 2 * (s - p) / 3, g + 2 * (a - g) / 3, p, g);
}, Zu = new WeakSet(), ry = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const i = [];
  let n, [s, a] = e[0];
  for (n = 1; n < e.length - 2; n++) {
    const [v, b] = e[n], [_, C] = e[n + 1], E = (v + _) / 2, R = (b + C) / 2, L = [s + 2 * (v - s) / 3, a + 2 * (b - a) / 3], M = [E + 2 * (v - E) / 3, R + 2 * (b - R) / 3];
    i.push([[s, a], L, M, [E, R]]), [s, a] = [E, R];
  }
  const [l, c] = e[n], [d, h] = e[n + 1], p = [s + 2 * (l - s) / 3, a + 2 * (c - a) / 3], g = [d + 2 * (l - d) / 3, h + 2 * (c - h) / 3];
  return i.push([[s, a], p, g, [d, h]]), i;
}, xn = new WeakSet(), Es = function() {
  if (this.isEmpty()) {
    A(this, fo, od).call(this);
    return;
  }
  A(this, ah, vg).call(this);
  const {
    canvas: e,
    ctx: i
  } = this;
  i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, e.width, e.height), A(this, fo, od).call(this);
  for (const n of this.bezierPath2D)
    i.stroke(n);
}, lh = new WeakSet(), yg = function(e) {
  this.canvas.removeEventListener("pointerleave", o(this, sh)), this.canvas.removeEventListener("pointermove", o(this, nh)), this.canvas.removeEventListener("pointerup", o(this, rh)), this.canvas.addEventListener("pointerdown", o(this, _r)), o(this, Bi) && clearTimeout(o(this, Bi)), w(this, Bi, setTimeout(() => {
    w(this, Bi, null), this.canvas.removeEventListener("contextmenu", Ne);
  }, 10)), A(this, Xu, iy).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, ho = new WeakSet(), rd = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, uo = new WeakSet(), ad = function() {
  w(this, Sr, new ResizeObserver((e) => {
    const i = e[0].contentRect;
    i.width && i.height && this.setDimensions(i.width, i.height);
  })), o(this, Sr).observe(this.div);
}, ls = new WeakSet(), Zr = function() {
  if (!o(this, xr))
    return;
  const [e, i] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * i), A(this, fo, od).call(this);
}, ch = new WeakSet(), wg = function(e, i) {
  const n = A(this, po, ld).call(this), s = (e - n) / o(this, Ar), a = (i - n) / o(this, wr);
  this.scaleFactor = Math.min(s, a);
}, fo = new WeakSet(), od = function() {
  const e = A(this, po, ld).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, Ju = new WeakSet(), ay = function(e) {
  const i = new Path2D();
  for (let n = 0, s = e.length; n < s; n++) {
    const [a, l, c, d] = e[n];
    n === 0 && i.moveTo(...a), i.bezierCurveTo(l[0], l[1], c[0], c[1], d[0], d[1]);
  }
  return i;
}, hh = new WeakSet(), Ag = function(e, i, n) {
  const [s, a, l, c] = i;
  switch (n) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] += s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const p = e[d];
        e[d] = e[d + 1] + s, e[d + 1] = p + a;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] += a;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const p = e[d];
        e[d] = l - e[d + 1], e[d + 1] = c - p;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Qu = new WeakSet(), oy = function(e, i, n) {
  const [s, a, l, c] = i;
  switch (n) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] -= s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const p = e[d];
        e[d] = e[d + 1] - a, e[d + 1] = p - s;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] -= a;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const p = e[d];
        e[d] = c - e[d + 1], e[d + 1] = l - p;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, tf = new WeakSet(), ly = function(e, i, n, s) {
  var h, p;
  const a = [], l = this.thickness / 2, c = e * i + l, d = e * n + l;
  for (const g of this.paths) {
    const v = [], b = [];
    for (let _ = 0, C = g.length; _ < C; _++) {
      const [E, R, L, M] = g[_];
      if (E[0] === M[0] && E[1] === M[1] && C === 1) {
        const j = e * E[0] + c, z = e * E[1] + d;
        v.push(j, z), b.push(j, z);
        break;
      }
      const D = e * E[0] + c, N = e * E[1] + d, U = e * R[0] + c, S = e * R[1] + d, T = e * L[0] + c, I = e * L[1] + d, k = e * M[0] + c, H = e * M[1] + d;
      _ === 0 && (v.push(D, N), b.push(D, N)), v.push(U, S, T, I, k, H), b.push(U, S), _ === C - 1 && b.push(k, H);
    }
    a.push({
      bezier: A(h = Bt, hh, Ag).call(h, v, s, this.rotation),
      points: A(p = Bt, hh, Ag).call(p, b, s, this.rotation)
    });
  }
  return a;
}, dh = new WeakSet(), _g = function() {
  let e = 1 / 0, i = -1 / 0, n = 1 / 0, s = -1 / 0;
  for (const a of this.paths)
    for (const [l, c, d, h] of a) {
      const p = Z.bezierBoundingBox(...l, ...c, ...d, ...h);
      e = Math.min(e, p[0]), n = Math.min(n, p[1]), i = Math.max(i, p[2]), s = Math.max(s, p[3]);
    }
  return [e, n, i, s];
}, po = new WeakSet(), ld = function() {
  return o(this, ni) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, Pr = new WeakSet(), Vo = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!o(this, ni)) {
    A(this, xn, Es).call(this);
    return;
  }
  const i = A(this, dh, _g).call(this), n = A(this, po, ld).call(this);
  w(this, Ar, Math.max(Lt.MIN_SIZE, i[2] - i[0])), w(this, wr, Math.max(Lt.MIN_SIZE, i[3] - i[1]));
  const s = Math.ceil(n + o(this, Ar) * this.scaleFactor), a = Math.ceil(n + o(this, wr) * this.scaleFactor), [l, c] = this.parentDimensions;
  this.width = s / l, this.height = a / c, this.setAspectRatio(s, a);
  const d = this.translationX, h = this.translationY;
  this.translationX = -i[0], this.translationY = -i[1], A(this, ls, Zr).call(this), A(this, xn, Es).call(this), w(this, Cr, s), w(this, Tr, a), this.setDims(s, a);
  const p = e ? n / this.scaleFactor / 2 : 0;
  this.translate(d - this.translationX - p, h - this.translationY - p);
}, m(Bt, Ju), m(Bt, hh), m(Bt, Qu), lt(Bt, "_defaultColor", null), lt(Bt, "_defaultOpacity", 1), lt(Bt, "_defaultThickness", 1), lt(Bt, "_type", "ink"), lt(Bt, "_editorType", yt.INK);
let mg = Bt;
var ge, me, cs, Sn, hs, go, $i, Rr, Ui, vi, uh, Lr, Wo, kr, qo, mo, cd, fh, xg, ef, cy, nf, hy, ph, Sg, vo, hd, sf, dy;
const Ko = class Ko extends Lt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, Lr);
    m(this, kr);
    m(this, mo);
    m(this, fh);
    m(this, ef);
    m(this, nf);
    m(this, ph);
    m(this, vo);
    m(this, sf);
    m(this, ge, null);
    m(this, me, null);
    m(this, cs, null);
    m(this, Sn, null);
    m(this, hs, null);
    m(this, go, "");
    m(this, $i, null);
    m(this, Rr, null);
    m(this, Ui, null);
    m(this, vi, !1);
    m(this, uh, !1);
    w(this, Sn, e.bitmapUrl), w(this, hs, e.bitmapFile);
  }
  static initialize(e, i) {
    Lt.initialize(e, i);
  }
  static get supportedTypes() {
    return _t(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((i) => `image/${i}`));
  }
  static get supportedTypesStr() {
    return _t(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, i) {
    i.pasteEditor(yt.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  remove() {
    var e, i;
    o(this, me) && (w(this, ge, null), this._uiManager.imageManager.deleteId(o(this, me)), (e = o(this, $i)) == null || e.remove(), w(this, $i, null), (i = o(this, Rr)) == null || i.disconnect(), w(this, Rr, null), o(this, Ui) && (clearTimeout(o(this, Ui)), w(this, Ui, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      o(this, me) && A(this, mo, cd).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (o(this, me) && o(this, $i) === null && A(this, mo, cd).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(o(this, cs) || o(this, ge) || o(this, Sn) || o(this, hs) || o(this, me));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    if (this.width && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), o(this, ge) ? A(this, fh, xg).call(this) : A(this, mo, cd).call(this), this.width) {
      const [n, s] = this.parentDimensions;
      this.setAt(e * n, i * s, this.width * n, this.height * s);
    }
    return this.div;
  }
  getImageForAltText() {
    return o(this, $i);
  }
  static deserialize(e, i, n) {
    if (e instanceof Pb)
      return null;
    const s = super.deserialize(e, i, n), {
      rect: a,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: d,
      accessibilityData: h
    } = e;
    c && n.imageManager.isValidId(c) ? w(s, me, c) : w(s, Sn, l), w(s, vi, d);
    const [p, g] = s.pageDimensions;
    return s.width = (a[2] - a[0]) / p, s.height = (a[3] - a[1]) / g, h && (s.altTextData = h), s;
  }
  serialize(e = !1, i = null) {
    if (this.isEmpty())
      return null;
    const n = {
      annotationType: yt.STAMP,
      bitmapId: o(this, me),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: o(this, vi),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return n.bitmapUrl = A(this, vo, hd).call(this, !0), n.accessibilityData = this.altTextData, n;
    const {
      decorative: s,
      altText: a
    } = this.altTextData;
    if (!s && a && (n.accessibilityData = {
      type: "Figure",
      alt: a
    }), i === null)
      return n;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const l = o(this, vi) ? (n.rect[2] - n.rect[0]) * (n.rect[3] - n.rect[1]) : null;
    if (!i.stamps.has(o(this, me)))
      i.stamps.set(o(this, me), {
        area: l,
        serialized: n
      }), n.bitmap = A(this, vo, hd).call(this, !1);
    else if (o(this, vi)) {
      const c = i.stamps.get(o(this, me));
      l > c.area && (c.area = l, c.serialized.bitmap.close(), c.serialized.bitmap = A(this, vo, hd).call(this, !1));
    }
    return n;
  }
};
ge = new WeakMap(), me = new WeakMap(), cs = new WeakMap(), Sn = new WeakMap(), hs = new WeakMap(), go = new WeakMap(), $i = new WeakMap(), Rr = new WeakMap(), Ui = new WeakMap(), vi = new WeakMap(), uh = new WeakMap(), Lr = new WeakSet(), Wo = function(e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  w(this, ge, e.bitmap), i || (w(this, me, e.id), w(this, vi, e.isSvg)), e.file && w(this, go, e.file.name), A(this, fh, xg).call(this);
}, kr = new WeakSet(), qo = function() {
  w(this, cs, null), this._uiManager.enableWaiting(!1), o(this, $i) && this.div.focus();
}, mo = new WeakSet(), cd = function() {
  if (o(this, me)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(o(this, me)).then((i) => A(this, Lr, Wo).call(this, i, !0)).finally(() => A(this, kr, qo).call(this));
    return;
  }
  if (o(this, Sn)) {
    const i = o(this, Sn);
    w(this, Sn, null), this._uiManager.enableWaiting(!0), w(this, cs, this._uiManager.imageManager.getFromUrl(i).then((n) => A(this, Lr, Wo).call(this, n)).finally(() => A(this, kr, qo).call(this)));
    return;
  }
  if (o(this, hs)) {
    const i = o(this, hs);
    w(this, hs, null), this._uiManager.enableWaiting(!0), w(this, cs, this._uiManager.imageManager.getFromFile(i).then((n) => A(this, Lr, Wo).call(this, n)).finally(() => A(this, kr, qo).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Ko.supportedTypesStr, w(this, cs, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(e.files[0]);
        A(this, Lr, Wo).call(this, n);
      }
      i();
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    });
  }).finally(() => A(this, kr, qo).call(this))), e.click();
}, fh = new WeakSet(), xg = function() {
  const {
    div: e
  } = this;
  let {
    width: i,
    height: n
  } = o(this, ge);
  const [s, a] = this.pageDimensions, l = 0.75;
  if (this.width)
    i = this.width * s, n = this.height * a;
  else if (i > l * s || n > l * a) {
    const p = Math.min(l * s / i, l * a / n);
    i *= p, n *= p;
  }
  const [c, d] = this.parentDimensions;
  this.setDims(i * c / s, n * d / a), this._uiManager.enableWaiting(!1);
  const h = w(this, $i, document.createElement("canvas"));
  e.append(h), e.hidden = !1, A(this, ph, Sg).call(this, i, n), A(this, sf, dy).call(this), o(this, uh) || (this.parent.addUndoableEditor(this), w(this, uh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), o(this, go) && h.setAttribute("aria-label", o(this, go));
}, ef = new WeakSet(), cy = function(e, i) {
  var l;
  const [n, s] = this.parentDimensions;
  this.width = e / n, this.height = i / s, this.setDims(e, i), (l = this._initialOptions) != null && l.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, o(this, Ui) !== null && clearTimeout(o(this, Ui)), w(this, Ui, setTimeout(() => {
    w(this, Ui, null), A(this, ph, Sg).call(this, e, i);
  }, 200));
}, nf = new WeakSet(), hy = function(e, i) {
  const {
    width: n,
    height: s
  } = o(this, ge);
  let a = n, l = s, c = o(this, ge);
  for (; a > 2 * e || l > 2 * i; ) {
    const d = a, h = l;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), l > 2 * i && (l = l >= 16384 ? Math.floor(l / 2) - 1 : Math.ceil(l / 2));
    const p = new OffscreenCanvas(a, l);
    p.getContext("2d").drawImage(c, 0, 0, d, h, 0, 0, a, l), c = p.transferToImageBitmap();
  }
  return c;
}, ph = new WeakSet(), Sg = function(e, i) {
  e = Math.ceil(e), i = Math.ceil(i);
  const n = o(this, $i);
  if (!n || n.width === e && n.height === i)
    return;
  n.width = e, n.height = i;
  const s = o(this, vi) ? o(this, ge) : A(this, nf, hy).call(this, e, i);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(e, i).getContext("2d");
    c.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, i), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, e, i).data,
        width: e,
        height: i,
        channels: 4
      }
    }).then((d) => {
      const h = (d == null ? void 0 : d.output) || "";
      this.parent && h && !this.hasAltText() && (this.altTextData = {
        altText: h,
        decorative: !1
      });
    });
  }
  const a = n.getContext("2d");
  a.filter = this._uiManager.hcmFilter, a.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, i);
}, vo = new WeakSet(), hd = function(e) {
  if (e) {
    if (o(this, vi)) {
      const s = this._uiManager.imageManager.getSvgUrl(o(this, me));
      if (s)
        return s;
    }
    const i = document.createElement("canvas");
    return {
      width: i.width,
      height: i.height
    } = o(this, ge), i.getContext("2d").drawImage(o(this, ge), 0, 0), i.toDataURL();
  }
  if (o(this, vi)) {
    const [i, n] = this.pageDimensions, s = Math.round(this.width * i * ps.PDF_TO_CSS_UNITS), a = Math.round(this.height * n * ps.PDF_TO_CSS_UNITS), l = new OffscreenCanvas(s, a);
    return l.getContext("2d").drawImage(o(this, ge), 0, 0, o(this, ge).width, o(this, ge).height, 0, 0, s, a), l.transferToImageBitmap();
  }
  return structuredClone(o(this, ge));
}, sf = new WeakSet(), dy = function() {
  w(this, Rr, new ResizeObserver((e) => {
    const i = e[0].contentRect;
    i.width && i.height && A(this, ef, cy).call(this, i.width, i.height);
  })), o(this, Rr).observe(this.div);
}, lt(Ko, "_type", "stamp"), lt(Ko, "_editorType", yt.STAMP);
let Eg = Ko;
var Ir, bo, Hi, Fr, Cn, Tn, Pn, qe, ds, yo, wo, Te, nt, us, rf, uy, gh, Tg, mh, Pg, vh, Rg, Ao, dd;
const ri = class ri {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    accessibilityManager: n,
    annotationLayer: s,
    drawLayer: a,
    textLayer: l,
    viewport: c,
    l10n: d
  }) {
    m(this, rf);
    m(this, gh);
    m(this, mh);
    m(this, vh);
    m(this, Ao);
    m(this, Ir, void 0);
    m(this, bo, !1);
    m(this, Hi, null);
    m(this, Fr, null);
    m(this, Cn, null);
    m(this, Tn, null);
    m(this, Pn, null);
    m(this, qe, /* @__PURE__ */ new Map());
    m(this, ds, !1);
    m(this, yo, !1);
    m(this, wo, !1);
    m(this, Te, null);
    m(this, nt, void 0);
    const h = [...o(ri, us).values()];
    if (!ri._initialized) {
      ri._initialized = !0;
      for (const p of h)
        p.initialize(d, t);
    }
    t.registerEditorTypes(h), w(this, nt, t), this.pageIndex = e, this.div = i, w(this, Ir, n), w(this, Hi, s), this.viewport = c, w(this, Te, l), this.drawLayer = a, o(this, nt).addLayer(this);
  }
  get isEmpty() {
    return o(this, qe).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && o(this, nt).getMode() === yt.NONE;
  }
  updateToolbar(t) {
    o(this, nt).updateToolbar(t);
  }
  updateMode(t = o(this, nt).getMode()) {
    switch (A(this, Ao, dd).call(this), t) {
      case yt.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case yt.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case yt.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const i of o(ri, us).values())
      e.toggle(`${i._type}Editing`, t === i._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = o(this, Te)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (o(this, nt).getMode() !== yt.INK)
      return;
    if (!t) {
      for (const i of o(this, qe).values())
        if (i.isEmpty()) {
          i.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    o(this, nt).setEditingState(t);
  }
  addCommands(t) {
    o(this, nt).addCommands(t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = o(this, Hi)) == null || e.div.classList.toggle("disabled", !t);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const i of o(this, qe).values())
      i.enableEditing(), i.show(!0), i.annotationElementId && (o(this, nt).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    if (!o(this, Hi))
      return;
    const e = o(this, Hi).getEditableAnnotations();
    for (const i of e) {
      if (i.hide(), o(this, nt).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))
        continue;
      const n = this.deserialize(i);
      n && (this.addOrRebuild(n), n.enableEditing());
    }
  }
  disable() {
    var n;
    w(this, wo, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const s of o(this, qe).values())
      if (s.disableEditing(), !!s.annotationElementId) {
        if (s.serialize() !== null) {
          t.set(s.annotationElementId, s);
          continue;
        } else
          e.set(s.annotationElementId, s);
        (n = this.getEditableAnnotation(s.annotationElementId)) == null || n.show(), s.remove();
      }
    if (o(this, Hi)) {
      const s = o(this, Hi).getEditableAnnotations();
      for (const a of s) {
        const {
          id: l
        } = a.data;
        if (o(this, nt).isDeletedAnnotationElement(l))
          continue;
        let c = e.get(l);
        if (c) {
          c.resetAnnotationElement(a), c.show(!1), a.show();
          continue;
        }
        c = t.get(l), c && (o(this, nt).addChangedExistingAnnotation(c), c.renderAnnotationElement(a), c.show(!1)), a.show();
      }
    }
    A(this, Ao, dd).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: i
    } = this.div;
    for (const s of o(ri, us).values())
      i.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), w(this, wo, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = o(this, Hi)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    o(this, nt).getActive() !== t && o(this, nt).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    this.div.tabIndex = -1, (t = o(this, Te)) != null && t.div && !o(this, Tn) && (w(this, Tn, A(this, rf, uy).bind(this)), o(this, Te).div.addEventListener("pointerdown", o(this, Tn)), o(this, Te).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = o(this, Te)) != null && t.div && o(this, Tn) && (o(this, Te).div.removeEventListener("pointerdown", o(this, Tn)), w(this, Tn, null), o(this, Te).div.classList.remove("highlighting"));
  }
  enableClick() {
    o(this, Cn) || (w(this, Cn, this.pointerdown.bind(this)), w(this, Fr, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", o(this, Cn)), this.div.addEventListener("pointerup", o(this, Fr)));
  }
  disableClick() {
    o(this, Cn) && (this.div.removeEventListener("pointerdown", o(this, Cn)), this.div.removeEventListener("pointerup", o(this, Fr)), w(this, Cn, null), w(this, Fr, null));
  }
  attach(t) {
    o(this, qe).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && o(this, nt).isDeletedAnnotationElement(e) && o(this, nt).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    o(this, qe).delete(t.id), (e = o(this, Ir)) == null || e.removePointerInTextLayer(t.contentDiv), !o(this, wo) && t.annotationElementId && o(this, nt).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), o(this, nt).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, o(this, yo) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (o(this, nt).addDeletedAnnotationElement(t.annotationElementId), Lt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), o(this, nt).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), o(this, nt).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var i;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !o(this, Pn) && (t._focusEventsAllowed = !1, w(this, Pn, setTimeout(() => {
      w(this, Pn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = o(this, Ir)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), i = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !1
    });
  }
  getNextId() {
    return o(this, nt).getId();
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = o(this, gh, Tg)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    o(this, nt).updateToolbar(t), o(this, nt).updateMode(t);
    const {
      offsetX: i,
      offsetY: n
    } = A(this, vh, Rg).call(this), s = this.getNextId(), a = A(this, mh, Pg).call(this, {
      parent: this,
      id: s,
      x: i,
      y: n,
      uiManager: o(this, nt),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  deserialize(t) {
    var e;
    return ((e = o(ri, us).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, o(this, nt))) || null;
  }
  createAndAddNewEditor(t, e, i = {}) {
    const n = this.getNextId(), s = A(this, mh, Pg).call(this, {
      parent: this,
      id: n,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: o(this, nt),
      isCentered: e,
      ...i
    });
    return s && this.add(s), s;
  }
  addNewEditor() {
    this.createAndAddNewEditor(A(this, vh, Rg).call(this), !0);
  }
  setSelected(t) {
    o(this, nt).setSelected(t);
  }
  toggleSelected(t) {
    o(this, nt).toggleSelected(t);
  }
  isSelected(t) {
    return o(this, nt).isSelected(t);
  }
  unselect(t) {
    o(this, nt).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Oe.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && o(this, ds)) {
      if (w(this, ds, !1), !o(this, bo)) {
        w(this, bo, !0);
        return;
      }
      if (o(this, nt).getMode() === yt.STAMP) {
        o(this, nt).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (o(this, nt).getMode() === yt.HIGHLIGHT && this.enableTextSelection(), o(this, ds)) {
      w(this, ds, !1);
      return;
    }
    const {
      isMac: e
    } = Oe.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    w(this, ds, !0);
    const i = o(this, nt).getActive();
    w(this, bo, !i || i.isEmpty());
  }
  findNewParent(t, e, i) {
    const n = o(this, nt).findParent(e, i);
    return n === null || n === this ? !1 : (n.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = o(this, nt).getActive()) == null ? void 0 : t.parent) === this && (o(this, nt).commitOrRemove(), o(this, nt).setActiveEditor(null)), o(this, Pn) && (clearTimeout(o(this, Pn)), w(this, Pn, null));
    for (const i of o(this, qe).values())
      (e = o(this, Ir)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, o(this, qe).clear(), o(this, nt).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Mr(this.div, t);
    for (const e of o(this, nt).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    o(this, nt).commitOrRemove(), A(this, Ao, dd).call(this);
    const e = this.viewport.rotation, i = t.rotation;
    if (this.viewport = t, Mr(this.div, {
      rotation: i
    }), e !== i)
      for (const n of o(this, qe).values())
        n.rotate(i);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return o(this, nt).viewParameters.realScale;
  }
};
Ir = new WeakMap(), bo = new WeakMap(), Hi = new WeakMap(), Fr = new WeakMap(), Cn = new WeakMap(), Tn = new WeakMap(), Pn = new WeakMap(), qe = new WeakMap(), ds = new WeakMap(), yo = new WeakMap(), wo = new WeakMap(), Te = new WeakMap(), nt = new WeakMap(), us = new WeakMap(), rf = new WeakSet(), uy = function(t) {
  if (o(this, nt).unselectAll(), t.target === o(this, Te).div) {
    const {
      isMac: e
    } = Oe.platform;
    if (t.button !== 0 || t.ctrlKey && e)
      return;
    o(this, nt).showAllEditors("highlight", !0, !0), o(this, Te).div.classList.add("free"), Ed.startHighlighting(this, o(this, nt).direction === "ltr", t), o(this, Te).div.addEventListener("pointerup", () => {
      o(this, Te).div.classList.remove("free");
    }, {
      once: !0
    }), t.preventDefault();
  }
}, gh = new WeakSet(), Tg = function() {
  return o(ri, us).get(o(this, nt).getMode());
}, mh = new WeakSet(), Pg = function(t) {
  const e = o(this, gh, Tg);
  return e ? new e.prototype.constructor(t) : null;
}, vh = new WeakSet(), Rg = function() {
  const {
    x: t,
    y: e,
    width: i,
    height: n
  } = this.div.getBoundingClientRect(), s = Math.max(0, t), a = Math.max(0, e), l = Math.min(window.innerWidth, t + i), c = Math.min(window.innerHeight, e + n), d = (s + l) / 2 - t, h = (a + c) / 2 - e, [p, g] = this.viewport.rotation % 180 === 0 ? [d, h] : [h, d];
  return {
    offsetX: p,
    offsetY: g
  };
}, Ao = new WeakSet(), dd = function() {
  w(this, yo, !0);
  for (const t of o(this, qe).values())
    t.isEmpty() && t.remove();
  w(this, yo, !1);
}, lt(ri, "_initialized", !1), m(ri, us, new Map([rg, mg, Eg, Ed].map((t) => [t._editorType, t])));
let Cg = ri;
var ji, bh, ee, fs, yh, kg, wh, Ig, af, fy;
const ce = class ce {
  constructor({
    pageIndex: t
  }) {
    m(this, wh);
    m(this, af);
    m(this, ji, null);
    m(this, bh, 0);
    m(this, ee, /* @__PURE__ */ new Map());
    m(this, fs, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!o(this, ji)) {
      w(this, ji, t);
      return;
    }
    if (o(this, ji) !== t) {
      if (o(this, ee).size > 0)
        for (const e of o(this, ee).values())
          e.remove(), t.append(e);
      w(this, ji, t);
    }
  }
  static get _svgFactory() {
    return _t(this, "_svgFactory", new Qg());
  }
  highlight(t, e, i, n = !1) {
    const s = $e(this, bh)._++, a = A(this, wh, Ig).call(this, t.box);
    a.classList.add("highlight"), t.free && a.classList.add("free");
    const l = ce._svgFactory.createElement("defs");
    a.append(l);
    const c = ce._svgFactory.createElement("path");
    l.append(c);
    const d = `path_p${this.pageIndex}_${s}`;
    c.setAttribute("id", d), c.setAttribute("d", t.toSVGPath()), n && o(this, fs).set(s, c);
    const h = A(this, af, fy).call(this, l, d), p = ce._svgFactory.createElement("use");
    return a.append(p), a.setAttribute("fill", e), a.setAttribute("fill-opacity", i), p.setAttribute("href", `#${d}`), o(this, ee).set(s, a), {
      id: s,
      clipPathId: `url(#${h})`
    };
  }
  highlightOutline(t) {
    const e = $e(this, bh)._++, i = A(this, wh, Ig).call(this, t.box);
    i.classList.add("highlightOutline");
    const n = ce._svgFactory.createElement("defs");
    i.append(n);
    const s = ce._svgFactory.createElement("path");
    n.append(s);
    const a = `path_p${this.pageIndex}_${e}`;
    s.setAttribute("id", a), s.setAttribute("d", t.toSVGPath()), s.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (t.free) {
      i.classList.add("free");
      const h = ce._svgFactory.createElement("mask");
      n.append(h), l = `mask_p${this.pageIndex}_${e}`, h.setAttribute("id", l), h.setAttribute("maskUnits", "objectBoundingBox");
      const p = ce._svgFactory.createElement("rect");
      h.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const g = ce._svgFactory.createElement("use");
      h.append(g), g.setAttribute("href", `#${a}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const c = ce._svgFactory.createElement("use");
    i.append(c), c.setAttribute("href", `#${a}`), l && c.setAttribute("mask", `url(#${l})`);
    const d = c.cloneNode();
    return i.append(d), c.classList.add("mainOutline"), d.classList.add("secondaryOutline"), o(this, ee).set(e, i), e;
  }
  finalizeLine(t, e) {
    const i = o(this, fs).get(t);
    o(this, fs).delete(t), this.updateBox(t, e.box), i.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    o(this, ee).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  removeFreeHighlight(t) {
    this.remove(t), o(this, fs).delete(t);
  }
  updatePath(t, e) {
    o(this, fs).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var i;
    A(i = ce, yh, kg).call(i, o(this, ee).get(t), e);
  }
  show(t, e) {
    o(this, ee).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    o(this, ee).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    o(this, ee).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    o(this, ee).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    o(this, ee).get(t).classList.add(e);
  }
  removeClass(t, e) {
    o(this, ee).get(t).classList.remove(e);
  }
  remove(t) {
    o(this, ji) !== null && (o(this, ee).get(t).remove(), o(this, ee).delete(t));
  }
  destroy() {
    w(this, ji, null);
    for (const t of o(this, ee).values())
      t.remove();
    o(this, ee).clear();
  }
};
ji = new WeakMap(), bh = new WeakMap(), ee = new WeakMap(), fs = new WeakMap(), yh = new WeakSet(), kg = function(t, {
  x: e = 0,
  y: i = 0,
  width: n = 1,
  height: s = 1
} = {}) {
  const {
    style: a
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * n}%`, a.height = `${100 * s}%`;
}, wh = new WeakSet(), Ig = function(t) {
  var i;
  const e = ce._svgFactory.create(1, 1, !0);
  return o(this, ji).append(e), e.setAttribute("aria-hidden", !0), A(i = ce, yh, kg).call(i, e, t), e;
}, af = new WeakSet(), fy = function(t, e) {
  const i = ce._svgFactory.createElement("clipPath");
  t.append(i);
  const n = `clip_${e}`;
  i.setAttribute("id", n), i.setAttribute("clipPathUnits", "objectBoundingBox");
  const s = ce._svgFactory.createElement("use");
  return i.append(s), s.setAttribute("href", `#${e}`), s.classList.add("clip"), n;
}, m(ce, yh);
let Lg = ce;
var dP = st.AbortException, uP = st.AnnotationEditorLayer, fP = st.AnnotationEditorParamsType, pP = st.AnnotationEditorType, gP = st.AnnotationEditorUIManager, py = st.AnnotationLayer, gy = st.AnnotationMode, mP = st.CMapCompressionType, vP = st.ColorPicker, bP = st.DOMSVGFactory, yP = st.DrawLayer, wP = st.FeatureTest, om = st.GlobalWorkerOptions, AP = st.ImageKind, _P = st.InvalidPDFException, EP = st.MissingPDFException, xP = st.OPS, SP = st.Outliner, CP = st.PDFDataRangeTransport, TP = st.PDFDateString, PP = st.PDFWorker, RP = st.PasswordResponses, LP = st.PermissionFlag, kP = st.PixelsPerInch, IP = st.RenderingCancelledException, my = st.TextLayer, FP = st.UnexpectedResponseException, MP = st.Util, DP = st.VerbosityLevel, OP = st.XfaLayer, NP = st.build, BP = st.createValidAbsoluteUrl, $P = st.fetchData, vy = st.getDocument, UP = st.getFilenameFromUrl, HP = st.getPdfFilenameFromUrl, jP = st.getXfaPageViewport, zP = st.isDataScheme, GP = st.isPdfFile, VP = st.noContextMenu, WP = st.normalizeUnicode, qP = st.renderTextLayer, XP = st.setLayerDimensions, YP = st.shadow, KP = st.updateTextLayer, by = st.version;
const ZP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: dP,
  AnnotationEditorLayer: uP,
  AnnotationEditorParamsType: fP,
  AnnotationEditorType: pP,
  AnnotationEditorUIManager: gP,
  AnnotationLayer: py,
  AnnotationMode: gy,
  CMapCompressionType: mP,
  ColorPicker: vP,
  DOMSVGFactory: bP,
  DrawLayer: yP,
  FeatureTest: wP,
  GlobalWorkerOptions: om,
  ImageKind: AP,
  InvalidPDFException: _P,
  MissingPDFException: EP,
  OPS: xP,
  Outliner: SP,
  PDFDataRangeTransport: CP,
  PDFDateString: TP,
  PDFWorker: PP,
  PasswordResponses: RP,
  PermissionFlag: LP,
  PixelsPerInch: kP,
  RenderingCancelledException: IP,
  TextLayer: my,
  UnexpectedResponseException: FP,
  Util: MP,
  VerbosityLevel: DP,
  XfaLayer: OP,
  build: NP,
  createValidAbsoluteUrl: BP,
  fetchData: $P,
  getDocument: vy,
  getFilenameFromUrl: UP,
  getPdfFilenameFromUrl: HP,
  getXfaPageViewport: jP,
  isDataScheme: zP,
  isPdfFile: GP,
  noContextMenu: VP,
  normalizeUnicode: WP,
  renderTextLayer: qP,
  setLayerDimensions: XP,
  shadow: YP,
  updateTextLayer: KP,
  version: by
}, Symbol.toStringTag, { value: "Module" }));
var re = function(r, t, e) {
  if (e || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return r.concat(s || Array.prototype.slice.call(t));
}, JP = ["onCopy", "onCut", "onPaste"], QP = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], tR = ["onFocus", "onBlur"], eR = ["onInput", "onInvalid", "onReset", "onSubmit"], iR = ["onLoad", "onError"], nR = ["onKeyDown", "onKeyPress", "onKeyUp"], sR = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], rR = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], aR = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], oR = ["onSelect"], lR = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], cR = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], hR = ["onScroll"], dR = ["onWheel"], uR = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], fR = ["onTransitionEnd"], pR = ["onToggle"], gR = ["onChange"], mR = re(re(re(re(re(re(re(re(re(re(re(re(re(re(re(re(re(re([], JP, !0), QP, !0), tR, !0), eR, !0), iR, !0), nR, !0), sR, !0), rR, !0), aR, !0), oR, !0), lR, !0), cR, !0), hR, !0), dR, !0), uR, !0), fR, !0), gR, !0), pR, !0);
function yy(r, t) {
  var e = {};
  return mR.forEach(function(i) {
    var n = r[i];
    n && (t ? e[i] = function(s) {
      return n(s, t(i));
    } : e[i] = n);
  }), e;
}
function Ph(r) {
  var t = !1, e = new Promise(function(i, n) {
    r.then(function(s) {
      return !t && i(s);
    }).catch(function(s) {
      return !t && n(s);
    });
  });
  return {
    promise: e,
    cancel: function() {
      t = !0;
    }
  };
}
function wy(r) {
  var t, e, i = "";
  if (typeof r == "string" || typeof r == "number")
    i += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && (e = wy(r[t])) && (i && (i += " "), i += e);
    else
      for (t in r)
        r[t] && (i && (i += " "), i += t);
  return i;
}
function Sf() {
  for (var r, t, e = 0, i = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = wy(r)) && (i && (i += " "), i += t);
  return i;
}
var vR = $n.env.NODE_ENV === "production", np = "Invariant failed";
function Ot(r, t) {
  if (!r) {
    if (vR)
      throw new Error(np);
    var e = typeof t == "function" ? t() : t, i = e ? "".concat(np, ": ").concat(e) : np;
    throw new Error(i);
  }
}
var bR = $n.env.NODE_ENV !== "production", Ay = function() {
};
if (bR) {
  var yR = function(t, e) {
    var i = arguments.length;
    e = new Array(i > 1 ? i - 1 : 0);
    for (var n = 1; n < i; n++)
      e[n - 1] = arguments[n];
    var s = 0, a = "Warning: " + t.replace(/%s/g, function() {
      return e[s++];
    });
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  };
  Ay = function(r, t, e) {
    var i = arguments.length;
    e = new Array(i > 2 ? i - 2 : 0);
    for (var n = 2; n < i; n++)
      e[n - 2] = arguments[n];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    r || yR.apply(null, [t].concat(e));
  };
}
var wR = Ay;
const we = /* @__PURE__ */ x0(wR);
var o0 = Object.prototype.hasOwnProperty;
function l0(r, t, e) {
  for (e of r.keys())
    if (na(e, t))
      return e;
}
function na(r, t) {
  var e, i, n;
  if (r === t)
    return !0;
  if (r && t && (e = r.constructor) === t.constructor) {
    if (e === Date)
      return r.getTime() === t.getTime();
    if (e === RegExp)
      return r.toString() === t.toString();
    if (e === Array) {
      if ((i = r.length) === t.length)
        for (; i-- && na(r[i], t[i]); )
          ;
      return i === -1;
    }
    if (e === Set) {
      if (r.size !== t.size)
        return !1;
      for (i of r)
        if (n = i, n && typeof n == "object" && (n = l0(t, n), !n) || !t.has(n))
          return !1;
      return !0;
    }
    if (e === Map) {
      if (r.size !== t.size)
        return !1;
      for (i of r)
        if (n = i[0], n && typeof n == "object" && (n = l0(t, n), !n) || !na(i[1], t.get(n)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      r = new Uint8Array(r), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((i = r.byteLength) === t.byteLength)
        for (; i-- && r.getInt8(i) === t.getInt8(i); )
          ;
      return i === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((i = r.byteLength) === t.byteLength)
        for (; i-- && r[i] === t[i]; )
          ;
      return i === -1;
    }
    if (!e || typeof r == "object") {
      i = 0;
      for (e in r)
        if (o0.call(r, e) && ++i && !o0.call(t, e) || !(e in t) || !na(r[e], t[e]))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return r !== r && t !== t;
}
const _y = of(null);
function sa({ children: r, type: t }) {
  return O("div", { className: `react-pdf__message react-pdf__message--${t}`, children: r });
}
const AR = "noopener noreferrer nofollow";
class _R {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return Ot(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    Ot(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  goToDestination(t) {
    return new Promise((e) => {
      Ot(this.pdfDocument, "PDF document not loaded."), Ot(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Ot(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((n) => {
        Ot(this.pdfDocument, "PDF document not loaded."), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((s) => {
          n(s);
        }).catch(() => {
          Ot(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i == "number" ? n(i) : Ot(!1, `"${i}" is not a valid destination reference.`);
      }).then((n) => {
        const s = n + 1;
        Ot(this.pdfViewer, "PDF viewer is not initialized."), Ot(s >= 1 && s <= this.pagesCount, `"${s}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: n,
          pageNumber: s
        });
      });
    });
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
  goToPage(t) {
    const e = t - 1;
    Ot(this.pdfViewer, "PDF viewer is not initialized."), Ot(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || AR, t.target = i ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const c0 = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, Cf = typeof document < "u", Ey = Cf && window.location.protocol === "file:";
function ER(r) {
  return typeof r < "u";
}
function ys(r) {
  return ER(r) && r !== null;
}
function xR(r) {
  return typeof r == "string";
}
function SR(r) {
  return r instanceof ArrayBuffer;
}
function CR(r) {
  return Ot(Cf, "isBlob can only be used in a browser environment"), r instanceof Blob;
}
function Fg(r) {
  return xR(r) && /^data:/.test(r);
}
function h0(r) {
  Ot(Fg(r), "Invalid data URI.");
  const [t = "", e = ""] = r.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function TR() {
  return Cf && window.devicePixelRatio || 1;
}
const xy = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function d0() {
  we(!Ey, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${xy}`);
}
function PR() {
  we(!Ey, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${xy}`);
}
function Nr(r) {
  r && r.cancel && r.cancel();
}
function Mg(r, t) {
  return Object.defineProperty(r, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(r, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), r;
}
function RR(r) {
  return r.name === "RenderingCancelledException";
}
function LR(r) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result)
        return e(new Error("Error while reading a file."));
      t(i.result);
    }, i.onerror = (n) => {
      if (!n.target)
        return e(new Error("Error while reading a file."));
      const { error: s } = n.target;
      if (!s)
        return e(new Error("Error while reading a file."));
      switch (s.code) {
        case s.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case s.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case s.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, i.readAsArrayBuffer(r);
  });
}
function kR(r, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return r;
  }
}
function So() {
  return Og(kR, { value: void 0, error: void 0 });
}
var IR = function(r, t, e, i) {
  function n(s) {
    return s instanceof e ? s : new e(function(a) {
      a(s);
    });
  }
  return new (e || (e = Promise))(function(s, a) {
    function l(h) {
      try {
        d(i.next(h));
      } catch (p) {
        a(p);
      }
    }
    function c(h) {
      try {
        d(i.throw(h));
      } catch (p) {
        a(p);
      }
    }
    function d(h) {
      h.done ? s(h.value) : n(h.value).then(l, c);
    }
    d((i = i.apply(r, t || [])).next());
  });
}, u0 = function(r, t) {
  var e = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[n]) && (e[i[n]] = r[i[n]]);
  return e;
};
const { PDFDataRangeTransport: FR } = ZP, MR = (r, t) => {
  switch (t) {
    case c0.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      r(e);
      break;
    }
    case c0.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      r(e);
      break;
    }
  }
};
function f0(r) {
  return typeof r == "object" && r !== null && ("data" in r || "range" in r || "url" in r);
}
const DR = Dg(function(t, e) {
  var { children: i, className: n, error: s = "Failed to load PDF file.", externalLinkRel: a, externalLinkTarget: l, file: c, inputRef: d, imageResourcesPath: h, loading: p = "Loading PDF…", noData: g = "No PDF file specified.", onItemClick: v, onLoadError: b, onLoadProgress: _, onLoadSuccess: C, onPassword: E = MR, onSourceError: R, onSourceSuccess: L, options: M, renderMode: D, rotate: N } = t, U = u0(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [S, T] = So(), { value: I, error: k } = S, [H, j] = So(), { value: z, error: Y } = H, K = zi(new _R()), B = zi([]), V = zi(void 0), W = zi(void 0);
  c && c !== V.current && f0(c) && (we(!na(c, V.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), V.current = c), M && M !== W.current && (we(!na(M, W.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), W.current = M);
  const xt = zi({
    // Handling jumping to internal links target
    scrollPageIntoView: (q) => {
      const { dest: dt, pageNumber: Ct, pageIndex: Nt = Ct - 1 } = q;
      if (v) {
        v({ dest: dt, pageIndex: Nt, pageNumber: Ct });
        return;
      }
      const Wt = B.current[Nt];
      if (Wt) {
        Wt.scrollIntoView();
        return;
      }
      we(!1, `An internal link leading to page ${Ct} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  _0(e, () => ({
    linkService: K,
    pages: B,
    viewer: xt
  }), []);
  function mt() {
    L && L();
  }
  function G() {
    k && (we(!1, k.toString()), R && R(k));
  }
  function et() {
    T({ type: "RESET" });
  }
  bt(et, [c, T]);
  const tt = _o(() => IR(this, void 0, void 0, function* () {
    if (!c)
      return null;
    if (typeof c == "string")
      return Fg(c) ? { data: h0(c) } : (d0(), { url: c });
    if (c instanceof FR)
      return { range: c };
    if (SR(c))
      return { data: c };
    if (Cf && CR(c))
      return { data: yield LR(c) };
    if (Ot(typeof c == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), Ot(f0(c), "Invalid parameter object: need either .data, .range or .url"), "url" in c && typeof c.url == "string") {
      if (Fg(c.url)) {
        const { url: q } = c, dt = u0(c, ["url"]), Ct = h0(q);
        return Object.assign({ data: Ct }, dt);
      }
      d0();
    }
    return c;
  }), [c]);
  bt(() => {
    const q = Ph(tt());
    return q.promise.then((dt) => {
      T({ type: "RESOLVE", value: dt });
    }).catch((dt) => {
      T({ type: "REJECT", error: dt });
    }), () => {
      Nr(q);
    };
  }, [tt, T]), bt(
    () => {
      if (!(typeof I > "u")) {
        if (I === !1) {
          G();
          return;
        }
        mt();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [I]
  );
  function it() {
    z && (C && C(z), B.current = new Array(z.numPages), K.current.setDocument(z));
  }
  function ct() {
    Y && (we(!1, Y.toString()), b && b(Y));
  }
  function J() {
    j({ type: "RESET" });
  }
  bt(J, [j, I]);
  function Et() {
    if (!I)
      return;
    const q = Object.assign(Object.assign({}, I), M), dt = vy(q);
    _ && (dt.onProgress = _), E && (dt.onPassword = E);
    const Ct = dt;
    return Ct.promise.then((Nt) => {
      j({ type: "RESOLVE", value: Nt });
    }).catch((Nt) => {
      Ct.destroyed || j({ type: "REJECT", error: Nt });
    }), () => {
      Ct.destroy();
    };
  }
  bt(
    Et,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [M, j, I]
  ), bt(
    () => {
      if (!(typeof z > "u")) {
        if (z === !1) {
          ct();
          return;
        }
        it();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [z]
  );
  function X() {
    K.current.setViewer(xt.current), K.current.setExternalLinkRel(a), K.current.setExternalLinkTarget(l);
  }
  bt(X, [a, l]);
  function Q(q, dt) {
    B.current[q] = dt;
  }
  function ht(q) {
    delete B.current[q];
  }
  const St = yi(() => ({
    imageResourcesPath: h,
    linkService: K.current,
    onItemClick: v,
    pdf: z,
    registerPage: Q,
    renderMode: D,
    rotate: N,
    unregisterPage: ht
  }), [h, v, z, D, N]), rt = yi(() => yy(U, () => z), [U, z]);
  function wt() {
    return O(_y.Provider, { value: St, children: i });
  }
  function ft() {
    return c ? z == null ? O(sa, { type: "loading", children: typeof p == "function" ? p() : p }) : z === !1 ? O(sa, { type: "error", children: typeof s == "function" ? s() : s }) : wt() : O(sa, { type: "no-data", children: typeof g == "function" ? g() : g });
  }
  return O("div", Object.assign({
    className: Sf("react-pdf__Document", n),
    // Assertion is needed for React 18 compatibility
    ref: d,
    style: {
      "--scale-factor": "1"
    }
  }, rt, { children: ft() }));
});
function Sy() {
  return Be(_y);
}
function Cy() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = r.filter(Boolean);
  if (e.length <= 1) {
    var i = e[0];
    return i || null;
  }
  return function(s) {
    e.forEach(function(a) {
      typeof a == "function" ? a(s) : a && (a.current = s);
    });
  };
}
const Ty = of(null), Py = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, OR = /^H(\d+)$/;
function NR(r) {
  return r in Py;
}
function Tf(r) {
  return "children" in r;
}
function Ry(r) {
  return Tf(r) ? r.children.length === 1 && 0 in r.children && "id" in r.children[0] : !1;
}
function BR(r) {
  const t = {};
  if (Tf(r)) {
    const { role: e } = r, i = e.match(OR);
    if (i)
      t.role = "heading", t["aria-level"] = Number(i[1]);
    else if (NR(e)) {
      const n = Py[e];
      n && (t.role = n);
    }
  }
  return t;
}
function Ly(r) {
  const t = {};
  if (Tf(r)) {
    if (r.alt !== void 0 && (t["aria-label"] = r.alt), r.lang !== void 0 && (t.lang = r.lang), Ry(r)) {
      const [e] = r.children;
      if (e) {
        const i = Ly(e);
        return Object.assign(Object.assign({}, t), i);
      }
    }
  } else
    "id" in r && (t["aria-owns"] = r.id);
  return t;
}
function $R(r) {
  return r ? Object.assign(Object.assign({}, BR(r)), Ly(r)) : null;
}
function ky({ className: r, node: t }) {
  const e = yi(() => $R(t), [t]), i = yi(() => !Tf(t) || Ry(t) ? null : t.children.map((n, s) => (
    // eslint-disable-next-line react/no-array-index-key
    O(ky, { node: n }, s)
  )), [t]);
  return O("span", Object.assign({ className: r }, e, { children: i }));
}
function Pf() {
  return Be(Ty);
}
function UR() {
  const r = Pf();
  Ot(r, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = r, [i, n] = So(), { value: s, error: a } = i, { customTextRenderer: l, page: c } = r;
  function d() {
    s && e && e(s);
  }
  function h() {
    a && (we(!1, a.toString()), t && t(a));
  }
  function p() {
    n({ type: "RESET" });
  }
  bt(p, [n, c]);
  function g() {
    if (l || !c)
      return;
    const v = Ph(c.getStructTree()), b = v;
    return v.promise.then((_) => {
      n({ type: "RESOLVE", value: _ });
    }).catch((_) => {
      n({ type: "REJECT", error: _ });
    }), () => Nr(b);
  }
  return bt(g, [l, c, n]), bt(
    () => {
      if (s !== void 0) {
        if (s === !1) {
          h();
          return;
        }
        d();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s]
  ), s ? O(ky, { className: "react-pdf__Page__structTree structTree", node: s }) : null;
}
const p0 = gy;
function HR(r) {
  const t = Pf();
  Ot(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, t), r), { _className: i, canvasBackground: n, devicePixelRatio: s = TR(), onRenderError: a, onRenderSuccess: l, page: c, renderForms: d, renderTextLayer: h, rotate: p, scale: g } = e, { canvasRef: v } = r;
  Ot(c, "Attempted to render page canvas, but no page was specified.");
  const b = zi(null);
  function _() {
    c && l && l(Mg(c, g));
  }
  function C(D) {
    RR(D) || (we(!1, D.toString()), a && a(D));
  }
  const E = yi(() => c.getViewport({ scale: g * s, rotation: p }), [s, c, p, g]), R = yi(() => c.getViewport({ scale: g, rotation: p }), [c, p, g]);
  function L() {
    if (!c)
      return;
    c.cleanup();
    const { current: D } = b;
    if (!D)
      return;
    D.width = E.width, D.height = E.height, D.style.width = `${Math.floor(R.width)}px`, D.style.height = `${Math.floor(R.height)}px`, D.style.visibility = "hidden";
    const N = {
      annotationMode: d ? p0.ENABLE_FORMS : p0.ENABLE,
      canvasContext: D.getContext("2d", { alpha: !1 }),
      viewport: E
    };
    n && (N.background = n);
    const U = c.render(N), S = U;
    return U.promise.then(() => {
      D.style.visibility = "", _();
    }).catch(C), () => Nr(S);
  }
  bt(
    L,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      b,
      s,
      c,
      d,
      E,
      R
    ]
  );
  const M = _o(() => {
    const { current: D } = b;
    D && (D.width = 0, D.height = 0);
  }, [b]);
  return bt(() => M, [M]), O("canvas", { className: `${i}__canvas`, dir: "ltr", ref: Cy(v, b), style: {
    display: "block",
    userSelect: "none"
  }, children: h ? O(UR, {}) : null });
}
function jR(r) {
  return "str" in r;
}
function zR() {
  const r = Pf();
  Ot(r, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: n, onRenderTextLayerSuccess: s, page: a, pageIndex: l, pageNumber: c, rotate: d, scale: h } = r;
  Ot(a, "Attempted to load page text content, but no page was specified.");
  const [p, g] = So(), { value: v, error: b } = p, _ = zi(null), C = zi(void 0);
  we(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function E() {
    v && i && i(v);
  }
  function R() {
    b && (we(!1, b.toString()), e && e(b));
  }
  function L() {
    g({ type: "RESET" });
  }
  bt(L, [a, g]);
  function M() {
    if (!a)
      return;
    const k = Ph(a.getTextContent()), H = k;
    return k.promise.then((j) => {
      g({ type: "RESOLVE", value: j });
    }).catch((j) => {
      g({ type: "REJECT", error: j });
    }), () => Nr(H);
  }
  bt(M, [a, g]), bt(
    () => {
      if (v !== void 0) {
        if (v === !1) {
          R();
          return;
        }
        E();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  );
  const D = _o(() => {
    s && s();
  }, [s]), N = _o((k) => {
    we(!1, k.toString()), n && n(k);
  }, [n]);
  function U() {
    const k = C.current;
    k && k.classList.add("active");
  }
  function S() {
    const k = C.current;
    k && k.classList.remove("active");
  }
  const T = yi(() => a.getViewport({ scale: h, rotation: d }), [a, d, h]);
  function I() {
    if (!a || !v)
      return;
    const { current: k } = _;
    if (!k)
      return;
    k.innerHTML = "";
    const H = a.streamTextContent({ includeMarkedContent: !0 }), j = {
      container: k,
      textContentSource: H,
      viewport: T
    }, z = new my(j), Y = z;
    return z.render().then(() => {
      const K = document.createElement("div");
      K.className = "endOfContent", k.append(K), C.current = K;
      const B = k.querySelectorAll('[role="presentation"]');
      if (t) {
        let V = 0;
        v.items.forEach((W, xt) => {
          if (!jR(W))
            return;
          const mt = B[V];
          if (!mt)
            return;
          const G = t(Object.assign({
            pageIndex: l,
            pageNumber: c,
            itemIndex: xt
          }, W));
          mt.innerHTML = G, V += W.str && W.hasEOL ? 2 : 1;
        });
      }
      D();
    }).catch(N), () => Nr(Y);
  }
  return Vy(I, [
    t,
    N,
    D,
    a,
    l,
    c,
    v,
    T
  ]), // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  O("div", { className: Sf("react-pdf__Page__textContent", "textLayer"), onMouseUp: S, onMouseDown: U, ref: _ });
}
function GR() {
  const r = Sy(), t = Pf();
  Ot(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, r), t), { imageResourcesPath: i, linkService: n, onGetAnnotationsError: s, onGetAnnotationsSuccess: a, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: h, renderForms: p, rotate: g, scale: v = 1 } = e;
  Ot(h, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), Ot(d, "Attempted to load page annotations, but no page was specified."), Ot(n, "Attempted to load page annotations, but no linkService was specified.");
  const [b, _] = So(), { value: C, error: E } = b, R = zi(null);
  we(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function L() {
    C && a && a(C);
  }
  function M() {
    E && (we(!1, E.toString()), s && s(E));
  }
  function D() {
    _({ type: "RESET" });
  }
  bt(D, [_, d]);
  function N() {
    if (!d)
      return;
    const k = Ph(d.getAnnotations()), H = k;
    return k.promise.then((j) => {
      _({ type: "RESOLVE", value: j });
    }).catch((j) => {
      _({ type: "REJECT", error: j });
    }), () => {
      Nr(H);
    };
  }
  bt(N, [_, d, p]), bt(
    () => {
      if (C !== void 0) {
        if (C === !1) {
          M();
          return;
        }
        L();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  );
  function U() {
    c && c();
  }
  function S(k) {
    we(!1, `${k}`), l && l(k);
  }
  const T = yi(() => d.getViewport({ scale: v, rotation: g }), [d, g, v]);
  function I() {
    if (!h || !d || !n || !C)
      return;
    const { current: k } = R;
    if (!k)
      return;
    const H = T.clone({ dontFlip: !0 }), j = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      div: k,
      l10n: null,
      // TODO: Implement this
      page: d,
      viewport: H
    }, z = {
      annotations: C,
      annotationStorage: h.annotationStorage,
      div: k,
      imageResourcesPath: i,
      linkService: n,
      page: d,
      renderForms: p,
      viewport: H
    };
    k.innerHTML = "";
    try {
      new py(j).render(z), U();
    } catch (Y) {
      S(Y);
    }
    return () => {
    };
  }
  return bt(
    I,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C, i, n, d, p, T]
  ), O("div", { className: Sf("react-pdf__Page__annotations", "annotationLayer"), ref: R });
}
var VR = function(r, t) {
  var e = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[n]) && (e[i[n]] = r[i[n]]);
  return e;
};
const g0 = 1;
function WR(r) {
  const t = Sy(), e = Object.assign(Object.assign({}, t), r), { _className: i = "react-pdf__Page", _enableRegisterUnregisterPage: n = !0, canvasBackground: s, canvasRef: a, children: l, className: c, customRenderer: d, customTextRenderer: h, devicePixelRatio: p, error: g = "Failed to load the page.", height: v, inputRef: b, loading: _ = "Loading page…", noData: C = "No page specified.", onGetAnnotationsError: E, onGetAnnotationsSuccess: R, onGetStructTreeError: L, onGetStructTreeSuccess: M, onGetTextError: D, onGetTextSuccess: N, onLoadError: U, onLoadSuccess: S, onRenderAnnotationLayerError: T, onRenderAnnotationLayerSuccess: I, onRenderError: k, onRenderSuccess: H, onRenderTextLayerError: j, onRenderTextLayerSuccess: z, pageIndex: Y, pageNumber: K, pdf: B, registerPage: V, renderAnnotationLayer: W = !0, renderForms: xt = !1, renderMode: mt = "canvas", renderTextLayer: G = !0, rotate: et, scale: tt = g0, unregisterPage: it, width: ct } = e, J = VR(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [Et, X] = So(), { value: Q, error: ht } = Et, St = zi(null);
  Ot(B, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const rt = ys(K) ? K - 1 : Y ?? null, wt = K ?? (ys(Y) ? Y + 1 : null), ft = et ?? (Q ? Q.rotate : null), q = yi(() => {
    if (!Q)
      return null;
    let y = 1;
    const u = tt ?? g0;
    if (ct || v) {
      const f = Q.getViewport({ scale: 1, rotation: ft });
      ct ? y = ct / f.width : v && (y = v / f.height);
    }
    return u * y;
  }, [v, Q, ft, tt, ct]);
  function dt() {
    return () => {
      ys(rt) && n && it && it(rt);
    };
  }
  bt(dt, [n, B, rt, it]);
  function Ct() {
    if (S) {
      if (!Q || !q)
        return;
      S(Mg(Q, q));
    }
    if (n && V) {
      if (!ys(rt) || !St.current)
        return;
      V(rt, St.current);
    }
  }
  function Nt() {
    ht && (we(!1, ht.toString()), U && U(ht));
  }
  function Wt() {
    X({ type: "RESET" });
  }
  bt(Wt, [X, B, rt]);
  function Ht() {
    if (!B || !wt)
      return;
    const y = Ph(B.getPage(wt)), u = y;
    return y.promise.then((f) => {
      X({ type: "RESOLVE", value: f });
    }).catch((f) => {
      X({ type: "REJECT", error: f });
    }), () => Nr(u);
  }
  bt(Ht, [X, B, rt, wt, V]), bt(
    () => {
      if (Q !== void 0) {
        if (Q === !1) {
          Nt();
          return;
        }
        Ct();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Q, q]
  );
  const Tt = yi(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Q && ys(rt) && wt && ys(ft) && ys(q) ? {
      _className: i,
      canvasBackground: s,
      customTextRenderer: h,
      devicePixelRatio: p,
      onGetAnnotationsError: E,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: L,
      onGetStructTreeSuccess: M,
      onGetTextError: D,
      onGetTextSuccess: N,
      onRenderAnnotationLayerError: T,
      onRenderAnnotationLayerSuccess: I,
      onRenderError: k,
      onRenderSuccess: H,
      onRenderTextLayerError: j,
      onRenderTextLayerSuccess: z,
      page: Q,
      pageIndex: rt,
      pageNumber: wt,
      renderForms: xt,
      renderTextLayer: G,
      rotate: ft,
      scale: q
    } : null
  ), [
    i,
    s,
    h,
    p,
    E,
    R,
    L,
    M,
    D,
    N,
    T,
    I,
    k,
    H,
    j,
    z,
    Q,
    rt,
    wt,
    xt,
    G,
    ft,
    q
  ]), Pt = yi(() => yy(J, () => Q && (q ? Mg(Q, q) : void 0)), [J, Q, q]), jt = `${rt}@${q}/${ft}`;
  function at() {
    switch (mt) {
      case "custom":
        return Ot(d, 'renderMode was set to "custom", but no customRenderer was passed.'), O(d, {}, `${jt}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return O(HR, { canvasRef: a }, `${jt}_canvas`);
    }
  }
  function _e() {
    return G ? O(zR, {}, `${jt}_text`) : null;
  }
  function Ee() {
    return W ? O(GR, {}, `${jt}_annotations`) : null;
  }
  function se() {
    return Ke(Ty.Provider, { value: Tt, children: [at(), _e(), Ee(), l] });
  }
  function Ze() {
    return wt ? B === null || Q === void 0 || Q === null ? O(sa, { type: "loading", children: typeof _ == "function" ? _() : _ }) : B === !1 || Q === !1 ? O(sa, { type: "error", children: typeof g == "function" ? g() : g }) : se() : O(sa, { type: "no-data", children: typeof C == "function" ? C() : C });
  }
  return O("div", Object.assign({
    className: Sf(i, c),
    "data-page-number": wt,
    // Assertion is needed for React 18 compatibility
    ref: Cy(b, St),
    style: {
      "--scale-factor": `${q}`,
      backgroundColor: s || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    }
  }, Pt, { children: Ze() }));
}
PR();
om.workerSrc = "pdf.worker.mjs";
const Iy = "SET_ZOOM_LEVEL", sp = (r) => ({
  type: Iy,
  value: r
}), Fy = "SET_PDF_PAGINATED", qR = (r) => ({
  type: Fy,
  value: r
}), My = "SET_NUM_PAGES", m0 = (r) => ({
  type: My,
  value: r
}), Dy = "SET_CURRENT_PAGE", Oy = "SET_CURRENT_MAIN_STATE", v0 = (r) => ({
  type: Dy,
  value: r
}), Hn = {
  defaultZoomLevel: 1,
  zoomLevel: 1,
  zoomJump: 0.1,
  paginated: !0,
  numPages: 0,
  currentPage: 1
}, XR = (r = Hn, t) => {
  switch (t.type) {
    case Iy: {
      const { value: e } = t;
      return { ...r, zoomLevel: e };
    }
    case Fy: {
      const { value: e } = t;
      return { ...r, paginated: e };
    }
    case My: {
      const { value: e } = t;
      return { ...r, numPages: e };
    }
    case Dy: {
      const { value: e } = t;
      return { ...r, currentPage: e };
    }
    case Oy: {
      const { value: e } = t;
      return { ...r, mainState: e };
    }
    default:
      return r;
  }
}, To = of({ state: Hn, dispatch: () => null }), YR = ({
  children: r,
  mainState: t
}) => {
  var n, s, a, l, c, d, h;
  const [e, i] = Og(XR, {
    ...Hn,
    defaultZoomLevel: ((s = (n = t.config) == null ? void 0 : n.pdfZoom) == null ? void 0 : s.defaultZoom) ?? Hn.defaultZoomLevel,
    zoomLevel: ((l = (a = t.config) == null ? void 0 : a.pdfZoom) == null ? void 0 : l.defaultZoom) ?? Hn.zoomLevel,
    zoomJump: ((d = (c = t.config) == null ? void 0 : c.pdfZoom) == null ? void 0 : d.zoomJump) ?? Hn.zoomJump,
    paginated: (h = t.config) != null && h.pdfVerticalScrollByDefault ? !1 : Hn.paginated,
    mainState: t
  });
  return bt(() => {
    i({
      type: Oy,
      value: t
    });
  }, [t]), /* @__PURE__ */ O(To.Provider, { value: { state: e, dispatch: i }, children: r });
}, Ny = ({ pageNum: r }) => {
  const {
    state: { mainState: t, paginated: e, zoomLevel: i, numPages: n, currentPage: s }
  } = Be(To), { t: a } = Ur(), l = (t == null ? void 0 : t.rendererRect) || null, c = r ?? s;
  return /* @__PURE__ */ Ke(KR, { id: "pdf-page-wrapper", $lastPage: c >= n, children: [
    !e && /* @__PURE__ */ O(ZR, { id: "pdf-page-info", children: a("pdfPluginPageNumber", {
      currentPage: c,
      allPagesCount: n
    }) }),
    /* @__PURE__ */ O(
      WR,
      {
        pageNumber: c || s,
        scale: i,
        height: ((l == null ? void 0 : l.height) ?? 100) - 100,
        width: ((l == null ? void 0 : l.width) ?? 100) - 100,
        loading: a("pdfPluginLoading")
      }
    )
  ] });
}, KR = gt.div`
  margin: ${(r) => r.$lastPage ? "20px 0" : void 0};
`, ZR = gt.div`
  padding: 0 0 10px 10px;
  color: ${(r) => r.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, JR = () => {
  const {
    state: { numPages: r }
  } = Be(To), t = [];
  for (let e = 0; e < r; e++)
    t.push(/* @__PURE__ */ O(Ny, { pageNum: e + 1 }, e + 1));
  return /* @__PURE__ */ O(A0, { children: t });
}, QR = () => {
  const {
    state: { mainState: r, paginated: t },
    dispatch: e
  } = Be(To), { t: i } = Ur(), n = (r == null ? void 0 : r.currentDocument) || null;
  return bt(() => {
    e(m0(Hn.numPages));
  }, [n]), !n || n.fileData === void 0 ? null : /* @__PURE__ */ O(
    tL,
    {
      file: n.fileData,
      onLoadSuccess: ({ numPages: s }) => e(m0(s)),
      loading: /* @__PURE__ */ O("span", { children: i("pdfPluginLoading") }),
      children: t ? /* @__PURE__ */ O(Ny, {}) : /* @__PURE__ */ O(JR, {})
    }
  );
}, tL = gt(DR)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`, eL = (r) => /* @__PURE__ */ O(By, { ...r, reverse: !0 }), iL = (r) => /* @__PURE__ */ O(By, { ...r }), By = (r) => {
  const { color: t, size: e, reverse: i } = r;
  return /* @__PURE__ */ O(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${i ? "rotate(180deg)" : ""}` },
      viewBox: "0 0 12 12",
      version: "1.1",
      children: /* @__PURE__ */ O(
        "g",
        {
          id: "Icons",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ O("g", { id: "Rounded", transform: "translate(-548.000000, -1000.000000)", children: /* @__PURE__ */ O("g", { id: "AV", transform: "translate(100.000000, 852.000000)", children: /* @__PURE__ */ O(
            "g",
            {
              id: "-Round-/-AV-/-skip_next",
              transform: "translate(442.000000, 142.000000)",
              children: /* @__PURE__ */ Ke("g", { children: [
                /* @__PURE__ */ O(
                  "rect",
                  {
                    id: "Rectangle-Copy-52",
                    x: "0",
                    y: "0",
                    width: "24",
                    height: "24"
                  }
                ),
                /* @__PURE__ */ O(
                  "path",
                  {
                    d: "M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z",
                    id: "icon_color",
                    fill: t || "#aaa"
                  }
                )
              ] })
            }
          ) }) })
        }
      )
    }
  );
}, nL = (r) => {
  const { color: t, size: e, reverse: i } = r;
  return /* @__PURE__ */ Ke(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${i ? "rotate(180deg)" : ""}` },
      id: "Layer_1",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ O(
          "path",
          {
            d: "M20.57,9.43A8,8,0,0,0,5.26,10,5,5,0,1,0,5,20h5V18H5a3,3,0,0,1,0-6,3.1,3.1,0,0,1,.79.12l1.12.31.14-1.15a6,6,0,0,1,11.74-.82l.15.54.54.16A3.46,3.46,0,0,1,22,14.5,3.5,3.5,0,0,1,18.5,18H16v2h2.5A5.48,5.48,0,0,0,20.57,9.43Z",
            fill: t || "#aaa"
          }
        ),
        /* @__PURE__ */ O(
          "polygon",
          {
            points: "12 11 12 15.59 10.71 14.29 9.29 15.71 13 19.41 16.71 15.71 15.29 14.29 14 15.59 14 11 12 11",
            fill: t || "#aaa"
          }
        )
      ]
    }
  );
}, sL = (r) => /* @__PURE__ */ O($y, { ...r }), rL = (r) => /* @__PURE__ */ O($y, { ...r, reverse: !0 }), $y = (r) => {
  const { color: t, size: e, reverse: i } = r;
  return /* @__PURE__ */ O(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      viewBox: "0 0 32 32",
      version: "1.1",
      children: /* @__PURE__ */ O(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ O("g", { id: "search-plus-icon", fill: t || "#aaa", children: /* @__PURE__ */ O(
            "path",
            {
              id: "search-plus",
              d: i ? "M 13 13 L 16 13 L 19 13 L 19 16 L 16 16 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z" : "M 13 13 L 13 10 L 16 10 L 16 13 L 19 13 L 19 16 L 16 16 L 16 19 L 13 19 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
            }
          ) })
        }
      )
    }
  );
}, aL = (r) => {
  const { color: t, size: e } = r;
  return /* @__PURE__ */ O("svg", { width: e || "100%", height: e || "100%", viewBox: "0 0 24 24", children: /* @__PURE__ */ O(
    "path",
    {
      fill: t || "#aaa",
      d: "M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
    }
  ) });
}, oL = (r) => {
  const { color: t, size: e, reverse: i } = r;
  return /* @__PURE__ */ O(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${i ? "rotate(90deg)" : ""}` },
      version: "1.1",
      id: "Scroll_1",
      viewBox: "0 0 297 297",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ O(
        "path",
        {
          fill: t || "#aaa",
          d: `M206.004,200.723h-31.231V96.277h31.231c0.005,0,0.014,0,0.019,0c5.289,0,9.575-4.287,9.575-9.574
  c0-2.342-0.841-4.488-2.236-6.151L156.168,3.851C154.36,1.428,151.515,0,148.492,0c-3.023,0-5.868,1.428-7.675,3.851L83.302,80.98
  c-2.166,2.902-2.507,6.779-0.883,10.017c1.624,3.236,4.936,5.28,8.559,5.28h31.231v104.445H90.978c-3.623,0-6.934,2.044-8.559,5.28
  c-1.624,3.237-1.283,7.114,0.883,10.017l57.513,77.129c1.808,2.424,4.652,3.852,7.675,3.852c3.023,0,5.868-1.428,7.676-3.852
  l57.514-77.129c2.164-2.902,2.507-6.779,0.883-10.017C212.938,202.767,209.627,200.723,206.004,200.723z`
        }
      )
    }
  );
}, lL = () => {
  const {
    state: { currentPage: r, numPages: t },
    dispatch: e
  } = Be(To), { t: i } = Ur();
  return /* @__PURE__ */ Ke(cL, { id: "pdf-pagination", children: [
    /* @__PURE__ */ O(
      Uy,
      {
        id: "pdf-pagination-prev",
        onClick: () => e(v0(r - 1)),
        disabled: r === 1,
        children: /* @__PURE__ */ O(eL, { color: "#000", size: "50%" })
      }
    ),
    /* @__PURE__ */ O(dL, { id: "pdf-pagination-info", children: i("pdfPluginPageNumber", {
      currentPage: r,
      allPagesCount: t
    }) }),
    /* @__PURE__ */ O(
      hL,
      {
        id: "pdf-pagination-next",
        onClick: () => e(v0(r + 1)),
        disabled: r >= t,
        children: /* @__PURE__ */ O(iL, { color: "#000", size: "50%" })
      }
    )
  ] });
}, cL = gt.div`
  display: flex;
  align-items: center;
`, Uy = gt(cf)`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, hL = gt(Uy)`
  margin: 0 20px 0 5px;
`, dL = gt.div`
  color: ${(r) => r.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, uL = () => {
  const { t: r } = Ur(), {
    state: {
      mainState: t,
      paginated: e,
      zoomLevel: i,
      numPages: n,
      zoomJump: s,
      defaultZoomLevel: a
    },
    dispatch: l
  } = Be(To), c = (t == null ? void 0 : t.currentDocument) || null;
  return /* @__PURE__ */ Ke(fL, { id: "pdf-controls", children: [
    e && n > 1 && /* @__PURE__ */ O(lL, {}),
    (c == null ? void 0 : c.fileData) && /* @__PURE__ */ O(
      pL,
      {
        id: "pdf-download",
        href: c == null ? void 0 : c.fileData,
        download: (c == null ? void 0 : c.fileName) || (c == null ? void 0 : c.uri),
        title: r("downloadButtonLabel"),
        children: /* @__PURE__ */ O(nL, { color: "#000", size: "75%" })
      }
    ),
    /* @__PURE__ */ O(
      Bh,
      {
        id: "pdf-zoom-out",
        onMouseDown: () => l(sp(i - s)),
        children: /* @__PURE__ */ O(rL, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ O(
      Bh,
      {
        id: "pdf-zoom-in",
        onMouseDown: () => l(sp(i + s)),
        children: /* @__PURE__ */ O(sL, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ O(
      Bh,
      {
        id: "pdf-zoom-reset",
        onMouseDown: () => l(sp(a)),
        disabled: i === a,
        children: /* @__PURE__ */ O(aL, { color: "#000", size: "70%" })
      }
    ),
    n > 1 && /* @__PURE__ */ O(
      Bh,
      {
        id: "pdf-toggle-pagination",
        onMouseDown: () => l(qR(!e)),
        children: /* @__PURE__ */ O(
          oL,
          {
            color: "#000",
            size: "70%",
            reverse: e
          }
        )
      }
    )
  ] });
}, fL = gt.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(r) => r.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`, Bh = gt(cf)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, pL = gt(hv)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
om.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${by}/build/pdf.worker.min.mjs`
).toString();
const lm = ({ mainState: r }) => /* @__PURE__ */ O(YR, { mainState: r, children: /* @__PURE__ */ Ke(gL, { id: "pdf-renderer", "data-testid": "pdf-renderer", children: [
  /* @__PURE__ */ O(uL, {}),
  /* @__PURE__ */ O(QR, {})
] }) });
lm.fileTypes = ["pdf", "application/pdf"];
lm.weight = 0;
const gL = gt.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* width */
  &::-webkit-scrollbar {
    ${(r) => r.theme.disableThemeScrollbar ? "" : "width: 10px"};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(r) => r.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(r) => r.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(r) => r.theme.primary};
  }
`, mL = gt(Fn)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`, cm = (r) => /* @__PURE__ */ O(mL, { ...r });
cm.fileTypes = ["png", "image/png"];
cm.weight = 0;
let Ln, Xe, xd = [];
const vL = () => {
  var r = De(2, 0);
  if (r === 18761)
    Xe = !0;
  else if (r === 19789)
    Xe = !1;
  else
    throw TypeError("Invalid byte order value.");
  return Xe;
}, bL = () => {
  if (De(2, 2) !== 42)
    throw RangeError("You forgot your towel!");
  return !0;
}, yL = (r) => {
  var t = {
    // TIFF Baseline
    315: "Artist",
    258: "BitsPerSample",
    265: "CellLength",
    264: "CellWidth",
    320: "ColorMap",
    259: "Compression",
    33432: "Copyright",
    306: "DateTime",
    338: "ExtraSamples",
    266: "FillOrder",
    289: "FreeByteCounts",
    288: "FreeOffsets",
    291: "GrayResponseCurve",
    290: "GrayResponseUnit",
    316: "HostComputer",
    270: "ImageDescription",
    257: "ImageLength",
    256: "ImageWidth",
    271: "Make",
    281: "MaxSampleValue",
    280: "MinSampleValue",
    272: "Model",
    254: "NewSubfileType",
    274: "Orientation",
    262: "PhotometricInterpretation",
    284: "PlanarConfiguration",
    296: "ResolutionUnit",
    278: "RowsPerStrip",
    277: "SamplesPerPixel",
    305: "Software",
    279: "StripByteCounts",
    273: "StripOffsets",
    255: "SubfileType",
    263: "Threshholding",
    282: "XResolution",
    283: "YResolution",
    // TIFF Extended
    326: "BadFaxLines",
    327: "CleanFaxData",
    343: "ClipPath",
    328: "ConsecutiveBadFaxLines",
    433: "Decode",
    434: "DefaultImageColor",
    269: "DocumentName",
    336: "DotRange",
    321: "HalftoneHints",
    346: "Indexed",
    347: "JPEGTables",
    285: "PageName",
    297: "PageNumber",
    317: "Predictor",
    319: "PrimaryChromaticities",
    532: "ReferenceBlackWhite",
    339: "SampleFormat",
    559: "StripRowCounts",
    330: "SubIFDs",
    292: "T4Options",
    293: "T6Options",
    325: "TileByteCounts",
    323: "TileLength",
    324: "TileOffsets",
    322: "TileWidth",
    301: "TransferFunction",
    318: "WhitePoint",
    344: "XClipPathUnits",
    286: "XPosition",
    529: "YCbCrCoefficients",
    531: "YCbCrPositioning",
    530: "YCbCrSubSampling",
    345: "YClipPathUnits",
    287: "YPosition",
    // EXIF
    37378: "ApertureValue",
    40961: "ColorSpace",
    36868: "DateTimeDigitized",
    36867: "DateTimeOriginal",
    34665: "Exif IFD",
    36864: "ExifVersion",
    33434: "ExposureTime",
    41728: "FileSource",
    37385: "Flash",
    40960: "FlashpixVersion",
    33437: "FNumber",
    42016: "ImageUniqueID",
    37384: "LightSource",
    37500: "MakerNote",
    37377: "ShutterSpeedValue",
    37510: "UserComment",
    // IPTC
    33723: "IPTC",
    // ICC
    34675: "ICC Profile",
    // XMP
    700: "XMP",
    // GDAL
    42112: "GDAL_METADATA",
    42113: "GDAL_NODATA",
    // Photoshop
    34377: "Photoshop"
  }, e;
  return r in t ? e = t[r] : e = "Tag" + r, e;
}, wL = (r) => {
  var t = {
    1: "BYTE",
    2: "ASCII",
    3: "SHORT",
    4: "LONG",
    5: "RATIONAL",
    6: "SBYTE",
    7: "UNDEFINED",
    8: "SSHORT",
    9: "SLONG",
    10: "SRATIONAL",
    11: "FLOAT",
    12: "DOUBLE"
  }, e;
  return r in t && (e = t[r]), e;
}, AL = (r) => {
  var t;
  return ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(r) !== -1 ? t = 1 : ["SHORT", "SSHORT"].indexOf(r) !== -1 ? t = 2 : ["LONG", "SLONG", "FLOAT"].indexOf(r) !== -1 ? t = 4 : ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(r) !== -1 && (t = 8), t;
}, _L = (r, t, e) => {
  e = e || 0;
  var i = Math.floor(e / 8), n = t + i, s = e + r, a = 32 - r;
  if (s <= 0)
    throw RangeError("No bits requested");
  if (s <= 8)
    var l = 24 + e, c = Ln.getUint8(n, Xe);
  else if (s <= 16)
    var l = 16 + e, c = Ln.getUint16(n, Xe);
  else if (s <= 32)
    var l = e, c = Ln.getUint32(n, Xe);
  else
    throw RangeError("Too many bits requested");
  var d = {
    bits: c << l >>> a,
    byteOffset: n + Math.floor(s / 8),
    bitOffset: s % 8
  };
  return d;
}, De = (r, t) => {
  if (r <= 0)
    throw RangeError("No bytes requested");
  if (r <= 1)
    return Ln.getUint8(t, Xe);
  if (r <= 2)
    return Ln.getUint16(t, Xe);
  if (r <= 3)
    return Ln.getUint32(t, Xe) >>> 8;
  if (r <= 4)
    return Ln.getUint32(t, Xe);
  throw RangeError("Too many bytes requested");
}, EL = (r, t, e, i) => {
  var n = [], s = AL(t), a = s * e;
  if (a <= 4) {
    if (Xe === !1)
      var l = i >>> (4 - s) * 8;
    else
      var l = i;
    n.push(l);
  } else
    for (var c = 0; c < e; c++) {
      var d = s * c;
      if (s >= 8)
        if (["RATIONAL", "SRATIONAL"].indexOf(t) !== -1)
          n.push(De(4, i + d)), n.push(De(4, i + d + 4));
        else
          throw TypeError("Can't handle this field type or size");
      else
        n.push(De(s, i + d));
    }
  return t === "ASCII" && n.forEach(function(h, p, g) {
    g[p] = String.fromCharCode(h);
  }), n;
}, ws = (r, t) => {
  var e = Math.pow(2, 8 - t);
  return Math.floor(r * e + (e - 1));
}, b0 = (r, t, e, i) => (typeof i > "u" && (i = 1), "rgba(" + r + ", " + t + ", " + e + ", " + i + ")"), Hy = (r) => {
  for (var t = De(2, r), e = [], i = r + 2, n = 0; n < t; i += 12, n++) {
    var s = De(2, i), a = De(2, i + 2), l = De(4, i + 4), c = De(4, i + 8), d = yL(s), h = wL(a), p = EL(
      d,
      h,
      l,
      c
    );
    e[d] = { type: h, values: p };
  }
  xd.push(e);
  var g = De(4, i);
  return g === 0 ? xd : Hy(g);
}, xL = (r, t) => {
  let e = t || document.createElement("canvas");
  if (r && (Ln = new DataView(r), Xe = vL(), !!bL())) {
    var i = De(4, 4);
    xd = Hy(i);
    var n = xd[0], s = n.ImageWidth.values[0], a = n.ImageLength.values[0];
    e.width = s, e.height = a;
    var l = [], c = n.Compression ? n.Compression.values[0] : 1, d = n.SamplesPerPixel.values[0], h = [], p = 0, g = !1;
    if (n.BitsPerSample.values.forEach(function(jt, at, _e) {
      h[at] = {
        bitsPerSample: jt,
        hasBytesPerSample: !1,
        bytesPerSample: void 0
      }, jt % 8 === 0 && (h[at].hasBytesPerSample = !0, h[at].bytesPerSample = jt / 8), p += jt;
    }, void 0), p % 8 === 0) {
      g = !0;
      var v = p / 8;
    }
    var b = n.StripOffsets.values, _ = b.length;
    if (n.StripByteCounts)
      var C = n.StripByteCounts.values;
    else if (_ === 1)
      var C = [
        Math.ceil(s * a * p / 8)
      ];
    else
      throw Error("Cannot recover from missing StripByteCounts");
    for (var E = 0; E < _; E++) {
      var R = b[E];
      l[E] = [];
      for (var L = C[E], M = 0, D = 0, N = 1, U = !0, S = [], T = 0, I = 0, k = 0; M < L; M += N)
        switch (c) {
          case 1:
            for (var H = 0, S = []; H < d; H++)
              if (h[H].hasBytesPerSample) {
                var j = h[H].bytesPerSample * H;
                S.push(
                  De(
                    h[H].bytesPerSample,
                    R + M + j
                  )
                );
              } else {
                var z = _L(
                  h[H].bitsPerSample,
                  R + M,
                  D
                );
                throw S.push(z.bits), M = z.byteOffset - R, D = z.bitOffset, RangeError("Cannot handle sub-byte bits per sample");
              }
            if (l[E].push(S), g)
              N = v;
            else
              throw N = 0, RangeError("Cannot handle sub-byte bits per pixel");
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 32773:
            if (U) {
              U = !1;
              var Y = 1, K = 1, B = Ln.getInt8(
                R + M,
                Xe
              );
              B >= 0 && B <= 127 ? Y = B + 1 : B >= -127 && B <= -1 ? K = -B + 1 : U = !0;
            } else {
              for (var V = De(1, R + M), H = 0; H < K; H++) {
                if (h[I].hasBytesPerSample)
                  k = k << 8 * T | V, T++, T === h[I].bytesPerSample && (S.push(k), k = T = 0, I++);
                else
                  throw RangeError("Cannot handle sub-byte bits per sample");
                I === d && (l[E].push(S), S = [], I = 0);
              }
              Y--, Y === 0 && (U = !0);
            }
            N = 1;
            break;
        }
    }
    if (e.getContext) {
      var W = e.getContext("2d");
      if (W.fillStyle = b0(255, 255, 255, 0), n.RowsPerStrip)
        var xt = n.RowsPerStrip.values[0];
      else
        var xt = a;
      var mt = l.length, G = a % xt, et = G === 0 ? xt : G, tt = xt, it = 0, ct = n.PhotometricInterpretation.values[0], J = [], Et = 0;
      if (n.ExtraSamples && (J = n.ExtraSamples.values, Et = J.length), n.ColorMap)
        var X = n.ColorMap.values, Q = Math.pow(2, h[0].bitsPerSample);
      for (var E = 0; E < mt; E++) {
        E + 1 === mt && (tt = et);
        for (var ht = l[E].length, St = it * E, rt = 0, wt = 0; wt < ht; rt++)
          for (var ft = 0; ft < s; ft++, wt++) {
            var q = l[E][wt], dt = 0, Ct = 0, Nt = 0, Wt = 1;
            if (Et > 0) {
              for (var Ht = 0; Ht < Et; Ht++)
                if (J[Ht] === 1 || J[Ht] === 2) {
                  Wt = q[3 + Ht] / 256;
                  break;
                }
            }
            switch (ct) {
              case 0:
                if (h[0].hasBytesPerSample)
                  var Tt = Math.pow(
                    16,
                    h[0].bytesPerSample * 2
                  );
                q.forEach(function(at, _e, Ee) {
                  Ee[_e] = Tt - at;
                });
              case 1:
                dt = Ct = Nt = ws(
                  q[0],
                  h[0].bitsPerSample
                );
                break;
              case 2:
                dt = ws(
                  q[0],
                  h[0].bitsPerSample
                ), Ct = ws(
                  q[1],
                  h[1].bitsPerSample
                ), Nt = ws(
                  q[2],
                  h[2].bitsPerSample
                );
                break;
              case 3:
                if (X === void 0)
                  throw Error("Palette image missing color map");
                var Pt = q[0];
                dt = ws(X[Pt], 16), Ct = ws(
                  X[Q + Pt],
                  16
                ), Nt = ws(
                  X[2 * Q + Pt],
                  16
                );
                break;
              case 4:
                throw RangeError("Not Yet Implemented: Transparency mask");
              case 5:
                throw RangeError("Not Yet Implemented: CMYK");
              case 6:
                throw RangeError("Not Yet Implemented: YCbCr");
              case 8:
                throw RangeError("Not Yet Implemented: CIELab");
              default:
                throw RangeError(
                  "Unknown Photometric Interpretation:",
                  ct
                );
            }
            W.fillStyle = b0(dt, Ct, Nt, Wt), W.fillRect(ft, St + rt, 1, 1);
          }
        it = tt;
      }
    }
    return e;
  }
}, Rf = (r) => {
  const {
    mainState: { currentDocument: t }
  } = r, { t: e } = Ur(), [i, n] = Eo(!1), [s, a] = Eo(!1);
  return bt(() => {
    if (!t || i)
      return;
    const l = document.getElementById("tiff-img");
    try {
      l && xL(t.fileData, l), n(!0);
    } catch {
      a(!0);
    }
  }, [t, i]), s ? /* @__PURE__ */ O(Fn, { ...r, children: /* @__PURE__ */ O("div", { children: e("brokenFile") }) }) : /* @__PURE__ */ O(Fn, { ...r, children: /* @__PURE__ */ O(SL, { id: "tiff-img" }) });
};
Rf.fileTypes = ["tif", "tiff", "image/tif", "image/tiff"];
Rf.weight = 0;
Rf.fileLoader = wS;
const SL = gt.canvas`
  max-width: 95%;
  max-height: 95%;
`, Lf = ({ mainState: { currentDocument: r } }) => /* @__PURE__ */ O(CL, { id: "txt-renderer", children: r == null ? void 0 : r.fileData });
Lf.fileTypes = ["txt", "text/plain"];
Lf.weight = 0;
Lf.fileLoader = gv;
const CL = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
var jy = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, t) {
  (function(e, i) {
    r.exports = i();
  })(Io, function e() {
    var i = typeof self < "u" ? self : typeof window < "u" ? window : i !== void 0 ? i : {}, n = !i.document && !!i.postMessage, s = i.IS_PAPA_WORKER || !1, a = {}, l = 0, c = { parse: function(S, T) {
      var I = (T = T || {}).dynamicTyping || !1;
      if (U(I) && (T.dynamicTypingFunction = I, I = {}), T.dynamicTyping = I, T.transform = !!U(T.transform) && T.transform, T.worker && c.WORKERS_SUPPORTED) {
        var k = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var j = (Y = i.URL || i.webkitURL || null, K = e.toString(), c.BLOB_URL || (c.BLOB_URL = Y.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", K, ")();"], { type: "text/javascript" })))), z = new i.Worker(j), Y, K;
          return z.onmessage = R, z.id = l++, a[z.id] = z;
        }();
        return k.userStep = T.step, k.userChunk = T.chunk, k.userComplete = T.complete, k.userError = T.error, T.step = U(T.step), T.chunk = U(T.chunk), T.complete = U(T.complete), T.error = U(T.error), delete T.worker, void k.postMessage({ input: S, config: T, workerId: k.id });
      }
      var H = null;
      return c.NODE_STREAM_INPUT, typeof S == "string" ? (S = function(j) {
        return j.charCodeAt(0) === 65279 ? j.slice(1) : j;
      }(S), H = T.download ? new p(T) : new v(T)) : S.readable === !0 && U(S.read) && U(S.on) ? H = new b(T) : (i.File && S instanceof File || S instanceof Object) && (H = new g(T)), H.stream(S);
    }, unparse: function(S, T) {
      var I = !1, k = !0, H = ",", j = `\r
`, z = '"', Y = z + z, K = !1, B = null, V = !1;
      (function() {
        if (typeof T == "object") {
          if (typeof T.delimiter != "string" || c.BAD_DELIMITERS.filter(function(G) {
            return T.delimiter.indexOf(G) !== -1;
          }).length || (H = T.delimiter), (typeof T.quotes == "boolean" || typeof T.quotes == "function" || Array.isArray(T.quotes)) && (I = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (K = T.skipEmptyLines), typeof T.newline == "string" && (j = T.newline), typeof T.quoteChar == "string" && (z = T.quoteChar), typeof T.header == "boolean" && (k = T.header), Array.isArray(T.columns)) {
            if (T.columns.length === 0)
              throw new Error("Option columns is empty");
            B = T.columns;
          }
          T.escapeChar !== void 0 && (Y = T.escapeChar + z), (typeof T.escapeFormulae == "boolean" || T.escapeFormulae instanceof RegExp) && (V = T.escapeFormulae instanceof RegExp ? T.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var W = new RegExp(C(z), "g");
      if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
        if (!S.length || Array.isArray(S[0]))
          return xt(null, S, K);
        if (typeof S[0] == "object")
          return xt(B || Object.keys(S[0]), S, K);
      } else if (typeof S == "object")
        return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || B), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), xt(S.fields || [], S.data || [], K);
      throw new Error("Unable to serialize unrecognized input");
      function xt(G, et, tt) {
        var it = "";
        typeof G == "string" && (G = JSON.parse(G)), typeof et == "string" && (et = JSON.parse(et));
        var ct = Array.isArray(G) && 0 < G.length, J = !Array.isArray(et[0]);
        if (ct && k) {
          for (var Et = 0; Et < G.length; Et++)
            0 < Et && (it += H), it += mt(G[Et], Et);
          0 < et.length && (it += j);
        }
        for (var X = 0; X < et.length; X++) {
          var Q = ct ? G.length : et[X].length, ht = !1, St = ct ? Object.keys(et[X]).length === 0 : et[X].length === 0;
          if (tt && !ct && (ht = tt === "greedy" ? et[X].join("").trim() === "" : et[X].length === 1 && et[X][0].length === 0), tt === "greedy" && ct) {
            for (var rt = [], wt = 0; wt < Q; wt++) {
              var ft = J ? G[wt] : wt;
              rt.push(et[X][ft]);
            }
            ht = rt.join("").trim() === "";
          }
          if (!ht) {
            for (var q = 0; q < Q; q++) {
              0 < q && !St && (it += H);
              var dt = ct && J ? G[q] : q;
              it += mt(et[X][dt], q);
            }
            X < et.length - 1 && (!tt || 0 < Q && !St) && (it += j);
          }
        }
        return it;
      }
      function mt(G, et) {
        if (G == null)
          return "";
        if (G.constructor === Date)
          return JSON.stringify(G).slice(1, 25);
        var tt = !1;
        V && typeof G == "string" && V.test(G) && (G = "'" + G, tt = !0);
        var it = G.toString().replace(W, Y);
        return (tt = tt || I === !0 || typeof I == "function" && I(G, et) || Array.isArray(I) && I[et] || function(ct, J) {
          for (var Et = 0; Et < J.length; Et++)
            if (-1 < ct.indexOf(J[Et]))
              return !0;
          return !1;
        }(it, c.BAD_DELIMITERS) || -1 < it.indexOf(H) || it.charAt(0) === " " || it.charAt(it.length - 1) === " ") ? z + it + z : it;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !n && !!i.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = E, c.ParserHandle = _, c.NetworkStreamer = p, c.FileStreamer = g, c.StringStreamer = v, c.ReadableStreamStreamer = b, i.jQuery) {
      var d = i.jQuery;
      d.fn.parse = function(S) {
        var T = S.config || {}, I = [];
        return this.each(function(j) {
          if (!(d(this).prop("tagName").toUpperCase() === "INPUT" && d(this).attr("type").toLowerCase() === "file" && i.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var z = 0; z < this.files.length; z++)
            I.push({ file: this.files[z], inputElem: this, instanceConfig: d.extend({}, T) });
        }), k(), this;
        function k() {
          if (I.length !== 0) {
            var j, z, Y, K, B = I[0];
            if (U(S.before)) {
              var V = S.before(B.file, B.inputElem);
              if (typeof V == "object") {
                if (V.action === "abort")
                  return j = "AbortError", z = B.file, Y = B.inputElem, K = V.reason, void (U(S.error) && S.error({ name: j }, z, Y, K));
                if (V.action === "skip")
                  return void H();
                typeof V.config == "object" && (B.instanceConfig = d.extend(B.instanceConfig, V.config));
              } else if (V === "skip")
                return void H();
            }
            var W = B.instanceConfig.complete;
            B.instanceConfig.complete = function(xt) {
              U(W) && W(xt, B.file, B.inputElem), H();
            }, c.parse(B.file, B.instanceConfig);
          } else
            U(S.complete) && S.complete();
        }
        function H() {
          I.splice(0, 1), k();
        }
      };
    }
    function h(S) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
        var I = D(T);
        I.chunkSize = parseInt(I.chunkSize), T.step || T.chunk || (I.chunkSize = null), this._handle = new _(I), (this._handle.streamer = this)._config = I;
      }).call(this, S), this.parseChunk = function(T, I) {
        if (this.isFirstChunk && U(this._config.beforeFirstChunk)) {
          var k = this._config.beforeFirstChunk(T);
          k !== void 0 && (T = k);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var H = this._partialLine + T;
        this._partialLine = "";
        var j = this._handle.parse(H, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var z = j.meta.cursor;
          this._finished || (this._partialLine = H.substring(z - this._baseIndex), this._baseIndex = z), j && j.data && (this._rowCount += j.data.length);
          var Y = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (s)
            i.postMessage({ results: j, workerId: c.WORKER_ID, finished: Y });
          else if (U(this._config.chunk) && !I) {
            if (this._config.chunk(j, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            j = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(j.data), this._completeResults.errors = this._completeResults.errors.concat(j.errors), this._completeResults.meta = j.meta), this._completed || !Y || !U(this._config.complete) || j && j.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), Y || j && j.meta.paused || this._nextChunk(), j;
        }
        this._halted = !0;
      }, this._sendError = function(T) {
        U(this._config.error) ? this._config.error(T) : s && this._config.error && i.postMessage({ workerId: c.WORKER_ID, error: T, finished: !1 });
      };
    }
    function p(S) {
      var T;
      (S = S || {}).chunkSize || (S.chunkSize = c.RemoteChunkSize), h.call(this, S), this._nextChunk = n ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(I) {
        this._input = I, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), n || (T.onload = N(this._chunkLoaded, this), T.onerror = N(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
            var I = this._config.downloadRequestHeaders;
            for (var k in I)
              T.setRequestHeader(k, I[k]);
          }
          if (this._config.chunkSize) {
            var H = this._start + this._config.chunkSize - 1;
            T.setRequestHeader("Range", "bytes=" + this._start + "-" + H);
          }
          try {
            T.send(this._config.downloadRequestBody);
          } catch (j) {
            this._chunkError(j.message);
          }
          n && T.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : T.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(I) {
          var k = I.getResponseHeader("Content-Range");
          return k === null ? -1 : parseInt(k.substring(k.lastIndexOf("/") + 1));
        }(T), this.parseChunk(T.responseText)));
      }, this._chunkError = function(I) {
        var k = T.statusText || I;
        this._sendError(new Error(k));
      };
    }
    function g(S) {
      var T, I;
      (S = S || {}).chunkSize || (S.chunkSize = c.LocalChunkSize), h.call(this, S);
      var k = typeof FileReader < "u";
      this.stream = function(H) {
        this._input = H, I = H.slice || H.webkitSlice || H.mozSlice, k ? ((T = new FileReader()).onload = N(this._chunkLoaded, this), T.onerror = N(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var H = this._input;
        if (this._config.chunkSize) {
          var j = Math.min(this._start + this._config.chunkSize, this._input.size);
          H = I.call(H, this._start, j);
        }
        var z = T.readAsText(H, this._config.encoding);
        k || this._chunkLoaded({ target: { result: z } });
      }, this._chunkLoaded = function(H) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(H.target.result);
      }, this._chunkError = function() {
        this._sendError(T.error);
      };
    }
    function v(S) {
      var T;
      h.call(this, S = S || {}), this.stream = function(I) {
        return T = I, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var I, k = this._config.chunkSize;
          return k ? (I = T.substring(0, k), T = T.substring(k)) : (I = T, T = ""), this._finished = !T, this.parseChunk(I);
        }
      };
    }
    function b(S) {
      h.call(this, S = S || {});
      var T = [], I = !0, k = !1;
      this.pause = function() {
        h.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        h.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(H) {
        this._input = H, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        k && T.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : I = !0;
      }, this._streamData = N(function(H) {
        try {
          T.push(typeof H == "string" ? H : H.toString(this._config.encoding)), I && (I = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
        } catch (j) {
          this._streamError(j);
        }
      }, this), this._streamError = N(function(H) {
        this._streamCleanUp(), this._sendError(H);
      }, this), this._streamEnd = N(function() {
        this._streamCleanUp(), k = !0, this._streamData("");
      }, this), this._streamCleanUp = N(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function _(S) {
      var T, I, k, H = Math.pow(2, 53), j = -H, z = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Y = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, K = this, B = 0, V = 0, W = !1, xt = !1, mt = [], G = { data: [], errors: [], meta: {} };
      if (U(S.step)) {
        var et = S.step;
        S.step = function(X) {
          if (G = X, ct())
            it();
          else {
            if (it(), G.data.length === 0)
              return;
            B += X.data.length, S.preview && B > S.preview ? I.abort() : (G.data = G.data[0], et(G, K));
          }
        };
      }
      function tt(X) {
        return S.skipEmptyLines === "greedy" ? X.join("").trim() === "" : X.length === 1 && X[0].length === 0;
      }
      function it() {
        return G && k && (Et("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), k = !1), S.skipEmptyLines && (G.data = G.data.filter(function(X) {
          return !tt(X);
        })), ct() && function() {
          if (!G)
            return;
          function X(ht, St) {
            U(S.transformHeader) && (ht = S.transformHeader(ht, St)), mt.push(ht);
          }
          if (Array.isArray(G.data[0])) {
            for (var Q = 0; ct() && Q < G.data.length; Q++)
              G.data[Q].forEach(X);
            G.data.splice(0, 1);
          } else
            G.data.forEach(X);
        }(), function() {
          if (!G || !S.header && !S.dynamicTyping && !S.transform)
            return G;
          function X(ht, St) {
            var rt, wt = S.header ? {} : [];
            for (rt = 0; rt < ht.length; rt++) {
              var ft = rt, q = ht[rt];
              S.header && (ft = rt >= mt.length ? "__parsed_extra" : mt[rt]), S.transform && (q = S.transform(q, ft)), q = J(ft, q), ft === "__parsed_extra" ? (wt[ft] = wt[ft] || [], wt[ft].push(q)) : wt[ft] = q;
            }
            return S.header && (rt > mt.length ? Et("FieldMismatch", "TooManyFields", "Too many fields: expected " + mt.length + " fields but parsed " + rt, V + St) : rt < mt.length && Et("FieldMismatch", "TooFewFields", "Too few fields: expected " + mt.length + " fields but parsed " + rt, V + St)), wt;
          }
          var Q = 1;
          return !G.data.length || Array.isArray(G.data[0]) ? (G.data = G.data.map(X), Q = G.data.length) : G.data = X(G.data, 0), S.header && G.meta && (G.meta.fields = mt), V += Q, G;
        }();
      }
      function ct() {
        return S.header && mt.length === 0;
      }
      function J(X, Q) {
        return ht = X, S.dynamicTypingFunction && S.dynamicTyping[ht] === void 0 && (S.dynamicTyping[ht] = S.dynamicTypingFunction(ht)), (S.dynamicTyping[ht] || S.dynamicTyping) === !0 ? Q === "true" || Q === "TRUE" || Q !== "false" && Q !== "FALSE" && (function(St) {
          if (z.test(St)) {
            var rt = parseFloat(St);
            if (j < rt && rt < H)
              return !0;
          }
          return !1;
        }(Q) ? parseFloat(Q) : Y.test(Q) ? new Date(Q) : Q === "" ? null : Q) : Q;
        var ht;
      }
      function Et(X, Q, ht, St) {
        var rt = { type: X, code: Q, message: ht };
        St !== void 0 && (rt.row = St), G.errors.push(rt);
      }
      this.parse = function(X, Q, ht) {
        var St = S.quoteChar || '"';
        if (S.newline || (S.newline = function(ft, q) {
          ft = ft.substring(0, 1048576);
          var dt = new RegExp(C(q) + "([^]*?)" + C(q), "gm"), Ct = (ft = ft.replace(dt, "")).split("\r"), Nt = ft.split(`
`), Wt = 1 < Nt.length && Nt[0].length < Ct[0].length;
          if (Ct.length === 1 || Wt)
            return `
`;
          for (var Ht = 0, Tt = 0; Tt < Ct.length; Tt++)
            Ct[Tt][0] === `
` && Ht++;
          return Ht >= Ct.length / 2 ? `\r
` : "\r";
        }(X, St)), k = !1, S.delimiter)
          U(S.delimiter) && (S.delimiter = S.delimiter(X), G.meta.delimiter = S.delimiter);
        else {
          var rt = function(ft, q, dt, Ct, Nt) {
            var Wt, Ht, Tt, Pt;
            Nt = Nt || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var jt = 0; jt < Nt.length; jt++) {
              var at = Nt[jt], _e = 0, Ee = 0, se = 0;
              Tt = void 0;
              for (var Ze = new E({ comments: Ct, delimiter: at, newline: q, preview: 10 }).parse(ft), y = 0; y < Ze.data.length; y++)
                if (dt && tt(Ze.data[y]))
                  se++;
                else {
                  var u = Ze.data[y].length;
                  Ee += u, Tt !== void 0 ? 0 < u && (_e += Math.abs(u - Tt), Tt = u) : Tt = u;
                }
              0 < Ze.data.length && (Ee /= Ze.data.length - se), (Ht === void 0 || _e <= Ht) && (Pt === void 0 || Pt < Ee) && 1.99 < Ee && (Ht = _e, Wt = at, Pt = Ee);
            }
            return { successful: !!(S.delimiter = Wt), bestDelimiter: Wt };
          }(X, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess);
          rt.successful ? S.delimiter = rt.bestDelimiter : (k = !0, S.delimiter = c.DefaultDelimiter), G.meta.delimiter = S.delimiter;
        }
        var wt = D(S);
        return S.preview && S.header && wt.preview++, T = X, I = new E(wt), G = I.parse(T, Q, ht), it(), W ? { meta: { paused: !0 } } : G || { meta: { paused: !1 } };
      }, this.paused = function() {
        return W;
      }, this.pause = function() {
        W = !0, I.abort(), T = U(S.chunk) ? "" : T.substring(I.getCharIndex());
      }, this.resume = function() {
        K.streamer._halted ? (W = !1, K.streamer.parseChunk(T, !0)) : setTimeout(K.resume, 3);
      }, this.aborted = function() {
        return xt;
      }, this.abort = function() {
        xt = !0, I.abort(), G.meta.aborted = !0, U(S.complete) && S.complete(G), T = "";
      };
    }
    function C(S) {
      return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(S) {
      var T, I = (S = S || {}).delimiter, k = S.newline, H = S.comments, j = S.step, z = S.preview, Y = S.fastMode, K = T = S.quoteChar === void 0 || S.quoteChar === null ? '"' : S.quoteChar;
      if (S.escapeChar !== void 0 && (K = S.escapeChar), (typeof I != "string" || -1 < c.BAD_DELIMITERS.indexOf(I)) && (I = ","), H === I)
        throw new Error("Comment character same as delimiter");
      H === !0 ? H = "#" : (typeof H != "string" || -1 < c.BAD_DELIMITERS.indexOf(H)) && (H = !1), k !== `
` && k !== "\r" && k !== `\r
` && (k = `
`);
      var B = 0, V = !1;
      this.parse = function(W, xt, mt) {
        if (typeof W != "string")
          throw new Error("Input must be a string");
        var G = W.length, et = I.length, tt = k.length, it = H.length, ct = U(j), J = [], Et = [], X = [], Q = B = 0;
        if (!W)
          return f();
        if (S.header && !xt) {
          var ht = W.split(k)[0].split(I), St = [], rt = {}, wt = !1;
          for (var ft in ht) {
            var q = ht[ft];
            U(S.transformHeader) && (q = S.transformHeader(q, ft));
            var dt = q, Ct = rt[q] || 0;
            for (0 < Ct && (wt = !0, dt = q + "_" + Ct), rt[q] = Ct + 1; St.includes(dt); )
              dt = dt + "_" + Ct;
            St.push(dt);
          }
          if (wt) {
            var Nt = W.split(k);
            Nt[0] = St.join(I), W = Nt.join(k);
          }
        }
        if (Y || Y !== !1 && W.indexOf(T) === -1) {
          for (var Wt = W.split(k), Ht = 0; Ht < Wt.length; Ht++) {
            if (X = Wt[Ht], B += X.length, Ht !== Wt.length - 1)
              B += k.length;
            else if (mt)
              return f();
            if (!H || X.substring(0, it) !== H) {
              if (ct) {
                if (J = [], se(X.split(I)), x(), V)
                  return f();
              } else
                se(X.split(I));
              if (z && z <= Ht)
                return J = J.slice(0, z), f(!0);
            }
          }
          return f();
        }
        for (var Tt = W.indexOf(I, B), Pt = W.indexOf(k, B), jt = new RegExp(C(K) + C(T), "g"), at = W.indexOf(T, B); ; )
          if (W[B] !== T)
            if (H && X.length === 0 && W.substring(B, B + it) === H) {
              if (Pt === -1)
                return f();
              B = Pt + tt, Pt = W.indexOf(k, B), Tt = W.indexOf(I, B);
            } else if (Tt !== -1 && (Tt < Pt || Pt === -1))
              X.push(W.substring(B, Tt)), B = Tt + et, Tt = W.indexOf(I, B);
            else {
              if (Pt === -1)
                break;
              if (X.push(W.substring(B, Pt)), u(Pt + tt), ct && (x(), V))
                return f();
              if (z && J.length >= z)
                return f(!0);
            }
          else
            for (at = B, B++; ; ) {
              if ((at = W.indexOf(T, at + 1)) === -1)
                return mt || Et.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: B }), y();
              if (at === G - 1)
                return y(W.substring(B, at).replace(jt, T));
              if (T !== K || W[at + 1] !== K) {
                if (T === K || at === 0 || W[at - 1] !== K) {
                  Tt !== -1 && Tt < at + 1 && (Tt = W.indexOf(I, at + 1)), Pt !== -1 && Pt < at + 1 && (Pt = W.indexOf(k, at + 1));
                  var _e = Ze(Pt === -1 ? Tt : Math.min(Tt, Pt));
                  if (W.substr(at + 1 + _e, et) === I) {
                    X.push(W.substring(B, at).replace(jt, T)), W[B = at + 1 + _e + et] !== T && (at = W.indexOf(T, B)), Tt = W.indexOf(I, B), Pt = W.indexOf(k, B);
                    break;
                  }
                  var Ee = Ze(Pt);
                  if (W.substring(at + 1 + Ee, at + 1 + Ee + tt) === k) {
                    if (X.push(W.substring(B, at).replace(jt, T)), u(at + 1 + Ee + tt), Tt = W.indexOf(I, B), at = W.indexOf(T, B), ct && (x(), V))
                      return f();
                    if (z && J.length >= z)
                      return f(!0);
                    break;
                  }
                  Et.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: B }), at++;
                }
              } else
                at++;
            }
        return y();
        function se(P) {
          J.push(P), Q = B;
        }
        function Ze(P) {
          var F = 0;
          if (P !== -1) {
            var $ = W.substring(at + 1, P);
            $ && $.trim() === "" && (F = $.length);
          }
          return F;
        }
        function y(P) {
          return mt || (P === void 0 && (P = W.substring(B)), X.push(P), B = G, se(X), ct && x()), f();
        }
        function u(P) {
          B = P, se(X), X = [], Pt = W.indexOf(k, B);
        }
        function f(P) {
          return { data: J, errors: Et, meta: { delimiter: I, linebreak: k, aborted: V, truncated: !!P, cursor: Q + (xt || 0) } };
        }
        function x() {
          j(f()), J = [], Et = [];
        }
      }, this.abort = function() {
        V = !0;
      }, this.getCharIndex = function() {
        return B;
      };
    }
    function R(S) {
      var T = S.data, I = a[T.workerId], k = !1;
      if (T.error)
        I.userError(T.error, T.file);
      else if (T.results && T.results.data) {
        var H = { abort: function() {
          k = !0, L(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: M, resume: M };
        if (U(I.userStep)) {
          for (var j = 0; j < T.results.data.length && (I.userStep({ data: T.results.data[j], errors: T.results.errors, meta: T.results.meta }, H), !k); j++)
            ;
          delete T.results;
        } else
          U(I.userChunk) && (I.userChunk(T.results, H, T.file), delete T.results);
      }
      T.finished && !k && L(T.workerId, T.results);
    }
    function L(S, T) {
      var I = a[S];
      U(I.userComplete) && I.userComplete(T), I.terminate(), delete a[S];
    }
    function M() {
      throw new Error("Not implemented.");
    }
    function D(S) {
      if (typeof S != "object" || S === null)
        return S;
      var T = Array.isArray(S) ? [] : {};
      for (var I in S)
        T[I] = D(S[I]);
      return T;
    }
    function N(S, T) {
      return function() {
        S.apply(T, arguments);
      };
    }
    function U(S) {
      return typeof S == "function";
    }
    return s && (i.onmessage = function(S) {
      var T = S.data;
      if (c.WORKER_ID === void 0 && T && (c.WORKER_ID = T.workerId), typeof T.input == "string")
        i.postMessage({ workerId: c.WORKER_ID, results: c.parse(T.input, T.config), finished: !0 });
      else if (i.File && T.input instanceof File || T.input instanceof Object) {
        var I = c.parse(T.input, T.config);
        I && i.postMessage({ workerId: c.WORKER_ID, results: I, finished: !0 });
      }
    }), (p.prototype = Object.create(h.prototype)).constructor = p, (g.prototype = Object.create(h.prototype)).constructor = g, (v.prototype = Object.create(v.prototype)).constructor = v, (b.prototype = Object.create(h.prototype)).constructor = b, c;
  });
})(jy);
var TL = jy.exports;
const PL = /* @__PURE__ */ x0(TL), kf = ({
  mainState: { currentDocument: r, config: t }
}) => {
  const [e, i] = Eo([]);
  return bt(() => {
    var n;
    if (r != null && r.fileData) {
      const s = PL.parse(r.fileData, {
        delimiter: (t == null ? void 0 : t.csvDelimiter) ?? ","
      });
      !((n = s.errors) != null && n.length) && s.data && i(s.data);
    }
  }, [r, t == null ? void 0 : t.csvDelimiter]), e.length ? /* @__PURE__ */ O(RL, { children: /* @__PURE__ */ Ke(LL, { children: [
    /* @__PURE__ */ O("thead", { children: /* @__PURE__ */ O("tr", { children: e[0].map((n) => /* @__PURE__ */ O("th", { children: n }, n)) }) }),
    /* @__PURE__ */ O("tbody", { children: e.slice(1, e.length).map((n) => /* @__PURE__ */ O("tr", { children: n.map((s) => /* @__PURE__ */ O("td", { children: s }, s)) }, n.join(""))) })
  ] }) }) : null;
};
kf.fileTypes = ["csv", "text/csv"];
kf.weight = 0;
kf.fileLoader = gv;
const RL = gt.div`
  width: 100%;
`, LL = gt.table`
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 5px 10px;

    &:empty {
      display: none;
    }
  }
`, hm = (r) => /* @__PURE__ */ O(Fn, { ...r });
hm.fileTypes = ["gif", "image/gif"];
hm.weight = 0;
const dm = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ O(kL, { id: "video-renderer", children: /* @__PURE__ */ O(IL, { controls: !0, src: r.uri }) }) : null;
dm.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
dm.weight = 0;
const kL = gt.div`
  width: 100%;
`, IL = gt.video`
  width: 100%;
  height: 100%;
  border: 0;
`, um = (r) => /* @__PURE__ */ O(Fn, { ...r });
um.fileTypes = ["webp", "image/webp"];
um.weight = 0;
const FL = [
  Xg,
  df,
  Yg,
  uf,
  lm,
  cm,
  Rf,
  Lf,
  kf,
  hm,
  dm,
  um
], ML = Dg((r, t) => {
  const { documents: e, theme: i } = r;
  if (!e)
    throw new Error("Please provide an array of documents to DocViewer!");
  return /* @__PURE__ */ O(
    Gx,
    {
      ref: t,
      pluginRenderers: FL,
      ...r,
      children: /* @__PURE__ */ O(
        Xy,
        {
          theme: i ? { ...jm, ...i } : jm,
          children: /* @__PURE__ */ Ke(
            DL,
            {
              id: "react-doc-viewer",
              "data-testid": "react-doc-viewer",
              className: r.className,
              style: r.style,
              children: [
                /* @__PURE__ */ O(bS, {}),
                /* @__PURE__ */ O(CS, {})
              ]
            }
          )
        }
      )
    }
  );
}), qL = Wy(ML), DL = gt.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
`;
export {
  pp as B,
  kf as C,
  qL as D,
  df as H,
  Yg as J,
  uf as M,
  lm as P,
  Rf as T,
  dm as V,
  um as W,
  UL as a,
  FL as b,
  Io as c,
  GL as d,
  wS as e,
  pv as f,
  x0 as g,
  jL as h,
  AS as i,
  Xg as j,
  cm as k,
  Lf as l,
  hm as m,
  $n as p,
  HL as s,
  gv as t
};
