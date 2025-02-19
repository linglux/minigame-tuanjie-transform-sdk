/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tencent/minigamefe/common/const.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tencent/minigamefe/common/const.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CGI_URL": () => (/* binding */ CGI_URL),
/* harmony export */   "SESSION_KEY": () => (/* binding */ SESSION_KEY),
/* harmony export */   "ELLIPSIS": () => (/* binding */ ELLIPSIS)
/* harmony export */ });
const CGI_URL = 'https://game.weixin.qq.com';
const SESSION_KEY = 'minigamefe_session_id';
const ELLIPSIS = '…';


/***/ }),

/***/ "./node_modules/@tencent/minigamefe/common/object.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tencent/minigamefe/common/object.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
const merge = Object.assign;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = (config, path) => {
    if (path && config && typeof config === 'object') {
        const params = path.split('.');
        if (!path.length) {
            return config[path];
        }
        if (config[params[0]] && typeof config[params[0]] === 'object') {
            params.shift();
            return get(params.join('.'));
        }
    }
    return config;
};



/***/ }),

/***/ "./node_modules/@tencent/minigamefe/common/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tencent/minigamefe/common/util.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.get),
/* harmony export */   "merge": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.merge),
/* harmony export */   "none": () => (/* binding */ none),
/* harmony export */   "uid": () => (/* binding */ uid),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "toFixed": () => (/* binding */ toFixed),
/* harmony export */   "compareVersion": () => (/* binding */ compareVersion),
/* harmony export */   "formatOutputNumber": () => (/* binding */ formatOutputNumber),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "promiseRetry": () => (/* binding */ promiseRetry),
/* harmony export */   "awaitWrap": () => (/* binding */ awaitWrap),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "rgbaToHex": () => (/* binding */ rgbaToHex),
/* harmony export */   "getColor": () => (/* binding */ getColor),
/* harmony export */   "getErrMsg": () => (/* binding */ getErrMsg),
/* harmony export */   "setQueryString": () => (/* binding */ setQueryString),
/* harmony export */   "filterSpecialChar": () => (/* binding */ filterSpecialChar),
/* harmony export */   "addEllipsis": () => (/* binding */ addEllipsis),
/* harmony export */   "centToYuan": () => (/* binding */ centToYuan),
/* harmony export */   "clipboard": () => (/* binding */ clipboard),
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@tencent/minigamefe/common/const.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/@tencent/minigamefe/common/object.js");


/**
 * 空函数
 */
function none() { }
/**
 * 取随机uuid
 * @param {number} length 取字符串的长度
 * @param {boolean} char 是否使用纯数字+拼音组合，char为false时增加英文标点符号
 */
function uid(length = 20, char) {
    const soup = `${char ? '' : '!#%()*+,-./:;=?@[]^_`{|}~'}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    const soupLength = soup.length;
    const id = [];
    for (let i = 0; i < length; i++) {
        id[i] = soup.charAt(Math.random() * soupLength);
    }
    return id.join('');
}
/**
 * 取最小值和最大值之间的区间限定值
 * @param {number} number 需要被处理的数字
 * @param {number} min 最小值
 * @param {number} max 最大值
 */
function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}
/**
 * 取小数点后几位数，返回number类型
 * @param {number} num 需要被处理的数字
 * @param {number} digits 省略到小数点后几位
 */
function toFixed(num, digits) {
    const multiple = Math.pow(10, digits);
    return Math.round(num * multiple) / multiple;
}
/**
 * 比较 基础库/客户端/插件 的版本号
 * @param {string} v1 当前的版本号
 * @param {string} v2 被比较的版本号
 * @return {number} 比较的结果，< 0 时 表示 v1 低于 v2 版本，== 0 时 表示 v1 刚好等于 v2 版本，> 0 时 表示 v1 大于 v2 版本
 */
function compareVersion(v1 = '0.0.0', v2) {
    if (typeof v1 !== 'string' || typeof v2 !== 'string') {
        if (typeof v1 !== 'string' && typeof v2 !== 'string') {
            return 0;
        }
        if (typeof v1 !== 'string') {
            return 1;
        }
        return -1;
    }
    const version1 = v1.split('.');
    const version2 = v2.split('.');
    const len = Math.max(version1.length, version2.length);
    while (version1.length < len) {
        version1.push('0');
    }
    while (version2.length < len) {
        version2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(version1[i], 10);
        const num2 = parseInt(version2[i], 10);
        if (num1 > num2) {
            return 1;
        }
        if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
/**
 * 格式化展示数字
 */
function formatOutputNumber(value) {
    if (value < 1000) {
        return `${value}`;
    }
    if (value >= 1000 && value < 10000) {
        return `${parseFloat(`${value / 1000}`).toFixed(1)}k`;
    }
    if (value > 10000 && value < 100000) {
        return `${parseFloat(`${value / 10000}`).toFixed(1)}w`;
    }
    return '10w+';
}
/**
 * 判断参数是否是数字
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
/**
 * promise重试
 *
 * @export
 * @param {(...params: any[]) => any} func 返回promise的函数
 * @param {number} [times=0] 重试次数
 * @param {number} [delay=0] 重试等待时间
 * @param {...any[]} args 传给func的参数，会自动带上当前重试次数
 * @returns {*}
 * @example
 * const demo = function(...params) {
 * return new Promise((resolve, reject) => {console.log('params: ', params)})
 * }
 * promiseRetry(demo, 1, 0, 'param1', 'param2')
 */
function promiseRetry(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
func, times = 0, delay = 0, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
...args) {
    return new Promise((resolve, reject) => {
        const retry = (_times = 0) => {
            func
                .apply(null, [...args, _times])
                .then(resolve)
                .catch((err) => {
                if (_times > 0) {
                    setTimeout(() => {
                        retry(_times - 1);
                    }, delay);
                }
                else {
                    reject(err);
                }
            });
        };
        retry(times);
    });
}
/**
 *包装async/await，更优雅的做错误处理
 *
 * @export
 * @template T reject值
 * @template U resolve值
 * @param {Promise<T>} promise
 * @returns {(Promise<[U | null, T | null]>)}
 * @example
 * const [err, res] = await awaitWrap(Promise.resove())
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function awaitWrap(promise) {
    return promise.then((data) => [null, data]).catch(err => [err, null]);
}
/**
 * 格式化时间，支持秒和毫秒时间戳
 *
 * @export
 * @param {number} ms
 * @param {string} [fmt='yyyy-MM-dd']
 * @returns {string}
 */
function formatDate(ms, fmt = 'yyyy-MM-dd') {
    if (!ms) {
        return '';
    }
    let target = fmt;
    // 兼容秒时间戳
    const time = String(ms).toString().length === 10 ? new Date(ms * 1000) : new Date(ms);
    const o = {
        'y+': time.getFullYear(),
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        'S+': time.getMilliseconds(), // 毫秒
    };
    for (const [key, value] of Object.entries(o)) {
        const reg = new RegExp(`(${key})`);
        if (reg.test(target)) {
            const [m] = target.match(reg);
            target = target.replace(reg, () => `00${value}`.slice(-`${m}`.length));
        }
    }
    return target;
}
/**
 * 是否为空，{}, [],0
 *
 * @export
 * @param {*} val
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEmpty(val) {
    // null or undefined
    if (val === null || val === undefined) {
        return true;
    }
    if (typeof val === 'boolean') {
        return false;
    }
    if (typeof val === 'number') {
        return !val;
    }
    if (val instanceof Error) {
        return val.message === '';
    }
    switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length;
        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
            return !val.size;
        }
        // Plain Object
        case '[object Object]': {
            return !Object.keys(val).length;
        }
    }
    return false;
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function isFunction(functionToCheck) {
    return functionToCheck && Object.prototype.toString.call(functionToCheck) === '[object Function]';
}
function isUndefined(val) {
    return typeof val === 'undefined';
}
function isDefined(val) {
    return val !== undefined && val !== null;
}
function rgbaToHex(r, g, b) {
    const outParts = [r.toString(16), g.toString(16), b.toString(16)];
    outParts.forEach((part, i) => {
        if (part.length === 1) {
            outParts[i] = `0${part}`;
        }
    });
    return parseInt(outParts.join(''), 16);
}
/**
 * 解析css样式格式的字符串获取颜色
 * @param colorString css样式格式的字符串
 */
function getColor(colorString) {
    const hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
    const rgb = [0, 0, 0, 1];
    let match;
    let i;
    let hexAlpha;
    if ((match = colorString.match(hex))) {
        // eslint-disable-next-line prefer-destructuring
        hexAlpha = match[2];
        // eslint-disable-next-line prefer-destructuring
        match = match[1];
        for (i = 0; i < 3; i++) {
            // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
            const i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
    }
    else if ((match = colorString.match(rgba))) {
        for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i + 1], 10);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            }
            else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    }
    return {
        hex: rgbaToHex(rgb[0], rgb[1], rgb[2]),
        alpha: rgb[3],
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getErrMsg(errMsg) {
    let result = errMsg;
    try {
        if (typeof errMsg === 'object') {
            if (typeof errMsg.errMsg === 'string') {
                result = errMsg.errMsg;
            }
            else if (typeof errMsg.errmsg === 'string') {
                result = errMsg.errmsg;
            }
            else if (typeof errMsg.message === 'string') {
                result = errMsg.message;
            }
            else {
                result = JSON.stringify(errMsg);
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return result;
}
/**
 * 给url设置query
 * @param url 原地址
 * @param key query key
 * @param value query value
 * @returns 增加query后的url
 */
function setQueryString(url, key, value) {
    if (!value) {
        return url;
    }
    let getUrl = url;
    const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
    if (getUrl.match(re)) {
        return getUrl.replace(re, `$1${key}=${value}$2`);
    }
    const separator = getUrl.indexOf('?') !== -1 ? '&' : '?';
    const hash = getUrl.split('#');
    getUrl = `${hash[0] + separator + key}=${value}`;
    if (hash[1]) {
        getUrl += `#${hash[1]}`;
    }
    return getUrl;
}
/**
 * 过滤特殊字符
 * @param str 需要过滤的字符串
 */
function filterSpecialChar(str) {
    return str.replace(/[\r\n\t\s]/g, '');
}
/**
 * 给字符串添加省略号
 */
function addEllipsis(str) {
    if (str.lastIndexOf(_const__WEBPACK_IMPORTED_MODULE_1__.ELLIPSIS) === str.length - 1) {
        return str;
    }
    return str + _const__WEBPACK_IMPORTED_MODULE_1__.ELLIPSIS;
}
/**
 * 价格转为元（后台统一给的价格是分）
 * @returns 返回数字类型，需要业务侧自行判断返回0的场景
 */
function centToYuan(value) {
    if (value === undefined || value === null) {
        return 0;
    }
    return Number(((+value || 0) / 100).toFixed(2));
}
/**
 * 复制到剪切板
 * @param value 复制内容
 */
function clipboard(value) {
    if (typeof navigator.clipboard !== 'undefined') {
        navigator.clipboard.writeText(value);
    }
    else {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.top = '-100px';
        textarea.value = value;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
    }
}
/**
 * 延迟调用，相当于setTimeout(callback, delayTime);
 */
function delay(callback, delayTime) {
    let start = 0;
    function loop(timestamp) {
        if (!start) {
            start = timestamp;
        }
        const progress = timestamp - start;
        if (progress < delayTime) {
            requestAnimationFrame(loop);
        }
        else {
            callback();
        }
    }
    requestAnimationFrame(loop);
}


/***/ }),

/***/ "./node_modules/@tencent/minigamefe/minigame/const.js":
/*!************************************************************!*\
  !*** ./node_modules/@tencent/minigamefe/minigame/const.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "DeviceOrientation": () => (/* binding */ DeviceOrientation),
/* harmony export */   "EnvType": () => (/* binding */ EnvType),
/* harmony export */   "AppStateType": () => (/* binding */ AppStateType),
/* harmony export */   "RuntimeType": () => (/* binding */ RuntimeType)
/* harmony export */ });
var Platform;
(function (Platform) {
    Platform["devtools"] = "devtools";
    Platform["android"] = "android";
    Platform["ios"] = "ios";
    Platform["windows"] = "windows";
    Platform["mac"] = "mac";
})(Platform || (Platform = {}));
var DeviceOrientation;
(function (DeviceOrientation) {
    DeviceOrientation["portrait"] = "portrait";
    DeviceOrientation["landscape"] = "landscape";
    DeviceOrientation["landscapeLeft"] = "landscapeLeft";
    DeviceOrientation["landscapeRight"] = "landscapeRight";
})(DeviceOrientation || (DeviceOrientation = {}));
var EnvType;
(function (EnvType) {
    EnvType["DEVELOP"] = "develop";
    EnvType["TRIAL"] = "trial";
    EnvType["RELEASE"] = "release";
})(EnvType || (EnvType = {}));
var AppStateType;
(function (AppStateType) {
    AppStateType[AppStateType["release"] = 1] = "release";
    AppStateType[AppStateType["develop"] = 2] = "develop";
    AppStateType[AppStateType["trial"] = 3] = "trial";
})(AppStateType || (AppStateType = {}));
var RuntimeType;
(function (RuntimeType) {
    RuntimeType[RuntimeType["Android"] = 0] = "Android";
    RuntimeType[RuntimeType["IOSJscore"] = 1] = "IOSJscore";
    RuntimeType[RuntimeType["IOSWK"] = 2] = "IOSWK";
    RuntimeType[RuntimeType["UnKnow"] = 3] = "UnKnow";
    RuntimeType[RuntimeType["PC"] = 4] = "PC";
    RuntimeType[RuntimeType["Devtools"] = 5] = "Devtools";
    RuntimeType[RuntimeType["IPadJscore"] = 6] = "IPadJscore";
    RuntimeType[RuntimeType["IPadWK"] = 7] = "IPadWK";
    RuntimeType[RuntimeType["IOSWKPlus"] = 8] = "IOSWKPlus";
    RuntimeType[RuntimeType["IPadWKPlus"] = 9] = "IPadWKPlus";
})(RuntimeType || (RuntimeType = {}));


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./src/common/base.ts":
/*!****************************!*\
  !*** ./src/common/base.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Singleton": () => (/* binding */ Singleton)
/* harmony export */ });
class Singleton {
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}


/***/ }),

/***/ "./src/common/worker-type.ts":
/*!***********************************!*\
  !*** ./src/common/worker-type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType),
/* harmony export */   "EmitterEventType": () => (/* binding */ EmitterEventType),
/* harmony export */   "MsgType": () => (/* binding */ MsgType),
/* harmony export */   "XHREventType": () => (/* binding */ XHREventType),
/* harmony export */   "XHRActionType": () => (/* binding */ XHRActionType),
/* harmony export */   "ShortAudioCmdType": () => (/* binding */ ShortAudioCmdType)
/* harmony export */ });
var MessageType;
(function (MessageType) {
    /**
     * 传递配置
     */
    MessageType[MessageType["config"] = 0] = "config";
    /**
     * 发送写文件事件
     */
    MessageType[MessageType["writeFile"] = 1] = "writeFile";
    /**
     * worker实现xhr
     */
    MessageType[MessageType["FakeXHR"] = 2] = "FakeXHR";
    /**
     * worker实现短音频
     */
    MessageType[MessageType["shortAudio"] = 3] = "shortAudio";
})(MessageType || (MessageType = {}));
var EmitterEventType;
(function (EmitterEventType) {
    /**
     * worker发送的是xhr事件，通知fake-xhr做处理
     */
    EmitterEventType["XHREvent"] = "xhr-event";
})(EmitterEventType || (EmitterEventType = {}));
var MsgType;
(function (MsgType) {
    MsgType[MsgType["OriginEvent"] = 0] = "OriginEvent";
})(MsgType || (MsgType = {}));
var XHREventType;
(function (XHREventType) {
    XHREventType["Load"] = "load";
})(XHREventType || (XHREventType = {}));
var XHRActionType;
(function (XHRActionType) {
    XHRActionType["Load"] = "load";
    XHRActionType["Error"] = "error";
    XHRActionType["Send"] = "send";
    XHRActionType["Open"] = "open";
    XHRActionType["SetResponseType"] = "setResponseType";
    XHRActionType["SetRequestHeader"] = "setRequestHeader";
    XHRActionType["Timeout"] = "timeout";
    XHRActionType["Abort"] = "abort";
})(XHRActionType || (XHRActionType = {}));
var ShortAudioCmdType;
(function (ShortAudioCmdType) {
    ShortAudioCmdType["Create"] = "create";
    ShortAudioCmdType["Play"] = "play";
    ShortAudioCmdType["Stop"] = "stop";
    ShortAudioCmdType["Destroy"] = "destroy";
    ShortAudioCmdType["PreDownload"] = "PreDownload";
    ShortAudioCmdType["MuteChange"] = "MuteChange";
})(ShortAudioCmdType || (ShortAudioCmdType = {}));


/***/ }),

/***/ "./src/config/const.ts":
/*!*****************************!*\
  !*** ./src/config/const.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileError": () => (/* binding */ FileError),
/* harmony export */   "FileExternType": () => (/* binding */ FileExternType)
/* harmony export */ });
var FileError;
(function (FileError) {
    FileError["InvalidCachePath"] = "invalid cache path";
    FileError["EmptyPath"] = "empty path";
    FileError["EmptyContent"] = "empty content";
    FileError["ExceedMemory"] = "exceed memory";
    FileError["FrequentWrite"] = "frequent writes in a short time";
    FileError["OutOfRange"] = "out of range";
})(FileError || (FileError = {}));
var FileExternType;
(function (FileExternType) {
    FileExternType["QuotaControlError"] = "quota_control_error";
    FileExternType["WriteFile"] = "writeFile";
    FileExternType["ExceedMaxStorage"] = "exceed_max_storage";
})(FileExternType || (FileExternType = {}));


/***/ }),

/***/ "./src/fs/file-extra-manager.ts":
/*!**************************************!*\
  !*** ./src/fs/file-extra-manager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageWKArrayBuffer": () => (/* binding */ manageWKArrayBuffer)
