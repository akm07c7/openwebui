var _0x5613 = ["document", "domain", "localStorage", "token", "getItem", "https:", "/", "your-path", "fetch", "GET", "headers", "ok", "status", "json", "console"];
(function(_0x2e52x1) {
  var _0x2e52x2 = _0x5613[0];
  var _0x2e52x3 = _0x5613[1];
  var _0x2e52x4 = _0x5613[2];
  var _0x2e52x5 = _0x5613[3];
  var _0x2e52x6 = _0x5613[4];
  var _0x2e52x7 = _0x5613[5];
  var _0x2e52x8 = _0x5613[6];
  var _0x2e52x9 = _0x5613[7];
  var _0x2e52xa = _0x5613[8];
  var _0x2e52xb = _0x5613[9];
  var _0x2e52xc = _0x5613[10];
  var _0x2e52xd = _0x5613[11];
  var _0x2e52xe = _0x5613[12];
  var _0x2e52xf = _0x5613[13];
  var _0x2e52x10 = _0x5613[14];

  async function _0x2e52x11() {
    try {
      var _0x2e52x12 = window[_0x2e52x2][_0x2e52x3];
      var _0x2e52x13 = window[_0x2e52x4][_0x2e52x6](_0x2e52x5);
      if (!_0x2e52x13) {
        throw new Error("Token not found.");
      }
      var _0x2e52x14 = `${_0x2e52x7}${_0x2e52x12}${_0x2e52x8}${_0x2e52x9}?${_0x2e52x5}=${_0x2e52x13}`;
      var _0x2e52x15 = await window[_0x2e52xa](_0x2e52x14, {
        method: _0x2e52xb,
        [_0x2e52xc]: {}
      });
      if (!_0x2e52x15[_0x2e52xd]) {
        throw new Error(`HTTP error! ${_0x2e52x15[_0x2e52xe]}`);
      }
      var _0x2e52x16 = await _0x2e52x15[_0x2e52xf]();
      console[_0x2e52x10](_0x2e52x16);
    } catch (_0x2e52x17) {
      console[_0x2e52x10](`Error: ${_0x2e52x17}`);
    }
  }
  _0x2e52x11();
})(this);
