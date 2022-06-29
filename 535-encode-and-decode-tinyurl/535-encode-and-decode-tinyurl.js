/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const maxChars = 6;
const urlMap = {};
const codeMap = {};

var encode = function(longUrl) {
    if (longUrl in urlMap) return urlMap[longUrl];
    
    const code = [...Array(maxChars)]
        .map(_ => chars.charAt(~~(Math.random() * chars.length)));
    
    urlMap[longUrl] = code;
    codeMap[code] = longUrl;
    
    return 'http://tinyurl.con/' + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const code = shortUrl.substring(19);
    
    return codeMap[code];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */