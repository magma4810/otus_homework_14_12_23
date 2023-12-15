(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    a,
    i,
    c,
    s,
    u,
    d,
    l,
    p,
    f,
    v = {
      138: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "body {\n  margin: 0;\n  padding: 0;\n}\n\n.desktop {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .mobile {\n    display: none;\n  }\n  .desktop {\n    display: block;\n  }\n}\n",
          "",
        ]);
        const c = i;
      },
      434: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "footer {\n  background-color: azure;\n  color: darkolivegreen;\n  padding: 20px;\n  font-size: 20px;\n}\n",
          "",
        ]);
        const c = i;
      },
      254: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "header {\n  background-color: azure;\n  color: darkolivegreen;\n  padding: 20px;\n  font-size: 20px;\n}\n",
          "",
        ]);
        const c = i;
      },
      28: (n, e, t) => {
        t.d(e, { Z: () => l });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          c = t(138),
          s = t(254),
          u = t(434),
          d = i()(o());
        d.i(c.Z),
          d.i(s.Z),
          d.i(u.Z),
          d.push([n.id, "body {\n  background-color: lightblue;\n}\n", ""]);
        const l = d;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < n.length; u++) {
                var d = [].concat(n[u]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              u = r.base ? s[0] + r.base : s[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var p = t(l),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: v, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), u = 0; u < a.length; u++) {
              var d = t(a[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    m = {};
  function h(n) {
    var e = m[n];
    if (void 0 !== e) return e.exports;
    var t = (m[n] = { id: n, exports: {} });
    return v[n](t, t.exports, h), t.exports;
  }
  (h.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return h.d(e, { a: e }), e;
  }),
    (h.d = (n, e) => {
      for (var t in e)
        h.o(e, t) &&
          !h.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (h.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (h.nc = void 0),
    (n = h(379)),
    (e = h.n(n)),
    (t = h(795)),
    (r = h.n(t)),
    (o = h(569)),
    (a = h.n(o)),
    (i = h(565)),
    (c = h.n(i)),
    (s = h(216)),
    (u = h.n(s)),
    (d = h(589)),
    (l = h.n(d)),
    (p = h(28)),
    ((f = {}).styleTagTransform = l()),
    (f.setAttributes = c()),
    (f.insert = a().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = u()),
    e()(p.Z, f),
    p.Z && p.Z.locals && p.Z.locals,
    console.log("Hello World");
})();
