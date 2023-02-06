module.exports = function check(str, bracketsConfig) {
  let newStr = "";
  while (newStr != str) {
    newStr = str;
    bracketsConfig.forEach(
      (config) => (str = str.replaceAll(config.join(""), ""))
    );
  }
  return str == "";
};
