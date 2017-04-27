function encode(source, revert) {
  return mangoEncodeText(mangoB64EncodeUnicode(source));
}

function decode(source) {
  return mangoB64DecodeUnicode(mangoEncodeText(source));
}

function mangoEncodeText(source) {
  return source.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}

function mangoB64EncodeUnicode(source) {
  return btoa(encodeURIComponent(source).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function mangoB64DecodeUnicode(source) {
  return decodeURIComponent(Array.prototype.map.call(atob(source), function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

module.exports = {
  encode,
  decode
};