/* harmony export */ });
/* eslint-disable no-param-reassign */
// wk 写入数据的时候做了特殊处理，wasm3如果要读回出来，也要做特殊处理
// 被替换的数值需要记录原来的位置，这里每个位置占4个字节，取216进制，就使得位置信息也避开utf16编码不允许的范围
const ByteReplaceIndexWeight = [Math.pow(216, 3), Math.pow(216, 2), 216, 1];
// 被替换的数值减去这个magicNumber得到替换后的值
const ByteReplaceMagicNumber = 200;
function manageWKArrayBuffer(bytes) {
    const len = bytes.byteLength;
    // 后8个为标识符,如果是 11+index说明做了数值替换，参见pack那段，_new_native的反解析
    if (bytes.slice(-8).every((byte, index) => 11 + index === byte)) {
        let i = 1;
        const extraTailLength = 12; // 额外信息尾部的长度，其中后8为标识位，剩余4个字节为count，记录有多少个数值被替换了
        const count = bytes.slice(-12, -8).reduce((total, num, index) => total + num * ByteReplaceIndexWeight[index], 0);
        // 每个替换节点信息占6个字节
        const itemLength = 6;
        while (i <= count) {
            const group = len - extraTailLength - i * itemLength;
            const a1 = bytes[group];
            const a2 = bytes[group + 1] + ByteReplaceMagicNumber;
            const index0 = bytes[group + 2];
            const index1 = bytes[group + 3];
            const index2 = bytes[group + 4];
            const index3 = bytes[group + 5];
            // index 计算出被替换的数值的位置
            const index = index0 * ByteReplaceIndexWeight[0]
                + index1 * ByteReplaceIndexWeight[1]
                + index2 * ByteReplaceIndexWeight[2]
                + index3;
            // 还原被替换的数值
            bytes[index] = a1;
            bytes[index + 1] = a2;
            i += 1;
        }
        // 还原完占替换信息后，前面还有一串0填充来让长度再编码范围内，这里检查填充是否为0,fillCount 表示有多少个0，数值由两个字节拼接而成
        const fillCount = (bytes[len - extraTailLength - (i - 1) * itemLength - 1] << 8)
            + bytes[len - extraTailLength - (i - 1) * itemLength - 2];
        // 如果填充的不为0就说明是没处理过的，直接返回原来的内容
        for (let k = 1; k <= fillCount; k++) {
            if (bytes[len - extraTailLength - (i - 1) * itemLength - 2 - k] !== 0) {
                return [bytes.buffer, false];
            }
        }
        return [bytes.slice(0, len - extraTailLength - (i - 1) * itemLength - fillCount - 2).buffer, true];
    }
    if (bytes.slice(-8).every((byte, index) => 21 + index === byte)) {
        // 后8个为标识符
        const fillCount = (bytes[len - 9] << 8) + bytes[len - 10];
        // 如果填充的不为0就说明是没处理过的
        for (let k = 1; k <= fillCount; k++) {
            if (bytes[len - 10 - k] !== 0) {
                return [bytes.buffer, false];
            }
        }
        return [bytes.slice(0, len - 8 - fillCount - 2).buffer, true];
    }
    return [bytes.buffer, false];
}


/***/ }),

/***/ "./src/http/http-task.ts":
/*!*******************************!*\
  !*** ./src/http/http-task.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpStatus": () => (/* binding */ HttpStatus),
/* harmony export */   "HttpEventName": () => (/* binding */ HttpEventName),
/* harmony export */   "FAKE_HTTP_ERROR_STATUS_CODE": () => (/* binding */ FAKE_HTTP_ERROR_STATUS_CODE),
/* harmony export */   "HTTP_OK": () => (/* binding */ HTTP_OK),
/* harmony export */   "HttpTask": () => (/* binding */ HttpTask),
/* harmony export */   "HttpTaskManager": () => (/* binding */ HttpTaskManager)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/** @format */

var HttpStatus;
(function (HttpStatus) {
    HttpStatus["DEFAULT"] = "default";
    HttpStatus["OK"] = "ok";
    HttpStatus["ERROR"] = "error";
})(HttpStatus || (HttpStatus = {}));
var HttpEventName;
(function (HttpEventName) {
    HttpEventName["LOADED"] = "loaded";
    HttpEventName["ERROR"] = "error";
    HttpEventName["COMPLETE"] = "complete";
})(HttpEventName || (HttpEventName = {}));
const FAKE_HTTP_ERROR_STATUS_CODE = 400;
const HTTP_OK = 200;
/**
 * 用于下载分包时模拟一个http任务
 *
 * @export
 * @class HttpTask
 */
class HttpTask {
    constructor(url) {
        this.emitter = new (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default())();
        this.url = url;
        this.localStatus = HttpStatus.DEFAULT; // ok,error
        this.localStatusCode = undefined;
        this.localResponse = '';
    }
    get status() {
        return this.localStatus;
    }
    set status(flag) {
        if (flag && !this.localStatus) {
            this.localStatus = flag;
        }
    }
    get error() {
        return this.localError;
    }
    set error(err) {
        this.localError = err;
    }
    get statusCode() {
        return this.localStatusCode || 0;
    }
    set statusCode(code) {
        if (this.localStatusCode === undefined && Number.isInteger(code)) {
            this.localStatusCode = code;
            if (this.status === HttpStatus.DEFAULT) {
                if (code && code >= 200 && code < 300) {
                    this.status = HttpStatus.OK;
                }
                else {
                    this.status = HttpStatus.ERROR;
                }
            }
        }
    }
    get response() {
        return this.localResponse;
    }
    set response(res) {
        if (this.status === HttpStatus.DEFAULT) {
            if (res) {
                this.status = HttpStatus.OK;
                this.localResponse = res;
            }
            else {
                this.status = HttpStatus.ERROR;
                this.localResponse = '';
            }
        }
    }
    on(eventName) {
        return new Promise((resolve) => {
            // 如果http已经完成，直接返回
            if (this.status !== HttpStatus.DEFAULT) {
                resolve(this);
            }
            else {
                this.emitter.on(eventName, () => {
                    resolve(this);
                });
            }
        });
    }
    once(eventName) {
        return new Promise((resolve) => {
            this.emitter.once(eventName, () => {
                resolve(this);
            });
        });
    }
    emit(eventName) {
        this.emitter.emit(eventName);
    }
}
/**
 *HttpTask的管理器
 *
 * @export
 * @class HttpTaskManager
 */
class HttpTaskManager {
    constructor() {
        this.httpTasks = new Map();
    }
    isSameTask(task1, task2) {
        return task1.url === task2.url;
    }
    hasTask(task) {
        return this.httpTasks.has(task.url);
    }
    addTask(task) {
        if (!this.hasTask(task)) {
            this.httpTasks.set(task.url, task);
        }
    }
    removeTask(task) {
        if (this.hasTask(task)) {
            this.httpTasks.delete(task.url);
        }
    }
    getTaskByUrl(url) {
        if (url) {
            return this.httpTasks.get(url);
        }
        return null;
    }
}


/***/ }),

/***/ "./src/worker/adapter/XMLHttpRequest.ts":
/*!**********************************************!*\
  !*** ./src/worker/adapter/XMLHttpRequest.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XMLHttpRequest)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * 取自https://git.woa.com/wxweb/weapp-adapter/blob/master/src/XMLHttpRequest.js
 */
const _url = new WeakMap();
const _method = new WeakMap();
const _requestHeader = new WeakMap();
const _responseHeader = new WeakMap();
const _requestTask = new WeakMap();
function _triggerEvent(type, ...args) {
    if (typeof this[`on${type}`] === 'function') {
        this[`on${type}`].apply(this, args);
    }
}
function _changeReadyState(readyState) {
    this.readyState = readyState;
    _triggerEvent.call(this, 'readystatechange');
}
class XMLHttpRequest {
    constructor() {
        /*
         * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
         */
        this.onabort = null;
        this.onerror = null;
        this.onload = null;
        this.onloadstart = null;
        this.onprogress = null;
        this.ontimeout = null;
        this.onloadend = null;
        this.onreadystatechange = null;
        this.readyState = 0;
        this.response = '';
        this.responseText = null;
        this.responseType = undefined;
        this.responseXML = null;
        this.status = 0;
        this.statusText = '';
        this.upload = {};
        this.withCredentials = false;
        _requestHeader.set(this, {
            'content-type': 'application/x-www-form-urlencoded',
        });
        _responseHeader.set(this, {});
    }
    abort() {
        const myRequestTask = _requestTask.get(this);
        if (myRequestTask) {
            myRequestTask.abort();
        }
    }
    getAllResponseHeaders() {
        const responseHeader = _responseHeader.get(this);
        return Object.keys(responseHeader).map(header => `${header}: ${responseHeader[header]}`)
            .join('\n');
    }
    getResponseHeader(header) {
        return _responseHeader.get(this)[header];
    }
    open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
        _method.set(this, method);
        _url.set(this, url);
        _changeReadyState.call(this, XMLHttpRequest.OPENED);
    }
    overrideMimeType() {
    }
    send(data = '') {
        if (this.readyState !== XMLHttpRequest.OPENED) {
            throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');
        }
        else {
            // if (data instanceof Uint8Array) {
            //   // unity 过来的请求会出现Uint8Array的数组，而客户端这里处理有问题，先这样兼容
            //   data = wx.decode({ data: Uint8Array.from(data).buffer, format: 'utf8' });
            // }
            worker.request({
                data,
                url: _url.get(this),
                method: _method.get(this),
                header: _requestHeader.get(this),
                responseType: this.responseType,
                success: ({ data, statusCode, header, profile }) => {
                    if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
                        try {
                            data = JSON.stringify(data);
                        }
                        catch (e) {
                            data = data;
                        }
                    }
                    this.status = statusCode;
                    _responseHeader.set(this, header);
                    _triggerEvent.call(this, 'loadstart');
                    _changeReadyState.call(this, XMLHttpRequest.HEADERS_RECEIVED);
                    _changeReadyState.call(this, XMLHttpRequest.LOADING);
                    this.response = data;
                    this.profile = profile;
                    if (data instanceof ArrayBuffer) {
                        // this.responseText = '';
                        // const bytes = new Uint8Array(data);
                        // const len = bytes.byteLength;
                        // for (let i = 0; i < len; i++) {
                        //   this.responseText += String.fromCharCode(bytes[i]);
                        // }
                    }
                    else {
                        this.responseText = data;
                    }
                    _changeReadyState.call(this, XMLHttpRequest.DONE);
                    _triggerEvent.call(this, 'load');
                    _triggerEvent.call(this, 'loadend');
                },
                fail: ({ errMsg }) => {
                    // TODO 规范错误
                    if (errMsg.indexOf('abort') !== -1) {
                        _triggerEvent.call(this, 'abort');
                    }
                    else {
                        _triggerEvent.call(this, 'error', errMsg);
                    }
                    _triggerEvent.call(this, 'loadend');
                },
            });
        }
    }
    setRequestHeader(header, value) {
        const myHeader = _requestHeader.get(this);
        myHeader[header] = value;
        _requestHeader.set(this, myHeader);
    }
}
// TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
XMLHttpRequest.UNSEND = 0;
XMLHttpRequest.OPENED = 1;
XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.LOADING = 3;
XMLHttpRequest.DONE = 4;


/***/ }),

/***/ "./src/worker/common/const.ts":
/*!************************************!*\
  !*** ./src/worker/common/const.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wxFs": () => (/* binding */ wxFs)
/* harmony export */ });
const wxFs = worker.getFileSystemManager();


/***/ }),

/***/ "./src/worker/common/path.ts":
/*!***********************************!*\
  !*** ./src/worker/common/path.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sep": () => (/* binding */ sep),
/* harmony export */   "join": () => (/* binding */ join),
/* harmony export */   "filterUrl": () => (/* binding */ filterUrl),
/* harmony export */   "basename": () => (/* binding */ basename),
/* harmony export */   "searchParams": () => (/* binding */ searchParams),
/* harmony export */   "dirname": () => (/* binding */ dirname),
/* harmony export */   "extname": () => (/* binding */ extname),
/* harmony export */   "resolveCachePath": () => (/* binding */ resolveCachePath),
/* harmony export */   "getShortFilename": () => (/* binding */ getShortFilename),
/* harmony export */   "getMd5FromFilename": () => (/* binding */ getMd5FromFilename),
/* harmony export */   "isValidHttpUrl": () => (/* binding */ isValidHttpUrl),
/* harmony export */   "isCacheableUrl": () => (/* binding */ isCacheableUrl),
/* harmony export */   "isCacheableFile": () => (/* binding */ isCacheableFile),
/* harmony export */   "isErasableFile": () => (/* binding */ isErasableFile),
/* harmony export */   "isTextureUrl": () => (/* binding */ isTextureUrl),
/* harmony export */   "resolveBuildUrl": () => (/* binding */ resolveBuildUrl),
/* harmony export */   "normalizePath": () => (/* binding */ normalizePath),
/* harmony export */   "isUnityAnalysisUrl": () => (/* binding */ isUnityAnalysisUrl)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
/* eslint-disable @typescript-eslint/naming-convention */
/** @format */

let unityNamespace;
let env;
let bundleHashLength;
let texturesHashLength;
let texturesPath;
let needCacheTextures;
let CACHE_DIR;
let CACHE_DIR_NAME;
let PRIVATE_PATH;
let USER_PATH;
_config__WEBPACK_IMPORTED_MODULE_0__["default"].onReady(() => {
    unityNamespace = _config__WEBPACK_IMPORTED_MODULE_0__["default"].sharedConfig;
    ({
        bundleHashLength = 32,
        texturesHashLength = 8,
        texturesPath = 'Assets/Textures',
        needCacheTextures,
    } = unityNamespace);
    env = _config__WEBPACK_IMPORTED_MODULE_0__["default"].env;
    ({
        CACHE_DIR,
        CACHE_DIR_NAME,
        PRIVATE_PATH,
        USER_PATH,
    } = _config__WEBPACK_IMPORTED_MODULE_0__["default"].constants);
    removeCacheDir = new RegExp(`${sep}?${CACHE_DIR_NAME}`);
});
// const {
//   bundleHashLength = 32,
//   texturesHashLength = 8,
//   texturesPath = 'Assets/Textures',
//   needCacheTextures,
// } = unityNamespace;
// windows小游戏用\,真机用/
// export const sep = env.isPC ? '\\' : '/';
// windows上的路径也统一用/，但文件API可能会返回\，需要转成/
const sep = '/';
const DATA_ID = 'data.unityweb';
const WASM_ID = 'wasm.code.unityweb';
const removeMultiSlash = /[^:]\/{2,}/gi;
const removeReleativePath = /\.[./]+/gi;
const removeBrackets = /[<>]+/gi;
const removeUnixSep = /\\+/gi;
let removeCacheDir = new RegExp(`${sep}?${CACHE_DIR_NAME}`);
/**
 * 路径拼接，会处理不合法的双斜杠
 *
 * @export
 * @param {...string[]} paths
 * @return {*}
 */
function join(...paths) {
    if (!(paths === null || paths === void 0 ? void 0 : paths.length)) {
        return '';
    }
    return filterUrl(paths.filter(path => { var _a; return !!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path)); }).join(sep));
}
/**
 * 去除非法双斜杠
 *
 * @export
 * @param {string} path
 * @returns
 */
function filterUrl(path) {
    if (!(path === null || path === void 0 ? void 0 : path.trim())) {
        return '';
    }
    return path
        .replace(removeReleativePath, '')
        .replace(removeBrackets, '')
        .replace(removeMultiSlash, m => m.replace(/\/+/g, sep));
}
/**
 * 返回文件名，有传入ext时剔除ext
 *
 * @export
 * @param {string} path
 * @param {string} [_ext='']
 * @return {*}
 */
function basename(path, _ext = '') {
    var _a;
    if (!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path)) || path.endsWith(sep)) {
        return '';
    }
    let ext = _ext;
    if (ext) {
        ext = ext.startsWith('.') ? ext : `.${ext}`;
    }
    let filename = path.substring(path.lastIndexOf(sep) + 1);
    // 文件名不保留query和hash
    if (filename.includes('?')) {
        filename = filename.substring(0, filename.indexOf('?'));
    }
    if (filename.includes('#')) {
        filename = filename.substring(0, filename.indexOf('#'));
    }
    return filename.replace(ext === null || ext === void 0 ? void 0 : ext.toLowerCase(), '').replace(ext === null || ext === void 0 ? void 0 : ext.toUpperCase(), '');
}
function searchParams(path) {
    return path.substring(path.lastIndexOf(sep) + 1);
}
/**
 * 返回目录名
 * 如果传入url，返回剔除data_cdn的部分
 * 如果传入缓存路径，返回相对插件缓存目录的部分
 *
 * @export
 * @param {string} path
 * @param {boolean} [relativeToPluginCache=true] 是否返回相对插件缓存路径的目录名
 * @returns
 */
function dirname(path, relativeToPluginCache = true) {
    var _a;
    if (!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path))) {
        return '';
    }
    // 统一url后，如果线上有用lastest的版本，兼容下，之前有STREAMING_CDN的配置
    const dataCdn = unityNamespace.STREAMING_CDN || unityNamespace.DATA_CDN;
    let prefix = path.replace(dataCdn, '').replace(CACHE_DIR, '')
        .replace(USER_PATH, '')
        .replace(PRIVATE_PATH, '');
    if (relativeToPluginCache) {
        prefix = prefix.replace(removeCacheDir, '');
    }
    prefix = prefix.substring(0, prefix.lastIndexOf(sep));
    if (prefix) {
        return prefix.startsWith(sep) ? prefix : `${sep}${prefix}`;
    }
    return prefix;
}
/**
 * 取文件拓展名
 *
 * @export
 * @param {string} path
 * @return {*}
 */
function extname(path) {
    const filename = basename(path);
    if (!filename
        || !filename.includes('.')
        || (filename.startsWith('.') && filename.indexOf('.') === filename.lastIndexOf('.'))) {
        return '';
    }
    return filename.substring(filename.lastIndexOf('.'));
}
/**
 * 生成缓存路径
 *
 * @export
 * @param {string} path
 * @param {boolean} [relativeToPluginCache=true]
 * @returns
 */
function resolveCachePath(path, relativeToPluginCache = true) {
    var _a;
    if (!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path)))
        return '';
    if (path.includes(USER_PATH))
        return path;
    const dir = dirname(path, relativeToPluginCache);
    const filename = basename(path);
    const cachePath = join(relativeToPluginCache ? CACHE_DIR : USER_PATH, dir, filename);
    // 开发者可能使用姿势不对，导致缓存路径为http://usr/__GAME_FILE_CACHE/https://xxx 这种格式，会导致写入错误或者判断有无缓存逻辑异常
    // TODO: 支持xxx.txt?a=1&b=2#test 这种特殊路径的缓存
    if (dir.includes('/http:') || dir.includes('/https:')) {
        return '';
    }
    return cachePath;
}
/**
 * 取剔除md5后的文件名
 *
 * @export
 * @param {string} path
 * @return {*}
 */
