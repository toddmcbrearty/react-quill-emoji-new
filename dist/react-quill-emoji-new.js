var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), __export = (e) => {
	let n = {};
	for (var r in e) __defProp(n, r, {
		get: e[r],
		enumerable: !0
	});
	return n;
}, __copyProps = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = __getOwnPropNames(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !__hasOwnProp.call(e, d) && d !== o && __defProp(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = __getOwnPropDesc(i, d)) || s.enumerable
	});
	return e;
}, __toESM = (n, r, a) => (a = n == null ? {} : __create(__getProtoOf(n)), __copyProps(r || !n || !n.__esModule ? __defProp(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), _freeGlobal_default = typeof global == "object" && global && global.Object === Object && global, freeSelf$2 = typeof self == "object" && self && self.Object === Object && self, _root_default = _freeGlobal_default || freeSelf$2 || Function("return this")(), _Symbol_default = _root_default.Symbol, objectProto$6 = Object.prototype, hasOwnProperty$14 = objectProto$6.hasOwnProperty, nativeObjectToString$2 = objectProto$6.toString, symToStringTag$2 = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function getRawTag$1(e) {
	var t = hasOwnProperty$14.call(e, symToStringTag$2), n = e[symToStringTag$2];
	try {
		e[symToStringTag$2] = void 0;
		var r = !0;
	} catch {}
	var i = nativeObjectToString$2.call(e);
	return r && (t ? e[symToStringTag$2] = n : delete e[symToStringTag$2]), i;
}
var _getRawTag_default = getRawTag$1, nativeObjectToString$1 = Object.prototype.toString;
function objectToString$2(e) {
	return nativeObjectToString$1.call(e);
}
var _objectToString_default = objectToString$2, nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]", symToStringTag$1 = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function baseGetTag$2(e) {
	return e == null ? e === void 0 ? undefinedTag$1 : nullTag$1 : symToStringTag$1 && symToStringTag$1 in Object(e) ? _getRawTag_default(e) : _objectToString_default(e);
}
var _baseGetTag_default = baseGetTag$2;
function isObjectLike$3(e) {
	return typeof e == "object" && !!e;
}
var isObjectLike_default = isObjectLike$3, isArray_default = Array.isArray;
function isObject$3(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
var isObject_default = isObject$3;
function identity(e) {
	return e;
}
var identity_default = identity, asyncTag$1 = "[object AsyncFunction]", funcTag$4 = "[object Function]", genTag$3 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$2(e) {
	if (!isObject_default(e)) return !1;
	var t = _baseGetTag_default(e);
	return t == funcTag$4 || t == genTag$3 || t == asyncTag$1 || t == proxyTag$1;
}
var isFunction_default = isFunction$2, _coreJsData_default = _root_default["__core-js_shared__"], maskSrcKey$2 = function() {
	var e = /[^.]+$/.exec(_coreJsData_default && _coreJsData_default.keys && _coreJsData_default.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function isMasked$2(e) {
	return !!maskSrcKey$2 && maskSrcKey$2 in e;
}
var _isMasked_default = isMasked$2, funcToString$4 = Function.prototype.toString;
function toSource$2(e) {
	if (e != null) {
		try {
			return funcToString$4.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
var _toSource_default = toSource$2, reRegExpChar$2 = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor$2 = /^\[object .+?Constructor\]$/, funcProto$3 = Function.prototype, objectProto$5 = Object.prototype, funcToString$3 = funcProto$3.toString, hasOwnProperty$13 = objectProto$5.hasOwnProperty, reIsNative$2 = RegExp("^" + funcToString$3.call(hasOwnProperty$13).replace(reRegExpChar$2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$2(e) {
	return !isObject_default(e) || _isMasked_default(e) ? !1 : (isFunction_default(e) ? reIsNative$2 : reIsHostCtor$2).test(_toSource_default(e));
}
var _baseIsNative_default = baseIsNative$2;
function getValue$2(e, t) {
	return e?.[t];
}
var _getValue_default = getValue$2;
function getNative$2(e, t) {
	var n = _getValue_default(e, t);
	return _baseIsNative_default(n) ? n : void 0;
}
var _getNative_default = getNative$2, _WeakMap_default = _getNative_default(_root_default, "WeakMap"), objectCreate$1 = Object.create, _baseCreate_default = function() {
	function e() {}
	return function(t) {
		if (!isObject_default(t)) return {};
		if (objectCreate$1) return objectCreate$1(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
function apply(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
var _apply_default = apply;
function copyArray$1(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
var _copyArray_default = copyArray$1, HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;
function shortOut(e) {
	var t = 0, n = 0;
	return function() {
		var r = nativeNow(), i = HOT_SPAN - (r - n);
		if (n = r, i > 0) {
			if (++t >= HOT_COUNT) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
var _shortOut_default = shortOut;
function constant(e) {
	return function() {
		return e;
	};
}
var constant_default = constant, _defineProperty_default = function() {
	try {
		var e = _getNative_default(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), _setToString_default = _shortOut_default(_defineProperty_default ? function(e, t) {
	return _defineProperty_default(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: constant_default(t),
		writable: !0
	});
} : identity_default);
function arrayEach$1(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
var _arrayEach_default = arrayEach$1, MAX_SAFE_INTEGER$3 = 9007199254740991, reIsUint$2 = /^(?:0|[1-9]\d*)$/;
function isIndex$2(e, t) {
	var n = typeof e;
	return t ??= MAX_SAFE_INTEGER$3, !!t && (n == "number" || n != "symbol" && reIsUint$2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var _isIndex_default = isIndex$2;
function baseAssignValue(e, t, n) {
	t == "__proto__" && _defineProperty_default ? _defineProperty_default(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
var _baseAssignValue_default = baseAssignValue;
function eq$2(e, t) {
	return e === t || e !== e && t !== t;
}
var eq_default = eq$2, hasOwnProperty$12 = Object.prototype.hasOwnProperty;
function assignValue$1(e, t, n) {
	var r = e[t];
	(!(hasOwnProperty$12.call(e, t) && eq_default(r, n)) || n === void 0 && !(t in e)) && _baseAssignValue_default(e, t, n);
}
var _assignValue_default = assignValue$1;
function copyObject$1(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? _baseAssignValue_default(n, s, c) : _assignValue_default(n, s, c);
	}
	return n;
}
var _copyObject_default = copyObject$1, nativeMax = Math.max;
function overRest(e, t, n) {
	return t = nativeMax(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = nativeMax(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), _apply_default(e, this, s);
	};
}
var _overRest_default = overRest;
function baseRest(e, t) {
	return _setToString_default(_overRest_default(e, t, identity_default), e + "");
}
var _baseRest_default = baseRest, MAX_SAFE_INTEGER$2 = 9007199254740991;
function isLength$2(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER$2;
}
var isLength_default = isLength$2;
function isArrayLike$2(e) {
	return e != null && isLength_default(e.length) && !isFunction_default(e);
}
var isArrayLike_default = isArrayLike$2;
function isIterateeCall(e, t, n) {
	if (!isObject_default(n)) return !1;
	var r = typeof t;
	return (r == "number" ? isArrayLike_default(n) && _isIndex_default(t, n.length) : r == "string" && t in n) ? eq_default(n[t], e) : !1;
}
var _isIterateeCall_default = isIterateeCall;
function createAssigner(e) {
	return _baseRest_default(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && _isIterateeCall_default(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
var _createAssigner_default = createAssigner, objectProto$4 = Object.prototype;
function isPrototype$2(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || objectProto$4);
}
var _isPrototype_default = isPrototype$2;
function baseTimes$2(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
var _baseTimes_default = baseTimes$2, argsTag$5 = "[object Arguments]";
function baseIsArguments$1(e) {
	return isObjectLike_default(e) && _baseGetTag_default(e) == argsTag$5;
}
var _baseIsArguments_default = baseIsArguments$1, objectProto$3 = Object.prototype, hasOwnProperty$11 = objectProto$3.hasOwnProperty, propertyIsEnumerable$3 = objectProto$3.propertyIsEnumerable, isArguments_default = _baseIsArguments_default(function() {
	return arguments;
}()) ? _baseIsArguments_default : function(e) {
	return isObjectLike_default(e) && hasOwnProperty$11.call(e, "callee") && !propertyIsEnumerable$3.call(e, "callee");
};
function stubFalse$2() {
	return !1;
}
var stubFalse_default = stubFalse$2, freeExports$4 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$4 = freeExports$4 && typeof module == "object" && module && !module.nodeType && module, Buffer$4 = freeModule$4 && freeModule$4.exports === freeExports$4 ? _root_default.Buffer : void 0, isBuffer_default = (Buffer$4 ? Buffer$4.isBuffer : void 0) || stubFalse_default, argsTag$4 = "[object Arguments]", arrayTag$4 = "[object Array]", boolTag$5 = "[object Boolean]", dateTag$5 = "[object Date]", errorTag$4 = "[object Error]", funcTag$3 = "[object Function]", mapTag$7 = "[object Map]", numberTag$5 = "[object Number]", objectTag$6 = "[object Object]", regexpTag$5 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$5 = "[object String]", weakMapTag$4 = "[object WeakMap]", arrayBufferTag$5 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]", float32Tag$4 = "[object Float32Array]", float64Tag$4 = "[object Float64Array]", int8Tag$4 = "[object Int8Array]", int16Tag$4 = "[object Int16Array]", int32Tag$4 = "[object Int32Array]", uint8Tag$4 = "[object Uint8Array]", uint8ClampedTag$4 = "[object Uint8ClampedArray]", uint16Tag$4 = "[object Uint16Array]", uint32Tag$4 = "[object Uint32Array]", typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$4] = typedArrayTags$1[float64Tag$4] = typedArrayTags$1[int8Tag$4] = typedArrayTags$1[int16Tag$4] = typedArrayTags$1[int32Tag$4] = typedArrayTags$1[uint8Tag$4] = typedArrayTags$1[uint8ClampedTag$4] = typedArrayTags$1[uint16Tag$4] = typedArrayTags$1[uint32Tag$4] = !0, typedArrayTags$1[argsTag$4] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$5] = typedArrayTags$1[boolTag$5] = typedArrayTags$1[dataViewTag$6] = typedArrayTags$1[dateTag$5] = typedArrayTags$1[errorTag$4] = typedArrayTags$1[funcTag$3] = typedArrayTags$1[mapTag$7] = typedArrayTags$1[numberTag$5] = typedArrayTags$1[objectTag$6] = typedArrayTags$1[regexpTag$5] = typedArrayTags$1[setTag$7] = typedArrayTags$1[stringTag$5] = typedArrayTags$1[weakMapTag$4] = !1;
function baseIsTypedArray$1(e) {
	return isObjectLike_default(e) && isLength_default(e.length) && !!typedArrayTags$1[_baseGetTag_default(e)];
}
var _baseIsTypedArray_default = baseIsTypedArray$1;
function baseUnary$1(e) {
	return function(t) {
		return e(t);
	};
}
var _baseUnary_default = baseUnary$1, freeExports$3 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$3 = freeExports$3 && typeof module == "object" && module && !module.nodeType && module, freeProcess$1 = freeModule$3 && freeModule$3.exports === freeExports$3 && _freeGlobal_default.process, _nodeUtil_default = function() {
	try {
		return freeModule$3 && freeModule$3.require && freeModule$3.require("util").types || freeProcess$1 && freeProcess$1.binding && freeProcess$1.binding("util");
	} catch {}
}(), nodeIsTypedArray$1 = _nodeUtil_default && _nodeUtil_default.isTypedArray, isTypedArray_default = nodeIsTypedArray$1 ? _baseUnary_default(nodeIsTypedArray$1) : _baseIsTypedArray_default, hasOwnProperty$10 = Object.prototype.hasOwnProperty;
function arrayLikeKeys$2(e, t) {
	var n = isArray_default(e), r = !n && isArguments_default(e), i = !n && !r && isBuffer_default(e), a = !n && !r && !i && isTypedArray_default(e), o = n || r || i || a, s = o ? _baseTimes_default(e.length, String) : [], c = s.length;
	for (var l in e) (t || hasOwnProperty$10.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || _isIndex_default(l, c))) && s.push(l);
	return s;
}
var _arrayLikeKeys_default = arrayLikeKeys$2;
function overArg$2(e, t) {
	return function(n) {
		return e(t(n));
	};
}
var _overArg_default = overArg$2, _nativeKeys_default = _overArg_default(Object.keys, Object), hasOwnProperty$9 = Object.prototype.hasOwnProperty;
function baseKeys$2(e) {
	if (!_isPrototype_default(e)) return _nativeKeys_default(e);
	var t = [];
	for (var n in Object(e)) hasOwnProperty$9.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
var _baseKeys_default = baseKeys$2;
function keys$2(e) {
	return isArrayLike_default(e) ? _arrayLikeKeys_default(e) : _baseKeys_default(e);
}
var keys_default = keys$2;
function nativeKeysIn(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
var _nativeKeysIn_default = nativeKeysIn, hasOwnProperty$8 = Object.prototype.hasOwnProperty;
function baseKeysIn(e) {
	if (!isObject_default(e)) return _nativeKeysIn_default(e);
	var t = _isPrototype_default(e), n = [];
	for (var r in e) r == "constructor" && (t || !hasOwnProperty$8.call(e, r)) || n.push(r);
	return n;
}
var _baseKeysIn_default = baseKeysIn;
function keysIn(e) {
	return isArrayLike_default(e) ? _arrayLikeKeys_default(e, !0) : _baseKeysIn_default(e);
}
var keysIn_default = keysIn, _nativeCreate_default = _getNative_default(Object, "create");
function hashClear$2() {
	this.__data__ = _nativeCreate_default ? _nativeCreate_default(null) : {}, this.size = 0;
}
var _hashClear_default = hashClear$2;
function hashDelete$2(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
var _hashDelete_default = hashDelete$2, HASH_UNDEFINED$4 = "__lodash_hash_undefined__", hasOwnProperty$7 = Object.prototype.hasOwnProperty;
function hashGet$2(e) {
	var t = this.__data__;
	if (_nativeCreate_default) {
		var n = t[e];
		return n === HASH_UNDEFINED$4 ? void 0 : n;
	}
	return hasOwnProperty$7.call(t, e) ? t[e] : void 0;
}
var _hashGet_default = hashGet$2, hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function hashHas$2(e) {
	var t = this.__data__;
	return _nativeCreate_default ? t[e] !== void 0 : hasOwnProperty$6.call(t, e);
}
var _hashHas_default = hashHas$2, HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
function hashSet$2(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = _nativeCreate_default && t === void 0 ? HASH_UNDEFINED$3 : t, this;
}
var _hashSet_default = hashSet$2;
function Hash$2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Hash$2.prototype.clear = _hashClear_default, Hash$2.prototype.delete = _hashDelete_default, Hash$2.prototype.get = _hashGet_default, Hash$2.prototype.has = _hashHas_default, Hash$2.prototype.set = _hashSet_default;
var _Hash_default = Hash$2;
function listCacheClear$2() {
	this.__data__ = [], this.size = 0;
}
var _listCacheClear_default = listCacheClear$2;
function assocIndexOf$2(e, t) {
	for (var n = e.length; n--;) if (eq_default(e[n][0], t)) return n;
	return -1;
}
var _assocIndexOf_default = assocIndexOf$2, splice$2 = Array.prototype.splice;
function listCacheDelete$2(e) {
	var t = this.__data__, n = _assocIndexOf_default(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : splice$2.call(t, n, 1), --this.size, !0);
}
var _listCacheDelete_default = listCacheDelete$2;
function listCacheGet$2(e) {
	var t = this.__data__, n = _assocIndexOf_default(t, e);
	return n < 0 ? void 0 : t[n][1];
}
var _listCacheGet_default = listCacheGet$2;
function listCacheHas$2(e) {
	return _assocIndexOf_default(this.__data__, e) > -1;
}
var _listCacheHas_default = listCacheHas$2;
function listCacheSet$2(e, t) {
	var n = this.__data__, r = _assocIndexOf_default(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var _listCacheSet_default = listCacheSet$2;
function ListCache$2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
ListCache$2.prototype.clear = _listCacheClear_default, ListCache$2.prototype.delete = _listCacheDelete_default, ListCache$2.prototype.get = _listCacheGet_default, ListCache$2.prototype.has = _listCacheHas_default, ListCache$2.prototype.set = _listCacheSet_default;
var _ListCache_default = ListCache$2, _Map_default = _getNative_default(_root_default, "Map");
function mapCacheClear$2() {
	this.size = 0, this.__data__ = {
		hash: new _Hash_default(),
		map: new (_Map_default || _ListCache_default)(),
		string: new _Hash_default()
	};
}
var _mapCacheClear_default = mapCacheClear$2;
function isKeyable$2(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var _isKeyable_default = isKeyable$2;
function getMapData$2(e, t) {
	var n = e.__data__;
	return _isKeyable_default(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var _getMapData_default = getMapData$2;
function mapCacheDelete$2(e) {
	var t = _getMapData_default(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
var _mapCacheDelete_default = mapCacheDelete$2;
function mapCacheGet$2(e) {
	return _getMapData_default(this, e).get(e);
}
var _mapCacheGet_default = mapCacheGet$2;
function mapCacheHas$2(e) {
	return _getMapData_default(this, e).has(e);
}
var _mapCacheHas_default = mapCacheHas$2;
function mapCacheSet$2(e, t) {
	var n = _getMapData_default(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var _mapCacheSet_default = mapCacheSet$2;
function MapCache$2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
MapCache$2.prototype.clear = _mapCacheClear_default, MapCache$2.prototype.delete = _mapCacheDelete_default, MapCache$2.prototype.get = _mapCacheGet_default, MapCache$2.prototype.has = _mapCacheHas_default, MapCache$2.prototype.set = _mapCacheSet_default;
var _MapCache_default = MapCache$2;
function arrayPush$2(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
var _arrayPush_default = arrayPush$2, _getPrototype_default = _overArg_default(Object.getPrototypeOf, Object), objectTag$5 = "[object Object]", funcProto$2 = Function.prototype, objectProto$2 = Object.prototype, funcToString$2 = funcProto$2.toString, hasOwnProperty$5 = objectProto$2.hasOwnProperty, objectCtorString = funcToString$2.call(Object);
function isPlainObject(e) {
	if (!isObjectLike_default(e) || _baseGetTag_default(e) != objectTag$5) return !1;
	var t = _getPrototype_default(e);
	if (t === null) return !0;
	var n = hasOwnProperty$5.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && funcToString$2.call(n) == objectCtorString;
}
var isPlainObject_default = isPlainObject;
function stackClear$2() {
	this.__data__ = new _ListCache_default(), this.size = 0;
}
var _stackClear_default = stackClear$2;
function stackDelete$2(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
var _stackDelete_default = stackDelete$2;
function stackGet$2(e) {
	return this.__data__.get(e);
}
var _stackGet_default = stackGet$2;
function stackHas$2(e) {
	return this.__data__.has(e);
}
var _stackHas_default = stackHas$2, LARGE_ARRAY_SIZE$2 = 200;
function stackSet$2(e, t) {
	var n = this.__data__;
	if (n instanceof _ListCache_default) {
		var r = n.__data__;
		if (!_Map_default || r.length < LARGE_ARRAY_SIZE$2 - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new _MapCache_default(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
var _stackSet_default = stackSet$2;
function Stack$2(e) {
	this.size = (this.__data__ = new _ListCache_default(e)).size;
}
Stack$2.prototype.clear = _stackClear_default, Stack$2.prototype.delete = _stackDelete_default, Stack$2.prototype.get = _stackGet_default, Stack$2.prototype.has = _stackHas_default, Stack$2.prototype.set = _stackSet_default;
var _Stack_default = Stack$2;
function baseAssign$1(e, t) {
	return e && _copyObject_default(t, keys_default(t), e);
}
var _baseAssign_default = baseAssign$1;
function baseAssignIn(e, t) {
	return e && _copyObject_default(t, keysIn_default(t), e);
}
var _baseAssignIn_default = baseAssignIn, freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module, Buffer$3 = freeModule$2 && freeModule$2.exports === freeExports$2 ? _root_default.Buffer : void 0, allocUnsafe = Buffer$3 ? Buffer$3.allocUnsafe : void 0;
function cloneBuffer$1(e, t) {
	if (t) return e.slice();
	var n = e.length, r = allocUnsafe ? allocUnsafe(n) : new e.constructor(n);
	return e.copy(r), r;
}
var _cloneBuffer_default = cloneBuffer$1;
function arrayFilter$1(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
var _arrayFilter_default = arrayFilter$1;
function stubArray$2() {
	return [];
}
var stubArray_default = stubArray$2, propertyIsEnumerable$2 = Object.prototype.propertyIsEnumerable, nativeGetSymbols$2 = Object.getOwnPropertySymbols, _getSymbols_default = nativeGetSymbols$2 ? function(e) {
	return e == null ? [] : (e = Object(e), _arrayFilter_default(nativeGetSymbols$2(e), function(t) {
		return propertyIsEnumerable$2.call(e, t);
	}));
} : stubArray_default;
function copySymbols$1(e, t) {
	return _copyObject_default(e, _getSymbols_default(e), t);
}
var _copySymbols_default = copySymbols$1, _getSymbolsIn_default = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) _arrayPush_default(t, _getSymbols_default(e)), e = _getPrototype_default(e);
	return t;
} : stubArray_default;
function copySymbolsIn(e, t) {
	return _copyObject_default(e, _getSymbolsIn_default(e), t);
}
var _copySymbolsIn_default = copySymbolsIn;
function baseGetAllKeys$2(e, t, n) {
	var r = t(e);
	return isArray_default(e) ? r : _arrayPush_default(r, n(e));
}
var _baseGetAllKeys_default = baseGetAllKeys$2;
function getAllKeys$2(e) {
	return _baseGetAllKeys_default(e, keys_default, _getSymbols_default);
}
var _getAllKeys_default = getAllKeys$2;
function getAllKeysIn(e) {
	return _baseGetAllKeys_default(e, keysIn_default, _getSymbolsIn_default);
}
var _getAllKeysIn_default = getAllKeysIn, _DataView_default = _getNative_default(_root_default, "DataView"), _Promise_default = _getNative_default(_root_default, "Promise"), _Set_default = _getNative_default(_root_default, "Set"), mapTag$6 = "[object Map]", objectTag$4 = "[object Object]", promiseTag$2 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]", dataViewTag$5 = "[object DataView]", dataViewCtorString$2 = _toSource_default(_DataView_default), mapCtorString$2 = _toSource_default(_Map_default), promiseCtorString$2 = _toSource_default(_Promise_default), setCtorString$2 = _toSource_default(_Set_default), weakMapCtorString$2 = _toSource_default(_WeakMap_default), getTag$3 = _baseGetTag_default;
(_DataView_default && getTag$3(new _DataView_default(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$5 || _Map_default && getTag$3(new _Map_default()) != mapTag$6 || _Promise_default && getTag$3(_Promise_default.resolve()) != promiseTag$2 || _Set_default && getTag$3(new _Set_default()) != setTag$6 || _WeakMap_default && getTag$3(new _WeakMap_default()) != weakMapTag$3) && (getTag$3 = function(e) {
	var t = _baseGetTag_default(e), n = t == objectTag$4 ? e.constructor : void 0, r = n ? _toSource_default(n) : "";
	if (r) switch (r) {
		case dataViewCtorString$2: return dataViewTag$5;
		case mapCtorString$2: return mapTag$6;
		case promiseCtorString$2: return promiseTag$2;
		case setCtorString$2: return setTag$6;
		case weakMapCtorString$2: return weakMapTag$3;
	}
	return t;
});
var _getTag_default = getTag$3, hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function initCloneArray$1(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && hasOwnProperty$4.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var _initCloneArray_default = initCloneArray$1, _Uint8Array_default = _root_default.Uint8Array;
function cloneArrayBuffer$1(e) {
	var t = new e.constructor(e.byteLength);
	return new _Uint8Array_default(t).set(new _Uint8Array_default(e)), t;
}
var _cloneArrayBuffer_default = cloneArrayBuffer$1;
function cloneDataView$1(e, t) {
	var n = t ? _cloneArrayBuffer_default(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
var _cloneDataView_default = cloneDataView$1, reFlags$1 = /\w*$/;
function cloneRegExp$1(e) {
	var t = new e.constructor(e.source, reFlags$1.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
var _cloneRegExp_default = cloneRegExp$1, symbolProto$3 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf$3 = symbolProto$3 ? symbolProto$3.valueOf : void 0;
function cloneSymbol$1(e) {
	return symbolValueOf$3 ? Object(symbolValueOf$3.call(e)) : {};
}
var _cloneSymbol_default = cloneSymbol$1;
function cloneTypedArray$1(e, t) {
	var n = t ? _cloneArrayBuffer_default(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
var _cloneTypedArray_default = cloneTypedArray$1, boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", mapTag$5 = "[object Map]", numberTag$4 = "[object Number]", regexpTag$4 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$4 = "[object String]", symbolTag$4 = "[object Symbol]", arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
function initCloneByTag$1(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case arrayBufferTag$4: return _cloneArrayBuffer_default(e);
		case boolTag$4:
		case dateTag$4: return new r(+e);
		case dataViewTag$4: return _cloneDataView_default(e, n);
		case float32Tag$3:
		case float64Tag$3:
		case int8Tag$3:
		case int16Tag$3:
		case int32Tag$3:
		case uint8Tag$3:
		case uint8ClampedTag$3:
		case uint16Tag$3:
		case uint32Tag$3: return _cloneTypedArray_default(e, n);
		case mapTag$5: return new r();
		case numberTag$4:
		case stringTag$4: return new r(e);
		case regexpTag$4: return _cloneRegExp_default(e);
		case setTag$5: return new r();
		case symbolTag$4: return _cloneSymbol_default(e);
	}
}
var _initCloneByTag_default = initCloneByTag$1;
function initCloneObject$1(e) {
	return typeof e.constructor == "function" && !_isPrototype_default(e) ? _baseCreate_default(_getPrototype_default(e)) : {};
}
var _initCloneObject_default = initCloneObject$1, mapTag$4 = "[object Map]";
function baseIsMap(e) {
	return isObjectLike_default(e) && _getTag_default(e) == mapTag$4;
}
var _baseIsMap_default = baseIsMap, nodeIsMap = _nodeUtil_default && _nodeUtil_default.isMap, isMap_default = nodeIsMap ? _baseUnary_default(nodeIsMap) : _baseIsMap_default, setTag$4 = "[object Set]";
function baseIsSet(e) {
	return isObjectLike_default(e) && _getTag_default(e) == setTag$4;
}
var _baseIsSet_default = baseIsSet, nodeIsSet = _nodeUtil_default && _nodeUtil_default.isSet, isSet_default = nodeIsSet ? _baseUnary_default(nodeIsSet) : _baseIsSet_default, CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4, argsTag$3 = "[object Arguments]", arrayTag$3 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$3 = "[object Error]", funcTag$2 = "[object Function]", genTag$2 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]", arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]", cloneableTags$1 = {};
cloneableTags$1[argsTag$3] = cloneableTags$1[arrayTag$3] = cloneableTags$1[arrayBufferTag$3] = cloneableTags$1[dataViewTag$3] = cloneableTags$1[boolTag$3] = cloneableTags$1[dateTag$3] = cloneableTags$1[float32Tag$2] = cloneableTags$1[float64Tag$2] = cloneableTags$1[int8Tag$2] = cloneableTags$1[int16Tag$2] = cloneableTags$1[int32Tag$2] = cloneableTags$1[mapTag$3] = cloneableTags$1[numberTag$3] = cloneableTags$1[objectTag$3] = cloneableTags$1[regexpTag$3] = cloneableTags$1[setTag$3] = cloneableTags$1[stringTag$3] = cloneableTags$1[symbolTag$3] = cloneableTags$1[uint8Tag$2] = cloneableTags$1[uint8ClampedTag$2] = cloneableTags$1[uint16Tag$2] = cloneableTags$1[uint32Tag$2] = !0, cloneableTags$1[errorTag$3] = cloneableTags$1[funcTag$2] = cloneableTags$1[weakMapTag$2] = !1;
function baseClone$1(e, t, n, r, i, a) {
	var o, s = t & CLONE_DEEP_FLAG$1, c = t & CLONE_FLAT_FLAG, l = t & CLONE_SYMBOLS_FLAG$1;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!isObject_default(e)) return e;
	var u = isArray_default(e);
	if (u) {
		if (o = _initCloneArray_default(e), !s) return _copyArray_default(e, o);
	} else {
		var d = _getTag_default(e), f = d == funcTag$2 || d == genTag$2;
		if (isBuffer_default(e)) return _cloneBuffer_default(e, s);
		if (d == objectTag$3 || d == argsTag$3 || f && !i) {
			if (o = c || f ? {} : _initCloneObject_default(e), !s) return c ? _copySymbolsIn_default(e, _baseAssignIn_default(o, e)) : _copySymbols_default(e, _baseAssign_default(o, e));
		} else {
			if (!cloneableTags$1[d]) return i ? e : {};
			o = _initCloneByTag_default(e, d, s);
		}
	}
	a ||= new _Stack_default();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), isSet_default(e) ? e.forEach(function(r) {
		o.add(baseClone$1(r, t, n, r, e, a));
	}) : isMap_default(e) && e.forEach(function(r, i) {
		o.set(i, baseClone$1(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? _getAllKeysIn_default : _getAllKeys_default : c ? keysIn_default : keys_default)(e);
	return _arrayEach_default(m || e, function(r, i) {
		m && (i = r, r = e[i]), _assignValue_default(o, i, baseClone$1(r, t, n, i, e, a));
	}), o;
}
var _baseClone_default = baseClone$1, CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep$3(e) {
	return _baseClone_default(e, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_default = cloneDeep$3, HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
function setCacheAdd$1(e) {
	return this.__data__.set(e, HASH_UNDEFINED$2), this;
}
var _setCacheAdd_default = setCacheAdd$1;
function setCacheHas$1(e) {
	return this.__data__.has(e);
}
var _setCacheHas_default = setCacheHas$1;
function SetCache$1(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new _MapCache_default(); ++t < n;) this.add(e[t]);
}
SetCache$1.prototype.add = SetCache$1.prototype.push = _setCacheAdd_default, SetCache$1.prototype.has = _setCacheHas_default;
var _SetCache_default = SetCache$1;
function arraySome$1(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
var _arraySome_default = arraySome$1;
function cacheHas$1(e, t) {
	return e.has(t);
}
var _cacheHas_default = cacheHas$1, COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
function equalArrays$1(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG$4, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & COMPARE_UNORDERED_FLAG$2 ? new _SetCache_default() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!_arraySome_default(t, function(e, t) {
				if (!_cacheHas_default(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
var _equalArrays_default = equalArrays$1;
function mapToArray$2(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
var _mapToArray_default = mapToArray$2;
function setToArray$2(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
var _setToArray_default = setToArray$2, COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2, boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", mapTag$2 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", symbolProto$2 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf$2 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function equalByTag$1(e, t, n, r, i, a, o) {
	switch (n) {
		case dataViewTag$2:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case arrayBufferTag$2: return !(e.byteLength != t.byteLength || !a(new _Uint8Array_default(e), new _Uint8Array_default(t)));
		case boolTag$2:
		case dateTag$2:
		case numberTag$2: return eq_default(+e, +t);
		case errorTag$2: return e.name == t.name && e.message == t.message;
		case regexpTag$2:
		case stringTag$2: return e == t + "";
		case mapTag$2: var s = _mapToArray_default;
		case setTag$2:
			var c = r & COMPARE_PARTIAL_FLAG$3;
			if (s ||= _setToArray_default, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= COMPARE_UNORDERED_FLAG$1, o.set(e, t);
			var u = _equalArrays_default(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case symbolTag$2: if (symbolValueOf$2) return symbolValueOf$2.call(e) == symbolValueOf$2.call(t);
	}
	return !1;
}
var _equalByTag_default = equalByTag$1, COMPARE_PARTIAL_FLAG$2 = 1, hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function equalObjects$1(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG$2, s = _getAllKeys_default(e), c = s.length;
	if (c != _getAllKeys_default(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : hasOwnProperty$3.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
var _equalObjects_default = equalObjects$1, COMPARE_PARTIAL_FLAG$1 = 1, argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", objectTag$2 = "[object Object]", hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function baseIsEqualDeep$1(e, t, n, r, i, a) {
	var o = isArray_default(e), s = isArray_default(t), c = o ? arrayTag$2 : _getTag_default(e), l = s ? arrayTag$2 : _getTag_default(t);
	c = c == argsTag$2 ? objectTag$2 : c, l = l == argsTag$2 ? objectTag$2 : l;
	var u = c == objectTag$2, d = l == objectTag$2, f = c == l;
	if (f && isBuffer_default(e)) {
		if (!isBuffer_default(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new _Stack_default(), o || isTypedArray_default(e) ? _equalArrays_default(e, t, n, r, i, a) : _equalByTag_default(e, t, c, n, r, i, a);
	if (!(n & COMPARE_PARTIAL_FLAG$1)) {
		var p = u && hasOwnProperty$2.call(e, "__wrapped__"), m = d && hasOwnProperty$2.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new _Stack_default(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new _Stack_default(), _equalObjects_default(e, t, n, r, i, a)) : !1;
}
var _baseIsEqualDeep_default = baseIsEqualDeep$1;
function baseIsEqual$1(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !isObjectLike_default(e) && !isObjectLike_default(t) ? e !== e && t !== t : _baseIsEqualDeep_default(e, t, n, r, baseIsEqual$1, i);
}
var _baseIsEqual_default = baseIsEqual$1;
function createBaseFor(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
var _baseFor_default = createBaseFor();
function assignMergeValue(e, t, n) {
	(n !== void 0 && !eq_default(e[t], n) || n === void 0 && !(t in e)) && _baseAssignValue_default(e, t, n);
}
var _assignMergeValue_default = assignMergeValue;
function isArrayLikeObject$1(e) {
	return isObjectLike_default(e) && isArrayLike_default(e);
}
var isArrayLikeObject_default = isArrayLikeObject$1;
function safeGet(e, t) {
	if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
var _safeGet_default = safeGet;
function toPlainObject(e) {
	return _copyObject_default(e, keysIn_default(e));
}
var toPlainObject_default = toPlainObject;
function baseMergeDeep(e, t, n, r, i, a, o) {
	var s = _safeGet_default(e, n), c = _safeGet_default(t, n), l = o.get(c);
	if (l) {
		_assignMergeValue_default(e, n, l);
		return;
	}
	var u = a ? a(s, c, n + "", e, t, o) : void 0, d = u === void 0;
	if (d) {
		var f = isArray_default(c), p = !f && isBuffer_default(c), m = !f && !p && isTypedArray_default(c);
		u = c, f || p || m ? isArray_default(s) ? u = s : isArrayLikeObject_default(s) ? u = _copyArray_default(s) : p ? (d = !1, u = _cloneBuffer_default(c, !0)) : m ? (d = !1, u = _cloneTypedArray_default(c, !0)) : u = [] : isPlainObject_default(c) || isArguments_default(c) ? (u = s, isArguments_default(s) ? u = toPlainObject_default(s) : (!isObject_default(s) || isFunction_default(s)) && (u = _initCloneObject_default(c))) : d = !1;
	}
	d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), _assignMergeValue_default(e, n, u);
}
var _baseMergeDeep_default = baseMergeDeep;
function baseMerge(e, t, n, r, i) {
	e !== t && _baseFor_default(t, function(a, o) {
		if (i ||= new _Stack_default(), isObject_default(a)) _baseMergeDeep_default(e, t, o, n, baseMerge, r, i);
		else {
			var s = r ? r(_safeGet_default(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), _assignMergeValue_default(e, o, s);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge;
function isEqual$4(e, t) {
	return _baseIsEqual_default(e, t);
}
var isEqual_default = isEqual$4, merge_default = _createAssigner_default(function(e, t, n) {
	_baseMerge_default(e, t, n);
}), parchment_exports = /* @__PURE__ */ __export({
	Attributor: () => Attributor,
	AttributorStore: () => AttributorStore$1,
	BlockBlot: () => BlockBlot$1,
	ClassAttributor: () => ClassAttributor$1,
	ContainerBlot: () => ContainerBlot$1,
	EmbedBlot: () => EmbedBlot$1,
	InlineBlot: () => InlineBlot$1,
	LeafBlot: () => LeafBlot$1,
	ParentBlot: () => ParentBlot$1,
	Registry: () => Registry,
	Scope: () => Scope,
	ScrollBlot: () => ScrollBlot$1,
	StyleAttributor: () => StyleAttributor$1,
	TextBlot: () => TextBlot$1
}), Scope = /* @__PURE__ */ ((e) => (e[e.TYPE = 3] = "TYPE", e[e.LEVEL = 12] = "LEVEL", e[e.ATTRIBUTE = 13] = "ATTRIBUTE", e[e.BLOT = 14] = "BLOT", e[e.INLINE = 7] = "INLINE", e[e.BLOCK = 11] = "BLOCK", e[e.BLOCK_BLOT = 10] = "BLOCK_BLOT", e[e.INLINE_BLOT = 6] = "INLINE_BLOT", e[e.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", e[e.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", e[e.ANY = 15] = "ANY", e))(Scope || {}), Attributor = class {
	constructor(e, t, n = {}) {
		this.attrName = e, this.keyName = t;
		let r = Scope.TYPE & Scope.ATTRIBUTE;
		this.scope = n.scope == null ? Scope.ATTRIBUTE : n.scope & Scope.LEVEL | r, n.whitelist != null && (this.whitelist = n.whitelist);
	}
	static keys(e) {
		return Array.from(e.attributes).map((e) => e.name);
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.setAttribute(this.keyName, t), !0) : !1;
	}
	canAdd(e, t) {
		return this.whitelist == null ? !0 : typeof t == "string" ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1;
	}
	remove(e) {
		e.removeAttribute(this.keyName);
	}
	value(e) {
		let t = e.getAttribute(this.keyName);
		return this.canAdd(e, t) && t ? t : "";
	}
}, ParchmentError = class extends Error {
	constructor(e) {
		e = "[Parchment] " + e, super(e), this.message = e, this.name = this.constructor.name;
	}
}, _Registry = class e {
	constructor() {
		this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
	}
	static find(e, t = !1) {
		if (e == null) return null;
		if (this.blots.has(e)) return this.blots.get(e) || null;
		if (t) {
			let n = null;
			try {
				n = e.parentNode;
			} catch {
				return null;
			}
			return this.find(n, t);
		}
		return null;
	}
	create(t, n, r) {
		let i = this.query(n);
		if (i == null) throw new ParchmentError(`Unable to create ${n} blot`);
		let a = i, o = new a(t, n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : a.create(r), r);
		return e.blots.set(o.domNode, o), o;
	}
	find(t, n = !1) {
		return e.find(t, n);
	}
	query(e, t = Scope.ANY) {
		let n;
		return typeof e == "string" ? n = this.types[e] || this.attributes[e] : e instanceof Text || e.nodeType === Node.TEXT_NODE ? n = this.types.text : typeof e == "number" ? e & Scope.LEVEL & Scope.BLOCK ? n = this.types.block : e & Scope.LEVEL & Scope.INLINE && (n = this.types.inline) : e instanceof Element && ((e.getAttribute("class") || "").split(/\s+/).some((e) => (n = this.classes[e], !!n)), n ||= this.tags[e.tagName]), n == null ? null : "scope" in n && t & Scope.LEVEL & n.scope && t & Scope.TYPE & n.scope ? n : null;
	}
	register(...e) {
		return e.map((e) => {
			let t = "blotName" in e, n = "attrName" in e;
			if (!t && !n) throw new ParchmentError("Invalid definition");
			if (t && e.blotName === "abstract") throw new ParchmentError("Cannot register abstract class");
			let r = t ? e.blotName : n ? e.attrName : void 0;
			return this.types[r] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : t && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((e) => e.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((t) => {
				(this.tags[t] == null || e.className == null) && (this.tags[t] = e);
			}))), e;
		});
	}
};
_Registry.blots = /* @__PURE__ */ new WeakMap();
var Registry = _Registry;
function match(e, t) {
	return (e.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
var ClassAttributor$1 = class extends Attributor {
	static keys(e) {
		return (e.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
	}
	add(e, t) {
		return this.canAdd(e, t) ? (this.remove(e), e.classList.add(`${this.keyName}-${t}`), !0) : !1;
	}
	remove(e) {
		match(e, this.keyName).forEach((t) => {
			e.classList.remove(t);
		}), e.classList.length === 0 && e.removeAttribute("class");
	}
	value(e) {
		let t = (match(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
		return this.canAdd(e, t) ? t : "";
	}
};
function camelize(e) {
	let t = e.split("-"), n = t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
	return t[0] + n;
}
var StyleAttributor$1 = class extends Attributor {
	static keys(e) {
		return (e.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.style[camelize(this.keyName)] = t, !0) : !1;
	}
	remove(e) {
		e.style[camelize(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style");
	}
	value(e) {
		let t = e.style[camelize(this.keyName)];
		return this.canAdd(e, t) ? t : "";
	}
}, AttributorStore$1 = class {
	constructor(e) {
		this.attributes = {}, this.domNode = e, this.build();
	}
	attribute(e, t) {
		t ? e.add(this.domNode, t) && (e.value(this.domNode) == null ? delete this.attributes[e.attrName] : this.attributes[e.attrName] = e) : (e.remove(this.domNode), delete this.attributes[e.attrName]);
	}
	build() {
		this.attributes = {};
		let e = Registry.find(this.domNode);
		if (e == null) return;
		let t = Attributor.keys(this.domNode), n = ClassAttributor$1.keys(this.domNode), r = StyleAttributor$1.keys(this.domNode);
		t.concat(n).concat(r).forEach((t) => {
			let n = e.scroll.query(t, Scope.ATTRIBUTE);
			n instanceof Attributor && (this.attributes[n.attrName] = n);
		});
	}
	copy(e) {
		Object.keys(this.attributes).forEach((t) => {
			let n = this.attributes[t].value(this.domNode);
			e.format(t, n);
		});
	}
	move(e) {
		this.copy(e), Object.keys(this.attributes).forEach((e) => {
			this.attributes[e].remove(this.domNode);
		}), this.attributes = {};
	}
	values() {
		return Object.keys(this.attributes).reduce((e, t) => (e[t] = this.attributes[t].value(this.domNode), e), {});
	}
}, _ShadowBlot = class {
	constructor(e, t) {
		this.scroll = e, this.domNode = t, Registry.blots.set(t, this), this.prev = null, this.next = null;
	}
	static create(e) {
		if (this.tagName == null) throw new ParchmentError("Blot definition missing tagName");
		let t, n;
		return Array.isArray(this.tagName) ? (typeof e == "string" ? (n = e.toUpperCase(), parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : typeof e == "number" && (n = e), t = typeof n == "number" ? document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? document.createElement(n) : document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t;
	}
	get statics() {
		return this.constructor;
	}
	attach() {}
	clone() {
		let e = this.domNode.cloneNode(!1);
		return this.scroll.create(e);
	}
	detach() {
		this.parent != null && this.parent.removeChild(this), Registry.blots.delete(this.domNode);
	}
	deleteAt(e, t) {
		this.isolate(e, t).remove();
	}
	formatAt(e, t, n, r) {
		let i = this.isolate(e, t);
		if (this.scroll.query(n, Scope.BLOT) != null && r) i.wrap(n, r);
		else if (this.scroll.query(n, Scope.ATTRIBUTE) != null) {
			let e = this.scroll.create(this.statics.scope);
			i.wrap(e), e.format(n, r);
		}
	}
	insertAt(e, t, n) {
		let r = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n), i = this.split(e);
		this.parent.insertBefore(r, i || void 0);
	}
	isolate(e, t) {
		let n = this.split(e);
		if (n == null) throw Error("Attempt to isolate at end");
		return n.split(t), n;
	}
	length() {
		return 1;
	}
	offset(e = this.parent) {
		return this.parent == null || this === e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
	}
	optimize(e) {
		this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
	}
	remove() {
		this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
	}
	replaceWith(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		return this.parent != null && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n;
	}
	split(e, t) {
		return e === 0 ? this : this.next;
	}
	update(e, t) {}
	wrap(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		if (this.parent != null && this.parent.insertBefore(n, this.next || void 0), typeof n.appendChild != "function") throw new ParchmentError(`Cannot wrap ${e}`);
		return n.appendChild(this), n;
	}
};
_ShadowBlot.blotName = "abstract";
var ShadowBlot = _ShadowBlot, _LeafBlot = class extends ShadowBlot {
	static value(e) {
		return !0;
	}
	index(e, t) {
		return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
	}
	position(e, t) {
		let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
		return e > 0 && (n += 1), [this.parent.domNode, n];
	}
	value() {
		return { [this.statics.blotName]: this.statics.value(this.domNode) || !0 };
	}
};
_LeafBlot.scope = Scope.INLINE_BLOT;
var LeafBlot$1 = _LeafBlot, LinkedList = class {
	constructor() {
		this.head = null, this.tail = null, this.length = 0;
	}
	append(...e) {
		if (this.insertBefore(e[0], null), e.length > 1) {
			let t = e.slice(1);
			this.append(...t);
		}
	}
	at(e) {
		let t = this.iterator(), n = t();
		for (; n && e > 0;) --e, n = t();
		return n;
	}
	contains(e) {
		let t = this.iterator(), n = t();
		for (; n;) {
			if (n === e) return !0;
			n = t();
		}
		return !1;
	}
	indexOf(e) {
		let t = this.iterator(), n = t(), r = 0;
		for (; n;) {
			if (n === e) return r;
			r += 1, n = t();
		}
		return -1;
	}
	insertBefore(e, t) {
		e != null && (this.remove(e), e.next = t, t == null ? this.tail == null ? (e.prev = null, this.head = this.tail = e) : (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = t.prev, t.prev != null && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)), this.length += 1);
	}
	offset(e) {
		let t = 0, n = this.head;
		for (; n != null;) {
			if (n === e) return t;
			t += n.length(), n = n.next;
		}
		return -1;
	}
	remove(e) {
		this.contains(e) && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), --this.length);
	}
	iterator(e = this.head) {
		return () => {
			let t = e;
			return e != null && (e = e.next), t;
		};
	}
	find(e, t = !1) {
		let n = this.iterator(), r = n();
		for (; r;) {
			let i = r.length();
			if (e < i || t && e === i && (r.next == null || r.next.length() !== 0)) return [r, e];
			e -= i, r = n();
		}
		return [null, 0];
	}
	forEach(e) {
		let t = this.iterator(), n = t();
		for (; n;) e(n), n = t();
	}
	forEachAt(e, t, n) {
		if (t <= 0) return;
		let [r, i] = this.find(e), a = e - i, o = this.iterator(r), s = o();
		for (; s && a < e + t;) {
			let r = s.length();
			e > a ? n(s, e - a, Math.min(t, a + r - e)) : n(s, 0, Math.min(r, e + t - a)), a += r, s = o();
		}
	}
	map(e) {
		return this.reduce((t, n) => (t.push(e(n)), t), []);
	}
	reduce(e, t) {
		let n = this.iterator(), r = n();
		for (; r;) t = e(t, r), r = n();
		return t;
	}
};
function makeAttachedBlot(e, t) {
	let n = t.find(e);
	if (n) return n;
	try {
		return t.create(e);
	} catch {
		let n = t.create(Scope.INLINE);
		return Array.from(e.childNodes).forEach((e) => {
			n.domNode.appendChild(e);
		}), e.parentNode && e.parentNode.replaceChild(n.domNode, e), n.attach(), n;
	}
}
var _ParentBlot = class e extends ShadowBlot {
	constructor(e, t) {
		super(e, t), this.uiNode = null, this.build();
	}
	appendChild(e) {
		this.insertBefore(e);
	}
	attach() {
		super.attach(), this.children.forEach((e) => {
			e.attach();
		});
	}
	attachUI(t) {
		this.uiNode != null && this.uiNode.remove(), this.uiNode = t, e.uiClass && this.uiNode.classList.add(e.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
	}
	build() {
		this.children = new LinkedList(), Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).reverse().forEach((e) => {
			try {
				let t = makeAttachedBlot(e, this.scroll);
				this.insertBefore(t, this.children.head || void 0);
			} catch (e) {
				if (e instanceof ParchmentError) return;
				throw e;
			}
		});
	}
	deleteAt(e, t) {
		if (e === 0 && t === this.length()) return this.remove();
		this.children.forEachAt(e, t, (e, t, n) => {
			e.deleteAt(t, n);
		});
	}
	descendant(t, n = 0) {
		let [r, i] = this.children.find(n);
		return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, i] : r instanceof e ? r.descendant(t, i) : [null, -1];
	}
	descendants(t, n = 0, r = Number.MAX_VALUE) {
		let i = [], a = r;
		return this.children.forEachAt(n, r, (n, r, o) => {
			(t.blotName == null && t(n) || t.blotName != null && n instanceof t) && i.push(n), n instanceof e && (i = i.concat(n.descendants(t, r, a))), a -= o;
		}), i;
	}
	detach() {
		this.children.forEach((e) => {
			e.detach();
		}), super.detach();
	}
	enforceAllowedChildren() {
		let t = !1;
		this.children.forEach((n) => {
			t || this.statics.allowedChildren.some((e) => n instanceof e) || (n.statics.scope === Scope.BLOCK_BLOT ? (n.next != null && this.splitAfter(n), n.prev != null && this.splitAfter(n.prev), n.parent.unwrap(), t = !0) : n instanceof e ? n.unwrap() : n.remove());
		});
	}
	formatAt(e, t, n, r) {
		this.children.forEachAt(e, t, (e, t, i) => {
			e.formatAt(t, i, n, r);
		});
	}
	insertAt(e, t, n) {
		let [r, i] = this.children.find(e);
		if (r) r.insertAt(i, t, n);
		else {
			let e = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n);
			this.appendChild(e);
		}
	}
	insertBefore(e, t) {
		e.parent != null && e.parent.children.remove(e);
		let n = null;
		this.children.insertBefore(e, t || null), e.parent = this, t != null && (n = t.domNode), (this.domNode.parentNode !== e.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(e.domNode, n), e.attach();
	}
	length() {
		return this.children.reduce((e, t) => e + t.length(), 0);
	}
	moveChildren(e, t) {
		this.children.forEach((n) => {
			e.insertBefore(n, t);
		});
	}
	optimize(e) {
		if (super.optimize(e), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0) if (this.statics.defaultChild != null) {
			let e = this.scroll.create(this.statics.defaultChild.blotName);
			this.appendChild(e);
		} else this.remove();
	}
	path(t, n = !1) {
		let [r, i] = this.children.find(t, n), a = [[this, t]];
		return r instanceof e ? a.concat(r.path(i, n)) : (r != null && a.push([r, i]), a);
	}
	removeChild(e) {
		this.children.remove(e);
	}
	replaceWith(t, n) {
		let r = typeof t == "string" ? this.scroll.create(t, n) : t;
		return r instanceof e && this.moveChildren(r), super.replaceWith(r);
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.clone();
		return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(e, this.length(), (e, r, i) => {
			let a = e.split(r, t);
			a != null && n.appendChild(a);
		}), n;
	}
	splitAfter(e) {
		let t = this.clone();
		for (; e.next != null;) t.appendChild(e.next);
		return this.parent && this.parent.insertBefore(t, this.next || void 0), t;
	}
	unwrap() {
		this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
	}
	update(e, t) {
		let n = [], r = [];
		e.forEach((e) => {
			e.target === this.domNode && e.type === "childList" && (n.push(...e.addedNodes), r.push(...e.removedNodes));
		}), r.forEach((e) => {
			if (e.parentNode != null && e.tagName !== "IFRAME" && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
			let t = this.scroll.find(e);
			t != null && (t.domNode.parentNode == null || t.domNode.parentNode === this.domNode) && t.detach();
		}), n.filter((e) => e.parentNode === this.domNode && e !== this.uiNode).sort((e, t) => e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((e) => {
			let t = null;
			e.nextSibling != null && (t = this.scroll.find(e.nextSibling));
			let n = makeAttachedBlot(e, this.scroll);
			(n.next !== t || n.next == null) && (n.parent != null && n.parent.removeChild(this), this.insertBefore(n, t || void 0));
		}), this.enforceAllowedChildren();
	}
};
_ParentBlot.uiClass = "";
var ParentBlot$1 = _ParentBlot;
function isEqual$3(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
var _InlineBlot = class e extends ParentBlot$1 {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (!(r != null && t.tagName === r.tagName)) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new AttributorStore$1(this.domNode);
	}
	format(t, n) {
		if (t === this.statics.blotName && !n) this.children.forEach((t) => {
			t instanceof e || (t = t.wrap(e.blotName, !0)), this.attributes.copy(t);
		}), this.unwrap();
		else {
			let e = this.scroll.query(t, Scope.INLINE);
			if (e == null) return;
			e instanceof Attributor ? this.attributes.attribute(e, n) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n);
		}
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.formats()[n] != null || this.scroll.query(n, Scope.ATTRIBUTE) ? this.isolate(e, t).format(n, r) : super.formatAt(e, t, n, r);
	}
	optimize(t) {
		super.optimize(t);
		let n = this.formats();
		if (Object.keys(n).length === 0) return this.unwrap();
		let r = this.next;
		r instanceof e && r.prev === this && isEqual$3(n, r.formats()) && (r.moveChildren(this), r.remove());
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
	wrap(t, n) {
		let r = super.wrap(t, n);
		return r instanceof e && this.attributes.move(r), r;
	}
};
_InlineBlot.allowedChildren = [_InlineBlot, LeafBlot$1], _InlineBlot.blotName = "inline", _InlineBlot.scope = Scope.INLINE_BLOT, _InlineBlot.tagName = "SPAN";
var InlineBlot$1 = _InlineBlot, _BlockBlot = class e extends ParentBlot$1 {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (!(r != null && t.tagName === r.tagName)) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new AttributorStore$1(this.domNode);
	}
	format(t, n) {
		let r = this.scroll.query(t, Scope.BLOCK);
		r != null && (r instanceof Attributor ? this.attributes.attribute(r, n) : t === this.statics.blotName && !n ? this.replaceWith(e.blotName) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n));
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.scroll.query(n, Scope.BLOCK) == null ? super.formatAt(e, t, n, r) : this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n == null || this.scroll.query(t, Scope.INLINE) != null) super.insertAt(e, t, n);
		else {
			let r = this.split(e);
			if (r != null) {
				let e = this.scroll.create(t, n);
				r.parent.insertBefore(e, r);
			} else throw Error("Attempt to insertAt after block boundaries");
		}
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
};
_BlockBlot.blotName = "block", _BlockBlot.scope = Scope.BLOCK_BLOT, _BlockBlot.tagName = "P", _BlockBlot.allowedChildren = [
	InlineBlot$1,
	_BlockBlot,
	LeafBlot$1
];
var BlockBlot$1 = _BlockBlot, _ContainerBlot = class extends ParentBlot$1 {
	checkMerge() {
		return this.next !== null && this.next.statics.blotName === this.statics.blotName;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.enforceAllowedChildren();
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.enforceAllowedChildren();
	}
	insertAt(e, t, n) {
		super.insertAt(e, t, n), this.enforceAllowedChildren();
	}
	optimize(e) {
		super.optimize(e), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
	}
};
_ContainerBlot.blotName = "container", _ContainerBlot.scope = Scope.BLOCK_BLOT;
var ContainerBlot$1 = _ContainerBlot, EmbedBlot$1 = class extends LeafBlot$1 {
	static formats(e, t) {}
	format(e, t) {
		super.formatAt(0, this.length(), e, t);
	}
	formatAt(e, t, n, r) {
		e === 0 && t === this.length() ? this.format(n, r) : super.formatAt(e, t, n, r);
	}
	formats() {
		return this.statics.formats(this.domNode, this.scroll);
	}
}, OBSERVER_CONFIG = {
	attributes: !0,
	characterData: !0,
	characterDataOldValue: !0,
	childList: !0,
	subtree: !0
}, MAX_OPTIMIZE_ITERATIONS = 100, _ScrollBlot = class extends ParentBlot$1 {
	constructor(e, t) {
		super(null, t), this.registry = e, this.scroll = this, this.build(), this.observer = new MutationObserver((e) => {
			this.update(e);
		}), this.observer.observe(this.domNode, OBSERVER_CONFIG), this.attach();
	}
	create(e, t) {
		return this.registry.create(this, e, t);
	}
	find(e, t = !1) {
		let n = this.registry.find(e, t);
		return n ? n.scroll === this ? n : t ? this.find(n.scroll.domNode.parentNode, !0) : null : null;
	}
	query(e, t = Scope.ANY) {
		return this.registry.query(e, t);
	}
	register(...e) {
		return this.registry.register(...e);
	}
	build() {
		this.scroll != null && super.build();
	}
	detach() {
		super.detach(), this.observer.disconnect();
	}
	deleteAt(e, t) {
		this.update(), e === 0 && t === this.length() ? this.children.forEach((e) => {
			e.remove();
		}) : super.deleteAt(e, t);
	}
	formatAt(e, t, n, r) {
		this.update(), super.formatAt(e, t, n, r);
	}
	insertAt(e, t, n) {
		this.update(), super.insertAt(e, t, n);
	}
	optimize(e = [], t = {}) {
		super.optimize(t);
		let n = t.mutationsMap || /* @__PURE__ */ new WeakMap(), r = Array.from(this.observer.takeRecords());
		for (; r.length > 0;) e.push(r.pop());
		let i = (e, t = !0) => {
			e == null || e === this || e.domNode.parentNode != null && (n.has(e.domNode) || n.set(e.domNode, []), t && i(e.parent));
		}, a = (e) => {
			n.has(e.domNode) && (e instanceof ParentBlot$1 && e.children.forEach(a), n.delete(e.domNode), e.optimize(t));
		}, o = e;
		for (let t = 0; o.length > 0; t += 1) {
			if (t >= MAX_OPTIMIZE_ITERATIONS) throw Error("[Parchment] Maximum optimize iterations reached");
			for (o.forEach((e) => {
				let t = this.find(e.target, !0);
				t != null && (t.domNode === e.target && (e.type === "childList" ? (i(this.find(e.previousSibling, !1)), Array.from(e.addedNodes).forEach((e) => {
					let t = this.find(e, !1);
					i(t, !1), t instanceof ParentBlot$1 && t.children.forEach((e) => {
						i(e, !1);
					});
				})) : e.type === "attributes" && i(t.prev)), i(t));
			}), this.children.forEach(a), o = Array.from(this.observer.takeRecords()), r = o.slice(); r.length > 0;) e.push(r.pop());
		}
	}
	update(e, t = {}) {
		e ||= this.observer.takeRecords();
		let n = /* @__PURE__ */ new WeakMap();
		e.map((e) => {
			let t = this.find(e.target, !0);
			return t == null ? null : n.has(t.domNode) ? (n.get(t.domNode).push(e), null) : (n.set(t.domNode, [e]), t);
		}).forEach((e) => {
			e != null && e !== this && n.has(e.domNode) && e.update(n.get(e.domNode) || [], t);
		}), t.mutationsMap = n, n.has(this.domNode) && super.update(n.get(this.domNode), t), this.optimize(e, t);
	}
};
_ScrollBlot.blotName = "scroll", _ScrollBlot.defaultChild = BlockBlot$1, _ScrollBlot.allowedChildren = [BlockBlot$1, ContainerBlot$1], _ScrollBlot.scope = Scope.BLOCK_BLOT, _ScrollBlot.tagName = "DIV";
var ScrollBlot$1 = _ScrollBlot, _TextBlot = class e extends LeafBlot$1 {
	static create(e) {
		return document.createTextNode(e);
	}
	static value(e) {
		return e.data;
	}
	constructor(e, t) {
		super(e, t), this.text = this.statics.value(this.domNode);
	}
	deleteAt(e, t) {
		this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
	}
	index(e, t) {
		return this.domNode === e ? t : -1;
	}
	insertAt(e, t, n) {
		n == null ? (this.text = this.text.slice(0, e) + t + this.text.slice(e), this.domNode.data = this.text) : super.insertAt(e, t, n);
	}
	length() {
		return this.text.length;
	}
	optimize(t) {
		super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
	}
	position(e, t = !1) {
		return [this.domNode, e];
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.scroll.create(this.domNode.splitText(e));
		return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n;
	}
	update(e, t) {
		e.some((e) => e.type === "characterData" && e.target === this.domNode) && (this.text = this.statics.value(this.domNode));
	}
	value() {
		return this.text;
	}
};
_TextBlot.blotName = "text", _TextBlot.scope = Scope.INLINE_BLOT;
var TextBlot$1 = _TextBlot, require_diff = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = -1, r = 1, i = 0;
	function a(e, t, n, r, a) {
		if (e === t) return e ? [[i, e]] : [];
		if (n != null) {
			var s = D(e, t, n);
			if (s) return s;
		}
		var c = l(e, t), u = e.substring(0, c);
		e = e.substring(c), t = t.substring(c), c = d(e, t);
		var f = e.substring(e.length - c);
		e = e.substring(0, e.length - c), t = t.substring(0, t.length - c);
		var m = o(e, t);
		return u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m;
	}
	function o(e, t) {
		var o;
		if (!e) return [[r, t]];
		if (!t) return [[n, e]];
		var c = e.length > t.length ? e : t, l = e.length > t.length ? t : e, u = c.indexOf(l);
		if (u !== -1) return o = [
			[r, c.substring(0, u)],
			[i, l],
			[r, c.substring(u + l.length)]
		], e.length > t.length && (o[0][0] = o[2][0] = n), o;
		if (l.length === 1) return [[n, e], [r, t]];
		var d = f(e, t);
		if (d) {
			var p = d[0], m = d[1], h = d[2], g = d[3], _ = d[4], v = a(p, h), y = a(m, g);
			return v.concat([[i, _]], y);
		}
		return s(e, t);
	}
	function s(e, t) {
		for (var i = e.length, a = t.length, o = Math.ceil((i + a) / 2), s = o, l = 2 * o, u = Array(l), d = Array(l), f = 0; f < l; f++) u[f] = -1, d[f] = -1;
		u[s + 1] = 0, d[s + 1] = 0;
		for (var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0; y < o; y++) {
			for (var b = -y + h; b <= y - g; b += 2) {
				for (var x = s + b, S = b === -y || b !== y && u[x - 1] < u[x + 1] ? u[x + 1] : u[x - 1] + 1, C = S - b; S < i && C < a && e.charAt(S) === t.charAt(C);) S++, C++;
				if (u[x] = S, S > i) g += 2;
				else if (C > a) h += 2;
				else if (m) {
					var w = s + p - b;
					if (w >= 0 && w < l && d[w] !== -1) {
						var T = i - d[w];
						if (S >= T) return c(e, t, S, C);
					}
				}
			}
			for (var E = -y + _; E <= y - v; E += 2) {
				for (var w = s + E, T = E === -y || E !== y && d[w - 1] < d[w + 1] ? d[w + 1] : d[w - 1] + 1, D = T - E; T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);) T++, D++;
				if (d[w] = T, T > i) v += 2;
				else if (D > a) _ += 2;
				else if (!m) {
					var x = s + p - E;
					if (x >= 0 && x < l && u[x] !== -1) {
						var S = u[x], C = s + S - x;
						if (T = i - T, S >= T) return c(e, t, S, C);
					}
				}
			}
		}
		return [[n, e], [r, t]];
	}
	function c(e, t, n, r) {
		var i = e.substring(0, n), o = t.substring(0, r), s = e.substring(n), c = t.substring(r), l = a(i, o), u = a(s, c);
		return l.concat(u);
	}
	function l(e, t) {
		if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return x(e.charCodeAt(i - 1)) && i--, i;
	}
	function u(e, t) {
		var n = e.length, r = t.length;
		if (n == 0 || r == 0) return 0;
		n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
		var i = Math.min(n, r);
		if (e == t) return i;
		for (var a = 0, o = 1;;) {
			var s = e.substring(i - o), c = t.indexOf(s);
			if (c == -1) return a;
			o += c, (c == 0 || e.substring(i - o) == t.substring(0, o)) && (a = o, o++);
		}
	}
	function d(e, t) {
		if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return S(e.charCodeAt(e.length - i)) && i--, i;
	}
	function f(e, t) {
		var n = e.length > t.length ? e : t, r = e.length > t.length ? t : e;
		if (n.length < 4 || r.length * 2 < n.length) return null;
		function i(e, t, n) {
			for (var r = e.substring(n, n + Math.floor(e.length / 4)), i = -1, a = "", o, s, c, u; (i = t.indexOf(r, i + 1)) !== -1;) {
				var f = l(e.substring(n), t.substring(i)), p = d(e.substring(0, n), t.substring(0, i));
				a.length < p + f && (a = t.substring(i - p, i) + t.substring(i, i + f), o = e.substring(0, n - p), s = e.substring(n + f), c = t.substring(0, i - p), u = t.substring(i + f));
			}
			return a.length * 2 >= e.length ? [
				o,
				s,
				c,
				u,
				a
			] : null;
		}
		var a = i(n, r, Math.ceil(n.length / 4)), o = i(n, r, Math.ceil(n.length / 2)), s;
		if (!a && !o) return null;
		s = o ? a && a[4].length > o[4].length ? a : o : a;
		var c, u, f, p;
		e.length > t.length ? (c = s[0], u = s[1], f = s[2], p = s[3]) : (f = s[0], p = s[1], c = s[2], u = s[3]);
		var m = s[4];
		return [
			c,
			u,
			f,
			p,
			m
		];
	}
	function p(e) {
		for (var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0; c < e.length;) e[c][0] == i ? (a[o++] = c, l = f, d = p, f = 0, p = 0, s = e[c][1]) : (e[c][0] == r ? f += e[c][1].length : p += e[c][1].length, s && s.length <= Math.max(l, d) && s.length <= Math.max(f, p) && (e.splice(a[o - 1], 0, [n, s]), e[a[o - 1] + 1][0] = r, o--, o--, c = o > 0 ? a[o - 1] : -1, l = 0, d = 0, f = 0, p = 0, s = null, t = !0)), c++;
		for (t && b(e), y(e), c = 1; c < e.length;) {
			if (e[c - 1][0] == n && e[c][0] == r) {
				var m = e[c - 1][1], h = e[c][1], g = u(m, h), _ = u(h, m);
				g >= _ ? (g >= m.length / 2 || g >= h.length / 2) && (e.splice(c, 0, [i, h.substring(0, g)]), e[c - 1][1] = m.substring(0, m.length - g), e[c + 1][1] = h.substring(g), c++) : (_ >= m.length / 2 || _ >= h.length / 2) && (e.splice(c, 0, [i, m.substring(0, _)]), e[c - 1][0] = r, e[c - 1][1] = h.substring(0, h.length - _), e[c + 1][0] = n, e[c + 1][1] = m.substring(_), c++), c++;
			}
			c++;
		}
	}
	var m = /[^a-zA-Z0-9]/, h = /\s/, g = /[\r\n]/, _ = /\n\r?\n$/, v = /^\r?\n\r?\n/;
	function y(e) {
		function t(e, t) {
			if (!e || !t) return 6;
			var n = e.charAt(e.length - 1), r = t.charAt(0), i = n.match(m), a = r.match(m), o = i && n.match(h), s = a && r.match(h), c = o && n.match(g), l = s && r.match(g), u = c && e.match(_), d = l && t.match(v);
			return u || d ? 5 : c || l ? 4 : i && !o && s ? 3 : o || s ? 2 : i || a ? 1 : 0;
		}
		for (var n = 1; n < e.length - 1;) {
			if (e[n - 1][0] == i && e[n + 1][0] == i) {
				var r = e[n - 1][1], a = e[n][1], o = e[n + 1][1], s = d(r, a);
				if (s) {
					var c = a.substring(a.length - s);
					r = r.substring(0, r.length - s), a = c + a.substring(0, a.length - s), o = c + o;
				}
				for (var l = r, u = a, f = o, p = t(r, a) + t(a, o); a.charAt(0) === o.charAt(0);) {
					r += a.charAt(0), a = a.substring(1) + o.charAt(0), o = o.substring(1);
					var y = t(r, a) + t(a, o);
					y >= p && (p = y, l = r, u = a, f = o);
				}
				e[n - 1][1] != l && (l ? e[n - 1][1] = l : (e.splice(n - 1, 1), n--), e[n][1] = u, f ? e[n + 1][1] = f : (e.splice(n + 1, 1), n--));
			}
			n++;
		}
	}
	function b(e, t) {
		e.push([i, ""]);
		for (var a = 0, o = 0, s = 0, c = "", u = "", f; a < e.length;) {
			if (a < e.length - 1 && !e[a][1]) {
				e.splice(a, 1);
				continue;
			}
			switch (e[a][0]) {
				case r:
					s++, u += e[a][1], a++;
					break;
				case n:
					o++, c += e[a][1], a++;
					break;
				case i:
					var p = a - s - o - 1;
					if (t) {
						if (p >= 0 && w(e[p][1])) {
							var m = e[p][1].slice(-1);
							if (e[p][1] = e[p][1].slice(0, -1), c = m + c, u = m + u, !e[p][1]) {
								e.splice(p, 1), a--;
								var h = p - 1;
								e[h] && e[h][0] === r && (s++, u = e[h][1] + u, h--), e[h] && e[h][0] === n && (o++, c = e[h][1] + c, h--), p = h;
							}
						}
						if (C(e[a][1])) {
							var m = e[a][1].charAt(0);
							e[a][1] = e[a][1].slice(1), c += m, u += m;
						}
					}
					if (a < e.length - 1 && !e[a][1]) {
						e.splice(a, 1);
						break;
					}
					if (c.length > 0 || u.length > 0) {
						c.length > 0 && u.length > 0 && (f = l(u, c), f !== 0 && (p >= 0 ? e[p][1] += u.substring(0, f) : (e.splice(0, 0, [i, u.substring(0, f)]), a++), u = u.substring(f), c = c.substring(f)), f = d(u, c), f !== 0 && (e[a][1] = u.substring(u.length - f) + e[a][1], u = u.substring(0, u.length - f), c = c.substring(0, c.length - f)));
						var g = s + o;
						c.length === 0 && u.length === 0 ? (e.splice(a - g, g), a -= g) : c.length === 0 ? (e.splice(a - g, g, [r, u]), a = a - g + 1) : u.length === 0 ? (e.splice(a - g, g, [n, c]), a = a - g + 1) : (e.splice(a - g, g, [n, c], [r, u]), a = a - g + 2);
					}
					a !== 0 && e[a - 1][0] === i ? (e[a - 1][1] += e[a][1], e.splice(a, 1)) : a++, s = 0, o = 0, c = "", u = "";
					break;
			}
		}
		e[e.length - 1][1] === "" && e.pop();
		var _ = !1;
		for (a = 1; a < e.length - 1;) e[a - 1][0] === i && e[a + 1][0] === i && (e[a][1].substring(e[a][1].length - e[a - 1][1].length) === e[a - 1][1] ? (e[a][1] = e[a - 1][1] + e[a][1].substring(0, e[a][1].length - e[a - 1][1].length), e[a + 1][1] = e[a - 1][1] + e[a + 1][1], e.splice(a - 1, 1), _ = !0) : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] && (e[a - 1][1] += e[a + 1][1], e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1], e.splice(a + 1, 1), _ = !0)), a++;
		_ && b(e, t);
	}
	function x(e) {
		return e >= 55296 && e <= 56319;
	}
	function S(e) {
		return e >= 56320 && e <= 57343;
	}
	function C(e) {
		return S(e.charCodeAt(0));
	}
	function w(e) {
		return x(e.charCodeAt(e.length - 1));
	}
	function T(e) {
		for (var t = [], n = 0; n < e.length; n++) e[n][1].length > 0 && t.push(e[n]);
		return t;
	}
	function E(e, t, a, o) {
		return w(e) || C(o) ? null : T([
			[i, e],
			[n, t],
			[r, a],
			[i, o]
		]);
	}
	function D(e, t, n) {
		var r = typeof n == "number" ? {
			index: n,
			length: 0
		} : n.oldRange, i = typeof n == "number" ? null : n.newRange, a = e.length, o = t.length;
		if (r.length === 0 && (i === null || i.length === 0)) {
			var s = r.index, c = e.slice(0, s), l = e.slice(s), u = i ? i.index : null;
			editBefore: {
				var d = s + o - a;
				if (u !== null && u !== d || d < 0 || d > o) break editBefore;
				var f = t.slice(0, d), p = t.slice(d);
				if (p !== l) break editBefore;
				var m = Math.min(s, d), h = c.slice(0, m), g = f.slice(0, m);
				if (h !== g) break editBefore;
				var _ = c.slice(m), v = f.slice(m);
				return E(h, _, v, l);
			}
			editAfter: {
				if (u !== null && u !== s) break editAfter;
				var y = s, f = t.slice(0, y), p = t.slice(y);
				if (f !== c) break editAfter;
				var b = Math.min(a - y, o - y), x = l.slice(l.length - b), S = p.slice(p.length - b);
				if (x !== S) break editAfter;
				var _ = l.slice(0, l.length - b), v = p.slice(0, p.length - b);
				return E(c, _, v, x);
			}
		}
		if (r.length > 0 && i && i.length === 0) replaceRange: {
			var h = e.slice(0, r.index), x = e.slice(r.index + r.length), m = h.length, b = x.length;
			if (o < m + b) break replaceRange;
			var g = t.slice(0, m), S = t.slice(o - b);
			if (h !== g || x !== S) break replaceRange;
			var _ = e.slice(m, a - b), v = t.slice(m, o - b);
			return E(h, _, v, x);
		}
		return null;
	}
	function O(e, t, n, r) {
		return a(e, t, n, r, !0);
	}
	O.INSERT = r, O.DELETE = n, O.EQUAL = i, t.exports = O;
})), require_lodash$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = 200, r = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object GeneratorFunction]", f = "[object Map]", p = "[object Number]", m = "[object Object]", h = "[object Promise]", g = "[object RegExp]", _ = "[object Set]", v = "[object String]", y = "[object Symbol]", b = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", w = "[object Float64Array]", T = "[object Int8Array]", E = "[object Int16Array]", D = "[object Int32Array]", O = "[object Uint8Array]", Lf = "[object Uint8ClampedArray]", Rf = "[object Uint16Array]", zf = "[object Uint32Array]", Bf = /[\\^$.*+?()[\]{}|]/g, Vf = /\w*$/, Hf = /^\[object .+?Constructor\]$/, Uf = /^(?:0|[1-9]\d*)$/, k = {};
	k[a] = k[o] = k[x] = k[S] = k[s] = k[c] = k[C] = k[w] = k[T] = k[E] = k[D] = k[f] = k[p] = k[m] = k[g] = k[_] = k[v] = k[y] = k[O] = k[Lf] = k[Rf] = k[zf] = !0, k[l] = k[u] = k[b] = !1;
	var Wf = typeof global == "object" && global && global.Object === Object && global, Gf = typeof self == "object" && self && self.Object === Object && self, A = Wf || Gf || Function("return this")(), Kf = typeof e == "object" && e && !e.nodeType && e, j = Kf && typeof t == "object" && t && !t.nodeType && t, qf = j && j.exports === Kf;
	function Jf(e, t) {
		return e.set(t[0], t[1]), e;
	}
	function M(e, t) {
		return e.add(t), e;
	}
	function Yf(e, t) {
		for (var n = -1, r = e ? e.length : 0; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	function Xf(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function Zf(e, t, n, r) {
		var i = -1, a = e ? e.length : 0;
		for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
		return n;
	}
	function Qf(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function $f(e, t) {
		return e?.[t];
	}
	function ep(e) {
		var t = !1;
		if (e != null && typeof e.toString != "function") try {
			t = !!(e + "");
		} catch {}
		return t;
	}
	function tp(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function np(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function rp(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var ip = Array.prototype, ap = Function.prototype, op = Object.prototype, sp = A["__core-js_shared__"], cp = function() {
		var e = /[^.]+$/.exec(sp && sp.keys && sp.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), lp = ap.toString, N = op.hasOwnProperty, up = op.toString, dp = RegExp("^" + lp.call(N).replace(Bf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), P = qf ? A.Buffer : void 0, fp = A.Symbol, pp = A.Uint8Array, F = np(Object.getPrototypeOf, Object), mp = Object.create, hp = op.propertyIsEnumerable, gp = ip.splice, _p = Object.getOwnPropertySymbols, vp = P ? P.isBuffer : void 0, yp = np(Object.keys, Object), bp = J(A, "DataView"), I = J(A, "Map"), L = J(A, "Promise"), xp = J(A, "Set"), Sp = J(A, "WeakMap"), R = J(Object, "create"), Cp = Q(bp), z = Q(I), wp = Q(L), Tp = Q(xp), Ep = Q(Sp), B = fp ? fp.prototype : void 0, Dp = B ? B.valueOf : void 0;
	function V(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Op() {
		this.__data__ = R ? R(null) : {};
	}
	function kp(e) {
		return this.has(e) && delete this.__data__[e];
	}
	function Ap(e) {
		var t = this.__data__;
		if (R) {
			var n = t[e];
			return n === r ? void 0 : n;
		}
		return N.call(t, e) ? t[e] : void 0;
	}
	function jp(e) {
		var t = this.__data__;
		return R ? t[e] !== void 0 : N.call(t, e);
	}
	function Mp(e, t) {
		var n = this.__data__;
		return n[e] = R && t === void 0 ? r : t, this;
	}
	V.prototype.clear = Op, V.prototype.delete = kp, V.prototype.get = Ap, V.prototype.has = jp, V.prototype.set = Mp;
	function H(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Np() {
		this.__data__ = [];
	}
	function Pp(e) {
		var t = this.__data__, n = Xp(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : gp.call(t, n, 1), !0);
	}
	function Fp(e) {
		var t = this.__data__, n = Xp(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function Ip(e) {
		return Xp(this.__data__, e) > -1;
	}
	function Lp(e, t) {
		var n = this.__data__, r = Xp(n, e);
		return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
	}
	H.prototype.clear = Np, H.prototype.delete = Pp, H.prototype.get = Fp, H.prototype.has = Ip, H.prototype.set = Lp;
	function U(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Rp() {
		this.__data__ = {
			hash: new V(),
			map: new (I || H)(),
			string: new V()
		};
	}
	function zp(e) {
		return q(this, e).delete(e);
	}
	function Bp(e) {
		return q(this, e).get(e);
	}
	function Vp(e) {
		return q(this, e).has(e);
	}
	function Hp(e, t) {
		return q(this, e).set(e, t), this;
	}
	U.prototype.clear = Rp, U.prototype.delete = zp, U.prototype.get = Bp, U.prototype.has = Vp, U.prototype.set = Hp;
	function W(e) {
		this.__data__ = new H(e);
	}
	function Up() {
		this.__data__ = new H();
	}
	function Wp(e) {
		return this.__data__.delete(e);
	}
	function Gp(e) {
		return this.__data__.get(e);
	}
	function Kp(e) {
		return this.__data__.has(e);
	}
	function qp(e, t) {
		var r = this.__data__;
		if (r instanceof H) {
			var i = r.__data__;
			if (!I || i.length < n - 1) return i.push([e, t]), this;
			r = this.__data__ = new U(i);
		}
		return r.set(e, t), this;
	}
	W.prototype.clear = Up, W.prototype.delete = Wp, W.prototype.get = Gp, W.prototype.has = Kp, W.prototype.set = qp;
	function Jp(e, t) {
		var n = Cm(e) || Sm(e) ? Qf(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || N.call(e, a)) && !(i && (a == "length" || gm(a, r))) && n.push(a);
		return n;
	}
	function Yp(e, t, n) {
		var r = e[t];
		(!(N.call(e, t) && xm(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
	}
	function Xp(e, t) {
		for (var n = e.length; n--;) if (xm(e[n][0], t)) return n;
		return -1;
	}
	function G(e, t) {
		return e && dm(t, Am(t), e);
	}
	function Zp(e, t, n, r, i, o, s) {
		var c;
		if (r && (c = o ? r(e, i, o, s) : r(e)), c !== void 0) return c;
		if (!$(e)) return e;
		var l = Cm(e);
		if (l) {
			if (c = mm(e), !t) return um(e, c);
		} else {
			var f = X(e), p = f == u || f == d;
			if (Em(e)) return rm(e, t);
			if (f == m || f == a || p && !o) {
				if (ep(e)) return o ? e : {};
				if (c = Z(p ? {} : e), !t) return fm(e, G(c, e));
			} else {
				if (!k[f]) return o ? e : {};
				c = hm(e, f, Zp, t);
			}
		}
		s ||= new W();
		var h = s.get(e);
		if (h) return h;
		if (s.set(e, c), !l) var g = n ? pm(e) : Am(e);
		return Yf(g || e, function(i, a) {
			g && (a = i, i = e[a]), Yp(c, a, Zp(i, t, n, r, a, e, s));
		}), c;
	}
	function Qp(e) {
		return $(e) ? mp(e) : {};
	}
	function $p(e, t, n) {
		var r = t(e);
		return Cm(e) ? r : Xf(r, n(e));
	}
	function em(e) {
		return up.call(e);
	}
	function tm(e) {
		return !$(e) || vm(e) ? !1 : (Dm(e) || ep(e) ? dp : Hf).test(Q(e));
	}
	function nm(e) {
		if (!ym(e)) return yp(e);
		var t = [];
		for (var n in Object(e)) N.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function rm(e, t) {
		if (t) return e.slice();
		var n = new e.constructor(e.length);
		return e.copy(n), n;
	}
	function im(e) {
		var t = new e.constructor(e.byteLength);
		return new pp(t).set(new pp(e)), t;
	}
	function K(e, t) {
		var n = t ? im(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.byteLength);
	}
	function am(e, t, n) {
		return Zf(t ? n(tp(e), !0) : tp(e), Jf, new e.constructor());
	}
	function om(e) {
		var t = new e.constructor(e.source, Vf.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	function sm(e, t, n) {
		return Zf(t ? n(rp(e), !0) : rp(e), M, new e.constructor());
	}
	function cm(e) {
		return Dp ? Object(Dp.call(e)) : {};
	}
	function lm(e, t) {
		var n = t ? im(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.length);
	}
	function um(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	function dm(e, t, n, r) {
		n ||= {};
		for (var i = -1, a = t.length; ++i < a;) {
			var o = t[i], s = r ? r(n[o], e[o], o, n, e) : void 0;
			Yp(n, o, s === void 0 ? e[o] : s);
		}
		return n;
	}
	function fm(e, t) {
		return dm(e, Y(e), t);
	}
	function pm(e) {
		return $p(e, Am, Y);
	}
	function q(e, t) {
		var n = e.__data__;
		return _m(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function J(e, t) {
		var n = $f(e, t);
		return tm(n) ? n : void 0;
	}
	var Y = _p ? np(_p, Object) : jm, X = em;
	(bp && X(new bp(/* @__PURE__ */ new ArrayBuffer(1))) != S || I && X(new I()) != f || L && X(L.resolve()) != h || xp && X(new xp()) != _ || Sp && X(new Sp()) != b) && (X = function(e) {
		var t = up.call(e), n = t == m ? e.constructor : void 0, r = n ? Q(n) : void 0;
		if (r) switch (r) {
			case Cp: return S;
			case z: return f;
			case wp: return h;
			case Tp: return _;
			case Ep: return b;
		}
		return t;
	});
	function mm(e) {
		var t = e.length, n = e.constructor(t);
		return t && typeof e[0] == "string" && N.call(e, "index") && (n.index = e.index, n.input = e.input), n;
	}
	function Z(e) {
		return typeof e.constructor == "function" && !ym(e) ? Qp(F(e)) : {};
	}
	function hm(e, t, n, r) {
		var i = e.constructor;
		switch (t) {
			case x: return im(e);
			case s:
			case c: return new i(+e);
			case S: return K(e, r);
			case C:
			case w:
			case T:
			case E:
			case D:
			case O:
			case Lf:
			case Rf:
			case zf: return lm(e, r);
			case f: return am(e, r, n);
			case p:
			case v: return new i(e);
			case g: return om(e);
			case _: return sm(e, r, n);
			case y: return cm(e);
		}
	}
	function gm(e, t) {
		return t ??= i, !!t && (typeof e == "number" || Uf.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function _m(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function vm(e) {
		return !!cp && cp in e;
	}
	function ym(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || op);
	}
	function Q(e) {
		if (e != null) {
			try {
				return lp.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function bm(e) {
		return Zp(e, !0, !0);
	}
	function xm(e, t) {
		return e === t || e !== e && t !== t;
	}
	function Sm(e) {
		return Tm(e) && N.call(e, "callee") && (!hp.call(e, "callee") || up.call(e) == a);
	}
	var Cm = Array.isArray;
	function wm(e) {
		return e != null && Om(e.length) && !Dm(e);
	}
	function Tm(e) {
		return km(e) && wm(e);
	}
	var Em = vp || Mm;
	function Dm(e) {
		var t = $(e) ? up.call(e) : "";
		return t == u || t == d;
	}
	function Om(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= i;
	}
	function $(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function km(e) {
		return !!e && typeof e == "object";
	}
	function Am(e) {
		return wm(e) ? Jp(e) : nm(e);
	}
	function jm() {
		return [];
	}
	function Mm() {
		return !1;
	}
	t.exports = bm;
})), require_lodash = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = 200, r = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", c = "[object Array]", l = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", g = "[object Number]", _ = "[object Null]", v = "[object Object]", y = "[object Promise]", b = "[object Proxy]", x = "[object RegExp]", S = "[object Set]", C = "[object String]", w = "[object Symbol]", T = "[object Undefined]", E = "[object WeakMap]", D = "[object ArrayBuffer]", O = "[object DataView]", Lf = "[object Float32Array]", Rf = "[object Float64Array]", zf = "[object Int8Array]", Bf = "[object Int16Array]", Vf = "[object Int32Array]", Hf = "[object Uint8Array]", Uf = "[object Uint8ClampedArray]", k = "[object Uint16Array]", Wf = "[object Uint32Array]", Gf = /[\\^$.*+?()[\]{}|]/g, A = /^\[object .+?Constructor\]$/, Kf = /^(?:0|[1-9]\d*)$/, j = {};
	j[Lf] = j[Rf] = j[zf] = j[Bf] = j[Vf] = j[Hf] = j[Uf] = j[k] = j[Wf] = !0, j[s] = j[c] = j[D] = j[u] = j[O] = j[d] = j[f] = j[p] = j[h] = j[g] = j[v] = j[x] = j[S] = j[C] = j[E] = !1;
	var qf = typeof global == "object" && global && global.Object === Object && global, Jf = typeof self == "object" && self && self.Object === Object && self, M = qf || Jf || Function("return this")(), Yf = typeof e == "object" && e && !e.nodeType && e, Xf = Yf && typeof t == "object" && t && !t.nodeType && t, Zf = Xf && Xf.exports === Yf, Qf = Zf && qf.process, $f = function() {
		try {
			return Qf && Qf.binding && Qf.binding("util");
		} catch {}
	}(), ep = $f && $f.isTypedArray;
	function tp(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	function np(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function rp(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	function ip(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function ap(e) {
		return function(t) {
			return e(t);
		};
	}
	function op(e, t) {
		return e.has(t);
	}
	function sp(e, t) {
		return e?.[t];
	}
	function cp(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function lp(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function N(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var up = Array.prototype, dp = Function.prototype, P = Object.prototype, fp = M["__core-js_shared__"], pp = dp.toString, F = P.hasOwnProperty, mp = function() {
		var e = /[^.]+$/.exec(fp && fp.keys && fp.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), hp = P.toString, gp = RegExp("^" + pp.call(F).replace(Gf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), _p = Zf ? M.Buffer : void 0, vp = M.Symbol, yp = M.Uint8Array, bp = P.propertyIsEnumerable, I = up.splice, L = vp ? vp.toStringTag : void 0, xp = Object.getOwnPropertySymbols, Sp = _p ? _p.isBuffer : void 0, R = lp(Object.keys, Object), Cp = Y(M, "DataView"), z = Y(M, "Map"), wp = Y(M, "Promise"), Tp = Y(M, "Set"), Ep = Y(M, "WeakMap"), B = Y(Object, "create"), Dp = Q(Cp), V = Q(z), Op = Q(wp), kp = Q(Tp), Ap = Q(Ep), jp = vp ? vp.prototype : void 0, Mp = jp ? jp.valueOf : void 0;
	function H(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Np() {
		this.__data__ = B ? B(null) : {}, this.size = 0;
	}
	function Pp(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= t ? 1 : 0, t;
	}
	function Fp(e) {
		var t = this.__data__;
		if (B) {
			var n = t[e];
			return n === r ? void 0 : n;
		}
		return F.call(t, e) ? t[e] : void 0;
	}
	function Ip(e) {
		var t = this.__data__;
		return B ? t[e] !== void 0 : F.call(t, e);
	}
	function Lp(e, t) {
		var n = this.__data__;
		return this.size += this.has(e) ? 0 : 1, n[e] = B && t === void 0 ? r : t, this;
	}
	H.prototype.clear = Np, H.prototype.delete = Pp, H.prototype.get = Fp, H.prototype.has = Ip, H.prototype.set = Lp;
	function U(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Rp() {
		this.__data__ = [], this.size = 0;
	}
	function zp(e) {
		var t = this.__data__, n = rm(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : I.call(t, n, 1), --this.size, !0);
	}
	function Bp(e) {
		var t = this.__data__, n = rm(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function Vp(e) {
		return rm(this.__data__, e) > -1;
	}
	function Hp(e, t) {
		var n = this.__data__, r = rm(n, e);
		return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
	}
	U.prototype.clear = Rp, U.prototype.delete = zp, U.prototype.get = Bp, U.prototype.has = Vp, U.prototype.set = Hp;
	function W(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Up() {
		this.size = 0, this.__data__ = {
			hash: new H(),
			map: new (z || U)(),
			string: new H()
		};
	}
	function Wp(e) {
		var t = J(this, e).delete(e);
		return this.size -= t ? 1 : 0, t;
	}
	function Gp(e) {
		return J(this, e).get(e);
	}
	function Kp(e) {
		return J(this, e).has(e);
	}
	function qp(e, t) {
		var n = J(this, e), r = n.size;
		return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
	}
	W.prototype.clear = Up, W.prototype.delete = Wp, W.prototype.get = Gp, W.prototype.has = Kp, W.prototype.set = qp;
	function Jp(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.__data__ = new W(); ++t < n;) this.add(e[t]);
	}
	function Yp(e) {
		return this.__data__.set(e, r), this;
	}
	function Xp(e) {
		return this.__data__.has(e);
	}
	Jp.prototype.add = Jp.prototype.push = Yp, Jp.prototype.has = Xp;
	function G(e) {
		this.size = (this.__data__ = new U(e)).size;
	}
	function Zp() {
		this.__data__ = new U(), this.size = 0;
	}
	function Qp(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	function $p(e) {
		return this.__data__.get(e);
	}
	function em(e) {
		return this.__data__.has(e);
	}
	function tm(e, t) {
		var r = this.__data__;
		if (r instanceof U) {
			var i = r.__data__;
			if (!z || i.length < n - 1) return i.push([e, t]), this.size = ++r.size, this;
			r = this.__data__ = new W(i);
		}
		return r.set(e, t), this.size = r.size, this;
	}
	G.prototype.clear = Zp, G.prototype.delete = Qp, G.prototype.get = $p, G.prototype.has = em, G.prototype.set = tm;
	function nm(e, t) {
		var n = Sm(e), r = !n && xm(e), i = !n && !r && wm(e), a = !n && !r && !i && km(e), o = n || r || i || a, s = o ? ip(e.length, String) : [], c = s.length;
		for (var l in e) (t || F.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || hm(l, c))) && s.push(l);
		return s;
	}
	function rm(e, t) {
		for (var n = e.length; n--;) if (bm(e[n][0], t)) return n;
		return -1;
	}
	function im(e, t, n) {
		var r = t(e);
		return Sm(e) ? r : np(r, n(e));
	}
	function K(e) {
		return e == null ? e === void 0 ? T : _ : L && L in Object(e) ? X(e) : ym(e);
	}
	function am(e) {
		return $(e) && K(e) == s;
	}
	function om(e, t, n, r, i) {
		return e === t ? !0 : e == null || t == null || !$(e) && !$(t) ? e !== e && t !== t : sm(e, t, n, r, om, i);
	}
	function sm(e, t, n, r, a, o) {
		var l = Sm(e), u = Sm(t), d = l ? c : Z(e), f = u ? c : Z(t);
		d = d == s ? v : d, f = f == s ? v : f;
		var p = d == v, m = f == v, h = d == f;
		if (h && wm(e)) {
			if (!wm(t)) return !1;
			l = !0, p = !1;
		}
		if (h && !p) return o ||= new G(), l || km(e) ? dm(e, t, n, r, a, o) : fm(e, t, d, n, r, a, o);
		if (!(n & i)) {
			var g = p && F.call(e, "__wrapped__"), _ = m && F.call(t, "__wrapped__");
			if (g || _) {
				var y = g ? e.value() : e, b = _ ? t.value() : t;
				return o ||= new G(), a(y, b, n, r, o);
			}
		}
		return h ? (o ||= new G(), pm(e, t, n, r, a, o)) : !1;
	}
	function cm(e) {
		return !Om(e) || _m(e) ? !1 : (Em(e) ? gp : A).test(Q(e));
	}
	function lm(e) {
		return $(e) && Dm(e.length) && !!j[K(e)];
	}
	function um(e) {
		if (!vm(e)) return R(e);
		var t = [];
		for (var n in Object(e)) F.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function dm(e, t, n, r, o, s) {
		var c = n & i, l = e.length, u = t.length;
		if (l != u && !(c && u > l)) return !1;
		var d = s.get(e);
		if (d && s.get(t)) return d == t;
		var f = -1, p = !0, m = n & a ? new Jp() : void 0;
		for (s.set(e, t), s.set(t, e); ++f < l;) {
			var h = e[f], g = t[f];
			if (r) var _ = c ? r(g, h, f, t, e, s) : r(h, g, f, e, t, s);
			if (_ !== void 0) {
				if (_) continue;
				p = !1;
				break;
			}
			if (m) {
				if (!rp(t, function(e, t) {
					if (!op(m, t) && (h === e || o(h, e, n, r, s))) return m.push(t);
				})) {
					p = !1;
					break;
				}
			} else if (!(h === g || o(h, g, n, r, s))) {
				p = !1;
				break;
			}
		}
		return s.delete(e), s.delete(t), p;
	}
	function fm(e, t, n, r, o, s, c) {
		switch (n) {
			case O:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case D: return !(e.byteLength != t.byteLength || !s(new yp(e), new yp(t)));
			case u:
			case d:
			case g: return bm(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case x:
			case C: return e == t + "";
			case h: var l = cp;
			case S:
				var p = r & i;
				if (l ||= N, e.size != t.size && !p) return !1;
				var m = c.get(e);
				if (m) return m == t;
				r |= a, c.set(e, t);
				var _ = dm(l(e), l(t), r, o, s, c);
				return c.delete(e), _;
			case w: if (Mp) return Mp.call(e) == Mp.call(t);
		}
		return !1;
	}
	function pm(e, t, n, r, a, o) {
		var s = n & i, c = q(e), l = c.length;
		if (l != q(t).length && !s) return !1;
		for (var u = l; u--;) {
			var d = c[u];
			if (!(s ? d in t : F.call(t, d))) return !1;
		}
		var f = o.get(e);
		if (f && o.get(t)) return f == t;
		var p = !0;
		o.set(e, t), o.set(t, e);
		for (var m = s; ++u < l;) {
			d = c[u];
			var h = e[d], g = t[d];
			if (r) var _ = s ? r(g, h, d, t, e, o) : r(h, g, d, e, t, o);
			if (!(_ === void 0 ? h === g || a(h, g, n, r, o) : _)) {
				p = !1;
				break;
			}
			m ||= d == "constructor";
		}
		if (p && !m) {
			var v = e.constructor, y = t.constructor;
			v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
		}
		return o.delete(e), o.delete(t), p;
	}
	function q(e) {
		return im(e, Am, mm);
	}
	function J(e, t) {
		var n = e.__data__;
		return gm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function Y(e, t) {
		var n = sp(e, t);
		return cm(n) ? n : void 0;
	}
	function X(e) {
		var t = F.call(e, L), n = e[L];
		try {
			e[L] = void 0;
			var r = !0;
		} catch {}
		var i = hp.call(e);
		return r && (t ? e[L] = n : delete e[L]), i;
	}
	var mm = xp ? function(e) {
		return e == null ? [] : (e = Object(e), tp(xp(e), function(t) {
			return bp.call(e, t);
		}));
	} : jm, Z = K;
	(Cp && Z(new Cp(/* @__PURE__ */ new ArrayBuffer(1))) != O || z && Z(new z()) != h || wp && Z(wp.resolve()) != y || Tp && Z(new Tp()) != S || Ep && Z(new Ep()) != E) && (Z = function(e) {
		var t = K(e), n = t == v ? e.constructor : void 0, r = n ? Q(n) : "";
		if (r) switch (r) {
			case Dp: return O;
			case V: return h;
			case Op: return y;
			case kp: return S;
			case Ap: return E;
		}
		return t;
	});
	function hm(e, t) {
		return t ??= o, !!t && (typeof e == "number" || Kf.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function gm(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function _m(e) {
		return !!mp && mp in e;
	}
	function vm(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || P);
	}
	function ym(e) {
		return hp.call(e);
	}
	function Q(e) {
		if (e != null) {
			try {
				return pp.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function bm(e, t) {
		return e === t || e !== e && t !== t;
	}
	var xm = am(function() {
		return arguments;
	}()) ? am : function(e) {
		return $(e) && F.call(e, "callee") && !bp.call(e, "callee");
	}, Sm = Array.isArray;
	function Cm(e) {
		return e != null && Dm(e.length) && !Em(e);
	}
	var wm = Sp || Mm;
	function Tm(e, t) {
		return om(e, t);
	}
	function Em(e) {
		if (!Om(e)) return !1;
		var t = K(e);
		return t == p || t == m || t == l || t == b;
	}
	function Dm(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= o;
	}
	function Om(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	function $(e) {
		return typeof e == "object" && !!e;
	}
	var km = ep ? ap(ep) : lm;
	function Am(e) {
		return Cm(e) ? nm(e) : um(e);
	}
	function jm() {
		return [];
	}
	function Mm() {
		return !1;
	}
	t.exports = Tm;
})), require_AttributeMap = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = require_lodash$1(), n = require_lodash(), r;
	(function(e) {
		function r(e = {}, n = {}, r = !1) {
			typeof e != "object" && (e = {}), typeof n != "object" && (n = {});
			let i = t(n);
			for (let t in r || (i = Object.keys(i).reduce((e, t) => (i[t] != null && (e[t] = i[t]), e), {})), e) e[t] !== void 0 && n[t] === void 0 && (i[t] = e[t]);
			return Object.keys(i).length > 0 ? i : void 0;
		}
		e.compose = r;
		function i(e = {}, t = {}) {
			typeof e != "object" && (e = {}), typeof t != "object" && (t = {});
			let r = Object.keys(e).concat(Object.keys(t)).reduce((r, i) => (n(e[i], t[i]) || (r[i] = t[i] === void 0 ? null : t[i]), r), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.diff = i;
		function a(e = {}, t = {}) {
			e ||= {};
			let n = Object.keys(t).reduce((n, r) => (t[r] !== e[r] && e[r] !== void 0 && (n[r] = t[r]), n), {});
			return Object.keys(e).reduce((n, r) => (e[r] !== t[r] && t[r] === void 0 && (n[r] = null), n), n);
		}
		e.invert = a;
		function o(e, t, n = !1) {
			if (typeof e != "object") return t;
			if (typeof t != "object") return;
			if (!n) return t;
			let r = Object.keys(t).reduce((n, r) => (e[r] === void 0 && (n[r] = t[r]), n), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.transform = o;
	})(r ||= {}), e.default = r;
})), require_Op = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	(function(e) {
		function t(e) {
			return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
		}
		e.length = t;
	})(t ||= {}), e.default = t;
})), require_OpIterator = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = require_Op();
	e.default = class {
		constructor(e) {
			this.ops = e, this.index = 0, this.offset = 0;
		}
		hasNext() {
			return this.peekLength() < Infinity;
		}
		next(e) {
			e ||= Infinity;
			let n = this.ops[this.index];
			if (n) {
				let r = this.offset, i = t.default.length(n);
				if (e >= i - r ? (e = i - r, this.index += 1, this.offset = 0) : this.offset += e, typeof n.delete == "number") return { delete: e };
				{
					let t = {};
					return n.attributes && (t.attributes = n.attributes), typeof n.retain == "number" ? t.retain = e : typeof n.retain == "object" && n.retain !== null ? t.retain = n.retain : typeof n.insert == "string" ? t.insert = n.insert.substr(r, e) : t.insert = n.insert, t;
				}
			} else return { retain: Infinity };
		}
		peek() {
			return this.ops[this.index];
		}
		peekLength() {
			return this.ops[this.index] ? t.default.length(this.ops[this.index]) - this.offset : Infinity;
		}
		peekType() {
			let e = this.ops[this.index];
			return e ? typeof e.delete == "number" ? "delete" : typeof e.retain == "number" || typeof e.retain == "object" && e.retain !== null ? "retain" : "insert" : "retain";
		}
		rest() {
			if (this.hasNext()) {
				if (this.offset === 0) return this.ops.slice(this.index);
				{
					let e = this.offset, t = this.index, n = this.next(), r = this.ops.slice(this.index);
					return this.offset = e, this.index = t, [n].concat(r);
				}
			} else return [];
		}
	};
})), require_Delta = /* @__PURE__ */ __commonJSMin(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.AttributeMap = e.OpIterator = e.Op = void 0;
	var n = require_diff(), r = require_lodash$1(), i = require_lodash(), a = require_AttributeMap();
	e.AttributeMap = a.default;
	var o = require_Op();
	e.Op = o.default;
	var s = require_OpIterator();
	e.OpIterator = s.default;
	var c = "\0", l = (e, t) => {
		if (typeof e != "object" || !e) throw Error(`cannot retain a ${typeof e}`);
		if (typeof t != "object" || !t) throw Error(`cannot retain a ${typeof t}`);
		let n = Object.keys(e)[0];
		if (!n || n !== Object.keys(t)[0]) throw Error(`embed types not matched: ${n} != ${Object.keys(t)[0]}`);
		return [
			n,
			e[n],
			t[n]
		];
	}, u = class e {
		constructor(e) {
			Array.isArray(e) ? this.ops = e : e != null && Array.isArray(e.ops) ? this.ops = e.ops : this.ops = [];
		}
		static registerEmbed(e, t) {
			this.handlers[e] = t;
		}
		static unregisterEmbed(e) {
			delete this.handlers[e];
		}
		static getHandler(e) {
			let t = this.handlers[e];
			if (!t) throw Error(`no handlers for embed type "${e}"`);
			return t;
		}
		insert(e, t) {
			let n = {};
			return typeof e == "string" && e.length === 0 ? this : (n.insert = e, typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n));
		}
		delete(e) {
			return e <= 0 ? this : this.push({ delete: e });
		}
		retain(e, t) {
			if (typeof e == "number" && e <= 0) return this;
			let n = { retain: e };
			return typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n);
		}
		push(e) {
			let t = this.ops.length, n = this.ops[t - 1];
			if (e = r(e), typeof n == "object") {
				if (typeof e.delete == "number" && typeof n.delete == "number") return this.ops[t - 1] = { delete: n.delete + e.delete }, this;
				if (typeof n.delete == "number" && e.insert != null && (--t, n = this.ops[t - 1], typeof n != "object")) return this.ops.unshift(e), this;
				if (i(e.attributes, n.attributes)) {
					if (typeof e.insert == "string" && typeof n.insert == "string") return this.ops[t - 1] = { insert: n.insert + e.insert }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
					if (typeof e.retain == "number" && typeof n.retain == "number") return this.ops[t - 1] = { retain: n.retain + e.retain }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
				}
			}
			return t === this.ops.length ? this.ops.push(e) : this.ops.splice(t, 0, e), this;
		}
		chop() {
			let e = this.ops[this.ops.length - 1];
			return e && typeof e.retain == "number" && !e.attributes && this.ops.pop(), this;
		}
		filter(e) {
			return this.ops.filter(e);
		}
		forEach(e) {
			this.ops.forEach(e);
		}
		map(e) {
			return this.ops.map(e);
		}
		partition(e) {
			let t = [], n = [];
			return this.forEach((r) => {
				(e(r) ? t : n).push(r);
			}), [t, n];
		}
		reduce(e, t) {
			return this.ops.reduce(e, t);
		}
		changeLength() {
			return this.reduce((e, t) => t.insert ? e + o.default.length(t) : t.delete ? e - t.delete : e, 0);
		}
		length() {
			return this.reduce((e, t) => e + o.default.length(t), 0);
		}
		slice(t = 0, n = Infinity) {
			let r = [], i = new s.default(this.ops), a = 0;
			for (; a < n && i.hasNext();) {
				let e;
				a < t ? e = i.next(t - a) : (e = i.next(n - a), r.push(e)), a += o.default.length(e);
			}
			return new e(r);
		}
		compose(t) {
			let n = new s.default(this.ops), r = new s.default(t.ops), o = [], c = r.peek();
			if (c != null && typeof c.retain == "number" && c.attributes == null) {
				let e = c.retain;
				for (; n.peekType() === "insert" && n.peekLength() <= e;) e -= n.peekLength(), o.push(n.next());
				c.retain - e > 0 && r.next(c.retain - e);
			}
			let u = new e(o);
			for (; n.hasNext() || r.hasNext();) if (r.peekType() === "insert") u.push(r.next());
			else if (n.peekType() === "delete") u.push(n.next());
			else {
				let t = Math.min(n.peekLength(), r.peekLength()), o = n.next(t), s = r.next(t);
				if (s.retain) {
					let c = {};
					if (typeof o.retain == "number") c.retain = typeof s.retain == "number" ? t : s.retain;
					else if (typeof s.retain == "number") o.retain == null ? c.insert = o.insert : c.retain = o.retain;
					else {
						let t = o.retain == null ? "insert" : "retain", [n, r, i] = l(o[t], s.retain), a = e.getHandler(n);
						c[t] = { [n]: a.compose(r, i, t === "retain") };
					}
					let d = a.default.compose(o.attributes, s.attributes, typeof o.retain == "number");
					if (d && (c.attributes = d), u.push(c), !r.hasNext() && i(u.ops[u.ops.length - 1], c)) {
						let t = new e(n.rest());
						return u.concat(t).chop();
					}
				} else typeof s.delete == "number" && (typeof o.retain == "number" || typeof o.retain == "object" && o.retain !== null) && u.push(s);
			}
			return u.chop();
		}
		concat(t) {
			let n = new e(this.ops.slice());
			return t.ops.length > 0 && (n.push(t.ops[0]), n.ops = n.ops.concat(t.ops.slice(1))), n;
		}
		diff(t, r) {
			if (this.ops === t.ops) return new e();
			let o = [this, t].map((e) => e.map((n) => {
				if (n.insert != null) return typeof n.insert == "string" ? n.insert : c;
				let r = e === t ? "on" : "with";
				throw Error("diff() called " + r + " non-document");
			}).join("")), l = new e(), u = n(o[0], o[1], r, !0), d = new s.default(this.ops), f = new s.default(t.ops);
			return u.forEach((e) => {
				let t = e[1].length;
				for (; t > 0;) {
					let r = 0;
					switch (e[0]) {
						case n.INSERT:
							r = Math.min(f.peekLength(), t), l.push(f.next(r));
							break;
						case n.DELETE:
							r = Math.min(t, d.peekLength()), d.next(r), l.delete(r);
							break;
						case n.EQUAL:
							r = Math.min(d.peekLength(), f.peekLength(), t);
							let e = d.next(r), o = f.next(r);
							i(e.insert, o.insert) ? l.retain(r, a.default.diff(e.attributes, o.attributes)) : l.push(o).delete(r);
							break;
					}
					t -= r;
				}
			}), l.chop();
		}
		eachLine(t, n = "\n") {
			let r = new s.default(this.ops), i = new e(), a = 0;
			for (; r.hasNext();) {
				if (r.peekType() !== "insert") return;
				let s = r.peek(), c = o.default.length(s) - r.peekLength(), l = typeof s.insert == "string" ? s.insert.indexOf(n, c) - c : -1;
				if (l < 0) i.push(r.next());
				else if (l > 0) i.push(r.next(l));
				else {
					if (t(i, r.next(1).attributes || {}, a) === !1) return;
					a += 1, i = new e();
				}
			}
			i.length() > 0 && t(i, {}, a);
		}
		invert(t) {
			let n = new e();
			return this.reduce((r, i) => {
				if (i.insert) n.delete(o.default.length(i));
				else if (typeof i.retain == "number" && i.attributes == null) return n.retain(i.retain), r + i.retain;
				else if (i.delete || typeof i.retain == "number") {
					let e = i.delete || i.retain;
					return t.slice(r, r + e).forEach((e) => {
						i.delete ? n.push(e) : i.retain && i.attributes && n.retain(o.default.length(e), a.default.invert(i.attributes, e.attributes));
					}), r + e;
				} else if (typeof i.retain == "object" && i.retain !== null) {
					let o = t.slice(r, r + 1), c = new s.default(o.ops).next(), [u, d, f] = l(i.retain, c.insert), p = e.getHandler(u);
					return n.retain({ [u]: p.invert(d, f) }, a.default.invert(i.attributes, c.attributes)), r + 1;
				}
				return r;
			}, 0), n.chop();
		}
		transform(t, n = !1) {
			if (n = !!n, typeof t == "number") return this.transformPosition(t, n);
			let r = t, i = new s.default(this.ops), c = new s.default(r.ops), l = new e();
			for (; i.hasNext() || c.hasNext();) if (i.peekType() === "insert" && (n || c.peekType() !== "insert")) l.retain(o.default.length(i.next()));
			else if (c.peekType() === "insert") l.push(c.next());
			else {
				let t = Math.min(i.peekLength(), c.peekLength()), r = i.next(t), o = c.next(t);
				if (r.delete) continue;
				if (o.delete) l.push(o);
				else {
					let i = r.retain, s = o.retain, c = typeof s == "object" && s ? s : t;
					if (typeof i == "object" && i && typeof s == "object" && s) {
						let t = Object.keys(i)[0];
						if (t === Object.keys(s)[0]) {
							let r = e.getHandler(t);
							r && (c = { [t]: r.transform(i[t], s[t], n) });
						}
					}
					l.retain(c, a.default.transform(r.attributes, o.attributes, n));
				}
			}
			return l.chop();
		}
		transformPosition(e, t = !1) {
			t = !!t;
			let n = new s.default(this.ops), r = 0;
			for (; n.hasNext() && r <= e;) {
				let i = n.peekLength(), a = n.peekType();
				if (n.next(), a === "delete") {
					e -= Math.min(i, e - r);
					continue;
				} else a === "insert" && (r < e || !t) && (e += i);
				r += i;
			}
			return e;
		}
	};
	u.Op = o.default, u.OpIterator = s.default, u.AttributeMap = a.default, u.handlers = {}, e.default = u, typeof t == "object" && (t.exports = u, t.exports.default = u);
})), import_Delta$11 = /* @__PURE__ */ __toESM(require_Delta(), 1), Break = class extends EmbedBlot$1 {
	static value() {}
	optimize() {
		(this.prev || this.next) && this.remove();
	}
	length() {
		return 0;
	}
	value() {
		return "";
	}
};
Break.blotName = "break", Break.tagName = "BR";
var break_default = Break, Text$1 = class extends TextBlot$1 {}, entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function escapeText(e) {
	return e.replace(/[&<>"']/g, (e) => entityMap[e]);
}
var inline_default = class e extends InlineBlot$1 {
	static allowedChildren = [
		e,
		break_default,
		EmbedBlot$1,
		Text$1
	];
	static order = [
		"cursor",
		"inline",
		"link",
		"underline",
		"strike",
		"italic",
		"bold",
		"script",
		"code"
	];
	static compare(t, n) {
		let r = e.order.indexOf(t), i = e.order.indexOf(n);
		return r >= 0 || i >= 0 ? r - i : t === n ? 0 : t < n ? -1 : 1;
	}
	formatAt(t, n, r, i) {
		if (e.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, Scope.BLOT)) {
			let e = this.isolate(t, n);
			i && e.wrap(r, i);
		} else super.formatAt(t, n, r, i);
	}
	optimize(t) {
		if (super.optimize(t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
			let e = this.parent.isolate(this.offset(), this.length());
			this.moveChildren(e), e.wrap(this);
		}
	}
}, NEWLINE_LENGTH = 1, Block = class extends BlockBlot$1 {
	cache = {};
	delta() {
		return this.cache.delta ?? (this.cache.delta = blockDelta(this)), this.cache.delta;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.cache = {};
	}
	formatAt(e, t, n, r) {
		t <= 0 || (this.scroll.query(n, Scope.BLOCK) ? e + t === this.length() && this.format(n, r) : super.formatAt(e, Math.min(t, this.length() - e - 1), n, r), this.cache = {});
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n), this.cache = {};
			return;
		}
		if (t.length === 0) return;
		let r = t.split("\n"), i = r.shift();
		i.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
		let a = this;
		r.reduce((e, t) => (a = a.split(e, !0), a.insertAt(0, t), t.length), e + i.length);
	}
	insertBefore(e, t) {
		let { head: n } = this.children;
		super.insertBefore(e, t), n instanceof break_default && n.remove(), this.cache = {};
	}
	length() {
		return this.cache.length ?? (this.cache.length = super.length() + NEWLINE_LENGTH), this.cache.length;
	}
	moveChildren(e, t) {
		super.moveChildren(e, t), this.cache = {};
	}
	optimize(e) {
		super.optimize(e), this.cache = {};
	}
	path(e) {
		return super.path(e, !0);
	}
	removeChild(e) {
		super.removeChild(e), this.cache = {};
	}
	split(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		if (t && (e === 0 || e >= this.length() - NEWLINE_LENGTH)) {
			let t = this.clone();
			return e === 0 ? (this.parent.insertBefore(t, this), this) : (this.parent.insertBefore(t, this.next), t);
		}
		let n = super.split(e, t);
		return this.cache = {}, n;
	}
};
Block.blotName = "block", Block.tagName = "P", Block.defaultChild = break_default, Block.allowedChildren = [
	break_default,
	inline_default,
	EmbedBlot$1,
	Text$1
];
var BlockEmbed = class extends EmbedBlot$1 {
	attach() {
		super.attach(), this.attributes = new AttributorStore$1(this.domNode);
	}
	delta() {
		return new import_Delta$11.default().insert(this.value(), {
			...this.formats(),
			...this.attributes.values()
		});
	}
	format(e, t) {
		let n = this.scroll.query(e, Scope.BLOCK_ATTRIBUTE);
		n != null && this.attributes.attribute(n, t);
	}
	formatAt(e, t, n, r) {
		this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n);
			return;
		}
		let r = t.split("\n"), i = r.pop(), a = r.map((e) => {
			let t = this.scroll.create(Block.blotName);
			return t.insertAt(0, e), t;
		}), o = this.split(e);
		a.forEach((e) => {
			this.parent.insertBefore(e, o);
		}), i && this.parent.insertBefore(this.scroll.create("text", i), o);
	}
};
BlockEmbed.scope = Scope.BLOCK_BLOT;
function blockDelta(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.descendants(LeafBlot$1).reduce((e, n) => n.length() === 0 ? e : e.insert(n.value(), bubbleFormats(n, {}, t)), new import_Delta$11.default()).insert("\n", bubbleFormats(e));
}
function bubbleFormats(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
	return e == null || ("formats" in e && typeof e.formats == "function" && (t = {
		...t,
		...e.formats()
	}, n && delete t["code-token"]), e.parent == null || e.parent.statics.blotName === "scroll" || e.parent.statics.scope !== e.statics.scope) ? t : bubbleFormats(e.parent, t, n);
}
var cursor_default = class e extends EmbedBlot$1 {
	static blotName = "cursor";
	static className = "ql-cursor";
	static tagName = "span";
	static CONTENTS = "﻿";
	static value() {}
	constructor(t, n, r) {
		super(t, n), this.selection = r, this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
	}
	detach() {
		this.parent != null && this.parent.removeChild(this);
	}
	format(t, n) {
		if (this.savedLength !== 0) {
			super.format(t, n);
			return;
		}
		let r = this, i = 0;
		for (; r != null && r.statics.scope !== Scope.BLOCK_BLOT;) i += r.offset(r.parent), r = r.parent;
		r != null && (this.savedLength = e.CONTENTS.length, r.optimize(), r.formatAt(i, e.CONTENTS.length, t, n), this.savedLength = 0);
	}
	index(e, t) {
		return e === this.textNode ? 0 : super.index(e, t);
	}
	length() {
		return this.savedLength;
	}
	position() {
		return [this.textNode, this.textNode.data.length];
	}
	remove() {
		super.remove(), this.parent = null;
	}
	restore() {
		if (this.selection.composing || this.parent == null) return null;
		let t = this.selection.getNativeRange();
		for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
		let n = this.prev instanceof Text$1 ? this.prev : null, r = n ? n.length() : 0, i = this.next instanceof Text$1 ? this.next : null, a = i ? i.text : "", { textNode: o } = this, s = o.data.split(e.CONTENTS).join("");
		o.data = e.CONTENTS;
		let c;
		if (n) c = n, (s || i) && (n.insertAt(n.length(), s + a), i && i.remove());
		else if (i) c = i, i.insertAt(0, s);
		else {
			let e = document.createTextNode(s);
			c = this.scroll.create(e), this.parent.insertBefore(c, this);
		}
		if (this.remove(), t) {
			let e = (e, t) => n && e === n.domNode ? t : e === o ? r + t - 1 : i && e === i.domNode ? r + s.length + t : null, a = e(t.start.node, t.start.offset), l = e(t.end.node, t.end.offset);
			if (a !== null && l !== null) return {
				startNode: c.domNode,
				startOffset: a,
				endNode: c.domNode,
				endOffset: l
			};
		}
		return null;
	}
	update(e, t) {
		if (e.some((e) => e.type === "characterData" && e.target === this.textNode)) {
			let e = this.restore();
			e && (t.range = e);
		}
	}
	optimize(t) {
		super.optimize(t);
		let { parent: n } = this;
		for (; n;) {
			if (n.domNode.tagName === "A") {
				this.savedLength = e.CONTENTS.length, n.isolate(this.offset(n), this.length()).unwrap(), this.savedLength = 0;
				break;
			}
			n = n.parent;
		}
	}
	value() {
		return "";
	}
}, import_eventemitter3 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1), instances_default = /* @__PURE__ */ new WeakMap(), levels = [
	"error",
	"warn",
	"log",
	"info"
], level = "warn";
function debug$6(e) {
	if (level && levels.indexOf(e) <= levels.indexOf(level)) {
		var t = [...arguments].slice(1);
		console[e](...t);
	}
}
function namespace(e) {
	return levels.reduce((t, n) => (t[n] = debug$6.bind(console, n, e), t), {});
}
namespace.level = (e) => {
	level = e;
}, debug$6.level = namespace.level;
var logger_default = namespace, debug$5 = logger_default("quill:events");
[
	"selectionchange",
	"mousedown",
	"mouseup",
	"click"
].forEach((e) => {
	document.addEventListener(e, function() {
		var e = [...arguments];
		Array.from(document.querySelectorAll(".ql-container")).forEach((t) => {
			let n = instances_default.get(t);
			n && n.emitter && n.emitter.handleDOM(...e);
		});
	});
});
var emitter_default = class extends import_eventemitter3.default {
	static events = {
		EDITOR_CHANGE: "editor-change",
		SCROLL_BEFORE_UPDATE: "scroll-before-update",
		SCROLL_BLOT_MOUNT: "scroll-blot-mount",
		SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
		SCROLL_OPTIMIZE: "scroll-optimize",
		SCROLL_UPDATE: "scroll-update",
		SCROLL_EMBED_UPDATE: "scroll-embed-update",
		SELECTION_CHANGE: "selection-change",
		TEXT_CHANGE: "text-change",
		COMPOSITION_BEFORE_START: "composition-before-start",
		COMPOSITION_START: "composition-start",
		COMPOSITION_BEFORE_END: "composition-before-end",
		COMPOSITION_END: "composition-end"
	};
	static sources = {
		API: "api",
		SILENT: "silent",
		USER: "user"
	};
	constructor() {
		super(), this.domListeners = {}, this.on("error", debug$5.error);
	}
	emit() {
		var e = [...arguments];
		return debug$5.log.call(debug$5, ...e), super.emit(...e);
	}
	handleDOM(e) {
		var t = [...arguments].slice(1);
		(this.domListeners[e.type] || []).forEach((n) => {
			let { node: r, handler: i } = n;
			(e.target === r || r.contains(e.target)) && i(e, ...t);
		});
	}
	listenDOM(e, t, n) {
		this.domListeners[e] || (this.domListeners[e] = []), this.domListeners[e].push({
			node: t,
			handler: n
		});
	}
}, debug$4 = logger_default("quill:selection"), Range = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		this.index = e, this.length = t;
	}
}, Selection = class {
	constructor(e, t) {
		this.emitter = t, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new Range(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
			!this.mouseDown && !this.composing && setTimeout(this.update.bind(this, emitter_default.sources.USER), 1);
		}), this.emitter.on(emitter_default.events.SCROLL_BEFORE_UPDATE, () => {
			if (!this.hasFocus()) return;
			let e = this.getNativeRange();
			e != null && e.start.node !== this.cursor.textNode && this.emitter.once(emitter_default.events.SCROLL_UPDATE, (t, n) => {
				try {
					this.root.contains(e.start.node) && this.root.contains(e.end.node) && this.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset);
					let r = n.some((e) => e.type === "characterData" || e.type === "childList" || e.type === "attributes" && e.target === this.root);
					this.update(r ? emitter_default.sources.SILENT : t);
				} catch {}
			});
		}), this.emitter.on(emitter_default.events.SCROLL_OPTIMIZE, (e, t) => {
			if (t.range) {
				let { startNode: e, startOffset: n, endNode: r, endOffset: i } = t.range;
				this.setNativeRange(e, n, r, i), this.update(emitter_default.sources.SILENT);
			}
		}), this.update(emitter_default.sources.SILENT);
	}
	handleComposition() {
		this.emitter.on(emitter_default.events.COMPOSITION_BEFORE_START, () => {
			this.composing = !0;
		}), this.emitter.on(emitter_default.events.COMPOSITION_END, () => {
			if (this.composing = !1, this.cursor.parent) {
				let e = this.cursor.restore();
				if (!e) return;
				setTimeout(() => {
					this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
				}, 1);
			}
		});
	}
	handleDragging() {
		this.emitter.listenDOM("mousedown", document.body, () => {
			this.mouseDown = !0;
		}), this.emitter.listenDOM("mouseup", document.body, () => {
			this.mouseDown = !1, this.update(emitter_default.sources.USER);
		});
	}
	focus() {
		this.hasFocus() || (this.root.focus({ preventScroll: !0 }), this.setRange(this.savedRange));
	}
	format(e, t) {
		this.scroll.update();
		let n = this.getNativeRange();
		if (!(n == null || !n.native.collapsed || this.scroll.query(e, Scope.BLOCK))) {
			if (n.start.node !== this.cursor.textNode) {
				let e = this.scroll.find(n.start.node, !1);
				if (e == null) return;
				if (e instanceof LeafBlot$1) {
					let t = e.split(n.start.offset);
					e.parent.insertBefore(this.cursor, t);
				} else e.insertBefore(this.cursor, n.start.node);
				this.cursor.attach();
			}
			this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
		}
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = this.scroll.length();
		e = Math.min(e, n - 1), t = Math.min(e + t, n - 1) - e;
		let r, [i, a] = this.scroll.leaf(e);
		if (i == null) return null;
		if (t > 0 && a === i.length()) {
			let [t] = this.scroll.leaf(e + 1);
			if (t) {
				let [n] = this.scroll.line(e), [r] = this.scroll.line(e + 1);
				n === r && (i = t, a = 0);
			}
		}
		[r, a] = i.position(a, !0);
		let o = document.createRange();
		if (t > 0) return o.setStart(r, a), [i, a] = this.scroll.leaf(e + t), i == null ? null : ([r, a] = i.position(a, !0), o.setEnd(r, a), o.getBoundingClientRect());
		let s = "left", c;
		if (r instanceof Text) {
			if (!r.data.length) return null;
			a < r.data.length ? (o.setStart(r, a), o.setEnd(r, a + 1)) : (o.setStart(r, a - 1), o.setEnd(r, a), s = "right"), c = o.getBoundingClientRect();
		} else {
			if (!(i.domNode instanceof Element)) return null;
			c = i.domNode.getBoundingClientRect(), a > 0 && (s = "right");
		}
		return {
			bottom: c.top + c.height,
			height: c.height,
			left: c[s],
			right: c[s],
			top: c.top,
			width: 0
		};
	}
	getNativeRange() {
		let e = document.getSelection();
		if (e == null || e.rangeCount <= 0) return null;
		let t = e.getRangeAt(0);
		if (t == null) return null;
		let n = this.normalizeNative(t);
		return debug$4.info("getNativeRange", n), n;
	}
	getRange() {
		let e = this.scroll.domNode;
		if ("isConnected" in e && !e.isConnected) return [null, null];
		let t = this.getNativeRange();
		return t == null ? [null, null] : [this.normalizedToRange(t), t];
	}
	hasFocus() {
		return document.activeElement === this.root || document.activeElement != null && contains(this.root, document.activeElement);
	}
	normalizedToRange(e) {
		let t = [[e.start.node, e.start.offset]];
		e.native.collapsed || t.push([e.end.node, e.end.offset]);
		let n = t.map((e) => {
			let [t, n] = e, r = this.scroll.find(t, !0), i = r.offset(this.scroll);
			return n === 0 ? i : r instanceof LeafBlot$1 ? i + r.index(t, n) : i + r.length();
		}), r = Math.min(Math.max(...n), this.scroll.length() - 1), i = Math.min(r, ...n);
		return new Range(i, r - i);
	}
	normalizeNative(e) {
		if (!contains(this.root, e.startContainer) || !e.collapsed && !contains(this.root, e.endContainer)) return null;
		let t = {
			start: {
				node: e.startContainer,
				offset: e.startOffset
			},
			end: {
				node: e.endContainer,
				offset: e.endOffset
			},
			native: e
		};
		return [t.start, t.end].forEach((e) => {
			let { node: t, offset: n } = e;
			for (; !(t instanceof Text) && t.childNodes.length > 0;) if (t.childNodes.length > n) t = t.childNodes[n], n = 0;
			else if (t.childNodes.length === n) t = t.lastChild, n = t instanceof Text ? t.data.length : t.childNodes.length > 0 ? t.childNodes.length : t.childNodes.length + 1;
			else break;
			e.node = t, e.offset = n;
		}), t;
	}
	rangeToNative(e) {
		let t = this.scroll.length(), n = (e, n) => {
			e = Math.min(t - 1, e);
			let [r, i] = this.scroll.leaf(e);
			return r ? r.position(i, n) : [null, -1];
		};
		return [...n(e.index, !1), ...n(e.index + e.length, !0)];
	}
	setNativeRange(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
		if (debug$4.info("setNativeRange", e, t, n, r), e != null && (this.root.parentNode == null || e.parentNode == null || n.parentNode == null)) return;
		let a = document.getSelection();
		if (a != null) if (e != null) {
			this.hasFocus() || this.root.focus({ preventScroll: !0 });
			let { native: o } = this.getNativeRange() || {};
			if (o == null || i || e !== o.startContainer || t !== o.startOffset || n !== o.endContainer || r !== o.endOffset) {
				e instanceof Element && e.tagName === "BR" && (t = Array.from(e.parentNode.childNodes).indexOf(e), e = e.parentNode), n instanceof Element && n.tagName === "BR" && (r = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
				let i = document.createRange();
				i.setStart(e, t), i.setEnd(n, r), a.removeAllRanges(), a.addRange(i);
			}
		} else a.removeAllRanges(), this.root.blur();
	}
	setRange(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : emitter_default.sources.API;
		if (typeof t == "string" && (n = t, t = !1), debug$4.info("setRange", e), e != null) {
			let n = this.rangeToNative(e);
			this.setNativeRange(...n, t);
		} else this.setNativeRange(null);
		this.update(n);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emitter_default.sources.USER, t = this.lastRange, [n, r] = this.getRange();
		if (this.lastRange = n, this.lastNative = r, this.lastRange != null && (this.savedRange = this.lastRange), !isEqual_default(t, this.lastRange)) {
			if (!this.composing && r != null && r.native.collapsed && r.start.node !== this.cursor.textNode) {
				let e = this.cursor.restore();
				e && this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
			}
			let n = [
				emitter_default.events.SELECTION_CHANGE,
				cloneDeep_default(this.lastRange),
				cloneDeep_default(t),
				e
			];
			this.emitter.emit(emitter_default.events.EDITOR_CHANGE, ...n), e !== emitter_default.sources.SILENT && this.emitter.emit(...n);
		}
	}
};
function contains(e, t) {
	try {
		t.parentNode;
	} catch {
		return !1;
	}
	return e.contains(t);
}
var selection_default = Selection, import_Delta$10 = /* @__PURE__ */ __toESM(require_Delta(), 1), ASCII = /^[ -~]*$/, Editor = class {
	constructor(e) {
		this.scroll = e, this.delta = this.getDelta();
	}
	applyDelta(e) {
		this.scroll.update();
		let t = this.scroll.length();
		this.scroll.batchStart();
		let n = normalizeDelta(e), r = new import_Delta$10.default();
		return splitOpLines(n.ops.slice()).reduce((e, n) => {
			let i = import_Delta$10.Op.length(n), a = n.attributes || {}, o = !1, s = !1;
			if (n.insert != null) {
				if (r.retain(i), typeof n.insert == "string") {
					let r = n.insert;
					s = !r.endsWith("\n") && (t <= e || !!this.scroll.descendant(BlockEmbed, e)[0]), this.scroll.insertAt(e, r);
					let [i, o] = this.scroll.line(e), c = merge_default({}, bubbleFormats(i));
					if (i instanceof Block) {
						let [e] = i.descendant(LeafBlot$1, o);
						e && (c = merge_default(c, bubbleFormats(e)));
					}
					a = import_Delta$10.AttributeMap.diff(c, a) || {};
				} else if (typeof n.insert == "object") {
					let r = Object.keys(n.insert)[0];
					if (r == null) return e;
					let i = this.scroll.query(r, Scope.INLINE) != null;
					if (i) (t <= e || this.scroll.descendant(BlockEmbed, e)[0]) && (s = !0);
					else if (e > 0) {
						let [t, n] = this.scroll.descendant(LeafBlot$1, e - 1);
						t instanceof Text$1 ? t.value()[n] !== "\n" && (o = !0) : t instanceof EmbedBlot$1 && t.statics.scope === Scope.INLINE_BLOT && (o = !0);
					}
					if (this.scroll.insertAt(e, r, n.insert[r]), i) {
						let [t] = this.scroll.descendant(LeafBlot$1, e);
						if (t) {
							let e = merge_default({}, bubbleFormats(t));
							a = import_Delta$10.AttributeMap.diff(e, a) || {};
						}
					}
				}
				t += i;
			} else if (r.push(n), n.retain !== null && typeof n.retain == "object") {
				let t = Object.keys(n.retain)[0];
				if (t == null) return e;
				this.scroll.updateEmbedAt(e, t, n.retain[t]);
			}
			Object.keys(a).forEach((t) => {
				this.scroll.formatAt(e, i, t, a[t]);
			});
			let c = o ? 1 : 0, l = s ? 1 : 0;
			return t += c + l, r.retain(c), r.delete(l), e + i + c + l;
		}, 0), r.reduce((e, t) => typeof t.delete == "number" ? (this.scroll.deleteAt(e, t.delete), e) : e + import_Delta$10.Op.length(t), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n);
	}
	deleteText(e, t) {
		return this.scroll.deleteAt(e, t), this.update(new import_Delta$10.default().retain(e).delete(t));
	}
	formatLine(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.scroll.update(), Object.keys(n).forEach((r) => {
			this.scroll.lines(e, Math.max(t, 1)).forEach((e) => {
				e.format(r, n[r]);
			});
		}), this.scroll.optimize();
		let r = new import_Delta$10.default().retain(e).retain(t, cloneDeep_default(n));
		return this.update(r);
	}
	formatText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t, r, n[r]);
		});
		let r = new import_Delta$10.default().retain(e).retain(t, cloneDeep_default(n));
		return this.update(r);
	}
	getContents(e, t) {
		return this.delta.slice(e, e + t);
	}
	getDelta() {
		return this.scroll.lines().reduce((e, t) => e.concat(t.delta()), new import_Delta$10.default());
	}
	getFormat(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = [], r = [];
		t === 0 ? this.scroll.path(e).forEach((e) => {
			let [t] = e;
			t instanceof Block ? n.push(t) : t instanceof LeafBlot$1 && r.push(t);
		}) : (n = this.scroll.lines(e, t), r = this.scroll.descendants(LeafBlot$1, e, t));
		let [i, a] = [n, r].map((e) => {
			let t = e.shift();
			if (t == null) return {};
			let n = bubbleFormats(t);
			for (; Object.keys(n).length > 0;) {
				let t = e.shift();
				if (t == null) return n;
				n = combineFormats(bubbleFormats(t), n);
			}
			return n;
		});
		return {
			...i,
			...a
		};
	}
	getHTML(e, t) {
		let [n, r] = this.scroll.line(e);
		if (n) {
			let i = n.length();
			return n.length() >= r + t && !(r === 0 && t === i) ? convertHTML(n, r, t, !0) : convertHTML(this.scroll, e, t, !0);
		}
		return "";
	}
	getText(e, t) {
		return this.getContents(e, t).filter((e) => typeof e.insert == "string").map((e) => e.insert).join("");
	}
	insertContents(e, t) {
		let n = normalizeDelta(t), r = new import_Delta$10.default().retain(e).concat(n);
		return this.scroll.insertContents(e, n), this.update(r);
	}
	insertEmbed(e, t, n) {
		return this.scroll.insertAt(e, t, n), this.update(new import_Delta$10.default().retain(e).insert({ [t]: n }));
	}
	insertText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(e, t), Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t.length, r, n[r]);
		}), this.update(new import_Delta$10.default().retain(e).insert(t, cloneDeep_default(n)));
	}
	isBlank() {
		if (this.scroll.children.length === 0) return !0;
		if (this.scroll.children.length > 1) return !1;
		let e = this.scroll.children.head;
		if (e?.statics.blotName !== Block.blotName) return !1;
		let t = e;
		return t.children.length > 1 ? !1 : t.children.head instanceof break_default;
	}
	removeFormat(e, t) {
		let n = this.getText(e, t), [r, i] = this.scroll.line(e + t), a = 0, o = new import_Delta$10.default();
		r != null && (a = r.length() - i, o = r.delta().slice(i, i + a - 1).insert("\n"));
		let s = this.getContents(e, t + a).diff(new import_Delta$10.default().insert(n).concat(o)), c = new import_Delta$10.default().retain(e).concat(s);
		return this.applyDelta(c);
	}
	update(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, r = this.delta;
		if (t.length === 1 && t[0].type === "characterData" && t[0].target.data.match(ASCII) && this.scroll.find(t[0].target)) {
			let i = this.scroll.find(t[0].target), a = bubbleFormats(i), o = i.offset(this.scroll), s = t[0].oldValue.replace(cursor_default.CONTENTS, ""), c = new import_Delta$10.default().insert(s), l = new import_Delta$10.default().insert(i.value()), u = n && {
				oldRange: shiftRange$1(n.oldRange, -o),
				newRange: shiftRange$1(n.newRange, -o)
			};
			e = new import_Delta$10.default().retain(o).concat(c.diff(l, u)).reduce((e, t) => t.insert ? e.insert(t.insert, a) : e.push(t), new import_Delta$10.default()), this.delta = r.compose(e);
		} else this.delta = this.getDelta(), (!e || !isEqual_default(r.compose(e), this.delta)) && (e = r.diff(this.delta, n));
		return e;
	}
};
function convertListHTML(e, t, n) {
	if (e.length === 0) {
		let [e] = getListType(n.pop());
		return t <= 0 ? `</li></${e}>` : `</li></${e}>${convertListHTML([], t - 1, n)}`;
	}
	let [{ child: r, offset: i, length: a, indent: o, type: s }, ...c] = e, [l, u] = getListType(s);
	if (o > t) return n.push(s), o === t + 1 ? `<${l}><li${u}>${convertHTML(r, i, a)}${convertListHTML(c, o, n)}` : `<${l}><li>${convertListHTML(e, t + 1, n)}`;
	let d = n[n.length - 1];
	if (o === t && s === d) return `</li><li${u}>${convertHTML(r, i, a)}${convertListHTML(c, o, n)}`;
	let [f] = getListType(n.pop());
	return `</li></${f}>${convertListHTML(e, t - 1, n)}`;
}
function convertHTML(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
	if ("html" in e && typeof e.html == "function") return e.html(t, n);
	if (e instanceof Text$1) return escapeText(e.value().slice(t, t + n)).replaceAll(" ", "&nbsp;");
	if (e instanceof ParentBlot$1) {
		if (e.statics.blotName === "list-container") {
			let r = [];
			return e.children.forEachAt(t, n, (e, t, n) => {
				let i = "formats" in e && typeof e.formats == "function" ? e.formats() : {};
				r.push({
					child: e,
					offset: t,
					length: n,
					indent: i.indent || 0,
					type: i.list
				});
			}), convertListHTML(r, -1, []);
		}
		let i = [];
		if (e.children.forEachAt(t, n, (e, t, n) => {
			i.push(convertHTML(e, t, n));
		}), r || e.statics.blotName === "list") return i.join("");
		let { outerHTML: a, innerHTML: o } = e.domNode, [s, c] = a.split(`>${o}<`);
		return s === "<table" ? `<table style="border: 1px solid #000;">${i.join("")}<${c}` : `${s}>${i.join("")}<${c}`;
	}
	return e.domNode instanceof Element ? e.domNode.outerHTML : "";
}
function combineFormats(e, t) {
	return Object.keys(t).reduce((n, r) => {
		if (e[r] == null) return n;
		let i = t[r];
		return i === e[r] ? n[r] = i : Array.isArray(i) ? i.indexOf(e[r]) < 0 ? n[r] = i.concat([e[r]]) : n[r] = i : n[r] = [i, e[r]], n;
	}, {});
}
function getListType(e) {
	let t = e === "ordered" ? "ol" : "ul";
	switch (e) {
		case "checked": return [t, " data-list=\"checked\""];
		case "unchecked": return [t, " data-list=\"unchecked\""];
		default: return [t, ""];
	}
}
function normalizeDelta(e) {
	return e.reduce((e, t) => {
		if (typeof t.insert == "string") {
			let n = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
			return e.insert(n, t.attributes);
		}
		return e.push(t);
	}, new import_Delta$10.default());
}
function shiftRange$1(e, t) {
	let { index: n, length: r } = e;
	return new Range(n + t, r);
}
function splitOpLines(e) {
	let t = [];
	return e.forEach((e) => {
		typeof e.insert == "string" ? e.insert.split("\n").forEach((n, r) => {
			r && t.push({
				insert: "\n",
				attributes: e.attributes
			}), n && t.push({
				insert: n,
				attributes: e.attributes
			});
		}) : t.push(e);
	}), t;
}
var editor_default = Editor, module_default = class {
	static DEFAULTS = {};
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.quill = e, this.options = t;
	}
}, GUARD_TEXT = "﻿", embed_default = class extends EmbedBlot$1 {
	constructor(e, t) {
		super(e, t), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((e) => {
			this.contentNode.appendChild(e);
		}), this.leftGuard = document.createTextNode(GUARD_TEXT), this.rightGuard = document.createTextNode(GUARD_TEXT), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
	}
	index(e, t) {
		return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : super.index(e, t);
	}
	restore(e) {
		let t = null, n, r = e.data.split(GUARD_TEXT).join("");
		if (e === this.leftGuard) if (this.prev instanceof Text$1) {
			let e = this.prev.length();
			this.prev.insertAt(e, r), t = {
				startNode: this.prev.domNode,
				startOffset: e + r.length
			};
		} else n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this), t = {
			startNode: n,
			startOffset: r.length
		};
		else e === this.rightGuard && (this.next instanceof Text$1 ? (this.next.insertAt(0, r), t = {
			startNode: this.next.domNode,
			startOffset: r.length
		}) : (n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this.next), t = {
			startNode: n,
			startOffset: r.length
		}));
		return e.data = GUARD_TEXT, t;
	}
	update(e, t) {
		e.forEach((e) => {
			if (e.type === "characterData" && (e.target === this.leftGuard || e.target === this.rightGuard)) {
				let n = this.restore(e.target);
				n && (t.range = n);
			}
		});
	}
}, composition_default = class {
	isComposing = !1;
	constructor(e, t) {
		this.scroll = e, this.emitter = t, this.setupListeners();
	}
	setupListeners() {
		this.scroll.domNode.addEventListener("compositionstart", (e) => {
			this.isComposing || this.handleCompositionStart(e);
		}), this.scroll.domNode.addEventListener("compositionend", (e) => {
			this.isComposing && queueMicrotask(() => {
				this.handleCompositionEnd(e);
			});
		});
	}
	handleCompositionStart(e) {
		let t = e.target instanceof Node ? this.scroll.find(e.target, !0) : null;
		t && !(t instanceof embed_default) && (this.emitter.emit(emitter_default.events.COMPOSITION_BEFORE_START, e), this.scroll.batchStart(), this.emitter.emit(emitter_default.events.COMPOSITION_START, e), this.isComposing = !0);
	}
	handleCompositionEnd(e) {
		this.emitter.emit(emitter_default.events.COMPOSITION_BEFORE_END, e), this.scroll.batchEnd(), this.emitter.emit(emitter_default.events.COMPOSITION_END, e), this.isComposing = !1;
	}
}, theme_default = class e {
	static DEFAULTS = { modules: {} };
	static themes = { default: e };
	modules = {};
	constructor(e, t) {
		this.quill = e, this.options = t;
	}
	init() {
		Object.keys(this.options.modules).forEach((e) => {
			this.modules[e] ?? this.addModule(e);
		});
	}
	addModule(e) {
		let t = this.quill.constructor.import(`modules/${e}`);
		return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e];
	}
}, getParentElement = (e) => e.parentElement || e.getRootNode().host || null, getElementRect = (e) => {
	let t = e.getBoundingClientRect(), n = "offsetWidth" in e && Math.abs(t.width) / e.offsetWidth || 1, r = "offsetHeight" in e && Math.abs(t.height) / e.offsetHeight || 1;
	return {
		top: t.top,
		right: t.left + e.clientWidth * n,
		bottom: t.top + e.clientHeight * r,
		left: t.left
	};
}, paddingValueToInt = (e) => {
	let t = parseInt(e, 10);
	return Number.isNaN(t) ? 0 : t;
}, getScrollDistance = (e, t, n, r, i, a) => e < n && t > r ? 0 : e < n ? -(n - e + i) : t > r ? t - e > r - n ? e + i - n : t - r + a : 0, scrollRectIntoView_default = (e, t) => {
	let n = e.ownerDocument, r = t, i = e;
	for (; i;) {
		let e = i === n.body, t = e ? {
			top: 0,
			right: window.visualViewport?.width ?? n.documentElement.clientWidth,
			bottom: window.visualViewport?.height ?? n.documentElement.clientHeight,
			left: 0
		} : getElementRect(i), a = getComputedStyle(i), o = getScrollDistance(r.left, r.right, t.left, t.right, paddingValueToInt(a.scrollPaddingLeft), paddingValueToInt(a.scrollPaddingRight)), s = getScrollDistance(r.top, r.bottom, t.top, t.bottom, paddingValueToInt(a.scrollPaddingTop), paddingValueToInt(a.scrollPaddingBottom));
		if (o || s) if (e) n.defaultView?.scrollBy(o, s);
		else {
			let { scrollLeft: e, scrollTop: t } = i;
			s && (i.scrollTop += s), o && (i.scrollLeft += o);
			let n = i.scrollLeft - e, a = i.scrollTop - t;
			r = {
				left: r.left - n,
				top: r.top - a,
				right: r.right - n,
				bottom: r.bottom - a
			};
		}
		i = e || a.position === "fixed" ? null : getParentElement(i);
	}
}, MAX_REGISTER_ITERATIONS = 100, CORE_FORMATS = [
	"block",
	"break",
	"cursor",
	"inline",
	"scroll",
	"text"
], createRegistryWithFormats_default = (e, t, n) => {
	let r = new Registry();
	return CORE_FORMATS.forEach((e) => {
		let n = t.query(e);
		n && r.register(n);
	}), e.forEach((e) => {
		let i = t.query(e);
		i || n.error(`Cannot register "${e}" specified in "formats" config. Are you sure it was registered?`);
		let a = 0;
		for (; i;) if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, a += 1, a > MAX_REGISTER_ITERATIONS) {
			n.error(`Cycle detected in registering blot requiredContainer: "${e}"`);
			break;
		}
	}), r;
}, import_Delta$9 = /* @__PURE__ */ __toESM(require_Delta(), 1), debug$3 = logger_default("quill"), globalRegistry = new Registry();
ParentBlot$1.uiClass = "ql-ui";
var Quill = class e {
	static DEFAULTS = {
		bounds: null,
		modules: {
			clipboard: !0,
			keyboard: !0,
			history: !0,
			uploader: !0
		},
		placeholder: "",
		readOnly: !1,
		registry: globalRegistry,
		theme: "default"
	};
	static events = emitter_default.events;
	static sources = emitter_default.sources;
	static version = "2.0.3";
	static imports = {
		delta: import_Delta$9.default,
		parchment: parchment_exports,
		"core/module": module_default,
		"core/theme": theme_default
	};
	static debug(e) {
		e === !0 && (e = "log"), logger_default.level(e);
	}
	static find(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		return instances_default.get(e) || globalRegistry.find(e, t);
	}
	static import(e) {
		return this.imports[e] ?? debug$3.error(`Cannot import ${e}. Are you sure it was registered?`), this.imports[e];
	}
	static register() {
		if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = !!(!(arguments.length <= 1) && arguments[1]), n = "attrName" in e ? e.attrName : e.blotName;
			typeof n == "string" ? this.register(`formats/${n}`, e, t) : Object.keys(e).forEach((n) => {
				this.register(n, e[n], t);
			});
		} else {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = !!(!(arguments.length <= 2) && arguments[2]);
			this.imports[e] != null && !n && debug$3.warn(`Overwriting ${e} with`, t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && t && typeof t != "boolean" && t.blotName !== "abstract" && globalRegistry.register(t), typeof t.register == "function" && t.register(globalRegistry);
		}
	}
	constructor(t) {
		if (this.options = expandConfig(t, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}), this.container = this.options.container, this.container == null) {
			debug$3.error("Invalid Quill container", t);
			return;
		}
		this.options.debug && e.debug(this.options.debug);
		let n = this.container.innerHTML.trim();
		this.container.classList.add("ql-container"), this.container.innerHTML = "", instances_default.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new emitter_default();
		let r = ScrollBlot$1.blotName, i = this.options.registry.query(r);
		if (!i || !("blotName" in i)) throw Error(`Cannot initialize Quill without "${r}" blot`);
		if (this.scroll = new i(this.options.registry, this.root, { emitter: this.emitter }), this.editor = new editor_default(this.scroll), this.selection = new selection_default(this.scroll, this.emitter), this.composition = new composition_default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(emitter_default.events.EDITOR_CHANGE, (e) => {
			e === emitter_default.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
		}), this.emitter.on(emitter_default.events.SCROLL_UPDATE, (e, t) => {
			let n = this.selection.lastRange, [r] = this.selection.getRange(), i = n && r ? {
				oldRange: n,
				newRange: r
			} : void 0;
			modify.call(this, () => this.editor.update(null, t, i), e);
		}), this.emitter.on(emitter_default.events.SCROLL_EMBED_UPDATE, (t, n) => {
			let r = this.selection.lastRange, [i] = this.selection.getRange(), a = r && i ? {
				oldRange: r,
				newRange: i
			} : void 0;
			modify.call(this, () => {
				let e = new import_Delta$9.default().retain(t.offset(this)).retain({ [t.statics.blotName]: n });
				return this.editor.update(e, [], a);
			}, e.sources.USER);
		}), n) {
			let e = this.clipboard.convert({
				html: `${n}<p><br></p>`,
				text: "\n"
			});
			this.setContents(e);
		}
		this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
	}
	addContainer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (typeof e == "string") {
			let t = e;
			e = document.createElement("div"), e.classList.add(t);
		}
		return this.container.insertBefore(e, t), e;
	}
	blur() {
		this.selection.setRange(null);
	}
	deleteText(e, t, n) {
		return [e, t, , n] = overload(e, t, n), modify.call(this, () => this.editor.deleteText(e, t), n, e, -1 * t);
	}
	disable() {
		this.enable(!1);
	}
	editReadOnly(e) {
		this.allowReadOnlyEdits = !0;
		let t = e();
		return this.allowReadOnlyEdits = !1, t;
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e);
	}
	focus() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.selection.focus(), e.preventScroll || this.scrollSelectionIntoView();
	}
	format(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : emitter_default.sources.API;
		return modify.call(this, () => {
			let n = this.getSelection(!0), r = new import_Delta$9.default();
			if (n == null) return r;
			if (this.scroll.query(e, Scope.BLOCK)) r = this.editor.formatLine(n.index, n.length, { [e]: t });
			else if (n.length === 0) return this.selection.format(e, t), r;
			else r = this.editor.formatText(n.index, n.length, { [e]: t });
			return this.setSelection(n, emitter_default.sources.SILENT), r;
		}, n);
	}
	formatLine(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = overload(e, t, n, r, i), modify.call(this, () => this.editor.formatLine(e, t, a), i, e, 0);
	}
	formatText(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = overload(e, t, n, r, i), modify.call(this, () => this.editor.formatText(e, t, a), i, e, 0);
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = null;
		if (n = typeof e == "number" ? this.selection.getBounds(e, t) : this.selection.getBounds(e.index, e.length), !n) return null;
		let r = this.container.getBoundingClientRect();
		return {
			bottom: n.bottom - r.top,
			height: n.height,
			left: n.left - r.left,
			right: n.right - r.left,
			top: n.top - r.top,
			width: n.width
		};
	}
	getContents() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - e;
		return [e, t] = overload(e, t), this.editor.getContents(e, t);
	}
	getFormat() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		return typeof e == "number" ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
	}
	getIndex(e) {
		return e.offset(this.scroll);
	}
	getLength() {
		return this.scroll.length();
	}
	getLeaf(e) {
		return this.scroll.leaf(e);
	}
	getLine(e) {
		return this.scroll.line(e);
	}
	getLines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
		return typeof e == "number" ? this.scroll.lines(e, t) : this.scroll.lines(e.index, e.length);
	}
	getModule(e) {
		return this.theme.modules[e];
	}
	getSelection() {
		return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
	}
	getSemanticHTML() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = overload(e, t), this.editor.getHTML(e, t);
	}
	getText() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = overload(e, t), this.editor.getText(e, t);
	}
	hasFocus() {
		return this.selection.hasFocus();
	}
	insertEmbed(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e.sources.API;
		return modify.call(this, () => this.editor.insertEmbed(t, n, r), i, t);
	}
	insertText(e, t, n, r, i) {
		let a;
		return [e, , a, i] = overload(e, 0, n, r, i), modify.call(this, () => this.editor.insertText(e, t, a), i, e, t.length);
	}
	isEnabled() {
		return this.scroll.isEnabled();
	}
	off() {
		return this.emitter.off(...arguments);
	}
	on() {
		return this.emitter.on(...arguments);
	}
	once() {
		return this.emitter.once(...arguments);
	}
	removeFormat(e, t, n) {
		return [e, t, , n] = overload(e, t, n), modify.call(this, () => this.editor.removeFormat(e, t), n, e);
	}
	scrollRectIntoView(e) {
		scrollRectIntoView_default(this.root, e);
	}
	scrollIntoView() {
		console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
	}
	scrollSelectionIntoView() {
		let e = this.selection.lastRange, t = e && this.selection.getBounds(e.index, e.length);
		t && this.scrollRectIntoView(t);
	}
	setContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API;
		return modify.call(this, () => {
			e = new import_Delta$9.default(e);
			let t = this.getLength(), n = this.editor.deleteText(0, t), r = this.editor.insertContents(0, e), i = this.editor.deleteText(this.getLength() - 1, 1);
			return n.compose(r).compose(i);
		}, t);
	}
	setSelection(t, n, r) {
		t == null ? this.selection.setRange(null, n || e.sources.API) : ([t, n, , r] = overload(t, n, r), this.selection.setRange(new Range(Math.max(0, t), n), r), r !== emitter_default.sources.SILENT && this.scrollSelectionIntoView());
	}
	setText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API, n = new import_Delta$9.default().insert(e);
		return this.setContents(n, t);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emitter_default.sources.USER, t = this.scroll.update(e);
		return this.selection.update(e), t;
	}
	updateContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API;
		return modify.call(this, () => (e = new import_Delta$9.default(e), this.editor.applyDelta(e)), t, !0);
	}
};
function resolveSelector(e) {
	return typeof e == "string" ? document.querySelector(e) : e;
}
function expandModuleConfig(e) {
	return Object.entries(e ?? {}).reduce((e, t) => {
		let [n, r] = t;
		return {
			...e,
			[n]: r === !0 ? {} : r
		};
	}, {});
}
function omitUndefinedValuesFromOptions(e) {
	return Object.fromEntries(Object.entries(e).filter((e) => e[1] !== void 0));
}
function expandConfig(e, t) {
	let n = resolveSelector(e);
	if (!n) throw Error("Invalid Quill container");
	let r = !t.theme || t.theme === Quill.DEFAULTS.theme ? theme_default : Quill.import(`themes/${t.theme}`);
	if (!r) throw Error(`Invalid theme ${t.theme}. Did you register it?`);
	let { modules: i, ...a } = Quill.DEFAULTS, { modules: o, ...s } = r.DEFAULTS, c = expandModuleConfig(t.modules);
	c != null && c.toolbar && c.toolbar.constructor !== Object && (c = {
		...c,
		toolbar: { container: c.toolbar }
	});
	let l = merge_default({}, expandModuleConfig(i), expandModuleConfig(o), c), u = {
		...a,
		...omitUndefinedValuesFromOptions(s),
		...omitUndefinedValuesFromOptions(t)
	}, d = t.registry;
	return d ? t.formats && debug$3.warn("Ignoring \"formats\" option because \"registry\" is specified") : d = t.formats ? createRegistryWithFormats_default(t.formats, u.registry, debug$3) : u.registry, {
		...u,
		registry: d,
		container: n,
		theme: r,
		modules: Object.entries(l).reduce((e, t) => {
			let [n, r] = t;
			if (!r) return e;
			let i = Quill.import(`modules/${n}`);
			return i == null ? (debug$3.error(`Cannot load ${n} module. Are you sure you registered it?`), e) : {
				...e,
				[n]: merge_default({}, i.DEFAULTS || {}, r)
			};
		}, {}),
		bounds: resolveSelector(u.bounds)
	};
}
function modify(e, t, n, r) {
	if (!this.isEnabled() && t === emitter_default.sources.USER && !this.allowReadOnlyEdits) return new import_Delta$9.default();
	let i = n == null ? null : this.getSelection(), a = this.editor.delta, o = e();
	if (i != null && (n === !0 && (n = i.index), r == null ? i = shiftRange(i, o, t) : r !== 0 && (i = shiftRange(i, n, r, t)), this.setSelection(i, emitter_default.sources.SILENT)), o.length() > 0) {
		let e = [
			emitter_default.events.TEXT_CHANGE,
			o,
			a,
			t
		];
		this.emitter.emit(emitter_default.events.EDITOR_CHANGE, ...e), t !== emitter_default.sources.SILENT && this.emitter.emit(...e);
	}
	return o;
}
function overload(e, t, n, r, i) {
	let a = {};
	return typeof e.index == "number" && typeof e.length == "number" ? typeof t == "number" ? (t = e.length, e = e.index) : (i = r, r = n, n = t, t = e.length, e = e.index) : typeof t != "number" && (i = r, r = n, n = t, t = 0), typeof n == "object" ? (a = n, i = r) : typeof n == "string" && (r == null ? i = n : a[n] = r), i ||= emitter_default.sources.API, [
		e,
		t,
		a,
		i
	];
}
function shiftRange(e, t, n, r) {
	let i = typeof n == "number" ? n : 0;
	if (e == null) return null;
	let a, o;
	return t && typeof t.transformPosition == "function" ? [a, o] = [e.index, e.index + e.length].map((e) => t.transformPosition(e, r !== emitter_default.sources.USER)) : [a, o] = [e.index, e.index + e.length].map((e) => e < t || e === t && r === emitter_default.sources.USER ? e : i >= 0 ? e + i : Math.max(t, e + i)), new Range(a, o - a);
}
var container_default = class extends ContainerBlot$1 {}, import_Delta$8 = /* @__PURE__ */ __toESM(require_Delta(), 1);
function isLine$1(e) {
	return e instanceof Block || e instanceof BlockEmbed;
}
function isUpdatable(e) {
	return typeof e.updateContent == "function";
}
var Scroll = class extends ScrollBlot$1 {
	static blotName = "scroll";
	static className = "ql-editor";
	static tagName = "DIV";
	static defaultChild = Block;
	static allowedChildren = [
		Block,
		BlockEmbed,
		container_default
	];
	constructor(e, t, n) {
		let { emitter: r } = n;
		super(e, t), this.emitter = r, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (e) => this.handleDragStart(e));
	}
	batchStart() {
		Array.isArray(this.batch) || (this.batch = []);
	}
	batchEnd() {
		if (!this.batch) return;
		let e = this.batch;
		this.batch = !1, this.update(e);
	}
	emitMount(e) {
		this.emitter.emit(emitter_default.events.SCROLL_BLOT_MOUNT, e);
	}
	emitUnmount(e) {
		this.emitter.emit(emitter_default.events.SCROLL_BLOT_UNMOUNT, e);
	}
	emitEmbedUpdate(e, t) {
		this.emitter.emit(emitter_default.events.SCROLL_EMBED_UPDATE, e, t);
	}
	deleteAt(e, t) {
		let [n, r] = this.line(e), [i] = this.line(e + t);
		if (super.deleteAt(e, t), i != null && n !== i && r > 0) {
			if (n instanceof BlockEmbed || i instanceof BlockEmbed) {
				this.optimize();
				return;
			}
			let e = i.children.head instanceof break_default ? null : i.children.head;
			n.moveChildren(i, e), n.remove();
		}
		this.optimize();
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.domNode.setAttribute("contenteditable", e ? "true" : "false");
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.optimize();
	}
	insertAt(e, t, n) {
		if (e >= this.length()) if (n == null || this.scroll.query(t, Scope.BLOCK) == null) {
			let e = this.scroll.create(this.statics.defaultChild.blotName);
			this.appendChild(e), n == null && t.endsWith("\n") ? e.insertAt(0, t.slice(0, -1), n) : e.insertAt(0, t, n);
		} else {
			let e = this.scroll.create(t, n);
			this.appendChild(e);
		}
		else super.insertAt(e, t, n);
		this.optimize();
	}
	insertBefore(e, t) {
		if (e.statics.scope === Scope.INLINE_BLOT) {
			let n = this.scroll.create(this.statics.defaultChild.blotName);
			n.appendChild(e), super.insertBefore(n, t);
		} else super.insertBefore(e, t);
	}
	insertContents(e, t) {
		let n = this.deltaToRenderBlocks(t.concat(new import_Delta$8.default().insert("\n"))), r = n.pop();
		if (r == null) return;
		this.batchStart();
		let i = n.shift();
		if (i) {
			let t = i.type === "block" && (i.delta.length() === 0 || !this.descendant(BlockEmbed, e)[0] && e < this.length()), n = i.type === "block" ? i.delta : new import_Delta$8.default().insert({ [i.key]: i.value });
			insertInlineContents(this, e, n);
			let r = i.type === "block" ? 1 : 0, a = e + n.length() + r;
			t && this.insertAt(a - 1, "\n");
			let o = bubbleFormats(this.line(e)[0]), s = import_Delta$8.AttributeMap.diff(o, i.attributes) || {};
			Object.keys(s).forEach((e) => {
				this.formatAt(a - 1, 1, e, s[e]);
			}), e = a;
		}
		let [a, o] = this.children.find(e);
		if (n.length && (a && (a = a.split(o), o = 0), n.forEach((e) => {
			if (e.type === "block") insertInlineContents(this.createBlock(e.attributes, a || void 0), 0, e.delta);
			else {
				let t = this.create(e.key, e.value);
				this.insertBefore(t, a || void 0), Object.keys(e.attributes).forEach((n) => {
					t.format(n, e.attributes[n]);
				});
			}
		})), r.type === "block" && r.delta.length()) {
			let e = a ? a.offset(a.scroll) + o : this.length();
			insertInlineContents(this, e, r.delta);
		}
		this.batchEnd(), this.optimize();
	}
	isEnabled() {
		return this.domNode.getAttribute("contenteditable") === "true";
	}
	leaf(e) {
		let t = this.path(e).pop();
		if (!t) return [null, -1];
		let [n, r] = t;
		return n instanceof LeafBlot$1 ? [n, r] : [null, -1];
	}
	line(e) {
		return e === this.length() ? this.line(e - 1) : this.descendant(isLine$1, e);
	}
	lines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, n = (e, t, r) => {
			let i = [], a = r;
			return e.children.forEachAt(t, r, (e, t, r) => {
				isLine$1(e) ? i.push(e) : e instanceof ContainerBlot$1 && (i = i.concat(n(e, t, a))), a -= r;
			}), i;
		};
		return n(this, e, t);
	}
	optimize() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.batch || (super.optimize(e, t), e.length > 0 && this.emitter.emit(emitter_default.events.SCROLL_OPTIMIZE, e, t));
	}
	path(e) {
		return super.path(e).slice(1);
	}
	remove() {}
	update(e) {
		if (this.batch) {
			Array.isArray(e) && (this.batch = this.batch.concat(e));
			return;
		}
		let t = emitter_default.sources.USER;
		typeof e == "string" && (t = e), Array.isArray(e) || (e = this.observer.takeRecords()), e = e.filter((e) => {
			let { target: t } = e, n = this.find(t, !0);
			return n && !isUpdatable(n);
		}), e.length > 0 && this.emitter.emit(emitter_default.events.SCROLL_BEFORE_UPDATE, t, e), super.update(e.concat([])), e.length > 0 && this.emitter.emit(emitter_default.events.SCROLL_UPDATE, t, e);
	}
	updateEmbedAt(e, t, n) {
		let [r] = this.descendant((e) => e instanceof BlockEmbed, e);
		r && r.statics.blotName === t && isUpdatable(r) && r.updateContent(n);
	}
	handleDragStart(e) {
		e.preventDefault();
	}
	deltaToRenderBlocks(e) {
		let t = [], n = new import_Delta$8.default();
		return e.forEach((e) => {
			let r = e?.insert;
			if (r) if (typeof r == "string") {
				let i = r.split("\n");
				i.slice(0, -1).forEach((r) => {
					n.insert(r, e.attributes), t.push({
						type: "block",
						delta: n,
						attributes: e.attributes ?? {}
					}), n = new import_Delta$8.default();
				});
				let a = i[i.length - 1];
				a && n.insert(a, e.attributes);
			} else {
				let i = Object.keys(r)[0];
				if (!i) return;
				this.query(i, Scope.INLINE) ? n.push(e) : (n.length() && t.push({
					type: "block",
					delta: n,
					attributes: {}
				}), n = new import_Delta$8.default(), t.push({
					type: "blockEmbed",
					key: i,
					value: r[i],
					attributes: e.attributes ?? {}
				}));
			}
		}), n.length() && t.push({
			type: "block",
			delta: n,
			attributes: {}
		}), t;
	}
	createBlock(e, t) {
		let n, r = {};
		Object.entries(e).forEach((e) => {
			let [t, i] = e;
			this.query(t, Scope.BLOCK & Scope.BLOT) == null ? r[t] = i : n = t;
		});
		let i = this.create(n || this.statics.defaultChild.blotName, n ? e[n] : void 0);
		this.insertBefore(i, t || void 0);
		let a = i.length();
		return Object.entries(r).forEach((e) => {
			let [t, n] = e;
			i.formatAt(0, a, t, n);
		}), i;
	}
};
function insertInlineContents(e, t, n) {
	n.reduce((t, n) => {
		let r = import_Delta$8.Op.length(n), i = n.attributes || {};
		if (n.insert != null) {
			if (typeof n.insert == "string") {
				let r = n.insert;
				e.insertAt(t, r);
				let [a] = e.descendant(LeafBlot$1, t), o = bubbleFormats(a);
				i = import_Delta$8.AttributeMap.diff(o, i) || {};
			} else if (typeof n.insert == "object") {
				let r = Object.keys(n.insert)[0];
				if (r == null) return t;
				if (e.insertAt(t, r, n.insert[r]), e.scroll.query(r, Scope.INLINE) != null) {
					let [n] = e.descendant(LeafBlot$1, t), r = bubbleFormats(n);
					i = import_Delta$8.AttributeMap.diff(r, i) || {};
				}
			}
		}
		return Object.keys(i).forEach((n) => {
			e.formatAt(t, r, n, i[n]);
		}), t + r;
	}, t);
}
var scroll_default = Scroll, config$2 = {
	scope: Scope.BLOCK,
	whitelist: [
		"right",
		"center",
		"justify"
	]
}, AlignAttribute = new Attributor("align", "align", config$2), AlignClass = new ClassAttributor$1("align", "ql-align", config$2), AlignStyle = new StyleAttributor$1("align", "text-align", config$2), ColorAttributor = class extends StyleAttributor$1 {
	value(e) {
		let t = super.value(e);
		return t.startsWith("rgb(") ? (t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${t.split(",").map((e) => `00${parseInt(e, 10).toString(16)}`.slice(-2)).join("")}`) : t;
	}
}, ColorClass = new ClassAttributor$1("color", "ql-color", { scope: Scope.INLINE }), ColorStyle = new ColorAttributor("color", "color", { scope: Scope.INLINE }), BackgroundClass = new ClassAttributor$1("background", "ql-bg", { scope: Scope.INLINE }), BackgroundStyle = new ColorAttributor("background", "background-color", { scope: Scope.INLINE }), CodeBlockContainer = class extends container_default {
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("spellcheck", "false"), t;
	}
	code(e, t) {
		return this.children.map((e) => e.length() <= 1 ? "" : e.domNode.innerText).join("\n").slice(e, e + t);
	}
	html(e, t) {
		return `<pre>\n${escapeText(this.code(e, t))}\n</pre>`;
	}
}, CodeBlock = class extends Block {
	static TAB = "  ";
	static register() {
		Quill.register(CodeBlockContainer);
	}
}, Code = class extends inline_default {};
Code.blotName = "code", Code.tagName = "CODE", CodeBlock.blotName = "code-block", CodeBlock.className = "ql-code-block", CodeBlock.tagName = "DIV", CodeBlockContainer.blotName = "code-block-container", CodeBlockContainer.className = "ql-code-block-container", CodeBlockContainer.tagName = "DIV", CodeBlockContainer.allowedChildren = [CodeBlock], CodeBlock.allowedChildren = [
	Text$1,
	break_default,
	cursor_default
], CodeBlock.requiredContainer = CodeBlockContainer;
var config$1 = {
	scope: Scope.BLOCK,
	whitelist: ["rtl"]
}, DirectionAttribute = new Attributor("direction", "dir", config$1), DirectionClass = new ClassAttributor$1("direction", "ql-direction", config$1), DirectionStyle = new StyleAttributor$1("direction", "direction", config$1), config = {
	scope: Scope.INLINE,
	whitelist: ["serif", "monospace"]
}, FontClass = new ClassAttributor$1("font", "ql-font", config), FontStyle = new class extends StyleAttributor$1 {
	value(e) {
		return super.value(e).replace(/["']/g, "");
	}
}("font", "font-family", config), SizeClass = new ClassAttributor$1("size", "ql-size", {
	scope: Scope.INLINE,
	whitelist: [
		"small",
		"large",
		"huge"
	]
}), SizeStyle = new StyleAttributor$1("size", "font-size", {
	scope: Scope.INLINE,
	whitelist: [
		"10px",
		"18px",
		"32px"
	]
}), import_Delta$7 = /* @__PURE__ */ __toESM(require_Delta(), 1), debug$2 = logger_default("quill:keyboard"), SHORTKEY = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", Keyboard = class e extends module_default {
	static match(e, t) {
		return [
			"altKey",
			"ctrlKey",
			"metaKey",
			"shiftKey"
		].some((n) => !!t[n] !== e[n] && t[n] !== null) ? !1 : t.key === e.key || t.key === e.which;
	}
	constructor(e, t) {
		super(e, t), this.bindings = {}, Object.keys(this.options.bindings).forEach((e) => {
			this.options.bindings[e] && this.addBinding(this.options.bindings[e]);
		}), this.addBinding({
			key: "Enter",
			shiftKey: null
		}, this.handleEnter), this.addBinding({
			key: "Enter",
			metaKey: null,
			ctrlKey: null,
			altKey: null
		}, () => {}), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({ key: "Backspace" }, { collapsed: !0 }, this.handleBackspace), this.addBinding({ key: "Delete" }, { collapsed: !0 }, this.handleDelete)) : (this.addBinding({ key: "Backspace" }, {
			collapsed: !0,
			prefix: /^.?$/
		}, this.handleBackspace), this.addBinding({ key: "Delete" }, {
			collapsed: !0,
			suffix: /^.?$/
		}, this.handleDelete)), this.addBinding({ key: "Backspace" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({ key: "Delete" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({
			key: "Backspace",
			altKey: null,
			ctrlKey: null,
			metaKey: null,
			shiftKey: null
		}, {
			collapsed: !0,
			offset: 0
		}, this.handleBackspace), this.listen();
	}
	addBinding(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = normalize$2(e);
		if (r == null) {
			debug$2.warn("Attempted to add invalid keyboard binding", r);
			return;
		}
		typeof t == "function" && (t = { handler: t }), typeof n == "function" && (n = { handler: n }), (Array.isArray(r.key) ? r.key : [r.key]).forEach((e) => {
			let i = {
				...r,
				key: e,
				...t,
				...n
			};
			this.bindings[i.key] = this.bindings[i.key] || [], this.bindings[i.key].push(i);
		});
	}
	listen() {
		this.quill.root.addEventListener("keydown", (t) => {
			if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
			let n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((n) => e.match(t, n));
			if (n.length === 0) return;
			let r = Quill.find(t.target, !0);
			if (r && r.scroll !== this.quill.scroll) return;
			let i = this.quill.getSelection();
			if (i == null || !this.quill.hasFocus()) return;
			let [a, o] = this.quill.getLine(i.index), [s, c] = this.quill.getLeaf(i.index), [l, u] = i.length === 0 ? [s, c] : this.quill.getLeaf(i.index + i.length), d = s instanceof TextBlot$1 ? s.value().slice(0, c) : "", f = l instanceof TextBlot$1 ? l.value().slice(u) : "", p = {
				collapsed: i.length === 0,
				empty: i.length === 0 && a.length() <= 1,
				format: this.quill.getFormat(i),
				line: a,
				offset: o,
				prefix: d,
				suffix: f,
				event: t
			};
			n.some((e) => {
				if (e.collapsed != null && e.collapsed !== p.collapsed || e.empty != null && e.empty !== p.empty || e.offset != null && e.offset !== p.offset) return !1;
				if (Array.isArray(e.format)) {
					if (e.format.every((e) => p.format[e] == null)) return !1;
				} else if (typeof e.format == "object" && !Object.keys(e.format).every((t) => e.format[t] === !0 ? p.format[t] != null : e.format[t] === !1 ? p.format[t] == null : isEqual_default(e.format[t], p.format[t]))) return !1;
				return e.prefix != null && !e.prefix.test(p.prefix) || e.suffix != null && !e.suffix.test(p.suffix) ? !1 : e.handler.call(this, i, p, e) !== !0;
			}) && t.preventDefault();
		});
	}
	handleBackspace(e, t) {
		let n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
		if (e.index === 0 || this.quill.getLength() <= 1) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new import_Delta$7.default().retain(e.index - n).delete(n);
		if (t.offset === 0) {
			let [t] = this.quill.getLine(e.index - 1);
			if (t && !(t.statics.blotName === "block" && t.length() <= 1)) {
				let t = i.formats(), n = this.quill.getFormat(e.index - 1, 1);
				if (r = import_Delta$7.AttributeMap.diff(t, n) || {}, Object.keys(r).length > 0) {
					let t = new import_Delta$7.default().retain(e.index + i.length() - 2).retain(1, r);
					a = a.compose(t);
				}
			}
		}
		this.quill.updateContents(a, Quill.sources.USER), this.quill.focus();
	}
	handleDelete(e, t) {
		let n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
		if (e.index >= this.quill.getLength() - n) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new import_Delta$7.default().retain(e.index).delete(n);
		if (t.offset >= i.length() - 1) {
			let [t] = this.quill.getLine(e.index + 1);
			if (t) {
				let n = i.formats(), o = this.quill.getFormat(e.index, 1);
				r = import_Delta$7.AttributeMap.diff(n, o) || {}, Object.keys(r).length > 0 && (a = a.retain(t.length() - 1).retain(1, r));
			}
		}
		this.quill.updateContents(a, Quill.sources.USER), this.quill.focus();
	}
	handleDeleteRange(e) {
		deleteRange({
			range: e,
			quill: this.quill
		}), this.quill.focus();
	}
	handleEnter(e, t) {
		let n = Object.keys(t.format).reduce((e, n) => (this.quill.scroll.query(n, Scope.BLOCK) && !Array.isArray(t.format[n]) && (e[n] = t.format[n]), e), {}), r = new import_Delta$7.default().retain(e.index).delete(e.length).insert("\n", n);
		this.quill.updateContents(r, Quill.sources.USER), this.quill.setSelection(e.index + 1, Quill.sources.SILENT), this.quill.focus();
	}
};
Keyboard.DEFAULTS = { bindings: {
	bold: makeFormatHandler("bold"),
	italic: makeFormatHandler("italic"),
	underline: makeFormatHandler("underline"),
	indent: {
		key: "Tab",
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", Quill.sources.USER), !1);
		}
	},
	outdent: {
		key: "Tab",
		shiftKey: !0,
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", Quill.sources.USER), !1);
		}
	},
	"outdent backspace": {
		key: "Backspace",
		collapsed: !0,
		shiftKey: null,
		metaKey: null,
		ctrlKey: null,
		altKey: null,
		format: ["indent", "list"],
		offset: 0,
		handler(e, t) {
			t.format.indent == null ? t.format.list != null && this.quill.format("list", !1, Quill.sources.USER) : this.quill.format("indent", "-1", Quill.sources.USER);
		}
	},
	"indent code-block": makeCodeBlockHandler(!0),
	"outdent code-block": makeCodeBlockHandler(!1),
	"remove tab": {
		key: "Tab",
		shiftKey: !0,
		collapsed: !0,
		prefix: /\t$/,
		handler(e) {
			this.quill.deleteText(e.index - 1, 1, Quill.sources.USER);
		}
	},
	tab: {
		key: "Tab",
		handler(e, t) {
			if (t.format.table) return !0;
			this.quill.history.cutoff();
			let n = new import_Delta$7.default().retain(e.index).delete(e.length).insert("	");
			return this.quill.updateContents(n, Quill.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index + 1, Quill.sources.SILENT), !1;
		}
	},
	"blockquote empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["blockquote"],
		empty: !0,
		handler() {
			this.quill.format("blockquote", !1, Quill.sources.USER);
		}
	},
	"list empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["list"],
		empty: !0,
		handler(e, t) {
			let n = { list: !1 };
			t.format.indent && (n.indent = !1), this.quill.formatLine(e.index, e.length, n, Quill.sources.USER);
		}
	},
	"checklist enter": {
		key: "Enter",
		collapsed: !0,
		format: { list: "checked" },
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = {
				...t.formats(),
				list: "checked"
			}, i = new import_Delta$7.default().retain(e.index).insert("\n", r).retain(t.length() - n - 1).retain(1, { list: "unchecked" });
			this.quill.updateContents(i, Quill.sources.USER), this.quill.setSelection(e.index + 1, Quill.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"header enter": {
		key: "Enter",
		collapsed: !0,
		format: ["header"],
		suffix: /^$/,
		handler(e, t) {
			let [n, r] = this.quill.getLine(e.index), i = new import_Delta$7.default().retain(e.index).insert("\n", t.format).retain(n.length() - r - 1).retain(1, { header: null });
			this.quill.updateContents(i, Quill.sources.USER), this.quill.setSelection(e.index + 1, Quill.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"table backspace": {
		key: "Backspace",
		format: ["table"],
		collapsed: !0,
		offset: 0,
		handler() {}
	},
	"table delete": {
		key: "Delete",
		format: ["table"],
		collapsed: !0,
		suffix: /^$/,
		handler() {}
	},
	"table enter": {
		key: "Enter",
		shiftKey: null,
		format: ["table"],
		handler(e) {
			let t = this.quill.getModule("table");
			if (t) {
				let [n, r, i, a] = t.getTable(e), o = tableSide(n, r, i, a);
				if (o == null) return;
				let s = n.offset();
				if (o < 0) {
					let t = new import_Delta$7.default().retain(s).insert("\n");
					this.quill.updateContents(t, Quill.sources.USER), this.quill.setSelection(e.index + 1, e.length, Quill.sources.SILENT);
				} else if (o > 0) {
					s += n.length();
					let e = new import_Delta$7.default().retain(s).insert("\n");
					this.quill.updateContents(e, Quill.sources.USER), this.quill.setSelection(s, Quill.sources.USER);
				}
			}
		}
	},
	"table tab": {
		key: "Tab",
		shiftKey: null,
		format: ["table"],
		handler(e, t) {
			let { event: n, line: r } = t, i = r.offset(this.quill.scroll);
			n.shiftKey ? this.quill.setSelection(i - 1, Quill.sources.USER) : this.quill.setSelection(i + r.length(), Quill.sources.USER);
		}
	},
	"list autofill": {
		key: " ",
		shiftKey: null,
		collapsed: !0,
		format: {
			"code-block": !1,
			blockquote: !1,
			table: !1
		},
		prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
		handler(e, t) {
			if (this.quill.scroll.query("list") == null) return !0;
			let { length: n } = t.prefix, [r, i] = this.quill.getLine(e.index);
			if (i > n) return !0;
			let a;
			switch (t.prefix.trim()) {
				case "[]":
				case "[ ]":
					a = "unchecked";
					break;
				case "[x]":
					a = "checked";
					break;
				case "-":
				case "*":
					a = "bullet";
					break;
				default: a = "ordered";
			}
			this.quill.insertText(e.index, " ", Quill.sources.USER), this.quill.history.cutoff();
			let o = new import_Delta$7.default().retain(e.index - i).delete(n + 1).retain(r.length() - 2 - i).retain(1, { list: a });
			return this.quill.updateContents(o, Quill.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index - n, Quill.sources.SILENT), !1;
		}
	},
	"code exit": {
		key: "Enter",
		collapsed: !0,
		format: ["code-block"],
		prefix: /^$/,
		suffix: /^\s*$/,
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = 2, i = t;
			for (; i != null && i.length() <= 1 && i.formats()["code-block"];) if (i = i.prev, --r, r <= 0) {
				let r = new import_Delta$7.default().retain(e.index + t.length() - n - 2).retain(1, { "code-block": null }).delete(1);
				return this.quill.updateContents(r, Quill.sources.USER), this.quill.setSelection(e.index - 1, Quill.sources.SILENT), !1;
			}
			return !0;
		}
	},
	"embed left": makeEmbedArrowHandler("ArrowLeft", !1),
	"embed left shift": makeEmbedArrowHandler("ArrowLeft", !0),
	"embed right": makeEmbedArrowHandler("ArrowRight", !1),
	"embed right shift": makeEmbedArrowHandler("ArrowRight", !0),
	"table down": makeTableArrowHandler(!1),
	"table up": makeTableArrowHandler(!0)
} };
function makeCodeBlockHandler(e) {
	return {
		key: "Tab",
		shiftKey: !e,
		format: { "code-block": !0 },
		handler(t, n) {
			let { event: r } = n, { TAB: i } = this.quill.scroll.query("code-block");
			if (t.length === 0 && !r.shiftKey) {
				this.quill.insertText(t.index, i, Quill.sources.USER), this.quill.setSelection(t.index + i.length, Quill.sources.SILENT);
				return;
			}
			let a = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t), { index: o, length: s } = t;
			a.forEach((t, n) => {
				e ? (t.insertAt(0, i), n === 0 ? o += i.length : s += i.length) : t.domNode.textContent.startsWith(i) && (t.deleteAt(0, i.length), n === 0 ? o -= i.length : s -= i.length);
			}), this.quill.update(Quill.sources.USER), this.quill.setSelection(o, s, Quill.sources.SILENT);
		}
	};
}
function makeEmbedArrowHandler(e, t) {
	return {
		key: e,
		shiftKey: t,
		altKey: null,
		[e === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
		handler(n) {
			let { index: r } = n;
			e === "ArrowRight" && (r += n.length + 1);
			let [i] = this.quill.getLeaf(r);
			return i instanceof EmbedBlot$1 ? (e === "ArrowLeft" ? t ? this.quill.setSelection(n.index - 1, n.length + 1, Quill.sources.USER) : this.quill.setSelection(n.index - 1, Quill.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, Quill.sources.USER) : this.quill.setSelection(n.index + n.length + 1, Quill.sources.USER), !1) : !0;
		}
	};
}
function makeFormatHandler(e) {
	return {
		key: e[0],
		shortKey: !0,
		handler(t, n) {
			this.quill.format(e, !n.format[e], Quill.sources.USER);
		}
	};
}
function makeTableArrowHandler(e) {
	return {
		key: e ? "ArrowUp" : "ArrowDown",
		collapsed: !0,
		format: ["table"],
		handler(t, n) {
			let r = e ? "prev" : "next", i = n.line, a = i.parent[r];
			if (a != null) {
				if (a.statics.blotName === "table-row") {
					let e = a.children.head, t = i;
					for (; t.prev != null;) t = t.prev, e = e.next;
					let r = e.offset(this.quill.scroll) + Math.min(n.offset, e.length() - 1);
					this.quill.setSelection(r, 0, Quill.sources.USER);
				}
			} else {
				let t = i.table()[r];
				t != null && (e ? this.quill.setSelection(t.offset(this.quill.scroll) + t.length() - 1, 0, Quill.sources.USER) : this.quill.setSelection(t.offset(this.quill.scroll), 0, Quill.sources.USER));
			}
			return !1;
		}
	};
}
function normalize$2(e) {
	if (typeof e == "string" || typeof e == "number") e = { key: e };
	else if (typeof e == "object") e = cloneDeep_default(e);
	else return null;
	return e.shortKey && (e[SHORTKEY] = e.shortKey, delete e.shortKey), e;
}
function deleteRange(e) {
	let { quill: t, range: n } = e, r = t.getLines(n), i = {};
	if (r.length > 1) {
		let e = r[0].formats(), t = r[r.length - 1].formats();
		i = import_Delta$7.AttributeMap.diff(t, e) || {};
	}
	t.deleteText(n, Quill.sources.USER), Object.keys(i).length > 0 && t.formatLine(n.index, 1, i, Quill.sources.USER), t.setSelection(n.index, Quill.sources.SILENT);
}
function tableSide(e, t, n, r) {
	return t.prev == null && t.next == null ? n.prev == null && n.next == null ? r === 0 ? -1 : 1 : n.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
var normalWeightRegexp = /font-weight:\s*normal/, blockTagNames = [
	"P",
	"OL",
	"UL"
], isBlockElement = (e) => e && blockTagNames.includes(e.tagName), normalizeEmptyLines = (e) => {
	Array.from(e.querySelectorAll("br")).filter((e) => isBlockElement(e.previousElementSibling) && isBlockElement(e.nextElementSibling)).forEach((e) => {
		e.parentNode?.removeChild(e);
	});
}, normalizeFontWeight = (e) => {
	Array.from(e.querySelectorAll("b[style*=\"font-weight\"]")).filter((e) => e.getAttribute("style")?.match(normalWeightRegexp)).forEach((t) => {
		let n = e.createDocumentFragment();
		n.append(...t.childNodes), t.parentNode?.replaceChild(n, t);
	});
};
function normalize(e) {
	e.querySelector("[id^=\"docs-internal-guid-\"]") && (normalizeFontWeight(e), normalizeEmptyLines(e));
}
var ignoreRegexp = /\bmso-list:[^;]*ignore/i, idRegexp = /\bmso-list:[^;]*\bl(\d+)/i, indentRegexp = /\bmso-list:[^;]*\blevel(\d+)/i, parseListItem = (e, t) => {
	let n = e.getAttribute("style"), r = n?.match(idRegexp);
	if (!r) return null;
	let i = Number(r[1]), a = n?.match(indentRegexp), o = a ? Number(a[1]) : 1, s = RegExp(`@list l${i}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(s);
	return {
		id: i,
		indent: o,
		type: c && c[1] === "bullet" ? "bullet" : "ordered",
		element: e
	};
}, normalizeListItem = (e) => {
	let t = Array.from(e.querySelectorAll("[style*=mso-list]")), n = [], r = [];
	t.forEach((e) => {
		(e.getAttribute("style") || "").match(ignoreRegexp) ? n.push(e) : r.push(e);
	}), n.forEach((e) => e.parentNode?.removeChild(e));
	let i = e.documentElement.innerHTML, a = r.map((e) => parseListItem(e, i)).filter((e) => e);
	for (; a.length;) {
		let e = [], t = a.shift();
		for (; t;) e.push(t), t = a.length && a[0]?.element === t.element.nextElementSibling && a[0].id === t.id ? a.shift() : null;
		let n = document.createElement("ul");
		e.forEach((e) => {
			let t = document.createElement("li");
			t.setAttribute("data-list", e.type), e.indent > 1 && t.setAttribute("class", `ql-indent-${e.indent - 1}`), t.innerHTML = e.element.innerHTML, n.appendChild(t);
		});
		let r = e[0]?.element, { parentNode: i } = r ?? {};
		r && i?.replaceChild(n, r), e.slice(1).forEach((e) => {
			let { element: t } = e;
			i?.removeChild(t);
		});
	}
};
function normalize$1(e) {
	e.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && normalizeListItem(e);
}
var NORMALIZERS = [normalize$1, normalize], normalizeExternalHTML_default = (e) => {
	e.documentElement && NORMALIZERS.forEach((t) => {
		t(e);
	});
}, import_Delta$6 = /* @__PURE__ */ __toESM(require_Delta(), 1), debug$1 = logger_default("quill:clipboard"), CLIPBOARD_CONFIG = [
	[Node.TEXT_NODE, matchText],
	[Node.TEXT_NODE, matchNewline],
	["br", matchBreak],
	[Node.ELEMENT_NODE, matchNewline],
	[Node.ELEMENT_NODE, matchBlot],
	[Node.ELEMENT_NODE, matchAttributor],
	[Node.ELEMENT_NODE, matchStyles],
	["li", matchIndent],
	["ol, ul", matchList],
	["pre", matchCodeBlock],
	["tr", matchTable],
	["b", createMatchAlias("bold")],
	["i", createMatchAlias("italic")],
	["strike", createMatchAlias("strike")],
	["style", matchIgnore]
], ATTRIBUTE_ATTRIBUTORS = [AlignAttribute, DirectionAttribute].reduce((e, t) => (e[t.keyName] = t, e), {}), STYLE_ATTRIBUTORS = [
	AlignStyle,
	BackgroundStyle,
	ColorStyle,
	DirectionStyle,
	FontStyle,
	SizeStyle
].reduce((e, t) => (e[t.keyName] = t, e), {}), Clipboard = class extends module_default {
	static DEFAULTS = { matchers: [] };
	constructor(e, t) {
		super(e, t), this.quill.root.addEventListener("copy", (e) => this.onCaptureCopy(e, !1)), this.quill.root.addEventListener("cut", (e) => this.onCaptureCopy(e, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], CLIPBOARD_CONFIG.concat(this.options.matchers ?? []).forEach((e) => {
			let [t, n] = e;
			this.addMatcher(t, n);
		});
	}
	addMatcher(e, t) {
		this.matchers.push([e, t]);
	}
	convert(e) {
		let { html: t, text: n } = e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (r[CodeBlock.blotName]) return new import_Delta$6.default().insert(n || "", { [CodeBlock.blotName]: r[CodeBlock.blotName] });
		if (!t) return new import_Delta$6.default().insert(n || "", r);
		let i = this.convertHTML(t);
		return deltaEndsWith(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || r.table) ? i.compose(new import_Delta$6.default().retain(i.length() - 1).delete(1)) : i;
	}
	normalizeHTML(e) {
		normalizeExternalHTML_default(e);
	}
	convertHTML(e) {
		let t = new DOMParser().parseFromString(e, "text/html");
		this.normalizeHTML(t);
		let n = t.body, r = /* @__PURE__ */ new WeakMap(), [i, a] = this.prepareMatching(n, r);
		return traverse(this.quill.scroll, n, i, a, r);
	}
	dangerouslyPasteHTML(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Quill.sources.API;
		if (typeof e == "string") {
			let n = this.convert({
				html: e,
				text: ""
			});
			this.quill.setContents(n, t), this.quill.setSelection(0, Quill.sources.SILENT);
		} else {
			let r = this.convert({
				html: t,
				text: ""
			});
			this.quill.updateContents(new import_Delta$6.default().retain(e).concat(r), n), this.quill.setSelection(e + r.length(), Quill.sources.SILENT);
		}
	}
	onCaptureCopy(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		if (e.defaultPrevented) return;
		e.preventDefault();
		let [n] = this.quill.selection.getRange();
		if (n == null) return;
		let { html: r, text: i } = this.onCopy(n, t);
		e.clipboardData?.setData("text/plain", i), e.clipboardData?.setData("text/html", r), t && deleteRange({
			range: n,
			quill: this.quill
		});
	}
	normalizeURIList(e) {
		return e.split(/\r?\n/).filter((e) => e[0] !== "#").join("\n");
	}
	onCapturePaste(e) {
		if (e.defaultPrevented || !this.quill.isEnabled()) return;
		e.preventDefault();
		let t = this.quill.getSelection(!0);
		if (t == null) return;
		let n = e.clipboardData?.getData("text/html"), r = e.clipboardData?.getData("text/plain");
		if (!n && !r) {
			let t = e.clipboardData?.getData("text/uri-list");
			t && (r = this.normalizeURIList(t));
		}
		let i = Array.from(e.clipboardData?.files || []);
		if (!n && i.length > 0) {
			this.quill.uploader.upload(t, i);
			return;
		}
		if (n && i.length > 0) {
			let e = new DOMParser().parseFromString(n, "text/html");
			if (e.body.childElementCount === 1 && e.body.firstElementChild?.tagName === "IMG") {
				this.quill.uploader.upload(t, i);
				return;
			}
		}
		this.onPaste(t, {
			html: n,
			text: r
		});
	}
	onCopy(e) {
		let t = this.quill.getText(e);
		return {
			html: this.quill.getSemanticHTML(e),
			text: t
		};
	}
	onPaste(e, t) {
		let { text: n, html: r } = t, i = this.quill.getFormat(e.index), a = this.convert({
			text: n,
			html: r
		}, i);
		debug$1.log("onPaste", a, {
			text: n,
			html: r
		});
		let o = new import_Delta$6.default().retain(e.index).delete(e.length).concat(a);
		this.quill.updateContents(o, Quill.sources.USER), this.quill.setSelection(o.length() - e.length, Quill.sources.SILENT), this.quill.scrollSelectionIntoView();
	}
	prepareMatching(e, t) {
		let n = [], r = [];
		return this.matchers.forEach((i) => {
			let [a, o] = i;
			switch (a) {
				case Node.TEXT_NODE:
					r.push(o);
					break;
				case Node.ELEMENT_NODE:
					n.push(o);
					break;
				default:
					Array.from(e.querySelectorAll(a)).forEach((e) => {
						t.has(e) ? t.get(e)?.push(o) : t.set(e, [o]);
					});
					break;
			}
		}), [n, r];
	}
};
function applyFormat(e, t, n, r) {
	return r.query(t) ? e.reduce((e, r) => {
		if (!r.insert) return e;
		if (r.attributes && r.attributes[t]) return e.push(r);
		let i = n ? { [t]: n } : {};
		return e.insert(r.insert, {
			...i,
			...r.attributes
		});
	}, new import_Delta$6.default()) : e;
}
function deltaEndsWith(e, t) {
	let n = "";
	for (let r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
		let t = e.ops[r];
		if (typeof t.insert != "string") break;
		n = t.insert + n;
	}
	return n.slice(-1 * t.length) === t;
}
function isLine(e, t) {
	if (!(e instanceof Element)) return !1;
	let n = t.query(e);
	return n && n.prototype instanceof EmbedBlot$1 ? !1 : (/* @__PURE__ */ "address.article.blockquote.canvas.dd.div.dl.dt.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.iframe.li.main.nav.ol.output.p.pre.section.table.td.tr.ul.video".split(".")).includes(e.tagName.toLowerCase());
}
function isBetweenInlineElements(e, t) {
	return e.previousElementSibling && e.nextElementSibling && !isLine(e.previousElementSibling, t) && !isLine(e.nextElementSibling, t);
}
var preNodes = /* @__PURE__ */ new WeakMap();
function isPre(e) {
	return e == null ? !1 : (preNodes.has(e) || (e.tagName === "PRE" ? preNodes.set(e, !0) : preNodes.set(e, isPre(e.parentNode))), preNodes.get(e));
}
function traverse(e, t, n, r, i) {
	return t.nodeType === t.TEXT_NODE ? r.reduce((n, r) => r(t, n, e), new import_Delta$6.default()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((a, o) => {
		let s = traverse(e, o, n, r, i);
		return o.nodeType === t.ELEMENT_NODE && (s = n.reduce((t, n) => n(o, t, e), s), s = (i.get(o) || []).reduce((t, n) => n(o, t, e), s)), a.concat(s);
	}, new import_Delta$6.default()) : new import_Delta$6.default();
}
function createMatchAlias(e) {
	return (t, n, r) => applyFormat(n, e, !0, r);
}
function matchAttributor(e, t, n) {
	let r = Attributor.keys(e), i = ClassAttributor$1.keys(e), a = StyleAttributor$1.keys(e), o = {};
	return r.concat(i).concat(a).forEach((t) => {
		let r = n.query(t, Scope.ATTRIBUTE);
		r != null && (o[r.attrName] = r.value(e), o[r.attrName]) || (r = ATTRIBUTE_ATTRIBUTORS[t], r != null && (r.attrName === t || r.keyName === t) && (o[r.attrName] = r.value(e) || void 0), r = STYLE_ATTRIBUTORS[t], r != null && (r.attrName === t || r.keyName === t) && (r = STYLE_ATTRIBUTORS[t], o[r.attrName] = r.value(e) || void 0));
	}), Object.entries(o).reduce((e, t) => {
		let [r, i] = t;
		return applyFormat(e, r, i, n);
	}, t);
}
function matchBlot(e, t, n) {
	let r = n.query(e);
	if (r == null) return t;
	if (r.prototype instanceof EmbedBlot$1) {
		let t = {}, i = r.value(e);
		if (i != null) return t[r.blotName] = i, new import_Delta$6.default().insert(t, r.formats(e, n));
	} else if (r.prototype instanceof BlockBlot$1 && !deltaEndsWith(t, "\n") && t.insert("\n"), "blotName" in r && "formats" in r && typeof r.formats == "function") return applyFormat(t, r.blotName, r.formats(e, n), n);
	return t;
}
function matchBreak(e, t) {
	return deltaEndsWith(t, "\n") || t.insert("\n"), t;
}
function matchCodeBlock(e, t, n) {
	let r = n.query("code-block");
	return applyFormat(t, "code-block", r && "formats" in r && typeof r.formats == "function" ? r.formats(e, n) : !0, n);
}
function matchIgnore() {
	return new import_Delta$6.default();
}
function matchIndent(e, t, n) {
	let r = n.query(e);
	if (r == null || r.blotName !== "list" || !deltaEndsWith(t, "\n")) return t;
	let i = -1, a = e.parentNode;
	for (; a != null;) ["OL", "UL"].includes(a.tagName) && (i += 1), a = a.parentNode;
	return i <= 0 ? t : t.reduce((e, t) => t.insert ? t.attributes && typeof t.attributes.indent == "number" ? e.push(t) : e.insert(t.insert, {
		indent: i,
		...t.attributes || {}
	}) : e, new import_Delta$6.default());
}
function matchList(e, t, n) {
	let r = e, i = r.tagName === "OL" ? "ordered" : "bullet", a = r.getAttribute("data-checked");
	return a && (i = a === "true" ? "checked" : "unchecked"), applyFormat(t, "list", i, n);
}
function matchNewline(e, t, n) {
	if (!deltaEndsWith(t, "\n")) {
		if (isLine(e, n) && (e.childNodes.length > 0 || e instanceof HTMLParagraphElement)) return t.insert("\n");
		if (t.length() > 0 && e.nextSibling) {
			let r = e.nextSibling;
			for (; r != null;) {
				if (isLine(r, n)) return t.insert("\n");
				let e = n.query(r);
				if (e && e.prototype instanceof BlockEmbed) return t.insert("\n");
				r = r.firstChild;
			}
		}
	}
	return t;
}
function matchStyles(e, t, n) {
	let r = {}, i = e.style || {};
	return i.fontStyle === "italic" && (r.italic = !0), i.textDecoration === "underline" && (r.underline = !0), i.textDecoration === "line-through" && (r.strike = !0), (i.fontWeight?.startsWith("bold") || parseInt(i.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((e, t) => {
		let [r, i] = t;
		return applyFormat(e, r, i, n);
	}, t), parseFloat(i.textIndent || 0) > 0 ? new import_Delta$6.default().insert("	").concat(t) : t;
}
function matchTable(e, t, n) {
	let r = e.parentElement?.tagName === "TABLE" ? e.parentElement : e.parentElement?.parentElement;
	return r == null ? t : applyFormat(t, "table", Array.from(r.querySelectorAll("tr")).indexOf(e) + 1, n);
}
function matchText(e, t, n) {
	let r = e.data;
	if (e.parentElement?.tagName === "O:P") return t.insert(r.trim());
	if (!isPre(e)) {
		if (r.trim().length === 0 && r.includes("\n") && !isBetweenInlineElements(e, n)) return t;
		r = r.replace(/[^\S\u00a0]/g, " "), r = r.replace(/ {2,}/g, " "), (e.previousSibling == null && e.parentElement != null && isLine(e.parentElement, n) || e.previousSibling instanceof Element && isLine(e.previousSibling, n)) && (r = r.replace(/^ /, "")), (e.nextSibling == null && e.parentElement != null && isLine(e.parentElement, n) || e.nextSibling instanceof Element && isLine(e.nextSibling, n)) && (r = r.replace(/ $/, "")), r = r.replaceAll("\xA0", " ");
	}
	return t.insert(r);
}
var History = class extends module_default {
	static DEFAULTS = {
		delay: 1e3,
		maxStack: 100,
		userOnly: !1
	};
	lastRecorded = 0;
	ignoreChange = !1;
	stack = {
		undo: [],
		redo: []
	};
	currentRange = null;
	constructor(e, t) {
		super(e, t), this.quill.on(Quill.events.EDITOR_CHANGE, (e, t, n, r) => {
			e === Quill.events.SELECTION_CHANGE ? t && r !== Quill.sources.SILENT && (this.currentRange = t) : e === Quill.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || r === Quill.sources.USER ? this.record(t, n) : this.transform(t)), this.currentRange = transformRange(this.currentRange, t));
		}), this.quill.keyboard.addBinding({
			key: "z",
			shortKey: !0
		}, this.undo.bind(this)), this.quill.keyboard.addBinding({
			key: ["z", "Z"],
			shortKey: !0,
			shiftKey: !0
		}, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
			key: "y",
			shortKey: !0
		}, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (e) => {
			e.inputType === "historyUndo" ? (this.undo(), e.preventDefault()) : e.inputType === "historyRedo" && (this.redo(), e.preventDefault());
		});
	}
	change(e, t) {
		if (this.stack[e].length === 0) return;
		let n = this.stack[e].pop();
		if (!n) return;
		let r = this.quill.getContents(), i = n.delta.invert(r);
		this.stack[t].push({
			delta: i,
			range: transformRange(n.range, i)
		}), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, Quill.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
	}
	clear() {
		this.stack = {
			undo: [],
			redo: []
		};
	}
	cutoff() {
		this.lastRecorded = 0;
	}
	record(e, t) {
		if (e.ops.length === 0) return;
		this.stack.redo = [];
		let n = e.invert(t), r = this.currentRange, i = Date.now();
		if (this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0) {
			let e = this.stack.undo.pop();
			e && (n = n.compose(e.delta), r = e.range);
		} else this.lastRecorded = i;
		n.length() !== 0 && (this.stack.undo.push({
			delta: n,
			range: r
		}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
	}
	redo() {
		this.change("redo", "undo");
	}
	transform(e) {
		transformStack(this.stack.undo, e), transformStack(this.stack.redo, e);
	}
	undo() {
		this.change("undo", "redo");
	}
	restoreSelection(e) {
		if (e.range) this.quill.setSelection(e.range, Quill.sources.USER);
		else {
			let t = getLastChangeIndex(this.quill.scroll, e.delta);
			this.quill.setSelection(t, Quill.sources.USER);
		}
	}
};
function transformStack(e, t) {
	let n = t;
	for (let t = e.length - 1; t >= 0; --t) {
		let r = e[t];
		e[t] = {
			delta: n.transform(r.delta, !0),
			range: r.range && transformRange(r.range, n)
		}, n = r.delta.transform(n), e[t].delta.length() === 0 && e.splice(t, 1);
	}
}
function endsWithNewlineChange(e, t) {
	let n = t.ops[t.ops.length - 1];
	return n == null ? !1 : n.insert == null ? n.attributes == null ? !1 : Object.keys(n.attributes).some((t) => e.query(t, Scope.BLOCK) != null) : typeof n.insert == "string" && n.insert.endsWith("\n");
}
function getLastChangeIndex(e, t) {
	let n = t.reduce((e, t) => e + (t.delete || 0), 0), r = t.length() - n;
	return endsWithNewlineChange(e, t) && --r, r;
}
function transformRange(e, t) {
	if (!e) return e;
	let n = t.transformPosition(e.index);
	return {
		index: n,
		length: t.transformPosition(e.index + e.length) - n
	};
}
var import_Delta$5 = /* @__PURE__ */ __toESM(require_Delta(), 1), Uploader = class extends module_default {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("drop", (t) => {
			t.preventDefault();
			let n = null;
			if (document.caretRangeFromPoint) n = document.caretRangeFromPoint(t.clientX, t.clientY);
			else if (document.caretPositionFromPoint) {
				let e = document.caretPositionFromPoint(t.clientX, t.clientY);
				n = document.createRange(), n.setStart(e.offsetNode, e.offset), n.setEnd(e.offsetNode, e.offset);
			}
			let r = n && e.selection.normalizeNative(n);
			if (r) {
				let n = e.selection.normalizedToRange(r);
				t.dataTransfer?.files && this.upload(n, t.dataTransfer.files);
			}
		});
	}
	upload(e, t) {
		let n = [];
		Array.from(t).forEach((e) => {
			e && this.options.mimetypes?.includes(e.type) && n.push(e);
		}), n.length > 0 && this.options.handler.call(this, e, n);
	}
};
Uploader.DEFAULTS = {
	mimetypes: ["image/png", "image/jpeg"],
	handler(e, t) {
		if (!this.quill.scroll.query("image")) return;
		let n = t.map((e) => new Promise((t) => {
			let n = new FileReader();
			n.onload = () => {
				t(n.result);
			}, n.readAsDataURL(e);
		}));
		Promise.all(n).then((t) => {
			let n = t.reduce((e, t) => e.insert({ image: t }), new import_Delta$5.default().retain(e.index).delete(e.length));
			this.quill.updateContents(n, emitter_default.sources.USER), this.quill.setSelection(e.index + t.length, emitter_default.sources.SILENT);
		});
	}
};
var uploader_default = Uploader, import_Delta$4 = /* @__PURE__ */ __toESM(require_Delta(), 1), INSERT_TYPES = ["insertText", "insertReplacementText"], Input = class extends module_default {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("beforeinput", (e) => {
			this.handleBeforeInput(e);
		}), /Android/i.test(navigator.userAgent) || e.on(Quill.events.COMPOSITION_BEFORE_START, () => {
			this.handleCompositionStart();
		});
	}
	deleteRange(e) {
		deleteRange({
			range: e,
			quill: this.quill
		});
	}
	replaceText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		if (e.length === 0) return !1;
		if (t) {
			let n = this.quill.getFormat(e.index, 1);
			this.deleteRange(e), this.quill.updateContents(new import_Delta$4.default().retain(e.index).insert(t, n), Quill.sources.USER);
		} else this.deleteRange(e);
		return this.quill.setSelection(e.index + t.length, 0, Quill.sources.SILENT), !0;
	}
	handleBeforeInput(e) {
		if (this.quill.composition.isComposing || e.defaultPrevented || !INSERT_TYPES.includes(e.inputType)) return;
		let t = e.getTargetRanges ? e.getTargetRanges()[0] : null;
		if (!t || t.collapsed === !0) return;
		let n = getPlainTextFromInputEvent(e);
		if (n == null) return;
		let r = this.quill.selection.normalizeNative(t), i = r ? this.quill.selection.normalizedToRange(r) : null;
		i && this.replaceText(i, n) && e.preventDefault();
	}
	handleCompositionStart() {
		let e = this.quill.getSelection();
		e && this.replaceText(e);
	}
};
function getPlainTextFromInputEvent(e) {
	return typeof e.data == "string" ? e.data : e.dataTransfer?.types.includes("text/plain") ? e.dataTransfer.getData("text/plain") : null;
}
var input_default = Input, isMac = /Mac/i.test(navigator.platform), canMoveCaretBeforeUINode = (e) => !!(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Home" || isMac && e.key === "a" && e.ctrlKey === !0), uiNode_default = class extends module_default {
	isListening = !1;
	selectionChangeDeadline = 0;
	constructor(e, t) {
		super(e, t), this.handleArrowKeys(), this.handleNavigationShortcuts();
	}
	handleArrowKeys() {
		this.quill.keyboard.addBinding({
			key: ["ArrowLeft", "ArrowRight"],
			offset: 0,
			shiftKey: null,
			handler(e, t) {
				let { line: n, event: r } = t;
				if (!(n instanceof ParentBlot$1) || !n.uiNode) return !0;
				let i = getComputedStyle(n.domNode).direction === "rtl";
				return i && r.key !== "ArrowRight" || !i && r.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (r.shiftKey ? 1 : 0), Quill.sources.USER), !1);
			}
		});
	}
	handleNavigationShortcuts() {
		this.quill.root.addEventListener("keydown", (e) => {
			!e.defaultPrevented && canMoveCaretBeforeUINode(e) && this.ensureListeningToSelectionChange();
		});
	}
	ensureListeningToSelectionChange() {
		this.selectionChangeDeadline = Date.now() + 100, !this.isListening && (this.isListening = !0, document.addEventListener("selectionchange", () => {
			this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
		}, { once: !0 }));
	}
	handleSelectionChange() {
		let e = document.getSelection();
		if (!e) return;
		let t = e.getRangeAt(0);
		if (t.collapsed !== !0 || t.startOffset !== 0) return;
		let n = this.quill.scroll.find(t.startContainer);
		if (!(n instanceof ParentBlot$1) || !n.uiNode) return;
		let r = document.createRange();
		r.setStartAfter(n.uiNode), r.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(r);
	}
};
require_Delta(), Quill.register({
	"blots/block": Block,
	"blots/block/embed": BlockEmbed,
	"blots/break": break_default,
	"blots/container": container_default,
	"blots/cursor": cursor_default,
	"blots/embed": embed_default,
	"blots/inline": inline_default,
	"blots/scroll": scroll_default,
	"blots/text": Text$1,
	"modules/clipboard": Clipboard,
	"modules/history": History,
	"modules/keyboard": Keyboard,
	"modules/uploader": uploader_default,
	"modules/input": input_default,
	"modules/uiNode": uiNode_default
});
var core_default = Quill, indent_default = new class extends ClassAttributor$1 {
	add(e, t) {
		let n = 0;
		if (t === "+1" || t === "-1") {
			let r = this.value(e) || 0;
			n = t === "+1" ? r + 1 : r - 1;
		} else typeof t == "number" && (n = t);
		return n === 0 ? (this.remove(e), !0) : super.add(e, n.toString());
	}
	canAdd(e, t) {
		return super.canAdd(e, t) || super.canAdd(e, parseInt(t, 10));
	}
	value(e) {
		return parseInt(super.value(e), 10) || void 0;
	}
}("indent", "ql-indent", {
	scope: Scope.BLOCK,
	whitelist: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	]
}), blockquote_default = class extends Block {
	static blotName = "blockquote";
	static tagName = "blockquote";
}, header_default = class extends Block {
	static blotName = "header";
	static tagName = [
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6"
	];
	static formats(e) {
		return this.tagName.indexOf(e.tagName) + 1;
	}
}, ListContainer = class extends container_default {};
ListContainer.blotName = "list-container", ListContainer.tagName = "OL";
var ListItem = class extends Block {
	static create(e) {
		let t = super.create();
		return t.setAttribute("data-list", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-list") || void 0;
	}
	static register() {
		Quill.register(ListContainer);
	}
	constructor(e, t) {
		super(e, t);
		let n = t.ownerDocument.createElement("span"), r = (n) => {
			if (!e.isEnabled()) return;
			let r = this.statics.formats(t, e);
			r === "checked" ? (this.format("list", "unchecked"), n.preventDefault()) : r === "unchecked" && (this.format("list", "checked"), n.preventDefault());
		};
		n.addEventListener("mousedown", r), n.addEventListener("touchstart", r), this.attachUI(n);
	}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-list", t) : super.format(e, t);
	}
};
ListItem.blotName = "list", ListItem.tagName = "LI", ListContainer.allowedChildren = [ListItem], ListItem.requiredContainer = ListContainer;
var bold_default = class extends inline_default {
	static blotName = "bold";
	static tagName = ["STRONG", "B"];
	static create() {
		return super.create();
	}
	static formats() {
		return !0;
	}
	optimize(e) {
		super.optimize(e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
	}
}, italic_default = class extends bold_default {
	static blotName = "italic";
	static tagName = ["EM", "I"];
}, Link = class extends inline_default {
	static blotName = "link";
	static tagName = "A";
	static SANITIZED_URL = "about:blank";
	static PROTOCOL_WHITELIST = [
		"http",
		"https",
		"mailto",
		"tel",
		"sms"
	];
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("href", this.sanitize(e)), t.setAttribute("rel", "noopener noreferrer"), t.setAttribute("target", "_blank"), t;
	}
	static formats(e) {
		return e.getAttribute("href");
	}
	static sanitize(e) {
		return sanitize(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
	}
	format(e, t) {
		e !== this.statics.blotName || !t ? super.format(e, t) : this.domNode.setAttribute("href", this.constructor.sanitize(t));
	}
};
function sanitize(e, t) {
	let n = document.createElement("a");
	n.href = e;
	let r = n.href.slice(0, n.href.indexOf(":"));
	return t.indexOf(r) > -1;
}
var script_default = class extends inline_default {
	static blotName = "script";
	static tagName = ["SUB", "SUP"];
	static create(e) {
		return e === "super" ? document.createElement("sup") : e === "sub" ? document.createElement("sub") : super.create(e);
	}
	static formats(e) {
		if (e.tagName === "SUB") return "sub";
		if (e.tagName === "SUP") return "super";
	}
}, strike_default = class extends bold_default {
	static blotName = "strike";
	static tagName = ["S", "STRIKE"];
}, underline_default = class extends inline_default {
	static blotName = "underline";
	static tagName = "U";
}, formula_default = class extends embed_default {
	static blotName = "formula";
	static className = "ql-formula";
	static tagName = "SPAN";
	static create(e) {
		if (window.katex == null) throw Error("Formula module requires KaTeX.");
		let t = super.create(e);
		return typeof e == "string" && (window.katex.render(e, t, {
			throwOnError: !1,
			errorColor: "#f00"
		}), t.setAttribute("data-value", e)), t;
	}
	static value(e) {
		return e.getAttribute("data-value");
	}
	html() {
		let { formula: e } = this.value();
		return `<span>${e}</span>`;
	}
}, ATTRIBUTES$1 = [
	"alt",
	"height",
	"width"
], image_default = class extends EmbedBlot$1 {
	static blotName = "image";
	static tagName = "IMG";
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return ATTRIBUTES$1.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static match(e) {
		return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
	}
	static sanitize(e) {
		return sanitize(e, [
			"http",
			"https",
			"data"
		]) ? e : "//:0";
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		ATTRIBUTES$1.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
}, ATTRIBUTES = ["height", "width"], video_default = class extends BlockEmbed {
	static blotName = "video";
	static className = "ql-video";
	static tagName = "IFRAME";
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return ATTRIBUTES.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static sanitize(e) {
		return Link.sanitize(e);
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		ATTRIBUTES.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
	html() {
		let { video: e } = this.value();
		return `<a href="${e}">${e}</a>`;
	}
}, import_Delta$2 = /* @__PURE__ */ __toESM(require_Delta(), 1), TokenAttributor = new ClassAttributor$1("code-token", "hljs", { scope: Scope.INLINE }), CodeToken = class e extends inline_default {
	static formats(e, t) {
		for (; e != null && e !== t.domNode;) {
			if (e.classList && e.classList.contains(CodeBlock.className)) return super.formats(e, t);
			e = e.parentNode;
		}
	}
	constructor(e, t, n) {
		super(e, t, n), TokenAttributor.add(this.domNode, n);
	}
	format(t, n) {
		t === e.blotName ? n ? TokenAttributor.add(this.domNode, n) : (TokenAttributor.remove(this.domNode), this.domNode.classList.remove(this.statics.className)) : super.format(t, n);
	}
	optimize() {
		super.optimize(...arguments), TokenAttributor.value(this.domNode) || this.unwrap();
	}
};
CodeToken.blotName = "code-token", CodeToken.className = "ql-token";
var SyntaxCodeBlock = class extends CodeBlock {
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("data-language", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-language") || "plain";
	}
	static register() {}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-language", t) : super.format(e, t);
	}
	replaceWith(e, t) {
		return this.formatAt(0, this.length(), CodeToken.blotName, !1), super.replaceWith(e, t);
	}
}, SyntaxCodeBlockContainer = class extends CodeBlockContainer {
	attach() {
		super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
	}
	format(e, t) {
		e === SyntaxCodeBlock.blotName && (this.forceNext = !0, this.children.forEach((n) => {
			n.format(e, t);
		}));
	}
	formatAt(e, t, n, r) {
		n === SyntaxCodeBlock.blotName && (this.forceNext = !0), super.formatAt(e, t, n, r);
	}
	highlight(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		if (this.children.head == null) return;
		let n = `${Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).map((e) => e.textContent).join("\n")}\n`, r = SyntaxCodeBlock.formats(this.children.head.domNode);
		if (t || this.forceNext || this.cachedText !== n) {
			if (n.trim().length > 0 || this.cachedText == null) {
				let t = this.children.reduce((e, t) => e.concat(blockDelta(t, !1)), new import_Delta$2.default()), i = e(n, r);
				t.diff(i).reduce((e, t) => {
					let { retain: n, attributes: r } = t;
					return n ? (r && Object.keys(r).forEach((t) => {
						[SyntaxCodeBlock.blotName, CodeToken.blotName].includes(t) && this.formatAt(e, n, t, r[t]);
					}), e + n) : e;
				}, 0);
			}
			this.cachedText = n, this.forceNext = !1;
		}
	}
	html(e, t) {
		let [n] = this.children.find(e);
		return `<pre data-language="${n ? SyntaxCodeBlock.formats(n.domNode) : "plain"}">\n${escapeText(this.code(e, t))}\n</pre>`;
	}
	optimize(e) {
		if (super.optimize(e), this.parent != null && this.children.head != null && this.uiNode != null) {
			let e = SyntaxCodeBlock.formats(this.children.head.domNode);
			e !== this.uiNode.value && (this.uiNode.value = e);
		}
	}
};
SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock], SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer, SyntaxCodeBlock.allowedChildren = [
	CodeToken,
	cursor_default,
	Text$1,
	break_default
];
var highlight = (e, t, n) => {
	if (typeof e.versionString == "string") {
		let r = e.versionString.split(".")[0];
		if (parseInt(r, 10) >= 11) return e.highlight(n, { language: t }).value;
	}
	return e.highlight(t, n).value;
}, Syntax = class extends module_default {
	static register() {
		Quill.register(CodeToken, !0), Quill.register(SyntaxCodeBlock, !0), Quill.register(SyntaxCodeBlockContainer, !0);
	}
	constructor(e, t) {
		if (super(e, t), this.options.hljs == null) throw Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
		this.languages = this.options.languages.reduce((e, t) => {
			let { key: n } = t;
			return e[n] = !0, e;
		}, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
	}
	initListener() {
		this.quill.on(Quill.events.SCROLL_BLOT_MOUNT, (e) => {
			if (!(e instanceof SyntaxCodeBlockContainer)) return;
			let t = this.quill.root.ownerDocument.createElement("select");
			this.options.languages.forEach((e) => {
				let { key: n, label: r } = e, i = t.ownerDocument.createElement("option");
				i.textContent = r, i.setAttribute("value", n), t.appendChild(i);
			}), t.addEventListener("change", () => {
				e.format(SyntaxCodeBlock.blotName, t.value), this.quill.root.focus(), this.highlight(e, !0);
			}), e.uiNode ?? (e.attachUI(t), e.children.head && (t.value = SyntaxCodeBlock.formats(e.children.head.domNode)));
		});
	}
	initTimer() {
		let e = null;
		this.quill.on(Quill.events.SCROLL_OPTIMIZE, () => {
			e && clearTimeout(e), e = setTimeout(() => {
				this.highlight(), e = null;
			}, this.options.interval);
		});
	}
	highlight() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		if (this.quill.selection.composing) return;
		this.quill.update(Quill.sources.USER);
		let n = this.quill.getSelection();
		(e == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [e]).forEach((e) => {
			e.highlight(this.highlightBlot, t);
		}), this.quill.update(Quill.sources.SILENT), n != null && this.quill.setSelection(n, Quill.sources.SILENT);
	}
	highlightBlot(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
		if (t = this.languages[t] ? t : "plain", t === "plain") return escapeText(e).split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [CodeBlock.blotName]: t }), e.insert(n)), new import_Delta$2.default());
		let n = this.quill.root.ownerDocument.createElement("div");
		return n.classList.add(CodeBlock.className), n.innerHTML = highlight(this.options.hljs, t, e), traverse(this.quill.scroll, n, [(e, t) => {
			let n = TokenAttributor.value(e);
			return n ? t.compose(new import_Delta$2.default().retain(t.length(), { [CodeToken.blotName]: n })) : t;
		}], [(e, n) => e.data.split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [CodeBlock.blotName]: t }), e.insert(n)), n)], /* @__PURE__ */ new WeakMap());
	}
};
Syntax.DEFAULTS = {
	hljs: (() => window.hljs)(),
	interval: 1e3,
	languages: [
		{
			key: "plain",
			label: "Plain"
		},
		{
			key: "bash",
			label: "Bash"
		},
		{
			key: "cpp",
			label: "C++"
		},
		{
			key: "cs",
			label: "C#"
		},
		{
			key: "css",
			label: "CSS"
		},
		{
			key: "diff",
			label: "Diff"
		},
		{
			key: "xml",
			label: "HTML/XML"
		},
		{
			key: "java",
			label: "Java"
		},
		{
			key: "javascript",
			label: "JavaScript"
		},
		{
			key: "markdown",
			label: "Markdown"
		},
		{
			key: "php",
			label: "PHP"
		},
		{
			key: "python",
			label: "Python"
		},
		{
			key: "ruby",
			label: "Ruby"
		},
		{
			key: "sql",
			label: "SQL"
		}
	]
};
var TableCell = class e extends Block {
	static blotName = "table";
	static tagName = "TD";
	static create(e) {
		let t = super.create();
		return e ? t.setAttribute("data-row", e) : t.setAttribute("data-row", tableId()), t;
	}
	static formats(e) {
		if (e.hasAttribute("data-row")) return e.getAttribute("data-row");
	}
	cellOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	format(t, n) {
		t === e.blotName && n ? this.domNode.setAttribute("data-row", n) : super.format(t, n);
	}
	row() {
		return this.parent;
	}
	rowOffset() {
		return this.row() ? this.row().rowOffset() : -1;
	}
	table() {
		return this.row() && this.row().table();
	}
}, TableRow = class extends container_default {
	static blotName = "table-row";
	static tagName = "TR";
	checkMerge() {
		if (super.checkMerge() && this.next.children.head != null) {
			let e = this.children.head.formats(), t = this.children.tail.formats(), n = this.next.children.head.formats(), r = this.next.children.tail.formats();
			return e.table === t.table && e.table === n.table && e.table === r.table;
		}
		return !1;
	}
	optimize(e) {
		super.optimize(e), this.children.forEach((e) => {
			if (e.next == null) return;
			let t = e.formats(), n = e.next.formats();
			if (t.table !== n.table) {
				let t = this.splitAfter(e);
				t && t.optimize(), this.prev && this.prev.optimize();
			}
		});
	}
	rowOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	table() {
		return this.parent && this.parent.parent;
	}
}, TableBody = class extends container_default {
	static blotName = "table-body";
	static tagName = "TBODY";
}, TableContainer = class extends container_default {
	static blotName = "table-container";
	static tagName = "TABLE";
	balanceCells() {
		let e = this.descendants(TableRow), t = e.reduce((e, t) => Math.max(t.children.length, e), 0);
		e.forEach((e) => {
			Array(t - e.children.length).fill(0).forEach(() => {
				let t;
				e.children.head != null && (t = TableCell.formats(e.children.head.domNode));
				let n = this.scroll.create(TableCell.blotName, t);
				e.appendChild(n), n.optimize();
			});
		});
	}
	cells(e) {
		return this.rows().map((t) => t.children.at(e));
	}
	deleteColumn(e) {
		let [t] = this.descendant(TableBody);
		t == null || t.children.head == null || t.children.forEach((t) => {
			t.children.at(e)?.remove();
		});
	}
	insertColumn(e) {
		let [t] = this.descendant(TableBody);
		t == null || t.children.head == null || t.children.forEach((t) => {
			let n = t.children.at(e), r = TableCell.formats(t.children.head.domNode), i = this.scroll.create(TableCell.blotName, r);
			t.insertBefore(i, n);
		});
	}
	insertRow(e) {
		let [t] = this.descendant(TableBody);
		if (t == null || t.children.head == null) return;
		let n = tableId(), r = this.scroll.create(TableRow.blotName);
		t.children.head.children.forEach(() => {
			let e = this.scroll.create(TableCell.blotName, n);
			r.appendChild(e);
		});
		let i = t.children.at(e);
		t.insertBefore(r, i);
	}
	rows() {
		let e = this.children.head;
		return e == null ? [] : e.children.map((e) => e);
	}
};
TableContainer.allowedChildren = [TableBody], TableBody.requiredContainer = TableContainer, TableBody.allowedChildren = [TableRow], TableRow.requiredContainer = TableBody, TableRow.allowedChildren = [TableCell], TableCell.requiredContainer = TableRow;
function tableId() {
	return `row-${Math.random().toString(36).slice(2, 6)}`;
}
var import_Delta$1 = /* @__PURE__ */ __toESM(require_Delta(), 1), table_default = class extends module_default {
	static register() {
		Quill.register(TableCell), Quill.register(TableRow), Quill.register(TableBody), Quill.register(TableContainer);
	}
	constructor() {
		super(...arguments), this.listenBalanceCells();
	}
	balanceTables() {
		this.quill.scroll.descendants(TableContainer).forEach((e) => {
			e.balanceCells();
		});
	}
	deleteColumn() {
		let [e, , t] = this.getTable();
		t != null && (e.deleteColumn(t.cellOffset()), this.quill.update(Quill.sources.USER));
	}
	deleteRow() {
		let [, e] = this.getTable();
		e != null && (e.remove(), this.quill.update(Quill.sources.USER));
	}
	deleteTable() {
		let [e] = this.getTable();
		if (e == null) return;
		let t = e.offset();
		e.remove(), this.quill.update(Quill.sources.USER), this.quill.setSelection(t, Quill.sources.SILENT);
	}
	getTable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
		if (e == null) return [
			null,
			null,
			null,
			-1
		];
		let [t, n] = this.quill.getLine(e.index);
		if (t == null || t.statics.blotName !== TableCell.blotName) return [
			null,
			null,
			null,
			-1
		];
		let r = t.parent;
		return [
			r.parent.parent,
			r,
			t,
			n
		];
	}
	insertColumn(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = i.cellOffset();
		n.insertColumn(a + e), this.quill.update(Quill.sources.USER);
		let o = r.rowOffset();
		e === 0 && (o += 1), this.quill.setSelection(t.index + o, t.length, Quill.sources.SILENT);
	}
	insertColumnLeft() {
		this.insertColumn(0);
	}
	insertColumnRight() {
		this.insertColumn(1);
	}
	insertRow(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = r.rowOffset();
		n.insertRow(a + e), this.quill.update(Quill.sources.USER), e > 0 ? this.quill.setSelection(t, Quill.sources.SILENT) : this.quill.setSelection(t.index + r.children.length, t.length, Quill.sources.SILENT);
	}
	insertRowAbove() {
		this.insertRow(0);
	}
	insertRowBelow() {
		this.insertRow(1);
	}
	insertTable(e, t) {
		let n = this.quill.getSelection();
		if (n == null) return;
		let r = Array(e).fill(0).reduce((e) => {
			let n = Array(t).fill("\n").join("");
			return e.insert(n, { table: tableId() });
		}, new import_Delta$1.default().retain(n.index));
		this.quill.updateContents(r, Quill.sources.USER), this.quill.setSelection(n.index, Quill.sources.SILENT), this.balanceTables();
	}
	listenBalanceCells() {
		this.quill.on(Quill.events.SCROLL_OPTIMIZE, (e) => {
			e.some((e) => [
				"TD",
				"TR",
				"TBODY",
				"TABLE"
			].includes(e.target.tagName) ? (this.quill.once(Quill.events.TEXT_CHANGE, (e, t, n) => {
				n === Quill.sources.USER && this.balanceTables();
			}), !0) : !1);
		});
	}
}, import_Delta = /* @__PURE__ */ __toESM(require_Delta(), 1), debug = logger_default("quill:toolbar"), Toolbar = class extends module_default {
	constructor(e, t) {
		if (super(e, t), Array.isArray(this.options.container)) {
			let t = document.createElement("div");
			t.setAttribute("role", "toolbar"), addControls(t, this.options.container), e.container?.parentNode?.insertBefore(t, e.container), this.container = t;
		} else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
		if (!(this.container instanceof HTMLElement)) {
			debug.error("Container required for toolbar", this.options);
			return;
		}
		this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((e) => {
			let t = this.options.handlers?.[e];
			t && this.addHandler(e, t);
		}), Array.from(this.container.querySelectorAll("button, select")).forEach((e) => {
			this.attach(e);
		}), this.quill.on(Quill.events.EDITOR_CHANGE, () => {
			let [e] = this.quill.selection.getRange();
			this.update(e);
		});
	}
	addHandler(e, t) {
		this.handlers[e] = t;
	}
	attach(e) {
		let t = Array.from(e.classList).find((e) => e.indexOf("ql-") === 0);
		if (!t) return;
		if (t = t.slice(3), e.tagName === "BUTTON" && e.setAttribute("type", "button"), this.handlers[t] == null && this.quill.scroll.query(t) == null) {
			debug.warn("ignoring attaching to nonexistent format", t, e);
			return;
		}
		let n = e.tagName === "SELECT" ? "change" : "click";
		e.addEventListener(n, (n) => {
			let r;
			if (e.tagName === "SELECT") {
				if (e.selectedIndex < 0) return;
				let t = e.options[e.selectedIndex];
				r = t.hasAttribute("selected") ? !1 : t.value || !1;
			} else r = e.classList.contains("ql-active") ? !1 : e.value || !e.hasAttribute("value"), n.preventDefault();
			this.quill.focus();
			let [i] = this.quill.selection.getRange();
			if (this.handlers[t] != null) this.handlers[t].call(this, r);
			else if (this.quill.scroll.query(t).prototype instanceof EmbedBlot$1) {
				if (r = prompt(`Enter ${t}`), !r) return;
				this.quill.updateContents(new import_Delta.default().retain(i.index).delete(i.length).insert({ [t]: r }), Quill.sources.USER);
			} else this.quill.format(t, r, Quill.sources.USER);
			this.update(i);
		}), this.controls.push([t, e]);
	}
	update(e) {
		let t = e == null ? {} : this.quill.getFormat(e);
		this.controls.forEach((n) => {
			let [r, i] = n;
			if (i.tagName === "SELECT") {
				let n = null;
				if (e == null) n = null;
				else if (t[r] == null) n = i.querySelector("option[selected]");
				else if (!Array.isArray(t[r])) {
					let e = t[r];
					typeof e == "string" && (e = e.replace(/"/g, "\\\"")), n = i.querySelector(`option[value="${e}"]`);
				}
				n == null ? (i.value = "", i.selectedIndex = -1) : n.selected = !0;
			} else if (e == null) i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
			else if (i.hasAttribute("value")) {
				let e = t[r], n = e === i.getAttribute("value") || e != null && e.toString() === i.getAttribute("value") || e == null && !i.getAttribute("value");
				i.classList.toggle("ql-active", n), i.setAttribute("aria-pressed", n.toString());
			} else {
				let e = t[r] != null;
				i.classList.toggle("ql-active", e), i.setAttribute("aria-pressed", e.toString());
			}
		});
	}
};
Toolbar.DEFAULTS = {};
function addButton(e, t, n) {
	let r = document.createElement("button");
	r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), n == null ? r.setAttribute("aria-label", t) : (r.value = n, r.setAttribute("aria-label", `${t}: ${n}`)), e.appendChild(r);
}
function addControls(e, t) {
	Array.isArray(t[0]) || (t = [t]), t.forEach((t) => {
		let n = document.createElement("span");
		n.classList.add("ql-formats"), t.forEach((e) => {
			if (typeof e == "string") addButton(n, e);
			else {
				let t = Object.keys(e)[0], r = e[t];
				Array.isArray(r) ? addSelect(n, t, r) : addButton(n, t, r);
			}
		}), e.appendChild(n);
	});
}
function addSelect(e, t, n) {
	let r = document.createElement("select");
	r.classList.add(`ql-${t}`), n.forEach((e) => {
		let t = document.createElement("option");
		e === !1 ? t.setAttribute("selected", "selected") : t.setAttribute("value", String(e)), r.appendChild(t);
	}), e.appendChild(r);
}
Toolbar.DEFAULTS = {
	container: null,
	handlers: {
		clean() {
			let e = this.quill.getSelection();
			if (e != null) if (e.length === 0) {
				let e = this.quill.getFormat();
				Object.keys(e).forEach((e) => {
					this.quill.scroll.query(e, Scope.INLINE) != null && this.quill.format(e, !1, Quill.sources.USER);
				});
			} else this.quill.removeFormat(e.index, e.length, Quill.sources.USER);
		},
		direction(e) {
			let { align: t } = this.quill.getFormat();
			e === "rtl" && t == null ? this.quill.format("align", "right", Quill.sources.USER) : !e && t === "right" && this.quill.format("align", !1, Quill.sources.USER), this.quill.format("direction", e, Quill.sources.USER);
		},
		indent(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t), r = parseInt(n.indent || 0, 10);
			if (e === "+1" || e === "-1") {
				let t = e === "+1" ? 1 : -1;
				n.direction === "rtl" && (t *= -1), this.quill.format("indent", r + t, Quill.sources.USER);
			}
		},
		link(e) {
			e === !0 && (e = prompt("Enter link URL:")), this.quill.format("link", e, Quill.sources.USER);
		},
		list(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t);
			e === "check" ? n.list === "checked" || n.list === "unchecked" ? this.quill.format("list", !1, Quill.sources.USER) : this.quill.format("list", "unchecked", Quill.sources.USER) : this.quill.format("list", e, Quill.sources.USER);
		}
	}
};
var alignLeftIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", alignCenterIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>", alignRightIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", alignJustifyIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>", backgroundIcon = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>", blockquoteIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>", boldIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>", cleanIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>", codeIcon = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>", colorIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>", directionLeftToRightIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>", directionRightToLeftIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>", formulaIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>", headerIcon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>", header2Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>", header3Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>", header4Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>", header5Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>", header6Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>", italicIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>", imageIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>", indentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>", outdentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>", linkIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>", listBulletIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>", listCheckIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>", listOrderedIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>", subscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>", superscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>", strikeIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>", tableIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>", underlineIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>", videoIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>", icons_default = {
	align: {
		"": alignLeftIcon,
		center: alignCenterIcon,
		right: alignRightIcon,
		justify: alignJustifyIcon
	},
	background: backgroundIcon,
	blockquote: blockquoteIcon,
	bold: boldIcon,
	clean: cleanIcon,
	code: codeIcon,
	"code-block": codeIcon,
	color: colorIcon,
	direction: {
		"": directionLeftToRightIcon,
		rtl: directionRightToLeftIcon
	},
	formula: formulaIcon,
	header: {
		1: headerIcon,
		2: header2Icon,
		3: header3Icon,
		4: header4Icon,
		5: header5Icon,
		6: header6Icon
	},
	italic: italicIcon,
	image: imageIcon,
	indent: {
		"+1": indentIcon,
		"-1": outdentIcon
	},
	link: linkIcon,
	list: {
		bullet: listBulletIcon,
		check: listCheckIcon,
		ordered: listOrderedIcon
	},
	script: {
		sub: subscriptIcon,
		super: superscriptIcon
	},
	strike: strikeIcon,
	table: tableIcon,
	underline: underlineIcon,
	video: videoIcon
}, DropdownIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>", optionsCounter = 0;
function toggleAriaAttribute(e, t) {
	e.setAttribute(t, `${e.getAttribute(t) !== "true"}`);
}
var picker_default = class {
	constructor(e) {
		this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
			this.togglePicker();
		}), this.label.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.togglePicker();
					break;
				case "Escape":
					this.escape(), e.preventDefault();
					break;
				default:
			}
		}), this.select.addEventListener("change", this.update.bind(this));
	}
	togglePicker() {
		this.container.classList.toggle("ql-expanded"), toggleAriaAttribute(this.label, "aria-expanded"), toggleAriaAttribute(this.options, "aria-hidden");
	}
	buildItem(e) {
		let t = document.createElement("span");
		t.tabIndex = "0", t.setAttribute("role", "button"), t.classList.add("ql-picker-item");
		let n = e.getAttribute("value");
		return n && t.setAttribute("data-value", n), e.textContent && t.setAttribute("data-label", e.textContent), t.addEventListener("click", () => {
			this.selectItem(t, !0);
		}), t.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.selectItem(t, !0), e.preventDefault();
					break;
				case "Escape":
					this.escape(), e.preventDefault();
					break;
				default:
			}
		}), t;
	}
	buildLabel() {
		let e = document.createElement("span");
		return e.classList.add("ql-picker-label"), e.innerHTML = DropdownIcon, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e;
	}
	buildOptions() {
		let e = document.createElement("span");
		e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = `ql-picker-options-${optionsCounter}`, optionsCounter += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, Array.from(this.select.options).forEach((t) => {
			let n = this.buildItem(t);
			e.appendChild(n), t.selected === !0 && this.selectItem(n);
		}), this.container.appendChild(e);
	}
	buildPicker() {
		Array.from(this.select.attributes).forEach((e) => {
			this.container.setAttribute(e.name, e.value);
		}), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
	}
	escape() {
		this.close(), setTimeout(() => this.label.focus(), 1);
	}
	close() {
		this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
	}
	selectItem(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
		e !== n && (n?.classList.remove("ql-selected"), e != null && (e.classList.add("ql-selected"), this.select.selectedIndex = Array.from(e.parentNode.children).indexOf(e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t && (this.select.dispatchEvent(new Event("change")), this.close())));
	}
	update() {
		let e;
		if (this.select.selectedIndex > -1) {
			let t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
			e = this.select.options[this.select.selectedIndex], this.selectItem(t);
		} else this.selectItem(null);
		let t = e != null && e !== this.select.querySelector("option[selected]");
		this.label.classList.toggle("ql-active", t);
	}
}, color_picker_default = class extends picker_default {
	constructor(e, t) {
		super(e), this.label.innerHTML = t, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((e) => {
			e.classList.add("ql-primary");
		});
	}
	buildItem(e) {
		let t = super.buildItem(e);
		return t.style.backgroundColor = e.getAttribute("value") || "", t;
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = this.label.querySelector(".ql-color-label"), r = e && e.getAttribute("data-value") || "";
		n && (n.tagName === "line" ? n.style.stroke = r : n.style.fill = r);
	}
}, icon_picker_default = class extends picker_default {
	constructor(e, t) {
		super(e), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((e) => {
			e.innerHTML = t[e.getAttribute("data-value") || ""];
		}), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = e || this.defaultItem;
		if (n != null) {
			if (this.label.innerHTML === n.innerHTML) return;
			this.label.innerHTML = n.innerHTML;
		}
	}
}, isScrollable = (e) => {
	let { overflowY: t } = getComputedStyle(e, null);
	return t !== "visible" && t !== "clip";
}, tooltip_default = class {
	constructor(e, t) {
		this.quill = e, this.boundsContainer = t || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, isScrollable(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
			this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
		}), this.hide();
	}
	hide() {
		this.root.classList.add("ql-hidden");
	}
	position(e) {
		let t = e.left + e.width / 2 - this.root.offsetWidth / 2, n = e.bottom + this.quill.root.scrollTop;
		this.root.style.left = `${t}px`, this.root.style.top = `${n}px`, this.root.classList.remove("ql-flip");
		let r = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect(), a = 0;
		if (i.right > r.right && (a = r.right - i.right, this.root.style.left = `${t + a}px`), i.left < r.left && (a = r.left - i.left, this.root.style.left = `${t + a}px`), i.bottom > r.bottom) {
			let t = i.bottom - i.top, r = e.bottom - e.top + t;
			this.root.style.top = `${n - r}px`, this.root.classList.add("ql-flip");
		}
		return a;
	}
	show() {
		this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
	}
}, ALIGNS = [
	!1,
	"center",
	"right",
	"justify"
], COLORS = /* @__PURE__ */ "#000000.#e60000.#ff9900.#ffff00.#008a00.#0066cc.#9933ff.#ffffff.#facccc.#ffebcc.#ffffcc.#cce8cc.#cce0f5.#ebd6ff.#bbbbbb.#f06666.#ffc266.#ffff66.#66b966.#66a3e0.#c285ff.#888888.#a10000.#b26b00.#b2b200.#006100.#0047b2.#6b24b2.#444444.#5c0000.#663d00.#666600.#003700.#002966.#3d1466".split("."), FONTS = [
	!1,
	"serif",
	"monospace"
], HEADERS = [
	"1",
	"2",
	"3",
	!1
], SIZES = [
	"small",
	!1,
	"large",
	"huge"
], BaseTheme = class extends theme_default {
	constructor(e, t) {
		super(e, t);
		let n = (t) => {
			if (!document.body.contains(e.root)) {
				document.body.removeEventListener("click", n);
				return;
			}
			this.tooltip != null && !this.tooltip.root.contains(t.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((e) => {
				e.container.contains(t.target) || e.close();
			});
		};
		e.emitter.listenDOM("click", document.body, n);
	}
	addModule(e) {
		let t = super.addModule(e);
		return e === "toolbar" && this.extendToolbar(t), t;
	}
	buildButtons(e, t) {
		Array.from(e).forEach((e) => {
			(e.getAttribute("class") || "").split(/\s+/).forEach((n) => {
				if (n.startsWith("ql-") && (n = n.slice(3), t[n] != null)) if (n === "direction") e.innerHTML = t[n][""] + t[n].rtl;
				else if (typeof t[n] == "string") e.innerHTML = t[n];
				else {
					let r = e.value || "";
					r != null && t[n][r] && (e.innerHTML = t[n][r]);
				}
			});
		});
	}
	buildPickers(e, t) {
		this.pickers = Array.from(e).map((e) => {
			if (e.classList.contains("ql-align") && (e.querySelector("option") ?? fillSelect(e, ALIGNS), typeof t.align == "object")) return new icon_picker_default(e, t.align);
			if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
				let n = e.classList.contains("ql-background") ? "background" : "color";
				return e.querySelector("option") ?? fillSelect(e, COLORS, n === "background" ? "#ffffff" : "#000000"), new color_picker_default(e, t[n]);
			}
			return e.querySelector("option") ?? (e.classList.contains("ql-font") ? fillSelect(e, FONTS) : e.classList.contains("ql-header") ? fillSelect(e, HEADERS) : e.classList.contains("ql-size") && fillSelect(e, SIZES)), new picker_default(e);
		}), this.quill.on(emitter_default.events.EDITOR_CHANGE, () => {
			this.pickers.forEach((e) => {
				e.update();
			});
		});
	}
};
BaseTheme.DEFAULTS = merge_default({}, theme_default.DEFAULTS, { modules: { toolbar: { handlers: {
	formula() {
		this.quill.theme.tooltip.edit("formula");
	},
	image() {
		let e = this.container.querySelector("input.ql-image[type=file]");
		e ?? (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), e.classList.add("ql-image"), e.addEventListener("change", () => {
			let t = this.quill.getSelection(!0);
			this.quill.uploader.upload(t, e.files), e.value = "";
		}), this.container.appendChild(e)), e.click();
	},
	video() {
		this.quill.theme.tooltip.edit("video");
	}
} } } });
var BaseTooltip = class extends tooltip_default {
	constructor(e, t) {
		super(e, t), this.textbox = this.root.querySelector("input[type=\"text\"]"), this.listen();
	}
	listen() {
		this.textbox.addEventListener("keydown", (e) => {
			e.key === "Enter" ? (this.save(), e.preventDefault()) : e.key === "Escape" && (this.cancel(), e.preventDefault());
		});
	}
	cancel() {
		this.hide(), this.restoreFocus();
	}
	edit() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
		t == null ? e !== this.root.getAttribute("data-mode") && (this.textbox.value = "") : this.textbox.value = t;
		let n = this.quill.getBounds(this.quill.selection.savedRange);
		n != null && this.position(n), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${e}`) || ""), this.root.setAttribute("data-mode", e);
	}
	restoreFocus() {
		this.quill.focus({ preventScroll: !0 });
	}
	save() {
		let { value: e } = this.textbox;
		switch (this.root.getAttribute("data-mode")) {
			case "link": {
				let { scrollTop: t } = this.quill.root;
				this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, emitter_default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, emitter_default.sources.USER)), this.quill.root.scrollTop = t;
				break;
			}
			case "video": e = extractVideoUrl(e);
			case "formula": {
				if (!e) break;
				let t = this.quill.getSelection(!0);
				if (t != null) {
					let n = t.index + t.length;
					this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), e, emitter_default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(n + 1, " ", emitter_default.sources.USER), this.quill.setSelection(n + 2, emitter_default.sources.USER);
				}
				break;
			}
			default:
		}
		this.textbox.value = "", this.hide();
	}
};
function extractVideoUrl(e) {
	let t = e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : e;
}
function fillSelect(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
	t.forEach((t) => {
		let r = document.createElement("option");
		t === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", String(t)), e.appendChild(r);
	});
}
var TOOLBAR_CONFIG$1 = [[
	"bold",
	"italic",
	"link"
], [
	{ header: 1 },
	{ header: 2 },
	"blockquote"
]], BubbleTooltip = class extends BaseTooltip {
	static TEMPLATE = [
		"<span class=\"ql-tooltip-arrow\"></span>",
		"<div class=\"ql-tooltip-editor\">",
		"<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">",
		"<a class=\"ql-close\"></a>",
		"</div>"
	].join("");
	constructor(e, t) {
		super(e, t), this.quill.on(emitter_default.events.EDITOR_CHANGE, (e, t, n, r) => {
			if (e === emitter_default.events.SELECTION_CHANGE) if (t != null && t.length > 0 && r === emitter_default.sources.USER) {
				this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
				let e = this.quill.getLines(t.index, t.length);
				if (e.length === 1) {
					let e = this.quill.getBounds(t);
					e != null && this.position(e);
				} else {
					let n = e[e.length - 1], r = this.quill.getIndex(n), i = Math.min(n.length() - 1, t.index + t.length - r), a = this.quill.getBounds(new Range(r, i));
					a != null && this.position(a);
				}
			} else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
		});
	}
	listen() {
		super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
			this.root.classList.remove("ql-editing");
		}), this.quill.on(emitter_default.events.SCROLL_OPTIMIZE, () => {
			setTimeout(() => {
				if (this.root.classList.contains("ql-hidden")) return;
				let e = this.quill.getSelection();
				if (e != null) {
					let t = this.quill.getBounds(e);
					t != null && this.position(t);
				}
			}, 1);
		});
	}
	cancel() {
		this.show();
	}
	position(e) {
		let t = super.position(e), n = this.root.querySelector(".ql-tooltip-arrow");
		return n.style.marginLeft = "", t !== 0 && (n.style.marginLeft = `${-1 * t - n.offsetWidth / 2}px`), t;
	}
}, BubbleTheme = class extends BaseTheme {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = TOOLBAR_CONFIG$1), super(e, t), this.quill.container.classList.add("ql-bubble");
	}
	extendToolbar(e) {
		this.tooltip = new BubbleTooltip(this.quill, this.options.bounds), e.container != null && (this.tooltip.root.appendChild(e.container), this.buildButtons(e.container.querySelectorAll("button"), icons_default), this.buildPickers(e.container.querySelectorAll("select"), icons_default));
	}
};
BubbleTheme.DEFAULTS = merge_default({}, BaseTheme.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	e ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, Quill.sources.USER);
} } } } });
var TOOLBAR_CONFIG = [
	[{ header: [
		"1",
		"2",
		"3",
		!1
	] }],
	[
		"bold",
		"italic",
		"underline",
		"link"
	],
	[{ list: "ordered" }, { list: "bullet" }],
	["clean"]
], SnowTooltip = class extends BaseTooltip {
	static TEMPLATE = [
		"<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>",
		"<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">",
		"<a class=\"ql-action\"></a>",
		"<a class=\"ql-remove\"></a>"
	].join("");
	preview = this.root.querySelector("a.ql-preview");
	listen() {
		super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
			this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
		}), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
			if (this.linkRange != null) {
				let e = this.linkRange;
				this.restoreFocus(), this.quill.formatText(e, "link", !1, emitter_default.sources.USER), delete this.linkRange;
			}
			e.preventDefault(), this.hide();
		}), this.quill.on(emitter_default.events.SELECTION_CHANGE, (e, t, n) => {
			if (e != null) {
				if (e.length === 0 && n === emitter_default.sources.USER) {
					let [t, n] = this.quill.scroll.descendant(Link, e.index);
					if (t != null) {
						this.linkRange = new Range(e.index - n, t.length());
						let r = Link.formats(t.domNode);
						this.preview.textContent = r, this.preview.setAttribute("href", r), this.show();
						let i = this.quill.getBounds(this.linkRange);
						i != null && this.position(i);
						return;
					}
				} else delete this.linkRange;
				this.hide();
			}
		});
	}
	show() {
		super.show(), this.root.removeAttribute("data-mode");
	}
}, SnowTheme = class extends BaseTheme {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = TOOLBAR_CONFIG), super(e, t), this.quill.container.classList.add("ql-snow");
	}
	extendToolbar(e) {
		e.container != null && (e.container.classList.add("ql-snow"), this.buildButtons(e.container.querySelectorAll("button"), icons_default), this.buildPickers(e.container.querySelectorAll("select"), icons_default), this.tooltip = new SnowTooltip(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
			key: "k",
			shortKey: !0
		}, (t, n) => {
			e.handlers.link.call(e, !n.format.link);
		}));
	}
};
SnowTheme.DEFAULTS = merge_default({}, BaseTheme.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	if (e) {
		let e = this.quill.getSelection();
		if (e == null || e.length === 0) return;
		let t = this.quill.getText(e);
		/^\S+@\S+\.\S+$/.test(t) && t.indexOf("mailto:") !== 0 && (t = `mailto:${t}`);
		let { tooltip: n } = this.quill.theme;
		n.edit("link", t);
	} else this.quill.format("link", !1, Quill.sources.USER);
} } } } });
var snow_default = SnowTheme;
core_default.register({
	"attributors/attribute/direction": DirectionAttribute,
	"attributors/class/align": AlignClass,
	"attributors/class/background": BackgroundClass,
	"attributors/class/color": ColorClass,
	"attributors/class/direction": DirectionClass,
	"attributors/class/font": FontClass,
	"attributors/class/size": SizeClass,
	"attributors/style/align": AlignStyle,
	"attributors/style/background": BackgroundStyle,
	"attributors/style/color": ColorStyle,
	"attributors/style/direction": DirectionStyle,
	"attributors/style/font": FontStyle,
	"attributors/style/size": SizeStyle
}, !0), core_default.register({
	"formats/align": AlignClass,
	"formats/direction": DirectionClass,
	"formats/indent": indent_default,
	"formats/background": BackgroundStyle,
	"formats/color": ColorStyle,
	"formats/font": FontClass,
	"formats/size": SizeClass,
	"formats/blockquote": blockquote_default,
	"formats/code-block": CodeBlock,
	"formats/header": header_default,
	"formats/list": ListItem,
	"formats/bold": bold_default,
	"formats/code": Code,
	"formats/italic": italic_default,
	"formats/link": Link,
	"formats/script": script_default,
	"formats/strike": strike_default,
	"formats/underline": underline_default,
	"formats/formula": formula_default,
	"formats/image": image_default,
	"formats/video": video_default,
	"modules/syntax": Syntax,
	"modules/table": table_default,
	"modules/toolbar": Toolbar,
	"themes/bubble": BubbleTheme,
	"themes/snow": snow_default,
	"ui/icons": icons_default,
	"ui/picker": picker_default,
	"ui/icon-picker": icon_picker_default,
	"ui/color-picker": color_picker_default,
	"ui/tooltip": tooltip_default
}, !0);
var quill_default = core_default, emoji_list_default = [
	{
		name: "100",
		unicode: "1f4af",
		shortname: ":100:",
		code_decimal: "&#128175;",
		category: "s",
		emoji_order: "2119"
	},
	{
		name: "1234",
		unicode: "1f522",
		shortname: ":1234:",
		code_decimal: "&#128290;",
		category: "s",
		emoji_order: "2122"
	},
	{
		name: "grinning",
		unicode: "1f600",
		shortname: ":grinning:",
		code_decimal: "&#128512;",
		category: "p",
		emoji_order: "1"
	},
	{
		name: "grin",
		unicode: "1f601",
		shortname: ":grin:",
		code_decimal: "&#128513;",
		category: "p",
		emoji_order: "2"
	},
	{
		name: "joy",
		unicode: "1f602",
		shortname: ":joy:",
		code_decimal: "&#128514;",
		category: "p",
		emoji_order: "3"
	},
	{
		name: "rolling_on_the_floor_laughing",
		unicode: "1f923",
		shortname: ":rofl:",
		code_decimal: "&#129315;",
		category: "p",
		emoji_order: "4"
	},
	{
		name: "smiley",
		unicode: "1f603",
		shortname: ":smiley:",
		code_decimal: "&#128515;",
		category: "p",
		emoji_order: "5"
	},
	{
		name: "smile",
		unicode: "1f604",
		shortname: ":smile:",
		code_decimal: "&#128516;",
		category: "p",
		emoji_order: "6"
	},
	{
		name: "sweat_smile",
		unicode: "1f605",
		shortname: ":sweat_smile:",
		code_decimal: "&#128517;",
		category: "p",
		emoji_order: "7"
	},
	{
		name: "laughing",
		unicode: "1f606",
		shortname: ":laughing:",
		code_decimal: "&#128518;",
		category: "p",
		emoji_order: "8"
	},
	{
		name: "wink",
		unicode: "1f609",
		shortname: ":wink:",
		code_decimal: "&#128521;",
		category: "p",
		emoji_order: "9"
	},
	{
		name: "blush",
		unicode: "1f60a",
		shortname: ":blush:",
		code_decimal: "&#128522;",
		category: "p",
		emoji_order: "10"
	},
	{
		name: "yum",
		unicode: "1f60b",
		shortname: ":yum:",
		code_decimal: "&#128523;",
		category: "p",
		emoji_order: "11"
	},
	{
		name: "sunglasses",
		unicode: "1f60e",
		shortname: ":sunglasses:",
		code_decimal: "&#128526;",
		category: "p",
		emoji_order: "12"
	},
	{
		name: "heart_eyes",
		unicode: "1f60d",
		shortname: ":heart_eyes:",
		code_decimal: "&#128525;",
		category: "p",
		emoji_order: "13"
	},
	{
		name: "kissing_heart",
		unicode: "1f618",
		shortname: ":kissing_heart:",
		code_decimal: "&#128536;",
		category: "p",
		emoji_order: "14"
	},
	{
		name: "kissing",
		unicode: "1f617",
		shortname: ":kissing:",
		code_decimal: "&#128535;",
		category: "p",
		emoji_order: "15"
	},
	{
		name: "kissing_smiling_eyes",
		unicode: "1f619",
		shortname: ":kissing_smiling_eyes:",
		code_decimal: "&#128537;",
		category: "p",
		emoji_order: "16"
	},
	{
		name: "kissing_closed_eyes",
		unicode: "1f61a",
		shortname: ":kissing_closed_eyes:",
		code_decimal: "&#128538;",
		category: "p",
		emoji_order: "17"
	},
	{
		name: "slightly_smiling_face",
		unicode: "1f642",
		shortname: ":slight_smile:",
		code_decimal: "&#128578;",
		category: "p",
		emoji_order: "19"
	},
	{
		name: "hugging_face",
		unicode: "1f917",
		shortname: ":hugging:",
		code_decimal: "&#129303;",
		category: "p",
		emoji_order: "20"
	},
	{
		name: "thinking_face",
		unicode: "1f914",
		shortname: ":thinking:",
		code_decimal: "&#129300;",
		category: "p",
		emoji_order: "21"
	},
	{
		name: "neutral_face",
		unicode: "1f610",
		shortname: ":neutral_face:",
		code_decimal: "&#128528;",
		category: "p",
		emoji_order: "22"
	},
	{
		name: "expressionless",
		unicode: "1f611",
		shortname: ":expressionless:",
		code_decimal: "&#128529;",
		category: "p",
		emoji_order: "23"
	},
	{
		name: "no_mouth",
		unicode: "1f636",
		shortname: ":no_mouth:",
		code_decimal: "&#128566;",
		category: "p",
		emoji_order: "24"
	},
	{
		name: "face_with_rolling_eyes",
		unicode: "1f644",
		shortname: ":rolling_eyes:",
		code_decimal: "&#128580;",
		category: "p",
		emoji_order: "25"
	},
	{
		name: "smirk",
		unicode: "1f60f",
		shortname: ":smirk:",
		code_decimal: "&#128527;",
		category: "p",
		emoji_order: "26"
	},
	{
		name: "persevere",
		unicode: "1f623",
		shortname: ":persevere:",
		code_decimal: "&#128547;",
		category: "p",
		emoji_order: "27"
	},
	{
		name: "disappointed_relieved",
		unicode: "1f625",
		shortname: ":disappointed_relieved:",
		code_decimal: "&#128549;",
		category: "p",
		emoji_order: "28"
	},
	{
		name: "open_mouth",
		unicode: "1f62e",
		shortname: ":open_mouth:",
		code_decimal: "&#128558;",
		category: "p",
		emoji_order: "29"
	},
	{
		name: "zipper_mouth_face",
		unicode: "1f910",
		shortname: ":zipper_mouth:",
		code_decimal: "&#129296;",
		category: "p",
		emoji_order: "30"
	},
	{
		name: "hushed",
		unicode: "1f62f",
		shortname: ":hushed:",
		code_decimal: "&#128559;",
		category: "p",
		emoji_order: "31"
	},
	{
		name: "sleepy",
		unicode: "1f62a",
		shortname: ":sleepy:",
		code_decimal: "&#128554;",
		category: "p",
		emoji_order: "32"
	},
	{
		name: "tired_face",
		unicode: "1f62b",
		shortname: ":tired_face:",
		code_decimal: "&#128555;",
		category: "p",
		emoji_order: "33"
	},
	{
		name: "sleeping",
		unicode: "1f634",
		shortname: ":sleeping:",
		code_decimal: "&#128564;",
		category: "p",
		emoji_order: "34"
	},
	{
		name: "relieved",
		unicode: "1f60c",
		shortname: ":relieved:",
		code_decimal: "&#128524;",
		category: "p",
		emoji_order: "35"
	},
	{
		name: "nerd_face",
		unicode: "1f913",
		shortname: ":nerd:",
		code_decimal: "&#129299;",
		category: "p",
		emoji_order: "36"
	},
	{
		name: "stuck_out_tongue",
		unicode: "1f61b",
		shortname: ":stuck_out_tongue:",
		code_decimal: "&#128539;",
		category: "p",
		emoji_order: "37"
	},
	{
		name: "stuck_out_tongue_winking_eye",
		unicode: "1f61c",
		shortname: ":stuck_out_tongue_winking_eye:",
		code_decimal: "&#128540;",
		category: "p",
		emoji_order: "38"
	},
	{
		name: "stuck_out_tongue_closed_eyes",
		unicode: "1f61d",
		shortname: ":stuck_out_tongue_closed_eyes:",
		code_decimal: "&#128541;",
		category: "p",
		emoji_order: "39"
	},
	{
		name: "unamused",
		unicode: "1f612",
		shortname: ":unamused:",
		code_decimal: "&#128530;",
		category: "p",
		emoji_order: "41"
	},
	{
		name: "sweat",
		unicode: "1f613",
		shortname: ":sweat:",
		code_decimal: "&#128531;",
		category: "p",
		emoji_order: "42"
	},
	{
		name: "pensive",
		unicode: "1f614",
		shortname: ":pensive:",
		code_decimal: "&#128532;",
		category: "p",
		emoji_order: "43"
	},
	{
		name: "confused",
		unicode: "1f615",
		shortname: ":confused:",
		code_decimal: "&#128533;",
		category: "p",
		emoji_order: "44"
	},
	{
		name: "upside_down_face",
		unicode: "1f643",
		shortname: ":upside_down:",
		code_decimal: "&#128579;",
		category: "p",
		emoji_order: "45"
	},
	{
		name: "money_mouth_face",
		unicode: "1f911",
		shortname: ":money_mouth:",
		code_decimal: "&#129297;",
		category: "p",
		emoji_order: "46"
	},
	{
		name: "astonished",
		unicode: "1f632",
		shortname: ":astonished:",
		code_decimal: "&#128562;",
		category: "p",
		emoji_order: "47"
	},
	{
		name: "slightly_frowning_face",
		unicode: "1f641",
		shortname: ":slight_frown:",
		code_decimal: "&#128577;",
		category: "p",
		emoji_order: "49"
	},
	{
		name: "confounded",
		unicode: "1f616",
		shortname: ":confounded:",
		code_decimal: "&#128534;",
		category: "p",
		emoji_order: "50"
	},
	{
		name: "disappointed",
		unicode: "1f61e",
		shortname: ":disappointed:",
		code_decimal: "&#128542;",
		category: "p",
		emoji_order: "51"
	},
	{
		name: "worried",
		unicode: "1f61f",
		shortname: ":worried:",
		code_decimal: "&#128543;",
		category: "p",
		emoji_order: "52"
	},
	{
		name: "triumph",
		unicode: "1f624",
		shortname: ":triumph:",
		code_decimal: "&#128548;",
		category: "p",
		emoji_order: "53"
	},
	{
		name: "cry",
		unicode: "1f622",
		shortname: ":cry:",
		code_decimal: "&#128546;",
		category: "p",
		emoji_order: "54"
	},
	{
		name: "sob",
		unicode: "1f62d",
		shortname: ":sob:",
		code_decimal: "&#128557;",
		category: "p",
		emoji_order: "55"
	},
	{
		name: "frowning",
		unicode: "1f626",
		shortname: ":frowning:",
		code_decimal: "&#128550;",
		category: "p",
		emoji_order: "56"
	},
	{
		name: "anguished",
		unicode: "1f627",
		shortname: ":anguished:",
		code_decimal: "&#128551;",
		category: "p",
		emoji_order: "57"
	},
	{
		name: "fearful",
		unicode: "1f628",
		shortname: ":fearful:",
		code_decimal: "&#128552;",
		category: "p",
		emoji_order: "58"
	},
	{
		name: "weary",
		unicode: "1f629",
		shortname: ":weary:",
		code_decimal: "&#128553;",
		category: "p",
		emoji_order: "59"
	},
	{
		name: "grimacing",
		unicode: "1f62c",
		shortname: ":grimacing:",
		code_decimal: "&#128556;",
		category: "p",
		emoji_order: "60"
	},
	{
		name: "cold_sweat",
		unicode: "1f630",
		shortname: ":cold_sweat:",
		code_decimal: "&#128560;",
		category: "p",
		emoji_order: "61"
	},
	{
		name: "scream",
		unicode: "1f631",
		shortname: ":scream:",
		code_decimal: "&#128561;",
		category: "p",
		emoji_order: "62"
	},
	{
		name: "flushed",
		unicode: "1f633",
		shortname: ":flushed:",
		code_decimal: "&#128563;",
		category: "p",
		emoji_order: "63"
	},
	{
		name: "dizzy_face",
		unicode: "1f635",
		shortname: ":dizzy_face:",
		code_decimal: "&#128565;",
		category: "p",
		emoji_order: "64"
	},
	{
		name: "rage",
		unicode: "1f621",
		shortname: ":rage:",
		code_decimal: "&#128545;",
		category: "p",
		emoji_order: "65"
	},
	{
		name: "angry",
		unicode: "1f620",
		shortname: ":angry:",
		code_decimal: "&#128544;",
		category: "p",
		emoji_order: "66"
	},
	{
		name: "innocent",
		unicode: "1f607",
		shortname: ":innocent:",
		code_decimal: "&#128519;",
		category: "p",
		emoji_order: "67"
	},
	{
		name: "mask",
		unicode: "1f637",
		shortname: ":mask:",
		code_decimal: "&#128567;",
		category: "p",
		emoji_order: "71"
	},
	{
		name: "face_with_thermometer",
		unicode: "1f912",
		shortname: ":thermometer_face:",
		code_decimal: "&#129298;",
		category: "p",
		emoji_order: "72"
	},
	{
		name: "face_with_head_bandage",
		unicode: "1f915",
		shortname: ":head_bandage:",
		code_decimal: "&#129301;",
		category: "p",
		emoji_order: "73"
	},
	{
		name: "smiling_imp",
		unicode: "1f608",
		shortname: ":smiling_imp:",
		code_decimal: "&#128520;",
		category: "p",
		emoji_order: "76"
	},
	{
		name: "imp",
		unicode: "1f47f",
		shortname: ":imp:",
		code_decimal: "&#128127;",
		category: "p",
		emoji_order: "77"
	},
	{
		name: "japanese_ogre",
		unicode: "1f479",
		shortname: ":japanese_ogre:",
		code_decimal: "&#128121;",
		category: "p",
		emoji_order: "78"
	},
	{
		name: "japanese_goblin",
		unicode: "1f47a",
		shortname: ":japanese_goblin:",
		code_decimal: "&#128122;",
		category: "p",
		emoji_order: "79"
	},
	{
		name: "skull",
		unicode: "1f480",
		shortname: ":skull:",
		code_decimal: "&#128128;",
		category: "p",
		emoji_order: "80"
	},
	{
		name: "skull_and_crossbones",
		unicode: "2620",
		shortname: ":skull_crossbones:",
		code_decimal: "&#9760;",
		category: "o",
		emoji_order: "81"
	},
	{
		name: "ghost",
		unicode: "1f47b",
		shortname: ":ghost:",
		code_decimal: "&#128123;",
		category: "p",
		emoji_order: "82"
	},
	{
		name: "alien",
		unicode: "1f47d",
		shortname: ":alien:",
		code_decimal: "&#128125;",
		category: "p",
		emoji_order: "83"
	},
	{
		name: "space_invader",
		unicode: "1f47e",
		shortname: ":space_invader:",
		code_decimal: "&#128126;",
		category: "a",
		emoji_order: "84"
	},
	{
		name: "robot_face",
		unicode: "1f916",
		shortname: ":robot:",
		code_decimal: "&#129302;",
		category: "p",
		emoji_order: "85"
	},
	{
		name: "hankey",
		unicode: "1f4a9",
		shortname: ":poop:",
		code_decimal: "&#128169;",
		category: "p",
		emoji_order: "86"
	},
	{
		name: "smiley_cat",
		unicode: "1f63a",
		shortname: ":smiley_cat:",
		code_decimal: "&#128570;",
		category: "p",
		emoji_order: "87"
	},
	{
		name: "smile_cat",
		unicode: "1f638",
		shortname: ":smile_cat:",
		code_decimal: "&#128568;",
		category: "p",
		emoji_order: "88"
	},
	{
		name: "joy_cat",
		unicode: "1f639",
		shortname: ":joy_cat:",
		code_decimal: "&#128569;",
		category: "p",
		emoji_order: "89"
	},
	{
		name: "heart_eyes_cat",
		unicode: "1f63b",
		shortname: ":heart_eyes_cat:",
		code_decimal: "&#128571;",
		category: "p",
		emoji_order: "90"
	},
	{
		name: "smirk_cat",
		unicode: "1f63c",
		shortname: ":smirk_cat:",
		code_decimal: "&#128572;",
		category: "p",
		emoji_order: "91"
	},
	{
		name: "kissing_cat",
		unicode: "1f63d",
		shortname: ":kissing_cat:",
		code_decimal: "&#128573;",
		category: "p",
		emoji_order: "92"
	},
	{
		name: "scream_cat",
		unicode: "1f640",
		shortname: ":scream_cat:",
		code_decimal: "&#128576;",
		category: "p",
		emoji_order: "93"
	},
	{
		name: "crying_cat_face",
		unicode: "1f63f",
		shortname: ":crying_cat_face:",
		code_decimal: "&#128575;",
		category: "p",
		emoji_order: "94"
	},
	{
		name: "pouting_cat",
		unicode: "1f63e",
		shortname: ":pouting_cat:",
		code_decimal: "&#128574;",
		category: "p",
		emoji_order: "95"
	},
	{
		name: "see_no_evil",
		unicode: "1f648",
		shortname: ":see_no_evil:",
		code_decimal: "&#128584;",
		category: "n",
		emoji_order: "96"
	},
	{
		name: "hear_no_evil",
		unicode: "1f649",
		shortname: ":hear_no_evil:",
		code_decimal: "&#128585;",
		category: "n",
		emoji_order: "97"
	},
	{
		name: "speak_no_evil",
		unicode: "1f64a",
		shortname: ":speak_no_evil:",
		code_decimal: "&#128586;",
		category: "n",
		emoji_order: "98"
	},
	{
		name: "boy",
		unicode: "1f466",
		shortname: ":boy:",
		code_decimal: "&#128102;",
		category: "p",
		emoji_order: "99"
	},
	{
		name: "girl",
		unicode: "1f467",
		shortname: ":girl:",
		code_decimal: "&#128103;",
		category: "p",
		emoji_order: "105"
	},
	{
		name: "man",
		unicode: "1f468",
		shortname: ":man:",
		code_decimal: "&#128104;",
		category: "p",
		emoji_order: "111"
	},
	{
		name: "woman",
		unicode: "1f469",
		shortname: ":woman:",
		code_decimal: "&#128105;",
		category: "p",
		emoji_order: "117"
	},
	{
		name: "older_man",
		unicode: "1f474",
		shortname: ":older_man:",
		code_decimal: "&#128116;",
		category: "p",
		emoji_order: "123"
	},
	{
		name: "older_woman",
		unicode: "1f475",
		shortname: ":older_woman:",
		code_decimal: "&#128117;",
		category: "p",
		emoji_order: "129"
	},
	{
		name: "baby",
		unicode: "1f476",
		shortname: ":baby:",
		code_decimal: "&#128118;",
		category: "p",
		emoji_order: "135"
	},
	{
		name: "angel",
		unicode: "1f47c",
		shortname: ":angel:",
		code_decimal: "&#128124;",
		category: "p",
		emoji_order: "141"
	},
	{
		name: "cop",
		unicode: "1f46e",
		shortname: ":cop:",
		code_decimal: "&#128110;",
		category: "p",
		emoji_order: "339"
	},
	{
		name: "sleuth_or_spy",
		unicode: "1f575",
		shortname: ":spy:",
		code_decimal: "&#128373;",
		category: "p",
		emoji_order: "357"
	},
	{
		name: "guardsman",
		unicode: "1f482",
		shortname: ":guardsman:",
		code_decimal: "&#128130;",
		category: "p",
		emoji_order: "375"
	},
	{
		name: "construction_worker",
		unicode: "1f477",
		shortname: ":construction_worker:",
		code_decimal: "&#128119;",
		category: "p",
		emoji_order: "393"
	},
	{
		name: "man_with_turban",
		unicode: "1f473",
		shortname: ":man_with_turban:",
		code_decimal: "&#128115;",
		category: "p",
		emoji_order: "411"
	},
	{
		name: "person_with_blond_hair",
		unicode: "1f471",
		shortname: ":person_with_blond_hair:",
		code_decimal: "&#128113;",
		category: "p",
		emoji_order: "429"
	},
	{
		name: "santa",
		unicode: "1f385",
		shortname: ":santa:",
		code_decimal: "&#127877;",
		category: "p",
		emoji_order: "447"
	},
	{
		name: "princess",
		unicode: "1f478",
		shortname: ":princess:",
		code_decimal: "&#128120;",
		category: "p",
		emoji_order: "459"
	},
	{
		name: "bride_with_veil",
		unicode: "1f470",
		shortname: ":bride_with_veil:",
		code_decimal: "&#128112;",
		category: "p",
		emoji_order: "471"
	},
	{
		name: "man_with_gua_pi_mao",
		unicode: "1f472",
		shortname: ":man_with_gua_pi_mao:",
		code_decimal: "&#128114;",
		category: "p",
		emoji_order: "489"
	},
	{
		name: "person_frowning",
		unicode: "1f64d",
		shortname: ":person_frowning:",
		code_decimal: "&#128589;",
		category: "p",
		emoji_order: "495"
	},
	{
		name: "person_with_pouting_face",
		unicode: "1f64e",
		shortname: ":person_with_pouting_face:",
		code_decimal: "&#128590;",
		category: "p",
		emoji_order: "513"
	},
	{
		name: "no_good",
		unicode: "1f645",
		shortname: ":no_good:",
		code_decimal: "&#128581;",
		category: "p",
		emoji_order: "531"
	},
	{
		name: "ok_woman",
		unicode: "1f646",
		shortname: ":ok_woman:",
		code_decimal: "&#128582;",
		category: "p",
		emoji_order: "549"
	},
	{
		name: "information_desk_person",
		unicode: "1f481",
		shortname: ":information_desk_person:",
		code_decimal: "&#128129;",
		category: "p",
		emoji_order: "567"
	},
	{
		name: "raising_hand",
		unicode: "1f64b",
		shortname: ":raising_hand:",
		code_decimal: "&#128587;",
		category: "p",
		emoji_order: "585"
	},
	{
		name: "bow",
		unicode: "1f647",
		shortname: ":bow:",
		code_decimal: "&#128583;",
		category: "p",
		emoji_order: "603"
	},
	{
		name: "massage",
		unicode: "1f486",
		shortname: ":massage:",
		code_decimal: "&#128134;",
		category: "p",
		emoji_order: "657"
	},
	{
		name: "haircut",
		unicode: "1f487",
		shortname: ":haircut:",
		code_decimal: "&#128135;",
		category: "p",
		emoji_order: "675"
	},
	{
		name: "walking",
		unicode: "1f6b6",
		shortname: ":walking:",
		code_decimal: "&#128694;",
		category: "p",
		emoji_order: "693"
	},
	{
		name: "runner",
		unicode: "1f3c3",
		shortname: ":runner:",
		code_decimal: "&#127939;",
		category: "p",
		emoji_order: "711"
	},
	{
		name: "dancer",
		unicode: "1f483",
		shortname: ":dancer:",
		code_decimal: "&#128131;",
		category: "p",
		emoji_order: "729"
	},
	{
		name: "dancers",
		unicode: "1f46f",
		shortname: ":dancers:",
		code_decimal: "&#128111;",
		category: "p",
		emoji_order: "741"
	},
	{
		name: "man_in_business_suit_levitating",
		unicode: "1f574",
		shortname: ":levitate:",
		code_decimal: "&#128372;",
		category: "a",
		emoji_order: "759"
	},
	{
		name: "speaking_head_in_silhouette",
		unicode: "1f5e3",
		shortname: ":speaking_head:",
		code_decimal: "&#128483;",
		category: "p",
		emoji_order: "765"
	},
	{
		name: "bust_in_silhouette",
		unicode: "1f464",
		shortname: ":bust_in_silhouette:",
		code_decimal: "&#128100;",
		category: "p",
		emoji_order: "766"
	},
	{
		name: "busts_in_silhouette",
		unicode: "1f465",
		shortname: ":busts_in_silhouette:",
		code_decimal: "&#128101;",
		category: "p",
		emoji_order: "767"
	},
	{
		name: "horse_racing",
		unicode: "1f3c7",
		shortname: ":horse_racing:",
		code_decimal: "&#127943;",
		category: "a",
		emoji_order: "769"
	},
	{
		name: "skier",
		unicode: "26f7",
		shortname: ":skier:",
		code_decimal: "&#9975;",
		category: "a",
		emoji_order: "775"
	},
	{
		name: "snowboarder",
		unicode: "1f3c2",
		shortname: ":snowboarder:",
		code_decimal: "&#127938;",
		category: "a",
		emoji_order: "776"
	},
	{
		name: "golfer",
		unicode: "1f3cc",
		shortname: ":golfer:",
		code_decimal: "&#127948;",
		category: "a",
		emoji_order: "782"
	},
	{
		name: "surfer",
		unicode: "1f3c4",
		shortname: ":surfer:",
		code_decimal: "&#127940;",
		category: "a",
		emoji_order: "800"
	},
	{
		name: "rowboat",
		unicode: "1f6a3",
		shortname: ":rowboat:",
		code_decimal: "&#128675;",
		category: "a",
		emoji_order: "818"
	},
	{
		name: "swimmer",
		unicode: "1f3ca",
		shortname: ":swimmer:",
		code_decimal: "&#127946;",
		category: "a",
		emoji_order: "836"
	},
	{
		name: "person_with_ball",
		unicode: "26f9",
		shortname: ":basketball_player:",
		code_decimal: "&#9977;",
		category: "a",
		emoji_order: "854"
	},
	{
		name: "weight_lifter",
		unicode: "1f3cb",
		shortname: ":lifter:",
		code_decimal: "&#127947;",
		category: "a",
		emoji_order: "872"
	},
	{
		name: "bicyclist",
		unicode: "1f6b4",
		shortname: ":bicyclist:",
		code_decimal: "&#128692;",
		category: "a",
		emoji_order: "890"
	},
	{
		name: "mountain_bicyclist",
		unicode: "1f6b5",
		shortname: ":mountain_bicyclist:",
		code_decimal: "&#128693;",
		category: "a",
		emoji_order: "908"
	},
	{
		name: "racing_car",
		unicode: "1f3ce",
		shortname: ":race_car:",
		code_decimal: "&#127950;",
		category: "t",
		emoji_order: "926"
	},
	{
		name: "racing_motorcycle",
		unicode: "1f3cd",
		shortname: ":motorcycle:",
		code_decimal: "&#127949;",
		category: "t",
		emoji_order: "927"
	},
	{
		name: "couple",
		unicode: "1f46b",
		shortname: ":couple:",
		code_decimal: "&#128107;",
		category: "p",
		emoji_order: "1018"
	},
	{
		name: "two_men_holding_hands",
		unicode: "1f46c",
		shortname: ":two_men_holding_hands:",
		code_decimal: "&#128108;",
		category: "p",
		emoji_order: "1024"
	},
	{
		name: "two_women_holding_hands",
		unicode: "1f46d",
		shortname: ":two_women_holding_hands:",
		code_decimal: "&#128109;",
		category: "p",
		emoji_order: "1030"
	},
	{
		name: "couplekiss",
		unicode: "1f48f",
		shortname: ":couplekiss:",
		code_decimal: "&#128143;",
		category: "p",
		emoji_order: "1036"
	},
	{
		name: "couple_with_heart",
		unicode: "1f491",
		shortname: ":couple_with_heart:",
		code_decimal: "&#128145;",
		category: "p",
		emoji_order: "1040"
	},
	{
		name: "family",
		unicode: "1f46a",
		shortname: ":family:",
		code_decimal: "&#128106;",
		category: "p",
		emoji_order: "1044"
	},
	{
		name: "muscle",
		unicode: "1f4aa",
		shortname: ":muscle:",
		code_decimal: "&#128170;",
		category: "p",
		emoji_order: "1080"
	},
	{
		name: "point_left",
		unicode: "1f448",
		shortname: ":point_left:",
		code_decimal: "&#128072;",
		category: "p",
		emoji_order: "1092"
	},
	{
		name: "point_right",
		unicode: "1f449",
		shortname: ":point_right:",
		code_decimal: "&#128073;",
		category: "p",
		emoji_order: "1098"
	},
	{
		name: "point_up",
		unicode: "261d",
		shortname: ":point_up:",
		code_decimal: "&#9757;",
		category: "p",
		emoji_order: "1104"
	},
	{
		name: "point_up_2",
		unicode: "1f446",
		shortname: ":point_up_2:",
		code_decimal: "&#128070;",
		category: "p",
		emoji_order: "1110"
	},
	{
		name: "middle_finger",
		unicode: "1f595",
		shortname: ":middle_finger:",
		code_decimal: "&#128405;",
		category: "p",
		emoji_order: "1116"
	},
	{
		name: "point_down",
		unicode: "1f447",
		shortname: ":point_down:",
		code_decimal: "&#128071;",
		category: "p",
		emoji_order: "1122"
	},
	{
		name: "v",
		unicode: "270c",
		shortname: ":v:",
		code_decimal: "&#9996;",
		category: "p",
		emoji_order: "1128"
	},
	{
		name: "the_horns",
		unicode: "1f918",
		shortname: ":metal_tone2:",
		code_decimal: "&#129304;",
		category: "p",
		emoji_order: "1146"
	},
	{
		name: "raised_hand_with_fingers_splayed",
		unicode: "1f590",
		shortname: ":hand_splayed:",
		code_decimal: "&#128400;",
		category: "p",
		emoji_order: "1158"
	},
	{
		name: "ok_hand",
		unicode: "1f44c",
		shortname: ":ok_hand:",
		code_decimal: "&#128076;",
		category: "p",
		emoji_order: "1170"
	},
	{
		name: "thumbsup",
		unicode: "1f44d",
		shortname: ":thumbsup:",
		code_decimal: "&#128077;",
		category: "p",
		emoji_order: "1176"
	},
	{
		name: "thumbsdown",
		unicode: "1f44e",
		shortname: ":thumbsdown:",
		code_decimal: "&#128078;",
		category: "p",
		emoji_order: "1182"
	},
	{
		name: "fist",
		unicode: "270a",
		shortname: ":fist:",
		code_decimal: "&#9994;",
		category: "p",
		emoji_order: "1188"
	},
	{
		name: "facepunch",
		unicode: "1f44a",
		shortname: ":punch:",
		code_decimal: "&#128074;",
		category: "p",
		emoji_order: "1194"
	},
	{
		name: "wave",
		unicode: "1f44b",
		shortname: ":wave:",
		code_decimal: "&#128075;",
		category: "p",
		emoji_order: "1218"
	},
	{
		name: "clap",
		unicode: "1f44f",
		shortname: ":clap:",
		code_decimal: "&#128079;",
		category: "p",
		emoji_order: "1224"
	},
	{
		name: "writing_hand",
		unicode: "270d",
		shortname: ":writing_hand:",
		code_decimal: "&#9997;",
		category: "p",
		emoji_order: "1230"
	},
	{
		name: "open_hands",
		unicode: "1f450",
		shortname: ":open_hands:",
		code_decimal: "&#128080;",
		category: "p",
		emoji_order: "1236"
	},
	{
		name: "raised_hands",
		unicode: "1f64c",
		shortname: ":raised_hands:",
		code_decimal: "&#128588;",
		category: "p",
		emoji_order: "1242"
	},
	{
		name: "pray",
		unicode: "1f64f",
		shortname: ":pray:",
		code_decimal: "&#128591;",
		category: "p",
		emoji_order: "1248"
	},
	{
		name: "nail_care",
		unicode: "1f485",
		shortname: ":nail_care:",
		code_decimal: "&#128133;",
		category: "p",
		emoji_order: "1260"
	},
	{
		name: "ear",
		unicode: "1f442",
		shortname: ":ear:",
		code_decimal: "&#128066;",
		category: "p",
		emoji_order: "1266"
	},
	{
		name: "nose",
		unicode: "1f443",
		shortname: ":nose:",
		code_decimal: "&#128067;",
		category: "p",
		emoji_order: "1272"
	},
	{
		name: "footprints",
		unicode: "1f463",
		shortname: ":footprints:",
		code_decimal: "&#128099;",
		category: "p",
		emoji_order: "1278"
	},
	{
		name: "eyes",
		unicode: "1f440",
		shortname: ":eyes:",
		code_decimal: "&#128064;",
		category: "p",
		emoji_order: "1279"
	},
	{
		name: "eye",
		unicode: "1f441",
		shortname: ":eye:",
		code_decimal: "&#128065;",
		category: "p",
		emoji_order: "1280"
	},
	{
		name: "tongue",
		unicode: "1f445",
		shortname: ":tongue:",
		code_decimal: "&#128069;",
		category: "p",
		emoji_order: "1282"
	},
	{
		name: "lips",
		unicode: "1f444",
		shortname: ":lips:",
		code_decimal: "&#128068;",
		category: "p",
		emoji_order: "1283"
	},
	{
		name: "kiss",
		unicode: "1f48b",
		shortname: ":kiss:",
		code_decimal: "&#128139;",
		category: "p",
		emoji_order: "1284"
	},
	{
		name: "cupid",
		unicode: "1f498",
		shortname: ":cupid:",
		code_decimal: "&#128152;",
		category: "s",
		emoji_order: "1285"
	},
	{
		name: "heart",
		unicode: "2764",
		shortname: ":heart:",
		code_decimal: "&#10084;",
		category: "s",
		emoji_order: "1286"
	},
	{
		name: "heartbeat",
		unicode: "1f493",
		shortname: ":heartbeat:",
		code_decimal: "&#128147;",
		category: "s",
		emoji_order: "1287"
	},
	{
		name: "broken_heart",
		unicode: "1f494",
		shortname: ":broken_heart:",
		code_decimal: "&#128148;",
		category: "s",
		emoji_order: "1288"
	},
	{
		name: "two_hearts",
		unicode: "1f495",
		shortname: ":two_hearts:",
		code_decimal: "&#128149;",
		category: "s",
		emoji_order: "1289"
	},
	{
		name: "sparkling_heart",
		unicode: "1f496",
		shortname: ":sparkling_heart:",
		code_decimal: "&#128150;",
		category: "s",
		emoji_order: "1290"
	},
	{
		name: "heartpulse",
		unicode: "1f497",
		shortname: ":heartpulse:",
		code_decimal: "&#128151;",
		category: "s",
		emoji_order: "1291"
	},
	{
		name: "blue_heart",
		unicode: "1f499",
		shortname: ":blue_heart:",
		code_decimal: "&#128153;",
		category: "s",
		emoji_order: "1292"
	},
	{
		name: "green_heart",
		unicode: "1f49a",
		shortname: ":green_heart:",
		code_decimal: "&#128154;",
		category: "s",
		emoji_order: "1293"
	},
	{
		name: "yellow_heart",
		unicode: "1f49b",
		shortname: ":yellow_heart:",
		code_decimal: "&#128155;",
		category: "s",
		emoji_order: "1294"
	},
	{
		name: "purple_heart",
		unicode: "1f49c",
		shortname: ":purple_heart:",
		code_decimal: "&#128156;",
		category: "s",
		emoji_order: "1295"
	},
	{
		name: "gift_heart",
		unicode: "1f49d",
		shortname: ":gift_heart:",
		code_decimal: "&#128157;",
		category: "s",
		emoji_order: "1297"
	},
	{
		name: "revolving_hearts",
		unicode: "1f49e",
		shortname: ":revolving_hearts:",
		code_decimal: "&#128158;",
		category: "s",
		emoji_order: "1298"
	},
	{
		name: "heart_decoration",
		unicode: "1f49f",
		shortname: ":heart_decoration:",
		code_decimal: "&#128159;",
		category: "s",
		emoji_order: "1299"
	},
	{
		name: "heart_exclamation",
		unicode: "2763",
		shortname: ":heart_exclamation:",
		code_decimal: "&#10083;",
		category: "s",
		emoji_order: "1300"
	},
	{
		name: "love_letter",
		unicode: "1f48c",
		shortname: ":love_letter:",
		code_decimal: "&#128140;",
		category: "o",
		emoji_order: "1301"
	},
	{
		name: "zzz",
		unicode: "1f4a4",
		shortname: ":zzz:",
		code_decimal: "&#128164;",
		category: "p",
		emoji_order: "1302"
	},
	{
		name: "anger",
		unicode: "1f4a2",
		shortname: ":anger:",
		code_decimal: "&#128162;",
		category: "s",
		emoji_order: "1303"
	},
	{
		name: "bomb",
		unicode: "1f4a3",
		shortname: ":bomb:",
		code_decimal: "&#128163;",
		category: "o",
		emoji_order: "1304"
	},
	{
		name: "boom",
		unicode: "1f4a5",
		shortname: ":boom:",
		code_decimal: "&#128165;",
		category: "s",
		emoji_order: "1305"
	},
	{
		name: "sweat_drops",
		unicode: "1f4a6",
		shortname: ":sweat_drops:",
		code_decimal: "&#128166;",
		category: "n",
		emoji_order: "1306"
	},
	{
		name: "dash",
		unicode: "1f4a8",
		shortname: ":dash:",
		code_decimal: "&#128168;",
		category: "n",
		emoji_order: "1307"
	},
	{
		name: "dizzy",
		unicode: "1f4ab",
		shortname: ":dizzy:",
		code_decimal: "&#128171;",
		category: "s",
		emoji_order: "1308"
	},
	{
		name: "speech_balloon",
		unicode: "1f4ac",
		shortname: ":speech_balloon:",
		code_decimal: "&#128172;",
		category: "s",
		emoji_order: "1309"
	},
	{
		name: "left_speech_bubble",
		unicode: "1f5e8",
		shortname: ":speech_left:",
		code_decimal: "&#128488;",
		category: "s",
		emoji_order: "1310"
	},
	{
		name: "right_anger_bubble",
		unicode: "1f5ef",
		shortname: ":anger_right:",
		code_decimal: "&#128495;",
		category: "s",
		emoji_order: "1311"
	},
	{
		name: "thought_balloon",
		unicode: "1f4ad",
		shortname: ":thought_balloon:",
		code_decimal: "&#128173;",
		category: "s",
		emoji_order: "1312"
	},
	{
		name: "hole",
		unicode: "1f573",
		shortname: ":hole:",
		code_decimal: "&#128371;",
		category: "o",
		emoji_order: "1313"
	},
	{
		name: "eyeglasses",
		unicode: "1f453",
		shortname: ":eyeglasses:",
		code_decimal: "&#128083;",
		category: "p",
		emoji_order: "1314"
	},
	{
		name: "dark_sunglasses",
		unicode: "1f576",
		shortname: ":dark_sunglasses:",
		code_decimal: "&#128374;",
		category: "p",
		emoji_order: "1315"
	},
	{
		name: "necktie",
		unicode: "1f454",
		shortname: ":necktie:",
		code_decimal: "&#128084;",
		category: "p",
		emoji_order: "1316"
	},
	{
		name: "shirt",
		unicode: "1f455",
		shortname: ":shirt:",
		code_decimal: "&#128085;",
		category: "p",
		emoji_order: "1317"
	},
	{
		name: "jeans",
		unicode: "1f456",
		shortname: ":jeans:",
		code_decimal: "&#128086;",
		category: "p",
		emoji_order: "1318"
	},
	{
		name: "dress",
		unicode: "1f457",
		shortname: ":dress:",
		code_decimal: "&#128087;",
		category: "p",
		emoji_order: "1319"
	},
	{
		name: "kimono",
		unicode: "1f458",
		shortname: ":kimono:",
		code_decimal: "&#128088;",
		category: "p",
		emoji_order: "1320"
	},
	{
		name: "bikini",
		unicode: "1f459",
		shortname: ":bikini:",
		code_decimal: "&#128089;",
		category: "p",
		emoji_order: "1321"
	},
	{
		name: "womans_clothes",
		unicode: "1f45a",
		shortname: ":womans_clothes:",
		code_decimal: "&#128090;",
		category: "p",
		emoji_order: "1322"
	},
	{
		name: "purse",
		unicode: "1f45b",
		shortname: ":purse:",
		code_decimal: "&#128091;",
		category: "p",
		emoji_order: "1323"
	},
	{
		name: "handbag",
		unicode: "1f45c",
		shortname: ":handbag:",
		code_decimal: "&#128092;",
		category: "p",
		emoji_order: "1324"
	},
	{
		name: "pouch",
		unicode: "1f45d",
		shortname: ":pouch:",
		code_decimal: "&#128093;",
		category: "p",
		emoji_order: "1325"
	},
	{
		name: "shopping_bags",
		unicode: "1f6cd",
		shortname: ":shopping_bags:",
		code_decimal: "&#128717;",
		category: "o",
		emoji_order: "1326"
	},
	{
		name: "school_satchel",
		unicode: "1f392",
		shortname: ":school_satchel:",
		code_decimal: "&#127890;",
		category: "p",
		emoji_order: "1327"
	},
	{
		name: "mans_shoe",
		unicode: "1f45e",
		shortname: ":mans_shoe:",
		code_decimal: "&#128094;",
		category: "p",
		emoji_order: "1328"
	},
	{
		name: "athletic_shoe",
		unicode: "1f45f",
		shortname: ":athletic_shoe:",
		code_decimal: "&#128095;",
		category: "p",
		emoji_order: "1329"
	},
	{
		name: "high_heel",
		unicode: "1f460",
		shortname: ":high_heel:",
		code_decimal: "&#128096;",
		category: "p",
		emoji_order: "1330"
	},
	{
		name: "sandal",
		unicode: "1f461",
		shortname: ":sandal:",
		code_decimal: "&#128097;",
		category: "p",
		emoji_order: "1331"
	},
	{
		name: "boot",
		unicode: "1f462",
		shortname: ":boot:",
		code_decimal: "&#128098;",
		category: "p",
		emoji_order: "1332"
	},
	{
		name: "crown",
		unicode: "1f451",
		shortname: ":crown:",
		code_decimal: "&#128081;",
		category: "p",
		emoji_order: "1333"
	},
	{
		name: "womans_hat",
		unicode: "1f452",
		shortname: ":womans_hat:",
		code_decimal: "&#128082;",
		category: "p",
		emoji_order: "1334"
	},
	{
		name: "tophat",
		unicode: "1f3a9",
		shortname: ":tophat:",
		code_decimal: "&#127913;",
		category: "p",
		emoji_order: "1335"
	},
	{
		name: "mortar_board",
		unicode: "1f393",
		shortname: ":mortar_board:",
		code_decimal: "&#127891;",
		category: "p",
		emoji_order: "1336"
	},
	{
		name: "helmet_with_white_cross",
		unicode: "26d1",
		shortname: ":helmet_with_cross:",
		code_decimal: "&#9937;",
		category: "p",
		emoji_order: "1337"
	},
	{
		name: "prayer_beads",
		unicode: "1f4ff",
		shortname: ":prayer_beads:",
		code_decimal: "&#128255;",
		category: "o",
		emoji_order: "1338"
	},
	{
		name: "lipstick",
		unicode: "1f484",
		shortname: ":lipstick:",
		code_decimal: "&#128132;",
		category: "p",
		emoji_order: "1339"
	},
	{
		name: "ring",
		unicode: "1f48d",
		shortname: ":ring:",
		code_decimal: "&#128141;",
		category: "p",
		emoji_order: "1340"
	},
	{
		name: "gem",
		unicode: "1f48e",
		shortname: ":gem:",
		code_decimal: "&#128142;",
		category: "o",
		emoji_order: "1341"
	},
	{
		name: "monkey_face",
		unicode: "1f435",
		shortname: ":monkey_face:",
		code_decimal: "&#128053;",
		category: "n",
		emoji_order: "1342"
	},
	{
		name: "monkey",
		unicode: "1f412",
		shortname: ":monkey:",
		code_decimal: "&#128018;",
		category: "n",
		emoji_order: "1343"
	},
	{
		name: "dog",
		unicode: "1f436",
		shortname: ":dog:",
		code_decimal: "&#128054;",
		category: "n",
		emoji_order: "1345"
	},
	{
		name: "dog2",
		unicode: "1f415",
		shortname: ":dog2:",
		code_decimal: "&#128021;",
		category: "n",
		emoji_order: "1346"
	},
	{
		name: "poodle",
		unicode: "1f429",
		shortname: ":poodle:",
		code_decimal: "&#128041;",
		category: "n",
		emoji_order: "1347"
	},
	{
		name: "wolf",
		unicode: "1f43a",
		shortname: ":wolf:",
		code_decimal: "&#128058;",
		category: "n",
		emoji_order: "1348"
	},
	{
		name: "cat",
		unicode: "1f431",
		shortname: ":cat:",
		code_decimal: "&#128049;",
		category: "n",
		emoji_order: "1350"
	},
	{
		name: "cat2",
		unicode: "1f408",
		shortname: ":cat2:",
		code_decimal: "&#128008;",
		category: "n",
		emoji_order: "1351"
	},
	{
		name: "lion_face",
		unicode: "1f981",
		shortname: ":lion_face:",
		code_decimal: "&#129409;",
		category: "n",
		emoji_order: "1352"
	},
	{
		name: "tiger",
		unicode: "1f42f",
		shortname: ":tiger:",
		code_decimal: "&#128047;",
		category: "n",
		emoji_order: "1353"
	},
	{
		name: "tiger2",
		unicode: "1f405",
		shortname: ":tiger2:",
		code_decimal: "&#128005;",
		category: "n",
		emoji_order: "1354"
	},
	{
		name: "leopard",
		unicode: "1f406",
		shortname: ":leopard:",
		code_decimal: "&#128006;",
		category: "n",
		emoji_order: "1355"
	},
	{
		name: "horse",
		unicode: "1f434",
		shortname: ":horse:",
		code_decimal: "&#128052;",
		category: "n",
		emoji_order: "1356"
	},
	{
		name: "racehorse",
		unicode: "1f40e",
		shortname: ":racehorse:",
		code_decimal: "&#128014;",
		category: "n",
		emoji_order: "1357"
	},
	{
		name: "unicorn_face",
		unicode: "1f984",
		shortname: ":unicorn:",
		code_decimal: "&#129412;",
		category: "n",
		emoji_order: "1359"
	},
	{
		name: "cow",
		unicode: "1f42e",
		shortname: ":cow:",
		code_decimal: "&#128046;",
		category: "n",
		emoji_order: "1360"
	},
	{
		name: "ox",
		unicode: "1f402",
		shortname: ":ox:",
		code_decimal: "&#128002;",
		category: "n",
		emoji_order: "1361"
	},
	{
		name: "water_buffalo",
		unicode: "1f403",
		shortname: ":water_buffalo:",
		code_decimal: "&#128003;",
		category: "n",
		emoji_order: "1362"
	},
	{
		name: "cow2",
		unicode: "1f404",
		shortname: ":cow2:",
		code_decimal: "&#128004;",
		category: "n",
		emoji_order: "1363"
	},
	{
		name: "pig",
		unicode: "1f437",
		shortname: ":pig:",
		code_decimal: "&#128055;",
		category: "n",
		emoji_order: "1364"
	},
	{
		name: "pig2",
		unicode: "1f416",
		shortname: ":pig2:",
		code_decimal: "&#128022;",
		category: "n",
		emoji_order: "1365"
	},
	{
		name: "boar",
		unicode: "1f417",
		shortname: ":boar:",
		code_decimal: "&#128023;",
		category: "n",
		emoji_order: "1366"
	},
	{
		name: "pig_nose",
		unicode: "1f43d",
		shortname: ":pig_nose:",
		code_decimal: "&#128061;",
		category: "n",
		emoji_order: "1367"
	},
	{
		name: "ram",
		unicode: "1f40f",
		shortname: ":ram:",
		code_decimal: "&#128015;",
		category: "n",
		emoji_order: "1368"
	},
	{
		name: "sheep",
		unicode: "1f411",
		shortname: ":sheep:",
		code_decimal: "&#128017;",
		category: "n",
		emoji_order: "1369"
	},
	{
		name: "goat",
		unicode: "1f410",
		shortname: ":goat:",
		code_decimal: "&#128016;",
		category: "n",
		emoji_order: "1370"
	},
	{
		name: "dromedary_camel",
		unicode: "1f42a",
		shortname: ":dromedary_camel:",
		code_decimal: "&#128042;",
		category: "n",
		emoji_order: "1371"
	},
	{
		name: "camel",
		unicode: "1f42b",
		shortname: ":camel:",
		code_decimal: "&#128043;",
		category: "n",
		emoji_order: "1372"
	},
	{
		name: "elephant",
		unicode: "1f418",
		shortname: ":elephant:",
		code_decimal: "&#128024;",
		category: "n",
		emoji_order: "1373"
	},
	{
		name: "mouse",
		unicode: "1f42d",
		shortname: ":mouse:",
		code_decimal: "&#128045;",
		category: "n",
		emoji_order: "1375"
	},
	{
		name: "mouse2",
		unicode: "1f401",
		shortname: ":mouse2:",
		code_decimal: "&#128001;",
		category: "n",
		emoji_order: "1376"
	},
	{
		name: "rat",
		unicode: "1f400",
		shortname: ":rat:",
		code_decimal: "&#128000;",
		category: "n",
		emoji_order: "1377"
	},
	{
		name: "hamster",
		unicode: "1f439",
		shortname: ":hamster:",
		code_decimal: "&#128057;",
		category: "n",
		emoji_order: "1378"
	},
	{
		name: "rabbit",
		unicode: "1f430",
		shortname: ":rabbit:",
		code_decimal: "&#128048;",
		category: "n",
		emoji_order: "1379"
	},
	{
		name: "rabbit2",
		unicode: "1f407",
		shortname: ":rabbit2:",
		code_decimal: "&#128007;",
		category: "n",
		emoji_order: "1380"
	},
	{
		name: "chipmunk",
		unicode: "1f43f",
		shortname: ":chipmunk:",
		code_decimal: "&#128063;",
		category: "n",
		emoji_order: "1381"
	},
	{
		name: "bear",
		unicode: "1f43b",
		shortname: ":bear:",
		code_decimal: "&#128059;",
		category: "n",
		emoji_order: "1383"
	},
	{
		name: "koala",
		unicode: "1f428",
		shortname: ":koala:",
		code_decimal: "&#128040;",
		category: "n",
		emoji_order: "1384"
	},
	{
		name: "panda_face",
		unicode: "1f43c",
		shortname: ":panda_face:",
		code_decimal: "&#128060;",
		category: "n",
		emoji_order: "1385"
	},
	{
		name: "feet",
		unicode: "1f43e",
		shortname: ":feet:",
		code_decimal: "&#128062;",
		category: "n",
		emoji_order: "1386"
	},
	{
		name: "turkey",
		unicode: "1f983",
		shortname: ":turkey:",
		code_decimal: "&#129411;",
		category: "n",
		emoji_order: "1387"
	},
	{
		name: "chicken",
		unicode: "1f414",
		shortname: ":chicken:",
		code_decimal: "&#128020;",
		category: "n",
		emoji_order: "1388"
	},
	{
		name: "rooster",
		unicode: "1f413",
		shortname: ":rooster:",
		code_decimal: "&#128019;",
		category: "n",
		emoji_order: "1389"
	},
	{
		name: "hatching_chick",
		unicode: "1f423",
		shortname: ":hatching_chick:",
		code_decimal: "&#128035;",
		category: "n",
		emoji_order: "1390"
	},
	{
		name: "baby_chick",
		unicode: "1f424",
		shortname: ":baby_chick:",
		code_decimal: "&#128036;",
		category: "n",
		emoji_order: "1391"
	},
	{
		name: "hatched_chick",
		unicode: "1f425",
		shortname: ":hatched_chick:",
		code_decimal: "&#128037;",
		category: "n",
		emoji_order: "1392"
	},
	{
		name: "bird",
		unicode: "1f426",
		shortname: ":bird:",
		code_decimal: "&#128038;",
		category: "n",
		emoji_order: "1393"
	},
	{
		name: "penguin",
		unicode: "1f427",
		shortname: ":penguin:",
		code_decimal: "&#128039;",
		category: "n",
		emoji_order: "1394"
	},
	{
		name: "dove_of_peace",
		unicode: "1f54a",
		shortname: ":dove:",
		code_decimal: "&#128330;",
		category: "n",
		emoji_order: "1395"
	},
	{
		name: "frog",
		unicode: "1f438",
		shortname: ":frog:",
		code_decimal: "&#128056;",
		category: "n",
		emoji_order: "1399"
	},
	{
		name: "crocodile",
		unicode: "1f40a",
		shortname: ":crocodile:",
		code_decimal: "&#128010;",
		category: "n",
		emoji_order: "1400"
	},
	{
		name: "turtle",
		unicode: "1f422",
		shortname: ":turtle:",
		code_decimal: "&#128034;",
		category: "n",
		emoji_order: "1401"
	},
	{
		name: "snake",
		unicode: "1f40d",
		shortname: ":snake:",
		code_decimal: "&#128013;",
		category: "n",
		emoji_order: "1403"
	},
	{
		name: "dragon_face",
		unicode: "1f432",
		shortname: ":dragon_face:",
		code_decimal: "&#128050;",
		category: "n",
		emoji_order: "1404"
	},
	{
		name: "dragon",
		unicode: "1f409",
		shortname: ":dragon:",
		code_decimal: "&#128009;",
		category: "n",
		emoji_order: "1405"
	},
	{
		name: "whale",
		unicode: "1f433",
		shortname: ":whale:",
		code_decimal: "&#128051;",
		category: "n",
		emoji_order: "1406"
	},
	{
		name: "whale2",
		unicode: "1f40b",
		shortname: ":whale2:",
		code_decimal: "&#128011;",
		category: "n",
		emoji_order: "1407"
	},
	{
		name: "dolphin",
		unicode: "1f42c",
		shortname: ":dolphin:",
		code_decimal: "&#128044;",
		category: "n",
		emoji_order: "1408"
	},
	{
		name: "fish",
		unicode: "1f41f",
		shortname: ":fish:",
		code_decimal: "&#128031;",
		category: "n",
		emoji_order: "1409"
	},
	{
		name: "tropical_fish",
		unicode: "1f420",
		shortname: ":tropical_fish:",
		code_decimal: "&#128032;",
		category: "n",
		emoji_order: "1410"
	},
	{
		name: "blowfish",
		unicode: "1f421",
		shortname: ":blowfish:",
		code_decimal: "&#128033;",
		category: "n",
		emoji_order: "1411"
	},
	{
		name: "octopus",
		unicode: "1f419",
		shortname: ":octopus:",
		code_decimal: "&#128025;",
		category: "n",
		emoji_order: "1413"
	},
	{
		name: "shell",
		unicode: "1f41a",
		shortname: ":shell:",
		code_decimal: "&#128026;",
		category: "n",
		emoji_order: "1414"
	},
	{
		name: "crab",
		unicode: "1f980",
		shortname: ":crab:",
		code_decimal: "&#129408;",
		category: "n",
		emoji_order: "1415"
	},
	{
		name: "snail",
		unicode: "1f40c",
		shortname: ":snail:",
		code_decimal: "&#128012;",
		category: "n",
		emoji_order: "1419"
	},
	{
		name: "bug",
		unicode: "1f41b",
		shortname: ":bug:",
		code_decimal: "&#128027;",
		category: "n",
		emoji_order: "1420"
	},
	{
		name: "ant",
		unicode: "1f41c",
		shortname: ":ant:",
		code_decimal: "&#128028;",
		category: "n",
		emoji_order: "1421"
	},
	{
		name: "bee",
		unicode: "1f41d",
		shortname: ":bee:",
		code_decimal: "&#128029;",
		category: "n",
		emoji_order: "1422"
	},
	{
		name: "beetle",
		unicode: "1f41e",
		shortname: ":beetle:",
		code_decimal: "&#128030;",
		category: "n",
		emoji_order: "1423"
	},
	{
		name: "spider",
		unicode: "1f577",
		shortname: ":spider:",
		code_decimal: "&#128375;",
		category: "n",
		emoji_order: "1424"
	},
	{
		name: "spider_web",
		unicode: "1f578",
		shortname: ":spider_web:",
		code_decimal: "&#128376;",
		category: "n",
		emoji_order: "1425"
	},
	{
		name: "scorpion",
		unicode: "1f982",
		shortname: ":scorpion:",
		code_decimal: "&#129410;",
		category: "n",
		emoji_order: "1426"
	},
	{
		name: "bouquet",
		unicode: "1f490",
		shortname: ":bouquet:",
		code_decimal: "&#128144;",
		category: "n",
		emoji_order: "1427"
	},
	{
		name: "cherry_blossom",
		unicode: "1f338",
		shortname: ":cherry_blossom:",
		code_decimal: "&#127800;",
		category: "n",
		emoji_order: "1428"
	},
	{
		name: "white_flower",
		unicode: "1f4ae",
		shortname: ":white_flower:",
		code_decimal: "&#128174;",
		category: "s",
		emoji_order: "1429"
	},
	{
		name: "rosette",
		unicode: "1f3f5",
		shortname: ":rosette:",
		code_decimal: "&#127989;",
		category: "n",
		emoji_order: "1430"
	},
	{
		name: "rose",
		unicode: "1f339",
		shortname: ":rose:",
		code_decimal: "&#127801;",
		category: "n",
		emoji_order: "1431"
	},
	{
		name: "hibiscus",
		unicode: "1f33a",
		shortname: ":hibiscus:",
		code_decimal: "&#127802;",
		category: "n",
		emoji_order: "1433"
	},
	{
		name: "sunflower",
		unicode: "1f33b",
		shortname: ":sunflower:",
		code_decimal: "&#127803;",
		category: "n",
		emoji_order: "1434"
	},
	{
		name: "blossom",
		unicode: "1f33c",
		shortname: ":blossom:",
		code_decimal: "&#127804;",
		category: "n",
		emoji_order: "1435"
	},
	{
		name: "tulip",
		unicode: "1f337",
		shortname: ":tulip:",
		code_decimal: "&#127799;",
		category: "n",
		emoji_order: "1436"
	},
	{
		name: "seedling",
		unicode: "1f331",
		shortname: ":seedling:",
		code_decimal: "&#127793;",
		category: "n",
		emoji_order: "1437"
	},
	{
		name: "evergreen_tree",
		unicode: "1f332",
		shortname: ":evergreen_tree:",
		code_decimal: "&#127794;",
		category: "n",
		emoji_order: "1438"
	},
	{
		name: "deciduous_tree",
		unicode: "1f333",
		shortname: ":deciduous_tree:",
		code_decimal: "&#127795;",
		category: "n",
		emoji_order: "1439"
	},
	{
		name: "palm_tree",
		unicode: "1f334",
		shortname: ":palm_tree:",
		code_decimal: "&#127796;",
		category: "n",
		emoji_order: "1440"
	},
	{
		name: "cactus",
		unicode: "1f335",
		shortname: ":cactus:",
		code_decimal: "&#127797;",
		category: "n",
		emoji_order: "1441"
	},
	{
		name: "ear_of_rice",
		unicode: "1f33e",
		shortname: ":ear_of_rice:",
		code_decimal: "&#127806;",
		category: "n",
		emoji_order: "1442"
	},
	{
		name: "herb",
		unicode: "1f33f",
		shortname: ":herb:",
		code_decimal: "&#127807;",
		category: "n",
		emoji_order: "1443"
	},
	{
		name: "shamrock",
		unicode: "2618",
		shortname: ":shamrock:",
		code_decimal: "&#9752;",
		category: "n",
		emoji_order: "1444"
	},
	{
		name: "four_leaf_clover",
		unicode: "1f340",
		shortname: ":four_leaf_clover:",
		code_decimal: "&#127808;",
		category: "n",
		emoji_order: "1445"
	},
	{
		name: "maple_leaf",
		unicode: "1f341",
		shortname: ":maple_leaf:",
		code_decimal: "&#127809;",
		category: "n",
		emoji_order: "1446"
	},
	{
		name: "fallen_leaf",
		unicode: "1f342",
		shortname: ":fallen_leaf:",
		code_decimal: "&#127810;",
		category: "n",
		emoji_order: "1447"
	},
	{
		name: "leaves",
		unicode: "1f343",
		shortname: ":leaves:",
		code_decimal: "&#127811;",
		category: "n",
		emoji_order: "1448"
	},
	{
		name: "grapes",
		unicode: "1f347",
		shortname: ":grapes:",
		code_decimal: "&#127815;",
		category: "d",
		emoji_order: "1449"
	},
	{
		name: "melon",
		unicode: "1f348",
		shortname: ":melon:",
		code_decimal: "&#127816;",
		category: "d",
		emoji_order: "1450"
	},
	{
		name: "watermelon",
		unicode: "1f349",
		shortname: ":watermelon:",
		code_decimal: "&#127817;",
		category: "d",
		emoji_order: "1451"
	},
	{
		name: "tangerine",
		unicode: "1f34a",
		shortname: ":tangerine:",
		code_decimal: "&#127818;",
		category: "d",
		emoji_order: "1452"
	},
	{
		name: "lemon",
		unicode: "1f34b",
		shortname: ":lemon:",
		code_decimal: "&#127819;",
		category: "d",
		emoji_order: "1453"
	},
	{
		name: "banana",
		unicode: "1f34c",
		shortname: ":banana:",
		code_decimal: "&#127820;",
		category: "d",
		emoji_order: "1454"
	},
	{
		name: "pineapple",
		unicode: "1f34d",
		shortname: ":pineapple:",
		code_decimal: "&#127821;",
		category: "d",
		emoji_order: "1455"
	},
	{
		name: "apple",
		unicode: "1f34e",
		shortname: ":apple:",
		code_decimal: "&#127822;",
		category: "d",
		emoji_order: "1456"
	},
	{
		name: "green_apple",
		unicode: "1f34f",
		shortname: ":green_apple:",
		code_decimal: "&#127823;",
		category: "d",
		emoji_order: "1457"
	},
	{
		name: "pear",
		unicode: "1f350",
		shortname: ":pear:",
		code_decimal: "&#127824;",
		category: "d",
		emoji_order: "1458"
	},
	{
		name: "peach",
		unicode: "1f351",
		shortname: ":peach:",
		code_decimal: "&#127825;",
		category: "d",
		emoji_order: "1459"
	},
	{
		name: "cherries",
		unicode: "1f352",
		shortname: ":cherries:",
		code_decimal: "&#127826;",
		category: "d",
		emoji_order: "1460"
	},
	{
		name: "strawberry",
		unicode: "1f353",
		shortname: ":strawberry:",
		code_decimal: "&#127827;",
		category: "d",
		emoji_order: "1461"
	},
	{
		name: "tomato",
		unicode: "1f345",
		shortname: ":tomato:",
		code_decimal: "&#127813;",
		category: "d",
		emoji_order: "1463"
	},
	{
		name: "eggplant",
		unicode: "1f346",
		shortname: ":eggplant:",
		code_decimal: "&#127814;",
		category: "d",
		emoji_order: "1465"
	},
	{
		name: "corn",
		unicode: "1f33d",
		shortname: ":corn:",
		code_decimal: "&#127805;",
		category: "d",
		emoji_order: "1468"
	},
	{
		name: "hot_pepper",
		unicode: "1f336",
		shortname: ":hot_pepper:",
		code_decimal: "&#127798;",
		category: "d",
		emoji_order: "1469"
	},
	{
		name: "mushroom",
		unicode: "1f344",
		shortname: ":mushroom:",
		code_decimal: "&#127812;",
		category: "n",
		emoji_order: "1471"
	},
	{
		name: "chestnut",
		unicode: "1f330",
		shortname: ":chestnut:",
		code_decimal: "&#127792;",
		category: "n",
		emoji_order: "1473"
	},
	{
		name: "bread",
		unicode: "1f35e",
		shortname: ":bread:",
		code_decimal: "&#127838;",
		category: "d",
		emoji_order: "1474"
	},
	{
		name: "cheese_wedge",
		unicode: "1f9c0",
		shortname: ":cheese:",
		code_decimal: "&#129472;",
		category: "d",
		emoji_order: "1478"
	},
	{
		name: "meat_on_bone",
		unicode: "1f356",
		shortname: ":meat_on_bone:",
		code_decimal: "&#127830;",
		category: "d",
		emoji_order: "1479"
	},
	{
		name: "poultry_leg",
		unicode: "1f357",
		shortname: ":poultry_leg:",
		code_decimal: "&#127831;",
		category: "d",
		emoji_order: "1480"
	},
	{
		name: "hamburger",
		unicode: "1f354",
		shortname: ":hamburger:",
		code_decimal: "&#127828;",
		category: "d",
		emoji_order: "1482"
	},
	{
		name: "fries",
		unicode: "1f35f",
		shortname: ":fries:",
		code_decimal: "&#127839;",
		category: "d",
		emoji_order: "1483"
	},
	{
		name: "pizza",
		unicode: "1f355",
		shortname: ":pizza:",
		code_decimal: "&#127829;",
		category: "d",
		emoji_order: "1484"
	},
	{
		name: "hotdog",
		unicode: "1f32d",
		shortname: ":hotdog:",
		code_decimal: "&#127789;",
		category: "d",
		emoji_order: "1485"
	},
	{
		name: "taco",
		unicode: "1f32e",
		shortname: ":taco:",
		code_decimal: "&#127790;",
		category: "d",
		emoji_order: "1486"
	},
	{
		name: "burrito",
		unicode: "1f32f",
		shortname: ":burrito:",
		code_decimal: "&#127791;",
		category: "d",
		emoji_order: "1487"
	},
	{
		name: "egg",
		unicode: "1f95a",
		shortname: ":egg:",
		code_decimal: "&#129370;",
		category: "d",
		emoji_order: "1489"
	},
	{
		name: "stew",
		unicode: "1f372",
		shortname: ":stew:",
		code_decimal: "&#127858;",
		category: "d",
		emoji_order: "1492"
	},
	{
		name: "popcorn",
		unicode: "1f37f",
		shortname: ":popcorn:",
		code_decimal: "&#127871;",
		category: "d",
		emoji_order: "1494"
	},
	{
		name: "bento",
		unicode: "1f371",
		shortname: ":bento:",
		code_decimal: "&#127857;",
		category: "d",
		emoji_order: "1495"
	},
	{
		name: "rice_cracker",
		unicode: "1f358",
		shortname: ":rice_cracker:",
		code_decimal: "&#127832;",
		category: "d",
		emoji_order: "1496"
	},
	{
		name: "rice_ball",
		unicode: "1f359",
		shortname: ":rice_ball:",
		code_decimal: "&#127833;",
		category: "d",
		emoji_order: "1497"
	},
	{
		name: "rice",
		unicode: "1f35a",
		shortname: ":rice:",
		code_decimal: "&#127834;",
		category: "d",
		emoji_order: "1498"
	},
	{
		name: "curry",
		unicode: "1f35b",
		shortname: ":curry:",
		code_decimal: "&#127835;",
		category: "d",
		emoji_order: "1499"
	},
	{
		name: "ramen",
		unicode: "1f35c",
		shortname: ":ramen:",
		code_decimal: "&#127836;",
		category: "d",
		emoji_order: "1500"
	},
	{
		name: "spaghetti",
		unicode: "1f35d",
		shortname: ":spaghetti:",
		code_decimal: "&#127837;",
		category: "d",
		emoji_order: "1501"
	},
	{
		name: "sweet_potato",
		unicode: "1f360",
		shortname: ":sweet_potato:",
		code_decimal: "&#127840;",
		category: "d",
		emoji_order: "1502"
	},
	{
		name: "oden",
		unicode: "1f362",
		shortname: ":oden:",
		code_decimal: "&#127842;",
		category: "d",
		emoji_order: "1503"
	},
	{
		name: "sushi",
		unicode: "1f363",
		shortname: ":sushi:",
		code_decimal: "&#127843;",
		category: "d",
		emoji_order: "1504"
	},
	{
		name: "fried_shrimp",
		unicode: "1f364",
		shortname: ":fried_shrimp:",
		code_decimal: "&#127844;",
		category: "d",
		emoji_order: "1505"
	},
	{
		name: "fish_cake",
		unicode: "1f365",
		shortname: ":fish_cake:",
		code_decimal: "&#127845;",
		category: "d",
		emoji_order: "1506"
	},
	{
		name: "dango",
		unicode: "1f361",
		shortname: ":dango:",
		code_decimal: "&#127841;",
		category: "d",
		emoji_order: "1507"
	},
	{
		name: "icecream",
		unicode: "1f366",
		shortname: ":icecream:",
		code_decimal: "&#127846;",
		category: "d",
		emoji_order: "1508"
	},
	{
		name: "shaved_ice",
		unicode: "1f367",
		shortname: ":shaved_ice:",
		code_decimal: "&#127847;",
		category: "d",
		emoji_order: "1509"
	},
	{
		name: "ice_cream",
		unicode: "1f368",
		shortname: ":ice_cream:",
		code_decimal: "&#127848;",
		category: "d",
		emoji_order: "1510"
	},
	{
		name: "doughnut",
		unicode: "1f369",
		shortname: ":doughnut:",
		code_decimal: "&#127849;",
		category: "d",
		emoji_order: "1511"
	},
	{
		name: "cookie",
		unicode: "1f36a",
		shortname: ":cookie:",
		code_decimal: "&#127850;",
		category: "d",
		emoji_order: "1512"
	},
	{
		name: "birthday",
		unicode: "1f382",
		shortname: ":birthday:",
		code_decimal: "&#127874;",
		category: "d",
		emoji_order: "1513"
	},
	{
		name: "cake",
		unicode: "1f370",
		shortname: ":cake:",
		code_decimal: "&#127856;",
		category: "d",
		emoji_order: "1514"
	},
	{
		name: "chocolate_bar",
		unicode: "1f36b",
		shortname: ":chocolate_bar:",
		code_decimal: "&#127851;",
		category: "d",
		emoji_order: "1515"
	},
	{
		name: "candy",
		unicode: "1f36c",
		shortname: ":candy:",
		code_decimal: "&#127852;",
		category: "d",
		emoji_order: "1516"
	},
	{
		name: "lollipop",
		unicode: "1f36d",
		shortname: ":lollipop:",
		code_decimal: "&#127853;",
		category: "d",
		emoji_order: "1517"
	},
	{
		name: "custard",
		unicode: "1f36e",
		shortname: ":custard:",
		code_decimal: "&#127854;",
		category: "d",
		emoji_order: "1518"
	},
	{
		name: "honey_pot",
		unicode: "1f36f",
		shortname: ":honey_pot:",
		code_decimal: "&#127855;",
		category: "d",
		emoji_order: "1519"
	},
	{
		name: "baby_bottle",
		unicode: "1f37c",
		shortname: ":baby_bottle:",
		code_decimal: "&#127868;",
		category: "d",
		emoji_order: "1520"
	},
	{
		name: "coffee",
		unicode: "2615",
		shortname: ":coffee:",
		code_decimal: "&#9749;",
		category: "d",
		emoji_order: "1522"
	},
	{
		name: "tea",
		unicode: "1f375",
		shortname: ":tea:",
		code_decimal: "&#127861;",
		category: "d",
		emoji_order: "1523"
	},
	{
		name: "sake",
		unicode: "1f376",
		shortname: ":sake:",
		code_decimal: "&#127862;",
		category: "d",
		emoji_order: "1524"
	},
	{
		name: "champagne",
		unicode: "1f37e",
		shortname: ":champagne:",
		code_decimal: "&#127870;",
		category: "d",
		emoji_order: "1525"
	},
	{
		name: "wine_glass",
		unicode: "1f377",
		shortname: ":wine_glass:",
		code_decimal: "&#127863;",
		category: "d",
		emoji_order: "1526"
	},
	{
		name: "cocktail",
		unicode: "1f378",
		shortname: ":cocktail:",
		code_decimal: "&#127864;",
		category: "d",
		emoji_order: "1527"
	},
	{
		name: "tropical_drink",
		unicode: "1f379",
		shortname: ":tropical_drink:",
		code_decimal: "&#127865;",
		category: "d",
		emoji_order: "1528"
	},
	{
		name: "beer",
		unicode: "1f37a",
		shortname: ":beer:",
		code_decimal: "&#127866;",
		category: "d",
		emoji_order: "1529"
	},
	{
		name: "beers",
		unicode: "1f37b",
		shortname: ":beers:",
		code_decimal: "&#127867;",
		category: "d",
		emoji_order: "1530"
	},
	{
		name: "knife_fork_plate",
		unicode: "1f37d",
		shortname: ":fork_knife_plate:",
		code_decimal: "&#127869;",
		category: "d",
		emoji_order: "1533"
	},
	{
		name: "fork_and_knife",
		unicode: "1f374",
		shortname: ":fork_and_knife:",
		code_decimal: "&#127860;",
		category: "d",
		emoji_order: "1534"
	},
	{
		name: "amphora",
		unicode: "1f3fa",
		shortname: ":amphora:",
		code_decimal: "&#127994;",
		category: "o",
		emoji_order: "1537"
	},
	{
		name: "earth_africa",
		unicode: "1f30d",
		shortname: ":earth_africa:",
		code_decimal: "&#127757;",
		category: "n",
		emoji_order: "1538"
	},
	{
		name: "earth_americas",
		unicode: "1f30e",
		shortname: ":earth_americas:",
		code_decimal: "&#127758;",
		category: "n",
		emoji_order: "1539"
	},
	{
		name: "earth_asia",
		unicode: "1f30f",
		shortname: ":earth_asia:",
		code_decimal: "&#127759;",
		category: "n",
		emoji_order: "1540"
	},
	{
		name: "globe_with_meridians",
		unicode: "1f310",
		shortname: ":globe_with_meridians:",
		code_decimal: "&#127760;",
		category: "s",
		emoji_order: "1541"
	},
	{
		name: "world_map",
		unicode: "1f5fa",
		shortname: ":map:",
		code_decimal: "&#128506;",
		category: "o",
		emoji_order: "1542"
	},
	{
		name: "japan",
		unicode: "1f5fe",
		shortname: ":japan:",
		code_decimal: "&#128510;",
		category: "t",
		emoji_order: "1543"
	},
	{
		name: "snow_capped_mountain",
		unicode: "1f3d4",
		shortname: ":mountain_snow:",
		code_decimal: "&#127956;",
		category: "t",
		emoji_order: "1544"
	},
	{
		name: "mountain",
		unicode: "26f0",
		shortname: ":mountain:",
		code_decimal: "&#9968;",
		category: "t",
		emoji_order: "1545"
	},
	{
		name: "volcano",
		unicode: "1f30b",
		shortname: ":volcano:",
		code_decimal: "&#127755;",
		category: "t",
		emoji_order: "1546"
	},
	{
		name: "mount_fuji",
		unicode: "1f5fb",
		shortname: ":mount_fuji:",
		code_decimal: "&#128507;",
		category: "t",
		emoji_order: "1547"
	},
	{
		name: "camping",
		unicode: "1f3d5",
		shortname: ":camping:",
		code_decimal: "&#127957;",
		category: "t",
		emoji_order: "1548"
	},
	{
		name: "beach_with_umbrella",
		unicode: "1f3d6",
		shortname: ":beach:",
		code_decimal: "&#127958;",
		category: "t",
		emoji_order: "1549"
	},
	{
		name: "desert",
		unicode: "1f3dc",
		shortname: ":desert:",
		code_decimal: "&#127964;",
		category: "t",
		emoji_order: "1550"
	},
	{
		name: "desert_island",
		unicode: "1f3dd",
		shortname: ":island:",
		code_decimal: "&#127965;",
		category: "t",
		emoji_order: "1551"
	},
	{
		name: "national_park",
		unicode: "1f3de",
		shortname: ":park:",
		code_decimal: "&#127966;",
		category: "t",
		emoji_order: "1552"
	},
	{
		name: "stadium",
		unicode: "1f3df",
		shortname: ":stadium:",
		code_decimal: "&#127967;",
		category: "t",
		emoji_order: "1553"
	},
	{
		name: "classical_building",
		unicode: "1f3db",
		shortname: ":classical_building:",
		code_decimal: "&#127963;",
		category: "t",
		emoji_order: "1554"
	},
	{
		name: "building_construction",
		unicode: "1f3d7",
		shortname: ":construction_site:",
		code_decimal: "&#127959;",
		category: "t",
		emoji_order: "1555"
	},
	{
		name: "house_buildings",
		unicode: "1f3d8",
		shortname: ":homes:",
		code_decimal: "&#127960;",
		category: "t",
		emoji_order: "1556"
	},
	{
		name: "cityscape",
		unicode: "1f3d9",
		shortname: ":cityscape:",
		code_decimal: "&#127961;",
		category: "t",
		emoji_order: "1557"
	},
	{
		name: "derelict_house_building",
		unicode: "1f3da",
		shortname: ":house_abandoned:",
		code_decimal: "&#127962;",
		category: "t",
		emoji_order: "1558"
	},
	{
		name: "house",
		unicode: "1f3e0",
		shortname: ":house:",
		code_decimal: "&#127968;",
		category: "t",
		emoji_order: "1559"
	},
	{
		name: "house_with_garden",
		unicode: "1f3e1",
		shortname: ":house_with_garden:",
		code_decimal: "&#127969;",
		category: "t",
		emoji_order: "1560"
	},
	{
		name: "office",
		unicode: "1f3e2",
		shortname: ":office:",
		code_decimal: "&#127970;",
		category: "t",
		emoji_order: "1561"
	},
	{
		name: "post_office",
		unicode: "1f3e3",
		shortname: ":post_office:",
		code_decimal: "&#127971;",
		category: "t",
		emoji_order: "1562"
	},
	{
		name: "european_post_office",
		unicode: "1f3e4",
		shortname: ":european_post_office:",
		code_decimal: "&#127972;",
		category: "t",
		emoji_order: "1563"
	},
	{
		name: "hospital",
		unicode: "1f3e5",
		shortname: ":hospital:",
		code_decimal: "&#127973;",
		category: "t",
		emoji_order: "1564"
	},
	{
		name: "bank",
		unicode: "1f3e6",
		shortname: ":bank:",
		code_decimal: "&#127974;",
		category: "t",
		emoji_order: "1565"
	},
	{
		name: "hotel",
		unicode: "1f3e8",
		shortname: ":hotel:",
		code_decimal: "&#127976;",
		category: "t",
		emoji_order: "1566"
	},
	{
		name: "love_hotel",
		unicode: "1f3e9",
		shortname: ":love_hotel:",
		code_decimal: "&#127977;",
		category: "t",
		emoji_order: "1567"
	},
	{
		name: "convenience_store",
		unicode: "1f3ea",
		shortname: ":convenience_store:",
		code_decimal: "&#127978;",
		category: "t",
		emoji_order: "1568"
	},
	{
		name: "school",
		unicode: "1f3eb",
		shortname: ":school:",
		code_decimal: "&#127979;",
		category: "t",
		emoji_order: "1569"
	},
	{
		name: "department_store",
		unicode: "1f3ec",
		shortname: ":department_store:",
		code_decimal: "&#127980;",
		category: "t",
		emoji_order: "1570"
	},
	{
		name: "factory",
		unicode: "1f3ed",
		shortname: ":factory:",
		code_decimal: "&#127981;",
		category: "t",
		emoji_order: "1571"
	},
	{
		name: "japanese_castle",
		unicode: "1f3ef",
		shortname: ":japanese_castle:",
		code_decimal: "&#127983;",
		category: "t",
		emoji_order: "1572"
	},
	{
		name: "european_castle",
		unicode: "1f3f0",
		shortname: ":european_castle:",
		code_decimal: "&#127984;",
		category: "t",
		emoji_order: "1573"
	},
	{
		name: "wedding",
		unicode: "1f492",
		shortname: ":wedding:",
		code_decimal: "&#128146;",
		category: "t",
		emoji_order: "1574"
	},
	{
		name: "tokyo_tower",
		unicode: "1f5fc",
		shortname: ":tokyo_tower:",
		code_decimal: "&#128508;",
		category: "t",
		emoji_order: "1575"
	},
	{
		name: "statue_of_liberty",
		unicode: "1f5fd",
		shortname: ":statue_of_liberty:",
		code_decimal: "&#128509;",
		category: "t",
		emoji_order: "1576"
	},
	{
		name: "church",
		unicode: "26ea",
		shortname: ":church:",
		code_decimal: "&#9962;",
		category: "t",
		emoji_order: "1577"
	},
	{
		name: "mosque",
		unicode: "1f54c",
		shortname: ":mosque:",
		code_decimal: "&#128332;",
		category: "t",
		emoji_order: "1578"
	},
	{
		name: "synagogue",
		unicode: "1f54d",
		shortname: ":synagogue:",
		code_decimal: "&#128333;",
		category: "t",
		emoji_order: "1579"
	},
	{
		name: "shinto_shrine",
		unicode: "26e9",
		shortname: ":shinto_shrine:",
		code_decimal: "&#9961;",
		category: "t",
		emoji_order: "1580"
	},
	{
		name: "kaaba",
		unicode: "1f54b",
		shortname: ":kaaba:",
		code_decimal: "&#128331;",
		category: "t",
		emoji_order: "1581"
	},
	{
		name: "fountain",
		unicode: "26f2",
		shortname: ":fountain:",
		code_decimal: "&#9970;",
		category: "t",
		emoji_order: "1582"
	},
	{
		name: "tent",
		unicode: "26fa",
		shortname: ":tent:",
		code_decimal: "&#9978;",
		category: "t",
		emoji_order: "1583"
	},
	{
		name: "foggy",
		unicode: "1f301",
		shortname: ":foggy:",
		code_decimal: "&#127745;",
		category: "t",
		emoji_order: "1584"
	},
	{
		name: "night_with_stars",
		unicode: "1f303",
		shortname: ":night_with_stars:",
		code_decimal: "&#127747;",
		category: "t",
		emoji_order: "1585"
	},
	{
		name: "sunrise_over_mountains",
		unicode: "1f304",
		shortname: ":sunrise_over_mountains:",
		code_decimal: "&#127748;",
		category: "t",
		emoji_order: "1586"
	},
	{
		name: "sunrise",
		unicode: "1f305",
		shortname: ":sunrise:",
		code_decimal: "&#127749;",
		category: "t",
		emoji_order: "1587"
	},
	{
		name: "city_sunset",
		unicode: "1f307",
		shortname: ":city_sunset:",
		code_decimal: "&#127751;",
		category: "t",
		emoji_order: "1589"
	},
	{
		name: "bridge_at_night",
		unicode: "1f309",
		shortname: ":bridge_at_night:",
		code_decimal: "&#127753;",
		category: "t",
		emoji_order: "1590"
	},
	{
		name: "hotsprings",
		unicode: "2668",
		shortname: ":hotsprings:",
		code_decimal: "&#9832;",
		category: "s",
		emoji_order: "1591"
	},
	{
		name: "milky_way",
		unicode: "1f30c",
		shortname: ":milky_way:",
		code_decimal: "&#127756;",
		category: "t",
		emoji_order: "1592"
	},
	{
		name: "carousel_horse",
		unicode: "1f3a0",
		shortname: ":carousel_horse:",
		code_decimal: "&#127904;",
		category: "t",
		emoji_order: "1593"
	},
	{
		name: "ferris_wheel",
		unicode: "1f3a1",
		shortname: ":ferris_wheel:",
		code_decimal: "&#127905;",
		category: "t",
		emoji_order: "1594"
	},
	{
		name: "roller_coaster",
		unicode: "1f3a2",
		shortname: ":roller_coaster:",
		code_decimal: "&#127906;",
		category: "t",
		emoji_order: "1595"
	},
	{
		name: "barber",
		unicode: "1f488",
		shortname: ":barber:",
		code_decimal: "&#128136;",
		category: "o",
		emoji_order: "1596"
	},
	{
		name: "circus_tent",
		unicode: "1f3aa",
		shortname: ":circus_tent:",
		code_decimal: "&#127914;",
		category: "a",
		emoji_order: "1597"
	},
	{
		name: "performing_arts",
		unicode: "1f3ad",
		shortname: ":performing_arts:",
		code_decimal: "&#127917;",
		category: "a",
		emoji_order: "1598"
	},
	{
		name: "frame_with_picture",
		unicode: "1f5bc",
		shortname: ":frame_photo:",
		code_decimal: "&#128444;",
		category: "o",
		emoji_order: "1599"
	},
	{
		name: "art",
		unicode: "1f3a8",
		shortname: ":art:",
		code_decimal: "&#127912;",
		category: "a",
		emoji_order: "1600"
	},
	{
		name: "slot_machine",
		unicode: "1f3b0",
		shortname: ":slot_machine:",
		code_decimal: "&#127920;",
		category: "a",
		emoji_order: "1601"
	},
	{
		name: "steam_locomotive",
		unicode: "1f682",
		shortname: ":steam_locomotive:",
		code_decimal: "&#128642;",
		category: "t",
		emoji_order: "1602"
	},
	{
		name: "railway_car",
		unicode: "1f683",
		shortname: ":railway_car:",
		code_decimal: "&#128643;",
		category: "t",
		emoji_order: "1603"
	},
	{
		name: "bullettrain_side",
		unicode: "1f684",
		shortname: ":bullettrain_side:",
		code_decimal: "&#128644;",
		category: "t",
		emoji_order: "1604"
	},
	{
		name: "bullettrain_front",
		unicode: "1f685",
		shortname: ":bullettrain_front:",
		code_decimal: "&#128645;",
		category: "t",
		emoji_order: "1605"
	},
	{
		name: "train2",
		unicode: "1f686",
		shortname: ":train2:",
		code_decimal: "&#128646;",
		category: "t",
		emoji_order: "1606"
	},
	{
		name: "metro",
		unicode: "1f687",
		shortname: ":metro:",
		code_decimal: "&#128647;",
		category: "t",
		emoji_order: "1607"
	},
	{
		name: "light_rail",
		unicode: "1f688",
		shortname: ":light_rail:",
		code_decimal: "&#128648;",
		category: "t",
		emoji_order: "1608"
	},
	{
		name: "station",
		unicode: "1f689",
		shortname: ":station:",
		code_decimal: "&#128649;",
		category: "t",
		emoji_order: "1609"
	},
	{
		name: "tram",
		unicode: "1f68a",
		shortname: ":tram:",
		code_decimal: "&#128650;",
		category: "t",
		emoji_order: "1610"
	},
	{
		name: "monorail",
		unicode: "1f69d",
		shortname: ":monorail:",
		code_decimal: "&#128669;",
		category: "t",
		emoji_order: "1611"
	},
	{
		name: "mountain_railway",
		unicode: "1f69e",
		shortname: ":mountain_railway:",
		code_decimal: "&#128670;",
		category: "t",
		emoji_order: "1612"
	},
	{
		name: "train",
		unicode: "1f68b",
		shortname: ":train:",
		code_decimal: "&#128651;",
		category: "t",
		emoji_order: "1613"
	},
	{
		name: "bus",
		unicode: "1f68c",
		shortname: ":bus:",
		code_decimal: "&#128652;",
		category: "t",
		emoji_order: "1614"
	},
	{
		name: "oncoming_bus",
		unicode: "1f68d",
		shortname: ":oncoming_bus:",
		code_decimal: "&#128653;",
		category: "t",
		emoji_order: "1615"
	},
	{
		name: "trolleybus",
		unicode: "1f68e",
		shortname: ":trolleybus:",
		code_decimal: "&#128654;",
		category: "t",
		emoji_order: "1616"
	},
	{
		name: "minibus",
		unicode: "1f690",
		shortname: ":minibus:",
		code_decimal: "&#128656;",
		category: "t",
		emoji_order: "1617"
	},
	{
		name: "ambulance",
		unicode: "1f691",
		shortname: ":ambulance:",
		code_decimal: "&#128657;",
		category: "t",
		emoji_order: "1618"
	},
	{
		name: "fire_engine",
		unicode: "1f692",
		shortname: ":fire_engine:",
		code_decimal: "&#128658;",
		category: "t",
		emoji_order: "1619"
	},
	{
		name: "police_car",
		unicode: "1f693",
		shortname: ":police_car:",
		code_decimal: "&#128659;",
		category: "t",
		emoji_order: "1620"
	},
	{
		name: "oncoming_police_car",
		unicode: "1f694",
		shortname: ":oncoming_police_car:",
		code_decimal: "&#128660;",
		category: "t",
		emoji_order: "1621"
	},
	{
		name: "taxi",
		unicode: "1f695",
		shortname: ":taxi:",
		code_decimal: "&#128661;",
		category: "t",
		emoji_order: "1622"
	},
	{
		name: "oncoming_taxi",
		unicode: "1f696",
		shortname: ":oncoming_taxi:",
		code_decimal: "&#128662;",
		category: "t",
		emoji_order: "1623"
	},
	{
		name: "car",
		unicode: "1f697",
		shortname: ":red_car:",
		code_decimal: "&#128663;",
		category: "t",
		emoji_order: "1624"
	},
	{
		name: "oncoming_automobile",
		unicode: "1f698",
		shortname: ":oncoming_automobile:",
		code_decimal: "&#128664;",
		category: "t",
		emoji_order: "1625"
	},
	{
		name: "blue_car",
		unicode: "1f699",
		shortname: ":blue_car:",
		code_decimal: "&#128665;",
		category: "t",
		emoji_order: "1626"
	},
	{
		name: "truck",
		unicode: "1f69a",
		shortname: ":truck:",
		code_decimal: "&#128666;",
		category: "t",
		emoji_order: "1627"
	},
	{
		name: "articulated_lorry",
		unicode: "1f69b",
		shortname: ":articulated_lorry:",
		code_decimal: "&#128667;",
		category: "t",
		emoji_order: "1628"
	},
	{
		name: "tractor",
		unicode: "1f69c",
		shortname: ":tractor:",
		code_decimal: "&#128668;",
		category: "t",
		emoji_order: "1629"
	},
	{
		name: "bike",
		unicode: "1f6b2",
		shortname: ":bike:",
		code_decimal: "&#128690;",
		category: "t",
		emoji_order: "1630"
	},
	{
		name: "busstop",
		unicode: "1f68f",
		shortname: ":busstop:",
		code_decimal: "&#128655;",
		category: "t",
		emoji_order: "1633"
	},
	{
		name: "motorway",
		unicode: "1f6e3",
		shortname: ":motorway:",
		code_decimal: "&#128739;",
		category: "t",
		emoji_order: "1634"
	},
	{
		name: "railway_track",
		unicode: "1f6e4",
		shortname: ":railway_track:",
		code_decimal: "&#128740;",
		category: "t",
		emoji_order: "1635"
	},
	{
		name: "fuelpump",
		unicode: "26fd",
		shortname: ":fuelpump:",
		code_decimal: "&#9981;",
		category: "t",
		emoji_order: "1636"
	},
	{
		name: "rotating_light",
		unicode: "1f6a8",
		shortname: ":rotating_light:",
		code_decimal: "&#128680;",
		category: "t",
		emoji_order: "1637"
	},
	{
		name: "traffic_light",
		unicode: "1f6a5",
		shortname: ":traffic_light:",
		code_decimal: "&#128677;",
		category: "t",
		emoji_order: "1638"
	},
	{
		name: "vertical_traffic_light",
		unicode: "1f6a6",
		shortname: ":vertical_traffic_light:",
		code_decimal: "&#128678;",
		category: "t",
		emoji_order: "1639"
	},
	{
		name: "construction",
		unicode: "1f6a7",
		shortname: ":construction:",
		code_decimal: "&#128679;",
		category: "t",
		emoji_order: "1640"
	},
	{
		name: "octagonal_sign",
		unicode: "1f6d1",
		shortname: ":octagonal_sign:",
		code_decimal: "&#128721;",
		category: "s",
		emoji_order: "1641"
	},
	{
		name: "anchor",
		unicode: "2693",
		shortname: ":anchor:",
		code_decimal: "&#9875;",
		category: "t",
		emoji_order: "1642"
	},
	{
		name: "boat",
		unicode: "26f5",
		shortname: ":sailboat:",
		code_decimal: "&#9973;",
		category: "t",
		emoji_order: "1643"
	},
	{
		name: "speedboat",
		unicode: "1f6a4",
		shortname: ":speedboat:",
		code_decimal: "&#128676;",
		category: "t",
		emoji_order: "1645"
	},
	{
		name: "passenger_ship",
		unicode: "1f6f3",
		shortname: ":cruise_ship:",
		code_decimal: "&#128755;",
		category: "t",
		emoji_order: "1646"
	},
	{
		name: "ferry",
		unicode: "26f4",
		shortname: ":ferry:",
		code_decimal: "&#9972;",
		category: "t",
		emoji_order: "1647"
	},
	{
		name: "motor_boat",
		unicode: "1f6e5",
		shortname: ":motorboat:",
		code_decimal: "&#128741;",
		category: "t",
		emoji_order: "1648"
	},
	{
		name: "ship",
		unicode: "1f6a2",
		shortname: ":ship:",
		code_decimal: "&#128674;",
		category: "t",
		emoji_order: "1649"
	},
	{
		name: "airplane",
		unicode: "2708",
		shortname: ":airplane:",
		code_decimal: "&#9992;",
		category: "t",
		emoji_order: "1650"
	},
	{
		name: "small_airplane",
		unicode: "1f6e9",
		shortname: ":airplane_small:",
		code_decimal: "&#128745;",
		category: "t",
		emoji_order: "1651"
	},
	{
		name: "airplane_departure",
		unicode: "1f6eb",
		shortname: ":airplane_departure:",
		code_decimal: "&#128747;",
		category: "t",
		emoji_order: "1652"
	},
	{
		name: "airplane_arriving",
		unicode: "1f6ec",
		shortname: ":airplane_arriving:",
		code_decimal: "&#128748;",
		category: "t",
		emoji_order: "1653"
	},
	{
		name: "seat",
		unicode: "1f4ba",
		shortname: ":seat:",
		code_decimal: "&#128186;",
		category: "t",
		emoji_order: "1654"
	},
	{
		name: "helicopter",
		unicode: "1f681",
		shortname: ":helicopter:",
		code_decimal: "&#128641;",
		category: "t",
		emoji_order: "1655"
	},
	{
		name: "suspension_railway",
		unicode: "1f69f",
		shortname: ":suspension_railway:",
		code_decimal: "&#128671;",
		category: "t",
		emoji_order: "1656"
	},
	{
		name: "mountain_cableway",
		unicode: "1f6a0",
		shortname: ":mountain_cableway:",
		code_decimal: "&#128672;",
		category: "t",
		emoji_order: "1657"
	},
	{
		name: "aerial_tramway",
		unicode: "1f6a1",
		shortname: ":aerial_tramway:",
		code_decimal: "&#128673;",
		category: "t",
		emoji_order: "1658"
	},
	{
		name: "rocket",
		unicode: "1f680",
		shortname: ":rocket:",
		code_decimal: "&#128640;",
		category: "t",
		emoji_order: "1659"
	},
	{
		name: "satellite",
		unicode: "1f6f0",
		shortname: ":satellite_orbital:",
		code_decimal: "&#128752;",
		category: "t",
		emoji_order: "1660"
	},
	{
		name: "bellhop_bell",
		unicode: "1f6ce",
		shortname: ":bellhop:",
		code_decimal: "&#128718;",
		category: "o",
		emoji_order: "1661"
	},
	{
		name: "door",
		unicode: "1f6aa",
		shortname: ":door:",
		code_decimal: "&#128682;",
		category: "o",
		emoji_order: "1662"
	},
	{
		name: "sleeping_accommodation",
		unicode: "1f6cc",
		shortname: ":sleeping_accommodation:",
		code_decimal: "&#128716;",
		category: "o",
		emoji_order: "1663"
	},
	{
		name: "bed",
		unicode: "1f6cf",
		shortname: ":bed:",
		code_decimal: "&#128719;",
		category: "o",
		emoji_order: "1669"
	},
	{
		name: "couch_and_lamp",
		unicode: "1f6cb",
		shortname: ":couch:",
		code_decimal: "&#128715;",
		category: "o",
		emoji_order: "1670"
	},
	{
		name: "toilet",
		unicode: "1f6bd",
		shortname: ":toilet:",
		code_decimal: "&#128701;",
		category: "o",
		emoji_order: "1671"
	},
	{
		name: "shower",
		unicode: "1f6bf",
		shortname: ":shower:",
		code_decimal: "&#128703;",
		category: "o",
		emoji_order: "1672"
	},
	{
		name: "bath",
		unicode: "1f6c0",
		shortname: ":bath:",
		code_decimal: "&#128704;",
		category: "a",
		emoji_order: "1673"
	},
	{
		name: "bathtub",
		unicode: "1f6c1",
		shortname: ":bathtub:",
		code_decimal: "&#128705;",
		category: "o",
		emoji_order: "1679"
	},
	{
		name: "hourglass",
		unicode: "231b",
		shortname: ":hourglass:",
		code_decimal: "&#8987;",
		category: "o",
		emoji_order: "1680"
	},
	{
		name: "hourglass_flowing_sand",
		unicode: "23f3",
		shortname: ":hourglass_flowing_sand:",
		code_decimal: "&#9203;",
		category: "o",
		emoji_order: "1681"
	},
	{
		name: "watch",
		unicode: "231a",
		shortname: ":watch:",
		code_decimal: "&#8986;",
		category: "o",
		emoji_order: "1682"
	},
	{
		name: "alarm_clock",
		unicode: "23f0",
		shortname: ":alarm_clock:",
		code_decimal: "&#9200;",
		category: "o",
		emoji_order: "1683"
	},
	{
		name: "stopwatch",
		unicode: "23f1",
		shortname: ":stopwatch:",
		code_decimal: "&#9201;",
		category: "o",
		emoji_order: "1684"
	},
	{
		name: "timer_clock",
		unicode: "23f2",
		shortname: ":timer:",
		code_decimal: "&#9202;",
		category: "o",
		emoji_order: "1685"
	},
	{
		name: "mantelpiece_clock",
		unicode: "1f570",
		shortname: ":clock:",
		code_decimal: "&#128368;",
		category: "o",
		emoji_order: "1686"
	},
	{
		name: "clock12",
		unicode: "1f55b",
		shortname: ":clock12:",
		code_decimal: "&#128347;",
		category: "s",
		emoji_order: "1687"
	},
	{
		name: "clock1230",
		unicode: "1f567",
		shortname: ":clock1230:",
		code_decimal: "&#128359;",
		category: "s",
		emoji_order: "1688"
	},
	{
		name: "clock1",
		unicode: "1f550",
		shortname: ":clock1:",
		code_decimal: "&#128336;",
		category: "s",
		emoji_order: "1689"
	},
	{
		name: "clock130",
		unicode: "1f55c",
		shortname: ":clock130:",
		code_decimal: "&#128348;",
		category: "s",
		emoji_order: "1690"
	},
	{
		name: "clock2",
		unicode: "1f551",
		shortname: ":clock2:",
		code_decimal: "&#128337;",
		category: "s",
		emoji_order: "1691"
	},
	{
		name: "clock230",
		unicode: "1f55d",
		shortname: ":clock230:",
		code_decimal: "&#128349;",
		category: "s",
		emoji_order: "1692"
	},
	{
		name: "clock3",
		unicode: "1f552",
		shortname: ":clock3:",
		code_decimal: "&#128338;",
		category: "s",
		emoji_order: "1693"
	},
	{
		name: "clock330",
		unicode: "1f55e",
		shortname: ":clock330:",
		code_decimal: "&#128350;",
		category: "s",
		emoji_order: "1694"
	},
	{
		name: "clock4",
		unicode: "1f553",
		shortname: ":clock4:",
		code_decimal: "&#128339;",
		category: "s",
		emoji_order: "1695"
	},
	{
		name: "clock430",
		unicode: "1f55f",
		shortname: ":clock430:",
		code_decimal: "&#128351;",
		category: "s",
		emoji_order: "1696"
	},
	{
		name: "clock5",
		unicode: "1f554",
		shortname: ":clock5:",
		code_decimal: "&#128340;",
		category: "s",
		emoji_order: "1697"
	},
	{
		name: "clock530",
		unicode: "1f560",
		shortname: ":clock530:",
		code_decimal: "&#128352;",
		category: "s",
		emoji_order: "1698"
	},
	{
		name: "clock6",
		unicode: "1f555",
		shortname: ":clock6:",
		code_decimal: "&#128341;",
		category: "s",
		emoji_order: "1699"
	},
	{
		name: "clock630",
		unicode: "1f561",
		shortname: ":clock630:",
		code_decimal: "&#128353;",
		category: "s",
		emoji_order: "1700"
	},
	{
		name: "clock7",
		unicode: "1f556",
		shortname: ":clock7:",
		code_decimal: "&#128342;",
		category: "s",
		emoji_order: "1701"
	},
	{
		name: "clock730",
		unicode: "1f562",
		shortname: ":clock730:",
		code_decimal: "&#128354;",
		category: "s",
		emoji_order: "1702"
	},
	{
		name: "clock8",
		unicode: "1f557",
		shortname: ":clock8:",
		code_decimal: "&#128343;",
		category: "s",
		emoji_order: "1703"
	},
	{
		name: "clock830",
		unicode: "1f563",
		shortname: ":clock830:",
		code_decimal: "&#128355;",
		category: "s",
		emoji_order: "1704"
	},
	{
		name: "clock9",
		unicode: "1f558",
		shortname: ":clock9:",
		code_decimal: "&#128344;",
		category: "s",
		emoji_order: "1705"
	},
	{
		name: "clock930",
		unicode: "1f564",
		shortname: ":clock930:",
		code_decimal: "&#128356;",
		category: "s",
		emoji_order: "1706"
	},
	{
		name: "clock10",
		unicode: "1f559",
		shortname: ":clock10:",
		code_decimal: "&#128345;",
		category: "s",
		emoji_order: "1707"
	},
	{
		name: "clock1030",
		unicode: "1f565",
		shortname: ":clock1030:",
		code_decimal: "&#128357;",
		category: "s",
		emoji_order: "1708"
	},
	{
		name: "clock11",
		unicode: "1f55a",
		shortname: ":clock11:",
		code_decimal: "&#128346;",
		category: "s",
		emoji_order: "1709"
	},
	{
		name: "clock1130",
		unicode: "1f566",
		shortname: ":clock1130:",
		code_decimal: "&#128358;",
		category: "s",
		emoji_order: "1710"
	},
	{
		name: "new_moon",
		unicode: "1f311",
		shortname: ":new_moon:",
		code_decimal: "&#127761;",
		category: "n",
		emoji_order: "1711"
	},
	{
		name: "waxing_crescent_moon",
		unicode: "1f312",
		shortname: ":waxing_crescent_moon:",
		code_decimal: "&#127762;",
		category: "n",
		emoji_order: "1712"
	},
	{
		name: "first_quarter_moon",
		unicode: "1f313",
		shortname: ":first_quarter_moon:",
		code_decimal: "&#127763;",
		category: "n",
		emoji_order: "1713"
	},
	{
		name: "full_moon",
		unicode: "1f315",
		shortname: ":full_moon:",
		code_decimal: "&#127765;",
		category: "n",
		emoji_order: "1715"
	},
	{
		name: "waning_gibbous_moon",
		unicode: "1f316",
		shortname: ":waning_gibbous_moon:",
		code_decimal: "&#127766;",
		category: "n",
		emoji_order: "1716"
	},
	{
		name: "last_quarter_moon",
		unicode: "1f317",
		shortname: ":last_quarter_moon:",
		code_decimal: "&#127767;",
		category: "n",
		emoji_order: "1717"
	},
	{
		name: "waning_crescent_moon",
		unicode: "1f318",
		shortname: ":waning_crescent_moon:",
		code_decimal: "&#127768;",
		category: "n",
		emoji_order: "1718"
	},
	{
		name: "crescent_moon",
		unicode: "1f319",
		shortname: ":crescent_moon:",
		code_decimal: "&#127769;",
		category: "n",
		emoji_order: "1719"
	},
	{
		name: "new_moon_with_face",
		unicode: "1f31a",
		shortname: ":new_moon_with_face:",
		code_decimal: "&#127770;",
		category: "n",
		emoji_order: "1720"
	},
	{
		name: "first_quarter_moon_with_face",
		unicode: "1f31b",
		shortname: ":first_quarter_moon_with_face:",
		code_decimal: "&#127771;",
		category: "n",
		emoji_order: "1721"
	},
	{
		name: "last_quarter_moon_with_face",
		unicode: "1f31c",
		shortname: ":last_quarter_moon_with_face:",
		code_decimal: "&#127772;",
		category: "n",
		emoji_order: "1722"
	},
	{
		name: "thermometer",
		unicode: "1f321",
		shortname: ":thermometer:",
		code_decimal: "&#127777;",
		category: "o",
		emoji_order: "1723"
	},
	{
		name: "sunny",
		unicode: "2600",
		shortname: ":sunny:",
		code_decimal: "&#9728;",
		category: "n",
		emoji_order: "1724"
	},
	{
		name: "full_moon_with_face",
		unicode: "1f31d",
		shortname: ":full_moon_with_face:",
		code_decimal: "&#127773;",
		category: "n",
		emoji_order: "1725"
	},
	{
		name: "sun_with_face",
		unicode: "1f31e",
		shortname: ":sun_with_face:",
		code_decimal: "&#127774;",
		category: "n",
		emoji_order: "1726"
	},
	{
		name: "star",
		unicode: "2b50",
		shortname: ":star:",
		code_decimal: "&#11088;",
		category: "n",
		emoji_order: "1727"
	},
	{
		name: "star2",
		unicode: "1f31f",
		shortname: ":star2:",
		code_decimal: "&#127775;",
		category: "n",
		emoji_order: "1728"
	},
	{
		name: "stars",
		unicode: "1f320",
		shortname: ":stars:",
		code_decimal: "&#127776;",
		category: "t",
		emoji_order: "1729"
	},
	{
		name: "cloud",
		unicode: "2601",
		shortname: ":cloud:",
		code_decimal: "&#9729;",
		category: "n",
		emoji_order: "1730"
	},
	{
		name: "partly_sunny",
		unicode: "26c5",
		shortname: ":partly_sunny:",
		code_decimal: "&#9925;",
		category: "n",
		emoji_order: "1731"
	},
	{
		name: "thunder_cloud_and_rain",
		unicode: "26c8",
		shortname: ":thunder_cloud_rain:",
		code_decimal: "&#9928;",
		category: "n",
		emoji_order: "1732"
	},
	{
		name: "rain_cloud",
		unicode: "1f327",
		shortname: ":cloud_rain:",
		code_decimal: "&#127783;",
		category: "n",
		emoji_order: "1736"
	},
	{
		name: "snow_cloud",
		unicode: "1f328",
		shortname: ":cloud_snow:",
		code_decimal: "&#127784;",
		category: "n",
		emoji_order: "1737"
	},
	{
		name: "fog",
		unicode: "1f32b",
		shortname: ":fog:",
		code_decimal: "&#127787;",
		category: "n",
		emoji_order: "1740"
	},
	{
		name: "wind_blowing_face",
		unicode: "1f32c",
		shortname: ":wind_blowing_face:",
		code_decimal: "&#127788;",
		category: "n",
		emoji_order: "1741"
	},
	{
		name: "cyclone",
		unicode: "1f300",
		shortname: ":cyclone:",
		code_decimal: "&#127744;",
		category: "s",
		emoji_order: "1742"
	},
	{
		name: "rainbow",
		unicode: "1f308",
		shortname: ":rainbow:",
		code_decimal: "&#127752;",
		category: "t",
		emoji_order: "1743"
	},
	{
		name: "closed_umbrella",
		unicode: "1f302",
		shortname: ":closed_umbrella:",
		code_decimal: "&#127746;",
		category: "p",
		emoji_order: "1744"
	},
	{
		name: "umbrella",
		unicode: "2602",
		shortname: ":umbrella2:",
		code_decimal: "&#9730;",
		category: "n",
		emoji_order: "1745"
	},
	{
		name: "umbrella_with_rain_drops",
		unicode: "2614",
		shortname: ":umbrella:",
		code_decimal: "&#9748;",
		category: "n",
		emoji_order: "1746"
	},
	{
		name: "beach_umbrella",
		unicode: "26f1",
		shortname: ":beach_umbrella:",
		code_decimal: "&#9969;",
		category: "o",
		emoji_order: "1747"
	},
	{
		name: "zap",
		unicode: "26a1",
		shortname: ":zap:",
		code_decimal: "&#9889;",
		category: "n",
		emoji_order: "1748"
	},
	{
		name: "snowflake",
		unicode: "2744",
		shortname: ":snowflake:",
		code_decimal: "&#10052;",
		category: "n",
		emoji_order: "1749"
	},
	{
		name: "snowman",
		unicode: "2603",
		shortname: ":snowman2:",
		code_decimal: "&#9731;",
		category: "n",
		emoji_order: "1750"
	},
	{
		name: "snowman_without_snow",
		unicode: "26c4",
		shortname: ":snowman:",
		code_decimal: "&#9924;",
		category: "n",
		emoji_order: "1751"
	},
	{
		name: "comet",
		unicode: "2604",
		shortname: ":comet:",
		code_decimal: "&#9732;",
		category: "n",
		emoji_order: "1752"
	},
	{
		name: "fire",
		unicode: "1f525",
		shortname: ":fire:",
		code_decimal: "&#128293;",
		category: "n",
		emoji_order: "1753"
	},
	{
		name: "droplet",
		unicode: "1f4a7",
		shortname: ":droplet:",
		code_decimal: "&#128167;",
		category: "n",
		emoji_order: "1754"
	},
	{
		name: "ocean",
		unicode: "1f30a",
		shortname: ":ocean:",
		code_decimal: "&#127754;",
		category: "n",
		emoji_order: "1755"
	},
	{
		name: "jack_o_lantern",
		unicode: "1f383",
		shortname: ":jack_o_lantern:",
		code_decimal: "&#127875;",
		category: "n",
		emoji_order: "1756"
	},
	{
		name: "christmas_tree",
		unicode: "1f384",
		shortname: ":christmas_tree:",
		code_decimal: "&#127876;",
		category: "n",
		emoji_order: "1757"
	},
	{
		name: "fireworks",
		unicode: "1f386",
		shortname: ":fireworks:",
		code_decimal: "&#127878;",
		category: "t",
		emoji_order: "1758"
	},
	{
		name: "sparkler",
		unicode: "1f387",
		shortname: ":sparkler:",
		code_decimal: "&#127879;",
		category: "t",
		emoji_order: "1759"
	},
	{
		name: "sparkles",
		unicode: "2728",
		shortname: ":sparkles:",
		code_decimal: "&#10024;",
		category: "n",
		emoji_order: "1760"
	},
	{
		name: "balloon",
		unicode: "1f388",
		shortname: ":balloon:",
		code_decimal: "&#127880;",
		category: "o",
		emoji_order: "1761"
	},
	{
		name: "tada",
		unicode: "1f389",
		shortname: ":tada:",
		code_decimal: "&#127881;",
		category: "o",
		emoji_order: "1762"
	},
	{
		name: "confetti_ball",
		unicode: "1f38a",
		shortname: ":confetti_ball:",
		code_decimal: "&#127882;",
		category: "o",
		emoji_order: "1763"
	},
	{
		name: "tanabata_tree",
		unicode: "1f38b",
		shortname: ":tanabata_tree:",
		code_decimal: "&#127883;",
		category: "n",
		emoji_order: "1764"
	},
	{
		name: "bamboo",
		unicode: "1f38d",
		shortname: ":bamboo:",
		code_decimal: "&#127885;",
		category: "n",
		emoji_order: "1765"
	},
	{
		name: "dolls",
		unicode: "1f38e",
		shortname: ":dolls:",
		code_decimal: "&#127886;",
		category: "o",
		emoji_order: "1766"
	},
	{
		name: "f",
		unicode: "1f38f",
		shortname: ":flags:",
		code_decimal: "&#127887;",
		category: "o",
		emoji_order: "1767"
	},
	{
		name: "wind_chime",
		unicode: "1f390",
		shortname: ":wind_chime:",
		code_decimal: "&#127888;",
		category: "o",
		emoji_order: "1768"
	},
	{
		name: "rice_scene",
		unicode: "1f391",
		shortname: ":rice_scene:",
		code_decimal: "&#127889;",
		category: "t",
		emoji_order: "1769"
	},
	{
		name: "ribbon",
		unicode: "1f380",
		shortname: ":ribbon:",
		code_decimal: "&#127872;",
		category: "o",
		emoji_order: "1770"
	},
	{
		name: "gift",
		unicode: "1f381",
		shortname: ":gift:",
		code_decimal: "&#127873;",
		category: "o",
		emoji_order: "1771"
	},
	{
		name: "reminder_ribbon",
		unicode: "1f397",
		shortname: ":reminder_ribbon:",
		code_decimal: "&#127895;",
		category: "a",
		emoji_order: "1772"
	},
	{
		name: "admission_tickets",
		unicode: "1f39f",
		shortname: ":tickets:",
		code_decimal: "&#127903;",
		category: "a",
		emoji_order: "1773"
	},
	{
		name: "ticket",
		unicode: "1f3ab",
		shortname: ":ticket:",
		code_decimal: "&#127915;",
		category: "a",
		emoji_order: "1774"
	},
	{
		name: "medal",
		unicode: "1f396",
		shortname: ":military_medal:",
		code_decimal: "&#127894;",
		category: "a",
		emoji_order: "1775"
	},
	{
		name: "trophy",
		unicode: "1f3c6",
		shortname: ":trophy:",
		code_decimal: "&#127942;",
		category: "a",
		emoji_order: "1776"
	},
	{
		name: "sports_medal",
		unicode: "1f3c5",
		shortname: ":medal:",
		code_decimal: "&#127941;",
		category: "a",
		emoji_order: "1777"
	},
	{
		name: "soccer",
		unicode: "26bd",
		shortname: ":soccer:",
		code_decimal: "&#9917;",
		category: "a",
		emoji_order: "1781"
	},
	{
		name: "baseball",
		unicode: "26be",
		shortname: ":baseball:",
		code_decimal: "&#9918;",
		category: "a",
		emoji_order: "1782"
	},
	{
		name: "basketball",
		unicode: "1f3c0",
		shortname: ":basketball:",
		code_decimal: "&#127936;",
		category: "a",
		emoji_order: "1783"
	},
	{
		name: "volleyball",
		unicode: "1f3d0",
		shortname: ":volleyball:",
		code_decimal: "&#127952;",
		category: "a",
		emoji_order: "1784"
	},
	{
		name: "football",
		unicode: "1f3c8",
		shortname: ":football:",
		code_decimal: "&#127944;",
		category: "a",
		emoji_order: "1785"
	},
	{
		name: "rugby_football",
		unicode: "1f3c9",
		shortname: ":rugby_football:",
		code_decimal: "&#127945;",
		category: "a",
		emoji_order: "1786"
	},
	{
		name: "tennis",
		unicode: "1f3be",
		shortname: ":tennis:",
		code_decimal: "&#127934;",
		category: "a",
		emoji_order: "1787"
	},
	{
		name: "8ball",
		unicode: "1f3b1",
		shortname: ":8ball:",
		code_decimal: "&#127921;",
		category: "a",
		emoji_order: "1788"
	},
	{
		name: "bowling",
		unicode: "1f3b3",
		shortname: ":bowling:",
		code_decimal: "&#127923;",
		category: "a",
		emoji_order: "1789"
	},
	{
		name: "cricket_bat_and_ball",
		unicode: "1f3cf",
		shortname: ":cricket_game:",
		code_decimal: "&#127951;",
		category: "a",
		emoji_order: "1790"
	},
	{
		name: "field_hockey_stick_and_ball",
		unicode: "1f3d1",
		shortname: ":field_hockey:",
		code_decimal: "&#127953;",
		category: "a",
		emoji_order: "1791"
	},
	{
		name: "ice_hockey_stick_and_puck",
		unicode: "1f3d2",
		shortname: ":hockey:",
		code_decimal: "&#127954;",
		category: "a",
		emoji_order: "1792"
	},
	{
		name: "table_tennis_paddle_and_ball",
		unicode: "1f3d3",
		shortname: ":ping_pong:",
		code_decimal: "&#127955;",
		category: "a",
		emoji_order: "1793"
	},
	{
		name: "badminton_racquet_and_shuttlecock",
		unicode: "1f3f8",
		shortname: ":badminton:",
		code_decimal: "&#127992;",
		category: "a",
		emoji_order: "1794"
	},
	{
		name: "dart",
		unicode: "1f3af",
		shortname: ":dart:",
		code_decimal: "&#127919;",
		category: "a",
		emoji_order: "1798"
	},
	{
		name: "golf",
		unicode: "26f3",
		shortname: ":golf:",
		code_decimal: "&#9971;",
		category: "a",
		emoji_order: "1799"
	},
	{
		name: "ice_skate",
		unicode: "26f8",
		shortname: ":ice_skate:",
		code_decimal: "&#9976;",
		category: "a",
		emoji_order: "1800"
	},
	{
		name: "fishing_pole_and_fish",
		unicode: "1f3a3",
		shortname: ":fishing_pole_and_fish:",
		code_decimal: "&#127907;",
		category: "a",
		emoji_order: "1801"
	},
	{
		name: "running_shirt_with_sash",
		unicode: "1f3bd",
		shortname: ":running_shirt_with_sash:",
		code_decimal: "&#127933;",
		category: "a",
		emoji_order: "1802"
	},
	{
		name: "ski",
		unicode: "1f3bf",
		shortname: ":ski:",
		code_decimal: "&#127935;",
		category: "a",
		emoji_order: "1803"
	},
	{
		name: "video_game",
		unicode: "1f3ae",
		shortname: ":video_game:",
		code_decimal: "&#127918;",
		category: "a",
		emoji_order: "1804"
	},
	{
		name: "joystick",
		unicode: "1f579",
		shortname: ":joystick:",
		code_decimal: "&#128377;",
		category: "o",
		emoji_order: "1805"
	},
	{
		name: "game_die",
		unicode: "1f3b2",
		shortname: ":game_die:",
		code_decimal: "&#127922;",
		category: "a",
		emoji_order: "1806"
	},
	{
		name: "spades",
		unicode: "2660",
		shortname: ":spades:",
		code_decimal: "&spades;",
		category: "s",
		emoji_order: "1807"
	},
	{
		name: "hearts",
		unicode: "2665",
		shortname: ":hearts:",
		code_decimal: "&hearts;",
		category: "s",
		emoji_order: "1808"
	},
	{
		name: "diamonds",
		unicode: "2666",
		shortname: ":diamonds:",
		code_decimal: "&diams;",
		category: "s",
		emoji_order: "1809"
	},
	{
		name: "clubs",
		unicode: "2663",
		shortname: ":clubs:",
		code_decimal: "&clubs;",
		category: "s",
		emoji_order: "1810"
	},
	{
		name: "black_joker",
		unicode: "1f0cf",
		shortname: ":black_joker:",
		code_decimal: "&#127183;",
		category: "s",
		emoji_order: "1811"
	},
	{
		name: "mahjong",
		unicode: "1f004",
		shortname: ":mahjong:",
		code_decimal: "&#126980;",
		category: "s",
		emoji_order: "1812"
	},
	{
		name: "flower_playing_cards",
		unicode: "1f3b4",
		shortname: ":flower_playing_cards:",
		code_decimal: "&#127924;",
		category: "s",
		emoji_order: "1813"
	},
	{
		name: "mute",
		unicode: "1f507",
		shortname: ":mute:",
		code_decimal: "&#128263;",
		category: "s",
		emoji_order: "1814"
	},
	{
		name: "speaker",
		unicode: "1f508",
		shortname: ":speaker:",
		code_decimal: "&#128264;",
		category: "s",
		emoji_order: "1815"
	},
	{
		name: "sound",
		unicode: "1f509",
		shortname: ":sound:",
		code_decimal: "&#128265;",
		category: "s",
		emoji_order: "1816"
	},
	{
		name: "loud_sound",
		unicode: "1f50a",
		shortname: ":loud_sound:",
		code_decimal: "&#128266;",
		category: "s",
		emoji_order: "1817"
	},
	{
		name: "loudspeaker",
		unicode: "1f4e2",
		shortname: ":loudspeaker:",
		code_decimal: "&#128226;",
		category: "s",
		emoji_order: "1818"
	},
	{
		name: "mega",
		unicode: "1f4e3",
		shortname: ":mega:",
		code_decimal: "&#128227;",
		category: "s",
		emoji_order: "1819"
	},
	{
		name: "postal_horn",
		unicode: "1f4ef",
		shortname: ":postal_horn:",
		code_decimal: "&#128239;",
		category: "o",
		emoji_order: "1820"
	},
	{
		name: "bell",
		unicode: "1f514",
		shortname: ":bell:",
		code_decimal: "&#128276;",
		category: "s",
		emoji_order: "1821"
	},
	{
		name: "no_bell",
		unicode: "1f515",
		shortname: ":no_bell:",
		code_decimal: "&#128277;",
		category: "s",
		emoji_order: "1822"
	},
	{
		name: "musical_score",
		unicode: "1f3bc",
		shortname: ":musical_score:",
		code_decimal: "&#127932;",
		category: "a",
		emoji_order: "1823"
	},
	{
		name: "musical_note",
		unicode: "1f3b5",
		shortname: ":musical_note:",
		code_decimal: "&#127925;",
		category: "s",
		emoji_order: "1824"
	},
	{
		name: "notes",
		unicode: "1f3b6",
		shortname: ":notes:",
		code_decimal: "&#127926;",
		category: "s",
		emoji_order: "1825"
	},
	{
		name: "studio_microphone",
		unicode: "1f399",
		shortname: ":microphone2:",
		code_decimal: "&#127897;",
		category: "o",
		emoji_order: "1826"
	},
	{
		name: "level_slider",
		unicode: "1f39a",
		shortname: ":level_slider:",
		code_decimal: "&#127898;",
		category: "o",
		emoji_order: "1827"
	},
	{
		name: "control_knobs",
		unicode: "1f39b",
		shortname: ":control_knobs:",
		code_decimal: "&#127899;",
		category: "o",
		emoji_order: "1828"
	},
	{
		name: "microphone",
		unicode: "1f3a4",
		shortname: ":microphone:",
		code_decimal: "&#127908;",
		category: "a",
		emoji_order: "1829"
	},
	{
		name: "headphones",
		unicode: "1f3a7",
		shortname: ":headphones:",
		code_decimal: "&#127911;",
		category: "a",
		emoji_order: "1830"
	},
	{
		name: "radio",
		unicode: "1f4fb",
		shortname: ":radio:",
		code_decimal: "&#128251;",
		category: "o",
		emoji_order: "1831"
	},
	{
		name: "saxophone",
		unicode: "1f3b7",
		shortname: ":saxophone:",
		code_decimal: "&#127927;",
		category: "a",
		emoji_order: "1832"
	},
	{
		name: "guitar",
		unicode: "1f3b8",
		shortname: ":guitar:",
		code_decimal: "&#127928;",
		category: "a",
		emoji_order: "1833"
	},
	{
		name: "musical_keyboard",
		unicode: "1f3b9",
		shortname: ":musical_keyboard:",
		code_decimal: "&#127929;",
		category: "a",
		emoji_order: "1834"
	},
	{
		name: "trumpet",
		unicode: "1f3ba",
		shortname: ":trumpet:",
		code_decimal: "&#127930;",
		category: "a",
		emoji_order: "1835"
	},
	{
		name: "violin",
		unicode: "1f3bb",
		shortname: ":violin:",
		code_decimal: "&#127931;",
		category: "a",
		emoji_order: "1836"
	},
	{
		name: "iphone",
		unicode: "1f4f1",
		shortname: ":iphone:",
		code_decimal: "&#128241;",
		category: "o",
		emoji_order: "1838"
	},
	{
		name: "calling",
		unicode: "1f4f2",
		shortname: ":calling:",
		code_decimal: "&#128242;",
		category: "o",
		emoji_order: "1839"
	},
	{
		name: "telephone",
		unicode: "260e",
		shortname: ":telephone:",
		code_decimal: "&#9742;",
		category: "o",
		emoji_order: "1840"
	},
	{
		name: "telephone_receiver",
		unicode: "1f4de",
		shortname: ":telephone_receiver:",
		code_decimal: "&#128222;",
		category: "o",
		emoji_order: "1841"
	},
	{
		name: "pager",
		unicode: "1f4df",
		shortname: ":pager:",
		code_decimal: "&#128223;",
		category: "o",
		emoji_order: "1842"
	},
	{
		name: "fax",
		unicode: "1f4e0",
		shortname: ":fax:",
		code_decimal: "&#128224;",
		category: "o",
		emoji_order: "1843"
	},
	{
		name: "battery",
		unicode: "1f50b",
		shortname: ":battery:",
		code_decimal: "&#128267;",
		category: "o",
		emoji_order: "1844"
	},
	{
		name: "electric_plug",
		unicode: "1f50c",
		shortname: ":electric_plug:",
		code_decimal: "&#128268;",
		category: "o",
		emoji_order: "1845"
	},
	{
		name: "computer",
		unicode: "1f4bb",
		shortname: ":computer:",
		code_decimal: "&#128187;",
		category: "o",
		emoji_order: "1846"
	},
	{
		name: "desktop_computer",
		unicode: "1f5a5",
		shortname: ":desktop:",
		code_decimal: "&#128421;",
		category: "o",
		emoji_order: "1847"
	},
	{
		name: "printer",
		unicode: "1f5a8",
		shortname: ":printer:",
		code_decimal: "&#128424;",
		category: "o",
		emoji_order: "1848"
	},
	{
		name: "keyboard",
		unicode: "2328",
		shortname: ":keyboard:",
		code_decimal: "&#9000;",
		category: "o",
		emoji_order: "1849"
	},
	{
		name: "three_button_mouse",
		unicode: "1f5b1",
		shortname: ":mouse_three_button:",
		code_decimal: "&#128433;",
		category: "o",
		emoji_order: "1850"
	},
	{
		name: "trackball",
		unicode: "1f5b2",
		shortname: ":trackball:",
		code_decimal: "&#128434;",
		category: "o",
		emoji_order: "1851"
	},
	{
		name: "minidisc",
		unicode: "1f4bd",
		shortname: ":minidisc:",
		code_decimal: "&#128189;",
		category: "o",
		emoji_order: "1852"
	},
	{
		name: "floppy_disk",
		unicode: "1f4be",
		shortname: ":floppy_disk:",
		code_decimal: "&#128190;",
		category: "o",
		emoji_order: "1853"
	},
	{
		name: "cd",
		unicode: "1f4bf",
		shortname: ":cd:",
		code_decimal: "&#128191;",
		category: "o",
		emoji_order: "1854"
	},
	{
		name: "dvd",
		unicode: "1f4c0",
		shortname: ":dvd:",
		code_decimal: "&#128192;",
		category: "o",
		emoji_order: "1855"
	},
	{
		name: "movie_camera",
		unicode: "1f3a5",
		shortname: ":movie_camera:",
		code_decimal: "&#127909;",
		category: "o",
		emoji_order: "1856"
	},
	{
		name: "film_frames",
		unicode: "1f39e",
		shortname: ":film_frames:",
		code_decimal: "&#127902;",
		category: "o",
		emoji_order: "1857"
	},
	{
		name: "film_projector",
		unicode: "1f4fd",
		shortname: ":projector:",
		code_decimal: "&#128253;",
		category: "o",
		emoji_order: "1858"
	},
	{
		name: "clapper",
		unicode: "1f3ac",
		shortname: ":clapper:",
		code_decimal: "&#127916;",
		category: "a",
		emoji_order: "1859"
	},
	{
		name: "tv",
		unicode: "1f4fa",
		shortname: ":tv:",
		code_decimal: "&#128250;",
		category: "o",
		emoji_order: "1860"
	},
	{
		name: "camera",
		unicode: "1f4f7",
		shortname: ":camera:",
		code_decimal: "&#128247;",
		category: "o",
		emoji_order: "1861"
	},
	{
		name: "camera_with_flash",
		unicode: "1f4f8",
		shortname: ":camera_with_flash:",
		code_decimal: "&#128248;",
		category: "o",
		emoji_order: "1862"
	},
	{
		name: "video_camera",
		unicode: "1f4f9",
		shortname: ":video_camera:",
		code_decimal: "&#128249;",
		category: "o",
		emoji_order: "1863"
	},
	{
		name: "vhs",
		unicode: "1f4fc",
		shortname: ":vhs:",
		code_decimal: "&#128252;",
		category: "o",
		emoji_order: "1864"
	},
	{
		name: "mag",
		unicode: "1f50d",
		shortname: ":mag:",
		code_decimal: "&#128269;",
		category: "o",
		emoji_order: "1865"
	},
	{
		name: "mag_right",
		unicode: "1f50e",
		shortname: ":mag_right:",
		code_decimal: "&#128270;",
		category: "o",
		emoji_order: "1866"
	},
	{
		name: "microscope",
		unicode: "1f52c",
		shortname: ":microscope:",
		code_decimal: "&#128300;",
		category: "o",
		emoji_order: "1867"
	},
	{
		name: "telescope",
		unicode: "1f52d",
		shortname: ":telescope:",
		code_decimal: "&#128301;",
		category: "o",
		emoji_order: "1868"
	},
	{
		name: "satellite_antenna",
		unicode: "1f4e1",
		shortname: ":satellite:",
		code_decimal: "&#128225;",
		category: "o",
		emoji_order: "1869"
	},
	{
		name: "candle",
		unicode: "1f56f",
		shortname: ":candle:",
		code_decimal: "&#128367;",
		category: "o",
		emoji_order: "1870"
	},
	{
		name: "bulb",
		unicode: "1f4a1",
		shortname: ":bulb:",
		code_decimal: "&#128161;",
		category: "o",
		emoji_order: "1871"
	},
	{
		name: "flashlight",
		unicode: "1f526",
		shortname: ":flashlight:",
		code_decimal: "&#128294;",
		category: "o",
		emoji_order: "1872"
	},
	{
		name: "izakaya_lantern",
		unicode: "1f3ee",
		shortname: ":izakaya_lantern:",
		code_decimal: "&#127982;",
		category: "o",
		emoji_order: "1873"
	},
	{
		name: "notebook_with_decorative_cover",
		unicode: "1f4d4",
		shortname: ":notebook_with_decorative_cover:",
		code_decimal: "&#128212;",
		category: "o",
		emoji_order: "1874"
	},
	{
		name: "closed_book",
		unicode: "1f4d5",
		shortname: ":closed_book:",
		code_decimal: "&#128213;",
		category: "o",
		emoji_order: "1875"
	},
	{
		name: "book",
		unicode: "1f4d6",
		shortname: ":book:",
		code_decimal: "&#128214;",
		category: "o",
		emoji_order: "1876"
	},
	{
		name: "green_book",
		unicode: "1f4d7",
		shortname: ":green_book:",
		code_decimal: "&#128215;",
		category: "o",
		emoji_order: "1877"
	},
	{
		name: "blue_book",
		unicode: "1f4d8",
		shortname: ":blue_book:",
		code_decimal: "&#128216;",
		category: "o",
		emoji_order: "1878"
	},
	{
		name: "orange_book",
		unicode: "1f4d9",
		shortname: ":orange_book:",
		code_decimal: "&#128217;",
		category: "o",
		emoji_order: "1879"
	},
	{
		name: "books",
		unicode: "1f4da",
		shortname: ":books:",
		code_decimal: "&#128218;",
		category: "o",
		emoji_order: "1880"
	},
	{
		name: "notebook",
		unicode: "1f4d3",
		shortname: ":notebook:",
		code_decimal: "&#128211;",
		category: "o",
		emoji_order: "1881"
	},
	{
		name: "ledger",
		unicode: "1f4d2",
		shortname: ":ledger:",
		code_decimal: "&#128210;",
		category: "o",
		emoji_order: "1882"
	},
	{
		name: "page_with_curl",
		unicode: "1f4c3",
		shortname: ":page_with_curl:",
		code_decimal: "&#128195;",
		category: "o",
		emoji_order: "1883"
	},
	{
		name: "scroll",
		unicode: "1f4dc",
		shortname: ":scroll:",
		code_decimal: "&#128220;",
		category: "o",
		emoji_order: "1884"
	},
	{
		name: "page_facing_up",
		unicode: "1f4c4",
		shortname: ":page_facing_up:",
		code_decimal: "&#128196;",
		category: "o",
		emoji_order: "1885"
	},
	{
		name: "newspaper",
		unicode: "1f4f0",
		shortname: ":newspaper:",
		code_decimal: "&#128240;",
		category: "o",
		emoji_order: "1886"
	},
	{
		name: "rolled_up_newspaper",
		unicode: "1f5de",
		shortname: ":newspaper2:",
		code_decimal: "&#128478;",
		category: "o",
		emoji_order: "1887"
	},
	{
		name: "bookmark_tabs",
		unicode: "1f4d1",
		shortname: ":bookmark_tabs:",
		code_decimal: "&#128209;",
		category: "o",
		emoji_order: "1888"
	},
	{
		name: "bookmark",
		unicode: "1f516",
		shortname: ":bookmark:",
		code_decimal: "&#128278;",
		category: "o",
		emoji_order: "1889"
	},
	{
		name: "label",
		unicode: "1f3f7",
		shortname: ":label:",
		code_decimal: "&#127991;",
		category: "o",
		emoji_order: "1890"
	},
	{
		name: "moneybag",
		unicode: "1f4b0",
		shortname: ":moneybag:",
		code_decimal: "&#128176;",
		category: "o",
		emoji_order: "1891"
	},
	{
		name: "yen",
		unicode: "1f4b4",
		shortname: ":yen:",
		code_decimal: "&#128180;",
		category: "o",
		emoji_order: "1892"
	},
	{
		name: "dollar",
		unicode: "1f4b5",
		shortname: ":dollar:",
		code_decimal: "&#128181;",
		category: "o",
		emoji_order: "1893"
	},
	{
		name: "euro",
		unicode: "1f4b6",
		shortname: ":euro:",
		code_decimal: "&#128182;",
		category: "o",
		emoji_order: "1894"
	},
	{
		name: "pound",
		unicode: "1f4b7",
		shortname: ":pound:",
		code_decimal: "&#128183;",
		category: "o",
		emoji_order: "1895"
	},
	{
		name: "money_with_wings",
		unicode: "1f4b8",
		shortname: ":money_with_wings:",
		code_decimal: "&#128184;",
		category: "o",
		emoji_order: "1896"
	},
	{
		name: "credit_card",
		unicode: "1f4b3",
		shortname: ":credit_card:",
		code_decimal: "&#128179;",
		category: "o",
		emoji_order: "1897"
	},
	{
		name: "chart",
		unicode: "1f4b9",
		shortname: ":chart:",
		code_decimal: "&#128185;",
		category: "s",
		emoji_order: "1898"
	},
	{
		name: "currency_exchange",
		unicode: "1f4b1",
		shortname: ":currency_exchange:",
		code_decimal: "&#128177;",
		category: "s",
		emoji_order: "1899"
	},
	{
		name: "heavy_dollar_sign",
		unicode: "1f4b2",
		shortname: ":heavy_dollar_sign:",
		code_decimal: "&#128178;",
		category: "s",
		emoji_order: "1900"
	},
	{
		name: "e-mail",
		unicode: "1f4e7",
		shortname: ":e-mail:",
		code_decimal: "&#128231;",
		category: "o",
		emoji_order: "1902"
	},
	{
		name: "incoming_envelope",
		unicode: "1f4e8",
		shortname: ":incoming_envelope:",
		code_decimal: "&#128232;",
		category: "o",
		emoji_order: "1903"
	},
	{
		name: "envelope_with_arrow",
		unicode: "1f4e9",
		shortname: ":envelope_with_arrow:",
		code_decimal: "&#128233;",
		category: "o",
		emoji_order: "1904"
	},
	{
		name: "outbox_tray",
		unicode: "1f4e4",
		shortname: ":outbox_tray:",
		code_decimal: "&#128228;",
		category: "o",
		emoji_order: "1905"
	},
	{
		name: "inbox_tray",
		unicode: "1f4e5",
		shortname: ":inbox_tray:",
		code_decimal: "&#128229;",
		category: "o",
		emoji_order: "1906"
	},
	{
		name: "package",
		unicode: "1f4e6",
		shortname: ":package:",
		code_decimal: "&#128230;",
		category: "o",
		emoji_order: "1907"
	},
	{
		name: "mailbox",
		unicode: "1f4eb",
		shortname: ":mailbox:",
		code_decimal: "&#128235;",
		category: "o",
		emoji_order: "1908"
	},
	{
		name: "mailbox_closed",
		unicode: "1f4ea",
		shortname: ":mailbox_closed:",
		code_decimal: "&#128234;",
		category: "o",
		emoji_order: "1909"
	},
	{
		name: "mailbox_with_mail",
		unicode: "1f4ec",
		shortname: ":mailbox_with_mail:",
		code_decimal: "&#128236;",
		category: "o",
		emoji_order: "1910"
	},
	{
		name: "mailbox_with_no_mail",
		unicode: "1f4ed",
		shortname: ":mailbox_with_no_mail:",
		code_decimal: "&#128237;",
		category: "o",
		emoji_order: "1911"
	},
	{
		name: "postbox",
		unicode: "1f4ee",
		shortname: ":postbox:",
		code_decimal: "&#128238;",
		category: "o",
		emoji_order: "1912"
	},
	{
		name: "ballot_box_with_ballot",
		unicode: "1f5f3",
		shortname: ":ballot_box:",
		code_decimal: "&#128499;",
		category: "o",
		emoji_order: "1913"
	},
	{
		name: "pencil2",
		unicode: "270f",
		shortname: ":pencil2:",
		code_decimal: "&#9999;",
		category: "o",
		emoji_order: "1914"
	},
	{
		name: "black_nib",
		unicode: "2712",
		shortname: ":black_nib:",
		code_decimal: "&#10002;",
		category: "o",
		emoji_order: "1915"
	},
	{
		name: "lower_left_fountain_pen",
		unicode: "1f58b",
		shortname: ":pen_fountain:",
		code_decimal: "&#128395;",
		category: "o",
		emoji_order: "1916"
	},
	{
		name: "lower_left_ballpoint_pen",
		unicode: "1f58a",
		shortname: ":pen_ballpoint:",
		code_decimal: "&#128394;",
		category: "o",
		emoji_order: "1917"
	},
	{
		name: "lower_left_paintbrush",
		unicode: "1f58c",
		shortname: ":paintbrush:",
		code_decimal: "&#128396;",
		category: "o",
		emoji_order: "1918"
	},
	{
		name: "lower_left_crayon",
		unicode: "1f58d",
		shortname: ":crayon:",
		code_decimal: "&#128397;",
		category: "o",
		emoji_order: "1919"
	},
	{
		name: "memo",
		unicode: "1f4dd",
		shortname: ":pencil:",
		code_decimal: "&#128221;",
		category: "o",
		emoji_order: "1920"
	},
	{
		name: "briefcase",
		unicode: "1f4bc",
		shortname: ":briefcase:",
		code_decimal: "&#128188;",
		category: "p",
		emoji_order: "1921"
	},
	{
		name: "file_folder",
		unicode: "1f4c1",
		shortname: ":file_folder:",
		code_decimal: "&#128193;",
		category: "o",
		emoji_order: "1922"
	},
	{
		name: "open_file_folder",
		unicode: "1f4c2",
		shortname: ":open_file_folder:",
		code_decimal: "&#128194;",
		category: "o",
		emoji_order: "1923"
	},
	{
		name: "card_index_dividers",
		unicode: "1f5c2",
		shortname: ":dividers:",
		code_decimal: "&#128450;",
		category: "o",
		emoji_order: "1924"
	},
	{
		name: "date",
		unicode: "1f4c5",
		shortname: ":date:",
		code_decimal: "&#128197;",
		category: "o",
		emoji_order: "1925"
	},
	{
		name: "calendar",
		unicode: "1f4c6",
		shortname: ":calendar:",
		code_decimal: "&#128198;",
		category: "o",
		emoji_order: "1926"
	},
	{
		name: "spiral_note_pad",
		unicode: "1f5d2",
		shortname: ":notepad_spiral:",
		code_decimal: "&#128466;",
		category: "o",
		emoji_order: "1927"
	},
	{
		name: "spiral_calendar_pad",
		unicode: "1f5d3",
		shortname: ":calendar_spiral:",
		code_decimal: "&#128467;",
		category: "o",
		emoji_order: "1928"
	},
	{
		name: "card_index",
		unicode: "1f4c7",
		shortname: ":card_index:",
		code_decimal: "&#128199;",
		category: "o",
		emoji_order: "1929"
	},
	{
		name: "chart_with_upwards_trend",
		unicode: "1f4c8",
		shortname: ":chart_with_upwards_trend:",
		code_decimal: "&#128200;",
		category: "o",
		emoji_order: "1930"
	},
	{
		name: "chart_with_downwards_trend",
		unicode: "1f4c9",
		shortname: ":chart_with_downwards_trend:",
		code_decimal: "&#128201;",
		category: "o",
		emoji_order: "1931"
	},
	{
		name: "bar_chart",
		unicode: "1f4ca",
		shortname: ":bar_chart:",
		code_decimal: "&#128202;",
		category: "o",
		emoji_order: "1932"
	},
	{
		name: "clipboard",
		unicode: "1f4cb",
		shortname: ":clipboard:",
		code_decimal: "&#128203;",
		category: "o",
		emoji_order: "1933"
	},
	{
		name: "pushpin",
		unicode: "1f4cc",
		shortname: ":pushpin:",
		code_decimal: "&#128204;",
		category: "o",
		emoji_order: "1934"
	},
	{
		name: "round_pushpin",
		unicode: "1f4cd",
		shortname: ":round_pushpin:",
		code_decimal: "&#128205;",
		category: "o",
		emoji_order: "1935"
	},
	{
		name: "paperclip",
		unicode: "1f4ce",
		shortname: ":paperclip:",
		code_decimal: "&#128206;",
		category: "o",
		emoji_order: "1936"
	},
	{
		name: "linked_paperclips",
		unicode: "1f587",
		shortname: ":paperclips:",
		code_decimal: "&#128391;",
		category: "o",
		emoji_order: "1937"
	},
	{
		name: "straight_ruler",
		unicode: "1f4cf",
		shortname: ":straight_ruler:",
		code_decimal: "&#128207;",
		category: "o",
		emoji_order: "1938"
	},
	{
		name: "triangular_ruler",
		unicode: "1f4d0",
		shortname: ":triangular_ruler:",
		code_decimal: "&#128208;",
		category: "o",
		emoji_order: "1939"
	},
	{
		name: "scissors",
		unicode: "2702",
		shortname: ":scissors:",
		code_decimal: "&#9986;",
		category: "o",
		emoji_order: "1940"
	},
	{
		name: "card_file_box",
		unicode: "1f5c3",
		shortname: ":card_box:",
		code_decimal: "&#128451;",
		category: "o",
		emoji_order: "1941"
	},
	{
		name: "file_cabinet",
		unicode: "1f5c4",
		shortname: ":file_cabinet:",
		code_decimal: "&#128452;",
		category: "o",
		emoji_order: "1942"
	},
	{
		name: "wastebasket",
		unicode: "1f5d1",
		shortname: ":wastebasket:",
		code_decimal: "&#128465;",
		category: "o",
		emoji_order: "1943"
	},
	{
		name: "lock",
		unicode: "1f512",
		shortname: ":lock:",
		code_decimal: "&#128274;",
		category: "o",
		emoji_order: "1944"
	},
	{
		name: "unlock",
		unicode: "1f513",
		shortname: ":unlock:",
		code_decimal: "&#128275;",
		category: "o",
		emoji_order: "1945"
	},
	{
		name: "lock_with_ink_pen",
		unicode: "1f50f",
		shortname: ":lock_with_ink_pen:",
		code_decimal: "&#128271;",
		category: "o",
		emoji_order: "1946"
	},
	{
		name: "closed_lock_with_key",
		unicode: "1f510",
		shortname: ":closed_lock_with_key:",
		code_decimal: "&#128272;",
		category: "o",
		emoji_order: "1947"
	},
	{
		name: "key",
		unicode: "1f511",
		shortname: ":key:",
		code_decimal: "&#128273;",
		category: "o",
		emoji_order: "1948"
	},
	{
		name: "old_key",
		unicode: "1f5dd",
		shortname: ":key2:",
		code_decimal: "&#128477;",
		category: "o",
		emoji_order: "1949"
	},
	{
		name: "hammer",
		unicode: "1f528",
		shortname: ":hammer:",
		code_decimal: "&#128296;",
		category: "o",
		emoji_order: "1950"
	},
	{
		name: "pick",
		unicode: "26cf",
		shortname: ":pick:",
		code_decimal: "&#9935;",
		category: "o",
		emoji_order: "1951"
	},
	{
		name: "hammer_and_pick",
		unicode: "2692",
		shortname: ":hammer_pick:",
		code_decimal: "&#9874;",
		category: "o",
		emoji_order: "1952"
	},
	{
		name: "hammer_and_wrench",
		unicode: "1f6e0",
		shortname: ":tools:",
		code_decimal: "&#128736;",
		category: "o",
		emoji_order: "1953"
	},
	{
		name: "dagger_knife",
		unicode: "1f5e1",
		shortname: ":dagger:",
		code_decimal: "&#128481;",
		category: "o",
		emoji_order: "1954"
	},
	{
		name: "crossed_swords",
		unicode: "2694",
		shortname: ":crossed_swords:",
		code_decimal: "&#9876;",
		category: "o",
		emoji_order: "1955"
	},
	{
		name: "gun",
		unicode: "1f52b",
		shortname: ":gun:",
		code_decimal: "&#128299;",
		category: "o",
		emoji_order: "1956"
	},
	{
		name: "bow_and_arrow",
		unicode: "1f3f9",
		shortname: ":bow_and_arrow:",
		code_decimal: "&#127993;",
		category: "a",
		emoji_order: "1957"
	},
	{
		name: "shield",
		unicode: "1f6e1",
		shortname: ":shield:",
		code_decimal: "&#128737;",
		category: "o",
		emoji_order: "1958"
	},
	{
		name: "wrench",
		unicode: "1f527",
		shortname: ":wrench:",
		code_decimal: "&#128295;",
		category: "o",
		emoji_order: "1959"
	},
	{
		name: "nut_and_bolt",
		unicode: "1f529",
		shortname: ":nut_and_bolt:",
		code_decimal: "&#128297;",
		category: "o",
		emoji_order: "1960"
	},
	{
		name: "gear",
		unicode: "2699",
		shortname: ":gear:",
		code_decimal: "&#9881;",
		category: "o",
		emoji_order: "1961"
	},
	{
		name: "compression",
		unicode: "1f5dc",
		shortname: ":compression:",
		code_decimal: "&#128476;",
		category: "o",
		emoji_order: "1962"
	},
	{
		name: "alembic",
		unicode: "2697",
		shortname: ":alembic:",
		code_decimal: "&#9879;",
		category: "o",
		emoji_order: "1963"
	},
	{
		name: "scales",
		unicode: "2696",
		shortname: ":scales:",
		code_decimal: "&#9878;",
		category: "o",
		emoji_order: "1964"
	},
	{
		name: "link",
		unicode: "1f517",
		shortname: ":link:",
		code_decimal: "&#128279;",
		category: "o",
		emoji_order: "1965"
	},
	{
		name: "chains",
		unicode: "26d3",
		shortname: ":chains:",
		code_decimal: "&#9939;",
		category: "o",
		emoji_order: "1966"
	},
	{
		name: "syringe",
		unicode: "1f489",
		shortname: ":syringe:",
		code_decimal: "&#128137;",
		category: "o",
		emoji_order: "1967"
	},
	{
		name: "pill",
		unicode: "1f48a",
		shortname: ":pill:",
		code_decimal: "&#128138;",
		category: "o",
		emoji_order: "1968"
	},
	{
		name: "smoking",
		unicode: "1f6ac",
		shortname: ":smoking:",
		code_decimal: "&#128684;",
		category: "o",
		emoji_order: "1969"
	},
	{
		name: "coffin",
		unicode: "26b0",
		shortname: ":coffin:",
		code_decimal: "&#9904;",
		category: "o",
		emoji_order: "1970"
	},
	{
		name: "funeral_urn",
		unicode: "26b1",
		shortname: ":urn:",
		code_decimal: "&#9905;",
		category: "o",
		emoji_order: "1971"
	},
	{
		name: "moyai",
		unicode: "1f5ff",
		shortname: ":moyai:",
		code_decimal: "&#128511;",
		category: "o",
		emoji_order: "1972"
	},
	{
		name: "oil_drum",
		unicode: "1f6e2",
		shortname: ":oil:",
		code_decimal: "&#128738;",
		category: "o",
		emoji_order: "1973"
	},
	{
		name: "crystal_ball",
		unicode: "1f52e",
		shortname: ":crystal_ball:",
		code_decimal: "&#128302;",
		category: "o",
		emoji_order: "1974"
	},
	{
		name: "atm",
		unicode: "1f3e7",
		shortname: ":atm:",
		code_decimal: "&#127975;",
		category: "s",
		emoji_order: "1976"
	},
	{
		name: "put_litter_in_its_place",
		unicode: "1f6ae",
		shortname: ":put_litter_in_its_place:",
		code_decimal: "&#128686;",
		category: "s",
		emoji_order: "1977"
	},
	{
		name: "potable_water",
		unicode: "1f6b0",
		shortname: ":potable_water:",
		code_decimal: "&#128688;",
		category: "s",
		emoji_order: "1978"
	},
	{
		name: "wheelchair",
		unicode: "267f",
		shortname: ":wheelchair:",
		code_decimal: "&#9855;",
		category: "s",
		emoji_order: "1979"
	},
	{
		name: "mens",
		unicode: "1f6b9",
		shortname: ":mens:",
		code_decimal: "&#128697;",
		category: "s",
		emoji_order: "1980"
	},
	{
		name: "womens",
		unicode: "1f6ba",
		shortname: ":womens:",
		code_decimal: "&#128698;",
		category: "s",
		emoji_order: "1981"
	},
	{
		name: "restroom",
		unicode: "1f6bb",
		shortname: ":restroom:",
		code_decimal: "&#128699;",
		category: "s",
		emoji_order: "1982"
	},
	{
		name: "baby_symbol",
		unicode: "1f6bc",
		shortname: ":baby_symbol:",
		code_decimal: "&#128700;",
		category: "s",
		emoji_order: "1983"
	},
	{
		name: "wc",
		unicode: "1f6be",
		shortname: ":wc:",
		code_decimal: "&#128702;",
		category: "s",
		emoji_order: "1984"
	},
	{
		name: "passport_control",
		unicode: "1f6c2",
		shortname: ":passport_control:",
		code_decimal: "&#128706;",
		category: "s",
		emoji_order: "1985"
	},
	{
		name: "customs",
		unicode: "1f6c3",
		shortname: ":customs:",
		code_decimal: "&#128707;",
		category: "s",
		emoji_order: "1986"
	},
	{
		name: "baggage_claim",
		unicode: "1f6c4",
		shortname: ":baggage_claim:",
		code_decimal: "&#128708;",
		category: "s",
		emoji_order: "1987"
	},
	{
		name: "left_luggage",
		unicode: "1f6c5",
		shortname: ":left_luggage:",
		code_decimal: "&#128709;",
		category: "s",
		emoji_order: "1988"
	},
	{
		name: "warning",
		unicode: "26a0",
		shortname: ":warning:",
		code_decimal: "&#9888;",
		category: "s",
		emoji_order: "1989"
	},
	{
		name: "children_crossing",
		unicode: "1f6b8",
		shortname: ":children_crossing:",
		code_decimal: "&#128696;",
		category: "s",
		emoji_order: "1990"
	},
	{
		name: "no_entry",
		unicode: "26d4",
		shortname: ":no_entry:",
		code_decimal: "&#9940;",
		category: "s",
		emoji_order: "1991"
	},
	{
		name: "no_entry_sign",
		unicode: "1f6ab",
		shortname: ":no_entry_sign:",
		code_decimal: "&#128683;",
		category: "s",
		emoji_order: "1992"
	},
	{
		name: "no_bicycles",
		unicode: "1f6b3",
		shortname: ":no_bicycles:",
		code_decimal: "&#128691;",
		category: "s",
		emoji_order: "1993"
	},
	{
		name: "no_smoking",
		unicode: "1f6ad",
		shortname: ":no_smoking:",
		code_decimal: "&#128685;",
		category: "s",
		emoji_order: "1994"
	},
	{
		name: "do_not_litter",
		unicode: "1f6af",
		shortname: ":do_not_litter:",
		code_decimal: "&#128687;",
		category: "s",
		emoji_order: "1995"
	},
	{
		name: "non-potable_water",
		unicode: "1f6b1",
		shortname: ":non-potable_water:",
		code_decimal: "&#128689;",
		category: "s",
		emoji_order: "1996"
	},
	{
		name: "no_pedestrians",
		unicode: "1f6b7",
		shortname: ":no_pedestrians:",
		code_decimal: "&#128695;",
		category: "s",
		emoji_order: "1997"
	},
	{
		name: "no_mobile_phones",
		unicode: "1f4f5",
		shortname: ":no_mobile_phones:",
		code_decimal: "&#128245;",
		category: "s",
		emoji_order: "1998"
	},
	{
		name: "underage",
		unicode: "1f51e",
		shortname: ":underage:",
		code_decimal: "&#128286;",
		category: "s",
		emoji_order: "1999"
	},
	{
		name: "radioactive",
		unicode: "2622",
		shortname: ":radioactive:",
		code_decimal: "&#9762;",
		category: "s",
		emoji_order: "2000"
	},
	{
		name: "biohazard",
		unicode: "2623",
		shortname: ":biohazard:",
		code_decimal: "&#9763;",
		category: "s",
		emoji_order: "2001"
	},
	{
		name: "arrow_up",
		unicode: "2b06",
		shortname: ":arrow_up:",
		code_decimal: "&#11014;",
		category: "s",
		emoji_order: "2002"
	},
	{
		name: "arrow_upper_right",
		unicode: "2197",
		shortname: ":arrow_upper_right:",
		code_decimal: "&#8599;",
		category: "s",
		emoji_order: "2003"
	},
	{
		name: "arrow_right",
		unicode: "27a1",
		shortname: ":arrow_right:",
		code_decimal: "&#10145;",
		category: "s",
		emoji_order: "2004"
	},
	{
		name: "arrow_lower_right",
		unicode: "2198",
		shortname: ":arrow_lower_right:",
		code_decimal: "&#8600;",
		category: "s",
		emoji_order: "2005"
	},
	{
		name: "arrow_down",
		unicode: "2b07",
		shortname: ":arrow_down:",
		code_decimal: "&#11015;",
		category: "s",
		emoji_order: "2006"
	},
	{
		name: "arrow_lower_left",
		unicode: "2199",
		shortname: ":arrow_lower_left:",
		code_decimal: "&#8601;",
		category: "s",
		emoji_order: "2007"
	},
	{
		name: "arrow_left",
		unicode: "2b05",
		shortname: ":arrow_left:",
		code_decimal: "&#11013;",
		category: "s",
		emoji_order: "2008"
	},
	{
		name: "arrow_upper_left",
		unicode: "2196",
		shortname: ":arrow_upper_left:",
		code_decimal: "&#8598;",
		category: "s",
		emoji_order: "2009"
	},
	{
		name: "arrow_up_down",
		unicode: "2195",
		shortname: ":arrow_up_down:",
		code_decimal: "&#8597;",
		category: "s",
		emoji_order: "2010"
	},
	{
		name: "left_right_arrow",
		unicode: "2194",
		shortname: ":left_right_arrow:",
		code_decimal: "&harr;",
		category: "s",
		emoji_order: "2011"
	},
	{
		name: "leftwards_arrow_with_hook",
		unicode: "21a9",
		shortname: ":leftwards_arrow_with_hook:",
		code_decimal: "&#8617;",
		category: "s",
		emoji_order: "2012"
	},
	{
		name: "arrow_right_hook",
		unicode: "21aa",
		shortname: ":arrow_right_hook:",
		code_decimal: "&#8618;",
		category: "s",
		emoji_order: "2013"
	},
	{
		name: "arrow_heading_up",
		unicode: "2934",
		shortname: ":arrow_heading_up:",
		code_decimal: "&#10548;",
		category: "s",
		emoji_order: "2014"
	},
	{
		name: "arrow_heading_down",
		unicode: "2935",
		shortname: ":arrow_heading_down:",
		code_decimal: "&#10549;",
		category: "s",
		emoji_order: "2015"
	},
	{
		name: "arrows_clockwise",
		unicode: "1f503",
		shortname: ":arrows_clockwise:",
		code_decimal: "&#128259;",
		category: "s",
		emoji_order: "2016"
	},
	{
		name: "arrows_counterclockwise",
		unicode: "1f504",
		shortname: ":arrows_counterclockwise:",
		code_decimal: "&#128260;",
		category: "s",
		emoji_order: "2017"
	},
	{
		name: "back",
		unicode: "1f519",
		shortname: ":back:",
		code_decimal: "&#128281;",
		category: "s",
		emoji_order: "2018"
	},
	{
		name: "end",
		unicode: "1f51a",
		shortname: ":end:",
		code_decimal: "&#128282;",
		category: "s",
		emoji_order: "2019"
	},
	{
		name: "on",
		unicode: "1f51b",
		shortname: ":on:",
		code_decimal: "&#128283;",
		category: "s",
		emoji_order: "2020"
	},
	{
		name: "soon",
		unicode: "1f51c",
		shortname: ":soon:",
		code_decimal: "&#128284;",
		category: "s",
		emoji_order: "2021"
	},
	{
		name: "top",
		unicode: "1f51d",
		shortname: ":top:",
		code_decimal: "&#128285;",
		category: "s",
		emoji_order: "2022"
	},
	{
		name: "place_of_worship",
		unicode: "1f6d0",
		shortname: ":place_of_worship:",
		code_decimal: "&#128720;",
		category: "s",
		emoji_order: "2023"
	},
	{
		name: "atom_symbol",
		unicode: "269b",
		shortname: ":atom:",
		code_decimal: "&#9883;",
		category: "s",
		emoji_order: "2024"
	},
	{
		name: "om_symbol",
		unicode: "1f549",
		shortname: ":om_symbol:",
		code_decimal: "&#128329;",
		category: "s",
		emoji_order: "2025"
	},
	{
		name: "star_of_david",
		unicode: "2721",
		shortname: ":star_of_david:",
		code_decimal: "&#10017;",
		category: "s",
		emoji_order: "2026"
	},
	{
		name: "wheel_of_dharma",
		unicode: "2638",
		shortname: ":wheel_of_dharma:",
		code_decimal: "&#9784;",
		category: "s",
		emoji_order: "2027"
	},
	{
		name: "yin_yang",
		unicode: "262f",
		shortname: ":yin_yang:",
		code_decimal: "&#9775;",
		category: "s",
		emoji_order: "2028"
	},
	{
		name: "latin_cross",
		unicode: "271d",
		shortname: ":cross:",
		code_decimal: "&#10013;",
		category: "s",
		emoji_order: "2029"
	},
	{
		name: "orthodox_cross",
		unicode: "2626",
		shortname: ":orthodox_cross:",
		code_decimal: "&#9766;",
		category: "s",
		emoji_order: "2030"
	},
	{
		name: "star_and_crescent",
		unicode: "262a",
		shortname: ":star_and_crescent:",
		code_decimal: "&#9770;",
		category: "s",
		emoji_order: "2031"
	},
	{
		name: "peace_symbol",
		unicode: "262e",
		shortname: ":peace:",
		code_decimal: "&#9774;",
		category: "s",
		emoji_order: "2032"
	},
	{
		name: "menorah_with_nine_branches",
		unicode: "1f54e",
		shortname: ":menorah:",
		code_decimal: "&#128334;",
		category: "s",
		emoji_order: "2033"
	},
	{
		name: "six_pointed_star",
		unicode: "1f52f",
		shortname: ":six_pointed_star:",
		code_decimal: "&#128303;",
		category: "s",
		emoji_order: "2034"
	},
	{
		name: "aries",
		unicode: "2648",
		shortname: ":aries:",
		code_decimal: "&#9800;",
		category: "s",
		emoji_order: "2035"
	},
	{
		name: "taurus",
		unicode: "2649",
		shortname: ":taurus:",
		code_decimal: "&#9801;",
		category: "s",
		emoji_order: "2036"
	},
	{
		name: "gemini",
		unicode: "264a",
		shortname: ":gemini:",
		code_decimal: "&#9802;",
		category: "s",
		emoji_order: "2037"
	},
	{
		name: "cancer",
		unicode: "264b",
		shortname: ":cancer:",
		code_decimal: "&#9803;",
		category: "s",
		emoji_order: "2038"
	},
	{
		name: "leo",
		unicode: "264c",
		shortname: ":leo:",
		code_decimal: "&#9804;",
		category: "s",
		emoji_order: "2039"
	},
	{
		name: "virgo",
		unicode: "264d",
		shortname: ":virgo:",
		code_decimal: "&#9805;",
		category: "s",
		emoji_order: "2040"
	},
	{
		name: "libra",
		unicode: "264e",
		shortname: ":libra:",
		code_decimal: "&#9806;",
		category: "s",
		emoji_order: "2041"
	},
	{
		name: "scorpius",
		unicode: "264f",
		shortname: ":scorpius:",
		code_decimal: "&#9807;",
		category: "s",
		emoji_order: "2042"
	},
	{
		name: "sagittarius",
		unicode: "2650",
		shortname: ":sagittarius:",
		code_decimal: "&#9808;",
		category: "s",
		emoji_order: "2043"
	},
	{
		name: "capricorn",
		unicode: "2651",
		shortname: ":capricorn:",
		code_decimal: "&#9809;",
		category: "s",
		emoji_order: "2044"
	},
	{
		name: "aquarius",
		unicode: "2652",
		shortname: ":aquarius:",
		code_decimal: "&#9810;",
		category: "s",
		emoji_order: "2045"
	},
	{
		name: "pisces",
		unicode: "2653",
		shortname: ":pisces:",
		code_decimal: "&#9811;",
		category: "s",
		emoji_order: "2046"
	},
	{
		name: "ophiuchus",
		unicode: "26ce",
		shortname: ":ophiuchus:",
		code_decimal: "&#9934;",
		category: "s",
		emoji_order: "2047"
	},
	{
		name: "twisted_rightwards_arrows",
		unicode: "1f500",
		shortname: ":twisted_rightwards_arrows:",
		code_decimal: "&#128256;",
		category: "s",
		emoji_order: "2048"
	},
	{
		name: "repeat",
		unicode: "1f501",
		shortname: ":repeat:",
		code_decimal: "&#128257;",
		category: "s",
		emoji_order: "2049"
	},
	{
		name: "repeat_one",
		unicode: "1f502",
		shortname: ":repeat_one:",
		code_decimal: "&#128258;",
		category: "s",
		emoji_order: "2050"
	},
	{
		name: "arrow_forward",
		unicode: "25b6",
		shortname: ":arrow_forward:",
		code_decimal: "&#9654;",
		category: "s",
		emoji_order: "2051"
	},
	{
		name: "fast_forward",
		unicode: "23e9",
		shortname: ":fast_forward:",
		code_decimal: "&#9193;",
		category: "s",
		emoji_order: "2052"
	},
	{
		name: "black_right_pointing_double_triangle_with_vertical_bar",
		unicode: "23ed",
		shortname: ":track_next:",
		code_decimal: "&#9197;",
		category: "s",
		emoji_order: "2053"
	},
	{
		name: "black_right_pointing_triangle_with_double_vertical_bar",
		unicode: "23ef",
		shortname: ":play_pause:",
		code_decimal: "&#9199;",
		category: "s",
		emoji_order: "2054"
	},
	{
		name: "arrow_backward",
		unicode: "25c0",
		shortname: ":arrow_backward:",
		code_decimal: "&#9664;",
		category: "s",
		emoji_order: "2055"
	},
	{
		name: "rewind",
		unicode: "23ea",
		shortname: ":rewind:",
		code_decimal: "&#9194;",
		category: "s",
		emoji_order: "2056"
	},
	{
		name: "black_left_pointing_double_triangle_with_vertical_bar",
		unicode: "23ee",
		shortname: ":track_previous:",
		code_decimal: "&#9198;",
		category: "s",
		emoji_order: "2057"
	},
	{
		name: "arrow_up_small",
		unicode: "1f53c",
		shortname: ":arrow_up_small:",
		code_decimal: "&#128316;",
		category: "s",
		emoji_order: "2058"
	},
	{
		name: "arrow_double_up",
		unicode: "23eb",
		shortname: ":arrow_double_up:",
		code_decimal: "&#9195;",
		category: "s",
		emoji_order: "2059"
	},
	{
		name: "arrow_down_small",
		unicode: "1f53d",
		shortname: ":arrow_down_small:",
		code_decimal: "&#128317;",
		category: "s",
		emoji_order: "2060"
	},
	{
		name: "arrow_double_down",
		unicode: "23ec",
		shortname: ":arrow_double_down:",
		code_decimal: "&#9196;",
		category: "s",
		emoji_order: "2061"
	},
	{
		name: "double_vertical_bar",
		unicode: "23f8",
		shortname: ":pause_button:",
		code_decimal: "&#9208;",
		category: "s",
		emoji_order: "2062"
	},
	{
		name: "black_square_for_stop",
		unicode: "23f9",
		shortname: ":stop_button:",
		code_decimal: "&#9209;",
		category: "s",
		emoji_order: "2063"
	},
	{
		name: "black_circle_for_record",
		unicode: "23fa",
		shortname: ":record_button:",
		code_decimal: "&#9210;",
		category: "s",
		emoji_order: "2064"
	},
	{
		name: "cinema",
		unicode: "1f3a6",
		shortname: ":cinema:",
		code_decimal: "&#127910;",
		category: "s",
		emoji_order: "2066"
	},
	{
		name: "low_brightness",
		unicode: "1f505",
		shortname: ":low_brightness:",
		code_decimal: "&#128261;",
		category: "s",
		emoji_order: "2067"
	},
	{
		name: "high_brightness",
		unicode: "1f506",
		shortname: ":high_brightness:",
		code_decimal: "&#128262;",
		category: "s",
		emoji_order: "2068"
	},
	{
		name: "signal_strength",
		unicode: "1f4f6",
		shortname: ":signal_strength:",
		code_decimal: "&#128246;",
		category: "s",
		emoji_order: "2069"
	},
	{
		name: "vibration_mode",
		unicode: "1f4f3",
		shortname: ":vibration_mode:",
		code_decimal: "&#128243;",
		category: "s",
		emoji_order: "2070"
	},
	{
		name: "mobile_phone_off",
		unicode: "1f4f4",
		shortname: ":mobile_phone_off:",
		code_decimal: "&#128244;",
		category: "s",
		emoji_order: "2071"
	},
	{
		name: "recycle",
		unicode: "267b",
		shortname: ":recycle:",
		code_decimal: "&#9851;",
		category: "s",
		emoji_order: "2072"
	},
	{
		name: "name_badge",
		unicode: "1f4db",
		shortname: ":name_badge:",
		code_decimal: "&#128219;",
		category: "s",
		emoji_order: "2073"
	},
	{
		name: "fleur_de_lis",
		unicode: "269c",
		shortname: ":fleur-de-lis:",
		code_decimal: "&#9884;",
		category: "s",
		emoji_order: "2074"
	},
	{
		name: "beginner",
		unicode: "1f530",
		shortname: ":beginner:",
		code_decimal: "&#128304;",
		category: "s",
		emoji_order: "2075"
	},
	{
		name: "trident",
		unicode: "1f531",
		shortname: ":trident:",
		code_decimal: "&#128305;",
		category: "s",
		emoji_order: "2076"
	},
	{
		name: "o",
		unicode: "2b55",
		shortname: ":o:",
		code_decimal: "&#11093;",
		category: "s",
		emoji_order: "2077"
	},
	{
		name: "white_check_mark",
		unicode: "2705",
		shortname: ":white_check_mark:",
		code_decimal: "&#9989;",
		category: "s",
		emoji_order: "2078"
	},
	{
		name: "ballot_box_with_check",
		unicode: "2611",
		shortname: ":ballot_box_with_check:",
		code_decimal: "&#9745;",
		category: "s",
		emoji_order: "2079"
	},
	{
		name: "heavy_check_mark",
		unicode: "2714",
		shortname: ":heavy_check_mark:",
		code_decimal: "&#10004;",
		category: "s",
		emoji_order: "2080"
	},
	{
		name: "heavy_multiplication_x",
		unicode: "2716",
		shortname: ":heavy_multiplication_x:",
		code_decimal: "&#10006;",
		category: "s",
		emoji_order: "2081"
	},
	{
		name: "x",
		unicode: "274c",
		shortname: ":x:",
		code_decimal: "&#10060;",
		category: "s",
		emoji_order: "2082"
	},
	{
		name: "negative_squared_cross_mark",
		unicode: "274e",
		shortname: ":negative_squared_cross_mark:",
		code_decimal: "&#10062;",
		category: "s",
		emoji_order: "2083"
	},
	{
		name: "heavy_plus_sign",
		unicode: "2795",
		shortname: ":heavy_plus_sign:",
		code_decimal: "&#10133;",
		category: "s",
		emoji_order: "2084"
	},
	{
		name: "heavy_minus_sign",
		unicode: "2796",
		shortname: ":heavy_minus_sign:",
		code_decimal: "&#10134;",
		category: "s",
		emoji_order: "2088"
	},
	{
		name: "heavy_division_sign",
		unicode: "2797",
		shortname: ":heavy_division_sign:",
		code_decimal: "&#10135;",
		category: "s",
		emoji_order: "2089"
	},
	{
		name: "curly_loop",
		unicode: "27b0",
		shortname: ":curly_loop:",
		code_decimal: "&#10160;",
		category: "s",
		emoji_order: "2090"
	},
	{
		name: "loop",
		unicode: "27bf",
		shortname: ":loop:",
		code_decimal: "&#10175;",
		category: "s",
		emoji_order: "2091"
	},
	{
		name: "part_alternation_mark",
		unicode: "303d",
		shortname: ":part_alternation_mark:",
		code_decimal: "&#12349;",
		category: "s",
		emoji_order: "2092"
	},
	{
		name: "eight_spoked_asterisk",
		unicode: "2733",
		shortname: ":eight_spoked_asterisk:",
		code_decimal: "&#10035;",
		category: "s",
		emoji_order: "2093"
	},
	{
		name: "eight_pointed_black_star",
		unicode: "2734",
		shortname: ":eight_pointed_black_star:",
		code_decimal: "&#10036;",
		category: "s",
		emoji_order: "2094"
	},
	{
		name: "sparkle",
		unicode: "2747",
		shortname: ":sparkle:",
		code_decimal: "&#10055;",
		category: "s",
		emoji_order: "2095"
	},
	{
		name: "bangbang",
		unicode: "203c",
		shortname: ":bangbang:",
		code_decimal: "&#8252;",
		category: "s",
		emoji_order: "2096"
	},
	{
		name: "interrobang",
		unicode: "2049",
		shortname: ":interrobang:",
		code_decimal: "&#8265;",
		category: "s",
		emoji_order: "2097"
	},
	{
		name: "question",
		unicode: "2753",
		shortname: ":question:",
		code_decimal: "&#10067;",
		category: "s",
		emoji_order: "2098"
	},
	{
		name: "grey_question",
		unicode: "2754",
		shortname: ":grey_question:",
		code_decimal: "&#10068;",
		category: "s",
		emoji_order: "2099"
	},
	{
		name: "grey_exclamation",
		unicode: "2755",
		shortname: ":grey_exclamation:",
		code_decimal: "&#10069;",
		category: "s",
		emoji_order: "2100"
	},
	{
		name: "exclamation",
		unicode: "2757",
		shortname: ":exclamation:",
		code_decimal: "&#10071;",
		category: "s",
		emoji_order: "2101"
	},
	{
		name: "wavy_dash",
		unicode: "3030",
		shortname: ":wavy_dash:",
		code_decimal: "&#12336;",
		category: "s",
		emoji_order: "2102"
	},
	{
		name: "copyright",
		unicode: "00a9",
		shortname: ":copyright:",
		code_decimal: "&copy;",
		category: "s",
		emoji_order: "2103"
	},
	{
		name: "registered",
		unicode: "00ae",
		shortname: ":registered:",
		code_decimal: "&reg;",
		category: "s",
		emoji_order: "2104"
	},
	{
		name: "tm",
		unicode: "2122",
		shortname: ":tm:",
		code_decimal: "&trade;",
		category: "s",
		emoji_order: "2105"
	},
	{
		name: "hash",
		unicode: "0023-20e3",
		shortname: ":hash:",
		code_decimal: "#&#8419;",
		category: "s",
		emoji_order: "2106"
	},
	{
		name: "keycap_star",
		unicode: "002a-20e3",
		shortname: ":asterisk:",
		code_decimal: "*&#8419;",
		category: "s",
		emoji_order: "2107"
	},
	{
		name: "zero",
		unicode: "0030-20e3",
		shortname: ":zero:",
		code_decimal: "0&#8419;",
		category: "s",
		emoji_order: "2108"
	},
	{
		name: "one",
		unicode: "0031-20e3",
		shortname: ":one:",
		code_decimal: "1&#8419;",
		category: "s",
		emoji_order: "2109"
	},
	{
		name: "two",
		unicode: "0032-20e3",
		shortname: ":two:",
		code_decimal: "2&#8419;",
		category: "s",
		emoji_order: "2110"
	},
	{
		name: "three",
		unicode: "0033-20e3",
		shortname: ":three:",
		code_decimal: "3&#8419;",
		category: "s",
		emoji_order: "2111"
	},
	{
		name: "four",
		unicode: "0034-20e3",
		shortname: ":four:",
		code_decimal: "4&#8419;",
		category: "s",
		emoji_order: "2112"
	},
	{
		name: "five",
		unicode: "0035-20e3",
		shortname: ":five:",
		code_decimal: "5&#8419;",
		category: "s",
		emoji_order: "2113"
	},
	{
		name: "six",
		unicode: "0036-20e3",
		shortname: ":six:",
		code_decimal: "6&#8419;",
		category: "s",
		emoji_order: "2114"
	},
	{
		name: "seven",
		unicode: "0037-20e3",
		shortname: ":seven:",
		code_decimal: "7&#8419;",
		category: "s",
		emoji_order: "2115"
	},
	{
		name: "eight",
		unicode: "0038-20e3",
		shortname: ":eight:",
		code_decimal: "8&#8419;",
		category: "s",
		emoji_order: "2116"
	},
	{
		name: "nine",
		unicode: "0039-20e3",
		shortname: ":nine:",
		code_decimal: "9&#8419;",
		category: "s",
		emoji_order: "2117"
	},
	{
		name: "keycap_ten",
		unicode: "1f51f",
		shortname: ":keycap_ten:",
		code_decimal: "&#128287;",
		category: "s",
		emoji_order: "2118"
	},
	{
		name: "capital_abcd",
		unicode: "1f520",
		shortname: ":capital_abcd:",
		code_decimal: "&#128288;",
		category: "s",
		emoji_order: "2120"
	},
	{
		name: "abcd",
		unicode: "1f521",
		shortname: ":abcd:",
		code_decimal: "&#128289;",
		category: "s",
		emoji_order: "2121"
	},
	{
		name: "s",
		unicode: "1f523",
		shortname: ":s:",
		code_decimal: "&#128291;",
		category: "s",
		emoji_order: "2123"
	},
	{
		name: "abc",
		unicode: "1f524",
		shortname: ":abc:",
		code_decimal: "&#128292;",
		category: "s",
		emoji_order: "2124"
	},
	{
		name: "a",
		unicode: "1f170",
		shortname: ":a:",
		code_decimal: "&#127344;",
		category: "s",
		emoji_order: "2125"
	},
	{
		name: "ab",
		unicode: "1f18e",
		shortname: ":ab:",
		code_decimal: "&#127374;",
		category: "s",
		emoji_order: "2126"
	},
	{
		name: "b",
		unicode: "1f171",
		shortname: ":b:",
		code_decimal: "&#127345;",
		category: "s",
		emoji_order: "2127"
	},
	{
		name: "cl",
		unicode: "1f191",
		shortname: ":cl:",
		code_decimal: "&#127377;",
		category: "s",
		emoji_order: "2128"
	},
	{
		name: "cool",
		unicode: "1f192",
		shortname: ":cool:",
		code_decimal: "&#127378;",
		category: "s",
		emoji_order: "2129"
	},
	{
		name: "free",
		unicode: "1f193",
		shortname: ":free:",
		code_decimal: "&#127379;",
		category: "s",
		emoji_order: "2130"
	},
	{
		name: "information_source",
		unicode: "2139",
		shortname: ":information_source:",
		code_decimal: "&#8505;",
		category: "s",
		emoji_order: "2131"
	},
	{
		name: "id",
		unicode: "1f194",
		shortname: ":id:",
		code_decimal: "&#127380;",
		category: "s",
		emoji_order: "2132"
	},
	{
		name: "m",
		unicode: "24c2",
		shortname: ":m:",
		code_decimal: "&#9410;",
		category: "s",
		emoji_order: "2133"
	},
	{
		name: "new",
		unicode: "1f195",
		shortname: ":new:",
		code_decimal: "&#127381;",
		category: "s",
		emoji_order: "2134"
	},
	{
		name: "ng",
		unicode: "1f196",
		shortname: ":ng:",
		code_decimal: "&#127382;",
		category: "s",
		emoji_order: "2135"
	},
	{
		name: "o2",
		unicode: "1f17e",
		shortname: ":o2:",
		code_decimal: "&#127358;",
		category: "s",
		emoji_order: "2136"
	},
	{
		name: "ok",
		unicode: "1f197",
		shortname: ":ok:",
		code_decimal: "&#127383;",
		category: "s",
		emoji_order: "2137"
	},
	{
		name: "parking",
		unicode: "1f17f",
		shortname: ":parking:",
		code_decimal: "&#127359;",
		category: "s",
		emoji_order: "2138"
	},
	{
		name: "sos",
		unicode: "1f198",
		shortname: ":sos:",
		code_decimal: "&#127384;",
		category: "s",
		emoji_order: "2139"
	},
	{
		name: "up",
		unicode: "1f199",
		shortname: ":up:",
		code_decimal: "&#127385;",
		category: "s",
		emoji_order: "2140"
	},
	{
		name: "vs",
		unicode: "1f19a",
		shortname: ":vs:",
		code_decimal: "&#127386;",
		category: "s",
		emoji_order: "2141"
	},
	{
		name: "koko",
		unicode: "1f201",
		shortname: ":koko:",
		code_decimal: "&#127489;",
		category: "s",
		emoji_order: "2142"
	},
	{
		name: "sa",
		unicode: "1f202",
		shortname: ":sa:",
		code_decimal: "&#127490;",
		category: "s",
		emoji_order: "2143"
	},
	{
		name: "u6708",
		unicode: "1f237",
		shortname: ":u6708:",
		code_decimal: "&#127543;",
		category: "s",
		emoji_order: "2144"
	},
	{
		name: "u6709",
		unicode: "1f236",
		shortname: ":u6709:",
		code_decimal: "&#127542;",
		category: "s",
		emoji_order: "2145"
	},
	{
		name: "u6307",
		unicode: "1f22f",
		shortname: ":u6307:",
		code_decimal: "&#127535;",
		category: "s",
		emoji_order: "2146"
	},
	{
		name: "ideograph_advantage",
		unicode: "1f250",
		shortname: ":ideograph_advantage:",
		code_decimal: "&#127568;",
		category: "s",
		emoji_order: "2147"
	},
	{
		name: "u5272",
		unicode: "1f239",
		shortname: ":u5272:",
		code_decimal: "&#127545;",
		category: "s",
		emoji_order: "2148"
	},
	{
		name: "u7121",
		unicode: "1f21a",
		shortname: ":u7121:",
		code_decimal: "&#127514;",
		category: "s",
		emoji_order: "2149"
	},
	{
		name: "u7981",
		unicode: "1f232",
		shortname: ":u7981:",
		code_decimal: "&#127538;",
		category: "s",
		emoji_order: "2150"
	},
	{
		name: "accept",
		unicode: "1f251",
		shortname: ":accept:",
		code_decimal: "&#127569;",
		category: "s",
		emoji_order: "2151"
	},
	{
		name: "u7533",
		unicode: "1f238",
		shortname: ":u7533:",
		code_decimal: "&#127544;",
		category: "s",
		emoji_order: "2152"
	},
	{
		name: "u5408",
		unicode: "1f234",
		shortname: ":u5408:",
		code_decimal: "&#127540;",
		category: "s",
		emoji_order: "2153"
	},
	{
		name: "u7a7a",
		unicode: "1f233",
		shortname: ":u7a7a:",
		code_decimal: "&#127539;",
		category: "s",
		emoji_order: "2154"
	},
	{
		name: "congratulations",
		unicode: "3297",
		shortname: ":congratulations:",
		code_decimal: "&#12951;",
		category: "s",
		emoji_order: "2155"
	},
	{
		name: "secret",
		unicode: "3299",
		shortname: ":secret:",
		code_decimal: "&#12953;",
		category: "s",
		emoji_order: "2156"
	},
	{
		name: "u55b6",
		unicode: "1f23a",
		shortname: ":u55b6:",
		code_decimal: "&#127546;",
		category: "s",
		emoji_order: "2157"
	},
	{
		name: "u6e80",
		unicode: "1f235",
		shortname: ":u6e80:",
		code_decimal: "&#127541;",
		category: "s",
		emoji_order: "2158"
	},
	{
		name: "black_small_square",
		unicode: "25aa",
		shortname: ":black_small_square:",
		code_decimal: "&#9642;",
		category: "s",
		emoji_order: "2159"
	},
	{
		name: "white_small_square",
		unicode: "25ab",
		shortname: ":white_small_square:",
		code_decimal: "&#9643;",
		category: "s",
		emoji_order: "2160"
	},
	{
		name: "white_medium_square",
		unicode: "25fb",
		shortname: ":white_medium_square:",
		code_decimal: "&#9723;",
		category: "s",
		emoji_order: "2161"
	},
	{
		name: "black_medium_square",
		unicode: "25fc",
		shortname: ":black_medium_square:",
		code_decimal: "&#9724;",
		category: "s",
		emoji_order: "2162"
	},
	{
		name: "white_medium_small_square",
		unicode: "25fd",
		shortname: ":white_medium_small_square:",
		code_decimal: "&#9725;",
		category: "s",
		emoji_order: "2163"
	},
	{
		name: "black_medium_small_square",
		unicode: "25fe",
		shortname: ":black_medium_small_square:",
		code_decimal: "&#9726;",
		category: "s",
		emoji_order: "2164"
	},
	{
		name: "black_large_square",
		unicode: "2b1b",
		shortname: ":black_large_square:",
		code_decimal: "&#11035;",
		category: "s",
		emoji_order: "2165"
	},
	{
		name: "white_large_square",
		unicode: "2b1c",
		shortname: ":white_large_square:",
		code_decimal: "&#11036;",
		category: "s",
		emoji_order: "2166"
	},
	{
		name: "large_orange_diamond",
		unicode: "1f536",
		shortname: ":large_orange_diamond:",
		code_decimal: "&#128310;",
		category: "s",
		emoji_order: "2167"
	},
	{
		name: "large_blue_diamond",
		unicode: "1f537",
		shortname: ":large_blue_diamond:",
		code_decimal: "&#128311;",
		category: "s",
		emoji_order: "2168"
	},
	{
		name: "small_orange_diamond",
		unicode: "1f538",
		shortname: ":small_orange_diamond:",
		code_decimal: "&#128312;",
		category: "s",
		emoji_order: "2169"
	},
	{
		name: "small_blue_diamond",
		unicode: "1f539",
		shortname: ":small_blue_diamond:",
		code_decimal: "&#128313;",
		category: "s",
		emoji_order: "2170"
	},
	{
		name: "small_red_triangle",
		unicode: "1f53a",
		shortname: ":small_red_triangle:",
		code_decimal: "&#128314;",
		category: "s",
		emoji_order: "2171"
	},
	{
		name: "small_red_triangle_down",
		unicode: "1f53b",
		shortname: ":small_red_triangle_down:",
		code_decimal: "&#128315;",
		category: "s",
		emoji_order: "2172"
	},
	{
		name: "diamond_shape_with_a_dot_inside",
		unicode: "1f4a0",
		shortname: ":diamond_shape_with_a_dot_inside:",
		code_decimal: "&#128160;",
		category: "s",
		emoji_order: "2173"
	},
	{
		name: "radio_button",
		unicode: "1f518",
		shortname: ":radio_button:",
		code_decimal: "&#128280;",
		category: "s",
		emoji_order: "2174"
	},
	{
		name: "black_square_button",
		unicode: "1f532",
		shortname: ":black_square_button:",
		code_decimal: "&#128306;",
		category: "s",
		emoji_order: "2175"
	},
	{
		name: "white_square_button",
		unicode: "1f533",
		shortname: ":white_square_button:",
		code_decimal: "&#128307;",
		category: "s",
		emoji_order: "2176"
	},
	{
		name: "white_circle",
		unicode: "26aa",
		shortname: ":white_circle:",
		code_decimal: "&#9898;",
		category: "s",
		emoji_order: "2177"
	},
	{
		name: "black_circle",
		unicode: "26ab",
		shortname: ":black_circle:",
		code_decimal: "&#9899;",
		category: "s",
		emoji_order: "2178"
	},
	{
		name: "red_circle",
		unicode: "1f534",
		shortname: ":red_circle:",
		code_decimal: "&#128308;",
		category: "s",
		emoji_order: "2179"
	},
	{
		name: "large_blue_circle",
		unicode: "1f535",
		shortname: ":blue_circle:",
		code_decimal: "&#128309;",
		category: "s",
		emoji_order: "2180"
	},
	{
		name: "checkered_flag",
		unicode: "1f3c1",
		shortname: ":checkered_flag:",
		code_decimal: "&#127937;",
		category: "t",
		emoji_order: "2181"
	},
	{
		name: "triangular_flag_on_post",
		unicode: "1f6a9",
		shortname: ":triangular_flag_on_post:",
		code_decimal: "&#128681;",
		category: "o",
		emoji_order: "2182"
	},
	{
		name: "crossed_flags",
		unicode: "1f38c",
		shortname: ":crossed_flags:",
		code_decimal: "&#127884;",
		category: "o",
		emoji_order: "2183"
	},
	{
		name: "waving_black_flag",
		unicode: "1f3f4",
		shortname: ":flag_black:",
		code_decimal: "&#127988;",
		category: "o",
		emoji_order: "2184"
	},
	{
		name: "waving_white_flag",
		unicode: "1f3f3",
		shortname: ":flag_white:",
		code_decimal: "&#127987;",
		category: "o",
		emoji_order: "2185"
	},
	{
		name: "flag-ac",
		unicode: "1f1e6-1f1e8",
		shortname: ":flag_ac:",
		code_decimal: "&#127462;&#127464;",
		category: "f",
		emoji_order: "2187"
	},
	{
		name: "flag-ad",
		unicode: "1f1e6-1f1e9",
		shortname: ":flag_ad:",
		code_decimal: "&#127462;&#127465;",
		category: "f",
		emoji_order: "2188"
	},
	{
		name: "flag-ae",
		unicode: "1f1e6-1f1ea",
		shortname: ":flag_ae:",
		code_decimal: "&#127462;&#127466;",
		category: "f",
		emoji_order: "2189"
	},
	{
		name: "flag-af",
		unicode: "1f1e6-1f1eb",
		shortname: ":flag_af:",
		code_decimal: "&#127462;&#127467;",
		category: "f",
		emoji_order: "2190"
	},
	{
		name: "flag-ag",
		unicode: "1f1e6-1f1ec",
		shortname: ":flag_ag:",
		code_decimal: "&#127462;&#127468;",
		category: "f",
		emoji_order: "2191"
	},
	{
		name: "flag-ai",
		unicode: "1f1e6-1f1ee",
		shortname: ":flag_ai:",
		code_decimal: "&#127462;&#127470;",
		category: "f",
		emoji_order: "2192"
	},
	{
		name: "flag-al",
		unicode: "1f1e6-1f1f1",
		shortname: ":flag_al:",
		code_decimal: "&#127462;&#127473;",
		category: "f",
		emoji_order: "2193"
	},
	{
		name: "flag-am",
		unicode: "1f1e6-1f1f2",
		shortname: ":flag_am:",
		code_decimal: "&#127462;&#127474;",
		category: "f",
		emoji_order: "2194"
	},
	{
		name: "flag-ao",
		unicode: "1f1e6-1f1f4",
		shortname: ":flag-ao:",
		code_decimal: "&#127462;&#127476;",
		category: "f",
		emoji_order: "2195"
	},
	{
		name: "flag-aq",
		unicode: "1f1e6-1f1f6",
		shortname: ":flag-aq:",
		code_decimal: "&#127462;&#127478;",
		category: "f",
		emoji_order: "2196"
	},
	{
		name: "flag-ar",
		unicode: "1f1e6-1f1f7",
		shortname: ":flag-ar:",
		code_decimal: "&#127462;&#127479;",
		category: "f",
		emoji_order: "2197"
	},
	{
		name: "flag-as",
		unicode: "1f1e6-1f1f8",
		shortname: ":flag-as:",
		code_decimal: "&#127462;&#127480;",
		category: "f",
		emoji_order: "2198"
	},
	{
		name: "flag-at",
		unicode: "1f1e6-1f1f9",
		shortname: ":flag-at:",
		code_decimal: "&#127462;&#127481;",
		category: "f",
		emoji_order: "2199"
	},
	{
		name: "flag-au",
		unicode: "1f1e6-1f1fa",
		shortname: ":flag-au:",
		code_decimal: "&#127462;&#127482;",
		category: "f",
		emoji_order: "2200"
	},
	{
		name: "flag-aw",
		unicode: "1f1e6-1f1fc",
		shortname: ":flag-aw:",
		code_decimal: "&#127462;&#127484;",
		category: "f",
		emoji_order: "2201"
	},
	{
		name: "flag-ax",
		unicode: "1f1e6-1f1fd",
		shortname: ":flag-ax:",
		code_decimal: "&#127462;&#127485;",
		category: "f",
		emoji_order: "2202"
	},
	{
		name: "flag-az",
		unicode: "1f1e6-1f1ff",
		shortname: ":flag-az:",
		code_decimal: "&#127462;&#127487;",
		category: "f",
		emoji_order: "2203"
	},
	{
		name: "flag-ba",
		unicode: "1f1e7-1f1e6",
		shortname: ":flag-ba:",
		code_decimal: "&#127463;&#127462;",
		category: "f",
		emoji_order: "2204"
	},
	{
		name: "flag-bb",
		unicode: "1f1e7-1f1e7",
		shortname: ":flag-bb:",
		code_decimal: "&#127463;&#127463;",
		category: "f",
		emoji_order: "2205"
	},
	{
		name: "flag-bd",
		unicode: "1f1e7-1f1e9",
		shortname: ":flag-bd:",
		code_decimal: "&#127463;&#127465;",
		category: "f",
		emoji_order: "2206"
	},
	{
		name: "flag-be",
		unicode: "1f1e7-1f1ea",
		shortname: ":flag-be:",
		code_decimal: "&#127463;&#127466;",
		category: "f",
		emoji_order: "2207"
	},
	{
		name: "flag-bf",
		unicode: "1f1e7-1f1eb",
		shortname: ":flag-bf:",
		code_decimal: "&#127463;&#127467;",
		category: "f",
		emoji_order: "2208"
	},
	{
		name: "flag-bg",
		unicode: "1f1e7-1f1ec",
		shortname: ":flag-bg:",
		code_decimal: "&#127463;&#127468;",
		category: "f",
		emoji_order: "2209"
	},
	{
		name: "flag-bh",
		unicode: "1f1e7-1f1ed",
		shortname: ":flag-bh:",
		code_decimal: "&#127463;&#127469;",
		category: "f",
		emoji_order: "2210"
	},
	{
		name: "flag-bi",
		unicode: "1f1e7-1f1ee",
		shortname: ":flag-bi:",
		code_decimal: "&#127463;&#127470;",
		category: "f",
		emoji_order: "2211"
	},
	{
		name: "flag-bj",
		unicode: "1f1e7-1f1ef",
		shortname: ":flag-bj:",
		code_decimal: "&#127463;&#127471;",
		category: "f",
		emoji_order: "2212"
	},
	{
		name: "flag-bl",
		unicode: "1f1e7-1f1f1",
		shortname: ":flag-bl:",
		code_decimal: "&#127463;&#127473;",
		category: "f",
		emoji_order: "2213"
	},
	{
		name: "flag-bm",
		unicode: "1f1e7-1f1f2",
		shortname: ":flag-bm:",
		code_decimal: "&#127463;&#127474;",
		category: "f",
		emoji_order: "2214"
	},
	{
		name: "flag-bn",
		unicode: "1f1e7-1f1f3",
		shortname: ":flag-bn:",
		code_decimal: "&#127463;&#127475;",
		category: "f",
		emoji_order: "2215"
	},
	{
		name: "flag-bo",
		unicode: "1f1e7-1f1f4",
		shortname: ":flag-bo:",
		code_decimal: "&#127463;&#127476;",
		category: "f",
		emoji_order: "2216"
	},
	{
		name: "flag-bq",
		unicode: "1f1e7-1f1f6",
		shortname: ":flag-bq:",
		code_decimal: "&#127463;&#127478;",
		category: "f",
		emoji_order: "2217"
	},
	{
		name: "flag-br",
		unicode: "1f1e7-1f1f7",
		shortname: ":flag-br:",
		code_decimal: "&#127463;&#127479;",
		category: "f",
		emoji_order: "2218"
	},
	{
		name: "flag-bs",
		unicode: "1f1e7-1f1f8",
		shortname: ":flag-bs:",
		code_decimal: "&#127463;&#127480;",
		category: "f",
		emoji_order: "2219"
	},
	{
		name: "flag-bt",
		unicode: "1f1e7-1f1f9",
		shortname: ":flag-bt:",
		code_decimal: "&#127463;&#127481;",
		category: "f",
		emoji_order: "2220"
	},
	{
		name: "flag-bv",
		unicode: "1f1e7-1f1fb",
		shortname: ":flag-bv:",
		code_decimal: "&#127463;&#127483;",
		category: "f",
		emoji_order: "2221"
	},
	{
		name: "flag-bw",
		unicode: "1f1e7-1f1fc",
		shortname: ":flag-bw:",
		code_decimal: "&#127463;&#127484;",
		category: "f",
		emoji_order: "2222"
	},
	{
		name: "flag-by",
		unicode: "1f1e7-1f1fe",
		shortname: ":flag-by:",
		code_decimal: "&#127463;&#127486;",
		category: "f",
		emoji_order: "2223"
	},
	{
		name: "flag-bz",
		unicode: "1f1e7-1f1ff",
		shortname: ":flag-bz:",
		code_decimal: "&#127463;&#127487;",
		category: "f",
		emoji_order: "2224"
	},
	{
		name: "flag-ca",
		unicode: "1f1e8-1f1e6",
		shortname: ":flag-ca:",
		code_decimal: "&#127464;&#127462;",
		category: "f",
		emoji_order: "2225"
	},
	{
		name: "flag-cc",
		unicode: "1f1e8-1f1e8",
		shortname: ":flag-cc:",
		code_decimal: "&#127464;&#127464;",
		category: "f",
		emoji_order: "2226"
	},
	{
		name: "flag-cd",
		unicode: "1f1e8-1f1e9",
		shortname: ":flag-cd:",
		code_decimal: "&#127464;&#127465;",
		category: "f",
		emoji_order: "2227"
	},
	{
		name: "flag-cf",
		unicode: "1f1e8-1f1eb",
		shortname: ":flag-cf:",
		code_decimal: "&#127464;&#127467;",
		category: "f",
		emoji_order: "2228"
	},
	{
		name: "flag-cg",
		unicode: "1f1e8-1f1ec",
		shortname: ":flag-cg:",
		code_decimal: "&#127464;&#127468;",
		category: "f",
		emoji_order: "2229"
	},
	{
		name: "flag-ch",
		unicode: "1f1e8-1f1ed",
		shortname: ":flag-ch:",
		code_decimal: "&#127464;&#127469;",
		category: "f",
		emoji_order: "2230"
	},
	{
		name: "flag-ci",
		unicode: "1f1e8-1f1ee",
		shortname: ":flag-ci:",
		code_decimal: "&#127464;&#127470;",
		category: "f",
		emoji_order: "2231"
	},
	{
		name: "flag-ck",
		unicode: "1f1e8-1f1f0",
		shortname: ":flag-ck:",
		code_decimal: "&#127464;&#127472;",
		category: "f",
		emoji_order: "2232"
	},
	{
		name: "flag-cl",
		unicode: "1f1e8-1f1f1",
		shortname: ":flag-cl:",
		code_decimal: "&#127464;&#127473;",
		category: "f",
		emoji_order: "2233"
	},
	{
		name: "flag-cm",
		unicode: "1f1e8-1f1f2",
		shortname: ":flag-cm:",
		code_decimal: "&#127464;&#127474;",
		category: "f",
		emoji_order: "2234"
	},
	{
		name: "flag-cn",
		unicode: "1f1e8-1f1f3",
		shortname: ":flag-cn:",
		code_decimal: "&#127464;&#127475;",
		category: "f",
		emoji_order: "2235"
	},
	{
		name: "flag-co",
		unicode: "1f1e8-1f1f4",
		shortname: ":flag-co:",
		code_decimal: "&#127464;&#127476;",
		category: "f",
		emoji_order: "2236"
	},
	{
		name: "flag-cp",
		unicode: "1f1e8-1f1f5",
		shortname: ":flag-cp:",
		code_decimal: "&#127464;&#127477;",
		category: "f",
		emoji_order: "2237"
	},
	{
		name: "flag-cr",
		unicode: "1f1e8-1f1f7",
		shortname: ":flag-cr:",
		code_decimal: "&#127464;&#127479;",
		category: "f",
		emoji_order: "2238"
	},
	{
		name: "flag-cu",
		unicode: "1f1e8-1f1fa",
		shortname: ":flag-cu:",
		code_decimal: "&#127464;&#127482;",
		category: "f",
		emoji_order: "2239"
	},
	{
		name: "flag-cv",
		unicode: "1f1e8-1f1fb",
		shortname: ":flag-cv:",
		code_decimal: "&#127464;&#127483;",
		category: "f",
		emoji_order: "2240"
	},
	{
		name: "flag-cw",
		unicode: "1f1e8-1f1fc",
		shortname: ":flag-cw:",
		code_decimal: "&#127464;&#127484;",
		category: "f",
		emoji_order: "2241"
	},
	{
		name: "flag-cx",
		unicode: "1f1e8-1f1fd",
		shortname: ":flag-cx:",
		code_decimal: "&#127464;&#127485;",
		category: "f",
		emoji_order: "2242"
	},
	{
		name: "flag-cy",
		unicode: "1f1e8-1f1fe",
		shortname: ":flag-cy:",
		code_decimal: "&#127464;&#127486;",
		category: "f",
		emoji_order: "2243"
	},
	{
		name: "flag-cz",
		unicode: "1f1e8-1f1ff",
		shortname: ":flag-cz:",
		code_decimal: "&#127464;&#127487;",
		category: "f",
		emoji_order: "2244"
	},
	{
		name: "flag-de",
		unicode: "1f1e9-1f1ea",
		shortname: ":flag-de:",
		code_decimal: "&#127465;&#127466;",
		category: "f",
		emoji_order: "2245"
	},
	{
		name: "flag-dg",
		unicode: "1f1e9-1f1ec",
		shortname: ":flag-dg:",
		code_decimal: "&#127465;&#127468;",
		category: "f",
		emoji_order: "2246"
	},
	{
		name: "flag-dj",
		unicode: "1f1e9-1f1ef",
		shortname: ":flag-dj:",
		code_decimal: "&#127465;&#127471;",
		category: "f",
		emoji_order: "2247"
	},
	{
		name: "flag-dk",
		unicode: "1f1e9-1f1f0",
		shortname: ":flag-dk:",
		code_decimal: "&#127465;&#127472;",
		category: "f",
		emoji_order: "2248"
	},
	{
		name: "flag-dm",
		unicode: "1f1e9-1f1f2",
		shortname: ":flag-dm:",
		code_decimal: "&#127465;&#127474;",
		category: "f",
		emoji_order: "2249"
	},
	{
		name: "flag-do",
		unicode: "1f1e9-1f1f4",
		shortname: ":flag-do:",
		code_decimal: "&#127465;&#127476;",
		category: "f",
		emoji_order: "2250"
	},
	{
		name: "flag-dz",
		unicode: "1f1e9-1f1ff",
		shortname: ":flag-dz:",
		code_decimal: "&#127465;&#127487;",
		category: "f",
		emoji_order: "2251"
	},
	{
		name: "flag-ea",
		unicode: "1f1ea-1f1e6",
		shortname: ":flag-ea:",
		code_decimal: "&#127466;&#127462;",
		category: "f",
		emoji_order: "2252"
	},
	{
		name: "flag-ec",
		unicode: "1f1ea-1f1e8",
		shortname: ":flag-ec:",
		code_decimal: "&#127466;&#127464;",
		category: "f",
		emoji_order: "2253"
	},
	{
		name: "flag-ee",
		unicode: "1f1ea-1f1ea",
		shortname: ":flag-ee:",
		code_decimal: "&#127466;&#127466;",
		category: "f",
		emoji_order: "2254"
	},
	{
		name: "flag-eg",
		unicode: "1f1ea-1f1ec",
		shortname: ":flag-eg:",
		code_decimal: "&#127466;&#127468;",
		category: "f",
		emoji_order: "2255"
	},
	{
		name: "flag-eh",
		unicode: "1f1ea-1f1ed",
		shortname: ":flag-eh:",
		code_decimal: "&#127466;&#127469;",
		category: "f",
		emoji_order: "2256"
	},
	{
		name: "flag-er",
		unicode: "1f1ea-1f1f7",
		shortname: ":flag-er:",
		code_decimal: "&#127466;&#127479;",
		category: "f",
		emoji_order: "2257"
	},
	{
		name: "flag-es",
		unicode: "1f1ea-1f1f8",
		shortname: ":flag-es:",
		code_decimal: "&#127466;&#127480;",
		category: "f",
		emoji_order: "2258"
	},
	{
		name: "flag-et",
		unicode: "1f1ea-1f1f9",
		shortname: ":flag-et:",
		code_decimal: "&#127466;&#127481;",
		category: "f",
		emoji_order: "2259"
	},
	{
		name: "flag-eu",
		unicode: "1f1ea-1f1fa",
		shortname: ":flag-eu:",
		code_decimal: "&#127466;&#127482;",
		category: "f",
		emoji_order: "2260"
	},
	{
		name: "flag-fi",
		unicode: "1f1eb-1f1ee",
		shortname: ":flag-fi:",
		code_decimal: "&#127467;&#127470;",
		category: "f",
		emoji_order: "2261"
	},
	{
		name: "flag-fj",
		unicode: "1f1eb-1f1ef",
		shortname: ":flag-fj:",
		code_decimal: "&#127467;&#127471;",
		category: "f",
		emoji_order: "2262"
	},
	{
		name: "flag-fk",
		unicode: "1f1eb-1f1f0",
		shortname: ":flag-fk:",
		code_decimal: "&#127467;&#127472;",
		category: "f",
		emoji_order: "2263"
	},
	{
		name: "flag-fm",
		unicode: "1f1eb-1f1f2",
		shortname: ":flag-fm:",
		code_decimal: "&#127467;&#127474;",
		category: "f",
		emoji_order: "2264"
	},
	{
		name: "flag-fo",
		unicode: "1f1eb-1f1f4",
		shortname: ":flag-fo:",
		code_decimal: "&#127467;&#127476;",
		category: "f",
		emoji_order: "2265"
	},
	{
		name: "flag-fr",
		unicode: "1f1eb-1f1f7",
		shortname: ":flag-fr:",
		code_decimal: "&#127467;&#127479;",
		category: "f",
		emoji_order: "2266"
	},
	{
		name: "flag-ga",
		unicode: "1f1ec-1f1e6",
		shortname: ":flag-ga:",
		code_decimal: "&#127468;&#127462;",
		category: "f",
		emoji_order: "2267"
	},
	{
		name: "flag-gb",
		unicode: "1f1ec-1f1e7",
		shortname: ":flag-gb:",
		code_decimal: "&#127468;&#127463;",
		category: "f",
		emoji_order: "2268"
	},
	{
		name: "flag-gd",
		unicode: "1f1ec-1f1e9",
		shortname: ":flag-gd:",
		code_decimal: "&#127468;&#127465;",
		category: "f",
		emoji_order: "2269"
	},
	{
		name: "flag-ge",
		unicode: "1f1ec-1f1ea",
		shortname: ":flag-ge:",
		code_decimal: "&#127468;&#127466;",
		category: "f",
		emoji_order: "2270"
	},
	{
		name: "flag-gf",
		unicode: "1f1ec-1f1eb",
		shortname: ":flag-gf:",
		code_decimal: "&#127468;&#127467;",
		category: "f",
		emoji_order: "2271"
	},
	{
		name: "flag-gg",
		unicode: "1f1ec-1f1ec",
		shortname: ":flag-gg:",
		code_decimal: "&#127468;&#127468;",
		category: "f",
		emoji_order: "2272"
	},
	{
		name: "flag-gh",
		unicode: "1f1ec-1f1ed",
		shortname: ":flag-gh:",
		code_decimal: "&#127468;&#127469;",
		category: "f",
		emoji_order: "2273"
	},
	{
		name: "flag-gi",
		unicode: "1f1ec-1f1ee",
		shortname: ":flag-gi:",
		code_decimal: "&#127468;&#127470;",
		category: "f",
		emoji_order: "2274"
	},
	{
		name: "flag-gl",
		unicode: "1f1ec-1f1f1",
		shortname: ":flag-gl:",
		code_decimal: "&#127468;&#127473;",
		category: "f",
		emoji_order: "2275"
	},
	{
		name: "flag-gm",
		unicode: "1f1ec-1f1f2",
		shortname: ":flag-gm:",
		code_decimal: "&#127468;&#127474;",
		category: "f",
		emoji_order: "2276"
	},
	{
		name: "flag-gn",
		unicode: "1f1ec-1f1f3",
		shortname: ":flag-gn:",
		code_decimal: "&#127468;&#127475;",
		category: "f",
		emoji_order: "2277"
	},
	{
		name: "flag-gp",
		unicode: "1f1ec-1f1f5",
		shortname: ":flag-gp:",
		code_decimal: "&#127468;&#127477;",
		category: "f",
		emoji_order: "2278"
	},
	{
		name: "flag-gq",
		unicode: "1f1ec-1f1f6",
		shortname: ":flag-gq:",
		code_decimal: "&#127468;&#127478;",
		category: "f",
		emoji_order: "2279"
	},
	{
		name: "flag-gr",
		unicode: "1f1ec-1f1f7",
		shortname: ":flag-gr:",
		code_decimal: "&#127468;&#127479;",
		category: "f",
		emoji_order: "2280"
	},
	{
		name: "flag-gs",
		unicode: "1f1ec-1f1f8",
		shortname: ":flag-gs:",
		code_decimal: "&#127468;&#127480;",
		category: "f",
		emoji_order: "2281"
	},
	{
		name: "flag-gt",
		unicode: "1f1ec-1f1f9",
		shortname: ":flag-gt:",
		code_decimal: "&#127468;&#127481;",
		category: "f",
		emoji_order: "2282"
	},
	{
		name: "flag-gu",
		unicode: "1f1ec-1f1fa",
		shortname: ":flag-gu:",
		code_decimal: "&#127468;&#127482;",
		category: "f",
		emoji_order: "2283"
	},
	{
		name: "flag-gw",
		unicode: "1f1ec-1f1fc",
		shortname: ":flag-gw:",
		code_decimal: "&#127468;&#127484;",
		category: "f",
		emoji_order: "2284"
	},
	{
		name: "flag-gy",
		unicode: "1f1ec-1f1fe",
		shortname: ":flag-gy:",
		code_decimal: "&#127468;&#127486;",
		category: "f",
		emoji_order: "2285"
	},
	{
		name: "flag-hk",
		unicode: "1f1ed-1f1f0",
		shortname: ":flag-hk:",
		code_decimal: "&#127469;&#127472;",
		category: "f",
		emoji_order: "2286"
	},
	{
		name: "flag-hm",
		unicode: "1f1ed-1f1f2",
		shortname: ":flag-hm:",
		code_decimal: "&#127469;&#127474;",
		category: "f",
		emoji_order: "2287"
	},
	{
		name: "flag-hn",
		unicode: "1f1ed-1f1f3",
		shortname: ":flag-hn:",
		code_decimal: "&#127469;&#127475;",
		category: "f",
		emoji_order: "2288"
	},
	{
		name: "flag-hr",
		unicode: "1f1ed-1f1f7",
		shortname: ":flag-hr:",
		code_decimal: "&#127469;&#127479;",
		category: "f",
		emoji_order: "2289"
	},
	{
		name: "flag-ht",
		unicode: "1f1ed-1f1f9",
		shortname: ":flag-ht:",
		code_decimal: "&#127469;&#127481;",
		category: "f",
		emoji_order: "2290"
	},
	{
		name: "flag-hu",
		unicode: "1f1ed-1f1fa",
		shortname: ":flag-hu:",
		code_decimal: "&#127469;&#127482;",
		category: "f",
		emoji_order: "2291"
	},
	{
		name: "flag-ic",
		unicode: "1f1ee-1f1e8",
		shortname: ":flag-ic:",
		code_decimal: "&#127470;&#127464;",
		category: "f",
		emoji_order: "2292"
	},
	{
		name: "flag-id",
		unicode: "1f1ee-1f1e9",
		shortname: ":flag-id:",
		code_decimal: "&#127470;&#127465;",
		category: "f",
		emoji_order: "2293"
	},
	{
		name: "flag-ie",
		unicode: "1f1ee-1f1ea",
		shortname: ":flag-ie:",
		code_decimal: "&#127470;&#127466;",
		category: "f",
		emoji_order: "2294"
	},
	{
		name: "flag-il",
		unicode: "1f1ee-1f1f1",
		shortname: ":flag-il:",
		code_decimal: "&#127470;&#127473;",
		category: "f",
		emoji_order: "2295"
	},
	{
		name: "flag-im",
		unicode: "1f1ee-1f1f2",
		shortname: ":flag-im:",
		code_decimal: "&#127470;&#127474;",
		category: "f",
		emoji_order: "2296"
	},
	{
		name: "flag-in",
		unicode: "1f1ee-1f1f3",
		shortname: ":flag-in:",
		code_decimal: "&#127470;&#127475;",
		category: "f",
		emoji_order: "2297"
	},
	{
		name: "flag-io",
		unicode: "1f1ee-1f1f4",
		shortname: ":flag-io:",
		code_decimal: "&#127470;&#127476;",
		category: "f",
		emoji_order: "2298"
	},
	{
		name: "flag-iq",
		unicode: "1f1ee-1f1f6",
		shortname: ":flag-iq:",
		code_decimal: "&#127470;&#127478;",
		category: "f",
		emoji_order: "2299"
	},
	{
		name: "flag-ir",
		unicode: "1f1ee-1f1f7",
		shortname: ":flag-ir:",
		code_decimal: "&#127470;&#127479;",
		category: "f",
		emoji_order: "2300"
	},
	{
		name: "flag-is",
		unicode: "1f1ee-1f1f8",
		shortname: ":flag-is:",
		code_decimal: "&#127470;&#127480;",
		category: "f",
		emoji_order: "2301"
	},
	{
		name: "flag-it",
		unicode: "1f1ee-1f1f9",
		shortname: ":flag-it:",
		code_decimal: "&#127470;&#127481;",
		category: "f",
		emoji_order: "2302"
	},
	{
		name: "flag-je",
		unicode: "1f1ef-1f1ea",
		shortname: ":flag-je:",
		code_decimal: "&#127471;&#127466;",
		category: "f",
		emoji_order: "2303"
	},
	{
		name: "flag-jm",
		unicode: "1f1ef-1f1f2",
		shortname: ":flag-jm:",
		code_decimal: "&#127471;&#127474;",
		category: "f",
		emoji_order: "2304"
	},
	{
		name: "flag-jo",
		unicode: "1f1ef-1f1f4",
		shortname: ":flag-jo:",
		code_decimal: "&#127471;&#127476;",
		category: "f",
		emoji_order: "2305"
	},
	{
		name: "flag-jp",
		unicode: "1f1ef-1f1f5",
		shortname: ":flag-jp:",
		code_decimal: "&#127471;&#127477;",
		category: "f",
		emoji_order: "2306"
	},
	{
		name: "flag-ke",
		unicode: "1f1f0-1f1ea",
		shortname: ":flag-ke:",
		code_decimal: "&#127472;&#127466;",
		category: "f",
		emoji_order: "2307"
	},
	{
		name: "flag-kg",
		unicode: "1f1f0-1f1ec",
		shortname: ":flag-kg:",
		code_decimal: "&#127472;&#127468;",
		category: "f",
		emoji_order: "2308"
	},
	{
		name: "flag-kh",
		unicode: "1f1f0-1f1ed",
		shortname: ":flag-kh:",
		code_decimal: "&#127472;&#127469;",
		category: "f",
		emoji_order: "2309"
	},
	{
		name: "flag-ki",
		unicode: "1f1f0-1f1ee",
		shortname: ":flag-ki:",
		code_decimal: "&#127472;&#127470;",
		category: "f",
		emoji_order: "2310"
	},
	{
		name: "flag-km",
		unicode: "1f1f0-1f1f2",
		shortname: ":flag-km:",
		code_decimal: "&#127472;&#127474;",
		category: "f",
		emoji_order: "2311"
	},
	{
		name: "flag-kn",
		unicode: "1f1f0-1f1f3",
		shortname: ":flag-kn:",
		code_decimal: "&#127472;&#127475;",
		category: "f",
		emoji_order: "2312"
	},
	{
		name: "flag-kp",
		unicode: "1f1f0-1f1f5",
		shortname: ":flag-kp:",
		code_decimal: "&#127472;&#127477;",
		category: "f",
		emoji_order: "2313"
	},
	{
		name: "flag-kr",
		unicode: "1f1f0-1f1f7",
		shortname: ":flag-kr:",
		code_decimal: "&#127472;&#127479;",
		category: "f",
		emoji_order: "2314"
	},
	{
		name: "flag-kw",
		unicode: "1f1f0-1f1fc",
		shortname: ":flag-kw:",
		code_decimal: "&#127472;&#127484;",
		category: "f",
		emoji_order: "2315"
	},
	{
		name: "flag-ky",
		unicode: "1f1f0-1f1fe",
		shortname: ":flag-ky:",
		code_decimal: "&#127472;&#127486;",
		category: "f",
		emoji_order: "2316"
	},
	{
		name: "flag-kz",
		unicode: "1f1f0-1f1ff",
		shortname: ":flag-kz:",
		code_decimal: "&#127472;&#127487;",
		category: "f",
		emoji_order: "2317"
	},
	{
		name: "flag-la",
		unicode: "1f1f1-1f1e6",
		shortname: ":flag-la:",
		code_decimal: "&#127473;&#127462;",
		category: "f",
		emoji_order: "2318"
	},
	{
		name: "flag-lb",
		unicode: "1f1f1-1f1e7",
		shortname: ":flag-lb:",
		code_decimal: "&#127473;&#127463;",
		category: "f",
		emoji_order: "2319"
	},
	{
		name: "flag-lc",
		unicode: "1f1f1-1f1e8",
		shortname: ":flag-lc:",
		code_decimal: "&#127473;&#127464;",
		category: "f",
		emoji_order: "2320"
	},
	{
		name: "flag-li",
		unicode: "1f1f1-1f1ee",
		shortname: ":flag-li:",
		code_decimal: "&#127473;&#127470;",
		category: "f",
		emoji_order: "2321"
	},
	{
		name: "flag-lk",
		unicode: "1f1f1-1f1f0",
		shortname: ":flag-lk:",
		code_decimal: "&#127473;&#127472;",
		category: "f",
		emoji_order: "2322"
	},
	{
		name: "flag-lr",
		unicode: "1f1f1-1f1f7",
		shortname: ":flag-lr:",
		code_decimal: "&#127473;&#127479;",
		category: "f",
		emoji_order: "2323"
	},
	{
		name: "flag-ls",
		unicode: "1f1f1-1f1f8",
		shortname: ":flag-ls:",
		code_decimal: "&#127473;&#127480;",
		category: "f",
		emoji_order: "2324"
	},
	{
		name: "flag-lt",
		unicode: "1f1f1-1f1f9",
		shortname: ":flag-lt:",
		code_decimal: "&#127473;&#127481;",
		category: "f",
		emoji_order: "2325"
	},
	{
		name: "flag-lu",
		unicode: "1f1f1-1f1fa",
		shortname: ":flag-lu:",
		code_decimal: "&#127473;&#127482;",
		category: "f",
		emoji_order: "2326"
	},
	{
		name: "flag-lv",
		unicode: "1f1f1-1f1fb",
		shortname: ":flag-lv:",
		code_decimal: "&#127473;&#127483;",
		category: "f",
		emoji_order: "2327"
	},
	{
		name: "flag-ly",
		unicode: "1f1f1-1f1fe",
		shortname: ":flag-ly:",
		code_decimal: "&#127473;&#127486;",
		category: "f",
		emoji_order: "2328"
	},
	{
		name: "flag-ma",
		unicode: "1f1f2-1f1e6",
		shortname: ":flag-ma:",
		code_decimal: "&#127474;&#127462;",
		category: "f",
		emoji_order: "2329"
	},
	{
		name: "flag-mc",
		unicode: "1f1f2-1f1e8",
		shortname: ":flag-mc:",
		code_decimal: "&#127474;&#127464;",
		category: "f",
		emoji_order: "2330"
	},
	{
		name: "flag-md",
		unicode: "1f1f2-1f1e9",
		shortname: ":flag-md:",
		code_decimal: "&#127474;&#127465;",
		category: "f",
		emoji_order: "2331"
	},
	{
		name: "flag-me",
		unicode: "1f1f2-1f1ea",
		shortname: ":flag-me:",
		code_decimal: "&#127474;&#127466;",
		category: "f",
		emoji_order: "2332"
	},
	{
		name: "flag-mf",
		unicode: "1f1f2-1f1eb",
		shortname: ":flag-mf:",
		code_decimal: "&#127474;&#127467;",
		category: "f",
		emoji_order: "2333"
	},
	{
		name: "flag-mg",
		unicode: "1f1f2-1f1ec",
		shortname: ":flag-mg:",
		code_decimal: "&#127474;&#127468;",
		category: "f",
		emoji_order: "2334"
	},
	{
		name: "flag-mh",
		unicode: "1f1f2-1f1ed",
		shortname: ":flag-mh:",
		code_decimal: "&#127474;&#127469;",
		category: "f",
		emoji_order: "2335"
	},
	{
		name: "flag-mk",
		unicode: "1f1f2-1f1f0",
		shortname: ":flag-mk:",
		code_decimal: "&#127474;&#127472;",
		category: "f",
		emoji_order: "2336"
	},
	{
		name: "flag-ml",
		unicode: "1f1f2-1f1f1",
		shortname: ":flag-ml:",
		code_decimal: "&#127474;&#127473;",
		category: "f",
		emoji_order: "2337"
	},
	{
		name: "flag-mm",
		unicode: "1f1f2-1f1f2",
		shortname: ":flag-mm:",
		code_decimal: "&#127474;&#127474;",
		category: "f",
		emoji_order: "2338"
	},
	{
		name: "flag-mn",
		unicode: "1f1f2-1f1f3",
		shortname: ":flag-mn:",
		code_decimal: "&#127474;&#127475;",
		category: "f",
		emoji_order: "2339"
	},
	{
		name: "flag-mo",
		unicode: "1f1f2-1f1f4",
		shortname: ":flag-mo:",
		code_decimal: "&#127474;&#127476;",
		category: "f",
		emoji_order: "2340"
	},
	{
		name: "flag-mp",
		unicode: "1f1f2-1f1f5",
		shortname: ":flag-mp:",
		code_decimal: "&#127474;&#127477;",
		category: "f",
		emoji_order: "2341"
	},
	{
		name: "flag-mq",
		unicode: "1f1f2-1f1f6",
		shortname: ":flag-mq:",
		code_decimal: "&#127474;&#127478;",
		category: "f",
		emoji_order: "2342"
	},
	{
		name: "flag-mr",
		unicode: "1f1f2-1f1f7",
		shortname: ":flag-mr:",
		code_decimal: "&#127474;&#127479;",
		category: "f",
		emoji_order: "2343"
	},
	{
		name: "flag-ms",
		unicode: "1f1f2-1f1f8",
		shortname: ":flag-ms:",
		code_decimal: "&#127474;&#127480;",
		category: "f",
		emoji_order: "2344"
	},
	{
		name: "flag-mt",
		unicode: "1f1f2-1f1f9",
		shortname: ":flag-mt:",
		code_decimal: "&#127474;&#127481;",
		category: "f",
		emoji_order: "2345"
	},
	{
		name: "flag-mu",
		unicode: "1f1f2-1f1fa",
		shortname: ":flag-mu:",
		code_decimal: "&#127474;&#127482;",
		category: "f",
		emoji_order: "2346"
	},
	{
		name: "flag-mv",
		unicode: "1f1f2-1f1fb",
		shortname: ":flag-mv:",
		code_decimal: "&#127474;&#127483;",
		category: "f",
		emoji_order: "2347"
	},
	{
		name: "flag-mw",
		unicode: "1f1f2-1f1fc",
		shortname: ":flag-mw:",
		code_decimal: "&#127474;&#127484;",
		category: "f",
		emoji_order: "2348"
	},
	{
		name: "flag-mx",
		unicode: "1f1f2-1f1fd",
		shortname: ":flag-mx:",
		code_decimal: "&#127474;&#127485;",
		category: "f",
		emoji_order: "2349"
	},
	{
		name: "flag-my",
		unicode: "1f1f2-1f1fe",
		shortname: ":flag-my:",
		code_decimal: "&#127474;&#127486;",
		category: "f",
		emoji_order: "2350"
	},
	{
		name: "flag-mz",
		unicode: "1f1f2-1f1ff",
		shortname: ":flag-mz:",
		code_decimal: "&#127474;&#127487;",
		category: "f",
		emoji_order: "2351"
	},
	{
		name: "flag-na",
		unicode: "1f1f3-1f1e6",
		shortname: ":flag-na:",
		code_decimal: "&#127475;&#127462;",
		category: "f",
		emoji_order: "2352"
	},
	{
		name: "flag-nc",
		unicode: "1f1f3-1f1e8",
		shortname: ":flag-nc:",
		code_decimal: "&#127475;&#127464;",
		category: "f",
		emoji_order: "2353"
	},
	{
		name: "flag-ne",
		unicode: "1f1f3-1f1ea",
		shortname: ":flag-ne:",
		code_decimal: "&#127475;&#127466;",
		category: "f",
		emoji_order: "2354"
	},
	{
		name: "flag-nf",
		unicode: "1f1f3-1f1eb",
		shortname: ":flag-nf:",
		code_decimal: "&#127475;&#127467;",
		category: "f",
		emoji_order: "2355"
	},
	{
		name: "flag-ng",
		unicode: "1f1f3-1f1ec",
		shortname: ":flag-ng:",
		code_decimal: "&#127475;&#127468;",
		category: "f",
		emoji_order: "2356"
	},
	{
		name: "flag-ni",
		unicode: "1f1f3-1f1ee",
		shortname: ":flag-ni:",
		code_decimal: "&#127475;&#127470;",
		category: "f",
		emoji_order: "2357"
	},
	{
		name: "flag-nl",
		unicode: "1f1f3-1f1f1",
		shortname: ":flag-nl:",
		code_decimal: "&#127475;&#127473;",
		category: "f",
		emoji_order: "2358"
	},
	{
		name: "flag-no",
		unicode: "1f1f3-1f1f4",
		shortname: ":flag-no:",
		code_decimal: "&#127475;&#127476;",
		category: "f",
		emoji_order: "2359"
	},
	{
		name: "flag-np",
		unicode: "1f1f3-1f1f5",
		shortname: ":flag-np:",
		code_decimal: "&#127475;&#127477;",
		category: "f",
		emoji_order: "2360"
	},
	{
		name: "flag-nr",
		unicode: "1f1f3-1f1f7",
		shortname: ":flag-nr:",
		code_decimal: "&#127475;&#127479;",
		category: "f",
		emoji_order: "2361"
	},
	{
		name: "flag-nu",
		unicode: "1f1f3-1f1fa",
		shortname: ":flag-nu:",
		code_decimal: "&#127475;&#127482;",
		category: "f",
		emoji_order: "2362"
	},
	{
		name: "flag-nz",
		unicode: "1f1f3-1f1ff",
		shortname: ":flag-nz:",
		code_decimal: "&#127475;&#127487;",
		category: "f",
		emoji_order: "2363"
	},
	{
		name: "flag-om",
		unicode: "1f1f4-1f1f2",
		shortname: ":flag-om:",
		code_decimal: "&#127476;&#127474;",
		category: "f",
		emoji_order: "2364"
	},
	{
		name: "flag-pa",
		unicode: "1f1f5-1f1e6",
		shortname: ":flag-pa:",
		code_decimal: "&#127477;&#127462;",
		category: "f",
		emoji_order: "2365"
	},
	{
		name: "flag-pe",
		unicode: "1f1f5-1f1ea",
		shortname: ":flag-pe:",
		code_decimal: "&#127477;&#127466;",
		category: "f",
		emoji_order: "2366"
	},
	{
		name: "flag-pf",
		unicode: "1f1f5-1f1eb",
		shortname: ":flag-pf:",
		code_decimal: "&#127477;&#127467;",
		category: "f",
		emoji_order: "2367"
	},
	{
		name: "flag-pg",
		unicode: "1f1f5-1f1ec",
		shortname: ":flag-pg:",
		code_decimal: "&#127477;&#127468;",
		category: "f",
		emoji_order: "2368"
	},
	{
		name: "flag-ph",
		unicode: "1f1f5-1f1ed",
		shortname: ":flag-ph:",
		code_decimal: "&#127477;&#127469;",
		category: "f",
		emoji_order: "2369"
	},
	{
		name: "flag-pk",
		unicode: "1f1f5-1f1f0",
		shortname: ":flag-pk:",
		code_decimal: "&#127477;&#127472;",
		category: "f",
		emoji_order: "2370"
	},
	{
		name: "flag-pl",
		unicode: "1f1f5-1f1f1",
		shortname: ":flag-pl:",
		code_decimal: "&#127477;&#127473;",
		category: "f",
		emoji_order: "2371"
	},
	{
		name: "flag-pm",
		unicode: "1f1f5-1f1f2",
		shortname: ":flag-pm:",
		code_decimal: "&#127477;&#127474;",
		category: "f",
		emoji_order: "2372"
	},
	{
		name: "flag-pn",
		unicode: "1f1f5-1f1f3",
		shortname: ":flag-pn:",
		code_decimal: "&#127477;&#127475;",
		category: "f",
		emoji_order: "2373"
	},
	{
		name: "flag-pr",
		unicode: "1f1f5-1f1f7",
		shortname: ":flag-pr:",
		code_decimal: "&#127477;&#127479;",
		category: "f",
		emoji_order: "2374"
	},
	{
		name: "flag-ps",
		unicode: "1f1f5-1f1f8",
		shortname: ":flag-ps:",
		code_decimal: "&#127477;&#127480;",
		category: "f",
		emoji_order: "2375"
	},
	{
		name: "flag-pt",
		unicode: "1f1f5-1f1f9",
		shortname: ":flag-pt:",
		code_decimal: "&#127477;&#127481;",
		category: "f",
		emoji_order: "2376"
	},
	{
		name: "flag-pw",
		unicode: "1f1f5-1f1fc",
		shortname: ":flag-pw:",
		code_decimal: "&#127477;&#127484;",
		category: "f",
		emoji_order: "2377"
	},
	{
		name: "flag-py",
		unicode: "1f1f5-1f1fe",
		shortname: ":flag-py:",
		code_decimal: "&#127477;&#127486;",
		category: "f",
		emoji_order: "2378"
	},
	{
		name: "flag-qa",
		unicode: "1f1f6-1f1e6",
		shortname: ":flag-qa:",
		code_decimal: "&#127478;&#127462;",
		category: "f",
		emoji_order: "2379"
	},
	{
		name: "flag-re",
		unicode: "1f1f7-1f1ea",
		shortname: ":flag-re:",
		code_decimal: "&#127479;&#127466;",
		category: "f",
		emoji_order: "2380"
	},
	{
		name: "flag-ro",
		unicode: "1f1f7-1f1f4",
		shortname: ":flag-ro:",
		code_decimal: "&#127479;&#127476;",
		category: "f",
		emoji_order: "2381"
	},
	{
		name: "flag-rs",
		unicode: "1f1f7-1f1f8",
		shortname: ":flag-rs:",
		code_decimal: "&#127479;&#127480;",
		category: "f",
		emoji_order: "2382"
	},
	{
		name: "flag-ru",
		unicode: "1f1f7-1f1fa",
		shortname: ":flag-ru:",
		code_decimal: "&#127479;&#127482;",
		category: "f",
		emoji_order: "2383"
	},
	{
		name: "flag-rw",
		unicode: "1f1f7-1f1fc",
		shortname: ":flag-rw:",
		code_decimal: "&#127479;&#127484;",
		category: "f",
		emoji_order: "2384"
	},
	{
		name: "flag-sa",
		unicode: "1f1f8-1f1e6",
		shortname: ":flag-sa:",
		code_decimal: "&#127480;&#127462;",
		category: "f",
		emoji_order: "2385"
	},
	{
		name: "flag-sb",
		unicode: "1f1f8-1f1e7",
		shortname: ":flag-sb:",
		code_decimal: "&#127480;&#127463;",
		category: "f",
		emoji_order: "2386"
	},
	{
		name: "flag-sc",
		unicode: "1f1f8-1f1e8",
		shortname: ":flag-sc:",
		code_decimal: "&#127480;&#127464;",
		category: "f",
		emoji_order: "2387"
	},
	{
		name: "flag-sd",
		unicode: "1f1f8-1f1e9",
		shortname: ":flag-sd:",
		code_decimal: "&#127480;&#127465;",
		category: "f",
		emoji_order: "2388"
	},
	{
		name: "flag-se",
		unicode: "1f1f8-1f1ea",
		shortname: ":flag-se:",
		code_decimal: "&#127480;&#127466;",
		category: "f",
		emoji_order: "2389"
	},
	{
		name: "flag-sg",
		unicode: "1f1f8-1f1ec",
		shortname: ":flag-sg:",
		code_decimal: "&#127480;&#127468;",
		category: "f",
		emoji_order: "2390"
	},
	{
		name: "flag-sh",
		unicode: "1f1f8-1f1ed",
		shortname: ":flag-sh:",
		code_decimal: "&#127480;&#127469;",
		category: "f",
		emoji_order: "2391"
	},
	{
		name: "flag-si",
		unicode: "1f1f8-1f1ee",
		shortname: ":flag-si:",
		code_decimal: "&#127480;&#127470;",
		category: "f",
		emoji_order: "2392"
	},
	{
		name: "flag-sj",
		unicode: "1f1f8-1f1ef",
		shortname: ":flag-sj:",
		code_decimal: "&#127480;&#127471;",
		category: "f",
		emoji_order: "2393"
	},
	{
		name: "flag-sk",
		unicode: "1f1f8-1f1f0",
		shortname: ":flag-sk:",
		code_decimal: "&#127480;&#127472;",
		category: "f",
		emoji_order: "2394"
	},
	{
		name: "flag-sl",
		unicode: "1f1f8-1f1f1",
		shortname: ":flag-sl:",
		code_decimal: "&#127480;&#127473;",
		category: "f",
		emoji_order: "2395"
	},
	{
		name: "flag-sm",
		unicode: "1f1f8-1f1f2",
		shortname: ":flag-sm:",
		code_decimal: "&#127480;&#127474;",
		category: "f",
		emoji_order: "2396"
	},
	{
		name: "flag-sn",
		unicode: "1f1f8-1f1f3",
		shortname: ":flag-sn:",
		code_decimal: "&#127480;&#127475;",
		category: "f",
		emoji_order: "2397"
	},
	{
		name: "flag-so",
		unicode: "1f1f8-1f1f4",
		shortname: ":flag-so:",
		code_decimal: "&#127480;&#127476;",
		category: "f",
		emoji_order: "2398"
	},
	{
		name: "flag-sr",
		unicode: "1f1f8-1f1f7",
		shortname: ":flag-sr:",
		code_decimal: "&#127480;&#127479;",
		category: "f",
		emoji_order: "2399"
	},
	{
		name: "flag-ss",
		unicode: "1f1f8-1f1f8",
		shortname: ":flag-ss:",
		code_decimal: "&#127480;&#127480;",
		category: "f",
		emoji_order: "2400"
	},
	{
		name: "flag-st",
		unicode: "1f1f8-1f1f9",
		shortname: ":flag-st:",
		code_decimal: "&#127480;&#127481;",
		category: "f",
		emoji_order: "2401"
	},
	{
		name: "flag-sv",
		unicode: "1f1f8-1f1fb",
		shortname: ":flag-sv:",
		code_decimal: "&#127480;&#127483;",
		category: "f",
		emoji_order: "2402"
	},
	{
		name: "flag-sx",
		unicode: "1f1f8-1f1fd",
		shortname: ":flag-sx:",
		code_decimal: "&#127480;&#127485;",
		category: "f",
		emoji_order: "2403"
	},
	{
		name: "flag-sy",
		unicode: "1f1f8-1f1fe",
		shortname: ":flag-sy:",
		code_decimal: "&#127480;&#127486;",
		category: "f",
		emoji_order: "2404"
	},
	{
		name: "flag-sz",
		unicode: "1f1f8-1f1ff",
		shortname: ":flag-sz:",
		code_decimal: "&#127480;&#127487;",
		category: "f",
		emoji_order: "2405"
	},
	{
		name: "flag-ta",
		unicode: "1f1f9-1f1e6",
		shortname: ":flag-ta:",
		code_decimal: "&#127481;&#127462;",
		category: "f",
		emoji_order: "2406"
	},
	{
		name: "flag-tc",
		unicode: "1f1f9-1f1e8",
		shortname: ":flag-tc:",
		code_decimal: "&#127481;&#127464;",
		category: "f",
		emoji_order: "2407"
	},
	{
		name: "flag-td",
		unicode: "1f1f9-1f1e9",
		shortname: ":flag-td:",
		code_decimal: "&#127481;&#127465;",
		category: "f",
		emoji_order: "2408"
	},
	{
		name: "flag-tf",
		unicode: "1f1f9-1f1eb",
		shortname: ":flag-tf:",
		code_decimal: "&#127481;&#127467;",
		category: "f",
		emoji_order: "2409"
	},
	{
		name: "flag-tg",
		unicode: "1f1f9-1f1ec",
		shortname: ":flag-tg:",
		code_decimal: "&#127481;&#127468;",
		category: "f",
		emoji_order: "2410"
	},
	{
		name: "flag-th",
		unicode: "1f1f9-1f1ed",
		shortname: ":flag-th:",
		code_decimal: "&#127481;&#127469;",
		category: "f",
		emoji_order: "2411"
	},
	{
		name: "flag-tj",
		unicode: "1f1f9-1f1ef",
		shortname: ":flag-tj:",
		code_decimal: "&#127481;&#127471;",
		category: "f",
		emoji_order: "2412"
	},
	{
		name: "flag-tk",
		unicode: "1f1f9-1f1f0",
		shortname: ":flag-tk:",
		code_decimal: "&#127481;&#127472;",
		category: "f",
		emoji_order: "2413"
	},
	{
		name: "flag-tl",
		unicode: "1f1f9-1f1f1",
		shortname: ":flag-tl:",
		code_decimal: "&#127481;&#127473;",
		category: "f",
		emoji_order: "2414"
	},
	{
		name: "flag-tm",
		unicode: "1f1f9-1f1f2",
		shortname: ":flag-tm:",
		code_decimal: "&#127481;&#127474;",
		category: "f",
		emoji_order: "2415"
	},
	{
		name: "flag-tn",
		unicode: "1f1f9-1f1f3",
		shortname: ":flag-tn:",
		code_decimal: "&#127481;&#127475;",
		category: "f",
		emoji_order: "2416"
	},
	{
		name: "flag-to",
		unicode: "1f1f9-1f1f4",
		shortname: ":flag-to:",
		code_decimal: "&#127481;&#127476;",
		category: "f",
		emoji_order: "2417"
	},
	{
		name: "flag-tr",
		unicode: "1f1f9-1f1f7",
		shortname: ":flag-tr:",
		code_decimal: "&#127481;&#127479;",
		category: "f",
		emoji_order: "2418"
	},
	{
		name: "flag-tt",
		unicode: "1f1f9-1f1f9",
		shortname: ":flag-tt:",
		code_decimal: "&#127481;&#127481;",
		category: "f",
		emoji_order: "2419"
	},
	{
		name: "flag-tv",
		unicode: "1f1f9-1f1fb",
		shortname: ":flag-tv:",
		code_decimal: "&#127481;&#127483;",
		category: "f",
		emoji_order: "2420"
	},
	{
		name: "flag-tw",
		unicode: "1f1f9-1f1fc",
		shortname: ":flag-tw:",
		code_decimal: "&#127481;&#127484;",
		category: "f",
		emoji_order: "2421"
	},
	{
		name: "flag-tz",
		unicode: "1f1f9-1f1ff",
		shortname: ":flag-tz:",
		code_decimal: "&#127481;&#127487;",
		category: "f",
		emoji_order: "2422"
	},
	{
		name: "flag-ua",
		unicode: "1f1fa-1f1e6",
		shortname: ":flag-ua:",
		code_decimal: "&#127482;&#127462;",
		category: "f",
		emoji_order: "2423"
	},
	{
		name: "flag-ug",
		unicode: "1f1fa-1f1ec",
		shortname: ":flag-ug:",
		code_decimal: "&#127482;&#127468;",
		category: "f",
		emoji_order: "2424"
	},
	{
		name: "flag-um",
		unicode: "1f1fa-1f1f2",
		shortname: ":flag-um:",
		code_decimal: "&#127482;&#127474;",
		category: "f",
		emoji_order: "2425"
	},
	{
		name: "flag-us",
		unicode: "1f1fa-1f1f8",
		shortname: ":flag-us:",
		code_decimal: "&#127482;&#127480;",
		category: "f",
		emoji_order: "2427"
	},
	{
		name: "flag-uy",
		unicode: "1f1fa-1f1fe",
		shortname: ":flag-uy:",
		code_decimal: "&#127482;&#127486;",
		category: "f",
		emoji_order: "2428"
	},
	{
		name: "flag-uz",
		unicode: "1f1fa-1f1ff",
		shortname: ":flag-uz:",
		code_decimal: "&#127482;&#127487;",
		category: "f",
		emoji_order: "2429"
	},
	{
		name: "flag-va",
		unicode: "1f1fb-1f1e6",
		shortname: ":flag-va:",
		code_decimal: "&#127483;&#127462;",
		category: "f",
		emoji_order: "2430"
	},
	{
		name: "flag-vc",
		unicode: "1f1fb-1f1e8",
		shortname: ":flag-vc:",
		code_decimal: "&#127483;&#127464;",
		category: "f",
		emoji_order: "2431"
	},
	{
		name: "flag-ve",
		unicode: "1f1fb-1f1ea",
		shortname: ":flag-ve:",
		code_decimal: "&#127483;&#127466;",
		category: "f",
		emoji_order: "2432"
	},
	{
		name: "flag-vg",
		unicode: "1f1fb-1f1ec",
		shortname: ":flag-vg:",
		code_decimal: "&#127483;&#127468;",
		category: "f",
		emoji_order: "2433"
	},
	{
		name: "flag-vi",
		unicode: "1f1fb-1f1ee",
		shortname: ":flag-vi:",
		code_decimal: "&#127483;&#127470;",
		category: "f",
		emoji_order: "2434"
	},
	{
		name: "flag-vn",
		unicode: "1f1fb-1f1f3",
		shortname: ":flag-vn:",
		code_decimal: "&#127483;&#127475;",
		category: "f",
		emoji_order: "2435"
	},
	{
		name: "flag-vu",
		unicode: "1f1fb-1f1fa",
		shortname: ":flag_vu:",
		code_decimal: "&#127483;&#127482;",
		category: "f",
		emoji_order: "2436"
	},
	{
		name: "flag-wf",
		unicode: "1f1fc-1f1eb",
		shortname: ":flag_wf:",
		code_decimal: "&#127484;&#127467;",
		category: "f",
		emoji_order: "2437"
	},
	{
		name: "flag-ws",
		unicode: "1f1fc-1f1f8",
		shortname: ":flag_ws:",
		code_decimal: "&#127484;&#127480;",
		category: "f",
		emoji_order: "2438"
	},
	{
		name: "flag-xk",
		unicode: "1f1fd-1f1f0",
		shortname: ":flag_xk:",
		code_decimal: "&#127485;&#127472;",
		category: "f",
		emoji_order: "2439"
	},
	{
		name: "flag-ye",
		unicode: "1f1fe-1f1ea",
		shortname: ":flag_ye:",
		code_decimal: "&#127486;&#127466;",
		category: "f",
		emoji_order: "2440"
	},
	{
		name: "flag-yt",
		unicode: "1f1fe-1f1f9",
		shortname: ":flag_yt:",
		code_decimal: "&#127486;&#127481;",
		category: "f",
		emoji_order: "2441"
	},
	{
		name: "flag-za",
		unicode: "1f1ff-1f1e6",
		shortname: ":flag_za:",
		code_decimal: "&#127487;&#127462;",
		category: "f",
		emoji_order: "2442"
	},
	{
		name: "flag-zm",
		unicode: "1f1ff-1f1f2",
		shortname: ":flag_zm:",
		code_decimal: "&#127487;&#127474;",
		category: "f",
		emoji_order: "2443"
	},
	{
		name: "flag-zw",
		unicode: "1f1ff-1f1fc",
		shortname: ":flag_zw:",
		code_decimal: "&#127487;&#127484;",
		category: "f",
		emoji_order: "2444"
	}
], emojiMap = {};
emoji_list_default.forEach((e) => {
	emojiMap[e.name] = e;
});
var emoji_map_default = emojiMap, Embed = quill_default.import("blots/embed"), EmojiBlot = class e extends Embed {
	static create(t) {
		let n = super.create();
		if (console.log(n), typeof t == "object") e.buildSpan(t, n);
		else if (typeof t == "string") {
			let r = emoji_map_default[t];
			r && e.buildSpan(r, n);
		}
		return n;
	}
	static value(e) {
		return e.dataset.name;
	}
	static buildSpan(t, n) {
		n.setAttribute("data-name", t.name);
		let r = document.createElement("span");
		r.classList.add(this.emojiClass), r.classList.add(this.emojiPrefix + t.name), r.innerText = String.fromCodePoint(...e.parseUnicode(t.unicode)), n.appendChild(r);
	}
	static parseUnicode(e) {
		return console.log(e.split("-")), e.split("-").map((e) => parseInt(e, 16));
	}
};
EmojiBlot.blotName = "emoji", EmojiBlot.className = "ql-emojiblot", EmojiBlot.tagName = "span", EmojiBlot.emojiClass = "ap", EmojiBlot.emojiPrefix = "ap-";
var format_emoji_blot_default = EmojiBlot;
function isArray(e) {
	return Array.isArray ? Array.isArray(e) : getTag(e) === "[object Array]";
}
var INFINITY = Infinity;
function baseToString(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -INFINITY ? "-0" : t;
}
function toString(e) {
	return e == null ? "" : baseToString(e);
}
function isString(e) {
	return typeof e == "string";
}
function isNumber(e) {
	return typeof e == "number";
}
function isBoolean(e) {
	return e === !0 || e === !1 || isObjectLike(e) && getTag(e) == "[object Boolean]";
}
function isObject(e) {
	return typeof e == "object";
}
function isObjectLike(e) {
	return isObject(e) && e !== null;
}
function isDefined(e) {
	return e != null;
}
function isBlank(e) {
	return !e.trim().length;
}
function getTag(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type", LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (e) => `Invalid value for key ${e}`, PATTERN_LENGTH_TOO_LARGE = (e) => `Pattern length exceeds max of ${e}.`, MISSING_KEY_PROPERTY = (e) => `Missing ${e} property in key`, INVALID_KEY_WEIGHT_VALUE = (e) => `Property 'weight' in key '${e}' must be a positive integer`, hasOwn = Object.prototype.hasOwnProperty, KeyStore = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = createKey(e);
			this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
		});
	}
	get(e) {
		return this._keyMap[e];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function createKey(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (isString(e) || isArray(e)) r = e, t = createKeyPath(e), n = createKeyId(e);
	else {
		if (!hasOwn.call(e, "name")) throw Error(MISSING_KEY_PROPERTY("name"));
		let o = e.name;
		if (r = o, hasOwn.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(INVALID_KEY_WEIGHT_VALUE(o));
		t = createKeyPath(o), n = createKeyId(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function createKeyPath(e) {
	return isArray(e) ? e : e.split(".");
}
function createKeyId(e) {
	return isArray(e) ? e.join(".") : e;
}
function get(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (isDefined(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!isDefined(o)) return;
			if (a === t.length - 1 && (isString(o) || isNumber(o) || isBoolean(o))) n.push(toString(o));
			else if (isArray(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, isString(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var MatchOptions = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, BasicOptions = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, FuzzyOptions = {
	location: 0,
	threshold: .6,
	distance: 100
}, AdvancedOptions = {
	useExtendedSearch: !1,
	getFn: get,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, Config = {
	...BasicOptions,
	...MatchOptions,
	...FuzzyOptions,
	...AdvancedOptions
}, SPACE = /[^ ]+/g;
function norm(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(SPACE).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var FuseIndex = class {
	constructor({ getFn: e = Config.getFn, fieldNormWeight: t = Config.fieldNormWeight } = {}) {
		this.norm = norm(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		this.isCreated || !this.docs.length || (this.isCreated = !0, isString(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		isString(e) ? this._addString(e, t) : this._addObject(e, t);
	}
	removeAt(e) {
		this.records.splice(e, 1);
		for (let t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_addString(e, t) {
		if (!isDefined(e) || isBlank(e)) return;
		let n = {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
		this.records.push(n);
	}
	_addObject(e, t) {
		let n = {
			i: t,
			$: {}
		};
		this.keys.forEach((t, r) => {
			let i = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
			if (isDefined(i)) {
				if (isArray(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (isDefined(r)) if (isString(r) && !isBlank(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else isArray(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (isString(i) && !isBlank(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[r] = e;
				}
			}
		}), this.records.push(n);
	}
	toJSON() {
		return {
			keys: this.keys,
			records: this.records
		};
	}
};
function createIndex(e, t, { getFn: n = Config.getFn, fieldNormWeight: r = Config.fieldNormWeight } = {}) {
	let i = new FuseIndex({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(createKey)), i.setSources(t), i.create(), i;
}
function parseIndex(e, { getFn: t = Config.getFn, fieldNormWeight: n = Config.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new FuseIndex({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function computeScore$1(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = Config.distance, ignoreLocation: a = Config.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function convertMaskToIndices(e = [], t = Config.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var MAX_BITS = 32;
function search(e, t, n, { location: r = Config.location, distance: i = Config.distance, threshold: a = Config.threshold, findAllMatches: o = Config.findAllMatches, minMatchCharLength: s = Config.minMatchCharLength, includeMatches: c = Config.includeMatches, ignoreLocation: l = Config.ignoreLocation } = {}) {
	if (t.length > MAX_BITS) throw Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = computeScore$1(t, {
			currentLocation: _,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		});
		if (p = Math.min(e, p), m = _ + u, h) {
			let e = 0;
			for (; e < u;) g[_ + e] = 1, e += 1;
		}
	}
	m = -1;
	let v = [], y = 1, b = u + d, x = 1 << u - 1;
	for (let r = 0; r < u; r += 1) {
		let a = 0, s = b;
		for (; a < s;) computeScore$1(t, {
			errors: r,
			currentLocation: f + s,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) <= p ? a = s : b = s, s = Math.floor((b - a) / 2 + a);
		b = s;
		let c = Math.max(1, f - s + 1), _ = o ? d : Math.min(f + s, d) + u, S = Array(_ + 2);
		S[_ + 1] = (1 << r) - 1;
		for (let a = _; a >= c; --a) {
			let o = a - 1, s = n[e.charAt(o)];
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = computeScore$1(t, {
				errors: r,
				currentLocation: o,
				expectedLocation: f,
				distance: i,
				ignoreLocation: l
			}), y <= p)) {
				if (p = y, m = o, m <= f) break;
				c = Math.max(1, 2 * f - m);
			}
		}
		if (computeScore$1(t, {
			errors: r + 1,
			currentLocation: f,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) > p) break;
		v = S;
	}
	let S = {
		isMatch: m >= 0,
		score: Math.max(.001, y)
	};
	if (h) {
		let e = convertMaskToIndices(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function createPatternAlphabet(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var stripDiacritics = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), BitapSearch = class {
	constructor(e, { location: t = Config.location, threshold: n = Config.threshold, distance: r = Config.distance, includeMatches: i = Config.includeMatches, findAllMatches: a = Config.findAllMatches, minMatchCharLength: o = Config.minMatchCharLength, isCaseSensitive: s = Config.isCaseSensitive, ignoreDiacritics: c = Config.ignoreDiacritics, ignoreLocation: l = Config.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		}, e = s ? e : e.toLowerCase(), e = c ? stripDiacritics(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: createPatternAlphabet(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > MAX_BITS) {
			let e = 0, t = d % MAX_BITS, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, MAX_BITS), e), e += MAX_BITS;
			if (t) {
				let e = d - MAX_BITS;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? stripDiacritics(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = search(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && (u = [...u, ...g]);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = u), p;
	}
}, BaseMatch = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return getMatch(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return getMatch(e, this.singleRegex);
	}
	search() {}
};
function getMatch(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var ExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "exact";
	}
	static get multiRegex() {
		return /^="(.*)"$/;
	}
	static get singleRegex() {
		return /^=(.*)$/;
	}
	search(e) {
		let t = e === this.pattern;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, InverseExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"$/;
	}
	static get singleRegex() {
		return /^!(.*)$/;
	}
	search(e) {
		let t = e.indexOf(this.pattern) === -1;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, PrefixExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "prefix-exact";
	}
	static get multiRegex() {
		return /^\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^\^(.*)$/;
	}
	search(e) {
		let t = e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, InversePrefixExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-prefix-exact";
	}
	static get multiRegex() {
		return /^!\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^!\^(.*)$/;
	}
	search(e) {
		let t = !e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, SuffixExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "suffix-exact";
	}
	static get multiRegex() {
		return /^"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^(.*)\$$/;
	}
	search(e) {
		let t = e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [e.length - this.pattern.length, e.length - 1]
		};
	}
}, InverseSuffixExactMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-suffix-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^!(.*)\$$/;
	}
	search(e) {
		let t = !e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, FuzzyMatch = class extends BaseMatch {
	constructor(e, { location: t = Config.location, threshold: n = Config.threshold, distance: r = Config.distance, includeMatches: i = Config.includeMatches, findAllMatches: a = Config.findAllMatches, minMatchCharLength: o = Config.minMatchCharLength, isCaseSensitive: s = Config.isCaseSensitive, ignoreDiacritics: c = Config.ignoreDiacritics, ignoreLocation: l = Config.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new BitapSearch(e, {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		});
	}
	static get type() {
		return "fuzzy";
	}
	static get multiRegex() {
		return /^"(.*)"$/;
	}
	static get singleRegex() {
		return /^(.*)$/;
	}
	search(e) {
		return this._bitapSearch.searchIn(e);
	}
}, IncludeMatch = class extends BaseMatch {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "include";
	}
	static get multiRegex() {
		return /^'"(.*)"$/;
	}
	static get singleRegex() {
		return /^'(.*)$/;
	}
	search(e) {
		let t = 0, n, r = [], i = this.pattern.length;
		for (; (n = e.indexOf(this.pattern, t)) > -1;) t = n + i, r.push([n, t - 1]);
		let a = !!r.length;
		return {
			isMatch: a,
			score: a ? 0 : 1,
			indices: r
		};
	}
}, searchers = [
	ExactMatch,
	IncludeMatch,
	PrefixExactMatch,
	InversePrefixExactMatch,
	InverseSuffixExactMatch,
	SuffixExactMatch,
	InverseExactMatch,
	FuzzyMatch
], searchersLen = searchers.length, SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, OR_TOKEN = "|";
function parseQuery(e, t = {}) {
	return e.split(OR_TOKEN).map((e) => {
		let n = e.trim().split(SPACE_RE).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < searchersLen;) {
				let e = searchers[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < searchersLen;) {
				let e = searchers[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]), ExtendedSearch = class {
	constructor(e, { isCaseSensitive: t = Config.isCaseSensitive, ignoreDiacritics: n = Config.ignoreDiacritics, includeMatches: r = Config.includeMatches, minMatchCharLength: i = Config.minMatchCharLength, ignoreLocation: a = Config.ignoreLocation, findAllMatches: o = Config.findAllMatches, location: s = Config.location, threshold: c = Config.threshold, distance: l = Config.distance } = {}) {
		this.query = null, this.options = {
			isCaseSensitive: t,
			ignoreDiacritics: n,
			includeMatches: r,
			minMatchCharLength: i,
			findAllMatches: o,
			ignoreLocation: a,
			location: s,
			threshold: c,
			distance: l
		}, e = t ? e : e.toLowerCase(), e = n ? stripDiacritics(e) : e, this.pattern = e, this.query = parseQuery(this.pattern, this.options);
	}
	static condition(e, t) {
		return t.useExtendedSearch;
	}
	searchIn(e) {
		let t = this.query;
		if (!t) return {
			isMatch: !1,
			score: 1
		};
		let { includeMatches: n, isCaseSensitive: r, ignoreDiacritics: i } = this.options;
		e = r ? e : e.toLowerCase(), e = i ? stripDiacritics(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						MultiMatchSet.has(e) ? o = [...o, ...l] : o.push(l);
					}
				} else {
					s = 0, a = 0, o.length = 0;
					break;
				}
			}
			if (a) {
				let e = {
					isMatch: !0,
					score: s / a
				};
				return n && (e.indices = o), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, registeredSearchers = [];
function register(...e) {
	registeredSearchers.push(...e);
}
function createSearcher(e, t) {
	for (let n = 0, r = registeredSearchers.length; n < r; n += 1) {
		let r = registeredSearchers[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new BitapSearch(e, t);
}
var LogicalOperator = {
	AND: "$and",
	OR: "$or"
}, KeyType = {
	PATH: "$path",
	PATTERN: "$val"
}, isExpression = (e) => !!(e[LogicalOperator.AND] || e[LogicalOperator.OR]), isPath = (e) => !!e[KeyType.PATH], isLeaf = (e) => !isArray(e) && isObject(e) && !isExpression(e), convertToExplicit = (e) => ({ [LogicalOperator.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function parse(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = isPath(e);
		if (!a && i.length > 1 && !isExpression(e)) return r(convertToExplicit(e));
		if (isLeaf(e)) {
			let r = a ? e[KeyType.PATH] : i[0], o = a ? e[KeyType.PATTERN] : e[r];
			if (!isString(o)) throw Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(r));
			let s = {
				keyId: createKeyId(r),
				pattern: o
			};
			return n && (s.searcher = createSearcher(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			isArray(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return isExpression(e) || (e = convertToExplicit(e)), r(e);
}
function computeScore(e, { ignoreFieldNorm: t = Config.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function transformMatches(e, t) {
	let n = e.matches;
	t.matches = [], isDefined(n) && n.forEach((e) => {
		if (!isDefined(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function transformScore(e, t) {
	t.score = e.score;
}
function format(e, t, { includeMatches: n = Config.includeMatches, includeScore: r = Config.includeScore } = {}) {
	let i = [];
	return n && i.push(transformMatches), r && i.push(transformScore), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var Fuse = class {
	constructor(e, t = {}, n) {
		this.options = {
			...Config,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new KeyStore(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof FuseIndex)) throw Error(INCORRECT_INDEX_TYPE);
		this._myIndex = t || createIndex(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		isDefined(e) && (this._docs.push(e), this._myIndex.add(e));
	}
	remove(e = () => !1) {
		let t = [];
		for (let n = 0, r = this._docs.length; n < r; n += 1) {
			let i = this._docs[n];
			e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
		}
		return t;
	}
	removeAt(e) {
		this._docs.splice(e, 1), this._myIndex.removeAt(e);
	}
	getIndex() {
		return this._myIndex;
	}
	search(e, { limit: t = -1 } = {}) {
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = isString(e) ? isString(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return computeScore(s, { ignoreFieldNorm: o }), i && s.sort(a), isNumber(t) && t > -1 && (s = s.slice(0, t)), format(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = createSearcher(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!isDefined(e)) return;
			let { isMatch: a, score: o, indices: s } = t.searchIn(e);
			a && r.push({
				item: e,
				idx: n,
				matches: [{
					score: o,
					value: e,
					norm: i,
					indices: s
				}]
			});
		}), r;
	}
	_searchLogical(e) {
		let t = parse(e, this.options), n = (e, t, r) => {
			if (!e.children) {
				let { keyId: n, searcher: i } = e, a = this._findMatches({
					key: this._keyStore.get(n),
					value: this._myIndex.getValueForItemAtKeyId(t, n),
					searcher: i
				});
				return a && a.length ? [{
					idx: r,
					item: t,
					matches: a
				}] : [];
			}
			let i = [];
			for (let a = 0, o = e.children.length; a < o; a += 1) {
				let o = e.children[a], s = n(o, t, r);
				if (s.length) i.push(...s);
				else if (e.operator === LogicalOperator.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (isDefined(e)) {
				let o = n(t, e, r);
				o.length && (i[r] || (i[r] = {
					idx: r,
					item: e,
					matches: []
				}, a.push(i[r])), o.forEach(({ matches: e }) => {
					i[r].matches.push(...e);
				}));
			}
		}), a;
	}
	_searchObjectList(e) {
		let t = createSearcher(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!isDefined(e)) return;
			let a = [];
			n.forEach((n, r) => {
				a.push(...this._findMatches({
					key: n,
					value: e[r],
					searcher: t
				}));
			}), a.length && i.push({
				idx: r,
				item: e,
				matches: a
			});
		}), i;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!isDefined(t)) return [];
		let r = [];
		if (isArray(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!isDefined(t)) return;
			let { isMatch: o, score: s, indices: c } = n.searchIn(t);
			o && r.push({
				score: s,
				key: e,
				value: t,
				idx: i,
				norm: a,
				indices: c
			});
		});
		else {
			let { v: i, n: a } = t, { isMatch: o, score: s, indices: c } = n.searchIn(i);
			o && r.push({
				score: s,
				key: e,
				value: i,
				norm: a,
				indices: c
			});
		}
		return r;
	}
};
Fuse.version = "7.1.0", Fuse.createIndex = createIndex, Fuse.parseIndex = parseIndex, Fuse.config = Config, Fuse.parseQuery = parse, register(ExtendedSearch);
var Module$2 = quill_default.import("core/module"), ShortNameEmoji = class extends Module$2 {
	constructor(e, t) {
		super(e, t), this.emojiList = t.emojiList, this.fuse = new Fuse(t.emojiList, t.fuse), this.quill = e, this.onClose = t.onClose, this.onOpen = t.onOpen, this.container = document.createElement("ul"), this.container.classList.add("emoji_completions"), this.quill.container.appendChild(this.container), this.container.style.position = "absolute", this.container.style.display = "none", this.onSelectionChange = this.maybeUnfocus.bind(this), this.onTextChange = this.update.bind(this), this.open = !1, this.atIndex = null, this.focusedButton = null, this.isWhiteSpace = function(e) {
			var t = !1;
			return /\s/.test(e) && (t = !0), t;
		}, e.keyboard.addBinding({
			key: 186,
			shiftKey: !0
		}, this.triggerPicker.bind(this)), e.keyboard.addBinding({
			key: 59,
			shiftKey: !0
		}, this.triggerPicker.bind(this)), e.keyboard.addBinding({
			key: 39,
			collapsed: !0
		}, this.handleArrow.bind(this)), e.keyboard.addBinding({
			key: 40,
			collapsed: !0
		}, this.handleArrow.bind(this));
	}
	triggerPicker(e, t) {
		if (this.open) return !0;
		e.length > 0 && this.quill.deleteText(e.index, e.length, quill_default.sources.USER), this.quill.insertText(e.index, ":", "emoji-shortname", quill_default.sources.USER);
		let n = this.quill.getBounds(e.index);
		this.quill.setSelection(e.index + 1, quill_default.sources.SILENT), this.atIndex = e.index, n.left + 250 > this.quill.container.offsetWidth ? this.container.style.left = n.left - 250 + "px" : this.container.style.left = n.left + "px", this.container.style.top = n.top + n.height + "px", this.open = !0, this.quill.on("text-change", this.onTextChange), this.quill.once("selection-change", this.onSelectionChange), this.onOpen && this.onOpen();
	}
	handleArrow() {
		if (!this.open) return !0;
		this.buttons[0].classList.remove("emoji-active"), this.buttons[0].focus(), this.buttons.length > 1 && this.buttons[1].focus();
	}
	update() {
		let e = this.quill.getSelection().index;
		if (this.atIndex >= e) return this.close(null);
		this.query = this.quill.getText(this.atIndex + 1, e - this.atIndex - 1);
		try {
			if (event && this.isWhiteSpace(this.query)) {
				this.close(null);
				return;
			}
		} catch (e) {
			console.warn(e);
		}
		this.query = this.query.trim();
		let t = this.fuse.search(this.query);
		if (t.sort(function(e, t) {
			return e.emoji_order - t.emoji_order;
		}), this.query.length < this.options.fuse.minMatchCharLength || t.length === 0) {
			this.container.style.display = "none";
			return;
		}
		t.length > 15 && (t = t.slice(0, 15)), this.renderCompletions(t);
	}
	maybeUnfocus() {
		this.container.querySelector("*:focus") || this.close(null);
	}
	renderCompletions(e) {
		try {
			if (event) {
				if (event.key === "Enter" || event.keyCode === 13) {
					this.close(e[0], 1), this.container.style.display = "none";
					return;
				} else if (event.key === "Tab" || event.keyCode === 9) {
					this.quill.disable(), this.buttons[0].classList.remove("emoji-active"), this.buttons[1].focus();
					return;
				}
			}
			if (event) return;
		} catch (e) {
			console.warn(e);
		}
		for (; this.container.firstChild;) this.container.removeChild(this.container.firstChild);
		let t = Array(e.length);
		this.buttons = t;
		let n = (e, n) => (r) => {
			if (r.key === "ArrowRight" || r.keyCode === 39) r.preventDefault(), t[Math.min(t.length - 1, e + 1)].focus();
			else if (r.key === "Tab" || r.keyCode === 9) {
				if (r.preventDefault(), e + 1 === t.length) {
					t[0].focus();
					return;
				}
				t[Math.min(t.length - 1, e + 1)].focus();
			} else r.key === "ArrowLeft" || r.keyCode === 37 ? (r.preventDefault(), t[Math.max(0, e - 1)].focus()) : r.key === "ArrowDown" || r.keyCode === 40 ? (r.preventDefault(), t[Math.min(t.length - 1, e + 1)].focus()) : r.key === "ArrowUp" || r.keyCode === 38 ? (r.preventDefault(), t[Math.max(0, e - 1)].focus()) : (r.key === "Enter" || r.keyCode === 13 || r.key === " " || r.keyCode === 32 || r.key === "Tab" || r.keyCode === 9) && (r.preventDefault(), this.quill.enable(), this.close(n));
		};
		if (e.forEach((e, r) => {
			let i = makeElement$1("li", {}, makeElement$1("button", { type: "button" }, makeElement$1("span", {
				className: "button-emoji ap ap-" + e.name,
				innerHTML: e.code_decimal
			}), makeElement$1("span", { className: "unmatched" }, e.shortname)));
			this.container.appendChild(i), t[r] = i.firstChild, t[r].addEventListener("keydown", n(r, e)), t[r].addEventListener("mousedown", () => this.close(e)), t[r].addEventListener("focus", () => this.focusedButton = r), t[r].addEventListener("unfocus", () => this.focusedButton = null);
		}), this.container.style.display = "block", this.quill.container.classList.contains("top-emoji")) {
			let e = this.container.querySelectorAll("li"), t;
			for (t = 0; t < e.length; t++) e[t].style.display = "block";
			let n = window.innerHeight;
			this.quill.container.getBoundingClientRect().top > n / 2 && this.container.offsetHeight > 0 && (this.container.style.top = "-" + this.container.offsetHeight + "px");
		}
		t[0].classList.add("emoji-active");
	}
	close(e, t = 0) {
		for (this.quill.enable(), this.container.style.display = "none"; this.container.firstChild;) this.container.removeChild(this.container.firstChild);
		this.quill.off("selection-change", this.onSelectionChange), this.quill.off("text-change", this.onTextChange), e && (this.quill.deleteText(this.atIndex, this.query.length + 1 + t, quill_default.sources.USER), this.quill.insertEmbed(this.atIndex, "emoji", e, quill_default.sources.USER), setTimeout(() => this.quill.setSelection(this.atIndex + 1), 0)), this.quill.focus(), this.open = !1, this.onClose && this.onClose(e);
	}
};
ShortNameEmoji.DEFAULTS = {
	emojiList: emoji_list_default,
	fuse: {
		shouldSort: !0,
		threshold: .1,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: ["shortname"]
	}
};
function makeElement$1(e, t, ...n) {
	let r = document.createElement(e);
	return Object.keys(t).forEach((e) => r[e] = t[e]), n.forEach((e) => {
		typeof e == "string" && (e = document.createTextNode(e)), r.appendChild(e);
	}), r;
}
var module_emoji_default = ShortNameEmoji, Module$1 = quill_default.import("core/module"), ToolbarEmoji = class extends Module$1 {
	constructor(e, t) {
		super(e, t), this.quill = e, this.toolbar = e.getModule("toolbar"), this.toolbar !== void 0 && this.toolbar.addHandler("emoji", this.checkPaletteExist);
		let n = document.getElementsByClassName("ql-emoji");
		n && [].slice.call(n).forEach(function(e) {
			e.innerHTML = t.buttonIcon;
		});
	}
	checkPaletteExist() {
		let e = this.quill;
		fn_checkDialogOpen(e), this.quill.on("text-change", function(t, n, r) {
			r === "user" && (fn_close$1(), fn_updateRange$1(e));
		});
	}
};
ToolbarEmoji.DEFAULTS = { buttonIcon: "&#128515;" };
function fn_close$1() {
	let e = document.getElementById("emoji-palette");
	document.getElementById("emoji-close-div").style.display = "none", e && e.remove();
}
function fn_checkDialogOpen(e) {
	let t = document.getElementById("emoji-palette");
	t ? t.remove() : fn_showEmojiPalette(e);
}
function fn_updateRange$1(e) {
	return e.getSelection();
}
function fn_showEmojiPalette(e) {
	let t = document.createElement("div"), n = e.getSelection(), r = e.getBounds(n.index);
	e.container.appendChild(t);
	let i = r.left + 250;
	t.id = "emoji-palette", t.style.top = 10 + r.top + r.height + "px", i > e.container.offsetWidth ? t.style.left = r.left - 250 + "px" : t.style.left = r.left + "px";
	let a = document.createElement("div");
	a.id = "tab-toolbar", t.appendChild(a);
	let o = document.createElement("div");
	o.id = "tab-panel", t.appendChild(o);
	let s = [
		{
			type: "p",
			name: "people",
			content: "<div class=\"i-people\"></div>"
		},
		{
			type: "n",
			name: "nature",
			content: "<div class=\"i-nature\"></div>"
		},
		{
			type: "d",
			name: "food",
			content: "<div class=\"i-food\"></div>"
		},
		{
			type: "s",
			name: "symbols",
			content: "<div class=\"i-symbols\"></div>"
		},
		{
			type: "a",
			name: "activity",
			content: "<div class=\"i-activity\"></div>"
		},
		{
			type: "t",
			name: "travel",
			content: "<div class=\"i-travel\"></div>"
		},
		{
			type: "o",
			name: "objects",
			content: "<div class=\"i-objects\"></div>"
		},
		{
			type: "f",
			name: "flags",
			content: "<div class=\"i-flags\"></div>"
		}
	], c = document.createElement("ul");
	if (a.appendChild(c), document.getElementById("emoji-close-div") === null) {
		let e = document.createElement("div");
		e.id = "emoji-close-div", e.addEventListener("click", fn_close$1, !1), document.getElementsByTagName("body")[0].appendChild(e);
	} else document.getElementById("emoji-close-div").style.display = "block";
	s.map(function(t) {
		let n = document.createElement("li");
		n.classList.add("emoji-tab"), n.classList.add("filter-" + t.name), n.innerHTML = t.content, n.dataset.filter = t.type, c.appendChild(n);
		let r = document.querySelector(".filter-" + t.name);
		r.addEventListener("click", function() {
			let t = document.querySelector(".active");
			t && t.classList.remove("active"), r.classList.toggle("active"), fn_updateEmojiContainer(r, o, e);
		});
	}), fn_emojiPanelInit$1(o, e);
}
function fn_emojiPanelInit$1(e, t) {
	fn_emojiElementsToPanel$1("p", e, t), document.querySelector(".filter-people").classList.add("active");
}
function fn_emojiElementsToPanel$1(e, t, n) {
	let r = new Fuse(emoji_list_default, {
		shouldSort: !0,
		matchAllTokens: !0,
		threshold: .3,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 3,
		keys: ["category"]
	}).search(e);
	r.sort(function(e, t) {
		return e.emoji_order - t.emoji_order;
	}), n.focus();
	let i = fn_updateRange$1(n);
	r.map(function({ item: e }) {
		let r = document.createElement("span"), a = document.createTextNode(e.shortname);
		r.appendChild(a), r.classList.add("bem"), r.classList.add("bem-" + e.name), r.classList.add("ap"), r.classList.add("ap-" + e.name), r.innerHTML = e.code_decimal, console.log(e), t.appendChild(r);
		let o = document.querySelector(".bem-" + e.name);
		o && o.addEventListener("click", function() {
			makeElement("span", {
				className: "ico",
				innerHTML: "" + e.code_decimal + " "
			}).innerHTML, n.insertEmbed(i.index, "emoji", e, quill_default.sources.USER), setTimeout(() => n.setSelection(i.index + 1), 0), fn_close$1();
		});
	});
}
function fn_updateEmojiContainer(e, t, n) {
	for (; t.firstChild;) t.removeChild(t.firstChild);
	let r = e.dataset.filter;
	fn_emojiElementsToPanel$1(r, t, n);
}
function makeElement(e, t, ...n) {
	let r = document.createElement(e);
	return Object.keys(t).forEach((e) => r[e] = t[e]), n.forEach((e) => {
		typeof e == "string" && (e = document.createTextNode(e)), r.appendChild(e);
	}), r;
}
var module_toolbar_emoji_default = ToolbarEmoji, Module = quill_default.import("core/module"), TextAreaEmoji = class extends Module {
	constructor(e, t) {
		super(e, t), this.quill = e, this.container = document.createElement("div"), this.container.classList.add("textarea-emoji-control"), this.container.style.position = "absolute", this.container.innerHTML = t.buttonIcon, this.quill.container.appendChild(this.container), this.container.addEventListener("click", this.checkEmojiBoxExist.bind(this), !1);
	}
	checkEmojiBoxExist() {
		let e = document.getElementById("textarea-emoji");
		if (e) e.remove();
		else {
			let e = document.createElement("div");
			e.id = "textarea-emoji", this.quill.container.appendChild(e);
			let n = document.createElement("div");
			n.id = "tab-toolbar", e.appendChild(n);
			var t = [
				{
					type: "p",
					name: "people",
					content: "<div class=\"i-people\"></div>"
				},
				{
					type: "n",
					name: "nature",
					content: "<div class=\"i-nature\"></div>"
				},
				{
					type: "d",
					name: "food",
					content: "<div class=\"i-food\"></div>"
				},
				{
					type: "s",
					name: "symbols",
					content: "<div class=\"i-symbols\"></div>"
				},
				{
					type: "a",
					name: "activity",
					content: "<div class=\"i-activity\"></div>"
				},
				{
					type: "t",
					name: "travel",
					content: "<div class=\"i-travel\"></div>"
				},
				{
					type: "o",
					name: "objects",
					content: "<div class=\"i-objects\"></div>"
				},
				{
					type: "f",
					name: "flags",
					content: "<div class=\"i-flags\"></div>"
				}
			];
			let r = document.createElement("ul");
			if (n.appendChild(r), document.getElementById("emoji-close-div") === null) {
				let e = document.createElement("div");
				e.id = "emoji-close-div", e.addEventListener("click", fn_close, !1), document.getElementsByTagName("body")[0].appendChild(e);
			} else document.getElementById("emoji-close-div").style.display = "block";
			let i = document.createElement("div");
			i.id = "tab-panel", e.appendChild(i);
			let a = this.quill;
			t.map(function(e) {
				let t = document.createElement("li");
				t.classList.add("emoji-tab"), t.classList.add("filter-" + e.name), t.innerHTML = e.content, t.dataset.filter = e.type, r.appendChild(t);
				let n = document.querySelector(".filter-" + e.name);
				n.addEventListener("click", function() {
					let e = document.getElementById("textarea-emoji"), t = e && e.querySelector(".active");
					for (t && t.classList.remove("active"), n.classList.toggle("active"); i.firstChild;) i.removeChild(i.firstChild);
					let r = n.dataset.filter;
					fn_emojiElementsToPanel(r, i, a);
				});
			});
			let o = window.innerHeight;
			this.quill.container.getBoundingClientRect().top > o / 2 && (e.style.top = "-250px"), fn_emojiPanelInit(i, this.quill);
		}
	}
};
TextAreaEmoji.DEFAULTS = { buttonIcon: "<svg viewbox=\"0 0 18 18\"><circle class=\"ql-fill\" cx=\"7\" cy=\"7\" r=\"1\"></circle><circle class=\"ql-fill\" cx=\"11\" cy=\"7\" r=\"1\"></circle><path class=\"ql-stroke\" d=\"M7,10a2,2,0,0,0,4,0H7Z\"></path><circle class=\"ql-stroke\" cx=\"9\" cy=\"9\" r=\"6\"></circle></svg>" };
function fn_close() {
	let e = document.getElementById("textarea-emoji");
	document.getElementById("emoji-close-div").style.display = "none", e && e.remove();
}
function fn_updateRange(e) {
	return e.getSelection();
}
function fn_emojiPanelInit(e, t) {
	fn_emojiElementsToPanel("p", e, t), document.querySelector(".filter-people").classList.add("active");
}
function fn_emojiElementsToPanel(e, t, n) {
	let r = new Fuse(emoji_list_default, {
		shouldSort: !0,
		matchAllTokens: !0,
		threshold: .3,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 3,
		keys: ["category"]
	}).search(e);
	r.sort(function(e, t) {
		return e.emoji_order - t.emoji_order;
	}), n.focus();
	let i = fn_updateRange(n);
	r.map(function(e) {
		let r = document.createElement("span"), a = document.createTextNode(e.shortname);
		r.appendChild(a), r.classList.add("bem"), r.classList.add("bem-" + e.name), r.classList.add("ap"), r.classList.add("ap-" + e.name), r.innerHTML = "" + e.code_decimal + " ", t.appendChild(r);
		let o = document.querySelector(".bem-" + e.name);
		o && o.addEventListener("click", function() {
			n.insertEmbed(i.index, "emoji", e, quill_default.sources.USER), setTimeout(() => n.setSelection(i.index + 1), 0), fn_close();
		});
	});
}
var module_textarea_emoji_default = TextAreaEmoji;
quill_default.register({
	"formats/emoji": format_emoji_blot_default,
	"modules/emoji-shortname": module_emoji_default,
	"modules/emoji-toolbar": module_toolbar_emoji_default,
	"modules/emoji-textarea": module_textarea_emoji_default
}, !0);
var quill_emoji_default = {
	EmojiBlot: format_emoji_blot_default,
	ShortNameEmoji: module_emoji_default,
	ToolbarEmoji: module_toolbar_emoji_default,
	TextAreaEmoji: module_textarea_emoji_default
};
export { quill_emoji_default as default };
