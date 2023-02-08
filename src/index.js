module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  
  let newStr = "";
  while (newStr != str) {
    newStr = str;
    bracketsConfig.forEach(
      (config) => (str = str.replaceAll(config.join(""), ""))
    );
  }
  return str == "";
};
