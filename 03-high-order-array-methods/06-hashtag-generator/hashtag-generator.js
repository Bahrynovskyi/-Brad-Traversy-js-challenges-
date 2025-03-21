// function generateHashtag(str) {
//     if (str.trim() === '') {
//         return false;
//     }

//     const words = str.trim().split(' ');

//     const capitalizedWords = words.map((word) => {
//         let firstLetter = word.slice(0, 1);
//         let otherWord = word.slice(1, word.length);
//         return `${firstLetter.toUpperCase()}${otherWord}`;
//     });
//     const hashtag = `#${capitalizedWords.join('')}`;
//     return hashtag > 140 ? false : hashtag;
// }


function generateHashtag(str) {
    const hashtag = str.split(' ').reduce(function (tag, word) {
        return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');

    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;

