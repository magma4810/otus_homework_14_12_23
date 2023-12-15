(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    i,
    a,
    s,
    c,
    d,
    l,
    u,
    p,
    f,
    g = {
      935: (n, e, t) => {
        t.d(e, { Z: () => p });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          s = t(667),
          c = t.n(s),
          d = new URL(t(530), t.b),
          l = a()(o()),
          u = c()(d);
        l.push([
          n.id,
          `.img_building_first {\n  background-image: url(${u});\n  background-size: 100% 100%;\n  width: 100vw;\n  height: 80vh;\n}\n\n.img_building_first > h1 > a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: aliceblue;\n  padding: 10px;\n  margin: 10px;\n}\n`,
          "",
        ]);
        const p = l;
      },
      632: (n, e, t) => {
        t.d(e, { Z: () => p });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          s = t(667),
          c = t.n(s),
          d = new URL(t(751), t.b),
          l = a()(o()),
          u = c()(d);
        l.push([
          n.id,
          `.second_block {\n  display: flex;\n}\n\n.img_building_second {\n  padding: 10px;\n  background-image: url(${u});\n  background-size: 100% 100%;\n  width: 290vw;\n  margin: 10px;\n}\n`,
          "",
        ]);
        const p = l;
      },
      138: (n, e, t) => {
        t.d(e, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          n.id,
          "body {\n  margin: 0;\n  padding: 0;\n  background-color: #e7dfd0;\n}\n\n.desktop {\n  display: none;\n}\n\nli {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n@media screen and (min-width: 768px) {\n  .mobile {\n    display: none;\n  }\n  .desktop {\n    display: block;\n  }\n}\n",
          "",
        ]);
        const s = a;
      },
      434: (n, e, t) => {
        t.d(e, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          n.id,
          ".footer {\n  display: flex;\n  justify-content: space-between;\n  font-size: small;\n}\n\n.footer_info {\n  display: flex;\n}\n",
          "",
        ]);
        const s = a;
      },
      254: (n, e, t) => {
        t.d(e, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          n.id,
          ".nav_info {\n  display: flex;\n  background-color: #c7c0b387;\n  height: 95px;\n  justify-content: space-between;\n  padding-left: 0;\n  align-items: center;\n  font-size: small;\n}\n\n.container_info {\n  padding: 0;\n  display: flex;\n}\n",
          "",
        ]);
        const s = a;
      },
      813: (n, e, t) => {
        t.d(e, { Z: () => p });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          s = t(667),
          c = t.n(s),
          d = new URL(t(766), t.b),
          l = a()(o()),
          u = c()(d);
        l.push([
          n.id,
          `.services {\n  text-align: center;\n}\n\n.container_services {\n  display: flex;\n  justify-content: space-between;\n}\n\n.services_div {\n  background-image: url(${u});\n  background-size: 100% 100%;\n  width: 100vw;\n  height: 80vh;\n}\n`,
          "",
        ]);
        const p = l;
      },
      28: (n, e, t) => {
        t.d(e, { Z: () => h });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          s = t(138),
          c = t(254),
          d = t(935),
          l = t(632),
          u = t(813),
          p = t(378),
          f = t(434),
          g = a()(o());
        g.i(s.Z),
          g.i(c.Z),
          g.i(d.Z),
          g.i(l.Z),
          g.i(u.Z),
          g.i(p.Z),
          g.i(f.Z),
          g.push([n.id, "\n", ""]);
        const h = g;
      },
      378: (n, e, t) => {
        t.d(e, { Z: () => p });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          s = t(667),
          c = t.n(s),
          d = new URL(t(509), t.b),
          l = a()(o()),
          u = c()(d);
        l.push([
          n.id,
          `.subscribe {\n  background-image: url(${u});\n  background-size: 100% 100%;\n  width: 100vw;\n  height: 50vh;\n}\n`,
          "",
        ]);
        const p = l;
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
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : n)
              : n
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
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              d = r.base ? c[0] + r.base : c[0],
              l = i[d] || 0,
              u = "".concat(d, " ").concat(l);
            i[d] = l + 1;
            var p = t(u),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var g = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: g, references: 1 });
            }
            a.push(u);
          }
          return a;
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
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = r(n, o), d = 0; d < i.length; d++) {
              var l = t(i[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
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
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
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
      509: (n, e, t) => {
        n.exports = t.p + "8866d95af3788d1649ee.png";
      },
      766: (n, e, t) => {
        n.exports = t.p + "86355bc5d88dafa3ad17.png";
      },
      751: (n, e, t) => {
        n.exports = t.p + "a4794a618e7b5ec3d4ab.png";
      },
      530: (n, e, t) => {
        n.exports = t.p + "ddf1deae0813a1168511.png";
      },
    },
    h = {};
  function v(n) {
    var e = h[n];
    if (void 0 !== e) return e.exports;
    var t = (h[n] = { id: n, exports: {} });
    return g[n](t, t.exports, v), t.exports;
  }
  (v.m = g),
    (v.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return v.d(e, { a: e }), e;
    }),
    (v.d = (n, e) => {
      for (var t in e)
        v.o(e, t) &&
          !v.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (v.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (v.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      v.g.importScripts && (n = v.g.location + "");
      var e = v.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var t = e.getElementsByTagName("script");
        if (t.length) for (var r = t.length - 1; r > -1 && !n; ) n = t[r--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (v.p = n);
    })(),
    (v.b = document.baseURI || self.location.href),
    (v.nc = void 0),
    (n = v(379)),
    (e = v.n(n)),
    (t = v(795)),
    (r = v.n(t)),
    (o = v(569)),
    (i = v.n(o)),
    (a = v(565)),
    (s = v.n(a)),
    (c = v(216)),
    (d = v.n(c)),
    (l = v(589)),
    (u = v.n(l)),
    (p = v(28)),
    ((f = {}).styleTagTransform = u()),
    (f.setAttributes = s()),
    (f.insert = i().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = d()),
    e()(p.Z, f),
    p.Z && p.Z.locals && p.Z.locals,
    console.log("Hello World");
})();
