(self.webpackChunkmha = self.webpackChunkmha || []).push([
  [428],
  {
    5625: function (e, t, n) {
      "use strict";
      var i;
      n.d(t, {
        R: function () {
          return i;
        },
      }),
        (function (e) {
          var t = (function () {
            function e() {}
            return (
              (e.transition = function (t, n) {
                var i = { element: t, props: n, transformations: {} };
                e._animationObjects.push(i),
                  e._parseProperties(i),
                  e._createTransition(i),
                  setTimeout(e._setProperties, 0, i),
                  e._setCallback(i);
              }),
              (e.animation = function (t, n, i) {
                var r = { element: t, keyframes: n, props: i };
                e._animationObjects.push(r),
                  e._parseProperties(r),
                  e._createAnimation(r),
                  e._setCallback(r);
              }),
              (e.scrollTo = function (t, n) {
                var i = { element: t, props: n, step: 0 };
                e._setScrollProperties(i),
                  i.props.delay
                    ? setTimeout(e._animationObjects, 1e3 * i.props.delay, i)
                    : e._animateScroll(i),
                  e._animationObjects.push(i);
              }),
              (e._setScrollProperties = function (e) {
                (e.beginTop = e.element.scrollTop),
                  (e.change = e.props.top - e.beginTop),
                  (e.props.duration = 1e3 * e.props.duration);
              }),
              (e._parseProperties = function (t) {
                var n = e._timeProps.concat(e._callbackProps);
                for (var i in ((t.tweenObj = {}), t.props))
                  e._contains(n, i)
                    ? (t[i] = t.props[i])
                    : (t.tweenObj[i] = t.props[i]);
              }),
              (e._animateScroll = function (t) {
                var n = t.props.duration / 33,
                  i = e._easeOutExpo(t.step++, t.beginTop, t.change, n);
                (t.element.scrollTop = i),
                  t.step >= n
                    ? ((t.element.scrollTop = t.props.top),
                      e._executeCallback(t.props),
                      e._removeAnimationObject(t))
                    : setTimeout(function () {
                        requestAnimationFrame(function () {
                          e._animateScroll(t);
                        });
                      }, 33);
              }),
              (e._createTransition = function (t) {
                var n = t.duration || 0,
                  i = t.delay || 0;
                (t.element.style.transitionProperty =
                  e._getTransitionProperties(t.tweenObj)),
                  (t.element.style.transitionDuration = n.toString() + "s"),
                  (t.element.style.transitionTimingFunction =
                    t.ease || "linear"),
                  (t.element.style.transitionDelay = i.toString() + "s");
              }),
              (e._createAnimation = function (e) {
                var t = e.duration || 0,
                  n = e.delay || 0;
                (e.element.style.animationName = e.keyframes),
                  (e.element.style.animationDuration = t.toString() + "s"),
                  (e.element.style.animationTimingFunction =
                    e.ease || "linear"),
                  (e.element.style.animationDelay = n.toString() + "s"),
                  (e.element.style.animationFillMode = "both");
              }),
              (e._getTransitionProperties = function (t) {
                var n = !1,
                  i = !1,
                  r = [];
                for (var o in t)
                  e._contains(e._transformProps, o)
                    ? (n = !0)
                    : e._contains(e._filters, o)
                    ? (i = !0)
                    : r.push(e._camelCaseToDash(o));
                return (
                  n && r.push("transform"),
                  i && (r.push("-webkit-filter"), r.push("filter")),
                  r.join(", ")
                );
              }),
              (e._setProperties = function (t) {
                for (var n in t.tweenObj)
                  e._contains(e._transformProps, n)
                    ? e._setTransformValues(t, n)
                    : e._contains(e._filters, n)
                    ? e._setFilterValues(t, n)
                    : e._setRegularValues(t, n);
                t.transformations && e._setTransformations(t);
              }),
              (e._setRegularValues = function (e, t) {
                var n = e.tweenObj[t];
                -1 === n.toString().indexOf("%") &&
                  (n +=
                    "opacity" !== t &&
                    "backgroundColor" !== t &&
                    "boxShadow" !== t
                      ? "px"
                      : ""),
                  (e.element.style[t] = n);
              }),
              (e._setFilterValues = function (t, n) {
                var i = t.tweenObj[n];
                (i =
                  "hueRotate" === n
                    ? "(" + i + "deg)"
                    : "blur" === n
                    ? "(" + i + "px)"
                    : "(" + i + "%)"),
                  (n = e._camelCaseToDash(n)),
                  (t.element.style.webkitFilter = n + i),
                  (t.element.style.filter = n + i);
              }),
              (e._setTransformValues = function (e, t) {
                /x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(
                  t
                ) && (e.transformations[t] = e.tweenObj[t]);
              }),
              (e._setTransformations = function (e) {
                var t = "",
                  n = "",
                  i = "",
                  r = "",
                  o = e.transformations;
                (r +=
                  void 0 !== o.x && o.x ? "translateX(" + o.x + "px) " : ""),
                  (r +=
                    void 0 !== o.y && o.y ? "translateY(" + o.y + "px) " : ""),
                  (r +=
                    void 0 !== o.z && o.z ? "translateZ(" + o.z + "px) " : ""),
                  (t +=
                    void 0 !== o.rotate && o.rotate
                      ? "rotate(" + o.rotate + "deg) "
                      : ""),
                  (t +=
                    void 0 !== o.rotateX && o.rotateX
                      ? "rotateX(" + o.rotateX + "deg) "
                      : ""),
                  (t +=
                    void 0 !== o.rotateY && o.rotateY
                      ? "rotate(" + o.rotateY + "deg) "
                      : ""),
                  (t +=
                    void 0 !== o.rotateZ && o.rotateZ
                      ? "rotate(" + o.rotateZ + "deg) "
                      : ""),
                  (n +=
                    void 0 !== o.scaleX && o.scaleX
                      ? "scaleX(" + o.scaleX + ") "
                      : ""),
                  (n +=
                    void 0 !== o.scaleY && o.scaleY
                      ? "scaleY(" + o.scaleY + ") "
                      : ""),
                  (n +=
                    void 0 !== o.scaleZ && o.scaleZ
                      ? "scaleZ(" + o.scaleZ + ") "
                      : ""),
                  (i +=
                    void 0 !== o.skewX && o.skewX
                      ? "skewX(" + o.skewX + "deg) "
                      : ""),
                  (i +=
                    void 0 !== o.skewY && o.skewY
                      ? "skewY(" + o.skewY + "deg) "
                      : ""),
                  (e.element.style.transform = r + t + n + i);
              }),
              (e._setCallback = function (t) {
                t.element.addEventListener(
                  "webkitTransitionEnd",
                  e._complete,
                  !1
                ),
                  t.element.addEventListener("transitionend", e._complete, !1),
                  t.element.addEventListener(
                    "webkitAnimationEnd",
                    e._complete,
                    !1
                  ),
                  t.element.addEventListener("animationend", e._complete, !1);
              }),
              (e._complete = function (t) {
                t.target.removeEventListener(
                  "webkitTransitionEnd",
                  e._complete
                ),
                  t.target.removeEventListener("transitionend", e._complete),
                  t.target.removeEventListener(
                    "webkitAnimationEnd",
                    e._complete
                  ),
                  t.target.removeEventListener("animationend", e._complete);
                var n = e._getAnimationObjByElement(t.target);
                e._executeCallback(n), e._removeAnimationObject(n);
              }),
              (e._getAnimationObjByElement = function (t) {
                for (var n = e._animationObjects.length; n--; )
                  if (e._animationObjects[n].element === t)
                    return e._animationObjects[n];
                return null;
              }),
              (e._removeAnimationObject = function (t) {
                for (var n = e._animationObjects.length; n--; )
                  e._animationObjects[n] === t &&
                    e._animationObjects.splice(n, 1);
              }),
              (e._executeCallback = function (e) {
                if (e.onEnd) {
                  var t = e.onEndArgs || [];
                  e.onEnd.apply(null, t);
                }
              }),
              (e._contains = function (e, t) {
                for (var n = e.length; n--; ) if (t === e[n]) return !0;
                return !1;
              }),
              (e._camelCaseToDash = function (e) {
                return e
                  .replace(/\W+/g, "-")
                  .replace(/([a-z\d])([A-Z])/g, "$1-$2")
                  .toLowerCase();
              }),
              (e._easeOutExpo = function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (1 - Math.pow(2, (-10 * e) / i)) + t;
              }),
              (e._transformProps = [
                "x",
                "y",
                "z",
                "scaleX",
                "scaleY",
                "scaleZ",
                "rotate",
                "rotateX",
                "rotateY",
                "rotateZ",
                "skewX",
                "skewY",
              ]),
              (e._filters = [
                "blur",
                "brightness",
                "contrast",
                "dropShadow",
                "grayscale",
                "hueRotate",
                "invert",
                "saturate",
                "sepia",
              ]),
              (e._timeProps = ["duration", "ease", "delay"]),
              (e._callbackProps = ["onEnd", "onEndArgs"]),
              (e._animationObjects = []),
              e
            );
          })();
          e.Animate = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e() {}
            return (
              (e.QUAD_EASE_IN = e.CB + "(0.550, 0.085, 0.680, 0.530)"),
              (e.CUBIC_EASE_IN = e.CB + "(0.550, 0.055, 0.675, 0.190)"),
              (e.QUART_EASE_IN = e.CB + "(0.895, 0.030, 0.685, 0.220)"),
              (e.QUINT_EASE_IN = e.CB + "(0.755, 0.050, 0.855, 0.060)"),
              (e.SINE_EASE_IN = e.CB + "(0.470, 0, 0.745, 0.715)"),
              (e.EXPO_EASE_IN = e.CB + "(0.950, 0.050, 0.795, 0.035)"),
              (e.CIRC_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)"),
              (e.BACK_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)"),
              (e.QUAD_EASE_OUT = e.CB + "(0.250, 0.460, 0.450, 0.940)"),
              (e.CUBIC_EASE_OUT = e.CB + "(0.215, 0.610, 0.355, 1)"),
              (e.QUART_EASE_OUT = e.CB + "(0.165, 0.840, 0.440, 1)"),
              (e.QUINT_EASE_OUT = e.CB + "(0.230, 1, 0.320, 1)"),
              (e.SINE_EASE_OUT = e.CB + "(0.390, 0.575, 0.565, 1)"),
              (e.EXPO_EASE_OUT = e.CB + "(0.190, 1, 0.220, 1)"),
              (e.CIRC_EASE_OUT = e.CB + "(0.075, 0.820, 0.165, 1)"),
              (e.BACK_EASE_OUT = e.CB + "(0.175, 0.885, 0.320, 1.275)"),
              (e.QUAD_EASE_IN_OUT = e.CB + "(0.455, 0.030, 0.515, 0.955)"),
              (e.CUBIC_EASE_IN_OUT = e.CB + "(0.645, 0.045, 0.355, 1)"),
              (e.QUART_EASE_IN_OUT = e.CB + "(0.770, 0, 0.175, 1)"),
              (e.QUINT_EASE_IN_OUT = e.CB + "(0.860, 0, 0.070, 1)"),
              (e.SINE_EASE_IN_OUT = e.CB + "(0.445, 0.050, 0.550, 0.950)"),
              (e.EXPO_EASE_IN_OUT = e.CB + "(1, 0, 0, 1)"),
              (e.CIRC_EASE_IN_OUT = e.CB + "(0.785, 0.135, 0.150, 0.860)"),
              (e.BACK_EASE_IN_OUT = e.CB + "(0.680, -0.550, 0.265, 1.550)"),
              (e.CB = "cubic-bezier"),
              e
            );
          })();
          e.Ease = t;
        })(i || (i = {})),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          (e.prototype = Event.prototype), (window.CustomEvent = e);
        })(),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._currentMaxItems = 0),
                (this._itemCollection = []),
                (this._tabIndex = 2),
                (this.container = e),
                (this._onResize = this._onResize.bind(this)),
                (this._openOverflow = this._openOverflow.bind(this)),
                (this._overflowKeyPress = this._overflowKeyPress.bind(this)),
                (this._closeOverflow = this._closeOverflow.bind(this)),
                (this.removeOutlinesOnClick =
                  this.removeOutlinesOnClick.bind(this)),
                this.init();
            }
            return (
              (e.prototype.removeOutlinesOnClick = function () {
                this._breadcrumbList.blur();
              }),
              (e.prototype.addItem = function (e, t) {
                this._itemCollection.push({ text: e, link: t }),
                  this._updateBreadcrumbs();
              }),
              (e.prototype.removeItemByLabel = function (e) {
                for (var t = this._itemCollection.length; t--; )
                  this._itemCollection[t].text === e &&
                    this._itemCollection.splice(t, 1);
                this._updateBreadcrumbs();
              }),
              (e.prototype.removeItemByPosition = function (e) {
                this._itemCollection.splice(e, 1), this._updateBreadcrumbs();
              }),
              (e.prototype.init = function () {
                this._cacheDOM(),
                  this._setListeners(),
                  this._createItemCollection(),
                  this._onResize();
              }),
              (e.prototype._createItemCollection = function () {
                for (
                  var e, t, n, i, r = this._listItems.length, o = 0;
                  o < r;
                  o++
                )
                  (t = (e = this._listItems[o].querySelector(
                    ".ms-Breadcrumb-itemLink"
                  )).textContent),
                    (n = e.getAttribute("href")),
                    (i = parseInt(e.getAttribute("tabindex"), 10)),
                    this._itemCollection.push({
                      link: n,
                      tabIndex: i,
                      text: t,
                    });
              }),
              (e.prototype._onResize = function () {
                this._closeOverflow(null), this._renderList();
              }),
              (e.prototype._renderList = function () {
                var t = window.innerWidth > e.MEDIUM ? 4 : 2;
                t !== this._currentMaxItems && this._updateBreadcrumbs(),
                  (this._currentMaxItems = t);
              }),
              (e.prototype._updateBreadcrumbs = function () {
                this._tabIndex = 2;
                var t = window.innerWidth > e.MEDIUM ? 4 : 2;
                this._itemCollection.length > t
                  ? this._breadcrumb.classList.add("is-overflow")
                  : this._breadcrumb.classList.remove("is-overflow"),
                  this._addItemsToOverflow(t),
                  this._addBreadcrumbItems(t);
              }),
              (e.prototype._addItemsToOverflow = function (e) {
                var t = this;
                this._resetList(this._contextMenu);
                var n = this._itemCollection.length - e;
                this._itemCollection.slice(0, n).forEach(function (e) {
                  var n = document.createElement("li");
                  n.className = "ms-ContextualMenu-item";
                  var i = document.createElement("a");
                  (i.className = "ms-ContextualMenu-link"),
                    null !== e.link && i.setAttribute("href", e.link),
                    i.setAttribute("tabindex", (t._tabIndex++).toString()),
                    (i.textContent = e.text),
                    n.appendChild(i),
                    t._contextMenu.appendChild(n);
                });
              }),
              (e.prototype._addBreadcrumbItems = function (e) {
                this._resetList(this._breadcrumbList);
                var t = this._itemCollection.length - e;
                if ((t = t < 0 ? 0 : t) >= 0)
                  for (; t < this._itemCollection.length; t++) {
                    var n = document.createElement("li"),
                      i = this._itemCollection[t],
                      r = document.createElement("a"),
                      o = document.createElement("i");
                    (n.className = "ms-Breadcrumb-listItem"),
                      (r.className = "ms-Breadcrumb-itemLink"),
                      null !== i.link && r.setAttribute("href", i.link),
                      r.setAttribute("tabindex", (this._tabIndex++).toString()),
                      (r.textContent = i.text),
                      (o.className =
                        "ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"),
                      n.appendChild(r),
                      n.appendChild(o),
                      this._breadcrumbList.appendChild(n);
                  }
              }),
              (e.prototype._resetList = function (e) {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
              }),
              (e.prototype._openOverflow = function (e) {
                -1 === this._overflowMenu.className.indexOf(" is-open") &&
                  (this._overflowMenu.classList.add("is-open"),
                  this.removeOutlinesOnClick(),
                  this._overflowButton.focus());
              }),
              (e.prototype._overflowKeyPress = function (e) {
                13 === e.keyCode && this._openOverflow(e);
              }),
              (e.prototype._closeOverflow = function (e) {
                (e && e.target === this._overflowButton) ||
                  this._overflowMenu.classList.remove("is-open");
              }),
              (e.prototype._cacheDOM = function () {
                (this._breadcrumb = this.container),
                  (this._breadcrumbList = this._breadcrumb.querySelector(
                    ".ms-Breadcrumb-list"
                  )),
                  (this._listItems = this._breadcrumb.querySelectorAll(
                    ".ms-Breadcrumb-listItem"
                  )),
                  (this._contextMenu =
                    this._breadcrumb.querySelector(".ms-ContextualMenu")),
                  (this._overflowButton = this._breadcrumb.querySelector(
                    ".ms-Breadcrumb-overflowButton"
                  )),
                  (this._overflowMenu = this._breadcrumb.querySelector(
                    ".ms-Breadcrumb-overflowMenu"
                  ));
              }),
              (e.prototype._setListeners = function () {
                window.addEventListener("resize", this._onResize, !1),
                  this._overflowButton.addEventListener(
                    "click",
                    this._openOverflow,
                    !1
                  ),
                  this._overflowButton.addEventListener(
                    "keypress",
                    this._overflowKeyPress,
                    !1
                  ),
                  document.addEventListener("click", this._closeOverflow, !1),
                  this._breadcrumbList.addEventListener(
                    "click",
                    this.removeOutlinesOnClick,
                    !1
                  );
              }),
              (e.MEDIUM = 639),
              e
            );
          })();
          e.Breadcrumb = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e, t) {
              (this._container = e),
                t && ((this._clickHandler = t), this._setClick());
            }
            return (
              (e.prototype.disposeEvents = function () {
                this._container.removeEventListener(
                  "click",
                  this._clickHandler,
                  !1
                );
              }),
              (e.prototype._setClick = function () {
                this._container.addEventListener(
                  "click",
                  this._clickHandler,
                  !1
                );
              }),
              e
            );
          })();
          e.Button = t;
        })(i || (i = {})),
        (function (e) {
          var t = "is-open",
            n = "is-positioned",
            i = "ms-ContextualHost-main",
            r = "ms-ContextualHost-beak",
            o = (function () {
              function e(t, n, o, a, s, c, l) {
                if (
                  (void 0 === a && (a = !0),
                  (this._resizeAction = this._resizeAction.bind(this)),
                  (this._dismissAction = this._dismissAction.bind(this)),
                  (this._handleKeyUpDismiss =
                    this._handleKeyUpDismiss.bind(this)),
                  (this._matchTargetWidth = c || !1),
                  (this._direction = n),
                  (this._container = this.createContainer()),
                  (this._contextualHost = this._container),
                  (this._contextualHostMain =
                    this._contextualHost.getElementsByClassName(i)[0]),
                  this._contextualHostMain.appendChild(t),
                  (this._hasArrow = a),
                  (this._arrow = this._container.getElementsByClassName(r)[0]),
                  (this._targetElement = o),
                  this._openModal(),
                  this._setResizeDisposal(),
                  l && (this._disposalCallback = l),
                  s)
                )
                  for (var u = 0; u < s.length; u++)
                    this._container.classList.add("ms-ContextualHost--" + s[u]);
                e.hosts || (e.hosts = []), e.hosts.push(this);
              }
              return (
                (e.prototype.disposeModal = function () {
                  if (e.hosts.length > 0) {
                    window.removeEventListener(
                      "resize",
                      this._resizeAction,
                      !1
                    ),
                      document.removeEventListener(
                        "click",
                        this._dismissAction,
                        !0
                      ),
                      document.removeEventListener(
                        "keyup",
                        this._handleKeyUpDismiss,
                        !0
                      ),
                      this._container.parentNode.removeChild(this._container),
                      this._disposalCallback && this._disposalCallback();
                    var t = e.hosts.indexOf(this);
                    e.hosts.splice(t, 1);
                    for (var n = e.hosts.length; n--; )
                      e.hosts[n].disposeModal(), e.hosts.splice(n, 1);
                  }
                }),
                (e.prototype.setChildren = function (e) {
                  this._children || (this._children = []),
                    this._children.push(e);
                }),
                (e.prototype.contains = function (e) {
                  return this._container.contains(e);
                }),
                (e.prototype.createContainer = function () {
                  var e = document.createElement("div");
                  e.setAttribute("class", "ms-ContextualHost"),
                    (e.innerHTML += " ");
                  var t = document.createElement("div");
                  t.setAttribute("class", i),
                    (t.innerHTML += " "),
                    e.appendChild(t),
                    (e.innerHTML += " ");
                  var n = document.createElement("div");
                  return (
                    n.setAttribute("class", r),
                    e.appendChild(n),
                    (e.innerHTML += ""),
                    e
                  );
                }),
                (e.prototype._openModal = function () {
                  var e = this;
                  this._copyModalToBody(),
                    this._saveModalSize(),
                    this._findAvailablePosition(),
                    this._showModal(),
                    setTimeout(function () {
                      e._setDismissClick();
                    }, 100);
                }),
                (e.prototype._findAvailablePosition = function () {
                  var e;
                  switch (this._direction) {
                    case "left":
                      (e = this._positionOk(
                        this._tryPosModalLeft.bind(this),
                        this._tryPosModalRight.bind(this),
                        this._tryPosModalBottom.bind(this),
                        this._tryPosModalTop.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    case "right":
                      (e = this._positionOk(
                        this._tryPosModalRight.bind(this),
                        this._tryPosModalLeft.bind(this),
                        this._tryPosModalBottom.bind(this),
                        this._tryPosModalTop.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    case "top":
                      (e = this._positionOk(
                        this._tryPosModalTop.bind(this),
                        this._tryPosModalBottom.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    case "bottom":
                      (e = this._positionOk(
                        this._tryPosModalBottom.bind(this),
                        this._tryPosModalTop.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    default:
                      this._setPosition();
                  }
                }),
                (e.prototype._showModal = function () {
                  this._container.classList.add(t);
                }),
                (e.prototype._positionOk = function (e, t, n, i) {
                  var r;
                  return (
                    (r = e()) ||
                      (!(r = t()) && n && !(r = n()) && i && (r = i())),
                    r
                  );
                }),
                (e.prototype._calcLeft = function (e, t, n) {
                  var i = e / 2,
                    r = n + t / 2 - i;
                  return r < i ? n : r;
                }),
                (e.prototype._calcTop = function (e, t, n) {
                  var i = e / 2,
                    r = n + t / 2 - i;
                  return r < i ? n : r;
                }),
                (e.prototype._setPosition = function (e) {
                  var t,
                    i,
                    r,
                    o,
                    a = this._targetElement.getBoundingClientRect(),
                    s = a.left,
                    c = a.right,
                    l = a.top,
                    u = a.width,
                    d = a.height,
                    f = "",
                    p = window.scrollX ? window.scrollX : 0,
                    h = window.scrollY ? window.scrollY : 0,
                    g = this._hasArrow ? 28 : 0;
                  switch (
                    (this._matchTargetWidth &&
                      (f = "width: " + this._modalWidth + "px;"),
                    e)
                  ) {
                    case "left":
                      (t = s - this._modalWidth - g),
                        (i = this._calcTop(this._modalHeight, d, l)),
                        (i += window.scrollY ? window.scrollY : 0),
                        this._container.setAttribute(
                          "style",
                          "top: " + i + "px; left: " + t + "px;" + f
                        ),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          (this._container.classList.add(
                            "ms-ContextualHost--arrowRight"
                          ),
                          (r = l + h - i + 8),
                          this._arrow.setAttribute(
                            "style",
                            "top: " + r + "px;"
                          ));
                      break;
                    case "right":
                      (i = this._calcTop(this._modalHeight, d, l)),
                        (i += h),
                        (t = c + g),
                        this._container.setAttribute(
                          "style",
                          "top: " + i + "px; left: " + t + "px;" + f
                        ),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((r = h + l - i + 8),
                          this._arrow.setAttribute(
                            "style",
                            "top: " + r + "px;"
                          ),
                          this._container.classList.add(
                            "ms-ContextualHost--arrowLeft"
                          ));
                      break;
                    case "top":
                      (t = this._calcLeft(this._modalWidth, this._teWidth, s)),
                        (i = l - this._modalHeight - g),
                        (i += h),
                        this._container.setAttribute(
                          "style",
                          "top: " + i + "px; left: " + t + "px;" + f
                        ),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((r = this._modalHeight - g / 2),
                          (o = Math.max(p + s - t + (u - g) / 2, 8)),
                          this._arrow.setAttribute(
                            "style",
                            "top: " + r + "px; left: " + o + "px;"
                          ),
                          this._container.classList.add(
                            "ms-ContextualHost--arrowBottom"
                          ));
                      break;
                    case "bottom":
                      (t = t =
                        this._calcLeft(this._modalWidth, this._teWidth, s)),
                        (i = l + d + g),
                        (i += window.scrollY ? window.scrollY : 0),
                        this._container.setAttribute(
                          "style",
                          "top: " + i + "px; left: " + t + "px;" + f
                        ),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((o = Math.max(p + s - t + (u - g) / 2, 8)),
                          this._arrow.setAttribute(
                            "style",
                            "left: " + o + "px;"
                          ),
                          this._container.classList.add(
                            "ms-ContextualHost--arrowTop"
                          ));
                      break;
                    default:
                      this._container.setAttribute(
                        "style",
                        "top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);"
                      );
                  }
                }),
                (e.prototype._tryPosModalLeft = function () {
                  return (
                    !(
                      this._targetElement.getBoundingClientRect().left <
                      this._modalWidth
                    ) && "left"
                  );
                }),
                (e.prototype._tryPosModalRight = function () {
                  var e = this._targetElement.getBoundingClientRect().right;
                  return (
                    !(
                      Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      ) -
                        e <
                      this._modalWidth
                    ) && "right"
                  );
                }),
                (e.prototype._tryPosModalBottom = function () {
                  return (
                    !(
                      window.innerHeight -
                        this._targetElement.getBoundingClientRect().bottom <
                      this._modalHeight
                    ) && "bottom"
                  );
                }),
                (e.prototype._tryPosModalTop = function () {
                  return (
                    !(
                      this._targetElement.getBoundingClientRect().top <
                      this._modalHeight
                    ) && "top"
                  );
                }),
                (e.prototype._copyModalToBody = function () {
                  document.body.appendChild(this._container);
                }),
                (e.prototype._saveModalSize = function () {
                  var e = window.getComputedStyle(this._container);
                  if (
                    (this._container.setAttribute(
                      "style",
                      "opacity: 0; z-index: -1"
                    ),
                    this._container.classList.add(n),
                    this._container.classList.add(t),
                    this._matchTargetWidth)
                  ) {
                    var i = window.getComputedStyle(this._targetElement);
                    this._modalWidth =
                      this._targetElement.getBoundingClientRect().width +
                      (parseInt(i.marginLeft, 10) + parseInt(i.marginLeft, 10));
                  } else
                    (this._modalWidth =
                      this._container.getBoundingClientRect().width +
                      (parseInt(e.marginLeft, 10) +
                        parseInt(e.marginRight, 10))),
                      this._container.setAttribute("style", "");
                  (this._modalHeight =
                    this._container.getBoundingClientRect().height +
                    (parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10))),
                    this._container.classList.remove(n),
                    this._container.classList.remove(t),
                    (this._teWidth =
                      this._targetElement.getBoundingClientRect().width),
                    (this._teHeight =
                      this._targetElement.getBoundingClientRect().height);
                }),
                (e.prototype._dismissAction = function (e) {
                  if (
                    !this._container.contains(e.target) &&
                    e.target !== this._container
                  )
                    if (void 0 !== this._children) {
                      var t = !1;
                      this._children.map(function (n) {
                        void 0 !== n && (t = n.contains(e.target));
                      }),
                        t || this.disposeModal();
                    } else this.disposeModal();
                }),
                (e.prototype._setDismissClick = function () {
                  document.addEventListener("click", this._dismissAction, !0),
                    document.addEventListener(
                      "keyup",
                      this._handleKeyUpDismiss,
                      !0
                    );
                }),
                (e.prototype._handleKeyUpDismiss = function (e) {
                  (32 !== e.keyCode && 27 !== e.keyCode) ||
                    this._dismissAction(e);
                }),
                (e.prototype._resizeAction = function () {
                  this.disposeModal();
                }),
                (e.prototype._setResizeDisposal = function () {
                  window.addEventListener("resize", this._resizeAction, !1);
                }),
                e
              );
            })();
          e.ContextualHost = o;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e, t, n) {
              (this._container = e),
                (this._addTarget = t),
                (this._position = n),
                (this._closeButton =
                  document.querySelector(".ms-Callout-close")),
                this._setOpener();
            }
            return (
              (t.prototype._setOpener = function () {
                this._addTarget.addEventListener(
                  "click",
                  this._clickHandler.bind(this),
                  !0
                ),
                  this._addTarget.addEventListener(
                    "keyup",
                    this._keyupHandler.bind(this),
                    !0
                  );
              }),
              (t.prototype._openContextMenu = function () {
                var t = [];
                this._hasModifier("ms-Callout--OOBE") && t.push("primaryArrow"),
                  this._container.classList.remove("is-hidden"),
                  (this._contextualHost = new e.ContextualHost(
                    this._container,
                    this._position,
                    this._addTarget,
                    !0,
                    t
                  )),
                  this._closeButton &&
                    this._closeButton.addEventListener(
                      "click",
                      this._closeHandler.bind(this),
                      !1
                    );
              }),
              (t.prototype._hasModifier = function (e) {
                return this._container.classList.contains(e);
              }),
              (t.prototype._closeHandler = function (e) {
                null != this._contextualHost &&
                  this._contextualHost.disposeModal(),
                  this._closeButton.removeEventListener(
                    "click",
                    this._closeHandler.bind(this),
                    !1
                  ),
                  this._addTarget.removeEventListener(
                    "click",
                    this._clickHandler.bind(this),
                    !0
                  ),
                  this._addTarget.removeEventListener(
                    "keyup",
                    this._keyupHandler.bind(this),
                    !0
                  );
              }),
              (t.prototype._clickHandler = function (e) {
                this._openContextMenu();
              }),
              (t.prototype._keyupHandler = function (e) {
                32 === e.keyCode
                  ? (e.stopPropagation(),
                    e.preventDefault(),
                    this._openContextMenu())
                  : this._closeHandler(e);
              }),
              t
            );
          })();
          e.Callout = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._choiceField =
                  this._container.querySelector(".ms-CheckBox-field")),
                (this._choiceInput =
                  this._container.querySelector(".ms-CheckBox-input")),
                this._choiceInput.checked &&
                  this._choiceField.setAttribute("aria-checked", "true"),
                "true" === this._choiceField.getAttribute("aria-checked") &&
                  this._choiceField.classList.add("is-checked"),
                this._addListeners();
            }
            return (
              (e.prototype.getValue = function () {
                return (
                  "true" === this._choiceField.getAttribute("aria-checked")
                );
              }),
              (e.prototype.toggle = function () {
                this.getValue() ? this.unCheck() : this.check(),
                  this._choiceInput.click();
              }),
              (e.prototype.check = function () {
                this._choiceField.setAttribute("aria-checked", "true"),
                  this._choiceField.classList.add("is-checked");
              }),
              (e.prototype.unCheck = function () {
                this._choiceField.setAttribute("aria-checked", "false"),
                  this._choiceField.classList.remove("is-checked");
              }),
              (e.prototype.removeListeners = function () {
                this._choiceField.removeEventListener(
                  "focus",
                  this._FocusHandler.bind(this)
                ),
                  this._choiceField.removeEventListener(
                    "blur",
                    this._BlurHandler.bind(this)
                  ),
                  this._choiceField.removeEventListener(
                    "click",
                    this._ClickHandler.bind(this)
                  ),
                  this._choiceField.removeEventListener(
                    "keydown",
                    this._KeydownHandler.bind(this)
                  );
              }),
              (e.prototype._addListeners = function (e) {
                var t = e && e.ignore;
                (t && t.indexOf("focus") > -1) ||
                  this._choiceField.addEventListener(
                    "focus",
                    this._FocusHandler.bind(this),
                    !1
                  ),
                  (t && t.indexOf("blur") > -1) ||
                    this._choiceField.addEventListener(
                      "blur",
                      this._BlurHandler.bind(this),
                      !1
                    ),
                  (t && t.indexOf("click") > -1) ||
                    this._choiceField.addEventListener(
                      "click",
                      this._ClickHandler.bind(this),
                      !1
                    ),
                  (t && t.indexOf("keydown") > -1) ||
                    this._choiceField.addEventListener(
                      "keydown",
                      this._KeydownHandler.bind(this),
                      !1
                    );
              }),
              (e.prototype._FocusHandler = function () {
                this._choiceField.classList.add("in-focus");
              }),
              (e.prototype._BlurHandler = function () {
                this._choiceField.classList.remove("in-focus");
              }),
              (e.prototype._ClickHandler = function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  this._choiceField.classList.contains("is-disabled") ||
                    this.toggle();
              }),
              (e.prototype._KeydownHandler = function (e) {
                32 === e.keyCode &&
                  (e.stopPropagation(),
                  e.preventDefault(),
                  this._choiceField.classList.contains("is-disabled") ||
                    this.toggle());
              }),
              e
            );
          })();
          e.CheckBox = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._choiceField = this._container.querySelector(
                  ".ms-RadioButton-field"
                )),
                (this._choiceInput = this._container.querySelector(
                  ".ms-RadioButton-input"
                )),
                "true" === this._choiceField.getAttribute("aria-checked") &&
                  this._choiceField.classList.add("is-checked"),
                this._addListeners();
            }
            return (
              (e.prototype.getValue = function () {
                return (
                  "true" === this._choiceField.getAttribute("aria-checked")
                );
              }),
              (e.prototype.toggle = function () {
                this.getValue() ? this.unCheck() : this.check();
              }),
              (e.prototype.check = function () {
                this._choiceField.setAttribute("aria-checked", "true"),
                  this._choiceField.classList.add("is-checked"),
                  (this._choiceInput.checked = !0);
              }),
              (e.prototype.unCheck = function () {
                this._choiceField.setAttribute("aria-checked", "false"),
                  this._choiceField.classList.remove("is-checked"),
                  (this._choiceInput.checked = !1);
              }),
              (e.prototype.removeListeners = function () {
                this._choiceField.removeEventListener(
                  "focus",
                  this._FocusHandler.bind(this)
                ),
                  this._choiceField.removeEventListener(
                    "blur",
                    this._BlurHandler.bind(this)
                  ),
                  this._choiceField.removeEventListener(
                    "click",
                    this._RadioClickHandler.bind(this)
                  ),
                  this._choiceField.addEventListener(
                    "keydown",
                    this._RadioKeydownHandler.bind(this)
                  );
              }),
              (e.prototype._addListeners = function () {
                this._choiceField.addEventListener(
                  "focus",
                  this._FocusHandler.bind(this),
                  !1
                ),
                  this._choiceField.addEventListener(
                    "blur",
                    this._BlurHandler.bind(this),
                    !1
                  ),
                  this._choiceField.addEventListener(
                    "click",
                    this._RadioClickHandler.bind(this),
                    !1
                  ),
                  this._choiceField.addEventListener(
                    "keydown",
                    this._RadioKeydownHandler.bind(this),
                    !1
                  );
              }),
              (e.prototype._RadioClickHandler = function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  this._choiceField.classList.contains("is-disabled") ||
                    this._dispatchSelectEvent();
              }),
              (e.prototype._dispatchSelectEvent = function () {
                var e = {
                  bubbles: !0,
                  cancelable: !0,
                  detail: {
                    name: this._choiceField.getAttribute("name"),
                    item: this,
                  },
                };
                this._choiceField.dispatchEvent(
                  new CustomEvent("msChoicefield", e)
                );
              }),
              (e.prototype._RadioKeydownHandler = function (e) {
                32 === e.keyCode &&
                  (e.stopPropagation(),
                  e.preventDefault(),
                  this._choiceField.classList.contains("is-disabled") ||
                    this._dispatchSelectEvent());
              }),
              (e.prototype._FocusHandler = function () {
                this._choiceField.classList.add("in-focus");
              }),
              (e.prototype._BlurHandler = function () {
                this._choiceField.classList.remove("in-focus");
              }),
              e
            );
          })();
          e.RadioButton = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._choiceFieldGroup = e),
                (this._choiceFieldComponents = []),
                this._initalSetup(),
                this._addListeners();
            }
            return (
              (t.prototype.removeListeners = function () {
                this._choiceFieldGroup.removeEventListener(
                  "msChoicefield",
                  this._ChoiceFieldHandler.bind(this)
                );
              }),
              (t.prototype._initalSetup = function () {
                for (
                  var t =
                      this._choiceFieldGroup.querySelectorAll(
                        ".ms-RadioButton"
                      ),
                    n = 0;
                  n < t.length;
                  n++
                )
                  this._choiceFieldComponents[n] = new e.RadioButton(t[n]);
              }),
              (t.prototype._addListeners = function () {
                document.addEventListener(
                  "msChoicefield",
                  this._ChoiceFieldHandler.bind(this),
                  !1
                );
              }),
              (t.prototype._ChoiceFieldHandler = function (e) {
                var t = e.detail.name,
                  n = e.detail.item;
                if (this._choiceFieldGroup.id === t) {
                  for (var i = 0; i < this._choiceFieldComponents.length; i++)
                    this._choiceFieldComponents[i].unCheck();
                  n.check();
                }
              }),
              t
            );
          })();
          e.ChoiceFieldGroup = t;
        })(i || (i = {})),
        (function (e) {
          var t = "has-text",
            n = "is-active",
            i = (function () {
              function e(e) {
                var t = this;
                (this._container = e),
                  this._saveDOMRefs(this._container),
                  (this._boundExpandSearchHandler =
                    this._expandSearchHandler.bind(this)),
                  (this._boundEnableClose = this._enableClose.bind(this)),
                  (this._boundCollapseSearchBox =
                    this._collapseSearchBox.bind(this)),
                  (this._boundClearSearchBox = this._clearSearchBox.bind(this)),
                  (this._boundHandleBlur = this._handleBlur.bind(this)),
                  (this._boundExitSearchBox = this._exitSearchBox.bind(this)),
                  this._setHasText(),
                  this._setFocusAction(this._container),
                  this._setClearButtonAction(),
                  this._setBlurAction(),
                  (this._clearOnly = !1),
                  setTimeout(function () {
                    t._checkState(), t._addAnimation();
                  }, 10);
              }
              return (
                (e.prototype.setCollapsedListeners = function () {
                  this._disposeListeners(),
                    this._searchBox.addEventListener(
                      "click",
                      this._boundExpandSearchHandler,
                      !1
                    ),
                    this._searchBoxField.addEventListener(
                      "focus",
                      this._boundExpandSearchHandler,
                      !0
                    );
                }),
                (e.prototype.getInputField = function () {
                  return this._searchBoxField;
                }),
                (e.prototype._saveDOMRefs = function (e) {
                  (this._searchBox = e),
                    (this._searchBoxField = this._searchBox.querySelector(
                      ".ms-SearchBox-field"
                    )),
                    (this._searchBoxClearButton = this._searchBox.querySelector(
                      ".ms-SearchBox-clear"
                    )),
                    (this._searchBoxExitButton =
                      this._searchBox.querySelector(".ms-SearchBox-exit"));
                }),
                (e.prototype._disposeListeners = function () {
                  this._searchBox.removeEventListener(
                    "click",
                    this._boundExpandSearchHandler
                  ),
                    this._searchBoxField.removeEventListener(
                      "focus",
                      this._boundExpandSearchHandler
                    );
                }),
                (e.prototype._exitSearchBox = function (e) {
                  e.stopPropagation(),
                    e.target.blur(),
                    this._clearSearchBox(),
                    this._collapseSearchBox(),
                    this._searchBox.removeEventListener(
                      "keyup",
                      this._boundEnableClose
                    ),
                    this.setCollapsedListeners();
                }),
                (e.prototype._collapseSearchBox = function () {
                  this._searchBox.classList.remove("is-active");
                  var e = document.createEvent("Event");
                  e.initEvent("searchCollapse", !0, !0),
                    this._searchBoxField.dispatchEvent(e);
                }),
                (e.prototype._expandSearchHandler = function () {
                  this._disposeListeners(),
                    this._searchBox.classList.add("is-active"),
                    this._searchBoxField.focus();
                }),
                (e.prototype._enableClose = function () {
                  this._setHasText();
                }),
                (e.prototype._setHasText = function () {
                  this._searchBoxField.value.length > 0
                    ? this._searchBox.classList.add(t)
                    : this._searchBox.classList.remove(t);
                }),
                (e.prototype._setFocusAction = function (e) {
                  var t = this;
                  this._searchBoxField.addEventListener(
                    "focus",
                    function () {
                      t._setHasText(),
                        t._searchBox.addEventListener(
                          "keyup",
                          t._boundEnableClose,
                          !1
                        ),
                        t._searchBox.classList.add(n),
                        t._searchBox.classList.add(n);
                    },
                    !0
                  );
                }),
                (e.prototype._clearSearchBox = function (e) {
                  var t = this;
                  (this._clearOnly = !0),
                    (this._searchBoxField.value = ""),
                    this._setHasText(),
                    setTimeout(function () {
                      t._clearOnly = !1;
                    }, 10);
                }),
                (e.prototype._setClearButtonAction = function () {
                  var e = this;
                  this._searchBoxExitButton &&
                    this._searchBoxExitButton.addEventListener(
                      "click",
                      this._boundExitSearchBox,
                      !1
                    ),
                    this._searchBoxClearButton.addEventListener(
                      "mousedown",
                      this._boundClearSearchBox,
                      !1
                    ),
                    this._searchBoxClearButton.addEventListener(
                      "keydown",
                      function (t) {
                        13 === t.keyCode && e._clearSearchBox(t);
                      },
                      !1
                    );
                }),
                (e.prototype._handleBlur = function (e) {
                  var t = this;
                  this._clearOnly
                    ? this._searchBoxField.focus()
                    : (this._searchBox.removeEventListener(
                        "keyup",
                        this._boundEnableClose
                      ),
                      setTimeout(function () {
                        t._searchBox.contains(document.activeElement) ||
                          (t._clearSearchBox(),
                          t._collapseSearchBox(),
                          t.setCollapsedListeners());
                      }, 10)),
                    (this._clearOnly = !1);
                }),
                (e.prototype._setBlurAction = function () {
                  this._searchBoxField.addEventListener(
                    "blur",
                    this._boundHandleBlur,
                    !0
                  ),
                    this._searchBoxClearButton.addEventListener(
                      "blur",
                      this._boundHandleBlur,
                      !0
                    );
                }),
                (e.prototype._checkState = function () {
                  this._searchBox.classList.contains("is-collapsed") &&
                    this.setCollapsedListeners();
                }),
                (e.prototype._addAnimation = function () {
                  this._container.classList.add("is-animated");
                }),
                e
              );
            })();
          e.SearchBox = i;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e, t) {
              (this._container = e),
                (this._command = this._container),
                (this._commandButton = this._command.querySelector(
                  ".ms-CommandButton-button"
                )),
                (this._splitButton = this._command.querySelector(
                  ".ms-CommandButton-splitIcon"
                )),
                (this._contextualMenu =
                  t || this._container.querySelector(".ms-ContextualMenu")),
                this._checkForMenu();
            }
            return (
              (t.prototype._createModalHostView = function () {
                this._modalHostView = new e.ContextualHost(
                  this._contextualMenu,
                  "bottom",
                  this._command,
                  !1
                );
              }),
              (t.prototype._setClick = function () {
                this._splitButton
                  ? this._splitButton.addEventListener(
                      "click",
                      this._createModalHostView.bind(this),
                      !1
                    )
                  : this._commandButton.addEventListener(
                      "click",
                      this._createModalHostView.bind(this),
                      !1
                    );
              }),
              (t.prototype._checkForMenu = function () {
                this._contextualMenu && this._setClick();
              }),
              t
            );
          })();
          e.CommandButton = t;
        })(i || (i = {})),
        (function (e) {
          var t = ".ms-SearchBox",
            n = ".ms-CommandBar-mainArea",
            i = ".ms-CommandBar-sideCommands",
            r = ".ms-CommandBar-overflowButton",
            o = "ms-CommandButton--noLabel",
            a = ".ms-Icon",
            s = (function () {
              function s(e) {
                (this.responsiveSizes = {
                  "sm-min": 320,
                  "md-min": 480,
                  "lg-min": 640,
                  "xl-min": 1024,
                  "xxl-min": 1366,
                  "xxxl-min": 1920,
                }),
                  (this.visibleCommands = []),
                  (this.commandWidths = []),
                  (this.overflowCommands = []),
                  (this.itemCollection = []),
                  (this._sideAreaCollection = []),
                  (this.breakpoint = "sm"),
                  (this._container = e),
                  (this.responsiveSizes["sm-max"] =
                    this.responsiveSizes["md-min"] - 1),
                  (this.responsiveSizes["md-max"] =
                    this.responsiveSizes["lg-min"] - 1),
                  (this.responsiveSizes["lg-max"] =
                    this.responsiveSizes["xl-min"] - 1),
                  (this.responsiveSizes["xl-max"] =
                    this.responsiveSizes["xxl-min"] - 1),
                  (this.responsiveSizes["xxl-max"] =
                    this.responsiveSizes["xxxl-min"] - 1),
                  this._setElements(),
                  this._setBreakpoint(),
                  this._elements.overflowCommand && this._initOverflow(),
                  this._setUIState();
              }
              return (
                (s.prototype._runsSearchBox = function (e) {
                  void 0 === e && (e = "add"),
                    this._changeSearchState("is-collapsed", e);
                }),
                (s.prototype._runOverflow = function () {
                  this._elements.overflowCommand &&
                    (this._saveCommandWidths(),
                    this._redrawMenu(),
                    this._updateCommands(),
                    this._drawCommands(),
                    this._checkOverflow());
                }),
                (s.prototype._initOverflow = function () {
                  this._createContextualRef(),
                    this._createItemCollection(this.itemCollection, n),
                    this._createItemCollection(this._sideAreaCollection, i),
                    this._saveCommandWidths(),
                    this._updateCommands(),
                    this._drawCommands(),
                    this._setWindowEvent(),
                    this._checkOverflow();
                }),
                (s.prototype._hasClass = function (e, t) {
                  return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
                }),
                (s.prototype._onSearchExpand = function () {
                  "lg" === this.breakpoint &&
                    (this._container.classList.add("search-expanded"),
                    this._doResize());
                }),
                (s.prototype._onSearchCollapse = function () {
                  "lg" === this.breakpoint &&
                    (this._container.classList.remove("search-expanded"),
                    this._doResize());
                }),
                (s.prototype._getScreenSize = function () {
                  var e = window,
                    t = { x: 0, y: 0 },
                    n = document,
                    i = n.documentElement,
                    r = n.getElementsByTagName("body")[0];
                  return (
                    (t.x = e.innerWidth || i.clientWidth || r.clientWidth),
                    (t.y = e.innerHeight || i.clientHeight || r.clientHeight),
                    t
                  );
                }),
                (s.prototype._setBreakpoint = function () {
                  var e = this._getScreenSize().x;
                  switch (!0) {
                    case e <= this.responsiveSizes["sm-max"]:
                      this.breakpoint = "sm";
                      break;
                    case e >= this.responsiveSizes["md-min"] &&
                      e <= this.responsiveSizes["md-max"]:
                      this.breakpoint = "md";
                      break;
                    case e >= this.responsiveSizes["lg-min"] &&
                      e <= this.responsiveSizes["lg-max"]:
                      this.breakpoint = "lg";
                      break;
                    case e >= this.responsiveSizes["xl-min"] &&
                      e <= this.responsiveSizes["xl-max"]:
                      this.breakpoint = "xl";
                      break;
                    case e >= this.responsiveSizes["xxl-min"] &&
                      e <= this.responsiveSizes["xxl-max"]:
                      this.breakpoint = "xxl";
                      break;
                    case e >= this.responsiveSizes["xxxl-min"]:
                      this.breakpoint = "xxxl";
                  }
                }),
                (s.prototype._createSearchInstance = function () {
                  return (
                    !!this._elements.searchBox &&
                    new e.SearchBox(this._elements.searchBox)
                  );
                }),
                (s.prototype._changeSearchState = function (e, t) {
                  if (this._elements.searchBox)
                    switch (t) {
                      case "remove":
                        this._elements.searchBox.classList.remove(e);
                        break;
                      case "add":
                        this._elements.searchBox.classList.add(e);
                    }
                }),
                (s.prototype._setElements = function () {
                  var e = this;
                  (this._elements = {
                    mainArea: this._container.querySelector(n),
                  }),
                    this._container.querySelector(i) &&
                      (this._elements.sideCommandArea =
                        this._container.querySelector(i)),
                    this._container.querySelector(r) &&
                      ((this._elements.overflowCommand =
                        this._container.querySelector(r)),
                      (this._elements.contextMenu = this._container
                        .querySelector(r)
                        .querySelector(".ms-ContextualMenu"))),
                    this._container.querySelector(n + " " + t) &&
                      ((this._elements.searchBox =
                        this._container.querySelector(n + " " + t)),
                      (this._elements.searchBoxClose =
                        this._container.querySelector(
                          ".ms-SearchBox-closeField"
                        )),
                      (this.searchBoxInstance = this._createSearchInstance()),
                      this.searchBoxInstance.getInputField().addEventListener(
                        "focus",
                        function () {
                          e._onSearchExpand();
                        },
                        !1
                      ),
                      this.searchBoxInstance.getInputField().addEventListener(
                        "searchCollapse",
                        function () {
                          e._onSearchCollapse();
                        },
                        !1
                      ));
                }),
                (s.prototype._createItemCollection = function (t, n) {
                  var i,
                    s,
                    c,
                    l = this._container.querySelectorAll(
                      n + " > .ms-CommandButton:not(" + r + ")"
                    );
                  this._commandButtonInstance = new e.CommandButton(
                    this._elements.overflowCommand
                  );
                  for (var u = 0; u < l.length; u++) {
                    s = (i = l[u]).querySelector(
                      ".ms-CommandButton-label"
                    ).textContent;
                    var d = i.querySelector(a);
                    if (d) {
                      c = d.className.split(" ");
                      for (var f = 0; f < c.length; f++)
                        if (c[f].indexOf(a.replace(".", "") + "--") > -1) {
                          d = c[f];
                          break;
                        }
                    }
                    t.push({
                      item: i,
                      label: s,
                      icon: d,
                      isCollapsed: !!i.classList.contains(o),
                      commandButtonRef: new e.CommandButton(i),
                    });
                  }
                }),
                (s.prototype._createContextualRef = function () {
                  (this.contextualItemContainerRef = this._elements.contextMenu
                    .querySelector(".ms-ContextualMenu-item")
                    .cloneNode(!0)),
                    (this.contextualItemLink = this._elements.contextMenu
                      .querySelector(".ms-ContextualMenu-link")
                      .cloneNode(!1)),
                    (this.contextualItemIcon = this._elements.contextMenu
                      .querySelector(".ms-Icon")
                      .cloneNode(!1)),
                    (this._elements.contextMenu.innerHTML = "");
                }),
                (s.prototype._getElementWidth = function (e) {
                  var t, n;
                  return (
                    null === e.offsetParent &&
                      e.setAttribute(
                        "style",
                        "position: absolute; opacity: 0; display: block;"
                      ),
                    (t = e.getBoundingClientRect().width),
                    (n = window.getComputedStyle(e)),
                    (t +=
                      parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10)),
                    e.setAttribute("style", ""),
                    t
                  );
                }),
                (s.prototype._saveCommandWidths = function () {
                  for (var e = 0; e < this.itemCollection.length; e++) {
                    var t = this.itemCollection[e].item,
                      n = this._getElementWidth(t);
                    this.commandWidths[e] = n;
                  }
                }),
                (s.prototype._updateCommands = function () {
                  var e = 0,
                    t = this._elements.mainArea.getBoundingClientRect().width;
                  this._elements.searchBox &&
                    (e = this._getElementWidth(this._elements.searchBox));
                  var n = t - (e + 40 + 30);
                  (this.visibleCommands = []), (this.overflowCommands = []);
                  for (var i = 0, r = 0; r < this.itemCollection.length; r++)
                    (i += this.commandWidths[r]) < n
                      ? this.visibleCommands.push(this.itemCollection[r])
                      : this.overflowCommands.push(this.itemCollection[r]);
                }),
                (s.prototype._drawCommands = function () {
                  this._elements.contextMenu.innerHTML = "";
                  for (var e = 0; e < this.overflowCommands.length; e++) {
                    this.overflowCommands[e].item.classList.add("is-hidden");
                    var t = this.contextualItemContainerRef.cloneNode(!1),
                      n = this.contextualItemLink.cloneNode(!1),
                      i = this.overflowCommands[e].icon;
                    if (
                      ((n.innerText = this.overflowCommands[e].label),
                      t.appendChild(n),
                      i)
                    ) {
                      var r = this.contextualItemIcon.cloneNode(!1);
                      (r.className = a.replace(".", "") + " " + i),
                        t.appendChild(r);
                    }
                    this._elements.contextMenu.appendChild(t);
                  }
                  for (var o = 0; o < this.visibleCommands.length; o++)
                    this.visibleCommands[o].item.classList.remove("is-hidden");
                }),
                (s.prototype._setWindowEvent = function () {
                  var e = this;
                  window.addEventListener(
                    "resize",
                    function () {
                      e._doResize();
                    },
                    !1
                  );
                }),
                (s.prototype._processCollapsedClasses = function (e) {
                  for (var t = 0; t < this.itemCollection.length; t++)
                    (n = this.itemCollection[t]).isCollapsed ||
                      ("add" === e
                        ? n.item.classList.add(o)
                        : n.item.classList.remove(o));
                  for (t = 0; t < this._sideAreaCollection.length; t++) {
                    var n;
                    (n = this._sideAreaCollection[t]).isCollapsed ||
                      ("add" === e
                        ? n.item.classList.add(o)
                        : n.item.classList.remove(o));
                  }
                }),
                (s.prototype._setUIState = function () {
                  switch (this.breakpoint) {
                    case "sm":
                    case "md":
                      this._runsSearchBox(),
                        this._processCollapsedClasses("add"),
                        this._runOverflow();
                      break;
                    case "lg":
                      this._runsSearchBox(),
                        this._processCollapsedClasses("remove"),
                        this._runOverflow();
                      break;
                    default:
                      this._runsSearchBox("remove"),
                        this._processCollapsedClasses("remove"),
                        this._runOverflow();
                  }
                }),
                (s.prototype._checkOverflow = function () {
                  this.overflowCommands.length > 0
                    ? this._elements.overflowCommand.classList.remove(
                        "is-hidden"
                      )
                    : (this._elements.overflowCommand.classList.add(
                        "is-hidden"
                      ),
                      this.activeCommand === this._elements.overflowCommand &&
                        this._elements.contextMenu.classList.remove("is-open"));
                }),
                (s.prototype._redrawMenu = function () {
                  var e;
                  this._hasClass(this._elements.contextMenu, "is-open") &&
                    ((e = this.activeCommand.getBoundingClientRect().left),
                    this._drawOverflowMenu(e));
                }),
                (s.prototype._drawOverflowMenu = function (e) {
                  this._elements.contextMenu.setAttribute(
                    "style",
                    "left: " + e + "px; transform: translateX(-50%)"
                  );
                }),
                (s.prototype._doResize = function () {
                  this._setBreakpoint(), this._setUIState();
                }),
                s
              );
            })();
          e.CommandBar = s;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e, t, n) {
              (this._container = e),
                (this._hostTarget = t),
                (this._position = n || "bottom"),
                (this._isOpen = !1),
                this._setOpener(t),
                this._init();
            }
            return (
              (t.prototype.getHost = function () {
                return this._host;
              }),
              (t.prototype._init = function () {
                this._container.addEventListener(
                  "click",
                  this._onContextualMenuClick.bind(this),
                  !0
                ),
                  document.addEventListener(
                    "click",
                    this._onDocumentClick.bind(this),
                    !1
                  );
              }),
              (t.prototype._onDocumentClick = function (e) {
                if (e.target instanceof HTMLElement) {
                  var t = e.target,
                    n = t.classList;
                  this._hostTarget.contains(t) ||
                    n.contains("ms-ContextualMenu-link") ||
                    (this._isOpen = !1);
                }
              }),
              (t.prototype._onContextualMenuClick = function (e) {
                var t = e.target,
                  n = t.classList;
                n.contains("ms-ContextualMenu-link") &&
                  !n.contains("is-disabled") &&
                  (this._container.classList.contains(
                    "ms-ContextualMenu--multiselect"
                  )
                    ? this._multiSelect(t)
                    : (this._singleSelect(t),
                      t.parentElement.classList.contains(
                        "ms-ContextualMenu-item--hasMenu"
                      ) || (this._host.disposeModal(), (this._isOpen = !1))));
              }),
              (t.prototype._multiSelect = function (e) {
                e.classList.contains("is-selected")
                  ? e.classList.remove("is-selected")
                  : e.classList.add("is-selected");
              }),
              (t.prototype._singleSelect = function (e) {
                for (
                  var t = this._container.querySelectorAll(".is-selected"),
                    n = t.length;
                  n--;

                )
                  t[n].classList.remove("is-selected");
                e.classList.add("is-selected");
              }),
              (t.prototype._toggleMenu = function (e) {
                this._isOpen
                  ? this._host.disposeModal()
                  : this._openContextMenu(e),
                  (this._isOpen = !this._isOpen);
              }),
              (t.prototype._setOpener = function (e) {
                var t = this;
                e.addEventListener("click", function (e) {
                  e.preventDefault(), t._toggleMenu(e);
                });
              }),
              (t.prototype._openContextMenu = function (e) {
                this._createModalHostView(
                  this._container,
                  this._position,
                  this._hostTarget
                ),
                  this._checkForSubmenus(this._container);
              }),
              (t.prototype._checkForSubmenus = function (t) {
                var n = this,
                  i = t.querySelectorAll(
                    ".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu"
                  ),
                  r = i.length;
                if (i.length)
                  for (
                    var o = function () {
                      var t = i[r].querySelector(".ms-ContextualMenu-link"),
                        o = i[r].querySelector(".ms-ContextualMenu");
                      if (o) {
                        var a = new e.ContextualMenu(o, t, "right");
                        o.addEventListener("hostAdded", function () {
                          n._host.setChildren(a.getHost());
                        });
                      }
                    };
                    r--;

                  )
                    o();
              }),
              (t.prototype._createModalHostView = function (t, n, i) {
                t.classList.remove("is-hidden"),
                  (this._host = new e.ContextualHost(t, n, i, !1));
                var r = document.createEvent("Event");
                r.initEvent("hostAdded", !0, !0), t.dispatchEvent(r);
              }),
              t
            );
          })();
          e.ContextualMenu = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e, t) {
              var n = this,
                i = $(e),
                r = i
                  .find(".ms-TextField-field")
                  .pickadate(
                    $.extend(
                      {
                        weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
                        clear: "",
                        close: "",
                        today: "",
                        onStart: function () {
                          n.initCustomView(i);
                        },
                        klass: {
                          input: "ms-DatePicker-input",
                          active: "ms-DatePicker-input--active",
                          picker: "ms-DatePicker-picker",
                          opened: "ms-DatePicker-picker--opened",
                          focused: "ms-DatePicker-picker--focused",
                          holder: "ms-DatePicker-holder",
                          frame: "ms-DatePicker-frame",
                          wrap: "ms-DatePicker-wrap",
                          box: "ms-DatePicker-dayPicker",
                          header: "ms-DatePicker-header",
                          month: "ms-DatePicker-month",
                          year: "ms-DatePicker-year",
                          table: "ms-DatePicker-table",
                          weekdays: "ms-DatePicker-weekday",
                          day: "ms-DatePicker-day",
                          disabled: "ms-DatePicker-day--disabled",
                          selected: "ms-DatePicker-day--selected",
                          highlighted: "ms-DatePicker-day--highlighted",
                          now: "ms-DatePicker-day--today",
                          infocus: "ms-DatePicker-day--infocus",
                          outfocus: "ms-DatePicker-day--outfocus",
                        },
                      },
                      t || {}
                    )
                  )
                  .pickadate("picker");
              (this.picker = r),
                r.on({
                  render: function () {
                    n.updateCustomView(i);
                  },
                });
            }
            return (
              (e.prototype.initCustomView = function (e) {
                var t = this,
                  n = e.find(".ms-DatePicker-monthComponents"),
                  i = e.find(".ms-DatePicker-goToday"),
                  r = e.find(".ms-DatePicker-monthPicker"),
                  o = e.find(".ms-DatePicker-yearPicker"),
                  a = e.find(".ms-DatePicker-wrap"),
                  s = e.find(".ms-TextField-field").pickadate("picker");
                n.appendTo(a),
                  i.appendTo(a),
                  r.appendTo(a),
                  o.appendTo(a),
                  this.updateCustomView(e),
                  s.on("open", function (e) {
                    var t = document.createEvent("MouseEvents");
                    t.initEvent("click", !0, !0), document.dispatchEvent(t);
                  }),
                  n.on("click", ".js-prevMonth", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").month - 1;
                    t.changeHighlightedDate([null, n, null]);
                  }),
                  n.on("click", ".js-nextMonth", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").month + 1;
                    t.changeHighlightedDate([null, n, null]);
                  }),
                  r.on("click", ".js-prevYear", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year - 1;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  r.on("click", ".js-nextYear", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year + 1;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  o.on("click", ".js-prevDecade", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year - 10;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  o.on("click", ".js-nextDecade", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year + 10;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  i.click(function (t) {
                    t.preventDefault();
                    var n = new Date();
                    s.set("select", [
                      n.getFullYear(),
                      n.getMonth(),
                      n.getDate(),
                    ]),
                      e
                        .removeClass("is-pickingMonths")
                        .removeClass("is-pickingYears");
                  }),
                  r.on("click", ".js-changeDate", function (n) {
                    n.preventDefault();
                    var i = $(n.target),
                      r = i.attr("data-year"),
                      o = i.attr("data-month"),
                      a = i.attr("data-day");
                    t.changeHighlightedDate([r, o, a]),
                      e.hasClass("is-pickingMonths") &&
                        e.removeClass("is-pickingMonths");
                  }),
                  o.on("click", ".js-changeDate", function (n) {
                    n.preventDefault();
                    var i = $(n.target),
                      r = i.attr("data-year"),
                      o = i.attr("data-month"),
                      a = i.attr("data-day");
                    t.changeHighlightedDate([r, o, a]),
                      e.hasClass("is-pickingYears") &&
                        e.removeClass("is-pickingYears");
                  }),
                  r.on("click", ".js-showDayPicker", function () {
                    e.removeClass("is-pickingMonths"),
                      e.removeClass("is-pickingYears");
                  }),
                  n.on("click", ".js-showMonthPicker", function () {
                    e.toggleClass("is-pickingMonths");
                  }),
                  r.on("click", ".js-showYearPicker", function () {
                    e.toggleClass("is-pickingYears");
                  });
              }),
              (e.prototype.changeHighlightedDate = function (e) {
                var t = this.setDateAttributes(e);
                this.picker.set("highlight", t);
              }),
              (e.prototype.updateCustomView = function (e) {
                var t = e.find(".ms-DatePicker-monthPicker"),
                  n = e.find(".ms-DatePicker-yearPicker"),
                  i = e.find(".ms-TextField-field").pickadate("picker");
                t.find(".ms-DatePicker-currentYear").text(i.get("view").year),
                  t
                    .find(".ms-DatePicker-monthOption")
                    .removeClass("is-highlighted"),
                  t
                    .find(
                      ".ms-DatePicker-monthOption[data-month='" +
                        i.get("highlight").month +
                        "']"
                    )
                    .addClass("is-highlighted"),
                  n.find(".ms-DatePicker-currentDecade").remove(),
                  n.find(".ms-DatePicker-optionGrid").remove();
                var r = i.get("highlight").year - 11,
                  o =
                    "<div class='ms-DatePicker-currentDecade'>" +
                    r +
                    " - " +
                    (r + 11) +
                    "</div>";
                o += "<div class='ms-DatePicker-optionGrid'>";
                for (var a = r; a < r + 12; a++)
                  o +=
                    "<span class='ms-DatePicker-yearOption js-changeDate' data-year='" +
                    a +
                    "'>" +
                    a +
                    "</span>";
                (o += "</div>"),
                  n.append(o),
                  n
                    .find(".ms-DatePicker-yearOption")
                    .removeClass("is-highlighted"),
                  n
                    .find(
                      ".ms-DatePicker-yearOption[data-year='" +
                        i.get("highlight").year +
                        "']"
                    )
                    .addClass("is-highlighted");
              }),
              (e.prototype.setDateAttributes = function (e) {
                var t = e[0],
                  n = e[1],
                  i = e[2];
                return (
                  null == t && (t = this.picker.get("highlight").year),
                  null == n && (n = this.picker.get("highlight").month),
                  null == i && (i = this.picker.get("highlight").date),
                  [t, n, i]
                );
              }),
              e
            );
          })();
          e.DatePicker = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              if (e) this.overlayElement = e;
              else {
                var t = document.createElement("div");
                t.setAttribute("class", "ms-Overlay"),
                  (this.overlayElement = t);
              }
              this.overlayElement.addEventListener(
                "click",
                this.hide.bind(this),
                !1
              );
            }
            return (
              (e.prototype.remove = function () {
                this.overlayElement.parentElement.removeChild(
                  this.overlayElement
                );
              }),
              (e.prototype.show = function () {
                this.overlayElement.classList.add("is-visible"),
                  document.body.classList.add("ms-u-overflowHidden");
              }),
              (e.prototype.hide = function () {
                this.overlayElement.classList.remove("is-visible"),
                  document.body.classList.remove("ms-u-overflowHidden");
              }),
              e
            );
          })();
          e.Overlay = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._dialog = e),
                (this._closeButtonElement = this._dialog.querySelector(
                  ".ms-Dialog-buttonClose"
                )),
                (this._actionButtonElements =
                  this._dialog.querySelectorAll(".ms-Dialog-action")),
                this._closeButtonElement &&
                  this._closeButtonElement.addEventListener(
                    "click",
                    this.close.bind(this),
                    !1
                  );
              for (var t = 0; t < this._actionButtonElements.length; t++)
                this._actionButtonElements[t].addEventListener(
                  "click",
                  this.close.bind(this),
                  !1
                );
            }
            return (
              (t.prototype.close = function () {
                this._overlay.remove(),
                  this._dialog.classList.remove("is-open"),
                  document.body.classList.remove("ms-u-overflowHidden"),
                  this._overlay.overlayElement.removeEventListener(
                    "click",
                    this.close.bind(this)
                  );
              }),
              (t.prototype.open = function () {
                this._dialog.classList.add("is-open"),
                  (this._overlay = new e.Overlay()),
                  this._dialog.classList.contains("ms-Dialog--blocking") ||
                    (this._overlay.overlayElement.addEventListener(
                      "click",
                      this.close.bind(this),
                      !1
                    ),
                    this._overlay.show(),
                    document.body.classList.add("ms-u-overflowHidden")),
                  this._dialog.parentElement.appendChild(
                    this._overlay.overlayElement
                  );
              }),
              t
            );
          })();
          e.Dialog = t;
        })(i || (i = {})),
        (function (e) {
          e.DialogHost = function () {};
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e, t) {
              (this._layer = e),
                (this._callBack = t),
                this._createElements(),
                this._renderElements();
            }
            return (
              (t.prototype.dismiss = function () {
                this.overlay.hide(), document.body.removeChild(this.panelHost);
              }),
              (t.prototype.update = function (e, t) {
                this.panelHost.replaceChild(e, this._layer), t && t();
              }),
              (t.prototype._renderElements = function () {
                document.body.appendChild(this.panelHost),
                  this._callBack && this._callBack(this._layer);
              }),
              (t.prototype._createElements = function () {
                (this.panelHost = document.createElement("div")),
                  this.panelHost.classList.add("ms-PanelHost"),
                  this.panelHost.appendChild(this._layer),
                  (this.overlay = new e.Overlay(this._overlayContainer)),
                  this.overlay.show(),
                  this.panelHost.appendChild(this.overlay.overlayElement);
              }),
              t
            );
          })();
          e.PanelHost = t;
        })(i || (i = {})),
        (function (e) {
          var t = "animate-in",
            n = "animate-out",
            i = (function () {
              function i(t, n, i) {
                (this._panel = t),
                  (this._direction = n || "right"),
                  (this._animateOverlay = i || !0),
                  (this.panelHost = new e.PanelHost(
                    this._panel,
                    this._animateInPanel
                  )),
                  (this._closeButton = this._panel.querySelector(
                    ".ms-PanelAction-close"
                  )),
                  (this._clickHandler = this.dismiss.bind(this, null)),
                  this._setEvents(),
                  document.body.setAttribute(
                    "style",
                    "height: 100%; overflow: hidden;"
                  );
              }
              return (
                (i.prototype.dismiss = function (e) {
                  var t = this;
                  this._panel.classList.add(n),
                    setTimeout(function () {
                      t._panel.classList.remove(n),
                        t._panel.classList.remove("is-open"),
                        t.panelHost.dismiss(),
                        e && e(),
                        document.body.setAttribute("style", "");
                    }, 400),
                    null !== this._closeButton &&
                      this._closeButton.removeEventListener(
                        "click",
                        this._clickHandler
                      );
                }),
                (i.prototype._setEvents = function () {
                  this.panelHost.overlay.overlayElement.addEventListener(
                    "click",
                    this._clickHandler
                  ),
                    null !== this._closeButton &&
                      this._closeButton.addEventListener(
                        "click",
                        this._clickHandler
                      );
                }),
                (i.prototype._animateInPanel = function (e) {
                  e.classList.add(t),
                    e.classList.add("is-open"),
                    setTimeout(function () {
                      e.classList.remove(t);
                    }, 400);
                }),
                i
              );
            })();
          e.Panel = i;
        })(i || (i = {})),
        (function (e) {
          var t = "ms-Dropdown-title",
            n = "is-open",
            i = "is-disabled",
            r = "is-selected",
            o = (function () {
              function o(e) {
                (this._container = e),
                  (this._dropdownLabelHelper = document.createElement("span")),
                  this._dropdownLabelHelper.classList.add(
                    "ms-Dropdown-truncator"
                  ),
                  this._dropdownLabelHelper.classList.add(t),
                  (this._newDropdownLabel = document.createElement("span")),
                  this._newDropdownLabel.classList.add(t),
                  (this._newDropdown = document.createElement("ul")),
                  this._newDropdown.classList.add("ms-Dropdown-items"),
                  (this._dropdownItems = []),
                  (this._originalDropdown = e.querySelector(
                    ".ms-Dropdown-select"
                  ));
                var n = this._originalDropdown.querySelectorAll("option");
                (this._onCloseDropdown = this._onCloseDropdown.bind(this)),
                  (this._onItemSelection = this._onItemSelection.bind(this)),
                  (this._onOpenDropdown = this._onOpenDropdown.bind(this));
                for (var o = 0; o < n.length; ++o) {
                  var a = n[o];
                  a.selected && (this._newDropdownLabel.innerHTML = a.text);
                  var s = document.createElement("li");
                  s.classList.add("ms-Dropdown-item"),
                    a.disabled && s.classList.add(i),
                    a.selected && s.classList.add(r),
                    (s.innerHTML = a.text),
                    s.addEventListener("click", this._onItemSelection),
                    this._newDropdown.appendChild(s),
                    this._dropdownItems.push({ oldOption: a, newItem: s });
                }
                e.appendChild(this._newDropdownLabel),
                  e.appendChild(this._newDropdown),
                  e.appendChild(this._dropdownLabelHelper),
                  this._newDropdownLabel.addEventListener(
                    "click",
                    this._onOpenDropdown
                  ),
                  this._checkTruncation(),
                  this._setWindowEvent();
              }
              return (
                (o.prototype._setWindowEvent = function () {
                  var e = this;
                  window.addEventListener(
                    "resize",
                    function () {
                      e._doResize(), e._checkTruncation();
                    },
                    !1
                  );
                }),
                (o.prototype._checkTruncation = function () {
                  var e = this._newDropdown.querySelector(".is-selected"),
                    t = e
                      ? e.textContent
                      : this._newDropdown.querySelectorAll(
                          ".ms-Dropdown-item"
                        )[0].textContent;
                  if (
                    ((this._dropdownLabelHelper.textContent = t),
                    this._dropdownLabelHelper.offsetHeight >
                      this._newDropdownLabel.offsetHeight)
                  ) {
                    var n = 0,
                      i = void 0;
                    do {
                      n--,
                        (i = t.slice(0, n)),
                        (this._dropdownLabelHelper.textContent = i + "...");
                    } while (
                      this._dropdownLabelHelper.offsetHeight >
                      this._newDropdownLabel.offsetHeight
                    );
                  }
                  this._newDropdownLabel.textContent =
                    this._dropdownLabelHelper.textContent;
                }),
                (o.prototype._getScreenSize = function () {
                  var e = window,
                    t = { x: 0, y: 0 },
                    n = document,
                    i = n.documentElement,
                    r = n.getElementsByTagName("body")[0];
                  return (
                    (t.x = e.innerWidth || i.clientWidth || r.clientWidth),
                    (t.y = e.innerHeight || i.clientHeight || r.clientHeight),
                    t
                  );
                }),
                (o.prototype._doResize = function () {
                  this._container.classList.contains(n) &&
                    (this._getScreenSize().x <= 479
                      ? this._openDropdownAsPanel()
                      : this._removeDropdownAsPanel());
                }),
                (o.prototype._openDropdownAsPanel = function () {
                  void 0 === this._panel &&
                    ((this._panelContainer = document.createElement("div")),
                    this._panelContainer.classList.add("ms-Panel"),
                    this._panelContainer.classList.add("ms-Dropdown"),
                    this._panelContainer.classList.add(n),
                    this._panelContainer.classList.add("animate-in"),
                    this._panelContainer.appendChild(this._newDropdown),
                    (this._panel = new e.Panel(this._panelContainer)));
                }),
                (o.prototype._removeDropdownAsPanel = function (e) {
                  var t = this;
                  void 0 !== this._panel &&
                    (e &&
                    e.target === this._panel.panelHost.overlay.overlayElement
                      ? this._container.appendChild(this._newDropdown)
                      : this._panel.dismiss(function () {
                          t._container.appendChild(t._newDropdown);
                        }),
                    (this._panel = void 0));
                }),
                (o.prototype._onOpenDropdown = function (e) {
                  var t = this._container.classList.contains(i),
                    r = this._container.classList.contains(n);
                  t ||
                    r ||
                    (e.stopPropagation(),
                    this._closeOtherDropdowns(),
                    this._container.classList.add(n),
                    document.addEventListener("click", this._onCloseDropdown),
                    this._getScreenSize().x <= 479 &&
                      this._openDropdownAsPanel());
                }),
                (o.prototype._closeOtherDropdowns = function () {
                  for (
                    var e = document.querySelectorAll(".ms-Dropdown.is-open"),
                      t = 0;
                    t < e.length;
                    t++
                  )
                    e[t].classList.remove(n);
                }),
                (o.prototype._onCloseDropdown = function (e) {
                  this._removeDropdownAsPanel(e),
                    this._container.classList.remove(n),
                    document.removeEventListener(
                      "click",
                      this._onCloseDropdown
                    );
                }),
                (o.prototype._onItemSelection = function (e) {
                  var t = e.target,
                    n = this._container.classList.contains(i),
                    o = t.classList.contains(i);
                  if (!n && !o) {
                    for (var a = 0; a < this._dropdownItems.length; ++a)
                      this._dropdownItems[a].newItem === t
                        ? (this._dropdownItems[a].newItem.classList.add(r),
                          (this._dropdownItems[a].oldOption.selected = !0))
                        : (this._dropdownItems[a].newItem.classList.remove(r),
                          (this._dropdownItems[a].oldOption.selected = !1));
                    (this._newDropdownLabel.innerHTML = t.textContent),
                      this._checkTruncation();
                    var s = document.createEvent("HTMLEvents");
                    s.initEvent("change", !1, !0),
                      this._originalDropdown.dispatchEvent(s);
                  }
                }),
                o
              );
            })();
          e.Dropdown = o;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              this._container = e;
              var t = this._container
                .querySelector(".ms-PersonaCard-action.is-active")
                .getAttribute("data-action-id");
              (this._actions = this._container.querySelector(
                ".ms-PersonaCard-actions"
              )),
                (this._expander = this._container.querySelector(
                  ".ms-PersonaCard-detailExpander"
                )),
                (this._actionDetailBox = this._container.querySelector(
                  ".ms-PersonaCard-actionDetailBox"
                )),
                this._setDetail(t),
                (this._boundOnActionClick = this._onActionClick.bind(this)),
                (this._boundOnExpanderClick = this._onExpanderClick.bind(this)),
                (this._boundOnTab = this._onTab.bind(this)),
                this._addListeners();
            }
            return (
              (t.prototype.removeListeners = function () {
                this._actions.removeEventListener(
                  "click",
                  this._boundOnActionClick
                ),
                  this._expander.removeEventListener(
                    "click",
                    this._boundOnExpanderClick
                  ),
                  this._container.removeEventListener(
                    "keydown",
                    this._boundOnTab
                  );
              }),
              (t.prototype._addListeners = function () {
                this._actions.addEventListener(
                  "click",
                  this._boundOnActionClick,
                  !1
                ),
                  this._expander.addEventListener(
                    "click",
                    this._boundOnExpanderClick,
                    !1
                  ),
                  this._container.addEventListener(
                    "keydown",
                    this._boundOnTab,
                    !1
                  );
              }),
              (t.prototype._onTab = function (e) {
                var t = e.target;
                9 === e.keyCode &&
                  t.classList.contains("ms-PersonaCard-action") &&
                  this._onActionClick(e);
              }),
              (t.prototype._onExpanderClick = function (e) {
                var t = e.target.parentElement;
                t.classList.contains("is-collapsed")
                  ? t.classList.remove("is-collapsed")
                  : t.classList.add("is-collapsed");
                var n = t.clientHeight;
                this._animateDetail(n);
              }),
              (t.prototype._onActionClick = function (e) {
                var t = e.target,
                  n = t.getAttribute("data-action-id");
                n &&
                  -1 === t.className.indexOf("is-active") &&
                  (this._setAction(t), this._setDetail(n));
              }),
              (t.prototype._setAction = function (e) {
                this._container
                  .querySelector(".ms-PersonaCard-action.is-active")
                  .classList.remove("is-active"),
                  e.classList.add("is-active");
              }),
              (t.prototype._setDetail = function (e) {
                var t = ".ms-PersonaCard-details[data-detail-id='" + e + "']",
                  n = this._container.querySelector(
                    ".ms-PersonaCard-details.is-active"
                  ),
                  i = this._container.querySelector(t);
                n && n.classList.remove("is-active"),
                  i.classList.add("is-active");
                var r = i.clientHeight;
                this._animateDetail(r);
              }),
              (t.prototype._animateDetail = function (t) {
                var n = this;
                (this._actionDetailBox.style.overflowY = "hidden"),
                  e.Animate.transition(this._actionDetailBox, {
                    height: t,
                    duration: 0.25,
                    ease: e.Ease.SINE_EASE_OUT,
                    onEnd: function () {
                      n._actionDetailBox.style.overflowY = "auto";
                    },
                  });
              }),
              t
            );
          })();
          e.PersonaCard = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._persona = e),
                (this._personaCard =
                  this._persona.querySelector(".ms-PersonaCard")),
                this._personaCard &&
                  (this._assignEvents(),
                  this._personaCard.setAttribute("style", "display: none;"),
                  this._createPersonaCard());
            }
            return (
              (t.prototype._createPersonaCard = function () {
                this._personaCardInstance = new e.PersonaCard(
                  this._personaCard
                );
              }),
              (t.prototype._createContextualHostInstance = function () {
                this._personaCard.setAttribute("style", "display: block;"),
                  (this._contextualHostInstance = new e.ContextualHost(
                    this._personaCard,
                    "top",
                    this._persona
                  ));
              }),
              (t.prototype._personaEventHandler = function () {
                this._createContextualHostInstance();
              }),
              (t.prototype._assignEvents = function () {
                var e = this;
                this._persona.addEventListener(
                  "click",
                  this._personaEventHandler.bind(this),
                  !1
                ),
                  this._persona.addEventListener(
                    "keyup",
                    function (t) {
                      return 32 === t.keyCode ? e._personaEventHandler() : null;
                    },
                    !1
                  );
              }),
              t
            );
          })();
          e.Persona = t;
        })(i || (i = {})),
        (function (e) {
          var t = ".ms-Persona-image",
            n = ".ms-Persona-primaryText",
            i = ".ms-Persona-secondaryText",
            r = (function () {
              function r(e) {
                (this._personaCollection = []),
                  (this._facePile = e),
                  this._createPersonaCollection();
              }
              return (
                (r.prototype._createPersonaCollection = function () {
                  for (
                    var r = document.querySelectorAll(".ms-Persona--facePile"),
                      o = 0;
                    o < r.length;
                    o++
                  ) {
                    var a = r[o];
                    this._personaCollection.push({
                      item: a,
                      initials: a.querySelector(".ms-Persona-initials")
                        .textContent,
                      image: a.querySelector(t)
                        ? a.querySelector(t).getAttribute("src")
                        : null,
                      primaryText: a.querySelector(n)
                        ? a.querySelector(n).textContent
                        : "",
                      secondaryText: a.querySelector(i)
                        ? a.querySelector(i).textContent
                        : "",
                      personaInstance: new e.Persona(a),
                    });
                  }
                }),
                r
              );
            })();
          e.FacePile = r;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._toggleElement = this._container.querySelector(
                  ".ms-ListItem-selectionTarget"
                )),
                this._addListeners();
            }
            return (
              (e.prototype.removeListeners = function () {
                this._toggleElement.removeEventListener(
                  "click",
                  this._toggleHandler.bind(this)
                );
              }),
              (e.prototype._addListeners = function () {
                this._toggleElement.addEventListener(
                  "click",
                  this._toggleHandler.bind(this),
                  !1
                );
              }),
              (e.prototype._toggleHandler = function () {
                this._container.classList.toggle("is-selected");
              }),
              e
            );
          })();
          e.ListItem = t;
        })(i || (i = {})),
        (function (e) {
          e.List = function (t) {
            (this._container = t), (this._listItemComponents = []);
            for (
              var n = this._container.querySelectorAll(".ms-ListItem"), i = 0;
              i < n.length;
              i++
            )
              this._listItemComponents[i] = new e.ListItem(n[i]);
          };
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._textContainerMaxWidth = 700),
                (this._bufferElementsWidth = 88),
                (this._bufferElementsWidthSmall = 35),
                (this.SMALL_BREAK_POINT = 480),
                (this.container = e),
                this.init();
            }
            return (
              (e.prototype.init = function () {
                this._cacheDOM(),
                  this._setListeners(),
                  (this._clientWidth = this._errorBanner.offsetWidth),
                  (this._initTextWidth = this._clipper.offsetWidth),
                  this._onResize();
              }),
              (e.prototype.show = function () {
                this._errorBanner.className = "ms-MessageBanner";
              }),
              (e.prototype.showBanner = function () {
                this.show();
              }),
              (e.prototype.hide = function () {
                -1 === this._errorBanner.className.indexOf("hide") &&
                  ((this._errorBanner.className += " hide"),
                  setTimeout(this._hideMessageBanner.bind(this), 500));
              }),
              (e.prototype._hideMessageBanner = function () {
                this._errorBanner.className = "ms-MessageBanner is-hidden";
              }),
              (e.prototype._onResize = function () {
                (this._clientWidth = this._errorBanner.offsetWidth),
                  window.innerWidth >= this.SMALL_BREAK_POINT
                    ? this._resizeRegular()
                    : this._resizeSmall();
              }),
              (e.prototype._resizeRegular = function () {
                this._clientWidth - this._bufferSize > this._initTextWidth &&
                this._initTextWidth < this._textContainerMaxWidth
                  ? ((this._textWidth = "auto"),
                    (this._chevronButton.className = "ms-MessageBanner-expand"),
                    this._collapse())
                  : ((this._textWidth =
                      Math.min(
                        this._clientWidth - this._bufferSize,
                        this._textContainerMaxWidth
                      ) + "px"),
                    -1 ===
                      this._chevronButton.className.indexOf("is-visible") &&
                      (this._chevronButton.className += " is-visible")),
                  (this._clipper.style.width = this._textWidth);
              }),
              (e.prototype._resizeSmall = function () {
                this._clientWidth -
                  (this._bufferElementsWidthSmall +
                    this._closeButton.offsetWidth) >
                this._initTextWidth
                  ? ((this._textWidth = "auto"), this._collapse())
                  : (this._textWidth =
                      this._clientWidth -
                      (this._bufferElementsWidthSmall +
                        this._closeButton.offsetWidth) +
                      "px"),
                  (this._clipper.style.width = this._textWidth);
              }),
              (e.prototype._cacheDOM = function () {
                (this._errorBanner = this.container),
                  (this._clipper = this.container.querySelector(
                    ".ms-MessageBanner-clipper"
                  )),
                  (this._chevronButton = this.container.querySelector(
                    ".ms-MessageBanner-expand"
                  )),
                  (this._actionButton = this.container.querySelector(
                    ".ms-MessageBanner-action"
                  )),
                  (this._bufferSize =
                    this._actionButton.offsetWidth + this._bufferElementsWidth),
                  (this._closeButton = this.container.querySelector(
                    ".ms-MessageBanner-close"
                  ));
              }),
              (e.prototype._expand = function () {
                var e = this._chevronButton.querySelector(".ms-Icon");
                (this._errorBanner.className += " is-expanded"),
                  (e.className = "ms-Icon ms-Icon--DoubleChevronUp");
              }),
              (e.prototype._collapse = function () {
                var e = this._chevronButton.querySelector(".ms-Icon");
                (this._errorBanner.className = "ms-MessageBanner"),
                  (e.className = "ms-Icon ms-Icon--DoubleChevronDown");
              }),
              (e.prototype._toggleExpansion = function () {
                this._errorBanner.className.indexOf("is-expanded") > -1
                  ? this._collapse()
                  : this._expand();
              }),
              (e.prototype._setListeners = function () {
                window.addEventListener(
                  "resize",
                  this._onResize.bind(this),
                  !1
                ),
                  this._chevronButton.addEventListener(
                    "click",
                    this._toggleExpansion.bind(this),
                    !1
                  ),
                  this._closeButton.addEventListener(
                    "click",
                    this.hide.bind(this),
                    !1
                  );
              }),
              e
            );
          })();
          e.MessageBanner = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._container = e),
                (this._peoplePickerMenu = this._container.querySelector(
                  ".ms-PeoplePicker-results"
                )),
                (this._peoplePickerSearch = this._container.querySelector(
                  ".ms-TextField-field"
                )),
                (this._peoplePickerSearchBox = this._container.querySelector(
                  ".ms-PeoplePicker-searchBox"
                )),
                (this._selectedPeople = this._container.querySelector(
                  ".ms-PeoplePicker-selectedPeople"
                )),
                this._assignClicks(),
                this._selectedPeople &&
                  (this._assignRemoveHandler(),
                  (this._selectedCount = this._container.querySelector(
                    ".ms-PeoplePicker-selectedCount"
                  )),
                  (this._selectedPlural = this._container.querySelector(
                    ".ms-PeoplePicker-selectedCountPlural"
                  ))),
                this._peoplePickerMenu &&
                  this._peoplePickerMenu.setAttribute(
                    "style",
                    "display: none;"
                  );
            }
            return (
              (t.prototype._createModalHost = function (t) {
                t.stopPropagation(),
                  this._peoplePickerMenu.setAttribute(
                    "style",
                    "display: block;"
                  ),
                  (this._contextualHostView = new e.ContextualHost(
                    this._peoplePickerMenu,
                    "bottom",
                    this._peoplePickerSearchBox,
                    !1,
                    [""],
                    !0,
                    this._contextHostCallBack.bind(this)
                  )),
                  this._peoplePickerSearchBox.classList.add("is-active"),
                  (this._isContextualMenuOpen = !0);
              }),
              (t.prototype._clickHandler = function (e) {
                this._createModalHost(e);
                var t = this._peoplePickerMenu.querySelector(
                    ".ms-PeoplePicker-result"
                  ).parentNode,
                  n = t.cloneNode(!0);
                t.parentNode.replaceChild(n, t),
                  (this._peoplePickerResults =
                    this._peoplePickerMenu.querySelectorAll(
                      ".ms-PeoplePicker-result"
                    ));
                for (var i = 0; i < this._peoplePickerResults.length; i++) {
                  var r =
                      this._peoplePickerResults[i].querySelector(".ms-Persona"),
                    o = this._peoplePickerResults[i].querySelector(
                      ".ms-PeoplePicker-resultAction"
                    );
                  r.addEventListener(
                    "click",
                    this._selectResult.bind(this),
                    !0
                  ),
                    o.addEventListener(
                      "click",
                      this._removeItem.bind(this),
                      !0
                    );
                }
              }),
              (t.prototype._selectResult = function (e) {
                e.stopPropagation();
                var t = this._findElement(e.target, "ms-Persona").cloneNode(!0);
                this._container.classList.contains("ms-PeoplePicker--facePile")
                  ? this._addResultToMembers(t)
                  : this._tokenizeResult(t),
                  this._updateCount(),
                  this._contextualHostView.disposeModal();
              }),
              (t.prototype._findElement = function (e, t) {
                for (var n = e.parentNode; !n.classList.contains(t); )
                  n = n.parentNode;
                return n;
              }),
              (t.prototype._addRemoveBtn = function (e, t) {
                var n,
                  i = document.createElement("i");
                t
                  ? ((n = document.createElement("div")).classList.add(
                      "ms-Persona-actionIcon"
                    ),
                    n.addEventListener(
                      "click",
                      this._removeToken.bind(this),
                      !0
                    ))
                  : ((n = document.createElement("button")).classList.add(
                      "ms-PeoplePicker-resultAction"
                    ),
                    n.addEventListener(
                      "click",
                      this._removeResult.bind(this),
                      !0
                    )),
                  i.classList.add("ms-Icon", "ms-Icon--Cancel"),
                  n.appendChild(i),
                  e.appendChild(n);
              }),
              (t.prototype._removeToken = function (e) {
                this._findElement(e.target, "ms-Persona").remove();
              }),
              (t.prototype._removeResult = function (e) {
                this._findElement(
                  e.target,
                  "ms-PeoplePicker-selectedPerson"
                ).remove(),
                  this._updateCount();
              }),
              (t.prototype._removeItem = function (e) {
                this._findElement(e.target, "ms-PeoplePicker-result").remove();
              }),
              (t.prototype._updateCount = function () {
                if (this._selectedPeople) {
                  var e = this._selectedPeople.querySelectorAll(
                    ".ms-PeoplePicker-selectedPerson"
                  ).length;
                  (this._selectedCount.textContent = e.toString()),
                    (this._selectedPlural.style.display =
                      1 === e ? "none" : "inline");
                }
              }),
              (t.prototype._tokenizeResult = function (e) {
                var t = this._container.querySelector(
                    ".ms-PeoplePicker-searchBox"
                  ),
                  n = t.querySelector(".ms-TextField");
                e.classList.add("ms-Persona--token", "ms-PeoplePicker-persona"),
                  this._addRemoveBtn(e, !0),
                  e.classList.contains("ms-Persona--sm") &&
                    (e.classList.remove("ms-Persona--sm"),
                    e.classList.add("ms-Persona--xs")),
                  t.insertBefore(e, n);
              }),
              (t.prototype._addResultToMembers = function (e) {
                var t = this._container.querySelector(
                    ".ms-PeoplePicker-selectedPeople"
                  ),
                  n = t.querySelector(".ms-PeoplePicker-selectedPerson"),
                  i = document.createElement("li");
                i.classList.add("ms-PeoplePicker-selectedPerson"),
                  (i.tabIndex = 1),
                  i.appendChild(e),
                  this._addRemoveBtn(i, !1),
                  i
                    .querySelector(".ms-PeoplePicker-resultAction")
                    .addEventListener(
                      "click",
                      this._removeResult.bind(this),
                      !0
                    ),
                  t.insertBefore(i, n);
              }),
              (t.prototype._assignClicks = function () {
                var e = this;
                this._peoplePickerSearch.addEventListener(
                  "click",
                  this._clickHandler.bind(this),
                  !0
                ),
                  this._peoplePickerSearch.addEventListener(
                    "keyup",
                    function (t) {
                      27 === t.keyCode ||
                        e._isContextualMenuOpen ||
                        e._clickHandler(t);
                    },
                    !0
                  );
              }),
              (t.prototype._assignRemoveHandler = function () {
                for (
                  var e = this._selectedPeople.querySelectorAll(
                      ".ms-PeoplePicker-selectedPerson"
                    ),
                    t = 0;
                  t < e.length;
                  t++
                )
                  e[t]
                    .querySelector(".ms-PeoplePicker-resultAction")
                    .addEventListener(
                      "click",
                      this._removeResult.bind(this),
                      !0
                    );
              }),
              (t.prototype._contextHostCallBack = function () {
                this._peoplePickerSearchBox.classList.remove("is-active"),
                  (this._isContextualMenuOpen = !1);
              }),
              t
            );
          })();
          e.PeoplePicker = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                this._addListeners(),
                (this._container.querySelector(
                  ".ms-Pivot-content"
                ).style.display = "block");
            }
            return (
              (e.prototype.removeListeners = function () {
                this._container.removeEventListener(
                  "click",
                  this._selectTab.bind(this)
                );
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._container
                  .querySelector(".ms-Pivot-links")
                  .addEventListener(
                    "click",
                    this._selectTabMouse.bind(this),
                    !1
                  ),
                  this._container.addEventListener(
                    "keyup",
                    function (t) {
                      13 === t.keyCode && e._selectTabKeyboard(t);
                    },
                    !0
                  );
              }),
              (e.prototype._selectTab = function (e) {
                if (
                  e.classList.contains("ms-Pivot-link") &&
                  !e.querySelector(".ms-Pivot-ellipsis")
                ) {
                  for (var t = e.parentElement.firstElementChild; t; )
                    t.classList.remove("is-selected"),
                      (t = t.nextElementSibling);
                  e.classList.add("is-selected");
                  var n = this._container.querySelectorAll(".ms-Pivot-content");
                  Array.prototype.forEach.call(n, function (e, t) {
                    e.style.display = "none";
                  });
                  var i = e.getAttribute("data-content");
                  this._container.querySelector(
                    ".ms-Pivot-content[data-content='" + i + "']"
                  ).style.display = "block";
                }
              }),
              (e.prototype._selectTabMouse = function (e) {
                e.preventDefault();
                var t = e.target;
                this._selectTab(t);
              }),
              (e.prototype._selectTabKeyboard = function (e) {
                e.preventDefault();
                var t = e.target;
                this._selectTab(t);
              }),
              e
            );
          })();
          e.Pivot = t;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this.container = e), this.cacheDOM();
            }
            return (
              (e.prototype.setProgressPercent = function (e) {
                this._progressBar.style.width =
                  Math.round(this._width * e) + "px";
              }),
              (e.prototype.setProgress = function (e) {
                this._progress = e;
                var t = this._progress / this._total;
                this.setProgressPercent(t);
              }),
              (e.prototype.setTotal = function (e) {
                this._total = e;
              }),
              (e.prototype.setName = function (e) {
                this._itemName.innerHTML = e;
              }),
              (e.prototype.setDescription = function (e) {
                this._itemDescription.innerHTML = e;
              }),
              (e.prototype.cacheDOM = function () {
                (this._itemName =
                  this.container.querySelector(
                    ".ms-ProgressIndicator-itemName"
                  ) || null),
                  (this._itemDescription =
                    this.container.querySelector(
                      ".ms-ProgressIndicator-itemDescription"
                    ) || null),
                  (this._progressBar = this.container.querySelector(
                    ".ms-ProgressIndicator-progressBar"
                  ));
                var e = this.container.querySelector(
                  ".ms-ProgressIndicator-itemProgress"
                );
                this._width = e.offsetWidth;
              }),
              e
            );
          })();
          e.ProgressIndicator = t;
        })(i || (i = {})),
        (function (e) {
          var t = function (e, t) {
              (this.element = e), (this.j = t);
            },
            n = (function () {
              function e(e) {
                (this.eightSize = 0.2),
                  (this.animationSpeed = 90),
                  (this.parentSize = 20),
                  (this.fadeIncrement = 0),
                  (this.circleObjects = []),
                  (this._target = e),
                  this._init();
              }
              return (
                (e.prototype.start = function () {
                  var e = this;
                  this.stop(),
                    (this.interval = setInterval(function () {
                      for (var t = e.circleObjects.length; t--; )
                        e._fade(e.circleObjects[t]);
                    }, this.animationSpeed));
                }),
                (e.prototype.stop = function () {
                  clearInterval(this.interval);
                }),
                (e.prototype._init = function () {
                  this._setTargetElement(),
                    this._setPropertiesForSize(),
                    this._createCirclesAndArrange(),
                    this._initializeOpacities(),
                    this.start();
                }),
                (e.prototype._setPropertiesForSize = function () {
                  this.spinner.className.indexOf("large") > -1 &&
                    ((this.parentSize = 28), (this.eightSize = 0.179)),
                    (this.offsetSize = this.eightSize),
                    (this.numCircles = 8);
                }),
                (e.prototype._setTargetElement = function () {
                  -1 === this._target.className.indexOf("ms-Spinner")
                    ? ((this.spinner = document.createElement("div")),
                      (this.spinner.className = "ms-Spinner"),
                      this._target.appendChild(this.spinner))
                    : (this.spinner = this._target);
                }),
                (e.prototype._initializeOpacities = function () {
                  var e,
                    t = 0,
                    n = 1;
                  for (
                    this.fadeIncrement = 1 / this.numCircles;
                    t < this.numCircles;
                    t++
                  ) {
                    var i = this.circleObjects[t];
                    (e = this.fadeIncrement * n++),
                      this._setOpacity(i.element, e);
                  }
                }),
                (e.prototype._fade = function (e) {
                  var t = this._getOpacity(e.element) - this.fadeIncrement;
                  t <= 0 && (t = 1), this._setOpacity(e.element, t);
                }),
                (e.prototype._getOpacity = function (e) {
                  return parseFloat(
                    window.getComputedStyle(e).getPropertyValue("opacity")
                  );
                }),
                (e.prototype._setOpacity = function (e, t) {
                  e.style.opacity = t.toString();
                }),
                (e.prototype._createCircle = function () {
                  var e = document.createElement("div");
                  return (
                    (e.className = "ms-Spinner-circle"),
                    (e.style.width = e.style.height =
                      this.parentSize * this.offsetSize + "px"),
                    e
                  );
                }),
                (e.prototype._createCirclesAndArrange = function () {
                  for (
                    var e,
                      n = 0,
                      i = this.parentSize * this.offsetSize,
                      r = (2 * Math.PI) / this.numCircles,
                      o = this.numCircles,
                      a = 0.5 * (this.parentSize - i);
                    o--;

                  ) {
                    var s = this._createCircle(),
                      c =
                        Math.round(
                          0.5 * this.parentSize +
                            a * Math.cos(n) -
                            0.5 * s.clientWidth
                        ) -
                        0.5 * i,
                      l =
                        Math.round(
                          0.5 * this.parentSize +
                            a * Math.sin(n) -
                            0.5 * s.clientHeight
                        ) -
                        0.5 * i;
                    this.spinner.appendChild(s),
                      (s.style.left = c + "px"),
                      (s.style.top = l + "px"),
                      (n += r),
                      (e = new t(s, o)),
                      this.circleObjects.push(e);
                  }
                }),
                e
              );
            })();
          e.Spinner = n;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this.container = e),
                -1 !==
                  this.container.className.indexOf("ms-Table--selectable") &&
                  this._addListeners();
            }
            return (
              (e.prototype._addListeners = function () {
                this.container.addEventListener(
                  "click",
                  this._toggleRowSelection.bind(this),
                  !1
                );
              }),
              (e.prototype._toggleRowSelection = function (e) {
                var t = e.target.parentElement;
                if ("TR" === t.tagName) {
                  var n = "is-selected";
                  t.className === n ? (t.className = "") : (t.className = n);
                }
              }),
              e
            );
          })();
          e.Table = t;
        })(i || (i = {})),
        (function (e) {
          var t;
          !(function (e) {
            var t;
            ((t = e.Type || (e.Type = {}))[(t.Placeholder = 0)] =
              "Placeholder"),
              (t[(t.Underlined = 1)] = "Underlined"),
              e.Type;
          })(t || (t = {}));
          var n = (function () {
            function e(e) {
              (this._container = e),
                (this._type = []),
                (this._textField = this._container.querySelector(
                  ".ms-TextField-field"
                )),
                (this._textFieldLabel =
                  this._container.querySelector(".ms-Label")),
                this._setTextFieldType(),
                this._addListeners();
            }
            return (
              (e.prototype._setTextFieldType = function () {
                this._container.classList.contains(
                  "ms-TextField--placeholder"
                ) && this._type.push(t.Type.Placeholder),
                  this._container.classList.contains(
                    "ms-TextField--underlined"
                  ) && this._type.push(t.Type.Underlined);
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._textFieldLabel.addEventListener("click", function (t) {
                  e._textField.focus();
                }),
                  this._type.indexOf(t.Type.Placeholder) >= 0 &&
                    (this._textField.addEventListener("focus", function (t) {
                      e._textFieldLabel.style.display = "none";
                    }),
                    this._textField.addEventListener("blur", function (t) {
                      0 === e._textField.value.length &&
                        (e._textFieldLabel.style.display = "block");
                    })),
                  this._type.indexOf(t.Type.Underlined) >= 0 &&
                    (this._textField.addEventListener("focus", function (t) {
                      e._container.classList.add("is-active");
                    }),
                    this._textField.addEventListener("blur", function (t) {
                      e._container.classList.remove("is-active");
                    }));
              }),
              e
            );
          })();
          e.TextField = n;
        })(i || (i = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._toggleField =
                  this._container.querySelector(".ms-Toggle-field")),
                this._addListeners();
            }
            return (
              (e.prototype.removeListeners = function () {
                this._toggleField.removeEventListener(
                  "click",
                  this._toggleHandler.bind(this)
                );
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._toggleField.addEventListener(
                  "click",
                  this._toggleHandler.bind(this),
                  !1
                ),
                  this._toggleField.addEventListener(
                    "keyup",
                    function (t) {
                      return 32 === t.keyCode ? e._toggleHandler() : null;
                    },
                    !1
                  );
              }),
              (e.prototype._toggleHandler = function () {
                this._toggleField.classList.toggle("is-selected");
              }),
              e
            );
          })();
          e.Toggle = t;
        })(i || (i = {}));
    },
    2382: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return ka;
        },
      });
      var i = "prototype",
        r = "function",
        o = "_dynClass",
        a = "_unknown_",
        s = Object,
        c = s.getPrototypeOf,
        l = s.getOwnPropertyNames,
        u = 0;
      function d(e, t) {
        return e && s.prototype.hasOwnProperty.call(e, t);
      }
      function f(e) {
        return e && (e === s.prototype || e === Array.prototype);
      }
      function p(e) {
        return f(e) || e === Function.prototype;
      }
      function h(e) {
        var t;
        if (e) {
          if (c) return c(e);
          var n =
            e.__proto__ ||
            e.prototype ||
            (e.constructor ? e.constructor.prototype : null);
          (t = e._dyn__proto__ || n),
            d(e, "_dyn__proto__") ||
              (delete e._dynInstProto,
              (t = e._dyn__proto__ = e._dynInstProto || e._dyn__proto__),
              (e._dynInstProto = n));
        }
        return t;
      }
      function g(e, t) {
        var n = [];
        if (l) n = l(e);
        else for (var i in e) "string" == typeof i && d(e, i) && n.push(i);
        if (n && n.length > 0) for (var r = 0; r < n.length; r++) t(n[r]);
      }
      function m(e, t, n) {
        return "constructor" !== t && typeof e[t] === r && (n || d(e, t));
      }
      function v(e) {
        throw new TypeError("DynamicProto: " + e);
      }
      function y(e, t) {
        for (var n = e.length - 1; n >= 0; n--) if (e[n] === t) return !0;
        return !1;
      }
      function _(e, t, n, i) {
        var a = null;
        if (e && d(n, o)) {
          var s = e._dynInstFuncs || {};
          if (
            ((a = (s[n._dynClass] || {})[t]) || v("Missing [" + t + "] " + r),
            !a._dynInstChk && !1 !== s._dynInstChk)
          ) {
            for (
              var c = !d(e, t), l = h(e), u = [];
              c && l && !p(l) && !y(u, l);

            ) {
              var f = l[t];
              if (f) {
                c = f === i;
                break;
              }
              u.push(l), (l = h(l));
            }
            try {
              c && (e[t] = a), (a._dynInstChk = 1);
            } catch (e) {
              s._dynInstChk = !1;
            }
          }
        }
        return a;
      }
      function x(e, t, n) {
        var i = t[e];
        return (
          i === n && (i = h(t)[e]),
          typeof i !== r && v("[" + e + "] is not a " + r),
          i
        );
      }
      function b(e, t) {
        return d(e, i)
          ? e.name || t || a
          : ((e || {}).constructor || {}).name || t || a;
      }
      function C(e, t, n, r) {
        d(e, i) || v("theClass is an invalid class definition.");
        var a = e.prototype;
        (function (e, t) {
          if (c) {
            for (var n = [], i = h(t); i && !p(i) && !y(n, i); ) {
              if (i === e) return !0;
              n.push(i), (i = h(i));
            }
            return !1;
          }
          return !0;
        })(a, t) ||
          v("[" + b(e) + "] is not in class hierarchy of [" + b(t) + "]");
        var s = null;
        d(a, o)
          ? (s = a._dynClass)
          : ((s = "_dynCls$" + b(e, "_") + "$" + u), u++, (a._dynClass = s));
        var l = C._dfOpts,
          w = !!l.useBaseInst;
        w && r && void 0 !== r.useBaseInst && (w = !!r.useBaseInst);
        var k = (function (e) {
            var t = {};
            return (
              g(e, function (n) {
                !t[n] && m(e, n, !1) && (t[n] = e[n]);
              }),
              t
            );
          })(t),
          S = (function (e, t, n, i) {
            function r(e, t, n) {
              var r = t[n];
              if (r._isDynProxy && i) {
                var o = e._dynInstFuncs || {};
                !1 !== o._dynInstChk && (r = (o[t._dynClass] || {})[n] || r);
              }
              return function () {
                return r.apply(e, arguments);
              };
            }
            var o = {};
            g(n, function (e) {
              o[e] = r(t, n, e);
            });
            for (var a = h(e), s = []; a && !p(a) && !y(s, a); )
              g(a, function (e) {
                !o[e] && m(a, e, !c) && (o[e] = r(t, a, e));
              }),
                s.push(a),
                (a = h(a));
            return o;
          })(a, t, k, w);
        n(t, S);
        var E = !!c && !!l.setInstFuncs;
        E && r && (E = !!r.setInstFuncs),
          (function (e, t, n, i, r) {
            if (!f(e)) {
              var o = (n._dynInstFuncs = n._dynInstFuncs || {}),
                a = (o[t] = o[t] || {});
              !1 !== o._dynInstChk && (o._dynInstChk = !!r),
                g(n, function (t) {
                  m(n, t, !1) &&
                    n[t] !== i[t] &&
                    ((a[t] = n[t]),
                    delete n[t],
                    (!d(e, t) || (e[t] && !e[t]._isDynProxy)) &&
                      (e[t] = (function (e, t) {
                        var n = function () {
                          return (_(this, t, e, n) || x(t, e, n)).apply(
                            this,
                            arguments
                          );
                        };
                        return (n._isDynProxy = 1), n;
                      })(e, t)));
                });
            }
          })(a, s, t, k, !1 !== E);
      }
      C._dfOpts = { setInstFuncs: !0, useBaseInst: !0 };
      var w = "function",
        k = "object",
        S = "undefined",
        E = Object,
        T = E.prototype,
        L = E.assign,
        P = E.create,
        I = E.defineProperty,
        A = T.hasOwnProperty,
        D = null;
      function N(e) {
        return (
          void 0 === e && (e = !0),
          (D && e) ||
            (typeof globalThis !== S && globalThis && (D = globalThis),
            typeof self !== S && self && (D = self),
            typeof window !== S && window && (D = window),
            typeof n.g !== S && n.g && (D = n.g)),
          D
        );
      }
      function M(e) {
        throw new TypeError(e);
      }
      function O(e) {
        if (P) return P(e);
        if (null == e) return {};
        var t = typeof e;
        function n() {}
        return (
          t !== k &&
            t !== w &&
            M("Object prototype may only be an Object:" + e),
          (n.prototype = e),
          new n()
        );
      }
      (N() || {}).Symbol, (N() || {}).Reflect;
      var B =
          L ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                T.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          },
        R = function (e, t) {
          return (
            (R =
              E.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            R(e, t)
          );
        };
      function H(e, t) {
        function n() {
          this.constructor = e;
        }
        typeof t !== w &&
          null !== t &&
          M(
            "Class extends value " + String(t) + " is not a constructor or null"
          ),
          R(e, t),
          (e.prototype =
            null === t ? O(t) : ((n.prototype = t.prototype), new n()));
      }
      function q(e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++)
          e[r] = t[n];
        return e;
      }
      var F = "AppInsightsPropertiesPlugin",
        j = "AppInsightsChannelPlugin",
        U = "",
        z = "extensionConfig",
        W = I,
        V = E.freeze,
        $ = (E.seal, E.keys),
        X = String.prototype,
        K = X.trim,
        G = X.endsWith,
        Y = (X.startsWith, Date.prototype.toISOString),
        J = Array.isArray,
        Z = T.toString,
        Q = A.toString,
        ee = Q.call(E),
        te = /-([a-z])/g,
        ne = /([^\w\d_$])/g,
        ie = /^(\d+[\w\d_$])/,
        re = Object.getPrototypeOf;
      function oe(e) {
        if (e) {
          if (re) return re(e);
          var t = e.__proto__ || e.prototype || e.constructor;
          if (t) return t;
        }
        return null;
      }
      function ae(e) {
        return void 0 === e || typeof e === S;
      }
      function se(e) {
        return null === e || ae(e);
      }
      function ce(e) {
        return !se(e);
      }
      function le(e, t) {
        return !(!e || !A.call(e, t));
      }
      function ue(e) {
        return !(!e || typeof e !== k);
      }
      function de(e) {
        return !(!e || typeof e !== w);
      }
      function fe(e) {
        var t = e;
        return (
          t &&
            ve(t) &&
            (t = (t = (t = t.replace(te, function (e, t) {
              return t.toUpperCase();
            })).replace(ne, "_")).replace(ie, function (e, t) {
              return "_" + t;
            })),
          t
        );
      }
      function pe(e, t) {
        if (e) for (var n in e) A.call(e, n) && t.call(e, n, e[n]);
      }
      function he(e, t) {
        return !(!e || !t) && -1 !== e.indexOf(t);
      }
      var ge =
        J ||
        function (e) {
          return !(!e || "[object Array]" !== Z.call(e));
        };
      function me(e) {
        return !(!e || "[object Error]" !== Z.call(e));
      }
      function ve(e) {
        return "string" == typeof e;
      }
      function ye(e) {
        return "number" == typeof e;
      }
      function _e(e) {
        return "boolean" == typeof e;
      }
      function xe(e) {
        var t = !1;
        if (e && "object" == typeof e) {
          var n = re ? re(e) : oe(e);
          n
            ? (n.constructor && A.call(n, "constructor") && (n = n.constructor),
              (t = typeof n === w && Q.call(n) === ee))
            : (t = !0);
        }
        return t;
      }
      function be(e) {
        if (e)
          return Y
            ? e.toISOString()
            : (function (e) {
                if (e && e.getUTCFullYear) {
                  var t = function (e) {
                    var t = String(e);
                    return 1 === t.length && (t = "0" + t), t;
                  };
                  return (
                    e.getUTCFullYear() +
                    "-" +
                    t(e.getUTCMonth() + 1) +
                    "-" +
                    t(e.getUTCDate()) +
                    "T" +
                    t(e.getUTCHours()) +
                    ":" +
                    t(e.getUTCMinutes()) +
                    ":" +
                    t(e.getUTCSeconds()) +
                    "." +
                    String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(
                      2,
                      5
                    ) +
                    "Z"
                  );
                }
              })(e);
      }
      function Ce(e, t, n) {
        var i = e.length;
        try {
          for (
            var r = 0;
            r < i && (!(r in e) || -1 !== t.call(n || e, e[r], r, e));
            r++
          );
        } catch (e) {}
      }
      function we(e, t, n) {
        if (e) {
          if (e.indexOf) return e.indexOf(t, n);
          var i = e.length,
            r = n || 0;
          try {
            for (var o = Math.max(r >= 0 ? r : i - Math.abs(r), 0); o < i; o++)
              if (o in e && e[o] === t) return o;
          } catch (e) {}
        }
        return -1;
      }
      function ke(e, t, n) {
        var i;
        if (e) {
          if (e.map) return e.map(t, n);
          var r = e.length,
            o = n || e;
          i = new Array(r);
          try {
            for (var a = 0; a < r; a++) a in e && (i[a] = t.call(o, e[a], e));
          } catch (e) {}
        }
        return i;
      }
      function Se(e) {
        return (
          e &&
            (e =
              K && e.trim
                ? e.trim()
                : e.replace
                ? e.replace(/^\s+|\s+$/g, U)
                : e),
          e
        );
      }
      var Ee = !{ toString: null }.propertyIsEnumerable("toString"),
        Te = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ];
      function Le(e) {
        var t = typeof e;
        if (
          (t === w ||
            (t === k && null !== e) ||
            M("objKeys called on non-object"),
          !Ee && $)
        )
          return $(e);
        var n = [];
        for (var i in e) e && A.call(e, i) && n.push(i);
        if (Ee)
          for (var r = Te.length, o = 0; o < r; o++)
            e && A.call(e, Te[o]) && n.push(Te[o]);
        return n;
      }
      function Pe(e, t, n, i) {
        if (W)
          try {
            var r = { enumerable: !0, configurable: !0 };
            return n && (r.get = n), i && (r.set = i), W(e, t, r), !0;
          } catch (e) {}
        return !1;
      }
      function Ie(e) {
        return (
          V &&
            pe(e, function (e, t) {
              (ge(t) || ue(t)) && V(t);
            }),
          Ae(e)
        );
      }
      var Ae =
        V ||
        function (e) {
          return e;
        };
      function De() {
        var e = Date;
        return e.now ? e.now() : new e().getTime();
      }
      function Ne(e) {
        return me(e) ? e.name : U;
      }
      function Me(e, t, n, i, r) {
        var o = n;
        return (
          e &&
            ((o = e[t]) === n ||
              (r && !r(o)) ||
              (i && !i(n)) ||
              ((o = n), (e[t] = o))),
          o
        );
      }
      function Oe(e, t, n) {
        var i;
        return (
          e
            ? !(i = e[t]) && se(i) && ((i = ae(n) ? {} : n), (e[t] = i))
            : (i = ae(n) ? {} : n),
          i
        );
      }
      function Be(e, t) {
        return se(e) ? t : e;
      }
      function Re(e) {
        return !!e;
      }
      function He(e) {
        throw new Error(e);
      }
      function qe(e, t) {
        var n = null,
          i = null;
        return (
          de(e) ? (n = e) : (i = e),
          function () {
            var e = arguments;
            if ((n && (i = n()), i)) return i[t].apply(i, e);
          }
        );
      }
      function Fe(e, t, n, i, r) {
        e && t && n && (!1 !== r || ae(e[t])) && (e[t] = qe(n, i));
      }
      function je(e, t, n, i) {
        return (
          e &&
            t &&
            ue(e) &&
            ge(n) &&
            Ce(n, function (n) {
              ve(n) && Fe(e, n, t, n, i);
            }),
          e
        );
      }
      function Ue(e) {
        return e && L && (e = E(L({}, e))), e;
      }
      function ze(e, t, n, i, r, o) {
        var a = arguments,
          s = a[0] || {},
          c = a.length,
          l = !1,
          u = 1;
        for (
          c > 0 && _e(s) && ((l = s), (s = a[u] || {}), u++), ue(s) || (s = {});
          u < c;
          u++
        ) {
          var d = a[u],
            f = ge(d),
            p = ue(d);
          for (var h in d) {
            var g = (f && h in d) || (p && A.call(d, h));
            if (g) {
              var m = d[h],
                v = void 0;
              if (l && m && ((v = ge(m)) || xe(m))) {
                var y = s[h];
                v ? ge(y) || (y = []) : xe(y) || (y = {}), (m = ze(l, y, m));
              }
              void 0 !== m && (s[h] = m);
            }
          }
        }
        return s;
      }
      var We = "correlationHeaderExcludePatterns";
      function Ve(e, t) {
        return (
          void 0 === t && (t = !1),
          null == e ? t : "true" === e.toString().toLowerCase()
        );
      }
      function $e(e) {
        (isNaN(e) || e < 0) && (e = 0);
        var t = "" + ((e = Math.round(e)) % 1e3),
          n = "" + (Math.floor(e / 1e3) % 60),
          i = "" + (Math.floor(e / 6e4) % 60),
          r = "" + (Math.floor(e / 36e5) % 24),
          o = Math.floor(e / 864e5);
        return (
          (t = 1 === t.length ? "00" + t : 2 === t.length ? "0" + t : t),
          (n = n.length < 2 ? "0" + n : n),
          (i = i.length < 2 ? "0" + i : i),
          (o > 0 ? o + "." : "") +
            (r = r.length < 2 ? "0" + r : r) +
            ":" +
            i +
            ":" +
            n +
            "." +
            t
        );
      }
      var Xe = "window",
        Ke = "JSON",
        Ge = "msie",
        Ye = "trident/index.html",
        Je = "XMLHttpRequest",
        Ze = null,
        Qe = null,
        et = null,
        tt = null;
      function nt(e, t) {
        var n = !1;
        if (e) {
          try {
            if (!(n = t in e)) {
              var i = e.prototype;
              i && (n = t in i);
            }
          } catch (e) {}
          if (!n)
            try {
              n = !ae(new e()[t]);
            } catch (e) {}
        }
        return n;
      }
      function it(e) {
        var t = N();
        return t && t[e] ? t[e] : e === Xe && rt() ? window : null;
      }
      function rt() {
        return Boolean(typeof window === k && window);
      }
      function ot() {
        return rt() ? window : it(Xe);
      }
      function at() {
        return Boolean(typeof document === k && document);
      }
      function st() {
        return at() ? document : it("document");
      }
      function ct() {
        return Boolean(typeof navigator === k && navigator);
      }
      function lt() {
        return ct() ? navigator : it("navigator");
      }
      function ut() {
        return Boolean(typeof history === k && history);
      }
      function dt(e) {
        return typeof location === k && location ? location : it("location");
      }
      function ft() {
        return it("performance");
      }
      function pt() {
        return Boolean((typeof JSON === k && JSON) || null !== it(Ke));
      }
      function ht() {
        return pt() ? JSON || it(Ke) : null;
      }
      function gt() {
        var e = lt();
        if (e && (e.userAgent !== Qe || null === Ze)) {
          var t = ((Qe = e.userAgent) || U).toLowerCase();
          Ze = he(t, Ge) || he(t, Ye);
        }
        return Ze;
      }
      function mt(e) {
        if ((void 0 === e && (e = null), !e)) {
          var t = lt() || {};
          e = t ? (t.userAgent || U).toLowerCase() : U;
        }
        var n = (e || U).toLowerCase();
        if (he(n, Ge)) {
          var i = st() || {};
          return Math.max(parseInt(n.split(Ge)[1]), i.documentMode || 0);
        }
        if (he(n, Ye)) {
          var r = parseInt(n.split(Ye)[1]);
          if (r) return r + 4;
        }
        return null;
      }
      function vt(e) {
        var t = Object.prototype.toString.call(e),
          n = U;
        return (
          "[object Error]" === t
            ? (n =
                "{ stack: '" +
                e.stack +
                "', message: '" +
                e.message +
                "', name: '" +
                e.name +
                "'")
            : pt() && (n = ht().stringify(e)),
          t + n
        );
      }
      function yt() {
        return null === tt && (tt = ct() && Boolean(lt().sendBeacon)), tt;
      }
      function _t(e) {
        var t = !1;
        try {
          t = !!it("fetch");
          var n = it("Request");
          t && e && n && (t = nt(n, "keepalive"));
        } catch (e) {}
        return t;
      }
      function xt() {
        return (
          null === et &&
            (et = typeof XDomainRequest !== S) &&
            bt() &&
            (et = et && !nt(it(Je), "withCredentials")),
          et
        );
      }
      function bt() {
        var e = !1;
        try {
          e = !!it(Je);
        } catch (e) {}
        return e;
      }
      var Ct,
        wt = [
          "eventsSent",
          "eventsDiscarded",
          "eventsSendRequest",
          "perfEvent",
        ],
        kt = null;
      function St(e, t) {
        return function () {
          var n = arguments,
            i = Et(t);
          if (i) {
            var r = i.listener;
            r && r[e] && r[e].apply(r, n);
          }
        };
      }
      function Et(e) {
        var t,
          n = kt;
        return (
          n ||
            !0 === e.disableDbgExt ||
            (n =
              kt ||
              ((t = it("Microsoft")) && (kt = t.ApplicationInsights), kt)),
          n ? n.ChromeDbgExt : null
        );
      }
      function Tt(e) {
        if (!Ct) {
          Ct = {};
          for (var t = 0; t < wt.length; t++) Ct[wt[t]] = St(wt[t], e);
        }
        return Ct;
      }
      function Lt(e) {
        return e ? '"' + e.replace(/\"/g, U) + '"' : U;
      }
      function Pt(e, t) {
        var n = typeof console !== S ? console : it("console");
        if (n) {
          var i = "log";
          n[e] && (i = e), de(n[i]) && n[i](t);
        }
      }
      var It = (function () {
        function e(e, t, n, i) {
          void 0 === n && (n = !1);
          var r = this;
          (r.messageId = e), (r.message = (n ? "AI: " : "AI (Internal): ") + e);
          var o = U;
          pt() && (o = ht().stringify(i));
          var a = (t ? " message:" + Lt(t) : U) + (i ? " props:" + Lt(o) : U);
          r.message += a;
        }
        return (e.dataType = "MessageData"), e;
      })();
      function At(e, t) {
        return (e || {}).logger || new Dt(t);
      }
      var Dt = (function () {
        function e(t) {
          (this.identifier = "DiagnosticLogger"), (this.queue = []);
          var n,
            i,
            r,
            o,
            a = 0,
            s = {};
          C(e, this, function (e) {
            function c(t, n) {
              if (!(a >= r)) {
                var o = !0,
                  c = "AITR_" + n.messageId;
                if (
                  (s[c] ? (o = !1) : (s[c] = !0),
                  o &&
                    (t <= i &&
                      (e.queue.push(n), a++, l(1 === t ? "error" : "warn", n)),
                    a === r))
                ) {
                  var u =
                      "Internal events throttle limit per PageView reached for this app.",
                    d = new It(23, u, !1);
                  e.queue.push(d),
                    1 === t ? e.errorToConsole(u) : e.warnToConsole(u);
                }
              }
            }
            function l(e, n) {
              var i = Et(t || {});
              i && i.diagLog && i.diagLog(e, n);
            }
            !(function (e) {
              (n = Be(e.loggingLevelConsole, 0)),
                (i = Be(e.loggingLevelTelemetry, 1)),
                (r = Be(e.maxMessageLimit, 25)),
                (o = Be(e.enableDebugExceptions, !1));
            })(t || {}),
              (e.consoleLoggingLevel = function () {
                return n;
              }),
              (e.telemetryLoggingLevel = function () {
                return i;
              }),
              (e.maxInternalMessageLimit = function () {
                return r;
              }),
              (e.enableDebugExceptions = function () {
                return o;
              }),
              (e.throwInternal = function (t, i, r, a, u) {
                void 0 === u && (u = !1);
                var d = new It(i, r, u, a);
                if (o) throw vt(d);
                var f = 1 === t ? "errorToConsole" : "warnToConsole";
                if (ae(d.message))
                  l("throw" + (1 === t ? "Critical" : "Warning"), d);
                else {
                  if (u) {
                    var p = +d.messageId;
                    !s[p] && n >= t && (e[f](d.message), (s[p] = !0));
                  } else n >= t && e[f](d.message);
                  c(t, d);
                }
              }),
              (e.warnToConsole = function (e) {
                Pt("warn", e), l("warning", e);
              }),
              (e.errorToConsole = function (e) {
                Pt("error", e), l("error", e);
              }),
              (e.resetInternalMessageCount = function () {
                (a = 0), (s = {});
              }),
              (e.logInternalMessage = c);
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      function Nt(e) {
        return e || new Dt();
      }
      function Mt(e, t, n, i, r, o) {
        void 0 === o && (o = !1), Nt(e).throwInternal(t, n, i, r, o);
      }
      function Ot(e, t) {
        Nt(e).warnToConsole(t);
      }
      function Bt(e) {
        var t = {};
        return (
          pe(e, function (e, n) {
            (t[e] = n), (t[n] = e);
          }),
          Ie(t)
        );
      }
      var Rt = Bt({ LocalStorage: 0, SessionStorage: 1 }),
        Ht = void Bt({ AI: 0, AI_AND_W3C: 1, W3C: 2 }),
        qt = void 0;
      function Ft() {
        return zt() ? jt(Rt.LocalStorage) : null;
      }
      function jt(e) {
        try {
          if (se(N())) return null;
          var t = new Date().toString(),
            n = it(e === Rt.LocalStorage ? "localStorage" : "sessionStorage");
          n.setItem(t, t);
          var i = n.getItem(t) !== t;
          if ((n.removeItem(t), !i)) return n;
        } catch (e) {}
        return null;
      }
      function Ut() {
        return Wt() ? jt(Rt.SessionStorage) : null;
      }
      function zt(e) {
        return (e || void 0 === Ht) && (Ht = !!jt(Rt.LocalStorage)), Ht;
      }
      function Wt(e) {
        return (e || void 0 === qt) && (qt = !!jt(Rt.SessionStorage)), qt;
      }
      function Vt(e, t) {
        var n = Ut();
        if (null !== n)
          try {
            return n.getItem(t);
          } catch (t) {
            (qt = !1),
              Mt(e, 2, 2, "Browser failed read of session storage. " + Ne(t), {
                exception: vt(t),
              });
          }
        return null;
      }
      function $t(e, t, n) {
        var i = Ut();
        if (null !== i)
          try {
            return i.setItem(t, n), !0;
          } catch (t) {
            (qt = !1),
              Mt(e, 2, 4, "Browser failed write to session storage. " + Ne(t), {
                exception: vt(t),
              });
          }
        return !1;
      }
      var Xt,
        Kt = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation",
        Gt = "http.method",
        Yt = "https://dc.services.visualstudio.com/",
        Jt = "/v2/track",
        Zt = "not_specified";
      function Qt(e, t, n) {
        var i = t.length,
          r = en(e, t);
        if (r.length !== i) {
          for (var o = 0, a = r; void 0 !== n[a]; )
            o++, (a = r.substring(0, 147) + un(o));
          r = a;
        }
        return r;
      }
      function en(e, t) {
        var n;
        return (
          t &&
            (t = Se(t.toString())).length > 150 &&
            ((n = t.substring(0, 150)),
            Mt(
              e,
              2,
              57,
              "name is too long.  It has been truncated to 150 characters.",
              { name: t },
              !0
            )),
          n || t
        );
      }
      function tn(e, t, n) {
        var i;
        return (
          void 0 === n && (n = 1024),
          t &&
            ((n = n || 1024),
            (t = Se(t)).toString().length > n &&
              ((i = t.toString().substring(0, n)),
              Mt(
                e,
                2,
                61,
                "string value is too long. It has been truncated to " +
                  n +
                  " characters.",
                { value: t },
                !0
              ))),
          i || t
        );
      }
      function nn(e, t) {
        return ln(e, t, 2048, 66);
      }
      function rn(e, t) {
        var n;
        return (
          t &&
            t.length > 32768 &&
            ((n = t.substring(0, 32768)),
            Mt(
              e,
              2,
              56,
              "message is too long, it has been truncated to 32768 characters.",
              { message: t },
              !0
            )),
          n || t
        );
      }
      function on(e, t) {
        var n;
        if (t) {
          var i = "" + t;
          i.length > 32768 &&
            ((n = i.substring(0, 32768)),
            Mt(
              e,
              2,
              52,
              "exception is too long, it has been truncated to 32768 characters.",
              { exception: t },
              !0
            ));
        }
        return n || t;
      }
      function an(e, t) {
        if (t) {
          var n = {};
          pe(t, function (t, i) {
            if (ue(i) && pt())
              try {
                i = ht().stringify(i);
              } catch (t) {
                Mt(
                  e,
                  2,
                  49,
                  "custom property is not valid",
                  { exception: t },
                  !0
                );
              }
            (i = tn(e, i, 8192)), (t = Qt(e, t, n)), (n[t] = i);
          }),
            (t = n);
        }
        return t;
      }
      function sn(e, t) {
        if (t) {
          var n = {};
          pe(t, function (t, i) {
            (t = Qt(e, t, n)), (n[t] = i);
          }),
            (t = n);
        }
        return t;
      }
      function cn(e, t) {
        return t ? ln(e, t, 128, 69).toString() : t;
      }
      function ln(e, t, n, i) {
        var r;
        return (
          t &&
            (t = Se(t)).length > n &&
            ((r = t.substring(0, n)),
            Mt(
              e,
              2,
              i,
              "input is too long, it has been truncated to " +
                n +
                " characters.",
              { data: t },
              !0
            )),
          r || t
        );
      }
      function un(e) {
        var t = "00" + e;
        return t.substr(t.length - 3);
      }
      function dn(e, t, n, i, r, o) {
        var a;
        (n = tn(i, n) || Zt),
          (se(e) || se(t) || se(n)) &&
            He("Input doesn't contain all required fields");
        var s = "";
        e.iKey && ((s = e.iKey), delete e.iKey);
        var c =
          (((a = {}).name = n),
          (a.time = be(new Date())),
          (a.iKey = s),
          (a.ext = o || {}),
          (a.tags = []),
          (a.data = {}),
          (a.baseType = t),
          (a.baseData = e),
          a);
        return (
          se(r) ||
            pe(r, function (e, t) {
              c.data[e] = t;
            }),
          c
        );
      }
      ((Xt = {
        MAX_NAME_LENGTH: 150,
        MAX_ID_LENGTH: 128,
        MAX_PROPERTY_LENGTH: 8192,
        MAX_STRING_LENGTH: 1024,
        MAX_URL_LENGTH: 2048,
        MAX_MESSAGE_LENGTH: 32768,
        MAX_EXCEPTION_LENGTH: 32768,
      }).sanitizeKeyAndAddUniqueness = Qt),
        (Xt.sanitizeKey = en),
        (Xt.sanitizeString = tn),
        (Xt.sanitizeUrl = nn),
        (Xt.sanitizeMessage = rn),
        (Xt.sanitizeException = on),
        (Xt.sanitizeProperties = an),
        (Xt.sanitizeMeasurements = sn),
        (Xt.sanitizeId = cn),
        (Xt.sanitizeInput = ln),
        (Xt.padNumber = un),
        (Xt.trim = Se);
      var fn = (function () {
          function e(e, t, n, i) {
            this.aiDataContract = {
              ver: 1,
              name: 1,
              properties: 0,
              measurements: 0,
            };
            var r = this;
            (r.ver = 2),
              (r.name = tn(e, t) || Zt),
              (r.properties = an(e, n)),
              (r.measurements = sn(e, i));
          }
          return (
            (e.envelopeType = "Microsoft.ApplicationInsights.{0}.Event"),
            (e.dataType = "EventData"),
            e
          );
        })(),
        pn = (function () {
          function e(e, t, n, i, r) {
            this.aiDataContract = {
              ver: 1,
              message: 1,
              severityLevel: 0,
              properties: 0,
            };
            var o = this;
            (o.ver = 2),
              (t = t || Zt),
              (o.message = rn(e, t)),
              (o.properties = an(e, i)),
              (o.measurements = sn(e, r)),
              n && (o.severityLevel = n);
          }
          return (
            (e.envelopeType = "Microsoft.ApplicationInsights.{0}.Message"),
            (e.dataType = "MessageData"),
            e
          );
        })(),
        hn = function () {
          (this.aiDataContract = {
            name: 1,
            kind: 0,
            value: 1,
            count: 0,
            min: 0,
            max: 0,
            stdDev: 0,
          }),
            (this.kind = 0);
        },
        gn = (function () {
          function e(e, t, n, i, r, o, a, s, c) {
            this.aiDataContract = { ver: 1, metrics: 1, properties: 0 };
            var l = this;
            l.ver = 2;
            var u = new hn();
            (u.count = i > 0 ? i : void 0),
              (u.max = isNaN(o) || null === o ? void 0 : o),
              (u.min = isNaN(r) || null === r ? void 0 : r),
              (u.name = tn(e, t) || Zt),
              (u.value = n),
              (u.stdDev = isNaN(a) || null === a ? void 0 : a),
              (l.metrics = [u]),
              (l.properties = an(e, s)),
              (l.measurements = sn(e, c));
          }
          return (
            (e.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric"),
            (e.dataType = "MetricData"),
            e
          );
        })(),
        mn = (function () {
          function e(e, t, n, i, r, o, a) {
            this.aiDataContract = {
              ver: 1,
              name: 0,
              url: 0,
              duration: 0,
              properties: 0,
              measurements: 0,
              id: 0,
            };
            var s = this;
            (s.ver = 2),
              (s.id = cn(e, a)),
              (s.url = nn(e, n)),
              (s.name = tn(e, t) || Zt),
              isNaN(i) || (s.duration = $e(i)),
              (s.properties = an(e, r)),
              (s.measurements = sn(e, o));
          }
          return (
            (e.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview"),
            (e.dataType = "PageviewData"),
            e
          );
        })(),
        vn = (function () {
          function e(e, t, n, i, r, o, a) {
            this.aiDataContract = {
              ver: 1,
              name: 0,
              url: 0,
              duration: 0,
              perfTotal: 0,
              networkConnect: 0,
              sentRequest: 0,
              receivedResponse: 0,
              domProcessing: 0,
              properties: 0,
              measurements: 0,
            };
            var s = this;
            (s.ver = 2),
              (s.url = nn(e, n)),
              (s.name = tn(e, t) || Zt),
              (s.properties = an(e, r)),
              (s.measurements = sn(e, o)),
              a &&
                ((s.domProcessing = a.domProcessing),
                (s.duration = a.duration),
                (s.networkConnect = a.networkConnect),
                (s.perfTotal = a.perfTotal),
                (s.receivedResponse = a.receivedResponse),
                (s.sentRequest = a.sentRequest));
          }
          return (
            (e.envelopeType =
              "Microsoft.ApplicationInsights.{0}.PageviewPerformance"),
            (e.dataType = "PageviewPerformanceData"),
            e
          );
        })();
      function yn(e, t) {
        var n = e;
        return (
          n &&
            !ve(n) &&
            (JSON && JSON.stringify
              ? ((n = JSON.stringify(e)),
                !t ||
                  (n && "{}" !== n) ||
                  (n = de(e.toString) ? e.toString() : "" + e))
              : (n = e + " - (Missing JSON.stringify)")),
          n || ""
        );
      }
      function _n(e, t) {
        var n = e;
        return (
          e &&
            (n && !ve(n) && (n = e.message || e.description || n),
            n && !ve(n) && (n = yn(n, !0)),
            e.filename &&
              (n =
                n +
                " @" +
                (e.filename || "") +
                ":" +
                (e.lineno || "?") +
                ":" +
                (e.colno || "?"))),
          t &&
            "String" !== t &&
            "Object" !== t &&
            "Error" !== t &&
            -1 === (n || "").indexOf(t) &&
            (n = t + ": " + n),
          n || ""
        );
      }
      function xn(e) {
        return e && e.src && ve(e.src) && e.obj && ge(e.obj);
      }
      function bn(e) {
        var t = e || "";
        ve(t) || (t = ve(t.stack) ? t.stack : "" + t);
        var n = t.split("\n");
        return { src: t, obj: n };
      }
      function Cn(e) {
        var t = null;
        if (e)
          try {
            if (e.stack) t = bn(e.stack);
            else if (e.error && e.error.stack) t = bn(e.error.stack);
            else if (e.exception && e.exception.stack)
              t = bn(e.exception.stack);
            else if (xn(e)) t = e;
            else if (xn(e.stackDetails)) t = e.stackDetails;
            else if (window && window.opera && e.message)
              t = (function (e) {
                for (var t = [], n = e.split("\n"), i = 0; i < n.length; i++) {
                  var r = n[i];
                  n[i + 1] && ((r += "@" + n[i + 1]), i++), t.push(r);
                }
                return { src: e, obj: t };
              })(e.message);
            else if (ve(e)) t = bn(e);
            else {
              var n = e.message || e.description || "";
              ve(e.errorSrc) &&
                (n && (n += "\n"), (n += " from " + e.errorSrc)),
                n && (t = bn(n));
            }
          } catch (e) {
            t = bn(e);
          }
        return t || { src: "", obj: null };
      }
      function wn(e) {
        var t = "";
        if (e && !(t = e.typeName || e.name || ""))
          try {
            var n = /function (.{1,200})\(/.exec(e.constructor.toString());
            t = n && n.length > 1 ? n[1] : "";
          } catch (e) {}
        return t;
      }
      function kn(e) {
        if (e)
          try {
            if (!ve(e)) {
              var t = wn(e),
                n = yn(e, !1);
              return (
                (n && "{}" !== n) ||
                  (e.error && (t = wn((e = e.error))), (n = yn(e, !0))),
                0 !== n.indexOf(t) && "String" !== t ? t + ":" + n : n
              );
            }
          } catch (e) {}
        return "" + (e || "");
      }
      var Sn = (function () {
          function e(e, t, n, i, r, o) {
            this.aiDataContract = {
              ver: 1,
              exceptions: 1,
              severityLevel: 0,
              properties: 0,
              measurements: 0,
            };
            var a = this;
            (a.ver = 2),
              (function (e) {
                try {
                  if (ue(e))
                    return "ver" in e && "exceptions" in e && "properties" in e;
                } catch (e) {}
                return !1;
              })(t)
                ? ((a.exceptions = t.exceptions || []),
                  (a.properties = t.properties),
                  (a.measurements = t.measurements),
                  t.severityLevel && (a.severityLevel = t.severityLevel),
                  t.id && (a.id = t.id),
                  t.problemGroup && (a.problemGroup = t.problemGroup),
                  se(t.isManual) || (a.isManual = t.isManual))
                : (n || (n = {}),
                  (a.exceptions = [new En(e, t, n)]),
                  (a.properties = an(e, n)),
                  (a.measurements = sn(e, i)),
                  r && (a.severityLevel = r),
                  o && (a.id = o));
          }
          return (
            (e.CreateAutoException = function (e, t, n, i, r, o, a, s) {
              var c,
                l = wn(r || o || e);
              return (
                ((c = {}).message = _n(e, l)),
                (c.url = t),
                (c.lineNumber = n),
                (c.columnNumber = i),
                (c.error = kn(r || o || e)),
                (c.evt = kn(o || e)),
                (c.typeName = l),
                (c.stackDetails = Cn(a || r || o)),
                (c.errorSrc = s),
                c
              );
            }),
            (e.CreateFromInterface = function (t, n, i, r) {
              var o =
                n.exceptions &&
                ke(n.exceptions, function (e) {
                  return En.CreateFromInterface(t, e);
                });
              return new e(t, B(B({}, n), { exceptions: o }), i, r);
            }),
            (e.prototype.toInterface = function () {
              var e,
                t = this,
                n = t.exceptions,
                i = t.properties,
                r = t.measurements,
                o = t.severityLevel,
                a = t.problemGroup,
                s = t.id,
                c = t.isManual,
                l =
                  (n instanceof Array &&
                    ke(n, function (e) {
                      return e.toInterface();
                    })) ||
                  void 0;
              return (
                ((e = { ver: "4.0" }).exceptions = l),
                (e.severityLevel = o),
                (e.properties = i),
                (e.measurements = r),
                (e.problemGroup = a),
                (e.id = s),
                (e.isManual = c),
                e
              );
            }),
            (e.CreateSimpleException = function (e, t, n, i, r, o) {
              var a;
              return {
                exceptions: [
                  ((a = {}),
                  (a.hasFullStack = !0),
                  (a.message = e),
                  (a.stack = r),
                  (a.typeName = t),
                  a),
                ],
              };
            }),
            (e.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception"),
            (e.dataType = "ExceptionData"),
            (e.formatError = kn),
            e
          );
        })(),
        En = (function () {
          function e(e, t, n) {
            this.aiDataContract = {
              id: 0,
              outerId: 0,
              typeName: 1,
              message: 1,
              hasFullStack: 0,
              stack: 0,
              parsedStack: 2,
            };
            var i = this;
            if (
              (function (e) {
                try {
                  if (ue(e)) return "hasFullStack" in e && "typeName" in e;
                } catch (e) {}
                return !1;
              })(t)
            )
              (i.typeName = t.typeName),
                (i.message = t.message),
                (i.stack = t.stack),
                (i.parsedStack = t.parsedStack || []),
                (i.hasFullStack = t.hasFullStack);
            else {
              var r = t,
                o = r && r.evt;
              me(r) || (r = r.error || o || r),
                (i.typeName = tn(e, wn(r)) || Zt),
                (i.message = rn(e, _n(t || r, i.typeName)) || Zt);
              var a = t.stackDetails || Cn(t);
              (i.parsedStack = (function (e) {
                var t,
                  n = e.obj;
                if (n && n.length > 0) {
                  t = [];
                  var i = 0,
                    r = 0;
                  if (
                    (Ce(n, function (e) {
                      var n = e.toString();
                      if (Tn.regex.test(n)) {
                        var o = new Tn(n, i++);
                        (r += o.sizeInBytes), t.push(o);
                      }
                    }),
                    r > 32768)
                  )
                    for (
                      var o = 0, a = t.length - 1, s = 0, c = o, l = a;
                      o < a;

                    ) {
                      if ((s += t[o].sizeInBytes + t[a].sizeInBytes) > 32768) {
                        var u = l - c + 1;
                        t.splice(c, u);
                        break;
                      }
                      (c = o), (l = a), o++, a--;
                    }
                }
                return t;
              })(a)),
                (i.stack = on(
                  e,
                  (function (e) {
                    var t = "";
                    return (
                      e &&
                        (e.obj
                          ? Ce(e.obj, function (e) {
                              t += e + "\n";
                            })
                          : (t = e.src || "")),
                      t
                    );
                  })(a)
                )),
                (i.hasFullStack =
                  ge(i.parsedStack) && i.parsedStack.length > 0),
                n && (n.typeName = n.typeName || i.typeName);
            }
          }
          return (
            (e.prototype.toInterface = function () {
              var e,
                t = this,
                n =
                  t.parsedStack instanceof Array &&
                  ke(t.parsedStack, function (e) {
                    return e.toInterface();
                  });
              return (
                ((e = {
                  id: t.id,
                  outerId: t.outerId,
                  typeName: t.typeName,
                  message: t.message,
                  hasFullStack: t.hasFullStack,
                  stack: t.stack,
                }).parsedStack = n || void 0),
                e
              );
            }),
            (e.CreateFromInterface = function (t, n) {
              var i =
                (n.parsedStack instanceof Array &&
                  ke(n.parsedStack, function (e) {
                    return Tn.CreateFromInterface(e);
                  })) ||
                n.parsedStack;
              return new e(t, B(B({}, n), { parsedStack: i }));
            }),
            e
          );
        })(),
        Tn = (function () {
          function e(t, n) {
            this.aiDataContract = {
              level: 1,
              method: 1,
              assembly: 0,
              fileName: 0,
              line: 0,
            };
            var i = this;
            if (((i.sizeInBytes = 0), "string" == typeof t)) {
              var r = t;
              (i.level = n),
                (i.method = "<no_method>"),
                (i.assembly = Se(r)),
                (i.fileName = ""),
                (i.line = 0);
              var o = r.match(e.regex);
              o &&
                o.length >= 5 &&
                ((i.method = Se(o[2]) || i.method),
                (i.fileName = Se(o[4])),
                (i.line = parseInt(o[5]) || 0));
            } else
              (i.level = t.level),
                (i.method = t.method),
                (i.assembly = t.assembly),
                (i.fileName = t.fileName),
                (i.line = t.line),
                (i.sizeInBytes = 0);
            (i.sizeInBytes += i.method.length),
              (i.sizeInBytes += i.fileName.length),
              (i.sizeInBytes += i.assembly.length),
              (i.sizeInBytes += e.baseSize),
              (i.sizeInBytes += i.level.toString().length),
              (i.sizeInBytes += i.line.toString().length);
          }
          return (
            (e.CreateFromInterface = function (t) {
              return new e(t, null);
            }),
            (e.prototype.toInterface = function () {
              var e = this;
              return {
                level: e.level,
                method: e.method,
                assembly: e.assembly,
                fileName: e.fileName,
                line: e.line,
              };
            }),
            (e.regex =
              /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/),
            (e.baseSize = 58),
            e
          );
        })(),
        Ln = "toGMTString",
        Pn = "toUTCString",
        In = null,
        An = null,
        Dn = null,
        Nn = st(),
        Mn = {},
        On = {};
      function Bn(e) {
        return !e || e.isEnabled();
      }
      function Rn(e, t) {
        var n;
        if (e) n = e.getCookieMgr();
        else if (t) {
          var i = t.cookieCfg;
          n = i._ckMgr ? i._ckMgr : Hn(t);
        }
        return (
          n ||
            (n = (function (e, t) {
              var n = Hn._ckMgr || On._ckMgr;
              return n || ((n = Hn._ckMgr = Hn(e, t)), (On._ckMgr = n)), n;
            })(t, (e || {}).logger)),
          n
        );
      }
      function Hn(e, t) {
        var n,
          i = (function (e) {
            var t = (e.cookieCfg = e.cookieCfg || {});
            if (
              (Me(t, "domain", e.cookieDomain, ce, se),
              Me(t, "path", e.cookiePath || "/", null, se),
              se(t.enabled))
            ) {
              var n = void 0;
              ae(e.isCookieUseDisabled) || (n = !e.isCookieUseDisabled),
                ae(e.disableCookiesUsage) || (n = !e.disableCookiesUsage),
                (t.enabled = n);
            }
            return t;
          })(e || On),
          r = i.path || "/",
          o = i.domain,
          a = !1 !== i.enabled,
          s =
            (((n = {
              isEnabled: function () {
                var e = a && qn(t),
                  n = On._ckMgr;
                return e && n && s !== n && (e = Bn(n)), e;
              },
            }).setEnabled = function (e) {
              a = !1 !== e;
            }),
            (n.set = function (e, t, n, a, c) {
              var l,
                u = !1;
              if (Bn(s)) {
                var d = {},
                  f = Se(t || U),
                  p = f.indexOf(";");
                if (
                  (-1 !== p &&
                    ((f = Se(t.substring(0, p))), (d = Fn(t.substring(p + 1)))),
                  Me(d, "domain", a || o, Re, ae),
                  !se(n))
                ) {
                  var h = gt();
                  if (ae(d.expires)) {
                    var g = De() + 1e3 * n;
                    if (g > 0) {
                      var m = new Date();
                      m.setTime(g),
                        Me(
                          d,
                          "expires",
                          jn(m, h ? Ln : Pn) || jn(m, h ? Ln : Pn) || U,
                          Re
                        );
                    }
                  }
                  h || Me(d, "max-age", U + n, null, ae);
                }
                var v = dt();
                v &&
                  "https:" === v.protocol &&
                  (Me(d, "secure", null, null, ae),
                  null === An &&
                    ((l = (lt() || {}).userAgent),
                    (An = !(
                      ve(l) &&
                      (he(l, "CPU iPhone OS 12") ||
                        he(l, "iPad; CPU OS 12") ||
                        (he(l, "Macintosh; Intel Mac OS X 10_14") &&
                          he(l, "Version/index.html") &&
                          he(l, "Safari")) ||
                        (he(l, "Macintosh; Intel Mac OS X 10_14") &&
                          (function (e, t) {
                            var n = !1;
                            return (
                              e &&
                                t &&
                                !(n = e === t) &&
                                (n = G
                                  ? e.endsWith(t)
                                  : (function (e, t) {
                                      var n = !1,
                                        i = t ? t.length : 0,
                                        r = e ? e.length : 0;
                                      if (i && r && r >= i && !(n = e === t)) {
                                        for (
                                          var o = r - 1, a = i - 1;
                                          a >= 0;
                                          a--
                                        ) {
                                          if (e[o] != t[a]) return !1;
                                          o--;
                                        }
                                        n = !0;
                                      }
                                      return n;
                                    })(e, t)),
                              n
                            );
                          })(l, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) ||
                        he(l, "Chrome/5") ||
                        he(l, "Chrome/6") ||
                        (he(l, "UnrealEngine") && !he(l, "Chrome")) ||
                        he(l, "UCBrowser/12") ||
                        he(l, "UCBrowser/11"))
                    ))),
                  An && Me(d, "SameSite", "None", null, ae)),
                  Me(d, "path", c || r, null, ae),
                  (i.setCookie || Wn)(e, Un(f, d)),
                  (u = !0);
              }
              return u;
            }),
            (n.get = function (e) {
              var t = U;
              return Bn(s) && (t = (i.getCookie || zn)(e)), t;
            }),
            (n.del = function (e, t) {
              var n = !1;
              return Bn(s) && (n = s.purge(e, t)), n;
            }),
            (n.purge = function (e, n) {
              var r,
                o = !1;
              if (qn(t)) {
                var a =
                  (((r = {}).path = n || "/"),
                  (r.expires = "Thu, 01 Jan 1970 00:00:01 GMT"),
                  r);
                gt() || (a["max-age"] = "0"),
                  (i.delCookie || Wn)(e, Un(U, a)),
                  (o = !0);
              }
              return o;
            }),
            n);
        return (s._ckMgr = s), s;
      }
      function qn(e) {
        if (null === In) {
          In = !1;
          try {
            In = void 0 !== (Nn || {}).cookie;
          } catch (t) {
            Mt(e, 2, 68, "Cannot access document.cookie - " + Ne(t), {
              exception: vt(t),
            });
          }
        }
        return In;
      }
      function Fn(e) {
        var t = {};
        return (
          e &&
            e.length &&
            Ce(Se(e).split(";"), function (e) {
              if ((e = Se(e || U))) {
                var n = e.indexOf("=");
                -1 === n
                  ? (t[e] = null)
                  : (t[Se(e.substring(0, n))] = Se(e.substring(n + 1)));
              }
            }),
          t
        );
      }
      function jn(e, t) {
        return de(e[t]) ? e[t]() : null;
      }
      function Un(e, t) {
        var n = e || U;
        return (
          pe(t, function (e, t) {
            n += "; " + e + (se(t) ? U : "=" + t);
          }),
          n
        );
      }
      function zn(e) {
        var t = U;
        if (Nn) {
          var n = Nn.cookie || U;
          Dn !== n && ((Mn = Fn(n)), (Dn = n)), (t = Se(Mn[e] || U));
        }
        return t;
      }
      function Wn(e, t) {
        Nn && (Nn.cookie = e + "=" + t);
      }
      var Vn = 4294967296,
        $n = 4294967295,
        Xn = !1,
        Kn = 123456789,
        Gn = 987654321;
      function Yn() {
        try {
          var e = 2147483647 & De();
          (t = ((Math.random() * Vn) ^ e) + e) < 0 && (t >>>= 0),
            (Kn = (123456789 + t) & $n),
            (Gn = (987654321 - t) & $n),
            (Xn = !0);
        } catch (e) {}
        var t;
      }
      function Jn(e) {
        var t = 0,
          n = it("crypto") || it("msCrypto");
        return (
          n &&
            n.getRandomValues &&
            (t = n.getRandomValues(new Uint32Array(1))[0] & $n),
          0 === t &&
            gt() &&
            (Xn || Yn(),
            (t =
              (function (e) {
                var t =
                  (((((Gn = (36969 * (65535 & Gn) + (Gn >> 16)) & $n) << 16) +
                    (65535 &
                      (Kn = (18e3 * (65535 & Kn) + (Kn >> 16)) & $n))) >>>
                    0) &
                    $n) |
                  0;
                return e || (t >>>= 0), t;
              })() & $n)),
          0 === t && (t = Math.floor((Vn * Math.random()) | 0)),
          e || (t >>>= 0),
          t
        );
      }
      function Zn(e) {
        void 0 === e && (e = 22);
        for (var t = Jn() >>> 0, n = 0, i = U; i.length < e; )
          n++,
            (i +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                63 & t
              )),
            (t >>>= 6),
            5 === n &&
              ((t = (((Jn() << 2) & 4294967295) | (3 & t)) >>> 0), (n = 0));
        return i;
      }
      var Qn = I,
        ei = "." + Zn(6),
        ti = 0;
      function ni(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }
      function ii(e, t) {
        return void 0 === t && (t = !1), fe(e + ti++ + (t ? ".2.8.5" : U) + ei);
      }
      function ri(e) {
        var t = {
          id: ii("_aiData-" + (e || U) + ".2.8.5"),
          accept: function (e) {
            return ni(e);
          },
          get: function (e, n, i, r) {
            var o = e[t.id];
            return o
              ? o[fe(n)]
              : (r &&
                  ((o = (function (e, t) {
                    var n = t[e.id];
                    if (!n) {
                      n = {};
                      try {
                        ni(t) &&
                          ((function (e, t, n) {
                            if (Qn)
                              try {
                                return (
                                  Qn(e, t, {
                                    value: n,
                                    enumerable: !1,
                                    configurable: !0,
                                  }),
                                  !0
                                );
                              } catch (e) {}
                            return !1;
                          })(t, e.id, n) ||
                            (t[e.id] = n));
                      } catch (e) {}
                    }
                    return n;
                  })(t, e))[fe(n)] = i),
                i);
          },
          kill: function (e, t) {
            if (e && e[t])
              try {
                delete e[t];
              } catch (e) {}
          },
        };
        return t;
      }
      var oi = "events",
        ai = "visibilitychange",
        si = "pagehide",
        ci = "unload",
        li = "beforeunload",
        ui = ii("aiEvtPageHide"),
        di = (ii("aiEvtPageShow"), /\.[\.]+/g),
        fi = /[\.]+$/,
        pi = 1,
        hi = ri("events"),
        gi = /^([^.]*)(?:\.(.+)|)/;
      function mi(e) {
        return e && e.replace ? e.replace(/^\s*\.*|\.*\s*$/g, U) : e;
      }
      function vi(e, t) {
        var n;
        if (t) {
          var i = U;
          ge(t)
            ? ((i = U),
              Ce(t, function (e) {
                (e = mi(e)) && ("." !== e[0] && (e = "." + e), (i += e));
              }))
            : (i = mi(t)),
            i && ("." !== i[0] && (i = "." + i), (e = (e || U) + i));
        }
        var r = gi.exec(e || U) || [];
        return (
          ((n = {}).type = r[1]),
          (n.ns = (r[2] || U)
            .replace(di, ".")
            .replace(fi, U)
            .split(".")
            .sort()
            .join(".")),
          n
        );
      }
      function yi(e, t, n) {
        void 0 === n && (n = !0);
        var i = hi.get(e, oi, {}, n),
          r = i[t];
        return r || (r = i[t] = []), r;
      }
      function _i(e, t, n, i) {
        e &&
          t &&
          t.type &&
          (e.removeEventListener
            ? e.removeEventListener(t.type, n, i)
            : e.detachEvent && e.detachEvent("on" + t.type, n));
      }
      function xi(e, t, n, i) {
        for (var r = t.length; r--; ) {
          var o = t[r];
          o &&
            ((n.ns && n.ns !== o.evtName.ns) ||
              (i && !i(o)) ||
              (_i(e, o.evtName, o.handler, o.capture), t.splice(r, 1)));
        }
      }
      function bi(e, t) {
        return t ? vi("xx", ge(t) ? [e].concat(t) : [e, t]).ns.split(".") : e;
      }
      function Ci(e, t, n, i, r) {
        var o;
        void 0 === r && (r = !1);
        var a = !1;
        if (e)
          try {
            var s = vi(t, i);
            if (
              ((a = (function (e, t, n, i) {
                var r = !1;
                return (
                  e &&
                    t &&
                    t.type &&
                    n &&
                    (e.addEventListener
                      ? (e.addEventListener(t.type, n, i), (r = !0))
                      : e.attachEvent &&
                        (e.attachEvent("on" + t.type, n), (r = !0))),
                  r
                );
              })(e, s, n, r)),
              a && hi.accept(e))
            ) {
              var c =
                (((o = { guid: pi++, evtName: s }).handler = n),
                (o.capture = r),
                o);
              yi(e, s.type).push(c);
            }
          } catch (e) {}
        return a;
      }
      function wi(e, t, n, i, r) {
        if ((void 0 === r && (r = !1), e))
          try {
            var o = vi(t, i),
              a = !1;
            !(function (e, t, n) {
              if (t.type) xi(e, yi(e, t.type), t, n);
              else {
                var i = hi.get(e, oi, {});
                pe(i, function (i, r) {
                  xi(e, r, t, n);
                }),
                  0 === Le(i).length && hi.kill(e, oi);
              }
            })(e, o, function (e) {
              return !(((!o.ns || n) && e.handler !== n) || ((a = !0), 0));
            }),
              a || _i(e, o, n, r);
          } catch (e) {}
      }
      function ki(e, t, n, i) {
        var r = !1;
        return (
          t &&
            e &&
            e.length > 0 &&
            Ce(e, function (e) {
              e &&
                ((n && -1 !== we(n, e)) ||
                  (r =
                    (function (e, t, n) {
                      var i = !1,
                        r = ot();
                      r &&
                        ((i = Ci(r, e, t, n)), (i = Ci(r.body, e, t, n) || i));
                      var o = st();
                      return o && (i = Ci(o, e, t, n) || i), i;
                    })(e, t, i) || r));
            }),
          r
        );
      }
      function Si(e, t, n) {
        e &&
          ge(e) &&
          Ce(e, function (e) {
            e &&
              (function (e, t, n) {
                var i = ot();
                i && (wi(i, e, t, n), wi(i.body, e, t, n));
                var r = st();
                r && wi(r, e, t, n);
              })(e, t, n);
          });
      }
      function Ei(e, t, n) {
        var i = bi(ui, n),
          r = ki([si], e, t, i);
        return (
          (t && -1 !== we(t, ai)) ||
            (r =
              ki(
                [ai],
                function (t) {
                  var n = st();
                  e && n && "hidden" === n.visibilityState && e(t);
                },
                t,
                i
              ) || r),
          !r && t && (r = Ei(e, null, n)),
          r
        );
      }
      function Ti() {
        for (
          var e,
            t = [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
            ],
            n = U,
            i = 0;
          i < 4;
          i++
        )
          n +=
            t[15 & (e = Jn())] +
            t[(e >> 4) & 15] +
            t[(e >> 8) & 15] +
            t[(e >> 12) & 15] +
            t[(e >> 16) & 15] +
            t[(e >> 20) & 15] +
            t[(e >> 24) & 15] +
            t[(e >> 28) & 15];
        var r = t[(8 + (3 & Jn())) | 0];
        return (
          n.substr(0, 8) +
          n.substr(9, 4) +
          "4" +
          n.substr(13, 3) +
          r +
          n.substr(16, 3) +
          n.substr(19, 12)
        );
      }
      var Li = "00",
        Pi = "00000000000000000000000000000000",
        Ii = "0000000000000000";
      function Ai(e, t, n) {
        return !(!e || e.length !== t || e === n || !e.match(/^[\da-f]*$/));
      }
      function Di(e, t, n) {
        return Ai(e, t) ? e : n;
      }
      function Ni(e, t, n, i) {
        var r;
        return (
          ((r = {}).version = Ai(i, 2, "ff") ? i : Li),
          (r.traceId = Mi(e) ? e : Ti()),
          (r.spanId = Oi(t) ? t : Ti().substr(0, 16)),
          (r.traceFlags = n >= 0 && n <= 255 ? n : 1),
          r
        );
      }
      function Mi(e) {
        return Ai(e, 32, Pi);
      }
      function Oi(e) {
        return Ai(e, 16, Ii);
      }
      function Bi(e) {
        if (e) {
          var t = (function (e) {
            (isNaN(e) || e < 0 || e > 255) && (e = 1);
            for (var t = e.toString(16); t.length < 2; ) t = "0" + t;
            return t;
          })(e.traceFlags);
          Ai(t, 2) || (t = "01");
          var n = e.version || Li;
          return (
            "00" !== n && "ff" !== n && (n = Li),
            ""
              .concat(n, "-")
              .concat(Di(e.traceId, 32, Pi), "-")
              .concat(Di(e.spanId, 16, Ii), "-")
              .concat(t)
          );
        }
        return "";
      }
      function Ri(e) {
        var t = null;
        if (de(Event)) t = new Event(e);
        else {
          var n = st();
          n &&
            n.createEvent &&
            (t = n.createEvent("Event")).initEvent(e, !0, !0);
        }
        return t;
      }
      var Hi,
        qi =
          ((Hi = {}),
          pe(
            {
              requestContextHeader: [0, "Request-Context"],
              requestContextTargetKey: [1, "appId"],
              requestContextAppIdFormat: [2, "appId=cid-v1:"],
              requestIdHeader: [3, "Request-Id"],
              traceParentHeader: [4, "traceparent"],
              traceStateHeader: [5, "tracestate"],
              sdkContextHeader: [6, "Sdk-Context"],
              sdkContextHeaderAppIdRequest: [7, "appId"],
              requestContextHeaderLowerCase: [8, "request-context"],
            },
            function (e, t) {
              (Hi[e] = t[1]), (Hi[t[0]] = t[1]);
            }
          ),
          Ie(Hi)),
        Fi = st() || {},
        ji = 0,
        Ui = [null, null, null, null, null];
      function zi(e) {
        var t = ji,
          n = Ui,
          i = n[t];
        return (
          Fi.createElement
            ? n[t] || (i = n[t] = Fi.createElement("a"))
            : (i = { host: Wi(e, !0) }),
          (i.href = e),
          ++t >= n.length && (t = 0),
          (ji = t),
          i
        );
      }
      function Wi(e, t) {
        var n = Vi(e, t) || "";
        if (n) {
          var i = n.match(/(www[0-9]?\.)?(.[^/:]+)(\:[\d]+)?/i);
          if (null != i && i.length > 3 && ve(i[2]) && i[2].length > 0)
            return i[2] + (i[3] || "");
        }
        return n;
      }
      function Vi(e, t) {
        var n = null;
        if (e) {
          var i = e.match(/(\w*):\/\/(.[^/:]+)(\:[\d]+)?/i);
          if (
            null != i &&
            i.length > 2 &&
            ve(i[2]) &&
            i[2].length > 0 &&
            ((n = i[2] || ""), t && i.length > 2)
          ) {
            var r = (i[1] || "").toLowerCase(),
              o = i[3] || "";
            (("http" === r && ":80" === o) ||
              ("https" === r && ":443" === o)) &&
              (o = ""),
              (n += o);
          }
        }
        return n;
      }
      var $i = [
        Yt + Jt,
        "https://breeze.aimon.applicationinsights.io/v2/track",
        "https://dc-int.services.visualstudio.com/v2/track",
      ];
      function Xi(e) {
        return -1 !== we($i, e.toLowerCase());
      }
      var Ki = {
        correlationIdPrefix: "cid-v1:",
        canIncludeCorrelationHeader: function (e, t, n) {
          if (!t || (e && e.disableCorrelationHeaders)) return !1;
          if (e && e[We])
            for (var i = 0; i < e.correlationHeaderExcludePatterns.length; i++)
              if (e[We][i].test(t)) return !1;
          var r = zi(t).host.toLowerCase();
          if (
            (!r ||
              (-1 === r.indexOf(":443") && -1 === r.indexOf(":80")) ||
              (r = (Vi(t, !0) || "").toLowerCase()),
            (!e || !e.enableCorsCorrelation) && r && r !== n)
          )
            return !1;
          var o,
            a = e && e.correlationHeaderDomains;
          if (
            a &&
            (Ce(a, function (e) {
              var t = new RegExp(
                e
                  .toLowerCase()
                  .replace(/\\/g, "\\\\")
                  .replace(/\./g, "\\.")
                  .replace(/\*/g, ".*")
              );
              o = o || t.test(r);
            }),
            !o)
          )
            return !1;
          var s = e && e.correlationHeaderExcludedDomains;
          if (!s || 0 === s.length) return !0;
          for (i = 0; i < s.length; i++)
            if (
              new RegExp(
                s[i]
                  .toLowerCase()
                  .replace(/\\/g, "\\\\")
                  .replace(/\./g, "\\.")
                  .replace(/\*/g, ".*")
              ).test(r)
            )
              return !1;
          return r && r.length > 0;
        },
        getCorrelationContext: function (e) {
          if (e) {
            var t = Ki.getCorrelationContextValue(e, qi[1]);
            if (t && t !== Ki.correlationIdPrefix) return t;
          }
        },
        getCorrelationContextValue: function (e, t) {
          if (e)
            for (var n = e.split(","), i = 0; i < n.length; ++i) {
              var r = n[i].split("=");
              if (2 === r.length && r[0] === t) return r[1];
            }
        },
      };
      function Gi() {
        var e = ft();
        if (e && e.now && e.timing) {
          var t = e.now() + e.timing.navigationStart;
          if (t > 0) return t;
        }
        return De();
      }
      function Yi(e, t) {
        var n = null;
        return 0 === e || 0 === t || se(e) || se(t) || (n = t - e), n;
      }
      function Ji(e, t) {
        var n = e || {};
        return {
          getName: function () {
            return n.name;
          },
          setName: function (e) {
            t && t.setName(e), (n.name = e);
          },
          getTraceId: function () {
            return n.traceID;
          },
          setTraceId: function (e) {
            t && t.setTraceId(e), Mi(e) && (n.traceID = e);
          },
          getSpanId: function () {
            return n.parentID;
          },
          setSpanId: function (e) {
            t && t.setSpanId(e), Oi(e) && (n.parentID = e);
          },
          getTraceFlags: function () {
            return n.traceFlags;
          },
          setTraceFlags: function (e) {
            t && t.setTraceFlags(e), (n.traceFlags = e);
          },
        };
      }
      var Zi = (function () {
          function e(e, t, n, i, r, o, a, s, c, l, u, d) {
            void 0 === c && (c = "Ajax"),
              (this.aiDataContract = {
                id: 1,
                ver: 1,
                name: 0,
                resultCode: 0,
                duration: 0,
                success: 0,
                data: 0,
                target: 0,
                type: 0,
                properties: 0,
                measurements: 0,
                kind: 0,
                value: 0,
                count: 0,
                min: 0,
                max: 0,
                stdDev: 0,
                dependencyKind: 0,
                dependencySource: 0,
                commandName: 0,
                dependencyTypeName: 0,
              });
            var f = this;
            (f.ver = 2),
              (f.id = t),
              (f.duration = $e(r)),
              (f.success = o),
              (f.resultCode = a + ""),
              (f.type = tn(e, c));
            var p = (function (e, t, n, i) {
              var r,
                o = i,
                a = i;
              if (t && t.length > 0) {
                var s = zi(t);
                if (((r = s.host), !o))
                  if (null != s.pathname) {
                    var c = 0 === s.pathname.length ? "/" : s.pathname;
                    "/" !== c.charAt(0) && (c = "/" + c),
                      (a = s.pathname),
                      (o = tn(e, n ? n + " " + c : c));
                  } else o = tn(e, t);
              } else (r = i), (o = i);
              return { target: r, name: o, data: a };
            })(e, n, s, i);
            (f.data = nn(e, i) || p.data),
              (f.target = tn(e, p.target)),
              l && (f.target = "".concat(f.target, " | ").concat(l)),
              (f.name = tn(e, p.name)),
              (f.properties = an(e, u)),
              (f.measurements = sn(e, d));
          }
          return (
            (e.envelopeType =
              "Microsoft.ApplicationInsights.{0}.RemoteDependency"),
            (e.dataType = "RemoteDependencyData"),
            e
          );
        })(),
        Qi = (function () {
          function e(t, n, i) {
            var r,
              o = this,
              a = !1;
            (o.start = De()),
              (o.name = t),
              (o.isAsync = i),
              (o.isChildEvt = function () {
                return !1;
              }),
              de(n) &&
                (a = Pe(o, "payload", function () {
                  return !r && de(n) && ((r = n()), (n = null)), r;
                })),
              (o.getCtx = function (t) {
                return t
                  ? t === e.ParentContextKey || t === e.ChildrenContextKey
                    ? o[t]
                    : (o.ctx || {})[t]
                  : null;
              }),
              (o.setCtx = function (t, n) {
                t &&
                  (t === e.ParentContextKey
                    ? (o[t] ||
                        (o.isChildEvt = function () {
                          return !0;
                        }),
                      (o[t] = n))
                    : t === e.ChildrenContextKey
                    ? (o[t] = n)
                    : ((o.ctx = o.ctx || {})[t] = n));
              }),
              (o.complete = function () {
                var t = 0,
                  i = o.getCtx(e.ChildrenContextKey);
                if (ge(i))
                  for (var r = 0; r < i.length; r++) {
                    var s = i[r];
                    s && (t += s.time);
                  }
                (o.time = De() - o.start),
                  (o.exTime = o.time - t),
                  (o.complete = function () {}),
                  !a && de(n) && (o.payload = n());
              });
          }
          return (
            (e.ParentContextKey = "parent"),
            (e.ChildrenContextKey = "childEvts"),
            e
          );
        })(),
        er = (function () {
          function e(t) {
            (this.ctx = {}),
              C(e, this, function (e) {
                (e.create = function (e, t, n) {
                  return new Qi(e, t, n);
                }),
                  (e.fire = function (e) {
                    e && (e.complete(), t && de(t.perfEvent) && t.perfEvent(e));
                  }),
                  (e.setCtx = function (t, n) {
                    t && ((e.ctx = e.ctx || {})[t] = n);
                  }),
                  (e.getCtx = function (t) {
                    return (e.ctx || {})[t];
                  });
              });
          }
          return (e.__ieDyn = 1), e;
        })(),
        tr = "CoreUtils.doPerf";
      function nr(e, t, n, i, r) {
        if (e) {
          var o = e;
          if ((o.getPerfMgr && (o = o.getPerfMgr()), o)) {
            var a = void 0,
              s = o.getCtx(tr);
            try {
              if ((a = o.create(t(), i, r))) {
                if (
                  s &&
                  a.setCtx &&
                  (a.setCtx(Qi.ParentContextKey, s), s.getCtx && s.setCtx)
                ) {
                  var c = s.getCtx(Qi.ChildrenContextKey);
                  c || ((c = []), s.setCtx(Qi.ChildrenContextKey, c)),
                    c.push(a);
                }
                return o.setCtx(tr, a), n(a);
              }
            } catch (e) {
              a && a.setCtx && a.setCtx("exception", e);
            } finally {
              a && o.fire(a), o.setCtx(tr, s);
            }
          }
        }
        return n();
      }
      var ir = ri("plugin");
      function rr(e) {
        return ir.get(e, "state", {}, !0);
      }
      function or(e, t) {
        for (var n, i = [], r = null, o = e.getNext(); o; ) {
          var a = o.getPlugin();
          a &&
            (r &&
              de(r.setNextPlugin) &&
              de(a.processTelemetry) &&
              r.setNextPlugin(a),
            (de(a.isInitialized)
              ? a.isInitialized()
              : (n = rr(a)).isInitialized) || i.push(a),
            (r = a),
            (o = o.getNext()));
        }
        Ce(i, function (i) {
          var r = e.core();
          i.initialize(e.getCfg(), r, t, e.getNext()),
            (n = rr(i)),
            i.core || n.core || (n.core = r),
            (n.isInitialized = !0),
            delete n.teardown;
        });
      }
      function ar(e) {
        return e.sort(function (e, t) {
          var n = 0;
          if (t) {
            var i = de(t.processTelemetry);
            de(e.processTelemetry)
              ? (n = i ? e.priority - t.priority : 1)
              : i && (n = -1);
          } else n = e ? 1 : -1;
          return n;
        });
      }
      var sr = 0;
      function cr(e, t, n, i) {
        var r = null,
          o = [];
        null !== i &&
          (r = i
            ? (function (e, t, n) {
                for (; e; ) {
                  if (e.getPlugin() === n) return e;
                  e = e.getNext();
                }
                return fr([n], t.config || {}, t);
              })(e, n, i)
            : e);
        var a = {
          _next: function () {
            var e = r;
            if (((r = e ? e.getNext() : null), !e)) {
              var t = o;
              t &&
                t.length > 0 &&
                (Ce(t, function (e) {
                  try {
                    e.func.call(e.self, e.args);
                  } catch (e) {
                    Mt(
                      n.logger,
                      2,
                      73,
                      "Unexpected Exception during onComplete - " + vt(e)
                    );
                  }
                }),
                (o = []));
            }
            return e;
          },
          ctx: {
            core: function () {
              return n;
            },
            diagLog: function () {
              return At(n, t);
            },
            getCfg: function () {
              return t;
            },
            getExtCfg: s,
            getConfig: function (e, n, i) {
              void 0 === i && (i = !1);
              var r,
                o = s(e, null);
              return (
                o && !se(o[n]) ? (r = o[n]) : t && !se(t[n]) && (r = t[n]),
                se(r) ? i : r
              );
            },
            hasNext: function () {
              return !!r;
            },
            getNext: function () {
              return r;
            },
            setNext: function (e) {
              r = e;
            },
            iterate: function (e) {
              for (var t; (t = a._next()); ) {
                var n = t.getPlugin();
                n && e(n);
              }
            },
            onComplete: function (e, t) {
              for (var n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
              e && o.push({ func: e, self: ae(t) ? a.ctx : t, args: n });
            },
          },
        };
        function s(e, n, i) {
          var r;
          if ((void 0 === n && (n = {}), void 0 === i && (i = 0), t)) {
            var o = t.extensionConfig;
            o && e && (r = o[e]);
          }
          if (r) {
            if (ue(n) && 0 !== i) {
              var a = ze(!0, n, r);
              t &&
                2 === i &&
                pe(n, function (e) {
                  if (se(a[e])) {
                    var n = t[e];
                    se(n) || (a[e] = n);
                  }
                }),
                (r = a);
            }
          } else r = n;
          return r;
        }
        return a;
      }
      function lr(e, t, n, i) {
        var r = cr(e, t, n, i),
          o = r.ctx;
        return (
          (o.processNext = function (e) {
            var t = r._next();
            return t && t.processTelemetry(e, o), !t;
          }),
          (o.createNew = function (e, i) {
            return (
              void 0 === e && (e = null),
              ge(e) && (e = fr(e, t, n, i)),
              lr(e || o.getNext(), t, n, i)
            );
          }),
          o
        );
      }
      function ur(e, t, n) {
        var i = t.config || {},
          r = cr(e, i, t, n),
          o = r.ctx;
        return (
          (o.processNext = function (e) {
            var t = r._next();
            return t && t.unload(o, e), !t;
          }),
          (o.createNew = function (e, n) {
            return (
              void 0 === e && (e = null),
              ge(e) && (e = fr(e, i, t, n)),
              ur(e || o.getNext(), t, n)
            );
          }),
          o
        );
      }
      function dr(e, t, n) {
        var i = t.config || {},
          r = cr(e, i, t, n).ctx;
        return (
          (r.processNext = function (e) {
            return r.iterate(function (t) {
              de(t.update) && t.update(r, e);
            });
          }),
          (r.createNew = function (e, n) {
            return (
              void 0 === e && (e = null),
              ge(e) && (e = fr(e, i, t, n)),
              dr(e || r.getNext(), t, n)
            );
          }),
          r
        );
      }
      function fr(e, t, n, i) {
        var r = null,
          o = !i;
        if (ge(e) && e.length > 0) {
          var a = null;
          Ce(e, function (e) {
            if ((o || i !== e || (o = !0), o && e && de(e.processTelemetry))) {
              var s = (function (e, t, n) {
                var i,
                  r = null,
                  o = de(e.processTelemetry),
                  a = de(e.setNextPlugin),
                  s = {
                    getPlugin: function () {
                      return e;
                    },
                    getNext: function () {
                      return r;
                    },
                    processTelemetry: function (i, l) {
                      c(
                        (l =
                          l ||
                          (function () {
                            var i;
                            return (
                              e && de(e._getTelCtx) && (i = e._getTelCtx()),
                              i || (i = lr(s, t, n)),
                              i
                            );
                          })()),
                        function (t) {
                          if (!e || !o) return !1;
                          var n = rr(e);
                          return (
                            !n.teardown &&
                            !n.disabled &&
                            (a && e.setNextPlugin(r),
                            e.processTelemetry(i, t),
                            !0)
                          );
                        },
                        "processTelemetry",
                        function () {
                          return { item: i };
                        },
                        !i.sync
                      ) || l.processNext(i);
                    },
                    unload: function (t, n) {
                      c(
                        t,
                        function () {
                          var i = !1;
                          if (e) {
                            var r = rr(e),
                              o = e.core || r.core;
                            !e ||
                              (o && o !== t.core()) ||
                              r.teardown ||
                              ((r.core = null),
                              (r.teardown = !0),
                              (r.isInitialized = !1),
                              e.teardown &&
                                !0 === e.teardown(t, n) &&
                                (i = !0));
                          }
                          return i;
                        },
                        "unload",
                        function () {},
                        n.isAsync
                      ) || t.processNext(n);
                    },
                    update: function (t, n) {
                      c(
                        t,
                        function () {
                          var i = !1;
                          if (e) {
                            var r = rr(e),
                              o = e.core || r.core;
                            !e ||
                              (o && o !== t.core()) ||
                              r.teardown ||
                              (e.update && !0 === e.update(t, n) && (i = !0));
                          }
                          return i;
                        },
                        "update",
                        function () {},
                        !1
                      ) || t.processNext(n);
                    },
                    _id: (i = e
                      ? e.identifier + "-" + e.priority + "-" + sr++
                      : "Unknown-0-" + sr++),
                    _setNext: function (e) {
                      r = e;
                    },
                  };
                function c(t, n, o, a, s) {
                  var c = !1,
                    l = e ? e.identifier : "TelemetryPluginChain",
                    u = t._hasRun;
                  return (
                    u || (u = t._hasRun = {}),
                    t.setNext(r),
                    e &&
                      nr(
                        t.core(),
                        function () {
                          return l + ":" + o;
                        },
                        function () {
                          u[i] = !0;
                          try {
                            var e = r ? r._id : U;
                            e && (u[e] = !1), (c = n(t));
                          } catch (e) {
                            var a = !r || u[r._id];
                            a && (c = !0),
                              (r && a) ||
                                Mt(
                                  t.diagLog(),
                                  1,
                                  73,
                                  "Plugin [" +
                                    l +
                                    "] failed during " +
                                    o +
                                    " - " +
                                    vt(e) +
                                    ", run flags: " +
                                    vt(u)
                                );
                          }
                        },
                        a,
                        s
                      ),
                    c
                  );
                }
                return Ae(s);
              })(e, t, n);
              r || (r = s), a && a._setNext(s), (a = s);
            }
          });
        }
        return i && !r ? fr([i], t, n) : r;
      }
      var pr = ["req", "rsp", "hkErr", "fnErr"];
      function hr(e, t) {
        if (e) for (var n = 0; n < e.length && !t(e[n], n); n++);
      }
      function gr(e, t, n, i, r) {
        r >= 0 &&
          r <= 2 &&
          hr(e, function (e, o) {
            var a = e.cbks,
              s = a[pr[r]];
            if (s) {
              t.ctx = function () {
                return (i[o] = i[o] || {});
              };
              try {
                s.apply(t.inst, n);
              } catch (e) {
                var c = t.err;
                try {
                  var l = a[pr[2]];
                  l && ((t.err = e), l.apply(t.inst, n));
                } catch (e) {
                } finally {
                  t.err = c;
                }
              }
            }
          });
      }
      function mr(e, t, n) {
        var i = null;
        return e && (le(e, t) ? (i = e) : n && (i = mr(oe(e), t, !1))), i;
      }
      function vr(e, t, n, i) {
        var r = n && n._aiHooks;
        if (!r) {
          var o = (function (e) {
            return function () {
              var t,
                n = this,
                i = arguments,
                r = e.h,
                o =
                  (((t = {}).name = e.n),
                  (t.inst = n),
                  (t.ctx = null),
                  (t.set = l),
                  t),
                a = [],
                s = c([o], i);
              function c(e, t) {
                return (
                  hr(t, function (t) {
                    e.push(t);
                  }),
                  e
                );
              }
              function l(e, t) {
                ((i = c([], i))[e] = t), (s = c([o], i));
              }
              (o.evt = it("event")), gr(r, o, s, a, 0);
              var u = e.f;
              if (u)
                try {
                  o.rslt = u.apply(n, i);
                } catch (e) {
                  throw ((o.err = e), gr(r, o, s, a, 3), e);
                }
              return gr(r, o, s, a, 1), o.rslt;
            };
          })((r = { i: 0, n: t, f: n, h: [] }));
          (o._aiHooks = r), (e[t] = o);
        }
        var a = {
          id: r.i,
          cbks: i,
          rm: function () {
            var e = this.id;
            hr(r.h, function (t, n) {
              if (t.id === e) return r.h.splice(n, 1), 1;
            });
          },
        };
        return r.i++, r.h.push(a), a;
      }
      function yr(e, t, n, i) {
        if ((void 0 === i && (i = !0), e && t && n)) {
          var r = mr(e, t, i);
          if (r) {
            var o = r[t];
            if (typeof o === w) return vr(r, t, o, n);
          }
        }
        return null;
      }
      function _r(e, t, n, i) {
        if (e && t && n) {
          var r = mr(e, t, i) || e;
          if (r) return vr(r, t, r[t], n);
        }
        return null;
      }
      function xr() {
        var e = [];
        return {
          add: function (t) {
            t && e.push(t);
          },
          run: function (t, n) {
            Ce(e, function (e) {
              try {
                e(t, n);
              } catch (e) {
                Mt(
                  t.diagLog(),
                  2,
                  73,
                  "Unexpected error calling unload handler - " + vt(e)
                );
              }
            }),
              (e = []);
          },
        };
      }
      var br = (function () {
          function e() {
            var t,
              n,
              i,
              r,
              o,
              a = this;
            function s(e) {
              void 0 === e && (e = null);
              var t = e;
              if (!t) {
                var r = n || lr(null, {}, a.core);
                t =
                  i && i.getPlugin
                    ? r.createNew(null, i.getPlugin)
                    : r.createNew(null, i);
              }
              return t;
            }
            function c(e, t, r) {
              e && Me(e, z, [], null, se),
                !r && t && (r = t.getProcessTelContext().getNext());
              var o = i;
              i && i.getPlugin && (o = i.getPlugin()),
                (a.core = t),
                (n = lr(r, e, t, o));
            }
            function l() {
              (t = !1),
                (a.core = null),
                (n = null),
                (i = null),
                (o = []),
                (r = xr());
            }
            l(),
              C(e, a, function (e) {
                (e.initialize = function (e, n, i, r) {
                  c(e, n, r), (t = !0);
                }),
                  (e.teardown = function (t, n) {
                    var a,
                      s = e.core;
                    if (s && (!t || s === t.core())) {
                      var c,
                        u = !1,
                        d =
                          t ||
                          ur(null, s, i && i.getPlugin ? i.getPlugin() : i),
                        f = n || (((a = { reason: 0 }).isAsync = !1), a);
                      return (
                        e._doTeardown && !0 === e._doTeardown(d, f, p)
                          ? (c = !0)
                          : p(),
                        c
                      );
                    }
                    function p() {
                      if (!u) {
                        (u = !0), r.run(d, n);
                        var e = o;
                        (o = []),
                          Ce(e, function (e) {
                            e.rm();
                          }),
                          !0 === c && d.processNext(f),
                          l();
                      }
                    }
                  }),
                  (e.update = function (t, n) {
                    var r = e.core;
                    if (r && (!t || r === t.core())) {
                      var o,
                        a = !1,
                        s =
                          t ||
                          dr(null, r, i && i.getPlugin ? i.getPlugin() : i),
                        l = n || { reason: 0 };
                      return (
                        e._doUpdate && !0 === e._doUpdate(s, l, u)
                          ? (o = !0)
                          : u(),
                        o
                      );
                    }
                    function u() {
                      a || ((a = !0), c(s.getCfg(), s.core(), s.getNext()));
                    }
                  }),
                  (e._addHook = function (e) {
                    e && (ge(e) ? (o = o.concat(e)) : o.push(e));
                  }),
                  Fe(
                    e,
                    "_addUnloadCb",
                    function () {
                      return r;
                    },
                    "add"
                  );
              }),
              (a.diagLog = function (e) {
                return s(e).diagLog();
              }),
              (a.isInitialized = function () {
                return t;
              }),
              (a.setInitialized = function (e) {
                t = e;
              }),
              (a.setNextPlugin = function (e) {
                i = e;
              }),
              (a.processNext = function (e, t) {
                t
                  ? t.processNext(e)
                  : i && de(i.processTelemetry) && i.processTelemetry(e, null);
              }),
              (a._getTelCtx = s);
          }
          return (e.__ieDyn = 1), e;
        })(),
        Cr = "enableUnhandledPromiseRejectionTracking",
        wr = "isBrowserLinkTrackingEnabled",
        kr = "sendPageViewPerformanceInternal",
        Sr = "populatePageViewPerformanceEvent",
        Er = (function () {
          function e(t, n, i, r) {
            C(e, this, function (e) {
              var o,
                a = null,
                s = [],
                c = !1;
              function l(e) {
                i && i.flush(e);
              }
              i && (o = i.logger),
                (e.trackPageView = function (e, i) {
                  var u = e.name;
                  if (se(u) || "string" != typeof u) {
                    var d = st();
                    u = e.name = (d && d.title) || "";
                  }
                  var f = e.uri;
                  if (se(f) || "string" != typeof f) {
                    var p = dt();
                    f = e.uri = (p && p.href) || "";
                  }
                  if (!r.isPerformanceTimingSupported())
                    return (
                      t.sendPageViewInternal(e, i),
                      l(!0),
                      void Mt(
                        o,
                        2,
                        25,
                        "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."
                      )
                    );
                  var h,
                    g,
                    m,
                    v = !1,
                    y = r.getPerformanceTiming().navigationStart;
                  y > 0 &&
                    ((h = Yi(y, +new Date())),
                    r.shouldCollectDuration(h) || (h = void 0)),
                    se(i) || se(i.duration) || (g = i.duration),
                    (!n && isNaN(g)) ||
                      (isNaN(g) && (i || (i = {}), (i.duration = h)),
                      t.sendPageViewInternal(e, i),
                      l(!0),
                      (v = !0)),
                    i || (i = {}),
                    (m = function () {
                      var n = !1;
                      try {
                        if (r.isPerformanceTimingDataReady()) {
                          n = !0;
                          var a = { name: u, uri: f };
                          r[Sr](a),
                            a.isValid || v
                              ? (v ||
                                  ((i.duration = a.durationMs),
                                  t.sendPageViewInternal(e, i)),
                                c || (t[kr](a, i), (c = !0)))
                              : ((i.duration = h),
                                t.sendPageViewInternal(e, i));
                        } else
                          y > 0 &&
                            Yi(y, +new Date()) > 6e4 &&
                            ((n = !0),
                            v ||
                              ((i.duration = 6e4),
                              t.sendPageViewInternal(e, i)));
                      } catch (e) {
                        Mt(
                          o,
                          1,
                          38,
                          "trackPageView failed on page load calculation: " +
                            Ne(e),
                          { exception: vt(e) }
                        );
                      }
                      return n;
                    }),
                    s.push(m),
                    a ||
                      (a = setInterval(function () {
                        var e = s.slice(0),
                          t = !1;
                        (s = []),
                          Ce(e, function (e) {
                            e() ? (t = !0) : s.push(e);
                          }),
                          0 === s.length && (clearInterval(a), (a = null)),
                          t && l(!0);
                      }, 100));
                }),
                (e.teardown = function (e, t) {
                  if (a) {
                    clearInterval(a), (a = null);
                    var n = s.slice(0);
                    (s = []),
                      Ce(n, function (e) {
                        e();
                      });
                  }
                });
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        Tr = 36e5,
        Lr = [
          "googlebot",
          "adsbot-google",
          "apis-google",
          "mediapartners-google",
        ];
      function Pr() {
        var e = ft();
        return e && !!e.timing;
      }
      function Ir() {
        var e = ft(),
          t = e ? e.timing : 0;
        return (
          t &&
          t.domainLookupStart > 0 &&
          t.navigationStart > 0 &&
          t.responseStart > 0 &&
          t.requestStart > 0 &&
          t.loadEventEnd > 0 &&
          t.responseEnd > 0 &&
          t.connectEnd > 0 &&
          t.domLoading > 0
        );
      }
      function Ar() {
        return Pr() ? ft().timing : null;
      }
      function Dr() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = lt() || {},
          i = n.userAgent,
          r = !1;
        if (i)
          for (var o = 0; o < Lr.length; o++)
            r = r || -1 !== i.toLowerCase().indexOf(Lr[o]);
        if (r) return !1;
        for (o = 0; o < e.length; o++) if (e[o] < 0 || e[o] >= Tr) return !1;
        return !0;
      }
      var Nr = (function () {
          function e(t) {
            var n = this,
              i = At(t);
            C(e, this, function (e) {
              (e[Sr] = function (e) {
                e.isValid = !1;
                var t,
                  r =
                    (t = ft()) &&
                    t.getEntriesByType &&
                    t.getEntriesByType("navigation").length > 0
                      ? ft().getEntriesByType("navigation")[0]
                      : null,
                  o = Ar(),
                  a = 0,
                  s = 0,
                  c = 0,
                  l = 0,
                  u = 0;
                (r || o) &&
                  (r
                    ? ((a = r.duration),
                      (s =
                        0 === r.startTime
                          ? r.connectEnd
                          : Yi(r.startTime, r.connectEnd)),
                      (c = Yi(r.requestStart, r.responseStart)),
                      (l = Yi(r.responseStart, r.responseEnd)),
                      (u = Yi(r.responseEnd, r.loadEventEnd)))
                    : ((a = Yi(o.navigationStart, o.loadEventEnd)),
                      (s = Yi(o.navigationStart, o.connectEnd)),
                      (c = Yi(o.requestStart, o.responseStart)),
                      (l = Yi(o.responseStart, o.responseEnd)),
                      (u = Yi(o.responseEnd, o.loadEventEnd))),
                  0 === a
                    ? Mt(i, 2, 10, "error calculating page view performance.", {
                        total: a,
                        network: s,
                        request: c,
                        response: l,
                        dom: u,
                      })
                    : n.shouldCollectDuration(a, s, c, l, u)
                    ? a <
                      Math.floor(s) +
                        Math.floor(c) +
                        Math.floor(l) +
                        Math.floor(u)
                      ? Mt(i, 2, 8, "client performance math error.", {
                          total: a,
                          network: s,
                          request: c,
                          response: l,
                          dom: u,
                        })
                      : ((e.durationMs = a),
                        (e.perfTotal = e.duration = $e(a)),
                        (e.networkConnect = $e(s)),
                        (e.sentRequest = $e(c)),
                        (e.receivedResponse = $e(l)),
                        (e.domProcessing = $e(u)),
                        (e.isValid = !0))
                    : Mt(
                        i,
                        2,
                        45,
                        "Invalid page load duration value. Browser perf data won't be sent.",
                        {
                          total: a,
                          network: s,
                          request: c,
                          response: l,
                          dom: u,
                        }
                      ));
              }),
                (e.getPerformanceTiming = Ar),
                (e.isPerformanceTimingSupported = Pr),
                (e.isPerformanceTimingDataReady = Ir),
                (e.shouldCollectDuration = Dr);
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        Mr = (function () {
          function e(t, n) {
            var i = "prevPageVisitData";
            C(e, this, function (e) {
              (e.trackPreviousPageVisit = function (e, r) {
                try {
                  var o = (function (e, n) {
                    var r = null;
                    try {
                      (r = (function () {
                        var e = null;
                        try {
                          if (Wt()) {
                            var n = De(),
                              r = Vt(t, i);
                            r &&
                              pt() &&
                              (((e = ht().parse(r)).pageVisitTime =
                                n - e.pageVisitStartTime),
                              (function (e, t) {
                                var n = Ut();
                                if (null !== n)
                                  try {
                                    return n.removeItem(t), !0;
                                  } catch (t) {
                                    (qt = !1),
                                      Mt(
                                        e,
                                        2,
                                        6,
                                        "Browser failed removal of session storage item. " +
                                          Ne(t),
                                        { exception: vt(t) }
                                      );
                                  }
                              })(t, i));
                          }
                        } catch (n) {
                          Ot(t, "Stop page visit timer failed: " + vt(n)),
                            (e = null);
                        }
                        return e;
                      })()),
                        (function (e, n) {
                          try {
                            if (Wt()) {
                              null != Vt(t, i) &&
                                He(
                                  "Cannot call startPageVisit consecutively without first calling stopPageVisit"
                                );
                              var r = new Or(e, n),
                                o = ht().stringify(r);
                              $t(t, i, o);
                            }
                          } catch (e) {
                            Ot(t, "Call to start failed: " + vt(e));
                          }
                        })(e, n);
                    } catch (e) {
                      Ot(t, "Call to restart failed: " + vt(e)), (r = null);
                    }
                    return r;
                  })(e, r);
                  o && n(o.pageName, o.pageUrl, o.pageVisitTime);
                } catch (e) {
                  Ot(
                    t,
                    "Auto track page visit time failed, metric will not be collected: " +
                      vt(e)
                  );
                }
              }),
                Pe(e, "_logger", function () {
                  return t;
                }),
                Pe(e, "pageVisitTimeTrackingHandler", function () {
                  return n;
                });
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        Or = function (e, t) {
          (this.pageVisitStartTime = De()),
            (this.pageName = e),
            (this.pageUrl = t);
        },
        Br = function (e, t) {
          var n = this,
            i = {};
          (n.start = function (t) {
            void 0 !== i[t] &&
              Mt(
                e,
                2,
                62,
                "start was called more than once for this event without calling stop.",
                { name: t, key: t },
                !0
              ),
              (i[t] = +new Date());
          }),
            (n.stop = function (t, r, o, a) {
              var s = i[t];
              if (isNaN(s))
                Mt(
                  e,
                  2,
                  63,
                  "stop was called without a corresponding start.",
                  { name: t, key: t },
                  !0
                );
              else {
                var c = Yi(s, +new Date());
                n.action(t, r, c, o, a);
              }
              delete i[t], (i[t] = void 0);
            });
        };
      function Rr(e, t) {
        e && e.dispatchEvent && t && e.dispatchEvent(t);
      }
      function Hr(e, t) {
        return (e = e || t) < 6e4 && (e = 6e4), e;
      }
      function qr(e) {
        return (
          e || (e = {}),
          (e.sessionRenewalMs = Hr(e.sessionRenewalMs, 18e5)),
          (e.sessionExpirationMs = Hr(e.sessionExpirationMs, 864e5)),
          (e.disableExceptionTracking = Ve(e.disableExceptionTracking)),
          (e.autoTrackPageVisitTime = Ve(e.autoTrackPageVisitTime)),
          (e.overridePageViewDuration = Ve(e.overridePageViewDuration)),
          (e[Cr] = Ve(e[Cr])),
          (isNaN(e.samplingPercentage) ||
            e.samplingPercentage <= 0 ||
            e.samplingPercentage >= 100) &&
            (e.samplingPercentage = 100),
          (e.isStorageUseDisabled = Ve(e.isStorageUseDisabled)),
          (e[wr] = Ve(e[wr])),
          (e.enableAutoRouteTracking = Ve(e.enableAutoRouteTracking)),
          (e.namePrefix = e.namePrefix || ""),
          (e.enableDebug = Ve(e.enableDebug)),
          (e.disableFlushOnBeforeUnload = Ve(e.disableFlushOnBeforeUnload)),
          (e.disableFlushOnUnload = Ve(
            e.disableFlushOnUnload,
            e.disableFlushOnBeforeUnload
          )),
          e
        );
      }
      function Fr(e) {
        ae(e.isStorageUseDisabled) ||
          (e.isStorageUseDisabled
            ? ((Ht = !1), (qt = !1))
            : ((Ht = zt(!0)), (qt = Wt(!0))));
      }
      var jr = (function (e) {
        function t() {
          var n,
            i,
            r,
            o,
            a,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            h,
            g,
            m,
            v,
            y,
            _ = e.call(this) || this;
          return (
            (_.identifier = "ApplicationInsightsAnalytics"),
            (_.priority = 180),
            (_.autoRoutePVDelay = 500),
            C(t, _, function (e, t) {
              var x = t._addHook;
              function b(t, n, i, r, o) {
                e.diagLog().throwInternal(t, n, i, r, o);
              }
              function C() {
                (n = null),
                  (i = null),
                  (r = null),
                  (o = null),
                  (a = null),
                  (s = null),
                  (c = !1),
                  (l = !1),
                  (u = !1),
                  (d = !1),
                  (f = !1),
                  (p = !1),
                  (h = !1),
                  (g = !1);
                var e = dt();
                (m = (e && e.href) || ""), (v = null), (y = null);
              }
              C(),
                (e.getCookieMgr = function () {
                  return Rn(e.core);
                }),
                (e.processTelemetry = function (t, n) {
                  e.processNext(t, n);
                }),
                (e.trackEvent = function (t, n) {
                  try {
                    var i = dn(t, fn.dataType, fn.envelopeType, e.diagLog(), n);
                    e.core.track(i);
                  } catch (e) {
                    b(
                      2,
                      39,
                      "trackTrace failed, trace will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.startTrackEvent = function (e) {
                  try {
                    n.start(e);
                  } catch (e) {
                    b(
                      1,
                      29,
                      "startTrackEvent failed, event will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.stopTrackEvent = function (e, t, i) {
                  try {
                    n.stop(e, void 0, t, i);
                  } catch (e) {
                    b(
                      1,
                      30,
                      "stopTrackEvent failed, event will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.trackTrace = function (t, n) {
                  try {
                    var i = dn(t, pn.dataType, pn.envelopeType, e.diagLog(), n);
                    e.core.track(i);
                  } catch (e) {
                    b(
                      2,
                      39,
                      "trackTrace failed, trace will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.trackMetric = function (t, n) {
                  try {
                    var i = dn(t, gn.dataType, gn.envelopeType, e.diagLog(), n);
                    e.core.track(i);
                  } catch (e) {
                    b(
                      1,
                      36,
                      "trackMetric failed, metric will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.trackPageView = function (t, n) {
                  try {
                    var i = t || {};
                    r.trackPageView(
                      i,
                      B(B(B({}, i.properties), i.measurements), n)
                    ),
                      e.config.autoTrackPageVisitTime &&
                        a.trackPreviousPageVisit(i.name, i.uri);
                  } catch (e) {
                    b(
                      1,
                      37,
                      "trackPageView failed, page view will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.sendPageViewInternal = function (t, n, i) {
                  var r = st();
                  r && (t.refUri = void 0 === t.refUri ? r.referrer : t.refUri);
                  var o = dn(
                    t,
                    mn.dataType,
                    mn.envelopeType,
                    e.diagLog(),
                    n,
                    i
                  );
                  e.core.track(o);
                }),
                (e[kr] = function (t, n, i) {
                  var r = dn(
                    t,
                    vn.dataType,
                    vn.envelopeType,
                    e.diagLog(),
                    n,
                    i
                  );
                  e.core.track(r);
                }),
                (e.trackPageViewPerformance = function (t, n) {
                  var i = t || {};
                  try {
                    o[Sr](i), e[kr](i, n);
                  } catch (e) {
                    b(
                      1,
                      37,
                      "trackPageViewPerformance failed, page view will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.startTrackPage = function (e) {
                  try {
                    if ("string" != typeof e) {
                      var t = st();
                      e = (t && t.title) || "";
                    }
                    i.start(e);
                  } catch (e) {
                    b(
                      1,
                      31,
                      "startTrackPage failed, page view may not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.stopTrackPage = function (t, n, r, o) {
                  try {
                    if ("string" != typeof t) {
                      var s = st();
                      t = (s && s.title) || "";
                    }
                    if ("string" != typeof n) {
                      var c = dt();
                      n = (c && c.href) || "";
                    }
                    i.stop(t, n, r, o),
                      e.config.autoTrackPageVisitTime &&
                        a.trackPreviousPageVisit(t, n);
                  } catch (e) {
                    b(
                      1,
                      32,
                      "stopTrackPage failed, page view will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e.sendExceptionInternal = function (t, n, i) {
                  var r = t.exception || t.error || new Error(Zt),
                    o = dn(
                      new Sn(
                        e.diagLog(),
                        r,
                        t.properties || n,
                        t.measurements,
                        t.severityLevel,
                        t.id
                      ).toInterface(),
                      Sn.dataType,
                      Sn.envelopeType,
                      e.diagLog(),
                      n,
                      i
                    );
                  e.core.track(o);
                }),
                (e.trackException = function (t, n) {
                  t && !t.exception && t.error && (t.exception = t.error);
                  try {
                    e.sendExceptionInternal(t, n);
                  } catch (e) {
                    b(
                      1,
                      35,
                      "trackException failed, exception will not be collected: " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                }),
                (e._onerror = function (t) {
                  var n = t && t.error,
                    i = t && t.evt;
                  try {
                    if (!i) {
                      var r = ot();
                      r && (i = r.event);
                    }
                    var o = (t && t.url) || (st() || {}).URL,
                      a =
                        t.errorSrc ||
                        "window.onerror@" +
                          o +
                          ":" +
                          (t.lineNumber || 0) +
                          ":" +
                          (t.columnNumber || 0),
                      s = {
                        errorSrc: a,
                        url: o,
                        lineNumber: t.lineNumber || 0,
                        columnNumber: t.columnNumber || 0,
                        message: t.message,
                      };
                    !(function (e, t, n, i, r) {
                      return (
                        !r &&
                        ve(e) &&
                        ("Script error." === e || "Script error" === e)
                      );
                    })(t.message, t.url, t.lineNumber, t.columnNumber, t.error)
                      ? (t.errorSrc || (t.errorSrc = a),
                        e.trackException({ exception: t, severityLevel: 3 }, s))
                      : (function (t, n) {
                          var i = dn(
                            t,
                            Sn.dataType,
                            Sn.envelopeType,
                            e.diagLog(),
                            n
                          );
                          e.core.track(i);
                        })(
                          Sn.CreateAutoException(
                            "Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.",
                            o,
                            t.lineNumber || 0,
                            t.columnNumber || 0,
                            n,
                            i,
                            null,
                            a
                          ),
                          s
                        );
                  } catch (e) {
                    var c = n ? n.name + ", " + n.message : "null";
                    b(
                      1,
                      11,
                      "_onError threw exception while logging error, error will not be collected: " +
                        Ne(e),
                      { exception: vt(e), errorString: c }
                    );
                  }
                }),
                (e.addTelemetryInitializer = function (t) {
                  if (e.core) return e.core.addTelemetryInitializer(t);
                  s || (s = []), s.push(t);
                }),
                (e.initialize = function (b, C, w, k) {
                  if (!e.isInitialized()) {
                    se(C) && He("Error initializing"), t.initialize(b, C, w, k);
                    try {
                      (y = bi(
                        ii(e.identifier),
                        C.evtNamespace && C.evtNamespace()
                      )),
                        s &&
                          (Ce(s, function (e) {
                            C.addTelemetryInitializer(e);
                          }),
                          (s = null));
                      var E = (function (t) {
                        var n = lr(null, t, e.core),
                          i = e.identifier,
                          r = qr(t),
                          o = (e.config = n.getExtCfg(i));
                        return (
                          void 0 !== r &&
                            pe(r, function (e, t) {
                              (o[e] = n.getConfig(i, e, t)),
                                void 0 === o[e] && (o = t);
                            }),
                          o
                        );
                      })(b);
                      Fr(E),
                        (o = new Nr(e.core)),
                        (r = new Er(_, E.overridePageViewDuration, e.core, o)),
                        (a = new Mr(e.diagLog(), function (t, n, i) {
                          return (function (t, n, i) {
                            var r = { PageName: t, PageUrl: n };
                            e.trackMetric(
                              {
                                name: "PageVisitTime",
                                average: i,
                                max: i,
                                min: i,
                                sampleCount: 1,
                              },
                              r
                            );
                          })(t, n, i);
                        })),
                        (function (t, n) {
                          (c = t[wr] || n[wr]),
                            (function () {
                              if (!l && c) {
                                var t = [
                                  "/browserLinkSignalR/",
                                  "/__browserLink/",
                                ];
                                e.addTelemetryInitializer(function (e) {
                                  if (c && e.baseType === Zi.dataType) {
                                    var n = e.baseData;
                                    if (n)
                                      for (var i = 0; i < t.length; i++)
                                        if (
                                          n.target &&
                                          n.target.indexOf(t[i]) >= 0
                                        )
                                          return !1;
                                  }
                                  return !0;
                                }),
                                  (l = !0);
                              }
                            })();
                        })(E, b),
                        ((n = new Br(e.diagLog(), "trackEvent")).action =
                          function (t, n, i, r, o) {
                            r || (r = {}),
                              o || (o = {}),
                              (r.duration = i.toString()),
                              e.trackEvent({
                                name: t,
                                properties: r,
                                measurements: o,
                              });
                          }),
                        ((i = new Br(e.diagLog(), "trackPageView")).action =
                          function (t, n, i, r, o) {
                            se(r) && (r = {}), (r.duration = i.toString());
                            var a = {
                              name: t,
                              uri: n,
                              properties: r,
                              measurements: o,
                            };
                            e.sendPageViewInternal(a, r);
                          }),
                        rt() &&
                          ((function (t) {
                            var n = ot(),
                              i = dt();
                            (f = t.disableExceptionTracking) ||
                              p ||
                              t.autoExceptionInstrumented ||
                              (x(
                                _r(
                                  n,
                                  "onerror",
                                  {
                                    ns: y,
                                    rsp: function (t, n, i, r, o, a) {
                                      f ||
                                        !0 === t.rslt ||
                                        e._onerror(
                                          Sn.CreateAutoException(
                                            n,
                                            i,
                                            r,
                                            o,
                                            a,
                                            t.evt
                                          )
                                        );
                                    },
                                  },
                                  !1
                                )
                              ),
                              (p = !0)),
                              (function (t, n, i) {
                                (h = !0 === t[Cr]) &&
                                  !g &&
                                  (x(
                                    _r(
                                      n,
                                      "onunhandledrejection",
                                      {
                                        ns: y,
                                        rsp: function (t, n) {
                                          h &&
                                            !0 !== t.rslt &&
                                            e._onerror(
                                              Sn.CreateAutoException(
                                                (function (e) {
                                                  if (e && e.reason) {
                                                    var t = e.reason;
                                                    return !ve(t) &&
                                                      de(t.toString)
                                                      ? t.toString()
                                                      : vt(t);
                                                  }
                                                  return e || "";
                                                })(n),
                                                i ? i.href : "",
                                                0,
                                                0,
                                                n,
                                                t.evt
                                              )
                                            );
                                        },
                                      },
                                      !1
                                    )
                                  ),
                                  (g = !0),
                                  (t.autoUnhandledPromiseInstrumented = g));
                              })(t, n, i);
                          })(E),
                          (function (t) {
                            var n = ot(),
                              i = dt();
                            if (
                              ((u = !0 === t.enableAutoRouteTracking),
                              n && u && ut())
                            ) {
                              var r = ut() ? history : it("history");
                              de(r.pushState) &&
                                de(r.replaceState) &&
                                typeof Event !== S &&
                                (function (t, n, i, r) {
                                  var o = t.namePrefix || "";
                                  d ||
                                    (x(
                                      _r(
                                        i,
                                        "pushState",
                                        {
                                          ns: y,
                                          rsp: function () {
                                            u &&
                                              (Rr(n, Ri(o + "pushState")),
                                              Rr(n, Ri(o + "locationchange")));
                                          },
                                        },
                                        !0
                                      )
                                    ),
                                    x(
                                      _r(
                                        i,
                                        "replaceState",
                                        {
                                          ns: y,
                                          rsp: function () {
                                            u &&
                                              (Rr(n, Ri(o + "replaceState")),
                                              Rr(n, Ri(o + "locationchange")));
                                          },
                                        },
                                        !0
                                      )
                                    ),
                                    Ci(
                                      n,
                                      o + "popstate",
                                      function () {
                                        u && Rr(n, Ri(o + "locationchange"));
                                      },
                                      y
                                    ),
                                    Ci(
                                      n,
                                      o + "locationchange",
                                      function () {
                                        if (
                                          (v
                                            ? ((m = v),
                                              (v = (r && r.href) || ""))
                                            : (v = (r && r.href) || ""),
                                          u)
                                        ) {
                                          var t = (function () {
                                            var t = null;
                                            if (
                                              (e.core &&
                                                e.core.getTraceCtx &&
                                                (t = e.core.getTraceCtx(!1)),
                                              !t)
                                            ) {
                                              var n = e.core.getPlugin(F);
                                              if (n) {
                                                var i = n.plugin.context;
                                                i && (t = Ji(i.telemetryTrace));
                                              }
                                            }
                                            return t;
                                          })();
                                          if (t) {
                                            t.setTraceId(Ti());
                                            var n = "_unknown_";
                                            r &&
                                              r.pathname &&
                                              (n = r.pathname + (r.hash || "")),
                                              t.setName(tn(e.diagLog(), n));
                                          }
                                          setTimeout(
                                            function (t) {
                                              e.trackPageView({
                                                refUri: t,
                                                properties: { duration: 0 },
                                              });
                                            }.bind(this, m),
                                            e.autoRoutePVDelay
                                          );
                                        }
                                      },
                                      y
                                    ),
                                    (d = !0));
                                })(t, n, r, i);
                            }
                          })(E));
                    } catch (t) {
                      throw (e.setInitialized(!1), t);
                    }
                  }
                }),
                (e._doTeardown = function (e, t) {
                  r && r.teardown(e, t), wi(window, null, null, y), C();
                }),
                Pe(e, "_pageViewManager", function () {
                  return r;
                }),
                Pe(e, "_pageViewPerformanceManager", function () {
                  return o;
                }),
                Pe(e, "_pageVisitTimeManager", function () {
                  return a;
                }),
                Pe(e, "_evtNamespace", function () {
                  return "." + y;
                });
            }),
            _
          );
        }
        return H(t, e), (t.Version = "2.8.5"), (t.getDefaultConfig = qr), t;
      })(br);
      function Ur(e) {
        var t = "ai." + e + ".";
        return function (e) {
          return t + e;
        };
      }
      var zr,
        Wr = Ur("application"),
        Vr = Ur("device"),
        $r = Ur("location"),
        Xr = Ur("operation"),
        Kr = Ur("session"),
        Gr = Ur("user"),
        Yr = Ur("cloud"),
        Jr = Ur("internal"),
        Zr = (function (e) {
          function t() {
            return e.call(this) || this;
          }
          return H(t, e), t;
        })(
          ((zr = {
            applicationVersion: Wr("ver"),
            applicationBuild: Wr("build"),
            applicationTypeId: Wr("typeId"),
            applicationId: Wr("applicationId"),
            applicationLayer: Wr("layer"),
            deviceId: Vr("id"),
            deviceIp: Vr("ip"),
            deviceLanguage: Vr("language"),
            deviceLocale: Vr("locale"),
            deviceModel: Vr("model"),
            deviceFriendlyName: Vr("friendlyName"),
            deviceNetwork: Vr("network"),
            deviceNetworkName: Vr("networkName"),
            deviceOEMName: Vr("oemName"),
            deviceOS: Vr("os"),
            deviceOSVersion: Vr("osVersion"),
            deviceRoleInstance: Vr("roleInstance"),
            deviceRoleName: Vr("roleName"),
            deviceScreenResolution: Vr("screenResolution"),
            deviceType: Vr("type"),
            deviceMachineName: Vr("machineName"),
            deviceVMName: Vr("vmName"),
            deviceBrowser: Vr("browser"),
            deviceBrowserVersion: Vr("browserVersion"),
            locationIp: $r("ip"),
            locationCountry: $r("country"),
            locationProvince: $r("province"),
            locationCity: $r("city"),
            operationId: Xr("id"),
            operationName: Xr("name"),
            operationParentId: Xr("parentId"),
            operationRootId: Xr("rootId"),
            operationSyntheticSource: Xr("syntheticSource"),
            operationCorrelationVector: Xr("correlationVector"),
            sessionId: Kr("id"),
            sessionIsFirst: Kr("isFirst"),
            sessionIsNew: Kr("isNew"),
            userAccountAcquisitionDate: Gr("accountAcquisitionDate"),
            userAccountId: Gr("accountId"),
            userAgent: Gr("userAgent"),
            userId: Gr("id"),
            userStoreRegion: Gr("storeRegion"),
            userAuthUserId: Gr("authUserId"),
            userAnonymousUserAcquisitionDate: Gr("anonUserAcquisitionDate"),
            userAuthenticatedUserAcquisitionDate: Gr("authUserAcquisitionDate"),
            cloudName: Yr("name"),
            cloudRole: Yr("role"),
            cloudRoleVer: Yr("roleVer"),
            cloudRoleInstance: Yr("roleInstance"),
            cloudEnvironment: Yr("environment"),
            cloudLocation: Yr("location"),
            cloudDeploymentUnit: Yr("deploymentUnit"),
            internalNodeName: Jr("nodeName"),
            internalSdkVersion: Jr("sdkVersion"),
            internalAgentVersion: Jr("agentVersion"),
            internalSnippet: Jr("snippet"),
            internalSdkSrc: Jr("sdkSrc"),
          }),
          function () {
            var e = this;
            zr &&
              pe(zr, function (t, n) {
                e[t] = n;
              });
          })
        ),
        Qr = "user",
        eo = "device",
        to = "trace",
        no = "web",
        io = "app",
        ro = "os",
        oo = new Zr(),
        ao = function (e, t, n) {
          var i = this,
            r = this;
          (r.ver = 1),
            (r.sampleRate = 100),
            (r.tags = {}),
            (r.name = tn(e, n) || Zt),
            (r.data = t),
            (r.time = be(new Date())),
            (r.aiDataContract = {
              time: 1,
              iKey: 1,
              name: 1,
              sampleRate: function () {
                return 100 === i.sampleRate ? 4 : 1;
              },
              tags: 1,
              data: 1,
            });
        },
        so = function (e, t) {
          (this.aiDataContract = { baseType: 1, baseData: 1 }),
            (this.baseType = e),
            (this.baseData = t);
        },
        co = "disableInstrumentationKeyValidation",
        lo = "true";
      function uo(e, t, n) {
        return Me(e, t, n, Re);
      }
      function fo(e, t, n) {
        se(e) ||
          pe(e, function (e, i) {
            ye(i)
              ? (n[e] = i)
              : ve(i)
              ? (t[e] = i)
              : pt() && (t[e] = ht().stringify(i));
          });
      }
      function po(e, t) {
        se(e) ||
          pe(e, function (n, i) {
            e[n] = i || t;
          });
      }
      function ho(e, t, n, i) {
        var r = new ao(e, i, t);
        uo(r, "sampleRate", n.sampleRate),
          (n.baseData || {}).startTime && (r.time = be(n.baseData.startTime)),
          (r.iKey = n.iKey);
        var o = n.iKey.replace(/-/g, "");
        return (
          (r.name = r.name.replace("{0}", o)),
          (function (e, t, n) {
            var i = (n.tags = n.tags || {}),
              r = (t.ext = t.ext || {}),
              o = (t.tags = t.tags || []),
              a = r.user;
            a &&
              (uo(i, oo.userAuthUserId, a.authId),
              uo(i, oo.userId, a.id || a.localId));
            var s = r.app;
            s && uo(i, oo.sessionId, s.sesId);
            var c = r.device;
            c &&
              (uo(i, oo.deviceId, c.id || c.localId),
              uo(i, oo.deviceType, c.deviceClass),
              uo(i, oo.deviceIp, c.ip),
              uo(i, oo.deviceModel, c.model),
              uo(i, oo.deviceType, c.deviceType));
            var l = t.ext.web;
            if (l) {
              uo(i, oo.deviceLanguage, l.browserLang),
                uo(i, oo.deviceBrowserVersion, l.browserVer),
                uo(i, oo.deviceBrowser, l.browser);
              var u = (n.data = n.data || {}),
                d = (u.baseData = u.baseData || {}),
                f = (d.properties = d.properties || {});
              uo(f, "domain", l.domain),
                uo(f, "isManual", l.isManual ? lo : null),
                uo(f, "screenRes", l.screenRes),
                uo(f, "userConsent", l.userConsent ? lo : null);
            }
            var p = r.os;
            p && uo(i, oo.deviceOS, p.name);
            var h = r.trace;
            h &&
              (uo(i, oo.operationParentId, h.parentID),
              uo(i, oo.operationName, tn(e, h.name)),
              uo(i, oo.operationId, h.traceID));
            for (var g = {}, m = o.length - 1; m >= 0; m--)
              pe(o[m], function (e, t) {
                g[e] = t;
              }),
                o.splice(m, 1);
            pe(o, function (e, t) {
              g[e] = t;
            });
            var v = B(B({}, i), g);
            v[oo.internalSdkVersion] ||
              (v[oo.internalSdkVersion] = "javascript:".concat(mo.Version)),
              (n.tags = Ue(v));
          })(e, n, r),
          (n.tags = n.tags || []),
          Ue(r)
        );
      }
      function go(e, t) {
        se(t.baseData) &&
          Mt(e, 1, 46, "telemetryItem.baseData cannot be null.");
      }
      var mo = { Version: "2.8.5" };
      function vo(e, t, n) {
        go(e, t);
        var i = {},
          r = {};
        t.baseType !== fn.dataType && (i.baseTypeSource = t.baseType),
          t.baseType === fn.dataType
            ? ((i = t.baseData.properties || {}),
              (r = t.baseData.measurements || {}))
            : t.baseData && fo(t.baseData, i, r),
          fo(t.data, i, r),
          se(n) || po(i, n);
        var o = t.baseData.name,
          a = new fn(e, o, i, r),
          s = new so(fn.dataType, a);
        return ho(e, fn.envelopeType, t, s);
      }
      function yo(e, t) {
        wi(e, null, null, t);
      }
      var _o,
        xo = (function () {
          function e(t, n) {
            var i = [],
              r = !1;
            (this._get = function () {
              return i;
            }),
              (this._set = function (e) {
                return (i = e);
              }),
              C(e, this, function (e) {
                (e.enqueue = function (o) {
                  e.count() >= n.eventsLimitInMem()
                    ? r ||
                      (Mt(
                        t,
                        2,
                        105,
                        "Maximum in-memory buffer size reached: " + e.count(),
                        !0
                      ),
                      (r = !0))
                    : i.push(o);
                }),
                  (e.count = function () {
                    return i.length;
                  }),
                  (e.size = function () {
                    for (var e = i.length, t = 0; t < i.length; t++)
                      e += i[t].length;
                    return n.emitLineDelimitedJson() || (e += 2), e;
                  }),
                  (e.clear = function () {
                    (i = []), (r = !1);
                  }),
                  (e.getItems = function () {
                    return i.slice(0);
                  }),
                  (e.batchPayloads = function (e) {
                    return e && e.length > 0
                      ? n.emitLineDelimitedJson()
                        ? e.join("\n")
                        : "[" + e.join(",") + "]"
                      : null;
                  });
              });
          }
          return (e.__ieDyn = 1), e;
        })(),
        bo = (function (e) {
          function t(n, i) {
            var r = e.call(this, n, i) || this;
            return (
              C(t, r, function (e, t) {
                (e.markAsSent = function (e) {
                  t.clear();
                }),
                  (e.clearSent = function (e) {});
              }),
              r
            );
          }
          return H(t, e), (t.__ieDyn = 1), t;
        })(xo),
        Co = (function (e) {
          function t(n, i) {
            var r = e.call(this, n, i) || this,
              o = !1;
            return (
              C(t, r, function (e, r) {
                var a = u(t.BUFFER_KEY),
                  s = u(t.SENT_BUFFER_KEY),
                  c = e._set(a.concat(s));
                function l(e, t) {
                  var n = [];
                  return (
                    Ce(t, function (t) {
                      de(t) || -1 !== we(e, t) || n.push(t);
                    }),
                    n
                  );
                }
                function u(e) {
                  var t = e;
                  try {
                    t =
                      i.namePrefix && i.namePrefix()
                        ? i.namePrefix() + "_" + t
                        : t;
                    var r = Vt(n, t);
                    if (r) {
                      var o = ht().parse(r);
                      if ((ve(o) && (o = ht().parse(o)), o && ge(o))) return o;
                    }
                  } catch (e) {
                    Mt(n, 1, 42, " storage key: " + t + ", " + Ne(e), {
                      exception: vt(e),
                    });
                  }
                  return [];
                }
                function d(e, t) {
                  var r = e;
                  try {
                    r =
                      i.namePrefix && i.namePrefix()
                        ? i.namePrefix() + "_" + r
                        : r;
                    var o = JSON.stringify(t);
                    $t(n, r, o);
                  } catch (e) {
                    $t(n, r, JSON.stringify([])),
                      Mt(
                        n,
                        2,
                        41,
                        " storage key: " +
                          r +
                          ", " +
                          Ne(e) +
                          ". Buffer cleared",
                        { exception: vt(e) }
                      );
                  }
                }
                c.length > t.MAX_BUFFER_SIZE && (c.length = t.MAX_BUFFER_SIZE),
                  d(t.SENT_BUFFER_KEY, []),
                  d(t.BUFFER_KEY, c),
                  (e.enqueue = function (i) {
                    e.count() >= t.MAX_BUFFER_SIZE
                      ? o ||
                        (Mt(
                          n,
                          2,
                          67,
                          "Maximum buffer size reached: " + e.count(),
                          !0
                        ),
                        (o = !0))
                      : (r.enqueue(i), d(t.BUFFER_KEY, e._get()));
                  }),
                  (e.clear = function () {
                    r.clear(),
                      d(t.BUFFER_KEY, e._get()),
                      d(t.SENT_BUFFER_KEY, []),
                      (o = !1);
                  }),
                  (e.markAsSent = function (i) {
                    d(t.BUFFER_KEY, e._set(l(i, e._get())));
                    var r = u(t.SENT_BUFFER_KEY);
                    r instanceof Array &&
                      i instanceof Array &&
                      ((r = r.concat(i)).length > t.MAX_BUFFER_SIZE &&
                        (Mt(
                          n,
                          1,
                          67,
                          "Sent buffer reached its maximum size: " + r.length,
                          !0
                        ),
                        (r.length = t.MAX_BUFFER_SIZE)),
                      d(t.SENT_BUFFER_KEY, r));
                  }),
                  (e.clearSent = function (e) {
                    var n = u(t.SENT_BUFFER_KEY);
                    (n = l(e, n)), d(t.SENT_BUFFER_KEY, n);
                  });
              }),
              r
            );
          }
          return (
            H(t, e),
            (t.BUFFER_KEY = "AI_buffer"),
            (t.SENT_BUFFER_KEY = "AI_sentBuffer"),
            (t.MAX_BUFFER_SIZE = 2e3),
            t
          );
        })(xo),
        wo = (function () {
          function e(t) {
            C(e, this, function (e) {
              function n(e, o) {
                var a = {};
                if (!e)
                  return (
                    Mt(
                      t,
                      1,
                      48,
                      "cannot serialize object because it is null or undefined",
                      { name: o },
                      !0
                    ),
                    a
                  );
                if (e.__aiCircularRefCheck)
                  return (
                    Mt(
                      t,
                      2,
                      50,
                      "Circular reference detected while serializing object",
                      { name: o },
                      !0
                    ),
                    a
                  );
                if (!e.aiDataContract) {
                  if ("measurements" === o) a = r(e, "number", o);
                  else if ("properties" === o) a = r(e, "string", o);
                  else if ("tags" === o) a = r(e, "string", o);
                  else if (ge(e)) a = i(e, o);
                  else {
                    Mt(
                      t,
                      2,
                      49,
                      "Attempting to serialize an object which does not implement ISerializable",
                      { name: o },
                      !0
                    );
                    try {
                      ht().stringify(e), (a = e);
                    } catch (e) {
                      Mt(
                        t,
                        1,
                        48,
                        e && de(e.toString)
                          ? e.toString()
                          : "Error serializing object",
                        null,
                        !0
                      );
                    }
                  }
                  return a;
                }
                return (
                  (e.__aiCircularRefCheck = !0),
                  pe(e.aiDataContract, function (r, s) {
                    var c = de(s) ? 1 & s() : 1 & s,
                      l = de(s) ? 4 & s() : 4 & s,
                      u = 2 & s,
                      d = void 0 !== e[r],
                      f = ue(e[r]) && null !== e[r];
                    if (!c || d || u) {
                      if (!l) {
                        var p;
                        void 0 !==
                          (p = f ? (u ? i(e[r], r) : n(e[r], r)) : e[r]) &&
                          (a[r] = p);
                      }
                    } else Mt(t, 1, 24, "Missing required field specification. The field is required but not present on source", { field: r, name: o });
                  }),
                  delete e.__aiCircularRefCheck,
                  a
                );
              }
              function i(e, i) {
                var r;
                if (e)
                  if (ge(e)) {
                    r = [];
                    for (var o = 0; o < e.length; o++) {
                      var a = n(e[o], i + "[" + o + "]");
                      r.push(a);
                    }
                  } else
                    Mt(
                      t,
                      1,
                      54,
                      "This field was specified as an array in the contract but the item is not an array.\r\n",
                      { name: i },
                      !0
                    );
                return r;
              }
              function r(e, n, i) {
                var r;
                return (
                  e &&
                    ((r = {}),
                    pe(e, function (e, o) {
                      if ("string" === n)
                        void 0 === o
                          ? (r[e] = "undefined")
                          : null === o
                          ? (r[e] = "null")
                          : o.toString
                          ? (r[e] = o.toString())
                          : (r[e] =
                              "invalid field: toString() is not defined.");
                      else if ("number" === n)
                        if (void 0 === o) r[e] = "undefined";
                        else if (null === o) r[e] = "null";
                        else {
                          var a = parseFloat(o);
                          isNaN(a) ? (r[e] = "NaN") : (r[e] = a);
                        }
                      else
                        (r[e] = "invalid field: " + i + " is of unknown type."),
                          Mt(t, 1, r[e], null, !0);
                    })),
                  r
                );
              }
              e.serialize = function (e) {
                var i = n(e, "root");
                try {
                  return ht().stringify(i);
                } catch (e) {
                  Mt(
                    t,
                    1,
                    48,
                    e && de(e.toString)
                      ? e.toString()
                      : "Error serializing object",
                    null,
                    !0
                  );
                }
              };
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        ko = (function () {
          function e() {}
          return (
            (e.prototype.getHashCodeScore = function (t) {
              return (this.getHashCode(t) / e.INT_MAX_VALUE) * 100;
            }),
            (e.prototype.getHashCode = function (e) {
              if ("" === e) return 0;
              for (; e.length < 8; ) e = e.concat(e);
              for (var t = 5381, n = 0; n < e.length; ++n)
                (t = (t << 5) + t + e.charCodeAt(n)), (t &= t);
              return Math.abs(t);
            }),
            (e.INT_MAX_VALUE = 2147483647),
            e
          );
        })(),
        So = function () {
          var e = new ko(),
            t = new Zr();
          this.getSamplingScore = function (n) {
            return n.tags && n.tags[t.userId]
              ? e.getHashCodeScore(n.tags[t.userId])
              : n.ext && n.ext.user && n.ext.user.id
              ? e.getHashCodeScore(n.ext.user.id)
              : n.tags && n.tags[t.operationId]
              ? e.getHashCodeScore(n.tags[t.operationId])
              : n.ext && n.ext.telemetryTrace && n.ext.telemetryTrace.traceID
              ? e.getHashCodeScore(n.ext.telemetryTrace.traceID)
              : 100 * Math.random();
          };
        },
        Eo = (function () {
          function e(e, t) {
            this.INT_MAX_VALUE = 2147483647;
            var n = t || At(null);
            (e > 100 || e < 0) &&
              (n.throwInternal(
                2,
                58,
                "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.",
                { samplingRate: e },
                !0
              ),
              (e = 100)),
              (this.sampleRate = e),
              (this.samplingScoreGenerator = new So());
          }
          return (
            (e.prototype.isSampledIn = function (e) {
              var t = this.sampleRate;
              return (
                null == t ||
                t >= 100 ||
                e.baseType === gn.dataType ||
                this.samplingScoreGenerator.getSamplingScore(e) < t
              );
            }),
            e
          );
        })();
      function To(e) {
        try {
          return e.responseText;
        } catch (e) {}
        return null;
      }
      function Lo() {
        var e, t;
        return (
          ((e = {
            endpointUrl: function () {
              return Yt + Jt;
            },
          }).emitLineDelimitedJson = function () {
            return !1;
          }),
          (e.maxBatchInterval = function () {
            return 15e3;
          }),
          (e.maxBatchSizeInBytes = function () {
            return 102400;
          }),
          (e.disableTelemetry = function () {
            return !1;
          }),
          (e.enableSessionStorageBuffer = function () {
            return !0;
          }),
          (e.isRetryDisabled = function () {
            return !1;
          }),
          (e.isBeaconApiDisabled = function () {
            return !0;
          }),
          (e.disableXhr = function () {
            return !1;
          }),
          (e.onunloadDisableFetch = function () {
            return !1;
          }),
          (e.onunloadDisableBeacon = function () {
            return !1;
          }),
          (e.instrumentationKey = function () {
            return t;
          }),
          (e.namePrefix = function () {
            return t;
          }),
          (e.samplingPercentage = function () {
            return 100;
          }),
          (e.customHeaders = function () {}),
          (e.convertUndefined = function () {
            return t;
          }),
          (e.eventsLimitInMem = function () {
            return 1e4;
          }),
          e
        );
      }
      var Po =
          (((_o = {})[fn.dataType] = vo),
          (_o[pn.dataType] = function (e, t, n) {
            go(e, t);
            var i = t.baseData.message,
              r = t.baseData.severityLevel,
              o = t.baseData.properties || {},
              a = t.baseData.measurements || {};
            fo(t.data, o, a), se(n) || po(o, n);
            var s = new pn(e, i, r, o, a),
              c = new so(pn.dataType, s);
            return ho(e, pn.envelopeType, t, c);
          }),
          (_o[mn.dataType] = function (e, t, n) {
            var i;
            go(e, t);
            var r = t.baseData;
            se(r) || se(r.properties) || se(r.properties.duration)
              ? se(t.data) ||
                se(t.data.duration) ||
                ((i = t.data.duration), delete t.data.duration)
              : ((i = r.properties.duration), delete r.properties.duration);
            var o,
              a = t.baseData;
            ((t.ext || {}).trace || {}).traceID && (o = t.ext.trace.traceID);
            var s = a.id || o,
              c = a.name,
              l = a.uri,
              u = a.properties || {},
              d = a.measurements || {};
            se(a.refUri) || (u.refUri = a.refUri),
              se(a.pageType) || (u.pageType = a.pageType),
              se(a.isLoggedIn) || (u.isLoggedIn = a.isLoggedIn.toString()),
              se(a.properties) ||
                pe(a.properties, function (e, t) {
                  u[e] = t;
                }),
              fo(t.data, u, d),
              se(n) || po(u, n);
            var f = new mn(e, c, l, i, u, d, s),
              p = new so(mn.dataType, f);
            return ho(e, mn.envelopeType, t, p);
          }),
          (_o[vn.dataType] = function (e, t, n) {
            go(e, t);
            var i = t.baseData,
              r = i.name,
              o = i.uri || i.url,
              a = i.properties || {},
              s = i.measurements || {};
            fo(t.data, a, s), se(n) || po(a, n);
            var c = new vn(e, r, o, void 0, a, s, i),
              l = new so(vn.dataType, c);
            return ho(e, vn.envelopeType, t, l);
          }),
          (_o[Sn.dataType] = function (e, t, n) {
            go(e, t);
            var i = t.baseData.measurements || {},
              r = t.baseData.properties || {};
            fo(t.data, r, i), se(n) || po(r, n);
            var o = t.baseData,
              a = Sn.CreateFromInterface(e, o, r, i),
              s = new so(Sn.dataType, a);
            return ho(e, Sn.envelopeType, t, s);
          }),
          (_o[gn.dataType] = function (e, t, n) {
            go(e, t);
            var i = t.baseData,
              r = i.properties || {},
              o = i.measurements || {};
            fo(t.data, r, o), se(n) || po(r, n);
            var a = new gn(
                e,
                i.name,
                i.average,
                i.sampleCount,
                i.min,
                i.max,
                i.stdDev,
                r,
                o
              ),
              s = new so(gn.dataType, a);
            return ho(e, gn.envelopeType, t, s);
          }),
          (_o[Zi.dataType] = function (e, t, n) {
            go(e, t);
            var i = t.baseData.measurements || {},
              r = t.baseData.properties || {};
            fo(t.data, r, i), se(n) || po(r, n);
            var o = t.baseData;
            if (se(o)) return Ot(e, "Invalid input for dependency data"), null;
            var a = o.properties && o.properties[Gt] ? o.properties[Gt] : "GET",
              s = new Zi(
                e,
                o.id,
                o.target,
                o.name,
                o.duration,
                o.success,
                o.responseCode,
                a,
                o.type,
                o.correlationContext,
                r,
                i
              ),
              c = new so(Zi.dataType, s);
            return ho(e, Zi.envelopeType, t, c);
          }),
          _o),
        Io = (function (e) {
          function t() {
            var n,
              i,
              r,
              o,
              a,
              s,
              c,
              l = e.call(this) || this;
            (l.priority = 1001), (l.identifier = j), (l._senderConfig = Lo());
            var u,
              d,
              f,
              p,
              h = 0;
            return (
              C(t, l, function (e, g) {
                function m(t, i, r, o, a, s) {
                  var c = null;
                  if (
                    (e._appId ||
                      ((c = S(s)) && c.appId && (e._appId = c.appId)),
                    (t < 200 || t >= 300) && 0 !== t)
                  ) {
                    if ((301 === t || 307 === t || 308 === t) && !v(r))
                      return void e._onError(i, a);
                    !e._senderConfig.isRetryDisabled() && P(t)
                      ? (E(i),
                        Mt(
                          e.diagLog(),
                          2,
                          40,
                          ". Response code " +
                            t +
                            ". Will retry to send " +
                            i.length +
                            " items."
                        ))
                      : e._onError(i, a);
                  } else f && !f.isOnline() ? e._senderConfig.isRetryDisabled() || (E(i, 10), Mt(e.diagLog(), 2, 40, ". Offline - Response Code: ".concat(t, ". Offline status: ").concat(!f.isOnline(), ". Will retry to send ").concat(i.length, " items."))) : (v(r), 206 === t ? (c || (c = S(s)), c && !e._senderConfig.isRetryDisabled() ? e._onPartialSuccess(i, c) : e._onError(i, a)) : ((n = 0), e._onSuccess(i, o)));
                }
                function v(t) {
                  return !(
                    s >= 10 ||
                    se(t) ||
                    "" === t ||
                    t === e._senderConfig.endpointUrl() ||
                    ((e._senderConfig.endpointUrl = function () {
                      return t;
                    }),
                    ++s,
                    0)
                  );
                }
                function y(e, t) {
                  d ? d(e, !1) : x(e);
                }
                function _(t) {
                  var n = lt(),
                    i = e._buffer,
                    r = e._senderConfig.endpointUrl(),
                    o = e._buffer.batchPayloads(t),
                    a = new Blob([o], { type: "text/plain;charset=UTF-8" }),
                    s = n.sendBeacon(r, a);
                  return s && (i.markAsSent(t), e._onSuccess(t, t.length)), s;
                }
                function x(t, n) {
                  if (ge(t) && t.length > 0 && !_(t)) {
                    for (var i = [], r = 0; r < t.length; r++) {
                      var o = t[r];
                      _([o]) || i.push(o);
                    }
                    i.length > 0 &&
                      (u && u(i, !0),
                      Mt(
                        e.diagLog(),
                        2,
                        40,
                        ". Failed to send telemetry with Beacon API, retried with normal sender."
                      ));
                  }
                }
                function b(t, n) {
                  var i = new XMLHttpRequest(),
                    r = e._senderConfig.endpointUrl();
                  try {
                    i[Kt] = !0;
                  } catch (e) {}
                  i.open("POST.html", r, n),
                    i.setRequestHeader("Content-type", "application/json"),
                    Xi(r) && i.setRequestHeader(qi[6], qi[7]),
                    Ce(Le(c), function (e) {
                      i.setRequestHeader(e, c[e]);
                    }),
                    (i.onreadystatechange = function () {
                      return e._xhrReadyStateChange(i, t, t.length);
                    }),
                    (i.onerror = function (n) {
                      return e._onError(t, I(i), n);
                    });
                  var o = e._buffer.batchPayloads(t);
                  i.send(o), e._buffer.markAsSent(t);
                }
                function C(t, n) {
                  if (ge(t)) {
                    for (var i = t.length, r = 0; r < t.length; r++)
                      i += t[r].length;
                    h + i <= 65e3
                      ? k(t, !1)
                      : yt()
                      ? x(t)
                      : (u && u(t, !0),
                        Mt(
                          e.diagLog(),
                          2,
                          40,
                          ". Failed to send telemetry with Beacon API, retried with xhrSender."
                        ));
                  }
                }
                function w(e, t) {
                  k(e, !0);
                }
                function k(t, n) {
                  var i,
                    r = e._senderConfig.endpointUrl(),
                    o = e._buffer.batchPayloads(t),
                    a = new Blob([o], { type: "application/json" }),
                    s = new Headers(),
                    l = o.length,
                    u = !1,
                    d = !1;
                  Xi(r) && s.append(qi[6], qi[7]),
                    Ce(Le(c), function (e) {
                      s.append(e, c[e]);
                    });
                  var f =
                    (((i = { method: "POST", headers: s, body: a })[Kt] = !0),
                    i);
                  n || ((f.keepalive = !0), (u = !0), (h += l));
                  var p = new Request(r, f);
                  try {
                    p[Kt] = !0;
                  } catch (e) {}
                  e._buffer.markAsSent(t);
                  try {
                    fetch(p)
                      .then(function (i) {
                        n || ((h -= l), (l = 0)),
                          d ||
                            ((d = !0),
                            i.ok
                              ? i.text().then(function (e) {
                                  m(
                                    i.status,
                                    t,
                                    i.url,
                                    t.length,
                                    i.statusText,
                                    e
                                  );
                                })
                              : e._onError(t, i.statusText));
                      })
                      .catch(function (i) {
                        n || ((h -= l), (l = 0)),
                          d || ((d = !0), e._onError(t, i.message));
                      });
                  } catch (n) {
                    d || e._onError(t, vt(n));
                  }
                  u && !d && ((d = !0), e._onSuccess(t, t.length));
                }
                function S(t) {
                  try {
                    if (t && "" !== t) {
                      var n = ht().parse(t);
                      if (
                        n &&
                        n.itemsReceived &&
                        n.itemsReceived >= n.itemsAccepted &&
                        n.itemsReceived - n.itemsAccepted === n.errors.length
                      )
                        return n;
                    }
                  } catch (n) {
                    Mt(
                      e.diagLog(),
                      1,
                      43,
                      "Cannot parse the response. " + Ne(n),
                      { response: t }
                    );
                  }
                  return null;
                }
                function E(t, r) {
                  if ((void 0 === r && (r = 1), t && 0 !== t.length)) {
                    var o = e._buffer;
                    o.clearSent(t), n++;
                    for (var a = 0, s = t; a < s.length; a++) {
                      var c = s[a];
                      o.enqueue(c);
                    }
                    !(function (e) {
                      var t;
                      if (n <= 1) t = 10;
                      else {
                        var r = (Math.pow(2, n) - 1) / 2,
                          o = Math.floor(Math.random() * r * 10) + 1;
                        (o *= e), (t = Math.max(Math.min(o, 3600), 10));
                      }
                      var a = De() + 1e3 * t;
                      i = a;
                    })(r),
                      T();
                  }
                }
                function T() {
                  if (!o && !r) {
                    var t = i ? Math.max(0, i - De()) : 0,
                      n = Math.max(e._senderConfig.maxBatchInterval(), t);
                    o = setTimeout(function () {
                      (o = null), e.triggerSend(!0, null, 1);
                    }, n);
                  }
                }
                function L() {
                  clearTimeout(o), (o = null), (i = null);
                }
                function P(e) {
                  return 408 === e || 429 === e || 500 === e || 503 === e;
                }
                function I(e, t) {
                  return e
                    ? "XMLHttpRequest,Status:" +
                        e.status +
                        ",Response:" +
                        To(e) || 0
                    : t;
                }
                function A(t, n) {
                  var i = e._buffer,
                    r = ot(),
                    o = new XDomainRequest();
                  (o.onload = function () {
                    return e._xdrOnLoad(o, t);
                  }),
                    (o.onerror = function (n) {
                      return e._onError(t, D(o), n);
                    });
                  var a = (r && r.location && r.location.protocol) || "";
                  if (0 !== e._senderConfig.endpointUrl().lastIndexOf(a, 0))
                    return (
                      Mt(
                        e.diagLog(),
                        2,
                        40,
                        ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."
                      ),
                      void i.clear()
                    );
                  var s = e._senderConfig
                    .endpointUrl()
                    .replace(/^(https?:)/, "");
                  o.open("POST.html", s);
                  var c = i.batchPayloads(t);
                  o.send(c), i.markAsSent(t);
                }
                function D(e, t) {
                  return e ? "XDomainRequest,Response:" + To(e) || 0 : t;
                }
                function N() {
                  (e._sender = null),
                    (e._buffer = null),
                    (e._appId = null),
                    (e._sample = null),
                    (c = {}),
                    (f = null),
                    (n = 0),
                    (i = null),
                    (r = !1),
                    (o = null),
                    (a = null),
                    (s = 0),
                    (h = 0),
                    (u = null),
                    (d = null),
                    (p = null);
                }
                N(),
                  (e.pause = function () {
                    L(), (r = !0);
                  }),
                  (e.resume = function () {
                    r &&
                      ((r = !1),
                      (i = null),
                      e._buffer.size() >
                        e._senderConfig.maxBatchSizeInBytes() &&
                        e.triggerSend(!0, null, 10),
                      T());
                  }),
                  (e.flush = function (t, n, i) {
                    if ((void 0 === t && (t = !0), !r)) {
                      L();
                      try {
                        e.triggerSend(t, null, i || 1);
                      } catch (t) {
                        Mt(
                          e.diagLog(),
                          1,
                          22,
                          "flush failed, telemetry will not be collected: " +
                            Ne(t),
                          { exception: vt(t) }
                        );
                      }
                    }
                  }),
                  (e.onunloadFlush = function () {
                    if (!r)
                      if (
                        (!1 !== e._senderConfig.onunloadDisableBeacon() &&
                          !1 !== e._senderConfig.isBeaconApiDisabled()) ||
                        !yt()
                      )
                        e.flush();
                      else
                        try {
                          e.triggerSend(!0, y, 2);
                        } catch (t) {
                          Mt(
                            e.diagLog(),
                            1,
                            20,
                            "failed to flush with beacon sender on page unload, telemetry will not be collected: " +
                              Ne(t),
                            { exception: vt(t) }
                          );
                        }
                  }),
                  (e.addHeader = function (e, t) {
                    c[e] = t;
                  }),
                  (e.initialize = function (t, r, o, c) {
                    e.isInitialized() &&
                      Mt(e.diagLog(), 1, 28, "Sender is already initialized"),
                      g.initialize(t, r, o, c);
                    var h = e._getTelCtx(),
                      m = e.identifier;
                    (a = new wo(r.logger)),
                      (n = 0),
                      (i = null),
                      (e._sender = null),
                      (s = 0);
                    var v = e.diagLog();
                    (p = bi(ii("Sender"), r.evtNamespace && r.evtNamespace())),
                      (f = (function (e) {
                        var t = st(),
                          n = lt(),
                          i = !1,
                          r = !0,
                          o = bi(ii("OfflineListener"), e);
                        try {
                          if ((s(ot()) && (i = !0), t)) {
                            var a = t.body || t;
                            a.ononline && s(a) && (i = !0);
                          }
                          i && n && !se(n.onLine) && (r = n.onLine);
                        } catch (e) {
                          i = !1;
                        }
                        function s(e) {
                          var t = !1;
                          return (
                            e &&
                              (t = Ci(e, "online", c, o)) &&
                              Ci(e, "offline", l, o),
                            t
                          );
                        }
                        function c() {
                          r = !0;
                        }
                        function l() {
                          r = !1;
                        }
                        return {
                          isOnline: function () {
                            var e = !0;
                            return (
                              i
                                ? (e = r)
                                : n && !se(n.onLine) && (e = n.onLine),
                              e
                            );
                          },
                          isListening: function () {
                            return i;
                          },
                          unload: function () {
                            var e = ot();
                            if (e && i) {
                              if ((yo(e, o), t)) {
                                var n = t.body || t;
                                ae(n.ononline) || yo(n, o);
                              }
                              i = !1;
                            }
                          },
                        };
                      })(p)),
                      pe(Lo(), function (t, n) {
                        e._senderConfig[t] = function () {
                          return h.getConfig(m, t, n());
                        };
                      }),
                      (e._buffer =
                        e._senderConfig.enableSessionStorageBuffer() && Wt()
                          ? new Co(v, e._senderConfig)
                          : new bo(v, e._senderConfig)),
                      (e._sample = new Eo(
                        e._senderConfig.samplingPercentage(),
                        v
                      )),
                      (function (e) {
                        return (
                          !(se(e[co]) || !e[co]) ||
                          new RegExp(
                            "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
                          ).test(e.instrumentationKey)
                        );
                      })(t) ||
                        Mt(
                          v,
                          1,
                          100,
                          "Invalid Instrumentation key " + t.instrumentationKey
                        ),
                      !Xi(e._senderConfig.endpointUrl()) &&
                        e._senderConfig.customHeaders() &&
                        e._senderConfig.customHeaders().length > 0 &&
                        Ce(e._senderConfig.customHeaders(), function (e) {
                          l.addHeader(e.header, e.value);
                        });
                    var y = e._senderConfig,
                      _ = null;
                    !y.disableXhr() && xt()
                      ? (_ = A)
                      : !y.disableXhr() && bt() && (_ = b),
                      !_ && _t() && (_ = w),
                      (u = _ || b),
                      !y.isBeaconApiDisabled() && yt() && (_ = x),
                      (e._sender = _ || b),
                      (d =
                        !y.onunloadDisableFetch() && _t(!0)
                          ? C
                          : yt()
                          ? x
                          : !y.disableXhr() && xt()
                          ? A
                          : !y.disableXhr() && bt()
                          ? b
                          : u);
                  }),
                  (e.processTelemetry = function (n, i) {
                    var r,
                      o = (i = e._getTelCtx(i)).diagLog();
                    try {
                      if (e._senderConfig.disableTelemetry()) return;
                      if (!n)
                        return void Mt(o, 1, 7, "Cannot send empty telemetry");
                      if (n.baseData && !n.baseType)
                        return void Mt(
                          o,
                          1,
                          70,
                          "Cannot send telemetry without baseData and baseType"
                        );
                      if (
                        (n.baseType || (n.baseType = "EventData"), !e._sender)
                      )
                        return void Mt(o, 1, 28, "Sender was not initialized");
                      if (((r = n), !e._sample.isSampledIn(r)))
                        return void Mt(
                          o,
                          2,
                          33,
                          "Telemetry item was sampled out and not sent",
                          { SampleRate: e._sample.sampleRate }
                        );
                      n.sampleRate = e._sample.sampleRate;
                      var s = e._senderConfig.convertUndefined() || void 0,
                        c = n.iKey || e._senderConfig.instrumentationKey(),
                        l = t.constructEnvelope(n, c, o, s);
                      if (!l)
                        return void Mt(
                          o,
                          1,
                          47,
                          "Unable to create an AppInsights envelope"
                        );
                      var u = !1;
                      if (
                        (n.tags &&
                          n.tags.ProcessLegacy &&
                          (Ce(n.tags.ProcessLegacy, function (e) {
                            try {
                              e &&
                                !1 === e(l) &&
                                ((u = !0),
                                Ot(
                                  o,
                                  "Telemetry processor check returns false"
                                ));
                            } catch (e) {
                              Mt(
                                o,
                                1,
                                64,
                                "One of telemetry initializers failed, telemetry item will not be sent: " +
                                  Ne(e),
                                { exception: vt(e) },
                                !0
                              );
                            }
                          }),
                          delete n.tags.ProcessLegacy),
                        u)
                      )
                        return;
                      var d = a.serialize(l),
                        f = e._buffer;
                      f.size() + d.length >
                        e._senderConfig.maxBatchSizeInBytes() &&
                        e.triggerSend(!0, null, 10),
                        f.enqueue(d),
                        T();
                    } catch (e) {
                      Mt(
                        o,
                        2,
                        12,
                        "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " +
                          Ne(e),
                        { exception: vt(e) }
                      );
                    }
                    e.processNext(n, i);
                  }),
                  (e._xhrReadyStateChange = function (e, t, n) {
                    4 === e.readyState &&
                      m(
                        e.status,
                        t,
                        e.responseURL,
                        n,
                        I(e),
                        To(e) || e.response
                      );
                  }),
                  (e.triggerSend = function (t, n, i) {
                    if ((void 0 === t && (t = !0), !r))
                      try {
                        var o = e._buffer;
                        if (e._senderConfig.disableTelemetry()) o.clear();
                        else {
                          if (o.count() > 0) {
                            var a = o.getItems();
                            !(function (t, n) {
                              var i,
                                r =
                                  ((i = "getNotifyMgr"),
                                  e.core[i]
                                    ? e.core[i]()
                                    : e.core._notificationManager);
                              if (r && r.eventsSendRequest)
                                try {
                                  r.eventsSendRequest(t, n);
                                } catch (t) {
                                  Mt(
                                    e.diagLog(),
                                    1,
                                    74,
                                    "send request notification failed: " +
                                      Ne(t),
                                    { exception: vt(t) }
                                  );
                                }
                            })(i || 0, t),
                              n ? n.call(l, a, t) : e._sender(a, t);
                          }
                          new Date();
                        }
                        L();
                      } catch (t) {
                        var s = mt();
                        (!s || s > 9) &&
                          Mt(
                            e.diagLog(),
                            1,
                            40,
                            "Telemetry transmission failed, some telemetry will be lost: " +
                              Ne(t),
                            { exception: vt(t) }
                          );
                      }
                  }),
                  (e._doTeardown = function (t, n) {
                    e.onunloadFlush(), f.unload(), N();
                  }),
                  (e._onError = function (t, n, i) {
                    Mt(e.diagLog(), 2, 26, "Failed to send telemetry.", {
                      message: n,
                    }),
                      e._buffer.clearSent(t);
                  }),
                  (e._onPartialSuccess = function (t, n) {
                    for (
                      var i = [], r = [], o = 0, a = n.errors.reverse();
                      o < a.length;
                      o++
                    ) {
                      var s = a[o],
                        c = t.splice(s.index, 1)[0];
                      P(s.statusCode) ? r.push(c) : i.push(c);
                    }
                    t.length > 0 && e._onSuccess(t, n.itemsAccepted),
                      i.length > 0 &&
                        e._onError(
                          i,
                          I(
                            null,
                            [
                              "partial success",
                              n.itemsAccepted,
                              "of",
                              n.itemsReceived,
                            ].join(" ")
                          )
                        ),
                      r.length > 0 &&
                        (E(r),
                        Mt(
                          e.diagLog(),
                          2,
                          40,
                          "Partial success. Delivered: " +
                            t.length +
                            ", Failed: " +
                            i.length +
                            ". Will retry to send " +
                            r.length +
                            " our of " +
                            n.itemsReceived +
                            " items"
                        ));
                  }),
                  (e._onSuccess = function (t, n) {
                    e._buffer.clearSent(t);
                  }),
                  (e._xdrOnLoad = function (t, i) {
                    var r = To(t);
                    if (!t || (r + "" != "200" && "" !== r)) {
                      var o = S(r);
                      o &&
                      o.itemsReceived &&
                      o.itemsReceived > o.itemsAccepted &&
                      !e._senderConfig.isRetryDisabled()
                        ? e._onPartialSuccess(i, o)
                        : e._onError(i, D(t));
                    } else (n = 0), e._onSuccess(i, 0);
                  });
              }),
              l
            );
          }
          return (
            H(t, e),
            (t.constructEnvelope = function (e, t, n, i) {
              var r;
              return (
                (r = t === e.iKey || se(t) ? e : B(B({}, e), { iKey: t })),
                (Po[r.baseType] || vo)(n, r, i)
              );
            }),
            t
          );
        })(br);
      Bt({ Verbose: 0, Information: 1, Warning: 2, Error: 3, Critical: 4 });
      var Ao = 500;
      function Do(e, t, n) {
        t &&
          ge(t) &&
          t.length > 0 &&
          (Ce(
            (t = t.sort(function (e, t) {
              return e.priority - t.priority;
            })),
            function (e) {
              e.priority < Ao &&
                He("Channel has invalid priority - " + e.identifier);
            }
          ),
          e.push({ queue: Ae(t), chain: fr(t, n.config, n) }));
      }
      var No = (function (e) {
          function t() {
            var n,
              i,
              r = e.call(this) || this;
            function o() {
              (n = 0), (i = []);
            }
            return (
              (r.identifier = "TelemetryInitializerPlugin"),
              (r.priority = 199),
              o(),
              C(t, r, function (e, t) {
                (e.addTelemetryInitializer = function (e) {
                  var t = { id: n++, fn: e };
                  return (
                    i.push(t),
                    {
                      remove: function () {
                        Ce(i, function (e, n) {
                          if (e.id === t.id) return i.splice(n, 1), -1;
                        });
                      },
                    }
                  );
                }),
                  (e.processTelemetry = function (t, n) {
                    for (var r = !1, o = i.length, a = 0; a < o; ++a) {
                      var s = i[a];
                      if (s)
                        try {
                          if (!1 === s.fn.apply(null, [t])) {
                            r = !0;
                            break;
                          }
                        } catch (e) {
                          Mt(
                            n.diagLog(),
                            1,
                            64,
                            "One of telemetry initializers failed, telemetry item will not be sent: " +
                              Ne(e),
                            { exception: vt(e) },
                            !0
                          );
                        }
                    }
                    r || e.processNext(t, n);
                  }),
                  (e._doTeardown = function () {
                    o();
                  });
              }),
              r
            );
          }
          return H(t, e), (t.__ieDyn = 1), t;
        })(br),
        Mo = "Plugins must provide initialize method",
        Oo = "SDK is still unloading...",
        Bo = { loggingLevelConsole: 1 };
      function Ro(e, t) {
        return new er(t);
      }
      function Ho(e, t) {
        var n = !1;
        return (
          Ce(t, function (t) {
            if (t === e) return (n = !0), -1;
          }),
          n
        );
      }
      var qo = (function () {
        function e() {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            h,
            g,
            m,
            v,
            y,
            _,
            x,
            b = 0;
          C(e, this, function (e) {
            function C() {
              (n = !1),
                (t = ze(!0, {}, Bo)),
                (e.config = t),
                (e.logger = new Dt(t)),
                (e._extensions = []),
                (g = new No()),
                (i = []),
                (r = null),
                (o = null),
                (a = null),
                (s = null),
                (c = null),
                (u = null),
                (l = []),
                (d = null),
                (f = null),
                (p = null),
                (h = !1),
                (m = null),
                (v = ii("AIBaseCore", !0)),
                (y = xr()),
                (x = null);
            }
            function w() {
              return lr(E(), t, e);
            }
            function k(n) {
              var i = (function (e, t, n) {
                var i,
                  r = [],
                  o = {};
                return (
                  Ce(n, function (t) {
                    (se(t) || se(t.initialize)) && He(Mo);
                    var n = t.priority,
                      i = t.identifier;
                    t &&
                      n &&
                      (se(o[n])
                        ? (o[n] = i)
                        : Ot(
                            e,
                            "Two extensions have same priority #" +
                              n +
                              " - " +
                              o[n] +
                              ", " +
                              i
                          )),
                      (!n || n < 500) && r.push(t);
                  }),
                  ((i = { all: n }).core = r),
                  i
                );
              })(e.logger, 0, l);
              (u = i.core), (c = null);
              var r = i.all;
              if (
                ((p = Ae(
                  (function (e, t, n) {
                    var i = [];
                    if (
                      (e &&
                        Ce(e, function (e) {
                          return Do(i, e, n);
                        }),
                      t)
                    ) {
                      var r = [];
                      Ce(t, function (e) {
                        e.priority > Ao && r.push(e);
                      }),
                        Do(i, r, n);
                    }
                    return i;
                  })(f, r, e)
                )),
                d)
              ) {
                var o = we(r, d);
                -1 !== o && r.splice(o, 1),
                  -1 !== (o = we(u, d)) && u.splice(o, 1),
                  d._setQueue(p);
              } else
                d = (function (e, t) {
                  function n() {
                    return lr(null, t.config, t, null);
                  }
                  function i(e, t, n, i) {
                    var r = e ? e.length + 1 : 1;
                    function o() {
                      0 == --r && (i && i(), (i = null));
                    }
                    r > 0 &&
                      Ce(e, function (e) {
                        if (e && e.queue.length > 0) {
                          var i = e.chain,
                            a = t.createNew(i);
                          a.onComplete(o), n(a);
                        } else r--;
                      }),
                      o();
                  }
                  var r = !1,
                    o = {
                      identifier: "ChannelControllerPlugin",
                      priority: Ao,
                      initialize: function (t, n, i, o) {
                        (r = !0),
                          Ce(e, function (e) {
                            e && e.queue.length > 0 && or(lr(e.chain, t, n), i);
                          });
                      },
                      isInitialized: function () {
                        return r;
                      },
                      processTelemetry: function (t, r) {
                        i(
                          e,
                          r || n(),
                          function (e) {
                            e.processNext(t);
                          },
                          function () {
                            r.processNext(t);
                          }
                        );
                      },
                      update: function (t, n) {
                        var r = n || { reason: 0 };
                        return (
                          i(
                            e,
                            t,
                            function (e) {
                              e.processNext(r);
                            },
                            function () {
                              t.processNext(r);
                            }
                          ),
                          !0
                        );
                      },
                      pause: function () {
                        i(
                          e,
                          n(),
                          function (e) {
                            e.iterate(function (e) {
                              e.pause && e.pause();
                            });
                          },
                          null
                        );
                      },
                      resume: function () {
                        i(
                          e,
                          n(),
                          function (e) {
                            e.iterate(function (e) {
                              e.resume && e.resume();
                            });
                          },
                          null
                        );
                      },
                      teardown: function (t, n) {
                        var o = n || { reason: 0, isAsync: !1 };
                        return (
                          i(
                            e,
                            t,
                            function (e) {
                              e.processNext(o);
                            },
                            function () {
                              t.processNext(o), (r = !1);
                            }
                          ),
                          !0
                        );
                      },
                      getChannel: function (t) {
                        var n = null;
                        return (
                          e &&
                            e.length > 0 &&
                            Ce(e, function (e) {
                              if (
                                e &&
                                e.queue.length > 0 &&
                                (Ce(e.queue, function (e) {
                                  if (e.identifier === t) return (n = e), -1;
                                }),
                                n)
                              )
                                return -1;
                            }),
                          n
                        );
                      },
                      flush: function (t, r, o, a) {
                        var s = 1,
                          c = !1,
                          l = null;
                        function u() {
                          s--,
                            c &&
                              0 === s &&
                              (l && (clearTimeout(l), (l = null)),
                              r && r(c),
                              (r = null));
                        }
                        return (
                          (a = a || 5e3),
                          i(
                            e,
                            n(),
                            function (e) {
                              e.iterate(function (e) {
                                if (e.flush) {
                                  s++;
                                  var n = !1;
                                  e.flush(
                                    t,
                                    function () {
                                      (n = !0), u();
                                    },
                                    o
                                  ) ||
                                    n ||
                                    (t && null == l
                                      ? (l = setTimeout(function () {
                                          (l = null), u();
                                        }, a))
                                      : u());
                                }
                              });
                            },
                            function () {
                              (c = !0), u();
                            }
                          ),
                          !0
                        );
                      },
                      _setQueue: function (t) {
                        e = t;
                      },
                    };
                  return o;
                })(p, e);
              r.push(d),
                u.push(d),
                (e._extensions = ar(r)),
                d.initialize(t, e, r),
                or(w(), r),
                (e._extensions = Ae(ar(u || [])).slice()),
                n &&
                  (function (t) {
                    var n = dr(E(), e);
                    (e._updateHook && !0 === e._updateHook(n, t)) ||
                      n.processNext(t);
                  })(n);
            }
            function S(t) {
              var n,
                i = null,
                r = null;
              return (
                Ce(e._extensions, function (e) {
                  if (e.identifier === t && e !== d && e !== g)
                    return (r = e), -1;
                }),
                !r && d && (r = d.getChannel(t)),
                r &&
                  (((n = { plugin: r }).setEnabled = function (e) {
                    rr(r).disabled = !e;
                  }),
                  (n.isEnabled = function () {
                    var e = rr(r);
                    return !e.teardown && !e.disabled;
                  }),
                  (n.remove = function (e, t) {
                    var n;
                    void 0 === e && (e = !0);
                    var i = [r],
                      o = (((n = { reason: 1 }).isAsync = e), n);
                    T(i, o, function (e) {
                      e && k({ reason: 32, removed: i }), t && t(e);
                    });
                  }),
                  (i = n)),
                i
              );
            }
            function E() {
              if (!c) {
                var n = (u || []).slice();
                -1 === we(n, g) && n.push(g), (c = fr(ar(n), t, e));
              }
              return c;
            }
            function T(n, i, r) {
              if (n && n.length > 0) {
                var o = ur(fr(n, t, e), e);
                o.onComplete(function () {
                  var e = !1,
                    t = [];
                  Ce(l, function (i, r) {
                    Ho(i, n) ? (e = !0) : t.push(i);
                  }),
                    (l = t);
                  var i = [];
                  f &&
                    (Ce(f, function (t, r) {
                      var o = [];
                      Ce(t, function (t) {
                        Ho(t, n) ? (e = !0) : o.push(t);
                      }),
                        i.push(o);
                    }),
                    (f = i)),
                    r && r(e);
                }),
                  o.processNext(i);
              } else r(!1);
            }
            function L() {
              var n = e.logger ? e.logger.queue : [];
              n &&
                (Ce(n, function (n) {
                  var i,
                    r =
                      (((i = {}).name =
                        m || "InternalMessageId: " + n.messageId),
                      (i.iKey = Be(t.instrumentationKey)),
                      (i.time = be(new Date())),
                      (i.baseType = It.dataType),
                      (i.baseData = { message: n.message }),
                      i);
                  e.track(r);
                }),
                (n.length = 0));
            }
            function P(e, t, n, i) {
              return d ? d.flush(e, t, n || 6, i) : (t && t(!1), !0);
            }
            function I(t) {
              var n = e.logger;
              n ? Mt(n, 2, 73, t) : He(t);
            }
            C(),
              (e.isInitialized = function () {
                return n;
              }),
              (e.initialize = function (i, o, s, c) {
                var u, d;
                h && He(Oo),
                  e.isInitialized() &&
                    He("Core should not be initialized more than once"),
                  (t = i || {}),
                  (e.config = t),
                  se(i.instrumentationKey) &&
                    He("Please provide instrumentation key"),
                  (r = c),
                  (e._notificationManager = c),
                  !0 === (d = Be(t.disableDbgExt)) &&
                    _ &&
                    (r.removeNotificationListener(_), (_ = null)),
                  r &&
                    !_ &&
                    !0 !== d &&
                    ((_ = Tt(t)), r.addNotificationListener(_)),
                  !(u = Be(t.enablePerfMgr)) && a && (a = null),
                  u && Oe(t, "createPerfMgr", Ro),
                  (Oe(t, z, {}).NotificationManager = r),
                  s && (e.logger = s);
                var g = Oe(t, "extensions", []);
                (l = []).push.apply(l, q(q([], o), g)),
                  (f = Oe(t, "channels", [])),
                  k(null),
                  (p && 0 !== p.length) || He("No channels available"),
                  (n = !0),
                  e.releaseQueue();
              }),
              (e.getTransmissionControls = function () {
                var e = [];
                return (
                  p &&
                    Ce(p, function (t) {
                      e.push(t.queue);
                    }),
                  Ae(e)
                );
              }),
              (e.track = function (n) {
                (n.iKey = n.iKey || t.instrumentationKey),
                  (n.time = n.time || be(new Date())),
                  (n.ver = n.ver || "4.0"),
                  !h && e.isInitialized() ? w().processNext(n) : i.push(n);
              }),
              (e.getProcessTelContext = w),
              (e.getNotifyMgr = function () {
                return (
                  r ||
                    ((r = (function () {
                      var e;
                      return O(
                        (((e = {}).addNotificationListener = function (e) {}),
                        (e.removeNotificationListener = function (e) {}),
                        (e.eventsSent = function (e) {}),
                        (e.eventsDiscarded = function (e, t) {}),
                        (e.eventsSendRequest = function (e, t) {}),
                        e)
                      );
                    })()),
                    (e._notificationManager = r)),
                  r
                );
              }),
              (e.addNotificationListener = function (e) {
                r && r.addNotificationListener(e);
              }),
              (e.removeNotificationListener = function (e) {
                r && r.removeNotificationListener(e);
              }),
              (e.getCookieMgr = function () {
                return s || (s = Hn(t, e.logger)), s;
              }),
              (e.setCookieMgr = function (e) {
                s = e;
              }),
              (e.getPerfMgr = function () {
                if (!o && !a && Be(t.enablePerfMgr)) {
                  var n = Be(t.createPerfMgr);
                  de(n) && (a = n(e, e.getNotifyMgr()));
                }
                return o || a || null;
              }),
              (e.setPerfMgr = function (e) {
                o = e;
              }),
              (e.eventCnt = function () {
                return i.length;
              }),
              (e.releaseQueue = function () {
                if (n && i.length > 0) {
                  var e = i;
                  (i = []),
                    Ce(e, function (e) {
                      w().processNext(e);
                    });
                }
              }),
              (e.pollInternalLogs = function (e) {
                m = e || null;
                var n = Be(t.diagnosticLogInterval);
                return (
                  (n && n > 0) || (n = 1e4),
                  b && clearInterval(b),
                  (b = setInterval(function () {
                    L();
                  }, n))
                );
              }),
              (e.stopPollingInternalLogs = function () {
                b && (clearInterval(b), (b = 0), L());
              }),
              je(
                e,
                function () {
                  return g;
                },
                ["addTelemetryInitializer"]
              ),
              (e.unload = function (t, i, r) {
                var o;
                void 0 === t && (t = !0),
                  n || He("SDK is not initialized"),
                  h && He(Oo);
                var a =
                    (((o = { reason: 50 }).isAsync = t),
                    (o.flushComplete = !1),
                    o),
                  s = ur(E(), e);
                function c(t) {
                  (a.flushComplete = t),
                    (h = !0),
                    y.run(s, a),
                    e.stopPollingInternalLogs(),
                    s.processNext(a);
                }
                s.onComplete(function () {
                  C(), i && i(a);
                }, e),
                  P(t, c, 6, r) || c(!1);
              }),
              (e.getPlugin = S),
              (e.addPlugin = function (e, t, n, i) {
                if (!e) return i && i(!1), void I(Mo);
                var r = S(e.identifier);
                if (r && !t)
                  return (
                    i && i(!1),
                    void I("Plugin [" + e.identifier + "] is already loaded!")
                  );
                var o = { reason: 16 };
                function a(t) {
                  l.push(e), (o.added = [e]), k(o), i && i(!0);
                }
                if (r) {
                  var s = [r.plugin];
                  T(s, { reason: 2, isAsync: !!n }, function (e) {
                    e ? ((o.removed = s), (o.reason |= 32), a()) : i && i(!1);
                  });
                } else a();
              }),
              (e.evtNamespace = function () {
                return v;
              }),
              (e.flush = P),
              (e.getTraceCtx = function (e) {
                var t;
                return (
                  x ||
                    ((t = {}),
                    (x = {
                      getName: function () {
                        return t.name;
                      },
                      setName: function (e) {
                        t.name = e;
                      },
                      getTraceId: function () {
                        return t.traceId;
                      },
                      setTraceId: function (e) {
                        Mi(e) && (t.traceId = e);
                      },
                      getSpanId: function () {
                        return t.spanId;
                      },
                      setSpanId: function (e) {
                        Oi(e) && (t.spanId = e);
                      },
                      getTraceFlags: function () {
                        return t.traceFlags;
                      },
                      setTraceFlags: function (e) {
                        t.traceFlags = e;
                      },
                    })),
                  x
                );
              }),
              (e.setTraceCtx = function (e) {
                x = e || null;
              }),
              Fe(
                e,
                "addUnloadCb",
                function () {
                  return y;
                },
                "add"
              );
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      function Fo(e, t, n, i) {
        Ce(e, function (e) {
          if (e && e[t])
            if (n)
              setTimeout(function () {
                return i(e);
              }, 0);
            else
              try {
                i(e);
              } catch (e) {}
        });
      }
      var jo = (function () {
          function e(t) {
            this.listeners = [];
            var n = !!(t || {}).perfEvtsSendAll;
            C(e, this, function (e) {
              (e.addNotificationListener = function (t) {
                e.listeners.push(t);
              }),
                (e.removeNotificationListener = function (t) {
                  for (var n = we(e.listeners, t); n > -1; )
                    e.listeners.splice(n, 1), (n = we(e.listeners, t));
                }),
                (e.eventsSent = function (t) {
                  Fo(e.listeners, "eventsSent", !0, function (e) {
                    e.eventsSent(t);
                  });
                }),
                (e.eventsDiscarded = function (t, n) {
                  Fo(e.listeners, "eventsDiscarded", !0, function (e) {
                    e.eventsDiscarded(t, n);
                  });
                }),
                (e.eventsSendRequest = function (t, n) {
                  Fo(e.listeners, "eventsSendRequest", n, function (e) {
                    e.eventsSendRequest(t, n);
                  });
                }),
                (e.perfEvent = function (t) {
                  t &&
                    ((!n && t.isChildEvt()) ||
                      Fo(e.listeners, "perfEvent", !1, function (e) {
                        t.isAsync
                          ? setTimeout(function () {
                              return e.perfEvent(t);
                            }, 0)
                          : e.perfEvent(t);
                      }));
                });
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        Uo = (function (e) {
          function t() {
            var n = e.call(this) || this;
            return (
              C(t, n, function (e, t) {
                function n(t) {
                  var n = e.getNotifyMgr();
                  n && n.eventsDiscarded([t], 2);
                }
                (e.initialize = function (e, n, i, r) {
                  t.initialize(e, n, i || new Dt(e), r || new jo(e));
                }),
                  (e.track = function (i) {
                    nr(
                      e.getPerfMgr(),
                      function () {
                        return "AppInsightsCore:track";
                      },
                      function () {
                        null === i && (n(i), He("Invalid telemetry item")),
                          (function (e) {
                            se(e.name) && (n(e), He("telemetry name required"));
                          })(i),
                          t.track(i);
                      },
                      function () {
                        return { item: i };
                      },
                      !i.sync
                    );
                  });
              }),
              n
            );
          }
          return H(t, e), (t.__ieDyn = 1), t;
        })(qo),
        zo = "enableResponseHeaderTracking",
        Wo = "excludeRequestFromAutoTrackingPatterns";
      function Vo(e, t, n) {
        var i = 0,
          r = e[t],
          o = e[n];
        return r && o && (i = Yi(r, o)), i;
      }
      function $o(e, t, n, i, r) {
        var o = 0,
          a = Vo(n, i, r);
        return a && (o = Xo(e, t, $e(a))), o;
      }
      function Xo(e, t, n) {
        var i = 0;
        return (
          e && t && n && (((e.ajaxPerf = e.ajaxPerf || {})[t] = n), (i = 1)), i
        );
      }
      var Ko = function () {
          var e = this;
          (e.openDone = !1),
            (e.setRequestHeaderDone = !1),
            (e.sendDone = !1),
            (e.abortDone = !1),
            (e.stateChangeAttached = !1);
        },
        Go = (function () {
          function e(t, n, i) {
            var r = this,
              o = i;
            (r.perfMark = null),
              (r.completed = !1),
              (r.requestHeadersSize = null),
              (r.requestHeaders = null),
              (r.responseReceivingDuration = null),
              (r.callbackDuration = null),
              (r.ajaxTotalDuration = null),
              (r.aborted = 0),
              (r.pageUrl = null),
              (r.requestUrl = null),
              (r.requestSize = 0),
              (r.method = null),
              (r.status = null),
              (r.requestSentTime = null),
              (r.responseStartedTime = null),
              (r.responseFinishedTime = null),
              (r.callbackFinishedTime = null),
              (r.endTime = null),
              (r.xhrMonitoringState = new Ko()),
              (r.clientFailure = 0),
              (r.traceID = t),
              (r.spanID = n),
              C(e, r, function (e) {
                (e.getAbsoluteUrl = function () {
                  return e.requestUrl
                    ? ((t = e.requestUrl), (i = zi(t)) && (n = i.href), n)
                    : null;
                  var t, n, i;
                }),
                  (e.getPathName = function () {
                    return e.requestUrl
                      ? nn(
                          o,
                          ((t = e.method),
                          (n = e.requestUrl),
                          t ? t.toUpperCase() + " " + n : n)
                        )
                      : null;
                    var t, n;
                  }),
                  (e.CreateTrackItem = function (t, n, i) {
                    var r;
                    if (
                      ((e.ajaxTotalDuration =
                        Math.round(
                          1e3 * Yi(e.requestSentTime, e.responseFinishedTime)
                        ) / 1e3),
                      e.ajaxTotalDuration < 0)
                    )
                      return null;
                    var o =
                      (((r = {
                        id: "|" + e.traceID + "." + e.spanID,
                        target: e.getAbsoluteUrl(),
                      }).name = e.getPathName()),
                      (r.type = t),
                      (r.startTime = null),
                      (r.duration = e.ajaxTotalDuration),
                      (r.success = +e.status >= 200 && +e.status < 400),
                      (r.responseCode = +e.status),
                      (r.method = e.method),
                      (r.properties = { HttpMethod: e.method }),
                      r);
                    if (
                      (e.requestSentTime &&
                        ((o.startTime = new Date()),
                        o.startTime.setTime(e.requestSentTime)),
                      (function (e, t) {
                        var n = e.perfTiming,
                          i = t.properties || {},
                          r = 0,
                          o = "redirect",
                          a = "startTime",
                          s = "connectEnd",
                          c = "requestStart",
                          l = "responseEnd",
                          u = o + "Start",
                          d = (o = "End");
                        if (n) {
                          (r |= $o(i, o, n, u, d)),
                            (r |= $o(
                              i,
                              "domainLookup",
                              n,
                              "domainLookupStart",
                              "domainLookupEnd"
                            )),
                            (r |= $o(i, "connect", n, "connectStart", s)),
                            (r |= $o(i, "request", n, c, "requestEnd")),
                            (r |= $o(i, "response", n, "responseStart", l)),
                            (r |= $o(i, "networkConnect", n, a, s)),
                            (r |= $o(i, "sentRequest", n, c, l));
                          var f = n.duration;
                          f || (f = Vo(n, a, l) || 0),
                            (r |= Xo(i, "duration", f)),
                            (r |= Xo(i, "perfTotal", f));
                          var p = n.serverTiming;
                          if (p) {
                            var h = {};
                            Ce(p, function (e, t) {
                              var n = fe(e.name || "" + t),
                                i = h[n] || {};
                              pe(e, function (e, t) {
                                (("name" !== e && ve(t)) || ye(t)) &&
                                  (i[e] && (t = i[e] + ";" + t),
                                  (!t && ve(t)) || (i[e] = t));
                              }),
                                (h[n] = i);
                            }),
                              (r |= Xo(i, "serverTiming", h));
                          }
                          (r |= Xo(i, "transferSize", n.transferSize)),
                            (r |= Xo(i, "encodedBodySize", n.encodedBodySize)),
                            (r |= Xo(i, "decodedBodySize", n.decodedBodySize));
                        } else
                          e.perfMark && (r |= Xo(i, "missing", e.perfAttempts));
                        r && (t.properties = i);
                      })(e, o),
                      n &&
                        Le(e.requestHeaders).length > 0 &&
                        ((l = o.properties =
                          o.properties || {}).requestHeaders =
                          e.requestHeaders),
                      i)
                    ) {
                      var a = i();
                      if (a) {
                        var s = a.correlationContext;
                        if (
                          (s && (o.correlationContext = s),
                          a.headerMap &&
                            Le(a.headerMap).length > 0 &&
                            ((l = o.properties =
                              o.properties || {}).responseHeaders =
                              a.headerMap),
                          e.errorStatusText && e.status >= 400)
                        ) {
                          var c = a.type,
                            l = (o.properties = o.properties || {});
                          ("" !== c && "text" !== c) ||
                            (l.responseText = a.responseText
                              ? a.statusText + " - " + a.responseText
                              : a.statusText),
                            "json" === c &&
                              (l.responseText = a.response
                                ? a.statusText +
                                  " - " +
                                  JSON.stringify(a.response)
                                : a.statusText);
                        }
                      }
                    }
                    return o;
                  });
              });
          }
          return (e.__ieDyn = 1), e;
        })(),
        Yo = "ai.ajxmn.",
        Jo = "fetch",
        Zo = 0;
      function Qo(e) {
        var t = "";
        try {
          se(e) ||
            se(e.ajaxData) ||
            se(e.ajaxData.requestUrl) ||
            (t += "(url: '" + e.ajaxData.requestUrl + "')");
        } catch (e) {}
        return t;
      }
      function ea(e, t, n, i, r) {
        Mt(e.diagLog(), 1, t, n, i, r);
      }
      function ta(e, t, n, i, r) {
        Mt(e.diagLog(), 2, t, n, i, r);
      }
      function na(e, t, n) {
        return function (i) {
          ea(e, t, n, {
            ajaxDiagnosticsMessage: Qo(i.inst),
            exception: vt(i.err),
          });
        };
      }
      function ia(e, t) {
        return e && t ? e.indexOf(t) : -1;
      }
      var ra = Ie([
          "*.blob.core.windows.net",
          "*.blob.core.chinacloudapi.cn",
          "*.blob.core.cloudapi.de",
          "*.blob.core.usgovcloudapi.net",
        ]),
        oa = (function (e) {
          function t() {
            var n,
              i,
              r,
              o,
              a,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              h,
              g,
              m,
              v,
              y,
              _,
              x,
              b,
              w,
              k,
              S = e.call(this) || this;
            return (
              (S.identifier = t.identifier),
              (S.priority = 120),
              C(t, S, function (e, C) {
                var S = C._addHook;
                function E() {
                  var e = dt();
                  (n = !1),
                    (i = !1),
                    (r = e && e.host && e.host.toLowerCase()),
                    (o = t.getEmptyConfig()),
                    (a = !1),
                    (s = !1),
                    (c = 0),
                    (l = null),
                    (u = !1),
                    (d = !1),
                    (f = null),
                    (p = !1),
                    (h = 0),
                    (g = !1),
                    (m = {}),
                    (v = !1),
                    (y = !1),
                    (_ = null),
                    (x = null),
                    (b = null),
                    (w = 0),
                    (k = []);
                }
                function T(e) {
                  var t = !0;
                  return (
                    (e || o.ignoreHeaders) &&
                      Ce(o.ignoreHeaders, function (n) {
                        if (n.toLowerCase() === e.toLowerCase())
                          return (t = !1), -1;
                      }),
                    t
                  );
                }
                function L(e, t, n) {
                  S(
                    (function (e, t, n) {
                      return e ? yr(e.prototype, t, n, !1) : null;
                    })(e, t, n)
                  );
                }
                function P(e, t, n) {
                  var i = !1,
                    r = ((ve(t) ? t : (t || {}).url || "") || "").toLowerCase();
                  if (
                    (Ce(_, function (e) {
                      var t = e;
                      ve(e) && (t = new RegExp(e)), i || (i = t.test(r));
                    }),
                    i)
                  )
                    return i;
                  var o = ia(r, "?"),
                    a = ia(r, "#");
                  return (
                    (-1 === o || (-1 !== a && a < o)) && (o = a),
                    -1 !== o && (r = r.substring(0, o)),
                    se(e)
                      ? se(t) ||
                        (i =
                          ("object" == typeof t && !0 === t[Kt]) ||
                          (!!n && !0 === n[Kt]))
                      : (i = !0 === e[Kt] || !0 === r[Kt]),
                    !i && r && Xi(r) && (i = !0),
                    i ? m[r] || (m[r] = 1) : m[r] && (i = !0),
                    i
                  );
                }
                function I(e, t) {
                  var n = !0,
                    r = i;
                  return se(e) || (n = !0 === t || !se(e.ajaxData)), r && n;
                }
                function A() {
                  var t = null;
                  return (
                    e.core &&
                      e.core.getTraceCtx &&
                      (t = e.core.getTraceCtx(!1)),
                    !t && l && l.telemetryTrace && (t = Ji(l.telemetryTrace)),
                    t
                  );
                }
                function D(e, t) {
                  if (t.requestUrl && f && p) {
                    var n = ft();
                    if (n && de(n.mark)) {
                      Zo++;
                      var i = f + e + "#" + Zo;
                      n.mark(i);
                      var r = n.getEntriesByName(i);
                      r && 1 === r.length && (t.perfMark = r[0]);
                    }
                  }
                }
                function M(e, t, n, i) {
                  var r = t.perfMark,
                    a = ft(),
                    s = o.maxAjaxPerfLookupAttempts,
                    c = o.ajaxPerfLookupDelay,
                    l = t.requestUrl,
                    u = 0;
                  !(function o() {
                    try {
                      if (a && r) {
                        u++;
                        for (
                          var d = null, f = a.getEntries(), p = f.length - 1;
                          p >= 0;
                          p--
                        ) {
                          var h = f[p];
                          if (h) {
                            if ("resource" === h.entryType)
                              h.initiatorType !== e ||
                                (-1 === ia(h.name, l) &&
                                  -1 === ia(l, h.name)) ||
                                (d = h);
                            else if (
                              "mark" === h.entryType &&
                              h.name === r.name
                            ) {
                              t.perfTiming = d;
                              break;
                            }
                            if (h.startTime < r.startTime - 1e3) break;
                          }
                        }
                      }
                      !r || t.perfTiming || u >= s || !1 === t.async
                        ? (r && de(a.clearMarks) && a.clearMarks(r.name),
                          (t.perfAttempts = u),
                          n())
                        : setTimeout(o, c);
                    } catch (e) {
                      i(e);
                    }
                  })();
                }
                function O(t) {
                  var n = "";
                  try {
                    se(t) ||
                      (n += "(url: '".concat(
                        "string" == typeof t ? t : t.url,
                        "')"
                      ));
                  } catch (t) {
                    ea(
                      e,
                      15,
                      "Failed to grab failed fetch diagnostics message",
                      { exception: vt(t) }
                    );
                  }
                  return n;
                }
                function R(t, n, i, r, o, s, c) {
                  function l(t, n, r) {
                    var o = r || {};
                    (o.fetchDiagnosticsMessage = O(i)),
                      n && (o.exception = vt(n)),
                      ta(
                        e,
                        t,
                        "Failed to calculate the duration of the fetch call, monitoring data for this fetch call won't be sent.",
                        o
                      );
                  }
                  o &&
                    ((o.responseFinishedTime = Gi()),
                    (o.status = n),
                    M(
                      "fetch",
                      o,
                      function () {
                        var t,
                          c = o.CreateTrackItem("Fetch", a, s);
                        try {
                          x && (t = x({ status: n, request: i, response: r }));
                        } catch (t) {
                          ta(
                            e,
                            104,
                            "Failed to add custom defined request context as configured call back may missing a null check."
                          );
                        }
                        c
                          ? (void 0 !== t &&
                              (c.properties = B(B({}, c.properties), t)),
                            e.trackDependencyDataInternal(c))
                          : l(14, null, {
                              requestSentTime: o.requestSentTime,
                              responseFinishedTime: o.responseFinishedTime,
                            });
                      },
                      function (e) {
                        l(18, e, null);
                      }
                    ));
                }
                E(),
                  (e.initialize = function (r, c, m, w) {
                    var k;
                    e.isInitialized() ||
                      (C.initialize(r, c, m, w),
                      (b = bi(
                        ii("ajax"),
                        c && c.evtNamespace && c.evtNamespace()
                      )),
                      (function (n) {
                        var i = lr(null, n, e.core);
                        (o = t.getEmptyConfig()),
                          pe(t.getDefaultConfig(), function (e, n) {
                            o[e] = i.getConfig(t.identifier, e, n);
                          });
                        var r = o.distributedTracingMode;
                        if (
                          ((a = o.enableRequestHeaderTracking),
                          (s = o.enableAjaxErrorStatusText),
                          (p = o.enableAjaxPerfTracking),
                          (h = o.maxAjaxCallsPerView),
                          (g = o[zo]),
                          (_ = o[Wo]),
                          (x = o.addRequestContext),
                          (d = 0 === r || 1 === r),
                          (u = 1 === r || 2 === r),
                          p)
                        ) {
                          var c = n.instrumentationKey || "unkwn";
                          f =
                            c.length > 5
                              ? Yo + c.substring(c.length - 5) + "."
                              : Yo + c + ".";
                        }
                        (v = !!o.disableAjaxTracking),
                          (y = !!o.disableFetchTracking);
                      })(r),
                      !(function (e) {
                        var t = !1;
                        if (bt()) {
                          var n = XMLHttpRequest.prototype;
                          t = !(
                            se(n) ||
                            se(n.open) ||
                            se(n.send) ||
                            se(n.abort)
                          );
                        }
                        var i = mt();
                        if ((i && i < 9 && (t = !1), t))
                          try {
                            new XMLHttpRequest().ajaxData = {};
                            var r = XMLHttpRequest.prototype.open;
                            XMLHttpRequest.prototype.open = r;
                          } catch (n) {
                            (t = !1),
                              ea(
                                e,
                                15,
                                "Failed to enable XMLHttpRequest monitoring, extension is not supported",
                                { exception: vt(n) }
                              );
                          }
                        return t;
                      })(e) ||
                        v ||
                        i ||
                        (L(XMLHttpRequest, "open", {
                          ns: b,
                          req: function (t, n, i, r) {
                            if (!v) {
                              var o = t.inst,
                                c = o.ajaxData;
                              !P(o, i) &&
                                I(o, !0) &&
                                ((c && c.xhrMonitoringState.openDone) ||
                                  (function (t, n, i, r) {
                                    var o = A(),
                                      a = (o && o.getTraceId()) || Ti(),
                                      c = Ti().substr(0, 16),
                                      l = new Go(a, c, e.diagLog());
                                    (l.traceFlags = o && o.getTraceFlags()),
                                      (l.method = n),
                                      (l.requestUrl = i),
                                      (l.xhrMonitoringState.openDone = !0),
                                      (l.requestHeaders = {}),
                                      (l.async = r),
                                      (l.errorStatusText = s),
                                      (t.ajaxData = l);
                                  })(o, n, i, r),
                                (function (t) {
                                  t.ajaxData.xhrMonitoringState.stateChangeAttached =
                                    Ci(
                                      t,
                                      "readystatechange",
                                      function () {
                                        var n;
                                        try {
                                          t &&
                                            4 === t.readyState &&
                                            I(t) &&
                                            (function (t) {
                                              var n = t.ajaxData;
                                              function i(n, i) {
                                                var r = i || {};
                                                (r.ajaxDiagnosticsMessage =
                                                  Qo(t)),
                                                  n && (r.exception = vt(n)),
                                                  ta(
                                                    e,
                                                    14,
                                                    "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.",
                                                    r
                                                  );
                                              }
                                              (n.responseFinishedTime = Gi()),
                                                (n.status = t.status),
                                                M(
                                                  "xmlhttprequest",
                                                  n,
                                                  function () {
                                                    try {
                                                      var r = n.CreateTrackItem(
                                                          "Ajax",
                                                          a,
                                                          function () {
                                                            var n,
                                                              i =
                                                                (((n = {
                                                                  statusText:
                                                                    t.statusText,
                                                                }).headerMap =
                                                                  null),
                                                                (n.correlationContext =
                                                                  (function (
                                                                    t
                                                                  ) {
                                                                    var n;
                                                                    try {
                                                                      var i =
                                                                        t.getAllResponseHeaders();
                                                                      if (
                                                                        null !==
                                                                          i &&
                                                                        -1 !==
                                                                          ia(
                                                                            i.toLowerCase(),
                                                                            qi[8]
                                                                          )
                                                                      ) {
                                                                        var r =
                                                                          t.getResponseHeader(
                                                                            qi[0]
                                                                          );
                                                                        return Ki.getCorrelationContext(
                                                                          r
                                                                        );
                                                                      }
                                                                    } catch (i) {
                                                                      ta(
                                                                        e,
                                                                        18,
                                                                        "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.",
                                                                        (((n =
                                                                          {}).ajaxDiagnosticsMessage =
                                                                          Qo(
                                                                            t
                                                                          )),
                                                                        (n.exception =
                                                                          vt(
                                                                            i
                                                                          )),
                                                                        n)
                                                                      );
                                                                    }
                                                                  })(t)),
                                                                (n.type =
                                                                  t.responseType),
                                                                (n.responseText =
                                                                  (function (
                                                                    e
                                                                  ) {
                                                                    try {
                                                                      var t =
                                                                        e.responseType;
                                                                      if (
                                                                        "" ===
                                                                          t ||
                                                                        "text" ===
                                                                          t
                                                                      )
                                                                        return e.responseText;
                                                                    } catch (e) {}
                                                                    return null;
                                                                  })(t)),
                                                                (n.response =
                                                                  t.response),
                                                                n);
                                                            if (g) {
                                                              var r =
                                                                t.getAllResponseHeaders();
                                                              if (r) {
                                                                var o =
                                                                    Se(r).split(
                                                                      /[\r\n]+/
                                                                    ),
                                                                  a = {};
                                                                Ce(
                                                                  o,
                                                                  function (e) {
                                                                    var t =
                                                                        e.split(
                                                                          ": "
                                                                        ),
                                                                      n =
                                                                        t.shift(),
                                                                      i =
                                                                        t.join(
                                                                          ": "
                                                                        );
                                                                    T(n) &&
                                                                      (a[n] =
                                                                        i);
                                                                  }
                                                                ),
                                                                  (i.headerMap =
                                                                    a);
                                                              }
                                                            }
                                                            return i;
                                                          }
                                                        ),
                                                        o = void 0;
                                                      try {
                                                        x &&
                                                          (o = x({
                                                            status: t.status,
                                                            xhr: t,
                                                          }));
                                                      } catch (t) {
                                                        ta(
                                                          e,
                                                          104,
                                                          "Failed to add custom defined request context as configured call back may missing a null check."
                                                        );
                                                      }
                                                      r
                                                        ? (void 0 !== o &&
                                                            (r.properties = B(
                                                              B(
                                                                {},
                                                                r.properties
                                                              ),
                                                              o
                                                            )),
                                                          e.trackDependencyDataInternal(
                                                            r
                                                          ))
                                                        : i(null, {
                                                            requestSentTime:
                                                              n.requestSentTime,
                                                            responseFinishedTime:
                                                              n.responseFinishedTime,
                                                          });
                                                    } finally {
                                                      try {
                                                        t.ajaxData = null;
                                                      } catch (e) {}
                                                    }
                                                  },
                                                  function (e) {
                                                    i(e, null);
                                                  }
                                                );
                                            })(t);
                                        } catch (r) {
                                          var i = vt(r);
                                          (i &&
                                            -1 !==
                                              ia(
                                                i.toLowerCase(),
                                                "c00c023f"
                                              )) ||
                                            ea(
                                              e,
                                              16,
                                              "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.",
                                              (((n =
                                                {}).ajaxDiagnosticsMessage =
                                                Qo(t)),
                                              (n.exception = i),
                                              n)
                                            );
                                        }
                                      },
                                      b
                                    );
                                })(o));
                            }
                          },
                          hkErr: na(
                            e,
                            15,
                            "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect."
                          ),
                        }),
                        L(XMLHttpRequest, "send", {
                          ns: b,
                          req: function (t, n) {
                            if (!v) {
                              var i = t.inst,
                                r = i.ajaxData;
                              I(i) &&
                                !r.xhrMonitoringState.sendDone &&
                                (D("xhr", r),
                                (r.requestSentTime = Gi()),
                                e.includeCorrelationHeaders(
                                  r,
                                  void 0,
                                  void 0,
                                  i
                                ),
                                (r.xhrMonitoringState.sendDone = !0));
                            }
                          },
                          hkErr: na(
                            e,
                            17,
                            "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect."
                          ),
                        }),
                        L(XMLHttpRequest, "abort", {
                          ns: b,
                          req: function (e) {
                            if (!v) {
                              var t = e.inst,
                                n = t.ajaxData;
                              I(t) &&
                                !n.xhrMonitoringState.abortDone &&
                                ((n.aborted = 1),
                                (n.xhrMonitoringState.abortDone = !0));
                            }
                          },
                          hkErr: na(
                            e,
                            13,
                            "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect."
                          ),
                        }),
                        L(XMLHttpRequest, "setRequestHeader", {
                          ns: b,
                          req: function (e, t, n) {
                            if (!v && a) {
                              var i = e.inst;
                              I(i) &&
                                T(t) &&
                                (i.ajaxData.requestHeaders[t] = n);
                            }
                          },
                          hkErr: na(
                            e,
                            71,
                            "Failed to monitor XMLHttpRequest.setRequestHeader, monitoring data for this ajax call may be incorrect."
                          ),
                        }),
                        (i = !0)),
                      (function () {
                        var t,
                          r =
                            !(t = N()) ||
                            se(t.Request) ||
                            se(t.Request.prototype) ||
                            se(t.fetch)
                              ? null
                              : t.fetch;
                        if (r) {
                          var o = N(),
                            c = r.polyfill;
                          y || n
                            ? c &&
                              S(
                                yr(o, Jo, {
                                  ns: b,
                                  req: function (e, t, n) {
                                    P(null, t, n);
                                  },
                                })
                              )
                            : (S(
                                yr(o, Jo, {
                                  ns: b,
                                  req: function (t, r, o) {
                                    var l;
                                    if (
                                      !y &&
                                      n &&
                                      !P(null, r, o) &&
                                      (!c || !i)
                                    ) {
                                      var u = t.ctx();
                                      l = (function (t, n) {
                                        var i = A(),
                                          r = (i && i.getTraceId()) || Ti(),
                                          o = Ti().substr(0, 16),
                                          c = new Go(r, o, e.diagLog());
                                        (c.traceFlags = i && i.getTraceFlags()),
                                          (c.requestSentTime = Gi()),
                                          (c.errorStatusText = s),
                                          t instanceof Request
                                            ? (c.requestUrl = t ? t.url : "")
                                            : (c.requestUrl = t);
                                        var l = "GET";
                                        n && n.method
                                          ? (l = n.method)
                                          : t &&
                                            t instanceof Request &&
                                            (l = t.method),
                                          (c.method = l);
                                        var u = {};
                                        return (
                                          a &&
                                            new Headers(
                                              (n ? n.headers : 0) ||
                                                (t instanceof Request &&
                                                  t.headers) ||
                                                {}
                                            ).forEach(function (e, t) {
                                              T(t) && (u[t] = e);
                                            }),
                                          (c.requestHeaders = u),
                                          D("fetch", c),
                                          c
                                        );
                                      })(r, o);
                                      var d = e.includeCorrelationHeaders(
                                        l,
                                        r,
                                        o
                                      );
                                      d !== o && t.set(1, d), (u.data = l);
                                    }
                                  },
                                  rsp: function (t, n) {
                                    if (!y) {
                                      var i = t.ctx().data;
                                      i &&
                                        (t.rslt = t.rslt
                                          .then(function (t) {
                                            return (
                                              R(
                                                0,
                                                (t || {}).status,
                                                n,
                                                t,
                                                i,
                                                function () {
                                                  var n,
                                                    i =
                                                      (((n = {
                                                        statusText:
                                                          t.statusText,
                                                      }).headerMap = null),
                                                      (n.correlationContext =
                                                        (function (t) {
                                                          if (t && t.headers)
                                                            try {
                                                              var n =
                                                                t.headers.get(
                                                                  qi[0]
                                                                );
                                                              return Ki.getCorrelationContext(
                                                                n
                                                              );
                                                            } catch (n) {
                                                              ta(
                                                                e,
                                                                18,
                                                                "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.",
                                                                {
                                                                  fetchDiagnosticsMessage:
                                                                    O(t),
                                                                  exception:
                                                                    vt(n),
                                                                }
                                                              );
                                                            }
                                                        })(t)),
                                                      n);
                                                  if (g) {
                                                    var r = {};
                                                    t.headers.forEach(function (
                                                      e,
                                                      t
                                                    ) {
                                                      T(t) && (r[t] = e);
                                                    }),
                                                      (i.headerMap = r);
                                                  }
                                                  return i;
                                                }
                                              ),
                                              t
                                            );
                                          })
                                          .catch(function (e) {
                                            throw (
                                              (R(
                                                0,
                                                0,
                                                n,
                                                null,
                                                i,
                                                null,
                                                e.message
                                              ),
                                              e)
                                            );
                                          }));
                                    }
                                  },
                                  hkErr: na(
                                    e,
                                    15,
                                    "Failed to monitor Window.fetch, monitoring data for this fetch call may be incorrect."
                                  ),
                                })
                              ),
                              (n = !0)),
                            c && (o.fetch.polyfill = c);
                        }
                      })(),
                      (k = e.core.getPlugin(F)) && (l = k.plugin.context));
                  }),
                  (e._doTeardown = function () {
                    E();
                  }),
                  (e.trackDependencyData = function (t, n) {
                    e.trackDependencyDataInternal(t, n);
                  }),
                  (e.includeCorrelationHeaders = function (t, n, i, s) {
                    var c = e._currentWindowHost || r;
                    if (
                      ((function (e, t, n, i, r, o) {
                        var a,
                          s = e.length;
                        if (s > 0) {
                          for (
                            var c =
                                (((a = {}).core = t),
                                (a.xhr = i),
                                (a.input = r),
                                (a.init = o),
                                (a.traceId = n.traceID),
                                (a.spanId = n.spanID),
                                (a.traceFlags = n.traceFlags),
                                a),
                              l = 0;
                            l < s;
                            ++l
                          ) {
                            var u = e[l];
                            if (u && u.fn)
                              try {
                                u.fn.call(null, c);
                              } catch (e) {
                                var d = c.core;
                                Mt(
                                  d && d.logger,
                                  1,
                                  64,
                                  "Dependency listener [#" +
                                    l +
                                    "] failed: " +
                                    Ne(e),
                                  { exception: vt(e) },
                                  !0
                                );
                              }
                          }
                          (n.traceID = c.traceId),
                            (n.spanID = c.spanId),
                            (n.traceFlags = c.traceFlags);
                        }
                      })(k, e.core, t, s, n, i),
                      n)
                    ) {
                      if (
                        Ki.canIncludeCorrelationHeader(o, t.getAbsoluteUrl(), c)
                      ) {
                        i || (i = {});
                        var f = new Headers(
                          i.headers || (n instanceof Request && n.headers) || {}
                        );
                        if (d) {
                          var p = "|" + t.traceID + "." + t.spanID;
                          f.set(qi[3], p), a && (t.requestHeaders[qi[3]] = p);
                        }
                        if (
                          ((g = o.appId || (l && l.appId())) &&
                            (f.set(qi[0], qi[2] + g),
                            a && (t.requestHeaders[qi[0]] = qi[2] + g)),
                          u)
                        ) {
                          se((m = t.traceFlags)) && (m = 1);
                          var h = Bi(Ni(t.traceID, t.spanID, m));
                          f.set(qi[4], h), a && (t.requestHeaders[qi[4]] = h);
                        }
                        i.headers = f;
                      }
                      return i;
                    }
                    if (s) {
                      var g, m;
                      if (
                        Ki.canIncludeCorrelationHeader(o, t.getAbsoluteUrl(), c)
                      )
                        if (
                          (d &&
                            ((p = "|" + t.traceID + "." + t.spanID),
                            s.setRequestHeader(qi[3], p),
                            a && (t.requestHeaders[qi[3]] = p)),
                          (g = o.appId || (l && l.appId())) &&
                            (s.setRequestHeader(qi[0], qi[2] + g),
                            a && (t.requestHeaders[qi[0]] = qi[2] + g)),
                          u)
                        )
                          se((m = t.traceFlags)) && (m = 1),
                            (h = Bi(Ni(t.traceID, t.spanID, m))),
                            s.setRequestHeader(qi[4], h),
                            a && (t.requestHeaders[qi[4]] = h);
                      return s;
                    }
                  }),
                  (e.trackDependencyDataInternal = function (t, n, i) {
                    if (-1 === h || c < h) {
                      (2 !== o.distributedTracingMode &&
                        1 !== o.distributedTracingMode) ||
                        "string" != typeof t.id ||
                        "." === t.id[t.id.length - 1] ||
                        (t.id += "."),
                        se(t.startTime) && (t.startTime = new Date());
                      var r = dn(
                        t,
                        Zi.dataType,
                        Zi.envelopeType,
                        e.diagLog(),
                        n,
                        i
                      );
                      e.core.track(r);
                    } else
                      c === h &&
                        ea(
                          e,
                          55,
                          "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.",
                          !0
                        );
                    ++c;
                  }),
                  (e.addDependencyListener = function (e) {
                    var t = { id: w++, fn: e };
                    return (
                      k.push(t),
                      {
                        remove: function () {
                          Ce(k, function (e, n) {
                            if (e.id === t.id) return k.splice(n, 1), -1;
                          });
                        },
                      }
                    );
                  });
              }),
              S
            );
          }
          return (
            H(t, e),
            (t.getDefaultConfig = function () {
              var e;
              return (
                ((e = {}).maxAjaxCallsPerView = 500),
                (e.disableAjaxTracking = !1),
                (e.disableFetchTracking = !1),
                (e[Wo] = void 0),
                (e.disableCorrelationHeaders = !1),
                (e.distributedTracingMode = 1),
                (e.correlationHeaderExcludedDomains = ra),
                (e.correlationHeaderDomains = void 0),
                (e.correlationHeaderExcludePatterns = void 0),
                (e.appId = void 0),
                (e.enableCorsCorrelation = !1),
                (e.enableRequestHeaderTracking = !1),
                (e[zo] = !1),
                (e.enableAjaxErrorStatusText = !1),
                (e.enableAjaxPerfTracking = !1),
                (e.maxAjaxPerfLookupAttempts = 3),
                (e.ajaxPerfLookupDelay = 25),
                (e.ignoreHeaders = [
                  "Authorization",
                  "X-API-Key",
                  "WWW-Authenticate",
                ]),
                (e.addRequestContext = void 0),
                e
              );
            }),
            (t.getEmptyConfig = function () {
              var e = this.getDefaultConfig();
              return (
                pe(e, function (t) {
                  e[t] = void 0;
                }),
                e
              );
            }),
            (t.prototype.processTelemetry = function (e, t) {
              this.processNext(e, t);
            }),
            (t.identifier = "AjaxDependencyPlugin"),
            t
          );
        })(br),
        aa = function () {},
        sa = function () {
          (this.id = "browser"), (this.deviceClass = "Browser");
        },
        ca = function (e) {
          this.sdkVersion =
            (e.sdkExtension && e.sdkExtension() ? e.sdkExtension() + "_" : "") +
            "javascript:2.8.5";
        },
        la = function () {},
        ua = function () {},
        da = (function () {
          function e(t, n) {
            var i,
              r,
              o = At(n),
              a = Rn(n);
            C(e, this, function (n) {
              t || (t = {}),
                de(t.sessionExpirationMs) ||
                  (t.sessionExpirationMs = function () {
                    return e.acquisitionSpan;
                  }),
                de(t.sessionRenewalMs) ||
                  (t.sessionRenewalMs = function () {
                    return e.renewalSpan;
                  }),
                (n.config = t);
              var s =
                n.config.sessionCookiePostfix && n.config.sessionCookiePostfix()
                  ? n.config.sessionCookiePostfix()
                  : n.config.namePrefix && n.config.namePrefix()
                  ? n.config.namePrefix()
                  : "";
              function c(e, t) {
                var n = !1,
                  i = ", session will be reset",
                  r = t.split("|");
                if (r.length >= 2)
                  try {
                    var a = +r[1] || 0,
                      s = +r[2] || 0;
                    isNaN(a) || a <= 0
                      ? Mt(o, 2, 27, "AI session acquisition date is 0" + i)
                      : isNaN(s) || s <= 0
                      ? Mt(o, 2, 27, "AI session renewal date is 0" + i)
                      : r[0] &&
                        ((e.id = r[0]),
                        (e.acquisitionDate = a),
                        (e.renewalDate = s),
                        (n = !0));
                  } catch (e) {
                    Mt(
                      o,
                      1,
                      9,
                      "Error parsing ai_session value [" +
                        (t || "") +
                        "]" +
                        i +
                        " - " +
                        Ne(e),
                      { exception: vt(e) }
                    );
                  }
                return n;
              }
              function l(e, t) {
                var o = e.acquisitionDate;
                e.renewalDate = t;
                var s,
                  c = n.config,
                  l = c.sessionRenewalMs(),
                  u = o + c.sessionExpirationMs() - t,
                  d = [e.id, o, t];
                s = u < l ? u / 1e3 : l / 1e3;
                var f = c.cookieDomain ? c.cookieDomain() : null;
                a.set(
                  i(),
                  d.join("|"),
                  c.sessionExpirationMs() > 0 ? s : null,
                  f
                ),
                  (r = t);
              }
              (i = function () {
                return "ai_session" + s;
              }),
                (n.automaticSession = new ua()),
                (n.update = function () {
                  var t = De(),
                    s = !1,
                    u = n.automaticSession;
                  u.id ||
                    (s = !(function (e, t) {
                      var n = !1,
                        r = a.get(i());
                      if (r && de(r.split)) n = c(e, r);
                      else {
                        var s = (function (e, t) {
                          var n = Ft();
                          if (null !== n)
                            try {
                              return n.getItem(t);
                            } catch (t) {
                              (Ht = !1),
                                Mt(
                                  e,
                                  2,
                                  1,
                                  "Browser failed read of local storage. " +
                                    Ne(t),
                                  { exception: vt(t) }
                                );
                            }
                          return null;
                        })(o, i());
                        s && (n = c(e, s));
                      }
                      return n || !!e.id;
                    })(u));
                  var d = n.config.sessionExpirationMs();
                  if (!s && d > 0) {
                    var f = n.config.sessionRenewalMs(),
                      p = t - u.acquisitionDate,
                      h = t - u.renewalDate;
                    s = (s = (s = p < 0 || h < 0) || p > d) || h > f;
                  }
                  s
                    ? (function (e) {
                        var t = n.config || {},
                          i = (t.getNewId ? t.getNewId() : null) || Zn;
                        (n.automaticSession.id = i(
                          t.idLength ? t.idLength() : 22
                        )),
                          (n.automaticSession.acquisitionDate = e),
                          l(n.automaticSession, e),
                          zt() ||
                            Mt(
                              o,
                              2,
                              0,
                              "Browser does not support local storage. Session durations will be inaccurate."
                            );
                      })(t)
                    : (!r || t - r > e.cookieUpdateInterval) && l(u, t);
                }),
                (n.backup = function () {
                  var e,
                    t,
                    r,
                    a = n.automaticSession;
                  (e = a.id),
                    (t = a.acquisitionDate),
                    (r = a.renewalDate),
                    (function (e, t, n) {
                      var i = Ft();
                      if (null !== i)
                        try {
                          return i.setItem(t, n), !0;
                        } catch (t) {
                          (Ht = !1),
                            Mt(
                              e,
                              2,
                              3,
                              "Browser failed write to local storage. " + Ne(t),
                              { exception: vt(t) }
                            );
                        }
                    })(o, i(), [e, t, r].join("|"));
                });
            });
          }
          return (
            (e.acquisitionSpan = 864e5),
            (e.renewalSpan = 18e5),
            (e.cookieUpdateInterval = 6e4),
            e
          );
        })(),
        fa = function (e, t, n, i) {
          var r = this;
          (r.traceID = e || Ti()), (r.parentID = t);
          var o = dt();
          !n && o && o.pathname && (n = o.pathname), (r.name = tn(i, n));
        };
      function pa(e) {
        return !("string" != typeof e || !e || e.match(/,|;|=| |\|/));
      }
      var ha = (function () {
          function e(t, n) {
            (this.isNewUser = !1), (this.isUserCookieSet = !1);
            var i,
              r = At(n),
              o = Rn(n);
            C(e, this, function (n) {
              n.config = t;
              var a =
                n.config.userCookiePostfix && n.config.userCookiePostfix()
                  ? n.config.userCookiePostfix()
                  : "";
              i = function () {
                return e.userCookieName + a;
              };
              var s = o.get(i());
              if (s) {
                n.isNewUser = !1;
                var c = s.split(e.cookieSeparator);
                c.length > 0 && ((n.id = c[0]), (n.isUserCookieSet = !!n.id));
              }
              function l() {
                var e = t || {};
                return (
                  (e.getNewId ? e.getNewId() : null) || Zn
                )(e.idLength ? t.idLength() : 22);
              }
              function u(e) {
                var t = be(new Date());
                return (
                  (n.accountAcquisitionDate = t), (n.isNewUser = !0), [e, t]
                );
              }
              function d(e) {
                n.isUserCookieSet = o.set(i(), e, 31536e3);
              }
              if (!n.id) {
                (n.id = l()), d(u(n.id).join(e.cookieSeparator));
                var f =
                  t.namePrefix && t.namePrefix()
                    ? t.namePrefix() + "ai_session"
                    : "ai_session";
                !(function (e, t) {
                  var n = Ft();
                  if (null !== n)
                    try {
                      return n.removeItem(t), !0;
                    } catch (t) {
                      (Ht = !1),
                        Mt(
                          e,
                          2,
                          5,
                          "Browser failed removal of local storage item. " +
                            Ne(t),
                          { exception: vt(t) }
                        );
                    }
                })(r, f);
              }
              n.accountId = t.accountId ? t.accountId() : void 0;
              var p = o.get(e.authUserCookieName);
              if (p) {
                var h = (p = decodeURI(p)).split(e.cookieSeparator);
                h[0] && (n.authenticatedId = h[0]),
                  h.length > 1 && h[1] && (n.accountId = h[1]);
              }
              (n.setAuthenticatedUserContext = function (t, i, a) {
                if ((void 0 === a && (a = !1), !pa(t) || (i && !pa(i))))
                  Mt(
                    r,
                    2,
                    60,
                    "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.",
                    !0
                  );
                else {
                  n.authenticatedId = t;
                  var s = n.authenticatedId;
                  i &&
                    ((n.accountId = i),
                    (s = [n.authenticatedId, n.accountId].join(
                      e.cookieSeparator
                    ))),
                    a && o.set(e.authUserCookieName, encodeURI(s));
                }
              }),
                (n.clearAuthenticatedUserContext = function () {
                  (n.authenticatedId = null),
                    (n.accountId = null),
                    o.del(e.authUserCookieName);
                }),
                (n.update = function (t) {
                  (n.id === t && n.isUserCookieSet) ||
                    d(u(t || l()).join(e.cookieSeparator));
                });
            });
          }
          return (
            (e.cookieSeparator = "|"),
            (e.userCookieName = "ai_user"),
            (e.authUserCookieName = "ai_authUser"),
            e
          );
        })(),
        ga = "ext",
        ma = "tags";
      function va(e, t) {
        e && e[t] && 0 === Le(e[t]).length && delete e[t];
      }
      var ya,
        _a = (function () {
          function e(t, n, i) {
            var r = this,
              o = t.logger;
            (this.appId = function () {
              return null;
            }),
              (this.getSessionId = function () {
                return null;
              }),
              C(e, this, function (e) {
                if (
                  ((e.application = new aa()), (e.internal = new ca(n)), rt())
                ) {
                  (e.sessionManager = new da(n, t)),
                    (e.device = new sa()),
                    (e.location = new la()),
                    (e.user = new ha(n, t));
                  var a,
                    s = void 0,
                    c = void 0;
                  i &&
                    ((s = i.getTraceId()),
                    (c = i.getSpanId()),
                    (a = i.getName())),
                    (e.telemetryTrace = new fa(s, c, a, o)),
                    (e.session = new ua());
                }
                (e.getSessionId = function () {
                  var t = e.session,
                    n = null;
                  if (t && ve(t.id)) n = t.id;
                  else {
                    var i = (e.sessionManager || {}).automaticSession;
                    n = i && ve(i.id) ? i.id : null;
                  }
                  return n;
                }),
                  (e.applySessionContext = function (t, n) {
                    Me(Oe(t.ext, io), "sesId", e.getSessionId(), ve);
                  }),
                  (e.applyOperatingSystemContxt = function (t, n) {
                    Me(t.ext, ro, e.os);
                  }),
                  (e.applyApplicationContext = function (t, n) {
                    var i = e.application;
                    if (i) {
                      var r = Oe(t, ma);
                      Me(r, oo.applicationVersion, i.ver, ve),
                        Me(r, oo.applicationBuild, i.build, ve);
                    }
                  }),
                  (e.applyDeviceContext = function (t, n) {
                    var i = e.device;
                    if (i) {
                      var r = Oe(Oe(t, ga), eo);
                      Me(r, "localId", i.id, ve),
                        Me(r, "ip", i.ip, ve),
                        Me(r, "model", i.model, ve),
                        Me(r, "deviceClass", i.deviceClass, ve);
                    }
                  }),
                  (e.applyInternalContext = function (t, n) {
                    var i = e.internal;
                    if (i) {
                      var r = Oe(t, ma);
                      Me(r, oo.internalAgentVersion, i.agentVersion, ve),
                        Me(r, oo.internalSdkVersion, i.sdkVersion, ve),
                        (t.baseType !== It.dataType &&
                          t.baseType !== mn.dataType) ||
                          (Me(r, oo.internalSnippet, i.snippetVer, ve),
                          Me(r, oo.internalSdkSrc, i.sdkSrc, ve));
                    }
                  }),
                  (e.applyLocationContext = function (e, t) {
                    var n = r.location;
                    n && Me(Oe(e, ma, []), oo.locationIp, n.ip, ve);
                  }),
                  (e.applyOperationContext = function (t, n) {
                    var i = e.telemetryTrace;
                    if (i) {
                      var r = Oe(Oe(t, ga), to, {
                        traceID: void 0,
                        parentID: void 0,
                      });
                      Me(r, "traceID", i.traceID, ve),
                        Me(r, "name", i.name, ve),
                        Me(r, "parentID", i.parentID, ve);
                    }
                  }),
                  (e.applyWebContext = function (e, t) {
                    var n = r.web;
                    n && Me(Oe(e, ga), no, n);
                  }),
                  (e.applyUserContext = function (t, n) {
                    var i = e.user;
                    if (i) {
                      Me(Oe(t, ma, []), oo.userAccountId, i.accountId, ve);
                      var r = Oe(Oe(t, ga), Qr);
                      Me(r, "id", i.id, ve),
                        Me(r, "authId", i.authenticatedId, ve);
                    }
                  }),
                  (e.cleanUp = function (e, t) {
                    var n = e.ext;
                    n &&
                      (va(n, eo),
                      va(n, Qr),
                      va(n, no),
                      va(n, ro),
                      va(n, io),
                      va(n, to));
                  });
              });
          }
          return (e.__ieDyn = 1), e;
        })(),
        xa = (function (e) {
          function t() {
            var n,
              i,
              r,
              o = e.call(this) || this;
            return (
              (o.priority = 110),
              (o.identifier = F),
              C(t, o, function (e, o) {
                function a() {
                  (n = null), (i = null), (r = null);
                }
                a(),
                  (e.initialize = function (a, s, c, l) {
                    o.initialize(a, s, c, l),
                      (function (o) {
                        var a = e.identifier,
                          s = e.core,
                          c = lr(null, o, s),
                          l = t.getDefaultConfig();
                        (n = n || {}),
                          pe(l, function (e, t) {
                            n[e] = function () {
                              return c.getConfig(a, e, t());
                            };
                          }),
                          (r = s.getTraceCtx(!1)),
                          (e.context = new _a(s, n, r)),
                          (i = Ji(e.context.telemetryTrace, r)),
                          s.setTraceCtx(i),
                          (e.context.appId = function () {
                            var e = s.getPlugin(j);
                            return e ? e.plugin._appId : null;
                          }),
                          (e._extConfig = n);
                      })(a);
                  }),
                  (e.processTelemetry = function (t, n) {
                    if (se(t));
                    else {
                      (n = e._getTelCtx(n)),
                        t.name === mn.envelopeType &&
                          n.diagLog().resetInternalMessageCount();
                      var i = e.context || {};
                      i.session &&
                        "string" != typeof e.context.session.id &&
                        i.sessionManager &&
                        i.sessionManager.update();
                      var r = i.user;
                      if (
                        (r && !r.isUserCookieSet && r.update(i.user.id),
                        (function (t, n) {
                          Oe(t, "tags", []), Oe(t, "ext", {});
                          var i = e.context;
                          i.applySessionContext(t, n),
                            i.applyApplicationContext(t, n),
                            i.applyDeviceContext(t, n),
                            i.applyOperationContext(t, n),
                            i.applyUserContext(t, n),
                            i.applyOperatingSystemContxt(t, n),
                            i.applyWebContext(t, n),
                            i.applyLocationContext(t, n),
                            i.applyInternalContext(t, n),
                            i.cleanUp(t, n);
                        })(t, n),
                        r && r.isNewUser)
                      ) {
                        r.isNewUser = !1;
                        var o = new It(72, (lt() || {}).userAgent || "");
                        !(function (e, t, n) {
                          Nt(e).logInternalMessage(1, n);
                        })(n.diagLog(), 0, o);
                      }
                      e.processNext(t, n);
                    }
                  }),
                  (e._doTeardown = function (e, t) {
                    var n = (e || {}).core();
                    n &&
                      n.getTraceCtx &&
                      n.getTraceCtx(!1) === i &&
                      n.setTraceCtx(r),
                      a();
                  });
              }),
              o
            );
          }
          return (
            H(t, e),
            (t.getDefaultConfig = function () {
              var e,
                t,
                n = null;
              return (
                ((e = {
                  instrumentationKey: function () {
                    return t;
                  },
                }).accountId = function () {
                  return n;
                }),
                (e.sessionRenewalMs = function () {
                  return 18e5;
                }),
                (e.samplingPercentage = function () {
                  return 100;
                }),
                (e.sessionExpirationMs = function () {
                  return 864e5;
                }),
                (e.cookieDomain = function () {
                  return n;
                }),
                (e.sdkExtension = function () {
                  return n;
                }),
                (e.isBrowserLinkTrackingEnabled = function () {
                  return !1;
                }),
                (e.appId = function () {
                  return n;
                }),
                (e.getSessionId = function () {
                  return n;
                }),
                (e.namePrefix = function () {
                  return t;
                }),
                (e.sessionCookiePostfix = function () {
                  return t;
                }),
                (e.userCookiePostfix = function () {
                  return t;
                }),
                (e.idLength = function () {
                  return 22;
                }),
                (e.getNewId = function () {
                  return n;
                }),
                e
              );
            }),
            t
          );
        })(br),
        ba = xa,
        Ca = "disableIkeyDeprecationMessage",
        wa = [
          "snippet",
          "dependencies",
          "properties",
          "_snippetVersion",
          "appInsightsNew",
          "getSKUDefaults",
        ],
        ka = (function () {
          function e(t) {
            var n,
              i,
              r,
              o,
              a,
              s,
              c,
              l = this;
            C(e, this, function (e) {
              (a = ii("AISKU")),
                (s = null),
                null,
                null,
                null,
                null,
                (o = "" + (t.sv || t.version || "")),
                (t.queue = t.queue || []),
                (t.version = t.version || 2);
              var u = t.config || {};
              if (u.connectionString) {
                var d = (function (e) {
                    if (!e) return {};
                    var t = (function (e, t, n) {
                      var i;
                      if (e) {
                        if (e.reduce) return e.reduce(t, n);
                        var r = e.length,
                          o = 0;
                        if (arguments.length >= 3) i = arguments[2];
                        else {
                          for (; o < r && !(o in e); ) o++;
                          i = e[o++];
                        }
                        for (; o < r; ) o in e && (i = t(i, e[o], o, e)), o++;
                      }
                      return i;
                    })(
                      e.split(";"),
                      function (e, t) {
                        var n = t.split("=");
                        if (2 === n.length) {
                          var i = n[0].toLowerCase(),
                            r = n[1];
                          e[i] = r;
                        }
                        return e;
                      },
                      {}
                    );
                    if (Le(t).length > 0) {
                      if (t.endpointsuffix) {
                        var n = t.location ? t.location + "." : "";
                        t.ingestionendpoint =
                          t.ingestionendpoint ||
                          "https://" + n + "dc." + t.endpointsuffix;
                      }
                      t.ingestionendpoint = t.ingestionendpoint || Yt;
                    }
                    return t;
                  })(u.connectionString),
                  f = d.ingestionendpoint;
                (u.endpointUrl = f ? f + Jt : u.endpointUrl),
                  (u.instrumentationKey =
                    d.instrumentationkey || u.instrumentationKey);
              }
              (e.appInsights = new jr()),
                (i = new ba()),
                (n = new oa()),
                (r = new Io()),
                (c = new Uo()),
                (e.core = c);
              var p = !!se(u[Ca]) || u[Ca];
              u.connectionString ||
                p ||
                Mt(
                  c.logger,
                  1,
                  106,
                  "Instrumentation key support will end soon, see aka.ms/IkeyMigrate"
                ),
                (e.snippet = t),
                (e.config = u),
                (e.config.diagnosticLogInterval =
                  e.config.diagnosticLogInterval &&
                  e.config.diagnosticLogInterval > 0
                    ? e.config.diagnosticLogInterval
                    : 1e4),
                (e.flush = function (e) {
                  void 0 === e && (e = !0),
                    nr(
                      c,
                      function () {
                        return "AISKU.flush";
                      },
                      function () {
                        Ce(c.getTransmissionControls(), function (t) {
                          Ce(t, function (t) {
                            t.flush(e);
                          });
                        });
                      },
                      null,
                      e
                    );
                }),
                (e.onunloadFlush = function (e) {
                  void 0 === e && (e = !0),
                    Ce(c.getTransmissionControls(), function (t) {
                      Ce(t, function (t) {
                        t.onunloadFlush ? t.onunloadFlush() : t.flush(e);
                      });
                    });
                }),
                (e.loadAppInsights = function (t, a, s) {
                  return (
                    void 0 === t && (t = !1),
                    t &&
                      e.config.extensions &&
                      e.config.extensions.length > 0 &&
                      He("Extensions not allowed in legacy mode"),
                    nr(
                      e.core,
                      function () {
                        return "AISKU.loadAppInsights";
                      },
                      function () {
                        var u = [];
                        u.push(r),
                          u.push(i),
                          u.push(n),
                          u.push(e.appInsights),
                          c.initialize(e.config, u, a, s),
                          (e.context = i.context),
                          ya && e.context && (e.context.internal.sdkSrc = ya),
                          (function (n) {
                            if (n) {
                              var i = "";
                              se(o) || (i += o),
                                t && (i += ".lg"),
                                e.context &&
                                  e.context.internal &&
                                  (e.context.internal.snippetVer = i || "-"),
                                pe(e, function (e, t) {
                                  ve(e) &&
                                    !de(t) &&
                                    e &&
                                    "_" !== e[0] &&
                                    -1 === we(wa, e) &&
                                    (n[e] = t);
                                });
                            }
                          })(e.snippet),
                          e.emptyQueue(),
                          e.pollInternalLogs(),
                          e.addHousekeepingBeforeUnload(l);
                      }
                    ),
                    e
                  );
                }),
                (e.updateSnippetDefinitions = function (t) {
                  !(function (e, t, n) {
                    if (e && t && ue(e) && ue(t)) {
                      var i = function (i) {
                        if (ve(i)) {
                          var r = t[i];
                          de(r)
                            ? (n && !n(i)) || (e[i] = qe(t, i))
                            : (n && !n(i)) ||
                              (le(e, i) && delete e[i],
                              Pe(
                                e,
                                i,
                                function () {
                                  return t[i];
                                },
                                function (e) {
                                  t[i] = e;
                                }
                              ) || (e[i] = r));
                        }
                      };
                      for (var r in t) i(r);
                    }
                  })(t, e, function (e) {
                    return e && -1 === we(wa, e);
                  });
                }),
                (e.emptyQueue = function () {
                  try {
                    if (ge(e.snippet.queue)) {
                      for (var t = e.snippet.queue.length, n = 0; n < t; n++)
                        (0, e.snippet.queue[n])();
                      (e.snippet.queue = void 0), delete e.snippet.queue;
                    }
                  } catch (e) {
                    e && de(e.toString) && e.toString();
                  }
                }),
                (e.addHousekeepingBeforeUnload = function (e) {
                  if (rt() || at()) {
                    var t = function () {
                        if ((e.onunloadFlush(!1), de(l.core.getPlugin))) {
                          var t = l.core.getPlugin(F);
                          if (t) {
                            var n = t.plugin;
                            n &&
                              n.context &&
                              n.context._sessionManager &&
                              n.context._sessionManager.backup();
                          }
                        }
                      },
                      n = !1,
                      i = e.appInsights.config.disablePageUnloadEvents;
                    s || (s = bi(a, c.evtNamespace && c.evtNamespace())),
                      e.appInsights.config.disableFlushOnBeforeUnload ||
                        ((function (e, t, n, i) {
                          var r = !1;
                          return (
                            t &&
                              e &&
                              ge(e) &&
                              !(r = ki(e, t, n, i)) &&
                              n &&
                              n.length > 0 &&
                              (r = ki(e, t, null, i)),
                            r
                          );
                        })([li, ci, si], t, i, s) && (n = !0),
                        Ei(t, i, s) && (n = !0),
                        n ||
                          ((r = lt()) &&
                            r.product &&
                            "ReactNative" === r.product) ||
                          Mt(
                            e.appInsights.core.logger,
                            1,
                            19,
                            "Could not add handler for beforeunload and pagehide"
                          )),
                      n ||
                        e.appInsights.config.disableFlushOnUnload ||
                        Ei(t, i, s);
                  }
                  var r;
                }),
                (e.getSender = function () {
                  return r;
                }),
                (e.unload = function (t, n, i) {
                  var r;
                  e.onunloadFlush(t),
                    s &&
                      (Si([li, ci, si], null, s),
                      (r = bi(ui, s)),
                      Si([si], null, r),
                      Si([ai], null, r)),
                    c.unload && c.unload(t, n, i);
                }),
                je(e, e.appInsights, [
                  "getCookieMgr",
                  "trackEvent",
                  "trackPageView",
                  "trackPageViewPerformance",
                  "trackException",
                  "_onerror",
                  "trackTrace",
                  "trackMetric",
                  "startTrackPage",
                  "stopTrackPage",
                  "startTrackEvent",
                  "stopTrackEvent",
                ]),
                je(
                  e,
                  function () {
                    return n;
                  },
                  ["trackDependencyData", "addDependencyListener"]
                ),
                je(e, c, [
                  "addTelemetryInitializer",
                  "pollInternalLogs",
                  "stopPollingInternalLogs",
                  "getPlugin",
                  "addPlugin",
                  "evtNamespace",
                  "addUnloadCb",
                  "getTraceCtx",
                ]),
                je(
                  e,
                  function () {
                    var e = i.context;
                    return e ? e.user : null;
                  },
                  [
                    "setAuthenticatedUserContext",
                    "clearAuthenticatedUserContext",
                  ]
                );
            });
          }
          return (e.__ieDyn = 1), e;
        })();
      !(function () {
        var e = null,
          t = ["://js.monitor.azure.com/", "://az416426.vo.msecnd.net/"];
        try {
          var n = (document || {}).currentScript;
          n && (e = n.src);
        } catch (e) {}
        if (e)
          try {
            var i = e.toLowerCase();
            if (i)
              for (var r = "", o = 0; o < t.length; o++)
                if (-1 !== i.indexOf(t[o])) {
                  (r = "cdn" + (o + 1)),
                    -1 ===
                      i.indexOf("https://mha.azurewebsites.net/scripts/") &&
                      (-1 !== i.indexOf("https://mha.azurewebsites.net/next/")
                        ? (r += "-next")
                        : -1 !==
                            i.indexOf("https://mha.azurewebsites.net/beta/") &&
                          (r += "-beta")),
                    (ya = r + "");
                  break;
                }
          } catch (e) {}
      })();
    },
    8732: function (e, t, n) {
      var i, r, o;
      !(function (a, s) {
        "use strict";
        (r = [n(2785)]),
          void 0 ===
            (o =
              "function" ==
              typeof (i = function (e) {
                var t = /(^|@)\S+:\d+/,
                  n = /^\s*at .*(\S+:\d+|\(native\))/m,
                  i = /^(eval@)?(\[native code])?$/;
                return {
                  parse: function (e) {
                    if (
                      void 0 !== e.stacktrace ||
                      void 0 !== e["opera#sourceloc"]
                    )
                      return this.parseOpera(e);
                    if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                    if (e.stack) return this.parseFFOrSafari(e);
                    throw new Error("Cannot parse given Error object");
                  },
                  extractLocation: function (e) {
                    if (-1 === e.indexOf(":")) return [e];
                    var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                      e.replace(/[()]/g, "")
                    );
                    return [t[1], t[2] || void 0, t[3] || void 0];
                  },
                  parseV8OrIE: function (t) {
                    return t.stack
                      .split("\n")
                      .filter(function (e) {
                        return !!e.match(n);
                      }, this)
                      .map(function (t) {
                        t.indexOf("(eval ") > -1 &&
                          (t = t
                            .replace(/eval code/g, "eval")
                            .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                        var n = t
                            .replace(/^\s+/, "")
                            .replace(/\(eval code/g, "(")
                            .replace(/^.*?\s+/, ""),
                          i = n.match(/ (\(.+\)$)/);
                        n = i ? n.replace(i[0], "") : n;
                        var r = this.extractLocation(i ? i[1] : n),
                          o = (i && n) || void 0,
                          a =
                            ["eval", "<anonymous>"].indexOf(r[0]) > -1
                              ? void 0
                              : r[0];
                        return new e({
                          functionName: o,
                          fileName: a,
                          lineNumber: r[1],
                          columnNumber: r[2],
                          source: t,
                        });
                      }, this);
                  },
                  parseFFOrSafari: function (t) {
                    return t.stack
                      .split("\n")
                      .filter(function (e) {
                        return !e.match(i);
                      }, this)
                      .map(function (t) {
                        if (
                          (t.indexOf(" > eval") > -1 &&
                            (t = t.replace(
                              / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                              ":$1"
                            )),
                          -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                        )
                          return new e({ functionName: t });
                        var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                          i = t.match(n),
                          r = i && i[1] ? i[1] : void 0,
                          o = this.extractLocation(t.replace(n, ""));
                        return new e({
                          functionName: r,
                          fileName: o[0],
                          lineNumber: o[1],
                          columnNumber: o[2],
                          source: t,
                        });
                      }, this);
                  },
                  parseOpera: function (e) {
                    return !e.stacktrace ||
                      (e.message.indexOf("\n") > -1 &&
                        e.message.split("\n").length >
                          e.stacktrace.split("\n").length)
                      ? this.parseOpera9(e)
                      : e.stack
                      ? this.parseOpera11(e)
                      : this.parseOpera10(e);
                  },
                  parseOpera9: function (t) {
                    for (
                      var n = /Line (\d+).*script (?:in )?(\S+)/i,
                        i = t.message.split("\n"),
                        r = [],
                        o = 2,
                        a = i.length;
                      o < a;
                      o += 2
                    ) {
                      var s = n.exec(i[o]);
                      s &&
                        r.push(
                          new e({
                            fileName: s[2],
                            lineNumber: s[1],
                            source: i[o],
                          })
                        );
                    }
                    return r;
                  },
                  parseOpera10: function (t) {
                    for (
                      var n =
                          /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        i = t.stacktrace.split("\n"),
                        r = [],
                        o = 0,
                        a = i.length;
                      o < a;
                      o += 2
                    ) {
                      var s = n.exec(i[o]);
                      s &&
                        r.push(
                          new e({
                            functionName: s[3] || void 0,
                            fileName: s[2],
                            lineNumber: s[1],
                            source: i[o],
                          })
                        );
                    }
                    return r;
                  },
                  parseOpera11: function (n) {
                    return n.stack
                      .split("\n")
                      .filter(function (e) {
                        return !!e.match(t) && !e.match(/^Error created at/);
                      }, this)
                      .map(function (t) {
                        var n,
                          i = t.split("@"),
                          r = this.extractLocation(i.pop()),
                          o = i.shift() || "",
                          a =
                            o
                              .replace(/<anonymous function(: (\w+))?>/, "$2")
                              .replace(/\([^)]*\)/g, "") || void 0;
                        o.match(/\(([^)]*)\)/) &&
                          (n = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                        var s =
                          void 0 === n || "[arguments not available]" === n
                            ? void 0
                            : n.split(",");
                        return new e({
                          functionName: a,
                          args: s,
                          fileName: r[0],
                          lineNumber: r[1],
                          columnNumber: r[2],
                          source: t,
                        });
                      }, this);
                  },
                };
              })
                ? i.apply(t, r)
                : i) || (e.exports = o);
      })();
    },
    1271: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (i, r) {
        "use strict";
        var o = [],
          a = Object.getPrototypeOf,
          s = o.slice,
          c = o.flat
            ? function (e) {
                return o.flat.call(e);
              }
            : function (e) {
                return o.concat.apply([], e);
              },
          l = o.push,
          u = o.indexOf,
          d = {},
          f = d.toString,
          p = d.hasOwnProperty,
          h = p.toString,
          g = h.call(Object),
          m = {},
          v = function (e) {
            return (
              "function" == typeof e &&
              "number" != typeof e.nodeType &&
              "function" != typeof e.item
            );
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          _ = i.document,
          x = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function b(e, t, n) {
          var i,
            r,
            o = (n = n || _).createElement("script");
          if (((o.text = e), t))
            for (i in x)
              (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                o.setAttribute(i, r);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function C(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? d[f.call(e)] || "object"
            : typeof e;
        }
        var w = "3.6.0",
          k = function (e, t) {
            return new k.fn.init(e, t);
          };
        function S(e) {
          var t = !!e && "length" in e && e.length,
            n = C(e);
          return (
            !v(e) &&
            !y(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (k.fn = k.prototype =
          {
            jquery: w,
            constructor: k,
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null == e
                ? s.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = k.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return k.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                k.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: o.sort,
            splice: o.splice,
          }),
          (k.extend = k.fn.extend =
            function () {
              var e,
                t,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
              for (
                "boolean" == typeof a &&
                  ((l = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || v(a) || (a = {}),
                  s === c && ((a = this), s--);
                s < c;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (i = e[t]),
                      "__proto__" !== t &&
                        a !== i &&
                        (l &&
                        i &&
                        (k.isPlainObject(i) || (r = Array.isArray(i)))
                          ? ((n = a[t]),
                            (o =
                              r && !Array.isArray(n)
                                ? []
                                : r || k.isPlainObject(n)
                                ? n
                                : {}),
                            (r = !1),
                            (a[t] = k.extend(l, o, i)))
                          : void 0 !== i && (a[t] = i));
              return a;
            }),
          k.extend({
            expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(
                !e ||
                "[object Object]" !== f.call(e) ||
                ((t = a(e)) &&
                  ("function" !=
                    typeof (n = p.call(t, "constructor") && t.constructor) ||
                    h.call(n) !== g))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                i = 0;
              if (S(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
              else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (S(Object(e))
                    ? k.merge(n, "string" == typeof e ? [e] : e)
                    : l.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
              return (e.length = r), e;
            },
            grep: function (e, t, n) {
              for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                !t(e[r], r) !== a && i.push(e[r]);
              return i;
            },
            map: function (e, t, n) {
              var i,
                r,
                o = 0,
                a = [];
              if (S(e))
                for (i = e.length; o < i; o++)
                  null != (r = t(e[o], o, n)) && a.push(r);
              else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
              return c(a);
            },
            guid: 1,
            support: m,
          }),
          "function" == typeof Symbol &&
            (k.fn[Symbol.iterator] = o[Symbol.iterator]),
          k.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var E = (function (e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            h,
            g,
            m,
            v,
            y,
            _,
            x = "sizzle" + 1 * new Date(),
            b = e.document,
            C = 0,
            w = 0,
            k = ce(),
            S = ce(),
            E = ce(),
            T = ce(),
            L = function (e, t) {
              return e === t && (d = !0), 0;
            },
            P = {}.hasOwnProperty,
            I = [],
            A = I.pop,
            D = I.push,
            N = I.push,
            M = I.slice,
            O = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            B =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            H =
              "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q =
              "\\[[\\x20\\t\\r\\n\\f]*(" +
              H +
              ")(?:" +
              R +
              "*([*^$|!~]?=)" +
              R +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              H +
              "))|)" +
              R +
              "*\\]",
            F =
              ":(" +
              H +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              q +
              ")*)|.*)\\)|)",
            j = new RegExp(R + "+", "g"),
            U = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g"
            ),
            z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            W = new RegExp(
              "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
            ),
            V = new RegExp(R + "|>"),
            $ = new RegExp(F),
            X = new RegExp("^" + H + "$"),
            K = {
              ID: new RegExp("^#(" + H + ")"),
              CLASS: new RegExp("^\\.(" + H + ")"),
              TAG: new RegExp("^(" + H + "|[*])"),
              ATTR: new RegExp("^" + q),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + B + ")$", "i"),
              needsContext: new RegExp(
                "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              f();
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            N.apply((I = M.call(b.childNodes)), b.childNodes),
              I[b.childNodes.length].nodeType;
          } catch (e) {
            N = {
              apply: I.length
                ? function (e, t) {
                    D.apply(e, M.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, i, r) {
            var o,
              s,
              l,
              u,
              d,
              h,
              v,
              y = t && t.ownerDocument,
              b = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
            )
              return i;
            if (!r && (f(t), (t = t || p), g)) {
              if (11 !== b && (d = Q.exec(e)))
                if ((o = d[1])) {
                  if (9 === b) {
                    if (!(l = t.getElementById(o))) return i;
                    if (l.id === o) return i.push(l), i;
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    _(t, l) &&
                    l.id === o
                  )
                    return i.push(l), i;
                } else {
                  if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (o = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return N.apply(i, t.getElementsByClassName(o)), i;
                }
              if (
                n.qsa &&
                !T[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== b || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === b && (V.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((u = t.getAttribute("id"))
                        ? (u = u.replace(ie, re))
                        : t.setAttribute("id", (u = x))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (u ? "#" + u : ":scope") + " " + _e(h[s]);
                  v = h.join(",");
                }
                try {
                  return N.apply(i, y.querySelectorAll(v)), i;
                } catch (t) {
                  T(e, !0);
                } finally {
                  u === x && t.removeAttribute("id");
                }
              }
            }
            return c(e.replace(U, "$1"), t, i, r);
          }
          function ce() {
            var e = [];
            return function t(n, r) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            };
          }
          function le(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              i.attrHandle[n[r]] = t;
          }
          function fe(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, i) {
                  for (var r, o = e([], n.length, t), a = o.length; a--; )
                    n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !G.test(t || (n && n.nodeName) || "HTML");
            }),
          (f = se.setDocument =
            function (e) {
              var t,
                r,
                a = e ? e.ownerDocument || e : b;
              return a != p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (g = !o(p)),
                  b != p &&
                    (r = p.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener("unload", oe, !1)
                      : r.attachEvent && r.attachEvent("onunload", oe)),
                  (n.scope = ue(function (e) {
                    return (
                      h.appendChild(e).appendChild(p.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Z.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          r = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (m = []),
                  (n.qsa = Z.test(p.querySelectorAll)) &&
                    (ue(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + B + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          m.push("~="),
                        (t = p.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          m.push(
                            "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          m.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          m.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = Z.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", F);
                    }),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Z.test(h.compareDocumentPosition)),
                  (_ =
                    t || Z.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (L = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var i =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          i ||
                          (1 &
                            (i =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === i)
                            ? e == p || (e.ownerDocument == b && _(b, e))
                              ? -1
                              : t == p || (t.ownerDocument == b && _(b, t))
                              ? 1
                              : u
                              ? O(u, e) - O(u, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!r || !o)
                          return e == p
                            ? -1
                            : t == p
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : u
                            ? O(u, e) - O(u, t)
                            : 0;
                        if (r === o) return fe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[i] === s[i]; ) i++;
                        return i
                          ? fe(a[i], s[i])
                          : a[i] == b
                          ? -1
                          : s[i] == b
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (f(e),
              n.matchesSelector &&
                g &&
                !T[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var i = y.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {
                T(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && f(e), _(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != p && f(e);
            var r = i.attrHandle[t.toLowerCase()],
              o =
                r && P.call(i.attrHandle, t.toLowerCase())
                  ? r(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(ie, re);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              i = [],
              r = 0,
              o = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(L),
              d)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
              for (; r--; ) e.splice(i[r], 1);
            }
            return (u = null), e;
          }),
          (r = se.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
            }),
          (i = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: K,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return K.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          $.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)"
                    )) &&
                      k(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (i) {
                    var r = se.attr(i, e);
                    return null == r
                      ? "!=" === t
                      : !t ||
                          ((r += ""),
                          "=" === t
                            ? r === n
                            : "!=" === t
                            ? r !== n
                            : "^=" === t
                            ? n && 0 === r.indexOf(n)
                            : "*=" === t
                            ? n && r.indexOf(n) > -1
                            : "$=" === t
                            ? n && r.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + r.replace(j, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (r === n ||
                                r.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, c) {
                        var l,
                          u,
                          d,
                          f,
                          p,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          y = !c && !s,
                          _ = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (f = t; (f = f[g]); )
                                if (
                                  s
                                    ? f.nodeName.toLowerCase() === v
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? m.firstChild : m.lastChild]), a && y)
                          ) {
                            for (
                              _ =
                                (p =
                                  (l =
                                    (u =
                                      (d = (f = m)[x] || (f[x] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === C && l[1]) && l[2],
                                f = p && m.childNodes[p];
                              (f =
                                (++p && f && f[g]) || (_ = p = 0) || h.pop());

                            )
                              if (1 === f.nodeType && ++_ && f === t) {
                                u[e] = [C, p, _];
                                break;
                              }
                          } else if (
                            (y &&
                              (_ = p =
                                (l =
                                  (u =
                                    (d = (f = t)[x] || (f[x] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  C && l[1]),
                            !1 === _)
                          )
                            for (
                              ;
                              (f =
                                (++p && f && f[g]) || (_ = p = 0) || h.pop()) &&
                              ((s
                                ? f.nodeName.toLowerCase() !== v
                                : 1 !== f.nodeType) ||
                                !++_ ||
                                (y &&
                                  ((u =
                                    (d = f[x] || (f[x] = {}))[f.uniqueID] ||
                                    (d[f.uniqueID] = {}))[e] = [C, _]),
                                f !== t));

                            );
                          return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return r[x]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var i, o = r(e, t), a = o.length; a--; )
                              e[(i = O(e, o[a]))] = !(n[i] = o[a]);
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    i = s(e.replace(U, "$1"));
                  return i[x]
                    ? le(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, r, o) {
                        return (
                          (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || r(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    X.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !i.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return Y.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                    e.push(i);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }),
          (i.pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function ye() {}
          function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function xe(e, t, n) {
            var i = t.dir,
              r = t.next,
              o = r || i,
              a = n && "parentNode" === o,
              s = w++;
            return t.first
              ? function (t, n, r) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || a) return e(t, n, r);
                  return !1;
                }
              : function (t, n, c) {
                  var l,
                    u,
                    d,
                    f = [C, s];
                  if (c) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((u =
                            (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((l = u[o]) && l[0] === C && l[1] === s)
                            return (f[2] = l[2]);
                          if (((u[o] = f), (f[2] = e(t, n, c)))) return !0;
                        }
                  return !1;
                };
          }
          function be(e) {
            return e.length > 1
              ? function (t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ce(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)
              (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function we(e, t, n, i, r, o) {
            return (
              i && !i[x] && (i = we(i)),
              r && !r[x] && (r = we(r, o)),
              le(function (o, a, s, c) {
                var l,
                  u,
                  d,
                  f = [],
                  p = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  m = !e || (!o && t) ? g : Ce(g, f, e, s, c),
                  v = n ? (r || (o ? e : h || i) ? [] : a) : m;
                if ((n && n(m, v, s, c), i))
                  for (l = Ce(v, p), i(l, [], s, c), u = l.length; u--; )
                    (d = l[u]) && (v[p[u]] = !(m[p[u]] = d));
                if (o) {
                  if (r || e) {
                    if (r) {
                      for (l = [], u = v.length; u--; )
                        (d = v[u]) && l.push((m[u] = d));
                      r(null, (v = []), l, c);
                    }
                    for (u = v.length; u--; )
                      (d = v[u]) &&
                        (l = r ? O(o, d) : f[u]) > -1 &&
                        (o[l] = !(a[l] = d));
                  }
                } else (v = Ce(v === a ? v.splice(h, v.length) : v)), r ? r(null, a, v, c) : N.apply(a, v);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                a = i.relative[e[0].type],
                s = a || i.relative[" "],
                c = a ? 1 : 0,
                u = xe(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                d = xe(
                  function (e) {
                    return O(t, e) > -1;
                  },
                  s,
                  !0
                ),
                f = [
                  function (e, n, i) {
                    var r =
                      (!a && (i || n !== l)) ||
                      ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return (t = null), r;
                  },
                ];
              c < o;
              c++
            )
              if ((n = i.relative[e[c].type])) f = [xe(be(f), n)];
              else {
                if ((n = i.filter[e[c].type].apply(null, e[c].matches))[x]) {
                  for (r = ++c; r < o && !i.relative[e[r].type]; r++);
                  return we(
                    c > 1 && be(f),
                    c > 1 &&
                      _e(
                        e
                          .slice(0, c - 1)
                          .concat({ value: " " === e[c - 2].type ? "*" : "" })
                      ).replace(U, "$1"),
                    n,
                    c < r && ke(e.slice(c, r)),
                    r < o && ke((e = e.slice(r))),
                    r < o && _e(e)
                  );
                }
                f.push(n);
              }
            return be(f);
          }
          return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  r,
                  o,
                  a,
                  s,
                  c,
                  l,
                  u = S[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, c = [], l = i.preFilter; s; ) {
                  for (a in ((n && !(r = z.exec(s))) ||
                    (r && (s = s.slice(r[0].length) || s), c.push((o = []))),
                  (n = !1),
                  (r = W.exec(s)) &&
                    ((n = r.shift()),
                    o.push({ value: n, type: r[0].replace(U, " ") }),
                    (s = s.slice(n.length))),
                  i.filter))
                    !(r = K[a].exec(s)) ||
                      (l[a] && !(r = l[a](r))) ||
                      ((n = r.shift()),
                      o.push({ value: n, type: a, matches: r }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, c).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  r = [],
                  o = [],
                  s = E[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = ke(t[n]))[x] ? r.push(s) : o.push(s);
                  (s = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        r = e.length > 0,
                        o = function (o, a, s, c, u) {
                          var d,
                            h,
                            m,
                            v = 0,
                            y = "0",
                            _ = o && [],
                            x = [],
                            b = l,
                            w = o || (r && i.find.TAG("*", u)),
                            k = (C += null == b ? 1 : Math.random() || 0.1),
                            S = w.length;
                          for (
                            u && (l = a == p || a || u);
                            y !== S && null != (d = w[y]);
                            y++
                          ) {
                            if (r && d) {
                              for (
                                h = 0,
                                  a || d.ownerDocument == p || (f(d), (s = !g));
                                (m = e[h++]);

                              )
                                if (m(d, a || p, s)) {
                                  c.push(d);
                                  break;
                                }
                              u && (C = k);
                            }
                            n && ((d = !m && d) && v--, o && _.push(d));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (m = t[h++]); ) m(_, x, a, s);
                            if (o) {
                              if (v > 0)
                                for (; y--; )
                                  _[y] || x[y] || (x[y] = A.call(c));
                              x = Ce(x);
                            }
                            N.apply(c, x),
                              u &&
                                !o &&
                                x.length > 0 &&
                                v + t.length > 1 &&
                                se.uniqueSort(c);
                          }
                          return u && ((C = k), (l = b)), _;
                        };
                      return n ? le(o) : o;
                    })(o, r)
                  )),
                    (s.selector = e);
                }
                return s;
              }),
            (c = se.select =
              function (e, t, n, r) {
                var o,
                  c,
                  l,
                  u,
                  d,
                  f = "function" == typeof e && e,
                  p = !r && a((e = f.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (c = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (l = c[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    i.relative[c[1].type]
                  ) {
                    if (
                      !(t = (i.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    f && (t = t.parentNode),
                      (e = e.slice(c.shift().value.length));
                  }
                  for (
                    o = K.needsContext.test(e) ? 0 : c.length;
                    o-- && ((l = c[o]), !i.relative[(u = l.type)]);

                  )
                    if (
                      (d = i.find[u]) &&
                      (r = d(
                        l.matches[0].replace(te, ne),
                        (ee.test(c[0].type) && ve(t.parentNode)) || t
                      ))
                    ) {
                      if ((c.splice(o, 1), !(e = r.length && _e(c))))
                        return N.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (f || s(e, p))(
                    r,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && ve(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(L).join("") === x),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(B, function (e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
              }),
            se
          );
        })(i);
        (k.find = E),
          (k.expr = E.selectors),
          (k.expr[":"] = k.expr.pseudos),
          (k.uniqueSort = k.unique = E.uniqueSort),
          (k.text = E.getText),
          (k.isXMLDoc = E.isXML),
          (k.contains = E.contains),
          (k.escapeSelector = E.escape);
        var T = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (r && k(e).is(n)) break;
                i.push(e);
              }
            return i;
          },
          L = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          P = k.expr.match.needsContext;
        function I(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var A =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function D(e, t, n) {
          return v(t)
            ? k.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? k.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? k.grep(e, function (e) {
                return u.call(t, e) > -1 !== n;
              })
            : k.filter(t, e, n);
        }
        (k.filter = function (e, t, n) {
          var i = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
              ? k.find.matchesSelector(i, e)
                ? [i]
                : []
              : k.find.matches(
                  e,
                  k.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          k.fn.extend({
            find: function (e) {
              var t,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof e)
                return this.pushStack(
                  k(e).filter(function () {
                    for (t = 0; t < i; t++)
                      if (k.contains(r[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < i; t++)
                k.find(e, r[t], n);
              return i > 1 ? k.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
              return !!D(
                this,
                "string" == typeof e && P.test(e) ? k(e) : e || [],
                !1
              ).length;
            },
          });
        var N,
          M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((k.fn.init = function (e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || N), "string" == typeof e)) {
            if (
              !(i =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : M.exec(e)) ||
              (!i[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof k ? t[0] : t),
                k.merge(
                  this,
                  k.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : _,
                    !0
                  )
                ),
                A.test(i[1]) && k.isPlainObject(t))
              )
                for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (
              (r = _.getElementById(i[2])) &&
                ((this[0] = r), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : v(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(k)
            : k.makeArray(e, this);
        }).prototype = k.fn),
          (N = k(_));
        var O = /^(?:parents|prev(?:Until|All))/,
          B = { children: !0, contents: !0, next: !0, prev: !0 };
        function R(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        k.fn.extend({
          has: function (e) {
            var t = k(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              i = 0,
              r = this.length,
              o = [],
              a = "string" != typeof e && k(e);
            if (!P.test(e))
              for (; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && k.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? u.call(k(e), this[0])
                : u.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          k.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return T(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return T(e, "parentNode", n);
              },
              next: function (e) {
                return R(e, "nextSibling");
              },
              prev: function (e) {
                return R(e, "previousSibling");
              },
              nextAll: function (e) {
                return T(e, "nextSibling");
              },
              prevAll: function (e) {
                return T(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return T(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return T(e, "previousSibling", n);
              },
              siblings: function (e) {
                return L((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return L(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && a(e.contentDocument)
                  ? e.contentDocument
                  : (I(e, "template") && (e = e.content || e),
                    k.merge([], e.childNodes));
              },
            },
            function (e, t) {
              k.fn[e] = function (n, i) {
                var r = k.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (i = n),
                  i && "string" == typeof i && (r = k.filter(i, r)),
                  this.length > 1 &&
                    (B[e] || k.uniqueSort(r), O.test(e) && r.reverse()),
                  this.pushStack(r)
                );
              };
            }
          );
        var H = /[^\x20\t\r\n\f]+/g;
        function q(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function j(e, t, n, i) {
          var r;
          try {
            e && v((r = e.promise))
              ? r.call(e).done(t).fail(n)
              : e && v((r = e.then))
              ? r.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (k.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    k.each(e.match(H) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : k.extend({}, e);
          var t,
            n,
            i,
            r,
            o = [],
            a = [],
            s = -1,
            c = function () {
              for (r = r || e.once, i = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                  !1 === o[s].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((s = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((s = o.length - 1), a.push(n)),
                    (function t(n) {
                      k.each(n, function (n, i) {
                        v(i)
                          ? (e.unique && l.has(i)) || o.push(i)
                          : i && i.length && "string" !== C(i) && t(i);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function () {
                return (
                  k.each(arguments, function (e, t) {
                    for (var n; (n = k.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? k.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (r = a = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (r = a = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!r;
              },
              fireWith: function (e, n) {
                return (
                  r ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || c()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!i;
              },
            };
          return l;
        }),
          k.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    k.Callbacks("memory"),
                    k.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    k.Callbacks("once memory"),
                    k.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    k.Callbacks("once memory"),
                    k.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                r = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return r.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return k
                      .Deferred(function (n) {
                        k.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  then: function (e, n, r) {
                    var o = 0;
                    function a(e, t, n, r) {
                      return function () {
                        var s = this,
                          c = arguments,
                          l = function () {
                            var i, l;
                            if (!(e < o)) {
                              if ((i = n.apply(s, c)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                i &&
                                ("object" == typeof i ||
                                  "function" == typeof i) &&
                                i.then),
                                v(l)
                                  ? r
                                    ? l.call(i, a(o, t, q, r), a(o, t, F, r))
                                    : (o++,
                                      l.call(
                                        i,
                                        a(o, t, q, r),
                                        a(o, t, F, r),
                                        a(o, t, q, t.notifyWith)
                                      ))
                                  : (n !== q && ((s = void 0), (c = [i])),
                                    (r || t.resolveWith)(s, c));
                            }
                          },
                          u = r
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (i) {
                                  k.Deferred.exceptionHook &&
                                    k.Deferred.exceptionHook(i, u.stackTrace),
                                    e + 1 >= o &&
                                      (n !== F && ((s = void 0), (c = [i])),
                                      t.rejectWith(s, c));
                                }
                              };
                        e
                          ? u()
                          : (k.Deferred.getStackHook &&
                              (u.stackTrace = k.Deferred.getStackHook()),
                            i.setTimeout(u));
                      };
                    }
                    return k
                      .Deferred(function (i) {
                        t[0][3].add(a(0, i, v(r) ? r : q, i.notifyWith)),
                          t[1][3].add(a(0, i, v(e) ? e : q)),
                          t[2][3].add(a(0, i, v(n) ? n : F));
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? k.extend(e, r) : r;
                  },
                },
                o = {};
              return (
                k.each(t, function (e, i) {
                  var a = i[2],
                    s = i[5];
                  (r[i[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(i[3].fire),
                    (o[i[0]] = function () {
                      return (
                        o[i[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[i[0] + "With"] = a.fireWith);
                }),
                r.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                i = Array(n),
                r = s.call(arguments),
                o = k.Deferred(),
                a = function (e) {
                  return function (n) {
                    (i[e] = this),
                      (r[e] = arguments.length > 1 ? s.call(arguments) : n),
                      --t || o.resolveWith(i, r);
                  };
                };
              if (
                t <= 1 &&
                (j(e, o.done(a(n)).resolve, o.reject, !t),
                "pending" === o.state() || v(r[n] && r[n].then))
              )
                return o.then();
              for (; n--; ) j(r[n], a(n), o.reject);
              return o.promise();
            },
          });
        var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (k.Deferred.exceptionHook = function (e, t) {
          i.console &&
            i.console.warn &&
            e &&
            U.test(e.name) &&
            i.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (k.readyException = function (e) {
            i.setTimeout(function () {
              throw e;
            });
          });
        var z = k.Deferred();
        function W() {
          _.removeEventListener("DOMContentLoaded", W),
            i.removeEventListener("load", W),
            k.ready();
        }
        (k.fn.ready = function (e) {
          return (
            z.then(e).catch(function (e) {
              k.readyException(e);
            }),
            this
          );
        }),
          k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --k.readyWait : k.isReady) ||
                ((k.isReady = !0),
                (!0 !== e && --k.readyWait > 0) || z.resolveWith(_, [k]));
            },
          }),
          (k.ready.then = z.then),
          "complete" === _.readyState ||
          ("loading" !== _.readyState && !_.documentElement.doScroll)
            ? i.setTimeout(k.ready)
            : (_.addEventListener("DOMContentLoaded", W),
              i.addEventListener("load", W));
        var V = function (e, t, n, i, r, o, a) {
            var s = 0,
              c = e.length,
              l = null == n;
            if ("object" === C(n))
              for (s in ((r = !0), n)) V(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== i &&
              ((r = !0),
              v(i) || (a = !0),
              l &&
                (a
                  ? (t.call(e, i), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(k(e), n);
                    }))),
              t)
            )
              for (; s < c; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o;
          },
          $ = /^-ms-/,
          X = /-([a-z])/g;
        function K(e, t) {
          return t.toUpperCase();
        }
        function G(e) {
          return e.replace($, "ms-").replace(X, K);
        }
        var Y = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function J() {
          this.expando = k.expando + J.uid++;
        }
        (J.uid = 1),
          (J.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Y(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var i,
                r = this.cache(e);
              if ("string" == typeof t) r[G(t)] = n;
              else for (i in t) r[G(i)] = t[i];
              return r;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                i = e[this.expando];
              if (void 0 !== i) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(G)
                    : (t = G(t)) in i
                    ? [t]
                    : t.match(H) || []).length;
                  for (; n--; ) delete i[t[n]];
                }
                (void 0 === t || k.isEmptyObject(i)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !k.isEmptyObject(t);
            },
          });
        var Z = new J(),
          Q = new J(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(i)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (e) {}
              Q.set(e, t, n);
            } else n = void 0;
          return n;
        }
        k.extend({
          hasData: function (e) {
            return Q.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return Q.access(e, t, n);
          },
          removeData: function (e, t) {
            Q.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          k.fn.extend({
            data: function (e, t) {
              var n,
                i,
                r,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((r = Q.get(o)),
                  1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (i = a[n].name).indexOf("data-") &&
                      ((i = G(i.slice(5))), ne(o, i, r[i]));
                  Z.set(o, "hasDataAttrs", !0);
                }
                return r;
              }
              return "object" == typeof e
                ? this.each(function () {
                    Q.set(this, e);
                  })
                : V(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = Q.get(o, e)) ||
                          void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        Q.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                Q.remove(this, e);
              });
            },
          }),
          k.extend({
            queue: function (e, t, n) {
              var i;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (i = Z.get(e, t)),
                  n &&
                    (!i || Array.isArray(n)
                      ? (i = Z.access(e, t, k.makeArray(n)))
                      : i.push(n)),
                  i || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = k.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = k._queueHooks(e, t);
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  r.call(
                    e,
                    function () {
                      k.dequeue(e, t);
                    },
                    o
                  )),
                !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: k.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          k.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? k.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = k.queue(this, e, t);
                      k._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          k.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                k.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                i = 1,
                r = k.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --i || r.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                a--;

              )
                (n = Z.get(o[a], e + "queueHooks")) &&
                  n.empty &&
                  (i++, n.empty.add(s));
              return s(), r.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          ae = _.documentElement,
          se = function (e) {
            return k.contains(e.ownerDocument, e);
          },
          ce = { composed: !0 };
        ae.getRootNode &&
          (se = function (e) {
            return (
              k.contains(e.ownerDocument, e) ||
              e.getRootNode(ce) === e.ownerDocument
            );
          });
        var le = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && se(e) && "none" === k.css(e, "display"))
          );
        };
        function ue(e, t, n, i) {
          var r,
            o,
            a = 20,
            s = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return k.css(e, t, "");
                },
            c = s(),
            l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
            u =
              e.nodeType &&
              (k.cssNumber[t] || ("px" !== l && +c)) &&
              re.exec(k.css(e, t));
          if (u && u[3] !== l) {
            for (c /= 2, l = l || u[3], u = +c || 1; a--; )
              k.style(e, t, u + l),
                (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
                (u /= o);
            (u *= 2), k.style(e, t, u + l), (n = n || []);
          }
          return (
            n &&
              ((u = +u || +c || 0),
              (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = l), (i.start = u), (i.end = r))),
            r
          );
        }
        var de = {};
        function fe(e) {
          var t,
            n = e.ownerDocument,
            i = e.nodeName,
            r = de[i];
          return (
            r ||
            ((t = n.body.appendChild(n.createElement(i))),
            (r = k.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === r && (r = "block"),
            (de[i] = r),
            r)
          );
        }
        function pe(e, t) {
          for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
            (i = e[o]).style &&
              ((n = i.style.display),
              t
                ? ("none" === n &&
                    ((r[o] = Z.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display && le(i) && (r[o] = fe(i)))
                : "none" !== n && ((r[o] = "none"), Z.set(i, "display", n)));
          for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
          return e;
        }
        k.fn.extend({
          show: function () {
            return pe(this, !0);
          },
          hide: function () {
            return pe(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  le(this) ? k(this).show() : k(this).hide();
                });
          },
        });
        var he,
          ge,
          me = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i;
        (he = _.createDocumentFragment().appendChild(_.createElement("div"))),
          (ge = _.createElement("input")).setAttribute("type", "radio"),
          ge.setAttribute("checked", "checked"),
          ge.setAttribute("name", "t"),
          he.appendChild(ge),
          (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (he.innerHTML = "<textarea>x</textarea>"),
          (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
          (he.innerHTML = "<option></option>"),
          (m.option = !!he.lastChild);
        var _e = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function xe(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && I(e, t)) ? k.merge([e], n) : n
          );
        }
        function be(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (_e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead),
          (_e.th = _e.td),
          m.option ||
            (_e.optgroup = _e.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var Ce = /<|&#?\w+;/;
        function we(e, t, n, i, r) {
          for (
            var o,
              a,
              s,
              c,
              l,
              u,
              d = t.createDocumentFragment(),
              f = [],
              p = 0,
              h = e.length;
            p < h;
            p++
          )
            if ((o = e[p]) || 0 === o)
              if ("object" === C(o)) k.merge(f, o.nodeType ? [o] : o);
              else if (Ce.test(o)) {
                for (
                  a = a || d.appendChild(t.createElement("div")),
                    s = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                    c = _e[s] || _e._default,
                    a.innerHTML = c[1] + k.htmlPrefilter(o) + c[2],
                    u = c[0];
                  u--;

                )
                  a = a.lastChild;
                k.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
              } else f.push(t.createTextNode(o));
          for (d.textContent = "", p = 0; (o = f[p++]); )
            if (i && k.inArray(o, i) > -1) r && r.push(o);
            else if (
              ((l = se(o)), (a = xe(d.appendChild(o), "script")), l && be(a), n)
            )
              for (u = 0; (o = a[u++]); ) ye.test(o.type || "") && n.push(o);
          return d;
        }
        var ke = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
          return !0;
        }
        function Ee() {
          return !1;
        }
        function Te(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return _.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function Le(e, t, n, i, r, o) {
          var a, s;
          if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
              Le(e, s, n, i, t[s], o);
            return e;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = i), (i = void 0))
                  : ((r = i), (i = n), (n = void 0))),
            !1 === r)
          )
            r = Ee;
          else if (!r) return e;
          return (
            1 === o &&
              ((a = r),
              (r = function (e) {
                return k().off(e), a.apply(this, arguments);
              }),
              (r.guid = a.guid || (a.guid = k.guid++))),
            e.each(function () {
              k.event.add(this, t, r, i, n);
            })
          );
        }
        function Pe(e, t, n) {
          n
            ? (Z.set(e, t, !1),
              k.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var i,
                    r,
                    o = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                      (k.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((o = s.call(arguments)),
                      Z.set(this, t, o),
                      (i = n(this, t)),
                      this[t](),
                      o !== (r = Z.get(this, t)) || i
                        ? Z.set(this, t, !1)
                        : (r = {}),
                      o !== r)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r && r.value
                      );
                  } else
                    o.length &&
                      (Z.set(this, t, {
                        value: k.event.trigger(
                          k.extend(o[0], k.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(e, t) && k.event.add(e, t, Se);
        }
        (k.event = {
          global: {},
          add: function (e, t, n, i, r) {
            var o,
              a,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              h,
              g,
              m = Z.get(e);
            if (Y(e))
              for (
                n.handler && ((n = (o = n).handler), (r = o.selector)),
                  r && k.find.matchesSelector(ae, r),
                  n.guid || (n.guid = k.guid++),
                  (c = m.events) || (c = m.events = Object.create(null)),
                  (a = m.handle) ||
                    (a = m.handle =
                      function (t) {
                        return void 0 !== k && k.event.triggered !== t.type
                          ? k.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  l = (t = (t || "").match(H) || [""]).length;
                l--;

              )
                (p = g = (s = ke.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  p &&
                    ((d = k.event.special[p] || {}),
                    (p = (r ? d.delegateType : d.bindType) || p),
                    (d = k.event.special[p] || {}),
                    (u = k.extend(
                      {
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && k.expr.match.needsContext.test(r),
                        namespace: h.join("."),
                      },
                      o
                    )),
                    (f = c[p]) ||
                      (((f = c[p] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                        (e.addEventListener && e.addEventListener(p, a))),
                    d.add &&
                      (d.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    (k.event.global[p] = !0));
          },
          remove: function (e, t, n, i, r) {
            var o,
              a,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              h,
              g,
              m = Z.hasData(e) && Z.get(e);
            if (m && (c = m.events)) {
              for (l = (t = (t || "").match(H) || [""]).length; l--; )
                if (
                  ((p = g = (s = ke.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  p)
                ) {
                  for (
                    d = k.event.special[p] || {},
                      f = c[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      a = o = f.length;
                    o--;

                  )
                    (u = f[o]),
                      (!r && g !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (s && !s.test(u.namespace)) ||
                        (i &&
                          i !== u.selector &&
                          ("**" !== i || !u.selector)) ||
                        (f.splice(o, 1),
                        u.selector && f.delegateCount--,
                        d.remove && d.remove.call(e, u));
                  a &&
                    !f.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                      k.removeEvent(e, p, m.handle),
                    delete c[p]);
                } else for (p in c) k.event.remove(e, p + t[l], n, i, !0);
              k.isEmptyObject(c) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              i,
              r,
              o,
              a,
              s = new Array(arguments.length),
              c = k.event.fix(e),
              l = (Z.get(this, "events") || Object.create(null))[c.type] || [],
              u = k.event.special[c.type] || {};
            for (s[0] = c, t = 1; t < arguments.length; t++)
              s[t] = arguments[t];
            if (
              ((c.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, c))
            ) {
              for (
                a = k.event.handlers.call(this, c, l), t = 0;
                (r = a[t++]) && !c.isPropagationStopped();

              )
                for (
                  c.currentTarget = r.elem, n = 0;
                  (o = r.handlers[n++]) && !c.isImmediatePropagationStopped();

                )
                  (c.rnamespace &&
                    !1 !== o.namespace &&
                    !c.rnamespace.test(o.namespace)) ||
                    ((c.handleObj = o),
                    (c.data = o.data),
                    void 0 !==
                      (i = (
                        (k.event.special[o.origType] || {}).handle || o.handler
                      ).apply(r.elem, s)) &&
                      !1 === (c.result = i) &&
                      (c.preventDefault(), c.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, c), c.result;
            }
          },
          handlers: function (e, t) {
            var n,
              i,
              r,
              o,
              a,
              s = [],
              c = t.delegateCount,
              l = e.target;
            if (c && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== e.type || !0 !== l.disabled)
                ) {
                  for (o = [], a = {}, n = 0; n < c; n++)
                    void 0 === a[(r = (i = t[n]).selector + " ")] &&
                      (a[r] = i.needsContext
                        ? k(r, this).index(l) > -1
                        : k.find(r, this, null, [l]).length),
                      a[r] && o.push(i);
                  o.length && s.push({ elem: l, handlers: o });
                }
            return (
              (l = this),
              c < t.length && s.push({ elem: l, handlers: t.slice(c) }),
              s
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(k.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[k.expando] ? e : new k.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) &&
                    t.click &&
                    I(t, "input") &&
                    Pe(t, "click", Se),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) && t.click && I(t, "input") && Pe(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (me.test(t.type) &&
                    t.click &&
                    I(t, "input") &&
                    Z.get(t, "click")) ||
                  I(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (k.Event = function (e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Se
                    : Ee),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && k.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[k.expando] = !0);
          }),
          (k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Se),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Se),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Se),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          k.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            k.event.addProp
          ),
          k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            k.event.special[e] = {
              setup: function () {
                return Pe(this, e, Te), !1;
              },
              trigger: function () {
                return Pe(this, e), !0;
              },
              _default: function () {
                return !0;
              },
              delegateType: t,
            };
          }),
          k.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                  return (
                    (r && (r === i || k.contains(i, r))) ||
                      ((e.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          k.fn.extend({
            on: function (e, t, n, i) {
              return Le(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
              return Le(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
              var i, r;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (i = e.handleObj),
                  k(e.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ee),
                this.each(function () {
                  k.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Ie = /<script|<style|<link/i,
          Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
          De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ne(e, t) {
          return (
            (I(e, "table") &&
              I(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              k(e).children("tbody")[0]) ||
            e
          );
        }
        function Me(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Oe(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function Be(e, t) {
          var n, i, r, o, a, s;
          if (1 === t.nodeType) {
            if (Z.hasData(e) && (s = Z.get(e).events))
              for (r in (Z.remove(t, "handle events"), s))
                for (n = 0, i = s[r].length; n < i; n++)
                  k.event.add(t, r, s[r][n]);
            Q.hasData(e) &&
              ((o = Q.access(e)), (a = k.extend({}, o)), Q.set(t, a));
          }
        }
        function Re(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && me.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function He(e, t, n, i) {
          t = c(t);
          var r,
            o,
            a,
            s,
            l,
            u,
            d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            g = v(h);
          if (
            g ||
            (f > 1 && "string" == typeof h && !m.checkClone && Ae.test(h))
          )
            return e.each(function (r) {
              var o = e.eq(r);
              g && (t[0] = h.call(this, r, o.html())), He(o, t, n, i);
            });
          if (
            f &&
            ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
            1 === r.childNodes.length && (r = o),
            o || i)
          ) {
            for (s = (a = k.map(xe(r, "script"), Me)).length; d < f; d++)
              (l = r),
                d !== p &&
                  ((l = k.clone(l, !0, !0)), s && k.merge(a, xe(l, "script"))),
                n.call(e[d], l, d);
            if (s)
              for (
                u = a[a.length - 1].ownerDocument, k.map(a, Oe), d = 0;
                d < s;
                d++
              )
                (l = a[d]),
                  ye.test(l.type || "") &&
                    !Z.access(l, "globalEval") &&
                    k.contains(u, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? k._evalUrl &&
                        !l.noModule &&
                        k._evalUrl(
                          l.src,
                          { nonce: l.nonce || l.getAttribute("nonce") },
                          u
                        )
                      : b(l.textContent.replace(De, ""), l, u));
          }
          return e;
        }
        function qe(e, t, n) {
          for (
            var i, r = t ? k.filter(t, e) : e, o = 0;
            null != (i = r[o]);
            o++
          )
            n || 1 !== i.nodeType || k.cleanData(xe(i)),
              i.parentNode &&
                (n && se(i) && be(xe(i, "script")),
                i.parentNode.removeChild(i));
          return e;
        }
        k.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.cloneNode(!0),
              c = se(e);
            if (
              !(
                m.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                k.isXMLDoc(e)
              )
            )
              for (a = xe(s), i = 0, r = (o = xe(e)).length; i < r; i++)
                Re(o[i], a[i]);
            if (t)
              if (n)
                for (
                  o = o || xe(e), a = a || xe(s), i = 0, r = o.length;
                  i < r;
                  i++
                )
                  Be(o[i], a[i]);
              else Be(e, s);
            return (
              (a = xe(s, "script")).length > 0 && be(a, !c && xe(e, "script")),
              s
            );
          },
          cleanData: function (e) {
            for (
              var t, n, i, r = k.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (Y(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events)
                    for (i in t.events)
                      r[i]
                        ? k.event.remove(n, i)
                        : k.removeEvent(n, i, t.handle);
                  n[Z.expando] = void 0;
                }
                n[Q.expando] && (n[Q.expando] = void 0);
              }
          },
        }),
          k.fn.extend({
            detach: function (e) {
              return qe(this, e, !0);
            },
            remove: function (e) {
              return qe(this, e);
            },
            text: function (e) {
              return V(
                this,
                function (e) {
                  return void 0 === e
                    ? k.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return He(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Ne(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return He(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Ne(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return He(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (k.cleanData(xe(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return k.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return V(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Ie.test(e) &&
                    !_e[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = k.htmlPrefilter(e);
                    try {
                      for (; n < i; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (k.cleanData(xe(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return He(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  k.inArray(this, e) < 0 &&
                    (k.cleanData(xe(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          k.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              k.fn[e] = function (e) {
                for (
                  var n, i = [], r = k(e), o = r.length - 1, a = 0;
                  a <= o;
                  a++
                )
                  (n = a === o ? this : this.clone(!0)),
                    k(r[a])[t](n),
                    l.apply(i, n.get());
                return this.pushStack(i);
              };
            }
          );
        var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          je = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = i), t.getComputedStyle(e);
          },
          Ue = function (e, t, n) {
            var i,
              r,
              o = {};
            for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
            return i;
          },
          ze = new RegExp(oe.join("|"), "i");
        function We(e, t, n) {
          var i,
            r,
            o,
            a,
            s = e.style;
          return (
            (n = n || je(e)) &&
              ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                se(e) ||
                (a = k.style(e, t)),
              !m.pixelBoxStyles() &&
                Fe.test(a) &&
                ze.test(t) &&
                ((i = s.width),
                (r = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = i),
                (s.minWidth = r),
                (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
          );
        }
        function Ve(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (u) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (u.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                ae.appendChild(l).appendChild(u);
              var e = i.getComputedStyle(u);
              (n = "1%" !== e.top),
                (c = 12 === t(e.marginLeft)),
                (u.style.right = "60%"),
                (a = 36 === t(e.right)),
                (r = 36 === t(e.width)),
                (u.style.position = "absolute"),
                (o = 12 === t(u.offsetWidth / 3)),
                ae.removeChild(l),
                (u = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            r,
            o,
            a,
            s,
            c,
            l = _.createElement("div"),
            u = _.createElement("div");
          u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
            k.extend(m, {
              boxSizingReliable: function () {
                return e(), r;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), c;
              },
              scrollboxSize: function () {
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, r;
                return (
                  null == s &&
                    ((e = _.createElement("table")),
                    (t = _.createElement("tr")),
                    (n = _.createElement("div")),
                    (e.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (t.style.cssText = "border:1px solid"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    (n.style.display = "block"),
                    ae.appendChild(e).appendChild(t).appendChild(n),
                    (r = i.getComputedStyle(t)),
                    (s =
                      parseInt(r.height, 10) +
                        parseInt(r.borderTopWidth, 10) +
                        parseInt(r.borderBottomWidth, 10) ===
                      t.offsetHeight),
                    ae.removeChild(e)),
                  s
                );
              },
            }));
        })();
        var $e = ["Webkit", "Moz", "ms"],
          Xe = _.createElement("div").style,
          Ke = {};
        function Ge(e) {
          return (
            k.cssProps[e] ||
            Ke[e] ||
            (e in Xe
              ? e
              : (Ke[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = $e.length;
                      n--;

                    )
                      if ((e = $e[n] + t) in Xe) return e;
                  })(e) || e))
          );
        }
        var Ye = /^(none|table(?!-c[ea]).+)/,
          Je = /^--/,
          Ze = { position: "absolute", visibility: "hidden", display: "block" },
          Qe = { letterSpacing: "0", fontWeight: "400" };
        function et(e, t, n) {
          var i = re.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }
        function tt(e, t, n, i, r, o) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            c = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (c += k.css(e, n + oe[a], !0, r)),
              i
                ? ("content" === n && (c -= k.css(e, "padding" + oe[a], !0, r)),
                  "margin" !== n &&
                    (c -= k.css(e, "border" + oe[a] + "Width", !0, r)))
                : ((c += k.css(e, "padding" + oe[a], !0, r)),
                  "padding" !== n
                    ? (c += k.css(e, "border" + oe[a] + "Width", !0, r))
                    : (s += k.css(e, "border" + oe[a] + "Width", !0, r)));
          return (
            !i &&
              o >= 0 &&
              (c +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      o -
                      c -
                      s -
                      0.5
                  )
                ) || 0),
            c
          );
        }
        function nt(e, t, n) {
          var i = je(e),
            r =
              (!m.boxSizingReliable() || n) &&
              "border-box" === k.css(e, "boxSizing", !1, i),
            o = r,
            a = We(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Fe.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!m.boxSizingReliable() && r) ||
              (!m.reliableTrDimensions() && I(e, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === k.css(e, "display", !1, i))) &&
              e.getClientRects().length &&
              ((r = "border-box" === k.css(e, "boxSizing", !1, i)),
              (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
              tt(e, t, n || (r ? "border" : "content"), o, i, a) +
              "px"
          );
        }
        function it(e, t, n, i, r) {
          return new it.prototype.init(e, t, n, i, r);
        }
        k.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = We(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r,
                o,
                a,
                s = G(t),
                c = Je.test(t),
                l = e.style;
              if (
                (c || (t = Ge(s)),
                (a = k.cssHooks[t] || k.cssHooks[s]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                  ? r
                  : l[t];
              "string" == (o = typeof n) &&
                (r = re.exec(n)) &&
                r[1] &&
                ((n = ue(e, t, r)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" !== o ||
                    c ||
                    (n += (r && r[3]) || (k.cssNumber[s] ? "" : "px")),
                  m.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                    (c ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function (e, t, n, i) {
            var r,
              o,
              a,
              s = G(t);
            return (
              Je.test(t) || (t = Ge(s)),
              (a = k.cssHooks[t] || k.cssHooks[s]) &&
                "get" in a &&
                (r = a.get(e, !0, n)),
              void 0 === r && (r = We(e, t, i)),
              "normal" === r && t in Qe && (r = Qe[t]),
              "" === n || n
                ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                : r
            );
          },
        }),
          k.each(["height", "width"], function (e, t) {
            k.cssHooks[t] = {
              get: function (e, n, i) {
                if (n)
                  return !Ye.test(k.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? nt(e, t, i)
                    : Ue(e, Ze, function () {
                        return nt(e, t, i);
                      });
              },
              set: function (e, n, i) {
                var r,
                  o = je(e),
                  a = !m.scrollboxSize() && "absolute" === o.position,
                  s = (a || i) && "border-box" === k.css(e, "boxSizing", !1, o),
                  c = i ? tt(e, t, i, s, o) : 0;
                return (
                  s &&
                    a &&
                    (c -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        tt(e, t, "border", !1, o) -
                        0.5
                    )),
                  c &&
                    (r = re.exec(n)) &&
                    "px" !== (r[3] || "px") &&
                    ((e.style[t] = n), (n = k.css(e, t))),
                  et(0, n, c)
                );
              },
            };
          }),
          (k.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(We(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    Ue(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (k.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    r = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
              },
            }),
              "margin" !== e && (k.cssHooks[e + t].set = et);
          }),
          k.fn.extend({
            css: function (e, t) {
              return V(
                this,
                function (e, t, n) {
                  var i,
                    r,
                    o = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (i = je(e), r = t.length; a < r; a++)
                      o[t[a]] = k.css(e, t[a], !1, i);
                    return o;
                  }
                  return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (k.Tween = it),
          (it.prototype = {
            constructor: it,
            init: function (e, t, n, i, r, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = r || k.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = o || (k.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = it.propHooks[this.prop];
              return e && e.get ? e.get(this) : it.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = it.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      k.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : it.propHooks._default.set(this),
                this
              );
            },
          }),
          (it.prototype.init.prototype = it.prototype),
          (it.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                k.fx.step[e.prop]
                  ? k.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : k.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (it.propHooks.scrollTop = it.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (k.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (k.fx = it.prototype.init),
          (k.fx.step = {});
        var rt,
          ot,
          at = /^(?:toggle|show|hide)$/,
          st = /queueHooks$/;
        function ct() {
          ot &&
            (!1 === _.hidden && i.requestAnimationFrame
              ? i.requestAnimationFrame(ct)
              : i.setTimeout(ct, k.fx.interval),
            k.fx.tick());
        }
        function lt() {
          return (
            i.setTimeout(function () {
              rt = void 0;
            }),
            (rt = Date.now())
          );
        }
        function ut(e, t) {
          var n,
            i = 0,
            r = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = oe[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
        }
        function dt(e, t, n) {
          for (
            var i,
              r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
              o = 0,
              a = r.length;
            o < a;
            o++
          )
            if ((i = r[o].call(n, t, e))) return i;
        }
        function ft(e, t, n) {
          var i,
            r,
            o = 0,
            a = ft.prefilters.length,
            s = k.Deferred().always(function () {
              delete c.elem;
            }),
            c = function () {
              if (r) return !1;
              for (
                var t = rt || lt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  i = 1 - (n / l.duration || 0),
                  o = 0,
                  a = l.tweens.length;
                o < a;
                o++
              )
                l.tweens[o].run(i);
              return (
                s.notifyWith(e, [l, i, n]),
                i < 1 && a
                  ? n
                  : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              );
            },
            l = s.promise({
              elem: e,
              props: k.extend({}, t),
              opts: k.extend(
                !0,
                { specialEasing: {}, easing: k.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: rt || lt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var i = k.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(i), i;
              },
              stop: function (t) {
                var n = 0,
                  i = t ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                    : s.rejectWith(e, [l, t]),
                  this
                );
              },
            }),
            u = l.props;
          for (
            (function (e, t) {
              var n, i, r, o, a;
              for (n in e)
                if (
                  ((r = t[(i = G(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                  n !== i && ((e[i] = o), delete e[n]),
                  (a = k.cssHooks[i]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete e[i], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = r));
                else t[i] = r;
            })(u, l.opts.specialEasing);
            o < a;
            o++
          )
            if ((i = ft.prefilters[o].call(l, e, u, l.opts)))
              return (
                v(i.stop) &&
                  (k._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)),
                i
              );
          return (
            k.map(u, dt, l),
            v(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            k.fx.timer(k.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (k.Animation = k.extend(ft, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, re.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
            for (var n, i = 0, r = e.length; i < r; i++)
              (n = e[i]),
                (ft.tweeners[n] = ft.tweeners[n] || []),
                ft.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var i,
                r,
                o,
                a,
                s,
                c,
                l,
                u,
                d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                g = e.nodeType && le(e),
                m = Z.get(e, "fxshow");
              for (i in (n.queue ||
                (null == (a = k._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s();
                  })),
                a.unqueued++,
                f.always(function () {
                  f.always(function () {
                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                  });
                })),
              t))
                if (((r = t[i]), at.test(r))) {
                  if (
                    (delete t[i],
                    (o = o || "toggle" === r),
                    r === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0;
                  }
                  p[i] = (m && m[i]) || k.style(e, i);
                }
              if ((c = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
                for (i in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (l = m && m.display) && (l = Z.get(e, "display")),
                  "none" === (u = k.css(e, "display")) &&
                    (l
                      ? (u = l)
                      : (pe([e], !0),
                        (l = e.style.display || l),
                        (u = k.css(e, "display")),
                        pe([e]))),
                  ("inline" === u || ("inline-block" === u && null != l)) &&
                    "none" === k.css(e, "float") &&
                    (c ||
                      (f.done(function () {
                        h.display = l;
                      }),
                      null == l &&
                        ((u = h.display), (l = "none" === u ? "" : u))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  f.always(function () {
                    (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                  })),
                (c = !1),
                p))
                  c ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = Z.access(e, "fxshow", { display: l })),
                    o && (m.hidden = !g),
                    g && pe([e], !0),
                    f.done(function () {
                      for (i in (g || pe([e]), Z.remove(e, "fxshow"), p))
                        k.style(e, i, p[i]);
                    })),
                    (c = dt(g ? m[i] : 0, i, f)),
                    i in m ||
                      ((m[i] = c.start),
                      g && ((c.end = c.start), (c.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
          },
        })),
          (k.speed = function (e, t, n) {
            var i =
              e && "object" == typeof e
                ? k.extend({}, e)
                : {
                    complete: n || (!n && t) || (v(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !v(t) && t),
                  };
            return (
              k.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in k.fx.speeds
                    ? (i.duration = k.fx.speeds[i.duration])
                    : (i.duration = k.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                v(i.old) && i.old.call(this),
                  i.queue && k.dequeue(this, i.queue);
              }),
              i
            );
          }),
          k.fn.extend({
            fadeTo: function (e, t, n, i) {
              return this.filter(le)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
              var r = k.isEmptyObject(e),
                o = k.speed(t, n, i),
                a = function () {
                  var t = ft(this, k.extend({}, e), o);
                  (r || Z.get(this, "finish")) && t.stop(!0);
                };
              return (
                (a.finish = a),
                r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              );
            },
            stop: function (e, t, n) {
              var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    r = null != e && e + "queueHooks",
                    o = k.timers,
                    a = Z.get(this);
                  if (r) a[r] && a[r].stop && i(a[r]);
                  else for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                  for (r = o.length; r--; )
                    o[r].elem !== this ||
                      (null != e && o[r].queue !== e) ||
                      (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                  (!t && n) || k.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = k.timers,
                    a = i ? i.length : 0;
                  for (
                    n.finish = !0,
                      k.queue(this, e, []),
                      r && r.stop && r.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          k.each(["toggle", "show", "hide"], function (e, t) {
            var n = k.fn[t];
            k.fn[t] = function (e, i, r) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(ut(t, !0), e, i, r);
            };
          }),
          k.each(
            {
              slideDown: ut("show"),
              slideUp: ut("hide"),
              slideToggle: ut("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              k.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
              };
            }
          ),
          (k.timers = []),
          (k.fx.tick = function () {
            var e,
              t = 0,
              n = k.timers;
            for (rt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), (rt = void 0);
          }),
          (k.fx.timer = function (e) {
            k.timers.push(e), k.fx.start();
          }),
          (k.fx.interval = 13),
          (k.fx.start = function () {
            ot || ((ot = !0), ct());
          }),
          (k.fx.stop = function () {
            ot = null;
          }),
          (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (k.fn.delay = function (e, t) {
            return (
              (e = (k.fx && k.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var r = i.setTimeout(t, e);
                n.stop = function () {
                  i.clearTimeout(r);
                };
              })
            );
          }),
          (function () {
            var e = _.createElement("input"),
              t = _.createElement("select").appendChild(
                _.createElement("option")
              );
            (e.type = "checkbox"),
              (m.checkOn = "" !== e.value),
              (m.optSelected = t.selected),
              ((e = _.createElement("input")).value = "t"),
              (e.type = "radio"),
              (m.radioValue = "t" === e.value);
          })();
        var pt,
          ht = k.expr.attrHandle;
        k.fn.extend({
          attr: function (e, t) {
            return V(this, k.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              k.removeAttr(this, e);
            });
          },
        }),
          k.extend({
            attr: function (e, t, n) {
              var i,
                r,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? k.prop(e, t, n)
                  : ((1 === o && k.isXMLDoc(e)) ||
                      (r =
                        k.attrHooks[t.toLowerCase()] ||
                        (k.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void k.removeAttr(e, t)
                        : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : null == (i = k.find.attr(e, t))
                      ? void 0
                      : i);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!m.radioValue && "radio" === t && I(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                i = 0,
                r = t && t.match(H);
              if (r && 1 === e.nodeType)
                for (; (n = r[i++]); ) e.removeAttribute(n);
            },
          }),
          (pt = {
            set: function (e, t, n) {
              return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || k.find.attr;
            ht[t] = function (e, t, i) {
              var r,
                o,
                a = t.toLowerCase();
              return (
                i ||
                  ((o = ht[a]),
                  (ht[a] = r),
                  (r = null != n(e, t, i) ? a : null),
                  (ht[a] = o)),
                r
              );
            };
          });
        var gt = /^(?:input|select|textarea|button)$/i,
          mt = /^(?:a|area)$/i;
        function vt(e) {
          return (e.match(H) || []).join(" ");
        }
        function yt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function _t(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(H)) || [];
        }
        k.fn.extend({
          prop: function (e, t) {
            return V(this, k.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[k.propFix[e] || e];
            });
          },
        }),
          k.extend({
            prop: function (e, t, n) {
              var i,
                r,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && k.isXMLDoc(e)) ||
                    ((t = k.propFix[t] || t), (r = k.propHooks[t])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e[t] = n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = k.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          m.optSelected ||
            (k.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          k.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              k.propFix[this.toLowerCase()] = this;
            }
          ),
          k.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s,
                c = 0;
              if (v(e))
                return this.each(function (t) {
                  k(this).addClass(e.call(this, t, yt(this)));
                });
              if ((t = _t(e)).length)
                for (; (n = this[c++]); )
                  if (
                    ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r !== (s = vt(i)) && n.setAttribute("class", s);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s,
                c = 0;
              if (v(e))
                return this.each(function (t) {
                  k(this).removeClass(e.call(this, t, yt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = _t(e)).length)
                for (; (n = this[c++]); )
                  if (
                    ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      for (; i.indexOf(" " + o + " ") > -1; )
                        i = i.replace(" " + o + " ", " ");
                    r !== (s = vt(i)) && n.setAttribute("class", s);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                i = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && i
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : v(e)
                ? this.each(function (n) {
                    k(this).toggleClass(e.call(this, n, yt(this), t), t);
                  })
                : this.each(function () {
                    var t, r, o, a;
                    if (i)
                      for (r = 0, o = k(this), a = _t(e); (t = a[r++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = yt(this)) && Z.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : Z.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                i = 0;
              for (t = " " + e + " "; (n = this[i++]); )
                if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var xt = /\r/g;
        k.fn.extend({
          val: function (e) {
            var t,
              n,
              i,
              r = this[0];
            return arguments.length
              ? ((i = v(e)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    (null == (r = i ? e.call(this, n, k(this).val()) : e)
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = k.map(r, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      k.valHooks[this.type] ||
                      k.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, r, "value")) ||
                      (this.value = r));
                }))
              : r
              ? (t =
                  k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(r, "value"))
                ? n
                : "string" == typeof (n = r.value)
                ? n.replace(xt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          k.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = k.find.attr(e, "value");
                  return null != t ? t : vt(k.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    i,
                    r = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    c = a ? o + 1 : r.length;
                  for (i = o < 0 ? c : a ? o : 0; i < c; i++)
                    if (
                      ((n = r[i]).selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))
                    ) {
                      if (((t = k(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (
                    var n, i, r = e.options, o = k.makeArray(t), a = r.length;
                    a--;

                  )
                    ((i = r[a]).selected =
                      k.inArray(k.valHooks.option.get(i), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          k.each(["radio", "checkbox"], function () {
            (k.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = k.inArray(k(e).val(), t) > -1);
              },
            }),
              m.checkOn ||
                (k.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (m.focusin = "onfocusin" in i);
        var bt = /^(?:focusinfocus|focusoutblur)$/,
          Ct = function (e) {
            e.stopPropagation();
          };
        k.extend(k.event, {
          trigger: function (e, t, n, r) {
            var o,
              a,
              s,
              c,
              l,
              u,
              d,
              f,
              h = [n || _],
              g = p.call(e, "type") ? e.type : e,
              m = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = f = s = n = n || _),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !bt.test(g + k.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((m = g.split(".")), (g = m.shift()), m.sort()),
                (l = g.indexOf(":") < 0 && "on" + g),
                ((e = e[k.expando]
                  ? e
                  : new k.Event(g, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = m.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : k.makeArray(t, [e])),
                (d = k.event.special[g] || {}),
                r || !d.trigger || !1 !== d.trigger.apply(n, t)))
            ) {
              if (!r && !d.noBubble && !y(n)) {
                for (
                  c = d.delegateType || g, bt.test(c + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  h.push(a), (s = a);
                s === (n.ownerDocument || _) &&
                  h.push(s.defaultView || s.parentWindow || i);
              }
              for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                (f = a),
                  (e.type = o > 1 ? c : d.bindType || g),
                  (u =
                    (Z.get(a, "events") || Object.create(null))[e.type] &&
                    Z.get(a, "handle")) && u.apply(a, t),
                  (u = l && a[l]) &&
                    u.apply &&
                    Y(a) &&
                    ((e.result = u.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                r ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                  !Y(n) ||
                  (l &&
                    v(n[g]) &&
                    !y(n) &&
                    ((s = n[l]) && (n[l] = null),
                    (k.event.triggered = g),
                    e.isPropagationStopped() && f.addEventListener(g, Ct),
                    n[g](),
                    e.isPropagationStopped() && f.removeEventListener(g, Ct),
                    (k.event.triggered = void 0),
                    s && (n[l] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
            k.event.trigger(i, null, t);
          },
        }),
          k.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                k.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return k.event.trigger(e, t, n, !0);
            },
          }),
          m.focusin ||
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                k.event.simulate(t, e.target, k.event.fix(e));
              };
              k.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t);
                  r || i.addEventListener(e, n, !0),
                    Z.access(i, t, (r || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t) - 1;
                  r
                    ? Z.access(i, t, r)
                    : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                },
              };
            });
        var wt = i.location,
          kt = { guid: Date.now() },
          St = /\?/;
        k.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new i.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
              k.error(
                "Invalid XML: " +
                  (n
                    ? k
                        .map(n.childNodes, function (e) {
                          return e.textContent;
                        })
                        .join("\n")
                    : e)
              ),
            t
          );
        };
        var Et = /\[\]$/,
          Tt = /\r?\n/g,
          Lt = /^(?:submit|button|image|reset|file)$/i,
          Pt = /^(?:input|select|textarea|keygen)/i;
        function It(e, t, n, i) {
          var r;
          if (Array.isArray(t))
            k.each(t, function (t, r) {
              n || Et.test(e)
                ? i(e, r)
                : It(
                    e +
                      "[" +
                      ("object" == typeof r && null != r ? t : "") +
                      "]",
                    r,
                    n,
                    i
                  );
            });
          else if (n || "object" !== C(t)) i(e, t);
          else for (r in t) It(e + "[" + r + "]", t[r], n, i);
        }
        (k.param = function (e, t) {
          var n,
            i = [],
            r = function (e, t) {
              var n = v(t) ? t() : t;
              i[i.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
            k.each(e, function () {
              r(this.name, this.value);
            });
          else for (n in e) It(n, e[n], t, r);
          return i.join("&");
        }),
          k.fn.extend({
            serialize: function () {
              return k.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !k(this).is(":disabled") &&
                    Pt.test(this.nodeName) &&
                    !Lt.test(e) &&
                    (this.checked || !me.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = k(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? k.map(n, function (e) {
                        return { name: t.name, value: e.replace(Tt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Tt, "\r\n") };
                })
                .get();
            },
          });
        var At = /%20/g,
          Dt = /#.*$/,
          Nt = /([?&])_=[^&]*/,
          Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ot = /^(?:GET|HEAD)$/,
          Bt = /^\/\//,
          Rt = {},
          Ht = {},
          qt = "*/".concat("*"),
          Ft = _.createElement("a");
        function jt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
              r = 0,
              o = t.toLowerCase().match(H) || [];
            if (v(n))
              for (; (i = o[r++]); )
                "+" === i[0]
                  ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                  : (e[i] = e[i] || []).push(n);
          };
        }
        function Ut(e, t, n, i) {
          var r = {},
            o = e === Ht;
          function a(s) {
            var c;
            return (
              (r[s] = !0),
              k.each(e[s] || [], function (e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || o || r[l]
                  ? o
                    ? !(c = l)
                    : void 0
                  : (t.dataTypes.unshift(l), a(l), !1);
              }),
              c
            );
          }
          return a(t.dataTypes[0]) || (!r["*"] && a("*"));
        }
        function zt(e, t) {
          var n,
            i,
            r = k.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && k.extend(!0, e, i), e;
        }
        (Ft.href = wt.href),
          k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: wt.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  wt.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
            },
            ajaxPrefilter: jt(Rt),
            ajaxTransport: jt(Ht),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                r,
                o,
                a,
                s,
                c,
                l,
                u,
                d,
                f,
                p = k.ajaxSetup({}, t),
                h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                m = k.Deferred(),
                v = k.Callbacks("once memory"),
                y = p.statusCode || {},
                x = {},
                b = {},
                C = "canceled",
                w = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (l) {
                      if (!a)
                        for (a = {}; (t = Mt.exec(o)); )
                          a[t[1].toLowerCase() + " "] = (
                            a[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = a[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return l ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == l &&
                        ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                        (x[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == l && (p.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (l) w.always(e[w.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || C;
                    return n && n.abort(t), S(0, t), this;
                  },
                };
              if (
                (m.promise(w),
                (p.url = ((e || p.url || wt.href) + "").replace(
                  Bt,
                  wt.protocol + "//"
                )),
                (p.type = t.method || t.type || p.method || p.type),
                (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [
                  "",
                ]),
                null == p.crossDomain)
              ) {
                c = _.createElement("a");
                try {
                  (c.href = p.url),
                    (c.href = c.href),
                    (p.crossDomain =
                      Ft.protocol + "//" + Ft.host !=
                      c.protocol + "//" + c.host);
                } catch (e) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = k.param(p.data, p.traditional)),
                Ut(Rt, p, t, w),
                l)
              )
                return w;
              for (d in ((u = k.event && p.global) &&
                0 == k.active++ &&
                k.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Ot.test(p.type)),
              (r = p.url.replace(Dt, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(At, "+"))
                : ((f = p.url.slice(r.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((r += (St.test(r) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((r = r.replace(Nt, "$1")),
                    (f = (St.test(r) ? "&" : "?") + "_=" + kt.guid++ + f)),
                  (p.url = r + f)),
              p.ifModified &&
                (k.lastModified[r] &&
                  w.setRequestHeader("If-Modified-Since", k.lastModified[r]),
                k.etag[r] && w.setRequestHeader("If-None-Match", k.etag[r])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                t.contentType) &&
                w.setRequestHeader("Content-Type", p.contentType),
              w.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
                  : p.accepts["*"]
              ),
              p.headers))
                w.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(h, w, p) || l))
                return w.abort();
              if (
                ((C = "abort"),
                v.add(p.complete),
                w.done(p.success),
                w.fail(p.error),
                (n = Ut(Ht, p, t, w)))
              ) {
                if (((w.readyState = 1), u && g.trigger("ajaxSend", [w, p]), l))
                  return w;
                p.async &&
                  p.timeout > 0 &&
                  (s = i.setTimeout(function () {
                    w.abort("timeout");
                  }, p.timeout));
                try {
                  (l = !1), n.send(x, S);
                } catch (e) {
                  if (l) throw e;
                  S(-1, e);
                }
              } else S(-1, "No Transport");
              function S(e, t, a, c) {
                var d,
                  f,
                  _,
                  x,
                  b,
                  C = t;
                l ||
                  ((l = !0),
                  s && i.clearTimeout(s),
                  (n = void 0),
                  (o = c || ""),
                  (w.readyState = e > 0 ? 4 : 0),
                  (d = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (x = (function (e, t, n) {
                      for (
                        var i, r, o, a, s = e.contents, c = e.dataTypes;
                        "*" === c[0];

                      )
                        c.shift(),
                          void 0 === i &&
                            (i =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (i)
                        for (r in s)
                          if (s[r] && s[r].test(i)) {
                            c.unshift(r);
                            break;
                          }
                      if (c[0] in n) o = c[0];
                      else {
                        for (r in n) {
                          if (!c[0] || e.converters[r + " " + c[0]]) {
                            o = r;
                            break;
                          }
                          a || (a = r);
                        }
                        o = o || a;
                      }
                      if (o) return o !== c[0] && c.unshift(o), n[o];
                    })(p, w, a)),
                  !d &&
                    k.inArray("script", p.dataTypes) > -1 &&
                    k.inArray("json", p.dataTypes) < 0 &&
                    (p.converters["text script"] = function () {}),
                  (x = (function (e, t, n, i) {
                    var r,
                      o,
                      a,
                      s,
                      c,
                      l = {},
                      u = e.dataTypes.slice();
                    if (u[1])
                      for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !c &&
                          i &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (c = o),
                        (o = u.shift()))
                      )
                        if ("*" === o) o = c;
                        else if ("*" !== c && c !== o) {
                          if (!(a = l[c + " " + o] || l["* " + o]))
                            for (r in l)
                              if (
                                (s = r.split(" "))[1] === o &&
                                (a = l[c + " " + s[0]] || l["* " + s[0]])
                              ) {
                                !0 === a
                                  ? (a = l[r])
                                  : !0 !== l[r] &&
                                    ((o = s[0]), u.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: a
                                    ? e
                                    : "No conversion from " + c + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(p, x, w, d)),
                  d
                    ? (p.ifModified &&
                        ((b = w.getResponseHeader("Last-Modified")) &&
                          (k.lastModified[r] = b),
                        (b = w.getResponseHeader("etag")) && (k.etag[r] = b)),
                      204 === e || "HEAD" === p.type
                        ? (C = "nocontent")
                        : 304 === e
                        ? (C = "notmodified")
                        : ((C = x.state), (f = x.data), (d = !(_ = x.error))))
                    : ((_ = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                  (w.status = e),
                  (w.statusText = (t || C) + ""),
                  d ? m.resolveWith(h, [f, C, w]) : m.rejectWith(h, [w, C, _]),
                  w.statusCode(y),
                  (y = void 0),
                  u &&
                    g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                      w,
                      p,
                      d ? f : _,
                    ]),
                  v.fireWith(h, [w, C]),
                  u &&
                    (g.trigger("ajaxComplete", [w, p]),
                    --k.active || k.event.trigger("ajaxStop")));
              }
              return w;
            },
            getJSON: function (e, t, n) {
              return k.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return k.get(e, void 0, t, "script");
            },
          }),
          k.each(["get", "post"], function (e, t) {
            k[t] = function (e, n, i, r) {
              return (
                v(n) && ((r = r || i), (i = n), (n = void 0)),
                k.ajax(
                  k.extend(
                    { url: e, type: t, dataType: r, data: n, success: i },
                    k.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          k.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (k._evalUrl = function (e, t, n) {
            return k.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                k.globalEval(e, t, n);
              },
            });
          }),
          k.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (v(e) && (e = e.call(this[0])),
                  (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return v(e)
                ? this.each(function (t) {
                    k(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = k(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                k(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    k(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e);
          }),
          (k.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (k.ajaxSettings.xhr = function () {
            try {
              return new i.XMLHttpRequest();
            } catch (e) {}
          });
        var Wt = { 0: 200, 1223: 204 },
          Vt = k.ajaxSettings.xhr();
        (m.cors = !!Vt && "withCredentials" in Vt),
          (m.ajax = Vt = !!Vt),
          k.ajaxTransport(function (e) {
            var t, n;
            if (m.cors || (Vt && !e.crossDomain))
              return {
                send: function (r, o) {
                  var a,
                    s = e.xhr();
                  if (
                    (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                  for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest"),
                  r))
                    s.setRequestHeader(a, r[a]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          n =
                          s.onload =
                          s.onerror =
                          s.onabort =
                          s.ontimeout =
                          s.onreadystatechange =
                            null),
                        "abort" === e
                          ? s.abort()
                          : "error" === e
                          ? "number" != typeof s.status
                            ? o(0, "error")
                            : o(s.status, s.statusText)
                          : o(
                              Wt[s.status] || s.status,
                              s.statusText,
                              "text" !== (s.responseType || "text") ||
                                "string" != typeof s.responseText
                                ? { binary: s.response }
                                : { text: s.responseText },
                              s.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (s.onload = t()),
                    (n = s.onerror = s.ontimeout = t("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            i.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    s.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          k.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return k.globalEval(e), e;
              },
            },
          }),
          k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          k.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (i, r) {
                  (t = k("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && r("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    _.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var $t,
          Xt = [],
          Kt = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || k.expando + "_" + kt.guid++;
            return (this[e] = !0), e;
          },
        }),
          k.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
              o,
              a,
              s =
                !1 !== e.jsonp &&
                (Kt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Kt.test(e.data) &&
                    "data");
            if (s || "jsonp" === e.dataTypes[0])
              return (
                (r = e.jsonpCallback =
                  v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Kt, "$1" + r))
                  : !1 !== e.jsonp &&
                    (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                  return a || k.error(r + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = i[r]),
                (i[r] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  void 0 === o ? k(i).removeProp(r) : (i[r] = o),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                    a && v(o) && o(a[0]),
                    (a = o = void 0);
                }),
                "script"
              );
          }),
          (m.createHTMLDocument =
            ((($t = _.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === $t.childNodes.length)),
          (k.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (m.createHTMLDocument
                    ? (((i = (t =
                        _.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = _.location.href),
                      t.head.appendChild(i))
                    : (t = _)),
                (o = !n && []),
                (r = A.exec(e))
                  ? [t.createElement(r[1])]
                  : ((r = we([e], t, o)),
                    o && o.length && k(o).remove(),
                    k.merge([], r.childNodes)));
            var i, r, o;
          }),
          (k.fn.load = function (e, t, n) {
            var i,
              r,
              o,
              a = this,
              s = e.indexOf(" ");
            return (
              s > -1 && ((i = vt(e.slice(s))), (e = e.slice(0, s))),
              v(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (r = "POST"),
              a.length > 0 &&
                k
                  .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments),
                      a.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (k.expr.pseudos.animated = function (e) {
            return k.grep(k.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (k.offset = {
            setOffset: function (e, t, n) {
              var i,
                r,
                o,
                a,
                s,
                c,
                l = k.css(e, "position"),
                u = k(e),
                d = {};
              "static" === l && (e.style.position = "relative"),
                (s = u.offset()),
                (o = k.css(e, "top")),
                (c = k.css(e, "left")),
                ("absolute" === l || "fixed" === l) &&
                (o + c).indexOf("auto") > -1
                  ? ((a = (i = u.position()).top), (r = i.left))
                  : ((a = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
                v(t) && (t = t.call(e, n, k.extend({}, s))),
                null != t.top && (d.top = t.top - s.top + a),
                null != t.left && (d.left = t.left - s.left + r),
                "using" in t ? t.using.call(e, d) : u.css(d);
            },
          }),
          k.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      k.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0];
              return i
                ? i.getClientRects().length
                  ? ((t = i.getBoundingClientRect()),
                    (n = i.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 };
                if ("fixed" === k.css(i, "position"))
                  t = i.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = i.ownerDocument,
                      e = i.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === k.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== i &&
                    1 === e.nodeType &&
                    (((r = k(e).offset()).top += k.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (r.left += k.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - r.top - k.css(i, "marginTop", !0),
                  left: t.left - r.left - k.css(i, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === k.css(e, "position");

                )
                  e = e.offsetParent;
                return e || ae;
              });
            },
          }),
          k.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              k.fn[e] = function (i) {
                return V(
                  this,
                  function (e, i, r) {
                    var o;
                    if (
                      (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === r)
                    )
                      return o ? o[t] : e[i];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                      : (e[i] = r);
                  },
                  e,
                  i,
                  arguments.length
                );
              };
            }
          ),
          k.each(["top", "left"], function (e, t) {
            k.cssHooks[t] = Ve(m.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = We(e, t)), Fe.test(n) ? k(e).position()[t] + "px" : n
                );
            });
          }),
          k.each({ Height: "height", Width: "width" }, function (e, t) {
            k.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, i) {
                k.fn[i] = function (r, o) {
                  var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                  return V(
                    this,
                    function (t, n, r) {
                      var o;
                      return y(t)
                        ? 0 === i.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === r
                        ? k.css(t, n, s)
                        : k.style(t, n, r, s);
                    },
                    t,
                    a ? r : void 0,
                    a
                  );
                };
              }
            );
          }),
          k.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              k.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          k.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
              return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          k.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              k.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (k.proxy = function (e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (i = s.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, i.concat(s.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || k.guid++),
              r
            );
        }),
          (k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0);
          }),
          (k.isArray = Array.isArray),
          (k.parseJSON = JSON.parse),
          (k.nodeName = I),
          (k.isFunction = v),
          (k.isWindow = y),
          (k.camelCase = G),
          (k.type = C),
          (k.now = Date.now),
          (k.isNumeric = function (e) {
            var t = k.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (k.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "");
          }),
          void 0 ===
            (n = function () {
              return k;
            }.apply(t, [])) || (e.exports = n);
        var Yt = i.jQuery,
          Jt = i.$;
        return (
          (k.noConflict = function (e) {
            return (
              i.$ === k && (i.$ = Jt), e && i.jQuery === k && (i.jQuery = Yt), k
            );
          }),
          void 0 === r && (i.jQuery = i.$ = k),
          k
        );
      });
    },
    1778: function (e, t, n) {
      "use strict";
      function i(e) {
        this.message = e;
      }
      (i.prototype = new Error()), (i.prototype.name = "InvalidCharacterError");
      var r =
        ("undefined" != typeof window &&
          window.atob &&
          window.atob.bind(window)) ||
        function (e) {
          var t = String(e).replace(/=+$/, "");
          if (t.length % 4 == 1)
            throw new i(
              "'atob' failed: The string to be decoded is not correctly encoded."
            );
          for (
            var n, r, o = 0, a = 0, s = "";
            (r = t.charAt(a++));
            ~r && ((n = o % 4 ? 64 * n + r : r), o++ % 4)
              ? (s += String.fromCharCode(255 & (n >> ((-2 * o) & 6))))
              : 0
          )
            r =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                r
              );
          return s;
        };
      function o(e) {
        var t = e
          .replace(/-/g, "+")
          .replace(/_/g, "https://mha.azurewebsites.net/");
        switch (t.length % 4) {
          case 0:
            break;
          case 2:
            t += "==";
            break;
          case 3:
            t += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          return (function (e) {
            return decodeURIComponent(
              r(e).replace(/(.)/g, function (e, t) {
                var n = t.charCodeAt(0).toString(16).toUpperCase();
                return n.length < 2 && (n = "0" + n), "%" + n;
              })
            );
          })(t);
        } catch (e) {
          return r(t);
        }
      }
      function a(e) {
        this.message = e;
      }
      (a.prototype = new Error()),
        (a.prototype.name = "InvalidTokenError"),
        (t.Z = function (e, t) {
          if ("string" != typeof e) throw new a("Invalid token specified");
          var n = !0 === (t = t || {}).header ? 0 : 1;
          try {
            return JSON.parse(o(e.split(".")[n]));
          } catch (e) {
            throw new a("Invalid token specified: " + e.message);
          }
        });
    },
    4131: function (e, t, n) {
      "use strict";
      var i = function (e) {
          var t = this.constructor;
          return this.then(
            function (n) {
              return t.resolve(e()).then(function () {
                return n;
              });
            },
            function (n) {
              return t.resolve(e()).then(function () {
                return t.reject(n);
              });
            }
          );
        },
        r = function (e) {
          return new this(function (t, n) {
            if (!e || void 0 === e.length)
              return n(
                new TypeError(
                  typeof e +
                    " " +
                    e +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            var r = i.length;
            function o(e, n) {
              if (n && ("object" == typeof n || "function" == typeof n)) {
                var a = n.then;
                if ("function" == typeof a)
                  return void a.call(
                    n,
                    function (t) {
                      o(e, t);
                    },
                    function (n) {
                      (i[e] = { status: "rejected", reason: n }),
                        0 == --r && t(i);
                    }
                  );
              }
              (i[e] = { status: "fulfilled", value: n }), 0 == --r && t(i);
            }
            for (var a = 0; a < i.length; a++) o(a, i[a]);
          });
        },
        o = setTimeout;
      function a(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function s() {}
      function c(e) {
        if (!(this instanceof c))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          h(e, this);
      }
      function l(e, t) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            c._immediateFn(function () {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var i;
                try {
                  i = n(e._value);
                } catch (e) {
                  return void d(t.promise, e);
                }
                u(t.promise, i);
              } else (1 === e._state ? u : d)(t.promise, e._value);
            }))
          : e._deferreds.push(t);
      }
      function u(e, t) {
        try {
          if (t === e)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof c)
              return (e._state = 3), (e._value = t), void f(e);
            if ("function" == typeof n)
              return void h(
                ((i = n),
                (r = t),
                function () {
                  i.apply(r, arguments);
                }),
                e
              );
          }
          (e._state = 1), (e._value = t), f(e);
        } catch (t) {
          d(e, t);
        }
        var i, r;
      }
      function d(e, t) {
        (e._state = 2), (e._value = t), f(e);
      }
      function f(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          c._immediateFn(function () {
            e._handled || c._unhandledRejectionFn(e._value);
          });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
          l(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function p(e, t, n) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.promise = n);
      }
      function h(e, t) {
        var n = !1;
        try {
          e(
            function (e) {
              n || ((n = !0), u(t, e));
            },
            function (e) {
              n || ((n = !0), d(t, e));
            }
          );
        } catch (e) {
          if (n) return;
          (n = !0), d(t, e);
        }
      }
      (c.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (c.prototype.then = function (e, t) {
          var n = new this.constructor(s);
          return l(this, new p(e, t, n)), n;
        }),
        (c.prototype.finally = i),
        (c.all = function (e) {
          return new c(function (t, n) {
            if (!a(e)) return n(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            var r = i.length;
            function o(e, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s)
                    return void s.call(
                      a,
                      function (t) {
                        o(e, t);
                      },
                      n
                    );
                }
                (i[e] = a), 0 == --r && t(i);
              } catch (e) {
                n(e);
              }
            }
            for (var s = 0; s < i.length; s++) o(s, i[s]);
          });
        }),
        (c.allSettled = r),
        (c.resolve = function (e) {
          return e && "object" == typeof e && e.constructor === c
            ? e
            : new c(function (t) {
                t(e);
              });
        }),
        (c.reject = function (e) {
          return new c(function (t, n) {
            n(e);
          });
        }),
        (c.race = function (e) {
          return new c(function (t, n) {
            if (!a(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var i = 0, r = e.length; i < r; i++)
              c.resolve(e[i]).then(t, n);
          });
        }),
        (c._immediateFn =
          ("function" == typeof setImmediate &&
            function (e) {
              setImmediate(e);
            }) ||
          function (e) {
            o(e, 0);
          }),
        (c._unhandledRejectionFn = function (e) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", e);
        });
      var g = c,
        m = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== n.g) return n.g;
          throw new Error("unable to locate global object");
        })();
      "function" != typeof m.Promise
        ? (m.Promise = g)
        : (m.Promise.prototype.finally || (m.Promise.prototype.finally = i),
          m.Promise.allSettled || (m.Promise.allSettled = r));
    },
    5118: function (e, t, n) {
      var i, r, o;
      !(function (a, s) {
        "use strict";
        (r = [n(2785)]),
          (i = function (e) {
            return {
              backtrace: function (t) {
                var n = [],
                  i = 10;
                "object" == typeof t &&
                  "number" == typeof t.maxStackSize &&
                  (i = t.maxStackSize);
                for (
                  var r = arguments.callee;
                  r && n.length < i && r.arguments;

                ) {
                  for (
                    var o = new Array(r.arguments.length), a = 0;
                    a < o.length;
                    ++a
                  )
                    o[a] = r.arguments[a];
                  /function(?:\s+([\w$]+))+\s*\(/.test(r.toString())
                    ? n.push(
                        new e({ functionName: RegExp.$1 || void 0, args: o })
                      )
                    : n.push(new e({ args: o }));
                  try {
                    r = r.caller;
                  } catch (e) {
                    break;
                  }
                }
                return n;
              },
            };
          }),
          void 0 === (o = i.apply(t, r)) || (e.exports = o);
      })();
    },
    2785: function (e, t) {
      var n, i, r;
      !(function (o, a) {
        "use strict";
        (i = []),
          void 0 ===
            (r =
              "function" ==
              typeof (n = function () {
                function e(e) {
                  return e.charAt(0).toUpperCase() + e.substring(1);
                }
                function t(e) {
                  return function () {
                    return this[e];
                  };
                }
                var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                  i = ["columnNumber", "lineNumber"],
                  r = ["fileName", "functionName", "source"],
                  o = n.concat(i, r, ["args"], ["evalOrigin"]);
                function a(t) {
                  if (t)
                    for (var n = 0; n < o.length; n++)
                      void 0 !== t[o[n]] && this["set" + e(o[n])](t[o[n]]);
                }
                (a.prototype = {
                  getArgs: function () {
                    return this.args;
                  },
                  setArgs: function (e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e))
                      throw new TypeError("Args must be an Array");
                    this.args = e;
                  },
                  getEvalOrigin: function () {
                    return this.evalOrigin;
                  },
                  setEvalOrigin: function (e) {
                    if (e instanceof a) this.evalOrigin = e;
                    else {
                      if (!(e instanceof Object))
                        throw new TypeError(
                          "Eval Origin must be an Object or StackFrame"
                        );
                      this.evalOrigin = new a(e);
                    }
                  },
                  toString: function () {
                    var e = this.getFileName() || "",
                      t = this.getLineNumber() || "",
                      n = this.getColumnNumber() || "",
                      i = this.getFunctionName() || "";
                    return this.getIsEval()
                      ? e
                        ? "[eval] (" + e + ":" + t + ":" + n + ")"
                        : "[eval]:" + t + ":" + n
                      : i
                      ? i + " (" + e + ":" + t + ":" + n + ")"
                      : e + ":" + t + ":" + n;
                  },
                }),
                  (a.fromString = function (e) {
                    var t = e.indexOf("("),
                      n = e.lastIndexOf(")"),
                      i = e.substring(0, t),
                      r = e.substring(t + 1, n).split(","),
                      o = e.substring(n + 1);
                    if (0 === o.indexOf("@"))
                      var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                        c = s[1],
                        l = s[2],
                        u = s[3];
                    return new a({
                      functionName: i,
                      args: r || void 0,
                      fileName: c,
                      lineNumber: l || void 0,
                      columnNumber: u || void 0,
                    });
                  });
                for (var s = 0; s < n.length; s++)
                  (a.prototype["get" + e(n[s])] = t(n[s])),
                    (a.prototype["set" + e(n[s])] = (function (e) {
                      return function (t) {
                        this[e] = Boolean(t);
                      };
                    })(n[s]));
                for (var c = 0; c < i.length; c++)
                  (a.prototype["get" + e(i[c])] = t(i[c])),
                    (a.prototype["set" + e(i[c])] = (function (e) {
                      return function (t) {
                        if (((n = t), isNaN(parseFloat(n)) || !isFinite(n)))
                          throw new TypeError(e + " must be a Number");
                        var n;
                        this[e] = Number(t);
                      };
                    })(i[c]));
                for (var l = 0; l < r.length; l++)
                  (a.prototype["get" + e(r[l])] = t(r[l])),
                    (a.prototype["set" + e(r[l])] = (function (e) {
                      return function (t) {
                        this[e] = String(t);
                      };
                    })(r[l]));
                return a;
              })
                ? n.apply(t, i)
                : n) || (e.exports = r);
      })();
    },
    4901: function (e, t, n) {
      var i = n(1340),
        r = Object.prototype.hasOwnProperty;
      function o() {
        (this._array = []), (this._set = Object.create(null));
      }
      (o.fromArray = function (e, t) {
        for (var n = new o(), i = 0, r = e.length; i < r; i++) n.add(e[i], t);
        return n;
      }),
        (o.prototype.size = function () {
          return Object.getOwnPropertyNames(this._set).length;
        }),
        (o.prototype.add = function (e, t) {
          var n = i.toSetString(e),
            o = r.call(this._set, n),
            a = this._array.length;
          (o && !t) || this._array.push(e), o || (this._set[n] = a);
        }),
        (o.prototype.has = function (e) {
          var t = i.toSetString(e);
          return r.call(this._set, t);
        }),
        (o.prototype.indexOf = function (e) {
          var t = i.toSetString(e);
          if (r.call(this._set, t)) return this._set[t];
          throw new Error('"' + e + '" is not in the set.');
        }),
        (o.prototype.at = function (e) {
          if (e >= 0 && e < this._array.length) return this._array[e];
          throw new Error("No element indexed by " + e);
        }),
        (o.prototype.toArray = function () {
          return this._array.slice();
        }),
        (t.I = o);
    },
    5415: function (e, t, n) {
      var i = n(5367);
      (t.encode = function (e) {
        var t,
          n = "",
          r = (function (e) {
            return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
          })(e);
        do {
          (t = 31 & r), (r >>>= 5) > 0 && (t |= 32), (n += i.encode(t));
        } while (r > 0);
        return n;
      }),
        (t.decode = function (e, t, n) {
          var r,
            o,
            a,
            s,
            c = e.length,
            l = 0,
            u = 0;
          do {
            if (t >= c)
              throw new Error("Expected more digits in base 64 VLQ value.");
            if (-1 === (o = i.decode(e.charCodeAt(t++))))
              throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
            (r = !!(32 & o)), (l += (o &= 31) << u), (u += 5);
          } while (r);
          (n.value = ((s = (a = l) >> 1), 1 == (1 & a) ? -s : s)), (n.rest = t);
        });
    },
    5367: function (e, t) {
      var n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
          ""
        );
      (t.encode = function (e) {
        if (0 <= e && e < n.length) return n[e];
        throw new TypeError("Must be between 0 and 63: " + e);
      }),
        (t.decode = function (e) {
          return 65 <= e && e <= 90
            ? e - 65
            : 97 <= e && e <= 122
            ? e - 97 + 26
            : 48 <= e && e <= 57
            ? e - 48 + 52
            : 43 == e
            ? 62
            : 47 == e
            ? 63
            : -1;
        });
    },
    8164: function (e, t) {
      function n(e, i, r, o, a, s) {
        var c = Math.floor((i - e) / 2) + e,
          l = a(r, o[c], !0);
        return 0 === l
          ? c
          : l > 0
          ? i - c > 1
            ? n(c, i, r, o, a, s)
            : s == t.LEAST_UPPER_BOUND
            ? i < o.length
              ? i
              : -1
            : c
          : c - e > 1
          ? n(e, c, r, o, a, s)
          : s == t.LEAST_UPPER_BOUND
          ? c
          : e < 0
          ? -1
          : e;
      }
      (t.GREATEST_LOWER_BOUND = 1),
        (t.LEAST_UPPER_BOUND = 2),
        (t.search = function (e, i, r, o) {
          if (0 === i.length) return -1;
          var a = n(-1, i.length, e, i, r, o || t.GREATEST_LOWER_BOUND);
          if (a < 0) return -1;
          for (; a - 1 >= 0 && 0 === r(i[a], i[a - 1], !0); ) --a;
          return a;
        });
    },
    3120: function (e, t, n) {
      var i = n(1340);
      function r() {
        (this._array = []),
          (this._sorted = !0),
          (this._last = { generatedLine: -1, generatedColumn: 0 });
      }
      (r.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t);
      }),
        (r.prototype.add = function (e) {
          var t, n, r, o, a, s;
          (n = e),
            (r = (t = this._last).generatedLine),
            (o = n.generatedLine),
            (a = t.generatedColumn),
            (s = n.generatedColumn),
            o > r ||
            (o == r && s >= a) ||
            i.compareByGeneratedPositionsInflated(t, n) <= 0
              ? ((this._last = e), this._array.push(e))
              : ((this._sorted = !1), this._array.push(e));
        }),
        (r.prototype.toArray = function () {
          return (
            this._sorted ||
              (this._array.sort(i.compareByGeneratedPositionsInflated),
              (this._sorted = !0)),
            this._array
          );
        }),
        (t.H = r);
    },
    732: function (e, t) {
      function n(e, t, n) {
        var i = e[t];
        (e[t] = e[n]), (e[n] = i);
      }
      function i(e, t, r, o) {
        if (r < o) {
          var a = r - 1;
          n(e, ((u = r), (d = o), Math.round(u + Math.random() * (d - u))), o);
          for (var s = e[o], c = r; c < o; c++)
            t(e[c], s) <= 0 && n(e, (a += 1), c);
          n(e, a + 1, c);
          var l = a + 1;
          i(e, t, r, l - 1), i(e, t, l + 1, o);
        }
        var u, d;
      }
      t.U = function (e, t) {
        i(e, t, 0, e.length - 1);
      };
    },
    3921: function (e, t, n) {
      var i = n(1340),
        r = n(8164),
        o = n(4901).I,
        a = n(5415),
        s = n(732).U;
      function c(e) {
        var t = e;
        return (
          "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))),
          null != t.sections ? new d(t) : new l(t)
        );
      }
      function l(e) {
        var t = e;
        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
        var n = i.getArg(t, "version"),
          r = i.getArg(t, "sources"),
          a = i.getArg(t, "names", []),
          s = i.getArg(t, "sourceRoot", null),
          c = i.getArg(t, "sourcesContent", null),
          l = i.getArg(t, "mappings"),
          u = i.getArg(t, "file", null);
        if (n != this._version) throw new Error("Unsupported version: " + n);
        (r = r
          .map(String)
          .map(i.normalize)
          .map(function (e) {
            return s && i.isAbsolute(s) && i.isAbsolute(e)
              ? i.relative(s, e)
              : e;
          })),
          (this._names = o.fromArray(a.map(String), !0)),
          (this._sources = o.fromArray(r, !0)),
          (this.sourceRoot = s),
          (this.sourcesContent = c),
          (this._mappings = l),
          (this.file = u);
      }
      function u() {
        (this.generatedLine = 0),
          (this.generatedColumn = 0),
          (this.source = null),
          (this.originalLine = null),
          (this.originalColumn = null),
          (this.name = null);
      }
      function d(e) {
        var t = e;
        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
        var n = i.getArg(t, "version"),
          r = i.getArg(t, "sections");
        if (n != this._version) throw new Error("Unsupported version: " + n);
        (this._sources = new o()), (this._names = new o());
        var a = { line: -1, column: 0 };
        this._sections = r.map(function (e) {
          if (e.url)
            throw new Error(
              "Support for url field in sections not implemented."
            );
          var t = i.getArg(e, "offset"),
            n = i.getArg(t, "line"),
            r = i.getArg(t, "column");
          if (n < a.line || (n === a.line && r < a.column))
            throw new Error(
              "Section offsets must be ordered and non-overlapping."
            );
          return (
            (a = t),
            {
              generatedOffset: { generatedLine: n + 1, generatedColumn: r + 1 },
              consumer: new c(i.getArg(e, "map")),
            }
          );
        });
      }
      (c.fromSourceMap = function (e) {
        return l.fromSourceMap(e);
      }),
        (c.prototype._version = 3),
        (c.prototype.__generatedMappings = null),
        Object.defineProperty(c.prototype, "_generatedMappings", {
          get: function () {
            return (
              this.__generatedMappings ||
                this._parseMappings(this._mappings, this.sourceRoot),
              this.__generatedMappings
            );
          },
        }),
        (c.prototype.__originalMappings = null),
        Object.defineProperty(c.prototype, "_originalMappings", {
          get: function () {
            return (
              this.__originalMappings ||
                this._parseMappings(this._mappings, this.sourceRoot),
              this.__originalMappings
            );
          },
        }),
        (c.prototype._charIsMappingSeparator = function (e, t) {
          var n = e.charAt(t);
          return ";" === n || "," === n;
        }),
        (c.prototype._parseMappings = function (e, t) {
          throw new Error("Subclasses must implement _parseMappings");
        }),
        (c.GENERATED_ORDER = 1),
        (c.ORIGINAL_ORDER = 2),
        (c.GREATEST_LOWER_BOUND = 1),
        (c.LEAST_UPPER_BOUND = 2),
        (c.prototype.eachMapping = function (e, t, n) {
          var r,
            o = t || null;
          switch (n || c.GENERATED_ORDER) {
            case c.GENERATED_ORDER:
              r = this._generatedMappings;
              break;
            case c.ORIGINAL_ORDER:
              r = this._originalMappings;
              break;
            default:
              throw new Error("Unknown order of iteration.");
          }
          var a = this.sourceRoot;
          r.map(function (e) {
            var t = null === e.source ? null : this._sources.at(e.source);
            return (
              null != t && null != a && (t = i.join(a, t)),
              {
                source: t,
                generatedLine: e.generatedLine,
                generatedColumn: e.generatedColumn,
                originalLine: e.originalLine,
                originalColumn: e.originalColumn,
                name: null === e.name ? null : this._names.at(e.name),
              }
            );
          }, this).forEach(e, o);
        }),
        (c.prototype.allGeneratedPositionsFor = function (e) {
          var t = i.getArg(e, "line"),
            n = {
              source: i.getArg(e, "source"),
              originalLine: t,
              originalColumn: i.getArg(e, "column", 0),
            };
          if (
            (null != this.sourceRoot &&
              (n.source = i.relative(this.sourceRoot, n.source)),
            !this._sources.has(n.source))
          )
            return [];
          n.source = this._sources.indexOf(n.source);
          var o = [],
            a = this._findMapping(
              n,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              i.compareByOriginalPositions,
              r.LEAST_UPPER_BOUND
            );
          if (a >= 0) {
            var s = this._originalMappings[a];
            if (void 0 === e.column)
              for (var c = s.originalLine; s && s.originalLine === c; )
                o.push({
                  line: i.getArg(s, "generatedLine", null),
                  column: i.getArg(s, "generatedColumn", null),
                  lastColumn: i.getArg(s, "lastGeneratedColumn", null),
                }),
                  (s = this._originalMappings[++a]);
            else
              for (
                var l = s.originalColumn;
                s && s.originalLine === t && s.originalColumn == l;

              )
                o.push({
                  line: i.getArg(s, "generatedLine", null),
                  column: i.getArg(s, "generatedColumn", null),
                  lastColumn: i.getArg(s, "lastGeneratedColumn", null),
                }),
                  (s = this._originalMappings[++a]);
          }
          return o;
        }),
        (t.SourceMapConsumer = c),
        (l.prototype = Object.create(c.prototype)),
        (l.prototype.consumer = c),
        (l.fromSourceMap = function (e) {
          var t = Object.create(l.prototype),
            n = (t._names = o.fromArray(e._names.toArray(), !0)),
            r = (t._sources = o.fromArray(e._sources.toArray(), !0));
          (t.sourceRoot = e._sourceRoot),
            (t.sourcesContent = e._generateSourcesContent(
              t._sources.toArray(),
              t.sourceRoot
            )),
            (t.file = e._file);
          for (
            var a = e._mappings.toArray().slice(),
              c = (t.__generatedMappings = []),
              d = (t.__originalMappings = []),
              f = 0,
              p = a.length;
            f < p;
            f++
          ) {
            var h = a[f],
              g = new u();
            (g.generatedLine = h.generatedLine),
              (g.generatedColumn = h.generatedColumn),
              h.source &&
                ((g.source = r.indexOf(h.source)),
                (g.originalLine = h.originalLine),
                (g.originalColumn = h.originalColumn),
                h.name && (g.name = n.indexOf(h.name)),
                d.push(g)),
              c.push(g);
          }
          return s(t.__originalMappings, i.compareByOriginalPositions), t;
        }),
        (l.prototype._version = 3),
        Object.defineProperty(l.prototype, "sources", {
          get: function () {
            return this._sources.toArray().map(function (e) {
              return null != this.sourceRoot ? i.join(this.sourceRoot, e) : e;
            }, this);
          },
        }),
        (l.prototype._parseMappings = function (e, t) {
          for (
            var n,
              r,
              o,
              c,
              l,
              d = 1,
              f = 0,
              p = 0,
              h = 0,
              g = 0,
              m = 0,
              v = e.length,
              y = 0,
              _ = {},
              x = {},
              b = [],
              C = [];
            y < v;

          )
            if (";" === e.charAt(y)) d++, y++, (f = 0);
            else if ("," === e.charAt(y)) y++;
            else {
              for (
                (n = new u()).generatedLine = d, c = y;
                c < v && !this._charIsMappingSeparator(e, c);
                c++
              );
              if ((o = _[(r = e.slice(y, c))])) y += r.length;
              else {
                for (o = []; y < c; )
                  a.decode(e, y, x), (l = x.value), (y = x.rest), o.push(l);
                if (2 === o.length)
                  throw new Error("Found a source, but no line and column");
                if (3 === o.length)
                  throw new Error("Found a source and line, but no column");
                _[r] = o;
              }
              (n.generatedColumn = f + o[0]),
                (f = n.generatedColumn),
                o.length > 1 &&
                  ((n.source = g + o[1]),
                  (g += o[1]),
                  (n.originalLine = p + o[2]),
                  (p = n.originalLine),
                  (n.originalLine += 1),
                  (n.originalColumn = h + o[3]),
                  (h = n.originalColumn),
                  o.length > 4 && ((n.name = m + o[4]), (m += o[4]))),
                C.push(n),
                "number" == typeof n.originalLine && b.push(n);
            }
          s(C, i.compareByGeneratedPositionsDeflated),
            (this.__generatedMappings = C),
            s(b, i.compareByOriginalPositions),
            (this.__originalMappings = b);
        }),
        (l.prototype._findMapping = function (e, t, n, i, o, a) {
          if (e[n] <= 0)
            throw new TypeError(
              "Line must be greater than or equal to 1, got " + e[n]
            );
          if (e[i] < 0)
            throw new TypeError(
              "Column must be greater than or equal to 0, got " + e[i]
            );
          return r.search(e, t, o, a);
        }),
        (l.prototype.computeColumnSpans = function () {
          for (var e = 0; e < this._generatedMappings.length; ++e) {
            var t = this._generatedMappings[e];
            if (e + 1 < this._generatedMappings.length) {
              var n = this._generatedMappings[e + 1];
              if (t.generatedLine === n.generatedLine) {
                t.lastGeneratedColumn = n.generatedColumn - 1;
                continue;
              }
            }
            t.lastGeneratedColumn = 1 / 0;
          }
        }),
        (l.prototype.originalPositionFor = function (e) {
          var t = {
              generatedLine: i.getArg(e, "line"),
              generatedColumn: i.getArg(e, "column"),
            },
            n = this._findMapping(
              t,
              this._generatedMappings,
              "generatedLine",
              "generatedColumn",
              i.compareByGeneratedPositionsDeflated,
              i.getArg(e, "bias", c.GREATEST_LOWER_BOUND)
            );
          if (n >= 0) {
            var r = this._generatedMappings[n];
            if (r.generatedLine === t.generatedLine) {
              var o = i.getArg(r, "source", null);
              null !== o &&
                ((o = this._sources.at(o)),
                null != this.sourceRoot && (o = i.join(this.sourceRoot, o)));
              var a = i.getArg(r, "name", null);
              return (
                null !== a && (a = this._names.at(a)),
                {
                  source: o,
                  line: i.getArg(r, "originalLine", null),
                  column: i.getArg(r, "originalColumn", null),
                  name: a,
                }
              );
            }
          }
          return { source: null, line: null, column: null, name: null };
        }),
        (l.prototype.hasContentsOfAllSources = function () {
          return (
            !!this.sourcesContent &&
            this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (e) {
              return null == e;
            })
          );
        }),
        (l.prototype.sourceContentFor = function (e, t) {
          if (!this.sourcesContent) return null;
          if (
            (null != this.sourceRoot && (e = i.relative(this.sourceRoot, e)),
            this._sources.has(e))
          )
            return this.sourcesContent[this._sources.indexOf(e)];
          var n;
          if (null != this.sourceRoot && (n = i.urlParse(this.sourceRoot))) {
            var r = e.replace(/^file:\/\//, "");
            if ("file" == n.scheme && this._sources.has(r))
              return this.sourcesContent[this._sources.indexOf(r)];
            if ((!n.path || "/" == n.path) && this._sources.has("/" + e))
              return this.sourcesContent[this._sources.indexOf("/" + e)];
          }
          if (t) return null;
          throw new Error('"' + e + '" is not in the SourceMap.');
        }),
        (l.prototype.generatedPositionFor = function (e) {
          var t = i.getArg(e, "source");
          if (
            (null != this.sourceRoot && (t = i.relative(this.sourceRoot, t)),
            !this._sources.has(t))
          )
            return { line: null, column: null, lastColumn: null };
          var n = {
              source: (t = this._sources.indexOf(t)),
              originalLine: i.getArg(e, "line"),
              originalColumn: i.getArg(e, "column"),
            },
            r = this._findMapping(
              n,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              i.compareByOriginalPositions,
              i.getArg(e, "bias", c.GREATEST_LOWER_BOUND)
            );
          if (r >= 0) {
            var o = this._originalMappings[r];
            if (o.source === n.source)
              return {
                line: i.getArg(o, "generatedLine", null),
                column: i.getArg(o, "generatedColumn", null),
                lastColumn: i.getArg(o, "lastGeneratedColumn", null),
              };
          }
          return { line: null, column: null, lastColumn: null };
        }),
        (d.prototype = Object.create(c.prototype)),
        (d.prototype.constructor = c),
        (d.prototype._version = 3),
        Object.defineProperty(d.prototype, "sources", {
          get: function () {
            for (var e = [], t = 0; t < this._sections.length; t++)
              for (
                var n = 0;
                n < this._sections[t].consumer.sources.length;
                n++
              )
                e.push(this._sections[t].consumer.sources[n]);
            return e;
          },
        }),
        (d.prototype.originalPositionFor = function (e) {
          var t = {
              generatedLine: i.getArg(e, "line"),
              generatedColumn: i.getArg(e, "column"),
            },
            n = r.search(t, this._sections, function (e, t) {
              return (
                e.generatedLine - t.generatedOffset.generatedLine ||
                e.generatedColumn - t.generatedOffset.generatedColumn
              );
            }),
            o = this._sections[n];
          return o
            ? o.consumer.originalPositionFor({
                line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
                column:
                  t.generatedColumn -
                  (o.generatedOffset.generatedLine === t.generatedLine
                    ? o.generatedOffset.generatedColumn - 1
                    : 0),
                bias: e.bias,
              })
            : { source: null, line: null, column: null, name: null };
        }),
        (d.prototype.hasContentsOfAllSources = function () {
          return this._sections.every(function (e) {
            return e.consumer.hasContentsOfAllSources();
          });
        }),
        (d.prototype.sourceContentFor = function (e, t) {
          for (var n = 0; n < this._sections.length; n++) {
            var i = this._sections[n].consumer.sourceContentFor(e, !0);
            if (i) return i;
          }
          if (t) return null;
          throw new Error('"' + e + '" is not in the SourceMap.');
        }),
        (d.prototype.generatedPositionFor = function (e) {
          for (var t = 0; t < this._sections.length; t++) {
            var n = this._sections[t];
            if (-1 !== n.consumer.sources.indexOf(i.getArg(e, "source"))) {
              var r = n.consumer.generatedPositionFor(e);
              if (r)
                return {
                  line: r.line + (n.generatedOffset.generatedLine - 1),
                  column:
                    r.column +
                    (n.generatedOffset.generatedLine === r.line
                      ? n.generatedOffset.generatedColumn - 1
                      : 0),
                };
            }
          }
          return { line: null, column: null };
        }),
        (d.prototype._parseMappings = function (e, t) {
          (this.__generatedMappings = []), (this.__originalMappings = []);
          for (var n = 0; n < this._sections.length; n++)
            for (
              var r = this._sections[n],
                o = r.consumer._generatedMappings,
                a = 0;
              a < o.length;
              a++
            ) {
              var c = o[a],
                l = r.consumer._sources.at(c.source);
              null !== r.consumer.sourceRoot &&
                (l = i.join(r.consumer.sourceRoot, l)),
                this._sources.add(l),
                (l = this._sources.indexOf(l));
              var u = r.consumer._names.at(c.name);
              this._names.add(u), (u = this._names.indexOf(u));
              var d = {
                source: l,
                generatedLine:
                  c.generatedLine + (r.generatedOffset.generatedLine - 1),
                generatedColumn:
                  c.generatedColumn +
                  (r.generatedOffset.generatedLine === c.generatedLine
                    ? r.generatedOffset.generatedColumn - 1
                    : 0),
                originalLine: c.originalLine,
                originalColumn: c.originalColumn,
                name: u,
              };
              this.__generatedMappings.push(d),
                "number" == typeof d.originalLine &&
                  this.__originalMappings.push(d);
            }
          s(this.__generatedMappings, i.compareByGeneratedPositionsDeflated),
            s(this.__originalMappings, i.compareByOriginalPositions);
        });
    },
    5286: function (e, t, n) {
      var i = n(5415),
        r = n(1340),
        o = n(4901).I,
        a = n(3120).H;
      function s(e) {
        e || (e = {}),
          (this._file = r.getArg(e, "file", null)),
          (this._sourceRoot = r.getArg(e, "sourceRoot", null)),
          (this._skipValidation = r.getArg(e, "skipValidation", !1)),
          (this._sources = new o()),
          (this._names = new o()),
          (this._mappings = new a()),
          (this._sourcesContents = null);
      }
      (s.prototype._version = 3),
        (s.fromSourceMap = function (e) {
          var t = e.sourceRoot,
            n = new s({ file: e.file, sourceRoot: t });
          return (
            e.eachMapping(function (e) {
              var i = {
                generated: { line: e.generatedLine, column: e.generatedColumn },
              };
              null != e.source &&
                ((i.source = e.source),
                null != t && (i.source = r.relative(t, i.source)),
                (i.original = {
                  line: e.originalLine,
                  column: e.originalColumn,
                }),
                null != e.name && (i.name = e.name)),
                n.addMapping(i);
            }),
            e.sources.forEach(function (t) {
              var i = e.sourceContentFor(t);
              null != i && n.setSourceContent(t, i);
            }),
            n
          );
        }),
        (s.prototype.addMapping = function (e) {
          var t = r.getArg(e, "generated"),
            n = r.getArg(e, "original", null),
            i = r.getArg(e, "source", null),
            o = r.getArg(e, "name", null);
          this._skipValidation || this._validateMapping(t, n, i, o),
            null != i &&
              ((i = String(i)), this._sources.has(i) || this._sources.add(i)),
            null != o &&
              ((o = String(o)), this._names.has(o) || this._names.add(o)),
            this._mappings.add({
              generatedLine: t.line,
              generatedColumn: t.column,
              originalLine: null != n && n.line,
              originalColumn: null != n && n.column,
              source: i,
              name: o,
            });
        }),
        (s.prototype.setSourceContent = function (e, t) {
          var n = e;
          null != this._sourceRoot && (n = r.relative(this._sourceRoot, n)),
            null != t
              ? (this._sourcesContents ||
                  (this._sourcesContents = Object.create(null)),
                (this._sourcesContents[r.toSetString(n)] = t))
              : this._sourcesContents &&
                (delete this._sourcesContents[r.toSetString(n)],
                0 === Object.keys(this._sourcesContents).length &&
                  (this._sourcesContents = null));
        }),
        (s.prototype.applySourceMap = function (e, t, n) {
          var i = t;
          if (null == t) {
            if (null == e.file)
              throw new Error(
                'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.'
              );
            i = e.file;
          }
          var a = this._sourceRoot;
          null != a && (i = r.relative(a, i));
          var s = new o(),
            c = new o();
          this._mappings.unsortedForEach(function (t) {
            if (t.source === i && null != t.originalLine) {
              var o = e.originalPositionFor({
                line: t.originalLine,
                column: t.originalColumn,
              });
              null != o.source &&
                ((t.source = o.source),
                null != n && (t.source = r.join(n, t.source)),
                null != a && (t.source = r.relative(a, t.source)),
                (t.originalLine = o.line),
                (t.originalColumn = o.column),
                null != o.name && (t.name = o.name));
            }
            var l = t.source;
            null == l || s.has(l) || s.add(l);
            var u = t.name;
            null == u || c.has(u) || c.add(u);
          }, this),
            (this._sources = s),
            (this._names = c),
            e.sources.forEach(function (t) {
              var i = e.sourceContentFor(t);
              null != i &&
                (null != n && (t = r.join(n, t)),
                null != a && (t = r.relative(a, t)),
                this.setSourceContent(t, i));
            }, this);
        }),
        (s.prototype._validateMapping = function (e, t, n, i) {
          if (
            (!(
              e &&
              "line" in e &&
              "column" in e &&
              e.line > 0 &&
              e.column >= 0
            ) ||
              t ||
              n ||
              i) &&
            !(
              e &&
              "line" in e &&
              "column" in e &&
              t &&
              "line" in t &&
              "column" in t &&
              e.line > 0 &&
              e.column >= 0 &&
              t.line > 0 &&
              t.column >= 0 &&
              n
            )
          )
            throw new Error(
              "Invalid mapping: " +
                JSON.stringify({
                  generated: e,
                  source: n,
                  original: t,
                  name: i,
                })
            );
        }),
        (s.prototype._serializeMappings = function () {
          for (
            var e,
              t,
              n,
              o,
              a = 0,
              s = 1,
              c = 0,
              l = 0,
              u = 0,
              d = 0,
              f = "",
              p = this._mappings.toArray(),
              h = 0,
              g = p.length;
            h < g;
            h++
          ) {
            if (((e = ""), (t = p[h]).generatedLine !== s))
              for (a = 0; t.generatedLine !== s; ) (e += ";"), s++;
            else if (h > 0) {
              if (!r.compareByGeneratedPositionsInflated(t, p[h - 1])) continue;
              e += ",";
            }
            (e += i.encode(t.generatedColumn - a)),
              (a = t.generatedColumn),
              null != t.source &&
                ((o = this._sources.indexOf(t.source)),
                (e += i.encode(o - d)),
                (d = o),
                (e += i.encode(t.originalLine - 1 - l)),
                (l = t.originalLine - 1),
                (e += i.encode(t.originalColumn - c)),
                (c = t.originalColumn),
                null != t.name &&
                  ((n = this._names.indexOf(t.name)),
                  (e += i.encode(n - u)),
                  (u = n))),
              (f += e);
          }
          return f;
        }),
        (s.prototype._generateSourcesContent = function (e, t) {
          return e.map(function (e) {
            if (!this._sourcesContents) return null;
            null != t && (e = r.relative(t, e));
            var n = r.toSetString(e);
            return Object.prototype.hasOwnProperty.call(
              this._sourcesContents,
              n
            )
              ? this._sourcesContents[n]
              : null;
          }, this);
        }),
        (s.prototype.toJSON = function () {
          var e = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings(),
          };
          return (
            null != this._file && (e.file = this._file),
            null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
            this._sourcesContents &&
              (e.sourcesContent = this._generateSourcesContent(
                e.sources,
                e.sourceRoot
              )),
            e
          );
        }),
        (s.prototype.toString = function () {
          return JSON.stringify(this.toJSON());
        }),
        (t.SourceMapGenerator = s);
    },
    3081: function (e, t, n) {
      var i = n(5286).SourceMapGenerator,
        r = n(1340),
        o = /(\r?\n)/,
        a = "$$$isSourceNode$$$";
      function s(e, t, n, i, r) {
        (this.children = []),
          (this.sourceContents = {}),
          (this.line = null == e ? null : e),
          (this.column = null == t ? null : t),
          (this.source = null == n ? null : n),
          (this.name = null == r ? null : r),
          (this[a] = !0),
          null != i && this.add(i);
      }
      (s.fromStringWithSourceMap = function (e, t, n) {
        var i = new s(),
          a = e.split(o),
          c = function () {
            return a.shift() + (a.shift() || "");
          },
          l = 1,
          u = 0,
          d = null;
        return (
          t.eachMapping(function (e) {
            if (null !== d) {
              if (!(l < e.generatedLine)) {
                var t = (n = a[0]).substr(0, e.generatedColumn - u);
                return (
                  (a[0] = n.substr(e.generatedColumn - u)),
                  (u = e.generatedColumn),
                  f(d, t),
                  void (d = e)
                );
              }
              f(d, c()), l++, (u = 0);
            }
            for (; l < e.generatedLine; ) i.add(c()), l++;
            if (u < e.generatedColumn) {
              var n = a[0];
              i.add(n.substr(0, e.generatedColumn)),
                (a[0] = n.substr(e.generatedColumn)),
                (u = e.generatedColumn);
            }
            d = e;
          }, this),
          a.length > 0 && (d && f(d, c()), i.add(a.join(""))),
          t.sources.forEach(function (e) {
            var o = t.sourceContentFor(e);
            null != o &&
              (null != n && (e = r.join(n, e)), i.setSourceContent(e, o));
          }),
          i
        );
        function f(e, t) {
          if (null === e || void 0 === e.source) i.add(t);
          else {
            var o = n ? r.join(n, e.source) : e.source;
            i.add(new s(e.originalLine, e.originalColumn, o, t, e.name));
          }
        }
      }),
        (s.prototype.add = function (e) {
          if (Array.isArray(e))
            e.forEach(function (e) {
              this.add(e);
            }, this);
          else {
            if (!e[a] && "string" != typeof e)
              throw new TypeError(
                "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                  e
              );
            e && this.children.push(e);
          }
          return this;
        }),
        (s.prototype.prepend = function (e) {
          if (Array.isArray(e))
            for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
          else {
            if (!e[a] && "string" != typeof e)
              throw new TypeError(
                "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                  e
              );
            this.children.unshift(e);
          }
          return this;
        }),
        (s.prototype.walk = function (e) {
          for (var t, n = 0, i = this.children.length; n < i; n++)
            (t = this.children[n])[a]
              ? t.walk(e)
              : "" !== t &&
                e(t, {
                  source: this.source,
                  line: this.line,
                  column: this.column,
                  name: this.name,
                });
        }),
        (s.prototype.join = function (e) {
          var t,
            n,
            i = this.children.length;
          if (i > 0) {
            for (t = [], n = 0; n < i - 1; n++)
              t.push(this.children[n]), t.push(e);
            t.push(this.children[n]), (this.children = t);
          }
          return this;
        }),
        (s.prototype.replaceRight = function (e, t) {
          var n = this.children[this.children.length - 1];
          return (
            n[a]
              ? n.replaceRight(e, t)
              : "string" == typeof n
              ? (this.children[this.children.length - 1] = n.replace(e, t))
              : this.children.push("".replace(e, t)),
            this
          );
        }),
        (s.prototype.setSourceContent = function (e, t) {
          this.sourceContents[r.toSetString(e)] = t;
        }),
        (s.prototype.walkSourceContents = function (e) {
          for (var t = 0, n = this.children.length; t < n; t++)
            this.children[t][a] && this.children[t].walkSourceContents(e);
          var i = Object.keys(this.sourceContents);
          for (t = 0, n = i.length; t < n; t++)
            e(r.fromSetString(i[t]), this.sourceContents[i[t]]);
        }),
        (s.prototype.toString = function () {
          var e = "";
          return (
            this.walk(function (t) {
              e += t;
            }),
            e
          );
        }),
        (s.prototype.toStringWithSourceMap = function (e) {
          var t = { code: "", line: 1, column: 0 },
            n = new i(e),
            r = !1,
            o = null,
            a = null,
            s = null,
            c = null;
          return (
            this.walk(function (e, i) {
              (t.code += e),
                null !== i.source && null !== i.line && null !== i.column
                  ? ((o === i.source &&
                      a === i.line &&
                      s === i.column &&
                      c === i.name) ||
                      n.addMapping({
                        source: i.source,
                        original: { line: i.line, column: i.column },
                        generated: { line: t.line, column: t.column },
                        name: i.name,
                      }),
                    (o = i.source),
                    (a = i.line),
                    (s = i.column),
                    (c = i.name),
                    (r = !0))
                  : r &&
                    (n.addMapping({
                      generated: { line: t.line, column: t.column },
                    }),
                    (o = null),
                    (r = !1));
              for (var l = 0, u = e.length; l < u; l++)
                10 === e.charCodeAt(l)
                  ? (t.line++,
                    (t.column = 0),
                    l + 1 === u
                      ? ((o = null), (r = !1))
                      : r &&
                        n.addMapping({
                          source: i.source,
                          original: { line: i.line, column: i.column },
                          generated: { line: t.line, column: t.column },
                          name: i.name,
                        }))
                  : t.column++;
            }),
            this.walkSourceContents(function (e, t) {
              n.setSourceContent(e, t);
            }),
            { code: t.code, map: n }
          );
        }),
        (t.SourceNode = s);
    },
    1340: function (e, t) {
      t.getArg = function (e, t, n) {
        if (t in e) return e[t];
        if (3 === arguments.length) return n;
        throw new Error('"' + t + '" is a required argument.');
      };
      var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
        i = /^data:.+\,.+$/;
      function r(e) {
        var t = e.match(n);
        return t
          ? { scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5] }
          : null;
      }
      function o(e) {
        var t = "";
        return (
          e.scheme && (t += e.scheme + ":"),
          (t += "//"),
          e.auth && (t += e.auth + "@"),
          e.host && (t += e.host),
          e.port && (t += ":" + e.port),
          e.path && (t += e.path),
          t
        );
      }
      function a(e) {
        var n = e,
          i = r(e);
        if (i) {
          if (!i.path) return e;
          n = i.path;
        }
        for (
          var a,
            s = t.isAbsolute(n),
            c = n.split(/\/+/),
            l = 0,
            u = c.length - 1;
          u >= 0;
          u--
        )
          "." === (a = c[u])
            ? c.splice(u, 1)
            : ".." === a
            ? l++
            : l > 0 &&
              ("" === a
                ? (c.splice(u + 1, l), (l = 0))
                : (c.splice(u, 2), l--));
        return (
          "" === (n = c.join("/")) && (n = s ? "/" : "."),
          i ? ((i.path = n), o(i)) : n
        );
      }
      (t.urlParse = r),
        (t.urlGenerate = o),
        (t.normalize = a),
        (t.join = function (e, t) {
          "" === e && (e = "."), "" === t && (t = ".");
          var n = r(t),
            s = r(e);
          if ((s && (e = s.path || "/"), n && !n.scheme))
            return s && (n.scheme = s.scheme), o(n);
          if (n || t.match(i)) return t;
          if (s && !s.host && !s.path) return (s.host = t), o(s);
          var c = "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
          return s ? ((s.path = c), o(s)) : c;
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0) || !!e.match(n);
        }),
        (t.relative = function (e, t) {
          "" === e && (e = "."), (e = e.replace(/\/$/, ""));
          for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
            var i = e.lastIndexOf("/");
            if (i < 0) return t;
            if ((e = e.slice(0, i)).match(/^([^\/]+:\/)?\/*$/)) return t;
            ++n;
          }
          return Array(n + 1).join("../") + t.substr(e.length + 1);
        });
      var s = !("__proto__" in Object.create(null));
      function c(e) {
        return e;
      }
      function l(e) {
        if (!e) return !1;
        var t = e.length;
        if (t < 9) return !1;
        if (
          95 !== e.charCodeAt(t - 1) ||
          95 !== e.charCodeAt(t - 2) ||
          111 !== e.charCodeAt(t - 3) ||
          116 !== e.charCodeAt(t - 4) ||
          111 !== e.charCodeAt(t - 5) ||
          114 !== e.charCodeAt(t - 6) ||
          112 !== e.charCodeAt(t - 7) ||
          95 !== e.charCodeAt(t - 8) ||
          95 !== e.charCodeAt(t - 9)
        )
          return !1;
        for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
        return !0;
      }
      function u(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      (t.toSetString = s
        ? c
        : function (e) {
            return l(e) ? "$" + e : e;
          }),
        (t.fromSetString = s
          ? c
          : function (e) {
              return l(e) ? e.slice(1) : e;
            }),
        (t.compareByOriginalPositions = function (e, t, n) {
          var i = e.source - t.source;
          return 0 !== i ||
            0 != (i = e.originalLine - t.originalLine) ||
            0 != (i = e.originalColumn - t.originalColumn) ||
            n ||
            0 != (i = e.generatedColumn - t.generatedColumn) ||
            0 != (i = e.generatedLine - t.generatedLine)
            ? i
            : e.name - t.name;
        }),
        (t.compareByGeneratedPositionsDeflated = function (e, t, n) {
          var i = e.generatedLine - t.generatedLine;
          return 0 !== i ||
            0 != (i = e.generatedColumn - t.generatedColumn) ||
            n ||
            0 != (i = e.source - t.source) ||
            0 != (i = e.originalLine - t.originalLine) ||
            0 != (i = e.originalColumn - t.originalColumn)
            ? i
            : e.name - t.name;
        }),
        (t.compareByGeneratedPositionsInflated = function (e, t) {
          var n = e.generatedLine - t.generatedLine;
          return 0 !== n ||
            0 != (n = e.generatedColumn - t.generatedColumn) ||
            0 !== (n = u(e.source, t.source)) ||
            0 != (n = e.originalLine - t.originalLine) ||
            0 != (n = e.originalColumn - t.originalColumn)
            ? n
            : u(e.name, t.name);
        });
    },
    210: function (e, t, n) {
      (t.SourceMapGenerator = n(5286).SourceMapGenerator),
        (t.SourceMapConsumer = n(3921).SourceMapConsumer),
        (t.SourceNode = n(3081).SourceNode);
    },
    5425: function (e, t, n) {
      var i, r, o;
      !(function (a, s) {
        "use strict";
        (r = [n(210), n(2785)]),
          void 0 ===
            (o =
              "function" ==
              typeof (i = function (e, t) {
                function n(e) {
                  return new Promise(function (t, n) {
                    var i = new XMLHttpRequest();
                    i.open("get", e),
                      (i.onerror = n),
                      (i.onreadystatechange = function () {
                        4 === i.readyState &&
                          ((i.status >= 200 && i.status < 300) ||
                          ("file://" === e.substr(0, 7) && i.responseText)
                            ? t(i.responseText)
                            : n(
                                new Error(
                                  "HTTP status: " +
                                    i.status +
                                    " retrieving " +
                                    e
                                )
                              ));
                      }),
                      i.send();
                  });
                }
                function i(e) {
                  if ("undefined" != typeof window && window.atob)
                    return window.atob(e);
                  throw new Error(
                    "You must supply a polyfill for window.atob in this environment"
                  );
                }
                function r(e) {
                  if ("object" != typeof e)
                    throw new TypeError("Given StackFrame is not an object");
                  if ("string" != typeof e.fileName)
                    throw new TypeError("Given file name is not a String");
                  if (
                    "number" != typeof e.lineNumber ||
                    e.lineNumber % 1 != 0 ||
                    e.lineNumber < 1
                  )
                    throw new TypeError(
                      "Given line number must be a positive integer"
                    );
                  if (
                    "number" != typeof e.columnNumber ||
                    e.columnNumber % 1 != 0 ||
                    e.columnNumber < 0
                  )
                    throw new TypeError(
                      "Given column number must be a non-negative integer"
                    );
                  return !0;
                }
                return function o(a) {
                  if (!(this instanceof o)) return new o(a);
                  (a = a || {}),
                    (this.sourceCache = a.sourceCache || {}),
                    (this.sourceMapConsumerCache =
                      a.sourceMapConsumerCache || {}),
                    (this.ajax = a.ajax || n),
                    (this._atob = a.atob || i),
                    (this._get = function (e) {
                      return new Promise(
                        function (t, n) {
                          var i = "data:" === e.substr(0, 5);
                          if (this.sourceCache[e]) t(this.sourceCache[e]);
                          else if (a.offline && !i)
                            n(
                              new Error(
                                "Cannot make network requests in offline mode"
                              )
                            );
                          else if (i) {
                            var r = e.match(
                              /^data:application\/json;([\w=:"-]+;)*base64,/
                            );
                            if (r) {
                              var o = r[0].length,
                                s = e.substr(o),
                                c = this._atob(s);
                              (this.sourceCache[e] = c), t(c);
                            } else
                              n(
                                new Error(
                                  "The encoding of the inline sourcemap is not supported"
                                )
                              );
                          } else {
                            var l = this.ajax(e, { method: "get" });
                            (this.sourceCache[e] = l), l.then(t, n);
                          }
                        }.bind(this)
                      );
                    }),
                    (this._getSourceMapConsumer = function (t, n) {
                      return new Promise(
                        function (i) {
                          if (this.sourceMapConsumerCache[t])
                            i(this.sourceMapConsumerCache[t]);
                          else {
                            var r = new Promise(
                              function (i, r) {
                                return this._get(t)
                                  .then(function (t) {
                                    "string" == typeof t &&
                                      (t = (function (e) {
                                        if (
                                          "undefined" != typeof JSON &&
                                          JSON.parse
                                        )
                                          return JSON.parse(e);
                                        throw new Error(
                                          "You must supply a polyfill for JSON.parse in this environment"
                                        );
                                      })(t.replace(/^\)\]\}'/, ""))),
                                      void 0 === t.sourceRoot &&
                                        (t.sourceRoot = n),
                                      i(new e.SourceMapConsumer(t));
                                  })
                                  .catch(r);
                              }.bind(this)
                            );
                            (this.sourceMapConsumerCache[t] = r), i(r);
                          }
                        }.bind(this)
                      );
                    }),
                    (this.pinpoint = function (e) {
                      return new Promise(
                        function (t, n) {
                          this.getMappedLocation(e).then(
                            function (e) {
                              function n() {
                                t(e);
                              }
                              this.findFunctionName(e).then(t, n).catch(n);
                            }.bind(this),
                            n
                          );
                        }.bind(this)
                      );
                    }),
                    (this.findFunctionName = function (e) {
                      return new Promise(
                        function (n, i) {
                          r(e),
                            this._get(e.fileName)
                              .then(function (i) {
                                var r = e.lineNumber,
                                  o = e.columnNumber,
                                  a = (function (e, t) {
                                    for (
                                      var n = [
                                          /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
                                          /function\s+([^('"`]*?)\s*\(([^)]*)\)/,
                                          /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
                                          /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/,
                                          /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/,
                                        ],
                                        i = e.split("\n"),
                                        r = "",
                                        o = Math.min(t, 20),
                                        a = 0;
                                      a < o;
                                      ++a
                                    ) {
                                      var s = i[t - a - 1],
                                        c = s.indexOf("//");
                                      if ((c >= 0 && (s = s.substr(0, c)), s)) {
                                        r = s + r;
                                        for (
                                          var l = n.length, u = 0;
                                          u < l;
                                          u++
                                        ) {
                                          var d = n[u].exec(r);
                                          if (d && d[1]) return d[1];
                                        }
                                      }
                                    }
                                  })(i, r);
                                n(
                                  a
                                    ? new t({
                                        functionName: a,
                                        args: e.args,
                                        fileName: e.fileName,
                                        lineNumber: r,
                                        columnNumber: o,
                                      })
                                    : e
                                );
                              }, i)
                              .catch(i);
                        }.bind(this)
                      );
                    }),
                    (this.getMappedLocation = function (e) {
                      return new Promise(
                        function (n, i) {
                          (function () {
                            if (
                              "function" != typeof Object.defineProperty ||
                              "function" != typeof Object.create
                            )
                              throw new Error(
                                "Unable to consume source maps in older browsers"
                              );
                          })(),
                            r(e);
                          var o = this.sourceCache,
                            a = e.fileName;
                          this._get(a)
                            .then(
                              function (i) {
                                var r = (function (e) {
                                    for (
                                      var t,
                                        n,
                                        i =
                                          /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm;
                                      (n = i.exec(e));

                                    )
                                      t = n[1];
                                    if (t) return t;
                                    throw new Error(
                                      "sourceMappingURL not found"
                                    );
                                  })(i),
                                  s = "data:" === r.substr(0, 5),
                                  c = a.substring(0, a.lastIndexOf("/") + 1);
                                return (
                                  "/" === r[0] ||
                                    s ||
                                    /^https?:\/\/|^\/\//i.test(r) ||
                                    (r = c + r),
                                  this._getSourceMapConsumer(r, c).then(
                                    function (i) {
                                      return (function (e, n, i) {
                                        return new Promise(function (r, o) {
                                          var a = n.originalPositionFor({
                                            line: e.lineNumber,
                                            column: e.columnNumber,
                                          });
                                          if (a.source) {
                                            var s = n.sourceContentFor(
                                              a.source
                                            );
                                            s && (i[a.source] = s),
                                              r(
                                                new t({
                                                  functionName:
                                                    a.name || e.functionName,
                                                  args: e.args,
                                                  fileName: a.source,
                                                  lineNumber: a.line,
                                                  columnNumber: a.column,
                                                })
                                              );
                                          } else o(new Error("Could not get original source for given stackframe and source map"));
                                        });
                                      })(e, i, o)
                                        .then(n)
                                        .catch(function () {
                                          n(e);
                                        });
                                    }
                                  )
                                );
                              }.bind(this),
                              i
                            )
                            .catch(i);
                        }.bind(this)
                      );
                    });
                };
              })
                ? i.apply(t, r)
                : i) || (e.exports = o);
      })();
    },
    2407: function (e, t, n) {
      var i, r, o;
      !(function (a, s) {
        "use strict";
        (r = [n(8732), n(5118), n(5425)]),
          (i = function (e, t, n) {
            var i = {
                filter: function (e) {
                  return (
                    -1 === (e.functionName || "").indexOf("StackTrace$$") &&
                    -1 ===
                      (e.functionName || "").indexOf("ErrorStackParser$$") &&
                    -1 === (e.functionName || "").indexOf("StackTraceGPS$$") &&
                    -1 === (e.functionName || "").indexOf("StackGenerator$$")
                  );
                },
                sourceCache: {},
              },
              r = function () {
                try {
                  throw new Error();
                } catch (e) {
                  return e;
                }
              };
            function o(e, t) {
              var n = {};
              return (
                [e, t].forEach(function (e) {
                  for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                  return n;
                }),
                n
              );
            }
            function a(e) {
              return e.stack || e["opera#sourceloc"];
            }
            function s(e, t) {
              return "function" == typeof t ? e.filter(t) : e;
            }
            return {
              get: function (e) {
                var t = r();
                return a(t)
                  ? this.fromError(t, e)
                  : this.generateArtificially(e);
              },
              getSync: function (n) {
                n = o(i, n);
                var c = r();
                return s(a(c) ? e.parse(c) : t.backtrace(n), n.filter);
              },
              fromError: function (t, r) {
                r = o(i, r);
                var a = new n(r);
                return new Promise(
                  function (n) {
                    var i = s(e.parse(t), r.filter);
                    n(
                      Promise.all(
                        i.map(function (e) {
                          return new Promise(function (t) {
                            function n() {
                              t(e);
                            }
                            a.pinpoint(e).then(t, n).catch(n);
                          });
                        })
                      )
                    );
                  }.bind(this)
                );
              },
              generateArtificially: function (e) {
                e = o(i, e);
                var n = t.backtrace(e);
                return (
                  "function" == typeof e.filter && (n = n.filter(e.filter)),
                  Promise.resolve(n)
                );
              },
              instrument: function (e, t, n, i) {
                if ("function" != typeof e)
                  throw new Error("Cannot instrument non-function object");
                if ("function" == typeof e.__stacktraceOriginalFn) return e;
                var r = function () {
                  try {
                    return (
                      this.get().then(t, n).catch(n),
                      e.apply(i || this, arguments)
                    );
                  } catch (e) {
                    throw (a(e) && this.fromError(e).then(t, n).catch(n), e);
                  }
                }.bind(this);
                return (r.__stacktraceOriginalFn = e), r;
              },
              deinstrument: function (e) {
                if ("function" != typeof e)
                  throw new Error("Cannot de-instrument non-function object");
                return "function" == typeof e.__stacktraceOriginalFn
                  ? e.__stacktraceOriginalFn
                  : e;
              },
              report: function (e, t, n, i) {
                return new Promise(function (r, o) {
                  var a = new XMLHttpRequest();
                  if (
                    ((a.onerror = o),
                    (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        (a.status >= 200 && a.status < 400
                          ? r(a.responseText)
                          : o(
                              new Error(
                                "POST to " +
                                  t +
                                  " failed with status: " +
                                  a.status
                              )
                            ));
                    }),
                    a.open("post-2.html", t),
                    a.setRequestHeader("Content-Type", "application/json"),
                    i && "object" == typeof i.headers)
                  ) {
                    var s = i.headers;
                    for (var c in s)
                      Object.prototype.hasOwnProperty.call(s, c) &&
                        a.setRequestHeader(c, s[c]);
                  }
                  var l = { stack: e };
                  null != n && (l.message = n), a.send(JSON.stringify(l));
                });
              },
            };
          }),
          void 0 === (o = i.apply(t, r)) || (e.exports = o);
      })();
    },
  },
]);