function getShortFilename(path) {
    const filename = basename(path);
    if (!filename)
        return '';
    const isData = filename.includes(DATA_ID) || filename.includes(WASM_ID);
    const isTextures = path.includes(texturesPath);
    let reg;
    if (isData) {
        reg = /([a-zA-Z0-9]{16}\.)/gi;
    }
    else if (isTextures) {
        reg = new RegExp(`(.[a-zA-Z0-9]{${texturesHashLength}})`);
    }
    else {
        reg = new RegExp(`([_-][a-zA-Z0-9]{${bundleHashLength}})(\\.\\w+)*$`);
    }
    const result = reg.exec(filename) || [];
    const replaceStr = result[1];
    return replaceStr ? filename.replace(replaceStr, '') : filename;
}
/**
 * 取md5
 *
 * @export
 * @param {string} path
 * @return {*}
 */
function getMd5FromFilename(path) {
    const filename = basename(path);
    if (!filename)
        return '';
    const isData = filename.includes(DATA_ID) || filename.includes(WASM_ID);
    const isTextures = path.includes(texturesPath);
    let reg;
    if (isData) {
        reg = /([a-zA-Z0-9]{16})\./gi;
    }
    else if (isTextures) {
        reg = new RegExp(`\\.([a-zA-Z0-9]{${texturesHashLength}})`);
    }
    else {
        // 开发者可自定义bundle中hash长度，背景是部分游戏bundle会自己计算crc，或是自定义hash长度
        // 分隔符可能是-也可能是_
        // 部分开发者文件名也是一串hash，导致md5取错，以字符串末尾为主
        // 可能带多个文件拓展名，例如: .unity3d.manifest; 会导致匹配失败, 改为*匹配, 可能影响性能
        reg = new RegExp(`[_-]([a-zA-Z0-9]{${bundleHashLength}})(\\.\\w+)*$`);
    }
    const result = reg.exec(filename);
    let md5 = '';
    if (result) {
        [, md5] = result;
    }
    return md5 || '';
}
/**
 * 简单检查是否url
 *
 * @export
 * @param {string} path
 * @return {*}
 */
function isValidHttpUrl(path) {
    var _a;
    if (!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path)) || typeof path !== 'string' || !path.includes('http')) {
        return false;
    }
    return true;
}
/**
 * 是否符合bundle文件规则
 *
 * @export
 * @param {string} path
 * @return {*}
 */
function isCacheableUrl(path) {
    if (!isValidHttpUrl(path))
        return false;
    if (needCacheTextures && isTextureUrl(path)) {
        return true;
    }
    return isCacheableFile(path);
}
function isCacheableFile(path) {
    // 判定为下载bundle的路径标识符，此路径下的下载，会自动缓存
    const cacheableFileIdentifier = ['StreamingAssets'];
    // 命中路径标识符的情况下，并不是所有文件都有必要缓存，过滤下不需要缓存的文件
    // const excludeFileIdentifier = ['json'];
    const excludeFileIdentifier = ['json', '/soundsources$v_story'];
    if (cacheableFileIdentifier.some(identifier => path.includes(identifier)
        && excludeFileIdentifier.every(excludeIdentifier => !path.includes(excludeIdentifier)))) {
        return true;
    }
    return false;
}
function isErasableFile(info) {
    // 用于特定AssetBundle的缓存保持
    // if (unityNamespace.WXAssetBundles.has(info.path)) {
    //   return false;
    // }
    // 达到缓存上限时，不会被自动清理的文件
    const inErasableIdentifier = [];
    if (inErasableIdentifier.some(identifier => info.path.includes(identifier))) {
        return false;
    }
    return true;
}
;
/**
 * 判断是否纹理URL
 *
 * @export
 * @param {string} path
 * @returns
 */
function isTextureUrl(path) {
    if (!isValidHttpUrl(path))
        return false;
    if (path.includes(texturesPath)) {
        return true;
    }
    return false;
}
function resolveBuildUrl(buildUrl) {
    // 统一url后，如果线上有用lastest的版本，兼容下
    const dataCdn = unityNamespace.STREAMING_CDN || unityNamespace.DATA_CDN;
    const streamingUrlPrefixPath = unityNamespace.streamingUrlPrefixPath || '';
    const isFullUrl = buildUrl.match(/(http|https|ftp|file):\/\//);
    let path = buildUrl;
    if (!isFullUrl) {
        path = join(dataCdn, streamingUrlPrefixPath, buildUrl);
    }
    return path;
}
function normalizePath(path) {
    if (!env.isPC)
        return path;
    return path.replace(removeUnixSep, sep);
}
function isUnityAnalysisUrl(path) {
    // 如果是
    if (path.includes('cloud.unity3d.com')) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/worker/common/util.ts":
/*!***********************************!*\
  !*** ./src/worker/common/util.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awaitWrap": () => (/* binding */ awaitWrap),
/* harmony export */   "uid": () => (/* binding */ uid),
/* harmony export */   "isSuccessStatusCode": () => (/* binding */ isSuccessStatusCode),
/* harmony export */   "DIVISOR": () => (/* binding */ DIVISOR),
/* harmony export */   "byteToMB": () => (/* binding */ byteToMB),
/* harmony export */   "byteToKB": () => (/* binding */ byteToKB)
/* harmony export */ });
function awaitWrap(promise) {
    return promise.then((data) => [null, data]).catch(err => [err, null]);
}
function uid(n) {
    const chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    let res = '';
    for (let i = 0; i < n; i++) {
        const id = Math.floor(Math.random() * 36);
        res += chars[id];
    }
    return res;
}
function isSuccessStatusCode(statusCode) {
    return (statusCode >= 200 && statusCode < 300) || statusCode === 304;
}
const DIVISOR = 1024;
function byteToMB(byte) {
    const nByte = Number(byte);
    if (nByte && !Number.isNaN(nByte)) {
        return Number((nByte / DIVISOR / DIVISOR).toFixed(2));
    }
    return 0;
}
function byteToKB(byte) {
    const nByte = Number(byte);
    if (nByte && !Number.isNaN(nByte)) {
        return Number((nByte / DIVISOR).toFixed(2));
    }
    return 0;
}


/***/ }),

/***/ "./src/worker/config/index.ts":
/*!************************************!*\
  !*** ./src/worker/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tencent/minigamefe/common/util */ "./node_modules/@tencent/minigamefe/common/util.js");
/* harmony import */ var _tencent_minigamefe_minigame_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tencent/minigamefe/minigame/const */ "./node_modules/@tencent/minigamefe/minigame/const.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);



class Config extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    constructor() {
        super(...arguments);
        this.inited = false;
    }
    onReady(cb) {
        if (!cb || typeof cb !== 'function') {
            return;
        }
        if (this.inited) {
            cb();
        }
        else {
            this.on('config-ready', cb);
        }
    }
    init() {
        console.log('setup initPromise');
        this.initPromise = new Promise((resolve) => {
            this.resolvePromise = () => {
                this.inited = true;
                this.emit('config-ready');
                resolve();
            };
        });
    }
    initConfig(payload) {
        const { systemInfo, env, sharedConfig, constants } = payload;
        const { version } = systemInfo;
        this.env = env;
        this.systemInfo = systemInfo;
        this.sharedConfig = sharedConfig;
        this.constants = constants;
        // 安卓才需要使用worker写文件
        // this.isAndroid = platform.toLocaleLowerCase() === 'android';
        // 8.0.18以下版本出现写文件报错
        const isClientValid = (0,_tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_1__.compareVersion)(version, '8.0.18') > -1;
        this.hasSharedBuffer = !!worker.createSharedArrayBuffer;
        this.supportSharedBuffer = this.env.isAndroid && this.hasSharedBuffer;
        const fs = worker.getFileSystemManager ? worker.getFileSystemManager() : null;
        this.supportWorkerFs = this.env.isAndroid && !!fs && isClientValid;
        const { accountInfo: { miniProgram: { envVersion } } } = env;
        this.isRelease = envVersion === _tencent_minigamefe_minigame_const__WEBPACK_IMPORTED_MODULE_2__.EnvType.RELEASE;
        const dataCdn = this.sharedConfig.STREAMING_CDN || this.sharedConfig.DATA_CDN;
        this.assetPath = `${(dataCdn || '').replace(/\/$/, '')}/Assets`;
        this.isSupportPlayBackRate = !this.isAndroid || (0,_tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_1__.compareVersion)(version, '8.0.23') > -1;
        this.isWEBAudioMute = false;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Config());


/***/ }),

/***/ "./src/worker/fs/file-system.ts":
/*!**************************************!*\
  !*** ./src/worker/fs/file-system.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileSystem)
/* harmony export */ });
/* harmony import */ var _common_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/path */ "./src/worker/common/path.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/worker/fs/index.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/const */ "./src/worker/common/const.ts");
/* harmony import */ var _log_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../log/logger */ "./src/worker/log/logger.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util */ "./src/worker/common/util.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-misused-promises */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @format */
// import {
//   CACHE_DIR,
//   CACHE_DIR_NAME,
//   DEFAULT_RELEASE_SIZE,
//   FileSystemErrorType,
//   MAX_ALLOW_SIZE,
//   USER_PATH,
// } from '../common/config';
// import { PluginReportParams, report21493 } from '../report';
// import { unityNamespace } from '../common/env';







