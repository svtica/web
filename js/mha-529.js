"use strict";
(self.webpackChunkmha = self.webpackChunkmha || []).push([
  [529],
  {
    9220: function (e, a, t) {
      t.d(a, {
        i: function () {
          return s;
        },
      });
      var i = t(1271),
        l = t(3772),
        r = t(7473),
        n = function (e, a, t) {
          (this.id = e), (this.label = a), (this.class = t);
        },
        s = (function () {
          function e() {
            (this.viewModel = {}),
              (this.showExtra = !1),
              (this.visibilityBindings = [
                {
                  name: "#lineBreak",
                  visible: function (e) {
                    return e.viewModel.hasData;
                  },
                },
                {
                  name: "#response",
                  visible: function (e) {
                    return e.viewModel.hasData;
                  },
                },
                {
                  name: "#status",
                  visible: function (e) {
                    return !!e.viewModel.status;
                  },
                },
                {
                  name: ".extraCol",
                  visible: function (e) {
                    return e.showExtra;
                  },
                },
                {
                  name: "#clearButton",
                  visible: function (e) {
                    return e.viewModel.hasData;
                  },
                },
                {
                  name: "#copyButton",
                  visible: function (e) {
                    return e.viewModel.hasData;
                  },
                },
              ]);
          }
          return (
            (e.prototype.positionResponse = function () {
              var e,
                a,
                t = i("#lineBreak");
              if (t && t[0]) {
                var l =
                  (null === (e = t[0]) || void 0 === e ? void 0 : e.offsetTop) +
                  (null !== (a = t.height()) && void 0 !== a ? a : 0);
                i("#response").css("top", l + 15);
              }
            }),
            (e.prototype.toggleCollapse = function (e) {
              i(
                ".collapsibleElement",
                i(e).parents(".collapsibleWrapper")
              ).toggle(),
                this.positionResponse();
            }),
            (e.prototype.makeResizablePane = function (e, a, t) {
              var l = i("#" + e);
              if (!l.hasClass("collapsibleElement")) {
                var r = l.hasClass("hiddenElement");
                l.addClass("collapsibleElement");
                var n = i(document.createElement("div"));
                n.addClass("collapsibleWrapper"),
                  t &&
                    (n.attr("id", e + "Wrapper"),
                    this.visibilityBindings.push({
                      name: "#" + e + "Wrapper",
                      visible: t,
                    }));
                var s = i(document.createElement("div"));
                s.addClass("sectionHeader"),
                  s.bind("click", this, function (e) {
                    var a = e.data;
                    a && a.toggleCollapse(e.currentTarget);
                  }),
                  s.text(a);
                var o = i(document.createElement("span"));
                o.addClass("collapsibleSwitch"),
                  o.addClass("collapsibleElement"),
                  o.html("+&nbsp;");
                var d = i(document.createElement("span"));
                d.addClass("collapsibleSwitch"),
                  d.addClass("collapsibleElement"),
                  d.html("&ndash;&nbsp;"),
                  l.wrap(n),
                  l.before(s),
                  s.append(o),
                  s.append(d),
                  r ? d.hide() : o.hide();
              }
            }),
            (e.prototype.makeVisible = function (e, a) {
              a
                ? i(e).removeClass("hiddenElement")
                : i(e).addClass("hiddenElement");
            }),
            (e.prototype.makeSummaryTable = function (e, a, t) {
              var l = this,
                r = i(e);
              r &&
                (r.addClass("summaryList"),
                a.forEach(function (e) {
                  var a = e.header + t,
                    n = document.createElement("tr");
                  if (null !== n) {
                    (n.id = a), r.append(n);
                    var s = i(n.insertCell(-1));
                    s &&
                      (e.url ? s.html(e.url) : s.text(e.label),
                      s.addClass("summaryHeader"));
                    var o = i(n.insertCell(-1));
                    o && o.attr("id", a + "Val"), l.makeVisible("#" + a, !1);
                  }
                }));
            }),
            (e.prototype.setArrows = function (e, a, t) {
              i("#" + e + " .tableHeader .downArrow").addClass("hiddenElement"),
                i("#" + e + " .tableHeader .upArrow").addClass("hiddenElement"),
                1 === t
                  ? i(
                      "#" + e + " .tableHeader #" + a + " .downArrow"
                    ).removeClass("hiddenElement")
                  : i(
                      "#" + e + " .tableHeader #" + a + " .upArrow"
                    ).removeClass("hiddenElement");
            }),
            (e.prototype.setRowValue = function (e, a) {
              var t = i("#" + e.header + a + "Val");
              t &&
                (e.value
                  ? (e.valueUrl ? t.html(e.valueUrl) : t.text(e.value),
                    this.makeVisible("#" + e.header + a, !0))
                  : (t.text(""), this.makeVisible("#" + e.header + a, !1)));
            }),
            (e.prototype.appendCell = function (e, a, t, l) {
              var r = i(e.insertCell(-1));
              a && r.text(a), t && r.html(t), l && r.addClass(l);
            }),
            (e.prototype.emptyTableUI = function (e) {
              i("#" + e + " tbody tr").remove(),
                i("#" + e + " th").removeClass("emptyColumn"),
                i("#" + e + " th").removeClass("hiddenElement");
            }),
            (e.prototype.recalculateVisibility = function () {
              var e = this;
              this.visibilityBindings.forEach(function (a) {
                e.makeVisible(a.name, a.visible(e));
              }),
                this.positionResponse();
            }),
            (e.prototype.hideEmptyColumns = function (e) {
              i("#" + e + " th").each(function (e) {
                var a = 0,
                  t = i(this)
                    .parents("table")
                    .find("tr td:nth-child(" + (e + 1).toString() + ")");
                t.each(function () {
                  "" !== this.innerHTML && a++;
                }),
                  0 === a
                    ? (i(this).addClass("emptyColumn"),
                      t.addClass("emptyColumn"))
                    : (i(this).removeClass("emptyColumn"),
                      t.removeClass("emptyColumn"));
              });
            }),
            (e.prototype.rebuildSections = function (e) {
              var a = this;
              (this.viewModel = e),
                this.viewModel.summary.rows.forEach(function (e) {
                  a.setRowValue(e, "SUM");
                }),
                this.emptyTableUI("receivedHeaders"),
                this.viewModel.receivedHeaders.rows.forEach(function (e) {
                  var t = document.createElement("tr");
                  i("#receivedHeaders").append(t),
                    a.appendCell(t, e.hop.value, "", ""),
                    a.appendCell(t, e.from.value, "", ""),
                    a.appendCell(t, e.by.value, "", ""),
                    a.appendCell(t, e.date.value, "", "");
                  var l = "hotBarLabel";
                  e.delaySort.value < 0 && (l += " negativeCell");
                  var r =
                    "<div class='hotBarContainer'>   <div class='" +
                    l +
                    "'>" +
                    e.delay +
                    "</div>   <div class='hotBarBar' style='width:" +
                    e.percent +
                    "%'></div></div>";
                  a.appendCell(t, "", r, "hotBarCell"),
                    a.appendCell(t, e.with.value, "", ""),
                    a.appendCell(t, e.id.value, "", "extraCol"),
                    a.appendCell(t, e.for.value, "", "extraCol"),
                    a.appendCell(t, e.via.value, "", "extraCol");
                }),
                i(".hotBarCell").each(function () {
                  var e = i(this).height();
                  e && i(this).find(".hotBarContainer").height(e);
                }),
                i("#receivedHeaders tbody tr:odd").addClass("oddRow"),
                this.hideEmptyColumns("receivedHeaders"),
                this.viewModel.forefrontAntiSpamReport.rows.forEach(function (
                  e
                ) {
                  a.setRowValue(e, "FFAS");
                }),
                this.viewModel.antiSpamReport.rows.forEach(function (e) {
                  a.setRowValue(e, "AS");
                }),
                this.emptyTableUI("otherHeaders"),
                this.viewModel.otherHeaders.rows.forEach(function (e) {
                  var t = document.createElement("tr");
                  i("#otherHeaders").append(t),
                    a.appendCell(t, e.number.toString(), "", ""),
                    a.appendCell(t, e.header, e.url, ""),
                    a.appendCell(t, e.value, "", "allowBreak");
                }),
                i("#otherHeaders tbody tr:odd").addClass("oddRow"),
                i("#originalHeaders").text(this.viewModel.originalHeaders),
                this.recalculateVisibility();
            }),
            (e.prototype.makeSortableColumn = function (e, a) {
              var t = i("#" + a);
              t.bind("click", this, function (t) {
                var i = t.data;
                if (i && i.viewModel[e] instanceof r.h) {
                  var l = i.viewModel[e];
                  l.doSort(a),
                    i.setArrows(l.tableName, l.sortColumn, l.sortOrder),
                    i.rebuildSections(i.viewModel);
                }
              });
              var l = i(document.createElement("span"));
              l.addClass("downArrow"),
                l.addClass("hiddenElement"),
                l.html("&darr;");
              var n = i(document.createElement("span"));
              n.addClass("upArrow"),
                n.addClass("hiddenElement"),
                n.html("&uarr;"),
                t.append(l),
                t.append(n);
            }),
            (e.prototype.addColumns = function (e, a) {
              var t = this,
                l = i(document.createElement("thead"));
              if (null !== l) {
                i("#" + e).append(l);
                var r = i(document.createElement("tr"));
                null !== r &&
                  (r.addClass("tableHeader"),
                  l.append(r),
                  a.forEach(function (a) {
                    var l = i(document.createElement("th"));
                    null !== l &&
                      (l.attr("id", a.id),
                      l.text(a.label),
                      null !== a.class && l.addClass(a.class),
                      r.append(l)),
                      t.makeSortableColumn(e, a.id);
                  }));
              }
            }),
            (e.prototype.makeResizableTable = function (e, a, t) {
              var l = i("#" + e);
              if (!l.hasClass("collapsibleElement")) {
                l.addClass("collapsibleElement");
                var r = i(document.createElement("div"));
                r.addClass("collapsibleWrapper"),
                  t &&
                    (r.attr("id", e + "Wrapper"),
                    this.visibilityBindings.push({
                      name: "#" + e + "Wrapper",
                      visible: t,
                    }));
                var n = i(document.createElement("div"));
                n.addClass("tableCaption"),
                  n.bind("click", this, function (e) {
                    var a = e.data;
                    a && a.toggleCollapse(e.currentTarget);
                  }),
                  n.text(a);
                var s = i(document.createElement("span"));
                s.addClass("collapsibleSwitch"),
                  s.html("+&nbsp;"),
                  n.append(s),
                  n.addClass("collapsibleElement");
                var o = i(document.createElement("div"));
                o.addClass("tableCaption"),
                  o.bind("click", this, function (e) {
                    var a = e.data;
                    a && a.toggleCollapse(e.currentTarget);
                  }),
                  o.text(a);
                var d = i(document.createElement("span"));
                d.addClass("collapsibleSwitch"),
                  d.html("&ndash;&nbsp;"),
                  o.append(d);
                var p = i(document.createElement("tbody"));
                l.wrap(r),
                  l.before(n),
                  l.append(p),
                  i(l[0].createCaption()).prepend(o),
                  n.hide();
              }
            }),
            (e.prototype.hideExtraColumns = function () {
              (this.showExtra = !1),
                i("#leftArrow").addClass("hiddenElement"),
                i("#rightArrow").removeClass("hiddenElement");
            }),
            (e.prototype.showExtraColumns = function () {
              (this.showExtra = !0),
                i("#rightArrow").addClass("hiddenElement"),
                i("#leftArrow").removeClass("hiddenElement");
            }),
            (e.prototype.toggleExtraColumns = function () {
              this.showExtra
                ? this.hideExtraColumns()
                : this.showExtraColumns(),
                this.recalculateVisibility();
            }),
            (e.prototype.resetArrows = function () {
              this.setArrows("receivedHeaders", "hop", 1),
                this.setArrows("otherHeaders", "number", 1);
            }),
            (e.prototype.initializeTableUI = function (e) {
              (this.viewModel = e),
                this.makeResizablePane(
                  "originalHeaders",
                  l.C.mhaOriginalHeaders,
                  function (e) {
                    return e.viewModel.originalHeaders.length > 0;
                  }
                ),
                i(
                  ".collapsibleElement",
                  i("#originalHeaders").parents(".collapsibleWrapper")
                ).toggle(),
                this.makeResizablePane("summary", l.C.mhaSummary, function (e) {
                  return e.viewModel.summary.exists();
                }),
                this.makeSummaryTable(
                  "#summary",
                  this.viewModel.summary.rows,
                  "SUM"
                ),
                this.makeResizableTable(
                  "receivedHeaders",
                  l.C.mhaReceivedHeaders,
                  function (e) {
                    return e.viewModel.receivedHeaders.exists();
                  }
                );
              var a = [
                new n("hop", l.C.mhaReceivedHop, ""),
                new n("from", l.C.mhaReceivedSubmittingHost, ""),
                new n("by", l.C.mhaReceivedReceivingHost, ""),
                new n("date", l.C.mhaReceivedTime, ""),
                new n("delay", l.C.mhaReceivedDelay, ""),
                new n("with", l.C.mhaReceivedType, ""),
                new n("id", l.C.mhaReceivedId, "extraCol"),
                new n("for", l.C.mhaReceivedFor, "extraCol"),
                new n("via", l.C.mhaReceivedVia, "extraCol"),
              ];
              this.addColumns(this.viewModel.receivedHeaders.tableName, a);
              var t = i("#receivedHeaders #with");
              if (null !== t) {
                var r = i(document.createElement("span"));
                r.attr("id", "leftArrow"),
                  r.addClass("collapsibleArrow"),
                  r.addClass("hiddenElement"),
                  r.html("&lArr;");
                var s = i(document.createElement("span"));
                s.attr("id", "rightArrow"),
                  s.addClass("collapsibleArrow"),
                  s.html("&rArr;"),
                  t.append(r),
                  t.append(s);
              }
              i("#receivedHeaders .collapsibleArrow").bind(
                "click",
                this,
                function (e) {
                  var a = e.data;
                  a && (a.toggleExtraColumns(), e.stopPropagation());
                }
              ),
                this.makeResizablePane(
                  "forefrontAntiSpamReport",
                  l.C.mhaForefrontAntiSpamReport,
                  function (e) {
                    return e.viewModel.forefrontAntiSpamReport.exists();
                  }
                ),
                this.makeSummaryTable(
                  "#forefrontAntiSpamReport",
                  this.viewModel.forefrontAntiSpamReport.rows,
                  "FFAS"
                ),
                this.makeResizablePane(
                  "antiSpamReport",
                  l.C.mhaAntiSpamReport,
                  function (e) {
                    return e.viewModel.antiSpamReport.exists();
                  }
                ),
                this.makeSummaryTable(
                  "#antiSpamReport",
                  this.viewModel.antiSpamReport.rows,
                  "AS"
                ),
                this.makeResizableTable(
                  "otherHeaders",
                  l.C.mhaOtherHeaders,
                  function (e) {
                    return e.viewModel.otherHeaders.rows.length > 0;
                  }
                );
              var o = [
                new n("number", l.C.mhaNumber, ""),
                new n("header", l.C.mhaHeader, ""),
                new n("value", l.C.mhaValue, ""),
              ];
              this.addColumns(this.viewModel.otherHeaders.tableName, o),
                this.resetArrows(),
                this.rebuildSections(this.viewModel);
            }),
            (e.prototype.rebuildTables = function (e) {
              (this.viewModel = e),
                this.rebuildSections(this.viewModel),
                this.hideExtraColumns();
            }),
            e
          );
        })();
    },
  },
]);
