class Integer {
  constructor (low, high) {
    this.low = low | 0
    this.high = high | 0
  }
  inSafeRange () { return this.greaterThanOrEqual(Integer.MIN_SAFE_VALUE) && this.lessThanOrEqual(Integer.MAX_SAFE_VALUE) }
  toInt () { return this.low }
  toNumber () { return this.high * TWO_PWR_32_DBL + (this.low >>> 0) }
  toString (radix) {
    radix = radix || 10
    if (radix < 2 || radix > 36) {
      throw RangeError('radix out of range: ' + radix)
    }
    if (this.isZero()) {
      return '0'
    }
    var rem
    if (this.isNegative()) {
      if (this.equals(Integer.MIN_VALUE)) {
        var radixInteger = Integer.fromNumber(radix)
        var div = this.div(radixInteger)
        rem = div.multiply(radixInteger).subtract(this)
        return div.toString(radix) + rem.toInt().toString(radix)
      } else {
        return '-' + this.negate().toString(radix)
      }
    }

    var radixToPower = Integer.fromNumber(Math.pow(radix, 6))
    rem = this
    var result = ''
    while (true) {
      var remDiv = rem.div(radixToPower)
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt() >>> 0
      var digits = intval.toString(radix)
      rem = remDiv
      if (rem.isZero()) {
        return digits + result
      } else {
        while (digits.length < 6) {
          digits = '0' + digits
        }
        result = '' + digits + result
      }
    }
  }

  getHighBits () { return this.high }
  getLowBits () { return this.low }

