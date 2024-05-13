"use strict";
(self.webpackChunkmha = self.webpackChunkmha || []).push([
  [303],
  {
    655: function (t, e, r) {
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(4135),
        o = r.n(n),
        i = (function () {
          function t() {}
          return (
            (t.getBlock = function (t) {
              var e,
                r = t.match(/=\?(.*?)\?(.)\?(.*?)\?=/m);
              return r
                ? {
                    charset: r[1],
                    type:
                      null === (e = r[2]) || void 0 === e
                        ? void 0
                        : e.toUpperCase(),
                    text: r[3],
                  }
                : { text: t };
            }),
            (t.splitToBlocks = function (e) {
              for (var r, n = []; e.length; )
                try {
                  var o = e.match(/([\S\s]*?)(=\?.*?\?.\?.*?\?=)([\S\s]*)/m);
                  if (o)
                    o[1] && n.push({ text: o[1] }),
                      o[2] && n.push(t.getBlock(o[2])),
                      (e = null !== (r = o[3]) && void 0 !== r ? r : "");
                  else if (e) {
                    n.push({ text: e });
                    break;
                  }
                } catch (t) {
                  n.push({ text: e }), (e = "");
                }
              return n;
            }),
            (t.fixCharSet = function (t) {
              return "UTF 8" === t.toUpperCase() ? "UTF-8" : t;
            }),
            (t.getCodePage = function (t) {
              switch (t.toUpperCase()) {
                case "UTF-8":
                default:
                  return 65001;
                case "ISO-8859-8":
                  return 28598;
                case "ISO-8859-1":
                  return 28591;
                case "US-ASCII":
                  return 20127;
                case "WINDOWS-1252":
                  return 1252;
                case "GB2312":
                  return 936;
                case "EUC-KR":
                  return 51949;
              }
            }),
            (t.decodeHexCodepage = function (e, r) {
              if (window.TextDecoder)
                return new TextDecoder(t.fixCharSet(e)).decode(
                  new Uint8Array(r).buffer
                );
              if (o()) return o().utils.decode(t.getCodePage(e), r);
              throw new Error("decodeHexCodepage: no decoder found");
            }),
            (t.decodeBase64 = function (e, r) {
              if (!r) return r;
              if (
                !0 ===
                RegExp(
                  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
                ).test(r)
              ) {
                for (
                  var n = [],
                    o = void 0,
                    i = void 0,
                    a = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0,
                    p = 0;
                  p < r.length;

                )
                  (o =
                    (t._F.indexOf(r.charAt(p++)) << 2) |
                    ((s = t._F.indexOf(r.charAt(p++))) >> 4)),
                    (i =
                      ((15 & s) << 4) |
                      ((u = t._F.indexOf(r.charAt(p++))) >> 2)),
                    (a = ((3 & u) << 6) | (c = t._F.indexOf(r.charAt(p++)))),
                    64 !== c
                      ? n.push(o, i, a)
                      : 64 !== u
                      ? n.push(o, i)
                      : n.push(o);
                try {
                  return t.decodeHexCodepage(e, n);
                } catch (t) {}
              }
              return "=?" + e + "?B?" + r + "?=";
            }),
            (t.decodeHex = function (e, r) {
              for (var n, o, i = []; r.length; ) {
                var a = r.match(/(.*?)((?:=[0-9a-fA-F]{2,2})+)(.*)/m);
                if (!a) {
                  i.push(r);
                  break;
                }
                if (a[2]) {
                  for (
                    var s = a[2].split("=").filter(function (t) {
                        return t;
                      }),
                      u = [],
                      c = 0;
                    c < s.length;
                    c++
                  )
                    u.push(parseInt("0x" + s[c], 16));
                  i.push(
                    null !== (n = a[1]) && void 0 !== n ? n : "",
                    t.decodeHexCodepage(e, u)
                  );
                }
                r = null !== (o = a[3]) && void 0 !== o ? o : "";
              }
              return i.join("");
            }),
            (t.decodeQuoted = function (e, r) {
              if (!r) return r;
              try {
                var n = r.replace(/_/g, " ");
                return t.decodeHex(e, n);
              } catch (t) {
                return "=?" + e + "?Q?" + r + "?=";
              }
            }),
            (t.clean2047Encoding = function (e) {
              e = e.replace(/\?=\s*=\?/g, "?==?");
              var r,
                n = t.splitToBlocks(e),
                o = [];
              n.forEach(function (t, e) {
                o.push(t),
                  e >= 1 &&
                    "Q" === t.type &&
                    t.type === r.type &&
                    t.charset === r.charset &&
                    ((t.text = r.text + t.text), (o[e - 1] = {})),
                  (r = t);
              });
              var i = [];
              return (
                o.forEach(function (e) {
                  "B" === e.type
                    ? i.push(t.decodeBase64(e.charset, e.text))
                    : "Q" === e.type
                    ? i.push(t.decodeQuoted(e.charset, e.text))
                    : i.push(e.text);
                }),
                i.join("")
              );
            }),
            (t._F =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
            t
          );
        })();
    },
    9572: function (t, e, r) {
      r.d(e, {
        g: function () {
          return a;
        },
      });
      var n = r(3772),
        o = r(3968),
        i = r(1326),
        a = (function () {
          function t() {
            (this._source = ""),
              (this._unparsed = ""),
              (this.antiSpamRows = [
                new i.X2("BCL", n.C.mhaBcl, "X-Microsoft-Antispam"),
                new i.X2("PCL", n.C.mhaPcl, "X-Microsoft-Antispam"),
                new i.X2("source", n.C.mhaSource, "X-Microsoft-Antispam"),
                new i.X2("unparsed", n.C.mhaUnparsed, "X-Microsoft-Antispam"),
              ]);
          }
          return (
            (t.prototype.existsInternal = function (t) {
              for (var e = 0, r = t; e < r.length; e++)
                if (r[e].value) return !0;
              return !1;
            }),
            (t.prototype.setRowValue = function (t, e, r) {
              for (var n = 0, i = t; n < i.length; n++) {
                var a = i[n];
                if (a.header.toUpperCase() === e.toUpperCase())
                  return (
                    (a.value = r),
                    (a.onGetUrl = function (t, e) {
                      return o.j.mapHeaderToURL(t, e);
                    }),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.parse = function (t) {
              var e, r;
              if (((this._source = t), t)) {
                t = t.replace(/\(null\)/g, "");
                var n = (t = (t += ";").replace(/;+/g, ";")).match(
                  /(.*?):(.*?);/g
                );
                if (((this._unparsed = ""), n))
                  for (var o = 0; o < n.length; o++) {
                    var i =
                      null === (e = n[o]) || void 0 === e
                        ? void 0
                        : e.match(/(.*?):(.*?);/m);
                    i &&
                      i[1] &&
                      (this.setRowValue(
                        this.rows,
                        i[1],
                        null !== (r = i[2]) && void 0 !== r ? r : ""
                      ) ||
                        (this._unparsed += i[1] + ":" + i[2] + ";"));
                  }
                this.setRowValue(this.rows, "source", this._source),
                  this.setRowValue(this.rows, "unparsed", this._unparsed);
              }
            }),
            (t.prototype.addInternal = function (t) {
              this.parse(t);
            }),
            (t.prototype.add = function (t) {
              return (
                t.header.toUpperCase() ===
                  "X-Microsoft-Antispam".toUpperCase() &&
                (this.parse(t.value), !0)
              );
            }),
            (t.prototype.exists = function () {
              return this.existsInternal(this.rows);
            }),
            Object.defineProperty(t.prototype, "source", {
              get: function () {
                return this._source;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "unparsed", {
              get: function () {
                return this._unparsed;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "rows", {
              get: function () {
                return this.antiSpamRows;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              if (!this.exists()) return "";
              var t = ["AntiSpamReport"];
              return (
                this.rows.forEach(function (e) {
                  e.value && t.push(e.toString());
                }),
                t.join("\n")
              );
            }),
            t
          );
        })();
    },
    7009: function (t, e, r) {
      r.d(e, {
        t: function () {
          return u;
        },
      });
      var n,
        o = r(3772),
        i = r(9572),
        a = r(1326),
        s =
          ((n = function (t, e) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }),
              n(t, e)
            );
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        u = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.forefrontAntiSpamRows = [
                new a.X2("ARC", o.C.mhaArc, "X-Forefront-Antispam-Report"),
                new a.X2(
                  "CTRY",
                  o.C.mhaCountryRegion,
                  "X-Forefront-Antispam-Report"
                ),
                new a.X2("LANG", o.C.mhaLang, "X-Forefront-Antispam-Report"),
                new a.X2("SCL", o.C.mhaScl, "X-MS-Exchange-Organization-SCL"),
                new a.X2("PCL", o.C.mhaPcl, "X-Forefront-Antispam-Report"),
                new a.X2("SFV", o.C.mhaSfv, "X-Forefront-Antispam-Report"),
                new a.X2("IPV", o.C.mhaIpv, "X-Forefront-Antispam-Report"),
                new a.X2("H", o.C.mhaHelo, "X-Forefront-Antispam-Report"),
                new a.X2("PTR", o.C.mhaPtr, "X-Forefront-Antispam-Report"),
                new a.X2("CIP", o.C.mhaCip, "X-Forefront-Antispam-Report"),
                new a.X2("CAT", o.C.mhaCat, "X-Forefront-Antispam-Report"),
                new a.X2("SFTY", o.C.mhaSfty, "X-Forefront-Antispam-Report"),
                new a.X2("SRV", o.C.mhaSrv, "X-Forefront-Antispam-Report"),
                new a.X2(
                  "X-CustomSpam",
                  o.C.mhaCustomSpam,
                  "X-Forefront-Antispam-Report"
                ),
                new a.X2("SFS", o.C.mhaSfs, "SFS"),
                new a.X2("source", o.C.mhaSource, "X-Microsoft-Antispam"),
                new a.X2("unparsed", o.C.mhaUnparsed, "X-Microsoft-Antispam"),
              ]),
              e
            );
          }
          return (
            s(e, t),
            (e.prototype.add = function (t) {
              return (
                t.header.toUpperCase() ===
                  "X-Forefront-Antispam-Report".toUpperCase() &&
                (this.parse(t.value), !0)
              );
            }),
            Object.defineProperty(e.prototype, "rows", {
              get: function () {
                return this.forefrontAntiSpamRows;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.toString = function () {
              if (!this.exists()) return "";
              var t = ["ForefrontAntiSpamReport"];
              return (
                this.rows.forEach(function (e) {
                  e.value && t.push(e.toString());
                }),
                t.join("\n")
              );
            }),
            e
          );
        })(i.g);
    },
    6303: function (t, e, r) {
      r.d(e, {
        f: function () {
          return v;
        },
      });
      var n,
        o = r(9572),
        i = r(7009),
        a = r(655),
        s = r(7473),
        u = r(3968),
        c = r(1326),
        p =
          ((n = function (t, e) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }),
              n(t, e)
            );
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        h = (function (t) {
          function e(e, r, n) {
            var o = t.call(this, r, "", "") || this;
            return (
              (o.number = e), (o.value = n), (o.url = u.j.mapHeaderToURL(r)), o
            );
          }
          return (
            p(e, t),
            (e.prototype.toString = function () {
              return this.header + ": " + this.value;
            }),
            e
          );
        })(c.X2),
        f = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e._otherRows = []),
              (e._sortColumn = "number"),
              (e._sortOrder = 1),
              (e.tableName = "otherHeaders"),
              e
            );
          }
          return (
            p(e, t),
            (e.prototype.doSort = function (t) {
              var e = this;
              this._sortColumn === t
                ? (this._sortOrder *= -1)
                : ((this._sortColumn = t), (this._sortOrder = 1)),
                this.rows[0] &&
                  this._sortColumn + "Sort" in this.rows[0] &&
                  (t += "Sort"),
                this.rows.sort(function (r, n) {
                  return e._sortOrder * (r[t] < n[t] ? -1 : 1);
                });
            }),
            (e.prototype.add = function (t) {
              return !(
                (!t.header && !t.value) ||
                (this.rows.push(new h(this.rows.length + 1, t.header, t.value)),
                0)
              );
            }),
            (e.prototype.exists = function () {
              return this.rows.length > 0;
            }),
            Object.defineProperty(e.prototype, "rows", {
              get: function () {
                return this._otherRows;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.toString = function () {
              if (!this.exists()) return "";
              var t = ["Other"];
              return (
                this.rows.forEach(function (e) {
                  e.value && t.push(e.value);
                }),
                t.join("\n")
              );
            }),
            e
          );
        })(s.h),
        l = r(4970),
        d = r(1180),
        m = function (t, e) {
          (this.header = t), (this.value = e);
        },
        v = (function () {
          function t(t) {
            (this.summary = new c.ER()),
              (this.receivedHeaders = new l.N()),
              (this.forefrontAntiSpamReport = new i.t()),
              (this.antiSpamReport = new o.g()),
              (this.otherHeaders = new f()),
              (this.originalHeaders = ""),
              (this._status = ""),
              (this._hasData = !1),
              t &&
                (this.parseHeaders(t),
                d.C.postMessageToParent("modelToString", toString()));
          }
          return (
            Object.defineProperty(t.prototype, "hasData", {
              get: function () {
                return this._hasData || !!this._status;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "status", {
              get: function () {
                return this._status;
              },
              set: function (t) {
                this._status = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.GetHeaderList = function (t) {
              var e,
                r = t.split(/[\n\r]+/),
                n = [],
                o = 0;
              return (
                r.forEach(function (t) {
                  var r;
                  if ("" !== t) {
                    var i = t.match(/(^[\w-.]*?): ?(.*)/);
                    if (i && i[1] && !i[1].match(/^\d{1,2}$/))
                      (n[o] = new m(
                        i[1],
                        null !== (r = i[2]) && void 0 !== r ? r : ""
                      )),
                        (e = n[o]),
                        o++;
                    else if (o > 0) {
                      if (!(t = t.replace(/^[\s]+/, ""))) return;
                      if (e) {
                        var a = e.value ? " " : "";
                        e.value += a + t;
                      }
                    } else
                      t.match(/\S/g) &&
                        ((n[o] = new m("", t)), (e = n[o]), o++);
                  }
                }),
                n.forEach(function (t) {
                  t.value = a.h
                    .clean2047Encoding(t.value)
                    .replace(/\0/g, "")
                    .replace(/[\n\r]+$/, "");
                }),
                n
              );
            }),
            (t.prototype.parseHeaders = function (t) {
              var e = this;
              this.originalHeaders = t.replace(/(?:\r\n|\r|\n)/g, "\n");
              var r = this.GetHeaderList(t);
              r.length > 0 && (this._hasData = !0),
                r.forEach(function (t) {
                  e.summary.add(t) ||
                    e.forefrontAntiSpamReport.add(t) ||
                    e.antiSpamReport.add(t) ||
                    e.receivedHeaders.add(t) ||
                    e.otherHeaders.add(t);
                }),
                (this.summary.totalTime = this.receivedHeaders.computeDeltas());
            }),
            (t.prototype.toString = function () {
              var t = [];
              return (
                this.summary.exists() && t.push(this.summary.toString()),
                this.receivedHeaders.exists() &&
                  t.push(this.receivedHeaders.toString()),
                this.forefrontAntiSpamReport.exists() &&
                  t.push(this.forefrontAntiSpamReport.toString()),
                this.antiSpamReport.exists() &&
                  t.push(this.antiSpamReport.toString()),
                this.otherHeaders.exists() &&
                  t.push(this.otherHeaders.toString()),
                t.join("\n\n")
              );
            }),
            t
          );
        })();
    },
    4970: function (t, e, r) {
      r.d(e, {
        N: function () {
          return l;
        },
      });
      var n = r(7473),
        o = r(3772),
        i = r(7322),
        a = r(4481),
        s = function (t, e) {
          var r = this;
          (this.toString = function () {
            return r.date;
          }),
            (this.dateNum = t),
            (this.date = e);
        },
        u = (function () {
          function t() {}
          return (
            (t.parseDate = function (t) {
              var e = (t = (t = t.replace(
                  /\s*(\d{4})-(\d{1,2})-(\d{1,2})/g,
                  "$2/$3/$1"
                )).replace(
                  /\s*(\d{1,2})-(\d{1,2})-(\d{4})/g,
                  "$1/$2/$3"
                )).match(/[+|-]\d{4}/),
                r = t,
                n = !1;
              (e && 1 === e.length) || ((t += " +0000"), (n = !0));
              var o = t.match(/\d{1,2}:\d{2}:\d{2}.(\d+)/);
              if (((t = t.replace(/(\d{1,2}:\d{2}:\d{2}).(\d+)/, "$1")), i)) {
                var a = i(t);
                return (
                  !a.isValid() && n && (a = i(r + " 12:00:00 AM +0000")),
                  o &&
                    o.length >= 2 &&
                    (a = a.add(
                      Math.floor(1e3 * parseFloat("0." + o[1])),
                      "ms"
                    )),
                  new s(a.valueOf(), a.format("l LTS"))
                );
              }
              var u = Date.parse(t);
              return (
                o &&
                  o.length >= 2 &&
                  (u += Math.floor(1e3 * parseFloat("0." + o[1]))),
                new s(u, new Date(u).toLocaleString().replace(/\u200E|,/g, ""))
              );
            }),
            t
          );
        })();
      i.extend(a);
      var c,
        p =
          ((c = function (t, e) {
            return (
              (c =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }),
              c(t, e)
            );
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            c(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        h = (function () {
          function t(t, e) {
            (this.label = t), (this.value = void 0 !== e ? e : "");
          }
          return (
            (t.prototype.toString = function () {
              return this.value;
            }),
            t
          );
        })(),
        f = (function () {
          function t(t) {
            (this.sourceHeader = new h("", t)),
              (this.hop = new h(o.C.mhaReceivedHop)),
              (this.from = new h(o.C.mhaReceivedFrom)),
              (this.by = new h(o.C.mhaReceivedBy)),
              (this.with = new h(o.C.mhaReceivedWith)),
              (this.id = new h(o.C.mhaReceivedId)),
              (this.for = new h(o.C.mhaReceivedFor)),
              (this.via = new h(o.C.mhaReceivedVia)),
              (this.date = new h(o.C.mhaReceivedDate)),
              (this.delay = new h(o.C.mhaReceivedDelay)),
              (this.percent = new h(o.C.mhaReceivedPercent, 0)),
              (this.delaySort = new h("", -1)),
              (this.dateNum = new h(""));
          }
          return (
            (t.prototype.setField = function (t, e) {
              if (!t || !e) return !1;
              var r = this[t.toLowerCase()];
              return (
                !!r && (r.value ? (r.value += "; " + e) : (r.value = e), !1)
              );
            }),
            (t.prototype.toString = function () {
              var t = [];
              for (var e in this) {
                var r = this[e];
                r &&
                  r.label &&
                  r.toString() &&
                  t.push(r.label + ": " + r.toString());
              }
              return t.join("\n");
            }),
            t
          );
        })(),
        l = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e._receivedRows = []),
              (e._sortColumn = "hop"),
              (e._sortOrder = 1),
              (e.tableName = "receivedHeaders"),
              e
            );
          }
          return (
            p(e, t),
            (e.prototype.parseHeader = function (t) {
              var e,
                r,
                n,
                o,
                i,
                a,
                s = new f(t);
              if (t) {
                var c = (t = (t = t.replace(/\r|\n|\r\n/g, " ")).replace(
                  /UTC|\(UTC\)/gi,
                  "(UTC)"
                )).lastIndexOf(";");
                if (
                  (-1 === c &&
                    (c = (t = t.replace(
                      /\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/g,
                      "; $1"
                    )).lastIndexOf(";")),
                  -1 === c &&
                    (c = (t = t.replace(
                      /\s*(\d{4}-\d{1,2}-\d{1,2})/g,
                      "; $1"
                    )).lastIndexOf(";")),
                  -1 !== c && t.length !== c + 1)
                ) {
                  var p = t.substring(c + 1);
                  t = t.substring(0, c);
                  var h = u.parseDate(p);
                  h && ((s.date.value = h.date), (s.dateNum.value = h.dateNum));
                }
                var l = t.match(
                  /(.*)by (.*? \(Postfix, from userid .*?\))(.*)/im
                );
                l &&
                  (s.setField(
                    "by",
                    null !== (e = l[2]) && void 0 !== e ? e : ""
                  ),
                  (t = ""
                    .concat(null !== (r = l[1]) && void 0 !== r ? r : "")
                    .concat(null !== (n = l[3]) && void 0 !== n ? n : "")));
                var d = t.match(/(.*)\((qmail .*? invoked from .*?)\)(.*)/im);
                d &&
                  (s.setField(
                    "by",
                    null !== (o = d[2]) && void 0 !== o ? o : ""
                  ),
                  (t = ""
                    .concat(null !== (i = d[1]) && void 0 !== i ? i : "")
                    .concat(null !== (a = d[3]) && void 0 !== a ? a : "")));
                var m,
                  v = t.split(/\s+/),
                  y = [];
                for (m in s)
                  v.some(function (t, e) {
                    m.toLowerCase() === t.toLowerCase() &&
                      y.push({ fieldName: m, iToken: e });
                  });
                y.sort(function (t, e) {
                  return t.iToken - e.iToken;
                }),
                  y.forEach(function (t, e) {
                    var r, n;
                    (n =
                      e + 1 < y.length
                        ? null === (r = y[e + 1]) || void 0 === r
                          ? void 0
                          : r.iToken
                        : v.length),
                      s.setField(
                        t.fieldName,
                        v
                          .slice(t.iToken + 1, n)
                          .join(" ")
                          .trim()
                      );
                  });
              }
              return s;
            }),
            (e.prototype.exists = function () {
              return this.rows.length > 0;
            }),
            (e.prototype.doSort = function (t) {
              var e = this;
              this.sortColumn === t
                ? (this._sortOrder *= -1)
                : ((this._sortColumn = t), (this._sortOrder = 1)),
                this.rows[0] &&
                  this.sortColumn + "Sort" in this.rows[0] &&
                  (t += "Sort"),
                this.rows.sort(function (r, n) {
                  var o = r[t];
                  if (!o) return 1;
                  var i = n[t];
                  return i ? e.sortOrder * (o < i ? -1 : 1) : -1;
                });
            }),
            (e.prototype.addInternal = function (t) {
              this.rows.push(this.parseHeader(t));
            }),
            (e.prototype.add = function (t) {
              return (
                t.header.toUpperCase() === "Received".toUpperCase() &&
                (this.rows.push(this.parseHeader(t.value)), !0)
              );
            }),
            (e.computeTime = function (t, e) {
              var r = [];
              if (isNaN(t) || isNaN(e)) return "";
              var n,
                i = t - e,
                a = !1;
              return Math.abs(i) < 1e3
                ? "0 " + o.C.mhaSeconds
                : (i < 0 && (r.push(o.C.mhaNegative), (i = -i)),
                  i >= 6e4 &&
                    ((n = Math.floor(i / 1e3 / 60)),
                    r.push(n.toString(), " "),
                    1 === n ? r.push(o.C.mhaMinute) : r.push(o.C.mhaMinutes),
                    (i -= 1e3 * n * 60),
                    (a = !0)),
                  a && i && r.push(" "),
                  (a && !i) ||
                    ((n = Math.floor(i / 1e3)),
                    r.push(n.toString(), " "),
                    1 === n ? r.push(o.C.mhaSecond) : r.push(o.C.mhaSeconds)),
                  r.join(""));
            }),
            (e.prototype.computeDeltas = function () {
              this.rows.reverse();
              var t = 0,
                r = 0,
                n = NaN,
                o = 0;
              return (
                this.rows.forEach(function (e) {
                  isNaN(e.dateNum.value) ||
                    (!isNaN(n) &&
                      n < e.dateNum.value &&
                      (o += e.dateNum.value - n),
                    (t = t || e.dateNum.value),
                    (r = e.dateNum.value),
                    (n = e.dateNum.value));
                }),
                (n = NaN),
                this.rows.forEach(function (t, r) {
                  (t.hop.value = r + 1),
                    (t.delay.value = e.computeTime(t.dateNum.value, n)),
                    isNaN(t.dateNum.value) ||
                      isNaN(n) ||
                      0 === o ||
                      ((t.delaySort.value = t.dateNum.value - n),
                      t.delaySort.value > 0 &&
                        (t.percent.value = (100 * t.delaySort.value) / o)),
                    isNaN(t.dateNum.value) || (n = t.dateNum.value);
                }),
                r !== t ? e.computeTime(r, t) : ""
              );
            }),
            Object.defineProperty(e.prototype, "rows", {
              get: function () {
                return this._receivedRows;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.toString = function () {
              if (!this.exists()) return "";
              var t = ["Received"],
                e = [];
              return (
                this.rows.forEach(function (t) {
                  e.push(t);
                }),
                e.length && t.push(e.join("\n\n")),
                t.join("\n")
              );
            }),
            e
          );
        })(n.h);
    },
    1326: function (t, e, r) {
      r.d(e, {
        ER: function () {
          return h;
        },
        X2: function () {
          return s;
        },
      });
      var n,
        o = r(3772),
        i = r(3968),
        a =
          ((n = function (t, e) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }),
              n(t, e)
            );
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        s = (function () {
          function t(t, e, r) {
            (this.header = t),
              (this.label = e),
              (this.headerName = r),
              (this.url = ""),
              (this._value = "");
          }
          return (
            Object.defineProperty(t.prototype, "value", {
              get: function () {
                return this._value;
              },
              set: function (t) {
                this._value = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "valueUrl", {
              get: function () {
                return this.onGetUrl
                  ? this.onGetUrl(this.headerName, this._value)
                  : "";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return this.label + ": " + this.value;
            }),
            t
          );
        })(),
        u = (function (t) {
          function e(e, r) {
            var n = t.call(this, e, r, "") || this;
            return (n.url = i.j.mapHeaderToURL(e, r)), n;
          }
          return a(e, t), e;
        })(s),
        c = (function (t) {
          function e(e, r) {
            var n = t.call(this, e, r) || this;
            return (n.url = i.j.mapHeaderToURL(e, r)), (n.postFix = ""), n;
          }
          return (
            a(e, t),
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this._value + this.postFix;
              },
              set: function (t) {
                this._value = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(u),
        p = (function (t) {
          function e(e, r) {
            var n = t.call(this, e, r) || this;
            return (n.url = i.j.mapHeaderToURL(e, r)), n;
          }
          return (
            a(e, t),
            Object.defineProperty(e.prototype, "valueUrl", {
              get: function () {
                return i.j.mapValueToURL(this._value);
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(u),
        h = (function () {
          function t() {
            (this._totalTime = ""),
              (this.dateRow = new c("Date", o.C.mhaCreationTime)),
              (this.archivedRow = new p("Archived-At", o.C.mhaArchivedAt)),
              (this.summaryRows = [
                new u("Subject", o.C.mhaSubject),
                new u("Message-ID", o.C.mhaMessageId),
                this.archivedRow,
                this.dateRow,
                new u("From", o.C.mhaFrom),
                new u("Reply-To", o.C.mhaReplyTo),
                new u("To", o.C.mhaTo),
                new u("CC", o.C.mhaCc),
              ]);
          }
          return (
            (t.prototype.creationPostFix = function (t) {
              return t
                ? " "
                    .concat(o.C.mhaDeliveredStart, " ")
                    .concat(t)
                    .concat(o.C.mhaDeliveredEnd)
                : "";
            }),
            (t.prototype.exists = function () {
              var t;
              return (
                this.rows.forEach(function (e) {
                  !t && e.value && (t = e);
                }),
                void 0 !== t
              );
            }),
            (t.prototype.add = function (t) {
              return (
                !!t &&
                (this.rows.forEach(function (r) {
                  e ||
                    r.header.toUpperCase() !== t.header.toUpperCase() ||
                    (e = r);
                }),
                !!e && ((e.value = t.value), !0))
              );
              var e;
            }),
            Object.defineProperty(t.prototype, "rows", {
              get: function () {
                return this.summaryRows;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "totalTime", {
              get: function () {
                return this._totalTime;
              },
              set: function (t) {
                (this._totalTime = t),
                  (this.dateRow.postFix = this.creationPostFix(t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              if (!this.exists()) return "";
              var t = ["Summary"];
              return (
                this.rows.forEach(function (e) {
                  e.value && t.push(e.toString());
                }),
                t.join("\n")
              );
            }),
            t
          );
        })();
    },
    7473: function (t, e, r) {
      r.d(e, {
        h: function () {
          return n;
        },
      });
      var n = (function () {
        function t() {}
        return (
          Object.defineProperty(t.prototype, "sortColumn", {
            get: function () {
              return this._sortColumn;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "sortOrder", {
            get: function () {
              return this._sortOrder;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
    },
  },
]);
