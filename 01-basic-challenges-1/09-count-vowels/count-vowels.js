function countVowels(str) {
    const formattedStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < formattedStr.length; i++) {
        const char = formattedStr[i];

        if (
            char === 'a' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' ||
            char === 'e'
        ) {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;
