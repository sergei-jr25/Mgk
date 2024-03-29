/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, i) => {
        var s = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          n = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          p = Math.max,
          h = Math.min,
          f = function () {
            return d.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var i = n.test(e);
          return i || o.test(e)
            ? a(e.slice(2), i ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var s,
            r,
            n,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var i = s,
              n = r;
            return (s = r = void 0), (c = t), (o = e.apply(n, i));
          }
          function b(e) {
            return (c = e), (a = setTimeout(w, t)), d ? y(e) : o;
          }
          function x(e) {
            var i = e - l;
            return void 0 === l || i >= t || i < 0 || (u && e - c >= n);
          }
          function w() {
            var e = f();
            if (x(e)) return S(e);
            a = setTimeout(
              w,
              (function (e) {
                var i = t - (e - l);
                return u ? h(i, n - (e - c)) : i;
              })(e)
            );
          }
          function S(e) {
            return (a = void 0), v && s ? y(e) : ((s = r = void 0), o);
          }
          function E() {
            var e = f(),
              i = x(e);
            if (((s = arguments), (r = this), (l = e), i)) {
              if (void 0 === a) return b(l);
              if (u) return (a = setTimeout(w, t)), y(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = m(t) || 0),
            g(i) &&
              ((d = !!i.leading),
              (n = (u = "maxWait" in i) ? p(m(i.maxWait) || 0, t) : n),
              (v = "trailing" in i ? !!i.trailing : v)),
            (E.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (s = l = r = a = void 0);
            }),
            (E.flush = function () {
              return void 0 === a ? o : S(f());
            }),
            E
          );
        };
      },
      773: (e, t, i) => {
        var s = "__lodash_hash_undefined__",
          r = "[object Function]",
          n = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          f = c["__core-js_shared__"],
          g = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          m = p.toString,
          v = h.hasOwnProperty,
          y = h.toString,
          b = RegExp(
            "^" +
              m
                .call(v)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = u.splice,
          w = L(c, "Map"),
          S = L(Object, "create");
        function E(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function C(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function T(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function O(e, t) {
          for (var i, s, r = e.length; r--; )
            if ((i = e[r][0]) === (s = t) || (i != i && s != s)) return r;
          return -1;
        }
        function A(e) {
          if (!M(e) || ((t = e), g && g in t)) return !1;
          var t,
            i =
              (function (e) {
                var t = M(e) ? y.call(e) : "";
                return t == r || t == n;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? b
                : o;
          return i.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function k(e, t) {
          var i,
            s,
            r = e.__data__;
          return (
            "string" == (s = typeof (i = t)) ||
            "number" == s ||
            "symbol" == s ||
            "boolean" == s
              ? "__proto__" !== i
              : null === i
          )
            ? r["string" == typeof t ? "string" : "hash"]
            : r.map;
        }
        function L(e, t) {
          var i = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return A(i) ? i : void 0;
        }
        function I(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var i = function () {
            var s = arguments,
              r = t ? t.apply(this, s) : s[0],
              n = i.cache;
            if (n.has(r)) return n.get(r);
            var o = e.apply(this, s);
            return (i.cache = n.set(r, o)), o;
          };
          return (i.cache = new (I.Cache || T)()), i;
        }
        function M(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (E.prototype.clear = function () {
          this.__data__ = S ? S(null) : {};
        }),
          (E.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (E.prototype.get = function (e) {
            var t = this.__data__;
            if (S) {
              var i = t[e];
              return i === s ? void 0 : i;
            }
            return v.call(t, e) ? t[e] : void 0;
          }),
          (E.prototype.has = function (e) {
            var t = this.__data__;
            return S ? void 0 !== t[e] : v.call(t, e);
          }),
          (E.prototype.set = function (e, t) {
            return (this.__data__[e] = S && void 0 === t ? s : t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = [];
          }),
          (C.prototype.delete = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return (
              !(i < 0) && (i == t.length - 1 ? t.pop() : x.call(t, i, 1), !0)
            );
          }),
          (C.prototype.get = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return i < 0 ? void 0 : t[i][1];
          }),
          (C.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (C.prototype.set = function (e, t) {
            var i = this.__data__,
              s = O(i, e);
            return s < 0 ? i.push([e, t]) : (i[s][1] = t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = {
              hash: new E(),
              map: new (w || C)(),
              string: new E(),
            };
          }),
          (T.prototype.delete = function (e) {
            return k(this, e).delete(e);
          }),
          (T.prototype.get = function (e) {
            return k(this, e).get(e);
          }),
          (T.prototype.has = function (e) {
            return k(this, e).has(e);
          }),
          (T.prototype.set = function (e, t) {
            return k(this, e).set(e, t), this;
          }),
          (I.Cache = T),
          (e.exports = I);
      },
      3096: (e, t, i) => {
        var s = "Expected a function",
          r = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          g = function () {
            return u.Date.now();
          };
        function m(e, t, i) {
          var r,
            n,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            p = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(s);
          function b(t) {
            var i = r,
              s = n;
            return (r = n = void 0), (d = t), (a = e.apply(s, i));
          }
          function x(e) {
            return (d = e), (l = setTimeout(S, t)), u ? b(e) : a;
          }
          function w(e) {
            var i = e - c;
            return void 0 === c || i >= t || i < 0 || (p && e - d >= o);
          }
          function S() {
            var e = g();
            if (w(e)) return E(e);
            l = setTimeout(
              S,
              (function (e) {
                var i = t - (e - c);
                return p ? f(i, o - (e - d)) : i;
              })(e)
            );
          }
          function E(e) {
            return (l = void 0), m && r ? b(e) : ((r = n = void 0), a);
          }
          function C() {
            var e = g(),
              i = w(e);
            if (((r = arguments), (n = this), (c = e), i)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(S, t)), b(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), a;
          }
          return (
            (t = y(t) || 0),
            v(i) &&
              ((u = !!i.leading),
              (o = (p = "maxWait" in i) ? h(y(i.maxWait) || 0, t) : o),
              (m = "trailing" in i ? !!i.trailing : m)),
            (C.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (r = c = n = l = void 0);
            }),
            (C.flush = function () {
              return void 0 === l ? a : E(g());
            }),
            C
          );
        }
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function y(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var i = o.test(e);
          return i || a.test(e)
            ? l(e.slice(2), i ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var r = !0,
            n = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            v(i) &&
              ((r = "leading" in i ? !!i.leading : r),
              (n = "trailing" in i ? !!i.trailing : n)),
            m(e, t, { leading: r, maxWait: t, trailing: n })
          );
        };
      },
      5055: (e, t, i) => {
        var s = i(8454),
          r = i(6282),
          n = i(180),
          o = s.TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw o(n(e) + " is not a function");
        };
      },
      2004: (e, t, i) => {
        var s = i(8454),
          r = i(6282),
          n = s.String,
          o = s.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || r(e)) return e;
          throw o("Can't set " + n(e) + " as a prototype");
        };
      },
      9256: (e, t, i) => {
        var s = i(8149),
          r = i(1525),
          n = i(9168),
          o = s("unscopables"),
          a = Array.prototype;
        null == a[o] && n.f(a, o, { configurable: !0, value: r(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, i) => {
        "use strict";
        var s = i(7321).charAt;
        e.exports = function (e, t, i) {
          return t + (i ? s(e, t).length : 1);
        };
      },
      3046: (e, t, i) => {
        var s = i(8454),
          r = i(1786),
          n = s.TypeError;
        e.exports = function (e, t) {
          if (r(t, e)) return e;
          throw n("Incorrect invocation");
        };
      },
      1474: (e, t, i) => {
        var s = i(8454),
          r = i(5896),
          n = s.String,
          o = s.TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw o(n(e) + " is not an object");
        };
      },
      8774: (e, t, i) => {
        var s = i(6183);
        e.exports = s(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, i) => {
        "use strict";
        var s = i(528).forEach,
          r = i(1923)("forEach");
        e.exports = r
          ? [].forEach
          : function (e) {
              return s(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, i) => {
        var s = i(3206),
          r = i(9623),
          n = i(1829),
          o = function (e) {
            return function (t, i, o) {
              var a,
                l = s(t),
                c = n(l),
                d = r(o, c);
              if (e && i != i) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === i) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, i) => {
        var s = i(1098),
          r = i(1768),
          n = i(7530),
          o = i(9473),
          a = i(1829),
          l = i(2768),
          c = r([].push),
          d = function (e) {
            var t = 1 == e,
              i = 2 == e,
              r = 3 == e,
              d = 4 == e,
              u = 6 == e,
              p = 7 == e,
              h = 5 == e || u;
            return function (f, g, m, v) {
              for (
                var y,
                  b,
                  x = o(f),
                  w = n(x),
                  S = s(g, m),
                  E = a(w),
                  C = 0,
                  T = v || l,
                  O = t ? T(f, E) : i || p ? T(f, 0) : void 0;
                E > C;
                C++
              )
                if ((h || C in w) && ((b = S((y = w[C]), C, x)), e))
                  if (t) O[C] = b;
                  else if (b)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return C;
                      case 2:
                        c(O, y);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, y);
                    }
              return u ? -1 : r || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      4820: (e, t, i) => {
        var s = i(6183),
          r = i(8149),
          n = i(4324),
          o = r("species");
        e.exports = function (e) {
          return (
            n >= 51 ||
            !s(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, i) => {
        "use strict";
        var s = i(6183);
        e.exports = function (e, t) {
          var i = [][e];
          return (
            !!i &&
            s(function () {
              i.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, i) => {
        var s = i(8454),
          r = i(5055),
          n = i(9473),
          o = i(7530),
          a = i(1829),
          l = s.TypeError,
          c = function (e) {
            return function (t, i, s, c) {
              r(i);
              var d = n(t),
                u = o(d),
                p = a(d),
                h = e ? p - 1 : 0,
                f = e ? -1 : 1;
              if (s < 2)
                for (;;) {
                  if (h in u) {
                    (c = u[h]), (h += f);
                    break;
                  }
                  if (((h += f), e ? h < 0 : p <= h))
                    throw l("Reduce of empty array with no initial value");
                }
              for (; e ? h >= 0 : p > h; h += f)
                h in u && (c = i(c, u[h], h, d));
              return c;
            };
          };
        e.exports = { left: c(!1), right: c(!0) };
      },
      4072: (e, t, i) => {
        var s = i(8454),
          r = i(9623),
          n = i(1829),
          o = i(2759),
          a = s.Array,
          l = Math.max;
        e.exports = function (e, t, i) {
          for (
            var s = n(e),
              c = r(t, s),
              d = r(void 0 === i ? s : i, s),
              u = a(l(d - c, 0)),
              p = 0;
            c < d;
            c++, p++
          )
            o(u, p, e[c]);
          return (u.length = p), u;
        };
      },
      9882: (e, t, i) => {
        var s = i(8454),
          r = i(7931),
          n = i(2240),
          o = i(5896),
          a = i(8149)("species"),
          l = s.Array;
        e.exports = function (e) {
          var t;
          return (
            r(e) &&
              ((t = e.constructor),
              ((n(t) && (t === l || r(t.prototype))) ||
                (o(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      2768: (e, t, i) => {
        var s = i(9882);
        e.exports = function (e, t) {
          return new (s(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, i) => {
        var s = i(8149)("iterator"),
          r = !1;
        try {
          var n = 0,
            o = {
              next: function () {
                return { done: !!n++ };
              },
              return: function () {
                r = !0;
              },
            };
          (o[s] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !r) return !1;
          var i = !1;
          try {
            var n = {};
            (n[s] = function () {
              return {
                next: function () {
                  return { done: (i = !0) };
                },
              };
            }),
              e(n);
          } catch (e) {}
          return i;
        };
      },
      1510: (e, t, i) => {
        var s = i(1768),
          r = s({}.toString),
          n = s("".slice);
        e.exports = function (e) {
          return n(r(e), 8, -1);
        };
      },
      9225: (e, t, i) => {
        var s = i(8454),
          r = i(4823),
          n = i(6282),
          o = i(1510),
          a = i(8149)("toStringTag"),
          l = s.Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = r
          ? o
          : function (e) {
              var t, i, s;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (i = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? i
                : c
                ? o(t)
                : "Object" == (s = o(t)) && n(t.callee)
                ? "Arguments"
                : s;
            };
      },
      7790: (e, t, i) => {
        "use strict";
        var s = i(1768),
          r = i(9573),
          n = i(6582).getWeakData,
          o = i(1474),
          a = i(5896),
          l = i(3046),
          c = i(1518),
          d = i(528),
          u = i(8281),
          p = i(1030),
          h = p.set,
          f = p.getterFor,
          g = d.find,
          m = d.findIndex,
          v = s([].splice),
          y = 0,
          b = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          w = function (e, t) {
            return g(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = w(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!w(this, e);
          },
          set: function (e, t) {
            var i = w(this, e);
            i ? (i[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = m(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && v(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, i, s) {
              var d = e(function (e, r) {
                  l(e, p),
                    h(e, { type: t, id: y++, frozen: void 0 }),
                    null != r && c(r, e[s], { that: e, AS_ENTRIES: i });
                }),
                p = d.prototype,
                g = f(t),
                m = function (e, t, i) {
                  var s = g(e),
                    r = n(o(t), !0);
                  return !0 === r ? b(s).set(t, i) : (r[s.id] = i), e;
                };
              return (
                r(p, {
                  delete: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var i = n(e);
                    return !0 === i
                      ? b(t).delete(e)
                      : i && u(i, t.id) && delete i[t.id];
                  },
                  has: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var i = n(e);
                    return !0 === i ? b(t).has(e) : i && u(i, t.id);
                  },
                }),
                r(
                  p,
                  i
                    ? {
                        get: function (e) {
                          var t = g(this);
                          if (a(e)) {
                            var i = n(e);
                            return !0 === i
                              ? b(t).get(e)
                              : i
                              ? i[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return m(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return m(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      6645: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(8454),
          n = i(1768),
          o = i(1949),
          a = i(3971),
          l = i(6582),
          c = i(1518),
          d = i(3046),
          u = i(6282),
          p = i(5896),
          h = i(6183),
          f = i(1751),
          g = i(820),
          m = i(7770);
        e.exports = function (e, t, i) {
          var v = -1 !== e.indexOf("Map"),
            y = -1 !== e.indexOf("Weak"),
            b = v ? "set" : "add",
            x = r[e],
            w = x && x.prototype,
            S = x,
            E = {},
            C = function (e) {
              var t = n(w[e]);
              a(
                w,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return y && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, i) {
                      return t(this, 0 === e ? 0 : e, i), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(x) ||
                !(
                  y ||
                  (w.forEach &&
                    !h(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (S = i.getConstructor(t, e, v, b)), l.enable();
          else if (o(e, !0)) {
            var T = new S(),
              O = T[b](y ? {} : -0, 1) != T,
              A = h(function () {
                T.has(1);
              }),
              k = f(function (e) {
                new x(e);
              }),
              L =
                !y &&
                h(function () {
                  for (var e = new x(), t = 5; t--; ) e[b](t, t);
                  return !e.has(-0);
                });
            k ||
              (((S = t(function (e, t) {
                d(e, w);
                var i = m(new x(), e, S);
                return null != t && c(t, i[b], { that: i, AS_ENTRIES: v }), i;
              })).prototype = w),
              (w.constructor = S)),
              (A || L) && (C("delete"), C("has"), v && C("get")),
              (L || O) && C(b),
              y && w.clear && delete w.clear;
          }
          return (
            (E[e] = S),
            s({ global: !0, forced: S != x }, E),
            g(S, e),
            y || i.setStrong(S, e, v),
            S
          );
        };
      },
      882: (e, t, i) => {
        var s = i(8281),
          r = i(1441),
          n = i(5663),
          o = i(9168);
        e.exports = function (e, t, i) {
          for (var a = r(t), l = o.f, c = n.f, d = 0; d < a.length; d++) {
            var u = a[d];
            s(e, u) || (i && s(i, u)) || l(e, u, c(t, u));
          }
        };
      },
      7401: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      2538: (e, t, i) => {
        "use strict";
        var s = i(6524).IteratorPrototype,
          r = i(1525),
          n = i(9273),
          o = i(820),
          a = i(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, i, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = r(s, { next: n(+!c, i) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      1501: (e, t, i) => {
        var s = i(723),
          r = i(9168),
          n = i(9273);
        e.exports = s
          ? function (e, t, i) {
              return r.f(e, t, n(1, i));
            }
          : function (e, t, i) {
              return (e[t] = i), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, i) => {
        "use strict";
        var s = i(2988),
          r = i(9168),
          n = i(9273);
        e.exports = function (e, t, i) {
          var o = s(t);
          o in e ? r.f(e, o, n(0, i)) : (e[o] = i);
        };
      },
      7583: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(4552),
          n = i(8977),
          o = i(4530),
          a = i(6282),
          l = i(2538),
          c = i(4204),
          d = i(5900),
          u = i(820),
          p = i(1501),
          h = i(3971),
          f = i(8149),
          g = i(6126),
          m = i(6524),
          v = o.PROPER,
          y = o.CONFIGURABLE,
          b = m.IteratorPrototype,
          x = m.BUGGY_SAFARI_ITERATORS,
          w = f("iterator"),
          S = "keys",
          E = "values",
          C = "entries",
          T = function () {
            return this;
          };
        e.exports = function (e, t, i, o, f, m, O) {
          l(i, t, o);
          var A,
            k,
            L,
            I = function (e) {
              if (e === f && $) return $;
              if (!x && e in z) return z[e];
              switch (e) {
                case S:
                case E:
                case C:
                  return function () {
                    return new i(this, e);
                  };
              }
              return function () {
                return new i(this);
              };
            },
            M = t + " Iterator",
            P = !1,
            z = e.prototype,
            _ = z[w] || z["@@iterator"] || (f && z[f]),
            $ = (!x && _) || I(f),
            D = ("Array" == t && z.entries) || _;
          if (
            (D &&
              (A = c(D.call(new e()))) !== Object.prototype &&
              A.next &&
              (n || c(A) === b || (d ? d(A, b) : a(A[w]) || h(A, w, T)),
              u(A, M, !0, !0),
              n && (g[M] = T)),
            v &&
              f == E &&
              _ &&
              _.name !== E &&
              (!n && y
                ? p(z, "name", E)
                : ((P = !0),
                  ($ = function () {
                    return r(_, this);
                  }))),
            f)
          )
            if (((k = { values: I(E), keys: m ? $ : I(S), entries: I(C) }), O))
              for (L in k) (x || P || !(L in z)) && h(z, L, k[L]);
            else s({ target: t, proto: !0, forced: x || P }, k);
          return (
            (n && !O) || z[w] === $ || h(z, w, $, { name: f }), (g[t] = $), k
          );
        };
      },
      723: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, i) => {
        var s = i(8454),
          r = i(5896),
          n = s.document,
          o = r(n) && r(n.createElement);
        e.exports = function (e) {
          return o ? n.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, i) => {
        var s = i(7282)("span").classList,
          r = s && s.constructor && s.constructor.prototype;
        e.exports = r === Object.prototype ? void 0 : r;
      },
      7594: (e, t, i) => {
        var s = i(1510),
          r = i(8454);
        e.exports = "process" == s(r.process);
      },
      2543: (e, t, i) => {
        var s = i(4991);
        e.exports = s("navigator", "userAgent") || "";
      },
      4324: (e, t, i) => {
        var s,
          r,
          n = i(8454),
          o = i(2543),
          a = n.process,
          l = n.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (r = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
          !r &&
            o &&
            (!(s = o.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
            (s = o.match(/Chrome\/(\d+)/)) &&
            (r = +s[1]),
          (e.exports = r);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, i) => {
        var s = i(8454),
          r = i(5663).f,
          n = i(1501),
          o = i(3971),
          a = i(7852),
          l = i(882),
          c = i(1949);
        e.exports = function (e, t) {
          var i,
            d,
            u,
            p,
            h,
            f = e.target,
            g = e.global,
            m = e.stat;
          if ((i = g ? s : m ? s[f] || a(f, {}) : (s[f] || {}).prototype))
            for (d in t) {
              if (
                ((p = t[d]),
                (u = e.noTargetGet ? (h = r(i, d)) && h.value : i[d]),
                !c(g ? d : f + (m ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof p == typeof u) continue;
                l(p, u);
              }
              (e.sham || (u && u.sham)) && n(p, "sham", !0), o(i, d, p, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, i) => {
        "use strict";
        i(9989);
        var s = i(1768),
          r = i(3971),
          n = i(5510),
          o = i(6183),
          a = i(8149),
          l = i(1501),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, i, u) {
          var p = a(e),
            h = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              h &&
              !o(function () {
                var t = !1,
                  i = /a/;
                return (
                  "split" === e &&
                    (((i = {}).constructor = {}),
                    (i.constructor[c] = function () {
                      return i;
                    }),
                    (i.flags = ""),
                    (i[p] = /./[p])),
                  (i.exec = function () {
                    return (t = !0), null;
                  }),
                  i[p](""),
                  !t
                );
              });
          if (!h || !f || i) {
            var g = s(/./[p]),
              m = t(p, ""[e], function (e, t, i, r, o) {
                var a = s(e),
                  l = t.exec;
                return l === n || l === d.exec
                  ? h && !o
                    ? { done: !0, value: g(t, i, r) }
                    : { done: !0, value: a(i, t, r) }
                  : { done: !1 };
              });
            r(String.prototype, e, m[0]), r(d, p, m[1]);
          }
          u && l(d[p], "sham", !0);
        };
      },
      3116: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, i) => {
        var s = i(160),
          r = Function.prototype,
          n = r.apply,
          o = r.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (s
            ? o.bind(n)
            : function () {
                return o.apply(n, arguments);
              });
      },
      1098: (e, t, i) => {
        var s = i(1768),
          r = i(5055),
          n = i(160),
          o = s(s.bind);
        e.exports = function (e, t) {
          return (
            r(e),
            void 0 === t
              ? e
              : n
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, i) => {
        var s = i(160),
          r = Function.prototype.call;
        e.exports = s
          ? r.bind(r)
          : function () {
              return r.apply(r, arguments);
            };
      },
      4530: (e, t, i) => {
        var s = i(723),
          r = i(8281),
          n = Function.prototype,
          o = s && Object.getOwnPropertyDescriptor,
          a = r(n, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!s || (s && o(n, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, i) => {
        var s = i(160),
          r = Function.prototype,
          n = r.bind,
          o = r.call,
          a = s && n.bind(o, o);
        e.exports = s
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, i) => {
        var s = i(8454),
          r = i(6282),
          n = function (e) {
            return r(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? n(s[e]) : s[e] && s[e][t];
        };
      },
      650: (e, t, i) => {
        var s = i(9225),
          r = i(9827),
          n = i(6126),
          o = i(8149)("iterator");
        e.exports = function (e) {
          if (null != e) return r(e, o) || r(e, "@@iterator") || n[s(e)];
        };
      },
      7755: (e, t, i) => {
        var s = i(8454),
          r = i(4552),
          n = i(5055),
          o = i(1474),
          a = i(180),
          l = i(650),
          c = s.TypeError;
        e.exports = function (e, t) {
          var i = arguments.length < 2 ? l(e) : t;
          if (n(i)) return o(r(i, e));
          throw c(a(e) + " is not iterable");
        };
      },
      9827: (e, t, i) => {
        var s = i(5055);
        e.exports = function (e, t) {
          var i = e[t];
          return null == i ? void 0 : s(i);
        };
      },
      4742: (e, t, i) => {
        var s = i(1768),
          r = i(9473),
          n = Math.floor,
          o = s("".charAt),
          a = s("".replace),
          l = s("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, i, s, u, p) {
          var h = i + e.length,
            f = s.length,
            g = d;
          return (
            void 0 !== u && ((u = r(u)), (g = c)),
            a(p, g, function (r, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, i);
                case "'":
                  return l(t, h);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return r;
                  if (d > f) {
                    var p = n(d / 10);
                    return 0 === p
                      ? r
                      : p <= f
                      ? void 0 === s[p - 1]
                        ? o(a, 1)
                        : s[p - 1] + o(a, 1)
                      : r;
                  }
                  c = s[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, i) => {
        var s = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          s("object" == typeof globalThis && globalThis) ||
          s("object" == typeof window && window) ||
          s("object" == typeof self && self) ||
          s("object" == typeof i.g && i.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, i) => {
        var s = i(1768),
          r = i(9473),
          n = s({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return n(r(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, i) => {
        var s = i(4991);
        e.exports = s("document", "documentElement");
      },
      4985: (e, t, i) => {
        var s = i(723),
          r = i(6183),
          n = i(7282);
        e.exports =
          !s &&
          !r(function () {
            return (
              7 !=
              Object.defineProperty(n("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, i) => {
        var s = i(8454),
          r = i(1768),
          n = i(6183),
          o = i(1510),
          a = s.Object,
          l = r("".split);
        e.exports = n(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? l(e, "") : a(e);
            }
          : a;
      },
      7770: (e, t, i) => {
        var s = i(6282),
          r = i(5896),
          n = i(5900);
        e.exports = function (e, t, i) {
          var o, a;
          return (
            n &&
              s((o = t.constructor)) &&
              o !== i &&
              r((a = o.prototype)) &&
              a !== i.prototype &&
              n(e, a),
            e
          );
        };
      },
      6901: (e, t, i) => {
        var s = i(1768),
          r = i(6282),
          n = i(2047),
          o = s(Function.toString);
        r(n.inspectSource) ||
          (n.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = n.inspectSource);
      },
      6582: (e, t, i) => {
        var s = i(4761),
          r = i(1768),
          n = i(4377),
          o = i(5896),
          a = i(8281),
          l = i(9168).f,
          c = i(6785),
          d = i(6675),
          u = i(6662),
          p = i(9059),
          h = i(3116),
          f = !1,
          g = p("meta"),
          m = 0,
          v = function (e) {
            l(e, g, { value: { objectID: "O" + m++, weakData: {} } });
          },
          y = (e.exports = {
            enable: function () {
              (y.enable = function () {}), (f = !0);
              var e = c.f,
                t = r([].splice),
                i = {};
              (i[g] = 1),
                e(i).length &&
                  ((c.f = function (i) {
                    for (var s = e(i), r = 0, n = s.length; r < n; r++)
                      if (s[r] === g) {
                        t(s, r, 1);
                        break;
                      }
                    return s;
                  }),
                  s(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, g)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                v(e);
              }
              return e[g].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, g)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                v(e);
              }
              return e[g].weakData;
            },
            onFreeze: function (e) {
              return h && f && u(e) && !a(e, g) && v(e), e;
            },
          });
        n[g] = !0;
      },
      1030: (e, t, i) => {
        var s,
          r,
          n,
          o = i(4404),
          a = i(8454),
          l = i(1768),
          c = i(5896),
          d = i(1501),
          u = i(8281),
          p = i(2047),
          h = i(8873),
          f = i(4377),
          g = "Object already initialized",
          m = a.TypeError,
          v = a.WeakMap;
        if (o || p.state) {
          var y = p.state || (p.state = new v()),
            b = l(y.get),
            x = l(y.has),
            w = l(y.set);
          (s = function (e, t) {
            if (x(y, e)) throw new m(g);
            return (t.facade = e), w(y, e, t), t;
          }),
            (r = function (e) {
              return b(y, e) || {};
            }),
            (n = function (e) {
              return x(y, e);
            });
        } else {
          var S = h("state");
          (f[S] = !0),
            (s = function (e, t) {
              if (u(e, S)) throw new m(g);
              return (t.facade = e), d(e, S, t), t;
            }),
            (r = function (e) {
              return u(e, S) ? e[S] : {};
            }),
            (n = function (e) {
              return u(e, S);
            });
        }
        e.exports = {
          set: s,
          get: r,
          has: n,
          enforce: function (e) {
            return n(e) ? r(e) : s(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var i;
              if (!c(t) || (i = r(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return i;
            };
          },
        };
      },
      5859: (e, t, i) => {
        var s = i(8149),
          r = i(6126),
          n = s("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || o[n] === e);
        };
      },
      7931: (e, t, i) => {
        var s = i(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == s(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, i) => {
        var s = i(1768),
          r = i(6183),
          n = i(6282),
          o = i(9225),
          a = i(4991),
          l = i(6901),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          h = s(p.exec),
          f = !p.exec(c),
          g = function (e) {
            if (!n(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!n(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!h(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !u ||
            r(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : g);
      },
      1949: (e, t, i) => {
        var s = i(6183),
          r = i(6282),
          n = /#|\.prototype\./,
          o = function (e, t) {
            var i = l[a(e)];
            return i == d || (i != c && (r(t) ? s(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(n, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      5896: (e, t, i) => {
        var s = i(6282);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : s(e);
        };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, i) => {
        var s = i(8454),
          r = i(4991),
          n = i(6282),
          o = i(1786),
          a = i(4746),
          l = s.Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = r("Symbol");
              return n(t) && o(t.prototype, l(e));
            };
      },
      1518: (e, t, i) => {
        var s = i(8454),
          r = i(1098),
          n = i(4552),
          o = i(1474),
          a = i(180),
          l = i(5859),
          c = i(1829),
          d = i(1786),
          u = i(7755),
          p = i(650),
          h = i(9193),
          f = s.TypeError,
          g = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          m = g.prototype;
        e.exports = function (e, t, i) {
          var s,
            v,
            y,
            b,
            x,
            w,
            S,
            E = i && i.that,
            C = !(!i || !i.AS_ENTRIES),
            T = !(!i || !i.IS_ITERATOR),
            O = !(!i || !i.INTERRUPTED),
            A = r(t, E),
            k = function (e) {
              return s && h(s, "normal", e), new g(!0, e);
            },
            L = function (e) {
              return C
                ? (o(e), O ? A(e[0], e[1], k) : A(e[0], e[1]))
                : O
                ? A(e, k)
                : A(e);
            };
          if (T) s = e;
          else {
            if (!(v = p(e))) throw f(a(e) + " is not iterable");
            if (l(v)) {
              for (y = 0, b = c(e); b > y; y++)
                if ((x = L(e[y])) && d(m, x)) return x;
              return new g(!1);
            }
            s = u(e, v);
          }
          for (w = s.next; !(S = n(w, s)).done; ) {
            try {
              x = L(S.value);
            } catch (e) {
              h(s, "throw", e);
            }
            if ("object" == typeof x && x && d(m, x)) return x;
          }
          return new g(!1);
        };
      },
      9193: (e, t, i) => {
        var s = i(4552),
          r = i(1474),
          n = i(9827);
        e.exports = function (e, t, i) {
          var o, a;
          r(e);
          try {
            if (!(o = n(e, "return"))) {
              if ("throw" === t) throw i;
              return i;
            }
            o = s(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw i;
          if (a) throw o;
          return r(o), i;
        };
      },
      6524: (e, t, i) => {
        "use strict";
        var s,
          r,
          n,
          o = i(6183),
          a = i(6282),
          l = i(1525),
          c = i(4204),
          d = i(3971),
          u = i(8149),
          p = i(8977),
          h = u("iterator"),
          f = !1;
        [].keys &&
          ("next" in (n = [].keys())
            ? (r = c(c(n))) !== Object.prototype && (s = r)
            : (f = !0)),
          null == s ||
          o(function () {
            var e = {};
            return s[h].call(e) !== e;
          })
            ? (s = {})
            : p && (s = l(s)),
          a(s[h]) ||
            d(s, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: f });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, i) => {
        var s = i(3917);
        e.exports = function (e) {
          return s(e.length);
        };
      },
      323: (e, t, i) => {
        var s = i(4324),
          r = i(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !r(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && s && s < 41)
            );
          });
      },
      4404: (e, t, i) => {
        var s = i(8454),
          r = i(6282),
          n = i(6901),
          o = s.WeakMap;
        e.exports = r(o) && /native code/.test(n(o));
      },
      8513: (e, t, i) => {
        var s = i(8454),
          r = i(6183),
          n = i(1768),
          o = i(7655),
          a = i(9749).trim,
          l = i(8342),
          c = s.parseInt,
          d = s.Symbol,
          u = d && d.iterator,
          p = /^[+-]?0x/i,
          h = n(p.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !r(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var i = a(o(e));
              return c(i, t >>> 0 || (h(p, i) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, i) => {
        "use strict";
        var s = i(723),
          r = i(1768),
          n = i(4552),
          o = i(6183),
          a = i(1340),
          l = i(8074),
          c = i(4043),
          d = i(9473),
          u = i(7530),
          p = Object.assign,
          h = Object.defineProperty,
          f = r([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              s &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    h({}, "a", {
                      enumerable: !0,
                      get: function () {
                        h(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              i = Symbol(),
              r = "abcdefghijklmnopqrst";
            return (
              (e[i] = 7),
              r.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[i] || a(p({}, t)).join("") != r
            );
          })
            ? function (e, t) {
                for (
                  var i = d(e), r = arguments.length, o = 1, p = l.f, h = c.f;
                  r > o;

                )
                  for (
                    var g,
                      m = u(arguments[o++]),
                      v = p ? f(a(m), p(m)) : a(m),
                      y = v.length,
                      b = 0;
                    y > b;

                  )
                    (g = v[b++]), (s && !n(h, m, g)) || (i[g] = m[g]);
                return i;
              }
            : p;
      },
      1525: (e, t, i) => {
        var s,
          r = i(1474),
          n = i(262),
          o = i(8409),
          a = i(4377),
          l = i(7461),
          c = i(7282),
          d = i(8873),
          u = d("IE_PROTO"),
          p = function () {},
          h = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(h("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          g = function () {
            try {
              s = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g =
              "undefined" != typeof document
                ? document.domain && s
                  ? f(s)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(h("document.F=Object")),
                    e.close(),
                    e.F)
                : f(s);
            for (var i = o.length; i--; ) delete g.prototype[o[i]];
            return g();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var i;
              return (
                null !== e
                  ? ((p.prototype = r(e)),
                    (i = new p()),
                    (p.prototype = null),
                    (i[u] = e))
                  : (i = g()),
                void 0 === t ? i : n.f(i, t)
              );
            });
      },
      262: (e, t, i) => {
        var s = i(723),
          r = i(8654),
          n = i(9168),
          o = i(1474),
          a = i(3206),
          l = i(1340);
        t.f =
          s && !r
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var i, s = a(t), r = l(t), c = r.length, d = 0; c > d; )
                  n.f(e, (i = r[d++]), s[i]);
                return e;
              };
      },
      9168: (e, t, i) => {
        var s = i(8454),
          r = i(723),
          n = i(4985),
          o = i(8654),
          a = i(1474),
          l = i(2988),
          c = s.TypeError,
          d = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          h = "configurable",
          f = "writable";
        t.f = r
          ? o
            ? function (e, t, i) {
                if (
                  (a(e),
                  (t = l(t)),
                  a(i),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in i &&
                    f in i &&
                    !i.writable)
                ) {
                  var s = u(e, t);
                  s &&
                    s.writable &&
                    ((e[t] = i.value),
                    (i = {
                      configurable: h in i ? i.configurable : s.configurable,
                      enumerable: p in i ? i.enumerable : s.enumerable,
                      writable: !1,
                    }));
                }
                return d(e, t, i);
              }
            : d
          : function (e, t, i) {
              if ((a(e), (t = l(t)), a(i), n))
                try {
                  return d(e, t, i);
                } catch (e) {}
              if ("get" in i || "set" in i) throw c("Accessors not supported");
              return "value" in i && (e[t] = i.value), e;
            };
      },
      5663: (e, t, i) => {
        var s = i(723),
          r = i(4552),
          n = i(4043),
          o = i(9273),
          a = i(3206),
          l = i(2988),
          c = i(8281),
          d = i(4985),
          u = Object.getOwnPropertyDescriptor;
        t.f = s
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!r(n.f, e, t), e[t]);
            };
      },
      6675: (e, t, i) => {
        var s = i(1510),
          r = i(3206),
          n = i(6785).f,
          o = i(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == s(e)
            ? (function (e) {
                try {
                  return n(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : n(r(e));
        };
      },
      6785: (e, t, i) => {
        var s = i(5113),
          r = i(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return s(e, r);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, i) => {
        var s = i(8454),
          r = i(8281),
          n = i(6282),
          o = i(9473),
          a = i(8873),
          l = i(7401),
          c = a("IE_PROTO"),
          d = s.Object,
          u = d.prototype;
        e.exports = l
          ? d.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (r(t, c)) return t[c];
              var i = t.constructor;
              return n(i) && t instanceof i
                ? i.prototype
                : t instanceof d
                ? u
                : null;
            };
      },
      6662: (e, t, i) => {
        var s = i(6183),
          r = i(5896),
          n = i(1510),
          o = i(8774),
          a = Object.isExtensible,
          l = s(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!r(e) && (!o || "ArrayBuffer" != n(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, i) => {
        var s = i(1768);
        e.exports = s({}.isPrototypeOf);
      },
      5113: (e, t, i) => {
        var s = i(1768),
          r = i(8281),
          n = i(3206),
          o = i(5675).indexOf,
          a = i(4377),
          l = s([].push);
        e.exports = function (e, t) {
          var i,
            s = n(e),
            c = 0,
            d = [];
          for (i in s) !r(a, i) && r(s, i) && l(d, i);
          for (; t.length > c; ) r(s, (i = t[c++])) && (~o(d, i) || l(d, i));
          return d;
        };
      },
      1340: (e, t, i) => {
        var s = i(5113),
          r = i(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return s(e, r);
          };
      },
      4043: (e, t) => {
        "use strict";
        var i = {}.propertyIsEnumerable,
          s = Object.getOwnPropertyDescriptor,
          r = s && !i.call({ 1: 2 }, 1);
        t.f = r
          ? function (e) {
              var t = s(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      5900: (e, t, i) => {
        var s = i(1768),
          r = i(1474),
          n = i(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  i = {};
                try {
                  (e = s(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(i, []),
                    (t = i instanceof Array);
                } catch (e) {}
                return function (i, s) {
                  return r(i), n(s), t ? e(i, s) : (i.__proto__ = s), i;
                };
              })()
            : void 0);
      },
      4117: (e, t, i) => {
        "use strict";
        var s = i(4823),
          r = i(9225);
        e.exports = s
          ? {}.toString
          : function () {
              return "[object " + r(this) + "]";
            };
      },
      6891: (e, t, i) => {
        var s = i(8454),
          r = i(4552),
          n = i(6282),
          o = i(5896),
          a = s.TypeError;
        e.exports = function (e, t) {
          var i, s;
          if ("string" === t && n((i = e.toString)) && !o((s = r(i, e))))
            return s;
          if (n((i = e.valueOf)) && !o((s = r(i, e)))) return s;
          if ("string" !== t && n((i = e.toString)) && !o((s = r(i, e))))
            return s;
          throw a("Can't convert object to primitive value");
        };
      },
      1441: (e, t, i) => {
        var s = i(4991),
          r = i(1768),
          n = i(6785),
          o = i(8074),
          a = i(1474),
          l = r([].concat);
        e.exports =
          s("Reflect", "ownKeys") ||
          function (e) {
            var t = n.f(a(e)),
              i = o.f;
            return i ? l(t, i(e)) : t;
          };
      },
      9573: (e, t, i) => {
        var s = i(3971);
        e.exports = function (e, t, i) {
          for (var r in t) s(e, r, t[r], i);
          return e;
        };
      },
      3971: (e, t, i) => {
        var s = i(8454),
          r = i(6282),
          n = i(8281),
          o = i(1501),
          a = i(7852),
          l = i(6901),
          c = i(1030),
          d = i(4530).CONFIGURABLE,
          u = c.get,
          p = c.enforce,
          h = String(String).split("String");
        (e.exports = function (e, t, i, l) {
          var c,
            u = !!l && !!l.unsafe,
            f = !!l && !!l.enumerable,
            g = !!l && !!l.noTargetGet,
            m = l && void 0 !== l.name ? l.name : t;
          r(i) &&
            ("Symbol(" === String(m).slice(0, 7) &&
              (m = "[" + String(m).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!n(i, "name") || (d && i.name !== m)) && o(i, "name", m),
            (c = p(i)).source ||
              (c.source = h.join("string" == typeof m ? m : ""))),
            e !== s
              ? (u ? !g && e[t] && (f = !0) : delete e[t],
                f ? (e[t] = i) : o(e, t, i))
              : f
              ? (e[t] = i)
              : a(t, i);
        })(Function.prototype, "toString", function () {
          return (r(this) && u(this).source) || l(this);
        });
      },
      8734: (e, t, i) => {
        var s = i(8454),
          r = i(4552),
          n = i(1474),
          o = i(6282),
          a = i(1510),
          l = i(5510),
          c = s.TypeError;
        e.exports = function (e, t) {
          var i = e.exec;
          if (o(i)) {
            var s = r(i, e, t);
            return null !== s && n(s), s;
          }
          if ("RegExp" === a(e)) return r(l, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, i) => {
        "use strict";
        var s,
          r,
          n = i(4552),
          o = i(1768),
          a = i(7655),
          l = i(8383),
          c = i(6558),
          d = i(1748),
          u = i(1525),
          p = i(1030).get,
          h = i(7672),
          f = i(9729),
          g = d("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          v = m,
          y = o("".charAt),
          b = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          S =
            ((r = /b*/g),
            n(m, (s = /a/), "a"),
            n(m, r, "a"),
            0 !== s.lastIndex || 0 !== r.lastIndex),
          E = c.BROKEN_CARET,
          C = void 0 !== /()??/.exec("")[1];
        (S || C || E || h || f) &&
          (v = function (e) {
            var t,
              i,
              s,
              r,
              o,
              c,
              d,
              h = this,
              f = p(h),
              T = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = h.lastIndex),
                (t = n(v, O, T)),
                (h.lastIndex = O.lastIndex),
                t
              );
            var A = f.groups,
              k = E && h.sticky,
              L = n(l, h),
              I = h.source,
              M = 0,
              P = T;
            if (
              (k &&
                ((L = x(L, "y", "")),
                -1 === b(L, "g") && (L += "g"),
                (P = w(T, h.lastIndex)),
                h.lastIndex > 0 &&
                  (!h.multiline ||
                    (h.multiline && "\n" !== y(T, h.lastIndex - 1))) &&
                  ((I = "(?: " + I + ")"), (P = " " + P), M++),
                (i = new RegExp("^(?:" + I + ")", L))),
              C && (i = new RegExp("^" + I + "$(?!\\s)", L)),
              S && (s = h.lastIndex),
              (r = n(m, k ? i : h, P)),
              k
                ? r
                  ? ((r.input = w(r.input, M)),
                    (r[0] = w(r[0], M)),
                    (r.index = h.lastIndex),
                    (h.lastIndex += r[0].length))
                  : (h.lastIndex = 0)
                : S &&
                  r &&
                  (h.lastIndex = h.global ? r.index + r[0].length : s),
              C &&
                r &&
                r.length > 1 &&
                n(g, r[0], i, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (r[o] = void 0);
                }),
              r && A)
            )
              for (r.groups = c = u(null), o = 0; o < A.length; o++)
                c[(d = A[o])[0]] = r[d[1]];
            return r;
          }),
          (e.exports = v);
      },
      8383: (e, t, i) => {
        "use strict";
        var s = i(1474);
        e.exports = function () {
          var e = s(this),
            t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, i) => {
        var s = i(6183),
          r = i(8454).RegExp,
          n = s(function () {
            var e = r("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            n ||
            s(function () {
              return !r("a", "y").sticky;
            }),
          a =
            n ||
            s(function () {
              var e = r("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: n };
      },
      7672: (e, t, i) => {
        var s = i(6183),
          r = i(8454).RegExp;
        e.exports = s(function () {
          var e = r(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, i) => {
        var s = i(6183),
          r = i(8454).RegExp;
        e.exports = s(function () {
          var e = r("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, i) => {
        var s = i(8454).TypeError;
        e.exports = function (e) {
          if (null == e) throw s("Can't call method on " + e);
          return e;
        };
      },
      7852: (e, t, i) => {
        var s = i(8454),
          r = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            r(s, e, { value: t, configurable: !0, writable: !0 });
          } catch (i) {
            s[e] = t;
          }
          return t;
        };
      },
      820: (e, t, i) => {
        var s = i(9168).f,
          r = i(8281),
          n = i(8149)("toStringTag");
        e.exports = function (e, t, i) {
          e && !i && (e = e.prototype),
            e && !r(e, n) && s(e, n, { configurable: !0, value: t });
        };
      },
      8873: (e, t, i) => {
        var s = i(1748),
          r = i(9059),
          n = s("keys");
        e.exports = function (e) {
          return n[e] || (n[e] = r(e));
        };
      },
      2047: (e, t, i) => {
        var s = i(8454),
          r = i(7852),
          n = "__core-js_shared__",
          o = s[n] || r(n, {});
        e.exports = o;
      },
      1748: (e, t, i) => {
        var s = i(8977),
          r = i(2047);
        (e.exports = function (e, t) {
          return r[e] || (r[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.21.1",
          mode: s ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, i) => {
        var s = i(1768),
          r = i(8037),
          n = i(7655),
          o = i(7431),
          a = s("".charAt),
          l = s("".charCodeAt),
          c = s("".slice),
          d = function (e) {
            return function (t, i) {
              var s,
                d,
                u = n(o(t)),
                p = r(i),
                h = u.length;
              return p < 0 || p >= h
                ? e
                  ? ""
                  : void 0
                : (s = l(u, p)) < 55296 ||
                  s > 56319 ||
                  p + 1 === h ||
                  (d = l(u, p + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, p)
                  : s
                : e
                ? c(u, p, p + 2)
                : d - 56320 + ((s - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      9749: (e, t, i) => {
        var s = i(1768),
          r = i(7431),
          n = i(7655),
          o = i(8342),
          a = s("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var i = n(r(t));
              return 1 & e && (i = a(i, c, "")), 2 & e && (i = a(i, d, "")), i;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      9623: (e, t, i) => {
        var s = i(8037),
          r = Math.max,
          n = Math.min;
        e.exports = function (e, t) {
          var i = s(e);
          return i < 0 ? r(i + t, 0) : n(i, t);
        };
      },
      3206: (e, t, i) => {
        var s = i(7530),
          r = i(7431);
        e.exports = function (e) {
          return s(r(e));
        };
      },
      8037: (e) => {
        var t = Math.ceil,
          i = Math.floor;
        e.exports = function (e) {
          var s = +e;
          return s != s || 0 === s ? 0 : (s > 0 ? i : t)(s);
        };
      },
      3917: (e, t, i) => {
        var s = i(8037),
          r = Math.min;
        e.exports = function (e) {
          return e > 0 ? r(s(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, i) => {
        var s = i(8454),
          r = i(7431),
          n = s.Object;
        e.exports = function (e) {
          return n(r(e));
        };
      },
      3948: (e, t, i) => {
        var s = i(8454),
          r = i(4552),
          n = i(5896),
          o = i(1527),
          a = i(9827),
          l = i(6891),
          c = i(8149),
          d = s.TypeError,
          u = c("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || o(e)) return e;
          var i,
            s = a(e, u);
          if (s) {
            if (
              (void 0 === t && (t = "default"), (i = r(s, e, t)), !n(i) || o(i))
            )
              return i;
            throw d("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      2988: (e, t, i) => {
        var s = i(3948),
          r = i(1527);
        e.exports = function (e) {
          var t = s(e, "string");
          return r(t) ? t : t + "";
        };
      },
      4823: (e, t, i) => {
        var s = {};
        (s[i(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(s));
      },
      7655: (e, t, i) => {
        var s = i(8454),
          r = i(9225),
          n = s.String;
        e.exports = function (e) {
          if ("Symbol" === r(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return n(e);
        };
      },
      180: (e, t, i) => {
        var s = i(8454).String;
        e.exports = function (e) {
          try {
            return s(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, i) => {
        var s = i(1768),
          r = 0,
          n = Math.random(),
          o = s((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++r + n, 36);
        };
      },
      4746: (e, t, i) => {
        var s = i(323);
        e.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, i) => {
        var s = i(723),
          r = i(6183);
        e.exports =
          s &&
          r(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      8149: (e, t, i) => {
        var s = i(8454),
          r = i(1748),
          n = i(8281),
          o = i(9059),
          a = i(323),
          l = i(4746),
          c = r("wks"),
          d = s.Symbol,
          u = d && d.for,
          p = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!n(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && n(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : p(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      8165: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(528).filter;
        s(
          { target: "Array", proto: !0, forced: !i(4820)("filter") },
          {
            filter: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9399: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(1269);
        s(
          { target: "Array", proto: !0, forced: [].forEach != r },
          { forEach: r }
        );
      },
      7543: (e, t, i) => {
        "use strict";
        var s = i(3206),
          r = i(9256),
          n = i(6126),
          o = i(1030),
          a = i(9168).f,
          l = i(7583),
          c = i(8977),
          d = i(723),
          u = "Array Iterator",
          p = o.set,
          h = o.getterFor(u);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: u, target: s(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              i = e.kind,
              s = e.index++;
            return !t || s >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == i
              ? { value: s, done: !1 }
              : "values" == i
              ? { value: t[s], done: !1 }
              : { value: [s, t[s]], done: !1 };
          },
          "values"
        );
        var f = (n.Arguments = n.Array);
        if (
          (r("keys"), r("values"), r("entries"), !c && d && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(6589).left,
          n = i(1923),
          o = i(4324),
          a = i(7594);
        s(
          {
            target: "Array",
            proto: !0,
            forced: !n("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return r(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, i) => {
        var s = i(723),
          r = i(4530).EXISTS,
          n = i(1768),
          o = i(9168).f,
          a = Function.prototype,
          l = n(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = n(c.exec);
        s &&
          !r &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, i) => {
        var s = i(4761),
          r = i(4727);
        s(
          { target: "Object", stat: !0, forced: Object.assign !== r },
          { assign: r }
        );
      },
      2352: (e, t, i) => {
        var s = i(4823),
          r = i(3971),
          n = i(4117);
        s || r(Object.prototype, "toString", n, { unsafe: !0 });
      },
      4249: (e, t, i) => {
        var s = i(4761),
          r = i(8513);
        s({ global: !0, forced: parseInt != r }, { parseInt: r });
      },
      9989: (e, t, i) => {
        "use strict";
        var s = i(4761),
          r = i(5510);
        s({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
      },
      3344: (e, t, i) => {
        "use strict";
        var s = i(7321).charAt,
          r = i(7655),
          n = i(1030),
          o = i(7583),
          a = "String Iterator",
          l = n.set,
          c = n.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: r(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              i = t.string,
              r = t.index;
            return r >= i.length
              ? { value: void 0, done: !0 }
              : ((e = s(i, r)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8307: (e, t, i) => {
        "use strict";
        var s = i(4552),
          r = i(9696),
          n = i(1474),
          o = i(3917),
          a = i(7655),
          l = i(7431),
          c = i(9827),
          d = i(3615),
          u = i(8734);
        r("match", function (e, t, i) {
          return [
            function (t) {
              var i = l(this),
                r = null == t ? void 0 : c(t, e);
              return r ? s(r, t, i) : new RegExp(t)[e](a(i));
            },
            function (e) {
              var s = n(this),
                r = a(e),
                l = i(t, s, r);
              if (l.done) return l.value;
              if (!s.global) return u(s, r);
              var c = s.unicode;
              s.lastIndex = 0;
              for (var p, h = [], f = 0; null !== (p = u(s, r)); ) {
                var g = a(p[0]);
                (h[f] = g),
                  "" === g && (s.lastIndex = d(r, o(s.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : h;
            },
          ];
        });
      },
      4390: (e, t, i) => {
        "use strict";
        var s = i(6218),
          r = i(4552),
          n = i(1768),
          o = i(9696),
          a = i(6183),
          l = i(1474),
          c = i(6282),
          d = i(8037),
          u = i(3917),
          p = i(7655),
          h = i(7431),
          f = i(3615),
          g = i(9827),
          m = i(4742),
          v = i(8734),
          y = i(8149)("replace"),
          b = Math.max,
          x = Math.min,
          w = n([].concat),
          S = n([].push),
          E = n("".indexOf),
          C = n("".slice),
          T = "$0" === "a".replace(/./, "$0"),
          O = !!/./[y] && "" === /./[y]("a", "$0");
        o(
          "replace",
          function (e, t, i) {
            var n = O ? "$" : "$0";
            return [
              function (e, i) {
                var s = h(this),
                  n = null == e ? void 0 : g(e, y);
                return n ? r(n, e, s, i) : r(t, p(s), e, i);
              },
              function (e, r) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof r &&
                  -1 === E(r, n) &&
                  -1 === E(r, "$<")
                ) {
                  var h = i(t, o, a, r);
                  if (h.done) return h.value;
                }
                var g = c(r);
                g || (r = p(r));
                var y = o.global;
                if (y) {
                  var T = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var A = v(o, a);
                  if (null === A) break;
                  if ((S(O, A), !y)) break;
                  "" === p(A[0]) && (o.lastIndex = f(a, u(o.lastIndex), T));
                }
                for (var k, L = "", I = 0, M = 0; M < O.length; M++) {
                  for (
                    var P = p((A = O[M])[0]),
                      z = b(x(d(A.index), a.length), 0),
                      _ = [],
                      $ = 1;
                    $ < A.length;
                    $++
                  )
                    S(_, void 0 === (k = A[$]) ? k : String(k));
                  var D = A.groups;
                  if (g) {
                    var B = w([P], _, z, a);
                    void 0 !== D && S(B, D);
                    var N = p(s(r, void 0, B));
                  } else N = m(P, a, z, _, D, r);
                  z >= I && ((L += C(a, I, z) + N), (I = z + P.length));
                }
                return L + C(a, I);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !T ||
            O
        );
      },
      7323: (e, t, i) => {
        "use strict";
        var s,
          r = i(8454),
          n = i(1768),
          o = i(9573),
          a = i(6582),
          l = i(6645),
          c = i(7790),
          d = i(5896),
          u = i(6662),
          p = i(1030).enforce,
          h = i(4404),
          f = !r.ActiveXObject && "ActiveXObject" in r,
          g = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", g, c);
        if (h && f) {
          (s = c.getConstructor(g, "WeakMap", !0)), a.enable();
          var v = m.prototype,
            y = n(v.delete),
            b = n(v.has),
            x = n(v.get),
            w = n(v.set);
          o(v, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  y(this, e) || t.frozen.delete(e)
                );
              }
              return y(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  b(this, e) || t.frozen.has(e)
                );
              }
              return b(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  b(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var i = p(this);
                i.frozen || (i.frozen = new s()),
                  b(this, e) ? w(this, e, t) : i.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      3542: (e, t, i) => {
        var s = i(8454),
          r = i(6181),
          n = i(2387),
          o = i(1269),
          a = i(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in r) r[c] && l(s[c] && s[c].prototype);
        l(n);
      },
      4079: (e, t, i) => {
        var s = i(8454),
          r = i(6181),
          n = i(2387),
          o = i(7543),
          a = i(1501),
          l = i(8149),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), r[t]))
                for (var i in o)
                  if (e[i] !== o[i])
                    try {
                      a(e, i, o[i]);
                    } catch (t) {
                      e[i] = o[i];
                    }
            }
          };
        for (var h in r) p(s[h] && s[h].prototype, h);
        p(n, "DOMTokenList");
      },
    },
    t = {};
  function i(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var n = (t[s] = { exports: {} });
    return e[s](n, n.exports, i), n.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = {};
      let t = (e, t = 500, i = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !i),
                !i && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !i && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideUpDone", { detail: { target: e } })
                );
            }, t));
        },
        s = (e, t = 500, i = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              i && e.style.removeProperty("height");
            let s = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = i ? `${i}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = s + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide"),
                  document.dispatchEvent(
                    new CustomEvent("slideDownDone", { detail: { target: e } })
                  );
              }, t);
          }
        },
        r = !0,
        n = (e = 500) => {
          document.documentElement.classList.contains("lock") ? o(e) : a(e);
        },
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (r) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (r = !1),
              setTimeout(function () {
                r = !0;
              }, e);
          }
        },
        a = (e = 500) => {
          let t = document.querySelector("body");
          if (r) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (r = !1),
              setTimeout(function () {
                r = !0;
              }, e);
          }
        };
      function l(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function c(e, t) {
        const i = Array.from(e).filter(function (e, i, s) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (i.length) {
          const e = [];
          i.forEach((i) => {
            const s = {},
              r = i.dataset[t].split(",");
            (s.value = r[0]),
              (s.type = r[1] ? r[1].trim() : "max"),
              (s.item = i),
              e.push(s);
          });
          let s = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          s = (function (e) {
            return e.filter(function (e, t, i) {
              return i.indexOf(e) === t;
            });
          })(s);
          const r = [];
          if (s.length)
            return (
              s.forEach((t) => {
                const i = t.split(","),
                  s = i[1],
                  n = i[2],
                  o = window.matchMedia(i[0]),
                  a = e.filter(function (e) {
                    if (e.value === s && e.type === n) return !0;
                  });
                r.push({ itemsArray: a, matchMedia: o });
              }),
              r
            );
        }
      }
      new (class {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("Проснулся"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if ((console.log(t), t))
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `Ой ой, не заполнен атрибут у ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            document.querySelector("form[data-ajax],form[data-dev]") &&
              document.addEventListener(
                "formSent",
                function (e) {
                  const t = e.detail.form.dataset.popupMessage;
                  t && this.open(t);
                }.bind(this)
              ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${i}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : n(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет. Проверьте корректность ввода. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              r &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                n(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("Закрыл попап"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            i = Array.prototype.slice.call(t),
            s = i.indexOf(document.activeElement);
          e.shiftKey &&
            0 === s &&
            (i[i.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              s !== i.length - 1 ||
              (i[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && l(`[Попапос]: ${e}`);
        }
      })({});
      let d = (e, t = !1, i = 500, s = 0) => {
        const r = document.querySelector(e);
        if (r) {
          let n = "",
            a = 0;
          t &&
            ((n = "header.header"),
            (a = document.querySelector(n).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: i,
            header: n,
            offset: s,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (o(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(r, "", c);
          else {
            let e = r.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
          }
          l(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function u(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function p(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : u(t[i]) &&
              u(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              p(e[i], t[i]);
        });
      }
      const h = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function f() {
        const e = "undefined" != typeof document ? document : {};
        return p(e, h), e;
      }
      const g = {
        document: h,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function m() {
        const e = "undefined" != typeof window ? window : {};
        return p(e, g), e;
      }
      class v extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function y(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...y(e)) : t.push(e);
          }),
          t
        );
      }
      function b(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function x(e, t) {
        const i = m(),
          s = f();
        let r = [];
        if (!t && e instanceof v) return e;
        if (!e) return new v(r);
        if ("string" == typeof e) {
          const i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              r.push(t.childNodes[e]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              const i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof v) return e;
          r = e;
        }
        return new v(
          (function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(r)
        );
      }
      x.fn = v.prototype;
      const w = "resize scroll".split(" ");
      function S(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              w.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : x(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      S("click"),
        S("blur"),
        S("focus"),
        S("focusin"),
        S("focusout"),
        S("keyup"),
        S("keydown"),
        S("keypress"),
        S("submit"),
        S("change"),
        S("mousedown"),
        S("mousemove"),
        S("mouseup"),
        S("mouseenter"),
        S("mouseleave"),
        S("mouseout"),
        S("mouseover"),
        S("touchstart"),
        S("touchend"),
        S("touchmove"),
        S("resize"),
        S("scroll");
      const E = {
        addClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            b(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, i, s, r] = e;
          function n(e) {
            const t = e.target;
            if (!t) return;
            const r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), x(t).is(i))) s.apply(t, r);
            else {
              const e = x(t).parents();
              for (let t = 0; t < e.length; t += 1)
                x(e[t]).is(i) && s.apply(e[t], r);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof e[1] && (([t, s, r] = e), (i = void 0)),
            r || (r = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: s,
                    proxyListener: n,
                  }),
                  t.addEventListener(e, n, r);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                  t.addEventListener(e, o, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, r] = e;
          "function" == typeof e[1] && (([t, s, r] = e), (i = void 0)),
            r || (r = !1);
          const n = t.split(" ");
          for (let e = 0; e < n.length; e += 1) {
            const t = n[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let o;
              if (
                (!i && n.dom7Listeners
                  ? (o = n.dom7Listeners[t])
                  : i && n.dom7LiveListeners && (o = n.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const i = o[e];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (n.removeEventListener(t, i.proxyListener, r),
                      o.splice(e, 1))
                    : s ||
                      (n.removeEventListener(t, i.proxyListener, r),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = m(),
            i = e[0].split(" "),
            s = e[1];
          for (let r = 0; r < i.length; r += 1) {
            const n = i[r];
            for (let i = 0; i < this.length; i += 1) {
              const r = this[i];
              if (t.CustomEvent) {
                const i = new t.CustomEvent(n, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (r.dom7EventData = e.filter((e, t) => t > 0)),
                  r.dispatchEvent(i),
                  (r.dom7EventData = []),
                  delete r.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = m();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = m(),
              t = f(),
              i = this[0],
              s = i.getBoundingClientRect(),
              r = t.body,
              n = i.clientTop || r.clientTop || 0,
              o = i.clientLeft || r.clientLeft || 0,
              a = i === e ? e.scrollY : i.scrollTop,
              l = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + a - n, left: s.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const i = m();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, i) => {
                e.apply(t, [t, i]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = m(),
            i = f(),
            s = this[0];
          let r, n;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (r = x(e), n = 0; n < r.length; n += 1)
              if (r[n] === s) return !0;
            return !1;
          }
          if (e === i) return s === i;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof v) {
            for (r = e.nodeType ? [e] : e, n = 0; n < r.length; n += 1)
              if (r[n] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return x([]);
          if (e < 0) {
            const i = t + e;
            return x(i < 0 ? [] : [this[i]]);
          }
          return x([this[e]]);
        },
        append: function (...e) {
          let t;
          const i = f();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof v)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = f();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const r = t.createElement("div");
              for (r.innerHTML = e, s = r.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(r.childNodes[s], this[i].childNodes[0]);
            } else if (e instanceof v)
              for (s = 0; s < e.length; s += 1)
                this[i].insertBefore(e[s], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                x(this[0].nextElementSibling).is(e)
                ? x([this[0].nextElementSibling])
                : x([])
              : this[0].nextElementSibling
              ? x([this[0].nextElementSibling])
              : x([])
            : x([]);
        },
        nextAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return x([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? x(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return x(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && x(t.previousElementSibling).is(e)
                ? x([t.previousElementSibling])
                : x([])
              : t.previousElementSibling
              ? x([t.previousElementSibling])
              : x([]);
          }
          return x([]);
        },
        prevAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return x([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? x(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return x(t);
        },
        parent: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? x(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return x(t);
        },
        parents: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? x(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return x(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? x([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return x(t);
        },
        children: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (e && !x(s[i]).is(e)) || t.push(s[i]);
          }
          return x(t);
        },
        filter: function (e) {
          return x(b(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(E).forEach((e) => {
        Object.defineProperty(x.fn, e, { value: E[e], writable: !0 });
      });
      const C = x;
      function T(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function O() {
        return Date.now();
      }
      function A(e, t) {
        void 0 === t && (t = "x");
        const i = m();
        let s, r, n;
        const o = (function (e) {
          const t = m();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((n =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = n.toString().split(","))),
          "x" === t &&
            (r = i.WebKitCSSMatrix
              ? n.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === t &&
            (r = i.WebKitCSSMatrix
              ? n.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          r || 0
        );
      }
      function k(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function L(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function I() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != s && !L(s)) {
            const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = i.length; t < r; t += 1) {
              const r = i[t],
                n = Object.getOwnPropertyDescriptor(s, r);
              void 0 !== n &&
                n.enumerable &&
                (k(e[r]) && k(s[r])
                  ? s[r].__swiper__
                    ? (e[r] = s[r])
                    : I(e[r], s[r])
                  : !k(e[r]) && k(s[r])
                  ? ((e[r] = {}),
                    s[r].__swiper__ ? (e[r] = s[r]) : I(e[r], s[r]))
                  : (e[r] = s[r]));
            }
          }
        }
        return e;
      }
      function M(e, t, i) {
        e.style.setProperty(t, i);
      }
      function P(e) {
        let { swiper: t, targetPosition: i, side: s } = e;
        const r = m(),
          n = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const c = i > n ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = n + c * (i - n);
            if ((d(p, i) && (p = i), t.wrapperEl.scrollTo({ [s]: p }), d(p, i)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [s]: p });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(u);
          };
        u();
      }
      let z, _, $;
      function D() {
        return (
          z ||
            (z = (function () {
              const e = m(),
                t = f();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          z
        );
      }
      function B(e) {
        return (
          void 0 === e && (e = {}),
          _ ||
            (_ = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const i = D(),
                s = m(),
                r = s.navigator.platform,
                n = t || s.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = s.screen.width,
                l = s.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = n.match(/(iPad).*OS\s([\d_]+)/);
              const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r;
              let f = "MacIntel" === r;
              return (
                !d &&
                  f &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((d = n.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, "13_0_0"]),
                  (f = !1)),
                c && !h && ((o.os = "android"), (o.android = !0)),
                (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          _
        );
      }
      function N() {
        return (
          $ ||
            ($ = (function () {
              const e = m();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          $
        );
      }
      const j = {
        on(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          const r = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][r](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          function r() {
            s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
              n[o] = arguments[o];
            t.apply(s, n);
          }
          return (r.__emitterProxy = t), s.on(e, r, i);
        },
        onAny(e, t) {
          const i = this;
          if ("function" != typeof e) return i;
          const s = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, r) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(r, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, i, s;
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          "string" == typeof n[0] || Array.isArray(n[0])
            ? ((t = n[0]), (i = n.slice(1, n.length)), (s = e))
            : ((t = n[0].events), (i = n[0].data), (s = n[0].context || e)),
            i.unshift(s);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(s, [t, ...i]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(s, i);
                  });
            }),
            e
          );
        },
      };
      const R = {
        updateSize: function () {
          const e = this;
          let t, i;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const s = e.params,
            { $wrapperEl: r, size: n, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && s.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = r.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const h = [],
            f = [];
          let g = s.slidesOffsetBefore;
          "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
          let m = s.slidesOffsetAfter;
          "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = s.spaceBetween,
            x = -g,
            w = 0,
            S = 0;
          if (void 0 === n) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * n),
            (e.virtualSize = -b),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
              M(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          E && e.grid.initSlides(u);
          const T =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < u; r += 1) {
            C = 0;
            const o = d.eq(r);
            if (
              (E && e.grid.updateSlide(r, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                T && (d[r].style[t("width")] = "");
                const n = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = i(n, "width"),
                    t = i(n, "padding-left"),
                    s = i(n, "padding-right"),
                    r = i(n, "margin-left"),
                    a = i(n, "margin-right"),
                    l = n.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + r + a;
                  else {
                    const { clientWidth: i, offsetWidth: n } = o[0];
                    C = e + t + s + r + a + (n - i);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  s.roundLengths && (C = Math.floor(C));
              } else
                (C = (n - (s.slidesPerView - 1) * b) / s.slidesPerView),
                  s.roundLengths && (C = Math.floor(C)),
                  d[r] && (d[r].style[t("width")] = `${C}px`);
              d[r] && (d[r].swiperSlideSize = C),
                f.push(C),
                s.centeredSlides
                  ? ((x = x + C / 2 + w / 2 + b),
                    0 === w && 0 !== r && (x = x - n / 2 - b),
                    0 === r && (x = x - n / 2 - b),
                    Math.abs(x) < 0.001 && (x = 0),
                    s.roundLengths && (x = Math.floor(x)),
                    S % s.slidesPerGroup == 0 && p.push(x),
                    h.push(x))
                  : (s.roundLengths && (x = Math.floor(x)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    h.push(x),
                    (x = x + C + b)),
                (e.virtualSize += C + b),
                (w = C),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, n) + m),
            o &&
              a &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              r.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              r.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(C, p, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < p.length; i += 1) {
              let r = p[i];
              s.roundLengths && (r = Math.floor(r)),
                p[i] <= e.virtualSize - n && t.push(r);
            }
            (p = t),
              Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - n);
          }
          if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
            const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
              [i]: `${b}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - n;
            p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < n)
            ) {
              const t = (n - e) / 2;
              p.forEach((e, i) => {
                p[i] = e - t;
              }),
                h.forEach((e, i) => {
                  h[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            M(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              M(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== y && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.$el.hasClass(t);
            u <= s.maxBackfaceHiddenSlides
              ? i || e.$el.addClass(t)
              : i && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            s = t.virtual && t.params.virtual.enabled;
          let r,
            n = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                i.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !s) break;
                i.push(o(e));
              }
          else i.push(o(t.activeIndex));
          for (r = 0; r < i.length; r += 1)
            if (void 0 !== i[r]) {
              const e = i[r].offsetHeight;
              n = e > n ? e : n;
            }
          (n || 0 === n) && t.$wrapperEl.css("height", `${n}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            i = t.params,
            { slides: s, rtlTranslate: r, snapGrid: n } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          r && (o = e),
            s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const a = s[e];
            let l = a.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              d =
                (o - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass)),
              (a.progress = r ? -c : c),
              (a.originalProgress = r ? -d : d);
          }
          t.visibleSlides = C(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: n, isEnd: o } = t;
          const a = n,
            l = o;
          0 === s
            ? ((r = 0), (n = !0), (o = !0))
            : ((r = (e - t.minTranslate()) / s), (n = r <= 0), (o = r >= 1)),
            Object.assign(t, { progress: r, isBeginning: n, isEnd: o }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !n) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: s,
              activeIndex: r,
              realIndex: n,
            } = e,
            o = e.virtual && i.virtual.enabled;
          let a;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${r}"]`
                )
              : t.eq(r)),
            a.addClass(i.slideActiveClass),
            i.loop &&
              (a.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let c = a
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: r,
              params: n,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (d = e)
                  : i >= s[e] && i < s[e + 1] && (d = e + 1)
                : i >= s[e] && (d = e);
            n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (r.indexOf(i) >= 0) c = r.indexOf(i);
          else {
            const e = Math.min(n.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / n.slidesPerGroup);
          }
          if ((c >= r.length && (c = r.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            s = C(e).closest(`.${i.slideClass}`)[0];
          let r,
            n = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (n = !0), (r = e);
                break;
              }
          if (!s || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  C(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const G = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          let n = A(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            {
              rtlTranslate: s,
              params: r,
              $wrapperEl: n,
              wrapperEl: o,
              progress: a,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -e : e) : (d = e),
            r.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            r.cssMode
              ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -c : -d)
              : r.virtualTranslate ||
                n.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const u = i.maxTranslate() - i.minTranslate();
          (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
            l !== a && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          const n = this,
            { params: o, wrapperEl: a } = n;
          if (n.animating && o.preventInteractionOnTransition) return !1;
          const l = n.minTranslate(),
            c = n.maxTranslate();
          let d;
          if (
            ((d = s && e > l ? l : s && e < c ? c : e),
            n.updateProgress(d),
            o.cssMode)
          ) {
            const e = n.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!n.support.smoothScroll)
                return (
                  P({
                    swiper: n,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(d),
                i &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionEnd")))
              : (n.setTransition(t),
                n.setTranslate(d),
                i &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionStart")),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        i && n.emit("transitionEnd"));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function W(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: r } = e;
        const { activeIndex: n, previousIndex: o } = t;
        let a = s;
        if (
          (a || (a = n > o ? "next" : n < o ? "prev" : "reset"),
          t.emit(`transition${r}`),
          i && n !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      const F = {
        slideTo: function (e, t, i, s, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = n;
          if (
            (n.animating && a.preventInteractionOnTransition) ||
            (!f && !s && !r)
          )
            return !1;
          const g = Math.min(n.params.slidesPerGroupSkip, o);
          let m = g + Math.floor((o - g) / n.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              i &&
              n.emit("beforeSlideChangeStart");
          const v = -l[m];
          if ((n.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * c[e]),
                s = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < s - (s - i) / 2
                  ? (o = e)
                  : t >= i && t < s && (o = e + 1)
                : t >= i && (o = e);
            }
          if (n.initialized && o !== u) {
            if (!n.allowSlideNext && v < n.translate && v < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              v > n.translate &&
              v > n.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let y;
          if (
            ((y = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -v === n.translate) || (!p && v === n.translate))
          )
            return (
              n.updateActiveIndex(o),
              a.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== a.effect && n.setTranslate(v),
              "reset" !== y && (n.transitionStart(i, y), n.transitionEnd(i, y)),
              !1
            );
          if (a.cssMode) {
            const e = n.isHorizontal(),
              i = p ? v : -v;
            if (0 === t) {
              const t = n.virtual && n.params.virtual.enabled;
              t &&
                ((n.wrapperEl.style.scrollSnapType = "none"),
                (n._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (n.wrapperEl.style.scrollSnapType = ""),
                      (n._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!n.support.smoothScroll)
                return (
                  P({ swiper: n, targetPosition: i, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            n.setTransition(t),
            n.setTranslate(v),
            n.updateActiveIndex(o),
            n.updateSlidesClasses(),
            n.emit("beforeTransitionStart", t, s),
            n.transitionStart(i, y),
            0 === t
              ? n.transitionEnd(i, y)
              : n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(i, y));
                  }),
                n.$wrapperEl[0].addEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                n.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  n.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          const r = this;
          let n = e;
          return r.params.loop && (n += r.loopedSlides), r.slideTo(n, t, i, s);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            { animating: r, enabled: n, params: o } = s;
          if (!n) return s;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (r && o.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return o.rewind && s.isEnd
            ? s.slideTo(0, e, t, i)
            : s.slideTo(s.activeIndex + l, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            {
              params: r,
              animating: n,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (r.loop) {
            if (n && r.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? s.translate : -s.translate),
            p = o.map((e) => d(e));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && r.cssMode) {
            let e;
            o.forEach((t, i) => {
              u >= t && (e = i);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = s.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            r.rewind && s.isBeginning)
          ) {
            const r =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(r, e, t, i);
          }
          return s.slideTo(f, e, t, i);
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          const r = this;
          let n = r.activeIndex;
          const o = Math.min(r.params.slidesPerGroupSkip, n),
            a = o + Math.floor((n - o) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[a]) {
            const e = r.snapGrid[a];
            l - e > (r.snapGrid[a + 1] - e) * s &&
              (n += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[a - 1];
            l - e <= (r.snapGrid[a] - e) * s && (n -= r.params.slidesPerGroup);
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, r.slidesGrid.length - 1)),
            r.slideTo(n, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            n = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              C(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? n < e.loopedSlides - s / 2 ||
                  n > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (n = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    T(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n)
                : n > e.slides.length - s
                ? (e.loopFix(),
                  (n = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  T(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n);
          } else e.slideTo(n);
        },
      };
      const H = {
        loopCreate: function () {
          const e = this,
            t = f(),
            { params: i, $wrapperEl: s } = e,
            r = s.children().length > 0 ? C(s.children()[0].parentNode) : s;
          r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let n = r.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (n.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = C(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                r.append(e);
              }
              n = r.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = n.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > n.length && (e.loopedSlides = n.length);
          const o = [],
            a = [];
          n.each((t, i) => {
            const s = C(t);
            i < e.loopedSlides && a.push(t),
              i < n.length && i >= n.length - e.loopedSlides && o.push(t),
              s.attr("data-swiper-slide-index", i);
          });
          for (let e = 0; e < a.length; e += 1)
            r.append(C(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            r.prepend(C(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: r,
            allowSlideNext: n,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < s) {
            (l = i.length - 3 * s + t), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= i.length - s) {
            (l = -i.length + t + s), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      function V(e) {
        const t = this,
          i = f(),
          s = m(),
          r = t.touchEventsData,
          { params: n, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = C(l.target);
        if ("wrapper" === n.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((r.isTouchEvent = "touchstart" === l.type),
          !r.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!r.isTouchEvent && "button" in l && l.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        !!n.noSwipingClass &&
          "" !== n.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = C(e.path[0]));
        const d = n.noSwipingSelector
            ? n.noSwipingSelector
            : `.${n.noSwipingClass}`,
          u = !(!l.target || !l.target.shadowRoot);
        if (
          n.noSwiping &&
          (u
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    return i && i !== f() && i !== m()
                      ? (i.assignedSlot && (i = i.assignedSlot),
                        i.closest(e) || t(i.getRootNode().host))
                      : null;
                  })(t)
                );
              })(d, l.target)
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          h = o.currentY,
          g = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
          v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (g && (p <= v || p >= s.innerWidth - v)) {
          if ("prevent" !== g) return;
          e.preventDefault();
        }
        if (
          (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = h),
          (r.touchStartTime = O()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          n.threshold > 0 && (r.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(r.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
            i.activeElement &&
              C(i.activeElement).is(r.focusableElements) &&
              i.activeElement !== c[0] &&
              i.activeElement.blur();
          const s = e && t.allowTouchMove && n.touchStartPreventDefault;
          (!n.touchStartForcePreventDefault && !s) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !n.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function q(e) {
        const t = f(),
          i = this,
          s = i.touchEventsData,
          { params: r, touches: n, rtlTranslate: o, enabled: a } = i;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit("touchMoveOpposite", l)
          );
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (n.startX = d), void (n.startY = u);
        if (!i.allowTouchMove)
          return (
            C(l.target).is(s.focusableElements) || (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(n, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (s.touchStartTime = O()))
            )
          );
        if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (i.isVertical()) {
            if (
              (u < n.startY && i.translate <= i.maxTranslate()) ||
              (u > n.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (d < n.startX && i.translate <= i.maxTranslate()) ||
            (d > n.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          C(l.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (n.currentX = d), (n.currentY = u);
        const p = n.currentX - n.startX,
          h = n.currentY - n.startY;
        if (
          i.params.threshold &&
          Math.sqrt(p ** 2 + h ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && n.currentY === n.startY) ||
          (i.isVertical() && n.currentX === n.startX)
            ? (s.isScrolling = !1)
            : p * p + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", l),
          void 0 === s.startMoving &&
            ((n.currentX === n.startX && n.currentY === n.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !r.cssMode && l.cancelable && l.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
          s.isMoved ||
            (r.loop && !r.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", l)),
          i.emit("sliderMove", l),
          (s.isMoved = !0);
        let g = i.isHorizontal() ? p : h;
        (n.diff = g),
          (g *= r.touchRatio),
          o && (g = -g),
          (i.swipeDirection = g > 0 ? "prev" : "next"),
          (s.currentTranslate = g + s.startTranslate);
        let m = !0,
          v = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (v = 0),
          g > 0 && s.currentTranslate > i.minTranslate()
            ? ((m = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** v))
            : g < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((m = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** v)),
          m && (l.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(g) > r.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (n.startX = n.currentX),
              (n.startY = n.currentY),
              (s.currentTranslate = s.startTranslate),
              void (n.diff = i.isHorizontal()
                ? n.currentX - n.startX
                : n.currentY - n.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
            r.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            r.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function X(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: r,
            rtlTranslate: n,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = O(),
          d = c - i.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((i.lastClickTime = O()),
          T(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = s.followFinger
            ? n
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (t.params.freeMode && s.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          g = null;
        s.rewind &&
          (t.isBeginning
            ? (g =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const m = (u - o[p]) / h,
          v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= s.longSwipesRatio
              ? t.slideTo(s.rewind && t.isEnd ? f : p + v)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (m > 1 - s.longSwipesRatio
                ? t.slideTo(p + v)
                : null !== g && m < 0 && Math.abs(m) > s.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(p));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + v)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p));
        }
      }
      function Y() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = s),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function U(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function K() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
          r !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Q = !1;
      function J() {}
      const Z = (e, t) => {
        const i = f(),
          {
            params: s,
            touchEvents: r,
            el: n,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!s.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !l.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          n[d](r.start, e.onTouchStart, t),
            n[d](
              r.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            n[d](r.end, e.onTouchEnd, t),
            r.cancel && n[d](r.cancel, e.onTouchEnd, t);
        } else
          n[d](r.start, e.onTouchStart, !1),
            i[d](r.move, e.onTouchMove, c),
            i[d](r.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          n[d]("click", e.onClick, !0),
          s.cssMode && o[d]("scroll", e.onScroll),
          s.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Y,
                !0
              )
            : e[u]("observerUpdate", Y, !0);
      };
      const ee = {
          attachEvents: function () {
            const e = this,
              t = f(),
              { params: i, support: s } = e;
            (e.onTouchStart = V.bind(e)),
              (e.onTouchMove = q.bind(e)),
              (e.onTouchEnd = X.bind(e)),
              i.cssMode && (e.onScroll = K.bind(e)),
              (e.onClick = U.bind(e)),
              s.touch && !Q && (t.addEventListener("touchstart", J), (Q = !0)),
              Z(e, "on");
          },
          detachEvents: function () {
            Z(this, "off");
          },
        },
        te = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const ie = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: i,
              loopedSlides: s = 0,
              params: r,
              $el: n,
            } = e,
            o = r.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = te(e, r),
            d = te(e, l),
            u = r.enabled;
          c && !d
            ? (n.removeClass(
                `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (n.addClass(`${r.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === r.grid.fill)) &&
                n.addClass(`${r.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== r.direction,
            h = r.loop && (l.slidesPerView !== r.slidesPerView || p);
          p && i && e.changeDirection(), I(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              i &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - s + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, i) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
            return;
          let s = !1;
          const r = m(),
            n = "window" === t ? r.innerHeight : i.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: n, value: a } = o[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = n)
              : a <= i.clientWidth && (s = n);
          }
          return s || "max";
        },
      };
      const se = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: s,
              $el: r,
              device: n,
              support: o,
            } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: n.android },
                { ios: n.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
              ],
              i.containerModifierClass
            );
          t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const re = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function ne(e, t) {
        return function (i) {
          void 0 === i && (i = {});
          const s = Object.keys(i)[0],
            r = i[s];
          "object" == typeof r && null !== r
            ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                !0 === e[s] &&
                (e[s] = { auto: !0 }),
              s in e && "enabled" in r
                ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                  "object" != typeof e[s] ||
                    "enabled" in e[s] ||
                    (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  I(t, i))
                : I(t, i))
            : I(t, i);
        };
      }
      const oe = {
          eventsEmitter: j,
          update: R,
          translate: G,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                W({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  W({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: F,
          loop: H,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (i.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: ee,
          breakpoints: ie,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: se,
          images: {
            loadImage: function (e, t, i, s, r, n) {
              const o = m();
              let a;
              function l() {
                n && n();
              }
              C(e).parent("picture")[0] || (e.complete && r)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  s && (a.sizes = s),
                  i && (a.srcset = i),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        ae = {};
      class le {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
          if (
            (1 === s.length &&
            s[0].constructor &&
            "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
              ? (t = s[0])
              : ([e, t] = s),
            t || (t = {}),
            (t = I({}, t)),
            e && !t.el && (t.el = e),
            t.el && C(t.el).length > 1)
          ) {
            const e = [];
            return (
              C(t.el).each((i) => {
                const s = I({}, t, { el: i });
                e.push(new le(s));
              }),
              e
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = D()),
            (n.device = B({ userAgent: t.userAgent })),
            (n.browser = N()),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              n.modules.push(...t.modules);
          const o = {};
          n.modules.forEach((e) => {
            e({
              swiper: n,
              extendParams: ne(t, o),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const a = I({}, re, o);
          return (
            (n.params = I({}, a, ae, t)),
            (n.originalParams = I({}, n.params)),
            (n.passedParams = I({}, t)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            (n.$ = C),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: e,
              classNames: [],
              slides: C(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === n.params.direction,
              isVertical: () => "vertical" === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (n.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (n.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  n.support.touch || !n.params.simulateTouch
                    ? n.touchEventsTouch
                    : n.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: O(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            r = (i.maxTranslate() - s) * e + s;
          i.translateTo(r, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: i,
            slides: s,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let e,
              t = s[a].swiperSlideSize;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1) {
              (t ? r[e] + n[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              r[a] - r[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((r =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                r || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const i = C(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          const s = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = C(e.shadowRoot.querySelector(s()));
              return (t.children = (e) => i.children(e)), t;
            }
            return i.children(s());
          })();
          if (0 === r.length && t.params.createElements) {
            const e = f().createElement("div");
            (r = C(e)),
              (e.className = t.params.wrapperClass),
              i.append(e),
              i.children(`.${t.params.slideClass}`).each((e) => {
                r.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const i = this,
            { params: s, $el: r, $wrapperEl: n, slides: o } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          I(ae, e);
        }
        static get extendedDefaults() {
          return ae;
        }
        static get defaults() {
          return re;
        }
        static installModule(e) {
          le.prototype.__modules__ || (le.prototype.__modules__ = []);
          const t = le.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => le.installModule(e)), le)
            : (le.installModule(e), le);
        }
      }
      Object.keys(oe).forEach((e) => {
        Object.keys(oe[e]).forEach((t) => {
          le.prototype[t] = oe[e][t];
        });
      }),
        le.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e;
            const r = m();
            let n = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && s("orientationchange");
              };
            i("init", () => {
              t.params.resizeObserver && void 0 !== r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((n = new ResizeObserver((e) => {
                    o = r.requestAnimationFrame(() => {
                      const { width: i, height: s } = t;
                      let r = i,
                        n = s;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((r = s ? s.width : (i[0] || i).inlineSize),
                          (n = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (r === i && n === s) || a();
                    });
                  })),
                  n.observe(t.el))
                : (r.addEventListener("resize", a),
                  r.addEventListener("orientationchange", l));
            }),
              i("destroy", () => {
                o && r.cancelAnimationFrame(o),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                  r.removeEventListener("resize", a),
                  r.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: r } = e;
            const n = [],
              o = m(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                      r("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(i);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const ce = le;
      function de(e, t, i, s) {
        const r = f();
        return (
          e.params.createElements &&
            Object.keys(s).forEach((n) => {
              if (!i[n] && !0 === i.auto) {
                let o = e.$el.children(`.${s[n]}`)[0];
                o ||
                  ((o = r.createElement("div")),
                  (o.className = s[n]),
                  e.$el.append(o)),
                  (i[n] = o),
                  (t[n] = o);
              }
            }),
          i
        );
      }
      function ue(e) {
        let { swiper: t, extendParams: i, on: s, emit: r } = e;
        function n(e) {
          let i;
          return (
            e &&
              ((i = C(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                i.length > 1 &&
                1 === t.$el.find(e).length &&
                (i = t.$el.find(e))),
            i
          );
        }
        function o(e, i) {
          const s = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[i ? "addClass" : "removeClass"](s.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: i } = t.navigation;
          o(i, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              t.slidePrev();
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function d() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = de(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const i = n(e.nextEl),
            s = n(e.prevEl);
          i && i.length > 0 && i.on("click", c),
            s && s.length > 0 && s.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            t.enabled ||
              (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
        }
        function u() {
          const { $nextEl: e, $prevEl: i } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", l),
              i.removeClass(t.params.navigation.disabledClass));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            d(), a();
          }),
          s("toEdge fromEdge lock unlock", () => {
            a();
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $nextEl: e, $prevEl: i } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              i &&
                i[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          s("click", (e, i) => {
            const { $nextEl: s, $prevEl: n } = t.navigation,
              o = i.target;
            if (t.params.navigation.hideOnClick && !C(o).is(n) && !C(o).is(s)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              s
                ? (e = s.hasClass(t.params.navigation.hiddenClass))
                : n && (e = n.hasClass(t.params.navigation.hiddenClass)),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(t.params.navigation.hiddenClass),
                n && n.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: a, init: d, destroy: u });
      }
      function pe(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function he(e) {
        let { swiper: t, extendParams: i, on: s, emit: r } = e;
        const n = "swiper-pagination";
        let o;
        i({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, i) {
          const { bulletActiveClass: s } = t.params.pagination;
          e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function d() {
          const e = t.rtl,
            i = t.params.pagination;
          if (l()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            n = t.pagination.$el;
          let d;
          const u = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((d = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                d > s - 1 - 2 * t.loopedSlides && (d -= s - 2 * t.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
              : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === i.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const s = t.pagination.bullets;
            let r, l, u;
            if (
              (i.dynamicBullets &&
                ((o = s
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                n.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (i.dynamicMainBullets + 4) + "px"
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                  a > i.dynamicMainBullets - 1
                    ? (a = i.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (r = Math.max(d - a, 0)),
                (l = r + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                (u = (l + r) / 2)),
              s.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${i.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              n.length > 1)
            )
              s.each((e) => {
                const t = C(e),
                  s = t.index();
                s === d && t.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (s >= r &&
                      s <= l &&
                      t.addClass(`${i.bulletActiveClass}-main`),
                    s === r && c(t, "prev"),
                    s === l && c(t, "next"));
              });
            else {
              const e = s.eq(d),
                n = e.index();
              if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const e = s.eq(r),
                  o = s.eq(l);
                for (let e = r; e <= l; e += 1)
                  s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (n >= s.length) {
                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                      s.eq(s.length - e).addClass(
                        `${i.bulletActiveClass}-main`
                      );
                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (i.dynamicBullets) {
              const r = Math.min(s.length, i.dynamicMainBullets + 4),
                n = (o * r - o) / 2 - u * o,
                a = e ? "right" : "left";
              s.css(t.isHorizontal() ? a : "top", `${n}px`);
            }
          }
          if (
            ("fraction" === i.type &&
              (n.find(pe(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
              n.find(pe(i.totalClass)).text(i.formatFractionTotal(u))),
            "progressbar" === i.type)
          ) {
            let e;
            e = i.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const s = (d + 1) / u;
            let r = 1,
              o = 1;
            "horizontal" === e ? (r = s) : (o = s),
              n
                .find(pe(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (n.html(i.renderCustom(t, d + 1, u)), r("paginationRender", n[0]))
            : r("paginationUpdate", n[0]),
            t.params.watchOverflow &&
              t.enabled &&
              n[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let n = "";
          if ("bullets" === e.type) {
            let r = t.params.loop
              ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              r > i &&
              (r = i);
            for (let i = 0; i < r; i += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(t, i, e.bulletClass))
                : (n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            s.html(n), (t.pagination.bullets = s.find(pe(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((n = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            s.html(n)),
            "progressbar" === e.type &&
              ((n = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              s.html(n)),
            "custom" !== e.type && r("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = de(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let i = C(e.el);
          0 !== i.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              i.length > 1 &&
              ((i = t.$el.find(e.el)),
              i.length > 1 &&
                (i = i.filter((e) => C(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
            i.addClass(e.modifierClass + e.type),
            i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              i.addClass(e.progressbarOppositeClass),
            e.clickable &&
              i.on("click", pe(e.bulletClass), function (e) {
                e.preventDefault();
                let i = C(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
              }),
            Object.assign(t.pagination, { $el: i, el: i[0] }),
            t.enabled || i.addClass(e.lockClass));
        }
        function h() {
          const e = t.params.pagination;
          if (l()) return;
          const i = t.pagination.$el;
          i.removeClass(e.hiddenClass),
            i.removeClass(e.modifierClass + e.type),
            i.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && i.off("click", pe(e.bulletClass));
        }
        s("init", () => {
          p(), u(), d();
        }),
          s("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && d();
          }),
          s("snapIndexChange", () => {
            t.params.loop || d();
          }),
          s("slidesLengthChange", () => {
            t.params.loop && (u(), d());
          }),
          s("snapGridLengthChange", () => {
            t.params.loop || (u(), d());
          }),
          s("destroy", () => {
            h();
          }),
          s("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            d();
          }),
          s("click", (e, i) => {
            const s = i.target,
              { $el: n } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              n.length > 0 &&
              !C(s).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                  (t.navigation.prevEl && s === t.navigation.prevEl))
              )
                return;
              const e = n.hasClass(t.params.pagination.hiddenClass);
              r(!0 === e ? "paginationShow" : "paginationHide"),
                n.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: u,
            update: d,
            init: p,
            destroy: h,
          });
      }
      function fe(e) {
        let { swiper: t, extendParams: i, on: s, emit: r } = e;
        i({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let n = !1,
          o = !1;
        function a(e, i) {
          void 0 === i && (i = !0);
          const s = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const n =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            o = n.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !n.hasClass(s.elementClass) ||
            n.hasClass(s.loadedClass) ||
            n.hasClass(s.loadingClass) ||
            o.push(n[0]),
            0 !== o.length &&
              o.each((e) => {
                const o = C(e);
                o.addClass(s.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  d = o.attr("data-srcset"),
                  u = o.attr("data-sizes"),
                  p = o.parent("picture");
                t.loadImage(o[0], c || l, d, u, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (d &&
                            (o.attr("srcset", d), o.removeAttr("data-srcset")),
                          u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((e) => {
                              const t = C(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(s.loadedClass).removeClass(s.loadingClass),
                      n.find(`.${s.preloaderClass}`).remove(),
                      t.params.loop && i)
                    ) {
                      const e = n.attr("data-swiper-slide-index");
                      if (n.hasClass(t.params.slideDuplicateClass)) {
                        a(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    r("lazyImageReady", n[0], o[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  r("lazyImageLoad", n[0], o[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: i, slides: s, activeIndex: r } = t,
            n = t.virtual && i.virtual.enabled,
            l = i.lazy;
          let c = i.slidesPerView;
          function d(t) {
            if (n) {
              if (
                e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (s[t]) return !0;
            return !1;
          }
          function u(e) {
            return n ? C(e).attr("data-swiper-slide-index") : C(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${i.slideVisibleClass}`).each((e) => {
              a(n ? C(e).attr("data-swiper-slide-index") : C(e).index());
            });
          else if (c > 1) for (let e = r; e < r + c; e += 1) d(e) && a(e);
          else a(r);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = c,
                i = Math.min(r + t + Math.max(e, t), s.length),
                n = Math.max(r - Math.max(t, e), 0);
              for (let e = r + c; e < i; e += 1) d(e) && a(e);
              for (let e = n; e < r; e += 1) d(e) && a(e);
            } else {
              const t = e.children(`.${i.slideNextClass}`);
              t.length > 0 && a(u(t));
              const s = e.children(`.${i.slidePrevClass}`);
              s.length > 0 && a(u(s));
            }
        }
        function c() {
          const e = m();
          if (!t || t.destroyed) return;
          const i = t.params.lazy.scrollingElement
              ? C(t.params.lazy.scrollingElement)
              : C(e),
            s = i[0] === e,
            r = s ? e.innerWidth : i[0].offsetWidth,
            o = s ? e.innerHeight : i[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: d } = t;
          let u = !1;
          d && (a.left -= t.$el[0].scrollLeft);
          const p = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < p.length; e += 1) {
            const t = p[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              u = !0;
            }
          }
          const h = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          u
            ? (l(), i.off("scroll", c, h))
            : n || ((n = !0), i.on("scroll", c, h));
        }
        s("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          s("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          s("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          s("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          s("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          s("slideChange", () => {
            const {
              lazy: e,
              cssMode: i,
              watchSlidesProgress: s,
              touchReleaseOnEdges: r,
              resistanceRatio: n,
            } = t.params;
            e.enabled && (i || (s && (r || 0 === n))) && l();
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      function ge() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        !(function () {
          if (
            (ge(),
            document.querySelector(".projects__slider") &&
              new ce(".projects__slider", {
                modules: [ue, he, fe],
                observer: !0,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: !0,
                speed: 800,
                lazy: !0,
                pagination: { el: ".main-page__pagination", clickable: !0 },
                navigation: {
                  prevEl: ".projects__arrow_prev ",
                  nextEl: ".projects__arrow_next",
                },
                on: {},
              }),
            window.innerWidth <= 992 &&
              document.querySelector(".brands__slider"))
          ) {
            const e = document.querySelector(".brands__slider");
            new ce(e, {
              modules: [ue],
              observer: !0,
              slidesPerView: 2,
              spaceBetween: 30,
              autoHeight: !0,
              speed: 800,
              lazy: !0,
              pagination: { el: ".main-page__pagination", clickable: !0 },
              navigation: {
                prevEl: ".brands__arrow__prev ",
                nextEl: ".brands__arrow__next",
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                on: {},
              },
            });
          }
        })();
      });
      i(9399), i(3542);
      var me,
        ve = i(1807),
        ye = i.n(ve),
        be =
          (i(8165),
          i(7543),
          i(7692),
          i(2352),
          i(4249),
          i(3344),
          i(7323),
          i(4079),
          i(3096)),
        xe = i.n(be),
        we = i(1296),
        Se = i.n(we),
        Ee = i(773),
        Ce = i.n(Ee),
        Te = [],
        Oe = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(me || (me = {}));
      var Ae,
        ke = function (e) {
          return Object.freeze(e);
        },
        Le = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), ke(this);
        },
        Ie = (function () {
          function e(e, t, i, s) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = i),
              (this.height = s),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              ke(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Me = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Pe = function (e) {
          if (Me(e)) {
            var t = e.getBBox(),
              i = t.width,
              s = t.height;
            return !i && !s;
          }
          var r = e,
            n = r.offsetWidth,
            o = r.offsetHeight;
          return !(n || o || e.getClientRects().length);
        },
        ze = function (e) {
          var t, i;
          if (e instanceof Element) return !0;
          var s =
            null ===
              (i =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === i
              ? void 0
              : i.defaultView;
          return !!(s && e instanceof s.Element);
        },
        _e = "undefined" != typeof window ? window : {},
        $e = new WeakMap(),
        De = /auto|scroll/,
        Be = /^tb|vertical/,
        Ne = /msie|trident/i.test(_e.navigator && _e.navigator.userAgent),
        je = function (e) {
          return parseFloat(e || "0");
        },
        Re = function (e, t, i) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === i && (i = !1),
            new Le((i ? t : e) || 0, (i ? e : t) || 0)
          );
        },
        Ge = ke({
          devicePixelContentBoxSize: Re(),
          borderBoxSize: Re(),
          contentBoxSize: Re(),
          contentRect: new Ie(0, 0, 0, 0),
        }),
        We = function (e, t) {
          if ((void 0 === t && (t = !1), $e.has(e) && !t)) return $e.get(e);
          if (Pe(e)) return $e.set(e, Ge), Ge;
          var i = getComputedStyle(e),
            s = Me(e) && e.ownerSVGElement && e.getBBox(),
            r = !Ne && "border-box" === i.boxSizing,
            n = Be.test(i.writingMode || ""),
            o = !s && De.test(i.overflowY || ""),
            a = !s && De.test(i.overflowX || ""),
            l = s ? 0 : je(i.paddingTop),
            c = s ? 0 : je(i.paddingRight),
            d = s ? 0 : je(i.paddingBottom),
            u = s ? 0 : je(i.paddingLeft),
            p = s ? 0 : je(i.borderTopWidth),
            h = s ? 0 : je(i.borderRightWidth),
            f = s ? 0 : je(i.borderBottomWidth),
            g = u + c,
            m = l + d,
            v = (s ? 0 : je(i.borderLeftWidth)) + h,
            y = p + f,
            b = a ? e.offsetHeight - y - e.clientHeight : 0,
            x = o ? e.offsetWidth - v - e.clientWidth : 0,
            w = r ? g + v : 0,
            S = r ? m + y : 0,
            E = s ? s.width : je(i.width) - w - x,
            C = s ? s.height : je(i.height) - S - b,
            T = E + g + x + v,
            O = C + m + b + y,
            A = ke({
              devicePixelContentBoxSize: Re(
                Math.round(E * devicePixelRatio),
                Math.round(C * devicePixelRatio),
                n
              ),
              borderBoxSize: Re(T, O, n),
              contentBoxSize: Re(E, C, n),
              contentRect: new Ie(u, l, E, C),
            });
          return $e.set(e, A), A;
        },
        Fe = function (e, t, i) {
          var s = We(e, i),
            r = s.borderBoxSize,
            n = s.contentBoxSize,
            o = s.devicePixelContentBoxSize;
          switch (t) {
            case me.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case me.BORDER_BOX:
              return r;
            default:
              return n;
          }
        },
        He = function (e) {
          var t = We(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = ke([t.borderBoxSize])),
            (this.contentBoxSize = ke([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = ke([
              t.devicePixelContentBoxSize,
            ]));
        },
        Ve = function (e) {
          if (Pe(e)) return 1 / 0;
          for (var t = 0, i = e.parentNode; i; ) (t += 1), (i = i.parentNode);
          return t;
        },
        qe = function () {
          var e = 1 / 0,
            t = [];
          Te.forEach(function (i) {
            if (0 !== i.activeTargets.length) {
              var s = [];
              i.activeTargets.forEach(function (t) {
                var i = new He(t.target),
                  r = Ve(t.target);
                s.push(i),
                  (t.lastReportedSize = Fe(t.target, t.observedBox)),
                  r < e && (e = r);
              }),
                t.push(function () {
                  i.callback.call(i.observer, s, i.observer);
                }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }
          });
          for (var i = 0, s = t; i < s.length; i++) {
            (0, s[i])();
          }
          return e;
        },
        Xe = function (e) {
          Te.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (i) {
                i.isActive() &&
                  (Ve(i.target) > e
                    ? t.activeTargets.push(i)
                    : t.skippedTargets.push(i));
              });
          });
        },
        Ye = function () {
          var e = 0;
          for (
            Xe(e);
            Te.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = qe()), Xe(e);
          return (
            Te.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: Oe }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = Oe)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Ue = [],
        Ke = function (e) {
          if (!Ae) {
            var t = 0,
              i = document.createTextNode("");
            new MutationObserver(function () {
              return Ue.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(i, { characterData: !0 }),
              (Ae = function () {
                i.textContent = "" + (t ? t-- : t++);
              });
          }
          Ue.push(e), Ae();
        },
        Qe = 0,
        Je = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Ze = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        et = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        tt = !1,
        it = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !tt)) {
                tt = !0;
                var i,
                  s = et(e);
                (i = function () {
                  var i = !1;
                  try {
                    i = Ye();
                  } finally {
                    if (((tt = !1), (e = s - et()), !Qe)) return;
                    i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  Ke(function () {
                    requestAnimationFrame(i);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Je);
                };
              document.body ? t() : _e.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Ze.forEach(function (t) {
                  return _e.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Ze.forEach(function (t) {
                  return _e.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        st = function (e) {
          !Qe && e > 0 && it.start(), !(Qe += e) && it.stop();
        },
        rt = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || me.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Fe(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Me(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        nt = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        ot = new WeakMap(),
        at = function (e, t) {
          for (var i = 0; i < e.length; i += 1) if (e[i].target === t) return i;
          return -1;
        },
        lt = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var i = new nt(e, t);
              ot.set(e, i);
            }),
            (e.observe = function (e, t, i) {
              var s = ot.get(e),
                r = 0 === s.observationTargets.length;
              at(s.observationTargets, t) < 0 &&
                (r && Te.push(s),
                s.observationTargets.push(new rt(t, i && i.box)),
                st(1),
                it.schedule());
            }),
            (e.unobserve = function (e, t) {
              var i = ot.get(e),
                s = at(i.observationTargets, t),
                r = 1 === i.observationTargets.length;
              s >= 0 &&
                (r && Te.splice(Te.indexOf(i), 1),
                i.observationTargets.splice(s, 1),
                st(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                i = ot.get(e);
              i.observationTargets.slice().forEach(function (i) {
                return t.unobserve(e, i.target);
              }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }),
            e
          );
        })(),
        ct = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            lt.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!ze(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              lt.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!ze(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              lt.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              lt.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        dt =
          (i(7985),
          i(6618),
          i(9989),
          i(8307),
          i(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var i = t.name.match(/data-simplebar-(.+)/);
                if (i) {
                  var s = i[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[s] = !0;
                      break;
                    case "false":
                      e[s] = !1;
                      break;
                    case void 0:
                      e[s] = !0;
                      break;
                    default:
                      e[s] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function ut(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function pt(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var ht = null,
        ft = null;
      function gt(e) {
        if (null === ht) {
          var t = pt(e);
          if (void 0 === t) return (ht = 0);
          var i = t.body,
            s = t.createElement("div");
          s.classList.add("simplebar-hide-scrollbar"), i.appendChild(s);
          var r = s.getBoundingClientRect().right;
          i.removeChild(s), (ht = r);
        }
        return ht;
      }
      ye() &&
        window.addEventListener("resize", function () {
          ft !== window.devicePixelRatio &&
            ((ft = window.devicePixelRatio), (ht = null));
        });
      var mt = (function () {
        function e(t, i) {
          var s = this;
          (this.onScroll = function () {
            var e = ut(s.el);
            s.scrollXTicking ||
              (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
              s.scrollYTicking ||
                (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing &&
                (s.showScrollbar("x"), s.positionScrollbar("x")),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing &&
                (s.showScrollbar("y"), s.positionScrollbar("y")),
                (s.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              s.showScrollbar("x"), s.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                s.isWithinBounds(s.axis.y.track.rect) ||
                  (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.y.isVisible = !1)),
                s.isWithinBounds(s.axis.x.track.rect) ||
                  (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var i = s.axis[s.draggedAxis].track,
                r = i.rect[s.axis[s.draggedAxis].sizeAttr],
                n = s.axis[s.draggedAxis].scrollbar,
                o = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
                a = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === s.draggedAxis ? t.pageY : t.pageX) -
                  i.rect[s.axis[s.draggedAxis].offsetAttr] -
                  s.axis[s.draggedAxis].dragOffset) /
                  (r - n.size)) *
                (o - a);
              "x" === s.draggedAxis &&
                ((l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (r + n.size)
                    : l),
                (l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = pt(s.el),
                i = ut(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                s.el.classList.remove(s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, {}, i)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              {},
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = xe()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = xe()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = Se()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = Se()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = Ce()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var i = t.firstElementChild;
          document.body.appendChild(i);
          var s = i.firstElementChild;
          i.scrollLeft = 0;
          var r = e.getOffset(i),
            n = e.getOffset(s);
          i.scrollLeft = 999;
          var o = e.getOffset(s);
          return {
            isRtlScrollingInverted: r.left !== n.left && n.left - o.left != 0,
            isRtlScrollbarInverted: r.left !== n.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = pt(e),
              s = ut(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              ye() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                i = document.createElement("div");
              t.classList.add(this.classNames.track),
                i.classList.add(this.classNames.scrollbar),
                t.appendChild(i),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = ut(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var i = !1,
              s = t.ResizeObserver || ct;
            (this.resizeObserver = new s(function () {
              i && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                i = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = ut(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              i = this.heightAutoObserverEl.offsetWidth <= 1,
              s = this.contentEl.offsetWidth,
              r = this.contentWrapperEl.offsetWidth,
              n = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = i ? s + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > s),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== n && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > r - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              i = this.contentEl[this.axis[e].scrollSizeAttr],
              s = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              r = s / i;
            return (
              (t = Math.max(~~(r * s), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var i = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                s = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                n = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (i - r),
                l = ~~((s - n.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (s - n.size)
                  : l),
                (n.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var i = pt(this.el),
              s = ut(this.el),
              r = this.axis[t].scrollbar,
              n = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = n - r.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (s.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var i = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var s = ut(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var r = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
                l = -1 === a ? o - n : o + n;
              !(function e() {
                var r, n;
                -1 === a
                  ? o > l &&
                    ((o -= i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((r = {})[i.axis[t].offsetAttr] = o), r)
                    ),
                    s.requestAnimationFrame(e))
                  : o < l &&
                    ((o += i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((n = {})[i.axis[t].offsetAttr] = o), n)
                    ),
                    s.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : gt(this.el);
            } catch (e) {
              return gt(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = ut(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (mt.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (mt.instances = new WeakMap()),
        (mt.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  mt.instances.has(e) ||
                  new mt(e, dt(e.attributes));
              }
            );
        }),
        (mt.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (mt.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(mt.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (mt.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !mt.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new mt(e, dt(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !mt.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new mt(e, dt(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? mt.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      mt.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          mt.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            mt.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (mt.getOptions = dt),
        ye() && mt.initHtmlApi();
      let vt = !1;
      setTimeout(() => {
        if (vt) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0);
      var yt = function () {
        return (
          (yt =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          yt.apply(this, arguments)
        );
      };
      var bt = "lgAfterAppendSlide",
        xt = "lgInit",
        wt = "lgHasVideo",
        St = "lgContainerResize",
        Et = "lgUpdateSlides",
        Ct = "lgAfterAppendSubHtml",
        Tt = "lgBeforeOpen",
        Ot = "lgAfterOpen",
        At = "lgSlideItemLoad",
        kt = "lgBeforeSlide",
        Lt = "lgAfterSlide",
        It = "lgPosterClick",
        Mt = "lgDragStart",
        Pt = "lgDragMove",
        zt = "lgDragEnd",
        _t = "lgBeforeNextSlide",
        $t = "lgBeforePrevSlide",
        Dt = "lgBeforeClose",
        Bt = "lgAfterClose",
        Nt = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
          strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
          },
        };
      var jt = (function () {
        function e(e) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(e)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (e.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (e.prototype._getSelector = function (e, t) {
            return (
              void 0 === t && (t = document),
              "string" != typeof e
                ? e
                : ((t = t || document),
                  "#" === e.substring(0, 1)
                    ? t.querySelector(e)
                    : t.querySelectorAll(e))
            );
          }),
          (e.prototype._each = function (e) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, e)
                  : e(this.selector, 0),
                this)
              : this;
          }),
          (e.prototype._setCssVendorPrefix = function (e, t, i) {
            var s = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(s)
              ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
                (e.style["webkit" + s] = i),
                (e.style["moz" + s] = i),
                (e.style["ms" + s] = i),
                (e.style["o" + s] = i))
              : (e.style[s] = i);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var i = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== i.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (i) {
                  i.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return Rt(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? Rt(this.selector[0])
              : Rt(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return Rt(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return Rt(this.selector.parentElement);
          }),
          (e.prototype.get = function () {
            return this._getFirstEl();
          }),
          (e.prototype.removeAttr = function (e) {
            var t = e.split(" ");
            return (
              this._each(function (e) {
                t.forEach(function (t) {
                  return e.removeAttribute(t);
                });
              }),
              this
            );
          }),
          (e.prototype.wrap = function (e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return (
              (t.className = e),
              this.firstElement.parentNode.insertBefore(t, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              t.appendChild(this.firstElement),
              this
            );
          }),
          (e.prototype.addClass = function (e) {
            return (
              void 0 === e && (e = ""),
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.add(e);
                });
              }),
              this
            );
          }),
          (e.prototype.removeClass = function (e) {
            return (
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.remove(e);
                });
              }),
              this
            );
          }),
          (e.prototype.hasClass = function (e) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(e)
            );
          }),
          (e.prototype.hasAttribute = function (e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e);
          }),
          (e.prototype.toggleClass = function (e) {
            return this.firstElement
              ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                this)
              : this;
          }),
          (e.prototype.css = function (e, t) {
            var i = this;
            return (
              this._each(function (s) {
                i._setCssVendorPrefix(s, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, i) {
            var s = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(i),
                    s.selector.addEventListener(t.split(".")[0], i);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var i = this;
            return (
              this.on(e, function () {
                i.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var i = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (s) {
                  i.isEventMatched(t, s) &&
                    (e.eventListeners[s].forEach(function (e) {
                      i.selector.removeEventListener(s.split(".")[0], e);
                    }),
                    (e.eventListeners[s] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var i = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(i), this;
          }),
          (e.prototype.load = function (e) {
            var t = this;
            return (
              fetch(e)
                .then(function (e) {
                  return e.text();
                })
                .then(function (e) {
                  t.selector.innerHTML = e;
                }),
              this
            );
          }),
          (e.prototype.html = function (e) {
            return void 0 === e
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (t) {
                  t.innerHTML = e;
                }),
                this);
          }),
          (e.prototype.append = function (e) {
            return (
              this._each(function (t) {
                "string" == typeof e
                  ? t.insertAdjacentHTML("beforeend", e)
                  : t.appendChild(e);
              }),
              this
            );
          }),
          (e.prototype.prepend = function (e) {
            return (
              this._each(function (t) {
                t.insertAdjacentHTML("afterbegin", e);
              }),
              this
            );
          }),
          (e.prototype.remove = function () {
            return (
              this._each(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          }),
          (e.prototype.empty = function () {
            return (
              this._each(function (e) {
                e.innerHTML = "";
              }),
              this
            );
          }),
          (e.prototype.scrollTop = function (e) {
            return void 0 !== e
              ? ((document.body.scrollTop = e),
                (document.documentElement.scrollTop = e),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (e.prototype.scrollLeft = function (e) {
            return void 0 !== e
              ? ((document.body.scrollLeft = e),
                (document.documentElement.scrollLeft = e),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (e.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var e = this.firstElement.getBoundingClientRect(),
              t = Rt("body").style().marginLeft;
            return {
              left: e.left - parseFloat(t) + this.scrollLeft(),
              top: e.top + this.scrollTop(),
            };
          }),
          (e.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (e.prototype.width = function () {
            var e = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight)
            );
          }),
          (e.prototype.height = function () {
            var e = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom)
            );
          }),
          (e.eventListeners = {}),
          e
        );
      })();
      function Rt(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new jt(e)
        );
      }
      var Gt = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl",
      ];
      function Wt(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var Ft = function (e, t, i, s) {
          void 0 === i && (i = 0);
          var r = Rt(e).attr("data-lg-size") || s;
          if (r) {
            var n = r.split(",");
            if (n[1])
              for (var o = window.innerWidth, a = 0; a < n.length; a++) {
                var l = n[a];
                if (parseInt(l.split("-")[2], 10) > o) {
                  r = l;
                  break;
                }
                a === n.length - 1 && (r = l);
              }
            var c = r.split("-"),
              d = parseInt(c[0], 10),
              u = parseInt(c[1], 10),
              p = t.width(),
              h = t.height() - i,
              f = Math.min(p, d),
              g = Math.min(h, u),
              m = Math.min(f / d, g / u);
            return { width: d * m, height: u * m };
          }
        },
        Ht = function (e, t, i, s, r) {
          if (r) {
            var n = Rt(e).find("img").first();
            if (n.get()) {
              var o = t.get().getBoundingClientRect(),
                a = o.width,
                l = t.height() - (i + s),
                c = n.width(),
                d = n.height(),
                u = n.style(),
                p =
                  (a - c) / 2 -
                  n.offset().left +
                  (parseFloat(u.paddingLeft) || 0) +
                  (parseFloat(u.borderLeft) || 0) +
                  Rt(window).scrollLeft() +
                  o.left,
                h =
                  (l - d) / 2 -
                  n.offset().top +
                  (parseFloat(u.paddingTop) || 0) +
                  (parseFloat(u.borderTop) || 0) +
                  Rt(window).scrollTop() +
                  i;
              return (
                "translate3d(" +
                (p *= -1) +
                "px, " +
                (h *= -1) +
                "px, 0) scale3d(" +
                c / r.width +
                ", " +
                d / r.height +
                ", 1)"
              );
            }
          }
        },
        Vt = function (e, t, i, s, r, n) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            i +
            "; height: " +
            t +
            "; max-height:" +
            s +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (n ? 'title="' + n + '"' : "") +
            ' src="' +
            r +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        qt = function (e, t, i, s, r, n) {
          var o =
              "<img " +
              i +
              " " +
              (s ? 'srcset="' + s + '"' : "") +
              "  " +
              (r ? 'sizes="' + r + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            a = "";
          n &&
            (a = ("string" == typeof n ? JSON.parse(n) : n).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (i) {
                  t += " " + i + '="' + e[i] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + a + o;
        },
        Xt = function (e) {
          for (var t = [], i = [], s = "", r = 0; r < e.length; r++) {
            var n = e[r].split(" ");
            "" === n[0] && n.splice(0, 1), i.push(n[0]), t.push(n[1]);
          }
          for (var o = window.innerWidth, a = 0; a < t.length; a++)
            if (parseInt(t[a], 10) > o) {
              s = i[a];
              break;
            }
          return s;
        },
        Yt = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        Ut = function (e, t, i, s, r) {
          return (
            '<div class="lg-video-cont ' +
            (r && r.youtube
              ? "lg-has-youtube"
              : r && r.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            i +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
            s +
            '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
            s +
            '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        Kt = function (e, t, i, s) {
          var r = [],
            n = (function () {
              for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                e += arguments[t].length;
              var s = Array(e),
                r = 0;
              for (t = 0; t < i; t++)
                for (var n = arguments[t], o = 0, a = n.length; o < a; o++, r++)
                  s[r] = n[o];
              return s;
            })(Gt, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, o = 0; o < e.attributes.length; o++) {
                var a = e.attributes[o];
                if (a.specified) {
                  var l = Wt(a.name),
                    c = "";
                  n.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                }
              }
              var d = Rt(e),
                u = d.find("img").first().attr("alt"),
                p = d.attr("title"),
                h = s ? d.attr(s) : d.find("img").first().attr("src");
              (t.thumb = h),
                i && !t.subHtml && (t.subHtml = p || u || ""),
                (t.alt = u || p || ""),
                r.push(t);
            }),
            r
          );
        },
        Qt = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        Jt = function (e, t, i) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (i + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var s = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            r = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            n = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return s
            ? { youtube: s }
            : r
            ? { vimeo: r }
            : n
            ? { wistia: n }
            : void 0;
        },
        Zt = 0,
        ei = (function () {
          function e(e, t) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !e)
            )
              return this;
            if (
              (Zt++,
              (this.lgId = Zt),
              (this.el = e),
              (this.LGel = Rt(e)),
              this.generateSettings(t),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (e.prototype.generateSettings = function (e) {
              if (
                ((this.settings = yt(yt({}, Nt), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : Qt())
              ) {
                var t = yt(
                  yt({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = yt(yt({}, this.settings), t);
              }
            }),
            (e.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (e.prototype.init = function () {
              var e = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(xt, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (e.prototype.openGalleryOnItemClick = function () {
              for (
                var e = this,
                  t = function (t) {
                    var s = i.items[t],
                      r = Rt(s),
                      n = jt.generateUUID();
                    r.attr("data-lg-id", n).on(
                      "click.lgcustom-item-" + n,
                      function (i) {
                        i.preventDefault();
                        var r = e.settings.index || t;
                        e.openGallery(r, s);
                      }
                    );
                  },
                  i = this,
                  s = 0;
                s < this.items.length;
                s++
              )
                t(s);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, Rt));
              });
            }),
            (e.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (e.prototype.getSlideItem = function (e) {
              return Rt(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return Rt("#" + this.getIdName(e));
            }),
            (e.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (e.prototype.buildStructure = function () {
              var e = this;
              if (!(this.$container && this.$container.get())) {
                var t = "",
                  i = "";
                this.settings.controls &&
                  (t =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="' +
                    this.settings.strings.previousSlide +
                    '" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="' +
                    this.settings.strings.nextSlide +
                    '" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (i =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var s = "";
                this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                var r = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  n = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  o =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  a =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="' +
                        this.settings.strings.closeGallery +
                        '" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  l = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.toggleMaximize +
                      '" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  c =
                    '\n        <div class="' +
                    o +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    r +
                    " " +
                    n +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    s +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    t +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    l +
                    "\n                    " +
                    a +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? i
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                Rt(this.settings.container).append(c),
                  document.body !== this.settings.container &&
                    Rt(this.settings.container).css("position", "relative"),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var d = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (d += "lg-grab "),
                  this.outer.addClass(d),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="' +
                        this.settings.strings.download +
                        '" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  Rt(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      e.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (e.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var e = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var t = this.mediaContainerPosition,
                  i = t.top,
                  s = t.bottom;
                if (
                  ((this.currentImageSize = Ft(
                    this.items[this.index],
                    this.outer,
                    i + s,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var r = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", r);
                }
                this.LGel.trigger(St);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var i = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var i = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var s = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === i && ((s = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                  this.loadContent(s, !0),
                  this.getSlideItem(s).addClass("lg-current"),
                  (this.index = s),
                  this.updateCurrentCounter(s),
                  this.LGel.trigger(Et);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = Rt(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return Kt(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.openGallery = function (e, t) {
              var i = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.get().focus(),
                  this.outer.removeClass("lg-hide-items"),
                  this.$container.addClass("lg-show");
                var s = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = s;
                var r = "";
                s.forEach(function (e) {
                  r = r + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(r),
                  this.addHtml(e);
                var n = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var o = this.mediaContainerPosition,
                  a = o.top,
                  l = o.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(a, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = Ft(
                    t,
                    this.outer,
                    a + l,
                    c && this.settings.videoMaxSize
                  )),
                  (n = Ht(t, this.outer, a, l, this.currentImageSize))),
                  (this.zoomFromOrigin && n) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var d = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  i.outer.addClass("lg-components-open");
                }, d),
                  (this.index = e),
                  this.LGel.trigger(Tt),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = Rt(window).scrollTop()),
                  setTimeout(function () {
                    if (i.zoomFromOrigin && n) {
                      var t = i.getSlideItem(e);
                      t.css("transform", n),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              i.settings.startAnimationDuration + "ms"
                            ),
                            i.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      i.$backdrop.addClass("in"),
                        i.$container.addClass("lg-show-in");
                    }, 10),
                      (i.zoomFromOrigin && n) ||
                        setTimeout(function () {
                          i.outer.addClass("lg-visible");
                        }, i.settings.backdropDuration),
                      i.slide(e, !1, !1, !1),
                      i.LGel.trigger(Ot);
                  }),
                  document.body === this.settings.container &&
                    Rt("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                i =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                s = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (s ? s.clientHeight : 0) + i };
            }),
            (e.prototype.setMediaContainerPosition = function (e, t) {
              void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this.$content.css("top", e + "px").css("bottom", t + "px");
            }),
            (e.prototype.hideBars = function () {
              var e = this;
              setTimeout(function () {
                e.outer.removeClass("lg-hide-items"),
                  e.settings.hideBarsDelay > 0 &&
                    (e.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        e.outer.removeClass("lg-hide-items"),
                          clearTimeout(e.hideBarTimeout),
                          (e.hideBarTimeout = setTimeout(function () {
                            e.outer.addClass("lg-hide-items");
                          }, e.settings.hideBarsDelay));
                      }
                    ),
                    e.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (e.prototype.initPictureFill = function (e) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [e.get()] });
                } catch (e) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (e.prototype.counter = function () {
              if (this.settings.counter) {
                var e =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(e);
              }
            }),
            (e.prototype.addHtml = function (e) {
              var t, i;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (i = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !i)
              )
                if (t) {
                  var s = t.substring(0, 1);
                  ("." !== s && "#" !== s) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? Rt(this.items).eq(e).find(t).first().html()
                        : Rt(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                i
                  ? this.outer.find(".lg-sub-html").load(i)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var r = Rt(this.getSlideItemId(e));
                i
                  ? r.load(i)
                  : r.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(Ct, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
                this.loadContent(e - i, !1);
            }),
            (e.prototype.getDummyImgStyles = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                margin-left: -" +
                    e.width / 2 +
                    "px;\n                margin-top: -" +
                    e.height / 2 +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getVideoContStyle = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getDummyImageContent = function (e, t, i) {
              var s;
              if ((this.settings.dynamic || (s = Rt(this.items).eq(t)), s)) {
                var r = void 0;
                if (
                  !(r = this.settings.exThumbImage
                    ? s.attr(this.settings.exThumbImage)
                    : s.find("img").first().attr("src"))
                )
                  return "";
                var n =
                  "<img " +
                  i +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  r +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  n
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, i) {
              var s = this.galleryItems[i],
                r = s.alt,
                n = s.srcset,
                o = s.sizes,
                a = s.sources,
                l = r ? 'alt="' + r + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, i, l)
                    : qt(i, e, l, n, o, a)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
              var r = e.find(".lg-object").first();
              Yt(r.get()) || t
                ? i()
                : (r.on("load.lg error.lg", function () {
                    i && i();
                  }),
                  r.on("error.lg", function () {
                    s && s();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, i, s, r, n) {
              var o = this;
              this.onSlideObjectLoad(
                e,
                n,
                function () {
                  o.triggerSlideItemLoad(e, t, i, s, r);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, i, s, r) {
              var n = this,
                o = this.galleryItems[t],
                a = r && "video" === this.getSlideType(o) && !o.poster ? s : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  n.LGel.trigger(At, {
                    index: t,
                    delay: i || 0,
                    isFirstSlide: r,
                  });
              }, a);
            }),
            (e.prototype.isFirstSlideWithZoomAnimation = function () {
              return !(
                this.lGalleryOn ||
                !this.zoomFromOrigin ||
                !this.currentImageSize
              );
            }),
            (e.prototype.addSlideVideoInfo = function (e) {
              var t = this;
              e.forEach(function (e, i) {
                (e.__slideVideoInfo = Jt(e.src, !!e.video, i)),
                  e.__slideVideoInfo &&
                    t.settings.loadYouTubePoster &&
                    !e.poster &&
                    e.__slideVideoInfo.youtube &&
                    (e.poster =
                      "//img.youtube.com/vi/" +
                      e.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (e.prototype.loadContent = function (e, t) {
              var i = this,
                s = this.galleryItems[e],
                r = Rt(this.getSlideItemId(e)),
                n = s.poster,
                o = s.srcset,
                a = s.sizes,
                l = s.sources,
                c = s.src,
                d = s.video,
                u = d && "string" == typeof d ? JSON.parse(d) : d;
              if (s.responsive) {
                var p = s.responsive.split(",");
                c = Xt(p) || c;
              }
              var h = s.__slideVideoInfo,
                f = "",
                g = !!s.iframe,
                m = !this.lGalleryOn,
                v = 0;
              if (
                (m &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !r.hasClass("lg-loaded"))
              ) {
                if (h) {
                  var y = this.mediaContainerPosition,
                    b = y.top,
                    x = y.bottom,
                    w = Ft(
                      this.items[e],
                      this.outer,
                      b + x,
                      h && this.settings.videoMaxSize
                    );
                  f = this.getVideoContStyle(w);
                }
                if (g) {
                  var S = Vt(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    s.iframeTitle
                  );
                  r.prepend(S);
                } else if (n) {
                  var E = "";
                  m &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (E = this.getDummyImageContent(r, e, ""));
                  S = Ut(n, E || "", f, this.settings.strings.playVideo, h);
                  r.prepend(S);
                } else if (h) {
                  S = '<div class="lg-video-cont " style="' + f + '"></div>';
                  r.prepend(S);
                } else if ((this.setImgMarkup(c, r, e), o || l)) {
                  var C = r.find(".lg-object");
                  this.initPictureFill(C);
                }
                (n || h) &&
                  this.LGel.trigger(wt, {
                    index: e,
                    src: c,
                    html5Video: u,
                    hasPoster: !!n,
                  }),
                  this.LGel.trigger(bt, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var T = 0;
              v && !Rt(document.body).hasClass("lg-from-hash") && (T = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    r.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  r.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if (
                        "image" === i.getSlideType(s) &&
                        (r
                          .find(".lg-img-wrap")
                          .append(qt(e, c, "", o, a, s.sources)),
                        o || l)
                      ) {
                        var t = r.find(".lg-object");
                        i.initPictureFill(t);
                      }
                      ("image" === i.getSlideType(s) ||
                        ("video" === i.getSlideType(s) && n)) &&
                        (i.onLgObjectLoad(r, e, v, T, !0, !1),
                        i.onSlideObjectLoad(
                          r,
                          !(!h || !h.html5 || n),
                          function () {
                            i.loadContentOnFirstSlideLoad(e, r, T);
                          },
                          function () {
                            i.loadContentOnFirstSlideLoad(e, r, T);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                r.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(s) || n)) ||
                  this.onLgObjectLoad(r, e, v, T, m, !(!h || !h.html5 || n)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !r.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    r.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (r.hasClass("lg-complete_")
                    ? this.preload(e)
                    : r
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          i.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
              var s = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  s.outer.removeClass("lg-first-slide-loading"),
                  (s.isDummyImageRemoved = !0),
                  s.preload(e);
              }, i + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
              var s = this;
              void 0 === i && (i = 0);
              var r = [],
                n = Math.max(i, 3);
              n = Math.min(n, this.galleryItems.length);
              var o = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    r.push("lg-item-" + s.lgId + "-" + t);
                  }),
                  r
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var a = e; a > e - n / 2 && a >= 0; a--)
                  r.push("lg-item-" + this.lgId + "-" + a);
                var l = r.length;
                for (a = 0; a < n - l; a++)
                  r.push("lg-item-" + this.lgId + "-" + (e + a + 1));
              } else {
                for (
                  a = e;
                  a <= this.galleryItems.length - 1 && a < e + n / 2;
                  a++
                )
                  r.push("lg-item-" + this.lgId + "-" + a);
                for (l = r.length, a = 0; a < n - l; a++)
                  r.push("lg-item-" + this.lgId + "-" + (e - a - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? r.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      r.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === r.indexOf(o) && r.push("lg-item-" + this.lgId + "-" + t),
                r
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var i = this,
                s = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                s.forEach(function (e) {
                  -1 === i.currentItemsInDom.indexOf(e) &&
                    i.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === s.indexOf(e) && Rt("#" + e).remove();
                }),
                s
              );
            }),
            (e.prototype.getPreviousSlideIndex = function () {
              var e = 0;
              try {
                var t = this.outer.find(".lg-current").first().attr("id");
                e = parseInt(t.split("-")[3]) || 0;
              } catch (t) {
                e = 0;
              }
              return e;
            }),
            (e.prototype.setDownloadValue = function (e) {
              if (this.settings.download) {
                var t = this.galleryItems[e];
                if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var i = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    i.attr("href", t.downloadUrl || t.src),
                    t.download && i.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, i) {
              var s = this;
              this.lGalleryOn && i.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    s.outer.addClass("lg-no-trans"),
                      s.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          i.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          i.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        s.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          s.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, i, s) {
              var r = this,
                n = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, n)),
                !this.lGalleryOn || n !== e)
              ) {
                var o = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var a = this.getSlideItem(e),
                    l = this.getSlideItem(n),
                    c = this.galleryItems[e],
                    d = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    d)
                  ) {
                    var u = this.mediaContainerPosition,
                      p = u.top,
                      h = u.bottom,
                      f = Ft(
                        this.items[e],
                        this.outer,
                        p + h,
                        d && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, f);
                  }
                  if (
                    (this.LGel.trigger(kt, {
                      prevIndex: n,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!i,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    s || (e < n ? (s = "prev") : e > n && (s = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var g = void 0,
                      m = void 0;
                    o > 2
                      ? ((g = e - 1),
                        (m = e + 1),
                        ((0 === e && n === o - 1) ||
                          (e === o - 1 && 0 === n)) &&
                          ((m = 0), (g = o - 1)))
                      : ((g = 0), (m = 1)),
                      "prev" === s
                        ? this.getSlideItem(m).addClass("lg-next-slide")
                        : this.getSlideItem(g).addClass("lg-prev-slide"),
                      a.addClass("lg-current");
                  } else this.makeSlideAnimation(s, a, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        r.loadContent(e, !0),
                          ".lg-item" !== r.settings.appendSubHtmlTo &&
                            r.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (r.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        r.LGel.trigger(Lt, {
                          prevIndex: n,
                          index: e,
                          fromTouch: t,
                          fromThumb: i,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay));
                }
                this.index = e;
              }
            }),
            (e.prototype.updateCurrentCounter = function (e) {
              this.getElementById("lg-counter-current").html(e + 1 + "");
            }),
            (e.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (e.prototype.getSlideType = function (e) {
              return e.__slideVideoInfo
                ? "video"
                : e.iframe
                ? "iframe"
                : "image";
            }),
            (e.prototype.touchMove = function (e, t, i) {
              var s = t.pageX - e.pageX,
                r = t.pageY - e.pageY,
                n = !1;
              if (
                (this.swipeDirection
                  ? (n = !0)
                  : Math.abs(s) > 15
                  ? ((this.swipeDirection = "horizontal"), (n = !0))
                  : Math.abs(r) > 15 &&
                    ((this.swipeDirection = "vertical"), (n = !0)),
                n)
              ) {
                var o = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == i || i.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(o, s, 0);
                  var a = o.get().offsetWidth,
                    l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -a + s - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      a + s + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == i || i.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(r) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var d = 1 - Math.abs(r) / (2 * window.innerWidth);
                  this.setTranslate(o, 0, r, d, d),
                    Math.abs(r) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, i) {
              var s,
                r = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  r.$container.removeClass("lg-dragging-vertical"),
                    r.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var n = !0;
                  if ("horizontal" === r.swipeDirection) {
                    s = e.pageX - t.pageX;
                    var o = Math.abs(e.pageX - t.pageX);
                    s < 0 && o > r.settings.swipeThreshold
                      ? (r.goToNextSlide(!0), (n = !1))
                      : s > 0 &&
                        o > r.settings.swipeThreshold &&
                        (r.goToPrevSlide(!0), (n = !1));
                  } else if ("vertical" === r.swipeDirection) {
                    if (
                      ((s = Math.abs(e.pageY - t.pageY)),
                      r.settings.closable && r.settings.swipeToClose && s > 100)
                    )
                      return void r.closeGallery();
                    r.$backdrop.css("opacity", 1);
                  }
                  if (
                    (r.outer.find(".lg-item").removeAttr("style"),
                    n && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var a = Rt(i.target);
                    r.isPosterElement(a) && r.LGel.trigger(It);
                  }
                  r.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  r.outer.hasClass("lg-dragging") ||
                    "lg-slide" === r.settings.mode ||
                    r.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                r = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var s = e.getSlideItem(e.index);
                  (!Rt(i.target).hasClass("lg-item") &&
                    !s.get().contains(i.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== i.targetTouches.length ||
                    ((r = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: i.targetTouches[0].pageX,
                      pageY: i.targetTouches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (n) {
                  r &&
                    "swipe" === e.touchAction &&
                    1 === n.targetTouches.length &&
                    ((i = {
                      pageX: n.targetTouches[0].pageX,
                      pageY: n.targetTouches[0].pageY,
                    }),
                    e.touchMove(t, i, n),
                    (s = !0));
                }),
                this.$inner.on("touchend.lg", function (n) {
                  if ("swipe" === e.touchAction) {
                    if (s) (s = !1), e.touchEnd(i, t, n);
                    else if (r) {
                      var o = Rt(n.target);
                      e.isPosterElement(o) && e.LGel.trigger(It);
                    }
                    (e.touchAction = void 0), (r = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                r = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var r = e.getSlideItem(e.index);
                  (Rt(i.target).hasClass("lg-item") ||
                    r.get().contains(i.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (i.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: i.pageX, pageY: i.pageY }),
                        (s = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger(Mt))));
                }),
                Rt(window).on("mousemove.lg.global" + this.lgId, function (n) {
                  s &&
                    e.lgOpened &&
                    ((r = !0),
                    (i = { pageX: n.pageX, pageY: n.pageY }),
                    e.touchMove(t, i),
                    e.LGel.trigger(Pt));
                }),
                Rt(window).on("mouseup.lg.global" + this.lgId, function (n) {
                  if (e.lgOpened) {
                    var o = Rt(n.target);
                    r
                      ? ((r = !1), e.touchEnd(i, t, n), e.LGel.trigger(zt))
                      : e.isPosterElement(o) && e.LGel.trigger(It),
                      s &&
                        ((s = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(Rt(t.target)) &&
                  e.LGel.trigger(It);
              });
            }),
            (e.prototype.manageSwipeClass = function () {
              var e = this.index + 1,
                t = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (t = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (e = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                this.getSlideItem(e).addClass("lg-next-slide");
            }),
            (e.prototype.goToNextSlide = function (e) {
              var t = this,
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(_t, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : i
                    ? ((this.index = 0),
                      this.LGel.trigger(_t, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (e.prototype.goToPrevSlide = function (e) {
              var t = this,
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger($t, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : i
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger($t, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (e.prototype.keyPress = function () {
              var e = this;
              Rt(window).on("keydown.lg.global" + this.lgId, function (t) {
                e.lgOpened &&
                  !0 === e.settings.escKey &&
                  27 === t.keyCode &&
                  (t.preventDefault(),
                  e.settings.allowMediaOverlap &&
                  e.outer.hasClass("lg-can-toggle") &&
                  e.outer.hasClass("lg-components-open")
                    ? e.outer.removeClass("lg-components-open")
                    : e.closeGallery()),
                  e.lgOpened &&
                    e.galleryItems.length > 1 &&
                    (37 === t.keyCode &&
                      (t.preventDefault(), e.goToPrevSlide()),
                    39 === t.keyCode &&
                      (t.preventDefault(), e.goToNextSlide()));
              });
            }),
            (e.prototype.arrow = function () {
              var e = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                e.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  e.goToNextSlide();
                });
            }),
            (e.prototype.arrowDisable = function (e) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var t = this.getElementById("lg-prev"),
                  i = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? i.attr("disabled", "disabled").addClass("disabled")
                  : i.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, i, s, r) {
              void 0 === s && (s = 1),
                void 0 === r && (r = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    i +
                    "px, 0px) scale3d(" +
                    s +
                    ", " +
                    r +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (i) {
                if (i.deltaY && !(e.galleryItems.length < 2)) {
                  i.preventDefault();
                  var s = new Date().getTime();
                  s - t < 1e3 ||
                    ((t = s),
                    i.deltaY > 0
                      ? e.goToNextSlide()
                      : i.deltaY < 0 && e.goToPrevSlide());
                }
              });
            }),
            (e.prototype.isSlideElement = function (e) {
              return (
                e.hasClass("lg-outer") ||
                e.hasClass("lg-item") ||
                e.hasClass("lg-img-wrap")
              );
            }),
            (e.prototype.isPosterElement = function (e) {
              var t = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                e.hasClass("lg-video-poster") ||
                e.hasClass("lg-video-play-button") ||
                (t && t.contains(e.get()))
              );
            }),
            (e.prototype.toggleMaximize = function () {
              var e = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                e.$container.toggleClass("lg-inline"), e.refreshOnResize();
              });
            }),
            (e.prototype.invalidateItems = function () {
              for (var e = 0; e < this.items.length; e++) {
                var t = Rt(this.items[e]);
                t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
              }
            }),
            (e.prototype.manageCloseGallery = function () {
              var e = this;
              if (this.settings.closable) {
                var t = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  e.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (i) {
                      var s = Rt(i.target);
                      t = !!e.isSlideElement(s);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (i) {
                      var s = Rt(i.target);
                      e.isSlideElement(s) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(Dt), Rt(window).scrollTop(this.prevScrollTop);
              var i,
                s = this.items[this.index];
              if (this.zoomFromOrigin && s) {
                var r = this.mediaContainerPosition,
                  n = r.top,
                  o = r.bottom,
                  a = this.galleryItems[this.index],
                  l = a.__slideVideoInfo,
                  c = a.poster,
                  d = Ft(
                    s,
                    this.outer,
                    n + o,
                    l && c && this.settings.videoMaxSize
                  );
                i = Ht(s, this.outer, n, o, d);
              }
              this.zoomFromOrigin && i
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", i))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                Rt("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var u =
                this.zoomFromOrigin && i
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    i &&
                    t.outer.removeClass("lg-zoom-from-image"),
                    t.$container.removeClass("lg-show"),
                    t.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        t.settings.backdropDuration + "ms"
                      ),
                    t.outer.removeClass("lg-closing " + t.settings.startClass),
                    t
                      .getSlideItem(t.index)
                      .removeClass("lg-start-end-progress"),
                    t.$inner.empty(),
                    t.lgOpened && t.LGel.trigger(Bt, { instance: t }),
                    t.outer.get() && t.outer.get().blur(),
                    (t.lgOpened = !1);
                }, u + 100),
                u + 100
              );
            }),
            (e.prototype.initModules = function () {
              this.plugins.forEach(function (e) {
                try {
                  e.init();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (e.prototype.destroyModules = function (e) {
              this.plugins.forEach(function (t) {
                try {
                  e ? t.destroy() : t.closeGallery && t.closeGallery();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (e.prototype.refresh = function (e) {
              this.settings.dynamic || this.invalidateItems(),
                (this.galleryItems = e || this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(Et);
            }),
            (e.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (e.prototype.destroy = function () {
              var e = this,
                t = this.closeGallery(!0);
              return (
                setTimeout(function () {
                  e.destroyModules(!0),
                    e.settings.dynamic || e.invalidateItems(),
                    Rt(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t),
                t
              );
            }),
            e
          );
        })();
      const ti = function (e, t) {
          return new ei(e, t);
        },
        ii = document.querySelectorAll("[data-gallery]");
      if (ii.length) {
        let t = [];
        ii.forEach((e) => {
          t.push({
            gallery: e,
            galleryClass: ti(e, {
              licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
              speed: 500,
              selector: "a",
            }),
          });
        }),
          (e.gallery = t);
      }
      function si(e) {
        this.type = e;
      }
      (si.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            i = t.dataset.da.trim().split(","),
            s = {};
          (s.element = t),
            (s.parent = t.parentNode),
            (s.destination = document.querySelector(i[0].trim())),
            (s.breakpoint = i[1] ? i[1].trim() : "767"),
            (s.place = i[2] ? i[2].trim() : "last"),
            (s.index = this.indexInParent(s.parent, s.element)),
            this.оbjects.push(s);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, i) {
              return Array.prototype.indexOf.call(i, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const i = this.mediaQueries[t],
            s = String.prototype.split.call(i, ","),
            r = window.matchMedia(s[0]),
            n = s[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === n;
            });
          r.addListener(function () {
            e.mediaHandler(r, o);
          }),
            this.mediaHandler(r, o);
        }
      }),
        (si.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              (i.index = this.indexInParent(i.parent, i.element)),
                this.moveTo(i.place, i.element, i.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const i = t[e];
              i.element.classList.contains(this.daClassname) &&
                this.moveBack(i.parent, i.element, i.index);
            }
        }),
        (si.prototype.moveTo = function (e, t, i) {
          t.classList.add(this.daClassname),
            "last" === e || e >= i.children.length
              ? i.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? i.children[e].insertAdjacentElement("beforebegin", t)
              : i.insertAdjacentElement("afterbegin", t);
        }),
        (si.prototype.moveBack = function (e, t, i) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[i]
              ? e.children[i].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (si.prototype.indexInParent = function (e, t) {
          const i = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(i, t);
        }),
        (si.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new si("max").init(),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        document.querySelector(".icon-menu") &&
          document.addEventListener("click", function (e) {
            r &&
              e.target.closest(".icon-menu") &&
              (n(), document.documentElement.classList.toggle("menu-open"));
          }),
        (function () {
          const e = document.querySelectorAll("[data-spollers]");
          if (e.length > 0) {
            const i = Array.from(e).filter(function (e, t, i) {
              return !e.dataset.spollers.split(",")[0];
            });
            i.length && n(i);
            let r = c(e, "spollers");
            function n(e, t = !1) {
              e.forEach((e) => {
                (e = t ? e.item : e),
                  t.matches || !t
                    ? (e.classList.add("_spoller-init"),
                      o(e),
                      e.addEventListener("click", a))
                    : (e.classList.remove("_spoller-init"),
                      o(e, !1),
                      e.removeEventListener("click", a));
              });
            }
            function o(e, t = !0) {
              let i = e.querySelectorAll("[data-spoller]");
              i.length &&
                ((i = Array.from(i).filter(
                  (t) => t.closest("[data-spollers]") === e
                )),
                i.forEach((e) => {
                  t
                    ? (e.removeAttribute("tabindex"),
                      e.classList.contains("_spoller-active") ||
                        (e.nextElementSibling.hidden = !0))
                    : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1));
                }));
            }
            function a(e) {
              const i = e.target;
              if (i.closest("[data-spoller]")) {
                const r = i.closest("[data-spoller]"),
                  n = r.closest("[data-spollers]"),
                  o = n.hasAttribute("data-one-spoller"),
                  a = n.dataset.spollersSpeed
                    ? parseInt(n.dataset.spollersSpeed)
                    : 500;
                n.querySelectorAll("._slide").length ||
                  (o && !r.classList.contains("_spoller-active") && l(n),
                  r.classList.toggle("_spoller-active"),
                  ((e, i = 500) => {
                    e.hidden ? s(e, i) : t(e, i);
                  })(r.nextElementSibling, a)),
                  e.preventDefault();
              }
            }
            function l(e) {
              const i = e.querySelector("[data-spoller]._spoller-active"),
                s = e.dataset.spollersSpeed
                  ? parseInt(e.dataset.spollersSpeed)
                  : 500;
              i &&
                !e.querySelectorAll("._slide").length &&
                (i.classList.remove("_spoller-active"),
                t(i.nextElementSibling, s));
            }
            r &&
              r.length &&
              r.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  n(e.itemsArray, e.matchMedia);
                }),
                  n(e.itemsArray, e.matchMedia);
              });
            const d = document.querySelectorAll("[data-spoller-close]");
            d.length &&
              document.addEventListener("click", function (e) {
                e.target.closest("[data-spollers]") ||
                  d.forEach((e) => {
                    const i = e.closest("[data-spollers]"),
                      s = i.dataset.spollersSpeed
                        ? parseInt(i.dataset.spollersSpeed)
                        : 500;
                    i.querySelectorAll("._slide").length ||
                      (e.classList.remove("_spoller-active"),
                      t(e.nextElementSibling, s));
                  });
              });
          }
        })(),
        (function () {
          const e = document.querySelectorAll("[data-tabs]");
          let i = [];
          if (e.length > 0) {
            const t = (function () {
              if (location.hash) return location.hash.replace("#", "");
            })();
            t && t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
              e.forEach((e, t) => {
                e.classList.add("_tab-init"),
                  e.setAttribute("data-tabs-index", t),
                  e.addEventListener("click", o),
                  (function (e) {
                    let t = e.querySelectorAll("[data-tabs-titles]>*"),
                      s = e.querySelectorAll("[data-tabs-body]>*");
                    const r = e.dataset.tabsIndex,
                      n = i[0] == r;
                    if (n) {
                      const t = e.querySelector(
                        "[data-tabs-titles]>._tab-active"
                      );
                      t && t.classList.remove("_tab-active");
                    }
                    s.length &&
                      ((s = Array.from(s).filter(
                        (t) => t.closest("[data-tabs]") === e
                      )),
                      (t = Array.from(t).filter(
                        (t) => t.closest("[data-tabs]") === e
                      )),
                      s.forEach((e, s) => {
                        t[s].setAttribute("data-tabs-title", ""),
                          e.setAttribute("data-tabs-item", ""),
                          n && s == i[1] && t[s].classList.add("_tab-active"),
                          (e.hidden = !t[s].classList.contains("_tab-active"));
                      }));
                  })(e);
              });
            let s = c(e, "tabs");
            s &&
              s.length &&
              s.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  r(e.itemsArray, e.matchMedia);
                }),
                  r(e.itemsArray, e.matchMedia);
              });
          }
          function r(e, t) {
            e.forEach((e) => {
              let i = (e = e.item).querySelector("[data-tabs-titles]"),
                s = e.querySelectorAll("[data-tabs-title]"),
                r = e.querySelector("[data-tabs-body]"),
                n = e.querySelectorAll("[data-tabs-item]");
              (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
                (n = Array.from(n).filter(
                  (t) => t.closest("[data-tabs]") === e
                )),
                n.forEach((n, o) => {
                  t.matches
                    ? (r.append(s[o]),
                      r.append(n),
                      e.classList.add("_tab-spoller"))
                    : (i.append(s[o]), e.classList.remove("_tab-spoller"));
                });
            });
          }
          function n(e) {
            let i = e.querySelectorAll("[data-tabs-title]"),
              r = e.querySelectorAll("[data-tabs-item]");
            const n = e.dataset.tabsIndex;
            const o = (function (e) {
              if (e.hasAttribute("data-tabs-animate"))
                return e.dataset.tabsAnimate > 0
                  ? Number(e.dataset.tabsAnimate)
                  : 500;
            })(e);
            if (r.length > 0) {
              const a = e.hasAttribute("data-tabs-hash");
              (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
                (i = Array.from(i).filter(
                  (t) => t.closest("[data-tabs]") === e
                )),
                r.forEach((e, r) => {
                  var l;
                  i[r].classList.contains("_tab-active")
                    ? (o ? s(e, o) : (e.hidden = !1),
                      a &&
                        !e.closest(".popup") &&
                        ((l = (l = `tab-${n}-${r}`)
                          ? `#${l}`
                          : window.location.href.split("#")[0]),
                        history.pushState("", "", l)))
                    : o
                    ? t(e, o)
                    : (e.hidden = !0);
                });
            }
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-tabs-title]")) {
              const i = t.closest("[data-tabs-title]"),
                s = i.closest("[data-tabs]");
              if (
                !i.classList.contains("_tab-active") &&
                !s.querySelector("._slide")
              ) {
                let e = s.querySelectorAll("[data-tabs-title]._tab-active");
                e.length &&
                  (e = Array.from(e).filter(
                    (e) => e.closest("[data-tabs]") === s
                  )),
                  e.length && e[0].classList.remove("_tab-active"),
                  i.classList.add("_tab-active"),
                  n(s);
              }
              e.preventDefault();
            }
          }
        })(),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const i = t.closest("[data-goto]"),
                  s = i.dataset.goto ? i.dataset.goto : "",
                  r = !!i.hasAttribute("data-goto-header"),
                  n = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
                d(s, r, n), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                i = t.target;
              if ("navigator" === i.dataset.watch) {
                const e = i.id,
                  s =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? s && s.classList.add("_navigator-active")
                  : s && s.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })();
    })();
})();
