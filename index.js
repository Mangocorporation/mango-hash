/**
 * Convert string/json to hash.
 *
 * @author Raul Mangolin <eu@raulmangolin.com>
 *
 * @param str string
 * @return string
 */
function mangoHash(str, revert) {
    if (revert) {
        return mangoB64DecodeUnicode(mangoEncodeText(str));
    }
    return mangoEncodeText(mangoB64EncodeUnicode(str));
}

function mangoEncodeText(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

function mangoB64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function mangoB64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

module.exports = mangoHash;
