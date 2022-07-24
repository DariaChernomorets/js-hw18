'use strict';

const padString = function (str, length, symbol, right = true){
    if (typeof str !== 'string' ) throw new Error ('some error in string data');
    if (typeof length !== 'number' || isNaN(length)) throw new Error  ('some error in length data');
    if (str.length === length) return str;
    if (str.length > length) return str.substring(0, length);

    if (typeof symbol !== 'string' ) throw new Error  ('some error in symbol data');
    if (symbol.length > 1 )  throw new Error  ('you have entered too many symbols');

    if (typeof right !== 'boolean') throw new Error  ('some error in the side data');

    const symbols = symbol.repeat (length - str.length);

    return right ? str + symbols : symbols + str;

}
console.log(padString('hello', 10,'*', true));