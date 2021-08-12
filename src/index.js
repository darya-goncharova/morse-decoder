const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const LENGTH_LETTER = 10;
const LENGTH_SYMBOL = 2;
const CODE_DOT = "10";
const CODE_DASH = "11";

function decode(expr) {
    let arr = expr.split("");
    let result = [];

    while (arr.length) {
        let letterEncoded = arr.splice(LENGTH_LETTER * -1);
        let letterMorse = "";

        if (letterEncoded.join("") === "**********") {
            result.push(" ");
            continue;
        }

        for (i = 0; i < letterEncoded.length; i += LENGTH_SYMBOL) {
            let signCode = letterEncoded.slice(i, i + LENGTH_SYMBOL).join("");
            letterMorse += signCode === CODE_DOT ? "." : signCode === CODE_DASH ? "-" : "";
        }
        result.push(MORSE_TABLE[letterMorse]);
    }
    return result.reverse().join("");
}


module.exports = {
    decode
}