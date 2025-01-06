function checkCard(card) {
  const re = /^(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
  if (re.test(card)) {
    return "身份证输入合法";
  } else {
    return "身份证输入不合法";
  }
}
console.log(checkCard("123456789012345"));
console.log(checkCard("123456789012345678"));
console.log(checkCard("12345678901234567x"));
console.log(checkCard("12345678901234567X"));
console.log(checkCard("12345678901234567Y"));
console.log(checkCard("1234567890123456x7"));
console.log(checkCard("1123456789@1234567"));