let CACHE_DIR;
let CACHE_DIR_NAME;
let DEFAULT_RELEASE_SIZE;
let MAX_ALLOW_SIZE;
let USER_PATH;
let unityNamespace;
_config__WEBPACK_IMPORTED_MODULE_5__["default"].onReady(() => {
    unityNamespace = _config__WEBPACK_IMPORTED_MODULE_5__["default"].sharedConfig;
    ({
        CACHE_DIR,
        CACHE_DIR_NAME,
        DEFAULT_RELEASE_SIZE,
        MAX_ALLOW_SIZE,
        USER_PATH,
    } = _config__WEBPACK_IMPORTED_MODULE_5__["default"].constants);
});
class FileSystem {
    constructor() {
        // 是否第一次初始化
        this.inited = false;
        this.fileStats = [];
        this.fileInfoMap = new Map();
        this.dirs = [];
        this.fs = _common_const__WEBPACK_IMPORTED_MODULE_2__.wxFs;
        this.totalSize = 0;
        this.isOldUser = false;
        this.cacheDirInited = false;
        _config__WEBPACK_IMPORTED_MODULE_5__["default"].onReady(() => {
            this.firstInitPromise = this.init();
        });
    }
    static getIntance() {
        if (!FileSystem.instance) {
            FileSystem.instance = new FileSystem();
        }
        return FileSystem.instance;
    }
    /**
     * 恢复游戏用，清理所有插件缓存
     *
     * @memberof FileSystem
     */
    cleanAllCache() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cleanAllCachePromise) {
                return this.cleanAllCachePromise;
            }
            this.cleanAllCachePromise = this.executeCleanAllTask();
            return this.cleanAllCachePromise;
        });
    }
    executeCleanAllTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.fs.rmdirSync(CACHE_DIR, true);
                // 是否老用户根据有无缓存目录来判断，删掉缓存目录后会导致原本是老用户被判定为新用户，所以保存下状态
                const { isOldUser } = this;
                this.cacheDirInited = false;
                yield this.init();
                this.isOldUser = isOldUser;
                this.cleanAllCachePromise = null;
                return true;
            }
            catch (error) {
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError('删除插件缓存目录失败: ', error.errMsg || error.message, error);
                this.cleanAllCachePromise = null;
                return false;
            }
        });
    }
    /**
     * 初始化缓存目录
     *
     * @returns
     * @memberof FileSystem
     */
    createCacheDir() {
        const { fs } = this;
        const cacheDir = CACHE_DIR;
        try {
            fs.accessSync(cacheDir);
            this.isOldUser = true;
        }
        catch (error) {
            try {
                fs.mkdirSync(cacheDir, true);
            }
            catch (error) {
                console.log(cacheDir, ',[worker-fs] mkdirSync, error=', error);
            }
            _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginWarn(`[worker-fs] ${cacheDir}目录不存在，创建目录`);
            this.isOldUser = false;
        }
        return this.isOldUser;
    }
    /**
     * 初始化
     *
     * @memberof FileSystem
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // 删除文件失败会init，避免多次init
            if (this.initPromise) {
                return this.initPromise;
            }
            this.initPromise = this.executeInit();
            return this.initPromise;
        });
    }
    executeInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.cacheDirInited) {
                this.cacheDirInited = true;
                this.createCacheDir();
            }
            this.dirs = [];
            this.fileStats = [];
            this.fileInfoMap = new Map();
            this.totalSize = 0;
            yield this.getStats();
            this.handleStats();
            this.calculateSize();
            // 计算完成后释放stats所占内存
            this.fileStats = [];
            this.initPromise = null;
            // 首次stat后等待reporter初始化后上报
            if (this.inited) {
                // 刷新后，检查是否超过最大允许缓存容量
                this.checkNeedReportStat();
            }
            this.inited = true;
            _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.eventLog('[worker-fs] 缓存文件数=', this.fileInfoMap.size, ',总文件大小=', this.totalSize);
            // 启动时不再检查旧缓存，等文件写入时再清理
            // this.removeOldCache();
        });
    }
    checkNeedReportStat() {
        if (this.totalSize >= MAX_ALLOW_SIZE) {
            // report21493.send(new PluginReportParams({
            //   ReportType: FileSystemErrorType.STAT_SIZE_EXCEED,
            //   ErrorMsg: 'ecceed_max_size',
            //   RunTimeMs: TimeLogger.getRuntime(),
            //   ExternInfo: JSON.stringify({
            //     fileCount: this.fileInfoMap.size,
            //     totalSize: this.totalSize,
            //     maxAllowSize: MAX_ALLOW_SIZE,
            //   }),
            // }));
        }
        else {
            // report21493.send(new PluginReportParams({
            //   ReportType: FileSystemErrorType.STAT_SIZE_NORMAL,
            //   RunTimeMs: TimeLogger.getRuntime(),
            //   ExternInfo: JSON.stringify({
            //     fileCount: this.fileInfoMap.size,
            //     totalSize: this.totalSize,
            //     maxAllowSize: MAX_ALLOW_SIZE,
            //   }),
            // }));
        }
    }
    /**
     * 检查是否有同名文件旧缓存，有的话批量删除
     *
     * @memberof FileSystem
     */
    removeOldCache() {
        const fileInfoList = this.getErasableFiles();
        // 统计哪些文件存在重复
        const fileMap = {};
        fileInfoList.forEach((info) => {
            // dirname+shortFilename相同的就是除hash外同名的文件
            const fileId = `${info.dirname}${_common_path__WEBPACK_IMPORTED_MODULE_0__.sep}${info.shortFilename}`;
            const fullName = `${info.dirname}${_common_path__WEBPACK_IMPORTED_MODULE_0__.sep}${info.filename}`;
            if (!fileMap[fileId]) {
                fileMap[fileId] = {
                    sameFiles: [fullName],
                    latestFile: fullName,
                    latestTime: info.lastAccessedTime,
                };
            }
            else {
                fileMap[fileId].sameFiles.push(fullName);
                const oldTime = fileMap[fileId].latestTime;
                if (info.lastAccessedTime > oldTime) {
                    fileMap[fileId].latestFile = fullName;
                    fileMap[fileId].latestTime = info.lastAccessedTime;
                }
            }
        });
        Object.keys(fileMap).forEach((key) => {
            if (fileMap[key].sameFiles.length > 1) {
                this.removeFilesExclude(fileMap[key].latestFile);
            }
        });
    }
    /**
     * 创建多级目录，eg: dir1/dir2/dir3
     *
     * @param {string} path
     * @returns
     * @memberof FileSystem
     */
    mkdir(path, basePath = CACHE_DIR) {
        return new Promise((resolve, reject) => {
            const dirPath = _common_path__WEBPACK_IMPORTED_MODULE_0__.join(basePath, path);
            if (!this.dirs.includes(dirPath)) {
                this.fs.access({
                    path: dirPath,
                    success: () => {
                        this.dirs.push(dirPath);
                        resolve(null);
                    },
                    fail: () => {
                        this.fs.mkdir({
                            dirPath,
                            recursive: true,
                            success: () => {
                                this.dirs.push(dirPath);
                                resolve(null);
                            },
                            fail: (err) => {
                                if (err.errMsg.includes('exist')) {
                                    return resolve(null);
                                }
                                reject(err);
                            },
                        });
                    },
                });
            }
            else {
                resolve(null);
            }
        });
    }
    /**
     * 删除一个文件
     *
     * @memberof FileSystem
     */
    removeFile(path, removeFromFS) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                resolve();
                return;
            }
            if (this.initPromise) {
                yield this.initPromise;
            }
            const fileInfo = this.findFile(path, true);
            if (fileInfo) {
                const fileMeta = fileInfo;
                fileMeta.isReadyToDelete = true;
                // 文件确实存在再删除
                if (removeFromFS) {
                    try {
                        _log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeStart(`删除文件${fileMeta.path}`);
                        this.fs.unlink({
                            filePath: fileMeta.path,
                            success: () => {
                                const fileSize = fileMeta.size;
                                const newTotalSize = this.totalSize - fileSize;
                                this.fileInfoMap.delete(fileMeta.subPath);
                                this.totalSize = newTotalSize;
                                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debugLog(`删除文件: ${fileMeta.shortFilename}, md5:${fileMeta.md5},size:${(0,_common_util__WEBPACK_IMPORTED_MODULE_4__.byteToKB)(fileMeta.size)}KB,耗时:${_log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeEnd(`删除文件${fileMeta.path}`, true)}ms`);
                                resolve();
                            },
                            fail: (err) => {
                                // report21493.send(new PluginReportParams({
                                //   ReportType: FileSystemErrorType.DELETE_FILE,
                                //   ErrorMsg: err.errMsg,
                                //   RunTimeMs: TimeLogger.getRuntime(),
                                //   ExternInfo: JSON.stringify({
                                //     type: 'deletefile',
                                //     filepath: fileMeta.path,
                                //     totalSize: this.totalSize,
                                //   }),
                                // }));
                                // TODO: 安卓存在permission denied问题，需客户端排查，如果文件已不存在，也更新下缓存用量
                                // 删除失败，原因是文件不存在，同步更新下缓存用量
                                if (err.errMsg.includes('no such file or directory')) {
                                    const fileSize = fileMeta.size;
                                    const newTotalSize = this.totalSize - fileSize;
                                    this.fileInfoMap.delete(fileMeta.subPath);
                                    this.totalSize = newTotalSize;
                                }
                                reject(err);
                            },
                        });
                    }
                    catch (error) {
                        _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError(`删除文件失败: ${fileMeta.path}`, error.errMsg || error.message, error);
                        // 删除文件失败，更新一下
                        this.init();
                        // report21493.send(new PluginReportParams({
                        //   ReportType: FileSystemErrorType.DELETE_FILE,
                        //   ErrorMsg: `${error.message || error.errMsg}`,
                        //   RunTimeMs: TimeLogger.getRuntime(),
                        //   ExternInfo: JSON.stringify({
                        //     type: 'deletefile',
                        //     filepath: fileMeta.path,
                        //     totalSize: this.totalSize,
                        //   }),
                        // }));
                        reject(error);
                    }
                }
            }
        }));
    }
    /**
     * 从文件系统和fileInfoList中清除filename的其他缓存文件
     *
     * @param {string} filepath
     * @memberof FileSystem
     */
    removeFilesExclude(filepath) {
        return __awaiter(this, void 0, void 0, function* () {
            const shortFilename = _common_path__WEBPACK_IMPORTED_MODULE_0__.getShortFilename(filepath);
            const md5 = _common_path__WEBPACK_IMPORTED_MODULE_0__.getMd5FromFilename(filepath);
            const dirname = _common_path__WEBPACK_IMPORTED_MODULE_0__.dirname(filepath);
            if (!filepath || !filepath.trim() || !shortFilename || !md5) {
                return;
            }
            let fileList = this.findFilesByShortFilename(shortFilename, dirname);
            fileList = fileList.filter(info => md5 && info.md5 && info.md5 !== md5);
            if (fileList.length) {
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginLog(`删除${shortFilename}旧缓存`);
            }
            yield Promise.all(fileList.map((info) => __awaiter(this, void 0, void 0, function* () {
                yield this.removeFile(info.path, true);
            })));
        });
    }
    /**
     * 过滤出可被删除的文件
     *
     * @returns
     * @memberof FileSystem
     */
    getErasableFiles() {
        return Array.from(this.fileInfoMap.values())
            .filter(({ erasable, isReadyToDelete }) => !!erasable && !isReadyToDelete)
            .filter(info => (_common_path__WEBPACK_IMPORTED_MODULE_0__.isErasableFile
            ? _common_path__WEBPACK_IMPORTED_MODULE_0__.isErasableFile({
                path: `${info.dirname}/${info.filename}`,
                filename: info.filename,
                shortFilename: info.shortFilename,
                dirname: info.dirname,
                lastAccessedTime: info.lastAccessedTime,
                size: info.size,
                md5: info.md5,
            })
            : true))
            .sort((prev, next) => prev.lastAccessedTime - next.lastAccessedTime);
    }
    /**
     * 释放存储空间
     *
     * @param {number} [fileSize=0]
     * @param {*} [extraSize=unityNamespace.releaseMemorySize || DEFAULT_RELEASE_SIZE]
     * @return {*}  {Promise<ReleaseResult>}
     * @memberof FileSystem
     */
    releaseMemory(fileSize = 0, extraSize = unityNamespace.releaseMemorySize || DEFAULT_RELEASE_SIZE) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileInfoList = this.getErasableFiles();
            let needRelease = fileSize - MAX_ALLOW_SIZE + this.totalSize;
            if (!fileSize || !fileInfoList || !fileInfoList.length || needRelease <= 0) {
                return _index__WEBPACK_IMPORTED_MODULE_1__.ReleaseResult.NO_NEED_RELEASE_MEMORY;
            }
            if (fileSize > MAX_ALLOW_SIZE) {
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginWarn(`所需存储容量${(0,_common_util__WEBPACK_IMPORTED_MODULE_4__.byteToMB)(fileSize)}MB超过最大值${(0,_common_util__WEBPACK_IMPORTED_MODULE_4__.byteToMB)(MAX_ALLOW_SIZE)}MB, 不执行清理`);
                return _index__WEBPACK_IMPORTED_MODULE_1__.ReleaseResult.EXCEED_MEMORY;
            }
            const needReleaseFiles = [];
            // 达到缓存上限清理时，一次性释放多点空间，避免频繁触发清理
            needRelease = extraSize + needRelease;
            const releaseSize = needRelease;
            while (needRelease > 0) {
                const current = fileInfoList.shift();
                if (current) {
                    // 可能存在并发任务，需要删除的文件都标记下，不重复清理
                    if (!current.isReadyToDelete) {
                        current.isReadyToDelete = true;
                        needReleaseFiles.push(current);
                    }
                    needRelease -= current.size;
                }
                else {
                    // 删除全部缓存文件，空间才足够
                    break;
                }
            }
            if (needReleaseFiles.length) {
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.eventLog(`需要释放${(0,_common_util__WEBPACK_IMPORTED_MODULE_4__.byteToMB)(releaseSize)}MB存储空间`);
            }
            yield Promise.all(needReleaseFiles.map((info) => __awaiter(this, void 0, void 0, function* () { return yield this.removeFile(info.path, true); })));
            return _index__WEBPACK_IMPORTED_MODULE_1__.ReleaseResult.RELEASED_MEMORY;
        });
    }
    /**
     * fileInfoList中增加一个文件
     *
     * @memberof FileSystem
     */
    addFile(info) {
        const { size, path } = info;
        const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_0__.resolveCachePath(path);
        if (!this.findFile(path)) {
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_0__.basename(path);
            const dirname = _common_path__WEBPACK_IMPORTED_MODULE_0__.dirname(path);
            const fileMeta = {
                path: cachePath,
                subPath: _common_path__WEBPACK_IMPORTED_MODULE_0__.join(dirname, filename),
                size,
                filename,
                dirname,
                shortFilename: _common_path__WEBPACK_IMPORTED_MODULE_0__.getShortFilename(filename),
                md5: _common_path__WEBPACK_IMPORTED_MODULE_0__.getMd5FromFilename(filename),
                lastAccessedTime: parseInt(String(Date.now() / 1000), 10),
                erasable: true,
            };
            this.fileInfoMap.set(fileMeta.subPath, fileMeta);
            this.totalSize += size;
        }
    }
    /**
     * 计算总大小
     *
     * @memberof FileSystem
     */
    calculateSize() {
        const vals = this.fileInfoMap.values();
        let totalSize = 0;
        for (const val of vals) {
            totalSize += val.size;
        }
        this.totalSize = totalSize;
    }
    /**
     * 使用的总容量
     *
     * @returns
     * @memberof FileSystem
     */
    getUsedSize() {
        _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginLog(`getUsedSize: ${USER_PATH}目录总大小: ${(0,_common_util__WEBPACK_IMPORTED_MODULE_4__.byteToMB)(this.totalSize)}MB`);
        return this.totalSize;
    }
    /**
     * 更新下fileInfolist中文件的最后读取时间;只处理USER_PATH目录下的文件
     *
     * @param {string} path
     * @memberof FileSystem
     */
    updateAccessTime(path, accessFs = false) {
        // 只处理USER_PATH目录下的文件
        if (path.includes('wxfile://') || path.includes('http://') || path.includes('https://')) {
            if (!path.includes(USER_PATH)) {
                return;
            }
        }
        const fileInfo = this.findFile(path);
        if (fileInfo) {
            fileInfo.lastAccessedTime = parseInt(String(Date.now() / 1000), 10);
            if (accessFs) {
                this.fs.readFile({
                    filePath: fileInfo.path,
                    success: () => { },
                });
            }
        }
    }
    /**
     * 在fileInfoList中查找指定文件,接受完整路径、/filename、filename三种参数
     *
     * @param {string} path
     * @returns
     * @memberof FileSystem
     */
    findFile(path, includeReadyToDelete = false) {
        if (!path || !path.trim())
            return null;
        const isPluginCache = path.includes(CACHE_DIR_NAME);
        const dir = _common_path__WEBPACK_IMPORTED_MODULE_0__.dirname(path, isPluginCache);
        const filename = _common_path__WEBPACK_IMPORTED_MODULE_0__.basename(path);
        const fileMeta = this.fileInfoMap.get(_common_path__WEBPACK_IMPORTED_MODULE_0__.join(dir, filename));
        if (fileMeta && (includeReadyToDelete || !fileMeta.isReadyToDelete)) {
            return fileMeta;
        }
        return null;
    }
    /**
     * 从fileinfolist中获取文件meta信息
     *
     * @param {string} path
     * @returns
     * @memberof FileSystem
     */
    getFileInfo(path) {
        const fileInfo = this.findFile(path);
        if (fileInfo) {
            return fileInfo;
        }
        return null;
    }
    /**
     * 查找剔除md5后的同名文件
     *
     * @param {string} shortFilename
     * @returns
     * @memberof FileSystem
     */
    findFilesByShortFilename(shortFilename, dirname) {
        return this.getErasableFiles().filter(info => info.shortFilename === shortFilename && info.dirname === dirname);
    }
    /**
     * 是否同名
     *
     * @param {string} sourcePath
     * @param {IFileMeta} diffInfo
     * @returns
     * @memberof FileSystem
     */
    isSameFile(sourcePath, diffInfo) {
        const sourceDirname = _common_path__WEBPACK_IMPORTED_MODULE_0__.dirname(sourcePath);
        const filename1 = _common_path__WEBPACK_IMPORTED_MODULE_0__.basename(sourcePath);
        const filename2 = diffInfo.filename;
        return sourceDirname === diffInfo.dirname && filename1 === filename2;
    }
    /**
     * 判断缓存目录中是否存在目标文件
     *
     * @param {string} path
     * @returns
     * @memberof FileSystem
     */
    checkFileExistInSystem(path) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = path === null || path === void 0 ? void 0 : path.trim) === null || _a === void 0 ? void 0 : _a.call(path))) {
                return false;
            }
            const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_0__.resolveCachePath(path);
            const stat = yield this.statAsyncCatch(cachePath);
            if (stat) {
                return true;
            }
            return false;
        });
    }
    statAsyncCatch(path, recursive) {
        return new Promise((resolve) => {
            this.fs.stat({
                path,
                recursive,
                success(res) {
                    resolve(res.stats);
                },
                fail(error) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError(`FileSystem_statAsyncCatch: ${path} `, error.errMsg, error);
                    resolve(null);
                },
            });
        });
    }
    statSyncCatch(path, recursive) {
        const { statSync } = this.fs;
        let stat;
        try {
            stat = statSync(path, recursive);
            return stat;
        }
        catch (error) {
            _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError(`FileSystem_statSyncCatch: ${path} `, error.errMsg || error.message, error);
            // report21493.send(new PluginReportParams({
            //   ReportType: FileSystemErrorType.DEFAULT,
            //   ErrorMsg: error.errMsg || error.message,
            //   ExternInfo: JSON.stringify({
            //     path,
            //     async: false,
            //   }),
            // }));
            return null;
        }
    }
    /**
     * 处理文件信息
     * @memberof FileSystem
     */
    handleStats() {
        const { fileStats } = this;
        if (fileStats && Array.isArray(fileStats)) {
            fileStats.forEach((info) => {
                const fileInfo = this.handleFileInfo(info);
                this.fileInfoMap.set(_common_path__WEBPACK_IMPORTED_MODULE_0__.join(fileInfo.dirname, fileInfo.filename), fileInfo);
            });
        }
    }
    /**
     * 处理文件信息
     * @param {IStats} info
     * @returns {IFileMeta}
     * @memberof FileSystem
     */
    handleFileInfo(info) {
        const { path: originPath, stats } = info;
        // pc上部分API返回的路径是用\分割(比如stat)，统一替换为/
        const path = _common_path__WEBPACK_IMPORTED_MODULE_0__.normalizePath(originPath);
        const filename = _common_path__WEBPACK_IMPORTED_MODULE_0__.basename(path);
        const isPluginCache = path.includes(CACHE_DIR_NAME);
        const dirname = _common_path__WEBPACK_IMPORTED_MODULE_0__.dirname(path, isPluginCache);
        // 可能本地已有缓存路径异常的资源，此时直接拼接路径即可
        // path为相对用户目录的路径，例如wxfile://usr/dir/filename.txt，则path为/dir/filename.txt
        const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_0__.resolveCachePath(path, isPluginCache) || _common_path__WEBPACK_IMPORTED_MODULE_0__.join(USER_PATH, path);
        return {
            path: cachePath,
            subPath: _common_path__WEBPACK_IMPORTED_MODULE_0__.join(dirname, filename),
            filename,
            dirname,
            shortFilename: _common_path__WEBPACK_IMPORTED_MODULE_0__.getShortFilename(path),
            md5: _common_path__WEBPACK_IMPORTED_MODULE_0__.getMd5FromFilename(path),
            size: stats.size,
            lastAccessedTime: stats.lastAccessedTime,
            erasable: isPluginCache,
        };
    }
    /**
     * 获取缓存目录下的文件信息
     *
     * @memberof FileSystem
     */
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            // let stat;
            // 首次初始化虚拟文件系统用同步接口，避免影响是否有缓存的判断
            // 统计整个用户目录的大小，避免非插件缓存目录下有文件导致插件认为空间足够，而实际不足
            // if (!this.inited) {
            //   stat = this.statSyncCatch(USER_PATH, true);
            // } else {
            //   stat = await this.statAsyncCatch(USER_PATH, true);
            // }
            this.statAsyncCatch(USER_PATH, true).then((stat) => {
                let fileStats = [];
                if (stat) {
                    fileStats = Array.from(stat).filter(info => info.stats.isFile());
                }
                this.fileStats = fileStats;
            })
                .catch((error) => {
                console.log('[worker-fs] statAsyncCatch error=', error);
            });
        });
    }
}


/***/ }),

/***/ "./src/worker/fs/index.ts":
/*!********************************!*\
  !*** ./src/worker/fs/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleaseResult": () => (/* binding */ ReleaseResult),
/* harmony export */   "default": () => (/* binding */ FileManager)
/* harmony export */ });
/* harmony import */ var _file_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-system */ "./src/worker/fs/file-system.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ "./src/worker/common/util.ts");
/* harmony import */ var _log_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log/logger */ "./src/worker/log/logger.ts");
/* harmony import */ var _fs_file_extra_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fs/file-extra-manager */ "./src/fs/file-extra-manager.ts");
/* harmony import */ var _common_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/path */ "./src/worker/common/path.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/const */ "./src/worker/common/const.ts");
/* harmony import */ var _config_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/const */ "./src/config/const.ts");
/* harmony import */ var _adapter_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../adapter/XMLHttpRequest */ "./src/worker/adapter/XMLHttpRequest.ts");
/** @format */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { Env } from '@tencent/minigamefe/minigame/env';
// import { wx, unityNamespace, env } from '../common/env';
// import { FileSystemErrorType, CACHE_DIR, MAX_ALLOW_SIZE } from '../common/config';
// import { PluginReportParams, report21493 } from '../report';





// import { FileError, FileExternType } from '../config/const';




