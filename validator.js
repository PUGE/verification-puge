const regexs = {
  // 数字
  numericRegex: /^[0-9]+$/,
  /**
  * @descrition:邮箱规则
  * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
  * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
  * 3.@符号是必填项
  * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
  * 5.邮件提供商域可以包含特殊字符-、_、.
  */
  email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
  /**
   * [ip ipv4、ipv6]
   * "192.168.0.0"
   * "192.168.2.3.1.1"
   * "235.168.2.1"
   * "192.168.254.10"
   * "192.168.254.10.1.1"
   */
  ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/,
  /**
  * @descrition:判断输入的参数是否是个合格的固定电话号码。
  * 待验证的固定电话号码。
  * 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)
  **/
  fax: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,
  /**
  *@descrition:手机号码段规则
  * 13段：130、131、132、133、134、135、136、137、138、139
  * 14段：145、147
  * 15段：150、151、152、153、155、156、157、158、159
  * 17段：170、176、177、178
  * 18段：180、181、182、183、184、185、186、187、188、189
  * 国际码 如：中国(+86)
  */
  phone: /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[03678]|18[0-9])\d{8}$/,
  /**
   * @descrition 匹配 URL
   */
  url: /[a-zA-z]+:\/\/[^\s]/,
  money: /^(0|[1-9]\d*)(\.\d+)?$/,
  english: /^[A-Za-z]+$/,
  chinese: /^[\u0391-\uFFE5]+$/,
  percent: /^(?:[1-9][0-9]?|100)(?:\.[0-9]{1,2})?$/,
  special: /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/
};

const validator = {
  // 验证合法邮箱
  isEmail (field) {
    return regexs.email.test(field);
  },
  // 验证合法 ip 地址
  isIp (field) {
    return regexs.ip.test(field);
  },
  // 验证传真
  isFax (field) {
    return regexs.fax.test(field);
  },
  // 验证座机
  isTel (field) {
    return regexs.fax.test(field);
  },
  // 验证手机
  isPhone (field) {
    return regexs.phone.test(field);
  },
  // 验证URL
  isUrl (field) {
    return regexs.url.test(field);
  },
  isMoney (field) {
    return regexs.money.test(field);
  },
  isEnglish (field) {
    return regexs.english.test(field);
  },
  isChinese (field) {
    return regexs.chinese.test(field);
  },
  isPercent (field) {
    return regexs.percent.test(field);
  },
  // 最大长度
  maxLength (field, length) {
    if (!regexs.numericRegex.test(length)) return false;
    return field.length <= parseInt(length, 10);
  },
  // 最小长度
  minLength (field, length) {
    if (!regexs.numericRegex.test(length)) return false;
    return field.length >= parseInt(length, 10);
  },
  // 不包含特殊符号
  noSpecial: (field) => {
    return regexs.percent.test(field);
  }
}
  
export { validator }