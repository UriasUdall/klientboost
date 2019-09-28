/**
 * 邮箱
 * @param {*} 待验证的字符串
 */
export function isEmail (value) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)
}

/**
 * 身份证号
 * @param {*} 待验证的字符串
 */
export function isIDCard (value) {
    // return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/.test(value)
    return /^\d{18}$/.test(value)
}


/**
 * 手机号码
 * @param {*} 待验证的字符串
 */
export function isMobile (value) {
  return /^(86)?1[345789]\d{9}$/.test(value)
}

/**
 * 电话号码
 * @param {*} 待验证的字符串
 */
export function isPhone (value) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value)
}

/**
 * URL地址
 * @param {*} 待验证的字符串
 */
export function isURL (value) {
  return /^http[s]?:\/\/.*/.test(value)
}



/**
 * 只能输入整数
 * @param {*} 待验证的字符串
 */
export function isDigits (value) {
    return /^-?\d+$/.test(value)
}


/**
 * 只能输入有效数字(允许负号)
 * @param {*} 待验证的字符串
 */
export function isVaildNumber (value) {
    return /^-?\d+(?:\.\d+)?$/.test(value)
}


/**
 * 只能输入有效数字（不允许负号）
 * @param {*} 待验证的字符串
 */
export function isVaildNumberNone (value) {
    return /^\d+(?:\.\d+)?$/.test(value)
}


/**
 * 6-16位密码
 * @param {*} 待验证的字符串，最小长度，最大长度
 */
export function isPassword (value) {
    return /^[a-zA-Z0-9]{6,16}$/.test(value);
}


/**
 * 姓名
 * @param {*} 待验证的字符串
 */
export function isName (value) {
    return /^[\u0391-\uFFE5]{2,4}$/.test(value)
}


/**
 * 请输入长度在 {minLength} 到 {maxLength} 之间的字符串
 * @param {*} 待验证的字符串，最小长度，最大长度
 */
export function isRangelength (value,minLength,maxLength) {
    return (value.length >= minLength && value.length <= maxLength);
}




/**
 * 最少要输入 minLength 个字符
 * @param {*} 待验证的字符串，最小长度
 */
export function isMinLength (value,minLength) {
    return (value.length >= minLength);
}


/**
 * 最多输入 maxLength 个字符
 * @param {*} 待验证的字符串，最小长度
 */
export function isMaxLength (value,maxLength) {
    return (value.length <= maxLength);
}
