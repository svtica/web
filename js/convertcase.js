function _INPUT_GET_TEXT() {
  var SourceText = $input().value;
  var TextLength = SourceText.length;
  if (TextLength == 0) SourceText = $input().placeholder;
  return { 0: SourceText, 1: TextLength };
}
function _INPUT_SET_TEXT(SourceText, TextLength) {
  if (TextLength == 0) {
    $input().placeholder = SourceText;
    $input().focus();
  } else {
    $input().value = SourceText;
  }
}
function $input() {
  return document.getElementById("_scr_text");
}
function _CLEAR_INPUT() {
  $input().value = "";
  $input().focus();
  _SENTENCE_CASE();
}
function _UPPER_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  _INPUT_SET_TEXT(SourceText[0].toUpperCase(), SourceText[1]);
}
function _LOWER_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  _INPUT_SET_TEXT(SourceText[0].toLowerCase(), SourceText[1]);
}
function _INVERT_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  var TextLength = SourceText[0].length;
  var OutputText = "",
    sChr,
    uChr,
    lChr;
  for (var i = 0; i < TextLength; i++) {
    sChr = SourceText[0].charAt(i);
    lChr = sChr.toLowerCase();
    uChr = sChr.toUpperCase();
    if (sChr == lChr) {
      OutputText += uChr;
    } else {
      OutputText += lChr;
    }
  }
  _INPUT_SET_TEXT(OutputText, SourceText[1]);
}
function _ALTERNATING_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  var TextLength = SourceText[0].length;
  var OutputText = "",
    sChr,
    uChr,
    lChr;
  for (var i = 0; i < TextLength; i++) {
    sChr = SourceText[0].charAt(i);
    if (isFloat(i) == 1) {
      OutputText += sChr.toLowerCase();
    } else {
      OutputText += sChr.toUpperCase();
    }
  }
  _INPUT_SET_TEXT(OutputText, SourceText[1]);
}
function isFloat(n) {
  var div = n / 2;
  if (parseInt(div) == div) return 1;
  return 0;
}
function _SENTENCE_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  SourceText[0] = SourceText[0].toLowerCase();
  var TextLength = SourceText[0].length;
  var OutputText = "",
    sChr;
  var sUper = 1,
    space = String.fromCharCode(32);
  for (var i = 0; i < TextLength; i++) {
    sChr = SourceText[0].charAt(i);
    if (sChr != space) {
      if (
        sChr == "\r" ||
        sChr == "\n" ||
        sChr == "." ||
        sChr == "?" ||
        sChr == "!"
      ) {
        sUper = 1;
      } else {
        if (sUper == 1) sChr = sChr.toUpperCase();
        sUper = 0;
      }
    }
    OutputText += sChr;
  }
  _INPUT_SET_TEXT(OutputText, SourceText[1]);
}
function _COPY_CLIP() {
  var obj = $input();
  if (typeof obj !== "undefined" && obj !== null) obj.focus();
  document.querySelector("#_scr_text").focus();
  if (typeof obj !== "undefined" && obj !== null) obj.select();
  document.execCommand("selectAll", false, null);
  document.execCommand("copy");
}
function _WORD_CASE() {
  var SourceText = _INPUT_GET_TEXT();
  SourceText[0] = SourceText[0].toLowerCase();
  var TextLength = SourceText[0].length;
  var OutputText = "",
    sChr,
    Prev;
  for (var i = 0; i < TextLength; i++) {
    sChr = SourceText[0].charAt(i);
    if (i == 0) {
      OutputText += sChr.toUpperCase();
    } else {
      Prev = SourceText[0].charAt(i - 1);
      if (Prev == " " || Prev == "\r" || Prev == "\n") {
        OutputText += sChr.toUpperCase();
      } else {
        OutputText += sChr;
      }
    }
  }
  _INPUT_SET_TEXT(OutputText, SourceText[1]);
}
