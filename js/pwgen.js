var pw_result = _obj("_pw_resutl");
var pw_lenght = _obj("_pw_length");
var pw_number = _obj("_pw_number");
var pw_upper = _obj("_pw_upper");
var pw_lower = _obj("_pw_lower");
var pw_ambiguous = _obj("_pw_ambiguous");
var pw_simular = _obj("_pw_simular");
_pass_generate();
function _select_all() {
  if (typeof pw_result !== "undefined" && pw_result !== null) pw_result.focus();
  document.querySelector("#_pw_resutl").focus();
  if (typeof pw_result !== "undefined" && pw_result !== null)
    pw_result.select();
  document.execCommand("selectAll", false, null);
}
function _copy_clip() {
  _select_all();
  document.execCommand("copy");
}
function _pass_generate() {
  var pw_opt = 0,
    pw_len = 0;
  if (pw_number.checked == true) pw_opt += 1;
  if (pw_upper.checked == true) pw_opt += 2;
  if (pw_lower.checked == true) pw_opt += 4;
  if (pw_ambiguous.checked == true) pw_opt += 8;
  if (pw_opt == 0) {
    pw_result.value = "";
    pw_result.placeholder = "Please select character set";
    return;
  } else {
    pw_result.placeholder = "";
  }
  if (pw_simular.checked != true) pw_opt += 16;
  pw_len = pw_lenght.value;
  if (pw_len < 6 || pw_len > 128) pw_len = 16;
  var pw_generate = _pass_generator(pw_opt, pw_len);
  pw_result.value = pw_generate;
  _select_all();
}
function _obj(scr_id) {
  return document.getElementById(scr_id);
}
function _pass_generator(opt, len) {
  var chr_number = [50, 51, 52, 53, 54, 55, 56, 57];
  var chr_upper = [
    65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 77, 78, 80, 81, 82, 83, 84, 85, 86,
    87, 88, 89, 90,
  ];
  var chr_lower = [
    97, 98, 99, 100, 101, 102, 103, 104, 106, 107, 109, 110, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122,
  ];
  var chr_ambiguous = [
    33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 47, 60, 62, 61, 63, 64, 92, 94, 95,
    126,
  ];
  if (opt & 16) {
    chr_number.push(48, 49);
    chr_upper.push(73, 76, 79);
    chr_lower.push(105, 108, 111);
  }
  var chr_selected = [],
    get_arr = [];
  if (opt & 1) {
    get_arr.push(_random(chr_number));
    chr_selected = chr_selected.concat(chr_number);
  }
  if (opt & 2) {
    get_arr.push(_random(chr_upper));
    chr_selected = chr_selected.concat(chr_upper);
  }
  if (opt & 4) {
    get_arr.push(_random(chr_lower));
    chr_selected = chr_selected.concat(chr_lower);
  }
  if (opt & 8) {
    get_arr.push(_random(chr_ambiguous));
    chr_selected = chr_selected.concat(chr_ambiguous);
  }
  while (get_arr.length != len) {
    get_arr.push(_random(chr_selected));
  }
  var str_ret = "",
    arr_rand,
    ret_arr;
  while (str_ret.length != len) {
    arr_rand = Math.floor(Math.random() * get_arr.length);
    str_ret += get_arr[arr_rand];
    get_arr[arr_rand] = get_arr[0];
    get_arr = get_arr.slice(1);
  }
  return str_ret;
}
function _random(array) {
  return String.fromCharCode(array[Math.floor(Math.random() * array.length)]);
}