let env;
let CACHE_DIR;
let MAX_ALLOW_SIZE;
let unityNamespace;
_config__WEBPACK_IMPORTED_MODULE_5__["default"].onReady(() => {
    unityNamespace = _config__WEBPACK_IMPORTED_MODULE_5__["default"].sharedConfig;
    env = _config__WEBPACK_IMPORTED_MODULE_5__["default"].env;
    ({
        CACHE_DIR,
        MAX_ALLOW_SIZE,
    } = _config__WEBPACK_IMPORTED_MODULE_5__["default"].constants);
});
var ReleaseResult;
(function (ReleaseResult) {
    ReleaseResult[ReleaseResult["NO_NEED_RELEASE_MEMORY"] = 1] = "NO_NEED_RELEASE_MEMORY";
    ReleaseResult[ReleaseResult["EXCEED_MEMORY"] = 2] = "EXCEED_MEMORY";
    ReleaseResult[ReleaseResult["RELEASED_MEMORY"] = 3] = "RELEASED_MEMORY";
    ReleaseResult[ReleaseResult["CANNOT_RELEASE"] = 4] = "CANNOT_RELEASE";
})(ReleaseResult || (ReleaseResult = {}));
class FileManager {
    /**
     *
     * 是否新用户，判断条件为是否已经存在缓存目录
     * @static
     * @returns
     * @memberof FileManager
     */
    static checkIsNewUser() {
        return !FileManager.fileSystem.isOldUser;
    }
    /**
     * 将statSync接口包装一下处理错误
     *
     * @static
     * @param {string} path
     * @param {(boolean | undefined)} [recursive]
     * @param {(boolean | undefined)} [dontReport]
     * @returns {(WechatMinigame.Stats | Record<string, any> | null)}
     * @memberof FileManager
     */
    static statAsyncCatch(path, recursive, dontReport) {
        return new Promise((resolve) => {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.stat({
                path,
                recursive,
                success(res) {
                    resolve(res.stats);
                },
                fail() {
                    if (!dontReport) {
                        // report21493.send(new PluginReportParams({
                        //   ReportType: FileSystemErrorType.DEFAULT,
                        //   ErrorMsg: `${error.errMsg}`,
                        //   RunTimeMs: TimeLogger.getRuntime(),
                        //   ExternInfo: JSON.stringify({
                        //     type: 'statAsyncCatch',
                        //     path,
                        //     recursive,
                        //   }),
                        // }));
                    }
                    resolve(null);
                },
            });
        });
    }
    static checkFileExist(path) {
        try {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.accessSync(path);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    ;
    /**
     * 获取指定文件（非FileSystem中维护的文件）大小，单位B
     * @param {String} filePath
     * @returns 文件大小
     */
    static getFileSize(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = yield FileManager.statAsyncCatch(filePath);
            if (stats) {
                return (stats === null || stats === void 0 ? void 0 : stats.size) || 0;
            }
            return 0;
        });
    }
    /**
     * 计算文件md5
     *
     * @static
     * @param {string} filePath
     * @returns {Promise<string>}
     * @memberof FileManager
     */
    static getMd5(filePath) {
        return new Promise((resolve, reject) => {
            if (filePath) {
                const { getFileInfo } = _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs;
                getFileInfo({
                    filePath,
                    success({ digest }) {
                        resolve(digest);
                    },
                    fail: reject,
                    complete: () => { },
                });
            }
            else {
                resolve('');
            }
        });
    }
    /**
     * 读取文件
     *
     * @static
     * @param {BigIntToLocaleStringOptions} path
     * @param {number} [fileSize=0] 如果是把资源包放在小游戏代码分包中加载，会写入一个空文件在缓存目录中，用于在游戏启动时判断是否需要下载资源；
     * @returns {ArrayBuffer} 文件的arraybuffer
     * @memberof FileManager
     */
    static readFile(path, encoding = undefined, isSubpackage = false) {
        return new Promise((resolve, reject) => {
            let cachePath = path;
            if (!isSubpackage) {
                // 非包内文件才需要处理成本地缓存路径
                cachePath = _common_path__WEBPACK_IMPORTED_MODULE_4__.resolveCachePath(path);
            }
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.readFile({
                filePath: cachePath,
                encoding,
                success: (res) => {
                    var _a;
                    if (isSubpackage) {
                        // 如果是分包，会在本地写个空文件，用于判读是否加载过分包。读取分包时，更新下这个文件，以免LRU删除
                        cachePath = _common_path__WEBPACK_IMPORTED_MODULE_4__.join((_a = unityNamespace.dataFileSubPrefix) !== null && _a !== void 0 ? _a : '', _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(path, '.txt'));
                    }
                    // 更新下filesystem中的accesstime
                    const fileInfo = FileManager.fileSystem.findFile(cachePath);
                    if (fileInfo) {
                        FileManager.fileSystem.updateAccessTime(cachePath, isSubpackage);
                    }
                    if (env.isIOS && !env.isWK) {
                        const [result] = (0,_fs_file_extra_manager__WEBPACK_IMPORTED_MODULE_3__.manageWKArrayBuffer)(new Uint8Array(res.data));
                        res.data = result;
                    }
                    resolve(res.data);
                    return;
                },
                fail: reject,
            });
        });
    }
    static readCompressedFile(filePath) {
        return new Promise((resolve, reject) => {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.readCompressedFile({
                filePath,
                compressionAlgorithm: 'br',
                success: res => resolve(res.data),
                fail: reject,
            });
        });
    }
    static readCompressedFileSync(filePath) {
        return _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.readCompressedFileSync({
            filePath,
            compressionAlgorithm: 'br',
        });
    }
    static readFileBuffer(filePath, position = 0, length = undefined) {
        return new Promise((resolve, reject) => {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.readFile({
                filePath,
                position,
                length,
                success: (res) => {
                    resolve(res.data);
                },
                fail: reject,
            });
        });
    }
    static readFileTrunk(filePath, isSubpackage = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const size = yield FileManager.getFileSize(filePath);
            if (!size) {
                return new ArrayBuffer(0);
            }
            let localPath = filePath;
            if (isSubpackage) {
                // 如果是分包，会在本地写个空文件，用于判读是否加载过分包。读取分包时，更新下这个文件，以免LRU删除
                localPath = _common_path__WEBPACK_IMPORTED_MODULE_4__.join((_a = unityNamespace.dataFileSubPrefix) !== null && _a !== void 0 ? _a : '', _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(filePath, '.txt'));
            }
            const fileInfo = FileManager.fileSystem.findFile(localPath);
            if (fileInfo) {
                // FileSystem中有该文件，更新下accesstime
                FileManager.fileSystem.updateAccessTime(fileInfo.path, isSubpackage);
            }
            const resultdata = new ArrayBuffer(size);
            const uint8Result = new Uint8Array(resultdata);
            const partSize = 8000000;
            for (let offset = 0; offset < size; offset += partSize) {
                const toread = Math.min(partSize, size - offset);
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginLog('read part:', offset, toread);
                const data = yield FileManager.readFileBuffer(filePath, offset, toread);
                uint8Result.set(new Uint8Array(data).subarray(0, toread), offset);
                // 上报看是否存在分块读取超出大小的情况
                if (data.byteLength > toread) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginWarn(`读取${filePath}超过边界, byteLength: ${data.byteLength}; offset: ${offset}; toread: ${toread}`);
                    // report21493.send(new PluginReportParams({
                    //   ReportType: FileSystemErrorType.OUT_OF_RANGE,
                    //   ErrorMsg: FileError.OutOfRange,
                    //   RunTimeMs: TimeLogger.getRuntime(),
                    //   ExternInfo: JSON.stringify({
                    //     size: data.byteLength,
                    //     offset,
                    //     toread,
                    //     filePath,
                    //   }),
                    // }));
                }
            }
            if (env.isIOS && !env.isWK) {
                const [result, isHandled] = (0,_fs_file_extra_manager__WEBPACK_IMPORTED_MODULE_3__.manageWKArrayBuffer)(uint8Result);
                if (isHandled) {
                    /**
                     * 如果是处理过的文件（wk降级成wasm3）先返回处理后的buffer
                     * 再删除整个缓存目录重新下载bundle，因为是老用户，应该是有耐心等待重新下载的
                     * 下一次启动的时候，需要重新下载首资源包
                     * tips: 不把result重写覆盖wk文件，防止情况复杂不好查问题
                     */
                    FileManager.cleanAllCache();
                }
                return result;
            }
            return resultdata;
        });
    }
    static downloadFileByXMLHttpRequest(url) {
        return new Promise((resolve, reject) => {
            const xhr = new _adapter_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_8__["default"]();
            xhr.open('GET', url);
            xhr.responseType = 'arraybuffer';
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = (err) => {
                reject(err);
            };
            xhr.ontimeout = () => {
                reject(new Error('timeout'));
            };
            xhr.onabort = () => {
                reject(new Error('abort'));
            };
            xhr.send();
        });
    }
    /**
     * 异步下载文件
     *
     * @static
     * @param {*} url
     * @returns {Promise<any>}
     * @memberof FileManager
     */
    static downloadFileAsync(url) {
        return new Promise((resolve, reject) => {
            worker.downloadFile({
                url,
                timeout: 60000,
                success: resolve,
                fail: reject,
            });
        });
    }
    /**
     * 清理N天未使用文件
     * @param {Number} day
     */
    static removeExpiredFile(day = 7) {
        const { stat, unlinkSync } = _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs;
        stat({
            path: CACHE_DIR,
            recursive: true,
            success(res) {
                Object.keys(res.stats).forEach((idx) => {
                    const { stats } = res.stats[idx];
                    if (stats.path !== '/' && stats.isFile()) {
                        if ((Date.now() / 1000 - stats.lastAccessedTime * 1000) / 86400 > day) {
                            _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginWarn(`删除长时间未使用资源 ${CACHE_DIR}/${stats.path}`);
                            unlinkSync(`${CACHE_DIR}/${stats.path}`);
                        }
                    }
                });
            },
        });
    }
    static saveFileFS(tempFilePath, filePath) {
        return new Promise((resolve, reject) => {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.saveFile({
                tempFilePath,
                filePath,
                success: resolve,
                fail: reject,
            });
        });
    }
    /**
     * 将临时路径下的文件存储到用户目录，如果缓存异常，返回原临时路径
     * @param path 存储的文件路径
     * @param tempFilePath 文件的临时存储路径
     * @param getFileName 处理文件名
     */
    static saveFile(path, tempFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const dirname = _common_path__WEBPACK_IMPORTED_MODULE_4__.dirname(path);
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(path);
            const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_4__.resolveCachePath(path);
            const fileInfo = FileManager.fileSystem.findFile(path);
            if (fileInfo) {
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginLog(`${filename}已有缓存, 无须重复缓存`);
                return Promise.resolve(fileInfo.path);
            }
            FileManager.fileSystem.removeFilesExclude(path);
            // pc上，临时路径可能用\分割
            const normalTempPath = _common_path__WEBPACK_IMPORTED_MODULE_4__.normalizePath(tempFilePath);
            const fileSize = yield FileManager.getFileSize(normalTempPath);
            const releaseFlag = yield FileManager.fileSystem.releaseMemory(fileSize);
            if (releaseFlag === ReleaseResult.EXCEED_MEMORY) {
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginWarn(`saveFile: 空间不足,缓存${filename}失败`);
                FileManager.fileSystem.init();
                return Promise.resolve(normalTempPath);
            }
            yield FileManager.fileSystem.mkdir(dirname);
            _log_logger__WEBPACK_IMPORTED_MODULE_2__.TimeLogger.timeStart(`saveFile ${cachePath}`);
            const [err, res] = yield (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.awaitWrap)(FileManager.saveFileFS(normalTempPath, cachePath));
            if (res) {
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debugLog(`缓存文件：${filename}成功,size: ${(0,_common_util__WEBPACK_IMPORTED_MODULE_1__.byteToKB)(fileSize)}KB,耗时:${_log_logger__WEBPACK_IMPORTED_MODULE_2__.TimeLogger.timeEnd(`saveFile ${cachePath}`)}ms`);
                FileManager.fileSystem.addFile({
                    size: fileSize,
                    path,
                });
                return Promise.resolve(res.savedFilePath);
            }
            _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginError(`${filename}缓存失败：`, err.errMsg || err.message, err);
            FileManager.fileSystem.init();
            return Promise.resolve(normalTempPath);
        });
    }
    /**
     * 写入文件
     *
     * @static
     * @param {string} fileName
     * @param {ArrayBuffer} content
     * @returns {Promise<any>}
     * @memberof FileManager
     */
    static writeFile(path, content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!path || !(path === null || path === void 0 ? void 0 : path.trim())) {
                return Promise.reject(_config_const__WEBPACK_IMPORTED_MODULE_7__.FileError.EmptyPath);
            }
            // const fs = wxFs;
            // 清理缓存目录时不执行写入
            if (FileManager.fileSystem.initPromise) {
                yield FileManager.fileSystem.initPromise;
            }
            const dirname = _common_path__WEBPACK_IMPORTED_MODULE_4__.dirname(path);
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(path);
            const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_4__.resolveCachePath(path);
            const fileInfo = FileManager.fileSystem.findFile(path);
            if (fileInfo) {
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginLog(`${filename}已有缓存`);
                return Promise.resolve(fileInfo.path);
            }
            yield FileManager.fileSystem.removeFilesExclude(path);
            const fileSize = content.byteLength;
            const releaseFlag = yield FileManager.fileSystem.releaseMemory(fileSize);
            if (releaseFlag === ReleaseResult.EXCEED_MEMORY) {
                _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginError(`空间不足,写入${filename}失败;`);
                FileManager.fileSystem.init();
                return Promise.reject(new Error(_config_const__WEBPACK_IMPORTED_MODULE_7__.FileError.ExceedMemory));
            }
            // 此类型已废弃
            if (releaseFlag === ReleaseResult.CANNOT_RELEASE) {
                // 短时间内写入大量文件，不清理缓存
                return Promise.reject(new Error(_config_const__WEBPACK_IMPORTED_MODULE_7__.FileError.FrequentWrite));
            }
            yield FileManager.fileSystem.mkdir(dirname);
            _log_logger__WEBPACK_IMPORTED_MODULE_2__.TimeLogger.timeStart(`writeFile ${filename}`);
            return FileManager.normalWriteFile({
                cachePath,
                content,
                fileSize,
                filename,
                path,
            });
        });
    }
    static normalWriteFile({ cachePath, content, fileSize, path, filename }) {
        return new Promise((resolve, reject) => {
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.writeFile({
                filePath: cachePath,
                data: content,
                encoding: 'binary',
                success() {
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debugLog(`[worker-fs] 缓存 ${filename}成功;size: ${(0,_common_util__WEBPACK_IMPORTED_MODULE_1__.byteToKB)(fileSize)}KB,耗时: ${_log_logger__WEBPACK_IMPORTED_MODULE_2__.TimeLogger.timeEnd(`writeFile ${filename}`)}ms`);
                    FileManager.fileSystem.addFile({
                        size: content.byteLength,
                        path,
                    });
                    resolve(cachePath);
                },
                fail(err) {
                    var _a;
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginError(`[worker-fs] 缓存 ${filename}失败：`, err.errMsg, ',totalSize=', FileManager.fileSystem.totalSize, ',size: ', (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.byteToKB)(fileSize), 'KB,耗时：', _log_logger__WEBPACK_IMPORTED_MODULE_2__.TimeLogger.timeEnd(`writeFile ${filename}`), 'ms', err);
                    // 如果错误信息包含超过大小，但实际没超，可能quotacontrol失效
                    if ((_a = err.errMsg) === null || _a === void 0 ? void 0 : _a.includes('maximum')) {
                        if (FileManager.fileSystem.totalSize + content.byteLength <= MAX_ALLOW_SIZE) {
                            // report21493.send(new PluginReportParams({
                            //   ReportType: FileSystemErrorType.QUOTA_CONTROL,
                            //   ErrorMsg: err.errMsg,
                            //   RunTimeMs: TimeLogger.getRuntime(),
                            //   ExternInfo: JSON.stringify({
                            //     type: FileExternType.QuotaControlError,
                            //     filename,
                            //     size: content.byteLength,
                            //     totalSize: FileManager.fileSystem.totalSize,
                            //     maxAllowSize: MAX_ALLOW_SIZE,
                            //   }),
                            // }));
                        }
                    }
                    // report21493.send(new PluginReportParams({
                    //   ReportType: FileSystemErrorType.WRITEFILE,
                    //   ErrorMsg: `${err.errMsg}`,
                    //   RunTimeMs: TimeLogger.getRuntime(),
                    //   ExternInfo: JSON.stringify({
                    //     type: FileExternType.WriteFile,
                    //     filename,
                    //     size: content.byteLength,
                    //     totalSize: FileManager.fileSystem.totalSize,
                    //     maxAllowSize: MAX_ALLOW_SIZE,
                    //   }),
                    // }));
                    FileManager.fileSystem.init();
                    reject(err);
                },
            });
        });
    }
    static cleanAllCache() {
        return FileManager.fileSystem.cleanAllCache();
    }
    static removeFile(path) {
        return FileManager.fileSystem.removeFile(path, true);
    }
    static getFileInfo(path) {
        return FileManager.fileSystem.getFileInfo(path);
    }
    /**
     * 查找目标文件缓存路径,识别完整路径、/filename、filename三种
     *
     * @static
     * @param {string} filename
     * @returns
     * @memberof FileManager
     */
    static getCachePath(filename) {
        const fileInfo = FileManager.getFileInfo(filename);
        // 可能并发清理缓存，文件信息存在，并且没有被标记清除才使用缓存
        if (fileInfo) {
            return fileInfo.path;
        }
        return '';
    }
    static readJson(filePath, needLog = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filePath) {
                const [err, content] = yield (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.awaitWrap)(FileManager.readFile(filePath, 'utf-8'));
                if (content) {
                    return JSON.parse(content);
                }
                if (err && needLog) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginWarn(`读取json: ${filePath}失败`, err.errMsg || err.message, err);
                }
            }
            return null;
        });
    }
    static writeJson(path, jsonContent) {
        if (path && jsonContent) {
            const jsonStr = JSON.stringify(jsonContent);
            _common_const__WEBPACK_IMPORTED_MODULE_6__.wxFs.writeFile({
                filePath: path,
                data: jsonStr,
                encoding: 'utf-8',
                success: () => {
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginLog(`写入json: ${path}成功`);
                },
                fail: (err) => {
                    _log_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.pluginWarn(`写入json: ${path}失败`, err.errMsg, err);
                },
            });
        }
    }
    static mkdir(path, basePath = CACHE_DIR) {
        return __awaiter(this, void 0, void 0, function* () {
            return FileManager.fileSystem.mkdir(path, basePath);
        });
    }
}
FileManager.fileSystem = _file_system__WEBPACK_IMPORTED_MODULE_0__["default"].getIntance();


/***/ }),

/***/ "./src/worker/http/index.ts":
/*!**********************************!*\
  !*** ./src/worker/http/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CacheXMLHttpRequest)
/* harmony export */ });
/* harmony import */ var _adapter_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapter/XMLHttpRequest */ "./src/worker/adapter/XMLHttpRequest.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ "./src/worker/common/util.ts");
/* harmony import */ var _http_http_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/http-task */ "./src/http/http-task.ts");
/* harmony import */ var _preload_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preload-manager */ "./src/worker/http/preload-manager.ts");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fs */ "./src/worker/fs/index.ts");
/* harmony import */ var _log_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../log/logger */ "./src/worker/log/logger.ts");
/* harmony import */ var _common_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/path */ "./src/worker/common/path.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./response */ "./src/worker/http/response.ts");
/* harmony import */ var _config_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/const */ "./src/config/const.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @format */




// import { PluginReportParams, report21493 } from '../report';

// import { Config, getGameStage, getGameVisible } from '../common/game-status';
// import { LaunchEventType } from '../common/config';



// import monitor from '../monitor';
// import UnityManager from '../unity-manager';
// import { isDevelop } from '../common/const';


let isDevelop;
_config__WEBPACK_IMPORTED_MODULE_9__["default"].onReady(() => {
    ({ isDevelop } = _config__WEBPACK_IMPORTED_MODULE_9__["default"].constants);
});
var StatusType;
(function (StatusType) {
    StatusType[StatusType["Fail"] = 0] = "Fail";
    StatusType[StatusType["Ok"] = 1] = "Ok";
})(StatusType || (StatusType = {}));
class CompleteResponse {
    constructor(params) {
        this.status = params.status;
        this.errMsg = params.errMsg;
        this.cachePath = params.xhrObj.cachePath;
        this.response = params.xhrObj.response;
        this.cacheable = params.xhrObj.cacheable;
        this.isReadFromCache = params.xhrObj.isReadFromCache;
    }
}
/**
 * hook胶水层的XMLHttpRequest，如果是AB包下载请求，走downloadFile并启用缓存逻辑
 *
 * 依赖HttpTaskManager和PreloadManager实例进行AB包资源预加载
 * @export
 * @class CacheXMLHttpRequest
 */
