"use strict";

(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver(n => {
    for (const o of n) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function t(n) {
    const o = {};
    return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = t(n);
    fetch(n.href, o);
  }
})();
function sm(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var $B = {
    exports: {}
  },
  xs = {},
  qB = {
    exports: {}
  },
  P = {}; /**
          * @license React
          * react.production.min.js
          *
          * Copyright (c) Facebook, Inc. and its affiliates.
          *
          * This source code is licensed under the MIT license found in the
          * LICENSE file in the root directory of this source tree.
          */
var wo = Symbol.for("react.element"),
  am = Symbol.for("react.portal"),
  lm = Symbol.for("react.fragment"),
  um = Symbol.for("react.strict_mode"),
  cm = Symbol.for("react.profiler"),
  fm = Symbol.for("react.provider"),
  dm = Symbol.for("react.context"),
  Bm = Symbol.for("react.forward_ref"),
  hm = Symbol.for("react.suspense"),
  gm = Symbol.for("react.memo"),
  pm = Symbol.for("react.lazy"),
  cf = Symbol.iterator;
function wm(A) {
  return A === null || typeof A != "object" ? null : (A = cf && A[cf] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Ah = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  eh = Object.assign,
  th = {};
function Yr(A, e, t) {
  this.props = A, this.context = e, this.refs = th, this.updater = t || Ah;
}
Yr.prototype.isReactComponent = {};
Yr.prototype.setState = function (A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
Yr.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function rh() {}
rh.prototype = Yr.prototype;
function Yu(A, e, t) {
  this.props = A, this.context = e, this.refs = th, this.updater = t || Ah;
}
var Zu = Yu.prototype = new rh();
Zu.constructor = Yu;
eh(Zu, Yr.prototype);
Zu.isPureReactComponent = !0;
var ff = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  $u = {
    current: null
  },
  oh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function ih(A, e, t) {
  var r,
    n = {},
    o = null,
    i = null;
  if (e != null) for (r in e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (o = "" + e.key), e) nh.call(e, r) && !oh.hasOwnProperty(r) && (n[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1) n.children = t;else if (1 < s) {
    for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2];
    n.children = a;
  }
  if (A && A.defaultProps) for (r in s = A.defaultProps, s) n[r] === void 0 && (n[r] = s[r]);
  return {
    $$typeof: wo,
    type: A,
    key: o,
    ref: i,
    props: n,
    _owner: $u.current
  };
}
function mm(A, e) {
  return {
    $$typeof: wo,
    type: A.type,
    key: e,
    ref: A.ref,
    props: A.props,
    _owner: A._owner
  };
}
function qu(A) {
  return typeof A == "object" && A !== null && A.$$typeof === wo;
}
function Cm(A) {
  var e = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + A.replace(/[=:]/g, function (t) {
    return e[t];
  });
}
var df = /\/+/g;
function aa(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? Cm("" + A.key) : e.toString(36);
}
function mi(A, e, t, r, n) {
  var o = typeof A;
  (o === "undefined" || o === "boolean") && (A = null);
  var i = !1;
  if (A === null) i = !0;else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (A.$$typeof) {
        case wo:
        case am:
          i = !0;
      }
  }
  if (i) return i = A, n = n(i), A = r === "" ? "." + aa(i, 0) : r, ff(n) ? (t = "", A != null && (t = A.replace(df, "$&/") + "/"), mi(n, e, t, "", function (l) {
    return l;
  })) : n != null && (qu(n) && (n = mm(n, t + (!n.key || i && i.key === n.key ? "" : ("" + n.key).replace(df, "$&/") + "/") + A)), e.push(n)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ff(A)) for (var s = 0; s < A.length; s++) {
    o = A[s];
    var a = r + aa(o, s);
    i += mi(o, e, t, a, n);
  } else if (a = wm(A), typeof a == "function") for (A = a.call(A), s = 0; !(o = A.next()).done;) o = o.value, a = r + aa(o, s++), i += mi(o, e, t, a, n);else if (o === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ho(A, e, t) {
  if (A == null) return A;
  var r = [],
    n = 0;
  return mi(A, r, "", "", function (o) {
    return e.call(t, o, n++);
  }), r;
}
function Qm(A) {
  if (A._status === -1) {
    var e = A._result;
    e = e(), e.then(function (t) {
      (A._status === 0 || A._status === -1) && (A._status = 1, A._result = t);
    }, function (t) {
      (A._status === 0 || A._status === -1) && (A._status = 2, A._result = t);
    }), A._status === -1 && (A._status = 0, A._result = e);
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var NA = {
    current: null
  },
  Ci = {
    transition: null
  },
  ym = {
    ReactCurrentDispatcher: NA,
    ReactCurrentBatchConfig: Ci,
    ReactCurrentOwner: $u
  };
function sh() {
  throw Error("act(...) is not supported in production builds of React.");
}
P.Children = {
  map: Ho,
  forEach: function (A, e, t) {
    Ho(A, function () {
      e.apply(this, arguments);
    }, t);
  },
  count: function (A) {
    var e = 0;
    return Ho(A, function () {
      e++;
    }), e;
  },
  toArray: function (A) {
    return Ho(A, function (e) {
      return e;
    }) || [];
  },
  only: function (A) {
    if (!qu(A)) throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  }
};
P.Component = Yr;
P.Fragment = lm;
P.Profiler = cm;
P.PureComponent = Yu;
P.StrictMode = um;
P.Suspense = hm;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
P.act = sh;
P.cloneElement = function (A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = eh({}, A.props),
    n = A.key,
    o = A.ref,
    i = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, i = $u.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps) var s = A.type.defaultProps;
    for (a in e) nh.call(e, a) && !oh.hasOwnProperty(a) && (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;else if (1 < a) {
    s = Array(a);
    for (var l = 0; l < a; l++) s[l] = arguments[l + 2];
    r.children = s;
  }
  return {
    $$typeof: wo,
    type: A.type,
    key: n,
    ref: o,
    props: r,
    _owner: i
  };
};
P.createContext = function (A) {
  return A = {
    $$typeof: dm,
    _currentValue: A,
    _currentValue2: A,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, A.Provider = {
    $$typeof: fm,
    _context: A
  }, A.Consumer = A;
};
P.createElement = ih;
P.createFactory = function (A) {
  var e = ih.bind(null, A);
  return e.type = A, e;
};
P.createRef = function () {
  return {
    current: null
  };
};
P.forwardRef = function (A) {
  return {
    $$typeof: Bm,
    render: A
  };
};
P.isValidElement = qu;
P.lazy = function (A) {
  return {
    $$typeof: pm,
    _payload: {
      _status: -1,
      _result: A
    },
    _init: Qm
  };
};
P.memo = function (A, e) {
  return {
    $$typeof: gm,
    type: A,
    compare: e === void 0 ? null : e
  };
};
P.startTransition = function (A) {
  var e = Ci.transition;
  Ci.transition = {};
  try {
    A();
  } finally {
    Ci.transition = e;
  }
};
P.unstable_act = sh;
P.useCallback = function (A, e) {
  return NA.current.useCallback(A, e);
};
P.useContext = function (A) {
  return NA.current.useContext(A);
};
P.useDebugValue = function () {};
P.useDeferredValue = function (A) {
  return NA.current.useDeferredValue(A);
};
P.useEffect = function (A, e) {
  return NA.current.useEffect(A, e);
};
P.useId = function () {
  return NA.current.useId();
};
P.useImperativeHandle = function (A, e, t) {
  return NA.current.useImperativeHandle(A, e, t);
};
P.useInsertionEffect = function (A, e) {
  return NA.current.useInsertionEffect(A, e);
};
P.useLayoutEffect = function (A, e) {
  return NA.current.useLayoutEffect(A, e);
};
P.useMemo = function (A, e) {
  return NA.current.useMemo(A, e);
};
P.useReducer = function (A, e, t) {
  return NA.current.useReducer(A, e, t);
};
P.useRef = function (A) {
  return NA.current.useRef(A);
};
P.useState = function (A) {
  return NA.current.useState(A);
};
P.useSyncExternalStore = function (A, e, t) {
  return NA.current.useSyncExternalStore(A, e, t);
};
P.useTransition = function () {
  return NA.current.useTransition();
};
P.version = "18.3.1";
qB.exports = P;
var _A = qB.exports;
const K = sm(_A); /**
                  * @license React
                  * react-jsx-runtime.production.min.js
                  *
                  * Copyright (c) Facebook, Inc. and its affiliates.
                  *
                  * This source code is licensed under the MIT license found in the
                  * LICENSE file in the root directory of this source tree.
                  */
var vm = _A,
  Um = Symbol.for("react.element"),
  Fm = Symbol.for("react.fragment"),
  Em = Object.prototype.hasOwnProperty,
  Hm = vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Im = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function ah(A, e, t) {
  var r,
    n = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (r in e) Em.call(e, r) && !Im.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return {
    $$typeof: Um,
    type: A,
    key: o,
    ref: i,
    props: n,
    _owner: Hm.current
  };
}
xs.Fragment = Fm;
xs.jsx = ah;
xs.jsxs = ah;
$B.exports = xs;
var S = $B.exports,
  ll = {},
  lh = {
    exports: {}
  },
  oe = {},
  uh = {
    exports: {}
  },
  ch = {}; /**
           * @license React
           * scheduler.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
(function (A) {
  function e(x, O) {
    var k = x.length;
    x.push(O);
    A: for (; 0 < k;) {
      var G = k - 1 >>> 1,
        z = x[G];
      if (0 < n(z, O)) x[G] = O, x[k] = z, k = G;else break A;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var O = x[0],
      k = x.pop();
    if (k !== O) {
      x[0] = k;
      A: for (var G = 0, z = x.length, VA = z >>> 1; G < VA;) {
        var kA = 2 * (G + 1) - 1,
          qA = x[kA],
          GA = kA + 1,
          be = x[GA];
        if (0 > n(qA, k)) GA < z && 0 > n(be, qA) ? (x[G] = be, x[GA] = k, G = GA) : (x[G] = qA, x[kA] = k, G = kA);else if (GA < z && 0 > n(be, k)) x[G] = be, x[GA] = k, G = GA;else break A;
      }
    }
    return O;
  }
  function n(x, O) {
    var k = x.sortIndex - O.sortIndex;
    return k !== 0 ? k : x.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    A.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    A.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    l = [],
    u = 1,
    c = null,
    f = 3,
    w = !1,
    h = !1,
    g = !1,
    U = typeof setTimeout == "function" ? setTimeout : null,
    B = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(x) {
    for (var O = t(l); O !== null;) {
      if (O.callback === null) r(l);else if (O.startTime <= x) r(l), O.sortIndex = O.expirationTime, e(a, O);else break;
      O = t(l);
    }
  }
  function m(x) {
    if (g = !1, p(x), !h) if (t(a) !== null) h = !0, iA(v);else {
      var O = t(l);
      O !== null && cA(m, O.startTime - x);
    }
  }
  function v(x, O) {
    h = !1, g && (g = !1, B(Q), Q = -1), w = !0;
    var k = f;
    try {
      for (p(O), c = t(a); c !== null && (!(c.expirationTime > O) || x && !M());) {
        var G = c.callback;
        if (typeof G == "function") {
          c.callback = null, f = c.priorityLevel;
          var z = G(c.expirationTime <= O);
          O = A.unstable_now(), typeof z == "function" ? c.callback = z : c === t(a) && r(a), p(O);
        } else r(a);
        c = t(a);
      }
      if (c !== null) var VA = !0;else {
        var kA = t(l);
        kA !== null && cA(m, kA.startTime - O), VA = !1;
      }
      return VA;
    } finally {
      c = null, f = k, w = !1;
    }
  }
  var C = !1,
    F = null,
    Q = -1,
    H = 5,
    I = -1;
  function M() {
    return !(A.unstable_now() - I < H);
  }
  function D() {
    if (F !== null) {
      var x = A.unstable_now();
      I = x;
      var O = !0;
      try {
        O = F(!0, x);
      } finally {
        O ? N() : (C = !1, F = null);
      }
    } else C = !1;
  }
  var N;
  if (typeof d == "function") N = function () {
    d(D);
  };else if (typeof MessageChannel < "u") {
    var AA = new MessageChannel(),
      $A = AA.port2;
    AA.port1.onmessage = D, N = function () {
      $A.postMessage(null);
    };
  } else N = function () {
    U(D, 0);
  };
  function iA(x) {
    F = x, C || (C = !0, N());
  }
  function cA(x, O) {
    Q = U(function () {
      x(A.unstable_now());
    }, O);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function (x) {
    x.callback = null;
  }, A.unstable_continueExecution = function () {
    h || w || (h = !0, iA(v));
  }, A.unstable_forceFrameRate = function (x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < x ? Math.floor(1e3 / x) : 5;
  }, A.unstable_getCurrentPriorityLevel = function () {
    return f;
  }, A.unstable_getFirstCallbackNode = function () {
    return t(a);
  }, A.unstable_next = function (x) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = f;
    }
    var k = f;
    f = O;
    try {
      return x();
    } finally {
      f = k;
    }
  }, A.unstable_pauseExecution = function () {}, A.unstable_requestPaint = function () {}, A.unstable_runWithPriority = function (x, O) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var k = f;
    f = x;
    try {
      return O();
    } finally {
      f = k;
    }
  }, A.unstable_scheduleCallback = function (x, O, k) {
    var G = A.unstable_now();
    switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? G + k : G) : k = G, x) {
      case 1:
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = k + z, x = {
      id: u++,
      callback: O,
      priorityLevel: x,
      startTime: k,
      expirationTime: z,
      sortIndex: -1
    }, k > G ? (x.sortIndex = k, e(l, x), t(a) === null && x === t(l) && (g ? (B(Q), Q = -1) : g = !0, cA(m, k - G))) : (x.sortIndex = z, e(a, x), h || w || (h = !0, iA(v))), x;
  }, A.unstable_shouldYield = M, A.unstable_wrapCallback = function (x) {
    var O = f;
    return function () {
      var k = f;
      f = O;
      try {
        return x.apply(this, arguments);
      } finally {
        f = k;
      }
    };
  };
})(ch);
uh.exports = ch;
var xm = uh.exports; /**
                     * @license React
                     * react-dom.production.min.js
                     *
                     * Copyright (c) Facebook, Inc. and its affiliates.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */
var Sm = _A,
  ne = xm;
function E(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fh = new Set(),
  Jn = {};
function ar(A, e) {
  Pr(A, e), Pr(A + "Capture", e);
}
function Pr(A, e) {
  for (Jn[A] = e, A = 0; A < e.length; A++) fh.add(e[A]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  ul = Object.prototype.hasOwnProperty,
  Lm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bf = {},
  hf = {};
function bm(A) {
  return ul.call(hf, A) ? !0 : ul.call(Bf, A) ? !1 : Lm.test(A) ? hf[A] = !0 : (Bf[A] = !0, !1);
}
function Tm(A, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function Om(A, e, t, r) {
  if (e === null || typeof e > "u" || Tm(A, e, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function PA(A, e, t, r, n, o, i) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = o, this.removeEmptyString = i;
}
var xA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (A) {
  xA[A] = new PA(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (A) {
  var e = A[0];
  xA[e] = new PA(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (A) {
  xA[A] = new PA(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (A) {
  xA[A] = new PA(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (A) {
  xA[A] = new PA(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (A) {
  xA[A] = new PA(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function (A) {
  xA[A] = new PA(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (A) {
  xA[A] = new PA(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function (A) {
  xA[A] = new PA(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var Ac = /[\-:]([a-z])/g;
function ec(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (A) {
  var e = A.replace(Ac, ec);
  xA[e] = new PA(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (A) {
  var e = A.replace(Ac, ec);
  xA[e] = new PA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
  var e = A.replace(Ac, ec);
  xA[e] = new PA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (A) {
  xA[A] = new PA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
xA.xlinkHref = new PA("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (A) {
  xA[A] = new PA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function tc(A, e, t, r) {
  var n = xA.hasOwnProperty(e) ? xA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Om(e, t, n, r) && (t = null), r || n === null ? bm(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var nt = Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Io = Symbol.for("react.element"),
  Qr = Symbol.for("react.portal"),
  yr = Symbol.for("react.fragment"),
  rc = Symbol.for("react.strict_mode"),
  cl = Symbol.for("react.profiler"),
  dh = Symbol.for("react.provider"),
  Bh = Symbol.for("react.context"),
  nc = Symbol.for("react.forward_ref"),
  fl = Symbol.for("react.suspense"),
  dl = Symbol.for("react.suspense_list"),
  oc = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  hh = Symbol.for("react.offscreen"),
  gf = Symbol.iterator;
function nn(A) {
  return A === null || typeof A != "object" ? null : (A = gf && A[gf] || A["@@iterator"], typeof A == "function" ? A : null);
}
var lA = Object.assign,
  la;
function vn(A) {
  if (la === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    la = e && e[1] || "";
  }
  return `
` + la + A;
}
var ua = !1;
function ca(A, e) {
  if (!A || ua) return "";
  ua = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) {
      if (e = function () {
        throw Error();
      }, Object.defineProperty(e.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(e, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (l) {
          r = l;
        }
        A.call(e.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      A();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (var n = l.stack.split(`
`), o = r.stack.split(`
`), i = n.length - 1, s = o.length - 1; 1 <= i && 0 <= s && n[i] !== o[s];) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (n[i] !== o[s]) {
        if (i !== 1 || s !== 1) do if (i--, s--, 0 > s || n[i] !== o[s]) {
          var a = `
` + n[i].replace(" at new ", " at ");
          return A.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", A.displayName)), a;
        } while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    ua = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? vn(A) : "";
}
function Dm(A) {
  switch (A.tag) {
    case 5:
      return vn(A.type);
    case 16:
      return vn("Lazy");
    case 13:
      return vn("Suspense");
    case 19:
      return vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = ca(A.type, !1), A;
    case 11:
      return A = ca(A.type.render, !1), A;
    case 1:
      return A = ca(A.type, !0), A;
    default:
      return "";
  }
}
function Bl(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case yr:
      return "Fragment";
    case Qr:
      return "Portal";
    case cl:
      return "Profiler";
    case rc:
      return "StrictMode";
    case fl:
      return "Suspense";
    case dl:
      return "SuspenseList";
  }
  if (typeof A == "object") switch (A.$$typeof) {
    case Bh:
      return (A.displayName || "Context") + ".Consumer";
    case dh:
      return (A._context.displayName || "Context") + ".Provider";
    case nc:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case oc:
      return e = A.displayName || null, e !== null ? e : Bl(A.type) || "Memo";
    case Bt:
      e = A._payload, A = A._init;
      try {
        return Bl(A(e));
      } catch {}
  }
  return null;
}
function km(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return A = e.render, A = A.displayName || A.name || "", e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bl(e);
    case 8:
      return e === rc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Ot(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function gh(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function Km(A) {
  var e = gh(A) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e),
    r = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var n = t.get,
      o = t.set;
    return Object.defineProperty(A, e, {
      configurable: !0,
      get: function () {
        return n.call(this);
      },
      set: function (i) {
        r = "" + i, o.call(this, i);
      }
    }), Object.defineProperty(A, e, {
      enumerable: t.enumerable
    }), {
      getValue: function () {
        return r;
      },
      setValue: function (i) {
        r = "" + i;
      },
      stopTracking: function () {
        A._valueTracker = null, delete A[e];
      }
    };
  }
}
function xo(A) {
  A._valueTracker || (A._valueTracker = Km(A));
}
function ph(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    r = "";
  return A && (r = gh(A) ? A.checked ? "true" : "false" : A.value), A = r, A !== t ? (e.setValue(A), !0) : !1;
}
function Pi(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function hl(A, e) {
  var t = e.checked;
  return lA({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? A._wrapperState.initialChecked
  });
}
function pf(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  t = Ot(e.value != null ? e.value : t), A._wrapperState = {
    initialChecked: r,
    initialValue: t,
    controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
  };
}
function wh(A, e) {
  e = e.checked, e != null && tc(A, "checked", e, !1);
}
function gl(A, e) {
  wh(A, e);
  var t = Ot(e.value),
    r = e.type;
  if (t != null) r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? pl(A, e.type, t) : e.hasOwnProperty("defaultValue") && pl(A, e.type, Ot(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function wf(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function pl(A, e, t) {
  (e !== "number" || Pi(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var Un = Array.isArray;
function Or(A, e, t, r) {
  if (A = A.options, e) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++) n = e.hasOwnProperty("$" + A[t].value), A[t].selected !== n && (A[t].selected = n), n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + Ot(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        A[n].selected = !0, r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function wl(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
  return lA({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + A._wrapperState.initialValue
  });
}
function mf(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error(E(92));
      if (Un(t)) {
        if (1 < t.length) throw Error(E(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = {
    initialValue: Ot(t)
  };
}
function mh(A, e) {
  var t = Ot(e.value),
    r = Ot(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), r != null && (A.defaultValue = "" + r);
}
function Cf(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function Ch(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ml(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? Ch(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var So,
  Qh = function (A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (e, t, r, n) {
      MSApp.execUnsafeLocalFunction(function () {
        return A(e, t, r, n);
      });
    } : A;
  }(function (A, e) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = e;else {
      for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = So.firstChild; A.firstChild;) A.removeChild(A.firstChild);
      for (; e.firstChild;) A.appendChild(e.firstChild);
    }
  });
function Yn(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Rm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (A) {
  Rm.forEach(function (e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), Dn[e] = Dn[A];
  });
});
function yh(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Dn.hasOwnProperty(A) && Dn[A] ? ("" + e).trim() : e + "px";
}
function vh(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0,
      n = yh(t, e[t], r);
    t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
  }
}
var _m = lA({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function Cl(A, e) {
  if (e) {
    if (_m[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(E(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(E(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(E(62));
  }
}
function Ql(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yl = null;
function ic(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var vl = null,
  Dr = null,
  kr = null;
function Qf(A) {
  if (A = Qo(A)) {
    if (typeof vl != "function") throw Error(E(280));
    var e = A.stateNode;
    e && (e = Os(e), vl(A.stateNode, A.type, e));
  }
}
function Uh(A) {
  Dr ? kr ? kr.push(A) : kr = [A] : Dr = A;
}
function Fh() {
  if (Dr) {
    var A = Dr,
      e = kr;
    if (kr = Dr = null, Qf(A), e) for (A = 0; A < e.length; A++) Qf(e[A]);
  }
}
function Eh(A, e) {
  return A(e);
}
function Hh() {}
var fa = !1;
function Ih(A, e, t) {
  if (fa) return A(e, t);
  fa = !0;
  try {
    return Eh(A, e, t);
  } finally {
    fa = !1, (Dr !== null || kr !== null) && (Hh(), Fh());
  }
}
function Zn(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = Os(t);
  if (r === null) return null;
  t = r[e];
  A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (A = A.type, r = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !r;
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error(E(231, e, typeof t));
  return t;
}
var Ul = !1;
if (qe) try {
  var on = {};
  Object.defineProperty(on, "passive", {
    get: function () {
      Ul = !0;
    }
  }), window.addEventListener("test", on, on), window.removeEventListener("test", on, on);
} catch {
  Ul = !1;
}
function Mm(A, e, t, r, n, o, i, s, a) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var kn = !1,
  Vi = null,
  Gi = !1,
  Fl = null,
  Nm = {
    onError: function (A) {
      kn = !0, Vi = A;
    }
  };
function Pm(A, e, t, r, n, o, i, s, a) {
  kn = !1, Vi = null, Mm.apply(Nm, arguments);
}
function Vm(A, e, t, r, n, o, i, s, a) {
  if (Pm.apply(this, arguments), kn) {
    if (kn) {
      var l = Vi;
      kn = !1, Vi = null;
    } else throw Error(E(198));
    Gi || (Gi = !0, Fl = l);
  }
}
function lr(A) {
  var e = A,
    t = A;
  if (A.alternate) for (; e.return;) e = e.return;else {
    A = e;
    do e = A, e.flags & 4098 && (t = e.return), A = e.return; while (A);
  }
  return e.tag === 3 ? t : null;
}
function xh(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function yf(A) {
  if (lr(A) !== A) throw Error(E(188));
}
function Gm(A) {
  var e = A.alternate;
  if (!e) {
    if (e = lr(A), e === null) throw Error(E(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e;;) {
    var n = t.return;
    if (n === null) break;
    var o = n.alternate;
    if (o === null) {
      if (r = n.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === o.child) {
      for (o = n.child; o;) {
        if (o === t) return yf(n), A;
        if (o === r) return yf(n), e;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (t.return !== r.return) t = n, r = o;else {
      for (var i = !1, s = n.child; s;) {
        if (s === t) {
          i = !0, t = n, r = o;
          break;
        }
        if (s === r) {
          i = !0, r = n, t = o;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s;) {
          if (s === t) {
            i = !0, t = o, r = n;
            break;
          }
          if (s === r) {
            i = !0, r = o, t = n;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (t.alternate !== r) throw Error(E(190));
  }
  if (t.tag !== 3) throw Error(E(188));
  return t.stateNode.current === t ? A : e;
}
function Sh(A) {
  return A = Gm(A), A !== null ? Lh(A) : null;
}
function Lh(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null;) {
    var e = Lh(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var bh = ne.unstable_scheduleCallback,
  vf = ne.unstable_cancelCallback,
  Wm = ne.unstable_shouldYield,
  Xm = ne.unstable_requestPaint,
  BA = ne.unstable_now,
  zm = ne.unstable_getCurrentPriorityLevel,
  sc = ne.unstable_ImmediatePriority,
  Th = ne.unstable_UserBlockingPriority,
  Wi = ne.unstable_NormalPriority,
  jm = ne.unstable_LowPriority,
  Oh = ne.unstable_IdlePriority,
  Ss = null,
  Ke = null;
function Jm(A) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function") try {
    Ke.onCommitFiberRoot(Ss, A, void 0, (A.current.flags & 128) === 128);
  } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : $m,
  Ym = Math.log,
  Zm = Math.LN2;
function $m(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (Ym(A) / Zm | 0) | 0;
}
var Lo = 64,
  bo = 4194304;
function Fn(A) {
  switch (A & -A) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Xi(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    n = A.suspendedLanes,
    o = A.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var s = i & ~n;
    s !== 0 ? r = Fn(s) : (o &= i, o !== 0 && (r = Fn(o)));
  } else i = t & ~n, i !== 0 ? r = Fn(i) : o !== 0 && (r = Fn(o));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & n) && (n = r & -r, o = e & -e, n >= o || n === 16 && (o & 4194240) !== 0)) return e;
  if (r & 4 && (r |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= r; 0 < e;) t = 31 - Fe(e), n = 1 << t, r |= A[t], e &= ~n;
  return r;
}
function qm(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A0(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, o = A.pendingLanes; 0 < o;) {
    var i = 31 - Fe(o),
      s = 1 << i,
      a = n[i];
    a === -1 ? (!(s & t) || s & r) && (n[i] = qm(s, e)) : a <= e && (A.expiredLanes |= s), o &= ~s;
  }
}
function El(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Dh() {
  var A = Lo;
  return Lo <<= 1, !(Lo & 4194240) && (Lo = 64), A;
}
function da(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function mo(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Fe(e), A[e] = t;
}
function e0(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t;) {
    var n = 31 - Fe(t),
      o = 1 << n;
    e[n] = 0, r[n] = -1, A[n] = -1, t &= ~o;
  }
}
function ac(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t;) {
    var r = 31 - Fe(t),
      n = 1 << r;
    n & e | A[r] & e && (A[r] |= e), t &= ~n;
  }
}
var Y = 0;
function kh(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Kh,
  lc,
  Rh,
  _h,
  Mh,
  Hl = !1,
  To = [],
  Ut = null,
  Ft = null,
  Et = null,
  $n = new Map(),
  qn = new Map(),
  pt = [],
  t0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uf(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(e.pointerId);
  }
}
function sn(A, e, t, r, n, o) {
  return A === null || A.nativeEvent !== o ? (A = {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [n]
  }, e !== null && (e = Qo(e), e !== null && lc(e)), A) : (A.eventSystemFlags |= r, e = A.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), A);
}
function r0(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return Ut = sn(Ut, A, e, t, r, n), !0;
    case "dragenter":
      return Ft = sn(Ft, A, e, t, r, n), !0;
    case "mouseover":
      return Et = sn(Et, A, e, t, r, n), !0;
    case "pointerover":
      var o = n.pointerId;
      return $n.set(o, sn($n.get(o) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return o = n.pointerId, qn.set(o, sn(qn.get(o) || null, A, e, t, r, n)), !0;
  }
  return !1;
}
function Nh(A) {
  var e = Wt(A.target);
  if (e !== null) {
    var t = lr(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = xh(t), e !== null) {
          A.blockedOn = e, Mh(A.priority, function () {
            Rh(t);
          });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function Qi(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length;) {
    var t = Il(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      yl = r, t.target.dispatchEvent(r), yl = null;
    } else return e = Qo(t), e !== null && lc(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function Ff(A, e, t) {
  Qi(A) && t.delete(e);
}
function n0() {
  Hl = !1, Ut !== null && Qi(Ut) && (Ut = null), Ft !== null && Qi(Ft) && (Ft = null), Et !== null && Qi(Et) && (Et = null), $n.forEach(Ff), qn.forEach(Ff);
}
function an(A, e) {
  A.blockedOn === e && (A.blockedOn = null, Hl || (Hl = !0, ne.unstable_scheduleCallback(ne.unstable_NormalPriority, n0)));
}
function Ao(A) {
  function e(n) {
    return an(n, A);
  }
  if (0 < To.length) {
    an(To[0], A);
    for (var t = 1; t < To.length; t++) {
      var r = To[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (Ut !== null && an(Ut, A), Ft !== null && an(Ft, A), Et !== null && an(Et, A), $n.forEach(e), qn.forEach(e), t = 0; t < pt.length; t++) r = pt[t], r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < pt.length && (t = pt[0], t.blockedOn === null);) Nh(t), t.blockedOn === null && pt.shift();
}
var Kr = nt.ReactCurrentBatchConfig,
  zi = !0;
function o0(A, e, t, r) {
  var n = Y,
    o = Kr.transition;
  Kr.transition = null;
  try {
    Y = 1, uc(A, e, t, r);
  } finally {
    Y = n, Kr.transition = o;
  }
}
function i0(A, e, t, r) {
  var n = Y,
    o = Kr.transition;
  Kr.transition = null;
  try {
    Y = 4, uc(A, e, t, r);
  } finally {
    Y = n, Kr.transition = o;
  }
}
function uc(A, e, t, r) {
  if (zi) {
    var n = Il(A, e, t, r);
    if (n === null) va(A, e, r, ji, t), Uf(A, r);else if (r0(n, A, e, t, r)) r.stopPropagation();else if (Uf(A, r), e & 4 && -1 < t0.indexOf(A)) {
      for (; n !== null;) {
        var o = Qo(n);
        if (o !== null && Kh(o), o = Il(A, e, t, r), o === null && va(A, e, r, ji, t), o === n) break;
        n = o;
      }
      n !== null && r.stopPropagation();
    } else va(A, e, r, null, t);
  }
}
var ji = null;
function Il(A, e, t, r) {
  if (ji = null, A = ic(r), A = Wt(A), A !== null) if (e = lr(A), e === null) A = null;else if (t = e.tag, t === 13) {
    if (A = xh(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return ji = A, null;
}
function Ph(A) {
  switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zm()) {
        case sc:
          return 1;
        case Th:
          return 4;
        case Wi:
        case jm:
          return 16;
        case Oh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null,
  cc = null,
  yi = null;
function Vh() {
  if (yi) return yi;
  var A,
    e = cc,
    t = e.length,
    r,
    n = "value" in mt ? mt.value : mt.textContent,
    o = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++);
  var i = t - A;
  for (r = 1; r <= i && e[t - r] === n[o - r]; r++);
  return yi = n.slice(A, 1 < r ? 1 - r : void 0);
}
function vi(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function Oo() {
  return !0;
}
function Ef() {
  return !1;
}
function ie(A) {
  function e(t, r, n, o, i) {
    this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var s in A) A.hasOwnProperty(s) && (t = A[s], this[s] = t ? t(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Oo : Ef, this.isPropagationStopped = Ef, this;
  }
  return lA(e.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Oo);
    },
    stopPropagation: function () {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Oo);
    },
    persist: function () {},
    isPersistent: Oo
  }), e;
}
var Zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (A) {
      return A.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  fc = ie(Zr),
  Co = lA({}, Zr, {
    view: 0,
    detail: 0
  }),
  s0 = ie(Co),
  Ba,
  ha,
  ln,
  Ls = lA({}, Co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dc,
    button: 0,
    buttons: 0,
    relatedTarget: function (A) {
      return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
    },
    movementX: function (A) {
      return "movementX" in A ? A.movementX : (A !== ln && (ln && A.type === "mousemove" ? (Ba = A.screenX - ln.screenX, ha = A.screenY - ln.screenY) : ha = Ba = 0, ln = A), Ba);
    },
    movementY: function (A) {
      return "movementY" in A ? A.movementY : ha;
    }
  }),
  Hf = ie(Ls),
  a0 = lA({}, Ls, {
    dataTransfer: 0
  }),
  l0 = ie(a0),
  u0 = lA({}, Co, {
    relatedTarget: 0
  }),
  ga = ie(u0),
  c0 = lA({}, Zr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  f0 = ie(c0),
  d0 = lA({}, Zr, {
    clipboardData: function (A) {
      return "clipboardData" in A ? A.clipboardData : window.clipboardData;
    }
  }),
  B0 = ie(d0),
  h0 = lA({}, Zr, {
    data: 0
  }),
  If = ie(h0),
  g0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  p0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  w0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function m0(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = w0[A]) ? !!e[A] : !1;
}
function dc() {
  return m0;
}
var C0 = lA({}, Co, {
    key: function (A) {
      if (A.key) {
        var e = g0[A.key] || A.key;
        if (e !== "Unidentified") return e;
      }
      return A.type === "keypress" ? (A = vi(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? p0[A.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dc,
    charCode: function (A) {
      return A.type === "keypress" ? vi(A) : 0;
    },
    keyCode: function (A) {
      return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
    },
    which: function (A) {
      return A.type === "keypress" ? vi(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
    }
  }),
  Q0 = ie(C0),
  y0 = lA({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  xf = ie(y0),
  v0 = lA({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dc
  }),
  U0 = ie(v0),
  F0 = lA({}, Zr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  E0 = ie(F0),
  H0 = lA({}, Ls, {
    deltaX: function (A) {
      return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function (A) {
      return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  I0 = ie(H0),
  x0 = [9, 13, 27, 32],
  Bc = qe && "CompositionEvent" in window,
  Kn = null;
qe && "documentMode" in document && (Kn = document.documentMode);
var S0 = qe && "TextEvent" in window && !Kn,
  Gh = qe && (!Bc || Kn && 8 < Kn && 11 >= Kn),
  Sf = " ",
  Lf = !1;
function Wh(A, e) {
  switch (A) {
    case "keyup":
      return x0.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xh(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var vr = !1;
function L0(A, e) {
  switch (A) {
    case "compositionend":
      return Xh(e);
    case "keypress":
      return e.which !== 32 ? null : (Lf = !0, Sf);
    case "textInput":
      return A = e.data, A === Sf && Lf ? null : A;
    default:
      return null;
  }
}
function b0(A, e) {
  if (vr) return A === "compositionend" || !Bc && Wh(A, e) ? (A = Vh(), yi = cc = mt = null, vr = !1, A) : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Gh && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var T0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function bf(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!T0[A.type] : e === "textarea";
}
function zh(A, e, t, r) {
  Uh(r), e = Ji(e, "onChange"), 0 < e.length && (t = new fc("onChange", "change", null, t, r), A.push({
    event: t,
    listeners: e
  }));
}
var Rn = null,
  eo = null;
function O0(A) {
  ng(A, 0);
}
function bs(A) {
  var e = Er(A);
  if (ph(e)) return A;
}
function D0(A, e) {
  if (A === "change") return e;
}
var jh = !1;
if (qe) {
  var pa;
  if (qe) {
    var wa = "oninput" in document;
    if (!wa) {
      var Tf = document.createElement("div");
      Tf.setAttribute("oninput", "return;"), wa = typeof Tf.oninput == "function";
    }
    pa = wa;
  } else pa = !1;
  jh = pa && (!document.documentMode || 9 < document.documentMode);
}
function Of() {
  Rn && (Rn.detachEvent("onpropertychange", Jh), eo = Rn = null);
}
function Jh(A) {
  if (A.propertyName === "value" && bs(eo)) {
    var e = [];
    zh(e, eo, A, ic(A)), Ih(O0, e);
  }
}
function k0(A, e, t) {
  A === "focusin" ? (Of(), Rn = e, eo = t, Rn.attachEvent("onpropertychange", Jh)) : A === "focusout" && Of();
}
function K0(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return bs(eo);
}
function R0(A, e) {
  if (A === "click") return bs(e);
}
function _0(A, e) {
  if (A === "input" || A === "change") return bs(e);
}
function M0(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var Ie = typeof Object.is == "function" ? Object.is : M0;
function to(A, e) {
  if (Ie(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!ul.call(e, n) || !Ie(A[n], e[n])) return !1;
  }
  return !0;
}
function Df(A) {
  for (; A && A.firstChild;) A = A.firstChild;
  return A;
}
function kf(A, e) {
  var t = Df(A);
  A = 0;
  for (var r; t;) {
    if (t.nodeType === 3) {
      if (r = A + t.textContent.length, A <= e && r >= e) return {
        node: t,
        offset: e - A
      };
      A = r;
    }
    A: {
      for (; t;) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Df(t);
  }
}
function Yh(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Yh(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Zh() {
  for (var A = window, e = Pi(); e instanceof A.HTMLIFrameElement;) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;else break;
    e = Pi(A.document);
  }
  return e;
}
function hc(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function N0(A) {
  var e = Zh(),
    t = A.focusedElem,
    r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Yh(t.ownerDocument.documentElement, t)) {
    if (r !== null && hc(t)) {
      if (e = r.start, A = r.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var n = t.textContent.length,
          o = Math.min(r.start, n);
        r = r.end === void 0 ? o : Math.min(r.end, n), !A.extend && o > r && (n = r, r = o, o = n), n = kf(t, o);
        var i = kf(t, r);
        n && i && (A.rangeCount !== 1 || A.anchorNode !== n.node || A.anchorOffset !== n.offset || A.focusNode !== i.node || A.focusOffset !== i.offset) && (e = e.createRange(), e.setStart(n.node, n.offset), A.removeAllRanges(), o > r ? (A.addRange(e), A.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode;) A.nodeType === 1 && e.push({
      element: A,
      left: A.scrollLeft,
      top: A.scrollTop
    });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var P0 = qe && "documentMode" in document && 11 >= document.documentMode,
  Ur = null,
  xl = null,
  _n = null,
  Sl = !1;
function Kf(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Sl || Ur == null || Ur !== Pi(r) || (r = Ur, "selectionStart" in r && hc(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), _n && to(_n, r) || (_n = r, r = Ji(xl, "onSelect"), 0 < r.length && (e = new fc("onSelect", "select", null, e, t), A.push({
    event: e,
    listeners: r
  }), e.target = Ur)));
}
function Do(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var Fr = {
    animationend: Do("Animation", "AnimationEnd"),
    animationiteration: Do("Animation", "AnimationIteration"),
    animationstart: Do("Animation", "AnimationStart"),
    transitionend: Do("Transition", "TransitionEnd")
  },
  ma = {},
  $h = {};
qe && ($h = document.createElement("div").style, "AnimationEvent" in window || (delete Fr.animationend.animation, delete Fr.animationiteration.animation, delete Fr.animationstart.animation), "TransitionEvent" in window || delete Fr.transitionend.transition);
function Ts(A) {
  if (ma[A]) return ma[A];
  if (!Fr[A]) return A;
  var e = Fr[A],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in $h) return ma[A] = e[t];
  return A;
}
var qh = Ts("animationend"),
  Ag = Ts("animationiteration"),
  eg = Ts("animationstart"),
  tg = Ts("transitionend"),
  rg = new Map(),
  Rf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(A, e) {
  rg.set(A, e), ar(e, [A]);
}
for (var Ca = 0; Ca < Rf.length; Ca++) {
  var Qa = Rf[Ca],
    V0 = Qa.toLowerCase(),
    G0 = Qa[0].toUpperCase() + Qa.slice(1);
  Kt(V0, "on" + G0);
}
Kt(qh, "onAnimationEnd");
Kt(Ag, "onAnimationIteration");
Kt(eg, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(tg, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  W0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function _f(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, Vm(r, e, void 0, A), A.currentTarget = null;
}
function ng(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t],
      n = r.event;
    r = r.listeners;
    A: {
      var o = void 0;
      if (e) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i],
          a = s.instance,
          l = s.currentTarget;
        if (s = s.listener, a !== o && n.isPropagationStopped()) break A;
        _f(n, s, l), o = a;
      } else for (i = 0; i < r.length; i++) {
        if (s = r[i], a = s.instance, l = s.currentTarget, s = s.listener, a !== o && n.isPropagationStopped()) break A;
        _f(n, s, l), o = a;
      }
    }
  }
  if (Gi) throw A = Fl, Gi = !1, Fl = null, A;
}
function tA(A, e) {
  var t = e[Dl];
  t === void 0 && (t = e[Dl] = new Set());
  var r = A + "__bubble";
  t.has(r) || (og(e, A, 2, !1), t.add(r));
}
function ya(A, e, t) {
  var r = 0;
  e && (r |= 4), og(t, A, r, e);
}
var ko = "_reactListening" + Math.random().toString(36).slice(2);
function ro(A) {
  if (!A[ko]) {
    A[ko] = !0, fh.forEach(function (t) {
      t !== "selectionchange" && (W0.has(t) || ya(t, !1, A), ya(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[ko] || (e[ko] = !0, ya("selectionchange", !1, e));
  }
}
function og(A, e, t, r) {
  switch (Ph(e)) {
    case 1:
      var n = o0;
      break;
    case 4:
      n = i0;
      break;
    default:
      n = uc;
  }
  t = n.bind(null, e, t, A), n = void 0, !Ul || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), r ? n !== void 0 ? A.addEventListener(e, t, {
    capture: !0,
    passive: n
  }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, {
    passive: n
  }) : A.addEventListener(e, t, !1);
}
function va(A, e, t, r, n) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null) A: for (;;) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === n || s.nodeType === 8 && s.parentNode === n) break;
      if (i === 4) for (i = r.return; i !== null;) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === n || a.nodeType === 8 && a.parentNode === n)) return;
        i = i.return;
      }
      for (; s !== null;) {
        if (i = Wt(s), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue A;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Ih(function () {
    var l = o,
      u = ic(t),
      c = [];
    A: {
      var f = rg.get(A);
      if (f !== void 0) {
        var w = fc,
          h = A;
        switch (A) {
          case "keypress":
            if (vi(t) === 0) break A;
          case "keydown":
          case "keyup":
            w = Q0;
            break;
          case "focusin":
            h = "focus", w = ga;
            break;
          case "focusout":
            h = "blur", w = ga;
            break;
          case "beforeblur":
          case "afterblur":
            w = ga;
            break;
          case "click":
            if (t.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Hf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = l0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = U0;
            break;
          case qh:
          case Ag:
          case eg:
            w = f0;
            break;
          case tg:
            w = E0;
            break;
          case "scroll":
            w = s0;
            break;
          case "wheel":
            w = I0;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = B0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = xf;
        }
        var g = (e & 4) !== 0,
          U = !g && A === "scroll",
          B = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var d = l, p; d !== null;) {
          p = d;
          var m = p.stateNode;
          if (p.tag === 5 && m !== null && (p = m, B !== null && (m = Zn(d, B), m != null && g.push(no(d, m, p)))), U) break;
          d = d.return;
        }
        0 < g.length && (f = new w(f, h, null, t, u), c.push({
          event: f,
          listeners: g
        }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (f = A === "mouseover" || A === "pointerover", w = A === "mouseout" || A === "pointerout", f && t !== yl && (h = t.relatedTarget || t.fromElement) && (Wt(h) || h[At])) break A;
        if ((w || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, w ? (h = t.relatedTarget || t.toElement, w = l, h = h ? Wt(h) : null, h !== null && (U = lr(h), h !== U || h.tag !== 5 && h.tag !== 6) && (h = null)) : (w = null, h = l), w !== h)) {
          if (g = Hf, m = "onMouseLeave", B = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (g = xf, m = "onPointerLeave", B = "onPointerEnter", d = "pointer"), U = w == null ? f : Er(w), p = h == null ? f : Er(h), f = new g(m, d + "leave", w, t, u), f.target = U, f.relatedTarget = p, m = null, Wt(u) === l && (g = new g(B, d + "enter", h, t, u), g.target = p, g.relatedTarget = U, m = g), U = m, w && h) e: {
            for (g = w, B = h, d = 0, p = g; p; p = ur(p)) d++;
            for (p = 0, m = B; m; m = ur(m)) p++;
            for (; 0 < d - p;) g = ur(g), d--;
            for (; 0 < p - d;) B = ur(B), p--;
            for (; d--;) {
              if (g === B || B !== null && g === B.alternate) break e;
              g = ur(g), B = ur(B);
            }
            g = null;
          } else g = null;
          w !== null && Mf(c, f, w, g, !1), h !== null && U !== null && Mf(c, U, h, g, !0);
        }
      }
      A: {
        if (f = l ? Er(l) : window, w = f.nodeName && f.nodeName.toLowerCase(), w === "select" || w === "input" && f.type === "file") var v = D0;else if (bf(f)) {
          if (jh) v = _0;else {
            v = K0;
            var C = k0;
          }
        } else (w = f.nodeName) && w.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (v = R0);
        if (v && (v = v(A, l))) {
          zh(c, v, t, u);
          break A;
        }
        C && C(A, f, l), A === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && pl(f, "number", f.value);
      }
      switch (C = l ? Er(l) : window, A) {
        case "focusin":
          (bf(C) || C.contentEditable === "true") && (Ur = C, xl = l, _n = null);
          break;
        case "focusout":
          _n = xl = Ur = null;
          break;
        case "mousedown":
          Sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sl = !1, Kf(c, t, u);
          break;
        case "selectionchange":
          if (P0) break;
        case "keydown":
        case "keyup":
          Kf(c, t, u);
      }
      var F;
      if (Bc) A: {
        switch (A) {
          case "compositionstart":
            var Q = "onCompositionStart";
            break A;
          case "compositionend":
            Q = "onCompositionEnd";
            break A;
          case "compositionupdate":
            Q = "onCompositionUpdate";
            break A;
        }
        Q = void 0;
      } else vr ? Wh(A, t) && (Q = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (Q = "onCompositionStart");
      Q && (Gh && t.locale !== "ko" && (vr || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && vr && (F = Vh()) : (mt = u, cc = "value" in mt ? mt.value : mt.textContent, vr = !0)), C = Ji(l, Q), 0 < C.length && (Q = new If(Q, A, null, t, u), c.push({
        event: Q,
        listeners: C
      }), F ? Q.data = F : (F = Xh(t), F !== null && (Q.data = F)))), (F = S0 ? L0(A, t) : b0(A, t)) && (l = Ji(l, "onBeforeInput"), 0 < l.length && (u = new If("onBeforeInput", "beforeinput", null, t, u), c.push({
        event: u,
        listeners: l
      }), u.data = F));
    }
    ng(c, e);
  });
}
function no(A, e, t) {
  return {
    instance: A,
    listener: e,
    currentTarget: t
  };
}
function Ji(A, e) {
  for (var t = e + "Capture", r = []; A !== null;) {
    var n = A,
      o = n.stateNode;
    n.tag === 5 && o !== null && (n = o, o = Zn(A, t), o != null && r.unshift(no(A, o, n)), o = Zn(A, e), o != null && r.push(no(A, o, n))), A = A.return;
  }
  return r;
}
function ur(A) {
  if (A === null) return null;
  do A = A.return; while (A && A.tag !== 5);
  return A || null;
}
function Mf(A, e, t, r, n) {
  for (var o = e._reactName, i = []; t !== null && t !== r;) {
    var s = t,
      a = s.alternate,
      l = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && l !== null && (s = l, n ? (a = Zn(t, o), a != null && i.unshift(no(t, a, s))) : n || (a = Zn(t, o), a != null && i.push(no(t, a, s)))), t = t.return;
  }
  i.length !== 0 && A.push({
    event: e,
    listeners: i
  });
}
var X0 = /\r\n?/g,
  z0 = /\u0000|\uFFFD/g;
function Nf(A) {
  return (typeof A == "string" ? A : "" + A).replace(X0, `
`).replace(z0, "");
}
function Ko(A, e, t) {
  if (e = Nf(e), Nf(A) !== e && t) throw Error(E(425));
}
function Yi() {}
var Ll = null,
  bl = null;
function Tl(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
  j0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pf = typeof Promise == "function" ? Promise : void 0,
  J0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function (A) {
    return Pf.resolve(null).then(A).catch(Y0);
  } : Ol;
function Y0(A) {
  setTimeout(function () {
    throw A;
  });
}
function Ua(A, e) {
  var t = e,
    r = 0;
  do {
    var n = t.nextSibling;
    if (A.removeChild(t), n && n.nodeType === 8) if (t = n.data, t === "/$") {
      if (r === 0) {
        A.removeChild(n), Ao(e);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = n;
  } while (t);
  Ao(e);
}
function Ht(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = A.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function Vf(A) {
  A = A.previousSibling;
  for (var e = 0; A;) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return A;
        e--;
      } else t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  ke = "__reactFiber$" + $r,
  oo = "__reactProps$" + $r,
  At = "__reactContainer$" + $r,
  Dl = "__reactEvents$" + $r,
  Z0 = "__reactListeners$" + $r,
  $0 = "__reactHandles$" + $r;
function Wt(A) {
  var e = A[ke];
  if (e) return e;
  for (var t = A.parentNode; t;) {
    if (e = t[At] || t[ke]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (A = Vf(A); A !== null;) {
        if (t = A[ke]) return t;
        A = Vf(A);
      }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function Qo(A) {
  return A = A[ke] || A[At], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function Er(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(E(33));
}
function Os(A) {
  return A[oo] || null;
}
var kl = [],
  Hr = -1;
function Rt(A) {
  return {
    current: A
  };
}
function rA(A) {
  0 > Hr || (A.current = kl[Hr], kl[Hr] = null, Hr--);
}
function q(A, e) {
  Hr++, kl[Hr] = A.current, A.current = e;
}
var Dt = {},
  DA = Rt(Dt),
  jA = Rt(!1),
  er = Dt;
function Vr(A, e) {
  var t = A.type.contextTypes;
  if (!t) return Dt;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var n = {},
    o;
  for (o in t) n[o] = e[o];
  return r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = n), n;
}
function JA(A) {
  return A = A.childContextTypes, A != null;
}
function Zi() {
  rA(jA), rA(DA);
}
function Gf(A, e, t) {
  if (DA.current !== Dt) throw Error(E(168));
  q(DA, e), q(jA, t);
}
function ig(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(E(108, km(A) || "Unknown", n));
  return lA({}, t, r);
}
function $i(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || Dt, er = DA.current, q(DA, A), q(jA, jA.current), !0;
}
function Wf(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(E(169));
  t ? (A = ig(A, e, er), r.__reactInternalMemoizedMergedChildContext = A, rA(jA), rA(DA), q(DA, A)) : rA(jA), q(jA, t);
}
var je = null,
  Ds = !1,
  Fa = !1;
function sg(A) {
  je === null ? je = [A] : je.push(A);
}
function q0(A) {
  Ds = !0, sg(A);
}
function _t() {
  if (!Fa && je !== null) {
    Fa = !0;
    var A = 0,
      e = Y;
    try {
      var t = je;
      for (Y = 1; A < t.length; A++) {
        var r = t[A];
        do r = r(!0); while (r !== null);
      }
      je = null, Ds = !1;
    } catch (n) {
      throw je !== null && (je = je.slice(A + 1)), bh(sc, _t), n;
    } finally {
      Y = e, Fa = !1;
    }
  }
  return null;
}
var Ir = [],
  xr = 0,
  qi = null,
  As = 0,
  ae = [],
  le = 0,
  tr = null,
  Je = 1,
  Ye = "";
function Nt(A, e) {
  Ir[xr++] = As, Ir[xr++] = qi, qi = A, As = e;
}
function ag(A, e, t) {
  ae[le++] = Je, ae[le++] = Ye, ae[le++] = tr, tr = A;
  var r = Je;
  A = Ye;
  var n = 32 - Fe(r) - 1;
  r &= ~(1 << n), t += 1;
  var o = 32 - Fe(e) + n;
  if (30 < o) {
    var i = n - n % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, n -= i, Je = 1 << 32 - Fe(e) + n | t << n | r, Ye = o + A;
  } else Je = 1 << o | t << n | r, Ye = A;
}
function gc(A) {
  A.return !== null && (Nt(A, 1), ag(A, 1, 0));
}
function pc(A) {
  for (; A === qi;) qi = Ir[--xr], Ir[xr] = null, As = Ir[--xr], Ir[xr] = null;
  for (; A === tr;) tr = ae[--le], ae[le] = null, Ye = ae[--le], ae[le] = null, Je = ae[--le], ae[le] = null;
}
var re = null,
  te = null,
  oA = !1,
  Ue = null;
function lg(A, e) {
  var t = fe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function Xf(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, re = A, te = Ht(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, re = A, te = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = tr !== null ? {
        id: Je,
        overflow: Ye
      } : null, A.memoizedState = {
        dehydrated: e,
        treeContext: t,
        retryLane: 1073741824
      }, t = fe(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, re = A, te = null, !0) : !1;
    default:
      return !1;
  }
}
function Kl(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Rl(A) {
  if (oA) {
    var e = te;
    if (e) {
      var t = e;
      if (!Xf(A, e)) {
        if (Kl(A)) throw Error(E(418));
        e = Ht(t.nextSibling);
        var r = re;
        e && Xf(A, e) ? lg(r, t) : (A.flags = A.flags & -4097 | 2, oA = !1, re = A);
      }
    } else {
      if (Kl(A)) throw Error(E(418));
      A.flags = A.flags & -4097 | 2, oA = !1, re = A;
    }
  }
}
function zf(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13;) A = A.return;
  re = A;
}
function Ro(A) {
  if (A !== re) return !1;
  if (!oA) return zf(A), oA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Tl(A.type, A.memoizedProps)), e && (e = te)) {
    if (Kl(A)) throw ug(), Error(E(418));
    for (; e;) lg(A, e), e = Ht(e.nextSibling);
  }
  if (zf(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(E(317));
    A: {
      for (A = A.nextSibling, e = 0; A;) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              te = Ht(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      te = null;
    }
  } else te = re ? Ht(A.stateNode.nextSibling) : null;
  return !0;
}
function ug() {
  for (var A = te; A;) A = Ht(A.nextSibling);
}
function Gr() {
  te = re = null, oA = !1;
}
function wc(A) {
  Ue === null ? Ue = [A] : Ue.push(A);
}
var AC = nt.ReactCurrentBatchConfig;
function un(A, e, t) {
  if (A = t.ref, A !== null && typeof A != "function" && typeof A != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(E(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(E(147, A));
      var n = r,
        o = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function (i) {
        var s = n.refs;
        i === null ? delete s[o] : s[o] = i;
      }, e._stringRef = o, e);
    }
    if (typeof A != "string") throw Error(E(284));
    if (!t._owner) throw Error(E(290, A));
  }
  return A;
}
function _o(A, e) {
  throw A = Object.prototype.toString.call(e), Error(E(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function jf(A) {
  var e = A._init;
  return e(A._payload);
}
function cg(A) {
  function e(B, d) {
    if (A) {
      var p = B.deletions;
      p === null ? (B.deletions = [d], B.flags |= 16) : p.push(d);
    }
  }
  function t(B, d) {
    if (!A) return null;
    for (; d !== null;) e(B, d), d = d.sibling;
    return null;
  }
  function r(B, d) {
    for (B = new Map(); d !== null;) d.key !== null ? B.set(d.key, d) : B.set(d.index, d), d = d.sibling;
    return B;
  }
  function n(B, d) {
    return B = Lt(B, d), B.index = 0, B.sibling = null, B;
  }
  function o(B, d, p) {
    return B.index = p, A ? (p = B.alternate, p !== null ? (p = p.index, p < d ? (B.flags |= 2, d) : p) : (B.flags |= 2, d)) : (B.flags |= 1048576, d);
  }
  function i(B) {
    return A && B.alternate === null && (B.flags |= 2), B;
  }
  function s(B, d, p, m) {
    return d === null || d.tag !== 6 ? (d = ba(p, B.mode, m), d.return = B, d) : (d = n(d, p), d.return = B, d);
  }
  function a(B, d, p, m) {
    var v = p.type;
    return v === yr ? u(B, d, p.props.children, m, p.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Bt && jf(v) === d.type) ? (m = n(d, p.props), m.ref = un(B, d, p), m.return = B, m) : (m = Si(p.type, p.key, p.props, null, B.mode, m), m.ref = un(B, d, p), m.return = B, m);
  }
  function l(B, d, p, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Ta(p, B.mode, m), d.return = B, d) : (d = n(d, p.children || []), d.return = B, d);
  }
  function u(B, d, p, m, v) {
    return d === null || d.tag !== 7 ? (d = Zt(p, B.mode, m, v), d.return = B, d) : (d = n(d, p), d.return = B, d);
  }
  function c(B, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ba("" + d, B.mode, p), d.return = B, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Io:
          return p = Si(d.type, d.key, d.props, null, B.mode, p), p.ref = un(B, null, d), p.return = B, p;
        case Qr:
          return d = Ta(d, B.mode, p), d.return = B, d;
        case Bt:
          var m = d._init;
          return c(B, m(d._payload), p);
      }
      if (Un(d) || nn(d)) return d = Zt(d, B.mode, p, null), d.return = B, d;
      _o(B, d);
    }
    return null;
  }
  function f(B, d, p, m) {
    var v = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return v !== null ? null : s(B, d, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Io:
          return p.key === v ? a(B, d, p, m) : null;
        case Qr:
          return p.key === v ? l(B, d, p, m) : null;
        case Bt:
          return v = p._init, f(B, d, v(p._payload), m);
      }
      if (Un(p) || nn(p)) return v !== null ? null : u(B, d, p, m, null);
      _o(B, p);
    }
    return null;
  }
  function w(B, d, p, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return B = B.get(p) || null, s(d, B, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Io:
          return B = B.get(m.key === null ? p : m.key) || null, a(d, B, m, v);
        case Qr:
          return B = B.get(m.key === null ? p : m.key) || null, l(d, B, m, v);
        case Bt:
          var C = m._init;
          return w(B, d, p, C(m._payload), v);
      }
      if (Un(m) || nn(m)) return B = B.get(p) || null, u(d, B, m, v, null);
      _o(d, m);
    }
    return null;
  }
  function h(B, d, p, m) {
    for (var v = null, C = null, F = d, Q = d = 0, H = null; F !== null && Q < p.length; Q++) {
      F.index > Q ? (H = F, F = null) : H = F.sibling;
      var I = f(B, F, p[Q], m);
      if (I === null) {
        F === null && (F = H);
        break;
      }
      A && F && I.alternate === null && e(B, F), d = o(I, d, Q), C === null ? v = I : C.sibling = I, C = I, F = H;
    }
    if (Q === p.length) return t(B, F), oA && Nt(B, Q), v;
    if (F === null) {
      for (; Q < p.length; Q++) F = c(B, p[Q], m), F !== null && (d = o(F, d, Q), C === null ? v = F : C.sibling = F, C = F);
      return oA && Nt(B, Q), v;
    }
    for (F = r(B, F); Q < p.length; Q++) H = w(F, B, Q, p[Q], m), H !== null && (A && H.alternate !== null && F.delete(H.key === null ? Q : H.key), d = o(H, d, Q), C === null ? v = H : C.sibling = H, C = H);
    return A && F.forEach(function (M) {
      return e(B, M);
    }), oA && Nt(B, Q), v;
  }
  function g(B, d, p, m) {
    var v = nn(p);
    if (typeof v != "function") throw Error(E(150));
    if (p = v.call(p), p == null) throw Error(E(151));
    for (var C = v = null, F = d, Q = d = 0, H = null, I = p.next(); F !== null && !I.done; Q++, I = p.next()) {
      F.index > Q ? (H = F, F = null) : H = F.sibling;
      var M = f(B, F, I.value, m);
      if (M === null) {
        F === null && (F = H);
        break;
      }
      A && F && M.alternate === null && e(B, F), d = o(M, d, Q), C === null ? v = M : C.sibling = M, C = M, F = H;
    }
    if (I.done) return t(B, F), oA && Nt(B, Q), v;
    if (F === null) {
      for (; !I.done; Q++, I = p.next()) I = c(B, I.value, m), I !== null && (d = o(I, d, Q), C === null ? v = I : C.sibling = I, C = I);
      return oA && Nt(B, Q), v;
    }
    for (F = r(B, F); !I.done; Q++, I = p.next()) I = w(F, B, Q, I.value, m), I !== null && (A && I.alternate !== null && F.delete(I.key === null ? Q : I.key), d = o(I, d, Q), C === null ? v = I : C.sibling = I, C = I);
    return A && F.forEach(function (D) {
      return e(B, D);
    }), oA && Nt(B, Q), v;
  }
  function U(B, d, p, m) {
    if (typeof p == "object" && p !== null && p.type === yr && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Io:
          A: {
            for (var v = p.key, C = d; C !== null;) {
              if (C.key === v) {
                if (v = p.type, v === yr) {
                  if (C.tag === 7) {
                    t(B, C.sibling), d = n(C, p.props.children), d.return = B, B = d;
                    break A;
                  }
                } else if (C.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Bt && jf(v) === C.type) {
                  t(B, C.sibling), d = n(C, p.props), d.ref = un(B, C, p), d.return = B, B = d;
                  break A;
                }
                t(B, C);
                break;
              } else e(B, C);
              C = C.sibling;
            }
            p.type === yr ? (d = Zt(p.props.children, B.mode, m, p.key), d.return = B, B = d) : (m = Si(p.type, p.key, p.props, null, B.mode, m), m.ref = un(B, d, p), m.return = B, B = m);
          }
          return i(B);
        case Qr:
          A: {
            for (C = p.key; d !== null;) {
              if (d.key === C) {
                if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                  t(B, d.sibling), d = n(d, p.children || []), d.return = B, B = d;
                  break A;
                } else {
                  t(B, d);
                  break;
                }
              } else e(B, d);
              d = d.sibling;
            }
            d = Ta(p, B.mode, m), d.return = B, B = d;
          }
          return i(B);
        case Bt:
          return C = p._init, U(B, d, C(p._payload), m);
      }
      if (Un(p)) return h(B, d, p, m);
      if (nn(p)) return g(B, d, p, m);
      _o(B, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (t(B, d.sibling), d = n(d, p), d.return = B, B = d) : (t(B, d), d = ba(p, B.mode, m), d.return = B, B = d), i(B)) : t(B, d);
  }
  return U;
}
var Wr = cg(!0),
  fg = cg(!1),
  es = Rt(null),
  ts = null,
  Sr = null,
  mc = null;
function Cc() {
  mc = Sr = ts = null;
}
function Qc(A) {
  var e = es.current;
  rA(es), A._currentValue = e;
}
function _l(A, e, t) {
  for (; A !== null;) {
    var r = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function Rr(A, e) {
  ts = A, mc = Sr = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (zA = !0), A.firstContext = null);
}
function pe(A) {
  var e = A._currentValue;
  if (mc !== A) if (A = {
    context: A,
    memoizedValue: e,
    next: null
  }, Sr === null) {
    if (ts === null) throw Error(E(308));
    Sr = A, ts.dependencies = {
      lanes: 0,
      firstContext: A
    };
  } else Sr = Sr.next = A;
  return e;
}
var Xt = null;
function yc(A) {
  Xt === null ? Xt = [A] : Xt.push(A);
}
function dg(A, e, t, r) {
  var n = e.interleaved;
  return n === null ? (t.next = t, yc(e)) : (t.next = n.next, n.next = t), e.interleaved = t, et(A, r);
}
function et(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null;) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var ht = !1;
function vc(A) {
  A.updateQueue = {
    baseState: A.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function Bg(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = {
    baseState: A.baseState,
    firstBaseUpdate: A.firstBaseUpdate,
    lastBaseUpdate: A.lastBaseUpdate,
    shared: A.shared,
    effects: A.effects
  });
}
function Ze(A, e) {
  return {
    eventTime: A,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function It(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var n = r.pending;
    return n === null ? e.next = e : (e.next = n.next, n.next = e), r.pending = e, et(A, t);
  }
  return n = r.interleaved, n === null ? (e.next = e, yc(r)) : (e.next = n.next, n.next = e), r.interleaved = e, et(A, t);
}
function Ui(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, ac(A, t);
  }
}
function Jf(A, e) {
  var t = A.updateQueue,
    r = A.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var n = null,
      o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null
        };
        o === null ? n = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? n = o = e : o = o.next = e;
    } else n = o = e;
    t = {
      baseState: r.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function rs(A, e, t, r) {
  var n = A.updateQueue;
  ht = !1;
  var o = n.firstBaseUpdate,
    i = n.lastBaseUpdate,
    s = n.shared.pending;
  if (s !== null) {
    n.shared.pending = null;
    var a = s,
      l = a.next;
    a.next = null, i === null ? o = l : i.next = l, i = a;
    var u = A.alternate;
    u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== i && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = a));
  }
  if (o !== null) {
    var c = n.baseState;
    i = 0, u = l = a = null, s = o;
    do {
      var f = s.lane,
        w = s.eventTime;
      if ((r & f) === f) {
        u !== null && (u = u.next = {
          eventTime: w,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        A: {
          var h = A,
            g = s;
          switch (f = e, w = t, g.tag) {
            case 1:
              if (h = g.payload, typeof h == "function") {
                c = h.call(w, c, f);
                break A;
              }
              c = h;
              break A;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = g.payload, f = typeof h == "function" ? h.call(w, c, f) : h, f == null) break A;
              c = lA({}, c, f);
              break A;
            case 2:
              ht = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (A.flags |= 64, f = n.effects, f === null ? n.effects = [s] : f.push(s));
      } else w = {
        eventTime: w,
        lane: f,
        tag: s.tag,
        payload: s.payload,
        callback: s.callback,
        next: null
      }, u === null ? (l = u = w, a = c) : u = u.next = w, i |= f;
      if (s = s.next, s === null) {
        if (s = n.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, n.lastBaseUpdate = f, n.shared.pending = null;
      }
    } while (!0);
    if (u === null && (a = c), n.baseState = a, n.firstBaseUpdate = l, n.lastBaseUpdate = u, e = n.shared.interleaved, e !== null) {
      n = e;
      do i |= n.lane, n = n.next; while (n !== e);
    } else o === null && (n.shared.lanes = 0);
    nr |= i, A.lanes = i, A.memoizedState = c;
  }
}
function Yf(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var r = A[e],
      n = r.callback;
    if (n !== null) {
      if (r.callback = null, r = t, typeof n != "function") throw Error(E(191, n));
      n.call(r);
    }
  }
}
var yo = {},
  Re = Rt(yo),
  io = Rt(yo),
  so = Rt(yo);
function zt(A) {
  if (A === yo) throw Error(E(174));
  return A;
}
function Uc(A, e) {
  switch (q(so, e), q(io, A), q(Re, yo), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : ml(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = ml(e, A);
  }
  rA(Re), q(Re, e);
}
function Xr() {
  rA(Re), rA(io), rA(so);
}
function hg(A) {
  zt(so.current);
  var e = zt(Re.current),
    t = ml(e, A.type);
  e !== t && (q(io, A), q(Re, t));
}
function Fc(A) {
  io.current === A && (rA(Re), rA(io));
}
var sA = Rt(0);
function ns(A) {
  for (var e = A; e !== null;) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null;) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var Ea = [];
function Ec() {
  for (var A = 0; A < Ea.length; A++) Ea[A]._workInProgressVersionPrimary = null;
  Ea.length = 0;
}
var Fi = nt.ReactCurrentDispatcher,
  Ha = nt.ReactCurrentBatchConfig,
  rr = 0,
  aA = null,
  mA = null,
  vA = null,
  os = !1,
  Mn = !1,
  ao = 0,
  eC = 0;
function SA() {
  throw Error(E(321));
}
function Hc(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!Ie(A[t], e[t])) return !1;
  return !0;
}
function Ic(A, e, t, r, n, o) {
  if (rr = o, aA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Fi.current = A === null || A.memoizedState === null ? oC : iC, A = t(r, n), Mn) {
    o = 0;
    do {
      if (Mn = !1, ao = 0, 25 <= o) throw Error(E(301));
      o += 1, vA = mA = null, e.updateQueue = null, Fi.current = sC, A = t(r, n);
    } while (Mn);
  }
  if (Fi.current = is, e = mA !== null && mA.next !== null, rr = 0, vA = mA = aA = null, os = !1, e) throw Error(E(300));
  return A;
}
function xc() {
  var A = ao !== 0;
  return ao = 0, A;
}
function De() {
  var A = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return vA === null ? aA.memoizedState = vA = A : vA = vA.next = A, vA;
}
function we() {
  if (mA === null) {
    var A = aA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = mA.next;
  var e = vA === null ? aA.memoizedState : vA.next;
  if (e !== null) vA = e, mA = A;else {
    if (A === null) throw Error(E(310));
    mA = A, A = {
      memoizedState: mA.memoizedState,
      baseState: mA.baseState,
      baseQueue: mA.baseQueue,
      queue: mA.queue,
      next: null
    }, vA === null ? aA.memoizedState = vA = A : vA = vA.next = A;
  }
  return vA;
}
function lo(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function Ia(A) {
  var e = we(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = mA,
    n = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (n !== null) {
      var i = n.next;
      n.next = o.next, o.next = i;
    }
    r.baseQueue = n = o, t.pending = null;
  }
  if (n !== null) {
    o = n.next, r = r.baseState;
    var s = i = null,
      a = null,
      l = o;
    do {
      var u = l.lane;
      if ((rr & u) === u) a !== null && (a = a.next = {
        lane: 0,
        action: l.action,
        hasEagerState: l.hasEagerState,
        eagerState: l.eagerState,
        next: null
      }), r = l.hasEagerState ? l.eagerState : A(r, l.action);else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        a === null ? (s = a = c, i = r) : a = a.next = c, aA.lanes |= u, nr |= u;
      }
      l = l.next;
    } while (l !== null && l !== o);
    a === null ? i = r : a.next = s, Ie(r, e.memoizedState) || (zA = !0), e.memoizedState = r, e.baseState = i, e.baseQueue = a, t.lastRenderedState = r;
  }
  if (A = t.interleaved, A !== null) {
    n = A;
    do o = n.lane, aA.lanes |= o, nr |= o, n = n.next; while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function xa(A) {
  var e = we(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch,
    n = t.pending,
    o = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var i = n = n.next;
    do o = A(o, i.action), i = i.next; while (i !== n);
    Ie(o, e.memoizedState) || (zA = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function gg() {}
function pg(A, e) {
  var t = aA,
    r = we(),
    n = e(),
    o = !Ie(r.memoizedState, n);
  if (o && (r.memoizedState = n, zA = !0), r = r.queue, Sc(Cg.bind(null, t, r, A), [A]), r.getSnapshot !== e || o || vA !== null && vA.memoizedState.tag & 1) {
    if (t.flags |= 2048, uo(9, mg.bind(null, t, r, n, e), void 0, null), UA === null) throw Error(E(349));
    rr & 30 || wg(t, e, n);
  }
  return n;
}
function wg(A, e, t) {
  A.flags |= 16384, A = {
    getSnapshot: e,
    value: t
  }, e = aA.updateQueue, e === null ? (e = {
    lastEffect: null,
    stores: null
  }, aA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function mg(A, e, t, r) {
  e.value = t, e.getSnapshot = r, Qg(e) && yg(A);
}
function Cg(A, e, t) {
  return t(function () {
    Qg(e) && yg(A);
  });
}
function Qg(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !Ie(A, t);
  } catch {
    return !0;
  }
}
function yg(A) {
  var e = et(A, 1);
  e !== null && Ee(e, A, 1, -1);
}
function Zf(A) {
  var e = De();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: lo,
    lastRenderedState: A
  }, e.queue = A, A = A.dispatch = nC.bind(null, aA, A), [e.memoizedState, A];
}
function uo(A, e, t, r) {
  return A = {
    tag: A,
    create: e,
    destroy: t,
    deps: r,
    next: null
  }, e = aA.updateQueue, e === null ? (e = {
    lastEffect: null,
    stores: null
  }, aA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function vg() {
  return we().memoizedState;
}
function Ei(A, e, t, r) {
  var n = De();
  aA.flags |= A, n.memoizedState = uo(1 | e, t, void 0, r === void 0 ? null : r);
}
function ks(A, e, t, r) {
  var n = we();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (mA !== null) {
    var i = mA.memoizedState;
    if (o = i.destroy, r !== null && Hc(r, i.deps)) {
      n.memoizedState = uo(e, t, o, r);
      return;
    }
  }
  aA.flags |= A, n.memoizedState = uo(1 | e, t, o, r);
}
function $f(A, e) {
  return Ei(8390656, 8, A, e);
}
function Sc(A, e) {
  return ks(2048, 8, A, e);
}
function Ug(A, e) {
  return ks(4, 2, A, e);
}
function Fg(A, e) {
  return ks(4, 4, A, e);
}
function Eg(A, e) {
  if (typeof e == "function") return A = A(), e(A), function () {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function () {
    e.current = null;
  };
}
function Hg(A, e, t) {
  return t = t != null ? t.concat([A]) : null, ks(4, 4, Eg.bind(null, e, A), t);
}
function Lc() {}
function Ig(A, e) {
  var t = we();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Hc(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function xg(A, e) {
  var t = we();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Hc(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function Sg(A, e, t) {
  return rr & 21 ? (Ie(t, e) || (t = Dh(), aA.lanes |= t, nr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, zA = !0), A.memoizedState = t);
}
function tC(A, e) {
  var t = Y;
  Y = t !== 0 && 4 > t ? t : 4, A(!0);
  var r = Ha.transition;
  Ha.transition = {};
  try {
    A(!1), e();
  } finally {
    Y = t, Ha.transition = r;
  }
}
function Lg() {
  return we().memoizedState;
}
function rC(A, e, t) {
  var r = St(A);
  if (t = {
    lane: r,
    action: t,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, bg(A)) Tg(e, t);else if (t = dg(A, e, t, r), t !== null) {
    var n = MA();
    Ee(t, A, r, n), Og(t, e, r);
  }
}
function nC(A, e, t) {
  var r = St(A),
    n = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (bg(A)) Tg(e, n);else {
    var o = A.alternate;
    if (A.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
      var i = e.lastRenderedState,
        s = o(i, t);
      if (n.hasEagerState = !0, n.eagerState = s, Ie(s, i)) {
        var a = e.interleaved;
        a === null ? (n.next = n, yc(e)) : (n.next = a.next, a.next = n), e.interleaved = n;
        return;
      }
    } catch {} finally {}
    t = dg(A, e, n, r), t !== null && (n = MA(), Ee(t, A, r, n), Og(t, e, r));
  }
}
function bg(A) {
  var e = A.alternate;
  return A === aA || e !== null && e === aA;
}
function Tg(A, e) {
  Mn = os = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Og(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, ac(A, t);
  }
}
var is = {
    readContext: pe,
    useCallback: SA,
    useContext: SA,
    useEffect: SA,
    useImperativeHandle: SA,
    useInsertionEffect: SA,
    useLayoutEffect: SA,
    useMemo: SA,
    useReducer: SA,
    useRef: SA,
    useState: SA,
    useDebugValue: SA,
    useDeferredValue: SA,
    useTransition: SA,
    useMutableSource: SA,
    useSyncExternalStore: SA,
    useId: SA,
    unstable_isNewReconciler: !1
  },
  oC = {
    readContext: pe,
    useCallback: function (A, e) {
      return De().memoizedState = [A, e === void 0 ? null : e], A;
    },
    useContext: pe,
    useEffect: $f,
    useImperativeHandle: function (A, e, t) {
      return t = t != null ? t.concat([A]) : null, Ei(4194308, 4, Eg.bind(null, e, A), t);
    },
    useLayoutEffect: function (A, e) {
      return Ei(4194308, 4, A, e);
    },
    useInsertionEffect: function (A, e) {
      return Ei(4, 2, A, e);
    },
    useMemo: function (A, e) {
      var t = De();
      return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
    },
    useReducer: function (A, e, t) {
      var r = De();
      return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: A,
        lastRenderedState: e
      }, r.queue = A, A = A.dispatch = rC.bind(null, aA, A), [r.memoizedState, A];
    },
    useRef: function (A) {
      var e = De();
      return A = {
        current: A
      }, e.memoizedState = A;
    },
    useState: Zf,
    useDebugValue: Lc,
    useDeferredValue: function (A) {
      return De().memoizedState = A;
    },
    useTransition: function () {
      var A = Zf(!1),
        e = A[0];
      return A = tC.bind(null, A[1]), De().memoizedState = A, [e, A];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (A, e, t) {
      var r = aA,
        n = De();
      if (oA) {
        if (t === void 0) throw Error(E(407));
        t = t();
      } else {
        if (t = e(), UA === null) throw Error(E(349));
        rr & 30 || wg(r, e, t);
      }
      n.memoizedState = t;
      var o = {
        value: t,
        getSnapshot: e
      };
      return n.queue = o, $f(Cg.bind(null, r, o, A), [A]), r.flags |= 2048, uo(9, mg.bind(null, r, o, t, e), void 0, null), t;
    },
    useId: function () {
      var A = De(),
        e = UA.identifierPrefix;
      if (oA) {
        var t = Ye,
          r = Je;
        t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = ao++, 0 < t && (e += "H" + t.toString(32)), e += ":";
      } else t = eC++, e = ":" + e + "r" + t.toString(32) + ":";
      return A.memoizedState = e;
    },
    unstable_isNewReconciler: !1
  },
  iC = {
    readContext: pe,
    useCallback: Ig,
    useContext: pe,
    useEffect: Sc,
    useImperativeHandle: Hg,
    useInsertionEffect: Ug,
    useLayoutEffect: Fg,
    useMemo: xg,
    useReducer: Ia,
    useRef: vg,
    useState: function () {
      return Ia(lo);
    },
    useDebugValue: Lc,
    useDeferredValue: function (A) {
      var e = we();
      return Sg(e, mA.memoizedState, A);
    },
    useTransition: function () {
      var A = Ia(lo)[0],
        e = we().memoizedState;
      return [A, e];
    },
    useMutableSource: gg,
    useSyncExternalStore: pg,
    useId: Lg,
    unstable_isNewReconciler: !1
  },
  sC = {
    readContext: pe,
    useCallback: Ig,
    useContext: pe,
    useEffect: Sc,
    useImperativeHandle: Hg,
    useInsertionEffect: Ug,
    useLayoutEffect: Fg,
    useMemo: xg,
    useReducer: xa,
    useRef: vg,
    useState: function () {
      return xa(lo);
    },
    useDebugValue: Lc,
    useDeferredValue: function (A) {
      var e = we();
      return mA === null ? e.memoizedState = A : Sg(e, mA.memoizedState, A);
    },
    useTransition: function () {
      var A = xa(lo)[0],
        e = we().memoizedState;
      return [A, e];
    },
    useMutableSource: gg,
    useSyncExternalStore: pg,
    useId: Lg,
    unstable_isNewReconciler: !1
  };
function Qe(A, e) {
  if (A && A.defaultProps) {
    e = lA({}, e), A = A.defaultProps;
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function Ml(A, e, t, r) {
  e = A.memoizedState, t = t(r, e), t = t == null ? e : lA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Ks = {
  isMounted: function (A) {
    return (A = A._reactInternals) ? lr(A) === A : !1;
  },
  enqueueSetState: function (A, e, t) {
    A = A._reactInternals;
    var r = MA(),
      n = St(A),
      o = Ze(r, n);
    o.payload = e, t != null && (o.callback = t), e = It(A, o, n), e !== null && (Ee(e, A, n, r), Ui(e, A, n));
  },
  enqueueReplaceState: function (A, e, t) {
    A = A._reactInternals;
    var r = MA(),
      n = St(A),
      o = Ze(r, n);
    o.tag = 1, o.payload = e, t != null && (o.callback = t), e = It(A, o, n), e !== null && (Ee(e, A, n, r), Ui(e, A, n));
  },
  enqueueForceUpdate: function (A, e) {
    A = A._reactInternals;
    var t = MA(),
      r = St(A),
      n = Ze(t, r);
    n.tag = 2, e != null && (n.callback = e), e = It(A, n, r), e !== null && (Ee(e, A, r, t), Ui(e, A, r));
  }
};
function qf(A, e, t, r, n, o, i) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, o, i) : e.prototype && e.prototype.isPureReactComponent ? !to(t, r) || !to(n, o) : !0;
}
function Dg(A, e, t) {
  var r = !1,
    n = Dt,
    o = e.contextType;
  return typeof o == "object" && o !== null ? o = pe(o) : (n = JA(e) ? er : DA.current, r = e.contextTypes, o = (r = r != null) ? Vr(A, n) : Dt), e = new e(t, o), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Ks, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = o), e;
}
function Ad(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && Ks.enqueueReplaceState(e, e.state, null);
}
function Nl(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = {}, vc(A);
  var o = e.contextType;
  typeof o == "object" && o !== null ? n.context = pe(o) : (o = JA(e) ? er : DA.current, n.context = Vr(A, o)), n.state = A.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Ml(A, e, o, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && Ks.enqueueReplaceState(n, n.state, null), rs(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function zr(A, e) {
  try {
    var t = "",
      r = e;
    do t += Dm(r), r = r.return; while (r);
    var n = t;
  } catch (o) {
    n = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return {
    value: A,
    source: e,
    stack: n,
    digest: null
  };
}
function Sa(A, e, t) {
  return {
    value: A,
    source: null,
    stack: t ?? null,
    digest: e ?? null
  };
}
function Pl(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var aC = typeof WeakMap == "function" ? WeakMap : Map;
function kg(A, e, t) {
  t = Ze(-1, t), t.tag = 3, t.payload = {
    element: null
  };
  var r = e.value;
  return t.callback = function () {
    as || (as = !0, $l = r), Pl(A, e);
  }, t;
}
function Kg(A, e, t) {
  t = Ze(-1, t), t.tag = 3;
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    t.payload = function () {
      return r(n);
    }, t.callback = function () {
      Pl(A, e);
    };
  }
  var o = A.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function () {
    Pl(A, e), typeof r != "function" && (xt === null ? xt = new Set([this]) : xt.add(this));
    var i = e.stack;
    this.componentDidCatch(e.value, {
      componentStack: i !== null ? i : ""
    });
  }), t;
}
function ed(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new aC();
    var n = new Set();
    r.set(e, n);
  } else n = r.get(e), n === void 0 && (n = new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = yC.bind(null, A, e, t), e.then(A, A));
}
function td(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function rd(A, e, t, r, n) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = n, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = Ze(-1, 1), e.tag = 2, It(t, e, 1))), t.lanes |= 1), A);
}
var lC = nt.ReactCurrentOwner,
  zA = !1;
function RA(A, e, t, r) {
  e.child = A === null ? fg(e, null, t, r) : Wr(e, A.child, t, r);
}
function nd(A, e, t, r, n) {
  t = t.render;
  var o = e.ref;
  return Rr(e, n), r = Ic(A, e, t, r, o, n), t = xc(), A !== null && !zA ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, tt(A, e, n)) : (oA && t && gc(e), e.flags |= 1, RA(A, e, r, n), e.child);
}
function od(A, e, t, r, n) {
  if (A === null) {
    var o = t.type;
    return typeof o == "function" && !_c(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = o, Rg(A, e, o, r, n)) : (A = Si(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (o = A.child, !(A.lanes & n)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : to, t(i, r) && A.ref === e.ref) return tt(A, e, n);
  }
  return e.flags |= 1, A = Lt(o, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Rg(A, e, t, r, n) {
  if (A !== null) {
    var o = A.memoizedProps;
    if (to(o, r) && A.ref === e.ref) if (zA = !1, e.pendingProps = r = o, (A.lanes & n) !== 0) A.flags & 131072 && (zA = !0);else return e.lanes = A.lanes, tt(A, e, n);
  }
  return Vl(A, e, t, r, n);
}
function _g(A, e, t) {
  var r = e.pendingProps,
    n = r.children,
    o = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden") {
    if (!(e.mode & 1)) e.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, q(br, ee), ee |= t;else {
      if (!(t & 1073741824)) return A = o !== null ? o.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
        baseLanes: A,
        cachePool: null,
        transitions: null
      }, e.updateQueue = null, q(br, ee), ee |= A, null;
      e.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : t, q(br, ee), ee |= r;
    }
  } else o !== null ? (r = o.baseLanes | t, e.memoizedState = null) : r = t, q(br, ee), ee |= r;
  return RA(A, e, n, t), e.child;
}
function Mg(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Vl(A, e, t, r, n) {
  var o = JA(t) ? er : DA.current;
  return o = Vr(e, o), Rr(e, n), t = Ic(A, e, t, r, o, n), r = xc(), A !== null && !zA ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, tt(A, e, n)) : (oA && r && gc(e), e.flags |= 1, RA(A, e, t, n), e.child);
}
function id(A, e, t, r, n) {
  if (JA(t)) {
    var o = !0;
    $i(e);
  } else o = !1;
  if (Rr(e, n), e.stateNode === null) Hi(A, e), Dg(e, t, r), Nl(e, t, r, n), r = !0;else if (A === null) {
    var i = e.stateNode,
      s = e.memoizedProps;
    i.props = s;
    var a = i.context,
      l = t.contextType;
    typeof l == "object" && l !== null ? l = pe(l) : (l = JA(t) ? er : DA.current, l = Vr(e, l));
    var u = t.getDerivedStateFromProps,
      c = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== l) && Ad(e, i, r, l), ht = !1;
    var f = e.memoizedState;
    i.state = f, rs(e, r, i, n), a = e.memoizedState, s !== r || f !== a || jA.current || ht ? (typeof u == "function" && (Ml(e, t, u, r), a = e.memoizedState), (s = ht || qf(e, t, s, r, f, a, l)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), i.props = r, i.state = a, i.context = l, r = s) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    i = e.stateNode, Bg(A, e), s = e.memoizedProps, l = e.type === e.elementType ? s : Qe(e.type, s), i.props = l, c = e.pendingProps, f = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = pe(a) : (a = JA(t) ? er : DA.current, a = Vr(e, a));
    var w = t.getDerivedStateFromProps;
    (u = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || f !== a) && Ad(e, i, r, a), ht = !1, f = e.memoizedState, i.state = f, rs(e, r, i, n);
    var h = e.memoizedState;
    s !== c || f !== h || jA.current || ht ? (typeof w == "function" && (Ml(e, t, w, r), h = e.memoizedState), (l = ht || qf(e, t, l, r, f, h, a) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, h, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, h, a)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = h), i.props = r, i.state = h, i.context = a, r = l) : (typeof i.componentDidUpdate != "function" || s === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Gl(A, e, t, r, o, n);
}
function Gl(A, e, t, r, n, o) {
  Mg(A, e);
  var i = (e.flags & 128) !== 0;
  if (!r && !i) return n && Wf(e, t, !1), tt(A, e, o);
  r = e.stateNode, lC.current = e;
  var s = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && i ? (e.child = Wr(e, A.child, null, o), e.child = Wr(e, null, s, o)) : RA(A, e, s, o), e.memoizedState = r.state, n && Wf(e, t, !0), e.child;
}
function Ng(A) {
  var e = A.stateNode;
  e.pendingContext ? Gf(A, e.pendingContext, e.pendingContext !== e.context) : e.context && Gf(A, e.context, !1), Uc(A, e.containerInfo);
}
function sd(A, e, t, r, n) {
  return Gr(), wc(n), e.flags |= 256, RA(A, e, t, r), e.child;
}
var Wl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function Xl(A) {
  return {
    baseLanes: A,
    cachePool: null,
    transitions: null
  };
}
function Pg(A, e, t) {
  var r = e.pendingProps,
    n = sA.current,
    o = !1,
    i = (e.flags & 128) !== 0,
    s;
  if ((s = i) || (s = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), s ? (o = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), q(sA, n & 1), A === null) return Rl(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (i = r.children, A = r.fallback, o ? (r = e.mode, o = e.child, i = {
    mode: "hidden",
    children: i
  }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ms(i, r, 0, null), A = Zt(A, r, t, null), o.return = e, A.return = e, o.sibling = A, e.child = o, e.child.memoizedState = Xl(t), e.memoizedState = Wl, A) : bc(e, i));
  if (n = A.memoizedState, n !== null && (s = n.dehydrated, s !== null)) return uC(A, e, i, r, s, n, t);
  if (o) {
    o = r.fallback, i = e.mode, n = A.child, s = n.sibling;
    var a = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && e.child !== n ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = Lt(n, a), r.subtreeFlags = n.subtreeFlags & 14680064), s !== null ? o = Lt(s, o) : (o = Zt(o, i, t, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, i = A.child.memoizedState, i = i === null ? Xl(t) : {
      baseLanes: i.baseLanes | t,
      cachePool: null,
      transitions: i.transitions
    }, o.memoizedState = i, o.childLanes = A.childLanes & ~t, e.memoizedState = Wl, r;
  }
  return o = A.child, A = o.sibling, r = Lt(o, {
    mode: "visible",
    children: r.children
  }), !(e.mode & 1) && (r.lanes = t), r.return = e, r.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = r, e.memoizedState = null, r;
}
function bc(A, e) {
  return e = Ms({
    mode: "visible",
    children: e
  }, A.mode, 0, null), e.return = A, A.child = e;
}
function Mo(A, e, t, r) {
  return r !== null && wc(r), Wr(e, A.child, null, t), A = bc(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function uC(A, e, t, r, n, o, i) {
  if (t) return e.flags & 256 ? (e.flags &= -257, r = Sa(Error(E(422))), Mo(A, e, i, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (o = r.fallback, n = e.mode, r = Ms({
    mode: "visible",
    children: r.children
  }, n, 0, null), o = Zt(o, n, i, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && Wr(e, A.child, null, i), e.child.memoizedState = Xl(i), e.memoizedState = Wl, o);
  if (!(e.mode & 1)) return Mo(A, e, i, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r) var s = r.dgst;
    return r = s, o = Error(E(419)), r = Sa(o, r, void 0), Mo(A, e, i, r);
  }
  if (s = (i & A.childLanes) !== 0, zA || s) {
    if (r = UA, r !== null) {
      switch (i & -i) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      n = n & (r.suspendedLanes | i) ? 0 : n, n !== 0 && n !== o.retryLane && (o.retryLane = n, et(A, n), Ee(r, A, n, -1));
    }
    return Rc(), r = Sa(Error(E(421))), Mo(A, e, i, r);
  }
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = vC.bind(null, A), n._reactRetry = e, null) : (A = o.treeContext, te = Ht(n.nextSibling), re = e, oA = !0, Ue = null, A !== null && (ae[le++] = Je, ae[le++] = Ye, ae[le++] = tr, Je = A.id, Ye = A.overflow, tr = e), e = bc(e, r.children), e.flags |= 4096, e);
}
function ad(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), _l(A.return, e, t);
}
function La(A, e, t, r, n) {
  var o = A.memoizedState;
  o === null ? A.memoizedState = {
    isBackwards: e,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: t,
    tailMode: n
  } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = n);
}
function Vg(A, e, t) {
  var r = e.pendingProps,
    n = r.revealOrder,
    o = r.tail;
  if (RA(A, e, r.children, t), r = sA.current, r & 2) r = r & 1 | 2, e.flags |= 128;else {
    if (A !== null && A.flags & 128) A: for (A = e.child; A !== null;) {
      if (A.tag === 13) A.memoizedState !== null && ad(A, t, e);else if (A.tag === 19) ad(A, t, e);else if (A.child !== null) {
        A.child.return = A, A = A.child;
        continue;
      }
      if (A === e) break A;
      for (; A.sibling === null;) {
        if (A.return === null || A.return === e) break A;
        A = A.return;
      }
      A.sibling.return = A.return, A = A.sibling;
    }
    r &= 1;
  }
  if (q(sA, r), !(e.mode & 1)) e.memoizedState = null;else switch (n) {
    case "forwards":
      for (t = e.child, n = null; t !== null;) A = t.alternate, A !== null && ns(A) === null && (n = t), t = t.sibling;
      t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), La(e, !1, n, t, o);
      break;
    case "backwards":
      for (t = null, n = e.child, e.child = null; n !== null;) {
        if (A = n.alternate, A !== null && ns(A) === null) {
          e.child = n;
          break;
        }
        A = n.sibling, n.sibling = t, t = n, n = A;
      }
      La(e, !0, t, null, o);
      break;
    case "together":
      La(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Hi(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function tt(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), nr |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error(E(153));
  if (e.child !== null) {
    for (A = e.child, t = Lt(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null;) A = A.sibling, t = t.sibling = Lt(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function cC(A, e, t) {
  switch (e.tag) {
    case 3:
      Ng(e), Gr();
      break;
    case 5:
      hg(e);
      break;
    case 1:
      JA(e.type) && $i(e);
      break;
    case 4:
      Uc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        n = e.memoizedProps.value;
      q(es, r._currentValue), r._currentValue = n;
      break;
    case 13:
      if (r = e.memoizedState, r !== null) return r.dehydrated !== null ? (q(sA, sA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? Pg(A, e, t) : (q(sA, sA.current & 1), A = tt(A, e, t), A !== null ? A.sibling : null);
      q(sA, sA.current & 1);
      break;
    case 19:
      if (r = (t & e.childLanes) !== 0, A.flags & 128) {
        if (r) return Vg(A, e, t);
        e.flags |= 128;
      }
      if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), q(sA, sA.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, _g(A, e, t);
  }
  return tt(A, e, t);
}
var Gg, zl, Wg, Xg;
Gg = function (A, e) {
  for (var t = e.child; t !== null;) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
zl = function () {};
Wg = function (A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    A = e.stateNode, zt(Re.current);
    var o = null;
    switch (t) {
      case "input":
        n = hl(A, n), r = hl(A, r), o = [];
        break;
      case "select":
        n = lA({}, n, {
          value: void 0
        }), r = lA({}, r, {
          value: void 0
        }), o = [];
        break;
      case "textarea":
        n = wl(A, n), r = wl(A, r), o = [];
        break;
      default:
        typeof n.onClick != "function" && typeof r.onClick == "function" && (A.onclick = Yi);
    }
    Cl(t, r);
    var i;
    t = null;
    for (l in n) if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null) if (l === "style") {
      var s = n[l];
      for (i in s) s.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Jn.hasOwnProperty(l) ? o || (o = []) : (o = o || []).push(l, null));
    for (l in r) {
      var a = r[l];
      if (s = n != null ? n[l] : void 0, r.hasOwnProperty(l) && a !== s && (a != null || s != null)) if (l === "style") {
        if (s) {
          for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
        } else t || (o || (o = []), o.push(l, t)), t = a;
      } else l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(l, a)) : l === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(l, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Jn.hasOwnProperty(l) ? (a != null && l === "onScroll" && tA("scroll", A), o || s === a || (o = [])) : (o = o || []).push(l, a));
    }
    t && (o = o || []).push("style", t);
    var l = o;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
Xg = function (A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function cn(A, e) {
  if (!oA) switch (A.tailMode) {
    case "hidden":
      e = A.tail;
      for (var t = null; e !== null;) e.alternate !== null && (t = e), e = e.sibling;
      t === null ? A.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = A.tail;
      for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : r.sibling = null;
  }
}
function LA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child,
    t = 0,
    r = 0;
  if (e) for (var n = A.child; n !== null;) t |= n.lanes | n.childLanes, r |= n.subtreeFlags & 14680064, r |= n.flags & 14680064, n.return = A, n = n.sibling;else for (n = A.child; n !== null;) t |= n.lanes | n.childLanes, r |= n.subtreeFlags, r |= n.flags, n.return = A, n = n.sibling;
  return A.subtreeFlags |= r, A.childLanes = t, e;
}
function fC(A, e, t) {
  var r = e.pendingProps;
  switch (pc(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return LA(e), null;
    case 1:
      return JA(e.type) && Zi(), LA(e), null;
    case 3:
      return r = e.stateNode, Xr(), rA(jA), rA(DA), Ec(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (Ro(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Ue !== null && (eu(Ue), Ue = null))), zl(A, e), LA(e), null;
    case 5:
      Fc(e);
      var n = zt(so.current);
      if (t = e.type, A !== null && e.stateNode != null) Wg(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);else {
        if (!r) {
          if (e.stateNode === null) throw Error(E(166));
          return LA(e), null;
        }
        if (A = zt(Re.current), Ro(e)) {
          r = e.stateNode, t = e.type;
          var o = e.memoizedProps;
          switch (r[ke] = e, r[oo] = o, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              tA("cancel", r), tA("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              tA("load", r);
              break;
            case "video":
            case "audio":
              for (n = 0; n < En.length; n++) tA(En[n], r);
              break;
            case "source":
              tA("error", r);
              break;
            case "img":
            case "image":
            case "link":
              tA("error", r), tA("load", r);
              break;
            case "details":
              tA("toggle", r);
              break;
            case "input":
              pf(r, o), tA("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              }, tA("invalid", r);
              break;
            case "textarea":
              mf(r, o), tA("invalid", r);
          }
          Cl(t, o), n = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var s = o[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Ko(r.textContent, s, A), n = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Ko(r.textContent, s, A), n = ["children", "" + s]) : Jn.hasOwnProperty(i) && s != null && i === "onScroll" && tA("scroll", r);
          }
          switch (t) {
            case "input":
              xo(r), wf(r, o, !0);
              break;
            case "textarea":
              xo(r), Cf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yi);
          }
          r = n, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          i = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = Ch(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = i.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = i.createElement(t, {
            is: r.is
          }) : (A = i.createElement(t), t === "select" && (i = A, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : A = i.createElementNS(A, t), A[ke] = e, A[oo] = r, Gg(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (i = Ql(t, r), t) {
              case "dialog":
                tA("cancel", A), tA("close", A), n = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                tA("load", A), n = r;
                break;
              case "video":
              case "audio":
                for (n = 0; n < En.length; n++) tA(En[n], A);
                n = r;
                break;
              case "source":
                tA("error", A), n = r;
                break;
              case "img":
              case "image":
              case "link":
                tA("error", A), tA("load", A), n = r;
                break;
              case "details":
                tA("toggle", A), n = r;
                break;
              case "input":
                pf(A, r), n = hl(A, r), tA("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                A._wrapperState = {
                  wasMultiple: !!r.multiple
                }, n = lA({}, r, {
                  value: void 0
                }), tA("invalid", A);
                break;
              case "textarea":
                mf(A, r), n = wl(A, r), tA("invalid", A);
                break;
              default:
                n = r;
            }
            Cl(t, n), s = n;
            for (o in s) if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "style" ? vh(A, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Qh(A, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Yn(A, a) : typeof a == "number" && Yn(A, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Jn.hasOwnProperty(o) ? a != null && o === "onScroll" && tA("scroll", A) : a != null && tc(A, o, a, i));
            }
            switch (t) {
              case "input":
                xo(A), wf(A, r, !1);
                break;
              case "textarea":
                xo(A), Cf(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                A.multiple = !!r.multiple, o = r.value, o != null ? Or(A, !!r.multiple, o, !1) : r.defaultValue != null && Or(A, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = Yi);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break A;
              case "img":
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return LA(e), null;
    case 6:
      if (A && e.stateNode != null) Xg(A, e, A.memoizedProps, r);else {
        if (typeof r != "string" && e.stateNode === null) throw Error(E(166));
        if (t = zt(so.current), zt(Re.current), Ro(e)) {
          if (r = e.stateNode, t = e.memoizedProps, r[ke] = e, (o = r.nodeValue !== t) && (A = re, A !== null)) switch (A.tag) {
            case 3:
              Ko(r.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && Ko(r.nodeValue, t, (A.mode & 1) !== 0);
          }
          o && (e.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[ke] = e, e.stateNode = r;
      }
      return LA(e), null;
    case 13:
      if (rA(sA), r = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (oA && te !== null && e.mode & 1 && !(e.flags & 128)) ug(), Gr(), e.flags |= 98560, o = !1;else if (o = Ro(e), r !== null && r.dehydrated !== null) {
          if (A === null) {
            if (!o) throw Error(E(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[ke] = e;
          } else Gr(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          LA(e), o = !1;
        } else Ue !== null && (eu(Ue), Ue = null), o = !0;
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (r = r !== null, r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (A === null || sA.current & 1 ? QA === 0 && (QA = 3) : Rc())), e.updateQueue !== null && (e.flags |= 4), LA(e), null);
    case 4:
      return Xr(), zl(A, e), A === null && ro(e.stateNode.containerInfo), LA(e), null;
    case 10:
      return Qc(e.type._context), LA(e), null;
    case 17:
      return JA(e.type) && Zi(), LA(e), null;
    case 19:
      if (rA(sA), o = e.memoizedState, o === null) return LA(e), null;
      if (r = (e.flags & 128) !== 0, i = o.rendering, i === null) {
        if (r) cn(o, !1);else {
          if (QA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null;) {
            if (i = ns(A), i !== null) {
              for (e.flags |= 128, cn(o, !1), r = i.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = t, t = e.child; t !== null;) o = t, A = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = A, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, A = i.dependencies, o.dependencies = A === null ? null : {
                lanes: A.lanes,
                firstContext: A.firstContext
              }), t = t.sibling;
              return q(sA, sA.current & 1 | 2), e.child;
            }
            A = A.sibling;
          }
          o.tail !== null && BA() > jr && (e.flags |= 128, r = !0, cn(o, !1), e.lanes = 4194304);
        }
      } else {
        if (!r) if (A = ns(i), A !== null) {
          if (e.flags |= 128, r = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), cn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !oA) return LA(e), null;
        } else 2 * BA() - o.renderingStartTime > jr && t !== 1073741824 && (e.flags |= 128, r = !0, cn(o, !1), e.lanes = 4194304);
        o.isBackwards ? (i.sibling = e.child, e.child = i) : (t = o.last, t !== null ? t.sibling = i : e.child = i, o.last = i);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = BA(), e.sibling = null, t = sA.current, q(sA, r ? t & 1 | 2 : t & 1), e) : (LA(e), null);
    case 22:
    case 23:
      return Kc(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? ee & 1073741824 && (LA(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : LA(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, e.tag));
}
function dC(A, e) {
  switch (pc(e), e.tag) {
    case 1:
      return JA(e.type) && Zi(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Xr(), rA(jA), rA(DA), Ec(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Fc(e), null;
    case 13:
      if (rA(sA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(E(340));
        Gr();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return rA(sA), null;
    case 4:
      return Xr(), null;
    case 10:
      return Qc(e.type._context), null;
    case 22:
    case 23:
      return Kc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var No = !1,
  OA = !1,
  BC = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Lr(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    uA(A, e, r);
  } else t.current = null;
}
function jl(A, e, t) {
  try {
    t();
  } catch (r) {
    uA(A, e, r);
  }
}
var ld = !1;
function hC(A, e) {
  if (Ll = zi, A = Zh(), hc(A)) {
    if ("selectionStart" in A) var t = {
      start: A.selectionStart,
      end: A.selectionEnd
    };else A: {
      t = (t = A.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var n = r.anchorOffset,
          o = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break A;
        }
        var i = 0,
          s = -1,
          a = -1,
          l = 0,
          u = 0,
          c = A,
          f = null;
        e: for (;;) {
          for (var w; c !== t || n !== 0 && c.nodeType !== 3 || (s = i + n), c !== o || r !== 0 && c.nodeType !== 3 || (a = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (w = c.firstChild) !== null;) f = c, c = w;
          for (;;) {
            if (c === A) break e;
            if (f === t && ++l === n && (s = i), f === o && ++u === r && (a = i), (w = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = w;
        }
        t = s === -1 || a === -1 ? null : {
          start: s,
          end: a
        };
      } else t = null;
    }
    t = t || {
      start: 0,
      end: 0
    };
  } else t = null;
  for (bl = {
    focusedElem: A,
    selectionRange: t
  }, zi = !1, T = e; T !== null;) if (e = T, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null) A.return = e, T = A;else for (; T !== null;) {
    e = T;
    try {
      var h = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var g = h.memoizedProps,
              U = h.memoizedState,
              B = e.stateNode,
              d = B.getSnapshotBeforeUpdate(e.elementType === e.type ? g : Qe(e.type, g), U);
            B.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var p = e.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (m) {
      uA(e, e.return, m);
    }
    if (A = e.sibling, A !== null) {
      A.return = e.return, T = A;
      break;
    }
    T = e.return;
  }
  return h = ld, ld = !1, h;
}
function Nn(A, e, t) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var n = r = r.next;
    do {
      if ((n.tag & A) === A) {
        var o = n.destroy;
        n.destroy = void 0, o !== void 0 && jl(e, t, o);
      }
      n = n.next;
    } while (n !== r);
  }
}
function Rs(A, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Jl(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : e.current = A;
  }
}
function zg(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, zg(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[ke], delete e[oo], delete e[Dl], delete e[Z0], delete e[$0])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function jg(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function ud(A) {
  A: for (;;) {
    for (; A.sibling === null;) {
      if (A.return === null || jg(A.return)) return null;
      A = A.return;
    }
    for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18;) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      A.child.return = A, A = A.child;
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Yl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Yi));else if (r !== 4 && (A = A.child, A !== null)) for (Yl(A, e, t), A = A.sibling; A !== null;) Yl(A, e, t), A = A.sibling;
}
function Zl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);else if (r !== 4 && (A = A.child, A !== null)) for (Zl(A, e, t), A = A.sibling; A !== null;) Zl(A, e, t), A = A.sibling;
}
var FA = null,
  ye = !1;
function ot(A, e, t) {
  for (t = t.child; t !== null;) Jg(A, e, t), t = t.sibling;
}
function Jg(A, e, t) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
    Ke.onCommitFiberUnmount(Ss, t);
  } catch {}
  switch (t.tag) {
    case 5:
      OA || Lr(t, e);
    case 6:
      var r = FA,
        n = ye;
      FA = null, ot(A, e, t), FA = r, ye = n, FA !== null && (ye ? (A = FA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : FA.removeChild(t.stateNode));
      break;
    case 18:
      FA !== null && (ye ? (A = FA, t = t.stateNode, A.nodeType === 8 ? Ua(A.parentNode, t) : A.nodeType === 1 && Ua(A, t), Ao(A)) : Ua(FA, t.stateNode));
      break;
    case 4:
      r = FA, n = ye, FA = t.stateNode.containerInfo, ye = !0, ot(A, e, t), FA = r, ye = n;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!OA && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        n = r = r.next;
        do {
          var o = n,
            i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && jl(t, e, i), n = n.next;
        } while (n !== r);
      }
      ot(A, e, t);
      break;
    case 1:
      if (!OA && (Lr(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (s) {
        uA(t, e, s);
      }
      ot(A, e, t);
      break;
    case 21:
      ot(A, e, t);
      break;
    case 22:
      t.mode & 1 ? (OA = (r = OA) || t.memoizedState !== null, ot(A, e, t), OA = r) : ot(A, e, t);
      break;
    default:
      ot(A, e, t);
  }
}
function cd(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new BC()), e.forEach(function (r) {
      var n = UC.bind(null, A, r);
      t.has(r) || (t.add(r), r.then(n, n));
    });
  }
}
function me(A, e) {
  var t = e.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var n = t[r];
    try {
      var o = A,
        i = e,
        s = i;
      A: for (; s !== null;) {
        switch (s.tag) {
          case 5:
            FA = s.stateNode, ye = !1;
            break A;
          case 3:
            FA = s.stateNode.containerInfo, ye = !0;
            break A;
          case 4:
            FA = s.stateNode.containerInfo, ye = !0;
            break A;
        }
        s = s.return;
      }
      if (FA === null) throw Error(E(160));
      Jg(o, i, n), FA = null, ye = !1;
      var a = n.alternate;
      a !== null && (a.return = null), n.return = null;
    } catch (l) {
      uA(n, e, l);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null;) Yg(e, A), e = e.sibling;
}
function Yg(A, e) {
  var t = A.alternate,
    r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (me(e, A), Te(A), r & 4) {
        try {
          Nn(3, A, A.return), Rs(3, A);
        } catch (g) {
          uA(A, A.return, g);
        }
        try {
          Nn(5, A, A.return);
        } catch (g) {
          uA(A, A.return, g);
        }
      }
      break;
    case 1:
      me(e, A), Te(A), r & 512 && t !== null && Lr(t, t.return);
      break;
    case 5:
      if (me(e, A), Te(A), r & 512 && t !== null && Lr(t, t.return), A.flags & 32) {
        var n = A.stateNode;
        try {
          Yn(n, "");
        } catch (g) {
          uA(A, A.return, g);
        }
      }
      if (r & 4 && (n = A.stateNode, n != null)) {
        var o = A.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          s = A.type,
          a = A.updateQueue;
        if (A.updateQueue = null, a !== null) try {
          s === "input" && o.type === "radio" && o.name != null && wh(n, o), Ql(s, i);
          var l = Ql(s, o);
          for (i = 0; i < a.length; i += 2) {
            var u = a[i],
              c = a[i + 1];
            u === "style" ? vh(n, c) : u === "dangerouslySetInnerHTML" ? Qh(n, c) : u === "children" ? Yn(n, c) : tc(n, u, c, l);
          }
          switch (s) {
            case "input":
              gl(n, o);
              break;
            case "textarea":
              mh(n, o);
              break;
            case "select":
              var f = n._wrapperState.wasMultiple;
              n._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? Or(n, !!o.multiple, w, !1) : f !== !!o.multiple && (o.defaultValue != null ? Or(n, !!o.multiple, o.defaultValue, !0) : Or(n, !!o.multiple, o.multiple ? [] : "", !1));
          }
          n[oo] = o;
        } catch (g) {
          uA(A, A.return, g);
        }
      }
      break;
    case 6:
      if (me(e, A), Te(A), r & 4) {
        if (A.stateNode === null) throw Error(E(162));
        n = A.stateNode, o = A.memoizedProps;
        try {
          n.nodeValue = o;
        } catch (g) {
          uA(A, A.return, g);
        }
      }
      break;
    case 3:
      if (me(e, A), Te(A), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ao(e.containerInfo);
      } catch (g) {
        uA(A, A.return, g);
      }
      break;
    case 4:
      me(e, A), Te(A);
      break;
    case 13:
      me(e, A), Te(A), n = A.child, n.flags & 8192 && (o = n.memoizedState !== null, n.stateNode.isHidden = o, !o || n.alternate !== null && n.alternate.memoizedState !== null || (Dc = BA())), r & 4 && cd(A);
      break;
    case 22:
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? (OA = (l = OA) || u, me(e, A), OA = l) : me(e, A), Te(A), r & 8192) {
        if (l = A.memoizedState !== null, (A.stateNode.isHidden = l) && !u && A.mode & 1) for (T = A, u = A.child; u !== null;) {
          for (c = T = u; T !== null;) {
            switch (f = T, w = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nn(4, f, f.return);
                break;
              case 1:
                Lr(f, f.return);
                var h = f.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = f, t = f.return;
                  try {
                    e = r, h.props = e.memoizedProps, h.state = e.memoizedState, h.componentWillUnmount();
                  } catch (g) {
                    uA(r, t, g);
                  }
                }
                break;
              case 5:
                Lr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  dd(c);
                  continue;
                }
            }
            w !== null ? (w.return = f, T = w) : dd(c);
          }
          u = u.sibling;
        }
        A: for (u = null, c = A;;) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                n = c.stateNode, l ? (o = n.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = yh("display", i));
              } catch (g) {
                uA(A, A.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (u === null) try {
              c.stateNode.nodeValue = l ? "" : c.memoizedProps;
            } catch (g) {
              uA(A, A.return, g);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === A) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === A) break A;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === A) break A;
            u === c && (u = null), c = c.return;
          }
          u === c && (u = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      me(e, A), Te(A), r & 4 && cd(A);
      break;
    case 21:
      break;
    default:
      me(e, A), Te(A);
  }
}
function Te(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null;) {
          if (jg(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (Yn(n, ""), r.flags &= -33);
          var o = ud(A);
          Zl(A, o, n);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = ud(A);
          Yl(A, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      uA(A, A.return, a);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function gC(A, e, t) {
  T = A, Zg(A);
}
function Zg(A, e, t) {
  for (var r = (A.mode & 1) !== 0; T !== null;) {
    var n = T,
      o = n.child;
    if (n.tag === 22 && r) {
      var i = n.memoizedState !== null || No;
      if (!i) {
        var s = n.alternate,
          a = s !== null && s.memoizedState !== null || OA;
        s = No;
        var l = OA;
        if (No = i, (OA = a) && !l) for (T = n; T !== null;) i = T, a = i.child, i.tag === 22 && i.memoizedState !== null ? Bd(n) : a !== null ? (a.return = i, T = a) : Bd(n);
        for (; o !== null;) T = o, Zg(o), o = o.sibling;
        T = n, No = s, OA = l;
      }
      fd(A);
    } else n.subtreeFlags & 8772 && o !== null ? (o.return = n, T = o) : fd(A);
  }
}
function fd(A) {
  for (; T !== null;) {
    var e = T;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            OA || Rs(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !OA) if (t === null) r.componentDidMount();else {
              var n = e.elementType === e.type ? t.memoizedProps : Qe(e.type, t.memoizedProps);
              r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = e.updateQueue;
            o !== null && Yf(e, o, r);
            break;
          case 3:
            var i = e.updateQueue;
            if (i !== null) {
              if (t = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
              Yf(e, i, t);
            }
            break;
          case 5:
            var s = e.stateNode;
            if (t === null && e.flags & 4) {
              t = s;
              var a = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && t.focus();
                  break;
                case "img":
                  a.src && (t.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (e.memoizedState === null) {
              var l = e.alternate;
              if (l !== null) {
                var u = l.memoizedState;
                if (u !== null) {
                  var c = u.dehydrated;
                  c !== null && Ao(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(E(163));
        }
        OA || e.flags & 512 && Jl(e);
      } catch (f) {
        uA(e, e.return, f);
      }
    }
    if (e === A) {
      T = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, T = t;
      break;
    }
    T = e.return;
  }
}
function dd(A) {
  for (; T !== null;) {
    var e = T;
    if (e === A) {
      T = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, T = t;
      break;
    }
    T = e.return;
  }
}
function Bd(A) {
  for (; T !== null;) {
    var e = T;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Rs(4, e);
          } catch (a) {
            uA(e, t, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              uA(e, n, a);
            }
          }
          var o = e.return;
          try {
            Jl(e);
          } catch (a) {
            uA(e, o, a);
          }
          break;
        case 5:
          var i = e.return;
          try {
            Jl(e);
          } catch (a) {
            uA(e, i, a);
          }
      }
    } catch (a) {
      uA(e, e.return, a);
    }
    if (e === A) {
      T = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      s.return = e.return, T = s;
      break;
    }
    T = e.return;
  }
}
var pC = Math.ceil,
  ss = nt.ReactCurrentDispatcher,
  Tc = nt.ReactCurrentOwner,
  he = nt.ReactCurrentBatchConfig,
  X = 0,
  UA = null,
  gA = null,
  IA = 0,
  ee = 0,
  br = Rt(0),
  QA = 0,
  co = null,
  nr = 0,
  _s = 0,
  Oc = 0,
  Pn = null,
  XA = null,
  Dc = 0,
  jr = 1 / 0,
  ze = null,
  as = !1,
  $l = null,
  xt = null,
  Po = !1,
  Ct = null,
  ls = 0,
  Vn = 0,
  ql = null,
  Ii = -1,
  xi = 0;
function MA() {
  return X & 6 ? BA() : Ii !== -1 ? Ii : Ii = BA();
}
function St(A) {
  return A.mode & 1 ? X & 2 && IA !== 0 ? IA & -IA : AC.transition !== null ? (xi === 0 && (xi = Dh()), xi) : (A = Y, A !== 0 || (A = window.event, A = A === void 0 ? 16 : Ph(A.type)), A) : 1;
}
function Ee(A, e, t, r) {
  if (50 < Vn) throw Vn = 0, ql = null, Error(E(185));
  mo(A, t, r), (!(X & 2) || A !== UA) && (A === UA && (!(X & 2) && (_s |= t), QA === 4 && wt(A, IA)), YA(A, r), t === 1 && X === 0 && !(e.mode & 1) && (jr = BA() + 500, Ds && _t()));
}
function YA(A, e) {
  var t = A.callbackNode;
  A0(A, e);
  var r = Xi(A, A === UA ? IA : 0);
  if (r === 0) t !== null && vf(t), A.callbackNode = null, A.callbackPriority = 0;else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && vf(t), e === 1) A.tag === 0 ? q0(hd.bind(null, A)) : sg(hd.bind(null, A)), J0(function () {
      !(X & 6) && _t();
    }), t = null;else {
      switch (kh(r)) {
        case 1:
          t = sc;
          break;
        case 4:
          t = Th;
          break;
        case 16:
          t = Wi;
          break;
        case 536870912:
          t = Oh;
          break;
        default:
          t = Wi;
      }
      t = op(t, $g.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function $g(A, e) {
  if (Ii = -1, xi = 0, X & 6) throw Error(E(327));
  var t = A.callbackNode;
  if (_r() && A.callbackNode !== t) return null;
  var r = Xi(A, A === UA ? IA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = us(A, r);else {
    e = r;
    var n = X;
    X |= 2;
    var o = Ap();
    (UA !== A || IA !== e) && (ze = null, jr = BA() + 500, Yt(A, e));
    do try {
      CC();
      break;
    } catch (s) {
      qg(A, s);
    } while (!0);
    Cc(), ss.current = o, X = n, gA !== null ? e = 0 : (UA = null, IA = 0, e = QA);
  }
  if (e !== 0) {
    if (e === 2 && (n = El(A), n !== 0 && (r = n, e = Au(A, n))), e === 1) throw t = co, Yt(A, 0), wt(A, r), YA(A, BA()), t;
    if (e === 6) wt(A, r);else {
      if (n = A.current.alternate, !(r & 30) && !wC(n) && (e = us(A, r), e === 2 && (o = El(A), o !== 0 && (r = o, e = Au(A, o))), e === 1)) throw t = co, Yt(A, 0), wt(A, r), YA(A, BA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Pt(A, XA, ze);
          break;
        case 3:
          if (wt(A, r), (r & 130023424) === r && (e = Dc + 500 - BA(), 10 < e)) {
            if (Xi(A, 0) !== 0) break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              MA(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = Ol(Pt.bind(null, A, XA, ze), e);
            break;
          }
          Pt(A, XA, ze);
          break;
        case 4:
          if (wt(A, r), (r & 4194240) === r) break;
          for (e = A.eventTimes, n = -1; 0 < r;) {
            var i = 31 - Fe(r);
            o = 1 << i, i = e[i], i > n && (n = i), r &= ~o;
          }
          if (r = n, r = BA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pC(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = Ol(Pt.bind(null, A, XA, ze), r);
            break;
          }
          Pt(A, XA, ze);
          break;
        case 5:
          Pt(A, XA, ze);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return YA(A, BA()), A.callbackNode === t ? $g.bind(null, A) : null;
}
function Au(A, e) {
  var t = Pn;
  return A.current.memoizedState.isDehydrated && (Yt(A, e).flags |= 256), A = us(A, e), A !== 2 && (e = XA, XA = t, e !== null && eu(e)), A;
}
function eu(A) {
  XA === null ? XA = A : XA.push.apply(XA, A);
}
function wC(A) {
  for (var e = A;;) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var n = t[r],
          o = n.getSnapshot;
        n = n.value;
        try {
          if (!Ie(o(), n)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;else {
      if (e === A) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function wt(A, e) {
  for (e &= ~Oc, e &= ~_s, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e;) {
    var t = 31 - Fe(e),
      r = 1 << t;
    A[t] = -1, e &= ~r;
  }
}
function hd(A) {
  if (X & 6) throw Error(E(327));
  _r();
  var e = Xi(A, 0);
  if (!(e & 1)) return YA(A, BA()), null;
  var t = us(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = El(A);
    r !== 0 && (e = r, t = Au(A, r));
  }
  if (t === 1) throw t = co, Yt(A, 0), wt(A, e), YA(A, BA()), t;
  if (t === 6) throw Error(E(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, Pt(A, XA, ze), YA(A, BA()), null;
}
function kc(A, e) {
  var t = X;
  X |= 1;
  try {
    return A(e);
  } finally {
    X = t, X === 0 && (jr = BA() + 500, Ds && _t());
  }
}
function or(A) {
  Ct !== null && Ct.tag === 0 && !(X & 6) && _r();
  var e = X;
  X |= 1;
  var t = he.transition,
    r = Y;
  try {
    if (he.transition = null, Y = 1, A) return A();
  } finally {
    Y = r, he.transition = t, X = e, !(X & 6) && _t();
  }
}
function Kc() {
  ee = br.current, rA(br);
}
function Yt(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, j0(t)), gA !== null) for (t = gA.return; t !== null;) {
    var r = t;
    switch (pc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zi();
        break;
      case 3:
        Xr(), rA(jA), rA(DA), Ec();
        break;
      case 5:
        Fc(r);
        break;
      case 4:
        Xr();
        break;
      case 13:
        rA(sA);
        break;
      case 19:
        rA(sA);
        break;
      case 10:
        Qc(r.type._context);
        break;
      case 22:
      case 23:
        Kc();
    }
    t = t.return;
  }
  if (UA = A, gA = A = Lt(A.current, null), IA = ee = e, QA = 0, co = null, Oc = _s = nr = 0, XA = Pn = null, Xt !== null) {
    for (e = 0; e < Xt.length; e++) if (t = Xt[e], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var n = r.next,
        o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = n, r.next = i;
      }
      t.pending = r;
    }
    Xt = null;
  }
  return A;
}
function qg(A, e) {
  do {
    var t = gA;
    try {
      if (Cc(), Fi.current = is, os) {
        for (var r = aA.memoizedState; r !== null;) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        os = !1;
      }
      if (rr = 0, vA = mA = aA = null, Mn = !1, ao = 0, Tc.current = null, t === null || t.return === null) {
        QA = 1, co = e, gA = null;
        break;
      }
      A: {
        var o = A,
          i = t.return,
          s = t,
          a = e;
        if (e = IA, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var l = a,
            u = s,
            c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var w = td(i);
          if (w !== null) {
            w.flags &= -257, rd(w, i, s, o, e), w.mode & 1 && ed(o, l, e), e = w, a = l;
            var h = e.updateQueue;
            if (h === null) {
              var g = new Set();
              g.add(a), e.updateQueue = g;
            } else h.add(a);
            break A;
          } else {
            if (!(e & 1)) {
              ed(o, l, e), Rc();
              break A;
            }
            a = Error(E(426));
          }
        } else if (oA && s.mode & 1) {
          var U = td(i);
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256), rd(U, i, s, o, e), wc(zr(a, s));
            break A;
          }
        }
        o = a = zr(a, s), QA !== 4 && (QA = 2), Pn === null ? Pn = [o] : Pn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var B = kg(o, a, e);
              Jf(o, B);
              break A;
            case 1:
              s = a;
              var d = o.type,
                p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var m = Kg(o, s, e);
                Jf(o, m);
                break A;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tp(t);
    } catch (v) {
      e = v, gA === t && t !== null && (gA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ap() {
  var A = ss.current;
  return ss.current = is, A === null ? is : A;
}
function Rc() {
  (QA === 0 || QA === 3 || QA === 2) && (QA = 4), UA === null || !(nr & 268435455) && !(_s & 268435455) || wt(UA, IA);
}
function us(A, e) {
  var t = X;
  X |= 2;
  var r = Ap();
  (UA !== A || IA !== e) && (ze = null, Yt(A, e));
  do try {
    mC();
    break;
  } catch (n) {
    qg(A, n);
  } while (!0);
  if (Cc(), X = t, ss.current = r, gA !== null) throw Error(E(261));
  return UA = null, IA = 0, QA;
}
function mC() {
  for (; gA !== null;) ep(gA);
}
function CC() {
  for (; gA !== null && !Wm();) ep(gA);
}
function ep(A) {
  var e = np(A.alternate, A, ee);
  A.memoizedProps = A.pendingProps, e === null ? tp(A) : gA = e, Tc.current = null;
}
function tp(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = dC(t, e), t !== null) {
        t.flags &= 32767, gA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;else {
        QA = 6, gA = null;
        return;
      }
    } else if (t = fC(t, e, ee), t !== null) {
      gA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      gA = e;
      return;
    }
    gA = e = A;
  } while (e !== null);
  QA === 0 && (QA = 5);
}
function Pt(A, e, t) {
  var r = Y,
    n = he.transition;
  try {
    he.transition = null, Y = 1, QC(A, e, t, r);
  } finally {
    he.transition = n, Y = r;
  }
  return null;
}
function QC(A, e, t, r) {
  do _r(); while (Ct !== null);
  if (X & 6) throw Error(E(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(E(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (e0(A, o), A === UA && (gA = UA = null, IA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Po || (Po = !0, op(Wi, function () {
    return _r(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = he.transition, he.transition = null;
    var i = Y;
    Y = 1;
    var s = X;
    X |= 4, Tc.current = null, hC(A, t), Yg(t, A), N0(bl), zi = !!Ll, bl = Ll = null, A.current = t, gC(t), Xm(), X = s, Y = i, he.transition = o;
  } else A.current = t;
  if (Po && (Po = !1, Ct = A, ls = n), o = A.pendingLanes, o === 0 && (xt = null), Jm(t.stateNode), YA(A, BA()), e !== null) for (r = A.onRecoverableError, t = 0; t < e.length; t++) n = e[t], r(n.value, {
    componentStack: n.stack,
    digest: n.digest
  });
  if (as) throw as = !1, A = $l, $l = null, A;
  return ls & 1 && A.tag !== 0 && _r(), o = A.pendingLanes, o & 1 ? A === ql ? Vn++ : (Vn = 0, ql = A) : Vn = 0, _t(), null;
}
function _r() {
  if (Ct !== null) {
    var A = kh(ls),
      e = he.transition,
      t = Y;
    try {
      if (he.transition = null, Y = 16 > A ? 16 : A, Ct === null) var r = !1;else {
        if (A = Ct, Ct = null, ls = 0, X & 6) throw Error(E(331));
        var n = X;
        for (X |= 4, T = A.current; T !== null;) {
          var o = T,
            i = o.child;
          if (T.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var l = s[a];
                for (T = l; T !== null;) {
                  var u = T;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nn(8, u, o);
                  }
                  var c = u.child;
                  if (c !== null) c.return = u, T = c;else for (; T !== null;) {
                    u = T;
                    var f = u.sibling,
                      w = u.return;
                    if (zg(u), u === l) {
                      T = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = w, T = f;
                      break;
                    }
                    T = w;
                  }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var U = g.sibling;
                    g.sibling = null, g = U;
                  } while (g !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, T = i;else A: for (; T !== null;) {
            if (o = T, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Nn(9, o, o.return);
            }
            var B = o.sibling;
            if (B !== null) {
              B.return = o.return, T = B;
              break A;
            }
            T = o.return;
          }
        }
        var d = A.current;
        for (T = d; T !== null;) {
          i = T;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, T = p;else A: for (i = d; T !== null;) {
            if (s = T, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Rs(9, s);
              }
            } catch (v) {
              uA(s, s.return, v);
            }
            if (s === i) {
              T = null;
              break A;
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, T = m;
              break A;
            }
            T = s.return;
          }
        }
        if (X = n, _t(), Ke && typeof Ke.onPostCommitFiberRoot == "function") try {
          Ke.onPostCommitFiberRoot(Ss, A);
        } catch {}
        r = !0;
      }
      return r;
    } finally {
      Y = t, he.transition = e;
    }
  }
  return !1;
}
function gd(A, e, t) {
  e = zr(t, e), e = kg(A, e, 1), A = It(A, e, 1), e = MA(), A !== null && (mo(A, 1, e), YA(A, e));
}
function uA(A, e, t) {
  if (A.tag === 3) gd(A, A, t);else for (; e !== null;) {
    if (e.tag === 3) {
      gd(e, A, t);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        A = zr(t, A), A = Kg(e, A, 1), e = It(e, A, 1), A = MA(), e !== null && (mo(e, 1, A), YA(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function yC(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = MA(), A.pingedLanes |= A.suspendedLanes & t, UA === A && (IA & t) === t && (QA === 4 || QA === 3 && (IA & 130023424) === IA && 500 > BA() - Dc ? Yt(A, 0) : Oc |= t), YA(A, e);
}
function rp(A, e) {
  e === 0 && (A.mode & 1 ? (e = bo, bo <<= 1, !(bo & 130023424) && (bo = 4194304)) : e = 1);
  var t = MA();
  A = et(A, e), A !== null && (mo(A, e, t), YA(A, t));
}
function vC(A) {
  var e = A.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), rp(A, t);
}
function UC(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode,
        n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(e), rp(A, t);
}
var np;
np = function (A, e, t) {
  if (A !== null) {
    if (A.memoizedProps !== e.pendingProps || jA.current) zA = !0;else {
      if (!(A.lanes & t) && !(e.flags & 128)) return zA = !1, cC(A, e, t);
      zA = !!(A.flags & 131072);
    }
  } else zA = !1, oA && e.flags & 1048576 && ag(e, As, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Hi(A, e), A = e.pendingProps;
      var n = Vr(e, DA.current);
      Rr(e, t), n = Ic(null, e, r, A, n, t);
      var o = xc();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, JA(r) ? (o = !0, $i(e)) : o = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, vc(e), n.updater = Ks, e.stateNode = n, n._reactInternals = e, Nl(e, r, A, t), e = Gl(null, e, r, !0, o, t)) : (e.tag = 0, oA && o && gc(e), RA(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (Hi(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = EC(r), A = Qe(r, A), n) {
          case 0:
            e = Vl(null, e, r, A, t);
            break A;
          case 1:
            e = id(null, e, r, A, t);
            break A;
          case 11:
            e = nd(null, e, r, A, t);
            break A;
          case 14:
            e = od(null, e, r, Qe(r.type, A), t);
            break A;
        }
        throw Error(E(306, r, ""));
      }
      return e;
    case 0:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Qe(r, n), Vl(A, e, r, n, t);
    case 1:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Qe(r, n), id(A, e, r, n, t);
    case 3:
      A: {
        if (Ng(e), A === null) throw Error(E(387));
        r = e.pendingProps, o = e.memoizedState, n = o.element, Bg(A, e), rs(e, r, null, t);
        var i = e.memoizedState;
        if (r = i.element, o.isDehydrated) {
          if (o = {
            element: r,
            isDehydrated: !1,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
            n = zr(Error(E(423)), e), e = sd(A, e, r, t, n);
            break A;
          } else if (r !== n) {
            n = zr(Error(E(424)), e), e = sd(A, e, r, t, n);
            break A;
          } else for (te = Ht(e.stateNode.containerInfo.firstChild), re = e, oA = !0, Ue = null, t = fg(e, null, r, t), e.child = t; t;) t.flags = t.flags & -3 | 4096, t = t.sibling;
        } else {
          if (Gr(), r === n) {
            e = tt(A, e, t);
            break A;
          }
          RA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return hg(e), A === null && Rl(e), r = e.type, n = e.pendingProps, o = A !== null ? A.memoizedProps : null, i = n.children, Tl(r, n) ? i = null : o !== null && Tl(r, o) && (e.flags |= 32), Mg(A, e), RA(A, e, i, t), e.child;
    case 6:
      return A === null && Rl(e), null;
    case 13:
      return Pg(A, e, t);
    case 4:
      return Uc(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = Wr(e, null, r, t) : RA(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Qe(r, n), nd(A, e, r, n, t);
    case 7:
      return RA(A, e, e.pendingProps, t), e.child;
    case 8:
      return RA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return RA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, o = e.memoizedProps, i = n.value, q(es, r._currentValue), r._currentValue = i, o !== null) if (Ie(o.value, i)) {
          if (o.children === n.children && !jA.current) {
            e = tt(A, e, t);
            break A;
          }
        } else for (o = e.child, o !== null && (o.return = e); o !== null;) {
          var s = o.dependencies;
          if (s !== null) {
            i = o.child;
            for (var a = s.firstContext; a !== null;) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Ze(-1, t & -t), a.tag = 2;
                  var l = o.updateQueue;
                  if (l !== null) {
                    l = l.shared;
                    var u = l.pending;
                    u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), _l(o.return, t, e), s.lanes |= t;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) i = o.type === e.type ? null : o.child;else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(E(341));
            i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), _l(i, t, e), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;else for (i = o; i !== null;) {
            if (i === e) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        RA(A, e, n.children, t), e = e.child;
      }
      return e;
    case 9:
      return n = e.type, r = e.pendingProps.children, Rr(e, t), n = pe(n), r = r(n), e.flags |= 1, RA(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = Qe(r, e.pendingProps), n = Qe(r.type, n), od(A, e, r, n, t);
    case 15:
      return Rg(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Qe(r, n), Hi(A, e), e.tag = 1, JA(r) ? (A = !0, $i(e)) : A = !1, Rr(e, t), Dg(e, r, n), Nl(e, r, n, t), Gl(null, e, r, !0, A, t);
    case 19:
      return Vg(A, e, t);
    case 22:
      return _g(A, e, t);
  }
  throw Error(E(156, e.tag));
};
function op(A, e) {
  return bh(A, e);
}
function FC(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function fe(A, e, t, r) {
  return new FC(A, e, t, r);
}
function _c(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function EC(A) {
  if (typeof A == "function") return _c(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === nc) return 11;
    if (A === oc) return 14;
  }
  return 2;
}
function Lt(A, e) {
  var t = A.alternate;
  return t === null ? (t = fe(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : {
    lanes: e.lanes,
    firstContext: e.firstContext
  }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function Si(A, e, t, r, n, o) {
  var i = 2;
  if (r = A, typeof A == "function") _c(A) && (i = 1);else if (typeof A == "string") i = 5;else A: switch (A) {
    case yr:
      return Zt(t.children, n, o, e);
    case rc:
      i = 8, n |= 8;
      break;
    case cl:
      return A = fe(12, t, e, n | 2), A.elementType = cl, A.lanes = o, A;
    case fl:
      return A = fe(13, t, e, n), A.elementType = fl, A.lanes = o, A;
    case dl:
      return A = fe(19, t, e, n), A.elementType = dl, A.lanes = o, A;
    case hh:
      return Ms(t, n, o, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case dh:
          i = 10;
          break A;
        case Bh:
          i = 9;
          break A;
        case nc:
          i = 11;
          break A;
        case oc:
          i = 14;
          break A;
        case Bt:
          i = 16, r = null;
          break A;
      }
      throw Error(E(130, A == null ? A : typeof A, ""));
  }
  return e = fe(i, t, e, n), e.elementType = A, e.type = r, e.lanes = o, e;
}
function Zt(A, e, t, r) {
  return A = fe(7, A, r, e), A.lanes = t, A;
}
function Ms(A, e, t, r) {
  return A = fe(22, A, r, e), A.elementType = hh, A.lanes = t, A.stateNode = {
    isHidden: !1
  }, A;
}
function ba(A, e, t) {
  return A = fe(6, A, null, e), A.lanes = t, A;
}
function Ta(A, e, t) {
  return e = fe(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = {
    containerInfo: A.containerInfo,
    pendingChildren: null,
    implementation: A.implementation
  }, e;
}
function HC(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = da(0), this.expirationTimes = da(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = da(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function Mc(A, e, t, r, n, o, i, s, a) {
  return A = new HC(A, e, t, s, a), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = fe(3, null, null, e), A.current = o, o.stateNode = A, o.memoizedState = {
    element: r,
    isDehydrated: t,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, vc(o), A;
}
function IC(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qr,
    key: r == null ? null : "" + r,
    children: A,
    containerInfo: e,
    implementation: t
  };
}
function ip(A) {
  if (!A) return Dt;
  A = A._reactInternals;
  A: {
    if (lr(A) !== A || A.tag !== 1) throw Error(E(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (JA(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(E(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (JA(t)) return ig(A, t, e);
  }
  return e;
}
function sp(A, e, t, r, n, o, i, s, a) {
  return A = Mc(t, r, !0, A, n, o, i, s, a), A.context = ip(null), t = A.current, r = MA(), n = St(t), o = Ze(r, n), o.callback = e ?? null, It(t, o, n), A.current.lanes = n, mo(A, n, r), YA(A, r), A;
}
function Ns(A, e, t, r) {
  var n = e.current,
    o = MA(),
    i = St(n);
  return t = ip(t), e.context === null ? e.context = t : e.pendingContext = t, e = Ze(o, i), e.payload = {
    element: A
  }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = It(n, e, i), A !== null && (Ee(A, n, i, o), Ui(A, n, i)), i;
}
function cs(A) {
  if (A = A.current, !A.child) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function pd(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Nc(A, e) {
  pd(A, e), (A = A.alternate) && pd(A, e);
}
function xC() {
  return null;
}
var ap = typeof reportError == "function" ? reportError : function (A) {
  console.error(A);
};
function Pc(A) {
  this._internalRoot = A;
}
Ps.prototype.render = Pc.prototype.render = function (A) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  Ns(A, e, null, null);
};
Ps.prototype.unmount = Pc.prototype.unmount = function () {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    or(function () {
      Ns(null, A, null, null);
    }), e[At] = null;
  }
};
function Ps(A) {
  this._internalRoot = A;
}
Ps.prototype.unstable_scheduleHydration = function (A) {
  if (A) {
    var e = _h();
    A = {
      blockedOn: null,
      target: A,
      priority: e
    };
    for (var t = 0; t < pt.length && e !== 0 && e < pt[t].priority; t++);
    pt.splice(t, 0, A), t === 0 && Nh(A);
  }
};
function Vc(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function Vs(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function wd() {}
function SC(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var l = cs(i);
        o.call(l);
      };
    }
    var i = sp(e, r, A, 0, null, !1, !1, "", wd);
    return A._reactRootContainer = i, A[At] = i.current, ro(A.nodeType === 8 ? A.parentNode : A), or(), i;
  }
  for (; n = A.lastChild;) A.removeChild(n);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var l = cs(a);
      s.call(l);
    };
  }
  var a = Mc(A, 0, !1, null, null, !1, !1, "", wd);
  return A._reactRootContainer = a, A[At] = a.current, ro(A.nodeType === 8 ? A.parentNode : A), or(function () {
    Ns(e, a, t, r);
  }), a;
}
function Gs(A, e, t, r, n) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof n == "function") {
      var s = n;
      n = function () {
        var a = cs(i);
        s.call(a);
      };
    }
    Ns(e, i, A, n);
  } else i = SC(t, e, A, n, r);
  return cs(i);
}
Kh = function (A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Fn(e.pendingLanes);
        t !== 0 && (ac(e, t | 1), YA(e, BA()), !(X & 6) && (jr = BA() + 500, _t()));
      }
      break;
    case 13:
      or(function () {
        var r = et(A, 1);
        if (r !== null) {
          var n = MA();
          Ee(r, A, 1, n);
        }
      }), Nc(A, 1);
  }
};
lc = function (A) {
  if (A.tag === 13) {
    var e = et(A, 134217728);
    if (e !== null) {
      var t = MA();
      Ee(e, A, 134217728, t);
    }
    Nc(A, 134217728);
  }
};
Rh = function (A) {
  if (A.tag === 13) {
    var e = St(A),
      t = et(A, e);
    if (t !== null) {
      var r = MA();
      Ee(t, A, e, r);
    }
    Nc(A, e);
  }
};
_h = function () {
  return Y;
};
Mh = function (A, e) {
  var t = Y;
  try {
    return Y = A, e();
  } finally {
    Y = t;
  }
};
vl = function (A, e, t) {
  switch (e) {
    case "input":
      if (gl(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode;) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = Os(r);
            if (!n) throw Error(E(90));
            ph(r), gl(r, n);
          }
        }
      }
      break;
    case "textarea":
      mh(A, t);
      break;
    case "select":
      e = t.value, e != null && Or(A, !!t.multiple, e, !1);
  }
};
Eh = kc;
Hh = or;
var LC = {
    usingClientEntryPoint: !1,
    Events: [Qo, Er, Os, Uh, Fh, kc]
  },
  fn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  bC = {
    bundleType: fn.bundleType,
    version: fn.version,
    rendererPackageName: fn.rendererPackageName,
    rendererConfig: fn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (A) {
      return A = Sh(A), A === null ? null : A.stateNode;
    },
    findFiberByHostInstance: fn.findFiberByHostInstance || xC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vo.isDisabled && Vo.supportsFiber) try {
    Ss = Vo.inject(bC), Ke = Vo;
  } catch {}
}
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LC;
oe.createPortal = function (A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vc(e)) throw Error(E(200));
  return IC(A, e, null, t);
};
oe.createRoot = function (A, e) {
  if (!Vc(A)) throw Error(E(299));
  var t = !1,
    r = "",
    n = ap;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = Mc(A, 1, !1, null, null, t, !1, r, n), A[At] = e.current, ro(A.nodeType === 8 ? A.parentNode : A), new Pc(e);
};
oe.findDOMNode = function (A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0) throw typeof A.render == "function" ? Error(E(188)) : (A = Object.keys(A).join(","), Error(E(268, A)));
  return A = Sh(e), A = A === null ? null : A.stateNode, A;
};
oe.flushSync = function (A) {
  return or(A);
};
oe.hydrate = function (A, e, t) {
  if (!Vs(e)) throw Error(E(200));
  return Gs(null, A, e, !0, t);
};
oe.hydrateRoot = function (A, e, t) {
  if (!Vc(A)) throw Error(E(405));
  var r = t != null && t.hydratedSources || null,
    n = !1,
    o = "",
    i = ap;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), e = sp(e, null, A, 1, t ?? null, n, !1, o, i), A[At] = e.current, ro(A), r) for (A = 0; A < r.length; A++) t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n);
  return new Ps(e);
};
oe.render = function (A, e, t) {
  if (!Vs(e)) throw Error(E(200));
  return Gs(null, A, e, !1, t);
};
oe.unmountComponentAtNode = function (A) {
  if (!Vs(A)) throw Error(E(40));
  return A._reactRootContainer ? (or(function () {
    Gs(null, null, A, !1, function () {
      A._reactRootContainer = null, A[At] = null;
    });
  }), !0) : !1;
};
oe.unstable_batchedUpdates = kc;
oe.unstable_renderSubtreeIntoContainer = function (A, e, t, r) {
  if (!Vs(t)) throw Error(E(200));
  if (A == null || A._reactInternals === void 0) throw Error(E(38));
  return Gs(A, e, t, !1, r);
};
oe.version = "18.3.1-next-f1338f8080-20240426";
function lp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp);
  } catch (A) {
    console.error(A);
  }
}
lp(), lh.exports = oe;
var TC = lh.exports,
  md = TC;
ll.createRoot = md.createRoot, ll.hydrateRoot = md.hydrateRoot;
function OC(A) {
  return S.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-message-circle",
    ...A,
    children: [S.jsx("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), S.jsx("path", {
      d: "M3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19L3 20"
    })]
  });
}
function DC(A) {
  return S.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-x",
    ...A,
    children: [S.jsx("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), S.jsx("path", {
      d: "M18 6L6 18M6 6l12 12"
    })]
  });
}
function kC(A) {
  return S.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-headset",
    ...A,
    children: [S.jsx("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), S.jsx("path", {
      d: "M4 14v-3a8 8 0 1116 0v3M18 19c0 1.657-2.686 3-6 3"
    }), S.jsx("path", {
      d: "M4 14a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3zM15 14a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3z"
    })]
  });
}
function up(A) {
  var e,
    t,
    r = "";
  if (typeof A == "string" || typeof A == "number") r += A;else if (typeof A == "object") if (Array.isArray(A)) {
    var n = A.length;
    for (e = 0; e < n; e++) A[e] && (t = up(A[e])) && (r && (r += " "), r += t);
  } else for (t in A) A[t] && (r && (r += " "), r += t);
  return r;
}
function KC() {
  for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = up(A)) && (r && (r += " "), r += e);
  return r;
}
const Gc = "-";
function RC(A) {
  const e = MC(A),
    {
      conflictingClassGroups: t,
      conflictingClassGroupModifiers: r
    } = A;
  function n(i) {
    const s = i.split(Gc);
    return s[0] === "" && s.length !== 1 && s.shift(), cp(s, e) || _C(i);
  }
  function o(i, s) {
    const a = t[i] || [];
    return s && r[i] ? [...a, ...r[i]] : a;
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  };
}
function cp(A, e) {
  var i;
  if (A.length === 0) return e.classGroupId;
  const t = A[0],
    r = e.nextPart.get(t),
    n = r ? cp(A.slice(1), r) : void 0;
  if (n) return n;
  if (e.validators.length === 0) return;
  const o = A.join(Gc);
  return (i = e.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : i.classGroupId;
}
const Cd = /^\[(.+)\]$/;
function _C(A) {
  if (Cd.test(A)) {
    const e = Cd.exec(A)[1],
      t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t) return "arbitrary.." + t;
  }
}
function MC(A) {
  const {
      theme: e,
      prefix: t
    } = A,
    r = {
      nextPart: new Map(),
      validators: []
    };
  return PC(Object.entries(A.classGroups), t).forEach(([o, i]) => {
    tu(i, r, o, e);
  }), r;
}
function tu(A, e, t, r) {
  A.forEach(n => {
    if (typeof n == "string") {
      const o = n === "" ? e : Qd(e, n);
      o.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (NC(n)) {
        tu(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([o, i]) => {
      tu(i, Qd(e, o), t, r);
    });
  });
}
function Qd(A, e) {
  let t = A;
  return e.split(Gc).forEach(r => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}
function NC(A) {
  return A.isThemeGetter;
}
function PC(A, e) {
  return e ? A.map(([t, r]) => {
    const n = r.map(o => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, s]) => [e + i, s])) : o);
    return [t, n];
  }) : A;
}
function VC(A) {
  if (A < 1) return {
    get: () => {},
    set: () => {}
  };
  let e = 0,
    t = new Map(),
    r = new Map();
  function n(o, i) {
    t.set(o, i), e++, e > A && (e = 0, r = t, t = new Map());
  }
  return {
    get(o) {
      let i = t.get(o);
      if (i !== void 0) return i;
      if ((i = r.get(o)) !== void 0) return n(o, i), i;
    },
    set(o, i) {
      t.has(o) ? t.set(o, i) : n(o, i);
    }
  };
}
const fp = "!";
function GC(A) {
  const e = A.separator,
    t = e.length === 1,
    r = e[0],
    n = e.length;
  return function (i) {
    const s = [];
    let a = 0,
      l = 0,
      u;
    for (let g = 0; g < i.length; g++) {
      let U = i[g];
      if (a === 0) {
        if (U === r && (t || i.slice(g, g + n) === e)) {
          s.push(i.slice(l, g)), l = g + n;
          continue;
        }
        if (U === "/") {
          u = g;
          continue;
        }
      }
      U === "[" ? a++ : U === "]" && a--;
    }
    const c = s.length === 0 ? i : i.substring(l),
      f = c.startsWith(fp),
      w = f ? c.substring(1) : c,
      h = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: w,
      maybePostfixModifierPosition: h
    };
  };
}
function WC(A) {
  if (A.length <= 1) return A;
  const e = [];
  let t = [];
  return A.forEach(r => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}
function XC(A) {
  return {
    cache: VC(A.cacheSize),
    splitModifiers: GC(A),
    ...RC(A)
  };
}
const zC = /\s+/;
function jC(A, e) {
  const {
      splitModifiers: t,
      getClassGroupId: r,
      getConflictingClassGroupIds: n
    } = e,
    o = new Set();
  return A.trim().split(zC).map(i => {
    const {
      modifiers: s,
      hasImportantModifier: a,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = t(i);
    let c = r(u ? l.substring(0, u) : l),
      f = !!u;
    if (!c) {
      if (!u) return {
        isTailwindClass: !1,
        originalClassName: i
      };
      if (c = r(l), !c) return {
        isTailwindClass: !1,
        originalClassName: i
      };
      f = !1;
    }
    const w = WC(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: a ? w + fp : w,
      classGroupId: c,
      originalClassName: i,
      hasPostfixModifier: f
    };
  }).reverse().filter(i => {
    if (!i.isTailwindClass) return !0;
    const {
        modifierId: s,
        classGroupId: a,
        hasPostfixModifier: l
      } = i,
      u = s + a;
    return o.has(u) ? !1 : (o.add(u), n(a, l).forEach(c => o.add(s + c)), !0);
  }).reverse().map(i => i.originalClassName).join(" ");
}
function JC() {
  let A = 0,
    e,
    t,
    r = "";
  for (; A < arguments.length;) (e = arguments[A++]) && (t = dp(e)) && (r && (r += " "), r += t);
  return r;
}
function dp(A) {
  if (typeof A == "string") return A;
  let e,
    t = "";
  for (let r = 0; r < A.length; r++) A[r] && (e = dp(A[r])) && (t && (t += " "), t += e);
  return t;
}
function YC(A, ...e) {
  let t,
    r,
    n,
    o = i;
  function i(a) {
    const l = e.reduce((u, c) => c(u), A());
    return t = XC(l), r = t.cache.get, n = t.cache.set, o = s, s(a);
  }
  function s(a) {
    const l = r(a);
    if (l) return l;
    const u = jC(a, t);
    return n(a, u), u;
  }
  return function () {
    return o(JC.apply(null, arguments));
  };
}
function eA(A) {
  const e = t => t[A] || [];
  return e.isThemeGetter = !0, e;
}
const Bp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ZC = /^\d+\/\d+$/,
  $C = new Set(["px", "full", "screen"]),
  qC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  AQ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  eQ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  tQ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  rQ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ve(A) {
  return jt(A) || $C.has(A) || ZC.test(A);
}
function it(A) {
  return qr(A, "length", cQ);
}
function jt(A) {
  return !!A && !Number.isNaN(Number(A));
}
function Go(A) {
  return qr(A, "number", jt);
}
function dn(A) {
  return !!A && Number.isInteger(Number(A));
}
function nQ(A) {
  return A.endsWith("%") && jt(A.slice(0, -1));
}
function _(A) {
  return Bp.test(A);
}
function st(A) {
  return qC.test(A);
}
const oQ = new Set(["length", "size", "percentage"]);
function iQ(A) {
  return qr(A, oQ, hp);
}
function sQ(A) {
  return qr(A, "position", hp);
}
const aQ = new Set(["image", "url"]);
function lQ(A) {
  return qr(A, aQ, dQ);
}
function uQ(A) {
  return qr(A, "", fQ);
}
function Bn() {
  return !0;
}
function qr(A, e, t) {
  const r = Bp.exec(A);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}
function cQ(A) {
  return AQ.test(A) && !eQ.test(A);
}
function hp() {
  return !1;
}
function fQ(A) {
  return tQ.test(A);
}
function dQ(A) {
  return rQ.test(A);
}
function BQ() {
  const A = eA("colors"),
    e = eA("spacing"),
    t = eA("blur"),
    r = eA("brightness"),
    n = eA("borderColor"),
    o = eA("borderRadius"),
    i = eA("borderSpacing"),
    s = eA("borderWidth"),
    a = eA("contrast"),
    l = eA("grayscale"),
    u = eA("hueRotate"),
    c = eA("invert"),
    f = eA("gap"),
    w = eA("gradientColorStops"),
    h = eA("gradientColorStopPositions"),
    g = eA("inset"),
    U = eA("margin"),
    B = eA("opacity"),
    d = eA("padding"),
    p = eA("saturate"),
    m = eA("scale"),
    v = eA("sepia"),
    C = eA("skew"),
    F = eA("space"),
    Q = eA("translate"),
    H = () => ["auto", "contain", "none"],
    I = () => ["auto", "hidden", "clip", "visible", "scroll"],
    M = () => ["auto", _, e],
    D = () => [_, e],
    N = () => ["", Ve, it],
    AA = () => ["auto", jt, _],
    $A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
    iA = () => ["solid", "dashed", "dotted", "double", "none"],
    cA = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
    x = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
    O = () => ["", "0", _],
    k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
    G = () => [jt, Go],
    z = () => [jt, _];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Bn],
      spacing: [Ve, it],
      blur: ["none", "", st, _],
      brightness: G(),
      borderColor: [A],
      borderRadius: ["none", "", "full", st, _],
      borderSpacing: D(),
      borderWidth: N(),
      contrast: G(),
      grayscale: O(),
      hueRotate: z(),
      invert: O(),
      gap: D(),
      gradientColorStops: [A],
      gradientColorStopPositions: [nQ, it],
      inset: M(),
      margin: M(),
      opacity: G(),
      padding: D(),
      saturate: G(),
      scale: G(),
      sepia: O(),
      skew: z(),
      space: D(),
      translate: D()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", _]
      }],
      container: ["container"],
      columns: [{
        columns: [st]
      }],
      "break-after": [{
        "break-after": k()
      }],
      "break-before": [{
        "break-before": k()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [...$A(), _]
      }],
      overflow: [{
        overflow: I()
      }],
      "overflow-x": [{
        "overflow-x": I()
      }],
      "overflow-y": [{
        "overflow-y": I()
      }],
      overscroll: [{
        overscroll: H()
      }],
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      "overscroll-y": [{
        "overscroll-y": H()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [g]
      }],
      "inset-x": [{
        "inset-x": [g]
      }],
      "inset-y": [{
        "inset-y": [g]
      }],
      start: [{
        start: [g]
      }],
      end: [{
        end: [g]
      }],
      top: [{
        top: [g]
      }],
      right: [{
        right: [g]
      }],
      bottom: [{
        bottom: [g]
      }],
      left: [{
        left: [g]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", dn, _]
      }],
      basis: [{
        basis: M()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", _]
      }],
      grow: [{
        grow: O()
      }],
      shrink: [{
        shrink: O()
      }],
      order: [{
        order: ["first", "last", "none", dn, _]
      }],
      "grid-cols": [{
        "grid-cols": [Bn]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", dn, _]
        }, _]
      }],
      "col-start": [{
        "col-start": AA()
      }],
      "col-end": [{
        "col-end": AA()
      }],
      "grid-rows": [{
        "grid-rows": [Bn]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [dn, _]
        }, _]
      }],
      "row-start": [{
        "row-start": AA()
      }],
      "row-end": [{
        "row-end": AA()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", _]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", _]
      }],
      gap: [{
        gap: [f]
      }],
      "gap-x": [{
        "gap-x": [f]
      }],
      "gap-y": [{
        "gap-y": [f]
      }],
      "justify-content": [{
        justify: ["normal", ...x()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...x(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...x(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [d]
      }],
      px: [{
        px: [d]
      }],
      py: [{
        py: [d]
      }],
      ps: [{
        ps: [d]
      }],
      pe: [{
        pe: [d]
      }],
      pt: [{
        pt: [d]
      }],
      pr: [{
        pr: [d]
      }],
      pb: [{
        pb: [d]
      }],
      pl: [{
        pl: [d]
      }],
      m: [{
        m: [U]
      }],
      mx: [{
        mx: [U]
      }],
      my: [{
        my: [U]
      }],
      ms: [{
        ms: [U]
      }],
      me: [{
        me: [U]
      }],
      mt: [{
        mt: [U]
      }],
      mr: [{
        mr: [U]
      }],
      mb: [{
        mb: [U]
      }],
      ml: [{
        ml: [U]
      }],
      "space-x": [{
        "space-x": [F]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [F]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _, e]
      }],
      "min-w": [{
        "min-w": [_, e, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [_, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [st]
        }, st]
      }],
      h: [{
        h: [_, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [_, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [_, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [_, e, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", st, it]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Go]
      }],
      "font-family": [{
        font: [Bn]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _]
      }],
      "line-clamp": [{
        "line-clamp": ["none", jt, Go]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, _]
      }],
      "list-image": [{
        "list-image": ["none", _]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", _]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [A]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [B]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [A]
      }],
      "text-opacity": [{
        "text-opacity": [B]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...iA(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ve, it]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", Ve, _]
      }],
      "text-decoration-color": [{
        decoration: [A]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: D()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", _]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [B]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...$A(), sQ]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", iQ]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, lQ]
      }],
      "bg-color": [{
        bg: [A]
      }],
      "gradient-from-pos": [{
        from: [h]
      }],
      "gradient-via-pos": [{
        via: [h]
      }],
      "gradient-to-pos": [{
        to: [h]
      }],
      "gradient-from": [{
        from: [w]
      }],
      "gradient-via": [{
        via: [w]
      }],
      "gradient-to": [{
        to: [w]
      }],
      rounded: [{
        rounded: [o]
      }],
      "rounded-s": [{
        "rounded-s": [o]
      }],
      "rounded-e": [{
        "rounded-e": [o]
      }],
      "rounded-t": [{
        "rounded-t": [o]
      }],
      "rounded-r": [{
        "rounded-r": [o]
      }],
      "rounded-b": [{
        "rounded-b": [o]
      }],
      "rounded-l": [{
        "rounded-l": [o]
      }],
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      "rounded-se": [{
        "rounded-se": [o]
      }],
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      "rounded-es": [{
        "rounded-es": [o]
      }],
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      "rounded-br": [{
        "rounded-br": [o]
      }],
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      "border-w": [{
        border: [s]
      }],
      "border-w-x": [{
        "border-x": [s]
      }],
      "border-w-y": [{
        "border-y": [s]
      }],
      "border-w-s": [{
        "border-s": [s]
      }],
      "border-w-e": [{
        "border-e": [s]
      }],
      "border-w-t": [{
        "border-t": [s]
      }],
      "border-w-r": [{
        "border-r": [s]
      }],
      "border-w-b": [{
        "border-b": [s]
      }],
      "border-w-l": [{
        "border-l": [s]
      }],
      "border-opacity": [{
        "border-opacity": [B]
      }],
      "border-style": [{
        border: [...iA(), "hidden"]
      }],
      "divide-x": [{
        "divide-x": [s]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [s]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [B]
      }],
      "divide-style": [{
        divide: iA()
      }],
      "border-color": [{
        border: [n]
      }],
      "border-color-x": [{
        "border-x": [n]
      }],
      "border-color-y": [{
        "border-y": [n]
      }],
      "border-color-t": [{
        "border-t": [n]
      }],
      "border-color-r": [{
        "border-r": [n]
      }],
      "border-color-b": [{
        "border-b": [n]
      }],
      "border-color-l": [{
        "border-l": [n]
      }],
      "divide-color": [{
        divide: [n]
      }],
      "outline-style": [{
        outline: ["", ...iA()]
      }],
      "outline-offset": [{
        "outline-offset": [Ve, _]
      }],
      "outline-w": [{
        outline: [Ve, it]
      }],
      "outline-color": [{
        outline: [A]
      }],
      "ring-w": [{
        ring: N()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [A]
      }],
      "ring-opacity": [{
        "ring-opacity": [B]
      }],
      "ring-offset-w": [{
        "ring-offset": [Ve, it]
      }],
      "ring-offset-color": [{
        "ring-offset": [A]
      }],
      shadow: [{
        shadow: ["", "inner", "none", st, uQ]
      }],
      "shadow-color": [{
        shadow: [Bn]
      }],
      opacity: [{
        opacity: [B]
      }],
      "mix-blend": [{
        "mix-blend": [...cA(), "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": cA()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [t]
      }],
      brightness: [{
        brightness: [r]
      }],
      contrast: [{
        contrast: [a]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", st, _]
      }],
      grayscale: [{
        grayscale: [l]
      }],
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      invert: [{
        invert: [c]
      }],
      saturate: [{
        saturate: [p]
      }],
      sepia: [{
        sepia: [v]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [a]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [B]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [p]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [v]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [i]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _]
      }],
      duration: [{
        duration: z()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", _]
      }],
      delay: [{
        delay: z()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", _]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [m]
      }],
      "scale-x": [{
        "scale-x": [m]
      }],
      "scale-y": [{
        "scale-y": [m]
      }],
      rotate: [{
        rotate: [dn, _]
      }],
      "translate-x": [{
        "translate-x": [Q]
      }],
      "translate-y": [{
        "translate-y": [Q]
      }],
      "skew-x": [{
        "skew-x": [C]
      }],
      "skew-y": [{
        "skew-y": [C]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _]
      }],
      accent: [{
        accent: ["auto", A]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _]
      }],
      "caret-color": [{
        caret: [A]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": D()
      }],
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      "scroll-my": [{
        "scroll-my": D()
      }],
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      "scroll-me": [{
        "scroll-me": D()
      }],
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      "scroll-p": [{
        "scroll-p": D()
      }],
      "scroll-px": [{
        "scroll-px": D()
      }],
      "scroll-py": [{
        "scroll-py": D()
      }],
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", _]
      }],
      fill: [{
        fill: [A, "none"]
      }],
      "stroke-w": [{
        stroke: [Ve, it, Go]
      }],
      stroke: [{
        stroke: [A, "none"]
      }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const hQ = YC(BQ);
function _e(...A) {
  return hQ(KC(A));
}
function gQ(A) {
  return S.jsx("textarea", {
    className: "w-full m bg-gray-100 border-gray-300 focus:border-blue-500 outline-none  p-2 text-sm resize-none  placeholder-gray-500 shadow-sm rounded-b-lg",
    ...A
  });
}
function pQ(A) {
  return S.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-send-2",
    ...A,
    children: [S.jsx("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), S.jsx("path", {
      d: "M4.698 4.034L21 12 4.698 19.966a.503.503 0 01-.546-.124.555.555 0 01-.12-.568L6.5 12 4.032 4.726a.555.555 0 01.12-.568.503.503 0 01.546-.124zM6.5 12H21"
    })]
  });
} /*!
  * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
  * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
  * Released under MIT License
  */ /*! *****************************************************************************
     Copyright (c) Microsoft Corporation.
     Permission to use, copy, modify, and/or distribute this software for any
     purpose with or without fee is hereby granted.
     THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
     REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
     AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
     INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
     LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
     OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
     PERFORMANCE OF THIS SOFTWARE.
     ***************************************************************************** */
var ru = function (A, e) {
  return ru = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, r) {
    t.__proto__ = r;
  } || function (t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, ru(A, e);
};
function xe(A, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ru(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var nu = function () {
  return nu = Object.assign || function (e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, nu.apply(this, arguments);
};
function KA(A, e, t, r) {
  function n(o) {
    return o instanceof t ? o : new t(function (i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function (o, i) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (c) {
        i(c);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        i(c);
      }
    }
    function l(u) {
      u.done ? o(u.value) : n(u.value).then(s, a);
    }
    l((r = r.apply(A, [])).next());
  });
}
function bA(A, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    },
    r,
    n,
    o,
    i;
  return i = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }, typeof Symbol == "function" && (i[Symbol.iterator] = function () {
    return this;
  }), i;
  function s(l) {
    return function (u) {
      return a([l, u]);
    };
  }
  function a(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t;) try {
      if (r = 1, n && (o = l[0] & 2 ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
      switch (n = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return t.label++, {
            value: l[1],
            done: !1
          };
        case 5:
          t.label++, n = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = l;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(l);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(A, t);
    } catch (u) {
      l = [6, u], n = 0;
    } finally {
      r = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0
    };
  }
}
function Wo(A, e, t) {
  if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return A.concat(o || e);
}
var rt = function () {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function (e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function (e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function (e, t) {
      var r = Array.from(t).find(function (n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }(),
  Ws = function (A, e) {
    return rt.fromClientRect(A, e.getBoundingClientRect());
  },
  wQ = function (A) {
    var e = A.body,
      t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
      n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new rt(0, 0, r, n);
  },
  Xs = function (A) {
    for (var e = [], t = 0, r = A.length; t < r;) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  dA = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t;) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  },
  yd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  mQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xo = 0; Xo < yd.length; Xo++) mQ[yd.charCodeAt(Xo)] = Xo;
var vd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Hn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zo = 0; zo < vd.length; zo++) Hn[vd.charCodeAt(zo)] = zo;
var CQ = function (A) {
    var e = A.length * .75,
      t = A.length,
      r,
      n = 0,
      o,
      i,
      s,
      a;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Hn[A.charCodeAt(r)], i = Hn[A.charCodeAt(r + 1)], s = Hn[A.charCodeAt(r + 2)], a = Hn[A.charCodeAt(r + 3)], u[n++] = o << 2 | i >> 4, u[n++] = (i & 15) << 4 | s >> 2, u[n++] = (s & 3) << 6 | a & 63;
    return l;
  },
  QQ = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  },
  yQ = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  },
  $t = 5,
  Wc = 11,
  Oa = 2,
  vQ = Wc - $t,
  gp = 65536 >> $t,
  UQ = 1 << $t,
  Da = UQ - 1,
  FQ = 1024 >> $t,
  EQ = gp + FQ,
  HQ = EQ,
  IQ = 32,
  xQ = HQ + IQ,
  SQ = 65536 >> Wc,
  LQ = 1 << vQ,
  bQ = LQ - 1,
  Ud = function (A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  TQ = function (A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  OQ = function (A, e) {
    var t = CQ(A),
      r = Array.isArray(t) ? yQ(t) : new Uint32Array(t),
      n = Array.isArray(t) ? QQ(t) : new Uint16Array(t),
      o = 24,
      i = Ud(n, o / 2, r[4] / 2),
      s = r[5] === 2 ? Ud(n, (o + r[4]) / 2) : TQ(r, Math.ceil((o + r[4]) / 4));
    return new DQ(r[0], r[1], r[2], r[3], i, s);
  },
  DQ = function () {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function (e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> $t], t = (t << Oa) + (e & Da), this.data[t];
        if (e <= 65535) return t = this.index[gp + (e - 55296 >> $t)], t = (t << Oa) + (e & Da), this.data[t];
        if (e < this.highStart) return t = xQ - SQ + (e >> Wc), t = this.index[t], t += e >> $t & bQ, t = this.index[t], t = (t << Oa) + (e & Da), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }(),
  Fd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  kQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var jo = 0; jo < Fd.length; jo++) kQ[Fd.charCodeAt(jo)] = jo;
var KQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  Ed = 50,
  RQ = 1,
  pp = 2,
  wp = 3,
  _Q = 4,
  MQ = 5,
  Hd = 7,
  mp = 8,
  Id = 9,
  Qt = 10,
  ou = 11,
  xd = 12,
  iu = 13,
  NQ = 14,
  In = 15,
  su = 16,
  Jo = 17,
  hn = 18,
  PQ = 19,
  Sd = 20,
  au = 21,
  gn = 22,
  ka = 23,
  cr = 24,
  Ae = 25,
  xn = 26,
  Sn = 27,
  fr = 28,
  VQ = 29,
  Gt = 30,
  GQ = 31,
  Yo = 32,
  Zo = 33,
  lu = 34,
  uu = 35,
  cu = 36,
  fo = 37,
  fu = 38,
  Li = 39,
  bi = 40,
  Ka = 41,
  Cp = 42,
  WQ = 43,
  XQ = [9001, 65288],
  Qp = "!",
  V = "×",
  $o = "÷",
  du = OQ(KQ),
  Ge = [Gt, cu],
  Bu = [RQ, pp, wp, MQ],
  yp = [Qt, mp],
  Ld = [Sn, xn],
  zQ = Bu.concat(yp),
  bd = [fu, Li, bi, lu, uu],
  jQ = [In, iu],
  JQ = function (A, e) {
    e === void 0 && (e = "strict");
    var t = [],
      r = [],
      n = [];
    return A.forEach(function (o, i) {
      var s = du.get(o);
      if (s > Ed ? (n.push(!0), s -= Ed) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(o) !== -1) return r.push(i), t.push(su);
      if (s === _Q || s === ou) {
        if (i === 0) return r.push(i), t.push(Gt);
        var a = t[i - 1];
        return zQ.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(Gt));
      }
      if (r.push(i), s === GQ) return t.push(e === "strict" ? au : fo);
      if (s === Cp || s === VQ) return t.push(Gt);
      if (s === WQ) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(fo) : t.push(Gt);
      t.push(s);
    }), [r, t, n];
  },
  Ra = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length;) {
      o++;
      var i = r[o];
      if (i === e) return !0;
      if (i !== Qt) break;
    }
    if (n === Qt) for (var o = t; o > 0;) {
      o--;
      var s = r[o];
      if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s) for (var a = t; a <= r.length;) {
        a++;
        var i = r[a];
        if (i === e) return !0;
        if (i !== Qt) break;
      }
      if (s !== Qt) break;
    }
    return !1;
  },
  Td = function (A, e) {
    for (var t = A; t >= 0;) {
      var r = e[t];
      if (r === Qt) t--;else return r;
    }
    return 0;
  },
  YQ = function (A, e, t, r, n) {
    if (t[r] === 0) return V;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === !0) return V;
    var i = o - 1,
      s = o + 1,
      a = e[o],
      l = i >= 0 ? e[i] : 0,
      u = e[s];
    if (a === pp && u === wp) return V;
    if (Bu.indexOf(a) !== -1) return Qp;
    if (Bu.indexOf(u) !== -1 || yp.indexOf(u) !== -1) return V;
    if (Td(o, e) === mp) return $o;
    if (du.get(A[o]) === ou || (a === Yo || a === Zo) && du.get(A[s]) === ou || a === Hd || u === Hd || a === Id || [Qt, iu, In].indexOf(a) === -1 && u === Id || [Jo, hn, PQ, cr, fr].indexOf(u) !== -1 || Td(o, e) === gn || Ra(ka, gn, o, e) || Ra([Jo, hn], au, o, e) || Ra(xd, xd, o, e)) return V;
    if (a === Qt) return $o;
    if (a === ka || u === ka) return V;
    if (u === su || a === su) return $o;
    if ([iu, In, au].indexOf(u) !== -1 || a === NQ || l === cu && jQ.indexOf(a) !== -1 || a === fr && u === cu || u === Sd || Ge.indexOf(u) !== -1 && a === Ae || Ge.indexOf(a) !== -1 && u === Ae || a === Sn && [fo, Yo, Zo].indexOf(u) !== -1 || [fo, Yo, Zo].indexOf(a) !== -1 && u === xn || Ge.indexOf(a) !== -1 && Ld.indexOf(u) !== -1 || Ld.indexOf(a) !== -1 && Ge.indexOf(u) !== -1 || [Sn, xn].indexOf(a) !== -1 && (u === Ae || [gn, In].indexOf(u) !== -1 && e[s + 1] === Ae) || [gn, In].indexOf(a) !== -1 && u === Ae || a === Ae && [Ae, fr, cr].indexOf(u) !== -1) return V;
    if ([Ae, fr, cr, Jo, hn].indexOf(u) !== -1) for (var c = o; c >= 0;) {
      var f = e[c];
      if (f === Ae) return V;
      if ([fr, cr].indexOf(f) !== -1) c--;else break;
    }
    if ([Sn, xn].indexOf(u) !== -1) for (var c = [Jo, hn].indexOf(a) !== -1 ? i : o; c >= 0;) {
      var f = e[c];
      if (f === Ae) return V;
      if ([fr, cr].indexOf(f) !== -1) c--;else break;
    }
    if (fu === a && [fu, Li, lu, uu].indexOf(u) !== -1 || [Li, lu].indexOf(a) !== -1 && [Li, bi].indexOf(u) !== -1 || [bi, uu].indexOf(a) !== -1 && u === bi || bd.indexOf(a) !== -1 && [Sd, xn].indexOf(u) !== -1 || bd.indexOf(u) !== -1 && a === Sn || Ge.indexOf(a) !== -1 && Ge.indexOf(u) !== -1 || a === cr && Ge.indexOf(u) !== -1 || Ge.concat(Ae).indexOf(a) !== -1 && u === gn && XQ.indexOf(A[s]) === -1 || Ge.concat(Ae).indexOf(u) !== -1 && a === hn) return V;
    if (a === Ka && u === Ka) {
      for (var w = t[o], h = 1; w > 0 && (w--, e[w] === Ka);) h++;
      if (h % 2 !== 0) return V;
    }
    return a === Yo && u === Zo ? V : $o;
  },
  ZQ = function (A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = JQ(A, e.lineBreak),
      r = t[0],
      n = t[1],
      o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function (s) {
      return [Ae, Gt, Cp].indexOf(s) !== -1 ? fo : s;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function (s, a) {
      return s && A[a] >= 19968 && A[a] <= 40959;
    }) : void 0;
    return [r, n, i];
  },
  $Q = function () {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Qp, this.start = r, this.end = n;
    }
    return A.prototype.slice = function () {
      return dA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }(),
  qQ = function (A, e) {
    var t = Xs(A),
      r = ZQ(t, e),
      n = r[0],
      o = r[1],
      i = r[2],
      s = t.length,
      a = 0,
      l = 0;
    return {
      next: function () {
        if (l >= s) return {
          done: !0,
          value: null
        };
        for (var u = V; l < s && (u = YQ(t, o, n, ++l, i)) === V;);
        if (u !== V || l === s) {
          var c = new $Q(t, u, a, l);
          return a = l, {
            value: c,
            done: !1
          };
        }
        return {
          done: !0,
          value: null
        };
      }
    };
  },
  Ay = 1,
  ey = 2,
  vo = 4,
  Od = 8,
  fs = 10,
  Dd = 47,
  Gn = 92,
  ty = 9,
  ry = 32,
  qo = 34,
  pn = 61,
  ny = 35,
  oy = 36,
  iy = 37,
  Ai = 39,
  ei = 40,
  wn = 41,
  sy = 95,
  WA = 45,
  ay = 33,
  ly = 60,
  uy = 62,
  cy = 64,
  fy = 91,
  dy = 93,
  By = 61,
  hy = 123,
  ti = 63,
  gy = 125,
  kd = 124,
  py = 126,
  wy = 128,
  Kd = 65533,
  _a = 42,
  Jt = 43,
  my = 44,
  Cy = 58,
  Qy = 59,
  Bo = 46,
  yy = 0,
  vy = 8,
  Uy = 11,
  Fy = 14,
  Ey = 31,
  Hy = 127,
  Oe = -1,
  vp = 48,
  Up = 97,
  Fp = 101,
  Iy = 102,
  xy = 117,
  Sy = 122,
  Ep = 65,
  Hp = 69,
  Ip = 70,
  Ly = 85,
  by = 90,
  TA = function (A) {
    return A >= vp && A <= 57;
  },
  Ty = function (A) {
    return A >= 55296 && A <= 57343;
  },
  dr = function (A) {
    return TA(A) || A >= Ep && A <= Ip || A >= Up && A <= Iy;
  },
  Oy = function (A) {
    return A >= Up && A <= Sy;
  },
  Dy = function (A) {
    return A >= Ep && A <= by;
  },
  ky = function (A) {
    return Oy(A) || Dy(A);
  },
  Ky = function (A) {
    return A >= wy;
  },
  ri = function (A) {
    return A === fs || A === ty || A === ry;
  },
  ds = function (A) {
    return ky(A) || Ky(A) || A === sy;
  },
  Rd = function (A) {
    return ds(A) || TA(A) || A === WA;
  },
  Ry = function (A) {
    return A >= yy && A <= vy || A === Uy || A >= Fy && A <= Ey || A === Hy;
  },
  gt = function (A, e) {
    return A !== Gn ? !1 : e !== fs;
  },
  ni = function (A, e, t) {
    return A === WA ? ds(e) || gt(e, t) : ds(A) ? !0 : !!(A === Gn && gt(A, e));
  },
  Ma = function (A, e, t) {
    return A === Jt || A === WA ? TA(e) ? !0 : e === Bo && TA(t) : TA(A === Bo ? e : A);
  },
  _y = function (A) {
    var e = 0,
      t = 1;
    (A[e] === Jt || A[e] === WA) && (A[e] === WA && (t = -1), e++);
    for (var r = []; TA(A[e]);) r.push(A[e++]);
    var n = r.length ? parseInt(dA.apply(void 0, r), 10) : 0;
    A[e] === Bo && e++;
    for (var o = []; TA(A[e]);) o.push(A[e++]);
    var i = o.length,
      s = i ? parseInt(dA.apply(void 0, o), 10) : 0;
    (A[e] === Hp || A[e] === Fp) && e++;
    var a = 1;
    (A[e] === Jt || A[e] === WA) && (A[e] === WA && (a = -1), e++);
    for (var l = []; TA(A[e]);) l.push(A[e++]);
    var u = l.length ? parseInt(dA.apply(void 0, l), 10) : 0;
    return t * (n + s * Math.pow(10, -i)) * Math.pow(10, a * u);
  },
  My = {
    type: 2
  },
  Ny = {
    type: 3
  },
  Py = {
    type: 4
  },
  Vy = {
    type: 13
  },
  Gy = {
    type: 8
  },
  Wy = {
    type: 21
  },
  Xy = {
    type: 9
  },
  zy = {
    type: 10
  },
  jy = {
    type: 11
  },
  Jy = {
    type: 12
  },
  Yy = {
    type: 14
  },
  oi = {
    type: 23
  },
  Zy = {
    type: 1
  },
  $y = {
    type: 25
  },
  qy = {
    type: 24
  },
  Av = {
    type: 26
  },
  ev = {
    type: 27
  },
  tv = {
    type: 28
  },
  rv = {
    type: 29
  },
  nv = {
    type: 31
  },
  hu = {
    type: 32
  },
  xp = function () {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function (e) {
      this._value = this._value.concat(Xs(e));
    }, A.prototype.read = function () {
      for (var e = [], t = this.consumeToken(); t !== hu;) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function () {
      var e = this.consumeCodePoint();
      switch (e) {
        case qo:
          return this.consumeStringToken(qo);
        case ny:
          var t = this.peekCodePoint(0),
            r = this.peekCodePoint(1),
            n = this.peekCodePoint(2);
          if (Rd(t) || gt(r, n)) {
            var o = ni(t, r, n) ? ey : Ay,
              i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case oy:
          if (this.peekCodePoint(0) === pn) return this.consumeCodePoint(), Vy;
          break;
        case Ai:
          return this.consumeStringToken(Ai);
        case ei:
          return My;
        case wn:
          return Ny;
        case _a:
          if (this.peekCodePoint(0) === pn) return this.consumeCodePoint(), Yy;
          break;
        case Jt:
          if (Ma(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case my:
          return Py;
        case WA:
          var s = e,
            a = this.peekCodePoint(0),
            l = this.peekCodePoint(1);
          if (Ma(s, a, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (ni(s, a, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === WA && l === uy) return this.consumeCodePoint(), this.consumeCodePoint(), qy;
          break;
        case Bo:
          if (Ma(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Dd:
          if (this.peekCodePoint(0) === _a) for (this.consumeCodePoint();;) {
            var u = this.consumeCodePoint();
            if (u === _a && (u = this.consumeCodePoint(), u === Dd)) return this.consumeToken();
            if (u === Oe) return this.consumeToken();
          }
          break;
        case Cy:
          return Av;
        case Qy:
          return ev;
        case ly:
          if (this.peekCodePoint(0) === ay && this.peekCodePoint(1) === WA && this.peekCodePoint(2) === WA) return this.consumeCodePoint(), this.consumeCodePoint(), $y;
          break;
        case cy:
          var c = this.peekCodePoint(0),
            f = this.peekCodePoint(1),
            w = this.peekCodePoint(2);
          if (ni(c, f, w)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case fy:
          return tv;
        case Gn:
          if (gt(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case dy:
          return rv;
        case By:
          if (this.peekCodePoint(0) === pn) return this.consumeCodePoint(), Gy;
          break;
        case hy:
          return jy;
        case gy:
          return Jy;
        case xy:
        case Ly:
          var h = this.peekCodePoint(0),
            g = this.peekCodePoint(1);
          return h === Jt && (dr(g) || g === ti) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case kd:
          if (this.peekCodePoint(0) === pn) return this.consumeCodePoint(), Xy;
          if (this.peekCodePoint(0) === kd) return this.consumeCodePoint(), Wy;
          break;
        case py:
          if (this.peekCodePoint(0) === pn) return this.consumeCodePoint(), zy;
          break;
        case Oe:
          return hu;
      }
      return ri(e) ? (this.consumeWhiteSpace(), nv) : TA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ds(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: dA(e)
      };
    }, A.prototype.consumeCodePoint = function () {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function (e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function (e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function () {
      for (var e = [], t = this.consumeCodePoint(); dr(t) && e.length < 6;) e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === ti && e.length < 6;) e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(dA.apply(void 0, e.map(function (a) {
            return a === ti ? vp : a;
          })), 16),
          o = parseInt(dA.apply(void 0, e.map(function (a) {
            return a === ti ? Ip : a;
          })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(dA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === WA && dr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var s = []; dr(t) && s.length < 6;) s.push(t), t = this.consumeCodePoint();
        var o = parseInt(dA.apply(void 0, s), 16);
        return {
          type: 30,
          start: i,
          end: o
        };
      } else return {
        type: 30,
        start: i,
        end: i
      };
    }, A.prototype.consumeIdentLikeToken = function () {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === ei ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === ei ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function () {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Oe) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === Ai || t === qo) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Oe || this.peekCodePoint(0) === wn) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), oi);
      }
      for (;;) {
        var n = this.consumeCodePoint();
        if (n === Oe || n === wn) return {
          type: 22,
          value: dA.apply(void 0, e)
        };
        if (ri(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Oe || this.peekCodePoint(0) === wn ? (this.consumeCodePoint(), {
          type: 22,
          value: dA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), oi);
        if (n === qo || n === Ai || n === ei || Ry(n)) return this.consumeBadUrlRemnants(), oi;
        if (n === Gn) {
          if (gt(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(), oi;
        } else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function () {
      for (; ri(this.peekCodePoint(0));) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function () {
      for (;;) {
        var e = this.consumeCodePoint();
        if (e === wn || e === Oe) return;
        gt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function (e) {
      for (var t = 5e4, r = ""; e > 0;) {
        var n = Math.min(t, e);
        r += dA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function (e) {
      var t = "",
        r = 0;
      do {
        var n = this._value[r];
        if (n === Oe || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === fs) return this._value.splice(0, r), Zy;
        if (n === Gn) {
          var o = this._value[r + 1];
          o !== Oe && o !== void 0 && (o === fs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : gt(n, o) && (t += this.consumeStringSlice(r), t += dA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function () {
      var e = [],
        t = vo,
        r = this.peekCodePoint(0);
      for ((r === Jt || r === WA) && e.push(this.consumeCodePoint()); TA(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Bo && TA(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Od; TA(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Hp || r === Fp) && ((n === Jt || n === WA) && TA(o) || TA(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Od; TA(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
      return [_y(e), t];
    }, A.prototype.consumeNumericToken = function () {
      var e = this.consumeNumber(),
        t = e[0],
        r = e[1],
        n = this.peekCodePoint(0),
        o = this.peekCodePoint(1),
        i = this.peekCodePoint(2);
      if (ni(n, o, i)) {
        var s = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: s
        };
      }
      return n === iy ? (this.consumeCodePoint(), {
        type: 16,
        number: t,
        flags: r
      }) : {
        type: 17,
        number: t,
        flags: r
      };
    }, A.prototype.consumeEscapedCodePoint = function () {
      var e = this.consumeCodePoint();
      if (dr(e)) {
        for (var t = dA(e); dr(this.peekCodePoint(0)) && t.length < 6;) t += dA(this.consumeCodePoint());
        ri(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Ty(r) || r > 1114111 ? Kd : r;
      }
      return e === Oe ? Kd : e;
    }, A.prototype.consumeName = function () {
      for (var e = "";;) {
        var t = this.consumeCodePoint();
        if (Rd(t)) e += dA(t);else if (gt(t, this.peekCodePoint(0))) e += dA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }(),
  Sp = function () {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function (e) {
      var t = new xp();
      return t.write(e), new A(t.read());
    }, A.parseValue = function (e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function (e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function () {
      for (var e = this.consumeToken(); e.type === 31;) e = this.consumeToken();
      if (e.type === 32) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do e = this.consumeToken(); while (e.type === 31);
      if (e.type === 32) return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function () {
      for (var e = [];;) {
        var t = this.consumeComponentValue();
        if (t.type === 32) return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function () {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function (e) {
      for (var t = {
          type: e,
          values: []
        }, r = this.consumeToken();;) {
        if (r.type === 32 || iv(r, e)) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function (e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
      };;) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function () {
      var e = this._tokens.shift();
      return typeof e > "u" ? hu : e;
    }, A.prototype.reconsumeToken = function (e) {
      this._tokens.unshift(e);
    }, A;
  }(),
  Uo = function (A) {
    return A.type === 15;
  },
  An = function (A) {
    return A.type === 17;
  },
  Z = function (A) {
    return A.type === 20;
  },
  ov = function (A) {
    return A.type === 0;
  },
  gu = function (A, e) {
    return Z(A) && A.value === e;
  },
  Lp = function (A) {
    return A.type !== 31;
  },
  Jr = function (A) {
    return A.type !== 31 && A.type !== 4;
  },
  Ne = function (A) {
    var e = [],
      t = [];
    return A.forEach(function (r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  },
  iv = function (A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
  },
  kt = function (A) {
    return A.type === 17 || A.type === 15;
  },
  hA = function (A) {
    return A.type === 16 || kt(A);
  },
  bp = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]];
  },
  HA = {
    type: 17,
    number: 0,
    flags: vo
  },
  Xc = {
    type: 16,
    number: 50,
    flags: vo
  },
  yt = {
    type: 16,
    number: 100,
    flags: vo
  },
  Ln = function (A, e, t) {
    var r = A[0],
      n = A[1];
    return [$(r, e), $(typeof n < "u" ? n : r, t)];
  },
  $ = function (A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (Uo(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
    return A.number;
  },
  Tp = "deg",
  Op = "grad",
  Dp = "rad",
  kp = "turn",
  zs = {
    name: "angle",
    parse: function (A, e) {
      if (e.type === 15) switch (e.unit) {
        case Tp:
          return Math.PI * e.number / 180;
        case Op:
          return Math.PI / 200 * e.number;
        case Dp:
          return e.number;
        case kp:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  },
  Kp = function (A) {
    return A.type === 15 && (A.unit === Tp || A.unit === Op || A.unit === Dp || A.unit === kp);
  },
  Rp = function (A) {
    var e = A.filter(Z).map(function (t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [HA, HA];
      case "to top":
      case "bottom":
        return de(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [HA, yt];
      case "to right":
      case "left":
        return de(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [yt, yt];
      case "to bottom":
      case "top":
        return de(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [yt, HA];
      case "to left":
      case "right":
        return de(270);
    }
    return 0;
  },
  de = function (A) {
    return Math.PI * A / 180;
  },
  bt = {
    name: "color",
    parse: function (A, e) {
      if (e.type === 18) {
        var t = sv[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            o = e.value.substring(2, 3);
          return vt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            o = e.value.substring(2, 3),
            i = e.value.substring(3, 4);
          return vt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            o = e.value.substring(4, 6);
          return vt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            o = e.value.substring(4, 6),
            i = e.value.substring(6, 8);
          return vt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var s = $e[e.value.toUpperCase()];
        if (typeof s < "u") return s;
      }
      return $e.TRANSPARENT;
    }
  },
  Tt = function (A) {
    return (255 & A) === 0;
  },
  yA = function (A) {
    var e = 255 & A,
      t = 255 & A >> 8,
      r = 255 & A >> 16,
      n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  },
  vt = function (A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  },
  _d = function (A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  },
  Md = function (A, e) {
    var t = e.filter(Jr);
    if (t.length === 3) {
      var r = t.map(_d),
        n = r[0],
        o = r[1],
        i = r[2];
      return vt(n, o, i, 1);
    }
    if (t.length === 4) {
      var s = t.map(_d),
        n = s[0],
        o = s[1],
        i = s[2],
        a = s[3];
      return vt(n, o, i, a);
    }
    return 0;
  };
function Na(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var Nd = function (A, e) {
    var t = e.filter(Jr),
      r = t[0],
      n = t[1],
      o = t[2],
      i = t[3],
      s = (r.type === 17 ? de(r.number) : zs.parse(A, r)) / (Math.PI * 2),
      a = hA(n) ? n.number / 100 : 0,
      l = hA(o) ? o.number / 100 : 0,
      u = typeof i < "u" && hA(i) ? $(i, 1) : 1;
    if (a === 0) return vt(l * 255, l * 255, l * 255, 1);
    var c = l <= .5 ? l * (a + 1) : l + a - l * a,
      f = l * 2 - c,
      w = Na(f, c, s + 1 / 3),
      h = Na(f, c, s),
      g = Na(f, c, s - 1 / 3);
    return vt(w * 255, h * 255, g * 255, u);
  },
  sv = {
    hsl: Nd,
    hsla: Nd,
    rgb: Md,
    rgba: Md
  },
  Wn = function (A, e) {
    return bt.parse(A, Sp.create(e).parseComponentValue());
  },
  $e = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
  },
  av = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (Z(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  },
  lv = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  },
  js = function (A, e) {
    var t = bt.parse(A, e[0]),
      r = e[1];
    return r && hA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  },
  Pd = function (A, e) {
    var t = A[0],
      r = A[A.length - 1];
    t.stop === null && (t.stop = HA), r.stop === null && (r.stop = yt);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var s = A[i].stop;
      if (s !== null) {
        var a = $(s, e);
        a > o ? n.push(a) : n.push(o), o = a;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var u = n[i];
      if (u === null) l === null && (l = i);else if (l !== null) {
        for (var c = i - l, f = n[l - 1], w = (u - f) / (c + 1), h = 1; h <= c; h++) n[l + h - 1] = w * h;
        l = null;
      }
    }
    return A.map(function (g, U) {
      var B = g.color;
      return {
        color: B,
        stop: Math.max(Math.min(1, n[U] / e), 0)
      };
    });
  },
  uv = function (A, e, t) {
    var r = e / 2,
      n = t / 2,
      o = $(A[0], e) - r,
      i = n - $(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  },
  cv = function (A, e, t) {
    var r = typeof A == "number" ? A : uv(A, e, t),
      n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
      o = e / 2,
      i = t / 2,
      s = n / 2,
      a = Math.sin(r - Math.PI / 2) * s,
      l = Math.cos(r - Math.PI / 2) * s;
    return [n, o - l, o + l, i - a, i + a];
  },
  Ce = function (A, e) {
    return Math.sqrt(A * A + e * e);
  },
  Vd = function (A, e, t, r, n) {
    var o = [[0, 0], [0, e], [A, 0], [A, e]];
    return o.reduce(function (i, s) {
      var a = s[0],
        l = s[1],
        u = Ce(t - a, r - l);
      return (n ? u < i.optimumDistance : u > i.optimumDistance) ? {
        optimumCorner: s,
        optimumDistance: u
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  },
  fv = function (A, e, t, r, n) {
    var o = 0,
      i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(Ce(e, t), Ce(e, t - n), Ce(e - r, t), Ce(e - r, t - n));else if (A.shape === 1) {
          var s = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)),
            a = Vd(r, n, e, t, !0),
            l = a[0],
            u = a[1];
          o = Ce(l - e, (u - t) / s), i = s * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(Ce(e, t), Ce(e, t - n), Ce(e - r, t), Ce(e - r, t - n));else if (A.shape === 1) {
          var s = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)),
            c = Vd(r, n, e, t, !1),
            l = c[0],
            u = c[1];
          o = Ce(l - e, (u - t) / s), i = s * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = $(A.size[0], r), i = A.size.length === 2 ? $(A.size[1], n) : o), [o, i];
  },
  dv = function (A, e) {
    var t = de(180),
      r = [];
    return Ne(e).forEach(function (n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Rp(n);
          return;
        } else if (Kp(i)) {
          t = zs.parse(A, i);
          return;
        }
      }
      var s = js(A, n);
      r.push(s);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  },
  ii = function (A, e) {
    var t = de(180),
      r = [];
    return Ne(e).forEach(function (n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
          t = Rp(n);
          return;
        } else if (Kp(i)) {
          t = (zs.parse(A, i) + de(270)) % de(360);
          return;
        }
      }
      var s = js(A, n);
      r.push(s);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  },
  Bv = function (A, e) {
    var t = de(180),
      r = [],
      n = 1,
      o = 0,
      i = 3,
      s = [];
    return Ne(e).forEach(function (a, l) {
      var u = a[0];
      if (l === 0) {
        if (Z(u) && u.value === "linear") {
          n = 1;
          return;
        } else if (Z(u) && u.value === "radial") {
          n = 2;
          return;
        }
      }
      if (u.type === 18) {
        if (u.name === "from") {
          var c = bt.parse(A, u.values[0]);
          r.push({
            stop: HA,
            color: c
          });
        } else if (u.name === "to") {
          var c = bt.parse(A, u.values[0]);
          r.push({
            stop: yt,
            color: c
          });
        } else if (u.name === "color-stop") {
          var f = u.values.filter(Jr);
          if (f.length === 2) {
            var c = bt.parse(A, f[1]),
              w = f[0];
            An(w) && r.push({
              stop: {
                type: 16,
                number: w.number * 100,
                flags: w.flags
              },
              color: c
            });
          }
        }
      }
    }), n === 1 ? {
      angle: (t + de(180)) % de(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: s,
      type: n
    };
  },
  _p = "closest-side",
  Mp = "farthest-side",
  Np = "closest-corner",
  Pp = "farthest-corner",
  Vp = "circle",
  Gp = "ellipse",
  Wp = "cover",
  Xp = "contain",
  hv = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      o = [];
    return Ne(e).forEach(function (i, s) {
      var a = !0;
      if (s === 0) {
        var l = !1;
        a = i.reduce(function (c, f) {
          if (l) {
            if (Z(f)) switch (f.value) {
              case "center":
                return o.push(Xc), c;
              case "top":
              case "left":
                return o.push(HA), c;
              case "right":
              case "bottom":
                return o.push(yt), c;
            } else (hA(f) || kt(f)) && o.push(f);
          } else if (Z(f)) switch (f.value) {
            case Vp:
              return t = 0, !1;
            case Gp:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case _p:
              return r = 0, !1;
            case Wp:
            case Mp:
              return r = 1, !1;
            case Xp:
            case Np:
              return r = 2, !1;
            case Pp:
              return r = 3, !1;
          } else if (kt(f) || hA(f)) return Array.isArray(r) || (r = []), r.push(f), !1;
          return c;
        }, a);
      }
      if (a) {
        var u = js(A, i);
        n.push(u);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  },
  si = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      o = [];
    return Ne(e).forEach(function (i, s) {
      var a = !0;
      if (s === 0 ? a = i.reduce(function (u, c) {
        if (Z(c)) switch (c.value) {
          case "center":
            return o.push(Xc), !1;
          case "top":
          case "left":
            return o.push(HA), !1;
          case "right":
          case "bottom":
            return o.push(yt), !1;
        } else if (hA(c) || kt(c)) return o.push(c), !1;
        return u;
      }, a) : s === 1 && (a = i.reduce(function (u, c) {
        if (Z(c)) switch (c.value) {
          case Vp:
            return t = 0, !1;
          case Gp:
            return t = 1, !1;
          case Xp:
          case _p:
            return r = 0, !1;
          case Mp:
            return r = 1, !1;
          case Np:
            return r = 2, !1;
          case Wp:
          case Pp:
            return r = 3, !1;
        } else if (kt(c) || hA(c)) return Array.isArray(r) || (r = []), r.push(c), !1;
        return u;
      }, a)), a) {
        var l = js(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  },
  gv = function (A) {
    return A.type === 1;
  },
  pv = function (A) {
    return A.type === 2;
  },
  zc = {
    name: "image",
    parse: function (A, e) {
      if (e.type === 22) {
        var t = {
          url: e.value,
          type: 0
        };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = zp[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
function wv(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!zp[A.name]);
}
var zp = {
    "linear-gradient": dv,
    "-moz-linear-gradient": ii,
    "-ms-linear-gradient": ii,
    "-o-linear-gradient": ii,
    "-webkit-linear-gradient": ii,
    "radial-gradient": hv,
    "-moz-radial-gradient": si,
    "-ms-radial-gradient": si,
    "-o-radial-gradient": si,
    "-webkit-radial-gradient": si,
    "-webkit-gradient": Bv
  },
  mv = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function (r) {
        return Jr(r) && wv(r);
      }).map(function (r) {
        return zc.parse(A, r);
      });
    }
  },
  Cv = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (Z(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  },
  Qv = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return Ne(e).map(function (t) {
        return t.filter(hA);
      }).map(bp);
    }
  },
  yv = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return Ne(e).map(function (t) {
        return t.filter(Z).map(function (r) {
          return r.value;
        }).join(" ");
      }).map(vv);
    }
  },
  vv = function (A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  Mr;
(function (A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Mr || (Mr = {}));
var Uv = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return Ne(e).map(function (t) {
        return t.filter(Fv);
      });
    }
  },
  Fv = function (A) {
    return Z(A) || hA(A);
  },
  Js = function (A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color"
    };
  },
  Ev = Js("top"),
  Hv = Js("right"),
  Iv = Js("bottom"),
  xv = Js("left"),
  Ys = function (A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (e, t) {
        return bp(t.filter(hA));
      }
    };
  },
  Sv = Ys("top-left"),
  Lv = Ys("top-right"),
  bv = Ys("bottom-right"),
  Tv = Ys("bottom-left"),
  Zs = function (A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      }
    };
  },
  Ov = Zs("top"),
  Dv = Zs("right"),
  kv = Zs("bottom"),
  Kv = Zs("left"),
  $s = function (A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (e, t) {
        return Uo(t) ? t.number : 0;
      }
    };
  },
  Rv = $s("top"),
  _v = $s("right"),
  Mv = $s("bottom"),
  Nv = $s("left"),
  Pv = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  },
  Vv = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    }
  },
  Gv = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Z).reduce(function (t, r) {
        return t | Wv(r.value);
      }, 0);
    }
  },
  Wv = function (A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  Xv = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    }
  },
  zv = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  },
  Bs;
(function (A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(Bs || (Bs = {}));
var jv = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "strict":
          return Bs.STRICT;
        case "normal":
        default:
          return Bs.NORMAL;
      }
    }
  },
  Jv = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4
  },
  Gd = function (A, e) {
    return Z(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : hA(A) ? $(A, e) : e;
  },
  Yv = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return e.type === 20 && e.value === "none" ? null : zc.parse(A, e);
    }
  },
  Zv = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    }
  },
  pu = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    }
  },
  qs = function (A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: !1,
      type: 4
    };
  },
  $v = qs("top"),
  qv = qs("right"),
  AU = qs("bottom"),
  eU = qs("left"),
  tU = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Z).map(function (t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    }
  },
  rU = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    }
  },
  Aa = function (A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage"
    };
  },
  nU = Aa("top"),
  oU = Aa("right"),
  iU = Aa("bottom"),
  sU = Aa("left"),
  aU = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    }
  },
  lU = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    }
  },
  uU = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && gu(e[0], "none") ? [] : Ne(e).map(function (t) {
        for (var r = {
            color: $e.TRANSPARENT,
            offsetX: HA,
            offsetY: HA,
            blur: HA
          }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          kt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = bt.parse(A, i);
        }
        return r;
      });
    }
  },
  cU = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    }
  },
  fU = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = hU[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  },
  dU = function (A) {
    var e = A.filter(function (t) {
      return t.type === 17;
    }).map(function (t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  },
  BU = function (A) {
    var e = A.filter(function (a) {
        return a.type === 17;
      }).map(function (a) {
        return a.number;
      }),
      t = e[0],
      r = e[1];
    e[2], e[3];
    var n = e[4],
      o = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var i = e[12],
      s = e[13];
    return e[14], e[15], e.length === 16 ? [t, r, n, o, i, s] : null;
  },
  hU = {
    matrix: dU,
    matrix3d: BU
  },
  Wd = {
    type: 16,
    number: 50,
    flags: vo
  },
  gU = [Wd, Wd],
  pU = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      var t = e.filter(hA);
      return t.length !== 2 ? gU : [t[0], t[1]];
    }
  },
  wU = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    }
  },
  Xn;
(function (A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Xn || (Xn = {}));
var mU = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-all":
          return Xn.BREAK_ALL;
        case "keep-all":
          return Xn.KEEP_ALL;
        case "normal":
        default:
          return Xn.NORMAL;
      }
    }
  },
  CU = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20) return {
        auto: !0,
        order: 0
      };
      if (An(e)) return {
        auto: !1,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  },
  jp = {
    name: "time",
    parse: function (A, e) {
      if (e.type === 15) switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
      throw new Error("Unsupported time type");
    }
  },
  QU = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return An(e) ? e.number : 1;
    }
  },
  yU = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  },
  vU = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Z).map(function (t) {
        switch (t.value) {
          case "underline":
            return 1;
          case "overline":
            return 2;
          case "line-through":
            return 3;
          case "none":
            return 4;
        }
        return 0;
      }).filter(function (t) {
        return t !== 0;
      });
    }
  },
  UU = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [],
        r = [];
      return e.forEach(function (n) {
        switch (n.type) {
          case 20:
          case 0:
            t.push(n.value);
            break;
          case 17:
            t.push(n.number.toString());
            break;
          case 4:
            r.push(t.join(" ")), t.length = 0;
            break;
        }
      }), t.length && r.push(t.join(" ")), r.map(function (n) {
        return n.indexOf(" ") === -1 ? n : "'" + n + "'";
      });
    }
  },
  FU = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length"
  },
  EU = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      if (An(e)) return e.number;
      if (Z(e)) switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
      return 400;
    }
  },
  HU = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.filter(Z).map(function (t) {
        return t.value;
      });
    }
  },
  IU = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    }
  },
  CA = function (A, e) {
    return (A & e) !== 0;
  },
  xU = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  },
  SU = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Lp), o = 0; o < n.length; o++) {
        var i = n[o],
          s = n[o + 1];
        if (i.type === 20) {
          var a = s && An(s) ? s.number : 1;
          r.push({
            counter: i.value,
            increment: a
          });
        }
      }
      return r;
    }
  },
  LU = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Lp), n = 0; n < r.length; n++) {
        var o = r[n],
          i = r[n + 1];
        if (Z(o) && o.value !== "none") {
          var s = i && An(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: s
          });
        }
      }
      return t;
    }
  },
  bU = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Uo).map(function (t) {
        return jp.parse(A, t);
      });
    }
  },
  TU = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [],
        n = e.filter(ov);
      if (n.length % 2 !== 0) return null;
      for (var o = 0; o < n.length; o += 2) {
        var i = n[o].value,
          s = n[o + 1].value;
        r.push({
          open: i,
          close: s
        });
      }
      return r;
    }
  },
  Xd = function (A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  },
  OU = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && gu(e[0], "none") ? [] : Ne(e).map(function (t) {
        for (var r = {
            color: 255,
            offsetX: HA,
            offsetY: HA,
            blur: HA,
            spread: HA,
            inset: !1
          }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          gu(i, "inset") ? r.inset = !0 : kt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = bt.parse(A, i);
        }
        return r;
      });
    }
  },
  DU = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [0, 1, 2],
        r = [];
      return e.filter(Z).forEach(function (n) {
        switch (n.value) {
          case "stroke":
            r.push(1);
            break;
          case "fill":
            r.push(0);
            break;
          case "markers":
            r.push(2);
            break;
        }
      }), t.forEach(function (n) {
        r.indexOf(n) === -1 && r.push(n);
      }), r;
    }
  },
  kU = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color"
  },
  KU = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Uo(e) ? e.number : 0;
    }
  },
  RU = function () {
    function A(e, t) {
      var r, n;
      this.animationDuration = b(e, bU, t.animationDuration), this.backgroundClip = b(e, av, t.backgroundClip), this.backgroundColor = b(e, lv, t.backgroundColor), this.backgroundImage = b(e, mv, t.backgroundImage), this.backgroundOrigin = b(e, Cv, t.backgroundOrigin), this.backgroundPosition = b(e, Qv, t.backgroundPosition), this.backgroundRepeat = b(e, yv, t.backgroundRepeat), this.backgroundSize = b(e, Uv, t.backgroundSize), this.borderTopColor = b(e, Ev, t.borderTopColor), this.borderRightColor = b(e, Hv, t.borderRightColor), this.borderBottomColor = b(e, Iv, t.borderBottomColor), this.borderLeftColor = b(e, xv, t.borderLeftColor), this.borderTopLeftRadius = b(e, Sv, t.borderTopLeftRadius), this.borderTopRightRadius = b(e, Lv, t.borderTopRightRadius), this.borderBottomRightRadius = b(e, bv, t.borderBottomRightRadius), this.borderBottomLeftRadius = b(e, Tv, t.borderBottomLeftRadius), this.borderTopStyle = b(e, Ov, t.borderTopStyle), this.borderRightStyle = b(e, Dv, t.borderRightStyle), this.borderBottomStyle = b(e, kv, t.borderBottomStyle), this.borderLeftStyle = b(e, Kv, t.borderLeftStyle), this.borderTopWidth = b(e, Rv, t.borderTopWidth), this.borderRightWidth = b(e, _v, t.borderRightWidth), this.borderBottomWidth = b(e, Mv, t.borderBottomWidth), this.borderLeftWidth = b(e, Nv, t.borderLeftWidth), this.boxShadow = b(e, OU, t.boxShadow), this.color = b(e, Pv, t.color), this.direction = b(e, Vv, t.direction), this.display = b(e, Gv, t.display), this.float = b(e, Xv, t.cssFloat), this.fontFamily = b(e, UU, t.fontFamily), this.fontSize = b(e, FU, t.fontSize), this.fontStyle = b(e, IU, t.fontStyle), this.fontVariant = b(e, HU, t.fontVariant), this.fontWeight = b(e, EU, t.fontWeight), this.letterSpacing = b(e, zv, t.letterSpacing), this.lineBreak = b(e, jv, t.lineBreak), this.lineHeight = b(e, Jv, t.lineHeight), this.listStyleImage = b(e, Yv, t.listStyleImage), this.listStylePosition = b(e, Zv, t.listStylePosition), this.listStyleType = b(e, pu, t.listStyleType), this.marginTop = b(e, $v, t.marginTop), this.marginRight = b(e, qv, t.marginRight), this.marginBottom = b(e, AU, t.marginBottom), this.marginLeft = b(e, eU, t.marginLeft), this.opacity = b(e, QU, t.opacity);
      var o = b(e, tU, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = b(e, rU, t.overflowWrap), this.paddingTop = b(e, nU, t.paddingTop), this.paddingRight = b(e, oU, t.paddingRight), this.paddingBottom = b(e, iU, t.paddingBottom), this.paddingLeft = b(e, sU, t.paddingLeft), this.paintOrder = b(e, DU, t.paintOrder), this.position = b(e, lU, t.position), this.textAlign = b(e, aU, t.textAlign), this.textDecorationColor = b(e, yU, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = b(e, vU, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = b(e, uU, t.textShadow), this.textTransform = b(e, cU, t.textTransform), this.transform = b(e, fU, t.transform), this.transformOrigin = b(e, pU, t.transformOrigin), this.visibility = b(e, wU, t.visibility), this.webkitTextStrokeColor = b(e, kU, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = b(e, KU, t.webkitTextStrokeWidth), this.wordBreak = b(e, mU, t.wordBreak), this.zIndex = b(e, CU, t.zIndex);
    }
    return A.prototype.isVisible = function () {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function () {
      return Tt(this.backgroundColor);
    }, A.prototype.isTransformed = function () {
      return this.transform !== null;
    }, A.prototype.isPositioned = function () {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function () {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function () {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function () {
      return CA(this.display, 4) || CA(this.display, 33554432) || CA(this.display, 268435456) || CA(this.display, 536870912) || CA(this.display, 67108864) || CA(this.display, 134217728);
    }, A;
  }(),
  _U = function () {
    function A(e, t) {
      this.content = b(e, xU, t.content), this.quotes = b(e, TU, t.quotes);
    }
    return A;
  }(),
  zd = function () {
    function A(e, t) {
      this.counterIncrement = b(e, SU, t.counterIncrement), this.counterReset = b(e, LU, t.counterReset);
    }
    return A;
  }(),
  b = function (A, e, t) {
    var r = new xp(),
      n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Sp(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, Z(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return zs.parse(A, o.parseComponentValue());
          case "color":
            return bt.parse(A, o.parseComponentValue());
          case "image":
            return zc.parse(A, o.parseComponentValue());
          case "length":
            var s = o.parseComponentValue();
            return kt(s) ? s : HA;
          case "length-percentage":
            var a = o.parseComponentValue();
            return hA(a) ? a : HA;
          case "time":
            return jp.parse(A, o.parseComponentValue());
        }
        break;
    }
  },
  MU = "data-html2canvas-debug",
  NU = function (A) {
    var e = A.getAttribute(MU);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  wu = function (A, e) {
    var t = NU(A);
    return t === 1 || e === t;
  },
  Pe = function () {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, wu(t, 3)) debugger;
      this.styles = new RU(e, window.getComputedStyle(t, null)), Qu(t) && (this.styles.animationDuration.some(function (r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ws(this.context, t), wu(t, 4) && (this.flags |= 16);
    }
    return A;
  }(),
  PU = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  jd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ai = 0; ai < jd.length; ai++) bn[jd.charCodeAt(ai)] = ai;
var VU = function (A) {
    var e = A.length * .75,
      t = A.length,
      r,
      n = 0,
      o,
      i,
      s,
      a;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = bn[A.charCodeAt(r)], i = bn[A.charCodeAt(r + 1)], s = bn[A.charCodeAt(r + 2)], a = bn[A.charCodeAt(r + 3)], u[n++] = o << 2 | i >> 4, u[n++] = (i & 15) << 4 | s >> 2, u[n++] = (s & 3) << 6 | a & 63;
    return l;
  },
  GU = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  },
  WU = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  },
  qt = 5,
  jc = 11,
  Pa = 2,
  XU = jc - qt,
  Jp = 65536 >> qt,
  zU = 1 << qt,
  Va = zU - 1,
  jU = 1024 >> qt,
  JU = Jp + jU,
  YU = JU,
  ZU = 32,
  $U = YU + ZU,
  qU = 65536 >> jc,
  AF = 1 << XU,
  eF = AF - 1,
  Jd = function (A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  tF = function (A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  rF = function (A, e) {
    var t = VU(A),
      r = Array.isArray(t) ? WU(t) : new Uint32Array(t),
      n = Array.isArray(t) ? GU(t) : new Uint16Array(t),
      o = 24,
      i = Jd(n, o / 2, r[4] / 2),
      s = r[5] === 2 ? Jd(n, (o + r[4]) / 2) : tF(r, Math.ceil((o + r[4]) / 4));
    return new nF(r[0], r[1], r[2], r[3], i, s);
  },
  nF = function () {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function (e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> qt], t = (t << Pa) + (e & Va), this.data[t];
        if (e <= 65535) return t = this.index[Jp + (e - 55296 >> qt)], t = (t << Pa) + (e & Va), this.data[t];
        if (e < this.highStart) return t = $U - qU + (e >> jc), t = this.index[t], t += e >> qt & eF, t = this.index[t], t = (t << Pa) + (e & Va), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }(),
  Yd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  oF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var li = 0; li < Yd.length; li++) oF[Yd.charCodeAt(li)] = li;
var iF = 1,
  Ga = 2,
  Wa = 3,
  Zd = 4,
  $d = 5,
  sF = 7,
  qd = 8,
  Xa = 9,
  za = 10,
  AB = 11,
  eB = 12,
  tB = 13,
  rB = 14,
  ja = 15,
  aF = function (A) {
    for (var e = [], t = 0, r = A.length; t < r;) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  lF = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t;) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  },
  uF = rF(PU),
  se = "×",
  Ja = "÷",
  cF = function (A) {
    return uF.get(A);
  },
  fF = function (A, e, t) {
    var r = t - 2,
      n = e[r],
      o = e[t - 1],
      i = e[t];
    if (o === Ga && i === Wa) return se;
    if (o === Ga || o === Wa || o === Zd || i === Ga || i === Wa || i === Zd) return Ja;
    if (o === qd && [qd, Xa, AB, eB].indexOf(i) !== -1 || (o === AB || o === Xa) && (i === Xa || i === za) || (o === eB || o === za) && i === za || i === tB || i === $d || i === sF || o === iF) return se;
    if (o === tB && i === rB) {
      for (; n === $d;) n = e[--r];
      if (n === rB) return se;
    }
    if (o === ja && i === ja) {
      for (var s = 0; n === ja;) s++, n = e[--r];
      if (s % 2 === 0) return se;
    }
    return Ja;
  },
  dF = function (A) {
    var e = aF(A),
      t = e.length,
      r = 0,
      n = 0,
      o = e.map(cF);
    return {
      next: function () {
        if (r >= t) return {
          done: !0,
          value: null
        };
        for (var i = se; r < t && (i = fF(e, o, ++r)) === se;);
        if (i !== se || r === t) {
          var s = lF.apply(null, e.slice(n, r));
          return n = r, {
            value: s,
            done: !1
          };
        }
        return {
          done: !0,
          value: null
        };
      }
    };
  },
  BF = function (A) {
    for (var e = dF(A), t = [], r; !(r = e.next()).done;) r.value && t.push(r.value.slice());
    return t;
  },
  hF = function (A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
        var n = t.getBoundingClientRect(),
          o = Math.round(n.height);
        if (A.body.removeChild(r), o === e) return !0;
      }
    }
    return !1;
  },
  gF = function (A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild,
      n = Xs(r.data).map(function (a) {
        return dA(a);
      }),
      o = 0,
      i = {},
      s = n.every(function (a, l) {
        t.setStart(r, o), t.setEnd(r, o + a.length);
        var u = t.getBoundingClientRect();
        o += a.length;
        var c = u.x > i.x || u.y > i.y;
        return i = u, l === 0 ? !0 : c;
      });
    return A.body.removeChild(e), s;
  },
  pF = function () {
    return typeof new Image().crossOrigin < "u";
  },
  wF = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  mF = function (A) {
    var e = new Image(),
      t = A.createElement("canvas"),
      r = t.getContext("2d");
    if (!r) return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  nB = function (A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  },
  CF = function (A) {
    var e = A.createElement("canvas"),
      t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(!1);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(),
      o = e.toDataURL();
    n.src = o;
    var i = mu(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), oB(i).then(function (s) {
      r.drawImage(s, 0, 0);
      var a = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", nB(a) ? oB(mu(t, t, 0, 0, l)) : Promise.reject(!1);
    }).then(function (s) {
      return r.drawImage(s, 0, 0), nB(r.getImageData(0, 0, t, t).data);
    }).catch(function () {
      return !1;
    });
  },
  mu = function (A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg",
      i = document.createElementNS(o, "svg"),
      s = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", t.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(n), i;
  },
  oB = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      r.onload = function () {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  },
  EA = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = hF(document);
      return Object.defineProperty(EA, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = EA.SUPPORT_RANGE_BOUNDS && gF(document);
      return Object.defineProperty(EA, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = mF(document);
      return Object.defineProperty(EA, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? CF(document) : Promise.resolve(!1);
      return Object.defineProperty(EA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = pF();
      return Object.defineProperty(EA, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = wF();
      return Object.defineProperty(EA, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(EA, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(EA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  },
  zn = function () {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }(),
  QF = function (A, e, t, r) {
    var n = UF(e, t),
      o = [],
      i = 0;
    return n.forEach(function (s) {
      if (t.textDecorationLine.length || s.trim().length > 0) {
        if (EA.SUPPORT_RANGE_BOUNDS) {
          var a = iB(r, i, s.length).getClientRects();
          if (a.length > 1) {
            var l = Jc(s),
              u = 0;
            l.forEach(function (f) {
              o.push(new zn(f, rt.fromDOMRectList(A, iB(r, u + i, f.length).getClientRects()))), u += f.length;
            });
          } else o.push(new zn(s, rt.fromDOMRectList(A, a)));
        } else {
          var c = r.splitText(s.length);
          o.push(new zn(s, yF(A, r))), r = c;
        }
      } else EA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(s.length));
      i += s.length;
    }), o;
  },
  yF = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = Ws(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return rt.EMPTY;
  },
  iB = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  },
  Jc = function (A) {
    if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function (t) {
        return t.segment;
      });
    }
    return BF(A);
  },
  vF = function (A, e) {
    if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function (r) {
        return r.segment;
      });
    }
    return EF(A, e);
  },
  UF = function (A, e) {
    return e.letterSpacing !== 0 ? Jc(A) : vF(A, e);
  },
  FF = [32, 160, 4961, 65792, 65793, 4153, 4241],
  EF = function (A, e) {
    for (var t = qQ(A, {
        lineBreak: e.lineBreak,
        wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
      }), r = [], n, o = function () {
        if (n.value) {
          var i = n.value.slice(),
            s = Xs(i),
            a = "";
          s.forEach(function (l) {
            FF.indexOf(l) === -1 ? a += dA(l) : (a.length && r.push(a), r.push(dA(l)), a = "");
          }), a.length && r.push(a);
        }
      }; !(n = t.next()).done;) o();
    return r;
  },
  HF = function () {
    function A(e, t, r) {
      this.text = IF(t.data, r.textTransform), this.textBounds = QF(e, this.text, r, t);
    }
    return A;
  }(),
  IF = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(xF, SF);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  },
  xF = /(^|\s|:|-|\(|\))([a-z])/g,
  SF = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  },
  Yp = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(Pe),
  Zp = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(Pe),
  $p = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        o = new XMLSerializer(),
        i = Ws(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(Pe),
  qp = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(Pe),
  Cu = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(Pe),
  LF = [{
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }],
  bF = [{
    type: 16,
    flags: 0,
    number: 50
  }],
  TF = function (A) {
    return A.width > A.height ? new rt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new rt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  },
  OF = function (A) {
    var e = A.type === DF ? new Array(A.value.length + 1).join("•") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  },
  hs = "checkbox",
  gs = "radio",
  DF = "password",
  sB = 707406591,
  Yc = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = OF(r), (n.type === hs || n.type === gs) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [0], n.styles.backgroundOrigin = [0], n.bounds = TF(n.bounds)), n.type) {
        case hs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = LF;
          break;
        case gs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = bF;
          break;
      }
      return n;
    }
    return e;
  }(Pe),
  Aw = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  }(Pe),
  ew = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(Pe),
  tw = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = nw(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Wn(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : $e.TRANSPARENT,
            i = r.contentWindow.document.body ? Wn(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : $e.TRANSPARENT;
          n.backgroundColor = Tt(o) ? Tt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {}
      return n;
    }
    return e;
  }(Pe),
  kF = ["OL", "UL", "MENU"],
  Ti = function (A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, ow(n) && n.data.trim().length > 0) t.textNodes.push(new HF(A, n, t.styles));else if (Tr(n)) if (lw(n) && n.assignedNodes) n.assignedNodes().forEach(function (s) {
      return Ti(A, s, t, r);
    });else {
      var i = rw(A, n);
      i.styles.isVisible() && (KF(n, i, r) ? i.flags |= 4 : RF(i.styles) && (i.flags |= 2), kF.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Ti(A, n.shadowRoot, i, r) : !ps(n) && !iw(n) && !ws(n) && Ti(A, n, i, r));
    }
  },
  rw = function (A, e) {
    return yu(e) ? new Yp(A, e) : sw(e) ? new Zp(A, e) : iw(e) ? new $p(A, e) : _F(e) ? new qp(A, e) : MF(e) ? new Cu(A, e) : NF(e) ? new Yc(A, e) : ws(e) ? new Aw(A, e) : ps(e) ? new ew(A, e) : aw(e) ? new tw(A, e) : new Pe(A, e);
  },
  nw = function (A, e) {
    var t = rw(A, e);
    return t.flags |= 4, Ti(A, e, t, t), t;
  },
  KF = function (A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Zc(A) && t.styles.isTransparent();
  },
  RF = function (A) {
    return A.isPositioned() || A.isFloating();
  },
  ow = function (A) {
    return A.nodeType === Node.TEXT_NODE;
  },
  Tr = function (A) {
    return A.nodeType === Node.ELEMENT_NODE;
  },
  Qu = function (A) {
    return Tr(A) && typeof A.style < "u" && !Oi(A);
  },
  Oi = function (A) {
    return typeof A.className == "object";
  },
  _F = function (A) {
    return A.tagName === "LI";
  },
  MF = function (A) {
    return A.tagName === "OL";
  },
  NF = function (A) {
    return A.tagName === "INPUT";
  },
  PF = function (A) {
    return A.tagName === "HTML";
  },
  iw = function (A) {
    return A.tagName === "svg";
  },
  Zc = function (A) {
    return A.tagName === "BODY";
  },
  sw = function (A) {
    return A.tagName === "CANVAS";
  },
  aB = function (A) {
    return A.tagName === "VIDEO";
  },
  yu = function (A) {
    return A.tagName === "IMG";
  },
  aw = function (A) {
    return A.tagName === "IFRAME";
  },
  lB = function (A) {
    return A.tagName === "STYLE";
  },
  VF = function (A) {
    return A.tagName === "SCRIPT";
  },
  ps = function (A) {
    return A.tagName === "TEXTAREA";
  },
  ws = function (A) {
    return A.tagName === "SELECT";
  },
  lw = function (A) {
    return A.tagName === "SLOT";
  },
  uB = function (A) {
    return A.tagName.indexOf("-") > 0;
  },
  GF = function () {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function (e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function (e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function (e) {
      var t = this;
      e.forEach(function (r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function (e) {
      var t = this,
        r = e.counterIncrement,
        n = e.counterReset,
        o = !0;
      r !== null && r.forEach(function (s) {
        var a = t.counters[s.counter];
        a && s.increment !== 0 && (o = !1, a.length || a.push(1), a[Math.max(0, a.length - 1)] += s.increment);
      });
      var i = [];
      return o && n.forEach(function (s) {
        var a = t.counters[s.counter];
        i.push(s.counter), a || (a = t.counters[s.counter] = []), a.push(s.reset);
      }), i;
    }, A;
  }(),
  cB = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  },
  fB = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
  },
  WF = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
  },
  XF = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
  },
  Br = function (A, e, t, r, n, o) {
    return A < e || A > t ? ho(A, n, o.length > 0) : r.integers.reduce(function (i, s, a) {
      for (; A >= s;) A -= s, i += r.values[a];
      return i;
    }, "") + o;
  },
  uw = function (A, e, t, r) {
    var n = "";
    do t || A--, n = r(A) + n, A /= e; while (A * e >= e);
    return n;
  },
  fA = function (A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (uw(Math.abs(A), o, r, function (i) {
      return dA(Math.floor(i % o) + e);
    }) + n);
  },
  Mt = function (A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return uw(Math.abs(A), r, !1, function (n) {
      return e[Math.floor(n % r)];
    }) + t;
  },
  wr = 1,
  ft = 2,
  dt = 4,
  Tn = 8,
  We = function (A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return ho(A, 4, n.length > 0);
    var i = Math.abs(A),
      s = n;
    if (i === 0) return e[0] + s;
    for (var a = 0; i > 0 && a <= 4; a++) {
      var l = i % 10;
      l === 0 && CA(o, wr) && s !== "" ? s = e[l] + s : l > 1 || l === 1 && a === 0 || l === 1 && a === 1 && CA(o, ft) || l === 1 && a === 1 && CA(o, dt) && A > 100 || l === 1 && a > 1 && CA(o, Tn) ? s = e[l] + (a > 0 ? t[a - 1] : "") + s : l === 1 && a > 0 && (s = t[a - 1] + s), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + s;
  },
  dB = "十百千萬",
  BB = "拾佰仟萬",
  hB = "マイナス",
  Ya = "마이너스",
  ho = function (A, e, t) {
    var r = t ? ". " : "",
      n = t ? "、" : "",
      o = t ? ", " : "",
      i = t ? " " : "";
    switch (e) {
      case 0:
        return "•" + i;
      case 1:
        return "◦" + i;
      case 2:
        return "◾" + i;
      case 5:
        var s = fA(A, 48, 57, !0, r);
        return s.length < 4 ? "0" + s : s;
      case 4:
        return Mt(A, "〇一二三四五六七八九", n);
      case 6:
        return Br(A, 1, 3999, cB, 3, r).toLowerCase();
      case 7:
        return Br(A, 1, 3999, cB, 3, r);
      case 8:
        return fA(A, 945, 969, !1, r);
      case 9:
        return fA(A, 97, 122, !1, r);
      case 10:
        return fA(A, 65, 90, !1, r);
      case 11:
        return fA(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return Br(A, 1, 9999, fB, 3, r);
      case 35:
        return Br(A, 1, 9999, fB, 3, r).toLowerCase();
      case 13:
        return fA(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return fA(A, 6112, 6121, !0, r);
      case 15:
        return Mt(A, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return Mt(A, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return We(A, "零一二三四五六七八九", dB, "負", n, ft | dt | Tn);
      case 47:
        return We(A, "零壹貳參肆伍陸柒捌玖", BB, "負", n, wr | ft | dt | Tn);
      case 42:
        return We(A, "零一二三四五六七八九", dB, "负", n, ft | dt | Tn);
      case 41:
        return We(A, "零壹贰叁肆伍陆柒捌玖", BB, "负", n, wr | ft | dt | Tn);
      case 26:
        return We(A, "〇一二三四五六七八九", "十百千万", hB, n, 0);
      case 25:
        return We(A, "零壱弐参四伍六七八九", "拾百千万", hB, n, wr | ft | dt);
      case 31:
        return We(A, "영일이삼사오육칠팔구", "십백천만", Ya, o, wr | ft | dt);
      case 33:
        return We(A, "零一二三四五六七八九", "十百千萬", Ya, o, 0);
      case 32:
        return We(A, "零壹貳參四五六七八九", "拾百千", Ya, o, wr | ft | dt);
      case 18:
        return fA(A, 2406, 2415, !0, r);
      case 20:
        return Br(A, 1, 19999, XF, 3, r);
      case 21:
        return fA(A, 2790, 2799, !0, r);
      case 22:
        return fA(A, 2662, 2671, !0, r);
      case 22:
        return Br(A, 1, 10999, WF, 3, r);
      case 23:
        return Mt(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
      case 24:
        return Mt(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
      case 27:
        return fA(A, 3302, 3311, !0, r);
      case 28:
        return Mt(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
      case 29:
        return Mt(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
      case 34:
        return fA(A, 3792, 3801, !0, r);
      case 37:
        return fA(A, 6160, 6169, !0, r);
      case 38:
        return fA(A, 4160, 4169, !0, r);
      case 39:
        return fA(A, 2918, 2927, !0, r);
      case 40:
        return fA(A, 1776, 1785, !0, r);
      case 43:
        return fA(A, 3046, 3055, !0, r);
      case 44:
        return fA(A, 3174, 3183, !0, r);
      case 45:
        return fA(A, 3664, 3673, !0, r);
      case 46:
        return fA(A, 3872, 3881, !0, r);
      case 3:
      default:
        return fA(A, 48, 57, !0, r);
    }
  },
  cw = "data-html2canvas-ignore",
  gB = function () {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new GF(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function (e, t) {
      var r = this,
        n = zF(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset,
        i = e.defaultView.pageYOffset,
        s = n.contentWindow,
        a = s.document,
        l = YF(n).then(function () {
          return KA(r, void 0, void 0, function () {
            var u, c;
            return bA(this, function (f) {
              switch (f.label) {
                case 0:
                  return this.scrolledElements.forEach(AE), s && (s.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (s.scrollY !== t.top || s.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s.scrollX - t.left, s.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
                case 1:
                  f.sent(), f.label = 2;
                case 2:
                  return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, JF(a)] : [3, 4];
                case 3:
                  f.sent(), f.label = 4;
                case 4:
                  return typeof u == "function" ? [2, Promise.resolve().then(function () {
                    return u(a, c);
                  }).then(function () {
                    return n;
                  })] : [2, n];
              }
            });
          });
        });
      return a.open(), a.write($F(document.doctype) + "<html></html>"), qF(this.referenceElement.ownerDocument, o, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), l;
    }, A.prototype.createElementClone = function (e) {
      if (wu(e, 2)) debugger;
      if (sw(e)) return this.createCanvasClone(e);
      if (aB(e)) return this.createVideoClone(e);
      if (lB(e)) return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return yu(t) && (yu(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), uB(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function (e) {
      var t = document.createElement("html2canvascustomelement");
      return Za(e.style, t), t;
    }, A.prototype.createStyleClone = function (e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function (o, i) {
              return i && typeof i.cssText == "string" ? o + i.cssText : o;
            }, ""),
            n = e.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (o) {
        if (this.context.logger.error("Unable to access cssRules property", o), o.name !== "SecurityError") throw o;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function (e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(!1);
      try {
        n.width = e.width, n.height = e.height;
        var o = e.getContext("2d"),
          i = n.getContext("2d");
        if (i) if (!this.options.allowTaint && o) i.putImageData(o.getImageData(0, 0, e.width, e.height), 0, 0);else {
          var s = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
          if (s) {
            var a = s.getContextAttributes();
            (a == null ? void 0 : a.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
          }
          i.drawImage(e, 0, 0);
        }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function (e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function (e, t, r) {
      (!Tr(t) || !VF(t) && !t.hasAttribute(cw) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Tr(t) || !lB(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function (e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (Tr(o) && lw(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function (s) {
          return n.appendChildNode(t, s, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function (e, t) {
      if (ow(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && Tr(e) && (Qu(e) || Oi(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e),
          i = r.getComputedStyle(e, ":before"),
          s = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Qu(n) && (this.clonedReferenceElement = n), Zc(n) && rE(n);
        var a = this.counters.parse(new zd(this.context, o)),
          l = this.resolvePseudoContent(e, n, i, jn.BEFORE);
        uB(e) && (t = !0), aB(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var u = this.resolvePseudoContent(e, n, s, jn.AFTER);
        return u && n.appendChild(u), this.counters.pop(a), (o && (this.options.copyStyles || Oi(e)) && !aw(e) || t) && Za(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (ps(e) || ws(e)) && (ps(n) || ws(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function (e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content,
          s = t.ownerDocument;
        if (!(!s || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new zd(this.context, r));
          var a = new _U(this.context, r),
            l = s.createElement("html2canvaspseudoelement");
          Za(r, l), a.content.forEach(function (c) {
            if (c.type === 0) l.appendChild(s.createTextNode(c.value));else if (c.type === 22) {
              var f = s.createElement("img");
              f.src = c.value, f.style.opacity = "1", l.appendChild(f);
            } else if (c.type === 18) {
              if (c.name === "attr") {
                var w = c.values.filter(Z);
                w.length && l.appendChild(s.createTextNode(e.getAttribute(w[0].value) || ""));
              } else if (c.name === "counter") {
                var h = c.values.filter(Jr),
                  g = h[0],
                  U = h[1];
                if (g && Z(g)) {
                  var B = o.counters.getCounterValue(g.value),
                    d = U && Z(U) ? pu.parse(o.context, U.value) : 3;
                  l.appendChild(s.createTextNode(ho(B, d, !1)));
                }
              } else if (c.name === "counters") {
                var p = c.values.filter(Jr),
                  g = p[0],
                  m = p[1],
                  U = p[2];
                if (g && Z(g)) {
                  var v = o.counters.getCounterValues(g.value),
                    C = U && Z(U) ? pu.parse(o.context, U.value) : 3,
                    F = m && m.type === 0 ? m.value : "",
                    Q = v.map(function (M) {
                      return ho(M, C, !1);
                    }).join(F);
                  l.appendChild(s.createTextNode(Q));
                }
              }
            } else if (c.type === 20) switch (c.value) {
              case "open-quote":
                l.appendChild(s.createTextNode(Xd(a.quotes, o.quoteDepth++, !0)));
                break;
              case "close-quote":
                l.appendChild(s.createTextNode(Xd(a.quotes, --o.quoteDepth, !1)));
                break;
              default:
                l.appendChild(s.createTextNode(c.value));
            }
          }), l.className = vu + " " + Uu;
          var u = n === jn.BEFORE ? " " + vu : " " + Uu;
          return Oi(t) ? t.className.baseValue += u : t.className += u, l;
        }
      }
    }, A.destroy = function (e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }(),
  jn;
(function (A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(jn || (jn = {}));
var zF = function (A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(cw, "true"), A.body.appendChild(t), t;
  },
  jF = function (A) {
    return new Promise(function (e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      A.onload = e, A.onerror = e;
    });
  },
  JF = function (A) {
    return Promise.all([].slice.call(A.images, 0).map(jF));
  },
  YF = function (A) {
    return new Promise(function (e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function () {
        r.onload = A.onload = null;
        var o = setInterval(function () {
          n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(o), e(A));
        }, 50);
      };
    });
  },
  ZF = ["all", "d", "content"],
  Za = function (A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      ZF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  },
  $F = function (A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  },
  qF = function (A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  },
  AE = function (A) {
    var e = A[0],
      t = A[1],
      r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  },
  eE = ":before",
  tE = ":after",
  vu = "___html2canvas___pseudoelement_before",
  Uu = "___html2canvas___pseudoelement_after",
  pB = `{
    content: "" !important;
    display: none !important;
}`,
  rE = function (A) {
    nE(A, "." + vu + eE + pB + `
         .` + Uu + tE + pB);
  },
  nE = function (A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  },
  fw = function () {
    function A() {}
    return A.getOrigin = function (e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function (e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function (e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }(),
  oE = function () {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function (e) {
      var t = Promise.resolve();
      return this.has(e) || (qa(e) || lE(e)) && (this._cache[e] = this.loadImage(e)).catch(function () {}), t;
    }, A.prototype.match = function (e) {
      return this._cache[e];
    }, A.prototype.loadImage = function (e) {
      return KA(this, void 0, void 0, function () {
        var t,
          r,
          n,
          o,
          i = this;
        return bA(this, function (s) {
          switch (s.label) {
            case 0:
              return t = fw.isSameOrigin(e), r = !$a(e) && this._options.useCORS === !0 && EA.SUPPORT_CORS_IMAGES && !t, n = !$a(e) && !t && !qa(e) && typeof this._options.proxy == "string" && EA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !$a(e) && !qa(e) && !n && !r ? [2] : (o = e, n ? [4, this.proxy(o)] : [3, 2]);
            case 1:
              o = s.sent(), s.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function (a, l) {
                var u = new Image();
                u.onload = function () {
                  return a(u);
                }, u.onerror = l, (uE(o) || r) && (u.crossOrigin = "anonymous"), u.src = o, u.complete === !0 && setTimeout(function () {
                  return a(u);
                }, 500), i._options.imageTimeout > 0 && setTimeout(function () {
                  return l("Timed out (" + i._options.imageTimeout + "ms) loading image");
                }, i._options.imageTimeout);
              })];
            case 3:
              return [2, s.sent()];
          }
        });
      });
    }, A.prototype.has = function (e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function () {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function (e) {
      var t = this,
        r = this._options.proxy;
      if (!r) throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function (o, i) {
        var s = EA.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
          a = new XMLHttpRequest();
        a.onload = function () {
          if (a.status === 200) {
            if (s === "text") o(a.response);else {
              var c = new FileReader();
              c.addEventListener("load", function () {
                return o(c.result);
              }, !1), c.addEventListener("error", function (f) {
                return i(f);
              }, !1), c.readAsDataURL(a.response);
            }
          } else i("Failed to proxy resource " + n + " with status code " + a.status);
        }, a.onerror = i;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r + l + "url=" + encodeURIComponent(e) + "&responseType=" + s), s !== "text" && a instanceof XMLHttpRequest && (a.responseType = s), t._options.imageTimeout) {
          var u = t._options.imageTimeout;
          a.timeout = u, a.ontimeout = function () {
            return i("Timed out (" + u + "ms) proxying " + n);
          };
        }
        a.send();
      });
    }, A;
  }(),
  iE = /^data:image\/svg\+xml/i,
  sE = /^data:image\/.*;base64,/i,
  aE = /^data:image\/.*/i,
  lE = function (A) {
    return EA.SUPPORT_SVG_DRAWING || !cE(A);
  },
  $a = function (A) {
    return aE.test(A);
  },
  uE = function (A) {
    return sE.test(A);
  },
  qa = function (A) {
    return A.substr(0, 4) === "blob";
  },
  cE = function (A) {
    return A.substr(-3).toLowerCase() === "svg" || iE.test(A);
  },
  L = function () {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function (e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }(),
  hr = function (A, e, t) {
    return new L(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  },
  ui = function () {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function (e, t) {
      var r = hr(this.start, this.startControl, e),
        n = hr(this.startControl, this.endControl, e),
        o = hr(this.endControl, this.end, e),
        i = hr(r, n, e),
        s = hr(n, o, e),
        a = hr(i, s, e);
      return t ? new A(this.start, r, i, a) : new A(a, s, o, this.end);
    }, A.prototype.add = function (e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function () {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }(),
  ue = function (A) {
    return A.type === 1;
  },
  fE = function () {
    function A(e) {
      var t = e.styles,
        r = e.bounds,
        n = Ln(t.borderTopLeftRadius, r.width, r.height),
        o = n[0],
        i = n[1],
        s = Ln(t.borderTopRightRadius, r.width, r.height),
        a = s[0],
        l = s[1],
        u = Ln(t.borderBottomRightRadius, r.width, r.height),
        c = u[0],
        f = u[1],
        w = Ln(t.borderBottomLeftRadius, r.width, r.height),
        h = w[0],
        g = w[1],
        U = [];
      U.push((o + a) / r.width), U.push((h + c) / r.width), U.push((i + g) / r.height), U.push((l + f) / r.height);
      var B = Math.max.apply(Math, U);
      B > 1 && (o /= B, i /= B, a /= B, l /= B, c /= B, f /= B, h /= B, g /= B);
      var d = r.width - a,
        p = r.height - f,
        m = r.width - c,
        v = r.height - g,
        C = t.borderTopWidth,
        F = t.borderRightWidth,
        Q = t.borderBottomWidth,
        H = t.borderLeftWidth,
        I = $(t.paddingTop, e.bounds.width),
        M = $(t.paddingRight, e.bounds.width),
        D = $(t.paddingBottom, e.bounds.width),
        N = $(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? nA(r.left + H / 3, r.top + C / 3, o - H / 3, i - C / 3, j.TOP_LEFT) : new L(r.left + H / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? nA(r.left + d, r.top + C / 3, a - F / 3, l - C / 3, j.TOP_RIGHT) : new L(r.left + r.width - F / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? nA(r.left + m, r.top + p, c - F / 3, f - Q / 3, j.BOTTOM_RIGHT) : new L(r.left + r.width - F / 3, r.top + r.height - Q / 3), this.bottomLeftBorderDoubleOuterBox = h > 0 || g > 0 ? nA(r.left + H / 3, r.top + v, h - H / 3, g - Q / 3, j.BOTTOM_LEFT) : new L(r.left + H / 3, r.top + r.height - Q / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? nA(r.left + H * 2 / 3, r.top + C * 2 / 3, o - H * 2 / 3, i - C * 2 / 3, j.TOP_LEFT) : new L(r.left + H * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? nA(r.left + d, r.top + C * 2 / 3, a - F * 2 / 3, l - C * 2 / 3, j.TOP_RIGHT) : new L(r.left + r.width - F * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? nA(r.left + m, r.top + p, c - F * 2 / 3, f - Q * 2 / 3, j.BOTTOM_RIGHT) : new L(r.left + r.width - F * 2 / 3, r.top + r.height - Q * 2 / 3), this.bottomLeftBorderDoubleInnerBox = h > 0 || g > 0 ? nA(r.left + H * 2 / 3, r.top + v, h - H * 2 / 3, g - Q * 2 / 3, j.BOTTOM_LEFT) : new L(r.left + H * 2 / 3, r.top + r.height - Q * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? nA(r.left + H / 2, r.top + C / 2, o - H / 2, i - C / 2, j.TOP_LEFT) : new L(r.left + H / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? nA(r.left + d, r.top + C / 2, a - F / 2, l - C / 2, j.TOP_RIGHT) : new L(r.left + r.width - F / 2, r.top + C / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? nA(r.left + m, r.top + p, c - F / 2, f - Q / 2, j.BOTTOM_RIGHT) : new L(r.left + r.width - F / 2, r.top + r.height - Q / 2), this.bottomLeftBorderStroke = h > 0 || g > 0 ? nA(r.left + H / 2, r.top + v, h - H / 2, g - Q / 2, j.BOTTOM_LEFT) : new L(r.left + H / 2, r.top + r.height - Q / 2), this.topLeftBorderBox = o > 0 || i > 0 ? nA(r.left, r.top, o, i, j.TOP_LEFT) : new L(r.left, r.top), this.topRightBorderBox = a > 0 || l > 0 ? nA(r.left + d, r.top, a, l, j.TOP_RIGHT) : new L(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || f > 0 ? nA(r.left + m, r.top + p, c, f, j.BOTTOM_RIGHT) : new L(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = h > 0 || g > 0 ? nA(r.left, r.top + v, h, g, j.BOTTOM_LEFT) : new L(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? nA(r.left + H, r.top + C, Math.max(0, o - H), Math.max(0, i - C), j.TOP_LEFT) : new L(r.left + H, r.top + C), this.topRightPaddingBox = a > 0 || l > 0 ? nA(r.left + Math.min(d, r.width - F), r.top + C, d > r.width + F ? 0 : Math.max(0, a - F), Math.max(0, l - C), j.TOP_RIGHT) : new L(r.left + r.width - F, r.top + C), this.bottomRightPaddingBox = c > 0 || f > 0 ? nA(r.left + Math.min(m, r.width - H), r.top + Math.min(p, r.height - Q), Math.max(0, c - F), Math.max(0, f - Q), j.BOTTOM_RIGHT) : new L(r.left + r.width - F, r.top + r.height - Q), this.bottomLeftPaddingBox = h > 0 || g > 0 ? nA(r.left + H, r.top + Math.min(v, r.height - Q), Math.max(0, h - H), Math.max(0, g - Q), j.BOTTOM_LEFT) : new L(r.left + H, r.top + r.height - Q), this.topLeftContentBox = o > 0 || i > 0 ? nA(r.left + H + N, r.top + C + I, Math.max(0, o - (H + N)), Math.max(0, i - (C + I)), j.TOP_LEFT) : new L(r.left + H + N, r.top + C + I), this.topRightContentBox = a > 0 || l > 0 ? nA(r.left + Math.min(d, r.width + H + N), r.top + C + I, d > r.width + H + N ? 0 : a - H + N, l - (C + I), j.TOP_RIGHT) : new L(r.left + r.width - (F + M), r.top + C + I), this.bottomRightContentBox = c > 0 || f > 0 ? nA(r.left + Math.min(m, r.width - (H + N)), r.top + Math.min(p, r.height + C + I), Math.max(0, c - (F + M)), f - (Q + D), j.BOTTOM_RIGHT) : new L(r.left + r.width - (F + M), r.top + r.height - (Q + D)), this.bottomLeftContentBox = h > 0 || g > 0 ? nA(r.left + H + N, r.top + v, Math.max(0, h - (H + N)), g - (Q + D), j.BOTTOM_LEFT) : new L(r.left + H + N, r.top + r.height - (Q + D));
    }
    return A;
  }(),
  j;
(function (A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(j || (j = {}));
var nA = function (A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3),
      i = t * o,
      s = r * o,
      a = A + t,
      l = e + r;
    switch (n) {
      case j.TOP_LEFT:
        return new ui(new L(A, l), new L(A, l - s), new L(a - i, e), new L(a, e));
      case j.TOP_RIGHT:
        return new ui(new L(A, e), new L(A + i, e), new L(a, l - s), new L(a, l));
      case j.BOTTOM_RIGHT:
        return new ui(new L(a, e), new L(a, e + s), new L(A + i, l), new L(A, l));
      case j.BOTTOM_LEFT:
      default:
        return new ui(new L(a, l), new L(a - i, l), new L(A, e + s), new L(A, e));
    }
  },
  ms = function (A) {
    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
  },
  dE = function (A) {
    return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox];
  },
  Cs = function (A) {
    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox];
  },
  BE = function () {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }(),
  ci = function () {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }(),
  hE = function () {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }(),
  gE = function (A) {
    return A.type === 0;
  },
  dw = function (A) {
    return A.type === 1;
  },
  pE = function (A) {
    return A.type === 2;
  },
  wB = function (A, e) {
    return A.length === e.length ? A.some(function (t, r) {
      return t === e[r];
    }) : !1;
  },
  wE = function (A, e, t, r, n) {
    return A.map(function (o, i) {
      switch (i) {
        case 0:
          return o.add(e, t);
        case 1:
          return o.add(e + r, t);
        case 2:
          return o.add(e + r, t + n);
        case 3:
          return o.add(e, t + n);
      }
      return o;
    });
  },
  Bw = function () {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }(),
  hw = function () {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new fE(this.container), this.container.styles.opacity < 1 && this.effects.push(new hE(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
          n = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
          o = this.container.styles.transform;
        this.effects.push(new BE(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = ms(this.curves),
          s = Cs(this.curves);
        wB(i, s) ? this.effects.push(new ci(i, 6)) : (this.effects.push(new ci(i, 2)), this.effects.push(new ci(s, 4)));
      }
    }
    return A.prototype.getEffects = function (e) {
      for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r;) {
        var o = r.effects.filter(function (a) {
          return !dw(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = ms(r.curves),
              s = Cs(r.curves);
            wB(i, s) || n.unshift(new ci(s, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function (a) {
        return CA(a.target, e);
      });
    }, A;
  }(),
  Fu = function (A, e, t, r) {
    A.container.elements.forEach(function (n) {
      var o = CA(n.flags, 4),
        i = CA(n.flags, 2),
        s = new hw(n, A);
      CA(n.styles.display, 2048) && r.push(s);
      var a = CA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e,
          u = new Bw(s);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var c = n.styles.zIndex.order;
          if (c < 0) {
            var f = 0;
            l.negativeZIndex.some(function (h, g) {
              return c > h.element.container.styles.zIndex.order ? (f = g, !1) : f > 0;
            }), l.negativeZIndex.splice(f, 0, u);
          } else if (c > 0) {
            var w = 0;
            l.positiveZIndex.some(function (h, g) {
              return c >= h.element.container.styles.zIndex.order ? (w = g + 1, !1) : w > 0;
            }), l.positiveZIndex.splice(w, 0, u);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
        Fu(s, u, o ? u : t, a);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(s) : e.nonInlineLevel.push(s), Fu(s, e, t, a);
      CA(n.flags, 8) && gw(n, a);
    });
  },
  gw = function (A, e) {
    for (var t = A instanceof Cu ? A.start : 1, r = A instanceof Cu ? A.reversed : !1, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof qp && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = ho(t, o.container.styles.listStyleType, !0), t += r ? -1 : 1;
    }
  },
  mE = function (A) {
    var e = new hw(A, null),
      t = new Bw(e),
      r = [];
    return Fu(e, t, t, r), gw(e.container, r), t;
  },
  mB = function (A, e) {
    switch (e) {
      case 0:
        return Be(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Be(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Be(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      case 3:
      default:
        return Be(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  },
  CE = function (A, e) {
    switch (e) {
      case 0:
        return Be(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Be(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Be(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      case 3:
      default:
        return Be(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  },
  QE = function (A, e) {
    switch (e) {
      case 0:
        return Be(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Be(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Be(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      case 3:
      default:
        return Be(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  },
  yE = function (A, e) {
    switch (e) {
      case 0:
        return fi(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return fi(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return fi(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      case 3:
      default:
        return fi(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  },
  fi = function (A, e) {
    var t = [];
    return ue(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), ue(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t;
  },
  Be = function (A, e, t, r) {
    var n = [];
    return ue(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), ue(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), ue(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), ue(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n;
  },
  pw = function (A) {
    var e = A.bounds,
      t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  },
  Qs = function (A) {
    var e = A.styles,
      t = A.bounds,
      r = $(e.paddingLeft, t.width),
      n = $(e.paddingRight, t.width),
      o = $(e.paddingTop, t.width),
      i = $(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  },
  vE = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Qs(e) : pw(e);
  },
  UE = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Qs(e) : pw(e);
  },
  Al = function (A, e, t) {
    var r = vE(mr(A.styles.backgroundOrigin, e), A),
      n = UE(mr(A.styles.backgroundClip, e), A),
      o = FE(mr(A.styles.backgroundSize, e), t, r),
      i = o[0],
      s = o[1],
      a = Ln(mr(A.styles.backgroundPosition, e), r.width - i, r.height - s),
      l = EE(mr(A.styles.backgroundRepeat, e), a, o, r, n),
      u = Math.round(r.left + a[0]),
      c = Math.round(r.top + a[1]);
    return [l, u, c, i, s];
  },
  gr = function (A) {
    return Z(A) && A.value === Mr.AUTO;
  },
  di = function (A) {
    return typeof A == "number";
  },
  FE = function (A, e, t) {
    var r = e[0],
      n = e[1],
      o = e[2],
      i = A[0],
      s = A[1];
    if (!i) return [0, 0];
    if (hA(i) && s && hA(s)) return [$(i, t.width), $(s, t.height)];
    var a = di(o);
    if (Z(i) && (i.value === Mr.CONTAIN || i.value === Mr.COVER)) {
      if (di(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === Mr.COVER) ? [t.width, t.width / o] : [t.height * o, t.height];
      }
      return [t.width, t.height];
    }
    var u = di(r),
      c = di(n),
      f = u || c;
    if (gr(i) && (!s || gr(s))) {
      if (u && c) return [r, n];
      if (!a && !f) return [t.width, t.height];
      if (f && a) {
        var w = u ? r : n * o,
          h = c ? n : r / o;
        return [w, h];
      }
      var g = u ? r : t.width,
        U = c ? n : t.height;
      return [g, U];
    }
    if (a) {
      var B = 0,
        d = 0;
      return hA(i) ? B = $(i, t.width) : hA(s) && (d = $(s, t.height)), gr(i) ? B = d * o : (!s || gr(s)) && (d = B / o), [B, d];
    }
    var p = null,
      m = null;
    if (hA(i) ? p = $(i, t.width) : s && hA(s) && (m = $(s, t.height)), p !== null && (!s || gr(s)) && (m = u && c ? p / r * n : t.height), m !== null && gr(i) && (p = u && c ? m / n * r : t.width), p !== null && m !== null) return [p, m];
    throw new Error("Unable to calculate background-size for element");
  },
  mr = function (A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  },
  EE = function (A, e, t, r, n) {
    var o = e[0],
      i = e[1],
      s = t[0],
      a = t[1];
    switch (A) {
      case 2:
        return [new L(Math.round(r.left), Math.round(r.top + i)), new L(Math.round(r.left + r.width), Math.round(r.top + i)), new L(Math.round(r.left + r.width), Math.round(a + r.top + i)), new L(Math.round(r.left), Math.round(a + r.top + i))];
      case 3:
        return [new L(Math.round(r.left + o), Math.round(r.top)), new L(Math.round(r.left + o + s), Math.round(r.top)), new L(Math.round(r.left + o + s), Math.round(r.height + r.top)), new L(Math.round(r.left + o), Math.round(r.height + r.top))];
      case 1:
        return [new L(Math.round(r.left + o), Math.round(r.top + i)), new L(Math.round(r.left + o + s), Math.round(r.top + i)), new L(Math.round(r.left + o + s), Math.round(r.top + i + a)), new L(Math.round(r.left + o), Math.round(r.top + i + a))];
      default:
        return [new L(Math.round(n.left), Math.round(n.top)), new L(Math.round(n.left + n.width), Math.round(n.top)), new L(Math.round(n.left + n.width), Math.round(n.height + n.top)), new L(Math.round(n.left), Math.round(n.height + n.top))];
    }
  },
  HE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  CB = "Hidden Text",
  IE = function () {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function (e, t) {
      var r = this._document.createElement("div"),
        n = this._document.createElement("img"),
        o = this._document.createElement("span"),
        i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = HE, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(CB)), r.appendChild(o), r.appendChild(n);
      var s = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(CB)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: s,
        middle: a
      };
    }, A.prototype.getMetrics = function (e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }(),
  ww = function () {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }(),
  xE = 1e4,
  SE = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new IE(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function (t) {
      for (var r = this; this._activeEffects.length;) this.popEffect();
      t.forEach(function (n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function (t) {
      this.ctx.save(), pE(t) && (this.ctx.globalAlpha = t.opacity), gE(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), dw(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function () {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function (t) {
      return KA(this, void 0, void 0, function () {
        var r;
        return bA(this, function (n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }, e.prototype.renderNode = function (t) {
      return KA(this, void 0, void 0, function () {
        return bA(this, function (r) {
          switch (r.label) {
            case 0:
              if (CA(t.container.flags, 16)) debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function (t, r, n) {
      var o = this;
      if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);else {
        var i = Jc(t.text);
        i.reduce(function (s, a) {
          return o.ctx.fillText(a, s, t.bounds.top + n), s + o.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function (t) {
      var r = t.fontVariant.filter(function (i) {
          return i === "normal" || i === "small-caps";
        }).join(""),
        n = DE(t.fontFamily).join(", "),
        o = Uo(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [[t.fontStyle, r, t.fontWeight, o, n].join(" "), n, o];
    }, e.prototype.renderTextNode = function (t, r) {
      return KA(this, void 0, void 0, function () {
        var n,
          o,
          i,
          s,
          a,
          l,
          u,
          c,
          f = this;
        return bA(this, function (w) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], s = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, s), l = a.baseline, u = a.middle, c = r.paintOrder, t.textBounds.forEach(function (h) {
            c.forEach(function (g) {
              switch (g) {
                case 0:
                  f.ctx.fillStyle = yA(r.color), f.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  var U = r.textShadow;
                  U.length && h.text.trim().length && (U.slice(0).reverse().forEach(function (B) {
                    f.ctx.shadowColor = yA(B.color), f.ctx.shadowOffsetX = B.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = B.offsetY.number * f.options.scale, f.ctx.shadowBlur = B.blur.number, f.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = yA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function (B) {
                    switch (B) {
                      case 1:
                        f.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top + l), h.bounds.width, 1);
                        break;
                      case 2:
                        f.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top), h.bounds.width, 1);
                        break;
                      case 3:
                        f.ctx.fillRect(h.bounds.left, Math.ceil(h.bounds.top + u), h.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && h.text.trim().length && (f.ctx.strokeStyle = yA(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + l)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [2];
        });
      });
    }, e.prototype.renderReplacedElement = function (t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var o = Qs(t),
          i = Cs(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function (t) {
      return KA(this, void 0, void 0, function () {
        var r, n, o, i, s, a, d, d, l, u, c, f, m, w, h, v, g, U, B, d, p, m, v;
        return bA(this, function (C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, s = r.textNodes, C.label = 1;
            case 1:
              return i < s.length ? (a = s[i], [4, this.renderTextNode(a, o)]) : [3, 4];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof Yp)) return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7,, 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Zp && this.renderReplacedElement(r, n, r.canvas), !(r instanceof $p)) return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11,, 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof tw && r.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, l.render(r.tree)]) : [3, 14];
            case 13:
              u = C.sent(), r.width && r.height && this.ctx.drawImage(u, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof Yc && (c = Math.min(r.bounds.width, r.bounds.height), r.type === hs ? r.checked && (this.ctx.save(), this.path([new L(r.bounds.left + c * .39363, r.bounds.top + c * .79), new L(r.bounds.left + c * .16, r.bounds.top + c * .5549), new L(r.bounds.left + c * .27347, r.bounds.top + c * .44071), new L(r.bounds.left + c * .39694, r.bounds.top + c * .5649), new L(r.bounds.left + c * .72983, r.bounds.top + c * .23), new L(r.bounds.left + c * .84, r.bounds.top + c * .34085), new L(r.bounds.left + c * .39363, r.bounds.top + c * .79)]), this.ctx.fillStyle = yA(sB), this.ctx.fill(), this.ctx.restore()) : r.type === gs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = yA(sB), this.ctx.fill(), this.ctx.restore())), LE(r) && r.value.length) {
                switch (f = this.createFontStyle(o), m = f[0], w = f[1], h = this.fontMetrics.getMetrics(m, w).baseline, this.ctx.font = m, this.ctx.fillStyle = yA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = TE(r.styles.textAlign), v = Qs(r), g = 0, r.styles.textAlign) {
                  case 1:
                    g += v.width / 2;
                    break;
                  case 2:
                    g += v.width;
                    break;
                }
                U = v.add(g, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([new L(v.left, v.top), new L(v.left + v.width, v.top), new L(v.left + v.width, v.top + v.height), new L(v.left, v.top + v.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new zn(r.value, U), o.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!CA(r.styles.display, 2048)) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (B = r.styles.listStyleImage, B.type !== 0) return [3, 18];
              d = void 0, p = B.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17,, 18]), [4, this.context.cache.match(p)];
            case 16:
              return d = C.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + p), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(o)[0], this.ctx.font = m, this.ctx.fillStyle = yA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new rt(r.bounds.left, r.bounds.top + $(r.styles.paddingTop, r.bounds.width), r.bounds.width, Gd(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new zn(t.listValue, v), o.letterSpacing, Gd(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [2];
          }
        });
      });
    }, e.prototype.renderStackContent = function (t) {
      return KA(this, void 0, void 0, function () {
        var r, n, B, o, i, B, s, a, B, l, u, B, c, f, B, w, h, B, g, U, B;
        return bA(this, function (d) {
          switch (d.label) {
            case 0:
              if (CA(t.element.container.flags, 16)) debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              d.sent(), r = 0, n = t.negativeZIndex, d.label = 2;
            case 2:
              return r < n.length ? (B = n[r], [4, this.renderStack(B)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              d.sent(), o = 0, i = t.nonInlineLevel, d.label = 7;
            case 7:
              return o < i.length ? (B = i[o], [4, this.renderNode(B)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return o++, [3, 7];
            case 10:
              s = 0, a = t.nonPositionedFloats, d.label = 11;
            case 11:
              return s < a.length ? (B = a[s], [4, this.renderStack(B)]) : [3, 14];
            case 12:
              d.sent(), d.label = 13;
            case 13:
              return s++, [3, 11];
            case 14:
              l = 0, u = t.nonPositionedInlineLevel, d.label = 15;
            case 15:
              return l < u.length ? (B = u[l], [4, this.renderStack(B)]) : [3, 18];
            case 16:
              d.sent(), d.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              c = 0, f = t.inlineLevel, d.label = 19;
            case 19:
              return c < f.length ? (B = f[c], [4, this.renderNode(B)]) : [3, 22];
            case 20:
              d.sent(), d.label = 21;
            case 21:
              return c++, [3, 19];
            case 22:
              w = 0, h = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return w < h.length ? (B = h[w], [4, this.renderStack(B)]) : [3, 26];
            case 24:
              d.sent(), d.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              g = 0, U = t.positiveZIndex, d.label = 27;
            case 27:
              return g < U.length ? (B = U[g], [4, this.renderStack(B)]) : [3, 30];
            case 28:
              d.sent(), d.label = 29;
            case 29:
              return g++, [3, 27];
            case 30:
              return [2];
          }
        });
      });
    }, e.prototype.mask = function (t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function (t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function (t) {
      var r = this;
      t.forEach(function (n, o) {
        var i = ue(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), ue(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function (t, r, n, o) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, o), this.ctx.fill(), this.ctx.translate(-n, -o);
    }, e.prototype.resizeImage = function (t, r, n) {
      var o;
      if (t.width === r && t.height === n) return t;
      var i = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document,
        s = i.createElement("canvas");
      s.width = Math.max(1, r), s.height = Math.max(1, n);
      var a = s.getContext("2d");
      return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), s;
    }, e.prototype.renderBackgroundImage = function (t) {
      return KA(this, void 0, void 0, function () {
        var r, n, o, i, s, a;
        return bA(this, function (l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function (u) {
                var c, f, w, I, iA, cA, N, AA, Q, h, I, iA, cA, N, AA, g, U, B, d, p, m, v, C, F, Q, H, I, M, D, N, AA, $A, iA, cA, x, O, k, G, z, VA, kA, qA;
                return bA(this, function (GA) {
                  switch (GA.label) {
                    case 0:
                      if (u.type !== 0) return [3, 5];
                      c = void 0, f = u.url, GA.label = 1;
                    case 1:
                      return GA.trys.push([1, 3,, 4]), [4, o.context.cache.match(f)];
                    case 2:
                      return c = GA.sent(), [3, 4];
                    case 3:
                      return GA.sent(), o.context.logger.error("Error loading background-image " + f), [3, 4];
                    case 4:
                      return c && (w = Al(t, r, [c.width, c.height, c.width / c.height]), I = w[0], iA = w[1], cA = w[2], N = w[3], AA = w[4], Q = o.ctx.createPattern(o.resizeImage(c, N, AA), "repeat"), o.renderRepeat(I, Q, iA, cA)), [3, 6];
                    case 5:
                      gv(u) ? (h = Al(t, r, [null, null, null]), I = h[0], iA = h[1], cA = h[2], N = h[3], AA = h[4], g = cv(u.angle, N, AA), U = g[0], B = g[1], d = g[2], p = g[3], m = g[4], v = document.createElement("canvas"), v.width = N, v.height = AA, C = v.getContext("2d"), F = C.createLinearGradient(B, p, d, m), Pd(u.stops, U).forEach(function (be) {
                        return F.addColorStop(be.stop, yA(be.color));
                      }), C.fillStyle = F, C.fillRect(0, 0, N, AA), N > 0 && AA > 0 && (Q = o.ctx.createPattern(v, "repeat"), o.renderRepeat(I, Q, iA, cA))) : pv(u) && (H = Al(t, r, [null, null, null]), I = H[0], M = H[1], D = H[2], N = H[3], AA = H[4], $A = u.position.length === 0 ? [Xc] : u.position, iA = $($A[0], N), cA = $($A[$A.length - 1], AA), x = fv(u, iA, cA, N, AA), O = x[0], k = x[1], O > 0 && k > 0 && (G = o.ctx.createRadialGradient(M + iA, D + cA, 0, M + iA, D + cA, O), Pd(u.stops, O * 2).forEach(function (be) {
                        return G.addColorStop(be.stop, yA(be.color));
                      }), o.path(I), o.ctx.fillStyle = G, O !== k ? (z = t.bounds.left + .5 * t.bounds.width, VA = t.bounds.top + .5 * t.bounds.height, kA = k / O, qA = 1 / kA, o.ctx.save(), o.ctx.translate(z, VA), o.ctx.transform(1, 0, 0, kA, 0, 0), o.ctx.translate(-z, -VA), o.ctx.fillRect(M, qA * (D - VA) + VA, N, AA * qA), o.ctx.restore()) : o.ctx.fill())), GA.label = 6;
                    case 6:
                      return r--, [2];
                  }
                });
              }, o = this, i = 0, s = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return i < s.length ? (a = s[i], [5, n(a)]) : [3, 4];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [2];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function (t, r, n) {
      return KA(this, void 0, void 0, function () {
        return bA(this, function (o) {
          return this.path(mB(n, r)), this.ctx.fillStyle = yA(t), this.ctx.fill(), [2];
        });
      });
    }, e.prototype.renderDoubleBorder = function (t, r, n, o) {
      return KA(this, void 0, void 0, function () {
        var i, s;
        return bA(this, function (a) {
          switch (a.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, o)] : [3, 2];
            case 1:
              return a.sent(), [2];
            case 2:
              return i = CE(o, n), this.path(i), this.ctx.fillStyle = yA(t), this.ctx.fill(), s = QE(o, n), this.path(s), this.ctx.fill(), [2];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function (t) {
      return KA(this, void 0, void 0, function () {
        var r,
          n,
          o,
          i,
          s,
          a,
          l,
          u,
          c = this;
        return bA(this, function (f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !Tt(r.backgroundColor) || r.backgroundImage.length, o = [{
                style: r.borderTopStyle,
                color: r.borderTopColor,
                width: r.borderTopWidth
              }, {
                style: r.borderRightStyle,
                color: r.borderRightColor,
                width: r.borderRightWidth
              }, {
                style: r.borderBottomStyle,
                color: r.borderBottomColor,
                width: r.borderBottomWidth
              }, {
                style: r.borderLeftStyle,
                color: r.borderLeftColor,
                width: r.borderLeftWidth
              }], i = bE(mr(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Tt(r.backgroundColor) || (this.ctx.fillStyle = yA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function (w) {
                c.ctx.save();
                var h = ms(t.curves),
                  g = w.inset ? 0 : xE,
                  U = wE(h, -g + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (c.path(h), c.ctx.clip(), c.mask(U)) : (c.mask(h), c.ctx.clip(), c.path(U)), c.ctx.shadowOffsetX = w.offsetX.number + g, c.ctx.shadowOffsetY = w.offsetY.number, c.ctx.shadowColor = yA(w.color), c.ctx.shadowBlur = w.blur.number, c.ctx.fillStyle = w.inset ? yA(w.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), f.label = 2;
            case 2:
              s = 0, a = 0, l = o, f.label = 3;
            case 3:
              return a < l.length ? (u = l[a], u.style !== 0 && !Tt(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(u.color, u.width, s, t.curves, 2)] : [3, 11]) : [3, 13];
            case 4:
              return f.sent(), [3, 11];
            case 5:
              return u.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(u.color, u.width, s, t.curves, 3)];
            case 6:
              return f.sent(), [3, 11];
            case 7:
              return u.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(u.color, u.width, s, t.curves)];
            case 8:
              return f.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(u.color, s, t.curves)];
            case 10:
              f.sent(), f.label = 11;
            case 11:
              s++, f.label = 12;
            case 12:
              return a++, [3, 3];
            case 13:
              return [2];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function (t, r, n, o, i) {
      return KA(this, void 0, void 0, function () {
        var s, a, l, u, c, f, w, h, g, U, B, d, p, m, v, C, v, C;
        return bA(this, function (F) {
          return this.ctx.save(), s = yE(o, n), a = mB(o, n), i === 2 && (this.path(a), this.ctx.clip()), ue(a[0]) ? (l = a[0].start.x, u = a[0].start.y) : (l = a[0].x, u = a[0].y), ue(a[1]) ? (c = a[1].end.x, f = a[1].end.y) : (c = a[1].x, f = a[1].y), n === 0 || n === 2 ? w = Math.abs(l - c) : w = Math.abs(u - f), this.ctx.beginPath(), i === 3 ? this.formatPath(s) : this.formatPath(a.slice(0, 2)), h = r < 3 ? r * 3 : r * 2, g = r < 3 ? r * 2 : r, i === 3 && (h = r, g = r), U = !0, w <= h * 2 ? U = !1 : w <= h * 2 + g ? (B = w / (2 * h + g), h *= B, g *= B) : (d = Math.floor((w + g) / (h + g)), p = (w - d * h) / (d - 1), m = (w - (d + 1) * h) / d, g = m <= 0 || Math.abs(g - p) < Math.abs(g - m) ? p : m), U && (i === 3 ? this.ctx.setLineDash([0, h + g]) : this.ctx.setLineDash([h, g])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = yA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (ue(a[0]) && (v = a[3], C = a[0], this.ctx.beginPath(), this.formatPath([new L(v.end.x, v.end.y), new L(C.start.x, C.start.y)]), this.ctx.stroke()), ue(a[1]) && (v = a[1], C = a[2], this.ctx.beginPath(), this.formatPath([new L(v.end.x, v.end.y), new L(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
        });
      });
    }, e.prototype.render = function (t) {
      return KA(this, void 0, void 0, function () {
        var r;
        return bA(this, function (n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = yA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = mE(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(ww),
  LE = function (A) {
    return A instanceof ew || A instanceof Aw ? !0 : A instanceof Yc && A.type !== gs && A.type !== hs;
  },
  bE = function (A, e) {
    switch (A) {
      case 0:
        return ms(e);
      case 2:
        return dE(e);
      case 1:
      default:
        return Cs(e);
    }
  },
  TE = function (A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  OE = ["-apple-system", "system-ui"],
  DE = function (A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function (e) {
      return OE.indexOf(e) === -1;
    }) : A;
  },
  kE = function (A) {
    xe(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function (t) {
      return KA(this, void 0, void 0, function () {
        var r, n;
        return bA(this, function (o) {
          switch (o.label) {
            case 0:
              return r = mu(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, KE(r)];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = yA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(ww),
  KE = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      r.onload = function () {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  },
  RE = function () {
    function A(e) {
      var t = e.id,
        r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Wo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function () {
      return Date.now() - this.start;
    }, A.prototype.info = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Wo([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Wo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Wo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }(),
  _E = function () {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new RE({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new oE(this, e);
    }
    return A.instanceCount = 1, A;
  }(),
  ME = function (A, e) {
    return e === void 0 && (e = {}), NE(A, e);
  };
typeof window < "u" && fw.setContext(window);
var NE = function (A, e) {
    return KA(void 0, void 0, void 0, function () {
      var t, r, n, o, i, s, a, l, u, c, f, w, h, g, U, B, d, p, m, v, F, C, F, Q, H, I, M, D, N, AA, $A, iA, cA, x, O, k, G, z, VA, kA;
      return bA(this, function (qA) {
        switch (qA.label) {
          case 0:
            if (!A || typeof A != "object") return [2, Promise.reject("Invalid element provided as first argument")];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (Q = e.allowTaint) !== null && Q !== void 0 ? Q : !1,
              imageTimeout: (H = e.imageTimeout) !== null && H !== void 0 ? H : 15e3,
              proxy: e.proxy,
              useCORS: (I = e.useCORS) !== null && I !== void 0 ? I : !1
            }, o = nu({
              logging: (M = e.logging) !== null && M !== void 0 ? M : !0,
              cache: e.cache
            }, n), i = {
              windowWidth: (D = e.windowWidth) !== null && D !== void 0 ? D : r.innerWidth,
              windowHeight: (N = e.windowHeight) !== null && N !== void 0 ? N : r.innerHeight,
              scrollX: (AA = e.scrollX) !== null && AA !== void 0 ? AA : r.pageXOffset,
              scrollY: ($A = e.scrollY) !== null && $A !== void 0 ? $A : r.pageYOffset
            }, s = new rt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new _E(o, s), l = (iA = e.foreignObjectRendering) !== null && iA !== void 0 ? iA : !1, u = {
              allowTaint: (cA = e.allowTaint) !== null && cA !== void 0 ? cA : !1,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, a.logger.debug("Starting document clone with size " + s.width + "x" + s.height + " scrolled to " + -s.left + "," + -s.top), c = new gB(a, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, s)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          case 1:
            return w = qA.sent(), h = Zc(f) || PF(f) ? wQ(f.ownerDocument) : Ws(a, f), g = h.width, U = h.height, B = h.left, d = h.top, p = PE(a, f, e.backgroundColor), m = {
              canvas: e.canvas,
              backgroundColor: p,
              scale: (O = (x = e.scale) !== null && x !== void 0 ? x : r.devicePixelRatio) !== null && O !== void 0 ? O : 1,
              x: ((k = e.x) !== null && k !== void 0 ? k : 0) + B,
              y: ((G = e.y) !== null && G !== void 0 ? G : 0) + d,
              width: (z = e.width) !== null && z !== void 0 ? z : Math.ceil(g),
              height: (VA = e.height) !== null && VA !== void 0 ? VA : Math.ceil(U)
            }, l ? (a.logger.debug("Document cloned, using foreign object rendering"), F = new kE(a, m), [4, F.render(f)]) : [3, 3];
          case 2:
            return v = qA.sent(), [3, 5];
          case 3:
            return a.logger.debug("Document cloned, element located at " + B + "," + d + " with size " + g + "x" + U + " using computed rendering"), a.logger.debug("Starting DOM parsing"), C = nw(a, f), p === C.styles.backgroundColor && (C.styles.backgroundColor = $e.TRANSPARENT), a.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new SE(a, m), [4, F.render(C)];
          case 4:
            v = qA.sent(), qA.label = 5;
          case 5:
            return (!((kA = e.removeContainer) !== null && kA !== void 0) || kA) && (gB.destroy(w) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, v];
        }
      });
    });
  },
  PE = function (A, e, t) {
    var r = e.ownerDocument,
      n = r.documentElement ? Wn(A, getComputedStyle(r.documentElement).backgroundColor) : $e.TRANSPARENT,
      o = r.body ? Wn(A, getComputedStyle(r.body).backgroundColor) : $e.TRANSPARENT,
      i = typeof t == "string" ? Wn(A, t) : t === null ? $e.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Tt(n) ? Tt(o) ? i : o : n : i;
  };
function VE(A) {
  return S.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-camera",
    ...A,
    children: [S.jsx("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), S.jsx("path", {
      d: "M5 7h1a2 2 0 002-2 1 1 0 011-1h6a1 1 0 011 1 2 2 0 002 2h1a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2"
    }), S.jsx("path", {
      d: "M9 13a3 3 0 106 0 3 3 0 00-6 0"
    })]
  });
}
const Me = Object.create(null);
Me.open = "0";
Me.close = "1";
Me.ping = "2";
Me.pong = "3";
Me.message = "4";
Me.upgrade = "5";
Me.noop = "6";
const Di = Object.create(null);
Object.keys(Me).forEach(A => {
  Di[Me[A]] = A;
});
const Eu = {
    type: "error",
    data: "parser error"
  },
  mw = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
  Cw = typeof ArrayBuffer == "function",
  Qw = A => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(A) : A && A.buffer instanceof ArrayBuffer,
  $c = ({
    type: A,
    data: e
  }, t, r) => mw && e instanceof Blob ? t ? r(e) : QB(e, r) : Cw && (e instanceof ArrayBuffer || Qw(e)) ? t ? r(e) : QB(new Blob([e]), r) : r(Me[A] + (e || "")),
  QB = (A, e) => {
    const t = new FileReader();
    return t.onload = function () {
      const r = t.result.split(",")[1];
      e("b" + (r || ""));
    }, t.readAsDataURL(A);
  };
function yB(A) {
  return A instanceof Uint8Array ? A : A instanceof ArrayBuffer ? new Uint8Array(A) : new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
}
let el;
function GE(A, e) {
  if (mw && A.data instanceof Blob) return A.data.arrayBuffer().then(yB).then(e);
  if (Cw && (A.data instanceof ArrayBuffer || Qw(A.data))) return e(yB(A.data));
  $c(A, !1, t => {
    el || (el = new TextEncoder()), e(el.encode(t));
  });
}
const vB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  On = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let A = 0; A < vB.length; A++) On[vB.charCodeAt(A)] = A;
const WE = A => {
    let e = A.length * .75,
      t = A.length,
      r,
      n = 0,
      o,
      i,
      s,
      a;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    const l = new ArrayBuffer(e),
      u = new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = On[A.charCodeAt(r)], i = On[A.charCodeAt(r + 1)], s = On[A.charCodeAt(r + 2)], a = On[A.charCodeAt(r + 3)], u[n++] = o << 2 | i >> 4, u[n++] = (i & 15) << 4 | s >> 2, u[n++] = (s & 3) << 6 | a & 63;
    return l;
  },
  XE = typeof ArrayBuffer == "function",
  qc = (A, e) => {
    if (typeof A != "string") return {
      type: "message",
      data: yw(A, e)
    };
    const t = A.charAt(0);
    return t === "b" ? {
      type: "message",
      data: zE(A.substring(1), e)
    } : Di[t] ? A.length > 1 ? {
      type: Di[t],
      data: A.substring(1)
    } : {
      type: Di[t]
    } : Eu;
  },
  zE = (A, e) => {
    if (XE) {
      const t = WE(A);
      return yw(t, e);
    } else return {
      base64: !0,
      data: A
    };
  },
  yw = (A, e) => {
    switch (e) {
      case "blob":
        return A instanceof Blob ? A : new Blob([A]);
      case "arraybuffer":
      default:
        return A instanceof ArrayBuffer ? A : A.buffer;
    }
  },
  vw = "",
  jE = (A, e) => {
    const t = A.length,
      r = new Array(t);
    let n = 0;
    A.forEach((o, i) => {
      $c(o, !1, s => {
        r[i] = s, ++n === t && e(r.join(vw));
      });
    });
  },
  JE = (A, e) => {
    const t = A.split(vw),
      r = [];
    for (let n = 0; n < t.length; n++) {
      const o = qc(t[n], e);
      if (r.push(o), o.type === "error") break;
    }
    return r;
  };
function YE() {
  return new TransformStream({
    transform(A, e) {
      GE(A, t => {
        const r = t.length;
        let n;
        if (r < 126) n = new Uint8Array(1), new DataView(n.buffer).setUint8(0, r);else if (r < 65536) {
          n = new Uint8Array(3);
          const o = new DataView(n.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          n = new Uint8Array(9);
          const o = new DataView(n.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        A.data && typeof A.data != "string" && (n[0] |= 128), e.enqueue(n), e.enqueue(t);
      });
    }
  });
}
let tl;
function Bi(A) {
  return A.reduce((e, t) => e + t.length, 0);
}
function hi(A, e) {
  if (A[0].length === e) return A.shift();
  const t = new Uint8Array(e);
  let r = 0;
  for (let n = 0; n < e; n++) t[n] = A[0][r++], r === A[0].length && (A.shift(), r = 0);
  return A.length && r < A[0].length && (A[0] = A[0].slice(r)), t;
}
function ZE(A, e) {
  tl || (tl = new TextDecoder());
  const t = [];
  let r = 0,
    n = -1,
    o = !1;
  return new TransformStream({
    transform(i, s) {
      for (t.push(i);;) {
        if (r === 0) {
          if (Bi(t) < 1) break;
          const a = hi(t, 1);
          o = (a[0] & 128) === 128, n = a[0] & 127, n < 126 ? r = 3 : n === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Bi(t) < 2) break;
          const a = hi(t, 2);
          n = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Bi(t) < 8) break;
          const a = hi(t, 8),
            l = new DataView(a.buffer, a.byteOffset, a.length),
            u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            s.enqueue(Eu);
            break;
          }
          n = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Bi(t) < n) break;
          const a = hi(t, n);
          s.enqueue(qc(o ? a : tl.decode(a), e)), r = 0;
        }
        if (n === 0 || n > A) {
          s.enqueue(Eu);
          break;
        }
      }
    }
  });
}
const Uw = 4;
function pA(A) {
  if (A) return $E(A);
}
function $E(A) {
  for (var e in pA.prototype) A[e] = pA.prototype[e];
  return A;
}
pA.prototype.on = pA.prototype.addEventListener = function (A, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + A] = this._callbacks["$" + A] || []).push(e), this;
};
pA.prototype.once = function (A, e) {
  function t() {
    this.off(A, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(A, t), this;
};
pA.prototype.off = pA.prototype.removeListener = pA.prototype.removeAllListeners = pA.prototype.removeEventListener = function (A, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
  var t = this._callbacks["$" + A];
  if (!t) return this;
  if (arguments.length == 1) return delete this._callbacks["$" + A], this;
  for (var r, n = 0; n < t.length; n++) if (r = t[n], r === e || r.fn === e) {
    t.splice(n, 1);
    break;
  }
  return t.length === 0 && delete this._callbacks["$" + A], this;
};
pA.prototype.emit = function (A) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + A], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  if (t) {
    t = t.slice(0);
    for (var r = 0, n = t.length; r < n; ++r) t[r].apply(this, e);
  }
  return this;
};
pA.prototype.emitReserved = pA.prototype.emit;
pA.prototype.listeners = function (A) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + A] || [];
};
pA.prototype.hasListeners = function (A) {
  return !!this.listeners(A).length;
};
const ce = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Fw(A, ...e) {
  return e.reduce((t, r) => (A.hasOwnProperty(r) && (t[r] = A[r]), t), {});
}
const qE = ce.setTimeout,
  A1 = ce.clearTimeout;
function ea(A, e) {
  e.useNativeTimers ? (A.setTimeoutFn = qE.bind(ce), A.clearTimeoutFn = A1.bind(ce)) : (A.setTimeoutFn = ce.setTimeout.bind(ce), A.clearTimeoutFn = ce.clearTimeout.bind(ce));
}
const e1 = 1.33;
function t1(A) {
  return typeof A == "string" ? r1(A) : Math.ceil((A.byteLength || A.size) * e1);
}
function r1(A) {
  let e = 0,
    t = 0;
  for (let r = 0, n = A.length; r < n; r++) e = A.charCodeAt(r), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function n1(A) {
  let e = "";
  for (let t in A) A.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(A[t]));
  return e;
}
function o1(A) {
  let e = {},
    t = A.split("&");
  for (let r = 0, n = t.length; r < n; r++) {
    let o = t[r].split("=");
    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return e;
}
class i1 extends Error {
  constructor(e, t, r) {
    super(e), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class Af extends pA {
  constructor(e) {
    super(), this.writable = !1, ea(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
  }
  onError(e, t, r) {
    return super.emitReserved("error", new i1(e, t, r)), this;
  }
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  onData(e) {
    const t = qc(e, this.socket.binaryType);
    this.onPacket(t);
  }
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  pause(e) {}
  createUri(e, t = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const t = n1(e);
    return t.length ? "?" + t : "";
  }
}
const Ew = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  Hu = 64,
  s1 = {};
let UB = 0,
  gi = 0,
  FB;
function EB(A) {
  let e = "";
  do e = Ew[A % Hu] + e, A = Math.floor(A / Hu); while (A > 0);
  return e;
}
function Hw() {
  const A = EB(+new Date());
  return A !== FB ? (UB = 0, FB = A) : A + "." + EB(UB++);
}
for (; gi < Hu; gi++) s1[Ew[gi]] = gi;
let Iw = !1;
try {
  Iw = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const a1 = Iw;
function xw(A) {
  const e = A.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || a1)) return new XMLHttpRequest();
  } catch {}
  if (!e) try {
    return new ce[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
  } catch {}
}
function l1() {}
const u1 = function () {
  return new xw({
    xdomain: !1
  }).responseType != null;
}();
class c1 extends Af {
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
    const t = e && e.forceBase64;
    this.supportsBinary = u1 && !t, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(e) {
    this.readyState = "pausing";
    const t = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling && (r++, this.once("pollComplete", function () {
        --r || t();
      })), this.writable || (r++, this.once("drain", function () {
        --r || t();
      }));
    } else t();
  }
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  onData(e) {
    const t = r => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({
        description: "transport closed by the server"
      }), !1;
      this.onPacket(r);
    };
    JE(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  doClose() {
    const e = () => {
      this.write([{
        type: "close"
      }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  write(e) {
    this.writable = !1, jE(e, t => {
      this.doWrite(t, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  uri() {
    const e = this.opts.secure ? "https" : "http",
      t = this.query || {};
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Hw()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
  request(e = {}) {
    return Object.assign(e, {
      xd: this.xd,
      cookieJar: this.cookieJar
    }, this.opts), new Nr(this.uri(), e);
  }
  doWrite(e, t) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", t), r.on("error", (n, o) => {
      this.onError("xhr post error", n, o);
    });
  }
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (t, r) => {
      this.onError("xhr poll error", t, r);
    }), this.pollXhr = e;
  }
}
let Nr = class ki extends pA {
  constructor(e, t) {
    super(), ea(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  create() {
    var e;
    const t = Fw(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd;
    const r = this.xhr = new xw(t);
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let n in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(n) && r.setRequestHeader(n, this.opts.extraHeaders[n]);
        }
      } catch {}
      if (this.method === "POST") try {
        r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
      } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        var n;
        r.readyState === 3 && ((n = this.opts.cookieJar) === null || n === void 0 || n.parseCookies(r)), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this.onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = ki.requestsCount++, ki.requests[this.index] = this);
  }
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = l1, e) try {
        this.xhr.abort();
      } catch {}
      typeof document < "u" && delete ki.requests[this.index], this.xhr = null;
    }
  }
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  abort() {
    this.cleanup();
  }
};
Nr.requestsCount = 0;
Nr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", HB);else if (typeof addEventListener == "function") {
    const A = "onpagehide" in ce ? "pagehide" : "unload";
    addEventListener(A, HB, !1);
  }
}
function HB() {
  for (let A in Nr.requests) Nr.requests.hasOwnProperty(A) && Nr.requests[A].abort();
}
const ef = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, t) => t(e, 0),
  pi = ce.WebSocket || ce.MozWebSocket,
  IB = !0,
  f1 = "arraybuffer",
  xB = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class d1 extends Af {
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const e = this.uri(),
      t = this.opts.protocols,
      r = xB ? {} : Fw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = IB && !xB ? t ? new pi(e, t) : new pi(e) : new pi(e, t, r);
    } catch (n) {
      return this.emitReserved("error", n);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = e => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const r = e[t],
        n = t === e.length - 1;
      $c(r, this.supportsBinary, o => {
        const i = {};
        try {
          IB && this.ws.send(o);
        } catch {}
        n && ef(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  uri() {
    const e = this.opts.secure ? "wss" : "ws",
      t = this.query || {};
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Hw()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
  check() {
    return !!pi;
  }
}
class B1 extends Af {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch(e => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then(e => {
        const t = ZE(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
          r = e.readable.pipeThrough(t).getReader(),
          n = YE();
        n.readable.pipeTo(e.writable), this.writer = n.writable.getWriter();
        const o = () => {
          r.read().then(({
            done: s,
            value: a
          }) => {
            s || (this.onPacket(a), o());
          }).catch(s => {});
        };
        o();
        const i = {
          type: "open"
        };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this.writer.write(i).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const r = e[t],
        n = t === e.length - 1;
      this.writer.write(r).then(() => {
        n && ef(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const h1 = {
    websocket: d1,
    webtransport: B1,
    polling: c1
  },
  g1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  p1 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Iu(A) {
  if (A.length > 2e3) throw "URI too long";
  const e = A,
    t = A.indexOf("["),
    r = A.indexOf("]");
  t != -1 && r != -1 && (A = A.substring(0, t) + A.substring(t, r).replace(/:/g, ";") + A.substring(r, A.length));
  let n = g1.exec(A || ""),
    o = {},
    i = 14;
  for (; i--;) o[p1[i]] = n[i] || "";
  return t != -1 && r != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = w1(o, o.path), o.queryKey = m1(o, o.query), o;
}
function w1(A, e) {
  const t = /\/{2,9}/g,
    r = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function m1(A, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, n, o) {
    n && (t[n] = o);
  }), t;
}
let Sw = class Cr extends pA {
  constructor(e, t = {}) {
    super(), this.binaryType = f1, this.writeBuffer = [], e && typeof e == "object" && (t = e, e = null), e ? (e = Iu(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = Iu(t.host).host), ea(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = o1(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  createTransport(e) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = Uw, t.transport = e, this.id && (t.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new h1[e](r);
  }
  open() {
    let e;
    if (this.opts.rememberUpgrade && Cr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", t => this.onClose("transport close", t));
  }
  probe(e) {
    let t = this.createTransport(e),
      r = !1;
    Cr.priorWebsocketSuccess = !1;
    const n = () => {
      r || (t.send([{
        type: "ping",
        data: "probe"
      }]), t.once("packet", c => {
        if (!r) if (c.type === "pong" && c.data === "probe") {
          if (this.upgrading = !0, this.emitReserved("upgrading", t), !t) return;
          Cr.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
            r || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{
              type: "upgrade"
            }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
          });
        } else {
          const f = new Error("probe error");
          f.transport = t.name, this.emitReserved("upgradeError", f);
        }
      }));
    };
    function o() {
      r || (r = !0, u(), t.close(), t = null);
    }
    const i = c => {
      const f = new Error("probe error: " + c);
      f.transport = t.name, o(), this.emitReserved("upgradeError", f);
    };
    function s() {
      i("transport closed");
    }
    function a() {
      i("socket closed");
    }
    function l(c) {
      t && c.name !== t.name && o();
    }
    const u = () => {
      t.removeListener("open", n), t.removeListener("error", i), t.removeListener("close", s), this.off("close", a), this.off("upgrading", l);
    };
    t.once("open", n), t.once("error", i), t.once("close", s), this.once("close", a), this.once("upgrading", l), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || t.open();
    }, 200) : t.open();
  }
  onOpen() {
    if (this.readyState = "open", Cr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const t = this.upgrades.length;
      for (; e < t; e++) this.probe(this.upgrades[e]);
    }
  }
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
      case "open":
        this.onHandshake(JSON.parse(e.data));
        break;
      case "ping":
        this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
        break;
      case "error":
        const t = new Error("server error");
        t.code = e.data, this.onError(t);
        break;
      case "message":
        this.emitReserved("data", e.data), this.emitReserved("message", e.data);
        break;
    }
  }
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
    let t = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const n = this.writeBuffer[r].data;
      if (n && (t += t1(n)), r > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, r);
      t += 2;
    }
    return this.writeBuffer;
  }
  write(e, t, r) {
    return this.sendPacket("message", e, t, r), this;
  }
  send(e, t, r) {
    return this.sendPacket("message", e, t, r), this;
  }
  sendPacket(e, t, r, n) {
    if (typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
    r = r || {}, r.compress = r.compress !== !1;
    const o = {
      type: e,
      data: t,
      options: r
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
  }
  close() {
    const e = () => {
        this.onClose("forced close"), this.transport.close();
      },
      t = () => {
        this.off("upgrade", t), this.off("upgradeError", t), e();
      },
      r = () => {
        this.once("upgrade", t), this.once("upgradeError", t);
      };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  onError(e) {
    Cr.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  onClose(e, t) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  filterUpgrades(e) {
    const t = [];
    let r = 0;
    const n = e.length;
    for (; r < n; r++) ~this.transports.indexOf(e[r]) && t.push(e[r]);
    return t;
  }
};
Sw.protocol = Uw;
function C1(A, e = "", t) {
  let r = A;
  t = t || typeof location < "u" && location, A == null && (A = t.protocol + "//" + t.host), typeof A == "string" && (A.charAt(0) === "/" && (A.charAt(1) === "/" ? A = t.protocol + A : A = t.host + A), /^(https?|wss?):\/\//.test(A) || (typeof t < "u" ? A = t.protocol + "//" + A : A = "https://" + A), r = Iu(A)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const Q1 = typeof ArrayBuffer == "function",
  y1 = A => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(A) : A.buffer instanceof ArrayBuffer,
  Lw = Object.prototype.toString,
  v1 = typeof Blob == "function" || typeof Blob < "u" && Lw.call(Blob) === "[object BlobConstructor]",
  U1 = typeof File == "function" || typeof File < "u" && Lw.call(File) === "[object FileConstructor]";
function tf(A) {
  return Q1 && (A instanceof ArrayBuffer || y1(A)) || v1 && A instanceof Blob || U1 && A instanceof File;
}
function Ki(A, e) {
  if (!A || typeof A != "object") return !1;
  if (Array.isArray(A)) {
    for (let t = 0, r = A.length; t < r; t++) if (Ki(A[t])) return !0;
    return !1;
  }
  if (tf(A)) return !0;
  if (A.toJSON && typeof A.toJSON == "function" && arguments.length === 1) return Ki(A.toJSON(), !0);
  for (const t in A) if (Object.prototype.hasOwnProperty.call(A, t) && Ki(A[t])) return !0;
  return !1;
}
function F1(A) {
  const e = [],
    t = A.data,
    r = A;
  return r.data = xu(t, e), r.attachments = e.length, {
    packet: r,
    buffers: e
  };
}
function xu(A, e) {
  if (!A) return A;
  if (tf(A)) {
    const t = {
      _placeholder: !0,
      num: e.length
    };
    return e.push(A), t;
  } else if (Array.isArray(A)) {
    const t = new Array(A.length);
    for (let r = 0; r < A.length; r++) t[r] = xu(A[r], e);
    return t;
  } else if (typeof A == "object" && !(A instanceof Date)) {
    const t = {};
    for (const r in A) Object.prototype.hasOwnProperty.call(A, r) && (t[r] = xu(A[r], e));
    return t;
  }
  return A;
}
function E1(A, e) {
  return A.data = Su(A.data, e), delete A.attachments, A;
}
function Su(A, e) {
  if (!A) return A;
  if (A && A._placeholder === !0) {
    if (typeof A.num == "number" && A.num >= 0 && A.num < e.length) return e[A.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(A)) for (let t = 0; t < A.length; t++) A[t] = Su(A[t], e);else if (typeof A == "object") for (const t in A) Object.prototype.hasOwnProperty.call(A, t) && (A[t] = Su(A[t], e));
  return A;
}
const H1 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
  I1 = 5;
var W;
(function (A) {
  A[A.CONNECT = 0] = "CONNECT", A[A.DISCONNECT = 1] = "DISCONNECT", A[A.EVENT = 2] = "EVENT", A[A.ACK = 3] = "ACK", A[A.CONNECT_ERROR = 4] = "CONNECT_ERROR", A[A.BINARY_EVENT = 5] = "BINARY_EVENT", A[A.BINARY_ACK = 6] = "BINARY_ACK";
})(W || (W = {}));
class x1 {
  constructor(e) {
    this.replacer = e;
  }
  encode(e) {
    return (e.type === W.EVENT || e.type === W.ACK) && Ki(e) ? this.encodeAsBinary({
      type: e.type === W.EVENT ? W.BINARY_EVENT : W.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  encodeAsString(e) {
    let t = "" + e.type;
    return (e.type === W.BINARY_EVENT || e.type === W.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  encodeAsBinary(e) {
    const t = F1(e),
      r = this.encodeAsString(t.packet),
      n = t.buffers;
    return n.unshift(r), n;
  }
}
function SB(A) {
  return Object.prototype.toString.call(A) === "[object Object]";
}
class rf extends pA {
  constructor(e) {
    super(), this.reviver = e;
  }
  add(e) {
    let t;
    if (typeof e == "string") {
      if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(e);
      const r = t.type === W.BINARY_EVENT;
      r || t.type === W.BINARY_ACK ? (t.type = r ? W.EVENT : W.ACK, this.reconstructor = new S1(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (tf(e) || e.base64) {
      if (this.reconstructor) t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));else throw new Error("got binary data when not reconstructing a packet");
    } else throw new Error("Unknown type: " + e);
  }
  decodeString(e) {
    let t = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (W[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === W.BINARY_EVENT || r.type === W.BINARY_ACK) {
      const o = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length;);
      const i = e.substring(o, t);
      if (i != Number(i) || e.charAt(t) !== "-") throw new Error("Illegal attachments");
      r.attachments = Number(i);
    }
    if (e.charAt(t + 1) === "/") {
      const o = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length););
      r.nsp = e.substring(o, t);
    } else r.nsp = "/";
    const n = e.charAt(t + 1);
    if (n !== "" && Number(n) == n) {
      const o = t + 1;
      for (; ++t;) {
        const i = e.charAt(t);
        if (i == null || Number(i) != i) {
          --t;
          break;
        }
        if (t === e.length) break;
      }
      r.id = Number(e.substring(o, t + 1));
    }
    if (e.charAt(++t)) {
      const o = this.tryParse(e.substr(t));
      if (rf.isPayloadValid(r.type, o)) r.data = o;else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, t) {
    switch (e) {
      case W.CONNECT:
        return SB(t);
      case W.DISCONNECT:
        return t === void 0;
      case W.CONNECT_ERROR:
        return typeof t == "string" || SB(t);
      case W.EVENT:
      case W.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && H1.indexOf(t[0]) === -1);
      case W.ACK:
      case W.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class S1 {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const t = E1(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const L1 = Object.freeze(Object.defineProperty({
  __proto__: null,
  Decoder: rf,
  Encoder: x1,
  get PacketType() {
    return W;
  },
  protocol: I1
}, Symbol.toStringTag, {
  value: "Module"
}));
function ve(A, e, t) {
  return A.on(e, t), function () {
    A.off(e, t);
  };
}
const b1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
class bw extends pA {
  constructor(e, t, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const e = this.io;
    this.subs = [ve(e, "open", this.onopen.bind(this)), ve(e, "packet", this.onpacket.bind(this)), ve(e, "error", this.onerror.bind(this)), ve(e, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  open() {
    return this.connect();
  }
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  emit(e, ...t) {
    if (b1.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t), this;
    const r = {
      type: W.EVENT,
      data: t
    };
    if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const i = this.ids++,
        s = t.pop();
      this._registerAckCallback(i, s), r.id = i;
    }
    const n = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!n || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this;
  }
  _registerAckCallback(e, t) {
    var r;
    const n = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (n === void 0) {
      this.acks[e] = t;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[e];
        for (let s = 0; s < this.sendBuffer.length; s++) this.sendBuffer[s].id === e && this.sendBuffer.splice(s, 1);
        t.call(this, new Error("operation has timed out"));
      }, n),
      i = (...s) => {
        this.io.clearTimeoutFn(o), t.apply(this, s);
      };
    i.withError = !0, this.acks[e] = i;
  }
  emitWithAck(e, ...t) {
    return new Promise((r, n) => {
      const o = (i, s) => i ? n(i) : r(s);
      o.withError = !0, t.push(o), this.emit(e, ...t);
    });
  }
  _addToQueue(e) {
    let t;
    typeof e[e.length - 1] == "function" && (t = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({
        fromQueue: !0
      }, this.flags)
    };
    e.push((n, ...o) => r !== this._queue[0] ? void 0 : (n !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(n)) : (this._queue.shift(), t && t(null, ...o)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const t = this._queue[0];
    t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
  }
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  onopen() {
    typeof this.auth == "function" ? this.auth(e => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(e) {
    this.packet({
      type: W.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, e) : e
    });
  }
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  onclose(e, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach(e => {
      if (!this.sendBuffer.some(r => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(e) {
    if (e.nsp === this.nsp) switch (e.type) {
      case W.CONNECT:
        e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        break;
      case W.EVENT:
      case W.BINARY_EVENT:
        this.onevent(e);
        break;
      case W.ACK:
      case W.BINARY_ACK:
        this.onack(e);
        break;
      case W.DISCONNECT:
        this.ondisconnect();
        break;
      case W.CONNECT_ERROR:
        this.destroy();
        const r = new Error(e.data.message);
        r.data = e.data.data, this.emitReserved("connect_error", r);
        break;
    }
  }
  onevent(e) {
    const t = e.data || [];
    e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const r of t) r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  ack(e) {
    const t = this;
    let r = !1;
    return function (...n) {
      r || (r = !0, t.packet({
        type: W.ACK,
        id: e,
        data: n
      }));
    };
  }
  onack(e) {
    const t = this.acks[e.id];
    typeof t == "function" && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data));
  }
  onconnect(e, t) {
    this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this);
  }
  disconnect() {
    return this.connected && this.packet({
      type: W.DISCONNECT
    }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  close() {
    return this.disconnect();
  }
  compress(e) {
    return this.flags.compress = e, this;
  }
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  offAny(e) {
    if (!this._anyListeners) return this;
    if (e) {
      const t = this._anyListeners;
      for (let r = 0; r < t.length; r++) if (e === t[r]) return t.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners) return this;
    if (e) {
      const t = this._anyOutgoingListeners;
      for (let r = 0; r < t.length; r++) if (e === t[r]) return t.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const r of t) r.apply(this, e.data);
    }
  }
}
function en(A) {
  A = A || {}, this.ms = A.min || 100, this.max = A.max || 1e4, this.factor = A.factor || 2, this.jitter = A.jitter > 0 && A.jitter <= 1 ? A.jitter : 0, this.attempts = 0;
}
en.prototype.duration = function () {
  var A = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(),
      t = Math.floor(e * this.jitter * A);
    A = Math.floor(e * 10) & 1 ? A + t : A - t;
  }
  return Math.min(A, this.max) | 0;
};
en.prototype.reset = function () {
  this.attempts = 0;
};
en.prototype.setMin = function (A) {
  this.ms = A;
};
en.prototype.setMax = function (A) {
  this.max = A;
};
en.prototype.setJitter = function (A) {
  this.jitter = A;
};
class Lu extends pA {
  constructor(e, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, ea(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new en({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const n = t.parser || L1;
    this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var t;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this);
  }
  randomizationFactor(e) {
    var t;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var t;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  open(e) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Sw(this.uri, this.opts);
    const t = this.engine,
      r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const n = ve(t, "open", function () {
        r.onopen(), e && e();
      }),
      o = s => {
        this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), e ? e(s) : this.maybeReconnectOnOpen();
      },
      i = ve(t, "error", o);
    if (this._timeout !== !1) {
      const s = this._timeout,
        a = this.setTimeoutFn(() => {
          n(), o(new Error("timeout")), t.close();
        }, s);
      this.opts.autoUnref && a.unref(), this.subs.push(() => {
        this.clearTimeoutFn(a);
      });
    }
    return this.subs.push(n), this.subs.push(i), this;
  }
  connect(e) {
    return this.open(e);
  }
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(ve(e, "ping", this.onping.bind(this)), ve(e, "data", this.ondata.bind(this)), ve(e, "error", this.onerror.bind(this)), ve(e, "close", this.onclose.bind(this)), ve(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  ondecoded(e) {
    ef(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  onerror(e) {
    this.emitReserved("error", e);
  }
  socket(e, t) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new bw(this, e, t), this.nsps[e] = r), r;
  }
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const r of t) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(e) {
    const t = this.encoder.encode(e);
    for (let r = 0; r < t.length; r++) this.engine.write(t[r], e.options);
  }
  cleanup() {
    this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(e, t) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(n => {
          n ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", n)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const mn = {};
function Ri(A, e) {
  typeof A == "object" && (e = A, A = void 0), e = e || {};
  const t = C1(A, e.path || "/socket.io"),
    r = t.source,
    n = t.id,
    o = t.path,
    i = mn[n] && o in mn[n].nsps,
    s = e.forceNew || e["force new connection"] || e.multiplex === !1 || i;
  let a;
  return s ? a = new Lu(r, e) : (mn[n] || (mn[n] = new Lu(r, e)), a = mn[n]), t.query && !e.query && (e.query = t.queryKey), a.socket(t.path, e);
}
Object.assign(Ri, {
  Manager: Lu,
  Socket: bw,
  io: Ri,
  connect: Ri
});
const T1 = "https://api.newchat.fb704.com.br",
  at = Ri(T1);
function Tw(A, e) {
  return function () {
    return A.apply(e, arguments);
  };
}
const {
    toString: O1
  } = Object.prototype,
  {
    getPrototypeOf: nf
  } = Object,
  ta = (A => e => {
    const t = O1.call(e);
    return A[t] || (A[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Se = A => (A = A.toLowerCase(), e => ta(e) === A),
  ra = A => e => typeof e === A,
  {
    isArray: tn
  } = Array,
  go = ra("undefined");
function D1(A) {
  return A !== null && !go(A) && A.constructor !== null && !go(A.constructor) && ge(A.constructor.isBuffer) && A.constructor.isBuffer(A);
}
const Ow = Se("ArrayBuffer");
function k1(A) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(A) : e = A && A.buffer && Ow(A.buffer), e;
}
const K1 = ra("string"),
  ge = ra("function"),
  Dw = ra("number"),
  na = A => A !== null && typeof A == "object",
  R1 = A => A === !0 || A === !1,
  _i = A => {
    if (ta(A) !== "object") return !1;
    const e = nf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  },
  _1 = Se("Date"),
  M1 = Se("File"),
  N1 = Se("Blob"),
  P1 = Se("FileList"),
  V1 = A => na(A) && ge(A.pipe),
  G1 = A => {
    let e;
    return A && (typeof FormData == "function" && A instanceof FormData || ge(A.append) && ((e = ta(A)) === "formdata" || e === "object" && ge(A.toString) && A.toString() === "[object FormData]"));
  },
  W1 = Se("URLSearchParams"),
  [X1, z1, j1, J1] = ["ReadableStream", "Request", "Response", "Headers"].map(Se),
  Y1 = A => A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fo(A, e, {
  allOwnKeys: t = !1
} = {}) {
  if (A === null || typeof A > "u") return;
  let r, n;
  if (typeof A != "object" && (A = [A]), tn(A)) for (r = 0, n = A.length; r < n; r++) e.call(null, A[r], r, A);else {
    const o = t ? Object.getOwnPropertyNames(A) : Object.keys(A),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) s = o[r], e.call(null, A[s], s, A);
  }
}
function kw(A, e) {
  e = e.toLowerCase();
  const t = Object.keys(A);
  let r = t.length,
    n;
  for (; r-- > 0;) if (n = t[r], e === n.toLowerCase()) return n;
  return null;
}
const Kw = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
  Rw = A => !go(A) && A !== Kw;
function bu() {
  const {
      caseless: A
    } = Rw(this) && this || {},
    e = {},
    t = (r, n) => {
      const o = A && kw(e, n) || n;
      _i(e[o]) && _i(r) ? e[o] = bu(e[o], r) : _i(r) ? e[o] = bu({}, r) : tn(r) ? e[o] = r.slice() : e[o] = r;
    };
  for (let r = 0, n = arguments.length; r < n; r++) arguments[r] && Fo(arguments[r], t);
  return e;
}
const Z1 = (A, e, t, {
    allOwnKeys: r
  } = {}) => (Fo(e, (n, o) => {
    t && ge(n) ? A[o] = Tw(n, t) : A[o] = n;
  }, {
    allOwnKeys: r
  }), A),
  $1 = A => (A.charCodeAt(0) === 65279 && (A = A.slice(1)), A),
  q1 = (A, e, t, r) => {
    A.prototype = Object.create(e.prototype, r), A.prototype.constructor = A, Object.defineProperty(A, "super", {
      value: e.prototype
    }), t && Object.assign(A.prototype, t);
  },
  AH = (A, e, t, r) => {
    let n, o, i;
    const s = {};
    if (e = e || {}, A == null) return e;
    do {
      for (n = Object.getOwnPropertyNames(A), o = n.length; o-- > 0;) i = n[o], (!r || r(i, A, e)) && !s[i] && (e[i] = A[i], s[i] = !0);
      A = t !== !1 && nf(A);
    } while (A && (!t || t(A, e)) && A !== Object.prototype);
    return e;
  },
  eH = (A, e, t) => {
    A = String(A), (t === void 0 || t > A.length) && (t = A.length), t -= e.length;
    const r = A.indexOf(e, t);
    return r !== -1 && r === t;
  },
  tH = A => {
    if (!A) return null;
    if (tn(A)) return A;
    let e = A.length;
    if (!Dw(e)) return null;
    const t = new Array(e);
    for (; e-- > 0;) t[e] = A[e];
    return t;
  },
  rH = (A => e => A && e instanceof A)(typeof Uint8Array < "u" && nf(Uint8Array)),
  nH = (A, e) => {
    const r = (A && A[Symbol.iterator]).call(A);
    let n;
    for (; (n = r.next()) && !n.done;) {
      const o = n.value;
      e.call(A, o[0], o[1]);
    }
  },
  oH = (A, e) => {
    let t;
    const r = [];
    for (; (t = A.exec(e)) !== null;) r.push(t);
    return r;
  },
  iH = Se("HTMLFormElement"),
  sH = A => A.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, r, n) {
    return r.toUpperCase() + n;
  }),
  LB = (({
    hasOwnProperty: A
  }) => (e, t) => A.call(e, t))(Object.prototype),
  aH = Se("RegExp"),
  _w = (A, e) => {
    const t = Object.getOwnPropertyDescriptors(A),
      r = {};
    Fo(t, (n, o) => {
      let i;
      (i = e(n, o, A)) !== !1 && (r[o] = i || n);
    }), Object.defineProperties(A, r);
  },
  lH = A => {
    _w(A, (e, t) => {
      if (ge(A) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
      const r = A[t];
      if (ge(r)) {
        if (e.enumerable = !1, "writable" in e) {
          e.writable = !1;
          return;
        }
        e.set || (e.set = () => {
          throw Error("Can not rewrite read-only method '" + t + "'");
        });
      }
    });
  },
  uH = (A, e) => {
    const t = {},
      r = n => {
        n.forEach(o => {
          t[o] = !0;
        });
      };
    return tn(A) ? r(A) : r(String(A).split(e)), t;
  },
  cH = () => {},
  fH = (A, e) => A != null && Number.isFinite(A = +A) ? A : e,
  rl = "abcdefghijklmnopqrstuvwxyz",
  bB = "0123456789",
  Mw = {
    DIGIT: bB,
    ALPHA: rl,
    ALPHA_DIGIT: rl + rl.toUpperCase() + bB
  },
  dH = (A = 16, e = Mw.ALPHA_DIGIT) => {
    let t = "";
    const {
      length: r
    } = e;
    for (; A--;) t += e[Math.random() * r | 0];
    return t;
  };
function BH(A) {
  return !!(A && ge(A.append) && A[Symbol.toStringTag] === "FormData" && A[Symbol.iterator]);
}
const hH = A => {
    const e = new Array(10),
      t = (r, n) => {
        if (na(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[n] = r;
            const o = tn(r) ? [] : {};
            return Fo(r, (i, s) => {
              const a = t(i, n + 1);
              !go(a) && (o[s] = a);
            }), e[n] = void 0, o;
          }
        }
        return r;
      };
    return t(A, 0);
  },
  gH = Se("AsyncFunction"),
  pH = A => A && (na(A) || ge(A)) && ge(A.then) && ge(A.catch),
  y = {
    isArray: tn,
    isArrayBuffer: Ow,
    isBuffer: D1,
    isFormData: G1,
    isArrayBufferView: k1,
    isString: K1,
    isNumber: Dw,
    isBoolean: R1,
    isObject: na,
    isPlainObject: _i,
    isReadableStream: X1,
    isRequest: z1,
    isResponse: j1,
    isHeaders: J1,
    isUndefined: go,
    isDate: _1,
    isFile: M1,
    isBlob: N1,
    isRegExp: aH,
    isFunction: ge,
    isStream: V1,
    isURLSearchParams: W1,
    isTypedArray: rH,
    isFileList: P1,
    forEach: Fo,
    merge: bu,
    extend: Z1,
    trim: Y1,
    stripBOM: $1,
    inherits: q1,
    toFlatObject: AH,
    kindOf: ta,
    kindOfTest: Se,
    endsWith: eH,
    toArray: tH,
    forEachEntry: nH,
    matchAll: oH,
    isHTMLForm: iH,
    hasOwnProperty: LB,
    hasOwnProp: LB,
    reduceDescriptors: _w,
    freezeMethods: lH,
    toObjectSet: uH,
    toCamelCase: sH,
    noop: cH,
    toFiniteNumber: fH,
    findKey: kw,
    global: Kw,
    isContextDefined: Rw,
    ALPHABET: Mw,
    generateString: dH,
    isSpecCompliantForm: BH,
    toJSONObject: hH,
    isAsyncFn: gH,
    isThenable: pH
  };
function R(A, e, t, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = A, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), r && (this.request = r), n && (this.response = n);
}
y.inherits(R, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Nw = R.prototype,
  Pw = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(A => {
  Pw[A] = {
    value: A
  };
});
Object.defineProperties(R, Pw);
Object.defineProperty(Nw, "isAxiosError", {
  value: !0
});
R.from = (A, e, t, r, n, o) => {
  const i = Object.create(Nw);
  return y.toFlatObject(A, i, function (a) {
    return a !== Error.prototype;
  }, s => s !== "isAxiosError"), R.call(i, A.message, e, t, r, n), i.cause = A, i.name = A.name, o && Object.assign(i, o), i;
};
const wH = null;
function Tu(A) {
  return y.isPlainObject(A) || y.isArray(A);
}
function Vw(A) {
  return y.endsWith(A, "[]") ? A.slice(0, -2) : A;
}
function TB(A, e, t) {
  return A ? A.concat(e).map(function (n, o) {
    return n = Vw(n), !t && o ? "[" + n + "]" : n;
  }).join(t ? "." : "") : e;
}
function mH(A) {
  return y.isArray(A) && !A.some(Tu);
}
const CH = y.toFlatObject(y, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function oa(A, e, t) {
  if (!y.isObject(A)) throw new TypeError("target must be an object");
  e = e || new FormData(), t = y.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function (g, U) {
    return !y.isUndefined(U[g]);
  });
  const r = t.metaTokens,
    n = t.visitor || u,
    o = t.dots,
    i = t.indexes,
    a = (t.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(e);
  if (!y.isFunction(n)) throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (y.isDate(h)) return h.toISOString();
    if (!a && y.isBlob(h)) throw new R("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(h) || y.isTypedArray(h) ? a && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, g, U) {
    let B = h;
    if (h && !U && typeof h == "object") {
      if (y.endsWith(g, "{}")) g = r ? g : g.slice(0, -2), h = JSON.stringify(h);else if (y.isArray(h) && mH(h) || (y.isFileList(h) || y.endsWith(g, "[]")) && (B = y.toArray(h))) return g = Vw(g), B.forEach(function (p, m) {
        !(y.isUndefined(p) || p === null) && e.append(i === !0 ? TB([g], m, o) : i === null ? g : g + "[]", l(p));
      }), !1;
    }
    return Tu(h) ? !0 : (e.append(TB(U, g, o), l(h)), !1);
  }
  const c = [],
    f = Object.assign(CH, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: Tu
    });
  function w(h, g) {
    if (!y.isUndefined(h)) {
      if (c.indexOf(h) !== -1) throw Error("Circular reference detected in " + g.join("."));
      c.push(h), y.forEach(h, function (B, d) {
        (!(y.isUndefined(B) || B === null) && n.call(e, B, y.isString(d) ? d.trim() : d, g, f)) === !0 && w(B, g ? g.concat(d) : [d]);
      }), c.pop();
    }
  }
  if (!y.isObject(A)) throw new TypeError("data must be an object");
  return w(A), e;
}
function OB(A) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function of(A, e) {
  this._pairs = [], A && oa(A, this, e);
}
const Gw = of.prototype;
Gw.append = function (e, t) {
  this._pairs.push([e, t]);
};
Gw.toString = function (e) {
  const t = e ? function (r) {
    return e.call(this, r, OB);
  } : OB;
  return this._pairs.map(function (n) {
    return t(n[0]) + "=" + t(n[1]);
  }, "").join("&");
};
function QH(A) {
  return encodeURIComponent(A).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ww(A, e, t) {
  if (!e) return A;
  const r = t && t.encode || QH,
    n = t && t.serialize;
  let o;
  if (n ? o = n(e, t) : o = y.isURLSearchParams(e) ? e.toString() : new of(e, t).toString(r), o) {
    const i = A.indexOf("#");
    i !== -1 && (A = A.slice(0, i)), A += (A.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return A;
}
class DB {
  constructor() {
    this.handlers = [];
  }
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    y.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const Xw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  yH = typeof URLSearchParams < "u" ? URLSearchParams : of,
  vH = typeof FormData < "u" ? FormData : null,
  UH = typeof Blob < "u" ? Blob : null,
  FH = {
    isBrowser: !0,
    classes: {
      URLSearchParams: yH,
      FormData: vH,
      Blob: UH
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  },
  sf = typeof window < "u" && typeof document < "u",
  EH = (A => sf && ["ReactNative", "NativeScript", "NS"].indexOf(A) < 0)(typeof navigator < "u" && navigator.product),
  HH = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
  IH = sf && window.location.href || "http://localhost",
  xH = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: sf,
    hasStandardBrowserEnv: EH,
    hasStandardBrowserWebWorkerEnv: HH,
    origin: IH
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  He = {
    ...xH,
    ...FH
  };
function SH(A, e) {
  return oa(A, new He.classes.URLSearchParams(), Object.assign({
    visitor: function (t, r, n, o) {
      return He.isNode && y.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function LH(A) {
  return y.matchAll(/\w+|\[(\w*)]/g, A).map(e => e[0] === "[]" ? "" : e[1] || e[0]);
}
function bH(A) {
  const e = {},
    t = Object.keys(A);
  let r;
  const n = t.length;
  let o;
  for (r = 0; r < n; r++) o = t[r], e[o] = A[o];
  return e;
}
function zw(A) {
  function e(t, r, n, o) {
    let i = t[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      a = o >= t.length;
    return i = !i && y.isArray(n) ? n.length : i, a ? (y.hasOwnProp(n, i) ? n[i] = [n[i], r] : n[i] = r, !s) : ((!n[i] || !y.isObject(n[i])) && (n[i] = []), e(t, r, n[i], o) && y.isArray(n[i]) && (n[i] = bH(n[i])), !s);
  }
  if (y.isFormData(A) && y.isFunction(A.entries)) {
    const t = {};
    return y.forEachEntry(A, (r, n) => {
      e(LH(r), n, t, 0);
    }), t;
  }
  return null;
}
function TH(A, e, t) {
  if (y.isString(A)) try {
    return (e || JSON.parse)(A), y.trim(A);
  } catch (r) {
    if (r.name !== "SyntaxError") throw r;
  }
  return (t || JSON.stringify)(A);
}
const Eo = {
  transitional: Xw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function (e, t) {
    const r = t.getContentType() || "",
      n = r.indexOf("application/json") > -1,
      o = y.isObject(e);
    if (o && y.isHTMLForm(e) && (e = new FormData(e)), y.isFormData(e)) return n ? JSON.stringify(zw(e)) : e;
    if (y.isArrayBuffer(e) || y.isBuffer(e) || y.isStream(e) || y.isFile(e) || y.isBlob(e) || y.isReadableStream(e)) return e;
    if (y.isArrayBufferView(e)) return e.buffer;
    if (y.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1) return SH(e, this.formSerializer).toString();
      if ((s = y.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return oa(s ? {
          "files[]": e
        } : e, a && new a(), this.formSerializer);
      }
    }
    return o || n ? (t.setContentType("application/json", !1), TH(e)) : e;
  }],
  transformResponse: [function (e) {
    const t = this.transitional || Eo.transitional,
      r = t && t.forcedJSONParsing,
      n = this.responseType === "json";
    if (y.isResponse(e) || y.isReadableStream(e)) return e;
    if (e && y.isString(e) && (r && !this.responseType || n)) {
      const i = !(t && t.silentJSONParsing) && n;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (i) throw s.name === "SyntaxError" ? R.from(s, R.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: He.classes.FormData,
    Blob: He.classes.Blob
  },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], A => {
  Eo.headers[A] = {};
});
const OH = y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  DH = A => {
    const e = {};
    let t, r, n;
    return A && A.split(`
`).forEach(function (i) {
      n = i.indexOf(":"), t = i.substring(0, n).trim().toLowerCase(), r = i.substring(n + 1).trim(), !(!t || e[t] && OH[t]) && (t === "set-cookie" ? e[t] ? e[t].push(r) : e[t] = [r] : e[t] = e[t] ? e[t] + ", " + r : r);
    }), e;
  },
  kB = Symbol("internals");
function Cn(A) {
  return A && String(A).trim().toLowerCase();
}
function Mi(A) {
  return A === !1 || A == null ? A : y.isArray(A) ? A.map(Mi) : String(A);
}
function kH(A) {
  const e = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(A);) e[r[1]] = r[2];
  return e;
}
const KH = A => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim());
function nl(A, e, t, r, n) {
  if (y.isFunction(r)) return r.call(this, e, t);
  if (n && (e = t), !!y.isString(e)) {
    if (y.isString(r)) return e.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(e);
  }
}
function RH(A) {
  return A.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function _H(A, e) {
  const t = y.toCamelCase(" " + e);
  ["get", "set", "has"].forEach(r => {
    Object.defineProperty(A, r + t, {
      value: function (n, o, i) {
        return this[r].call(this, e, n, o, i);
      },
      configurable: !0
    });
  });
}
class ZA {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const n = this;
    function o(s, a, l) {
      const u = Cn(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const c = y.findKey(n, u);
      (!c || n[c] === void 0 || l === !0 || l === void 0 && n[c] !== !1) && (n[c || a] = Mi(s));
    }
    const i = (s, a) => y.forEach(s, (l, u) => o(l, u, a));
    if (y.isPlainObject(e) || e instanceof this.constructor) i(e, t);else if (y.isString(e) && (e = e.trim()) && !KH(e)) i(DH(e), t);else if (y.isHeaders(e)) for (const [s, a] of e.entries()) o(a, s, r);else e != null && o(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = Cn(e), e) {
      const r = y.findKey(this, e);
      if (r) {
        const n = this[r];
        if (!t) return n;
        if (t === !0) return kH(n);
        if (y.isFunction(t)) return t.call(this, n, r);
        if (y.isRegExp(t)) return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Cn(e), e) {
      const r = y.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || nl(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let n = !1;
    function o(i) {
      if (i = Cn(i), i) {
        const s = y.findKey(r, i);
        s && (!t || nl(r, r[s], s, t)) && (delete r[s], n = !0);
      }
    }
    return y.isArray(e) ? e.forEach(o) : o(e), n;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length,
      n = !1;
    for (; r--;) {
      const o = t[r];
      (!e || nl(this, this[o], o, e, !0)) && (delete this[o], n = !0);
    }
    return n;
  }
  normalize(e) {
    const t = this,
      r = {};
    return y.forEach(this, (n, o) => {
      const i = y.findKey(r, o);
      if (i) {
        t[i] = Mi(n), delete t[o];
        return;
      }
      const s = e ? RH(o) : String(o).trim();
      s !== o && delete t[o], t[s] = Mi(n), r[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return y.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = e && y.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach(n => r.set(n)), r;
  }
  static accessor(e) {
    const r = (this[kB] = this[kB] = {
        accessors: {}
      }).accessors,
      n = this.prototype;
    function o(i) {
      const s = Cn(i);
      r[s] || (_H(n, i), r[s] = !0);
    }
    return y.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
ZA.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(ZA.prototype, ({
  value: A
}, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => A,
    set(r) {
      this[t] = r;
    }
  };
});
y.freezeMethods(ZA);
function ol(A, e) {
  const t = this || Eo,
    r = e || t,
    n = ZA.from(r.headers);
  let o = r.data;
  return y.forEach(A, function (s) {
    o = s.call(t, o, n.normalize(), e ? e.status : void 0);
  }), n.normalize(), o;
}
function jw(A) {
  return !!(A && A.__CANCEL__);
}
function rn(A, e, t) {
  R.call(this, A ?? "canceled", R.ERR_CANCELED, e, t), this.name = "CanceledError";
}
y.inherits(rn, R, {
  __CANCEL__: !0
});
function Jw(A, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? A(t) : e(new R("Request failed with status code " + t.status, [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t));
}
function MH(A) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(A);
  return e && e[1] || "";
}
function NH(A, e) {
  A = A || 10;
  const t = new Array(A),
    r = new Array(A);
  let n = 0,
    o = 0,
    i;
  return e = e !== void 0 ? e : 1e3, function (a) {
    const l = Date.now(),
      u = r[o];
    i || (i = l), t[n] = a, r[n] = l;
    let c = o,
      f = 0;
    for (; c !== n;) f += t[c++], c = c % A;
    if (n = (n + 1) % A, n === o && (o = (o + 1) % A), l - i < e) return;
    const w = u && l - u;
    return w ? Math.round(f * 1e3 / w) : void 0;
  };
}
function PH(A, e) {
  let t = 0;
  const r = 1e3 / e;
  let n = null;
  return function () {
    const i = this === !0,
      s = Date.now();
    if (i || s - t > r) return n && (clearTimeout(n), n = null), t = s, A.apply(null, arguments);
    n || (n = setTimeout(() => (n = null, t = Date.now(), A.apply(null, arguments)), r - (s - t)));
  };
}
const ys = (A, e, t = 3) => {
    let r = 0;
    const n = NH(50, 250);
    return PH(o => {
      const i = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        a = i - r,
        l = n(a),
        u = i <= s;
      r = i;
      const c = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: a,
        rate: l || void 0,
        estimated: l && s && u ? (s - i) / l : void 0,
        event: o,
        lengthComputable: s != null
      };
      c[e ? "download" : "upload"] = !0, A(c);
    }, t);
  },
  VH = He.hasStandardBrowserEnv ? function () {
    const e = /(msie|trident)/i.test(navigator.userAgent),
      t = document.createElement("a");
    let r;
    function n(o) {
      let i = o;
      return e && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = n(window.location.href), function (i) {
      const s = y.isString(i) ? n(i) : i;
      return s.protocol === r.protocol && s.host === r.host;
    };
  }() : function () {
    return function () {
      return !0;
    };
  }(),
  GH = He.hasStandardBrowserEnv ? {
    write(A, e, t, r, n, o) {
      const i = [A + "=" + encodeURIComponent(e)];
      y.isNumber(t) && i.push("expires=" + new Date(t).toGMTString()), y.isString(r) && i.push("path=" + r), y.isString(n) && i.push("domain=" + n), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(A) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + A + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(A) {
      this.write(A, "", Date.now() - 864e5);
    }
  } : {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };
function WH(A) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(A);
}
function XH(A, e) {
  return e ? A.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : A;
}
function Yw(A, e) {
  return A && !WH(e) ? XH(A, e) : e;
}
const KB = A => A instanceof ZA ? {
  ...A
} : A;
function ir(A, e) {
  e = e || {};
  const t = {};
  function r(l, u, c) {
    return y.isPlainObject(l) && y.isPlainObject(u) ? y.merge.call({
      caseless: c
    }, l, u) : y.isPlainObject(u) ? y.merge({}, u) : y.isArray(u) ? u.slice() : u;
  }
  function n(l, u, c) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(l)) return r(void 0, l, c);
    } else return r(l, u, c);
  }
  function o(l, u) {
    if (!y.isUndefined(u)) return r(void 0, u);
  }
  function i(l, u) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function s(l, u, c) {
    if (c in e) return r(l, u);
    if (c in A) return r(void 0, l);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (l, u) => n(KB(l), KB(u), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, A, e)), function (u) {
    const c = a[u] || n,
      f = c(A[u], e[u], u);
    y.isUndefined(f) && c !== s || (t[u] = f);
  }), t;
}
const Zw = A => {
    const e = ir({}, A);
    let {
      data: t,
      withXSRFToken: r,
      xsrfHeaderName: n,
      xsrfCookieName: o,
      headers: i,
      auth: s
    } = e;
    e.headers = i = ZA.from(i), e.url = Ww(Yw(e.baseURL, e.url), A.params, A.paramsSerializer), s && i.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
    let a;
    if (y.isFormData(t)) {
      if (He.hasStandardBrowserEnv || He.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);else if ((a = i.getContentType()) !== !1) {
        const [l, ...u] = a ? a.split(";").map(c => c.trim()).filter(Boolean) : [];
        i.setContentType([l || "multipart/form-data", ...u].join("; "));
      }
    }
    if (He.hasStandardBrowserEnv && (r && y.isFunction(r) && (r = r(e)), r || r !== !1 && VH(e.url))) {
      const l = n && o && GH.read(o);
      l && i.set(n, l);
    }
    return e;
  },
  zH = typeof XMLHttpRequest < "u",
  jH = zH && function (A) {
    return new Promise(function (t, r) {
      const n = Zw(A);
      let o = n.data;
      const i = ZA.from(n.headers).normalize();
      let {
          responseType: s
        } = n,
        a;
      function l() {
        n.cancelToken && n.cancelToken.unsubscribe(a), n.signal && n.signal.removeEventListener("abort", a);
      }
      let u = new XMLHttpRequest();
      u.open(n.method.toUpperCase(), n.url, !0), u.timeout = n.timeout;
      function c() {
        if (!u) return;
        const w = ZA.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
          g = {
            data: !s || s === "text" || s === "json" ? u.responseText : u.response,
            status: u.status,
            statusText: u.statusText,
            headers: w,
            config: A,
            request: u
          };
        Jw(function (B) {
          t(B), l();
        }, function (B) {
          r(B), l();
        }, g), u = null;
      }
      "onloadend" in u ? u.onloadend = c : u.onreadystatechange = function () {
        !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(c);
      }, u.onabort = function () {
        u && (r(new R("Request aborted", R.ECONNABORTED, n, u)), u = null);
      }, u.onerror = function () {
        r(new R("Network Error", R.ERR_NETWORK, n, u)), u = null;
      }, u.ontimeout = function () {
        let h = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
        const g = n.transitional || Xw;
        n.timeoutErrorMessage && (h = n.timeoutErrorMessage), r(new R(h, g.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED, n, u)), u = null;
      }, o === void 0 && i.setContentType(null), "setRequestHeader" in u && y.forEach(i.toJSON(), function (h, g) {
        u.setRequestHeader(g, h);
      }), y.isUndefined(n.withCredentials) || (u.withCredentials = !!n.withCredentials), s && s !== "json" && (u.responseType = n.responseType), typeof n.onDownloadProgress == "function" && u.addEventListener("progress", ys(n.onDownloadProgress, !0)), typeof n.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", ys(n.onUploadProgress)), (n.cancelToken || n.signal) && (a = w => {
        u && (r(!w || w.type ? new rn(null, A, u) : w), u.abort(), u = null);
      }, n.cancelToken && n.cancelToken.subscribe(a), n.signal && (n.signal.aborted ? a() : n.signal.addEventListener("abort", a)));
      const f = MH(n.url);
      if (f && He.protocols.indexOf(f) === -1) {
        r(new R("Unsupported protocol " + f + ":", R.ERR_BAD_REQUEST, A));
        return;
      }
      u.send(o || null);
    });
  },
  JH = (A, e) => {
    let t = new AbortController(),
      r;
    const n = function (a) {
      if (!r) {
        r = !0, i();
        const l = a instanceof Error ? a : this.reason;
        t.abort(l instanceof R ? l : new rn(l instanceof Error ? l.message : l));
      }
    };
    let o = e && setTimeout(() => {
      n(new R(`timeout ${e} of ms exceeded`, R.ETIMEDOUT));
    }, e);
    const i = () => {
      A && (o && clearTimeout(o), o = null, A.forEach(a => {
        a && (a.removeEventListener ? a.removeEventListener("abort", n) : a.unsubscribe(n));
      }), A = null);
    };
    A.forEach(a => a && a.addEventListener && a.addEventListener("abort", n));
    const {
      signal: s
    } = t;
    return s.unsubscribe = i, [s, () => {
      o && clearTimeout(o), o = null;
    }];
  },
  YH = function* (A, e) {
    let t = A.byteLength;
    if (!e || t < e) {
      yield A;
      return;
    }
    let r = 0,
      n;
    for (; r < t;) n = r + e, yield A.slice(r, n), r = n;
  },
  ZH = async function* (A, e, t) {
    for await (const r of A) yield* YH(ArrayBuffer.isView(r) ? r : await t(String(r)), e);
  },
  RB = (A, e, t, r, n) => {
    const o = ZH(A, e, n);
    let i = 0;
    return new ReadableStream({
      type: "bytes",
      async pull(s) {
        const {
          done: a,
          value: l
        } = await o.next();
        if (a) {
          s.close(), r();
          return;
        }
        let u = l.byteLength;
        t && t(i += u), s.enqueue(new Uint8Array(l));
      },
      cancel(s) {
        return r(s), o.return();
      }
    }, {
      highWaterMark: 2
    });
  },
  _B = (A, e) => {
    const t = A != null;
    return r => setTimeout(() => e({
      lengthComputable: t,
      total: A,
      loaded: r
    }));
  },
  ia = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  $w = ia && typeof ReadableStream == "function",
  Ou = ia && (typeof TextEncoder == "function" ? (A => e => A.encode(e))(new TextEncoder()) : async A => new Uint8Array(await new Response(A).arrayBuffer())),
  $H = $w && (() => {
    let A = !1;
    const e = new Request(He.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !e;
  })(),
  MB = 64 * 1024,
  Du = $w && !!(() => {
    try {
      return y.isReadableStream(new Response("").body);
    } catch {}
  })(),
  vs = {
    stream: Du && (A => A.body)
  };
ia && (A => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
    !vs[e] && (vs[e] = y.isFunction(A[e]) ? t => t[e]() : (t, r) => {
      throw new R(`Response type '${e}' is not supported`, R.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const qH = async A => {
    if (A == null) return 0;
    if (y.isBlob(A)) return A.size;
    if (y.isSpecCompliantForm(A)) return (await new Request(A).arrayBuffer()).byteLength;
    if (y.isArrayBufferView(A)) return A.byteLength;
    if (y.isURLSearchParams(A) && (A = A + ""), y.isString(A)) return (await Ou(A)).byteLength;
  },
  AI = async (A, e) => {
    const t = y.toFiniteNumber(A.getContentLength());
    return t ?? qH(e);
  },
  eI = ia && (async A => {
    let {
      url: e,
      method: t,
      data: r,
      signal: n,
      cancelToken: o,
      timeout: i,
      onDownloadProgress: s,
      onUploadProgress: a,
      responseType: l,
      headers: u,
      withCredentials: c = "same-origin",
      fetchOptions: f
    } = Zw(A);
    l = l ? (l + "").toLowerCase() : "text";
    let [w, h] = n || o || i ? JH([n, o], i) : [],
      g,
      U;
    const B = () => {
      !g && setTimeout(() => {
        w && w.unsubscribe();
      }), g = !0;
    };
    let d;
    try {
      if (a && $H && t !== "get" && t !== "head" && (d = await AI(u, r)) !== 0) {
        let C = new Request(e, {
            method: "POST",
            body: r,
            duplex: "half"
          }),
          F;
        y.isFormData(r) && (F = C.headers.get("content-type")) && u.setContentType(F), C.body && (r = RB(C.body, MB, _B(d, ys(a)), null, Ou));
      }
      y.isString(c) || (c = c ? "cors" : "omit"), U = new Request(e, {
        ...f,
        signal: w,
        method: t.toUpperCase(),
        headers: u.normalize().toJSON(),
        body: r,
        duplex: "half",
        withCredentials: c
      });
      let p = await fetch(U);
      const m = Du && (l === "stream" || l === "response");
      if (Du && (s || m)) {
        const C = {};
        ["status", "statusText", "headers"].forEach(Q => {
          C[Q] = p[Q];
        });
        const F = y.toFiniteNumber(p.headers.get("content-length"));
        p = new Response(RB(p.body, MB, s && _B(F, ys(s, !0)), m && B, Ou), C);
      }
      l = l || "text";
      let v = await vs[y.findKey(vs, l) || "text"](p, A);
      return !m && B(), h && h(), await new Promise((C, F) => {
        Jw(C, F, {
          data: v,
          headers: ZA.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: A,
          request: U
        });
      });
    } catch (p) {
      throw B(), p && p.name === "TypeError" && /fetch/i.test(p.message) ? Object.assign(new R("Network Error", R.ERR_NETWORK, A, U), {
        cause: p.cause || p
      }) : R.from(p, p && p.code, A, U);
    }
  }),
  ku = {
    http: wH,
    xhr: jH,
    fetch: eI
  };
y.forEach(ku, (A, e) => {
  if (A) {
    try {
      Object.defineProperty(A, "name", {
        value: e
      });
    } catch {}
    Object.defineProperty(A, "adapterName", {
      value: e
    });
  }
});
const NB = A => `- ${A}`,
  tI = A => y.isFunction(A) || A === null || A === !1,
  qw = {
    getAdapter: A => {
      A = y.isArray(A) ? A : [A];
      const {
        length: e
      } = A;
      let t, r;
      const n = {};
      for (let o = 0; o < e; o++) {
        t = A[o];
        let i;
        if (r = t, !tI(t) && (r = ku[(i = String(t)).toLowerCase()], r === void 0)) throw new R(`Unknown adapter '${i}'`);
        if (r) break;
        n[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(n).map(([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
        let i = e ? o.length > 1 ? `since :
` + o.map(NB).join(`
`) : " " + NB(o[0]) : "as no adapter specified";
        throw new R("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: ku
  };
function il(A) {
  if (A.cancelToken && A.cancelToken.throwIfRequested(), A.signal && A.signal.aborted) throw new rn(null, A);
}
function PB(A) {
  return il(A), A.headers = ZA.from(A.headers), A.data = ol.call(A, A.transformRequest), ["post", "put", "patch"].indexOf(A.method) !== -1 && A.headers.setContentType("application/x-www-form-urlencoded", !1), qw.getAdapter(A.adapter || Eo.adapter)(A).then(function (r) {
    return il(A), r.data = ol.call(A, A.transformResponse, r), r.headers = ZA.from(r.headers), r;
  }, function (r) {
    return jw(r) || (il(A), r && r.response && (r.response.data = ol.call(A, A.transformResponse, r.response), r.response.headers = ZA.from(r.response.headers))), Promise.reject(r);
  });
}
const Am = "1.7.2",
  af = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((A, e) => {
  af[A] = function (r) {
    return typeof r === A || "a" + (e < 1 ? "n " : " ") + A;
  };
});
const VB = {};
af.transitional = function (e, t, r) {
  function n(o, i) {
    return "[Axios v" + Am + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (e === !1) throw new R(n(i, " has been removed" + (t ? " in " + t : "")), R.ERR_DEPRECATED);
    return t && !VB[i] && (VB[i] = !0, console.warn(n(i, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(o, i, s) : !0;
  };
};
function rI(A, e, t) {
  if (typeof A != "object") throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(A);
  let n = r.length;
  for (; n-- > 0;) {
    const o = r[n],
      i = e[o];
    if (i) {
      const s = A[o],
        a = s === void 0 || i(s, o, A);
      if (a !== !0) throw new R("option " + o + " must be " + a, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new R("Unknown option " + o, R.ERR_BAD_OPTION);
  }
}
const Ku = {
    assertOptions: rI,
    validators: af
  },
  lt = Ku.validators;
class Ar {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new DB(),
      response: new DB()
    };
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const o = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {}
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = ir(this.defaults, t);
    const {
      transitional: r,
      paramsSerializer: n,
      headers: o
    } = t;
    r !== void 0 && Ku.assertOptions(r, {
      silentJSONParsing: lt.transitional(lt.boolean),
      forcedJSONParsing: lt.transitional(lt.boolean),
      clarifyTimeoutError: lt.transitional(lt.boolean)
    }, !1), n != null && (y.isFunction(n) ? t.paramsSerializer = {
      serialize: n
    } : Ku.assertOptions(n, {
      encode: lt.function,
      serialize: lt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let i = o && y.merge(o.common, o[t.method]);
    o && y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h => {
      delete o[h];
    }), t.headers = ZA.concat(i, o);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (a = a && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u,
      c = 0,
      f;
    if (!a) {
      const h = [PB.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, l), f = h.length, u = Promise.resolve(t); c < f;) u = u.then(h[c++], h[c++]);
      return u;
    }
    f = s.length;
    let w = t;
    for (c = 0; c < f;) {
      const h = s[c++],
        g = s[c++];
      try {
        w = h(w);
      } catch (U) {
        g.call(this, U);
        break;
      }
    }
    try {
      u = PB.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, f = l.length; c < f;) u = u.then(l[c++], l[c++]);
    return u;
  }
  getUri(e) {
    e = ir(this.defaults, e);
    const t = Yw(e.baseURL, e.url);
    return Ww(t, e.params, e.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function (e) {
  Ar.prototype[e] = function (t, r) {
    return this.request(ir(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function (e) {
  function t(r) {
    return function (o, i, s) {
      return this.request(ir(s || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ar.prototype[e] = t(), Ar.prototype[e + "Form"] = t(!0);
});
class lf {
  constructor(e) {
    if (typeof e != "function") throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (o) {
      t = o;
    });
    const r = this;
    this.promise.then(n => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0;) r._listeners[o](n);
      r._listeners = null;
    }), this.promise.then = n => {
      let o;
      const i = new Promise(s => {
        r.subscribe(s), o = s;
      }).then(n);
      return i.cancel = function () {
        r.unsubscribe(o);
      }, i;
    }, e(function (o, i, s) {
      r.reason || (r.reason = new rn(o, i, s), t(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  static source() {
    let e;
    return {
      token: new lf(function (n) {
        e = n;
      }),
      cancel: e
    };
  }
}
function nI(A) {
  return function (t) {
    return A.apply(null, t);
  };
}
function oI(A) {
  return y.isObject(A) && A.isAxiosError === !0;
}
const Ru = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ru).forEach(([A, e]) => {
  Ru[e] = A;
});
function em(A) {
  const e = new Ar(A),
    t = Tw(Ar.prototype.request, e);
  return y.extend(t, Ar.prototype, e, {
    allOwnKeys: !0
  }), y.extend(t, e, null, {
    allOwnKeys: !0
  }), t.create = function (n) {
    return em(ir(A, n));
  }, t;
}
const wA = em(Eo);
wA.Axios = Ar;
wA.CanceledError = rn;
wA.CancelToken = lf;
wA.isCancel = jw;
wA.VERSION = Am;
wA.toFormData = oa;
wA.AxiosError = R;
wA.Cancel = wA.CanceledError;
wA.all = function (e) {
  return Promise.all(e);
};
wA.spread = nI;
wA.isAxiosError = oI;
wA.mergeConfig = ir;
wA.AxiosHeaders = ZA;
wA.formToJSON = A => zw(y.isHTMLForm(A) ? new FormData(A) : A);
wA.getAdapter = qw.getAdapter;
wA.HttpStatusCode = Ru;
wA.default = wA;
function tm(A) {
  const e = /monitor-([^\.]+)\./,
    t = A.match(e);
  return t && t[1] ? t[1] : null;
}
const iI = window.location.href,
  sI = tm(iI) || "704-apps",
  aI = "https://api.newchat.fb704.com.br",
  _u = wA.create({
    baseURL: aI
  });
_u.interceptors.request.use(async A => (A.headers.Authorization = `Bearer ${sI}`, A));
function Le(A) {
  const e = Object.prototype.toString.call(A);
  return A instanceof Date || typeof A == "object" && e === "[object Date]" ? new A.constructor(+A) : typeof A == "number" || e === "[object Number]" || typeof A == "string" || e === "[object String]" ? new Date(A) : new Date(NaN);
}
function sr(A, e) {
  return A instanceof Date ? new A.constructor(e) : new Date(e);
}
const rm = 6048e5,
  lI = 864e5;
let uI = {};
function sa() {
  return uI;
}
function po(A, e) {
  var s, a, l, u;
  const t = sa(),
    r = (e == null ? void 0 : e.weekStartsOn) ?? ((a = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : a.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0,
    n = Le(A),
    o = n.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function Us(A) {
  return po(A, {
    weekStartsOn: 1
  });
}
function nm(A) {
  const e = Le(A),
    t = e.getFullYear(),
    r = sr(A, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const n = Us(r),
    o = sr(A, 0);
  o.setFullYear(t, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Us(o);
  return e.getTime() >= n.getTime() ? t + 1 : e.getTime() >= i.getTime() ? t : t - 1;
}
function GB(A) {
  const e = Le(A);
  return e.setHours(0, 0, 0, 0), e;
}
function WB(A) {
  const e = Le(A),
    t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +A - +t;
}
function cI(A, e) {
  const t = GB(A),
    r = GB(e),
    n = +t - WB(t),
    o = +r - WB(r);
  return Math.round((n - o) / lI);
}
function fI(A) {
  const e = nm(A),
    t = sr(A, 0);
  return t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), Us(t);
}
function dI(A) {
  return A instanceof Date || typeof A == "object" && Object.prototype.toString.call(A) === "[object Date]";
}
function BI(A) {
  if (!dI(A) && typeof A != "number") return !1;
  const e = Le(A);
  return !isNaN(Number(e));
}
function hI(A) {
  const e = Le(A),
    t = sr(A, 0);
  return t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const gI = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  },
  pI = (A, e, t) => {
    let r;
    const n = gI[A];
    return typeof n == "string" ? r = n : e === 1 ? r = n.one : r = n.other.replace("{{count}}", e.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
  };
function sl(A) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : A.defaultWidth;
    return A.formats[t] || A.formats[A.defaultWidth];
  };
}
const wI = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  },
  mI = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  },
  CI = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  },
  QI = {
    date: sl({
      formats: wI,
      defaultWidth: "full"
    }),
    time: sl({
      formats: mI,
      defaultWidth: "full"
    }),
    dateTime: sl({
      formats: CI,
      defaultWidth: "full"
    })
  },
  yI = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  },
  vI = (A, e, t, r) => yI[A];
function Qn(A) {
  return (e, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let n;
    if (r === "formatting" && A.formattingValues) {
      const i = A.defaultFormattingWidth || A.defaultWidth,
        s = t != null && t.width ? String(t.width) : i;
      n = A.formattingValues[s] || A.formattingValues[i];
    } else {
      const i = A.defaultWidth,
        s = t != null && t.width ? String(t.width) : A.defaultWidth;
      n = A.values[s] || A.values[i];
    }
    const o = A.argumentCallback ? A.argumentCallback(e) : e;
    return n[o];
  };
}
const UI = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  },
  FI = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  },
  EI = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  HI = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  II = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  },
  xI = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  },
  SI = (A, e) => {
    const t = Number(A),
      r = t % 100;
    if (r > 20 || r < 10) switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
    return t + "th";
  },
  LI = {
    ordinalNumber: SI,
    era: Qn({
      values: UI,
      defaultWidth: "wide"
    }),
    quarter: Qn({
      values: FI,
      defaultWidth: "wide",
      argumentCallback: A => A - 1
    }),
    month: Qn({
      values: EI,
      defaultWidth: "wide"
    }),
    day: Qn({
      values: HI,
      defaultWidth: "wide"
    }),
    dayPeriod: Qn({
      values: II,
      defaultWidth: "wide",
      formattingValues: xI,
      defaultFormattingWidth: "wide"
    })
  };
function yn(A) {
  return (e, t = {}) => {
    const r = t.width,
      n = r && A.matchPatterns[r] || A.matchPatterns[A.defaultMatchWidth],
      o = e.match(n);
    if (!o) return null;
    const i = o[0],
      s = r && A.parsePatterns[r] || A.parsePatterns[A.defaultParseWidth],
      a = Array.isArray(s) ? TI(s, c => c.test(i)) : bI(s, c => c.test(i));
    let l;
    l = A.valueCallback ? A.valueCallback(a) : a, l = t.valueCallback ? t.valueCallback(l) : l;
    const u = e.slice(i.length);
    return {
      value: l,
      rest: u
    };
  };
}
function bI(A, e) {
  for (const t in A) if (Object.prototype.hasOwnProperty.call(A, t) && e(A[t])) return t;
}
function TI(A, e) {
  for (let t = 0; t < A.length; t++) if (e(A[t])) return t;
}
function OI(A) {
  return (e, t = {}) => {
    const r = e.match(A.matchPattern);
    if (!r) return null;
    const n = r[0],
      o = e.match(A.parsePattern);
    if (!o) return null;
    let i = A.valueCallback ? A.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = e.slice(n.length);
    return {
      value: i,
      rest: s
    };
  };
}
const DI = /^(\d+)(th|st|nd|rd)?/i,
  kI = /\d+/i,
  KI = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  },
  RI = {
    any: [/^b/i, /^(a|c)/i]
  },
  _I = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  },
  MI = {
    any: [/1/i, /2/i, /3/i, /4/i]
  },
  NI = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  },
  PI = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  },
  VI = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  },
  GI = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  },
  WI = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  },
  XI = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  },
  zI = {
    ordinalNumber: OI({
      matchPattern: DI,
      parsePattern: kI,
      valueCallback: A => parseInt(A, 10)
    }),
    era: yn({
      matchPatterns: KI,
      defaultMatchWidth: "wide",
      parsePatterns: RI,
      defaultParseWidth: "any"
    }),
    quarter: yn({
      matchPatterns: _I,
      defaultMatchWidth: "wide",
      parsePatterns: MI,
      defaultParseWidth: "any",
      valueCallback: A => A + 1
    }),
    month: yn({
      matchPatterns: NI,
      defaultMatchWidth: "wide",
      parsePatterns: PI,
      defaultParseWidth: "any"
    }),
    day: yn({
      matchPatterns: VI,
      defaultMatchWidth: "wide",
      parsePatterns: GI,
      defaultParseWidth: "any"
    }),
    dayPeriod: yn({
      matchPatterns: WI,
      defaultMatchWidth: "any",
      parsePatterns: XI,
      defaultParseWidth: "any"
    })
  },
  jI = {
    code: "en-US",
    formatDistance: pI,
    formatLong: QI,
    formatRelative: vI,
    localize: LI,
    match: zI,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
function JI(A) {
  const e = Le(A);
  return cI(e, hI(e)) + 1;
}
function YI(A) {
  const e = Le(A),
    t = +Us(e) - +fI(e);
  return Math.round(t / rm) + 1;
}
function om(A, e) {
  var u, c, f, w;
  const t = Le(A),
    r = t.getFullYear(),
    n = sa(),
    o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1,
    i = sr(A, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = po(i, e),
    a = sr(A, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const l = po(a, e);
  return t.getTime() >= s.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function ZI(A, e) {
  var s, a, l, u;
  const t = sa(),
    r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((a = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : a.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1,
    n = om(A, e),
    o = sr(A, 0);
  return o.setFullYear(n, 0, r), o.setHours(0, 0, 0, 0), po(o, e);
}
function $I(A, e) {
  const t = Le(A),
    r = +po(t, e) - +ZI(t, e);
  return Math.round(r / rm) + 1;
}
function J(A, e) {
  const t = A < 0 ? "-" : "",
    r = Math.abs(A).toString().padStart(e, "0");
  return t + r;
}
const ut = {
    y(A, e) {
      const t = A.getFullYear(),
        r = t > 0 ? t : 1 - t;
      return J(e === "yy" ? r % 100 : r, e.length);
    },
    M(A, e) {
      const t = A.getMonth();
      return e === "M" ? String(t + 1) : J(t + 1, 2);
    },
    d(A, e) {
      return J(A.getDate(), e.length);
    },
    a(A, e) {
      const t = A.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h(A, e) {
      return J(A.getHours() % 12 || 12, e.length);
    },
    H(A, e) {
      return J(A.getHours(), e.length);
    },
    m(A, e) {
      return J(A.getMinutes(), e.length);
    },
    s(A, e) {
      return J(A.getSeconds(), e.length);
    },
    S(A, e) {
      const t = e.length,
        r = A.getMilliseconds(),
        n = Math.trunc(r * Math.pow(10, t - 3));
      return J(n, e.length);
    }
  },
  pr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  XB = {
    G: function (A, e, t) {
      const r = A.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(r, {
            width: "abbreviated"
          });
        case "GGGGG":
          return t.era(r, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return t.era(r, {
            width: "wide"
          });
      }
    },
    y: function (A, e, t) {
      if (e === "yo") {
        const r = A.getFullYear(),
          n = r > 0 ? r : 1 - r;
        return t.ordinalNumber(n, {
          unit: "year"
        });
      }
      return ut.y(A, e);
    },
    Y: function (A, e, t, r) {
      const n = om(A, r),
        o = n > 0 ? n : 1 - n;
      if (e === "YY") {
        const i = o % 100;
        return J(i, 2);
      }
      return e === "Yo" ? t.ordinalNumber(o, {
        unit: "year"
      }) : J(o, e.length);
    },
    R: function (A, e) {
      const t = nm(A);
      return J(t, e.length);
    },
    u: function (A, e) {
      const t = A.getFullYear();
      return J(t, e.length);
    },
    Q: function (A, e, t) {
      const r = Math.ceil((A.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(r);
        case "QQ":
          return J(r, 2);
        case "Qo":
          return t.ordinalNumber(r, {
            unit: "quarter"
          });
        case "QQQ":
          return t.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return t.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return t.quarter(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function (A, e, t) {
      const r = Math.ceil((A.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(r);
        case "qq":
          return J(r, 2);
        case "qo":
          return t.ordinalNumber(r, {
            unit: "quarter"
          });
        case "qqq":
          return t.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return t.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return t.quarter(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function (A, e, t) {
      const r = A.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return ut.M(A, e);
        case "Mo":
          return t.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "MMM":
          return t.month(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return t.month(r, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return t.month(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function (A, e, t) {
      const r = A.getMonth();
      switch (e) {
        case "L":
          return String(r + 1);
        case "LL":
          return J(r + 1, 2);
        case "Lo":
          return t.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "LLL":
          return t.month(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return t.month(r, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return t.month(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function (A, e, t, r) {
      const n = $I(A, r);
      return e === "wo" ? t.ordinalNumber(n, {
        unit: "week"
      }) : J(n, e.length);
    },
    I: function (A, e, t) {
      const r = YI(A);
      return e === "Io" ? t.ordinalNumber(r, {
        unit: "week"
      }) : J(r, e.length);
    },
    d: function (A, e, t) {
      return e === "do" ? t.ordinalNumber(A.getDate(), {
        unit: "date"
      }) : ut.d(A, e);
    },
    D: function (A, e, t) {
      const r = JI(A);
      return e === "Do" ? t.ordinalNumber(r, {
        unit: "dayOfYear"
      }) : J(r, e.length);
    },
    E: function (A, e, t) {
      const r = A.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return t.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return t.day(r, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return t.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function (A, e, t, r) {
      const n = A.getDay(),
        o = (n - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(o);
        case "ee":
          return J(o, 2);
        case "eo":
          return t.ordinalNumber(o, {
            unit: "day"
          });
        case "eee":
          return t.day(n, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return t.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return t.day(n, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return t.day(n, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function (A, e, t, r) {
      const n = A.getDay(),
        o = (n - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(o);
        case "cc":
          return J(o, e.length);
        case "co":
          return t.ordinalNumber(o, {
            unit: "day"
          });
        case "ccc":
          return t.day(n, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return t.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return t.day(n, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return t.day(n, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function (A, e, t) {
      const r = A.getDay(),
        n = r === 0 ? 7 : r;
      switch (e) {
        case "i":
          return String(n);
        case "ii":
          return J(n, e.length);
        case "io":
          return t.ordinalNumber(n, {
            unit: "day"
          });
        case "iii":
          return t.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return t.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return t.day(r, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return t.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function (A, e, t) {
      const n = A.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return t.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return t.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return t.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function (A, e, t) {
      const r = A.getHours();
      let n;
      switch (r === 12 ? n = pr.noon : r === 0 ? n = pr.midnight : n = r / 12 >= 1 ? "pm" : "am", e) {
        case "b":
        case "bb":
          return t.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return t.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return t.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return t.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function (A, e, t) {
      const r = A.getHours();
      let n;
      switch (r >= 17 ? n = pr.evening : r >= 12 ? n = pr.afternoon : r >= 4 ? n = pr.morning : n = pr.night, e) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return t.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return t.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function (A, e, t) {
      if (e === "ho") {
        let r = A.getHours() % 12;
        return r === 0 && (r = 12), t.ordinalNumber(r, {
          unit: "hour"
        });
      }
      return ut.h(A, e);
    },
    H: function (A, e, t) {
      return e === "Ho" ? t.ordinalNumber(A.getHours(), {
        unit: "hour"
      }) : ut.H(A, e);
    },
    K: function (A, e, t) {
      const r = A.getHours() % 12;
      return e === "Ko" ? t.ordinalNumber(r, {
        unit: "hour"
      }) : J(r, e.length);
    },
    k: function (A, e, t) {
      let r = A.getHours();
      return r === 0 && (r = 24), e === "ko" ? t.ordinalNumber(r, {
        unit: "hour"
      }) : J(r, e.length);
    },
    m: function (A, e, t) {
      return e === "mo" ? t.ordinalNumber(A.getMinutes(), {
        unit: "minute"
      }) : ut.m(A, e);
    },
    s: function (A, e, t) {
      return e === "so" ? t.ordinalNumber(A.getSeconds(), {
        unit: "second"
      }) : ut.s(A, e);
    },
    S: function (A, e) {
      return ut.S(A, e);
    },
    X: function (A, e, t) {
      const r = A.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (e) {
        case "X":
          return jB(r);
        case "XXXX":
        case "XX":
          return Vt(r);
        case "XXXXX":
        case "XXX":
        default:
          return Vt(r, ":");
      }
    },
    x: function (A, e, t) {
      const r = A.getTimezoneOffset();
      switch (e) {
        case "x":
          return jB(r);
        case "xxxx":
        case "xx":
          return Vt(r);
        case "xxxxx":
        case "xxx":
        default:
          return Vt(r, ":");
      }
    },
    O: function (A, e, t) {
      const r = A.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + zB(r, ":");
        case "OOOO":
        default:
          return "GMT" + Vt(r, ":");
      }
    },
    z: function (A, e, t) {
      const r = A.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + zB(r, ":");
        case "zzzz":
        default:
          return "GMT" + Vt(r, ":");
      }
    },
    t: function (A, e, t) {
      const r = Math.trunc(A.getTime() / 1e3);
      return J(r, e.length);
    },
    T: function (A, e, t) {
      const r = A.getTime();
      return J(r, e.length);
    }
  };
function zB(A, e = "") {
  const t = A > 0 ? "-" : "+",
    r = Math.abs(A),
    n = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? t + String(n) : t + String(n) + e + J(o, 2);
}
function jB(A, e) {
  return A % 60 === 0 ? (A > 0 ? "-" : "+") + J(Math.abs(A) / 60, 2) : Vt(A, e);
}
function Vt(A, e = "") {
  const t = A > 0 ? "-" : "+",
    r = Math.abs(A),
    n = J(Math.trunc(r / 60), 2),
    o = J(r % 60, 2);
  return t + n + e + o;
}
const JB = (A, e) => {
    switch (A) {
      case "P":
        return e.date({
          width: "short"
        });
      case "PP":
        return e.date({
          width: "medium"
        });
      case "PPP":
        return e.date({
          width: "long"
        });
      case "PPPP":
      default:
        return e.date({
          width: "full"
        });
    }
  },
  im = (A, e) => {
    switch (A) {
      case "p":
        return e.time({
          width: "short"
        });
      case "pp":
        return e.time({
          width: "medium"
        });
      case "ppp":
        return e.time({
          width: "long"
        });
      case "pppp":
      default:
        return e.time({
          width: "full"
        });
    }
  },
  qI = (A, e) => {
    const t = A.match(/(P+)(p+)?/) || [],
      r = t[1],
      n = t[2];
    if (!n) return JB(A, e);
    let o;
    switch (r) {
      case "P":
        o = e.dateTime({
          width: "short"
        });
        break;
      case "PP":
        o = e.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        o = e.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        o = e.dateTime({
          width: "full"
        });
        break;
    }
    return o.replace("{{date}}", JB(r, e)).replace("{{time}}", im(n, e));
  },
  Ax = {
    p: im,
    P: qI
  },
  ex = /^D+$/,
  tx = /^Y+$/,
  rx = ["D", "DD", "YY", "YYYY"];
function nx(A) {
  return ex.test(A);
}
function ox(A) {
  return tx.test(A);
}
function ix(A, e, t) {
  const r = sx(A, e, t);
  if (console.warn(r), rx.includes(A)) throw new RangeError(r);
}
function sx(A, e, t) {
  const r = A[0] === "Y" ? "years" : "days of the month";
  return `Use \`${A.toLowerCase()}\` instead of \`${A}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ax = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  lx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  ux = /^'([^]*?)'?$/,
  cx = /''/g,
  fx = /[a-zA-Z]/;
function uf(A, e, t) {
  var u, c, f, w;
  const r = sa(),
    n = r.locale ?? jI,
    o = r.firstWeekContainsDate ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1,
    i = r.weekStartsOn ?? ((w = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0,
    s = Le(A);
  if (!BI(s)) throw new RangeError("Invalid time value");
  let a = e.match(lx).map(h => {
    const g = h[0];
    if (g === "p" || g === "P") {
      const U = Ax[g];
      return U(h, n.formatLong);
    }
    return h;
  }).join("").match(ax).map(h => {
    if (h === "''") return {
      isToken: !1,
      value: "'"
    };
    const g = h[0];
    if (g === "'") return {
      isToken: !1,
      value: dx(h)
    };
    if (XB[g]) return {
      isToken: !0,
      value: h
    };
    if (g.match(fx)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + g + "`");
    return {
      isToken: !1,
      value: h
    };
  });
  n.localize.preprocessor && (a = n.localize.preprocessor(s, a));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return a.map(h => {
    if (!h.isToken) return h.value;
    const g = h.value;
    (ox(g) || nx(g)) && ix(g, e, String(A));
    const U = XB[g[0]];
    return U(s, g, n.localize, l);
  }).join("");
}
function dx(A) {
  const e = A.match(ux);
  return e ? e[1].replace(cx, "'") : A;
}
const Bx = ({
  message: A,
  sentBySupport: e
}) => S.jsxs("div", {
  className: _e("mt-4 w-max max-w-[13rem] rounded-xl bg-muted p-2 px-3 shadow-md last:mb-4", !e && "self-end bg-blue-600"),
  children: [S.jsx("h2", {
    className: _e(!e && "text-white"),
    children: A.messages
  }), S.jsx("section", {
    className: "flex items-center justify-between gap-2",
    children: S.jsx("section", {
      className: "flex items-center gap-1",
      children: S.jsx("p", {
        className: _e("mt-1 text-end text-xs", e ? "text-black" : "text-white"),
        children: uf(A.createdAt, "HH:mm")
      })
    })
  })]
}, A.id);
function Mu(A) {
  "@babel/helpers - typeof";

  return Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mu(A);
}
function hx(A, e) {
  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function gx(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function px(A, e, t) {
  return e && gx(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function wx(A, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  A.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: A,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(A, "prototype", {
    writable: !1
  }), e && Nu(A, e);
}
function Nu(A, e) {
  return Nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, n) {
    return r.__proto__ = n, r;
  }, Nu(A, e);
}
function mx(A) {
  var e = yx();
  return function () {
    var r = Fs(A),
      n;
    if (e) {
      var o = Fs(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Cx(this, n);
  };
}
function Cx(A, e) {
  if (e && (Mu(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Qx(A);
}
function Qx(A) {
  if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return A;
}
function yx() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Fs(A) {
  return Fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fs(A);
}
function vx(A, e) {
  if (!document.head.querySelector("#" + A)) {
    var t = document.createElement("style");
    t.textContent = e, t.type = "text/css", t.id = A, document.head.appendChild(t);
  }
}
var Ux = function (A) {
    wx(t, A);
    var e = mx(t);
    function t() {
      return hx(this, t), e.apply(this, arguments);
    }
    return px(t, [{
      key: "componentDidMount",
      value: function () {
        vx(this.props.name, this.props.css);
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        var n = document.getElementById(this.props.name);
        n.parentNode.removeChild(n);
      }
    }, {
      key: "render",
      value: function () {
        return null;
      }
    }]), t;
  }(_A.Component),
  Fx = function (e) {
    var t = e.imageBackgroundColor;
    return `
  body {
    overflow: hidden;
  }

  .__react_modal_image__modal_container {
    position: fixed;
    z-index: 5000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    touch-action: none;
    overflow: hidden;
  }

  .__react_modal_image__modal_content {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .__react_modal_image__modal_content img, 
  .__react_modal_image__modal_content svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .__react_modal_image__medium_img {
    max-width: 98%;
    max-height: 98%;
    background-color: `.concat(t, `;
  }

  .__react_modal_image__large_img {
    cursor: move;
    background-color: `).concat(t, `
  }

  .__react_modal_image__icon_menu a {
    display: inline-block;
    font-size: 40px;
    cursor: pointer;
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0px 5px 0px 5px;
    margin-left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }

  .__react_modal_image__icon_menu {
    display: inline-block;
    float: right;
  }

  .__react_modal_image__caption {
    display: inline-block;
    color: white;
    font-size: 120%;
    padding: 10px;
    margin: 0;
  }

  .__react_modal_image__header {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
`);
  },
  Ex = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), K.createElement("path", {
      d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
    }));
  },
  Hx = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), K.createElement("path", {
      d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
    }));
  },
  Ix = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    }), K.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }));
  },
  xx = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }), K.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }));
  },
  Sx = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      height: "48",
      viewBox: "0 0 24 24",
      width: "48",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
    }), K.createElement("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }));
  },
  Lx = function () {
    return K.createElement("svg", {
      fill: "#ffffff",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, K.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0zm0 0h24v24H0V0z"
    }), K.createElement("path", {
      d: "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"
    }));
  };
function bx(A) {
  return document.location.hostname !== new URL(A, document.location).hostname;
}
var Tx = function (e) {
    return function (t) {
      bx(e) && (t.preventDefault(), fetch(e).then(function (r) {
        return r.ok || console.error("Failed to download image, HTTP status " + r.status + " from " + e), r.blob().then(function (n) {
          var o = document.createElement("a");
          o.setAttribute("download", e.split("/").pop()), o.href = URL.createObjectURL(n), o.click();
        });
      }).catch(function (r) {
        console.error(r), console.error("Failed to download image from " + e);
      }));
    };
  },
  Ox = function (e) {
    var t = e.image,
      r = e.alt,
      n = e.zoomed,
      o = e.toggleZoom,
      i = e.toggleRotate,
      s = e.onClose,
      a = e.enableDownload,
      l = e.enableZoom,
      u = e.enableRotate;
    return K.createElement("div", {
      className: "__react_modal_image__header"
    }, K.createElement("span", {
      className: "__react_modal_image__icon_menu"
    }, a && K.createElement("a", {
      href: t,
      download: !0,
      onClick: Tx(t)
    }, K.createElement(Ix, null)), l && K.createElement("a", {
      onClick: o
    }, n ? K.createElement(Hx, null) : K.createElement(Ex, null)), u && K.createElement("a", {
      onClick: i
    }, K.createElement(Lx, null)), K.createElement("a", {
      onClick: s
    }, K.createElement(xx, null))), r && K.createElement("span", {
      className: "__react_modal_image__caption"
    }, r));
  };
function Pu(A) {
  "@babel/helpers - typeof";

  return Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pu(A);
}
function Dx(A, e) {
  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function kx(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function Kx(A, e, t) {
  return e && kx(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function Rx(A, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  A.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: A,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(A, "prototype", {
    writable: !1
  }), e && Vu(A, e);
}
function Vu(A, e) {
  return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, n) {
    return r.__proto__ = n, r;
  }, Vu(A, e);
}
function _x(A) {
  var e = Nx();
  return function () {
    var r = Es(A),
      n;
    if (e) {
      var o = Es(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Mx(this, n);
  };
}
function Mx(A, e) {
  if (e && (Pu(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ni(A);
}
function Ni(A) {
  if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return A;
}
function Nx() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Es(A) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Es(A);
}
function al(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
var YB = function (A) {
  Rx(t, A);
  var e = _x(t);
  function t() {
    var r;
    Dx(this, t);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)), al(Ni(r), "state", {
      loading: !0
    }), al(Ni(r), "handleOnLoad", function () {
      r.setState({
        loading: !1
      });
    }), al(Ni(r), "handleOnContextMenu", function (s) {
      !r.props.contextMenu && s.preventDefault();
    }), r;
  }
  return Kx(t, [{
    key: "render",
    value: function () {
      var n = this.props,
        o = n.id,
        i = n.className,
        s = n.src,
        a = n.style,
        l = n.handleDoubleClick;
      return K.createElement("div", null, this.state.loading && K.createElement(Sx, null), K.createElement("img", {
        id: o,
        className: i,
        src: s,
        style: a,
        onLoad: this.handleOnLoad,
        onDoubleClick: l,
        onContextMenu: this.handleOnContextMenu
      }));
    }
  }]), t;
}(_A.Component);
function Gu(A) {
  "@babel/helpers - typeof";

  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gu(A);
}
function Px(A, e) {
  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Vx(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function Gx(A, e, t) {
  return e && Vx(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function Wx(A, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  A.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: A,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(A, "prototype", {
    writable: !1
  }), e && Wu(A, e);
}
function Wu(A, e) {
  return Wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, n) {
    return r.__proto__ = n, r;
  }, Wu(A, e);
}
function Xx(A) {
  var e = jx();
  return function () {
    var r = Hs(A),
      n;
    if (e) {
      var o = Hs(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return zx(this, n);
  };
}
function zx(A, e) {
  if (e && (Gu(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Xe(A);
}
function Xe(A) {
  if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return A;
}
function jx() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Hs(A) {
  return Hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Hs(A);
}
function ct(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
var Jx = function (A) {
  Wx(t, A);
  var e = Xx(t);
  function t() {
    var r;
    Px(this, t);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)), ct(Xe(r), "state", {
      move: {
        x: 0,
        y: 0
      },
      moveStart: void 0,
      zoomed: !1,
      rotationDeg: 0
    }), ct(Xe(r), "handleKeyDown", function (s) {
      (s.keyCode === 27 || s.keyCode === 13) && r.props.onClose();
    }), ct(Xe(r), "getCoordinatesIfOverImg", function (s) {
      var a = s.changedTouches ? s.changedTouches[0] : s;
      if (a.target.id === "react-modal-image-img") {
        var l = r.contentEl.getBoundingClientRect(),
          u = a.clientX - l.left,
          c = a.clientY - l.top;
        return {
          x: u,
          y: c
        };
      }
    }), ct(Xe(r), "handleMouseDownOrTouchStart", function (s) {
      if (s.preventDefault(), !(s.touches && s.touches.length > 1)) {
        var a = r.getCoordinatesIfOverImg(s);
        a || r.props.onClose(), r.state.zoomed && r.setState(function (l) {
          return {
            moveStart: {
              x: a.x - l.move.x,
              y: a.y - l.move.y
            }
          };
        });
      }
    }), ct(Xe(r), "handleMouseMoveOrTouchMove", function (s) {
      if (s.preventDefault(), !(!r.state.zoomed || !r.state.moveStart) && !(s.touches && s.touches.length > 1)) {
        var a = r.getCoordinatesIfOverImg(s);
        a && r.setState(function (l) {
          return {
            move: {
              x: a.x - l.moveStart.x,
              y: a.y - l.moveStart.y
            }
          };
        });
      }
    }), ct(Xe(r), "handleMouseUpOrTouchEnd", function (s) {
      r.setState({
        moveStart: void 0
      });
    }), ct(Xe(r), "toggleZoom", function (s) {
      s.preventDefault(), r.setState(function (a) {
        return {
          zoomed: !a.zoomed,
          move: a.zoomed ? {
            x: 0,
            y: 0
          } : a.move
        };
      });
    }), ct(Xe(r), "toggleRotate", function (s) {
      s.preventDefault();
      var a = r.state.rotationDeg;
      if (a === 360) {
        r.setState({
          rotationDeg: 90
        });
        return;
      }
      r.setState(function (l) {
        return {
          rotationDeg: l.rotationDeg += 90
        };
      });
    }), r;
  }
  return Gx(t, [{
    key: "componentDidMount",
    value: function () {
      document.addEventListener("keydown", this.handleKeyDown, !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      document.removeEventListener("keydown", this.handleKeyDown, !1);
    }
  }, {
    key: "render",
    value: function () {
      var n = this,
        o = this.props,
        i = o.medium,
        s = o.large,
        a = o.alt,
        l = o.onClose,
        u = o.hideDownload,
        c = o.hideZoom,
        f = o.showRotate,
        w = o.imageBackgroundColor,
        h = w === void 0 ? "black" : w,
        g = this.state,
        U = g.move,
        B = g.zoomed,
        d = g.rotationDeg;
      return K.createElement("div", null, K.createElement(Ux, {
        name: "__react_modal_image__lightbox",
        css: Fx({
          imageBackgroundColor: h
        })
      }), K.createElement("div", {
        className: "__react_modal_image__modal_container"
      }, K.createElement("div", {
        className: "__react_modal_image__modal_content",
        onMouseDown: this.handleMouseDownOrTouchStart,
        onMouseUp: this.handleMouseUpOrTouchEnd,
        onMouseMove: this.handleMouseMoveOrTouchMove,
        onTouchStart: this.handleMouseDownOrTouchStart,
        onTouchEnd: this.handleMouseUpOrTouchEnd,
        onTouchMove: this.handleMouseMoveOrTouchMove,
        ref: function (m) {
          n.contentEl = m;
        }
      }, B && K.createElement(YB, {
        id: "react-modal-image-img",
        className: "__react_modal_image__large_img",
        src: s || i,
        style: {
          transform: "translate3d(-50%, -50%, 0) translate3d(".concat(U.x, "px, ").concat(U.y, "px, 0) rotate(").concat(d, "deg)"),
          WebkitTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(U.x, "px, ").concat(U.y, "px, 0) rotate(").concat(d, "deg)"),
          MsTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(U.x, "px, ").concat(U.y, "px, 0) rotate(").concat(d, "deg)")
        },
        handleDoubleClick: this.toggleZoom
      }), !B && K.createElement(YB, {
        id: "react-modal-image-img",
        className: "__react_modal_image__medium_img",
        src: i || s,
        handleDoubleClick: this.toggleZoom,
        contextMenu: !i,
        style: {
          transform: "translate3d(-50%, -50%, 0) rotate(".concat(d, "deg)"),
          WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(d, "deg)"),
          MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(d, "deg)")
        }
      })), K.createElement(Ox, {
        image: s || i,
        alt: a,
        zoomed: B,
        toggleZoom: this.toggleZoom,
        toggleRotate: this.toggleRotate,
        onClose: l,
        enableDownload: !u,
        enableZoom: !c,
        enableRotate: !!f
      })));
    }
  }]), t;
}(_A.Component);
function Xu(A) {
  "@babel/helpers - typeof";

  return Xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xu(A);
}
function Yx(A, e) {
  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Zx(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function $x(A, e, t) {
  return e && Zx(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function qx(A, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  A.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: A,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(A, "prototype", {
    writable: !1
  }), e && zu(A, e);
}
function zu(A, e) {
  return zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, n) {
    return r.__proto__ = n, r;
  }, zu(A, e);
}
function AS(A) {
  var e = tS();
  return function () {
    var r = Is(A),
      n;
    if (e) {
      var o = Is(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return eS(this, n);
  };
}
function eS(A, e) {
  if (e && (Xu(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ju(A);
}
function ju(A) {
  if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return A;
}
function tS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Is(A) {
  return Is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Is(A);
}
function ZB(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
var rS = function (A) {
  qx(t, A);
  var e = AS(t);
  function t() {
    var r;
    Yx(this, t);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)), ZB(ju(r), "state", {
      modalOpen: !1
    }), ZB(ju(r), "toggleModal", function () {
      r.setState(function (s) {
        return {
          modalOpen: !s.modalOpen
        };
      });
    }), r;
  }
  return $x(t, [{
    key: "render",
    value: function () {
      var n = this.props,
        o = n.className,
        i = n.small,
        s = n.smallSrcSet,
        a = n.medium,
        l = n.large,
        u = n.alt,
        c = n.hideDownload,
        f = n.hideZoom,
        w = n.showRotate,
        h = n.imageBackgroundColor,
        g = this.state.modalOpen;
      return K.createElement("div", null, K.createElement("img", {
        className: o,
        style: {
          cursor: "pointer",
          maxWidth: "100%",
          maxHeight: "100%"
        },
        onClick: this.toggleModal,
        src: i,
        srcSet: s,
        alt: u
      }), g && K.createElement(Jx, {
        medium: a,
        large: l,
        alt: u,
        onClose: this.toggleModal,
        hideDownload: c,
        hideZoom: f,
        showRotate: w,
        imageBackgroundColor: h
      }));
    }
  }]), t;
}(_A.Component);
const nS = ({
    message: A,
    sentBySupport: e
  }) => S.jsxs("div", {
    className: _e("mt-4 h-max w-max max-w-[17rem] cursor-pointer whitespace-pre-wrap break-words rounded-md bg-muted p-2 shadow-md", !e && "bg-blue-600 self-end"),
    children: [S.jsx(rS, {
      small: A.urlImage,
      medium: A.urlImage,
      className: "h-[7.5rem] w-[13rem] object-cover"
    }), S.jsx("h2", {
      className: _e(!e && "text-white"),
      children: A.messages
    }), S.jsx("section", {
      className: "flex items-center justify-between gap-2",
      children: S.jsx("section", {
        className: "flex items-center gap-1",
        children: S.jsx("p", {
          className: _e("mt-1 text-end text-xs", e ? "text-black" : "text-white"),
          children: uf(A.createdAt, "HH:mm")
        })
      })
    })]
  }, new Date().getTime()),
  oS = ({
    message: A,
    sentBySupport: e
  }) => S.jsxs("div", {
    className: _e("mt-4 h-max w-max max-w-[17rem] cursor-pointer whitespace-pre-wrap break-words rounded-md bg-muted p-2 shadow-md", !e && "bg-gray-400"),
    children: [S.jsxs("div", {
      className: "flex min-w-[10rem] items-center justify-between gap-2 rounded-md bg-gray-200 p-2",
      children: [S.jsx("div", {
        className: "",
        children: S.jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "icon icon-tabler icons-tabler-filled icon-tabler-file",
          children: [S.jsx("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
          }), S.jsx("path", {
            d: "M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z"
          }), S.jsx("path", {
            d: "M19 7h-4l-.001 -4.001z"
          })]
        })
      }), S.jsx("a", {
        href: A.urlImage || "",
        download: A.urlImage,
        className: "rounded-full bg-gray-300 p-2 shadow-xl",
        children: S.jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          className: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-to-down",
          children: [S.jsx("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
          }), S.jsx("path", {
            d: "M4 20l16 0"
          }), S.jsx("path", {
            d: "M12 14l0 -10"
          }), S.jsx("path", {
            d: "M12 14l4 -4"
          }), S.jsx("path", {
            d: "M12 14l-4 -4"
          })]
        })
      })]
    }), S.jsx("h2", {
      className: _e(!e && "text-white"),
      children: A.messages
    }), S.jsx("section", {
      className: "flex items-center justify-between gap-2",
      children: S.jsx("section", {
        className: "flex items-center gap-1",
        children: S.jsx("p", {
          className: _e("mt-1 text-end text-xs", e ? "text-black" : "text-white"),
          children: uf(A.createdAt, "HH:mm")
        })
      })
    })]
  }, new Date().getTime()); /*! js-cookie v3.0.5 | MIT */
function wi(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t) A[r] = t[r];
  }
  return A;
}
var iS = {
  read: function (A) {
    return A[0] === '"' && (A = A.slice(1, -1)), A.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function (A) {
    return encodeURIComponent(A).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function Ju(A, e) {
  function t(n, o, i) {
    if (!(typeof document > "u")) {
      i = wi({}, e, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), n = encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var a in i) i[a] && (s += "; " + a, i[a] !== !0 && (s += "=" + i[a].split(";")[0]));
      return document.cookie = n + "=" + A.write(o, n) + s;
    }
  }
  function r(n) {
    if (!(typeof document > "u" || arguments.length && !n)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], i = {}, s = 0; s < o.length; s++) {
        var a = o[s].split("="),
          l = a.slice(1).join("=");
        try {
          var u = decodeURIComponent(a[0]);
          if (i[u] = A.read(l, u), n === u) break;
        } catch {}
      }
      return n ? i[n] : i;
    }
  }
  return Object.create({
    set: t,
    get: r,
    remove: function (n, o) {
      t(n, "", wi({}, o, {
        expires: -1
      }));
    },
    withAttributes: function (n) {
      return Ju(this.converter, wi({}, this.attributes, n));
    },
    withConverter: function (n) {
      return Ju(wi({}, this.converter, n), this.attributes);
    }
  }, {
    attributes: {
      value: Object.freeze(e)
    },
    converter: {
      value: Object.freeze(A)
    }
  });
}
var sS = Ju(iS, {
  path: "/"
});
function aS() {
  const [A, e] = _A.useState(!1),
    [t, r] = _A.useState(!1),
    [n, o] = _A.useState(""),
    [i, s] = _A.useState([]),
    [a, l] = _A.useState(""),
    u = sS.get("user"),
    c = _A.useRef(null),
    f = window.location.href,
    w = tm(f) || "704-apps";
  function h() {
    e(Q => !Q);
  }
  const g = () => {
      c.current && c.current.scrollIntoView({
        behavior: "instant",
        block: "end"
      });
    },
    U = async () => (r(!0), await new Promise(H => {
      setTimeout(async () => {
        const I = await ME(document.body),
          M = await new Promise(N => I.toBlob(N, "image/png")),
          D = I.toDataURL("image/png");
        r(!1), setTimeout(() => {
          g();
        }, 300), H({
          file: M,
          fileUrl: D
        });
      }, 300);
    })),
    B = Q => {
      Q.key === "Enter" && !Q.shiftKey && (Q.preventDefault(), d());
    };
  function d() {
    n.trim() && (s(Q => [...Q, {
      messages: n,
      messageType: "message",
      orige: "monitor",
      projectId: w,
      id: new Date().getTime().toString(),
      userType: "contacts",
      supportId: a,
      createdAt: new Date()
    }]), o(""), at.emit("clientMessage", {
      userType: "contacts",
      supportId: void 0,
      projectId: w,
      messageType: "message",
      messages: n,
      origin: "monitor"
    }));
  }
  const p = async () => {
    const {
        file: Q,
        fileUrl: H
      } = await U(),
      I = new FormData(),
      M = new Date().getTime().toString();
    I.append("file", Q), I.append("messages", ""), I.append("projectId", w), I.append("messageType", "image"), I.append("userType", "monitor"), I.append("origin", "monitor"), I.append("key", M), a && I.append("supportId", a);
    try {
      s(D => [...D, {
        key: M,
        messages: n,
        messageType: "image",
        origin: "monitor",
        projectId: w,
        userType: "monitor",
        isLocal: !0,
        createdAt: new Date(),
        urlImage: H
      }]), await _u.post("/chat/media_in_message", I);
    } catch (D) {
      console.error("Erro ao enviar mensagem:", D);
    }
  };
  async function m() {
    try {
      const Q = await _u.get(`chat/messages/${w}`, {});
      Q && s(Q.data);
    } catch (Q) {
      console.log(Q);
    }
  }
  const v = Q => {
      console.log("MESSAGE RECEIVED", Q), l(Q == null ? void 0 : Q.supportId), s(H => [...H, {
        messages: Q.messages,
        messageType: Q.messageType,
        origin: Q.origin,
        projectId: Q.projectId,
        userType: Q.userType,
        id: Q.id,
        createdAt: Q.createdAt,
        isLocal: !1,
        statusAttention: Q.statusAttention,
        urlImage: Q.urlImage
      }]);
    },
    C = Q => {
      s(H => {
        const I = H.findIndex(M => M.id === Q.id);
        return H[I].messages = Q.updatedMessage, [...H];
      });
    },
    F = Q => {
      console.log("MESSAGE TO DELETE", Q), s(H => [...H.filter(M => M.id !== Q.id)]);
    };
  return _A.useEffect(() => (at.emit("joinRoom", {
    room: "client",
    projectId: w
  }), at.on("clientMessage", v), at.on("supportMsgUpdate", C), at.on("deletedMessage", F), m(), () => {
    at.off("clientMessage", v), at.off("supportMsgUpdate", C), at.off("deletedMessage", F);
  }), []), _A.useEffect(() => {
    g();
  }, [i]), S.jsx(S.Fragment, {
    children: u && S.jsxs("div", {
      className: _e("absolute z-[99999] right-4 lg:right-16 bottom-10 flex flex-col items-end", t && "hidden"),
      children: [S.jsxs("div", {
        className: `w-[20rem]   h-full max-h-[35.7rem] flex flex-col p border border-gray-200 mb-8 rounded-lg bg-gray-100 transition-all duration-500 transform ${A ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden "}`,
        children: [S.jsxs("header", {
          className: "w-full bg-blue-500 p-8 rounded-t-lg flex justify-center items-center flex-col",
          children: [S.jsx("div", {
            className: "bg-white w-12 h-12 p-2 flex items-center justify-center rounded-full",
            children: S.jsx(kC, {
              className: "text-gray-800"
            })
          }), S.jsx("h3", {
            className: "font-semibold text-white",
            children: "Suporte"
          })]
        }), S.jsxs("div", {
          className: "flex h-[20rem]  flex-col  overflow-auto px-2 ",
          children: [i.map(Q => {
            const H = Q.userType === "support";
            return S.jsxs(S.Fragment, {
              children: [Q.messageType === "message" && S.jsx(Bx, {
                message: Q,
                sentBySupport: H
              }), Q.messageType === "image" && S.jsx(nS, {
                message: Q,
                sentBySupport: H
              }), Q.messageType === "document" && S.jsx(oS, {
                message: Q,
                sentBySupport: H
              })]
            });
          }), S.jsx("div", {
            ref: c,
            className: "p-2"
          }), " "]
        }), S.jsxs("section", {
          className: "flex w-full justify-between items-start border-t border-gray-300 self-end justify-self-end",
          children: [S.jsx(gQ, {
            value: n,
            onChange: Q => o(Q.target.value),
            placeholder: "Escreva aqui sua mensagem",
            onKeyDown: B
          }), S.jsxs("section", {
            className: "flex flex-col",
            children: [S.jsx("button", {
              onClick: d,
              className: "p-1  bg-blue-500 outline-none flex  justify-center items-center  h-full",
              children: S.jsx(pQ, {
                className: "text-white"
              })
            }), S.jsx("button", {
              onClick: p,
              className: "bg-gray-200 flex items-center justify-center",
              children: S.jsx(VE, {
                className: "text-gray-700"
              })
            })]
          })]
        })]
      }), S.jsxs("button", {
        onClick: h,
        className: "bg-blue-500 shadow-xl w-16 h-16 rounded-full flex items-center justify-center p-2 relative",
        children: [S.jsx(OC, {
          className: `text-white absolute transition-transform duration-300 ${A ? "opacity-0 scale-75" : "opacity-100 scale-100"}`
        }), S.jsx(DC, {
          className: `text-white absolute transition-transform duration-300 ${A ? "opacity-100 scale-100" : "opacity-0 scale-75"}`
        })]
      })]
    })
  });
}
const lS = () => S.jsx(aS, {});
ll.createRoot(document.getElementById("704chat")).render(S.jsx(K.StrictMode, {
  children: S.jsx(lS, {})
}));