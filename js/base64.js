var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var ie_old = _ie_old();
var scr_text = _obj("_scr_text");
function _select_all() {
  if (typeof scr_text !== "undefined" && scr_text !== null) scr_text.focus();
  document.querySelector("#_scr_text").focus();
  if (typeof scr_text !== "undefined" && scr_text !== null) scr_text.select();
  document.execCommand("selectAll", false, null);
}
function _copy_clip() {
  _select_all();
  document.execCommand("copy");
}
function _obj(scr_id) {
  return document.getElementById(scr_id);
}
function _encode() {
  if (_ie_old() == 1) {
    scr_text.value = _encodex(scr_text.value);
  } else {
    scr_text.value = window.btoa(unescape(encodeURIComponent(scr_text.value)));
  }
}
function _decode() {
  if (_ie_old() == 1) {
    scr_text.value = _decodex(scr_text.value);
  } else {
    scr_text.value = decodeURIComponent(escape(window.atob(scr_text.value)));
  }
}
function _ie_old() {
  var user_agent = navigator.userAgent.replace(/\s/g, "");
  var tmp = user_agent.indexOf("MSIE");
  if (tmp == -1) return 0;
  var ii = 1,
    vr = 0,
    st = "";
  while (ii < 6) {
    st = user_agent.substr(tmp + 4, ii);
    if (!Number(st)) break;
    vr = st;
    ii++;
  }
  if (vr < 10) return 1;
  return 0;
}
function _encodex(text) {
  text = text.replace(/\r\n/g, "\n");
  var ret = "",
    ii,
    tmp;
  for (ii = 0; ii < text.length; ii++) {
    tmp = text.charCodeAt(ii);
    if (tmp < 128) {
      ret += String.fromCharCode(tmp);
    } else if (tmp > 127 && tmp < 2048) {
      ret += String.fromCharCode((tmp >> 6) | 192);
      ret += String.fromCharCode((tmp & 63) | 128);
    } else {
      ret += String.fromCharCode((tmp >> 12) | 224);
      ret += String.fromCharCode(((tmp >> 6) & 63) | 128);
      ret += String.fromCharCode((tmp & 63) | 128);
    }
  }
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  text = ret;
  ret = "";
  ii = 0;
  while (ii < text.length) {
    chr1 = text.charCodeAt(ii++);
    chr2 = text.charCodeAt(ii++);
    chr3 = text.charCodeAt(ii++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    ret =
      ret +
      chars.charAt(enc1) +
      chars.charAt(enc2) +
      chars.charAt(enc3) +
      chars.charAt(enc4);
  }
  return ret;
}
function _decodex(text) {
  var ret = "",
    ii = 0;
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  text = text.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (ii < text.length) {
    enc1 = chars.indexOf(text.charAt(ii++));
    enc2 = chars.indexOf(text.charAt(ii++));
    enc3 = chars.indexOf(text.charAt(ii++));
    enc4 = chars.indexOf(text.charAt(ii++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    ret = ret + String.fromCharCode(chr1);
    if (enc3 != 64) {
      ret = ret + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      ret = ret + String.fromCharCode(chr3);
    }
  }
  text = ret;
  ii = 0;
  ret = "";
  var tmp = "",
    c = (c1 = c2 = 0);
  while (ii < text.length) {
    c = text.charCodeAt(ii);
    if (c < 128) {
      ret += String.fromCharCode(c);
      ii++;
    } else if (c > 191 && c < 224) {
      c2 = text.charCodeAt(ii + 1);
      ret += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      ii += 2;
    } else {
      c2 = text.charCodeAt(ii + 1);
      c3 = text.charCodeAt(ii + 2);
      ret += String.fromCharCode(
        ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      ii += 3;
    }
  }
  return ret;
}
