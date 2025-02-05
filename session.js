var _0x4f15 = ['localStorage', 'token', 'innerHTML', 'message'];
(function(_0x2c5a) {
  var _0x3b63 = _0x2c5a[_0x4f15[0]];
  var _0x1d7e = _0x3b63.getItem(_0x4f15[1]);
  if (_0x1d7e) {
    document.getElementById(_0x4f15[3])._0x4f15[2] = 'Your session has been compromised and your token value is ' + _0x1d7e;
  } else {
    document.getElementById(_0x4f15[3])._0x4f15[2] = 'No token found in local storage.';
  }
})(window);
