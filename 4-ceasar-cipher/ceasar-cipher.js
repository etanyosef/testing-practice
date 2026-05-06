export default function ceasarCipher(string, key) {
    let result = '';

    // loop to string length
    for (let i = 0; i < string.length; i++) {
        
        let char = string[i];

        // check char is a letter
        if (char.charAt(0).match(/[a-zA-Z]/)) {
            // check if char is uppercase or lowercase then add it to result
            if (char === char.toUpperCase()) {
                let ch = String.fromCharCode((char.charCodeAt(0) + key - 65) % 26 + 65);
                result += ch;
            } else if (char === char.toLowerCase()) {
                let ch = String.fromCharCode((char.charCodeAt(0) + key-97) % 26 + 97);
                result += ch;
            }
        } else {
            result += char;
        }

    }

    return result;
}