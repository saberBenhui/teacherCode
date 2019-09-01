!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["vue-layer"] = e() : t["vue-layer"] = e()
}(this, function () {
    return function (t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {exports: {}, id: o, loaded: !1};
            return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        "use strict";
        t.exports = n(5)
    }, , , , , function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var r = n(6), i = o(r), s = function (t) {
            function e(t, e) {
                for (var n in e) void 0 == t[n] && (t[n] = e[n]);
                return t
            }

            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {msgtime: 1.5},
                r = t.extend(n(74)), s = t.extend(n(133)), u = {}, f = {
                    type: 0,
                    title: "信息",
                    content: "",
                    area: "auto",
                    offset: "auto",
                    icon: -1,
                    btn: "确定",
                    time: 0,
                    shade: !0,
                    yes: "",
                    cancel: "",
                    tips: [0, {}],
                    tipsMore: !1,
                    shadeClose: !0
                };
            u.instances = {}, u.instancesVue = [];
            var a = 0;
            return u.open = function (n) {
                n = e(n, f);
                var o = "notification_" + (new Date).getTime() + "_" + a++;
                n.id = o, n.layer = u;
                var i = new r({data: n});
                if (2 == n.type && (n.content.content = t.extend(n.content.content)), i.id = o, i.vm = i.$mount(), u.instances[o] = {
                        inst: i,
                        type: n.type
                    }, document.body.appendChild(i.vm.$el), u.instancesVue[o] = {
                        mask: "",
                        main: i.vm,
                        iframe: ""
                    }, n.shade) {
                    var c = new s({data: n});
                    c.vm = c.$mount(), document.body.appendChild(c.vm.$el), u.instancesVue[o].mask = c.vm
                }
                return o
            }, u.alert = function (t, e, n) {
                switch ("undefined" == typeof e ? "undefined" : (0, i.default)(e)) {
                    case"function":
                        n = e, e = {};
                        break;
                    case"object":
                        break;
                    default:
                        e = {}
                }
                return n = "function" == typeof n ? n : "", e.content = t || "", e.yes = n, u.open(e)
            }, u.confirm = function (t, e, n, o) {
                switch ("undefined" == typeof e ? "undefined" : (0, i.default)(e)) {
                    case"function":
                        o = n, n = e, e = {};
                        break;
                    case"object":
                        break;
                    default:
                        e = {}
                }
                return n = "function" == typeof n ? n : "", o = "function" == typeof o ? o : "cancel", e.content = t || "", e.yes = n, e.cancel = o, u.open(e)
            }, u.msg = function (t, e, n) {
                switch ("undefined" == typeof e ? "undefined" : (0, i.default)(e)) {
                    case"function":
                        n = e, e = {};
                        break;
                    case"object":
                        break;
                    default:
                        e = {}
                }
                return n = "function" == typeof n ? n : "", e.type = 5, e.time = e.time ? e.time : o.msgtime, e.content = t || "this is a msg!!", e.yes = n, void 0 == e.shade && (e.shade = !1), u.closeAll("msg"), u.open(e)
            }, u.loading = function (t, e) {
                return "object" === ("undefined" == typeof t ? "undefined" : (0, i.default)(t)) && (e = t, t = 0), e = e || {}, e.icon = t ? t : 0, (e.icon < 0 || e.icon > 2) && (e.icon = 0), e.time || (e.time = 100), e.type = 3, void 0 == e.shade && (e.shade = !0), void 0 == e.shadeClose && (e.shadeClose = !1), u.open(e)
            }, u.tips = function (t, e, n) {
                return n = n || {}, n.type = 4, n.content = t || "", n.title = e || "body", n.tips = n.tips || [0, {}], "object" !== (0, i.default)(n.tips) && (n.tips = [n.tips, {}]), void 0 == n.shade && (n.shade = !1), n.tipsMore || u.closeAll("tips"), u.open(n)
            }, u.iframe = function (t) {
                var n = {type: 2, content: t.content, area: t.area};
                return n = e(n, t), u.open(n)
            }, u.prompt = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "请填写",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {formType: 1, value: ""};
                switch ("undefined" == typeof n ? "undefined" : (0, i.default)(n)) {
                    case"object":
                        o = n
                }
                return o.content = "", o.yes = e, o.type = 6, o.title = t, u.open(o)
            }, u.close = function (t) {
                var e = document.getElementById(t), n = document.getElementById(t + "_mask");
                n && (document.body.removeChild(n), u.instancesVue[t].mask && u.instancesVue[t].mask.$destroy()), e ? (document.body.removeChild(e), delete u.instances[t], u.instancesVue[t].main.$destroy(), "" != u.instancesVue[t].iframe && u.instancesVue[t].iframe.$destroy()) : setTimeout(function () {
                    var e = document.getElementById(t);
                    e && (document.body.removeChild(e), delete u.instances[t], u.instancesVue[t].main.$destroy(), "" != u.instancesVue[t].iframe && u.instancesVue[t].iframe.$destroy())
                }, 200)
            }, u.closeAll = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                    e = {alert: 0, page: 1, iframe: 2, loading: 3, tips: 4, msg: 5};
                if (t === -1) for (var n in u.instances) u.close(n); else {
                    var o = e[t];
                    for (var r in u.instances) u.instances[r].type === o && u.close(r)
                }
            }, u
        };
        t.exports = s
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var r = n(7), i = o(r), s = n(58), u = o(s),
            f = "function" == typeof u.default && "symbol" == typeof i.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof u.default && "symbol" === f(i.default) ? function (t) {
            return "undefined" == typeof t ? "undefined" : f(t)
        } : function (t) {
            return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : f(t)
        }
    }, function (t, e, n) {
        t.exports = {default: n(8), __esModule: !0}
    }, function (t, e, n) {
        n(9), n(53), t.exports = n(57).f("iterator")
    }, function (t, e, n) {
        "use strict";
        var o = n(10)(!0);
        n(13)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {value: void 0, done: !0} : (t = o(e, n), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, n) {
        var o = n(11), r = n(12);
        t.exports = function (t) {
            return function (e, n) {
                var i, s, u = String(r(e)), f = o(n), a = u.length;
                return f < 0 || f >= a ? t ? "" : void 0 : (i = u.charCodeAt(f), i < 55296 || i > 56319 || f + 1 === a || (s = u.charCodeAt(f + 1)) < 56320 || s > 57343 ? t ? u.charAt(f) : i : t ? u.slice(f, f + 2) : (i - 55296 << 10) + (s - 56320) + 65536)
            }
        }
    }, function (t, e) {
        var n = Math.ceil, o = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(14), r = n(15), i = n(30), s = n(20), u = n(31), f = n(32), a = n(33), c = n(49), l = n(51),
            p = n(50)("iterator"), d = !([].keys && "next" in [].keys()), v = "@@iterator", h = "keys", m = "values",
            y = function () {
                return this
            };
        t.exports = function (t, e, n, b, x, g, _) {
            a(n, e, b);
            var w, k, E, O = function (t) {
                    if (!d && t in L) return L[t];
                    switch (t) {
                        case h:
                            return function () {
                                return new n(this, t)
                            };
                        case m:
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                }, j = e + " Iterator", S = x == m, M = !1, L = t.prototype, T = L[p] || L[v] || x && L[x], P = T || O(x),
                I = x ? S ? O("entries") : P : void 0, C = "Array" == e ? L.entries || T : T;
            if (C && (E = l(C.call(new t)), E !== Object.prototype && (c(E, j, !0), o || u(E, p) || s(E, p, y))), S && T && T.name !== m && (M = !0, P = function () {
                    return T.call(this)
                }), o && !_ || !d && !M && L[p] || s(L, p, P), f[e] = P, f[j] = y, x) if (w = {
                    values: S ? P : O(m),
                    keys: g ? P : O(h),
                    entries: I
                }, _) for (k in w) k in L || i(L, k, w[k]); else r(r.P + r.F * (d || M), e, w);
            return w
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e, n) {
        var o = n(16), r = n(17), i = n(18), s = n(20), u = "prototype", f = function (t, e, n) {
            var a, c, l, p = t & f.F, d = t & f.G, v = t & f.S, h = t & f.P, m = t & f.B, y = t & f.W,
                b = d ? r : r[e] || (r[e] = {}), x = b[u], g = d ? o : v ? o[e] : (o[e] || {})[u];
            d && (n = e);
            for (a in n) c = !p && g && void 0 !== g[a], c && a in b || (l = c ? g[a] : n[a], b[a] = d && "function" != typeof g[a] ? n[a] : m && c ? i(l, o) : y && g[a] == l ? function (t) {
                var e = function (e, n, o) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, o)
                    }
                    return t.apply(this, arguments)
                };
                return e[u] = t[u], e
            }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((b.virtual || (b.virtual = {}))[a] = l, t & f.R && x && !x[a] && s(x, a, l)))
        };
        f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        var n = t.exports = {version: "2.4.0"};
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var o = n(19);
        t.exports = function (t, e, n) {
            if (o(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, o) {
                        return t.call(e, n, o)
                    };
                case 3:
                    return function (n, o, r) {
                        return t.call(e, n, o, r)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var o = n(21), r = n(29);
        t.exports = n(25) ? function (t, e, n) {
            return o.f(t, e, r(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var o = n(22), r = n(24), i = n(28), s = Object.defineProperty;
        e.f = n(25) ? Object.defineProperty : function (t, e, n) {
            if (o(t), e = i(e, !0), o(n), r) try {
                return s(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var o = n(23);
        t.exports = function (t) {
            if (!o(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(25) && !n(26)(function () {
            return 7 != Object.defineProperty(n(27)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        t.exports = !n(26)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var o = n(23), r = n(16).document, i = o(r) && o(r.createElement);
        t.exports = function (t) {
            return i ? r.createElement(t) : {}
        }
    }, function (t, e, n) {
        var o = n(23);
        t.exports = function (t, e) {
            if (!o(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e, n) {
        t.exports = n(20)
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        "use strict";
        var o = n(34), r = n(29), i = n(49), s = {};
        n(20)(s, n(50)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = o(s, {next: r(1, n)}), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var o = n(22), r = n(35), i = n(47), s = n(44)("IE_PROTO"), u = function () {
        }, f = "prototype", a = function () {
            var t, e = n(27)("iframe"), o = i.length, r = "<", s = ">";
            for (e.style.display = "none", n(48).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + s + "document.F=Object" + r + "/script" + s), t.close(), a = t.F; o--;) delete a[f][i[o]];
            return a()
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (u[f] = o(t), n = new u, u[f] = null, n[s] = t) : n = a(), void 0 === e ? n : r(n, e)
        }
    }, function (t, e, n) {
        var o = n(21), r = n(22), i = n(36);
        t.exports = n(25) ? Object.defineProperties : function (t, e) {
            r(t);
            for (var n, s = i(e), u = s.length, f = 0; u > f;) o.f(t, n = s[f++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var o = n(37), r = n(47);
        t.exports = Object.keys || function (t) {
            return o(t, r)
        }
    }, function (t, e, n) {
        var o = n(31), r = n(38), i = n(41)(!1), s = n(44)("IE_PROTO");
        t.exports = function (t, e) {
            var n, u = r(t), f = 0, a = [];
            for (n in u) n != s && o(u, n) && a.push(n);
            for (; e.length > f;) o(u, n = e[f++]) && (~i(a, n) || a.push(n));
            return a
        }
    }, function (t, e, n) {
        var o = n(39), r = n(12);
        t.exports = function (t) {
            return o(r(t))
        }
    }, function (t, e, n) {
        var o = n(40);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == o(t) ? t.split("") : Object(t)
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var o = n(38), r = n(42), i = n(43);
        t.exports = function (t) {
            return function (e, n, s) {
                var u, f = o(e), a = r(f.length), c = i(s, a);
                if (t && n != n) {
                    for (; a > c;) if (u = f[c++], u != u) return !0
                } else for (; a > c; c++) if ((t || c in f) && f[c] === n) return t || c || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var o = n(11), r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(o(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var o = n(11), r = Math.max, i = Math.min;
        t.exports = function (t, e) {
            return t = o(t), t < 0 ? r(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var o = n(45)("keys"), r = n(46);
        t.exports = function (t) {
            return o[t] || (o[t] = r(t))
        }
    }, function (t, e, n) {
        var o = n(16), r = "__core-js_shared__", i = o[r] || (o[r] = {});
        t.exports = function (t) {
            return i[t] || (i[t] = {})
        }
    }, function (t, e) {
        var n = 0, o = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        t.exports = n(16).document && document.documentElement
    }, function (t, e, n) {
        var o = n(21).f, r = n(31), i = n(50)("toStringTag");
        t.exports = function (t, e, n) {
            t && !r(t = n ? t : t.prototype, i) && o(t, i, {configurable: !0, value: e})
        }
    }, function (t, e, n) {
        var o = n(45)("wks"), r = n(46), i = n(16).Symbol, s = "function" == typeof i, u = t.exports = function (t) {
            return o[t] || (o[t] = s && i[t] || (s ? i : r)("Symbol." + t))
        };
        u.store = o
    }, function (t, e, n) {
        var o = n(31), r = n(52), i = n(44)("IE_PROTO"), s = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function (t, e, n) {
        var o = n(12);
        t.exports = function (t) {
            return Object(o(t))
        }
    }, function (t, e, n) {
        n(54);
        for (var o = n(16), r = n(20), i = n(32), s = n(50)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], f = 0; f < 5; f++) {
            var a = u[f], c = o[a], l = c && c.prototype;
            l && !l[s] && r(l, s, a), i[a] = i.Array
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(55), r = n(56), i = n(32), s = n(38);
        t.exports = n(13)(Array, "Array", function (t, e) {
            this._t = s(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function (t, e) {
        t.exports = function () {
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, function (t, e, n) {
        e.f = n(50)
    }, function (t, e, n) {
        t.exports = {default: n(59), __esModule: !0}
    }, function (t, e, n) {
        n(60), n(71), n(72), n(73), t.exports = n(17).Symbol
    }, function (t, e, n) {
        "use strict";
        var o = n(16), r = n(31), i = n(25), s = n(15), u = n(30), f = n(61).KEY, a = n(26), c = n(45), l = n(49),
            p = n(46), d = n(50), v = n(57), h = n(62), m = n(63), y = n(64), b = n(67), x = n(22), g = n(38),
            _ = n(28), w = n(29), k = n(34), E = n(68), O = n(70), j = n(21), S = n(36), M = O.f, L = j.f, T = E.f,
            P = o.Symbol, I = o.JSON, C = I && I.stringify, z = "prototype", A = d("_hidden"), B = d("toPrimitive"),
            N = {}.propertyIsEnumerable, F = c("symbol-registry"), R = c("symbols"), V = c("op-symbols"), $ = Object[z],
            Y = "function" == typeof P, G = o.QObject, D = !G || !G[z] || !G[z].findChild, X = i && a(function () {
                return 7 != k(L({}, "a", {
                    get: function () {
                        return L(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, e, n) {
                var o = M($, e);
                o && delete $[e], L(t, e, n), o && t !== $ && L($, e, o)
            } : L, W = function (t) {
                var e = R[t] = k(P[z]);
                return e._k = t, e
            }, U = Y && "symbol" == typeof P.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof P
            }, J = function (t, e, n) {
                return t === $ && J(V, e, n), x(t), e = _(e, !0), x(n), r(R, e) ? (n.enumerable ? (r(t, A) && t[A][e] && (t[A][e] = !1), n = k(n, {enumerable: w(0, !1)})) : (r(t, A) || L(t, A, w(1, {})), t[A][e] = !0), X(t, e, n)) : L(t, e, n)
            }, K = function (t, e) {
                x(t);
                for (var n, o = y(e = g(e)), r = 0, i = o.length; i > r;) J(t, n = o[r++], e[n]);
                return t
            }, Z = function (t, e) {
                return void 0 === e ? k(t) : K(k(t), e)
            }, q = function (t) {
                var e = N.call(this, t = _(t, !0));
                return !(this === $ && r(R, t) && !r(V, t)) && (!(e || !r(this, t) || !r(R, t) || r(this, A) && this[A][t]) || e)
            }, H = function (t, e) {
                if (t = g(t), e = _(e, !0), t !== $ || !r(R, e) || r(V, e)) {
                    var n = M(t, e);
                    return !n || !r(R, e) || r(t, A) && t[A][e] || (n.enumerable = !0), n
                }
            }, Q = function (t) {
                for (var e, n = T(g(t)), o = [], i = 0; n.length > i;) r(R, e = n[i++]) || e == A || e == f || o.push(e);
                return o
            }, tt = function (t) {
                for (var e, n = t === $, o = T(n ? V : g(t)), i = [], s = 0; o.length > s;) !r(R, e = o[s++]) || n && !r($, e) || i.push(R[e]);
                return i
            };
        Y || (P = function () {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
                this === $ && e.call(V, n), r(this, A) && r(this[A], t) && (this[A][t] = !1), X(this, t, w(1, n))
            };
            return i && D && X($, t, {configurable: !0, set: e}), W(t)
        }, u(P[z], "toString", function () {
            return this._k
        }), O.f = H, j.f = J, n(69).f = E.f = Q, n(66).f = q, n(65).f = tt, i && !n(14) && u($, "propertyIsEnumerable", q, !0), v.f = function (t) {
            return W(d(t))
        }), s(s.G + s.W + s.F * !Y, {Symbol: P});
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
        for (var et = S(d.store), nt = 0; et.length > nt;) h(et[nt++]);
        s(s.S + s.F * !Y, "Symbol", {
            for: function (t) {
                return r(F, t += "") ? F[t] : F[t] = P(t)
            }, keyFor: function (t) {
                if (U(t)) return m(F, t);
                throw TypeError(t + " is not a symbol!")
            }, useSetter: function () {
                D = !0
            }, useSimple: function () {
                D = !1
            }
        }), s(s.S + s.F * !Y, "Object", {
            create: Z,
            defineProperty: J,
            defineProperties: K,
            getOwnPropertyDescriptor: H,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: tt
        }), I && s(s.S + s.F * (!Y || a(function () {
            var t = P();
            return "[null]" != C([t]) || "{}" != C({a: t}) || "{}" != C(Object(t))
        })), "JSON", {
            stringify: function (t) {
                if (void 0 !== t && !U(t)) {
                    for (var e, n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
                    return e = o[1], "function" == typeof e && (n = e), !n && b(e) || (e = function (t, e) {
                        if (n && (e = n.call(this, t, e)), !U(e)) return e
                    }), o[1] = e, C.apply(I, o)
                }
            }
        }), P[z][B] || n(20)(P[z], B, P[z].valueOf), l(P, "Symbol"), l(Math, "Math", !0), l(o.JSON, "JSON", !0)
    }, function (t, e, n) {
        var o = n(46)("meta"), r = n(23), i = n(31), s = n(21).f, u = 0, f = Object.isExtensible || function () {
            return !0
        }, a = !n(26)(function () {
            return f(Object.preventExtensions({}))
        }), c = function (t) {
            s(t, o, {value: {i: "O" + ++u, w: {}}})
        }, l = function (t, e) {
            if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, o)) {
                if (!f(t)) return "F";
                if (!e) return "E";
                c(t)
            }
            return t[o].i
        }, p = function (t, e) {
            if (!i(t, o)) {
                if (!f(t)) return !0;
                if (!e) return !1;
                c(t)
            }
            return t[o].w
        }, d = function (t) {
            return a && v.NEED && f(t) && !i(t, o) && c(t), t
        }, v = t.exports = {KEY: o, NEED: !1, fastKey: l, getWeak: p, onFreeze: d}
    }, function (t, e, n) {
        var o = n(16), r = n(17), i = n(14), s = n(57), u = n(21).f;
        t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == t.charAt(0) || t in e || u(e, t, {value: s.f(t)})
        }
    }, function (t, e, n) {
        var o = n(36), r = n(38);
        t.exports = function (t, e) {
            for (var n, i = r(t), s = o(i), u = s.length, f = 0; u > f;) if (i[n = s[f++]] === e) return n
        }
    }, function (t, e, n) {
        var o = n(36), r = n(65), i = n(66);
        t.exports = function (t) {
            var e = o(t), n = r.f;
            if (n) for (var s, u = n(t), f = i.f, a = 0; u.length > a;) f.call(t, s = u[a++]) && e.push(s);
            return e
        }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        var o = n(40);
        t.exports = Array.isArray || function (t) {
            return "Array" == o(t)
        }
    }, function (t, e, n) {
        var o = n(38), r = n(69).f, i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            u = function (t) {
                try {
                    return r(t)
                } catch (t) {
                    return s.slice()
                }
            };
        t.exports.f = function (t) {
            return s && "[object Window]" == i.call(t) ? u(t) : r(o(t))
        }
    }, function (t, e, n) {
        var o = n(37), r = n(47).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return o(t, r)
        }
    }, function (t, e, n) {
        var o = n(66), r = n(29), i = n(38), s = n(28), u = n(31), f = n(24), a = Object.getOwnPropertyDescriptor;
        e.f = n(25) ? a : function (t, e) {
            if (t = i(t), e = s(e, !0), f) try {
                return a(t, e)
            } catch (t) {
            }
            if (u(t, e)) return r(!o.f.call(t, e), t[e])
        }
    }, function (t, e) {
    }, function (t, e, n) {
        n(62)("asyncIterator")
    }, function (t, e, n) {
        n(62)("observable")
    }, function (t, e, n) {
        var o, r, i = {};
        n(75), o = n(79), r = n(132), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        var o = n(76);
        "string" == typeof o && (o = [[t.id, o, ""]]);
        n(78)(o, {});
        o.locals && (t.exports = o.locals)
    }, function (t, e, n) {
        e = t.exports = n(77)(), e.push([t.id, '[class^=vl-notify]{box-sizing:border-box;padding:0;margin:0;outline:none}.vl-notify{position:fixed;z-index:1000}.vl-notify,.vl-notify.vl-notify-msg-p{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.vl-notify.vl-notify-msg-p{display:inline;height:0;background-color:rgba(0,0,0,.6)}.vl-notify.vl-notify-tips-p{display:inline;height:0;top:0;left:0;position:absolute}.vl-notify.vl-notify-main{min-width:250px;max-width:1500px;min-height:100px;background-color:#fff;border:1px solid #eee;box-shadow:1px 1px 50px rgba(0,0,0,.3);border-radius:2px;padding-bottom:5px}.vl-notify .vl-notify-content{min-height:65px;padding:20px}.vl-notify .vl-notify-content iframe{width:100%;height:100%;border:none;overflow:none}.vl-notify .vl-notify-btns{text-align:right;padding:0 8px 0 0}.vl-notify.vl-notify-alert h2.vl-notice-title{box-sizing:border-box;width:100%;height:43px;line-height:43px;background-color:#f8f8f8;border-bottom:1px solid #eee;font-size:14px;padding-left:15px;cursor:move;-moz-user-select:-moz-none;-webkit-user-select:none;margin:0}.vl-notify.vl-notify-alert h2.vl-notice-title .icon-remove{position:absolute;right:10px;font-size:14px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);top:0;font-weight:400;cursor:pointer;color:#b3b3b3;font-style:normal}.vl-notify.vl-notify-alert h2.vl-notice-title .icon-remove:before{content:"\\2716"}.vl-notify.vl-notify-loading{display:inline;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);width:50px;height:50px}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vl-notify.vl-notify-loading span{display:inline-block;width:30px;height:30px;border:2px solid #f3f3f3;border-top:2px solid #999;border-right:2px solid #999;border-radius:50%;-webkit-animation:loading 1s infinite linear;animation:loading 1s infinite linear}.vl-notify.vl-notify-msg{minheight:40px;font-size:14px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);background-color:rgba(0,0,0,.6);padding:12px 25px;text-align:center}.vl-notify.vl-notify-msg,.vl-notify.vl-notify-tips{min-width:50px;display:inline;color:#fff;border-radius:5px}.vl-notify.vl-notify-tips{max-width:400px;min-height:32px;position:absolute;left:-50%;background-color:#303133;padding:6px 12px;-webkit-transform:none;transform:none}.vl-notify.vl-notify-tips:after{content:" ";border:10px solid #303133;position:absolute;display:inline-block}.vl-notify.vl-notify-tips-0:after{border-bottom-color:transparent!important;left:15px;bottom:-8px}.vl-notify.vl-notify-tips-0:after,.vl-notify.vl-notify-tips-1:after{border-top-color:transparent!important;border-right-color:transparent!important}.vl-notify.vl-notify-tips-1:after{border-left-color:transparent!important;left:-8px;top:0}.vl-notify.vl-notify-tips-2:after{border-top-color:transparent!important;border-left-color:transparent!important;border-bottom-color:transparent!important;left:15px;top:-8px}.vl-notify.vl-notify-tips-3{max-width:300px}.vl-notify.vl-notify-tips-3:after{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;right:-8px;top:0}.vl-notify .vl-notify-iframe{max-width:2000px}.vl-notify .vl-notify-iframe .vl-notify-content{padding:0}', ""])
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (o[i] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var s = e[r];
                    "number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function (t, e, n) {
        function o(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n], r = l[o.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
                    for (; i < o.parts.length; i++) r.parts.push(f(o.parts[i], e))
                } else {
                    for (var s = [], i = 0; i < o.parts.length; i++) s.push(f(o.parts[i], e));
                    l[o.id] = {id: o.id, refs: 1, parts: s}
                }
            }
        }

        function r(t) {
            for (var e = [], n = {}, o = 0; o < t.length; o++) {
                var r = t[o], i = r[0], s = r[1], u = r[2], f = r[3], a = {css: s, media: u, sourceMap: f};
                n[i] ? n[i].parts.push(a) : e.push(n[i] = {id: i, parts: [a]})
            }
            return e
        }

        function i(t, e) {
            var n = v(), o = y[y.length - 1];
            if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), y.push(e); else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(e)
            }
        }

        function s(t) {
            t.parentNode.removeChild(t);
            var e = y.indexOf(t);
            e >= 0 && y.splice(e, 1)
        }

        function u(t) {
            var e = document.createElement("style");
            return e.type = "text/css", i(t, e), e
        }

        function f(t, e) {
            var n, o, r;
            if (e.singleton) {
                var i = m++;
                n = h || (h = u(e)), o = a.bind(null, n, i, !1), r = a.bind(null, n, i, !0)
            } else n = u(e), o = c.bind(null, n), r = function () {
                s(n)
            };
            return o(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    o(t = e)
                } else r()
            }
        }

        function a(t, e, n, o) {
            var r = n ? "" : o.css;
            if (t.styleSheet) t.styleSheet.cssText = b(e, r); else {
                var i = document.createTextNode(r), s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i)
            }
        }

        function c(t, e) {
            var n = e.css, o = e.media, r = e.sourceMap;
            if (o && t.setAttribute("media", o), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        var l = {}, p = function (t) {
            var e;
            return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }, d = p(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), v = p(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), h = null, m = 0, y = [];
        t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = d()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var n = r(t);
            return o(n, e), function (t) {
                for (var i = [], s = 0; s < n.length; s++) {
                    var u = n[s], f = l[u.id];
                    f.refs--, i.push(f)
                }
                if (t) {
                    var a = r(t);
                    o(a, e)
                }
                for (var s = 0; s < i.length; s++) {
                    var f = i[s];
                    if (0 === f.refs) {
                        for (var c = 0; c < f.parts.length; c++) f.parts[c]();
                        delete l[f.id]
                    }
                }
            }
        };
        var b = function () {
            var t = [];
            return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(80), i = o(r), s = n(114), u = o(s), f = n(117), a = o(f), c = n(120), l = o(c), p = n(123), d = o(p),
            v = n(126), h = o(v), m = n(129), y = o(m);
        e.default = {
            data: function () {
                return {
                    id: "",
                    type: 0,
                    title: "信息",
                    content: "",
                    area: "auto",
                    offset: "auto",
                    icon: -1,
                    btn: "确定",
                    time: 0,
                    shade: !0,
                    yes: "",
                    cancel: ""
                }
            },
            computed: {
                getActiveName: function () {
                    var t = ["pzalert", "pzpage", "pziframe", "pzloading", "pztips", "pzmsg", "pzprompt"];
                    return t[this.$data.type]
                }, isMsg: function () {
                    return 5 == this.type
                }, isTips: function () {
                    return 4 == this.type
                }
            },
            mounted: function () {
            },
            methods: {},
            watch: {},
            components: {
                pzalert: i.default,
                pzloading: u.default,
                pzmsg: a.default,
                pztips: l.default,
                pzpage: d.default,
                pziframe: h.default,
                pzprompt: y.default
            }
        }
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(81), r = n(113), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(82), i = o(r), s = n(85), u = o(s), f = n(102), a = o(f), c = n(107), l = o(c);
        e.default = {
            data: function () {
                return {moveLeft: 0, moveTop: 0, ismove: !1, btns: []}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, methods: {
                close: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    var e = (0, u.default)(i.default.mark(function t(e) {
                        return i.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, l.default.btncancel(e, this.options);
                                case 2:
                                    l.default.clickMaskCloseAll(e, this.options.layer, this.options.id);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }(), btnyes: function (t) {
                    l.default.btnyes(t, this.options)
                }, btncancel: function (t) {
                    l.default.btncancel(t, this.options)
                }, moveStart: function (t) {
                    l.default.moveStart(t, this.options), this.moveLeft = t.clientX, this.moveTop = t.clientY, this.ismove = !0
                }, move: function (t) {
                    if (this.ismove) {
                        var e = document.getElementById(this.options.id + "");
                        e.style.left = this.options.offset[0] + (t.clientX - this.moveLeft) + "px", e.style.top = this.options.offset[1] + (t.clientY - this.moveTop) + "px"
                    }
                }, moveEnd: function (t) {
                    this.ismove = !1
                }, formatBtnText: function () {
                    var t = this.options.btn;
                    return "string" == typeof t ? void(this.btns = [this.options.btn, "取消"]) : void(t instanceof Array && (this.btns = [t[0] || "确定", t[1] || "取消"]))
                }
            }, mounted: function () {
                function t() {
                    return e.apply(this, arguments)
                }

                var e = (0, u.default)(i.default.mark(function t() {
                    var e = this;
                    return i.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, l.default.sleep(20);
                            case 2:
                                this.formatBtnText(), this.options.shade ? (document.getElementById(this.options.id + "_mask").addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.getElementById(this.options.id + "_mask").addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                })) : (document.addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                }));
                            case 4:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return t
            }(), components: {pzbutton: a.default}
        }
    }, function (t, e, n) {
        t.exports = n(83)
    }, function (t, e, n) {
        var o = function () {
                return this
            }() || Function("return this")(),
            r = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0,
            i = r && o.regeneratorRuntime;
        if (o.regeneratorRuntime = void 0, t.exports = n(84), r) o.regeneratorRuntime = i; else try {
            delete o.regeneratorRuntime
        } catch (t) {
            o.regeneratorRuntime = void 0
        }
    }, function (t, e) {
        !function (e) {
            "use strict";

            function n(t, e, n, o) {
                var i = e && e.prototype instanceof r ? e : r, s = Object.create(i.prototype), u = new d(o || []);
                return s._invoke = a(t, n, u), s
            }

            function o(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function r() {
            }

            function i() {
            }

            function s() {
            }

            function u(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function f(t) {
                function e(n, r, i, s) {
                    var u = o(t[n], t, r);
                    if ("throw" !== u.type) {
                        var f = u.arg, a = f.value;
                        return a && "object" == typeof a && b.call(a, "__await") ? Promise.resolve(a.__await).then(function (t) {
                            e("next", t, i, s)
                        }, function (t) {
                            e("throw", t, i, s)
                        }) : Promise.resolve(a).then(function (t) {
                            f.value = t, i(f)
                        }, s)
                    }
                    s(u.arg)
                }

                function n(t, n) {
                    function o() {
                        return new Promise(function (o, r) {
                            e(t, n, o, r)
                        })
                    }

                    return r = r ? r.then(o, o) : o()
                }

                var r;
                this._invoke = n
            }

            function a(t, e, n) {
                var r = O;
                return function (i, s) {
                    if (r === S) throw new Error("Generator is already running");
                    if (r === M) {
                        if ("throw" === i) throw s;
                        return h()
                    }
                    for (n.method = i, n.arg = s; ;) {
                        var u = n.delegate;
                        if (u) {
                            var f = c(u, n);
                            if (f) {
                                if (f === L) continue;
                                return f
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (r === O) throw r = M, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = S;
                        var a = o(t, e, n);
                        if ("normal" === a.type) {
                            if (r = n.done ? M : j, a.arg === L) continue;
                            return {value: a.arg, done: n.done}
                        }
                        "throw" === a.type && (r = M, n.method = "throw", n.arg = a.arg)
                    }
                }
            }

            function c(t, e) {
                var n = t.iterator[e.method];
                if (n === m) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = m, c(t, e), "throw" === e.method)) return L;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return L
                }
                var r = o(n, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, L;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = m), e.delegate = null, L) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, L)
            }

            function l(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function p(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function d(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(l, this), this.reset(!0)
            }

            function v(t) {
                if (t) {
                    var e = t[g];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, o = function e() {
                            for (; ++n < t.length;) if (b.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = m, e.done = !0, e
                        };
                        return o.next = o
                    }
                }
                return {next: h}
            }

            function h() {
                return {value: m, done: !0}
            }

            var m, y = Object.prototype, b = y.hasOwnProperty, x = "function" == typeof Symbol ? Symbol : {},
                g = x.iterator || "@@iterator", _ = x.asyncIterator || "@@asyncIterator",
                w = x.toStringTag || "@@toStringTag", k = "object" == typeof t, E = e.regeneratorRuntime;
            if (E) return void(k && (t.exports = E));
            E = e.regeneratorRuntime = k ? t.exports : {}, E.wrap = n;
            var O = "suspendedStart", j = "suspendedYield", S = "executing", M = "completed", L = {}, T = {};
            T[g] = function () {
                return this
            };
            var P = Object.getPrototypeOf, I = P && P(P(v([])));
            I && I !== y && b.call(I, g) && (T = I);
            var C = s.prototype = r.prototype = Object.create(T);
            i.prototype = C.constructor = s, s.constructor = i, s[w] = i.displayName = "GeneratorFunction", E.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
            }, E.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(C), t
            }, E.awrap = function (t) {
                return {__await: t}
            }, u(f.prototype), f.prototype[_] = function () {
                return this
            }, E.AsyncIterator = f, E.async = function (t, e, o, r) {
                var i = new f(n(t, e, o, r));
                return E.isGeneratorFunction(e) ? i : i.next().then(function (t) {
                    return t.done ? t.value : i.next()
                })
            }, u(C), C[w] = "Generator", C[g] = function () {
                return this
            }, C.toString = function () {
                return "[object Generator]"
            }, E.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(), function n() {
                    for (; e.length;) {
                        var o = e.pop();
                        if (o in t) return n.value = o, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, E.values = v, d.prototype = {
                constructor: d, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(p), !t) for (var e in this) "t" === e.charAt(0) && b.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0], e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    function e(e, o) {
                        return i.type = "throw", i.arg = t, n.next = e, o && (n.method = "next", n.arg = m), !!o
                    }

                    if (this.done) throw t;
                    for (var n = this, o = this.tryEntries.length - 1; o >= 0; --o) {
                        var r = this.tryEntries[o], i = r.completion;
                        if ("root" === r.tryLoc) return e("end");
                        if (r.tryLoc <= this.prev) {
                            var s = b.call(r, "catchLoc"), u = b.call(r, "finallyLoc");
                            if (s && u) {
                                if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return e(r.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && b.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var r = o;
                            break
                        }
                    }
                    r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                    var i = r ? r.completion : {};
                    return i.type = t, i.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, L) : this.complete(i)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), L
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), p(n), L
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                p(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: v(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = m), L
                }
            }
        }(function () {
            return this
        }() || Function("return this")())
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var r = n(86), i = o(r);
        e.default = function (t) {
            return function () {
                var e = t.apply(this, arguments);
                return new i.default(function (t, n) {
                    function o(r, s) {
                        try {
                            var u = e[r](s), f = u.value
                        } catch (t) {
                            return void n(t)
                        }
                        return u.done ? void t(f) : i.default.resolve(f).then(function (t) {
                            o("next", t)
                        }, function (t) {
                            o("throw", t)
                        })
                    }

                    return o("next")
                })
            }
        }
    }, function (t, e, n) {
        t.exports = {default: n(87), __esModule: !0}
    }, function (t, e, n) {
        n(71), n(9), n(53), n(88), t.exports = n(17).Promise
    }, function (t, e, n) {
        "use strict";
        var o, r, i, s = n(14), u = n(16), f = n(18), a = n(89), c = n(15), l = n(23), p = n(19), d = n(90), v = n(91),
            h = n(95), m = n(96).set, y = n(98)(), b = "Promise", x = u.TypeError, g = u.process, _ = u[b],
            g = u.process, w = "process" == a(g), k = function () {
            }, E = !!function () {
                try {
                    var t = _.resolve(1), e = (t.constructor = {})[n(50)("species")] = function (t) {
                        t(k, k)
                    };
                    return (w || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e
                } catch (t) {
                }
            }(), O = function (t, e) {
                return t === e || t === _ && e === i
            }, j = function (t) {
                var e;
                return !(!l(t) || "function" != typeof(e = t.then)) && e
            }, S = function (t) {
                return O(_, t) ? new M(t) : new r(t)
            }, M = r = function (t) {
                var e, n;
                this.promise = new t(function (t, o) {
                    if (void 0 !== e || void 0 !== n) throw x("Bad Promise constructor");
                    e = t, n = o
                }), this.resolve = p(e), this.reject = p(n)
            }, L = function (t) {
                try {
                    t()
                } catch (t) {
                    return {error: t}
                }
            }, T = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    y(function () {
                        for (var o = t._v, r = 1 == t._s, i = 0, s = function (e) {
                            var n, i, s = r ? e.ok : e.fail, u = e.resolve, f = e.reject, a = e.domain;
                            try {
                                s ? (r || (2 == t._h && C(t), t._h = 1), s === !0 ? n = o : (a && a.enter(), n = s(o), a && a.exit()), n === e.promise ? f(x("Promise-chain cycle")) : (i = j(n)) ? i.call(n, u, f) : u(n)) : f(o)
                            } catch (t) {
                                f(t)
                            }
                        }; n.length > i;) s(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && P(t)
                    })
                }
            }, P = function (t) {
                m.call(u, function () {
                    var e, n, o, r = t._v;
                    if (I(t) && (e = L(function () {
                            w ? g.emit("unhandledRejection", r, t) : (n = u.onunhandledrejection) ? n({
                                promise: t,
                                reason: r
                            }) : (o = u.console) && o.error && o.error("Unhandled promise rejection", r)
                        }), t._h = w || I(t) ? 2 : 1), t._a = void 0, e) throw e.error
                })
            }, I = function (t) {
                if (1 == t._h) return !1;
                for (var e, n = t._a || t._c, o = 0; n.length > o;) if (e = n[o++], e.fail || !I(e.promise)) return !1;
                return !0
            }, C = function (t) {
                m.call(u, function () {
                    var e;
                    w ? g.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
                })
            }, z = function (t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0))
            }, A = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw x("Promise can't be resolved itself");
                        (e = j(t)) ? y(function () {
                            var o = {_w: n, _d: !1};
                            try {
                                e.call(t, f(A, o, 1), f(z, o, 1))
                            } catch (t) {
                                z.call(o, t)
                            }
                        }) : (n._v = t, n._s = 1, T(n, !1))
                    } catch (t) {
                        z.call({_w: n, _d: !1}, t)
                    }
                }
            };
        E || (_ = function (t) {
            d(this, _, b, "_h"), p(t), o.call(this);
            try {
                t(f(A, this, 1), f(z, this, 1))
            } catch (t) {
                z.call(this, t)
            }
        }, o = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, o.prototype = n(99)(_.prototype, {
            then: function (t, e) {
                var n = S(h(this, _));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = w ? g.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && T(this, !1), n.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), M = function () {
            var t = new o;
            this.promise = t, this.resolve = f(A, t, 1), this.reject = f(z, t, 1)
        }), c(c.G + c.W + c.F * !E, {Promise: _}), n(49)(_, b), n(100)(b), i = n(17)[b], c(c.S + c.F * !E, b, {
            reject: function (t) {
                var e = S(this), n = e.reject;
                return n(t), e.promise
            }
        }), c(c.S + c.F * (s || !E), b, {
            resolve: function (t) {
                if (t instanceof _ && O(t.constructor, this)) return t;
                var e = S(this), n = e.resolve;
                return n(t), e.promise
            }
        }), c(c.S + c.F * !(E && n(101)(function (t) {
            _.all(t).catch(k)
        })), b, {
            all: function (t) {
                var e = this, n = S(e), o = n.resolve, r = n.reject, i = L(function () {
                    var n = [], i = 0, s = 1;
                    v(t, !1, function (t) {
                        var u = i++, f = !1;
                        n.push(void 0), s++, e.resolve(t).then(function (t) {
                            f || (f = !0, n[u] = t, --s || o(n))
                        }, r)
                    }), --s || o(n)
                });
                return i && r(i.error), n.promise
            }, race: function (t) {
                var e = this, n = S(e), o = n.reject, r = L(function () {
                    v(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, o)
                    })
                });
                return r && o(r.error), n.promise
            }
        })
    }, function (t, e, n) {
        var o = n(40), r = n(50)("toStringTag"), i = "Arguments" == o(function () {
            return arguments
        }()), s = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var e, n, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), r)) ? n : i ? o(e) : "Object" == (u = o(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    }, function (t, e) {
        t.exports = function (t, e, n, o) {
            if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var o = n(18), r = n(92), i = n(93), s = n(22), u = n(42), f = n(94), a = {}, c = {},
            e = t.exports = function (t, e, n, l, p) {
                var d, v, h, m, y = p ? function () {
                    return t
                } : f(t), b = o(n, l, e ? 2 : 1), x = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for (d = u(t.length); d > x; x++) if (m = e ? b(s(v = t[x])[0], v[1]) : b(t[x]), m === a || m === c) return m
                } else for (h = y.call(t); !(v = h.next()).done;) if (m = r(h, b, v.value, e), m === a || m === c) return m
            };
        e.BREAK = a, e.RETURN = c
    }, function (t, e, n) {
        var o = n(22);
        t.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var o = n(32), r = n(50)("iterator"), i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (o.Array === t || i[r] === t)
        }
    }, function (t, e, n) {
        var o = n(89), r = n(50)("iterator"), i = n(32);
        t.exports = n(17).getIteratorMethod = function (t) {
            if (void 0 != t) return t[r] || t["@@iterator"] || i[o(t)]
        }
    }, function (t, e, n) {
        var o = n(22), r = n(19), i = n(50)("species");
        t.exports = function (t, e) {
            var n, s = o(t).constructor;
            return void 0 === s || void 0 == (n = o(s)[i]) ? e : r(n)
        }
    }, function (t, e, n) {
        var o, r, i, s = n(18), u = n(97), f = n(48), a = n(27), c = n(16), l = c.process, p = c.setImmediate,
            d = c.clearImmediate, v = c.MessageChannel, h = 0, m = {}, y = "onreadystatechange", b = function () {
                var t = +this;
                if (m.hasOwnProperty(t)) {
                    var e = m[t];
                    delete m[t], e()
                }
            }, x = function (t) {
                b.call(t.data)
            };
        p && d || (p = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return m[++h] = function () {
                u("function" == typeof t ? t : Function(t), e)
            }, o(h), h
        }, d = function (t) {
            delete m[t]
        }, "process" == n(40)(l) ? o = function (t) {
            l.nextTick(s(b, t, 1))
        } : v ? (r = new v, i = r.port2, r.port1.onmessage = x, o = s(i.postMessage, i, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (o = function (t) {
            c.postMessage(t + "", "*")
        }, c.addEventListener("message", x, !1)) : o = y in a("script") ? function (t) {
            f.appendChild(a("script"))[y] = function () {
                f.removeChild(this), b.call(t)
            }
        } : function (t) {
            setTimeout(s(b, t, 1), 0)
        }), t.exports = {set: p, clear: d}
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var o = void 0 === n;
            switch (e.length) {
                case 0:
                    return o ? t() : t.call(n);
                case 1:
                    return o ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var o = n(16), r = n(96).set, i = o.MutationObserver || o.WebKitMutationObserver, s = o.process, u = o.Promise,
            f = "process" == n(40)(s);
        t.exports = function () {
            var t, e, n, a = function () {
                var o, r;
                for (f && (o = s.domain) && o.exit(); t;) {
                    r = t.fn, t = t.next;
                    try {
                        r()
                    } catch (o) {
                        throw t ? n() : e = void 0, o
                    }
                }
                e = void 0, o && o.enter()
            };
            if (f) n = function () {
                s.nextTick(a)
            }; else if (i) {
                var c = !0, l = document.createTextNode("");
                new i(a).observe(l, {characterData: !0}), n = function () {
                    l.data = c = !c
                }
            } else if (u && u.resolve) {
                var p = u.resolve();
                n = function () {
                    p.then(a)
                }
            } else n = function () {
                r.call(o, a)
            };
            return function (o) {
                var r = {fn: o, next: void 0};
                e && (e.next = r), t || (t = r, n()), e = r
            }
        }
    }, function (t, e, n) {
        var o = n(20);
        t.exports = function (t, e, n) {
            for (var r in e) n && t[r] ? t[r] = e[r] : o(t, r, e[r]);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(16), r = n(17), i = n(21), s = n(25), u = n(50)("species");
        t.exports = function (t) {
            var e = "function" == typeof r[t] ? r[t] : o[t];
            s && e && !e[u] && i.f(e, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var o = n(50)("iterator"), r = !1;
        try {
            var i = [7][o]();
            i.return = function () {
                r = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !r) return !1;
            var n = !1;
            try {
                var i = [7], s = i[o]();
                s.next = function () {
                    return {done: n = !0}
                }, i[o] = function () {
                    return s
                }, t(i)
            } catch (t) {
            }
            return n
        }
    }, function (t, e, n) {
        var o, r, i = {};
        n(103), o = n(105), r = n(106), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        var o = n(104);
        "string" == typeof o && (o = [[t.id, o, ""]]);
        n(78)(o, {});
        o.locals && (t.exports = o.locals)
    }, function (t, e, n) {
        e = t.exports = n(77)(), e.push([t.id, ".notify-btn[_v-6226f137]{position:relative;display:inline-block;padding:6px 10px;margin-bottom:0;font-size:14px;min-width:10px;text-align:center;white-space:nowrap;vertical-align:top;cursor:pointer;background-color:#f7f7f7;border:1px solid #dddee1;border-radius:4px;outline:0;-webkit-appearance:none}.notify-btn.active[_v-6226f137],.notify-btn[_v-6226f137]:active{color:inherit;background-color:#e3e3e3}.btn-default[_v-6226f137]{color:#fff;background-color:#f7f7f7;border:1px solid #eaeaea;color:#000}.btn-default.active[_v-6226f137],.btn-default.hover[_v-6226f137],.btn-default[_v-6226f137]:active,.btn-default[_v-6226f137]:hover{color:#fff;background-color:#e3e3e3}.btn-default[_v-6226f137]:hover{color:#000}.notify-btn-primary[_v-6226f137]{color:#fff;background-color:#20a0ff;border:1px solid #0695ff}.notify-btn-primary.active[_v-6226f137],.notify-btn-primary.hover[_v-6226f137],.notify-btn-primary[_v-6226f137]:active,.notify-btn-primary[_v-6226f137]:hover{color:#fff;background-color:#008df6}.notify-btn-success[_v-6226f137]{color:#fff;background-color:#449d44;border:1px solid #3c8b3c}.notify-btn-success.active[_v-6226f137],.notify-btn-success.hover[_v-6226f137],.notify-btn-success[_v-6226f137]:active,.notify-btn-success[_v-6226f137]:hover{color:#fff;background-color:#388138}.notify-btn-info[_v-6226f137]{color:#fff;background-color:#31b0d5;border:1px solid #28a1c4}.notify-btn-info.active[_v-6226f137],.notify-btn-info.hover[_v-6226f137],.notify-btn-info[_v-6226f137]:active,.notify-btn-info[_v-6226f137]:hover{color:#fff;background-color:#2597b8}.notify-btn-warning[_v-6226f137]{color:#fff;background-color:#ec971f;border:1px solid #df8a13}.notify-btn-warning.active[_v-6226f137],.notify-btn-warning.hover[_v-6226f137],.notify-btn-warning[_v-6226f137]:active,.notify-btn-warning[_v-6226f137]:hover{color:#fff;background-color:#d18112}.notify-btn-danger[_v-6226f137]{color:#fff;background-color:#d9534f;border:1px solid #d43f3a}.notify-btn-danger.active[_v-6226f137],.notify-btn-danger.hover[_v-6226f137],.notify-btn-danger[_v-6226f137]:active,.notify-btn-danger[_v-6226f137]:hover{color:#fff;background-color:#d2322d}.btn-small[_v-6226f137]{font-size:12px;min-width:31px;min-height:14px;padding:6px 9px}", ""])
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            props: {
                btn: {
                    type: String,
                    default: "primary"
                },
                size: String,
                type: {type: String, default: "button"},
                loading: {type: Boolean, default: !1},
                disabled: {type: Boolean, default: !1},
                icon: {type: String, default: ""}
            }, computed: {}, mounted: function () {
            }, methods: {
                clickon: function () {
                    this.$emit("click", "")
                }
            }, components: {}
        }
    }, function (t, e) {
        t.exports = " <button v-on:click=clickon :type=type name=button class=notify-btn :class=\"[\n    btn ? 'notify-btn-' + btn : '',\n    size ? 'notify-btn-' + size : '',\n    {\n      'disabled': disabled,\n    }\n  ]\" _v-6226f137=\"\"> <slot _v-6226f137=\"\"></slot> </button> "
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(6), i = o(r), s = n(86), u = o(s), f = n(82), a = o(f), c = n(85), l = o(c), p = n(108), d = o(p),
            v = n(109), h = o(v), m = function () {
                function t() {
                    (0, d.default)(this, t)
                }

                return (0, h.default)(t, null, [{
                    key: "clickMaskCloseAll", value: function (t, e, n) {
                        var o = t.target.getAttribute("class");
                        o && (o.indexOf("notify-mask") > -1 || o.indexOf("icon-remove") > -1) && e.close(n)
                    }
                }, {
                    key: "btnyes", value: function (t, e) {
                        "function" == typeof e.yes ? e.yes(e.id) : e.layer.close(e.id)
                    }
                }, {
                    key: "btncancel", value: function () {
                        function t(t, n) {
                            return e.apply(this, arguments)
                        }

                        var e = (0, l.default)(a.default.mark(function t(e, n) {
                            return a.default.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("function" != typeof n.cancel) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 3, n.cancel();
                                    case 3:
                                        t.next = 6;
                                        break;
                                    case 5:
                                        n.layer.close(n.id);
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return t
                    }()
                }, {
                    key: "moveStart", value: function (t, e) {
                        e.offset = "auto" == e.offset ? [] : e.offset, 0 == e.offset.length && (e.offset.push(document.getElementById(e.id + "").offsetLeft), e.offset.push(document.getElementById(e.id + "").offsetTop), e.offset.push(0)), 2 == e.offset.length && e.offset.push(0), e.offset[0] = document.getElementById(e.id + "").offsetLeft, e.offset[1] = document.getElementById(e.id + "").offsetTop
                    }
                }, {
                    key: "move", value: function (t, e, n) {
                        if (n) {
                            var o = document.getElementById(e.id + "_alert");
                            o.style.left = e.offset[0] + (t.clientX - this.moveLeft) + "px", o.style.top = e.offset[1] + (t.clientY - this.moveTop) + "px"
                        }
                    }
                }, {
                    key: "sleep", value: function (t) {
                        return new u.default(function (e) {
                            return setTimeout(e, t)
                        })
                    }
                }, {
                    key: "deepClone", value: function (t) {
                        function e(e) {
                            return t.apply(this, arguments)
                        }

                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function (t) {
                        if (!t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i.default)(t))) throw new Error("error arguments", "shallowClone");
                        var e = t.constructor === Array ? [] : {};
                        for (var n in t) t.hasOwnProperty(n) && (t[n] && "object" === (0, i.default)(t[n]) ? (e[n] = t[n].constructor === Array ? [] : {}, e[n] = deepClone(t[n])) : e[n] = t[n]);
                        return e
                    })
                }]), t
            }();
        e.default = m
    }, function (t, e) {
        "use strict";
        e.__esModule = !0, e.default = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var r = n(110), i = o(r);
        e.default = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, i.default)(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }()
    }, function (t, e, n) {
        t.exports = {default: n(111), __esModule: !0}
    }, function (t, e, n) {
        n(112);
        var o = n(17).Object;
        t.exports = function (t, e, n) {
            return o.defineProperty(t, e, n)
        }
    }, function (t, e, n) {
        var o = n(15);
        o(o.S + o.F * !n(25), "Object", {defineProperty: n(21).f})
    }, function (t, e) {
        t.exports = " <div class=\"vl-notify vl-notify-main vl-notify-alert\" @mousemove=move @mouseup=moveEnd :id=options.id :style=\"{left:options.offset[0] + 'px',top:options.offset[1] +'px', margin:options.offset[2]}\" style=max-width:500px> <h2 class=vl-notice-title @mousedown=moveStart>{{options.title}}<i class=icon-remove @click=close></i></h2> <div class=vl-notify-content v-html=options.content></div> <div class=vl-notify-btns> <pzbutton btn=primary @click.native=btnyes size=small>{{btns[0]}}</pzbutton> <pzbutton btn=default @click.native=btncancel size=small v-if=\"typeof(options.cancel) == 'function' || options.cancel=='cancel'\">{{btns[1]}}</pzbutton> </div> </div> "
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(115), r = n(116), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            data: function () {
                return {timeout: ""}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {}, mounted: function () {
                var t = this;
                setTimeout(function () {
                    t.options.layer.close(t.options.id)
                }, 1e3 * t.options.time)
            }
        }
    }, function (t, e) {
        t.exports = ' <label class="vl-notify vl-notify-loading" :id=options.id> <span></span> </label> '
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(118), r = n(119), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(82), i = o(r), s = n(85), u = o(s), f = n(107), a = o(f);
        e.default = {
            data: function () {
                return {timeout: ""}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, mounted: function () {
                function t() {
                    return e.apply(this, arguments)
                }

                var e = (0, u.default)(i.default.mark(function t() {
                    var e;
                    return i.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e = this, t.next = 3, a.default.sleep(1e3 * this.options.time);
                            case 3:
                                this.btnyes();
                            case 4:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return t
            }(), methods: {
                btnyes: function (t) {
                    var e = document.getElementById(this.options.id);
                    e && a.default.btnyes(t, this.options)
                }
            }
        }
    }, function (t, e) {
        t.exports = ' <label :id=options.id class="vl-notify vl-notify-msg" v-html=options.content></label> '
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(121), r = n(122), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(86), i = o(r), s = n(82), u = o(s), f = n(85), a = o(f);
        e.default = {
            data: function () {
                return {timeout: ""}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                offset: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    var e = (0, a.default)(u.default.mark(function t() {
                        return u.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.getOffset();
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, mounted: function () {
                function t() {
                    return e.apply(this, arguments)
                }

                var e = (0, a.default)(u.default.mark(function t() {
                    var e;
                    return u.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e = this, 0 == this.options.time && (this.options.time = 2), setTimeout(function () {
                                    e.btnyes()
                                }, 1e3 * e.options.time), t.next = 5, this.getOffset();
                            case 5:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return t
            }(), methods: {
                btnyes: function (t) {
                    var e = document.getElementById(this.options.id);
                    e && ("function" == typeof this.options.yes && this.options.yes(), this.options.layer.close(this.options.id))
                }, sleep: function (t) {
                    return new i.default(function (e, n) {
                        setTimeout(e, t)
                    })
                }, getOffset: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    var e = (0, a.default)(u.default.mark(function t() {
                        var e, n, o, r, i, s, f, a, c;
                        return u.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.sleep(1);
                                case 2:
                                    e = document.querySelector(this.options.title), n = e.getBoundingClientRect(), o = document.querySelector("#" + this.options.id), r = o.getBoundingClientRect(), i = 0, s = e.offsetLeft, f = e.offsetTop - i, a = 9, c = {}, t.t0 = this.options.tips[0], t.next = 0 === t.t0 ? 14 : 1 === t.t0 ? 16 : 2 === t.t0 ? 18 : 3 === t.t0 ? 20 : 22;
                                    break;
                                case 14:
                                    return c = {left: s + "px", top: f - r.height - a + "px"}, t.abrupt("break", 22);
                                case 16:
                                    return c = {left: s + n.width + a + "px", top: f + "px"}, t.abrupt("break", 22);
                                case 18:
                                    return c = {left: s + "px", top: f + n.height + a + "px"}, t.abrupt("break", 22);
                                case 20:
                                    return c = {left: s - r.width - a + "px", top: f + "px"}, t.abrupt("break", 22);
                                case 22:
                                    o.style.left = c.left, o.style.top = c.top;
                                case 24:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }(), getScrollTop: function () {
                    var t = 0;
                    return document.documentElement && document.documentElement.scrollTop ? t = document.documentElement.scrollTop : document.body && (t = document.body.scrollTop), t
                }
            }
        }
    }, function (t, e) {
        t.exports = ' <label class="vl-notify vl-notify-tips" :class="[this.options.tips[1],\'vl-notify-tips-\'+ this.options.tips[0]]" :id=options.id v-html=options.content> <em></em> </label> '
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(124), r = n(125), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            data: function () {
                return {moveLeft: 0, moveTop: 0, ismove: !1}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {}, mounted: function () {
            }, methods: {
                close: function (t) {
                    var e = t.target.getAttribute("class");
                    e && e.indexOf("notify-mask") > -1 && this.options.layer.close(this.options.id)
                }, btnyes: function (t) {
                    "function" == typeof this.options.yes ? this.options.yes() : this.options.layer.close(this.options.id)
                }, btncancel: function (t) {
                    "function" == typeof this.options.cancel ? this.options.cancel() : this.options.layer.close(this.options.id)
                }, moveStart: function (t) {
                    this.options.offset = "auto" == this.options.offset ? [] : this.options.offset, 0 == this.options.offset.length && (this.options.offset.push(document.getElementById(this.options.id + "_alert").offsetLeft), this.options.offset.push(document.getElementById(this.options.id + "_alert").offsetTop), this.options.offset.push(0)), 2 == this.options.offset.length && this.options.offset.push(0), this.options.offset[0] = document.getElementById(this.options.id + "_alert").offsetLeft, this.options.offset[1] = document.getElementById(this.options.id + "_alert").offsetTop, this.moveLeft = t.clientX, this.moveTop = t.clientY, this.ismove = !0
                }, move: function (t) {
                    if (this.ismove) {
                        var e = document.getElementById(this.options.id + "_alert");
                        e.style.left = this.options.offset[0] + (t.clientX - this.moveLeft) + "px", e.style.top = this.options.offset[1] + (t.clientY - this.moveTop) + "px"
                    }
                }, moveEnd: function (t) {
                    this.ismove = !1
                }
            }, watch: {}, components: {}
        }
    }, function (t, e) {
        t.exports = " <div class=notify @mousemove=move @mouseup=moveEnd> <div class=notify-mask @click=close></div> <div :id=\"options.id + '_alert'\" class=\"notify-main notify-alert\" :style=\"{left:options.offset[0] + 'px',top:options.offset[1] +'px', margin:options.offset[2]}\"> <h2 class=title @mousedown=moveStart>{{options.title}}</h2> <div class=notify-content v-html=options.content></div> </div> </div> "
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(127), r = n(128), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(82), i = o(r), s = n(85), u = o(s), f = n(107), a = o(f);
        e.default = {
            data: function () {
                return {moveLeft: 0, moveTop: 0, ismove: !1, id: "vlip" + (new Date).getTime(), zindex: 0}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                contentStyle: function () {
                    return {height: parseInt(this.options.area[1]) - 50 + "px", minHeight: "inherit", overflow: "auto"}
                }
            }, mounted: function () {
                function t() {
                    return e.apply(this, arguments)
                }

                var e = (0, u.default)(i.default.mark(function t() {
                    var e = this;
                    return i.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return this.getContent(), t.next = 3, a.default.sleep(20);
                            case 3:
                                this.options.shade ? (document.getElementById(this.options.id + "_mask").addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.getElementById(this.options.id + "_mask").addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                })) : (document.addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                })), this.resetZIndex();
                            case 5:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return t
            }(), methods: {
                getStyle: function (t, e) {
                    var n = document.getElementById(t);
                    if (window.getComputedStyle) var o = document.defaultView.getComputedStyle(n, null).getPropertyValue(e); else if (n.currentStyle) var o = n.currentStyle[e];
                    return o
                }, resetZIndex: function () {
                    for (var t = 500, e = document.querySelectorAll(".vl-notify-iframe"), n = 0, o = 0, r = e.length; o < r; o++) {
                        var i = parseInt(this.getStyle(e[o].id, "z-index"));
                        this.options.id == e[o].id && (n = i), t < i && (t = i)
                    }
                    n == t && 500 != t || (this.zindex = t + 1)
                }, getContent: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    var e = (0, u.default)(i.default.mark(function t() {
                        var e, n;
                        return i.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.default.sleep(10);
                                case 2:
                                    e = a.default.deepClone(this.options.content.data), e.layerid = this.options.id, n = new this.options.content.content({
                                        parent: this.options.content.parent,
                                        propsData: e
                                    }), n.vm = n.$mount(), document.getElementById(this.id).appendChild(n.vm.$el), this.options.layer.instancesVue[this.options.id].iframe = n.vm;
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }(), close: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    var e = (0, u.default)(i.default.mark(function t(e) {
                        return i.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.default.btncancel(e, this.options);
                                case 2:
                                    a.default.clickMaskCloseAll(e, this.options.layer, this.options.id);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }(), btnyes: function (t) {
                    a.default.btnyes(t, this.options)
                }, btncancel: function (t) {
                    a.default.btncancel(t, this.options)
                }, moveStart: function (t) {
                    a.default.moveStart(t, this.options), this.moveLeft = t.clientX, this.moveTop = t.clientY, this.ismove = !0
                }, move: function (t) {
                    if (this.ismove) {
                        var e = document.getElementById(this.options.id + "");
                        e.style.left = this.options.offset[0] + (t.clientX - this.moveLeft) + "px", e.style.top = this.options.offset[1] + (t.clientY - this.moveTop) + "px", this.resetZIndex()
                    }
                }, moveEnd: function (t) {
                    this.ismove = !1
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div class=\"vl-notify vl-notify-main vl-notify-alert vl-notify-iframe\" @mousemove=move @mouseup=moveEnd @focus=resetZIndex tabindex=1 :id=options.id :style=\"{left:options.offset[0] + 'px',top:options.offset[1] +'px', margin:options.offset[2],zIndex:zindex, width: options.area[0], height: options.area[1]}\"> <h2 class=vl-notice-title @mousedown=moveStart>{{options.title}}<i class=icon-remove @click=close></i></h2> <div class=vl-notify-content :style=contentStyle :id=id></div> </div> "
    }, function (t, e, n) {
        var o, r, i = {};
        o = n(130), r = n(131), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(82), i = o(r), s = n(85), u = o(s), f = n(102), a = o(f), c = n(107), l = o(c);
        e.default = {
            data: function () {
                return {moveLeft: 0, moveTop: 0, ismove: !1}
            }, props: {
                options: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, methods: {
                close: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    var e = (0, u.default)(i.default.mark(function t(e) {
                        return i.default.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, l.default.btncancel(e, this.options);
                                case 2:
                                    l.default.clickMaskCloseAll(e, this.options.layer, this.options.id);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }(), btnyes: function (t) {
                    l.default.btnyes(t, this.options)
                }, btncancel: function (t) {
                    l.default.btncancel(t, this.options)
                }, moveStart: function (t) {
                    l.default.moveStart(t, this.options), this.moveLeft = t.clientX, this.moveTop = t.clientY, this.ismove = !0
                }, move: function (t) {
                    if (this.ismove) {
                        var e = document.getElementById(this.options.id + "");
                        e.style.left = this.options.offset[0] + (t.clientX - this.moveLeft) + "px", e.style.top = this.options.offset[1] + (t.clientY - this.moveTop) + "px"
                    }
                }, moveEnd: function (t) {
                    this.ismove = !1
                }
            }, mounted: function () {
                function t() {
                    return e.apply(this, arguments)
                }

                var e = (0, u.default)(i.default.mark(function t() {
                    var e = this;
                    return i.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, l.default.sleep(20);
                            case 2:
                                this.options.shade ? (document.getElementById(this.options.id + "_mask").addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.getElementById(this.options.id + "_mask").addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                })) : (document.addEventListener("mousemove", function (t) {
                                    e.move(t)
                                }), document.addEventListener("mouseup", function (t) {
                                    e.moveEnd(t)
                                }));
                            case 3:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return t
            }(), components: {pzbutton: a.default}
        }
    }, function (t, e) {
        t.exports = " <div class=\"vl-notify vl-notify-main vl-notify-alert\" @mousemove=move @mouseup=moveEnd :id=options.id :style=\"{left:options.offset[0] + 'px',top:options.offset[1] +'px', margin:options.offset[2]}\" style=max-width:500px> <h2 class=vl-notice-title @mousedown=moveStart>{{options.title}}<i class=icon-remove @click=close></i></h2> <div class=vl-notify-content> <input/> </div> <div class=vl-notify-btns> <pzbutton btn=primary @click.native=btnyes size=small>确定</pzbutton> <pzbutton btn=default @click.native=btncancel size=small v-if=\"typeof(options.cancel) == 'function' || options.cancel=='cancel'\">取消</pzbutton> </div> </div> ";
    }, function (t, e) {
        t.exports = " <component :options=this.$data :is=getActiveName></component> "
    }, function (t, e, n) {
        var o, r, i = {};
        n(134), o = n(136), r = n(137), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        r && (s.template = r), s.computed || (s.computed = {}), Object.keys(i).forEach(function (t) {
            var e = i[t];
            s.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, n) {
        var o = n(135);
        "string" == typeof o && (o = [[t.id, o, ""]]);
        n(78)(o, {});
        o.locals && (t.exports = o.locals)
    }, function (t, e, n) {
        e = t.exports = n(77)(), e.push([t.id, ".vl-notify-mask{background-color:#ccc;opacity:.2;position:fixed;top:0;left:0;width:100%;height:100%}", ""])
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(107), i = o(r);
        e.default = {
            data: function () {
                return {
                    id: "",
                    type: 0,
                    title: "信息",
                    content: "",
                    area: "auto",
                    offset: "auto",
                    icon: -1,
                    btn: "确定",
                    time: 0,
                    shade: !0,
                    yes: "",
                    cancel: ""
                }
            }, props: {}, computed: {
                setOpacity: function () {
                    return 3 == this.type ? {opacity: 0} : {}
                }
            }, methods: {
                close: function (t) {
                    this.shadeClose && i.default.clickMaskCloseAll(t, this.layer, this.id)
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div class=vl-notify-mask @click=close :id=\"id + '_mask'\" :style=setOpacity></div> "
    }])
});