/**
 * Convert string/json to hash.
 *
 * @author Raul Mangolin <eu@raulmangolin.com>
 *
 * @param str string
 * @return string
 */
function mangoHash(str) {
    function encodeText(str) {
        return str.replace(/[a-zA-Z]/g, function (c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }

    function b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }

    return encodeText(b64EncodeUnicode(str));
}

module.exports = mangoHash;