  getNumBitsAbs () {
    if (this.isNegative()) {
      return this.equals(Integer.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs()
    }
    var val = this.high !== 0 ? this.high : this.low
    for (var bit = 31; bit > 0; bit--) {
      if ((val & (1 << bit)) !== 0) {
        break
      }
    }
    return this.high !== 0 ? bit + 33 : bit + 1
  }

  isZero () {
    return this.high === 0 && this.low === 0
  }

  isNegative () {
    return this.high < 0
  }
  isPositive () {
    return this.high >= 0
  }
  isOdd () { return (this.low & 1) === 1 }
  isEven () { return (this.low & 1) === 0 }

  equals (other) {
    if (!Integer.isInteger(other)) {
      other = Integer.fromValue(other)
    }
    return this.high === other.high && this.low === other.low
  }
  notEquals (other) { return !this.equals(other) }
  lessThan (other) { return this.compare(other) < 0 }
  lessThanOrEqual (other) { return this.compare(other) <= 0 }
  greaterThan (other) { return this.compare(other) > 0 }
  greaterThanOrEqual (other) { return this.compare(other) >= 0 }

  compare (other) {
    if (!Integer.isInteger(other)) {
      other = Integer.fromValue(other)
    }
    if (this.equals(other)) {
      return 0
    }
    var thisNeg = this.isNegative()
    var otherNeg = other.isNegative()
    if (thisNeg && !otherNeg) {
      return -1
    }
    if (!thisNeg && otherNeg) {
      return 1
    }
    return this.subtract(other).isNegative() ? -1 : 1
  }

  negate () {
    if (this.equals(Integer.MIN_VALUE)) {
      return Integer.MIN_VALUE
    }
    return this.not().add(Integer.ONE)
  }

  add (addend) {
    if (!Integer.isInteger(addend)) {
      addend = Integer.fromValue(addend)
    }

    var a48 = this.high >>> 16
    var a32 = this.high & 0xFFFF
    var a16 = this.low >>> 16
    var a00 = this.low & 0xFFFF

    var b48 = addend.high >>> 16
    var b32 = addend.high & 0xFFFF
    var b16 = addend.low >>> 16
    var b00 = addend.low & 0xFFFF

    var c48 = 0
    var c32 = 0
    var c16 = 0
    var c00 = 0
    c00 += a00 + b00
    c16 += c00 >>> 16
    c00 &= 0xFFFF
    c16 += a16 + b16
    c32 += c16 >>> 16
    c16 &= 0xFFFF
    c32 += a32 + b32
    c48 += c32 >>> 16
    c32 &= 0xFFFF
    c48 += a48 + b48
    c48 &= 0xFFFF
    return Integer.fromBits((c16 << 16) | c00, (c48 << 16) | c32)
  }

  subtract (subtrahend) {
    if (!Integer.isInteger(subtrahend)) {
      subtrahend = Integer.fromValue(subtrahend)
    }
    return this.add(subtrahend.negate())
  }

  multiply (multiplier) {
    if (this.isZero()) {
      return Integer.ZERO
    }
    if (!Integer.isInteger(multiplier)) {
      multiplier = Integer.fromValue(multiplier)
    }
    if (multiplier.isZero()) {
      return Integer.ZERO
    }
    if (this.equals(Integer.MIN_VALUE)) {
      return multiplier.isOdd() ? Integer.MIN_VALUE : Integer.ZERO
    }
    if (multiplier.equals(Integer.MIN_VALUE)) {
      return this.isOdd() ? Integer.MIN_VALUE : Integer.ZERO
    }

    if (this.isNegative()) {
      if (multiplier.isNegative()) {
        return this.negate().multiply(multiplier.negate())
      } else {
        return this.negate().multiply(multiplier).negate()
      }
    } else if (multiplier.isNegative()) {
      return this.multiply(multiplier.negate()).negate()
    }

    if (this.lessThan(TWO_PWR_24) && multiplier.lessThan(TWO_PWR_24)) {
      return Integer.fromNumber(this.toNumber() * multiplier.toNumber())
    }

    var a48 = this.high >>> 16
    var a32 = this.high & 0xFFFF
    var a16 = this.low >>> 16
    var a00 = this.low & 0xFFFF

    var b48 = multiplier.high >>> 16
    var b32 = multiplier.high & 0xFFFF
    var b16 = multiplier.low >>> 16
    var b00 = multiplier.low & 0xFFFF

    var c48 = 0
    var c32 = 0
    var c16 = 0
    var c00 = 0
    c00 += a00 * b00
    c16 += c00 >>> 16
    c00 &= 0xFFFF
    c16 += a16 * b00
    c32 += c16 >>> 16
    c16 &= 0xFFFF
    c16 += a00 * b16
    c32 += c16 >>> 16
    c16 &= 0xFFFF
    c32 += a32 * b00
    c48 += c32 >>> 16
    c32 &= 0xFFFF
    c32 += a16 * b16
    c48 += c32 >>> 16
    c32 &= 0xFFFF
    c32 += a00 * b32
    c48 += c32 >>> 16
    c32 &= 0xFFFF
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48
    c48 &= 0xFFFF
    return Integer.fromBits((c16 << 16) | c00, (c48 << 16) | c32)
  }

  div (divisor) {
    if (!Integer.isInteger(divisor)) {
      divisor = Integer.fromValue(divisor)
    }
    if (divisor.isZero()) {
      throw Error('division by zero')
    }
    if (this.isZero()) {
      return Integer.ZERO
    }
    var approx
    var rem
    var res
    if (this.equals(Integer.MIN_VALUE)) {
      if (divisor.equals(Integer.ONE) || divisor.equals(Integer.NEG_ONE)) {
        return Integer.MIN_VALUE
      } else if (divisor.equals(Integer.MIN_VALUE)) {
        return Integer.ONE
      } else {
        var halfThis = this.shiftRight(1)
        approx = halfThis.div(divisor).shiftLeft(1)
        if (approx.equals(Integer.ZERO)) {
          return divisor.isNegative() ? Integer.ONE : Integer.NEG_ONE
        } else {
          rem = this.subtract(divisor.multiply(approx))
          res = approx.add(rem.div(divisor))
          return res
        }
      }
    } else if (divisor.equals(Integer.MIN_VALUE)) {
      return Integer.ZERO
    }
    if (this.isNegative()) {
      if (divisor.isNegative()) {
        return this.negate().div(divisor.negate())
      }
      return this.negate().div(divisor).negate()
    } else if (divisor.isNegative()) {
      return this.div(divisor.negate()).negate()
    }
    res = Integer.ZERO
    rem = this
    while (rem.greaterThanOrEqual(divisor)) {
      approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()))

      var log2 = Math.ceil(Math.log(approx) / Math.LN2)
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48)
      var approxRes = Integer.fromNumber(approx)
      var approxRem = approxRes.multiply(divisor)
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta
        approxRes = Integer.fromNumber(approx)
        approxRem = approxRes.multiply(divisor)
      }
      if (approxRes.isZero()) {
        approxRes = Integer.ONE
      }
      res = res.add(approxRes)
      rem = rem.subtract(approxRem)
    }
    return res
  }

  modulo (divisor) {
    if (!Integer.isInteger(divisor)) {
      divisor = Integer.fromValue(divisor)
    }
    return this.subtract(this.div(divisor).multiply(divisor))
  }

  not () {
    return Integer.fromBits(~this.low, ~this.high)
  }

  and (other) {
    if (!Integer.isInteger(other)) {
      other = Integer.fromValue(other)
    }
    return Integer.fromBits(this.low & other.low, this.high & other.high)
  }

  or (other) {
    if (!Integer.isInteger(other)) {
      other = Integer.fromValue(other)
    }
    return Integer.fromBits(this.low | other.low, this.high | other.high)
  }

  xor (other) {
    if (!Integer.isInteger(other)) {
      other = Integer.fromValue(other)
    }
    return Integer.fromBits(this.low ^ other.low, this.high ^ other.high)
  }

  shiftLeft (numBits) {
    if (Integer.isInteger(numBits)) {
      numBits = numBits.toInt()
    }
    if ((numBits &= 63) === 0) {
      return this
    } else if (numBits < 32) {
      return Integer.fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)))
    } else {
      return Integer.fromBits(0, this.low << (numBits - 32))
    }
  }

  shiftRight (numBits) {
    if (Integer.isInteger(numBits)) {
      numBits = numBits.toInt()
    }
    if ((numBits &= 63) === 0) {
      return this
    } else if (numBits < 32) {
      return Integer.fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits)
    } else {
      return Integer.fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1)
    }
  }
}

