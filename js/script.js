'use strict';

const padString = function (str, length, symbol, boolean = true){
    if (str == undefined) return 'some error in string data';
    if (length === undefined) return 'some error in length data';
    if (str.length < length && symbol === undefined) return 'some error in symbol data';

    let string = str.substring(0,length);

    if (boolean === true && str.length < length) {
        string = string + symbol.repeat (length - str.length );
    } else if (boolean === false && str.length < length) {
        string = symbol.repeat (length - str.length ) + string;
    }

   return string;
}
console.log(padString('hello', 22,'*', false));