class CacheXMLHttpRequest extends _adapter_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.status = undefined;
        this.statusText = undefined;
        this.cacheable = false;
        this.isReadFromCache = false;
        // fetch接口需要
        this.isFetchApi = false;
        this.signal = {
            aborted: false,
        };
        /**
         * fetch接口和xhr接口使用方式不同，将xhr调用包装成fetch
         *
         * @memberof CacheXMLHttpRequest
         */
        this.openAndSend = (url, params) => {
            this.isFetchApi = true;
            this.open(params.method, url, true);
            // 对齐旧版unity，所有请求都设置arraybuffer
            this.responseType = 'arraybuffer';
            Object.keys(params.headers).forEach((key) => {
                this.setRequestHeader(key, params.headers[key]);
            });
            // unity21.3通过requestOptions传入timeout
            this.timeout = params.timeout;
            // fetch的进度事件会挂在配置对象上
            this.onprogress = params.onProgress;
            return new Promise((resolve, reject) => {
                this.onFetchResolve = () => {
                    resolve(new _response__WEBPACK_IMPORTED_MODULE_7__["default"](this));
                };
                this.onFetchReject = (e) => {
                    const res = new _response__WEBPACK_IMPORTED_MODULE_7__["default"](this);
                    // 异常时，unity需要使用message获取异常信息
                    res.message = (e === null || e === void 0 ? void 0 : e.errMsg) || (e === null || e === void 0 ? void 0 : e.message) || '';
                    reject(res);
                };
                // 绑定事件后再send，避免命中预下载且使用记录在内存中的buffer直接返回导致在绑定事件之前调用回调
                this.send(params.body);
            });
        };
        this.send = (...args) => __awaiter(this, void 0, void 0, function* () {
            const { url } = this.paramsCache;
            if (_common_path__WEBPACK_IMPORTED_MODULE_6__.isUnityAnalysisUrl(url)) {
                if (isDevelop) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debugLog('[开发阶段提示]请求无效URL=', url, ', 浏览器搜索 `Disable Editor analytics` 或忽略此日志');
                }
                return this.triggerEvent('error');
            }
            let cachePath = _fs__WEBPACK_IMPORTED_MODULE_4__["default"].getCachePath(url);
            let responseBody = null;
            let status = _http_http_task__WEBPACK_IMPORTED_MODULE_2__.HTTP_OK;
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_6__.basename(url);
            // 如果在下载bundle，判断是否正在预载/是否已有缓存
            if (_common_path__WEBPACK_IMPORTED_MODULE_6__.isCacheableUrl(url)) {
                _log_logger__WEBPACK_IMPORTED_MODULE_5__.TimeLogger.timeStart(`xhr_send:${url}`);
                // 如果是预载任务，等待预载任务完成，或从内存中读取
                // 预载任务只会从内存中读取一次，当下次使用时，从文件系统中读取
                const preloadTask = _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.getTaskByUrl(url);
                if (preloadTask) {
                    // 已经完成预下载
                    if (_preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.isPreloadedUrl(url)) {
                        _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginLog(`xhr: ${filename}使用预载内容`);
                        responseBody = preloadTask.response;
                        // 可能预载任务已经完成文件缓存，能获取到cachePath，但实际此时内存中有该文件
                        cachePath = '';
                        // 使用了预载之后，释放内存引用
                        _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.releaseTask(new _http_http_task__WEBPACK_IMPORTED_MODULE_2__.HttpTask(url));
                    }
                    else {
                        _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginLog(`xhr: ${filename}等待预载完成`);
                        // 等待预载任务完成
                        const { statusCode, response } = yield preloadTask.once(_http_http_task__WEBPACK_IMPORTED_MODULE_2__.HttpEventName.COMPLETE);
                        status = statusCode;
                        // 如果并发时是从网络下载（主要是纹理压缩，以及业务侧同时请求同一资源），response是arraybuffer，直接使用
                        // 预载任务也直接取buffer
                        responseBody = response;
                    }
                }
                else {
                    // 是该URL的首个请求，避免重复请求
                    _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.addTask(new _http_http_task__WEBPACK_IMPORTED_MODULE_2__.HttpTask(url));
                }
                // 已有缓存，读取缓存并构造response
                if (cachePath) {
                    // TimeLogger.timeStart(`xhr_cache:${url}`);
                    const [err, fileBuffer] = yield (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.awaitWrap)(_fs__WEBPACK_IMPORTED_MODULE_4__["default"].readFile(cachePath));
                    // Logger.pluginLog(`CacheXMLHttpRequest: 读取${filename}缓存耗时: ${TimeLogger.timeEnd(`xhr_cache:${url}`)}ms`);
                    if (err) {
                        _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginError(`xhr: ${filename}读缓存失败, err=`, err.errMsg);
                        // report21493.send(new PluginReportParams({
                        //   ReportType: LaunchEventType.LOAD_ASSET_BUNDLE,
                        //   ErrorMsg: err.errMsg,
                        //   RunTimeMs: TimeLogger.getRuntime(),
                        //   ExternInfo: JSON.stringify({
                        //     stage: 'CacheXMLHttpRequest: read cacheFile error',
                        //     filename,
                        //     gameStage: getGameStage(),
                        //   }),
                        // }));
                        // 读取文件失败，可能缓存出问题，删掉重下
                        _fs__WEBPACK_IMPORTED_MODULE_4__["default"].removeFile(cachePath);
                    }
                    else {
                        // 缓存的文件确实有文件内容才返回，否则按无缓存重新下载处理
                        if (!(fileBuffer === null || fileBuffer === void 0 ? void 0 : fileBuffer.byteLength)) {
                            _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginError(`xhr: ${filename}清理空文件缓存`);
                            _fs__WEBPACK_IMPORTED_MODULE_4__["default"].removeFile(cachePath);
                        }
                        else {
                            responseBody = fileBuffer;
                            status = _http_http_task__WEBPACK_IMPORTED_MODULE_2__.HTTP_OK;
                        }
                    }
                }
                this.cachePath = cachePath;
                if (responseBody) {
                    this.isReadFromCache = true;
                    this.createResponse({ data: responseBody, statusCode: status });
                    this.triggerEvent((0,_common_util__WEBPACK_IMPORTED_MODULE_1__.isSuccessStatusCode)(status) ? 'load' : 'error');
                    // 本地读取时，onreadystatechange不会触发，需要在这里触发其他同名URL的回调
                    const loadTask = _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.getTaskByUrl(url);
                    if (loadTask) {
                        loadTask.statusCode = status;
                        loadTask.response = responseBody;
                        _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.removeTask(loadTask);
                    }
                    return;
                }
            }
            return this.originXhr.send(...args);
        });
        this.open = (method, _url, async, ...args) => {
            const url = _common_path__WEBPACK_IMPORTED_MODULE_6__.filterUrl(_url);
            this.paramsCache = {
                method,
                url,
                async,
            };
            if (!_common_path__WEBPACK_IMPORTED_MODULE_6__.isValidHttpUrl(url)) {
                _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginError('URL不合法: ', url);
                return this.triggerEvent('error');
            }
            if (!_common_path__WEBPACK_IMPORTED_MODULE_6__.isCacheableUrl(url)) {
                // 如果不是可缓存的请求，更新预载的并发数，避免占用过多带宽
                _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.addTask(new _http_http_task__WEBPACK_IMPORTED_MODULE_2__.HttpTask(url));
            }
            else {
                this.cacheable = true;
            }
            // monitor.requestMonitor.startLoad(url, this.reqId);
            this.originXhr.open(method, url, async, ...args);
            // 挂个空回调，触发回调逻辑；用于fetch接口和纹理资源并发下载
            this.onload = () => { };
            this.onerror = () => { };
            this.ontimeout = () => { };
            this.onabort = () => { };
        };
        this.bindEvent = () => {
            const readonlyProperty = [
                'readyState',
                'response',
                'responseText',
                'responseURL',
                'responseXML',
                'status',
                'statusText',
            ];
            [
                'readyState',
                'response',
                'responseText',
                'responseType',
                'responseURL',
                'responseXML',
                'status',
                'statusText',
                'timeout',
                'upload',
                'withCredentials',
                'onloadstart',
                'onprogress',
                'onabort',
                'onerror',
                'onload',
                'ontimeout',
                'onloadend',
                'onreadystatechange',
            ].forEach((property) => {
                Object.defineProperty(this, property, {
                    get: () => {
                        if (readonlyProperty.includes(property)) {
                            // 如果设置过只读属性，返回设置的值
                            return this[`_${property}`] || this.originXhr[property];
                        }
                        return this.originXhr[property];
                    },
                    set: (value) => {
                        if (property === 'onload') {
                            this.originXhr[property] = (e) => {
                                if (!this.isFetchApi) {
                                    value(e);
                                }
                                else {
                                    // 如果是fetch，触发自定义的事件使fetch转为resolve状态
                                    this.triggerEvent('FetchResolve');
                                }
                                this.handleTaskComplete();
                                const { url } = this.paramsCache;
                                // monitor.requestMonitor.completeLoad(url, this as any, undefined, this.reqId);
                                if (this.cacheable) {
                                    const fileInfo = _fs__WEBPACK_IMPORTED_MODULE_4__["default"].getFileInfo(url);
                                    const filename = _common_path__WEBPACK_IMPORTED_MODULE_6__.basename(url);
                                    if ((0,_common_util__WEBPACK_IMPORTED_MODULE_1__.isSuccessStatusCode)(this.status)) {
                                        // 有文件内容，且未缓存时才走缓存
                                        if (!this.response.byteLength) {
                                            this.triggerEvent('complete', new CompleteResponse({
                                                xhrObj: this,
                                                status: StatusType.Fail,
                                                errMsg: _config_const__WEBPACK_IMPORTED_MODULE_8__.FileError.EmptyContent,
                                            }));
                                            return _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginError(`xhr_onload: ${filename}是空文件,不使用缓存`);
                                        }
                                        if (!fileInfo) {
                                            _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginLog(`xhr_onload: ${filename},耗时=${_log_logger__WEBPACK_IMPORTED_MODULE_5__.TimeLogger.timeEnd(`xhr_send:${url}`)}ms,size=${this.response.byteLength},无缓存`);
                                            const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_6__.resolveCachePath(url);
                                            this.cachePath = cachePath;
                                            if (!!cachePath) {
                                                _fs__WEBPACK_IMPORTED_MODULE_4__["default"].writeFile(cachePath, this.response)
                                                    .then(() => {
                                                    console.log(filename, ', save success');
                                                    this.triggerEvent('save', cachePath);
                                                    this.triggerEvent('complete', new CompleteResponse({
                                                        xhrObj: this,
                                                        status: StatusType.Ok,
                                                    }));
                                                })
                                                    .catch((err) => {
                                                    this.triggerEvent('savefail', err);
                                                    this.triggerEvent('complete', new CompleteResponse({
                                                        xhrObj: this,
                                                        status: StatusType.Fail,
                                                        errMsg: err.errMsg || err.message,
                                                    }));
                                                });
                                            }
                                            else {
                                                const err = new Error(_config_const__WEBPACK_IMPORTED_MODULE_8__.FileError.InvalidCachePath);
                                                this.triggerEvent('savefail', err);
                                                this.triggerEvent('complete', new CompleteResponse({
                                                    xhrObj: this,
                                                    status: StatusType.Fail,
                                                    errMsg: err.message,
                                                }));
                                            }
                                        }
                                        else {
                                            this.triggerEvent('complete', new CompleteResponse({
                                                xhrObj: this,
                                                status: StatusType.Ok,
                                            }));
                                            _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.pluginLog(`xhr_onload: ${filename},耗时=${_log_logger__WEBPACK_IMPORTED_MODULE_5__.TimeLogger.timeEnd(`xhr_send:${url}`)}ms,size=${this.response.byteLength},有缓存`);
                                        }
                                    }
                                    else {
                                        this.triggerEvent('complete', new CompleteResponse({
                                            xhrObj: this,
                                            status: StatusType.Fail,
                                            errMsg: this.statusText,
                                        }));
                                        this.reportHttpError({
                                            filename,
                                            url,
                                            error: this.status,
                                            type: 'onload',
                                        });
                                    }
                                }
                                else {
                                    this.triggerEvent('complete', new CompleteResponse({
                                        xhrObj: this,
                                        status: StatusType.Ok,
                                    }));
                                    if (!(0,_common_util__WEBPACK_IMPORTED_MODULE_1__.isSuccessStatusCode)(this.status)) {
                                        this.reportHttpError({
                                            filename: _common_path__WEBPACK_IMPORTED_MODULE_6__.searchParams(url),
                                            url,
                                            error: this.status,
                                            type: 'onload',
                                        });
                                    }
                                }
                            };
                        }
                        else if (property === 'onerror' || property === 'ontimeout' || property === 'onabort') {
                            this.originXhr[property] = (e) => {
                                const { url } = this.paramsCache;
                                // monitor.requestMonitor.completeLoad(url, this as any, e, this.reqId);
                                if (!this.isFetchApi) {
                                    value(e);
                                }
                                else {
                                    this.triggerEvent('FetchReject', e);
                                }
                                this.handleTaskComplete();
                                this.triggerEvent('complete', new CompleteResponse({
                                    xhrObj: this,
                                    status: StatusType.Fail,
                                    errMsg: `${property}_${this.statusText}`,
                                }));
                                this.reportHttpError({
                                    filename: this.cacheable ? _common_path__WEBPACK_IMPORTED_MODULE_6__.basename(url) : _common_path__WEBPACK_IMPORTED_MODULE_6__.searchParams(url),
                                    url,
                                    error: e,
                                    type: property,
                                });
                            };
                        }
                        else {
                            // 只读属性不修改到xhr
                            if (readonlyProperty.includes(property)) {
                                this[`_${property}`] = value;
                            }
                            else {
                                this.originXhr[property] = value;
                            }
                        }
                    },
                });
            });
            [
                'abort',
                'getAllResponseHeaders',
                'getResponseHeader',
                'overrideMimeType',
                'addEventListener',
                'setRequestHeader',
            ].forEach((method) => {
                Object.defineProperty(this, method, {
                    value: (...args) => {
                        // fetch，使用AbortController.abort后，signal.aborted=true，这里模拟下
                        if (method === 'abort') {
                            this.signal.aborted = true;
                        }
                        return this.originXhr[method](...args);
                    },
                });
            });
        };
        this.createResponse = ({ data, statusCode = 200 }) => {
            if (statusCode !== undefined) {
                this.status = statusCode;
            }
            if (data) {
                this.response = data;
            }
        };
        this.triggerEvent = (type, ...args) => {
            const eventName = `on${type}`;
            const cbs = this[eventName];
            if (cbs) {
                cbs.apply(this, args || []);
            }
        };
        this.originXhr = new _adapter_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.paramsCache = {};
        this.bindEvent();
        this.reqId = (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.uid)(10);
    }
    handleTaskComplete() {
        const task = _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.getTaskByUrl(this.paramsCache.url);
        // 不管成功失败，请求完毕后把任务清理，避免断网等情况导致游戏重试下载失败
        if (task) {
            task.statusCode = this.originXhr.status;
            task.response = this.originXhr.response;
            _preload_manager__WEBPACK_IMPORTED_MODULE_3__.preloadManager.removeTask(task);
        }
    }
    reportHttpError({ filename, url, error, type }) {
        // 如果是unity analysis相关的URL，直接忽略上报，大部分开发者不知道用了此请求，未添加安全域名
        if (_common_path__WEBPACK_IMPORTED_MODULE_6__.isUnityAnalysisUrl(url)) {
            if (!CacheXMLHttpRequest.hasUnityAnalysisLoged) {
                CacheXMLHttpRequest.hasUnityAnalysisLoged = true;
                _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debugWarn('[开发版提示]请求无用URL=', url);
            }
            return;
        }
        // let ignoreReport = false;
        // const logFunc = Logger.pluginError;
        const isStatusCode = typeof error === 'number';
        const isErrMsg = typeof error === 'string';
        let errMsg = error;
        if (!(isStatusCode || isErrMsg)) {
            errMsg = (error === null || error === void 0 ? void 0 : error.errMsg) || (error === null || error === void 0 ? void 0 : error.message) || 'empty errMsg';
        }
        // if (unityNamespace.isReportableHttpError) {
        //   if (!unityNamespace.isReportableHttpError?.({ url, filename, error })) {
        //     ignoreReport = true;
        //     logFunc = Logger.debugError;
        //   }
        // }
        _log_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debugError(`xhr_${type}: ${filename}下载失败: statusCode=`, isStatusCode ? this.status : false, ', statusText=', this.statusText, ', cost=', this.cacheable ? _log_logger__WEBPACK_IMPORTED_MODULE_5__.TimeLogger.timeEnd(`xhr_send:${url}`) : '-', 'ms, errMsg=', errMsg, ', error=', error);
        // logFunc(
        //   `xhr_${type}: ${filename}下载失败: statusCode=`,
        //   isStatusCode ? this.status : false,
        //   ', statusText=',
        //   this.statusText,
        //   ', networkType=',
        //   Config.networkType,
        //   ', isVisible=',
        //   getGameVisible(),
        //   ', cost=',
        //   this.cacheable ? TimeLogger.timeEnd(`xhr_send:${url}`) : '-',
        //   'ms, errMsg=',
        //   errMsg,
        //   ', error=',
        //   error,
        // );
        // if (UnityManager.getInstance().needPluginReport() && !ignoreReport) {
        //   report21493.send(new PluginReportParams({
        //     ReportType: LaunchEventType.LOAD_ASSET_BUNDLE,
        //     ErrorMsg: `${errMsg}`, // errMsg可能是number，转换一下
        //     ErrorType: Number(this.status),
        //     RunTimeMs: TimeLogger.getRuntime(),
        //     ExternInfo: JSON.stringify({
        //       event: `CacheXMLHttpRequest_${type}: ${isStatusCode ? 'statusCode' : 'network'} error`,
        //       isReadFromCache: this.isReadFromCache,
        //       cacheable: this.cacheable,
        //       type,
        //       url,
        //       gameStage: getGameStage(),
        //     }),
        //   }));
        // }
    }
}
CacheXMLHttpRequest.hasUnityAnalysisLoged = false;


/***/ }),

/***/ "./src/worker/http/preload-manager.ts":
/*!********************************************!*\
  !*** ./src/worker/http/preload-manager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadManager": () => (/* binding */ PreloadManager),
/* harmony export */   "preloadManager": () => (/* binding */ preloadManager)
/* harmony export */ });
/* harmony import */ var _http_http_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../http/http-task */ "./src/http/http-task.ts");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fs */ "./src/worker/fs/index.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./src/worker/common/util.ts");
/* harmony import */ var _log_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../log/logger */ "./src/worker/log/logger.ts");
/* harmony import */ var _common_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/path */ "./src/worker/common/path.ts");
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-misused-promises */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @format */


