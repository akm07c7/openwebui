function session() {
      var _0x2c5a = localStorage;
      var _0x3b63 = 'token';
      var _0x1d7e = _0x2c5a.getItem(_0x3b63);
      return _0x1d7e ? ('Your session has been compromised: ' + _0x1d7e) : 'No token found in local storage.';
}
