// leetcode 535.Encode and Decode TinyURL

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map();

var encode = function(longUrl) {
  
    // Math.random 로 랜덤한 숫자를 생성하고 toString을 사용해서 36진수로 변환한다.
    // Math.random 은 0에서 1사이의 소수를 반환하므로 slice로 문자열을 자른다
    // 36진수는 아라비아 숫자 10자와 모든 영어 알파벳 26자를 사용한다.
  
    const randomUrl = Math.random().toString(36).slice(5);
    const tinyUrl = 'http://tinyurl.com/' + randomUrl;
    
  
    // 맵에 저장한다
    map.set(tinyUrl,longUrl);
    
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
