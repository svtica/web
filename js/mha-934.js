"use strict";
(self.webpackChunkmha = self.webpackChunkmha || []).push([
  [934],
  {
    9194: function (e, t, i) {
      i.d(t, {
        D: function () {
          return a;
        },
      });
      var n = i(6934),
        o = i(3968),
        r = i(2407),
        s = [],
        a = (function () {
          function e() {}
          return (
            (e.clear = function () {
              s = [];
            }),
            (e.get = function () {
              return s;
            }),
            (e.add = function (e, t, i) {
              if (e || t) {
                var r = o.j.joinArray(t, "\n");
                s.push(o.j.joinArray([e, r], "\n")),
                  i || n.g.trackEvent(e, { Stack: r, Source: "Errors.add" });
              }
            }),
            (e.isError = function (e) {
              if (!e) return !1;
              try {
                if ("string" == typeof e) return !1;
                if ("number" == typeof e) return !1;
                if (
                  "[object Error]" === Object.prototype.toString.call(e) &&
                  "stack" in e
                )
                  return !0;
              } catch (e) {
                n.g.trackEvent({
                  name: "isError exception with error",
                  properties: { error: JSON.stringify(e) },
                });
              }
              return !1;
            }),
            (e.log = function (t, i, o) {
              if (t && !o) {
                var r = {
                  Message: i,
                  Error: JSON.stringify(t, null, 2),
                  Source: "",
                  Stack: "",
                  Description: "",
                  Error_message: "",
                };
                e.isError(t) && t.exception
                  ? ((r.Source = "Error.log Exception"),
                    n.g.trackException(t, r))
                  : ((r.Source = "Error.log Event"),
                    t.description && (r.Description = t.description),
                    t.message && (r.Error_message = t.message),
                    t.stack && (r.Stack = t.stack),
                    n.g.trackEvent(
                      t.description ||
                        t.message ||
                        r.Message ||
                        "Unknown error object",
                      r
                    ));
              }
              e.parse(t, i, function (t, i) {
                e.add(t, i, null != o && o);
              });
            }),
            (e.parse = function (t, i, s) {
              var a,
                c = e.getErrorMessage(t),
                f = o.j.joinArray([i, c], " : ");
              function l(e) {
                (a = (function (e) {
                  return e.filter(function (e) {
                    var t;
                    return (
                      !e.fileName ||
                      (-1 === e.fileName.indexOf("stacktrace") &&
                        "Errors.parse" !== e.functionName &&
                        "Errors.isError" !== e.functionName &&
                        -1 ===
                          (null === (t = e.functionName) || void 0 === t
                            ? void 0
                            : t.indexOf("Promise._immediateFn")))
                    );
                  });
                })(e).map(function (e) {
                  return e.toString();
                })),
                  s(f, a);
              }
              function m(e) {
                n.g.trackEvent({ name: "Errors.parse errback" }),
                  (a = [
                    JSON.stringify(t, null, 2),
                    "Parsing error:",
                    JSON.stringify(e, null, 2),
                  ]),
                  s(f, a);
              }
              f || (f = "Unknown exception"),
                e.isError(t)
                  ? r.fromError(t).then(l).catch(m)
                  : r.get().then(l).catch(m);
            }),
            (e.getErrorMessage = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "number" == typeof e
                  ? e.toString()
                  : "message" in e
                  ? e.message
                  : JSON.stringify(e, null, 2)
                : "";
            }),
            (e.getErrorStack = function (t) {
              var i;
              return t
                ? "string" == typeof t
                  ? "string thrown as error"
                  : "number" == typeof t
                  ? "number thrown as error"
                  : e.isError(t) &&
                    "stack" in t &&
                    null !== (i = t.stack) &&
                    void 0 !== i
                  ? i
                  : ""
                : "";
            }),
            e
          );
        })();
    },
    7588: function (e, t, i) {
      i.d(t, {
        i: function () {
          return s;
        },
      });
      var n = i(7168),
        o = i(6953),
        r = i(6934),
        s = (function () {
          function e() {}
          return (
            (e.permissionLevel = function () {
              return "undefined" == typeof Office
                ? 0
                : Office && Office.context && Office.context.mailbox
                ? Office.context.mailbox._initialData$p$0
                  ? Office.context.mailbox._initialData$p$0._permissionLevel$p$0
                  : Office.context.mailbox.initialData
                  ? Office.context.mailbox.initialData.permissionLevel
                  : 0
                : 0;
            }),
            (e.sufficientPermission = function (t) {
              return !(
                "undefined" == typeof Office ||
                !Office ||
                !Office.context ||
                !Office.context.mailbox ||
                (Office.context.mailbox._initialData$p$0 ||
                Office.context.mailbox.initialData
                  ? e.permissionLevel() < 1
                  : t)
              );
            }),
            (e.canUseAPI = function (t, i) {
              return "undefined" == typeof Office
                ? (r.g.set("no".concat(t, "reason"), "Office undefined"), !1)
                : Office
                ? Office.context
                  ? Office.context.requirements
                    ? Office.context.requirements.isSetSupported("Mailbox", i)
                      ? e.sufficientPermission(!0)
                        ? Office.context.mailbox
                          ? !!Office.context.mailbox.getCallbackTokenAsync ||
                            (r.g.set(
                              "no".concat(t, "reason"),
                              "getCallbackTokenAsync false"
                            ),
                            !1)
                          : (r.g.set("no".concat(t, "reason"), "mailbox false"),
                            !1)
                        : (r.g.set(
                            "no".concat(t, "reason"),
                            "sufficientPermission false"
                          ),
                          !1)
                      : (r.g.set(
                          "no".concat(t, "reason"),
                          "requirements too low"
                        ),
                        !1)
                    : (r.g.set("noUseRestReason", "requirements false"), !1)
                  : (r.g.set("noUseRestReason", "context false"), !1)
                : (r.g.set("no".concat(t, "reason"), "Office false"), !1);
            }),
            (e.validItem = function () {
              return !!(
                "undefined" != typeof Office &&
                Office &&
                Office.context &&
                Office.context.mailbox &&
                Office.context.mailbox.item &&
                Office.context.mailbox.item.itemId
              );
            }),
            (e.send = function (t) {
              if (e.validItem())
                if (e.sufficientPermission(!1))
                  try {
                    n.d.send(t);
                  } catch (e) {
                    o.c.showError(e, "Could not send header request");
                  }
                else
                  o.c.showError(
                    null,
                    "Insufficient permissions to request headers",
                    !1
                  );
              else o.c.showError(null, "No item selected", !0);
            }),
            e
          );
        })();
    },
    7168: function (e, t, i) {
      i.d(t, {
        d: function () {
          return f;
        },
      });
      var n = i(3772),
        o = i(9194),
        r = i(6953),
        s = i(7588),
        a = i(8375),
        c = i(6934),
        f = (function () {
          function e() {}
          return (
            (e.canUseAPI = function () {
              return s.i.canUseAPI("API", e.minAPISet);
            }),
            (e.send = function (t) {
              if (s.i.validItem() && Office.context.mailbox.item)
                if (e.canUseAPI()) {
                  r.c.updateStatus(n.C.mhaRequestSent);
                  try {
                    Office.context.mailbox.item.getAllInternetHeadersAsync(
                      function (e) {
                        e.status === Office.AsyncResultStatus.Succeeded
                          ? t(e.value, "API")
                          : (c.g.set(
                              "getAllInternetHeadersAsyncFailure",
                              JSON.stringify(e)
                            ),
                            o.D.log(
                              e.error,
                              "Unable to obtain callback token.\nFallback to Rest.\n" +
                                JSON.stringify(e, null, 2),
                              !0
                            ),
                            a.f.send(t));
                      }
                    );
                  } catch (e) {
                    r.c.showError(e, "Failed in getAllInternetHeadersAsync");
                  }
                } else a.f.send(t);
              else o.D.log(null, "No item selected (API)", !0);
            }),
            (e.minAPISet = "1.9"),
            e
          );
        })();
    },
    8546: function (e, t, i) {
      i.d(t, {
        n: function () {
          return c;
        },
      });
      var n = i(1271),
        o = i(3772),
        r = i(9194),
        s = i(6953),
        a = i(7588),
        c = (function () {
          function e() {}
          return (
            (e.extractHeadersFromXml = function (e) {
              function t(e, t) {
                var i = e.find("*").filter(function () {
                  return this.nodeName === t;
                });
                return i[0] && i[0].textContent
                  ? i[0].textContent.replace(/\r|\n|\r\n/g, "\n")
                  : "";
              }
              var i = {};
              try {
                e = e.replace(/&#x0;/g, "");
                var o = n.parseXML(e),
                  r = n(o);
                r &&
                  t(r, "t:ExtendedProperty").length > 0 &&
                  (i.prop = t(r, "t:ExtendedProperty")),
                  i.prop || (i.responseCode = t(r, "m:ResponseCode"));
              } catch (e) {}
              return i;
            }),
            (e.stripHeaderFromXml = function (e) {
              return e
                ? e
                    .replace(
                      /<t:Value>[\s\S]*<\/t:Value>/g,
                      "<t:Value>redacted</t:Value>"
                    )
                    .replace(/<t:ItemId.*?\/>/g, '<t:ItemId ID="redacted"/>')
                : "";
            }),
            (e.callbackEws = function (t, i) {
              try {
                var n = null;
                if (
                  t.value &&
                  !(n = e.extractHeadersFromXml(t.value)).prop &&
                  "NoError" === n.responseCode
                )
                  return (
                    i(null, "EWS"),
                    void s.c.showError(null, o.C.mhaHeadersMissing, !0)
                  );
                if (!n || !n.prop) throw new Error(o.C.mhaRequestFailed);
                i(n.prop, "EWS");
              } catch (n) {
                t &&
                  r.D.log(
                    t.error,
                    "Async Response\n" +
                      e.stripHeaderFromXml(JSON.stringify(t, null, 2))
                  ),
                  i(null, "EWS"),
                  s.c.showError(n, "EWS callback failed");
              }
            }),
            (e.getSoapEnvelope = function (e) {
              return (
                "<?xml version='1.0' encoding='utf-8'?><soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'               xmlns:t='http://schemas.microsoft.com/exchange/services/2006/types'>  <soap:Header>     <t:RequestServerVersion Version='Exchange2013'/>  </soap:Header>  <soap:Body>" +
                e +
                "  </soap:Body></soap:Envelope>"
              );
            }),
            (e.getHeadersRequest = function (e) {
              return (
                "<GetItem xmlns='http://schemas.microsoft.com/exchange/services/2006/messages'>  <ItemShape>    <t:BaseShape>IdOnly</t:BaseShape>    <t:BodyType>Text</t:BodyType>    <t:AdditionalProperties>      <t:ExtendedFieldURI PropertyTag='0x007D' PropertyType='String' />    </t:AdditionalProperties>  </ItemShape>  <ItemIds><t:ItemId Id='" +
                e +
                "'/></ItemIds></GetItem>"
              );
            }),
            (e.send = function (t) {
              if (a.i.validItem())
                try {
                  s.c.updateStatus(o.C.mhaRequestSent);
                  var i = Office.context.mailbox;
                  if (i && i.item) {
                    var n = e.getHeadersRequest(i.item.itemId),
                      c = e.getSoapEnvelope(n);
                    i.makeEwsRequestAsync(c, function (i) {
                      e.callbackEws(i, t);
                    });
                  }
                } catch (e) {
                  s.c.showError(e, o.C.mhaRequestFailed);
                }
              else r.D.log(null, "No item selected (EWS)", !0);
            }),
            e
          );
        })();
    },
    8375: function (e, t, i) {
      i.d(t, {
        f: function () {
          return m;
        },
      });
      var n = i(1271),
        o = i(3772),
        r = i(9194),
        s = i(6953),
        a = i(7588),
        c = i(8546),
        f = i(6934),
        l = i(1778),
        m = (function () {
          function e() {}
          return (
            (e.canUseRest = function () {
              return a.i.canUseAPI("Rest", e.minRestSet);
            }),
            (e.getItemRestId = function () {
              return Office.context.mailbox.item
                ? "OutlookIOS" === Office.context.mailbox.diagnostics.hostName
                  ? Office.context.mailbox.item.itemId
                  : Office.context.mailbox.convertToRestId(
                      Office.context.mailbox.item.itemId,
                      Office.MailboxEnums.RestVersion.v2_0
                    )
                : "";
            }),
            (e.getBaseUrl = function (e) {
              var t = e.split("https://mha.azurewebsites.net/");
              return t[0] + "//" + t[2];
            }),
            (e.getRestUrl = function (t) {
              if (Office.context.mailbox.restUrl)
                return e.getBaseUrl(Office.context.mailbox.restUrl);
              var i = (0, l.Z)(t),
                n = Array.isArray(i.aud) ? i.aud[0] : i.aud;
              if (n) {
                if (n.match(/https:\/\/([^@]*)/)) return n;
                var o = n.match(/\/([^@]*)@/);
                if (o && o[1]) return "https://" + o[1];
              }
              return "https://outlook.office.com";
            }),
            (e.getHeaders = function (t, i) {
              if (t)
                if (Office.context.mailbox.item)
                  if (Office.context.mailbox.item.itemId) {
                    var a = e.getItemRestId(),
                      l =
                        e.getRestUrl(t) +
                        "/api/v2.0/me/messages/" +
                        a +
                        "?$select=SingleValueExtendedProperties&$expand=SingleValueExtendedProperties($filter=PropertyId eq 'String 0x007D')";
                    n.ajax({
                      url: l,
                      dataType: "json",
                      headers: {
                        Authorization: "Bearer" + t,
                        Accept: "application/json; odata.metadata=none",
                      },
                    })
                      .done(function (e) {
                        try {
                          void 0 !== e.SingleValueExtendedProperties
                            ? i(
                                e.SingleValueExtendedProperties[0].Value,
                                "REST"
                              )
                            : (i(null, "REST"),
                              s.c.showError(null, o.C.mhaHeadersMissing, !0));
                        } catch (e) {
                          s.c.showError(e, "Failed parsing headers");
                        }
                      })
                      .fail(function (e, t, n) {
                        try {
                          f.g.set("jqXHR", JSON.stringify(e)),
                            f.g.set("textStatus", JSON.stringify(t)),
                            f.g.set("resterror", JSON.stringify(n)),
                            "error" === t && 0 === e.status
                              ? c.n.send(i)
                              : "error" === t && 404 === e.status
                              ? s.c.showError(null, o.C.mhaMessageMissing, !0)
                              : s.c.showError(
                                  null,
                                  "textStatus: " +
                                    t +
                                    "\nerrorThrown: " +
                                    n +
                                    "\nState: " +
                                    e.state() +
                                    "\njqXHR: " +
                                    JSON.stringify(e, null, 2)
                                );
                        } catch (e) {
                          s.c.showError(e, "Failed handling REST failure case");
                        }
                      });
                  } else r.D.log(null, "No itemId");
                else r.D.log(null, "No item");
              else r.D.log(null, "No access token?");
            }),
            (e.send = function (t) {
              a.i.validItem()
                ? e.canUseRest()
                  ? (s.c.updateStatus(o.C.mhaRequestSent),
                    Office.context.mailbox.getCallbackTokenAsync(
                      { isRest: !0 },
                      function (i) {
                        try {
                          if (i.status === Office.AsyncResultStatus.Succeeded) {
                            var n = i.value;
                            e.getHeaders(n, t);
                          } else
                            f.g.set("callbackTokenFailure", JSON.stringify(i)),
                              r.D.log(
                                i.error,
                                "Unable to obtain callback token.\nFallback to EWS.\n" +
                                  JSON.stringify(i, null, 2),
                                !0
                              ),
                              c.n.send(t);
                        } catch (e) {
                          s.c.showError(e, "Failed in getCallbackTokenAsync");
                        }
                      }
                    ))
                  : c.n.send(t)
                : r.D.log(null, "No item selected (REST)", !0);
            }),
            (e.minRestSet = "1.5"),
            e
          );
        })();
    },
    3968: function (e, t, i) {
      i.d(t, {
        j: function () {
          return r;
        },
      });
      var n = i(1271),
        o = i(6934),
        r = (function () {
          function e() {}
          return (
            (e.copyToClipboard = function (e) {
              var t = document.createElement("textarea");
              (t.style.position = "absolute"),
                (t.style.opacity = "0"),
                (t.value = e),
                document.body.appendChild(t),
                t.select();
              var i = document.execCommand("copy");
              if (
                (document.body.removeChild(t),
                o.g.trackEvent({
                  name: "copy",
                  properties: { succeeded: i, style: "textarea" },
                }),
                !i)
              )
                try {
                  navigator.clipboard.writeText(e).then(
                    function () {
                      o.g.trackEvent({
                        name: "copy",
                        properties: { succeeded: "true", style: "navigator" },
                      });
                    },
                    function () {
                      o.g.trackEvent({
                        name: "copy",
                        properties: { succeeded: "false", style: "navigator" },
                      });
                    }
                  );
                } catch (e) {}
              try {
                navigator.permissions
                  .query({ name: "clipboard-write" })
                  .then(function (e) {
                    o.g.trackEvent({
                      name: "copy",
                      properties: {
                        succeeded: i,
                        style: "permissions",
                        clipboardWrite: e.state,
                      },
                    });
                  });
              } catch (e) {}
            }),
            (e.htmlEncode = function (e) {
              return e ? n("<div />").text(e).html() : "";
            }),
            (e.mapHeaderToURL = function (t, i) {
              var n = "";
              return (
                e.headerToURLMap.forEach(function (e) {
                  var i, o;
                  "" === n &&
                    t.toLowerCase() ===
                      (null === (i = e[0]) || void 0 === i
                        ? void 0
                        : i.toLowerCase()) &&
                    (n = null !== (o = e[1]) && void 0 !== o ? o : "");
                }),
                "" !== n
                  ? [
                      "<a href = '",
                      n,
                      "' target = '_blank'>",
                      this.htmlEncode(i || t),
                      "</a>",
                    ].join("")
                  : ""
              );
            }),
            (e.mapValueToURL = function (e) {
              try {
                return [
                  "<a href='",
                  e,
                  "' target='_blank'>",
                  this.htmlEncode(e),
                  "</a>",
                ].join("");
              } catch (t) {
                return e;
              }
            }),
            (e.joinArray = function (e, t) {
              return e
                ? e
                    .filter(function (e) {
                      return e;
                    })
                    .join(t)
                : "";
            }),
            (e.headerToURLMap = [
              ["Accept-Language", "https://tools.ietf.org/html/rfc3282"],
              ["Archived-At", "https://tools.ietf.org/html/rfc5064"],
              [
                "ARC-Authentication-Results",
                "https://tools.ietf.org/html/rfc8617#section-4.1.1",
              ],
              [
                "ARC-Message-Signature",
                "https://tools.ietf.org/html/rfc8617#section-4.1.2",
              ],
              ["ARC-Seal", "https://tools.ietf.org/html/rfc8617#section-4.1.3"],
              ["Authentication-Results", "https://tools.ietf.org/html/rfc8601"],
              ["BCC", "https://tools.ietf.org/html/rfc5322#section-3.6.3"],
              ["CC", "https://tools.ietf.org/html/rfc5322#section-3.6.3"],
              [
                "Content-Description",
                "https://tools.ietf.org/html/rfc2045#section-8",
              ],
              ["Content-Disposition", "https://tools.ietf.org/html/rfc2183"],
              ["Content-Id", "https://tools.ietf.org/html/rfc2045#section-7"],
              ["Content-Language", "https://tools.ietf.org/html/rfc3282"],
              [
                "Content-Transfer-Encoding",
                "https://tools.ietf.org/html/rfc2045#section-6",
              ],
              ["Content-Type", "https://tools.ietf.org/html/rfc2045#section-5"],
              ["Date", "https://tools.ietf.org/html/rfc5322#section-3.6.1"],
              [
                "Deferred-Delivery",
                "https://tools.ietf.org/html/rfc4021#section-2.1.65",
              ],
              ["DKIM-Signature", "https://tools.ietf.org/html/rfc6376"],
              ["From", "https://tools.ietf.org/html/rfc5322#section-3.6.2"],
              [
                "In-Reply-To",
                "https://tools.ietf.org/html/rfc5322#section-3.6.4",
              ],
              ["Importance", "https://tools.ietf.org/html/rfc2156#section-5.3"],
              ["List-Help", "https://tools.ietf.org/html/rfc2369"],
              ["List-ID", "https://tools.ietf.org/html/rfc2919"],
              ["List-Subscribe", "https://tools.ietf.org/html/rfc2369"],
              ["List-Unsubscribe", "https://tools.ietf.org/html/rfc2369"],
              [
                "Message-ID",
                "https://tools.ietf.org/html/rfc5322#section-3.6.4",
              ],
              ["MIME-Version", "https://tools.ietf.org/html/rfc2045#section-4"],
              ["Received", "https://tools.ietf.org/html/rfc5321#section-4.4"],
              ["Received-SPF", "https://tools.ietf.org/html/rfc4408#section-7"],
              [
                "References",
                "https://tools.ietf.org/html/rfc5322#section-3.6.4",
              ],
              ["Reply-To", "https://tools.ietf.org/html/rfc5322#section-3.6.2"],
              [
                "Return-Path",
                "https://tools.ietf.org/html/rfc5322#section-3.6.7",
              ],
              ["Sender", "https://tools.ietf.org/html/rfc5322#section-3.6.2"],
              ["Subject", "https://tools.ietf.org/html/rfc5322#section-3.6.5"],
              [
                "Thread-Index",
                "https://msdn.microsoft.com/en-us/library/ms526219",
              ],
              [
                "Thread-Topic",
                "https://msdn.microsoft.com/en-us/library/ms526986",
              ],
              ["To", "https://tools.ietf.org/html/rfc5322#section-3.6.3"],
              [
                "X-Auto-Response-Suppress",
                "https://msdn.microsoft.com/en-us/library/ee219609",
              ],
              [
                "X-Forefront-Antispam-Report",
                "https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/anti-spam-message-headers",
              ],
              [
                "X-Forefront-Antispam-Report-Untrusted",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-Forefront-Prvs",
                "https://technet.microsoft.com/en-us/library/dd639361",
              ],
              [
                "X-Message-Flag",
                "https://msdn.microsoft.com/en-us/library/exchange/ms875195",
              ],
              [
                "X-Microsoft-Antispam",
                "https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/anti-spam-message-headers",
              ],
              [
                "X-MS-Exchange-Organization-Antispam-Report",
                "https://technet.microsoft.com/en-us/library/aa996878",
              ],
              [
                "X-MS-Exchange-Organization-AuthAs",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-AuthMechanism",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-AuthSource",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-AutoForwarded",
                "https://msdn.microsoft.com/en-us/library/ee178180",
              ],
              [
                "X-MS-Exchange-Organization-AVStamp-Enterprise",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-AVStamp-Mailbox",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-Network-Message-Id",
                "https://technet.microsoft.com/en-us/library/bb232136",
              ],
              [
                "X-MS-Exchange-Organization-PCL",
                "https://technet.microsoft.com/en-us/library/aa996878",
              ],
              [
                "X-MS-Exchange-Organization-SCL",
                "https://technet.microsoft.com/en-us/library/aa996878",
              ],
              [
                "X-MS-Exchange-Organization-SenderIdResult",
                "https://technet.microsoft.com/en-us/library/aa996878",
              ],
              [
                "X-MS-Has-Attach",
                "https://msdn.microsoft.com/en-us/library/ee178420",
              ],
              [
                "X-MS-TNEF-Correlator",
                "https://msdn.microsoft.com/en-us/library/ee219198",
              ],
              [
                "X-Originating-IP",
                "https://en.wikipedia.org/wiki/X-Originating-IP",
              ],
              [
                "X-Priority",
                "https://technet.microsoft.com/en-us/library/bb691107",
              ],
              [
                "SFS",
                "https://docs.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/run-a-message-trace-and-view-results",
              ],
            ]),
            e
          );
        })();
    },
    6934: function (e, t, i) {
      i.d(t, {
        g: function () {
          return l;
        },
      });
      var n = i(1271),
        o = i(2382),
        r = i(6953),
        s = i(7588),
        a = i(7168),
        c = i(8375),
        f = i(2407),
        l =
          (i(4131),
          new ((function () {
            function e() {
              var e = this;
              (this.appDiagnostics = null),
                (this.itemDiagnostics = null),
                (this.inGet = !1),
                (this.sendTelemetry = !0),
                (this.appInsights = new o.u({
                  config: {
                    instrumentationKey: "2f12afed-6139-456e-9de3-49003d3a1fb1",
                  },
                })),
                this.appInsights.addTelemetryInitializer(function (t) {
                  if (!t || !t.data) return !1;
                  if (
                    ((t.data.baseType = t.baseType),
                    (t.data.baseType = t.baseData),
                    !e.sendTelemetry)
                  )
                    return !1;
                  var i =
                    "localhost" !== document.domain &&
                    "file:" !== document.location.protocol;
                  return (
                    "RemoteDependencyData" === t.baseType ||
                      "PageviewData" === t.baseType ||
                      "PageviewPerformanceData" === t.baseType ||
                      ((t.baseData = t.baseData || {}),
                      (t.baseData.properties = t.baseData.properties || {}),
                      n.extend(t.baseData.properties, e.get()),
                      "ExceptionData" === t.baseType &&
                        t.baseData &&
                        t.baseData.exceptions.length > 0 &&
                        f
                          .fromError(t.baseData.exceptions[0])
                          .then(function (i) {
                            e.appInsights.trackEvent({
                              name: "Exception Details",
                              properties: {
                                stack: i,
                                error:
                                  t && t.baseData
                                    ? t.baseData.exceptions[0]
                                    : "",
                              },
                            });
                          })),
                    i
                  );
                }),
                this.appInsights.loadAppInsights(),
                this.appInsights.trackPageView();
            }
            return (
              (e.prototype.initSendTelemetry = function (e) {
                (this.sendTelemetry = e), r.c.setSendTelemetryUI(e);
              }),
              (e.prototype.setSendTelemetry = function (e) {
                this.sendTelemetry != e &&
                  (r.c.setSendTelemetryUI(e),
                  (this.sendTelemetry = e),
                  "undefined" != typeof Office &&
                    Office.context &&
                    (Office.context.roamingSettings.set(
                      "sendTelemetry",
                      this.sendTelemetry
                    ),
                    Office.context.roamingSettings.saveAsync(function (e) {
                      e &&
                        e.status !== Office.AsyncResultStatus.Succeeded &&
                        console.log(
                          "setSendTelemetry = ".concat(JSON.stringify(e))
                        );
                    })));
              }),
              (e.prototype.canSendTelemetry = function () {
                return this.sendTelemetry;
              }),
              (e.prototype.trackEvent = function (e, t) {
                if (this.sendTelemetry) this.appInsights.trackEvent(e, t);
                else {
                  var i = "Event "
                    .concat(JSON.stringify(e), ": ")
                    .concat(JSON.stringify(t));
                  console.log(i);
                }
              }),
              (e.prototype.trackException = function (e, t) {
                if (this.sendTelemetry) this.appInsights.trackException(e, t);
                else {
                  var i = "Exception "
                    .concat(JSON.stringify(e), ": ")
                    .concat(JSON.stringify(t));
                  console.log(i);
                }
              }),
              (e.prototype.trackError = function (e, t, i) {
                if (this.sendTelemetry)
                  this.appInsights.trackEvent({
                    name: e,
                    properties: {
                      source: t,
                      exception: JSON.stringify(i),
                      message: i.message,
                      stack: i.stack,
                    },
                  });
                else {
                  var n = "Error "
                    .concat(e, " from ")
                    .concat(t, ": ")
                    .concat(i.message);
                  console.log(n + " exception: " + JSON.stringify(i));
                }
              }),
              (e.prototype.ensureItemDiagnostics = function () {
                try {
                  if (this.itemDiagnostics) return;
                  (this.itemDiagnostics = {}),
                    (this.itemDiagnostics["API used"] = "Not set"),
                    window.Office
                      ? window.Office.context
                        ? window.Office.context.mailbox
                          ? window.Office.context.mailbox.item
                            ? ((this.itemDiagnostics.itemId =
                                !!window.Office.context.mailbox.item.itemId),
                              (this.itemDiagnostics.itemType =
                                window.Office.context.mailbox.item.itemType),
                              (this.itemDiagnostics.itemClass =
                                window.Office.context.mailbox.item.itemClass))
                            : (this.itemDiagnostics[
                                "Office.context.mailbox.item"
                              ] = "missing")
                          : (this.itemDiagnostics["Office.context.mailbox"] =
                              "missing")
                        : (this.itemDiagnostics["Office.context"] = "missing")
                      : (this.itemDiagnostics.Office = "missing");
                } catch (e) {
                  this.trackError(
                    "diagError",
                    "Diagnostics.ensureItemDiagnostics",
                    e
                  );
                }
              }),
              (e.prototype.ensureOfficeDiagnostics = function () {
                if (this.appDiagnostics)
                  try {
                    if (r.c) {
                      var e = r.c.choice;
                      e && (this.appDiagnostics.ui = e.label);
                    } else this.appDiagnostics.ui = "standalone";
                    (this.appDiagnostics["Last Update"] =
                      "Mon, 18 Jul 2022 02:30:29 GMT"),
                      (this.appDiagnostics.mhaVersion = "2cd40efa9"),
                      window.Office
                        ? (delete this.appDiagnostics.Office,
                          window.Office.context
                            ? (delete this.appDiagnostics["Office.context"],
                              (this.appDiagnostics.contentLanguage =
                                window.Office.context.contentLanguage),
                              (this.appDiagnostics.displayLanguage =
                                window.Office.context.displayLanguage),
                              window.Office.context.mailbox
                                ? (delete this.appDiagnostics[
                                    "Office.context.mailbox"
                                  ],
                                  window.Office.context.mailbox.diagnostics
                                    ? (delete this.appDiagnostics[
                                        "Office.context.mailbox.diagnostics"
                                      ],
                                      (this.appDiagnostics.hostname =
                                        window.Office.context.mailbox.diagnostics.hostName),
                                      (this.appDiagnostics.hostVersion =
                                        window.Office.context.mailbox.diagnostics.hostVersion),
                                      window.Office.context.mailbox.diagnostics
                                        .OWAView &&
                                        (this.appDiagnostics.OWAView =
                                          window.Office.context.mailbox.diagnostics.OWAView))
                                    : (this.appDiagnostics[
                                        "Office.context.mailbox.diagnostics"
                                      ] = "missing"),
                                  window.Office.context.mailbox
                                    ._initialData$p$0 ||
                                  window.Office.context.mailbox.initialData
                                    ? delete this.appDiagnostics[
                                        "Office.context.mailbox.initialData"
                                      ]
                                    : (this.appDiagnostics[
                                        "Office.context.mailbox.initialData"
                                      ] = "missing"))
                                : (this.appDiagnostics[
                                    "Office.context.mailbox"
                                  ] = "missing"))
                            : (this.appDiagnostics["Office.context"] =
                                "missing"))
                        : (this.appDiagnostics.Office = "missing"),
                      s.i &&
                        ((this.appDiagnostics.permissionLevel =
                          s.i.permissionLevel()),
                        (this.appDiagnostics.canUseAPI = a.d.canUseAPI()),
                        (this.appDiagnostics.canUseRest = c.f.canUseRest()),
                        (this.appDiagnostics.sufficientPermission =
                          s.i.sufficientPermission(!0)));
                  } catch (e) {
                    this.trackError(
                      "diagError",
                      "Diagnostics.ensureOfficeDiagnostics",
                      e
                    );
                  }
              }),
              (e.prototype.getRequirementSet = function () {
                try {
                  if (!("Office" in window)) return "none";
                  if (!window.Office.context) return "no context";
                  if (
                    window.Office.context.requirements &&
                    window.Office.context.requirements.isSetSupported
                  ) {
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        "1.11"
                      )
                    )
                      return "1.11";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        "1.10"
                      )
                    )
                      return "1.10";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.9
                      )
                    )
                      return "1.9";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.8
                      )
                    )
                      return "1.8";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.7
                      )
                    )
                      return "1.7";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.6
                      )
                    )
                      return "1.6";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.5
                      )
                    )
                      return "1.5";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.4
                      )
                    )
                      return "1.4";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.3
                      )
                    )
                      return "1.3";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.2
                      )
                    )
                      return "1.2";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1.1
                      )
                    )
                      return "1.1";
                    if (
                      window.Office.context.requirements.isSetSupported(
                        "Mailbox",
                        1
                      )
                    )
                      return "1.0";
                  }
                  return window.Office.context.mailbox &&
                    window.Office.context.mailbox.addHandlerAsync
                    ? "1.5?"
                    : window.Office.context.ui &&
                      window.Office.context.ui.displayDialogAsync
                    ? "1.4?"
                    : window.Office.context.mailbox &&
                      window.Office.context.mailbox.item.saveAsync
                    ? "1.3?"
                    : window.Office.context.mailbox &&
                      window.Office.context.mailbox.item.setSelectedDataAsync
                    ? "1.2?"
                    : window.Office.context.mailbox &&
                      window.Office.context.mailbox.item.removeAttachmentAsync
                    ? "1.1?"
                    : "1.0?";
                } catch (e) {
                  return (
                    this.trackError(
                      "diagError",
                      "Diagnostics.getRequirementSet",
                      e
                    ),
                    "Could not detect requirements set"
                  );
                }
              }),
              (e.prototype.ensureAppDiagnostics = function () {
                try {
                  if (this.appDiagnostics)
                    return void this.ensureOfficeDiagnostics();
                  (this.appDiagnostics = {}),
                    window.navigator &&
                      (this.appDiagnostics["User Agent"] =
                        window.navigator.userAgent),
                    (this.appDiagnostics["Requirement set"] =
                      this.getRequirementSet()),
                    this.ensureOfficeDiagnostics(),
                    (this.appDiagnostics.origin = window.location.origin),
                    (this.appDiagnostics.path = window.location.pathname);
                } catch (e) {
                  this.trackError(
                    "diagError",
                    "Diagnostics.ensureAppDiagnostics",
                    e
                  );
                }
              }),
              (e.prototype.get = function () {
                if (!this.inGet) {
                  this.inGet = !0;
                  try {
                    this.ensureAppDiagnostics(), this.ensureItemDiagnostics();
                  } catch (e) {
                    this.trackError("diagError", "Diagnostics.get", e);
                  }
                  this.inGet = !1;
                }
                return n.extend({}, this.appDiagnostics, this.itemDiagnostics);
              }),
              (e.prototype.set = function (e, t) {
                try {
                  this.ensureItemDiagnostics(),
                    this.itemDiagnostics && (this.itemDiagnostics[e] = t);
                } catch (e) {
                  this.trackError("diagError", "Diagnostics.html", e);
                }
              }),
              (e.prototype.clear = function () {
                this.itemDiagnostics = null;
              }),
              e
            );
          })())());
    },
    3772: function (e, t, i) {
      i.d(t, {
        C: function () {
          return n;
        },
      });
      var n = {
        mhaLoading: "Loading...",
        mhaRequestSent: "Retrieving headers from server.",
        mhaFoundHeaders: "Found headers",
        mhaProcessingHeader: "Processing header",
        mhaHeadersMissing:
          "Message was missing transport headers. If this is a sent item this may be expected.",
        mhaMessageMissing: "Message not located.",
        mhaRequestFailed: "Failed to retrieve headers.",
        mhaNegative: "-",
        mhaMinute: "minute",
        mhaMinutes: "minutes",
        mhaSecond: "second",
        mhaSeconds: "seconds",
        mhaSummary: "Summary",
        mhaPrompt: "Insérez l'entête à analyser",
        mhaReceivedHeaders: "Received headers",
        mhaForefrontAntiSpamReport: "Forefront Antispam Report Header",
        mhaAntiSpamReport: "Microsoft Antispam Header",
        mhaOtherHeaders: "Other headers",
        mhaOriginalHeaders: "Original headers",
        mhaDeliveredStart: "(Delivered after",
        mhaDeliveredEnd: ")",
        mhaParsingHeaders: "Parsing headers to tables",
        mhaProcessingReceivedHeader: "Processing received header ",
        mhaSubject: "Subject",
        mhaMessageId: "Message Id",
        mhaCreationTime: "Creation time",
        mhaFrom: "From",
        mhaReplyTo: "Reply to",
        mhaTo: "To",
        mhaCc: "Cc",
        mhaArchivedAt: "Archived at",
        mhaReceivedHop: "Hop",
        mhaReceivedSubmittingHost: "Submitting host",
        mhaReceivedReceivingHost: "Receiving host",
        mhaReceivedTime: "Time",
        mhaReceivedDelay: "Delay",
        mhaReceivedType: "Type",
        mhaReceivedFrom: "From",
        mhaReceivedBy: "By",
        mhaReceivedWith: "With",
        mhaReceivedId: "Id",
        mhaReceivedFor: "For",
        mhaReceivedVia: "Via",
        mhaReceivedDate: "Date",
        mhaReceivedPercent: "Percent",
        mhaNumber: "#",
        mhaHeader: "Header",
        mhaValue: "Value",
        mhaSource: "Source header",
        mhaUnparsed: "Unknown fields",
        mhaArc: "ARC protocol",
        mhaCountryRegion: "Country/Region",
        mhaLang: "Language",
        mhaScl: "Spam Confidence Level",
        mhaSfv: "Spam Filtering Verdict",
        mhaPcl: "Phishing Confidence Level",
        mhaIpv: "IP Filter Verdict",
        mhaHelo: "HELO/EHLO String",
        mhaPtr: "PTR Record",
        mhaCip: "Connecting IP Address",
        mhaCat: "Protection Policy Category",
        mhaSfty: "Phishing message",
        mhaSrv: "Bulk email status",
        mhaCustomSpam: "Advanced Spam Filtering",
        mhaSfs: "Spam rules",
        mhaBcl: "Bulk Complaint Level",
      };
    },
    6953: function (e, t, i) {
      i.d(t, {
        c: function () {
          return l;
        },
      });
      var n = i(1271),
        o = i(5625),
        r = i(6934),
        s = i(9194),
        a = i(7588),
        c = i(1180),
        f = i(3968),
        l = (function () {
          function e() {}
          return (
            (e.getQueryVariable = function (e) {
              var t = window.location.search.substring(1).split("&"),
                i = "";
              return (
                t.forEach(function (t) {
                  var n;
                  if ("" === i) {
                    var o = t.split("=");
                    o[0] === e &&
                      (i = null !== (n = o[1]) && void 0 !== n ? n : "");
                  }
                }),
                i
              );
            }),
            (e.setDefault = function () {
              var t = e.getQueryVariable("default");
              null === t && (t = "new"),
                e.choices.forEach(function (e) {
                  t === e.label ? (e.checked = !0) : (e.checked = !1);
                });
            }),
            (e.postMessageToFrame = function (t, i) {
              e.iFrame && c.C.postMessageToFrame(e.iFrame, t, i);
            }),
            (e.render = function () {
              e.headers && r.g.trackEvent({ name: "analyzeHeaders" }),
                e.postMessageToFrame("renderItem", e.headers);
            }),
            (e.setFrame = function (t) {
              (e.iFrame = t),
                e.iFrame &&
                  (e.deferredStatus.forEach(function (t) {
                    e.postMessageToFrame("updateStatus", t);
                  }),
                  (e.deferredStatus = []),
                  e.deferredErrors.forEach(function (t) {
                    e.postMessageToFrame("showError", {
                      error: JSON.stringify(t.error),
                      message: t.message,
                    });
                  }),
                  (e.deferredErrors = []),
                  e.render());
            }),
            (e.eventListener = function (t) {
              if (t && t.origin === c.C.site() && t.data)
                switch (t.data.eventName) {
                  case "frameActive":
                    e.setFrame(t.source);
                    break;
                  case "LogError":
                    s.D.log(JSON.parse(t.data.data.error), t.data.data.message);
                    break;
                  case "modelToString":
                    e.modelToString = t.data.data;
                }
            }),
            (e.loadNewItem = function () {
              Office.context.mailbox.item &&
                a.i.send(function (t, i) {
                  (e.headers = t), r.g.set("API used", i), e.render();
                });
            }),
            (e.registerItemChangedEvent = function () {
              try {
                void 0 !== Office.context.mailbox.addHandlerAsync &&
                  Office.context.mailbox.addHandlerAsync(
                    Office.EventType.ItemChanged,
                    function () {
                      s.D.clear(), r.g.clear(), e.loadNewItem();
                    }
                  );
              } catch (e) {
                s.D.log(e, "Could not register item changed event");
              }
            }),
            (e.showError = function (t, i, n) {
              s.D.log(t, i, n),
                e.iFrame
                  ? e.postMessageToFrame("showError", {
                      error: JSON.stringify(t),
                      message: i,
                    })
                  : e.deferredErrors.push({ error: t, message: i });
            }),
            (e.updateStatus = function (t) {
              e.iFrame
                ? e.postMessageToFrame("updateStatus", t)
                : e.deferredStatus.push(t);
            }),
            (e.getSettingsKey = function () {
              try {
                return "frame" + Office.context.mailbox.diagnostics.hostName;
              } catch (e) {
                return "frame";
              }
            }),
            (e.go = function (t) {
              (e.iFrame = null),
                (e.currentChoice = t),
                (document.getElementById("uiFrame").src = t.url),
                Office.context &&
                  (Office.context.roamingSettings.set(e.getSettingsKey(), t),
                  Office.context.roamingSettings.saveAsync());
            }),
            (e.goDefaultChoice = function () {
              var t;
              e.choices.forEach(function (e) {
                !t && e.checked && (t = e);
              }),
                t && e.go(t);
            }),
            (e.create = function (e, t, i) {
              var o = n(document.createElement(t));
              return i && o.addClass(i), e && e.append(o), o;
            }),
            (e.addChoices = function () {
              var t = n("#uiChoice-list");
              t.empty(),
                e.choices.forEach(function (i, n) {
                  var o = e.create(t, "li", "ms-RadioButton"),
                    r = e.create(o, "input", "ms-RadioButton-input");
                  r.attr("tabindex", "-1"),
                    r.attr("type", "radio"),
                    r.attr("value", n);
                  var s = e.create(o, "label", "ms-RadioButton-field");
                  s.attr("role", "radio"),
                    s.attr("tabindex", "0"),
                    s.attr("name", "uiChoice"),
                    s.attr("value", i.label),
                    e.create(s, "span", "ms-Label").text(i.label);
                });
            }),
            (e.initFabric = function () {
              var t = document.querySelector(".header-row");
              if (t) {
                var i = t.querySelector("#dialog-Settings");
                if (i) {
                  var a = new o.R.Dialog(i),
                    c = t.querySelector("#dialog-Diagnostics");
                  if (c) {
                    var l = new o.R.Dialog(c),
                      m = t.querySelectorAll(".ms-Dialog-action");
                    if (m) {
                      var u = document.querySelector("#dialog-enableTelemetry");
                      if (u) {
                        (this.telemetryCheckboxComponent = new o.R.CheckBox(u)),
                          e.setSendTelemetryUI(r.g.canSendTelemetry()),
                          Array.prototype.forEach.call(m, function (e) {
                            new o.R.Button(e, p);
                          });
                        var d = i.querySelectorAll(".ms-ChoiceFieldGroup");
                        if (d && d[0]) {
                          new o.R.ChoiceFieldGroup(d[0]);
                          var h = i.querySelectorAll(".ms-ChoiceFieldGroup");
                          Array.prototype.forEach.call(h, function (e) {
                            new o.R.ChoiceFieldGroup(e);
                          }),
                            (t.querySelector(".gear-button").onclick =
                              function () {
                                n("#uiChoice input").attr("checked", "false");
                                var t = n("#uiChoice label");
                                t.removeClass("is-checked"),
                                  t.attr("aria-checked", "false");
                                var i = n(
                                  "#uiChoice label[value=" +
                                    e.currentChoice.label +
                                    "]"
                                );
                                i.addClass("is-checked"),
                                  i.attr("aria-checked", "true"),
                                  i
                                    .prevAll("input:first")
                                    .prop("checked", "true"),
                                  a.open();
                              }),
                            (t.querySelector(".copy-button").onclick =
                              function () {
                                f.j.copyToClipboard(e.modelToString);
                              });
                        }
                      }
                    }
                  }
                }
              }
              function p(t) {
                var i = t.currentTarget.id;
                switch (
                  (r.g.setSendTelemetry(
                    e.telemetryCheckboxComponent.getValue()
                  ),
                  i)
                ) {
                  case "actionsSettings-OK":
                    var o = n("#uiChoice .is-checked").prev()[0].value,
                      a = e.choices[+o];
                    a && a.label !== e.currentChoice.label && e.go(a);
                    break;
                  case "actionsSettings-diag":
                    var c = (function () {
                      var e = "";
                      try {
                        var t = r.g.get();
                        for (var i in t)
                          t.hasOwnProperty(i) && (e += i + " = " + t[i] + "\n");
                      } catch (t) {
                        e += "ERROR: Failed to get diagnostics\n";
                      }
                      return (
                        s.D.get().forEach(function (t) {
                          e += "ERROR: " + t + "\n";
                        }),
                        e
                      );
                    })();
                    n("#diagnostics").text(c), l.open();
                }
              }
            }),
            (e.setSendTelemetryUI = function (e) {
              e
                ? this.telemetryCheckboxComponent.check()
                : this.telemetryCheckboxComponent.unCheck();
            }),
            (e.initUI = function () {
              e.setDefault(), e.addChoices(), e.initFabric();
              try {
                var t = Office.context.roamingSettings.get(e.getSettingsKey()),
                  i = Office.context.roamingSettings.get("sendTelemetry");
                r.g.initSendTelemetry(i),
                  n("#uiToggle" + t.label).prop("checked", "true"),
                  e.go(t);
              } catch (t) {
                e.goDefaultChoice();
              }
              e.registerItemChangedEvent(),
                window.addEventListener("message", e.eventListener, !1),
                e.loadNewItem();
            }),
            Object.defineProperty(e, "choice", {
              get: function () {
                return e.currentChoice;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.currentChoice = {}),
            (e.deferredErrors = []),
            (e.deferredStatus = []),
            (e.headers = ""),
            (e.modelToString = ""),
            (e.choices = [
              {
                label: "classic",
                url: "classicDesktopFrame.html",
                checked: !1,
              },
              { label: "new", url: "newDesktopFrame.html", checked: !0 },
              {
                label: "new-mobile",
                url: "newMobilePaneIosFrame.html",
                checked: !1,
              },
            ]),
            e
          );
        })();
    },
    1180: function (e, t, i) {
      i.d(t, {
        C: function () {
          return n;
        },
      });
      var n = (function () {
        function e() {}
        return (
          (e.site = function () {
            return window.location.protocol + "//" + window.location.host;
          }),
          (e.postMessageToFrame = function (t, i, n) {
            t && t.postMessage({ eventName: i, data: n }, e.site());
          }),
          (e.postMessageToParent = function (t, i) {
            window.parent.postMessage({ eventName: t, data: i }, e.site());
          }),
          e
        );
      })();
    },
  },
]);
