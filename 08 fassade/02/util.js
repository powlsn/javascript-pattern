export class NumberUtil {
  isInteger(str) {
    return /^(-|\+)?\d+$/.test(str)
  }
  isUnsignInteger(str) {
    return /^\d+$/.test(str);
  }
}


export class StringUtil {
  isCharNumber(str) {
    return /^[0-9a-zA-Z]+$/.test(str)
  }
  startWithChar(str) {
    const firstChar = str.substring(0, 1);
    return /^[a-zA-Z]+$/.test(firstChar);
  }
  isLengthInRange(str, min, max) {
    return (str.length >= min && str.length <= max) ?? false;
  }
}

export class Facade {
  constructor() {
    this.numberUtil = new NumberUtil();
    this.stringUtil = new StringUtil();
  }

  checkUsername(str) {
    return (this.stringUtil.isCharNumber(str) && this.stringUtil.startWithChar(str)) ?? false;
  }

  checkAge(str) {
    return (this.numberUtil.isUnsignInteger(str) && this.stringUtil.isLengthInRange(str, 1, 3)) ?? false;
  }
}