Integer.__isInteger__ = true

Object.defineProperty(Integer.prototype, '__isInteger__', {
  value: true,
  enumerable: false,
  configurable: false
})

Integer.isInteger = function (obj) {
  return (obj && obj['__isInteger__']) === true
}

var INT_CACHE = {}

Integer.fromInt = function (value) {
  var obj, cachedObj
  value = value | 0
  if (value >= -128 && value < 128) {
    cachedObj = INT_CACHE[value]
    if (cachedObj) {
      return cachedObj
    }
  }
  obj = new Integer(value, value < 0 ? -1 : 0, false)
  if (value >= -128 && value < 128) {
    INT_CACHE[value] = obj
  }
  return obj
}

Integer.fromNumber = function (value) {
  if (isNaN(value) || !isFinite(value)) {
    return Integer.ZERO
  }
  if (value <= -TWO_PWR_63_DBL) {
    return Integer.MIN_VALUE
  }
  if (value + 1 >= TWO_PWR_63_DBL) {
    return Integer.MAX_VALUE
  }
  if (value < 0) {
    return Integer.fromNumber(-value).negate()
  }
  return new Integer((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0)
}

Integer.fromBits = function (lowBits, highBits) {
  return new Integer(lowBits, highBits)
}

Integer.fromString = function (str, radix) {
  if (str.length === 0) {
    throw Error('number format error: empty string')
  }
  if (str === 'NaN' || str === 'Infinity' || str === '+Infinity' || str === '-Infinity') {
    return Integer.ZERO
  }
  radix = radix || 10
  if (radix < 2 || radix > 36) {
    throw Error('radix out of range: ' + radix)
  }

  var p
  if ((p = str.indexOf('-')) > 0) {
    throw Error('number format error: interior "-" character: ' + str)
  } else if (p === 0) {
    return Integer.fromString(str.substring(1), radix).negate()
  }
  var radixToPower = Integer.fromNumber(Math.pow(radix, 8))

  var result = Integer.ZERO
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i)
    var value = parseInt(str.substring(i, i + size), radix)
    if (size < 8) {
      var power = Integer.fromNumber(Math.pow(radix, size))
      result = result.multiply(power).add(Integer.fromNumber(value))
    } else {
      result = result.multiply(radixToPower)
      result = result.add(Integer.fromNumber(value))
    }
  }
  return result
}

Integer.fromValue = function (val) {
  if (val instanceof Integer) {
    return val
  }
  if (typeof val === 'number') {
    return Integer.fromNumber(val)
  }
  if (typeof val === 'string') {
    return Integer.fromString(val)
  }
  return new Integer(val.low, val.high)
}

Integer.toNumber = function (val) {
  return Integer.fromValue(val).toNumber()
}

Integer.toString = function (val, radix) {
  return Integer.fromValue(val).toString(radix)
}

Integer.inSafeRange = function (val) {
  return Integer.fromValue(val).inSafeRange()
}

var TWO_PWR_16_DBL = 1 << 16
var TWO_PWR_24_DBL = 1 << 24
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2
var TWO_PWR_24 = Integer.fromInt(TWO_PWR_24_DBL)

Integer.ZERO = Integer.fromInt(0)
Integer.ONE = Integer.fromInt(1)
Integer.NEG_ONE = Integer.fromInt(-1)
Integer.MAX_VALUE = Integer.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false)
Integer.MIN_VALUE = Integer.fromBits(0, 0x80000000 | 0, false)
Integer.MIN_SAFE_VALUE = Integer.fromBits(0x1 | 0, 0xFFFFFFFFFFE00000 | 0)
Integer.MAX_SAFE_VALUE = Integer.fromBits(0xFFFFFFFF | 0, 0x1FFFFF | 0)
let int = Integer.fromValue
let isInt = Integer.isInteger
let inSafeRange = Integer.inSafeRange
let toNumber = Integer.toNumber
let toString = Integer.toString

export {
  int,
  isInt,
  inSafeRange,
  toNumber,
  toString
}

export default Integer
