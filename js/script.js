'use strict';

const padString = function (str, length, symbol, boolean = true){
    if (str === undefined ) return 'some error in string data';
    if (length === undefined || isNaN(length)===true) return 'some error in length data';
    if (str.length < length && symbol === undefined) return 'some error in symbol data';
    if (boolean !== Boolean(boolean)) return 'some error in boolean data';

    let string = str.substring(0,length);

    if (boolean === true && str.length < length) {
        string = string + symbol.repeat (length - str.length );
    } else if (boolean === false && str.length < length) {
        string = symbol.repeat (length - str.length ) + string;
    }

   return string;
}
console.log(padString('hello', 9,'*', true));