// import { PluginReportParams, report21493 } from '../report';
// import { LaunchEventType } from '../common/config';

// import { getGameVisible, getGameStage, Config } from '../common/game-status';


/**
 * 在网络空闲时预加载资源，并缓存到本地。外部使用时通过addTask/removeTask来触发预载
 *
 * 1.没有游戏内网络请求，或者等待游戏内网络请求全部结束后开始预载资源
 *
 * 2.如果预载时，游戏已经开始加载该资源，不处理
 *
 * 3.如果游戏开始加载资源时，已经有预载任务正在进行，等预载任务完成后回调处理
 *
 * @export
 * @class PreloadManager
 */
class PreloadManager {
    constructor() {
        this.loadedSize = 0;
        this.inited = false;
        this.localLoadingCount = 0;
        this.defaultMaxParallelCount = 10;
        this.timer = 0;
        /**
         * callmain前，并发数设为10，callmain后改为1
         *
         * @private
         * @type {number}
         * @memberof PreloadManager
         */
        this.maxCount = this.defaultMaxParallelCount;
        this.preloadList = [];
        this.preloadInfoList = new Map();
        this.loadedUrls = new Map();
        this.httpTaskManager = new _http_http_task__WEBPACK_IMPORTED_MODULE_0__.HttpTaskManager(); // null as any; //TODO:Elvissu  之前默认是null 但因为worker里没有走init，这里先初始化
        this.setPreloadList = (preloadList = []) => {
            if (preloadList === null || preloadList === void 0 ? void 0 : preloadList.length) {
                const list = preloadList.filter(url => !!(url === null || url === void 0 ? void 0 : url.trim()));
                const preloadInfoList = list.map(this.handlePreloadInfo);
                preloadInfoList.forEach((info) => {
                    // 不能缓存的文件，预下载没有意义
                    if (_common_path__WEBPACK_IMPORTED_MODULE_4__.isCacheableUrl(info.url)) {
                        // 根据去除md5的文件路径来区分有无同名文件
                        this.preloadInfoList.set(info.shortSubPath, info);
                    }
                });
                // const instance = UnityManager.getInstance();
                // 当前下载列表是空的，并且没有在下载wasm和首资源包
                // const needStartLoad = !this.preloadList.length && !!instance && !instance?.isAssetsLoading;
                const needStartLoad = !this.preloadList.length;
                this.preloadList = Array.from(this.preloadInfoList.values()).map(info => info.url);
                // 后续修改预下载列表的时候，可能之前配置的列表已经下载完成，需要手动触发开始预下载
                if (this.inited && needStartLoad) {
                    this.load();
                }
                // monitor.preloadMonitor.setPreloadList(this.preloadInfoList);
            }
        };
        this.handlePreloadInfo = (_url) => {
            let url = _url.includes('http') ? _url : _common_path__WEBPACK_IMPORTED_MODULE_4__.join(_common_path__WEBPACK_IMPORTED_MODULE_4__.resolveBuildUrl('StreamingAssets'), _url);
            url = _common_path__WEBPACK_IMPORTED_MODULE_4__.filterUrl(url);
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(url);
            const dirname = _common_path__WEBPACK_IMPORTED_MODULE_4__.dirname(url);
            const md5 = _common_path__WEBPACK_IMPORTED_MODULE_4__.getMd5FromFilename(url);
            const shortFilename = _common_path__WEBPACK_IMPORTED_MODULE_4__.getShortFilename(url);
            return {
                url,
                md5,
                shortFilename,
                filename,
                subPath: _common_path__WEBPACK_IMPORTED_MODULE_4__.join(dirname, filename),
                shortSubPath: _common_path__WEBPACK_IMPORTED_MODULE_4__.join(dirname, shortFilename),
            };
        };
        this.releaseAll = () => {
            Array.from(this.loadedUrls.keys()).forEach((url) => {
                this.releaseTask(new _http_http_task__WEBPACK_IMPORTED_MODULE_0__.HttpTask(url));
            });
            this.timer = 0;
        };
        this.load = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = this.preloadList.shift();
            if (!url) {
                return;
            }
            const preloadInfo = this.handlePreloadInfo(url);
            const task = new _http_http_task__WEBPACK_IMPORTED_MODULE_0__.HttpTask(url);
            // 若有CacheXMLHttpRequest请求正在进行直接return
            if (this.getTaskByUrl(url)) {
                return;
            }
            // 本地已有缓存，不需要开启预载任务，执行下一个预载
            if (_fs__WEBPACK_IMPORTED_MODULE_1__["default"].getCachePath(url)) {
                setTimeout(this.load, 0);
                return;
            }
            const filename = _common_path__WEBPACK_IMPORTED_MODULE_4__.basename(url);
            try {
                // TODO: 未处理预下载任务有缓存或已由业务发起请求
                // monitor.preloadMonitor.startLoad(url);
                this.addTask(task);
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeStart(`preload:${url}`);
                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginLog(`[worker-preload] PreloadManager: ${filename}开始预载`);
                const [err, res] = yield (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.awaitWrap)(_fs__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFileByXMLHttpRequest(url));
                const ignorePreload = this.preloadInfoList.has(preloadInfo.shortSubPath)
                    && ((_a = this.preloadInfoList.get(preloadInfo.shortSubPath)) === null || _a === void 0 ? void 0 : _a.subPath) !== preloadInfo.subPath;
                if (!ignorePreload) {
                    // monitor.preloadMonitor.completeLoad(url, res, err);
                }
                // 异常的时候，清掉耗时统计，避免越累越多
                if (ignorePreload || err) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeEnd(`preload:${url}`);
                }
                // 更新预下载列表后，会清掉旧文件；如果已经下载完成，不做处理。由于可能http-request有同名请求，所以按照错误处理
                if (ignorePreload) {
                    task.statusCode = _http_http_task__WEBPACK_IMPORTED_MODULE_0__.FAKE_HTTP_ERROR_STATUS_CODE;
                    return this.removeTask(task);
                }
                // 如果下载异常，错误码设为400
                if (err) {
                    if (!task.statusCode) {
                        task.statusCode = _http_http_task__WEBPACK_IMPORTED_MODULE_0__.FAKE_HTTP_ERROR_STATUS_CODE;
                    }
                    task.error = err;
                    throw err;
                }
                this.loadedUrls.set(url, true);
                this.checkNeedReleaseAll();
                const { response, status } = res;
                // 使用downloadtask的状态码
                task.statusCode = status;
                if ((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.isSuccessStatusCode)(status)) {
                    _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginLog(`[worker-preload] PreloadManager: ${filename}预载完成, 耗时: ${_log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeEnd(`preload:${url}`)}ms`);
                    // 先获取文件大小，再缓存
                    const fileSize = response.byteLength;
                    this.countLoadedFileSize(fileSize);
                    // 预下载完成的资源，将res暂存内存中，命中预下载则从内存中读取，免去文件读写
                    task.response = response;
                    _log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeStart(`savepreload:${url}`);
                    const cachePath = _common_path__WEBPACK_IMPORTED_MODULE_4__.resolveCachePath(url);
                    if (!!cachePath) {
                        (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.awaitWrap)(_fs__WEBPACK_IMPORTED_MODULE_1__["default"].writeFile(cachePath, response)).then(([writeError]) => {
                            _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginLog(`[worker-preload] PreloadManager: ${url}缓存完成，耗时: ${_log_logger__WEBPACK_IMPORTED_MODULE_3__.TimeLogger.timeEnd(`savepreload:${url}`)}ms`);
                            if (writeError) {
                                _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError(`PreloadManager: ${filename}未正常缓存`, writeError.errMsg || writeError.message, writeError);
                            }
                        });
                    }
                }
                else {
                    this.reportHttpError({
                        filename,
                        url,
                        error: status,
                        type: 'onerror',
                    });
                }
            }
            catch (err) {
                this.reportHttpError({
                    filename,
                    url,
                    error: err,
                    type: 'catch',
                });
            }
            // 请求完成后，移除该任务，但保留下载的buffer，优化命中预下载时加载时间
            this.removeTask(task, false);
        });
    }
    static getInstance() {
        if (!PreloadManager.instance) {
            PreloadManager.instance = new PreloadManager();
        }
        return PreloadManager.instance;
    }
    get loadingCount() {
        return this.localLoadingCount;
    }
    set loadingCount(count) {
        if (Number.isInteger(count) && count >= 0) {
            // 通过更新正在进行的任务数来触发预载
            if (count < this.maxCount) {
                setTimeout(this.load, 0);
            }
            this.localLoadingCount = count;
        }
    }
    isPreloadedUrl(url) {
        return this.loadedUrls.has(url);
    }
    init({ preloadList } = {
        preloadList: [],
    }) {
        if (!this.inited) {
            this.setPreloadList(preloadList);
            this.inited = true;
            this.loadedSize = 0;
            this.localLoadingCount = 0;
            if (!this.httpTaskManager) {
                this.httpTaskManager = new _http_http_task__WEBPACK_IMPORTED_MODULE_0__.HttpTaskManager();
            }
        }
    }
    hasTask(task) {
        if (this.httpTaskManager) {
            return this.httpTaskManager.hasTask(task);
        }
        return false;
    }
    getTaskByUrl(url) {
        if (this.httpTaskManager) {
            return this.httpTaskManager.getTaskByUrl(url);
        }
        return null;
    }
    addTask(httpTask) {
        if (this.httpTaskManager) {
            if (!this.httpTaskManager.hasTask(httpTask)) {
                this.httpTaskManager.addTask(httpTask);
                this.loadingCount += 1;
            }
        }
    }
    removeTask(httpTask, needRelease = true) {
        if (this.httpTaskManager) {
            if (this.httpTaskManager.hasTask(httpTask)) {
                // 移除任务时，不论是否正常下载，触发complete
                httpTask.emit(_http_http_task__WEBPACK_IMPORTED_MODULE_0__.HttpEventName.COMPLETE);
                // 更新预载任务数，开始下一个预载任务
                this.loadingCount -= 1;
                if (this.loadingCount === 0) {
                    // 待下载URL为空，预下载列表已经完成
                    // monitor.preloadMonitor.finishPreload();
                }
                const preloadInfo = this.handlePreloadInfo(httpTask.url);
                // 预载完成，删除预载信息
                this.preloadInfoList.delete(preloadInfo.shortSubPath);
                if (needRelease) {
                    this.releaseTask(httpTask);
                }
            }
        }
    }
    handleRemove(httpTask) {
        var _a, _b;
        if ((_b = (_a = this === null || this === void 0 ? void 0 : this.httpTaskManager) === null || _a === void 0 ? void 0 : _a.hasTask) === null || _b === void 0 ? void 0 : _b.call(_a, httpTask)) {
            this.httpTaskManager.removeTask(httpTask);
        }
    }
    releaseTask(httpTask) {
        this.handleRemove(httpTask);
        this.loadedUrls.delete(httpTask.url);
    }
    checkNeedReleaseAll() {
        if (!this.timer) {
            this.timer = setTimeout(this.releaseAll, 60000);
        }
    }
    setConcurrent(count = 1) {
        // 并发数最大不超过10
        let num = Number(count) || 1;
        num = num > 10 ? 10 : Math.max(1, num);
        this.maxCount = num;
    }
    unShift(url) {
        this.preloadList.unshift(url);
        // 激活加载
        this.loadingCount = Number(this.loadingCount);
    }
    countLoadedFileSize(fileSize = 0) {
        this.loadedSize += fileSize;
        return this.loadedSize;
    }
    reportHttpError({ filename, error, type }) {
        const isStatusCode = typeof error === 'number';
        const isErrMsg = typeof error === 'string';
        let errMsg = error;
        if (!(isStatusCode || isErrMsg)) {
            errMsg = (error === null || error === void 0 ? void 0 : error.errMsg) || (error === null || error === void 0 ? void 0 : error.message) || 'empty errMsg';
        }
        _log_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.pluginError(`PreloadManager_${type}: ${filename}预载失败`, ', error=', errMsg);
        // if (UnityManager.getInstance().needPluginReport()) {
        //   report21493.send(new PluginReportParams({
        //     ReportType: LaunchEventType.LOAD_ASSET_BUNDLE,
        //     ErrorMsg: `${errMsg}`,
        //     ErrorType: isStatusCode ? errMsg : 0,
        //     RunTimeMs: TimeLogger.getRuntime(),
        //     ExternInfo: JSON.stringify({
        //       event: `PreloadManager: ${type}`,
        //       url,
        //       gameStage: getGameStage(),
        //     }),
        //   }));
        // }
    }
}
PreloadManager.instance = null;
const preloadManager = PreloadManager.getInstance();


/***/ }),

/***/ "./src/worker/http/response.ts":
/*!*************************************!*\
  !*** ./src/worker/http/response.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Response)
/* harmony export */ });
/**
 * 简单实现fetch API中的Response
 * 作用是包装xhr
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Response
 *
 * @export
 * @class Response
 */
class Response {
    // 以下接口胶水层未调用
    // body是stream，不实现
    // readonly body: any;
    // readonly bodyUsed: boolean;
    // readonly redirected: boolean;
    constructor(obj) {
        const headers = obj.getAllResponseHeaders();
        const headerMap = new Map();
        const arr = headers.trim().split(/[\r\n]+/);
        arr.forEach((line) => {
            const parts = line.split(': ');
            const header = parts.shift();
            const value = parts.join(': ');
            headerMap.set(header, value);
        });
        this.headers = headerMap;
        this.url = obj.paramsCache.url;
        this.ok = !!(obj.status >= 200 && obj.status < 300);
        // 跨域且网络错误时，status/statusText/response是空
        this.status = obj.status;
        this.statusText = obj.statusText;
        this.parsedBody = new Uint8Array(obj.response);
        this.originXHR = obj;
    }
}


/***/ }),

/***/ "./src/worker/log/logger.ts":
/*!**********************************!*\
  !*** ./src/worker/log/logger.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeLogger": () => (/* binding */ TimeLogger),
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tencent/minigamefe/common/util */ "./node_modules/@tencent/minigamefe/common/util.js");

class TimeLogger {
    static timeStart(label) {
        if (!TimeLogger.timeMap.has(label)) {
            const t = Date.now();
            TimeLogger.timeMap.set(label, t);
            return t;
        }
        return 0;
    }
    static printTime(label) {
        if (TimeLogger.timeMap.has(label)) {
            const timeStamp = TimeLogger.timeEnd(label, false);
            const str = `[PLUGIN TIME LOG ${(0,_tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_0__.formatDate)(Date.now(), 'hh:mm.ss.SSS')}] ${label}: ${timeStamp}ms`;
            console.log(str);
            TimeLogger.timeStrList.push(str);
        }
    }
    static timeEnd(label, removeLabel = true) {
        if (TimeLogger.timeMap.has(label)) {
            const t1 = Date.now();
            const t2 = TimeLogger.timeMap.get(label);
            if (removeLabel) {
                TimeLogger.timeMap.delete(label);
            }
            return t1 - t2;
        }
        return 0;
    }
    static getRuntime(isSec = false) {
        const timeStamp = Date.now() - TimeLogger.logStartTime;
        return isSec ? +(timeStamp / 1000).toFixed(2) : timeStamp;
    }
    static printRuntime(label) {
        const str = `[PLUGIN TIME LOG ${(0,_tencent_minigamefe_common_util__WEBPACK_IMPORTED_MODULE_0__.formatDate)(Date.now(), 'hh:mm.ss.SSS')}] ${label}: ${TimeLogger.getRuntime()}ms`;
        console.log(str);
        if (str.indexOf('游戏启动耗时') > -1) {
            TimeLogger.timeStrList.push(str);
        }
    }
    static storeTime(label) {
        if (!TimeLogger.storeTimeMap.has(label)) {
            TimeLogger.storeTimeMap.set(label, {
                CostTimeMs: TimeLogger.timeEnd(label),
                RunTimeMs: TimeLogger.getRuntime(),
            });
        }
    }
    static popTime(label) {
        if (TimeLogger.storeTimeMap.has(label)) {
            const result = TimeLogger.storeTimeMap.get(label);
            TimeLogger.storeTimeMap.delete(label);
            return result;
        }
        return null;
    }
}
TimeLogger.logStartTime = Date.now();
TimeLogger.timeMap = new Map();
TimeLogger.storeTimeMap = new Map();
TimeLogger.timeStrList = [];
class Logger {
    static eventLog(...args) {
        console.log('[WORKER][PLUGIN LOG] ', ...args);
    }
    static debugLog(...args) {
        console.log('[WORKER][DEBUG LOG] ', ...args);
    }
    static debugWarn(...args) {
        console.warn('[WORKER][DEBUG WARN] ', ...args);
    }
    static debugError(...args) {
        console.error('[WORKER][DEBUG ERROR] ', ...args);
    }
    static pluginLog(...args) {
        console.log('[WORKER][PLUGIN LOG] ', ...args);
    }
    static pluginWarn(...args) {
        console.log('[WORKER][PLUGIN WARN] ', ...args);
    }
    static pluginError(...args) {
        console.log('[WORKER][PLUGIN ERROR] ', ...args);
    }
}


/***/ }),

/***/ "./src/worker/message.ts":
/*!*******************************!*\
  !*** ./src/worker/message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/base */ "./src/common/base.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/worker/config/index.ts");
/* harmony import */ var _response_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response/fs */ "./src/worker/response/fs.ts");
/* harmony import */ var _response_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response/http */ "./src/worker/response/http.ts");
/* harmony import */ var _response_short_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response/short-audio */ "./src/worker/response/short-audio.ts");
/* harmony import */ var _response_worker_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./response/worker-config */ "./src/worker/response/worker-config.ts");



// import config from './response/worker-config';




