"use strict";
(self.webpackChunkmha = self.webpackChunkmha || []).push([
  [253],
  {
    2884: function (e, n, t) {
      var o,
        r,
        s = t(1271),
        a = t(3772),
        c = t(3968),
        u = t(6303),
        i = t(6934),
        l = t(9220);
      function d(e) {
        s("#status").text(e),
          null !== o && (o.status = e),
          r.recalculateVisibility();
      }
      function p() {
        const newLocal = "#inputHeaders";
        s &&
          (i.g.trackEvent({ name: "analyzeHeaders" }),
          (o = new u.f(s(newLocal).val())),
          r.resetArrows(),
          s("#response").css("background-image", "url(../images/loader.gif)"),
          s("#response").css("background-repeat", "no-repeat"),
          s("#response").css("background-position", "center"),
          d(a.C.mhaLoading),
          r.rebuildTables(o),
          d(""),
          s("#response").css("background", "none"));
      }
      function f() {
        s("#inputHeaders").val(""),
          (o = new u.f()),
          r.resetArrows(),
          r.rebuildSections(o);
      }
      function b() {
        c.j.copyToClipboard(o.toString());
      }
      s &&
        s(document).ready(function () {
          i.g.set("API used", "standalone"),
            (o = new u.f()),
            (r = new l.i()).initializeTableUI(o),
            r.makeResizablePane("inputHeaders", a.C.mhaPrompt, function () {
              return !0;
            }),
            (document.querySelector("#analyzeButton").onclick = p),
            (document.querySelector("#clearButton").onclick = f),
            (document.querySelector("#copyButton").onclick = b);
        });
    },
  },
  function (e) {
    e.O(0, [428, 441, 469, 934, 303, 831, 529], function () {
      return 2884, e((e.s = 2884));
    }),
      e.O();
  },
]);