class WorkerMessenger extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    postMessage(msg) {
        worker.postMessage(msg);
    }
    postHttpMessage(payload) {
        worker.postMessage({
            type: _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.FakeXHR,
            payload,
        });
    }
    bindMessageListener() {
        console.log('bind worker msg listener');
        _config__WEBPACK_IMPORTED_MODULE_2__["default"].init();
        worker.onMessage((res) => {
            // console.log('worker receive msg, ', res);
            switch (res.type) {
                case _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.config:
                    _response_worker_config__WEBPACK_IMPORTED_MODULE_6__["default"].handleMsg(res);
                    _config__WEBPACK_IMPORTED_MODULE_2__["default"].resolvePromise();
                    break;
                case _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.writeFile:
                    _response_fs__WEBPACK_IMPORTED_MODULE_3__["default"].writeFile(res);
                    break;
                case _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.FakeXHR:
                    _response_http__WEBPACK_IMPORTED_MODULE_4__["default"].handleAction(res.payload);
                    break;
                case _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.shortAudio:
                    _response_short_audio__WEBPACK_IMPORTED_MODULE_5__["default"].handleCommand(res.payload);
                    break;
                default:
                    break;
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkerMessenger.getInstance());


/***/ }),

/***/ "./src/worker/response/fs.ts":
/*!***********************************!*\
  !*** ./src/worker/response/fs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base */ "./src/common/base.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/worker/message.ts");



class FileSystem extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    init() {
        if (worker.getFileSystemManager) {
            this.fs = worker.getFileSystemManager();
        }
    }
    writeFile(payload) {
        const { filePath, data, isSharedBuffer } = payload;
        let content = data;
        if (isSharedBuffer) {
            content = data.buffer;
        }
        this.fs.writeFile({
            filePath,
            data: content,
            success: () => {
                _message__WEBPACK_IMPORTED_MODULE_2__["default"].postMessage({
                    type: _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.writeFile,
                    payload: {
                        isok: true,
                        filePath,
                    },
                });
            },
            fail: (err) => {
                _message__WEBPACK_IMPORTED_MODULE_2__["default"].postMessage({
                    type: _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MessageType.writeFile,
                    payload: {
                        isok: false,
                        filePath,
                        err,
                    },
                });
            },
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileSystem.getInstance());


/***/ }),

/***/ "./src/worker/response/http.ts":
/*!*************************************!*\
  !*** ./src/worker/response/http.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base */ "./src/common/base.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/worker/message.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http */ "./src/worker/http/index.ts");





const httpMap = new Map();
const xhrEvent = [
    'loadstart',
    'progress',
    'abort',
    'error',
    'load',
    'timeout',
    'loadend',
    'readystatechange',
    'save',
    'savefail',
    'complete',
];
class HTTPRequest extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    handleAction(payload) {
        const { action, ds } = payload;
        console.log(`[perf] gameContext -> worker [${action}] cost=`, Date.now() - ds);
        if (action === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.XHRActionType.Open) {
            this.create(payload);
        }
        if (action === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.XHRActionType.Send) {
            this.send(payload);
        }
        if (action === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.XHRActionType.SetRequestHeader) {
            this.setRequestHeader(payload);
        }
        if (action === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.XHRActionType.SetResponseType) {
            this.setResponseType(payload);
        }
    }
    create(payload) {
        const { data: { method, url }, id } = payload;
        const xhr = new _http__WEBPACK_IMPORTED_MODULE_4__["default"]();
        xhr.open(method, url);
        httpMap.set(id, xhr);
        this.bindEvent(xhr, id);
    }
    send(payload) {
        const { id, data, isSharedBuffer } = payload;
        const xhr = httpMap.get(id);
        if (!xhr) {
            return;
        }
        let postData = data;
        if (isSharedBuffer && data) {
            postData = data.buffer;
        }
        xhr.send(postData);
    }
    setRequestHeader(payload) {
        const { id, data: { header, value } } = payload;
        const xhr = httpMap.get(id);
        if (!xhr) {
            return;
        }
        xhr.setRequestHeader(header, value);
    }
    setResponseType(payload) {
        const { id, data } = payload;
        const xhr = httpMap.get(id);
        if (!xhr) {
            return;
        }
        xhr.responseType = data;
    }
    bindEvent(xhr, id) {
        xhrEvent.forEach((prop) => {
            const event = `on${prop}`;
            xhr[event] = (e) => {
                this.syncXHREvent({ xhr, id, event: e, action: prop });
                // if (prop === 'load') {
                //   this.handleSuccess(xhr, id, e);
                // }
                // if (prop === 'error') {
                //   this.handleError(xhr, id, e);
                // }
                // message.postHttpMessage({
                //   id,
                //   action: prop as XHRActionType,
                //   data,
                // });
                if (prop === 'loadend') {
                    httpMap.delete(id);
                }
            };
        });
    }
    // eslint-disable-next-line max-len
    syncXHREvent({ xhr, id, event, action }) {
        const headers = this.parseHeaders(xhr.getAllResponseHeaders());
        const { status, readyState, statusText, responseText } = xhr;
        let responseData = xhr.response;
        let isSharedBuffer = false;
        const ds = Date.now();
        if (responseData && responseData instanceof ArrayBuffer && _config__WEBPACK_IMPORTED_MODULE_3__["default"].hasSharedBuffer) {
            responseData = worker.createSharedArrayBuffer(responseData.byteLength);
            // 把xhr返回的arraybuffer复制到sharedbuffer
            new Uint8Array(responseData.buffer).set(new Uint8Array(xhr.response));
            isSharedBuffer = true;
        }
        _message__WEBPACK_IMPORTED_MODULE_2__["default"].postHttpMessage({
            id,
            type: _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.MsgType.OriginEvent,
            action,
            isSharedBuffer,
            data: {
                headers,
                response: responseData,
                status,
                statusText,
                responseText,
                readyState,
                profile: xhr.originXhr.profile,
                event,
                cacheable: xhr.cacheable,
                isReadFromCache: xhr.isReadFromCache,
                cachePath: xhr.cachePath,
            },
            ds,
        });
    }
    parseHeaders(headers) {
        const parsedHeaders = {};
        if (!headers)
            return parsedHeaders;
        headers.split('\n').forEach((line) => {
            const [header, value] = line.split(': ');
            if (header)
                parsedHeaders[header] = value;
        });
        return parsedHeaders;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTTPRequest.getInstance());


/***/ }),

/***/ "./src/worker/response/short-audio.ts":
/*!********************************************!*\
  !*** ./src/worker/response/short-audio.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base */ "./src/common/base.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _shortaudio_shortaudio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shortaudio/shortaudio-helper */ "./src/worker/shortaudio/shortaudio-helper.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");




class ShortAudio extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    constructor() {
        super(...arguments);
        this.shortAudios = {};
        this.shortAudioVolume = new WeakMap();
        this.shortAudioHelper = _shortaudio_shortaudio_helper__WEBPACK_IMPORTED_MODULE_2__.ShortAudioHelper.getInstance();
    }
    handleCommand(payload) {
        const { cmd } = payload;
        console.log(`[perf] gameContext -> worker [${cmd}]`);
        if (cmd === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.Create) {
            this.create(payload);
        }
        if (cmd === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.Play) {
            this.play(payload);
        }
        if (cmd === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.Stop) {
            this.stop(payload);
        }
        if (cmd === _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.Destroy) {
            this.destroy(payload);
        }
        if (cmd == _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.PreDownload) {
            this.preDownload(payload);
        }
        if (cmd == _common_worker_type__WEBPACK_IMPORTED_MODULE_1__.ShortAudioCmdType.MuteChange) {
            this.muteChange(payload);
        }
    }
    create(payload) {
        const { uid, params } = payload;
        this.createShortAudio(uid, params);
    }
    play(payload) {
        const { uid } = payload;
        this.playShortAudio(uid);
    }
    stop(payload) {
        const { uid } = payload;
        this.stopShortAudio(uid);
    }
    destroy(payload) {
        const { uid } = payload;
        this.destroyShortAudio(uid);
    }
    preDownload(payload) {
        const { uid, params } = payload;
        const callbackId = uid;
        const paths = (params === null || params === void 0 ? void 0 : params.src) || '';
        this.shortAudioHelper.preDownloadAudios(paths, callbackId);
    }
    muteChange(payload) {
        var _a, _b;
        const { params } = payload;
        const isMute = (_a = params === null || params === void 0 ? void 0 : params.isMute) !== null && _a !== void 0 ? _a : false;
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].isWEBAudioMute === isMute) {
            return;
        }
        _config__WEBPACK_IMPORTED_MODULE_3__["default"].isWEBAudioMute = isMute;
        for (const innerAudio of Object.values(this.shortAudios)) {
            innerAudio.volume = isMute ? 0 : (_b = this.shortAudioVolume.get(innerAudio)) !== null && _b !== void 0 ? _b : 1;
        }
    }
    createInnerWebAudioByUid(uid) {
        const audio = worker.createInnerAudioContext({
            useWebAudioImplement: true,
        });
        if (audio) {
            this.shortAudios[uid] = audio;
        }
        return audio;
    }
    createShortAudio(uid, params) {
        const { src, loop, autoplay, volume, needDownload = true, } = params || {};
        let startTime = params === null || params === void 0 ? void 0 : params.startTime;
        let playbackRate = params === null || params === void 0 ? void 0 : params.playbackRate;
        const audio = this.createInnerWebAudioByUid(uid);
        audio.needDownload = needDownload;
        if (src) {
            // 设置原始src
            this.shortAudioHelper.setAudioSrc(audio, src).catch((e) => {
                console.error(`[shortaudio] setAudioSrc error: ${JSON.stringify(e)}`);
            });
        }
        if (loop) {
            audio.loop = true;
        }
        if (typeof startTime === 'undefined') {
            startTime = 0;
        }
        if (startTime > 0) {
            audio.startTime = +startTime.toFixed(2);
        }
        if (autoplay) {
            audio.autoplay = true;
        }
        let volumeValue;
        if (typeof volume === 'undefined') {
            volumeValue = 1;
        }
        else {
            volumeValue = +volume.toFixed(2);
        }
        this.shortAudioVolume.set(audio, volumeValue);
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].isWEBAudioMute) {
            volumeValue = 0;
        }
        if (volumeValue !== 1) {
            audio.volume = volumeValue;
        }
        if (!_config__WEBPACK_IMPORTED_MODULE_3__["default"].isSupportPlayBackRate) {
            playbackRate = 1;
        }
        if (typeof playbackRate !== 'undefined' && playbackRate !== 1) {
            audio.playbackRate = +playbackRate.toFixed(2);
        }
    }
    checkHasShortAudio(id) {
        if (this.shortAudios[id]) {
            return true;
        }
        console.error('ShortWorkerAudioContext does not exist!', id);
        return false;
    }
    playShortAudio(id) {
        if (!this.checkHasShortAudio(id)) {
            return;
        }
        const url = this.shortAudios[id].isLoading;
        if (url) {
            if (this.shortAudioHelper.downloadingAudioMap[url]) {
                this.shortAudioHelper.downloadingAudioMap[url].push({
                    resolve: () => {
                        if (typeof this.shortAudios[id] !== 'undefined') {
                            this.shortAudios[id].play();
                        }
                    },
                    reject: () => { },
                });
            }
            else {
                this.shortAudios[id].src = url;
                this.shortAudios[id].play();
            }
        }
        else {
            this.shortAudios[id].play();
        }
    }
    stopShortAudio(id) {
        if (!this.checkHasShortAudio(id)) {
            return;
        }
        this.shortAudios[id].stop();
    }
    destroyShortAudio(id) {
        if (!this.checkHasShortAudio(id)) {
            return;
        }
        this.shortAudios[id].destroy();
        delete this.shortAudios[id];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortAudio.getInstance());


/***/ }),

/***/ "./src/worker/response/worker-config.ts":
/*!**********************************************!*\
  !*** ./src/worker/response/worker-config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base */ "./src/common/base.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/worker/message.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");




class WorkerConfig extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    handleMsg(res) {
        _config__WEBPACK_IMPORTED_MODULE_3__["default"].initConfig(res.payload);
        this.postConfig();
    }
    postConfig() {
        _message__WEBPACK_IMPORTED_MODULE_1__["default"].postMessage({
            type: _common_worker_type__WEBPACK_IMPORTED_MODULE_2__.MessageType.config,
            payload: {
                supportWorkerFs: _config__WEBPACK_IMPORTED_MODULE_3__["default"].supportWorkerFs,
                supportSharedBuffer: _config__WEBPACK_IMPORTED_MODULE_3__["default"].supportSharedBuffer,
            },
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkerConfig.getInstance());


/***/ }),

/***/ "./src/worker/shortaudio/shortaudio-helper.ts":
/*!****************************************************!*\
  !*** ./src/worker/shortaudio/shortaudio-helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortAudioHelper": () => (/* binding */ ShortAudioHelper)
/* harmony export */ });
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base */ "./src/common/base.ts");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fs */ "./src/worker/fs/index.ts");
/* harmony import */ var _common_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/path */ "./src/worker/common/path.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http */ "./src/worker/http/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/worker/config/index.ts");
/* harmony import */ var _common_worker_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/worker-type */ "./src/common/worker-type.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message */ "./src/worker/message.ts");







class ShortAudioHelper extends _common_base__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    constructor() {
        super(...arguments);
        this.downloadingAudioMap = {};
        this.localAudioMap = {};
    }
    getFullUrl(v) {
        if (!/^https?:\/\//.test(v) && !/^wxfile:\/\//.test(v)) {
            const cdnPath = _config__WEBPACK_IMPORTED_MODULE_4__["default"].assetPath;
            v = `${cdnPath.replace(/\/$/, '')}/${v.replace(/^\//, '').replace(/^Assets\//, '')}`;
        }
        return v;
    }
    preDownloadAudios(paths, callbackId) {
        this.downloadAudios(paths).then(() => {
            _message__WEBPACK_IMPORTED_MODULE_6__["default"].postMessage({
                type: _common_worker_type__WEBPACK_IMPORTED_MODULE_5__.MessageType.shortAudio,
                payload: {
                    cmd: _common_worker_type__WEBPACK_IMPORTED_MODULE_5__.ShortAudioCmdType.PreDownload,
                    callbackId: callbackId.toString(),
                    errMsg: '0',
                },
            });
        })
            .catch((_e) => {
            _message__WEBPACK_IMPORTED_MODULE_6__["default"].postMessage({
                type: _common_worker_type__WEBPACK_IMPORTED_MODULE_5__.MessageType.shortAudio,
                payload: {
                    cmd: _common_worker_type__WEBPACK_IMPORTED_MODULE_5__.ShortAudioCmdType.PreDownload,
                    callbackId: callbackId.toString(),
                    errMsg: '1',
                },
            });
        });
    }
    // 设置路径
    setAudioSrc(audio, getSrc) {
        return new Promise((resolve, reject) => {
            const src = this.getFullUrl(getSrc);
            // 设置原始路径，后面用此路径作为key值
            audio.isLoading = src;
            if (this.checkLocalFile(src)) {
                audio.src = this.localAudioMap[src];
                delete audio.isLoading;
                this.handleDownloadEnd(src, true);
                resolve(this.localAudioMap[src]);
            }
            else if (audio.needDownload) {
                this
                    .downloadAudios(src)
                    .then(() => {
                    if (audio) {
                        audio.src = this.localAudioMap[src];
                        delete audio.isLoading;
                        resolve(this.localAudioMap[src]);
                    }
                    else {
                        console.warn('资源已被删除:', src);
                        reject({
                            errCode: -1,
                            errMsg: '资源已被删除',
                        });
                    }
                })
                    .catch(() => {
                    console.warn('资源下载失败:', src);
                    if (audio) {
                        audio.src = src;
                        delete audio.isLoading;
                    }
                    reject({
                        errCode: -1,
                        errMsg: '资源下载失败',
                    });
                });
            }
            else {
                // 不推荐这样处理，建议优先下载再使用，除非是需要立即播放的长音频文件或一次性播放音频
                // console.warn('建议优先下载再使用:', src);
                audio.src = src;
                delete audio.isLoading;
                resolve(src);
            }
        });
    }
    downloadAudios(paths) {
        const list = paths.split(',');
        return Promise.all(list.map((v) => {
            const src = this.getFullUrl(v);
            return new Promise((resolve, reject) => {
                if (!this.downloadingAudioMap[src]) {
                    this.downloadingAudioMap[src] = [
                        {
                            resolve,
                            reject,
                        },
                    ];
                    if (this.checkLocalFile(src)) {
                        this.handleDownloadEnd(src, true);
                    }
                    else if (!(0,_common_path__WEBPACK_IMPORTED_MODULE_2__.isCacheableFile)(src)) {
                        _fs__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFileAsync(src).then((res) => {
                            if (res.statusCode === 200 && res.tempFilePath) {
                                this.localAudioMap[src] = res.tempFilePath;
                                this.handleDownloadEnd(src, true);
                            }
                            else {
                                this.handleDownloadEnd(src, false);
                            }
                        })
                            .catch((_e) => {
                            this.handleDownloadEnd(src, false);
                        });
                    }
                    else {
                        const xmlhttp = new _http__WEBPACK_IMPORTED_MODULE_3__["default"]();
                        xmlhttp.open('GET', src, true);
                        xmlhttp.responseType = 'arraybuffer';
                        xmlhttp.onsave = () => {
                            this.localAudioMap[src] = _fs__WEBPACK_IMPORTED_MODULE_1__["default"].getCachePath(src);
                            this.handleDownloadEnd(src, true);
                        };
                        xmlhttp.onsavefail = () => {
                            this.handleDownloadEnd(src, false);
                        };
                        xmlhttp.onerror = () => {
                            this.handleDownloadEnd(src, false);
                        };
                        xmlhttp.send();
                    }
                }
                else {
                    this.downloadingAudioMap[src].push({
                        resolve,
                        reject,
                    });
                }
            });
        }));
    }
    handleDownloadEnd(src, succeeded) {
        if (!this.downloadingAudioMap[src]) {
            return;
        }
        while (this.downloadingAudioMap[src] && this.downloadingAudioMap[src].length > 0) {
            const item = this.downloadingAudioMap[src].shift();
            if (!succeeded) {
                item === null || item === void 0 ? void 0 : item.reject();
            }
            else {
                item === null || item === void 0 ? void 0 : item.resolve('');
            }
        }
        delete this.downloadingAudioMap[src];
    }
    // 是否存在本地文件
    checkLocalFile(src) {
        if (this.localAudioMap[src]) {
            return true;
        }
        const path = _fs__WEBPACK_IMPORTED_MODULE_1__["default"].getCachePath(src);
        if (path) {
            this.localAudioMap[src] = path;
            return true;
        }
        return false;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/worker/message.ts");

_message__WEBPACK_IMPORTED_MODULE_0__["default"].bindMessageListener();
setTimeout(() => {
    console.log('worker keys=', Object.keys(worker));
}, 0);

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map